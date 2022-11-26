---
title: WSL2 및 Ubuntu 환경에서 Docker 없이 CUDA 딥러닝 하기
date: 2022-11-27T15:30:00+09:00
end: 2022-11-27T15:50:00+09:00
room: 1 # 1: Intl room, 2: Workshop, 3: BoF
category: 3
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
lang: 한국어
# slide: Ubucon_Subtitle_Automate.pdf
speakers: # Speaker info
    - name: 윤성국
      bio: 엡실론델타 대표
      email: koock1994@gmail.com # Email
      launchpad: # link to launchpad.net profile
      github: kooock # link to github profile
      profile: profile.jpg # Speaker photo
      linkurl: https://www.facebook.com/koock.yoon # Other website link url
      linklabel: Facebook # Label for linkurl
---

WSL2 환경은 WSL1 과 달리 실제 리눅스 커널이 탑제 되면서 WSL1 에서는 어렵던 다양한 작업이 가능해 졌습니다. CUDA를 활용한 딥러닝 또한 많이 편리해 졌는데요,
이 세션을 통해 WSL 에서 CUDA 를 사용하기 위해 그간 어떤 방법을 사용해야 했는지 알아보고, WSL2에서는 CUDA 사용이 어떻게 달라졌는지 WSL2화 CUDA의 내부 구조 이해와 함께 알아보겠습니다. 이후 WSL2 환경에 Docker 없이 CUDA 를 설치하고, 구축한 WSL2 CUDA 환경에서 GPU를 이용한 딥러닝 코드를 실행하는 시연을 통해 실제로 어떻게 사용할 수 있는지 알아보는 시간을 가져보겠습니다.

## 청중 사전 지식

WSL 및 CUDA에 관한 개념 이해

## 청중이 이 세션을 통해 배울 수 있는 것
WSL2 환경에서 Docker 없이 CUDA를 이용한 딥러닝 코드를 돌릴 수 있게 됩니다.

## 발표자 소개
AI 서비스를 개발하는 딥러닝 엔지니어입니다. 현재 1인 기업을 운영중입니다. 개발자 커뮤니티 "코딩이랑 무관합니다만."을 운영하고 있습니다. 