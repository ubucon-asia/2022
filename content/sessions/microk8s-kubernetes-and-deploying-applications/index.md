---
title: MicroK8s, Kubernetes and deploying Applications
date: 2022-11-26T14:30:00+09:00
end: 2022-11-26T15:15:00+09:00
room: 1 # 1: Intl room, 2: Workshop, 3: BoF
category: 2
#1: Desktop 데스크탑
#2: Cloud and Infrastructure 클라우드와 인프라
#3: Windows Subsystem for Linux (WSL) Linux용 Windows 하위시스템
#4: Localizations, Internationalizations, and Accessibility 지역화, 국제화 및 접근성
#5: IoT, Embedded, Robotics, Appliances 사물인터넷, 임베디드, 로보틱스, 가전
#6: Packaging 패키징
#7: Documentations, QA and Bug triage 문서화, 품질 관리 및 버그 분류
#8: Security, Compliance and Kernel 보안, 규정준수 및 커널
#9: Data and AI 데이터와 인공지능
#10: Content and Design 컨텐츠와 디지인
#11: Community, Diversity, Local Outreach and Social Context 커뮤니티, 다양성, 지역 사회 협력과 사회적 관점
featured: true # If it's true. This session will appear on main page.
lang: English
# slide: Ubucon_Subtitle_Automate.pdf
speakers: # Speaker info
    - name: Hrittik Roy
      bio: Community Engineering Intern, Harness.io
      email: hrittik12d@gmail.com # Email
      launchpad: # link to launchpad.net profile
      github:  # link to github profile
      profile: profile.png # Speaker photo
      linkurl: # Other website link url
      linklabel: # Label for linkurl
---

{{< youtube duAvWg5MU2c >}}

Kubernetes was started inside Google to provide a layer of abstraction with containers for modern infrastructure. The technology has now been adopted by the masses and has become a de-facto standard for any cloud-native application. The open-source system provides management, deployment, and scaling of your containers.

This workshop uses microk8s, the simplest production-grade conformant K8s that you can install on a Kubernetes cluster locally to deploy a simple Python application that you create first using manifests and then using Helm charts, which you will create.

This process may seem daunting, but I promise it is not! Python is a great language for beginners and experienced programmers alike. And once you get the hang of it, deploying your application with Docker and Kubernetes is a breeze. 

So, let's get started! I will first show you how to create a simple Python application. Then, we will dockerize it and run it as a container. After that, we will push it to our built-in image registry from microk8s and deploy it to Kubernetes. Finally, we use the helm support in microk8s to create helm charts to help manage and deploy our application while understanding Helm. 

## Prior knowledge
- Working knowledge of kubectl
- A bit of Python or any general programming language 
- Some knowledge about Kubernetes and Docker

## What participants need to prepare
- A Code Editor 
- Python Installed on your machine 
- sudo permission to their devices to install microk8s
- Any cloud provider to create a Ubuntu VM and SSH if there's no sudo access to their machines

## What audience can learn from this session
After completing the workshop, attendees will understand how to create and containerize an endpoint, which in this case will be a Python endpoint. After packing your application, installing microk8s to run your cluster, enabling add-ons, and deploying your container to the cluster will be included. 

By the end of this workshop, you will have completed the Helm foundation and learned how to templatize your application by creating a helm chart, deploy your application with helm, and deploy your application image using object manifest manually with packing and playing with YAML.

## About the speaker
Hrittik is currently a Community Engineering Intern at Harness and a pre final undergrad, who has previously worked at various startups helping them scale their content efforts. He loves diving deep into distributed systems and creating articles on them and has spoken at conferences such as Azure Cloud Summit, and Kubernetes Community Days among others! His best days are when he finds ways to create impact in the communities he's a part of either by code, content, or mentorship!