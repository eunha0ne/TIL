# 네트워크

## LB(로드 밸런싱)과 CNAME

`DNS(Domain Name System)`를 이용해서 커스텀 도메인을 사용할 때, 서브 도메인을 등록하기 위해서는 `CNAME` , `A` 레코드 등의 정보를 DNS 서비스 홈페이지에 등록해야 한다. DNS 서버에는 도메인 주소와 IP 주소가 한 쌍으로 저장되어 있다. 이 하나의 행을 `Record(레코드)`라고 부르며, 저장되는 형태에 따라서 레코드 타입이 구분된다.

### DNS Resource Records

Zone DNS 데이터베이스는 레코드의 모음(collection)으로 구성되어 있다. 각각의 레코드 자원은 특정 객체에 대한 정보를 제공한다. 일반적으로 여기에는 A, AAAA, CNAME, HINFO, ISDN, NS 등의 여러 형태의 레코드가 사용된다.

#### A

- 도메인 주소와 서버의 IP 주소를 직접 매핑

찾아가는 서버 IP 주소를 단 한번의 요청으로 확인할 수 있다. 단, IP 주소가 빈번하게 변경되는 환경에서는 적합하지 않다. 예를들어 하나의 IP 주소에 여러 서브 도메인을 처리한다면, IP 주소가 변경 됬을 때 관련된 모든 레코드를 찾아서 번경해야 한다.

#### CNAME

- 도메인 주소를 또 다른 도메인 주소로 매핑

주소가 빈번하게 변경되는 환경에서 유연하게 대응할 수 있다. 단, 실제 IP 주소를 확인할 때까지 여러번 요청해야 함으로 경우에 따라서는 성능 저하가 있을 수 있다.

### DNS를 이용한 LB 설정

`DNS LB`는 별도의 소프트웨어나 하드웨어 로드 밸런싱 장비를 사용하지 않고도, DNS를 이용하여 도메인 정보를 조회하는 시점에 다른 IP 정보를 통해서 트래픽을 분산시키는 기법이다.

## 참고

- [DNS에서 CNAME과 A 레코드의 차이](https://win100.tistory.com/360)
- [DNS를 이용한 로드밸런싱(Load Balancing) 설정](https://hoing.io/archives/8607)
- [Online DNS Record Viewer](http://dns-record-viewer.online-domain-tools.com/)
