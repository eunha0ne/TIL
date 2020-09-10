# tags

## ul

- ul 요소(element)의 자식 혹은 하위 요소로 구성되어야할 콘텐츠 모델은 비어있거나 또는 li 요소들이거나 `<script>`, `<template>`과 같은 스크립트를 지원하는 요소들로 구성될 수 있다.

```
Content model:
    Zero or more li and script-supporting elements.
```
> Content model: A normative description of what content must be included as children and descendants of the element.

## script

- 스크립트 요소는 실행 가능한 코드를 문서에 포함할 때 사용한다.
- type="module" 특성을 사용하면 스크립트를 모듈로 간주한다. 
    - 스크립트 콘텐츠 처리가 `charset`과 `defer` 특성의 영향을 받지 않는다.
    - `module`을 지원하는 브라우저는 `nomodule` 특성을 가진 모든 스크립트 요소를 무시한다.
    
```html
<script type="module" src="./main.js"></script>
<script type="module" src="./hello-world.js"></script>

<!-- 미지원 브라우저를 위한 대체 스크립트 제공 -->
<script nomodule src="./main-fallback.js"></script>
```

```javascript
// main.js
import { HelloWorld } from './hello-world.js';

HelloWorld.print();

// hello-world.js
export const HelloWorld = { 
    print() { 
        console.log('HelloWorld');
    } 
};
```

## article 

- 문서, 페이지, 애플리케이션, 또는 사이트 안에서 독립적으로 구분해 배포하거나 재사용할 수 있는 구획을 나타낸다.
    - 게시판, 블로그 글, 매거진, 뉴스 기사 등
- 각각의 `article` 요소는 식별할 수단이 필요. `h1` ~ `h6` 태그를 자식으로 포함해서 달성
- `article` 요소를 중첩해서 사용한 경우, 안쪽에 있는 요소는 외부의 요소와 관련된 글임을 나타탬
    - 예) 블로그의 글(articel)의 댓글을 `article` 요소로 사용
- `article` 작성자 정보를 `address` 요소를 사용해서 제공 가능. 중첩 `article` 요소 안에서는 불가
- `article` 작성일자를 `time` 요소의 `datetime` 속성을 사용해서 설명 가능

```html
<article class="user_review">
  <p>Way too scary for me.</p>
  <footer>
    <p>
      Posted on <time datetime="2015-05-16 19:00">May 16</time> by Lisa.
    </p>
  </footer>
</article>
```

## input

autofocus: 

- 페이지 로딩이 끝났을 때 인풋 요소에 자동 포커 여부를 결정
    > Boolean Attribute
    - 그러나 DOMContentLoaded 이벤트 이전에 발생할 수도 있음으로 주의 필요
- **접근성을 고려한다면 사용을 피해야 한다.**
    - 눈이 불편한 사용자가 스크린리더를 사용하고 있다면 오토포커스 설정으로 인한 커서의 순간 이동을 사전에 경고를 받지 못하기 때문에 좋지 않은 사용자 경험을 만든다. 또한 이러한 예기치 못한 상황은 인지에 불편함 가져오며 포커스된 대상 위쪽으로 생성된 콘텐츠를 뛰어 넘음으로 정보 누락을 야기할 수 있다.
    > For better usability, avoid using autofocus. Automatically focusing on a form control can cause the page to scroll on load. The focus can also cause dynamic keyboards to display on some touch devices. While a screen reader will announce the label of the form control receiving focus, the screen reader will not announce anything before the label, and the sighted user on a small device will equally miss the context created by the preceding content.

## Reference 

- [https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element)
- [https://developer.mozilla.org/ko/docs/Web/HTML/Element/script](https://developer.mozilla.org/ko/docs/Web/HTML/Element/script)
- [https://developer.mozilla.org/ko/docs/Web/HTML/Element/article](https://developer.mozilla.org/ko/docs/Web/HTML/Element/article)
- [https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#htmlattrdefautofocus](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#htmlattrdefautofocus)
