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
lang: English
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

As the upcoming cloud technology, WebAssembly (Wasm) has attracted attention. To handle important backend functions, WebAssembly, also known as WASM, is transitioning from a portable contained browser runtime. 

The language neutrality, cross-platform/architecture support, security sandbox, small binary sizes, and excellent performance of WebAssembly make it a promising technology. Taking advantage of these advantages, several of us have started creating Wasm solutions that are cloud-based and run on servers rather than web browsers.

What makes it so interesting is the fact that the WASM container is secure, efficient, portable and fast - at least on the paper it looks like the better implementation of containers.

Wasm is incorrectly marketed as a "replacement for Docker," whereas Wasm actually strengthens Docker. It has some capabilities that Docker (Linux Containers) lacks but lacks many of the features that have long made Linux Containers the most desirable method of creating cloud applications. 

Wasm is introduced in this session, which emphasises its potential in cloud environments. Then, we demonstrate how Wasm applications can be installed, developed built and deployed in Ubuntu based environments.  The session will show use of the CNCF sandbox project WasmEdge (an open source WebAssembly Runtime) as an example to discuss how to install, build and deploy WebAssembly apps inside of Ubuntu environments thus showing how the power couple of Ubuntu Containers and WebAssembly work hand in hand. 

The standard installer script for WASMEdge, on its Github can be used to install WASMEdge on any Linux Distro including Debian and Snap based. 

Then you can also use the build script (again part of the Github open source repository) to build it into either of Debian or Snap based on your current Ubuntu environment in which you are building the app. 

For deployment there is support for being able to run WASMEdge with Krustlet which is another open source project which allows kubelets to run WASM in Kubernetes. Thus allowing you to deploy your WASMEdge app to Microk8s, Minikube etc. (https://github.com/second-state/krustlet-wasmedge-provider)

## Prior knowledge
Basic Knowledge of Linux Containers, Virtual Machines should be fine

## What audience can learn from this session
Whether it is Machine Learning Practitioners, Researchers, Cloud Native enthusiasts, DevOps/MLOps practitioners, Web Assembly is a great tool for working with containers. 

The audience will learn the benefits that WASM brings to the Cloud native ecosystem and learn how to run it with Docker containers, to be able to run a lot of high computation on edge computing and even more such applications in the cloud native ecosystem

## About the speaker 
Shivay Lamba is a software developer specializing in DevOps, Machine Learning and Full Stack Development. 

He is an Open Source Enthusiast and has been part of various programs like Google Code In and Google Summer of Code as a Mentor and has also been a MLH Fellow. He is actively involved in community work as well. He is a TensorflowJS SIG member, Mentor in OpenMined and CNCF Service Mesh Community, SODA Foundation and has given talks at various conferences like Github Satellite, Voice Global, Fossasia Tech Summit, TensorflowJS Show & Tell. 
