# 의사 클래스와 의사 요소

## 의사 클래스

```
selector:pseudo-class {
  property: value;
}
```

- 의사 클래스(가상 클래스, pseudo-class)는 선택자(selector)에 추가하는 키워드로 선택한 요소가 특정 상태를 만족할 때 스타일을 적용한다.

```css
button:hover {
  color: blue;
}
```

## 의사 요소

```
selector::pseudo-element {
  property: value;
}
```

- `의사 요소`는 `의사 클래스`와 달리 특정 부분에 스타일을 적용할 때 사용한다.
- 규칙에 따라 단일 콜론(`:`) 대신 이중 콜론(`::`)을 사용하여 `의사 클래스`와 `의사 요소`를 구분해야 한다.

>  과거 명세에서는 이런 구분을 두지 않았던 이유로 대부분의 브라우저는 두 구문을 모두 지원하고 있다.

```css
a::after {
  content: "→";
}
```

## Reference 

- [https://developer.mozilla.org/ko/docs/Web/CSS/Pseudo-classes](https://developer.mozilla.org/ko/docs/Web/CSS/Pseudo-classes)
- [https://developer.mozilla.org/ko/docs/Web/CSS/Pseudo-elements](https://developer.mozilla.org/ko/docs/Web/CSS/Pseudo-elements)
