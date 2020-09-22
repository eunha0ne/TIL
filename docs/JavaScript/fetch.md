# fetch

```javascript
let promise = fetch(url, [options]);
```
> - url: 접근하고자 하는 URL
> - options: 선택 매개변수 (method, header 등을 지정할 수 있다.) 옵션을 지정하지 않으면 GET 메서드로 동작.

- 비동기 네트워크 통신을 가독성있게 작성할 수 있다.
- `request`, `response`와 같은 HTTP 파이프라인을 구성하는 요소를 조작한다.
- CROS, HTTP 관련 개념을 정의하고 있다.

## 스펙

- `fetch()`로 반환되는 Promise 객체는 **HTTP error 상태를 `reject`하지 않는다.** 
    > HTTP Statue Code 404, 500 을 반환하는 경우를 말함. 
    - ok 상태가 false인 `resolve`가 반한된다. 
    - 네트워크 장애나 요청이 완료되지 못하면 `reject`가 반환된다. 
- 일반적으로 `fetch`는 쿠키를 전송하거나, 받지않는다.
    - 쿠키를 전송하기 위해서는 자격증명(credentials) 옵션을 설정해야 한다.
    
### 응답의 두 진행 단계

1. 서버가 헤더에 응답하게 되면, `fetch`를 통해 반환받은 `promise`가 내장 Response 클래스와 함께 `resolve` 된다. 이 단계에서는 아직 본문(body)이 도착하기 전이지만, 응답 헤더를 보고 HTTP 상태를 확인할 수 있다. 네트워크 문제나 존재하지 않는 사이트에 접근하려는 경우와 같이 HTTP 요청을 보낼 수 없는 상태에서는 `promise`는 `reject` 된다.
    - HTTP 상태는 응답 프로퍼티를 사용해서 확인할 수 있다.
        - status: HTTP 상태 코드 (예 200)
        - ok: boolean (상태 코드 200 ~ 299 사이는 true로 평가)
2. 응답 본문(response body)을 반한 받기 위해 추가 메서드를 사용한다.
    - text(): 텍스트를 반환
    - json(): JSON 형태로 파싱
    - formData(): 응답을 FormData 객체 형태로 반환
    - blob(): Blob(타입이 있는 바이너리 데이터) 형태로 반환
    - arrayBuffer(): ArrayBuffer(바이너리 데이터를 로우 레벨 형식으로 표현한 것) 형태로 반환
  
## 에러 처리와 동작 흐름
  
```javascript
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }

    return response.json();
}

fetch(url)
    .then(handleErrors)
    .then(response => doSomething())
    .catch(error => console.warn(error));
```
  
## 참고

- [https://fetch.spec.whatwg.org/#fetch-api](https://fetch.spec.whatwg.org/#fetch-api)
- [https://fetch.spec.whatwg.org/#response-class](https://fetch.spec.whatwg.org/#response-class)
- [https://github.github.io/fetch/](https://github.github.io/fetch/)
- [https://www.tjvantoll.com/2015/09/13/fetch-and-errors/](https://www.tjvantoll.com/2015/09/13/fetch-and-errors/)
- [https://ko.javascript.info/fetch](https://ko.javascript.info/fetch)
- [https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
- [https://github.com/mdn/fetch-examples/](https://github.com/mdn/fetch-examples/)
- [https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/FetchFetch의_사용법](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Fetch%EC%9D%98_%EC%82%AC%EC%9A%A9%EB%B2%95)
- [https://developer.mozilla.org/en-US/docs/Web/HTTP/Status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
