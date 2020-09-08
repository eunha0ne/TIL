# Document Object Model

[[toc]]

## Node.textContent와 HTMLElement.innerText의 차이

textContent:

1. `<script>`, `<style>` 요소를 포함한 모든 요소의 콘텐츠를 가져온다.
2. 노드의 모든 요소를 반환한다.
3. XSS 공격 위험이 없다.
    
innerText:

1. 사람이 읽을 수 있는 요소만 가져온다.
2. 스타일을 고려하여, 숨겨진 요소는 반환하지 않는다. 
    - CSS 고려하기 때문에 값을 읽을 때 최신 계산값을 반영하기 위해서 리플로우가 발생한다. (성능 최적화를 위해서 가능한 피하기)
3. `innerText`를 수정하면 요소의 모든 자식 노드를 영구히 제거한다. 따라서 해당 텍스트 노드를 다른 노드에 삽입할 수 없다.
    
### `Element.innerHTML`과의 차이

innerHTML:

1. `HTML`을 반환한다.
2. `innerHTML` 요소를 사용해서 텍스트에 접근하는 경우가 있지만, `HTML`로 분석할 필요가 없다는 점에서 `textContext` 성능이 더 좋다.
     

## Element.getBoundingClientRect()

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

## 참고

- [https://developer.mozilla.org/ko/docs/Web/API/Element/getBoundingClientRect](https://developer.mozilla.org/ko/docs/Web/API/Element/getBoundingClientRect)
