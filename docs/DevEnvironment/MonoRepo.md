# 모노레포(Mono Repo) 구성과 레나(lerna)

## 시작하기

```shell script
# 레나 전역 설치
npm install --global lerna

# 새로운 저장소 생성 그리고 해당 폴더로 이동
git init study-lerna && cd study-lerna

# 레나 시작
lerna init
```

## 주요 명령어

### import

> Import the package in the local path <pathToRepo> into packages/<directory-name> with commit history.

```shell script
# lerna import <pathToRepo>
lerna import [저장소의 로컬 경로]

# 로컬 경로 출력
pwd
```

## 참고

- [https://lerna.js.org/](https://lerna.js.org/)
- [https://kdydesign.github.io/2020/08/27/mono-repo-lerna-example/](https://kdydesign.github.io/2020/08/27/mono-repo-lerna-example/)
- [https://geonlee.tistory.com/215](https://geonlee.tistory.com/215)
