# Computer Science

[[toc]]

## 암호화 해시 함수

### MD5(Message-Digest algorithm 5)

128비트 `암호화 해시 함수`이다. 프로그램이나 파일이 원본 그대로인지 확인하는 무결성 검사에 사용된다.

1996년 MD5의 설계상 결함이 발견되어 SHA-1과 같은 다른 안전한 알고리즘 사용할 것을 권장하기 시작함. 2008년 12월에는 MD5의 결함을 이용해 SSL 인증서를 변조하는 것이 가능하다는 것이 발표됨. **현재는 MD5 알고리즘을 보안 관련 용도로 쓰는 것을 권장하지 않는다.**

### SHA (Secure Hash Algorithm)

SHA(안전한 해시 알고리즘) 함수들은 서로 관련된 암호학적 해시 함수들의 모음이다. 미국 국가안보국(NSA)이 1993년에 처음 설계했으며 미국 국가 표준으로 지정되었다.

`SHA-1`은 SHA 함수들 중에 가장 널리 쓰이며 TLS, SSL, PGP, SSH, IPSec 등의 많은 보안 프로토콜과 프로그램에서 사용되고 있다. 이전에 널리 사용되던 MD5를 대신해서 사용되기도 한다. **조금 더 중요한 기술에는 `SHA-256`이나 그 이상의 알고리즘을 사용할 것이 권장 된다.**

|  알고리즘   | 해시값 크기 | 내부 상태 크기 | 블록 크기 | 길이 한계 | 워드 크기 | 과정수 |     사용되는 연산     | 충 돌 |
| :---------: | :---------: | :------------: | :-------: | :-------: | :-------: | :----: | :-------------------: | :---: |
|    SHA-0    |     160     |      160       |    512    |    64     |    32     |   80   |   +,and,or,xor,rotl   |   O   |
|    SHA-1    |     160     |      160       |    512    |    64     |    32     |   80   |    +,and,xor,rotl     |   O   |
| SHA-256/224 |   256/244   |      256       |    512    |    64     |    32     |   64   | +,and,or,xor,shr,rotr |       |
| SHA-512/384 |   512/384   |      512       |   1024    |    128    |    64     |   80   | +,and,or,xor,shr,rotr |       |

함수 사용 예제:

```
// 메시지 끝에 `.` 마침표로 차이를 두고 비교값 해시값
SHA1("The quick brown fox jumps over the lazy dog")  // 2fd4e1c67a2d28fced849ee1bb76e7391b93eb12
SHA1("The quick brown fox jumps over the lazy dog.") // 408d94384216f890ff7a0c3528e8bed1e0b01621
```

해시값은 눈사태 효과로 인해 메시지가 조금만 바뀌어도 그 값이 완전히 달라지는 것을 알 수 있다.

키워드:

PBKDF2, salt, 레인보우테이블

참고:

- [https://ko.wikipedia.org/wiki/MD5](https://ko.wikipedia.org/wiki/MD5)
- [https://ko.wikipedia.org/wiki/SHA](https://ko.wikipedia.org/wiki/SHA)
- [https://www.zerocho.com/category/NodeJS/post/593a487c2ed1da0018cff95d](https://www.zerocho.com/category/NodeJS/post/593a487c2ed1da0018cff95d)
- [https://cryptojs.gitbook.io/docs/](https://cryptojs.gitbook.io/docs/)
