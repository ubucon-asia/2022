---
title: MicroK8s, Kubernetes and deploying Applications
date: 2022-11-26T14:30:00+09:00
end: 2022-11-26T15:15:00+09:00
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
lang: 영어
# slide: Ubucon_Subtitle_Automate.pdf
speakers: # Speaker info
    - name: Hrittik Roy
      bio: Community Engineering Intern, Harness.io
      email: hrittik12d@gmail.com # Email
      launchpad: # link to launchpad.net profile
      github:  # link to github profile
      profile: profile.png # Speaker photo
      linkurl: # Other website link url
      linklabel: # Label for linkurl
---

Google에서 시작된 Kubernetes는 Kubernetes는 현대 인프라용 컨테이너에 추상화 계층을 제공하기 위해 Google 내부에서 시작되었습니다. 이 기술은 이제 많은 회사에서 채택되었으며 모든 클라우드 네이티브 애플리케이션에 대한 사실상의 표준이 되었습니다. 오픈 소스 시스템은 컨테이너의 관리, 배포 및 확장을 제공합니다.

이 워크샵에서는 Kubernetes 클러스터에 로컬로 설치할 수 있는 가장 단순한 프로덕션 등급 k8s인 microk8s를 사용하여 먼저 매니페스트를 사용하여 생성한 다음 생성할 Helm 차트를 사용하여 생성하는 간단한 Python 애플리케이션을 배포합니다.

이 과정이 벅차 보일 수 있지만, 그렇지 않다고 약속합니다! Python은 초보자와 숙련된 프로그래머 모두에게 훌륭한 언어입니다. 그리고 일단 익숙해지면 Docker 및 Kubernetes를 사용하여 애플리케이션을 배포하는 것은 매우 쉽습니다.

먼저 간단한 Python 응용 프로그램을 만드는 방법을 보여 드리겠습니다. 그런 다음 컨테이너화하고 컨테이너로 실행하고, microk8에서 내장 이미지 레지스트리로 푸시하고 Kubernetes에 배포하는 방법을 보여 드리겠습니다. 마지막으로, 앱 배포와 관리에 도움을 받기 위해 microk8s 의 helm 지원을 활용하여 helm 차트를 만들어 보면서 Helm 에 대해 이해 해 보는 시간을 가지도록 하겠습니다.
## 청중 사전 지식
- kubectl 사용 경험
- Python 또는 다른 범용 프로그래밍 언어에 대한 약간의 지식
- Kubernetes, Docker 에 대한 조금의 지식
## 참여자가 미리 준비 해야 할 사항
- 코드 편집기
- Python 이 설치 된 환경 
- Microk8s 설치를 위한 관리자 권한(sudo 사용 가능 여부 등)
- 기기에서 관리자 권한 사용 불가 시, 클라우드 환경에 구성된 Ubuntu VM 및 VM에 대한 SSH 접근

## 이 세션을 통해 배울 수 있는 것
워크샵을 통해 어떻게 엔드포인트를 만들고 컨테이너화 할수 있는지, 예를 들어 여기서는 Python 엔드포인트로 할 수 있는지 이해할 수 있습니다. 앱을 패키징 하여 클러스터 구동을 위해 Microk8s 을 설치하고, 애드온 활성화와 클러스터에 컨테이너 배포 또한 이에 포함되어 있습니다.

워크샵 끝에는, Helm 의 기본에 대해 알고, helm 차트를 만들어 어떻게 앱을 템플릿화 할 수 있는지, helm 으로 앱 배포하는 법, YAML 과 함께 오브젝트 매니페스트로 앱 이미지를 배포할 수 있게 됩니다.

## 발표자 소개
Hrittik 님은 Harness 커뮤니티 엔지니어링 인턴이자, 학부 졸업을 준비중인 학생이기도 합니다. 이전에 다양한 스타트업에서 콘텐츠 관련 확장에 기여 하기도 했습니다. 분산시스템에 몰두하고 관련 글을 쓰는 것을 좋아하며, Azure Cloud Summit, Kubernetes Community Days 등에서 관련 발표를 한 적도 있습니다! Hrittk 님에게 최고의 순간은 코드와 콘텐츠, 멘토링으로 커뮤니티에 영향을 줄 방법을 찾을 때 입니다.