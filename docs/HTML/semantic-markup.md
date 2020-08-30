# 의미론적 마크업

[[toc]]

## 태그 가이드

- 태그를 사용해서 스타일링 하지 않도록 한다.
    - `b` 태그는 굵은 글씨로 표현하기 위해 사용되었으나 더이상 텍스트 스타일링 요소로 고려해서는 안된다. `b`, `i`, `s`, `u`, `small` 등, 표현을 기준으로 이름을 가진 태그들이 이에 포함된다.
   
    - `b`, `ì`의 실제 스타일은 스타일시트의 스타일 정의에 따르며 또한 지역화에 따라, 특정 언어에서는 굵은 글씨나, 이탤릭체로 고려되지 않을 수 있다. 만약에 두 태그 보다 적합한 다른 요소가 있다면 사용해서는 안되며, 만일 사용하게 된다면 클레스를 추가하여 해당 마크업(태그)가 어떤 의도로 사용되었는지 기술해야 한다. 그렇게 함으로써 다른 요소와 구분해야 한다.

    > You should always bear in mind that the content of a b element may not always be bold, and that of an i element may not always be italic. The actual style is dependent on the CSS style definitions. You should also bear in mind that bold and italic may not be the preferred style for content in certain languages.
  
    >  You should not use b and i tags if there is a more descriptive and relevant tag available. If you do use them, it is usually better to add class attributes that describe the intended meaning of the markup, so that you can distinguish one use from another.

- 콘텐츠가 가진 의미를 나타내는 태그를 활용해서 문서를 표현한다.
    - `strong`: (강한, 중요한) 강조
    - `em`: (약간의) 강조
    - `mark`: (관련성) 강조
    - `p`: 문단
    - `q`: 짧은 인용
    - `cite`: 작품 제목
    - `del`: 삭제된 내용
    - `samp`: 시스템 출력
    - `code`: 개발 코드
    - `ins`: 추가된 내용
    - `address`: 주소
    - `blockquote`: 인용문
    - `abbr`: 약자표기
    
## 콘텐츠 섹셔닝
    
![HTML5 element flowchart](@asset/html/semantic-markup/flow-chart.png)

컨텐츠 모델(Contents Model)
- 메타데이터(Metadata): 문서에 대한 다양한 정보를 설정
    - `base`, `link`, `meta`, `noscript`, `script`, `style`, `title`
- 플로우(Flow): `body` 내부의 대부분의 요소는 플로우 콘텐츠로 분류
- 머리말(Heading): 각 섹션의 머미말을 정의함, 섹션 요소 안에 헤딩이 여러 개인 경우 Heading이 섹션을 생성함
    - `h1` ~ `h6`
- 구역(Sectioning): 섹셔닝 요소(sectioning content element)는 문서 개요(outline)를 만든다. 문서의 내용을 분류하는 구역 생성
    - `article`, `aside`, `nav`, `section`
    - `header`, `footer`는 섹셔닝 요소에 포함되지 않는다.
    - 섹셔닝 루트(sectioning roots): 별개의 새로운 문서로 취급하기 때문에 그 하위에 섹셔닝 루츠가 있으면 아웃라인에 포함시키지 않는다. 
        - `body`, `blockquote`, `details`, `fieldset`, `figure`, `td`
- 구문(Phrasing): 문단의 구성요소
- 임베디드(Embedded): 다른 자원(미디어, 문서, 그래픽 등)을 문서에 삽입
- 상호작용(Interactive): 사용자와 상호작용을 위한 요소
    - `a`, `audio`, `button`, `embed`, `iframe`, `img`, `input`, `keygen`, `label`, `object`, `select`, `textarea`, `video`

```html
<h1>문서의 아웃라인</h1>
<section>
    <h2>첫번째 섹션</h2>
</section>
<article>
    <h2>두번째 섹션</h2>
</article>
<section>
    <!-- ...헤딩 없음 -->
</section>
```

```
1. 문서의 아웃라인
    1. 첫번째 섹션
    2. 두번째 섹션
    3. Untitled Section
```

```html
<h1>의미론적 마크업</h1>
<section>
    <h1>콘텐츠 모델</h1>
    <h2>메타데이터</h2>
    <h2>플로우</h2>
    <h2>머리말</h2>
</section>
```

```
1. 의미론적 마크업
    1. 콘텐츠 모델
        1. 메타데이터
        2. 플로우
        3. 머리말
```

## 아웃라인 검사

- [HTML5 Outliner](https://gsnedders.html5.org/outliner/)
- 또는 크롬 브라우저 확장 프로그램으로 설치 (HTML5 Outliner)

## Reference 

- [https://developer.mozilla.org/ko/docs/Web/HTML/Element/b](https://developer.mozilla.org/ko/docs/Web/HTML/Element/b)
- [https://www.w3.org/International/questions/qa-b-and-i-tags](https://www.w3.org/International/questions/qa-b-and-i-tags)
- [https://www.slideshare.net/NULINTS/2014-html5](https://www.slideshare.net/NULINTS/2014-html5)
