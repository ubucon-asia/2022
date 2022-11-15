---
title: t2linux Linux on 2018+ Intel Macs
date: 2022-11-26T16:30:00+09:00
end: 2022-11-26T16:50:00+09:00
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
lang: English
# slide: Ubucon_Subtitle_Automate.pdf
speakers: # Speaker info
    - name: t2linux Team
      bio: t2linux is an projects that brings linux support on Intel Macs with T2 chips
      email: himesaka@noa.codes # Email
      launchpad: # link to launchpad.net profile
      github:  # link to github profile
      profile: profile.webp # Speaker photo
      linkurl: # Other website link url
      linklabel: # Label for linkurl
---

Short introduction of our team, explaining the difference between normal PCs which Linux x86_64 is targeted on and 2018 or newer Macs with T2 chip which is very different despite using same Intel CPU, our efforts trying to get Linux run on those Macs, including but not limited to reverse engineering, writing kernel module, building and automating supporting packages for multiple distros including Ubuntu. We'll demonstrate Ubuntu running on Macs with our efforts. See https://t2linux.org and https://wiki.t2linux.org to see what we do.

## Prior knowledge 
Some knowledge of Linux and kernel, Some understanding about Apple's Mac platform.

## What audience can learn from this session
Differences between normal PCs and 2018+ Macs, the presence of t2linux project, what we do, what we have achieved, and our future roadmap. Since our project is not well known and not many people know the difference between later stage Intel Macs and normal PCs this will introduce people to those differences and knowledge about Intel Mac's different internals.

## About the speaker
t2linux is an projects that brings linux support on Intel Macs with T2 chips. You will meet following speakers in this talk.

- Woohyeon Cho
  - I maintain t2linux for Arch linux and related linux distros on the t2linux team. I also operate mirror.funami.tech mirror.
- Mark Vainomaa
  - I focus on backend development & backend architecture designing; Unix system administration.
- networkException
  - I'm a developer, maintainer and system administrator working a variety of open source projects
