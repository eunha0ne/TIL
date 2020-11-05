# Node Version Manager

> nvm is a version manager for node.js, designed to be installed per-user, and invoked per-shell. nvm works on any POSIX-compliant shell (sh, dash, ksh, zsh, bash), in particular on these platforms: unix, macOS, and windows WSL

## 설치하기

macOS 기준:

```shell script
brew install nvm
```

```shell script
# (.zshrc 파일이 없는 경우에는 생성)
touch ~/.zshrc

# 파일을 열고, 아래 내용을 입력
open ~/.zshrc 
```

추가로 입력할 내용:

```text
export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh
```

## 명령어

```shell script
# 버전 확인
nvm --vsersion

# (프로젝트 규칙에 따른 node 버전) 사용하기
nvm use
# (버전을 명시해서) 사용하기
nvm use 10.16.3

# 설치 (.nvmrc 파일에 명시된 버전을 따르는)
nvm install
# 설치 (최신 버전)
nvm install node
# 설치 (LTS release - 안정적 버전)
nvm install --lts
# 설치 (특정 버전, v10.16.3)
nvm install 10.16.3

# 설치된 node 리스트 출력
nvm ls
```

## 프로젝트의 node 버전 설정하기

`.nvmrc` 파일을 생성하고, 버전을 파일 내부에 명시

```
14.15.0
```

## 참고 

- [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)
- [https://dev-yakuza.posstree.com/ko/environment/nvm/](https://dev-yakuza.posstree.com/ko/environment/nvm/)
- [https://superuser.com/questions/886132/where-is-the-zshrc-file-on-mac](https://superuser.com/questions/886132/where-is-the-zshrc-file-on-mac)
