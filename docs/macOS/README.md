# macOS

[[toc]]

## 숨겨진 폴더에 접근하기

> 카탈리나 버전 부터는 파일 시스템에 대한 원칙 변경으로 시스템 파일에서 기능하지 않는 것으로 보인다.

```zsh
# 파일 또는 폴더의 플래그를 변경하는 명령어:
chflags nohidden ~/usr

# 복구하기
chflags hidden ~/usr
```

참고: 

- [https://macpaw.com/how-to/access-usr-folder-mac](https://macpaw.com/how-to/access-usr-folder-mac)

## 내장 컬러 픽커 사용하기

![디지털 컬러 측정기](@assets/mac-os/color-picker.png)

- `커맨드` + `스페이스` 사용해서 `디지털 컬러 측정기` 검색. (`컬러` 입력하면 자동 완성)
- `상단 메뉴` > `값 표시` > `16 진수`로 변경
- 저장 단축키 (원하는 위치에 커서를 놓고)
    - 텍스트: `쉬프트` + `커맨드` + `C`
    - 이미지: `옵션` + `커맨드` + `C`
- 붙여 넣기: `커맨드` + `V`

> 이미지의 경우 붙여 넣기가 가능한 편집기에서만 동작
> - 일반적인 텍스트 편집기 불가
> - 미리 보기(macOS), 노션 등은 가능


