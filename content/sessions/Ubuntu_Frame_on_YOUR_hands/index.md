---
title: "Ubuntu Frame on YOUR hands"
date: 2022-11-27T14:00:00+09:00
end: 2022-11-27T15:30:00+09:00
room: 2 # 1: Intl room, 2: Workshop, 3: BoF
featured: true # If it's true. This session will appear on main page.
lang: Korean
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
# slide: Ubucon_Subtitle_Automate.pdf
speakers: # Speaker info
    - name: Kwangyeon Kim
      bio: Ubuntu Korea Local Coummity
      email: ghemool123@gmail.com # Email
      launchpad: # link to launchpad.net profile
      github:  # link to github profile
      profile: profile.jpg # Speaker photo
      linkurl:  # Other website link url
      linklabel:  # Label for linkurl
---

We would like to have a workshop that explains the concept of Ubuntu Frame, installation, demonstration, and Q&A.
* First, I will explain what Ubuntu Frame is, why it is needed, and how it is structured.
  + Introduce Ubuntu Core
  + Snap Basic Knowledges
  + Background of Ubuntu Frame and Configuration Options
  + Explanation for ```iot-examples-snap```
  + Explanation for demonstrating recipe
* Second, I'd like to follow a guide for Electron GUI App packaging in Ubuntu Frame documents together.
  + Installation and Utilization of Ubuntu Frame on Desktop Environment
  + Electron GUI App packaging through ```iot-example-snap```
  + Demonstration on Real Devices using Raspberry Pi

## Prior knowledge
Linux command line interface, Linux containers, OS basics

## What participants need to prepare for workshop
Linux environment for which is suitable for snapd, snapcraft use(I recommend to use real device)

* Please make sure that whther your environment supports nested virtualization in case you'd like follow with virtual environment
* WSL is not desirable for this course since it requires additional configuration for snap use.

## What audience can learn from this session
* Basic understanding of Ubuntu Core, Ubuntu Frame
* Snap Confinement, Recipe, Snapcraft
* Pratices for Ubuntu Frame Development

## About the speaker
I am trying to find valuable topics related to Linux, develop and study them, and make them my strengths. Currently, I am a member of the Contribute & Development team of the Ubuntu Korean community and share knowledge regularly.