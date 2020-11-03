# AWS

[[toc]]


## S3 (Amazon Simple Storage Service)

확장성, 데이터 가용성 및 보안, 성능을 지원하는 `객체 스토리지 서비스`

- 모든 종류의 데이터를 원하는 형식으로 저장
- 저장할 수 있는 데이터의 전체 볼륨과 객체 수에 제한 없음
- key 기반의 객체 스토리지, 데이터를 저장 맟 검색하는데 사용할 수 있는 객체 키를 할당
- 표준 기반 REST 웹 서비스 인터페이스 제공
- 안전성

참고: 

- [http://wildpup.cafe24.com/archives/785](http://wildpup.cafe24.com/archives/785)

키워드:

- bucket: 데이터를 공유하나는 하나의 디스크, S3에서 생성할 수 있는 최상위 디렉토리의 개념

## AWS CloudFront 

아마존 웹 서비스, 클라우드프론트는 정적, 동적 컨텐츠를 빠르게 응답하기 위한 캐시 기능을 제공하는 CDN(콘텐츠 배포 네트워크) 서비스. => 전 세계의 정적/동적 웹 콘텐츠, 비디오 스트림 및 API를 안전하게 대규모로 전송할 수 있는 콘텐츠 전송 네트워크(CDN) 서비스

> S3와 연동
> - 캐싱 지원으로 S3에 저장된 컨텐츠에 직접 접근하지 않아도 됨, 비용 감소. 빠른 응답 지원이 가능함으로
> 
> - 애플리케이션과 인프라에 대한 관문으로 사용하면서 주요 공격 차단
> - 콘텐츠, API 또는 애플리케이션을 SSL/TLS를 통해 전송 가능
> - 특정 콘텐츠에 대한 저급 제한 가능
> - 가용성 향상: 캐싱을 통한 Origin의 워크로드를 줄일 수 있음
> - S3, EC2 또는 Elastic Load Balancing과 같은 AWS Origin을 사용하는 경우에는 이러한 서비스와 CloudFront 간에 전송된 데이터에 대해서는 요금 청구 없음

## S3와 CloudFront의 통합

- `S3, 객체 스토리지 서비스`와 `CloudFront, 콘텐츠 배포 네트워크(CDN) 서비스`를 사용해서 이미지, 동정상 등의 미디어 파일이나 css 또는 js 파일 같은 정적 콘텐츠를 저장하고, 보호
- 콘텐츠는 클라우드 환경의 S3 버킷(bucket)에 저장
    - 스토리지 공간은 자동으로 확장되거나 축소되기 때문에 크기 할당이 불필요
    - S3는 서버리스(Severless) 서비스이기 때문에 파일이 저장되는 서버를 관리하거나 패치할 필요가 없고, 콘텐츠를 저장하거나 가져오는 행위만 필요 또한 (동적) 애플리케이션에 서버가 필요하더라도 정적 콘텐츠에 대한 요청을 처리할 필요가 없어서 서버 크기를 줄일 수 있음
- 비용 관리와 애플리케이션 성능과 보안을 최적화하기 위한 Amazon ColudFront와 S3를 (연동) 설정할 수 있다.
    - 클라우드 프론트를 통해서 데이터를 전송하면 설계상 S3에서 직접 사용자에게 전송하는 것보다 더욱 비용이 효율적이다.  
    - 클라우드 프론트는 엣지 로케이션이라고 하는 데이터 센터의 전 세계 네트워크를 통해서 콘텐츠 서비스를 제공하기 때문에, 엣지 서버를 사용해 콘텐츠를 캐싱하고 서비스를 제공하면 최종 사용자가 위치한 곳에 더욱 가깝게 콘테츠를 전송할 수 있어서 성능이 향상됨 
- 콘텐츠 보안
    - 지리적 제한, 서명된 URL, 서명된 쿠키 등으로 액세스 제한을 추가로 설정할 수 있음
    - 악성 공격 차단 
        - CloudFront = 웹 애플리케이션 방화벽(AWS WAF) + 관리현 DDoS 보호 서비스 (AWS Shield)
- CloudFormation을 통한 정적 파일 배포
    - S3와 CloudFront를 최대한 일괄적으로 설정을 지원함

## 참고

- [https://aws.amazon.com/ko/s3/](https://aws.amazon.com/ko/s3/)
- [https://aws.amazon.com/ko/blogs/korea/amazon-s3-amazon-cloudfront-a-match-made-in-the-cloud/](https://aws.amazon.com/ko/blogs/korea/amazon-s3-amazon-cloudfront-a-match-made-in-the-cloud/)
- [https://medium.com/@bal.dongdongdong/aws-s3%EC%99%80-cloud-front-%EC%97%B0%EB%8F%99-1fd6f94a91f7](
https://medium.com/@bal.dongdongdong/aws-s3%EC%99%80-cloud-front-%EC%97%B0%EB%8F%99-1fd6f94a91f7)
- [https://victorydntmd.tistory.com/335](https://victorydntmd.tistory.com/335)
