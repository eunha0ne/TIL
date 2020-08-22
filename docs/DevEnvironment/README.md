# DevEnvironment

`.gitignore` 파일을 규칙에 따라 작성하기:

```
# 모든 .a 파일 무시하기
*.a

# 그렇지만 계속 추적하고 싶은 경우, `!` 심볼 사용
!lib.a

# 현재 디랙토리 기준으로 TODO 파일 무시 (subdir/TODO는 추척됨)
/TODO

# `build`라는 이름을 가진 폴더의 모든 파일 무시하기
build/

# `doc`이라는 이름을 가진 폴더의 `.txt` 확장자를 가진 모든 파일 무시하기. (단, `doc/server/arch.txt`은 추적됨)
doc/*.txt

# `doc`이라는 이름을 가진 폴더의 `.pdf` 확장자를 가진 모든 파일 무시하기 (하위 디렉토리도 무시됨) 
doc/**/*.pdf
```

## Reference

- [https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_ignoring](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_ignoring)
