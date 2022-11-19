---
title: Breaking down barriers to Linux Kernel Networking Stack
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
featured: true # If it's true. This session will appear on main page.
lang: Korean
# slide: Ubucon_Subtitle_Automate.pdf
speakers: # Speaker info
    - name: Juhee Kang
      bio: Developer @ OPEN UP
      email: claudiajkang@gmail.com # Email
      launchpad: # link to launchpad.net profile
      github:  # link to github profile
      profile: profile.png # Speaker photo
      linkurl: # Other website link url
      linklabel: # Label for linkurl
---
Linux Kernel Networking Stack is an open-source project that is developing protocols and functions between Layer 2 and Layer 4 of the OSI Model. As networks account for a large portion of the cloud, various networking technologies are being developed. However, the entry barrier for contribution is so high that you wonder, "Is Linux Kernel Networking Stack really an open-source project?" Most of all, unlike major open source projects, in which Kubernetes and OpenStack are developed through GitHub, using their own git makes it difficult from downloading the source code to write the PATCH.
Based on your experience as a Contributor to Linux Kernel, this session introduces the packet handling process of the Linux Kernel Networking Stack and the latest major modules and shares the development culture and development process of the Linux Kernel. Through this, many developers want to break down the initial barriers to entry into Linux Kernel Countryview and provide a guide to challenging their first contribution. 

Based on the following table of contents, this session introduces the key technologies, development cultures, and development methods of Linux Kernel Networking Stack.

1. Understanding the Linux Kernel Networking Stack
Briefly introduce what Linux Kernel is, learn how the Linux Kernel Networking Stack handles packets, and learn about the main technical concepts of the project for contribution .

2. Linux Kernel Development Culture
Introducing Linux Kernel's unique development culture (Repository, Release Cycle, Tree, Review Process, etc.

3. Develop Linux Kernel Networking Stack 
Based on actual contribution examples, introduce how to contribute to Linux Kernel Networking Stack (environment configuration, contribution type, how to create PATCH, etc.).

## Prior knowledge
The audience only needs to know basic concepts about the Linux kernel. 

## What audience can learn from this session
Through this session, developers can learn about the packet processing process and key modules of the Linux Kernel Networking Stack, which is a significant portion of the cloud. Developers who are interested in Linux Kernel contribution can also learn about the Linux Kernel development culture and contribution methods that they need to know for their first contribution.

## About the speaker
I work as an open-part frontier at OPEN UP (Open Source Software Support Center) and contribute to the Linux kernel networking stack. Also, I am primarily interested in Linux kernel, network, bpf/xdp, and RCU technologies.