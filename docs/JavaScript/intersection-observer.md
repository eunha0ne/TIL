# intersectionObserver

> 교차 관찰자

- 엘리먼트의 가시성 여부를 판단
- 관찰 대상 요소를 기준으로 그 상위 요소나 뷰포트(viewport)의 교차 영역에 대한 변화를 비동기적으로 감지
- 옵저버가 생성되면 일정 비율 만큼의 가시성을 계속 감시하도록 설정

## 이점

- 애플리케이션 성능 최적화 전략에 해당
    - throttle, debounce 등의 호출 제어 함수를 생략 가능
    - 리플로우를 발생시키지 않음 (DOM에 접근해서 위치 계산을 하지 않음으로)
- 엘리먼트의 가시성 여부에 따라서 사용자 정의 제어가 가능
    - 레이지 로딩, 인피니티 스크롤 등

## 사용 예제

```javascript
const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        doSomething();
    }
  });
};

const options = {
  root: document.querySelector('#scrollArea'), 
  rootMargin: '0px',
  threshold: 1.0
};

const observer = new IntersectionObserver(callback, options);
const target = document.querySelector('#listItem');

observer.observe(target);
```

### options

- root: 가시성 판단의 기준이 될 (구역을 나타내는) 최상단 요소 지정. null 혹은 선언하지 않을 때 탑-레벨 뷰포트가 기준이 된다.
- rootMargin: 최상단 요소와 감시 대상의 교차하는 지점을 정의. 마진 값이 양수 값이라면 화면에 보이기 전에 교차된 상태로 평가 가능.
- threshold: 루트 마진과 같이 교차하는 지점을 평가하는데 사용. 감시 대상이 최상단 요소에서 얼마 만큼 보이는지 `0`과 `1` 사이의 값으로 그 비율을 나타낸다.

참고:

- [https://developer.mozilla.org/ko/docs/Web/API/IntersectionObserver](https://developer.mozilla.org/ko/docs/Web/API/IntersectionObserver)
- [https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [https://tech.lezhin.com/2017/07/13/intersectionobserver-overview](https://tech.lezhin.com/2017/07/13/intersectionobserver-overview)
