---
title: Linux Kernel Networking Stack 진입장벽 허물기
date: 2022-11-27T16:30:00+09:00
end: 2022-11-27T16:50:00+09:00
room: 1 # 1: Intl room, 2: Workshop, 3: BoF
category: 8
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
lang: 한국어
# slide: Ubucon_Subtitle_Automate.pdf
speakers: # Speaker info
    - name: 강주희
      bio: OPEN UP 개발자
      email: claudiajkang@gmail.com # Email
      launchpad: # link to launchpad.net profile
      github:  # link to github profile
      profile: profile.jpg # Speaker photo
      linkurl: # Other website link url
      linklabel: # Label for linkurl
---
Linux Kernel Networking Stack은 OSI Model의 Layer 2 ~ Layer 4 사이의 프로토콜과 함수 개발이 이루어지는 오픈 소스 프로젝트입니다. 클라우드에서 네트워크가 많은 비중을 차지하는 만큼 다양한 네트워킹 기술들이 개발되고 있습니다. 하지만, “Linux Kernel Networking Stack은 정말 오픈 소스 프로젝트일까?”라는 의문이 들 정도로 컨트리뷰션을 위한 진입장벽이 높습니다. 무엇보다도 GitHub을 통해서 개발이 진행되는 주요 오픈 소스 프로젝트 kubernetes, openstack과는 달리 자체 git을 사용하다 보니 개발이 진행되는 소스코드를 다운받는 것부터 PATCH를 작성하는 것까지 난이도가 높습니다.
본 세션에서는 Contributor로 활동하며 겪은 경험을 바탕으로 Linux Kernel Networking Stack 의 패킷 처리 과정과 최신 주요 모듈을 소개하고, Linux Kernel의 개발 문화와 개발 과정에 대한 공유합니다. 이를 통해 많은 개발자들이 Linux Kernel 컨트리뷰션의 초기 진입장벽을 허물고, 첫 컨트리뷰션에 도전할 수 있도록 가이드를 제공하고자 합니다. 

본 세션은 다음 목차를 바탕으로 Linux Kernel Networking Stack 주요 기술, 개발 문화 및 개발 방법에 대해 소개합니다.

1. Linux Kernel Networking Stack 이해
Linux Kernel이 무엇인지 간략하게 소개하고, Linux Kernel Networking Stack의 이루어지는 패킷 처리 과정을 알아보며 컨트리뷰션을 위한 프로젝트의 주요 기술 개념에 대해 소개합니다.

2. Linux Kernel 개발 문화
Linux Kernel만의 개발 문화(Repository, Release Cycle, Tree, Review Process 등)를 소개합니다.

3. Linux Kernel Networking Stack 개발하기 
실제 컨트리뷰션 사례를 바탕으로 Linux Kernel Networking Stack 컨트리뷰션 방법(환경 구성, 컨트리뷰션 유형, PATCH 작성 방법 등)을 소개합니다.

## 청중 사전 지식

청중은 리눅스 커널에 대한 기본적인 개념만 알면 됩니다.

## 청중이 이 세션을 통해 배울 수 있는 것
개발자들은 이 세션을 통해 클라우드 상에서 많은 비중을 차지하는 Linux Kernel Networking Stack의 패킷 처리 과정과 주요 모듈에 대해 알아갈 수 있습니다. 또한, Linux Kernel 컨트리뷰션에 관심이 많은 개발자에게는 첫 컨트리뷰션을 위해 알아야 하는 Linux Kernel 개발 문화 및 컨트리뷰션 방법 등을 배워갈 수 있습니다.

## 발표자 소개
OPEN UP(공개 SW 개발자센터)에서 오픈 파트 프런티어로 활동하며 리눅스 커널 네트워킹 스택에 컨트리뷰션을 진행하고 있습니다. 주로 리눅스 커널, 네트워크, bpf/xdp 및 RCU 기술에 관심이 많습니다.
