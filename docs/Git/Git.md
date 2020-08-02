# Git

NOTE:

- Pull과 Fetch의 차이점: Pull은 원격 저장소 또른 로컬 브랜치로부터 자원을 fetch(가져와서), merge(병합)을 바로 진행하는 것이고. Fetch는 오브젝트와 레퍼런스만 가져온 상태로 만든다. Fetch를 사용하면 병합 이전에 추가적인 명령어를 사용해서 비교하거나 필요한 테스크를 수행할 수 있다.

## 커밋 컨벤션

### 좋은 커밋 메시지가 가져오는 생산성

- 커밋 로그 가독성
- 더 나은 협업과 리뷰 프로세스
- 더 쉬운 코드 유지보수

컨벤션 참고:

- [메쉬코리아 커밋 컨벤션](https://github.com/meshkorea/front-end-engineering/blob/master/conventions/commit/index.md)

### 커밋 메시지 작성법

- 제목과 본문을 한 줄 띄워 분리하기
- 제목은 영문 기준 59자 이내로
- 제목 첫글자는 대문자로
- 제목 끝에 `.` 금지
- 제목은 `명령조`로 작성
- 제목이나 본문에 이슈 번호 붙이기
- 본문은 영문 기준 72자마다 줄 바꾸기
- 본문은 `어떻게` 보다 `무엇을` , `왜` 에 맞춰서 작성

## 깃 명령어 활용하기

> 터미널에서 `git`만 입력하면 주요 명령어 목록이 출력된다.

### 커밋 그래프를 최대한 단순하게 가져가는 방법

rebase와 squash 명령어를 사용:

- squash: 중복된 불필요한 커밋을 하나로 합침.
- rebase: 개발한 내용(커밋들)을 병합할 브랜치의 가장 앞으로 이동하여, 동료 개발자들과 커밋 로그가 시간상으로 섞이는 것을 방지. 이 과정에서 그래프가 순차적으로 정렬되면서 읽기 쉬운 형태가 된다.

```zsh
# 스쿼시 방법:
# 예를들어, 헤드로부터 3번째 커밋까지 리베이스 진행하려면
git rebase -i HEAD-3

# 최근 커밋 히스토리에서 하나로 합칠 내용들을 `squash`로 변경
# Before:
pick d4a1150 Update: 문서 추가
pick 234fc12 Update: 문서 추가2
pick 5i69v4f Update: 문서 추가3

# After:
pick d4a1150 Update: 문서 추가
squash 234fc12 Update: 문서 추가2
squash 5i69v4f Update: 문서 추가3

# git status 명령어나 터미널에 출력된 내용에 따라서 진행하며,
# 진행 상태에 때라서 `--abort`, `--skip`, `--continue` 옵션을 사용해서 리베이스 과정을 관리한다.
git rebase --continue
```

### 커밋하기 전 내용을 임시 저장하는 방법

```bash
# 임시 저쟝:
git stash

# 저장된 내용 꺼내기(다시 적용):
git stash pop

# 저장된 내용 버리기:
git stash drop
```

## Reference

- [Git 사용 중에 자주 만나는 이슈 정리](https://parksb.github.io/article/28.html)
- [자주 사용하는 기초 git 명령어](https://medium.com/@pks2974/%EC%9E%90%EC%A3%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EA%B8%B0%EC%B4%88-git-%EB%AA%85%EB%A0%B9%EC%96%B4-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0-533b3689db81)
- [좋은 git 커밋 메세지를 작성하기 위한 8가지 약속](https://djkeh.github.io/articles/How-to-write-a-git-commit-message-kor/)
- [Git Rebase 활용하기](https://velog.io/@godori/Git-Rebase)
- [How to clean up git branches](https://devconnected.com/how-to-clean-up-git-branches/)
- [Cleaning up old git branches](http://ericfarkas.com/posts/cleaning-up-old-git-branches)
- [게임으로 배우는 깃 명령어](https://learngitbranching.js.org/?locale=ko)
