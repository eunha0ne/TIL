# JavaScript

switch 조건문으로 `책임 연쇄 패턴` 작성하기:

- chain-of-responsibility pattern, 책임 연쇄 패턴이란?: 결합을 느슨하기 위해서 고안되었다. 명령 객채와 일련의 처리 객체를 포함하는 디자인 패턴으로 각각의 처리 객체는 명령 객체를 처리할 수 있는 연산의 집합이고, 체인 안의 처리 객체가 핸들할 수 없는 명령은 다음 처리 객체로 넘겨진다. 
    - 요청에 대한 처리 기회를 한 객체에 위임하는 것이 아니라 여러 객체에 주는 것  

```javascript
const isUndefined = value => typeof value === 'undefined';
const isObject = value => typeof value === 'object';
const isFunction = value => typeof value === 'function';

// 스위치 조건문으로 작성한 책임 연쇄 패턴의 기본 흐름의 예:
switch (true) {
    case isUndefined(value): {
        // Undefined
        break;
    }

    case isObject(value): {
        // Object
        break;
    }

    case isFunction(value): {
        // Function
        break;
    }

    default: {
        // Maybe something else.
    }
}
``` 
    
## 참고

- [행동 패턴](https://peter-cho.gitbook.io/book/12-gof/gof_2)
- [책임 연쇄 패턴](https://ko.wikipedia.org/wiki/%EC%B1%85%EC%9E%84_%EC%97%B0%EC%87%84_%ED%8C%A8%ED%84%B4)
- [typeof](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/typeof)
