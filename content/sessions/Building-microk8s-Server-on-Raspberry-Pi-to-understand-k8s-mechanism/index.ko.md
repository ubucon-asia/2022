---
title: (워크샵) Raspberry Pi 에 구축하는 Microk8s 서버 - K8s 작동 원리 이해하기
date: 2022-11-27T16:00:00+09:00
end: 2022-11-27T17:30:00+09:00
room: 2 # 1: Intl room, 2: Workshop, 3: BoF
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
    - name: Masafumi Ohta
      bio: Founder and Representative, Japanese Raspberry Pi Users Group
      email: masafumi@pid0.org # Email
      launchpad: # link to launchpad.net profile
      github:  # link to github profile
      profile: profile.jpg # Speaker photo
      linkurl: https://twitter.com/masafumiohta# Other website link url
      linklabel: Twitter # Label for linkurl
---

Raspberry Pi를 사용 해 보셨나요? 이제 Raspberry Pi는 다양한 OS가 지원 되는 표준 "싱글 보드 컴퓨터" 입니다. 저렴하고 다루기도 쉬워서 사물인터넷 장비나 서버 테스트 용도로 좋습니다.
이 워크샵 에서는, Ubuntu 서버를 Raspberry Pi 에 구동하는 것이 초점을 두는데, 특히 k8s와 컨테이너를 8GB 메모리의 Raspberry Pi 4B에 구동하는 것에 초점을 둘 것입니다. K8s 를 쉽게 이해하기 위해, 가벼운 k8s 환경인 Microk8s를 활용하여 컨테이너 환경을 구축하는 방법에 대해 알아봅니다. 

- Ubuntu 설치
- 컨테이너 환경 설치
- Microk8s 설치
- Microk8s 클러스터 사용 해 보기
  - 웹서버가 구동되는 k8s 클러스터를 가정하고.
    - Ingress 설정
    - ReplicaSet 및 Auto Scaling 설정
    - 외부 라우팅 설정
    - 서버 인증서 발급

## 청중 사전 지식
컨테이너 환경에 대한 지식: 컨테이너와 Kubernetes 가 무엇인지 알고 있어야 함

## 워크샵 참여를 위해 준비할 것
노트북을 지참하세요. Etcher나 Raspberry Pi imager 를 이용하여 Ubuntu OS 설치 미디어(디스크) 생성하거나, Raspberry Pi를 제어하는 용도로 필요합니다.

##  이 세션을 통해 배울 수 있는 것
Ubuntu를 Raspberry Pi 에서 사용하는 방법, Raspberry Pi 에서 컨테이너 환경을 사용하는 방법에 대해 배울 수 있습니다.

## 발표자 소개
Masafumi님은 일본 Raspberry Pi 커뮤니티를 이끌고 있으며, 일본 뿐만 아니라 대만, 중국, 한국 등 아시아 지역의 Raspberry Pi 비즈니스와 커뮤니티를 돕고 있습니다. 
https://masafumi.me/ 에서 Masafumi님에 대해 더 자세히 알아보실 수 있습니다.