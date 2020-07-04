# Linux

## Permissions

```zsh
# 폴더 및 파일 권한을 출력하는 명령어:
ls -l

# 권한 설정 명령어:
chmod {number} {file,dir}
```

### 권한 의미

```zsh
# `ls -l` 명령어 사용했을 때 출력되는 권한 상태:
drwxrwxrwx
```

| indicator |    rwx    |    rwx    |     rwx     |
| :-------: | :-------: | :-------: | :---------: |
| 파일 타입 | 파일 오너 | 그룹 오너 | 모든 사용자 |

- `rwx`의 의미
  - r: Read
  - w: Write
  - x: Execute

### 권한 의미 - 이진수

```zsh
rwx rwx rwx = 111 111 111
rw- rw- rw- = 110 110 110
rwx --- --- = 111 000 000

rwx = 111 in binary = 7
rw- = 110 in binary = 6
r-x = 101 in binary = 5
r-- = 100 in binary = 4
```

### 주요 권한 목록

| 이진수 |   문자    | 의미                                                                                                                                                                                     |
| :----: | :-------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  777   | rwxrwxrwx | No restrictions on permissions. Anybody may do anything. Generally not a desirable setting.                                                                                              |
|  755   | rwxr-xr-x | The file's owner may read, write, and execute the file. All others may read and execute the file. This setting is common for programs that are used by all users.                        |
|  700   | rwx------ | The file's owner may read, write, and execute the file. Nobody else has any rights. This setting is useful for programs that only the owner may use and must be kept private from others |
|  666   | rw-rw-rw- | All users may read and write the file.                                                                                                                                                   |
|  644   | rw-r--r-- | The owner may read and write a file, while all others may only read the file. A common setting for data files that everybody may read, but only the owner may change.                    |
|  600   | rw------- | The owner may read and write a file. All others have no rights. A common setting for data files that the owner wants to keep private.                                                    |

```zsh
# 권한 설정 예:
chmod 600 {file,dir}
```

## Reference

- http://linuxcommand.org/lc3_lts0090.php
