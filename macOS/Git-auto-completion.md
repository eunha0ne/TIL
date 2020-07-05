# Git 자동 완성

터미널에서 깃 사용 시에 명령어 자동 완성을 지원하는 방법을 알아본다.

> 카탈리나 이후 버전 부터는 새로운 파일 시스템으로 변경되어 usr/ 경로에 접근할 수 없다.
> 대부분의 시스템 파일에 쓰기와 읽기가 보호 된다. [두번째 방법](#macOS:-Catalina-버전)으로 시도해 보자.
>
> - https://developer.apple.com/videos/play/wwdc2019/710/#

## macOS: Catalina 이전 버전

1. 자신의 macOS에서 자동 완성을 도와주는 스크립트 파일이 있는지 살펴본다.

   ```zsh
   # 검색 명렁어:
   sudo find / -type f -name "git-completion.bash"
   ```

2. 검색된 결과 차후 사용을 위해서 저장한다.

   추천:

   git-core에 설치된 검색 결과를 선택한다.

   > 없는 경우에는 깃헙에서 제공하는 `자동 완성 스크립트 파일`을 사용한다.
   >
   > - https://github.com/git/git/blob/master/contrib/completion/git-completion.bash

3. 스크립트 파일을 아래의 경로로 복사 붙여넣기 한다.

   ```zsh
   # 경로:
   /usr/local/etc/bash_completion.d

   # 폴더 및 파일 생성, 복사:
   sudo mkdir /opt/local/etc/bash_completion.d
   sudo cp /Library/Developer/CommandLineTools/usr/share/git-core/git-completion.bash /usr/local/etc/bash_completion.d/git-completion.bash
   ```

4. 추가된 배쉬 스크립트 파일을 프로필을 갱신해서 불러온다.

   ```zsh
   # 프로필 갱신:
   source ~/.bash_profile
   ```

## macOS: Catalina 버전

1. 스크립트 파일을 `.zsh` 폴더에 다운로드 한다.

   ```zsh
   # 파일 다운로드:
   cd
   cd .zsh
   curl -o .git-completion.zsh https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.zsh
   ```

2. root 경로에서 `.zshrc` 파일을 생성하고(없다면), 아래의 내용을 작성한다.

   ```zsh
   # 파일 생성:
   touch .zshrc

   # 에디터를 사용해서 아래의 내용을 입력한다. (Vim 또는 기타 텍스트 에디터 사용)
   # VScode 기준:
   code .zshrc

   # ~/.zshrc
   fpath=(~/.zsh/.git-completion.zsh $fpath)
   autoload -Uz compinit && compinit
   ```

3. 터미널에서 아래의 명령어를 입력한다.

   ```zsh
   # 변수와 함수 불러오기:
   source ~/.zshrc
   ```

4. 실행 후에 나타나는 `zsh compinit: insecure directories`에 대한 편의 설정을 한다.

   > 터미널을 실행할 때마다 반복적으로 나타나기 때문에,
   > 매번 `y`를 입력해서 실행 명령을 하면 불편하다. 이는 권한 설정을 통해 해결할 수 있다.

   ```zsh
   # insecure directories를 나열:
   compaudit

   # 사용자 정보 (uid 확인):
   id

   # 소유자와 권한 설정:
   sudo chown -R {사용자_uid} {목표_디렉토리}
   sudo chmod -R 755 {목표_디렉토리}

   # 예제)
   # sudo chmod -R 755 /usr/local/share/zsh/site-functions
   ```

## Reference

- https://medium.com/@dilankam/enable-auto-completion-of-git-commands-on-mac-os-mojave-10-14-2d692c100bc
- https://dev.to/saltyshiomix/a-guide-for-upgrading-macos-to-catalina-and-migrating-the-default-shell-from-bash-to-zsh-4ep3
- https://github.com/github/hub/tree/master/etc#zsh
