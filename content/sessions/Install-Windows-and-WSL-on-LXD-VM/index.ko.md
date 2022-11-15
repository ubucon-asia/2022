---
title: LXD/CM 에 Windows 와 WSL 설치하기
date: 2022-11-27T11:30:00+09:00
end: 2022-11-27T12:15:00+09:00
room: 3 # 1: Intl room, 2: Workshop, 3: BoF
category: 1
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
lang: 일본어
# slide: Ubucon_Subtitle_Automate.pdf
speakers: # Speaker info
    - name: Mitsuya Shibata
      bio: Member, Ubuntu Japanese LoCo Team
      email: mty.shibata@gmail.com # Email
      launchpad: # link to launchpad.net profile
      github:  # link to github profile
      profile: profile.jpg # Speaker photo
      linkurl: # Other website link url
      linklabel: # Label for linkurl
---

LXD는 시스템 컨테이너 관리자 입니다. Ubuntu 22.04 LTS 의 LXD 5.0 에서는 vTPM 및 다양한 디바이스 핫플러그 등 가상머신 기능에 대한 지원이 향상 되었는데요.
Ubuntu 에서 Windows 가 꼭 필요하다면, 이를 활용할 수 있습니다. 이 세션에서는 별도 PC 구입 없이 LXD에 Windows 를 설치하는 방법에 대해 이야기 합니다

아래 항목에 대해 이야기 하고자 합니다.

* 사전 지식 설명.
* Ubuntu 데스크톱에 LXD 설치 및 설정하기.
* LXD 인스턴스에 vTPM 준비하기.
* Ubuntu 데스크톱의 LXD 인스턴스에 Windows 11 설치하기.
* RDP로 Windows 인스턴스 제어하기.
* Windows 11에 WSLg 설정하기.

## 청중 사전 지식
LXD 및 가상머신에 대한 기본적인 이해

## 이 세션으로 배울 수 있는 것.
Ubuntu 호스트에서 Windows를 사용하는 방법과 LXD 에서 VM 및 GUI 환경 사용 방법

## 발표자 소개
Mitsuya 님은 Ubuntu Japanese Team 의 구성원 입니다. 임베디드 소프트웨어 프로그래밍 분야에서 근무하시며, 개으릅니다. 맥주 마시기, 숙면, 따뜻한 봄에 휴식 취하기, Ubuntu 및 LXD 로 재미난 것을 하는것을 좋아합니다.
