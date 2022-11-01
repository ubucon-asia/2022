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
featured: false # If it's true. This session will appear on main page.
lang: 영어
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

Google에서 시작된 Kubernetes는 
Kubernetes는 현대 인프라용 컨테이너에 추상화 계층을 제공하기 위해 Google 내부에서 시작되었습니다. 이 기술은 이제 많은 회사에서 채택되었으며 모든 클라우드 네이티브 애플리케이션에 대한 사실상의 표준이 되었습니다. 오픈 소스 시스템은 컨테이너의 관리, 배포 및 확장을 제공합니다.

이 워크샵에서는 Kubernetes 클러스터에 로컬로 설치할 수 있는 가장 단순한 프로덕션 등급 k8s인 microk8s를 사용하여 먼저 매니페스트를 사용하여 생성한 다음 생성할 Helm 차트를 사용하여 생성하는 간단한 Python 애플리케이션을 배포합니다.

이 과정이 벅차 보일 수 있지만, 그렇지 않다고 약속합니다! Python은 초보자와 숙련된 프로그래머 모두에게 훌륭한 언어입니다. 그리고 일단 익숙해지면 Docker 및 Kubernetes를 사용하여 애플리케이션을 배포하는 것은 매우 쉽습니다.

먼저 간단한 Python 응용 프로그램을 만드는 방법을 보여 드리겠습니다. 그런 다음 컨테이너화하고 컨테이너로 실행합니다. 그런 다음 microk8에서 내장 이미지 레지스트리로 푸시하고 Kubernetes에 배포합니다. 마지막으로, 우리는 microk8s의 helm 지원을 사용하여 helm 차트를 생성하여 Helm을 이해하면서 애플리케이션을 관리하고 배포하는 데 도움을 줍니다.
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