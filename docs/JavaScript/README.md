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

## UI Event

### 키 입력 이벤트 다루기

- `keypress`
    - 문자 값 입력 시에 발생
    - **더 이상 권장되지 않는 이벤트 타입으로 대신에 `beforeinput` 또는 `keydown`을 사용한다.**
    
- `keydown`
    - (문자 값을 입력했는지에 상관없이 모든) 키 입력 시에 발생
    - 어떤 키를 입력했는지 나타낸다.
    
- `keyup`
    - 키 입력이 끝났을 경우 발생 (사용자가 키보드를 눌렀다가 때는 경우)
    - 어떤 키가 입력됐는지 나타낸다.
    
> `<input>` 요소의 입려 값에 대한 변화를 감지하기 위해서는 input event를 사용해야 한다. `contenteditable` 특성을 가진 요소를 포함하여 `<input>`, `<select>`, `<textarea>`에서 활용 가능.

- `keyCode`
    - **더 이상 권장되지 않는 이벤트로 `code`를 대신 사용한다.**
    - 입력 키 값에 대응하는 십진수로 변환된 ASCII 키 값을 나타내거나 Windows 1252 code 키 값을 나타낸다. 알 수 없는 형태의 키 값이 입력된 경우에는 `0`을 반환한다.
    - `keydown`, `keyup` 이벤트를 통해서 출력 가능한 문자를 다루는데 사용해서는 안된다. 특히 `쉬프트`와 `알트` 키를 조합해서 사용하는 경우 적절하지 않다.
    
- `code`
    - 키보드의 물리적 키를 나타낸다. 
    - 물지적 위치에 기반하여 키를 다룰 때 유용하다. (게임 패드를 시뮬레이션 하는 코드를 작성하는 경우) 그러나 이벤트에서 반환된 키 코드(keycode)의 이름이 실제 키보드에 새겨진 문자와 다르거나 컴퓨터에 의해 생성된 값과 다를 수 있기 때문에 주의해야 한다.
    > For example, the code returned is "KeyQ" for the Q key on a QWERTY layout keyboard, but the same code value also represents the ' key on Dvorak keyboards and the A key on AZERTY keyboards.
 
- `key`
    - 사용자에 의해 입력된 키 값을 나타낸다.
    - 쉬프트 입력 상태에서 수정된 값을 고려하여 다룬다.
    
#### 결론

- 입력 시점 감지는 `keypress` 이벤트 대신에 `keydown`, `keyup`을 사용하자.
- 입력 값 감지는 `keyCode`, `code` 이벤트 대신에 `key`를 사용하자.

#### 참고

- [https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
- [https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode)

## 키워드

- [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this)
- [https://dev.to/sag1v/javascript-the-this-key-word-in-depth-4pkm](https://dev.to/sag1v/javascript-the-this-key-word-in-depth-4pkm)
    
## 참고

- [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/Private_class_fields](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [행동 패턴](https://peter-cho.gitbook.io/book/12-gof/gof_2)
- [책임 연쇄 패턴](https://ko.wikipedia.org/wiki/%EC%B1%85%EC%9E%84_%EC%97%B0%EC%87%84_%ED%8C%A8%ED%84%B4)
- [typeof](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/typeof)
