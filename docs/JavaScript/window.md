# window

- window 인터페이스는 DOM 문서를 담은 창을 나타낸다.
- 자바스크립트 코드에 노출된 전역 변수 `window`는 현재 스크립트가 작동 중인 창을 나타낸다.
- window 인터페이스는 다양한 함수, 이름 공간, 객체, 생성자가 머무는 장소(home)이다.
    - 전역적으로 접근할 수 있는 항목에 적합하다.
- 탭 기능이 있는 브라우저에서는 각각의 탭을 각각의 window 객체로 나타낸다.

## window.matchMedia()

주어진 미디어 쿼리 문자열의 분석 결과를 나타내는 객체, `MediaQueryList`를 반환한다.

```javascript
const isMatchMedia = (query) => window.matchMedia(query).matches;

if (isMatchMedia("(min-width: 400px)")) {
    // 뷰포트 너비가 400 픽셀 이상
}

if (isMatchMedia("(prefers-color-scheme: Dark)")) {
    // 사용자 선호가 어두운 색상 (Dark Mode) 
}
```
