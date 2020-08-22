# Webpack

개발 환경에만 의존성 설치: 

```bash
npm i -D webpack webpack-cli 
```

`package.json` 파일에 빌드 스크립트 추가:

```json
{
  "scripts": {
    "build": "webpack"
  }
}
```

webpack 설정하기:

웹팩은 자바스크립트, 이미지, 스타일시트 등의 파일들을 하나로 만들어주는 번들러(bundler) 역할을 한다. 여러 개의 모듈이 연결되어 있는 시작점(entry)을 설정하면 웹팩은 모든 모듈을 하나로 합쳐서 결과물(output)을 만든다.

```javascript
const path = require('path'); // node path 모듈 가져오기

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js',
  },
  output: {
    // resolve 함수를 사용해서 결과물 폴더를 절대 경로 지정하기
    path: path.resolve('/dist'),  
    filename: '[name].js' // 변수는 엔트리에 정의된 키 값으로 치환 됨
  }
};
```

## Reference 

- [https://www.youtube.com/watch?v=rbmUFHZt3sg](https://www.youtube.com/watch?v=rbmUFHZt3sg)
