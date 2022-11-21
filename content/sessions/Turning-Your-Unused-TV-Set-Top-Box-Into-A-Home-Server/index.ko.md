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
lang: 영어
# slide: Ubucon_Subtitle_Automate.pdf
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
Introduction
==================================
 1. STB(셋톱박스)에 대하여
 2. 대부분의 STB가 실행되는 OS.
 3. STB 사용의 장점.
 4. STB 사용의 단점.
 (유료 채널, 오프라인 인증 서버로 인해 사용할 수 없음,
 잠긴 시스템 설정, 잠긴 개발자 도구, 사용 부족)
 5. 오늘날 STB가 거의 사용되지 않는 이유.

 Preparing
 ==================================
 6. 대부분의 STB는 Android OS에서 실행되므로 맞춤형 펌웨어를 훨씬 쉽게 플래시할 수 있습니다.
 7. 장치를 루팅하기 위해 전체 맞춤형 펌웨어를 플래시해야 하는 이유는 무엇입니까?
 (내장 펌웨어는 완전히 잠겨 있고 devtools, 사용자 지정 시스템 설정 없음, 공급자를 제외한 외부 연결 없음, Android 셸을 열 수 없음 등... 악용하기 어렵게 함)
 8. 맞춤형 펌웨어를 사용하여 STB를 루팅합니다.
 9. 펌웨어를 플래시하기 위해 사용되는 소프트웨어.
 10. 호환 가능한 사전 루팅된 펌웨어 검색.

 11. STB에 펌웨어를 플래시하기 위한 방법.
 12. 가장 쉬운 방법이 더 이상 작동하지 않는 이유는 무엇입니까?
 13. USB TTL을 사용하여 STB의 커널 셸에 연결합니다.

 Flashing Firmware
 ==================================
 14. USB 드라이버 설치 및 필요한 도구 준비.
 15. STB 분해 및 PIN 위치 찾기.
 16. PUTTY를 사용하여 STB 커널 셸을 통해 연결을 시도합니다.
 17. 연결되면 업데이트 모드로 이동하고 사용자 지정 펌웨어 플래싱을 시작합니다.

 우분투 서버 설치
 ==================================
 19. Armbian Focal 소개.
 20. Armbian Focal Server 이미지 파일 사용.
 21. 부트로더 및 시스템 이미지용 SD 카드 준비.
 22. Rufus/balanaEtcher를 사용하여 Armbian 초점 이미지를 SD 카드로 플래시합니다.

 Armbian으로 부팅
 ==================================
 23. ADB/USB를 사용하여 STB에 터미널 에뮬레이터를 설치합니다.
 24. 첫 번째 설치 명령을 실행합니다.
 25. 우분투 서버로 부팅.
 26. 연습.

 27. 최종 및 결론.

 ## 사전 지식
 USB TTL 직렬 케이블, 펌웨어 플래싱, Putty(CLI) 등에 대한 지식이 필요합니다.

 ## 이 세션에서 배울 수 있는 것
 주요 지식
 =====================================
 - 오래되었지만 사용하지 않는 STB는 여전히 Ubuntu가 있는 서버에 사용할 수 있습니다.
 - 오픈 소스 기술로 미사용 및 오래된 기술을 재활용할 수 있습니다.
 - 커뮤니티를 통해 Ubuntu 사용을 더 확장할 수 있습니다.
 - 오픈 소스를 통해 커뮤니티는 한계를 뛰어넘는 창작물을 개선할 수 있습니다.

 추가 지식
 =====================================
 - STB의 shell에 접근하는 방법은 여러가지가 있습니다. 
 (제공자가 많은 중요한 기능을 비활성화한 경우에도 마찬가지입니다!)
 - 커스텀 펌웨어를 STB에 플래시하는 방법.
 - 공급자의 STB 제한을 해제합니다.

## 발표자 소개
저는 Akmal Pratama입니다. 저는 현재 IDN Boarding School에서 보안 분석가로 일하고 있습니다.
저는 또한 맬웨어 연구원자이며 HackerOne에서 활동적인 버그 헌터였습니다. 
100명이 넘는 참가자와 함께 Nacita Corporation에서 사이버 보안 트레이너로 경험했습니다. 
운영 체제를 수정하고 어지럽히는 것을 좋아합니다. <3