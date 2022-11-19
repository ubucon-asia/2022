---
title: CUDA with WSL2 and Ubuntu without Docker
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
lang: Korean
# slide: Ubucon_Subtitle_Automate.pdf
speakers: # Speaker info
    - name: Geoff Yoon
      bio: CEO of Epsilon Delta Co. Ltd.
      email: koock1994@gmail.com # Email
      launchpad: # link to launchpad.net profile
      github: https://github.com/kooock # link to github profile
      profile: profile.jpg # Speaker photo
      linkurl: https://www.facebook.com/koock.yoon # Other website link url
      linklabel: Facebook # Label for linkurl
---

Unlike WSL1, WSL2 comes wiht real Linux Kernel and it enables many more tasks that was not possible with WSL1. Working with Deep learning with CUDA also got much better on WSL2. In this talk, Let's see how we've been used CUDA on WSL in past. And How it got better and different on WSL2 environment by understanding architecture of WSL2 and CUDA. After that, I'll show you how you can install CUDA without Docker on WSL 2 and running deep learning code applicates GPU acceleration on the WSL2 CUDA environment we configured with some demonstrations.

## Prior knowledge

Basic understanding on WSL and CUDA

## What audience can learn from this session
You will be able to run Deep learning code on WSL2 environment without using Docker

## About the speaker
I am a deep learning engineer developing AI services. I am currently running a one-person company.  I'm one of the maintainers of the developer community "NO(Not Only) Coding"
