---
title: "워크샵: 우분투/리눅스 환경에서 Vcpkg로 패키지 지원하기"
date: 2022-11-26T14:00:00+09:00
end: 2022-11-26T15:30:00+09:00
room: 2 # 1: Intl room, 2: Workshop, 3: BoF
category: 6
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
    - name: 박동하
      bio: C++ Korea 운영진/개발자
      email: luncliff@gmail.com # Email
      launchpad: # link to launchpad.net profile
      github: luncliff  # link to github profile
      profile: profile.jpg # Speaker photo
      linkurl: https://fb.com/luncliff # Other website link url
      linklabel: Facebook # Label for linkurl
---

{{< youtube 5idnTozVbeE >}}

리눅스 환경에서 수많은 C++ 프로젝트를 지원하고 있는 패키지 매니저 Vcpkg에 대해서 함께 살펴봅니다.
초반에는 다루는 내용에 대해 이해할 수 있도록, 명령어들과 파일들의 역할에 대해서 먼저 설명하고 시연으로 넘어갑니다.

입문자를 대상으로 CMake의 사용법과 내용에 대해서 소개합니다
예시를 위한 CMake 프로젝트를 사용해서 Vcpkg에 새로운 패키지를 추가해봅니다.
패키지가 설치되기까지의 과정을 여러 log 파일들을 읽어보면서 이해합니다.

## 청중 사전 지식

권장
- 실습을 위해 Terminal을 사용해 CLI 명령을 입력하는데 익숙하면 좋습니다

불필요
- C언어 또는 C++ 언어에 대해서 다루지 않습니다
- CMake에 대해서 사전지식이 없어도 개념과 사용법을 따라할 수 있습니다

## 참여자가 미리 준비 해야 할 사항
APT와 Python3, PIP를 업데이트해서 필요한 소프트웨어를 바로 설치할 수 있어야 합니다.

## 이 세션을 통해 배울 수 있는 것
- 라이브러리 관리를 위한 Vcpkg 패키지 매니저의 접근법
- Vcpkg에 새로운 패키지를 추가하기 위한 방법
- Vcpkg에서 생성하는 log들에 대한 이해
- CMake 프로그램의 역할
- 기초적인 수준의 CMake 파일 독해능력

## 발표자 소개
- Windows, Linux 환경에서 C++ 언어를 오래도록 사용하고 싶은 개발자. 
- C++, C#, Go 언어로 말합니다(?). 
- 2021년부터 개발 역량을 키우기보다는 C++ 생태계에서 소프트웨어 자본을 다루는 방법에 대해서 나름의 주관을 만들어 나가고 있습니다.
