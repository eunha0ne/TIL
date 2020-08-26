# 미디어쿼리

- `@media`를 사용해서 여러가지 뷰 레이아웃을 갖도록 구현할 수 있다. (반응형)
-  일반적으로 뷰포트 해상도에 따라 CSS 코드를 분기한다.

코드 내부에서 분기하는 경우:
     
```
@media only all and (조건문) {
    // 실행문
}
```

- `@media`: 미디어쿼리 선언부
- `only`: 
    - 미디어쿼리를 지원하는 사용자 에이전트만 쿼리 구문을 해석하도록 함. 기본값은 only, 생략 가능.
    - 전체 쿼리가 일치할 때만 스타일을 적용할 때 사용되며, 구버전 브라우저에서 스타일을 잘못 적용하지 못하도록 방지할때 유용
    - `only` 연산자를 사용할 경우 반드시 미디어 유형을 지정해야 한다.
    - `not` 키워드를 통해 뒤에 오는 조건을 모두 부정하는 연산을 수행할 수 있다.
- `all`: 미디어 유형을 특정함. (screen, print 등) 기본값은 all, 생략 가능.
- `and`: `AND` 연산 수행하여 앞뒤의 조건을 만족하면 실행한다. `,` 기호를 사용하면 `OR` 연산을 수행할 수 있다.
- `조건문`: 브라우저는 조건문이 참일 때 `실행문`을 처리한다.
- `실행문`: CSS 코드를 작성할 수 있는 영역이다.

## Reference

- [https://naradesign.github.io/article/media-query.html](https://naradesign.github.io/article/media-query.html)
- [https://developer.mozilla.org/ko/docs/Web/Guide/CSS/Media_queries](https://developer.mozilla.org/ko/docs/Web/Guide/CSS/Media_queries)
