---
title: WebAssembly & Ubuntu Containers The Power Couple
date: 2022-11-27T10:00:00+09:00
end: 2022-11-27T10:45:00+09:00
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
    - name: Shivay Lamba
      bio: WASMEdge Ambassador
      email: shivaylamba@gmail.com # Email
      launchpad: # link to launchpad.net profile
      github:  # link to github profile
      profile: profile.png # Speaker photo
      linkurl: https://twitter.com/howdevelop # Other website link url
      linklabel: Twitter # Label for linkurl
---

{{< youtube oG5ZO44oBec >}}

웹 어셈블리(Wasm)이 다가오는 클라우드 기술로 각광받고 있습니다. 중요한 백엔드 함수 처리를 위해 WASM 으로도 알려진 웹 어셈블리(WebAssembly)는 이식 가능하고 완전한 브라우저 런타임에서 변화하고 있습니다.

언어 중립성, 크로스 프랫폼 및 다중 아키텍처 지원, 보안 샌드박스, 작은 바이너리 사이즈와 어셈블리는 훌룡한 성능은 이를 유망한 기술로 만들고 있습니다. 이러한 이점을 활용하여 저희 중 일부는 웹 브라우저 보다 클라우드 기반 및 서버에서 구동되는 Wasm 솔루션 개발을 시작 했습니다.

WASM 컨테이너에 대해 흥미로운 점은 안전하고, 효율적이고, 이식 가능하며 빠르다는 것입니다. 적어도 논문상으로는 컨테이너 구현채보다 좋아 보입니다.

Wasm은 "Docker의 대체제"로 잘못 마케팅 되고 있습니다. 사실 Wasm은 Docker를 더 강력하게 합니다. Docker (리눅스 컨테이너)에는 없는 기능이 몇가지 있지만, 오랫동안 리눅스 컨테이너를 클라우드 애플리케이션을 만드는 가장 바람직한 방법으로 만든 많은 기능이 부족합니다. 

이번 세션에서는 클라우드 환경에서 잠재력을 강조하는 Wasm을 소개합니다. 그런 다음 Ubuntu 기반 환경에서 Wasm 애플리케이션을 설치, 개발 및 배포할 수 있는 방법을 시연합니다.  세션에서는 Ubuntu 환경 내에서 웹 어셈블리 앱을 설치, 빌드, 배포하는 방법을 논의하기 위해 CNCF 샌드박스 프로젝트 WASMEdge(오픈 소스 웹 어셈블리 런타임)를 예로 들어 보여주며, 이를 통해 Ubuntu 컨테이너와 웹 어셈블리의 파워 커플이 어떻게 함께 작동하는지 보여줄 것이다. 

Github에 있는 WASMEdge의 표준 설치 프로그램 스크립트는 Debian과 Snap 기반을 포함한 모든 리눅스 배포판에 WASMEdge를 설치하는 데 사용할 수 있습니다. 

그런 다음 빌드 스크립트(Github 오픈 소스 저장소의 일부)를 사용하여 앱을 빌드하는 현재 Ubuntu 환경을 기반으로 Debian 또는 Snap에 빌드할 수도 있습니다. 

배포를 위해 kubelets이 Kubernetes에서 WASM을 실행할 수 있도록 하는 또 다른 오픈 소스 프로젝트인 Krustlet과 함께 WASMedge를 실행할 수 있도록 지원합니다. 따라서 Microk8s, Minikube 등에 WASMedge 앱을 배포할 수 있습니다. (https://github.com/second-state/krustlet-wasmedge-provider)

## 청중 사전 지식
리눅스 컨테이너, 가상머신에 대한 기본 지식
## 이 세션에서 배울 수 있는 것
머신 러닝 실무자, 연구원, 클라우드 네이티브 애호가, DevOps/MLOps 실무자 등 누구에게나 웹 어셈블리는 컨테이너 작업에 매우 적합한 도구입니다. 

WASM이 클라우드 네이티브 에코시스템에 제공하는 이점과 Docker 컨테이너로 실행하는 방법, 에지 컴퓨팅 및 클라우드 네이티브 에코시스템에서 더 많은 애플리케이션을 실행할 수 있는 방법에 대해 알아봅니다.

## 발표자 소개
Shivay Lamba는 데브옵스, 머신러닝, 풀스택 개발을 전문으로 하는 소프트웨어 개발자입니다. 

오픈 소스 매니아이며 Google Code In과 Google Summer of Code와 같은 다양한 프로그램에 멘토로 참여했으며 MLH 펠로우로도 활동했습니다. 커뮤니티 활동에도 적극적으로 참여하고 있습니다.  TensorflowJS SIG 회원, OpenMined and CNCF Service Mesh Community, SODA Foundation 멘토로도 활동 중입니다. Github Satellite, Voice Global, Fossasia Tech Summit, TensorflowJS Show & Tell 등 다양한 컨퍼런스에서 발표한 이력도 있습니다.