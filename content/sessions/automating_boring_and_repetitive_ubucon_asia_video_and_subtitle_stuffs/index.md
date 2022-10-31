---
title: Automating boring and repetitive UbuCon Asia video and subtitle stuffs
date: 2022-10-29T12:15:00+09:00
end: 2022-10-29T12:45:00+09:00
room: 1 # 1: Intl room, 2: Workshop, 3: BoF
category: 0
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
featured: false # If it's true. This session will appear on main page.
slide: Ubucon_Subtitle_Automate.pdf
speakers: # Speaker info
    - name: Youngbin Han
      bio: Organizer, Ubuntu Korea Community
      email: sukso96100@gmail.com # Email
      launchpad: # link to launchpad.net profile
      github: https://github.com/sukso96100 # link to github profile
      profile: profile.jpg # Speaker photo
      linkurl: # Other website link url
      linklabel: # Label for linkurl
---
Whether it's online or offline event, There's always boring and repetitive jobs for event organizers and volunteers. Putting cover on session videos and making subtitle for videos are part of them.
UbuCon Asia team, is no exception. But like you and other ordinary people, our organizers also have their own job and busy with that usually. As it's first event we don't even know if we can gather enough volunteers or gain sponsorship to hire some workers.
So, We decided to use some automation tools like CI/CD, Speech to text, Translation API, Video cover rendering template and so on to automate these boring job as much as possible and reduce cost at the same time.
In this session, I would like to share how we did this and what we've learned while trying to automate stuffs.

### About the speaker
 - Community Leader and Organizer at Ubuntu Korea Community
 - Junior DevOps Engineer at Cloudmate
 - Studies Software engineering at Sungkonghoe University