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

// components/hello-world.js
export const HelloWorld = { 
    print() { 
        console.log('HelloWorld');
    } 
};
```
 
## Reference 

- [https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element)
- [https://developer.mozilla.org/ko/docs/Web/HTML/Element/script](https://developer.mozilla.org/ko/docs/Web/HTML/Element/script)