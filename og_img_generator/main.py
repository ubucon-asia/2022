
import imgkit
import sys
from bs4 import BeautifulSoup
import os
import glob
from string import Template
from concurrent.futures import ThreadPoolExecutor, as_completed

def get_og_image_metadata(file_path):
    with open(file_path, 'r') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')

    meta = soup.find_all('meta')
    meta_dict = {}
    for m in meta:
        if m.get('property', "").startswith('og_image:'):
            key = m.get('property', "").split(':')[1]
            meta_dict[key] = m.get('content', None)
    return meta_dict

def render_preview_image(bg_img_path, logo_img_path, title, output_path):
    print(f"Rendering image for {output_path}")
    with open("og_image.html", 'r') as f:
        html = Template(f.read()).substitute(
            background_image=os.path.abspath(bg_img_path), 
            image_path=os.path.abspath(logo_img_path), 
            title=title)
        imgkit.from_string(html, output_path, options={
            "width": 1200,
            "height": 600,
            "enable-local-file-access": "",
        })

executor = ThreadPoolExecutor(max_workers=20)
tasks = list()
file_list = glob.glob("../public/**/*.html", recursive=True)
print(f"{len(file_list)} images to generate...")
for file in file_list:
    print(f"Submitting image job for {file}")
    try:
        meta_dict = get_og_image_metadata(file)
        future = executor.submit(render_preview_image, "ogimage.png",
            "../themes/ubuconasia/static/images/uca22logo_orange.svg", meta_dict["title"], f"{file}.jpg")
        tasks.append(future)
    except:
        pass
for result in as_completed(tasks):
    print(result.result())
print(f"Done generating {len(file_list)} images!")

