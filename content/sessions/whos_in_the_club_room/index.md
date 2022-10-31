---
title: "Who's in the club room?: From Freeradius to ARP Scanner"
date: 2022-11-27T14:30:00+09:00
end: 2022-11-27T15:15:00+09:00
room: 1 # 1: Intl room, 2: Workshop, 3: BoF
featured: false # If it's true. This session will appear on main page.
lang: Korean
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
# slide: Ubucon_Subtitle_Automate.pdf
speakers: # Speaker info
    - name: Sangwan Jeon
      bio: Student, Yeonsei University
      email: maxswjeon@codingbear.kr # Email
      launchpad: # link to launchpad.net profile
      github:  # link to github profile
      profile: profile.jpg # Speaker photo
      linkurl: Twitter # Other website link url
      linklabel: https://twitter.com/codingbear03 # Label for linkurl
---

I am working as an executive in the computer central club of the school. Among the executives, as one of technology-related executives, I contribute to the club by maintaining various services (GitLab, Wiki, Mail, etc.) used by members and the Backoffice that executives use for club management.

A few months ago, requests began to come in steadily, saying, "I wish there's a way to know who's in the club room." In fact, it was a difficult task unless equipping a camera, and mounting a camera was excluded due to various problems.

While we were thinking about this, what we considered was WiFi. Club members are always connected to WiFi when they visit the club room. If we can only know who is accessing this WiFi, we can know who is in the club room.

In this session, under the topic of "Who is in the club room right now?", I would like to talk about the problems encountered in the process of planning and building the software and infrastructure for this project.

## Prior knowledge
WiFi, WPA-Enterprise, RADIUS, LDAP

## What you can learn from this session
- Setting up and configuring RADIUS and LDAP server on Docker
- Understanding ARP protocols and ARP cache
- Deploying on Raspberry Pi