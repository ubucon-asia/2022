---
title: Install Windows and WSL on LXD/VM
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
featured: true # If it's true. This session will appear on main page.
lang: Japanese
slide: slide.pdf
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

{{< youtube Cm8UwBHIEQM >}}

LXD is a system container manager.
In addition, LXD 5.0 on Ubuntu 22.04 LTS offers enhanced support for virtual machine functions such as vTPM and many devices hotplug.

For those unfortunate users who must use Windows on Ubuntu, this session provides how to install Windows without purchasing a new PC.

I will talk the followings.

* Explain about prerequisites.
* How to setup LXD on Ubuntu Desktop.
* How to prepare vTPM on LXD instance.
* How to install Windows 11 to LXD instance on Ubuntu Desktop.
* Use RDP to control Windows instance.
* Setup WSLg on Windows 11.

## Prior knowledge
What is LXD and Virtual Machine.

## What audience can learn from this session
How to use VM with GUI on LXD and Windows on Ubuntu host.

## About the speaker
I'm member of the Ubuntu Japanese Team.
As a secret identity, I work on embedded software programming, but I'm essentially lazy.
I want to drink beer.
I want to enjoy a good sleep.
I want to relax in a hot spring.
I want to play with Ubuntu and LXD.