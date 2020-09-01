# Cascading Style Sheets(CSS)

[[toc]]

HTML 또는 SVG, XHTML 등과 같은 XML 방언으로 작성된 문서의 표현을 기술하기 위한 `스타일시트` 언어이다. 요소가 화면, 종이, 음성이나 다른 매체에서 어떻게 렌더링되어야 하는지 기술한다. 

## 의사 클래스(가상 클래스)

### :root 

- 문서 트리의 루트 요소를 선택한다. HTML의 루트 요소는 `<html>` 이다. 
- `:root`의 명시도가 `html` 선택자 보다 낮다.

```css
:root {
  --main-color: hotpink;
  --pane-padding: 5px 42px;
}
```

## Custom Properties (variables)

사용자 지정 속성(CSS 변수, 종속 변수) 값의 대안(fallback) 지정하기:

```css
div {
    color: var(--color, red);
    background: var(--bg-color, var(--color, red)); 
}
```

사용자 지정 속성의 접근과 제어:

```javascript
element.style.getPropertyValue("--my-var"); 
getComputedStyle(element).getPropertyValue("--my-var");
element.style.setProperty("--my-var", jsVar + 4);
```

## CSS.support()

브라우저가 주어진 CSS featrue(기능)을 지원하는지 나타내는 `Boolean` 값을 리턴한다.
 
```javascript
CSS.supports("text-decoration-style", "blink");
CSS.supports("display: flex");
CSS.supports("(--foo: red)");
CSS.supports(`(transform-style: preserve) or (-moz-transform-style: preserve)`);
```

> 지원 여부 확인에 따른 대안(fallback) 작성 가능

## Reference 

- [https://developer.mozilla.org/ko/docs/Web/CSS](https://developer.mozilla.org/ko/docs/Web/CSS)
- [https://developer.mozilla.org/ko/docs/Web/CSS/Using_CSS_custom_properties](https://developer.mozilla.org/ko/docs/Web/CSS/Using_CSS_custom_properties)
