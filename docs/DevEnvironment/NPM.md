# npm: Node Package Manager

`Node.js`가 필요한 이유:

- 최신 스펙의 개발 환경 지원
- 빌드 자동화
- 개발 환경 커스터마이징

프로젝트 초기화: 

```bash
# -y/--yes to skip the questionnaire altogether.
npm init -y
```

## package.json

```json
{ 
  "dependencies": {
    "react": "^16.12.0"
  }
}
```

> 리액트 16.12.0 버전이 설치됨

유의적 버전(sementic version, SemVer):

- 버전 번호를 관리하기 위한 규칙
- npm 모듈은 모두 SemVer을 따르고 있다. (semetic versioning)
- 주(major), 부(minor), 수(patch) 세 가지 숫자를 조합해서 관리
    - 각 버전의 의미
        - major: api 호환성이 깨질만한(incompatible) 변경사항을 의미
        - minor: 하위 호환성을 지키면서 기능이 추가된 것을 의미
        - patch: 하위 호환성을 지키는 범위 내에서 버그가 수정된 것을 의미 

> 위 예제의 `v16.12.0` 의미는 주 버전 16, 부 버전 12, 수 버전 0을 의미한다. 

버전 범위:

유의적 버전 명세 뿐만 아니라 프로젝트의 버전 정책에 따라 관리할 수 있다.

- 틸트(~): 마이너 버전이 명시되어 있으면 패치 버전만 변경한다.
    - ~0.0.1 : >=0.0.1 <0.1.0
    - ~0.1.1 : >=0.1.1 <0.2.0
    - ~0.1 : >=0.1.0 <0.2.0
    - ~0 : >=0.0 <1.0

- 캐럿(^): 정식버전에서 마이너와 패치 버전을 벼경한다.
    - ^1.0.2 : >=1.0.2 <2.0
    - ^1.0 : >=1.0.0 <2.0
    - ^1 : >=1.0.0 <2.0
    
> 캐럿 예외 사항: 버전이 `1.0.0` 미안인 경우 `pre-release`라고 부르며 소프트웨어 개발에서 `1.0` 버전을 출시하기 전까지는 API 변경이 수시로 일어나기 때문에 `0.x.x`에서는 마치 틸트처럼 동작하면서 지정한 버전 자릿수 내에서만 업데이트가 이루어짐.
> - ^0.1.2 : >=0.1.2 <0.2.0
> - ^0.1 : >=0.1.0 <0.2.0
> - ^0 : >=0.0.0 <1.0.0
> - ^0.0.1 : ==0.0.1

## 트러블 슈팅 기록

Error: Cannot find module 'webpack': 

- 상황:

`webpack`이 전역에 설치되어 있지만, 프로젝트 구동 시에 웹팩을 찾지 못함.
vue-cli를 사용하지 않고 환경 설정된 구버전 프로젝트에서 vue-cli 환경으로 이전하면서 발생함.

- 해결 방법:

```zsh
# 전역에 설치된 웹팩을 프로젝트에 연결한다.
# 명령어 실행:
npm link webpack
```

## Reference

- [http://jeonghwan-kim.github.io/series/2019/12/10/frontend-dev-env-webpack-basic.html](http://jeonghwan-kim.github.io/series/2019/12/10/frontend-dev-env-webpack-basic.html)
- [https://blog.outsider.ne.kr/1041](https://blog.outsider.ne.kr/1041)
