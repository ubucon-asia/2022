---
title: (Workshop) Building microk8s Server on Raspberry Pi - to understand k8s mechanism
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
lang: English
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

Have you tried Ubuntu on Raspberry Pi? Raspberry Pi is now standard 'Single Board Computer' works with several OSes. It is cheap and easy to handle - IoT devices and server evaluation. 
In this workshop, Masafumi focus on Ubuntu Server on Raspberry Pi, especially k8s+container on 8GB Raspberry Pi 4B; Masafumi will instruct how to build the container environment with microk8s - a lightweight k8s to understand k8s easily:
 - Install the Ubuntu environment
 - Install container environment
 - Install microk8s
 - Try container cluster with microk8s
   - Suppose the k8s web server cluster 
      - Ingress setting
      - replica set setting to auto-scaling
      - external routing
      - issues on the server Certificate

## Prior knowledge
Container environment knowledges: What container is and What kubernetes is

## What participants need to prepare for your workshop 
Bring your Laptop to make Ubuntu OS media with Etcher or Raspberry Pi imager and control Raspberry Pi from your PC.

## What audience can learn from this session
Attendess will expect how to use Raspberry Pi on Ubuntu and how to try container environment on Raspberry Pi

## About the speaker
Masafumi is leading Raspberry Pi community in Japan and helping Raspberry Pi business/community in Asian area - not only Japan but also Taiwan/China/Korea and more.
for more detail please visit https://masafumi.me/ my personal introduction.