# Elastic Load Balancing

> 로드 밸런싱이란?
> 부하분산(Load Balancing)은 컴퓨터 네트워크 기술의 일종으로 둘 혹은 셋이상의 중앙처리장치 혹은 저장장치와 같은 컴퓨터 자원들에게 작업을 나누는 것을 의미한다.

- 들어오는 애플리케이션 트래픽을 여러 대상에 자동으로 분산시킨다.
  - 분산 대상: Amazon EC2 인스턴스, 컨테이너, IP 주소, Lambda 함수, 가상 어플라이언스 등등.
- 단일 또는 여러 가용 영역에서 다양한 애플리케이션 부하를 처리한다.

위와 같이, `ELB`는 네트워크 트래픽 분산을 통해 애플리케이션의 확장성을 개선한다.

## ELB 로드 밸런서의 종류

- Application Load Balancer
  - HTTP 및 HTTPS 트래픽의 로드 밸런싱에 적합
  - 최신 애플리케이션 아키텍처(마이크로서비스, 컨테이너 등) 전달을 위한 라우팅 기능을 제공
  - 요청 내용에 따라 트래픽을 Amazon VPC 내의 대상으로 라우팅
- Network Load Balancer
  - 극도의 성능이 요구되는 TCP, UDP 및 TLS(전송 계층 보안) 트래픽의 로드 밸런싱에 적합
  - 매우 짧은 지연시간을 유지하면서 초당 수백만 개의 요청을 처리
  - 트래픽을 Amazon VPC 내의 대상으로 라우팅
- Gateway Load Balancer
  - 트래픽의 소스와 대상에 대해 투명하여 보안, 네트워크 분석 등이 요구되는 상황에서 적합
  - 타사 가상 네트워킹 어플라이언스의 배포, 확장 및 실행 지원
  - 타사 어플라이언스에 대한 로드 밸런싱 및 자동 조정 기능 제공
- Classic Load Balancer
  - EC2-Classic 네트워크 내에 구축된 애플리케이션용
  - Amazon EC2 인스턴스의 요청 및 연결 수준에서 동작되는 기본적인 로드 밸런싱 제공

## 특징

- **고가용성 및 탄력성**
  - AWS 네트워크의 일부로서, 장애 경계를 기본적으로 인식하여 글로벌 서버 로드 밸런싱(GSLB) 없이도 리전에서 애플리케이션을 계속 사용할 수 있도록 지원 함
  - `ELB`는 완전 관리형 서비스임으로 여러 로드 밸런서를 설치하지 않고, 애플리케이션 제공에 집중할 수 있음
  - 용량은 기본 애플리케이션 서버의 사용률에 따라 자동으로 추가되거나 제거됨
- **보안**
  - Amazon VPC와 연동되어 통합 인증서 관리, 사용자 인증 및 SSL/TLS 복호화 등의 보안 기능 제공
  - 중앙에서 TLS 설정을 관리하고, CPU 집약적인 워크로드를 애플리케이션에서 오프로드하는 유연성 제공
  - 악의적인 행위자가 애플리케이션에 도달하기 전의 보호 수준을 강화
  - 오픈 소스 솔루션으로 개발되어 HTTP 기반 공격의 기능성을 낮춤
- **기능 적용 범위**
  - 컨테이너 기반 워크로드에 필요한 기능 지원
  - 네이티브 HTTP 엔드포인트를 제공 함으로, 다른 솔루션에 대한 의존성이 불필요
  - 여러 타사 어플라이언스를 통해 송수신되는 트래픽을 라우팅하기 위한 단일 게이트웨이 생성
- **모니터링 및 가시성**
  - 애플리케이션 상태와 성능을 실시간으로 모니터링
- **통합 및 글로벌 접근성**
  - 다른 AWS 서비스와 통합

## 사용 사례

- 서버리스 운영 및 컨테이너로 애플리케이션 현대화
- 하이브리드 클라우드 구축
- 타사 가상 어플라이언스 확장

## 참고

- [https://aws.amazon.com/ko/elasticloadbalancing/?elb-whats-new.sort-by=item.additionalFields.postDateTime&elb-whats-new.sort-order=desc](https://aws.amazon.com/ko/elasticloadbalancing/?elb-whats-new.sort-by=item.additionalFields.postDateTime&elb-whats-new.sort-order=desc)
- [https://ko.wikipedia.org/wiki/부하분산](https://ko.wikipedia.org/wiki/%EB%B6%80%ED%95%98%EB%B6%84%EC%82%B0)