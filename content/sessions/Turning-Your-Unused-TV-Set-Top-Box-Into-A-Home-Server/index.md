---
title: Turning Your Unused TV's Set Top Box Into A Home Server (with Ubuntu Server)
date: 2022-11-27T10:00:00+09:00
end: 2022-11-27T10:45:00+09:00
room: 3 # 1: Intl room, 2: Workshop, 3: BoF
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
lang: English
slide: slide.pdf
speakers: # Speaker info
    - name: Akmal Pratama
      bio: N/A
      email: malpraku@gmail.com # Email
      launchpad: # link to launchpad.net profile
      github:  # link to github profile
      profile: profile.jpg # Speaker photo
      linkurl: # Other website link url
      linklabel: # Label for linkurl
---

{{< youtube Sdnz8J0Wz64 >}}

Introduction
================================
1. About STB (Set Top Box)
2. OSes that Most STB runs on.
3. Pros of using an STB.
4. Cons of using an STB.
(paid channels, offline authentication servers making it unusable,
locked system settings, locked developer tools, lack of usage)
5. Why STB are rarely used today.

Preparing
================================
6. Most STBs are running under Android OS which makes it a lot easier for us to flash custom firmwares.
7. Why do we need to flash an entire custom firmware just to root the device?
(built in firmware is locked totally, no devtools, no custom system settings, no outside connections except to provider, can't open android shell, etc... making it hard to exploit)
8. Rooting the STB by using a Customized Firmware.
9. Softwares used in order to flash Firmwares.
10. Searching for Compatible Pre-Rooted Firmwares.

11. Ways for us in order to flash firmwares into an STB.
12. Why the most easiest ways are no longer works?
13. Using USB TTL in order to connect to the STB's kernel shell.

Flashing Firmware
================================
14. Installing USB Drivers & Preparing the required tool.
15. Disassembling the STB & Locate where the PIN locations.
16. Attempt to connect through the STB kernel shell with PUTTY.
17. Connected, go to Update Mode and start flashing the custom firmware.

Installing Ubuntu Server
================================
19. About Armbian Focal.
20. Using Armbian Focal Server Image File.
21. Preparing SD Card for Bootloader & System Image.
22. Flash Armbian Focal Image to SD Card using Rufus/balanaEtcher.

Boot into the Armbian
================================
23. Install Terminal Emulator in STB using ADB/ USB.
24. Executing the first installation command.
25. Booting into the Ubuntu Server.
26. Walkthrough.

27. Final & Conclusion.

## Prior knowledge
Requires knowledge about USB TTL Serial Cables, Firmware Flashing, Putty (CLI),  etc.

## What audience can learn from this session
Main Knowledges
=====================================
- An old, yet unused STB can still be used for servers with Ubuntu.
- We can recycle unused & old techs with open source technology.
- The community allows us to expand the use of Ubuntu for further more.
- Open source allows the community to improve creations above limits.

Additional Knowledges
=====================================
- There are many ways to access the shell of STB. 
(even when many critical features are disabled by the provider!)
- How to flash custom firmwares into STB.
- Unlock STB limitations from the provider's.

## About the speaker
Hi! I'm Akmal Pratama. I'm now currently been working as a Security Analyst in IDN Boarding School. I was also a Fulltime Malware Researcher, and an active Bug Hunter in HackerOne. Experienced as a cybersecurity trainer at Nacita Corporation with over 100 participants. Loves to modify and mess around with operating systems. <3