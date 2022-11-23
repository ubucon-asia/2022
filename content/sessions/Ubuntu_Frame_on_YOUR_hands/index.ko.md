---
title: "Ubuntu Frame on YOUR hands 워크샵"
date: 2022-11-27T14:00:00+09:00
end: 2022-11-27T15:30:00+09:00
room: 2 # 1: Intl room, 2: Workshop, 3: BoF
category: 5
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
    - name: 김광연
      bio: 우분투한국커뮤니티
      email: ghemool123@gmail.com # Email
      launchpad: # link to launchpad.net profile
      github:  # link to github profile
      profile: profile.jpg # Speaker photo 
      linkurl:  # Other website link url
      linklabel: # Label for linkurl
---

Ubuntu Frame의 개념 설명, 설치, 데모, 질의 응답을 하는 워크숍을 가지려 합니다.
* 첫째, Ubuntu Frame이 무엇이고 왜 필요한지 그리고 구조가 어떻게 되어있는지 설명할 것입니다.
  + Ubuntu Core 소개
  + Snap 기초
  + Ubuntu Frame 등장배경, 설정 옵션
  + ```iot-examples-snap``` 설명
  + 시연 레시피 설명
* 둘째, Electron GUI 앱을 패키징하는 Ubuntu Frame 가이드를 함께 따라하는 시연을 할 것입니다.
  + Desktop에 Ubuntu Frame 설치/활용 하기
  + ```iot-examples-snap```을 통한 Electron 앱 패키징
  + 라즈베리파이를 통한 물리 기기 시연

## 청중 사전 지식
Linux 명령 줄 인터페이스, Linux 컨테이너, OS 기초 지식

## 참여자가 미리 준비 해야 할 사항
snapd와 snapcraft를 실행할 수 있는 리눅스 환경(공 노트북 권장)
* 참여자들은 가상환경을 사용할 경우 이중가상화가 지원되는 환경인지 확인하길 바랍니다.
* WSL은 snapd를 사용하기 위해 추가적인 설정이 필요하기 때문에 권장하지 않습니다.

## 청중이 이 세션을 통해 배울 수 있는 것
* Ubuntu Core, Ubuntu Frame에 대한 기초적 이해
* Snap Confinement, Recipe, Snapcraft
* 리눅스 장치로 snap 패키지 원격 업로드 하기
* Ubuntu Frame 설치 및 개발 과정

## 발표자 소개
리눅스 관련으로 가치있는 주제를 발견하고 개발과 공부를 해서 제 강점으로 만들고자 하고 있습니다. 현재 우분투한국커뮤니티의 Contribute & Development 팀에 소속 돼서 지식 공유를 주기적으로 하고 있습니다.