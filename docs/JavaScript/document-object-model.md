# DOM

## Web API

### Element.getBoundingClientRect()

![함수의 결과값을 이차원 위에서 표현한 참고 이미지](@assets/javascript/dom/rect.png)

- `DOMRect` 객체를 리턴한다.
- 표준 박스 모델을 따른다. (box-sizing: border-box | content-box 속성 값에 따라 계산되는 값이 다름)

```javascript
const $element = document.querySelector('.some-element');
const { 
    left, 
    top, 
    right,
    bottom, 
    x, 
    y, 
    width, 
    height 
} = $element.getBoundingClientRect();
```
