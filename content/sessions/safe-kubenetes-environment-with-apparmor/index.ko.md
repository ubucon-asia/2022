---
title: AppArmor로 안전하게 지켜지는 쿠버네티스 컨테이너 환경
date: 2022-11-26T15:30:00+09:00
end: 2022-11-26T16:15:00+09:00
room: 1 # 1: Intl room, 2: Workshop, 3: BoF
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
featured: true # If it's true. This session will appear on main page.
lang: 한국어
# slide: Ubucon_Subtitle_Automate.pdf
speakers: # Speaker info
    - name: 조 훈
      bio: Cloud Solutions Architect, Megazone Soft
      email: pagaia@hotmail.com # Email
      launchpad: # link to launchpad.net profile
      github: sysnet4admin/ # link to github profile
      profile: profile.png # Speaker photo
      linkurl: https://www.linkedin.com/in/hoonjo/  # Other website link url
      linklabel: LinkedIn # Label for linkurl
---
AppArmor를 통해서 쿠버네티스에서 실행되는 컨테이너 애플리케이션을 효과적으로 제어할 수 있습니다.
이에 대한 예제를 통해서 AppArmor로 인해 안전해지는 쿠버네티스 컨테이너 인프라 환경을 경험해 볼까요?
https://kubernetes.io/ko/docs/tutorials/security/apparmor/

## 청중 사전 지식
쿠버네티스 자체에 대한 기본적인 지식이 있으면 이해하는데 더 도움이 되실 것 같습니다. 

## 이 세션으로 배울 수 있는 것
간단한 예제를 통해서 AppArmor의 사용법 및 효과를 이해할 수 있으실 것 같습니다. 

## 발표자 소개
시스템/네트워크 IT 벤더의 경험 이후, 메가존 GCP 클라우드 팀에서 쿠버네티스와 연관된 모든 프로젝트에 대한 Tech Advisor 및 Container Architecture Design을 제공하고 있습니다. 그 외에 페이스북 ‘IT 인프라 엔지니어 그룹’의 운영진을 맡고 있으며, 오픈 소스 컨트리뷰터로도 활동하고 있습니다. 

그 외에 가지고 있는 지식을 공유하는 것을 좋아하여, 인프런/유데미에서 앤서블 및 쿠버네티스에 관한 강의를 기재하고 있으며, 또한 아는 지식을 문서로 남겨야 한다고 생각하기에 책( 『시스템/네트워크 관리자를 위한 파이썬 실무 프로그래밍』, 『우아하게 앤서블』), 『컨테이너 인프라 환경 구축을 위한 쿠버네티스/도커』(길벗) 이 있고, IT 잡지에 기고문을 쓰는 활동도 함께하고 있습니다. 네이버 클라우드의 쿠버네티스 마스터(앰버서더)로서도 쿠버네티스 생태계가 더 활발하게 퍼질 수 있도록 기여하고 있습니다. 