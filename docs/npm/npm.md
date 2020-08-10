# npm: Node Package Manager

## Issues

### Error: Cannot find module 'webpack'

상황:

`webpack`이 전역에 설치되어 있지만, 프로젝트 구동 시에 웹팩을 찾지 못함.
vue-cli를 사용하지 않고 환경 설정된 구버전 프로젝트에서 vue-cli 환경으로 이전하면서 발생함.

해결 방법:

```zsh
# 전역에 설치된 웹팩을 프로젝트에 연결한다.
# 명령어 실행:
npm link webpack
```
