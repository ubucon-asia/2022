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
featured: true # If it's true. This session will appear on main page.
lang: 한국어
# slide: Ubucon_Subtitle_Automate.pdf
speakers: # Speaker info
    - name: t2linux Team
      bio: t2linux는 T2칩이 탑제된 Intel Mac에 Linux 지원을 제공하기 위한 프로젝트 입니다. 
      email:  # Email
      launchpad: # link to launchpad.net profile
      github:  # link to github profile
      profile: profile.webp # Speaker photo
      linkurl: # Other website link url
      linklabel: # Label for linkurl
---

먼저 팀에 대해 간단히 소개하고, 일반 PC에 해당하는 Linux x86_64와 같은 인텔 칩이 탑제 되었음에도 많이 다른 T2칩이 탑제된 2018년 이후 Mac에 대해 비교 해 보고자 합니다. 이후 리버스 엔지니어링과 커널 모듈 작성, Ubuntu를 포함한 다양한 배포판 패키지 지원을 위한 패키지 빌드와 자동화 등 Mac에서 Linux를 구동하기 위한 저희 팀의 다양한 노력에 대해서도 이야기 하고자 합니다. 또한 Ubuntu를 Mac에 구동하는 시연 또한 보여 드리고자 합니다. https://t2linux.org 및 https://wiki.t2linux.org 에서 저희가 무엇을 하는지 더 자세히 확인하실 수 있습니다.

## 청중 사전 지식
리눅스와 커널에 대한 약간의 지식, Apple Mac 플랫폼에 대한 약간의 이해
## 이 세션에서 배울 수 있는 것
일반 PC와 2018+ Mac의 차이점, t2linux 프로젝트의 존재, 팀에서 하는 일, 팀에서 달성한 것, 팀의 미래 로드맵에 대해 아실 수 있습니다. 저희 프로젝트는 잘 알려져 있지 않고 많은 사람들이 2018년 이후 Intel Mac과 일반 PC의 차이점을 알지 못하기 때문에 Intel Mac의 다른 내부에 대한 차이점과 지식을 소개할 것입니다.

## 발표자 소개
t2linux는 T2칩이 탑제된 Intel Mac에 Linux 지원을 제공하기 위한 프로젝트 입니다. 이 세션에서는 아래 발표자 분들을 만날 수 있습니다.

- 조우현
  - 인텔 맥에서 리눅스를 돌리는 것을 목표로 하는 팀인 t2linux에서 아치 리눅스와 관련 배포판의 관리를 맡고 있습니다. 이 외에도 mirror.funami.tech 미러를 운영중입니다.
- Mark Vainomaa
  - 백엔드 개발과 백엔드 아키텍쳐 디자인, 유닉스 시스템 디자인 등에 주로 관심이 있습니다
- networkException
  - 다수의 오픈소스 프로젝트 개발자 및 메인테이너이자 시스템 관리자로 활동하고 있습니다.