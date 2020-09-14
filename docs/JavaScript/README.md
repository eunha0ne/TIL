# JavaScript

[[toc]]

## 변수

변수 명명 규칙:

1. 변수명은 `문자`, `숫자` 그리고 `$`, `_` 등의 기호로 구성할 수 있다.
    - 예약어(reserved name) 목록에 있는 단어는 사용할 수 없다.
    - (참고) 비 라틴계 언어도 변수명으로 사용할 수 있다.
    - (참고) 유니코드 카테고리에 있는 문자도 사용할 수 있다.
    ```javascript
    var π = Math.PI;
    var λ = function() {};
    ```
2. 첫 글자는 숫자가 될 수 없다.

## 클래스

`public`과 `private` 선언:

- 실험적 기능(stage 3)으로 제안되어 현재 이를 지원하는 브라우저는 제한적인 상태
- 미지원 브라우저에서는 `Babel`과 같은 트렌스파일러는 사용해서 사용할 수 있음

```javascript
class ClassName {
    publicVariable; // public 필드 선언
    #privateVariable; // private 필드 선언 #, 해쉬 접두어를 사용

    constructor() {
        this.#privateVariable = 'value'; // O
        this.#anotherPrivateVariable = 'value'; // X -- syntax error.
    }
}
```

> - 필드를 먼저 선언함으로서 필드는 언제나 존재하는 상태가 된다. 이러한 클래스의 정의는 좀 더 self-documenting(자기 문서화)가 된다. 
> - `public` 필드의 경우에는 외부에서 접근할 수 있지만, `private` 필드는 내부에서만 읽고 쓰기가 가능하다. 
> - `private` 필드는 필드 선언 이전에만 선언될 수 있다. (컨스트럭터 내부에서 초기화 불가)
>   - Private fields can only be declared up-front in a field declaration.

## 디자인 패턴

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

## 키워드

- [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this)
- [https://dev.to/sag1v/javascript-the-this-key-word-in-depth-4pkm](https://dev.to/sag1v/javascript-the-this-key-word-in-depth-4pkm)
    
## 참고

- [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/Private_class_fields](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [행동 패턴](https://peter-cho.gitbook.io/book/12-gof/gof_2)
- [책임 연쇄 패턴](https://ko.wikipedia.org/wiki/%EC%B1%85%EC%9E%84_%EC%97%B0%EC%87%84_%ED%8C%A8%ED%84%B4)
- [typeof](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/typeof)
