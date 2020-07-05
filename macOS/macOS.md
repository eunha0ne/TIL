# macOS

목차 - Table of Contents

- [숨겨진 폴더에 접근하기](#숨겨진-폴더에-접근하기)
- [파일 에디터로 수정하기 - Vim](#파일-에디터로-수정하기---Vim)

## 숨겨진 폴더에 접근하기

> 카탈리나 버전 부터는 파일 시스템에 대한 원칙 변경으로 시스템 파일에서 기능하지 않는 것으로 보인다.

```zsh
# 파일 또는 폴더의 플래그를 변경하는 명령어:
chflags nohidden ~/usr

# 복구하기
chflags hidden ~/usr
```

참고:

- https://macpaw.com/how-to/access-usr-folder-mac

## 파일 에디터로 수정하기 - Vim

기본 명령어:

```zsh
# 에디터 열기
vim {file}

# 에디터 나가기
:q

# 에디터 나가기 (파일을 저장하고)
:wq
```

참고:

- [기본 명령어 모음](https://www.keycdn.com/blog/vim-commands)
