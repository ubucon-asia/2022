---
title: "동아리방에 지금 누가 있나요? Freeradius 부터 ARP Scanner까지"
date: 2022-11-27T14:30:00+09:00
end: 2022-11-27T15:15:00+09:00
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
slide: slide.pdf
speakers: # Speaker info
    - name: 전상완
      bio: 연세대학교 학생
      email: maxswjeon@codingbear.kr # Email
      launchpad: # link to launchpad.net profile
      github:  # link to github profile
      profile: profile.jpg # Speaker photo
      linkurl: https://twitter.com/codingbear03 # Other website link url
      linklabel: Twitter # Label for linkurl
---

{{< youtube qHnKolKe9EA >}}

저는 학교의 컴퓨터 중앙동아리에 임원진으로 일하고 있습니다. 임원진 중에서도 기술 관련 임원진으로, 부원들이 사용하는 여러 가지 서비스들 (GitLab, Wiki, Mail 등)과 임원진들이 동아리 관리를 위한 Backoffice 제작 등을 지원하며 동아리에 기여하고 있습니다.

몇 달 전부터 "동아리방에 누가 있는지 알 수 있는 방법이 있으면 좋겠다"라는 요청이 꾸준히 들어오기 시작했습니다. 사실상 카메라를 달지 않는 이상 어려운 작업이었는데요, 카메라를 다는 것은 여러 가지 문제가 있었기에 제외되었습니다.

이러한 생각을 하던 중 저희가 고려했던 건 WiFi 입니다. 동아리 사람들은 동아리방에 방문하면 항상 WiFi에 접속합니다. 이 WiFi에 누가 접속해 있는지만 알 수 있다면, 우리는 동아리방에 누가 있는 지 알 수 있습니다.

이 세션에서는 "동아리방에 지금 누가 있나요?"라는 주제로 해당 소프트웨어 및 인프라를 기획하고 구축하는 과정 중 맞닥뜨린 문제와 그 해결방안에 대해 말해보려고 합니다.

## 청중 사전 지식
WiFi, WPA-Enterprise, RADIUS, LDAP

## 청중이 이 세션을 통해 배울 수 있는 것
- Docker 상 RADIUS 서버의 구축 및 설정
- Docker 상 LDAP 서버의 구축 및 설정
- ARP 프로토콜의 이해 및 ARP 캐시의 이해
- Raspberry Pi 상에서의 서비스 배포

## 발표자 소개