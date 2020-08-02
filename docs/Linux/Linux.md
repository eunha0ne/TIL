# Linux

목차 - Table of Contents

- [Commands](Commands)
- [Permissions: 권한 설정과 표기](#Permissions:-권한-설정과-표기)
- [Issues](#Issues)
  - CheckPermissions Missing write access

## Commands

> 리눅스 기본 명령어 모음

- 파일 및 폴더 삭제:

  ```zsh
  rm FILE|DIRECTORY...

  # 폴더를 삭제할 때는 재귀적으로 파일을 삭제할 수 있도록 `-r` 옵션을 사용한다.
  rm -r FILE|DIRECTORY...
  ```

- 파일 생성:

  ```bash
  # 기본적으로 파일을 생성하고, 이미 존재하는 경우에는 `time stamp`를 갱신한다.
  touch [OPTION]... FILE...
  ```

- 폴더 생성:

  ```zsh
  # 없는 경우에는 폴더를 생성한다.
  mkdir [OPTION]... DIRECTORY...
  ```

- 자원 이동(이름 변경):

  ```zsh
  # 오리진 자원은 삭제되고, 명시한 폴더 또는 이름으로 이동함
  mv [OPTION]... SOURCE... DESTINATION
  ```

참고:

- [Read: Essential Linux Basic Commands](https://linoxide.com/linux-command/essential-linux-basic-commands/)
- [Read: 37-important-linux-commands-you-should-know](https://www.howtogeek.com/412055/37-important-linux-commands-you-should-know/)

## Permissions: 권한 설정과 표기

> The Macintosh OSX platform is based on Unix, and thus, the POSIX permissions model. With OSX, you can augment these permissions with Access Control Lists (ACLs).
> Unix/Linux systems utilize a relatively basic structure for permissions. Each object, be it a file or folder, has 9 bits of metadata used in determining who or what has the ability to access it.

```zsh
# 폴더 및 파일 권한을 출력하는 명령어:
ls -l

# 권한 설정 명령어:
chmod {number} {file,dir}
```

### 상태와 의미

```zsh
# `ls -l` 명령어 사용했을 때 출력되는 권한 상태 예:
drwxrwxrwx
```

| indicator |    rwx    |    rwx    |     rwx     |
| :-------: | :-------: | :-------: | :---------: |
| 파일 타입 | 파일 오너 | 그룹 오너 | 모든 사용자 |

> Each 3-bit section has a specific value for each individual bit. As in all binary, if that bit is a 1, access for that permission type is turned on; if it is a zero, the permission type is turned off. These three types of access are read (R), write (W), and execute (X).

### 이진수 표현과 변환 값

```zsh
rwx rwx rwx = 111 111 111
rw- rw- rw- = 110 110 110
rwx --- --- = 111 000 000

rwx = 111 in binary = 7
rw- = 110 in binary = 6
r-x = 101 in binary = 5
r-- = 100 in binary = 4
```

### 권한 목록

| 값  |   문자    | 의미                                                                                                                                                                                     |
| :-: | :-------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 777 | rwxrwxrwx | No restrictions on permissions. Anybody may do anything. Generally not a desirable setting.                                                                                              |
| 755 | rwxr-xr-x | The file's owner may read, write, and execute the file. All others may read and execute the file. This setting is common for programs that are used by all users.                        |
| 700 | rwx------ | The file's owner may read, write, and execute the file. Nobody else has any rights. This setting is useful for programs that only the owner may use and must be kept private from others |
| 666 | rw-rw-rw- | All users may read and write the file.                                                                                                                                                   |
| 644 | rw-r--r-- | The owner may read and write a file, while all others may only read the file. A common setting for data files that everybody may read, but only the owner may change.                    |
| 600 | rw------- | The owner may read and write a file. All others have no rights. A common setting for data files that the owner wants to keep private.                                                    |

```zsh
# 권한 설정 예:
chmod 600 {file,dir}
```

참고:

- http://linuxcommand.org/lc3_lts0090.php
- https://www.byteworks.com/understanding-osx-permissions/

## Issue

> 트러블 슈팅 기록

### CheckPermissions Missing write access

상황:

`npm install -g` 명령어로 전역에 패키지 설치 시에 발생함.

해결 방법:

```zsh
# 명령어 실행:
sudo chown -R $USER /usr/local/lib/node_modules
```

NOTE:

- `sudo`는 `root` 레벨에서 명령어를 실행한다는 의미를 갖는다. (System Super User)
- `chown` 파일 또는 폴더의 소유자 변경을 변경하는 명령어이다. `-R` 옵션은 명령어에 명시한 경로의 모든 파일과 폴더에 대해서 재귀적으로 소유자 변경을 진행하겠다는 의미이다.
- `$USER` 사용자 이름으로 치환하는 환경 변수이다.

참고:

- https://flaviocopes.com/npm-fix-missing-write-access-error/
