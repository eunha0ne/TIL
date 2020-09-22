# Promise

```js
let promise = new Promise(function (resolve, reject) {
    // 프라미스가 생성되면 executor 함수는 자동 실행된다.
    // executor 
    setTimeout(() => resolve("done!"), 1000);
});
```

- `Promise`는 비동기 작업의 최종 완료 또는 실패를 나타내는 객체이다.
- `new Promise`에 전달되는 함수는 `executor(실행자)`라고 부른다.
    - `executor`는 `new Promise` 생성 후에 즉시 호출된다.
    - `executor`는 인자로 자바스크립트 엔진이 미리 정의한 `resolve`, `reject` 함수를 받는다.
    - `executor`의 처리 성공 여부에 따라 `resolve`나 `reject` 중 하나를 반드시 호출한다.

## 상태

`new Promise` 생성자가 반환하는 promise 객체는 다음 상태를 갖는다.

- 대기(pending): 이행하거나 거부되지 않은 초기 상태
- 이행(fulfilled): 연산이 성공적으로 완료됨
- 거부(rejected): 연산이 실패함

![promise 상태](@assets/javascript/promise/promise.png)

## 소비 함수

결과 또는 에러를 받을 소비 함수는 `then`, `catch`, `finally` 메서드를 사용해 구독한다.

### then

대기 중인 프로미스가 값과 함께 이행되거나, 어떤 이유로 거부될 때 프로미스에 연결한 처리기는 그 프로미스의 `then` 메서드에 의해 대기열에 오른다. 

```js
promise.then(
    result => { /* 첫번째 인수는 프라미스가 이행됐을 때 실행된다. */ },
    error => { /* 두번째 인수는 프라미스가 거부됐을 때 실행된다. */ }
);

// 성공적으로 처리된 경우만 다루고 싶은 경우
promise.then(result => { /* ... */ });
```

### catch

에러가 발생한 경우를 다룬다.

```js
promise.catch(error => console.wran(error));
// === promise.thne(null, error => console.wran(error));
```

### finally

- `try catch finally` 절이 있는 것처럼 프라미스에도 `finally`가 사용될 수 있다.
- 프라미스가 이행되거나 거절된, 즉 처리된 경우(settled) 항상 실행된다.

```js
promise
    .finally(() => hideLoading()) // 성공 실패 여부에 상관없이 로딩 숨기기
    .then(result => result);
```

## chaning

`체이닝`은 비동기 작업을 순차적으로 처리해야 되는 상황에 적절하다.

```js
promise
    .then(result => doSomethingWtih(result))
    .then(nextResult => {
        return doSomethingWtih(nextResult);
    })
    .then(finalResult => doSomethingWtih(finalResult))
    .catch(failureCallback)
    .then(someResult => {
        // catch를 통해서 처리된 결과이거나, 
        // doSomethingWtih(finalResult)가 이행된 결과로 다음 작업을 이어간다. 
    }); 
```

참고:

- [https://wiki.developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Using_promises](https://wiki.developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Using_promises)
- [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [https://ko.javascript.info/promise-basics](https://ko.javascript.info/promise-basics)
- [https://github.com/petkaantonov/bluebird/wiki/Promise-anti-patterns#the-deferred-anti-pattern](https://github.com/petkaantonov/bluebird/wiki/Promise-anti-patterns#the-deferred-anti-pattern)
