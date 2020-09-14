# UI Event

## 키 입력 이벤트 다루기

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
    
### 결론

- 입력 시점 감지는 `keypress` 이벤트 대신에 `keydown`, `keyup`을 사용하자.
- 입력 값 감지는 `keyCode`, `code` 이벤트 대신에 `key`를 사용하자.

### 참고

- [https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
- [https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode)
