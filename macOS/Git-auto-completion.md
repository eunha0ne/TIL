# Git 자동 완성

터미널에서 깃 사용 시에 명령어 자동 완성을 지원하는 방법을 알아본다.

> 카탈리나 이후 버전 부터는 새로운 파일 시스템으로 변경되어 usr/ 경로에 접근할 수 없다.
> 대부분의 시스템 파일에 쓰기가 보호 된다. [두번째 방법](#macOS:-Catalina-버전)으로 시도해 보자.
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

   # 폴더 생성 및 복사 명령어:
   sudo mkdir /opt/local/etc/bash_completion.d
   sudo cp /Library/Developer/CommandLineTools/usr/share/git-core/git-completion.bash /usr/local/etc/bash_completion.d/git-completion.bash
   ```

4. 추가된 배쉬 스크립트 파일을 프로필을 갱신해서 불러온다.

   ```zsh
   # 프로필 갱신:
   source ~/.bash_profile
   ```

## macOS: Catalina 버전

...

## Reference

- https://medium.com/@dilankam/enable-auto-completion-of-git-commands-on-mac-os-mojave-10-14-2d692c100bc
- https://dev.to/saltyshiomix/a-guide-for-upgrading-macos-to-catalina-and-migrating-the-default-shell-from-bash-to-zsh-4ep3
