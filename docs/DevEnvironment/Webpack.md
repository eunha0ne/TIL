# Webpack

## 시작하기

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

## 기본 설정하기

웹팩은 자바스크립트, 이미지, 스타일시트 등의 파일들을 하나로 만들어주는 번들러(bundler) 역할을 한다. 여러 개의 모듈이 연결되어 있는 시작점(entry)을 설정하면 웹팩은 모든 모듈을 하나로 합쳐서 결과물(output)을 만든다.

프로젝트 루트 디렉토리에 `webpack.config.js` 파일 생성:

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

## 로더

### 스타일시트

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-loader']
      }
    ]
  }
};
```

웹팩은 자바스크립트 뿐만 아니라 스타일시트도 모듈로 인식한다. 결과물을 만들 때 스타일시트도 묶어서 함께 하나의 파일로 만들려면 `css-loader`를 사용한다. 

```bash
npm i -D css-loader
``` 

임의의 스타일을 포함한 `main.css` 파일을 만들고 `app.js` 파일에서 불러온 후에 빌드해서 결과물(./dist/main.js)을 살펴보면 자바스크립 파일 안에 CSS 코드가 함께 합쳐져 있는 것을 확인할 수 있다. 

![build-output.png](@assets/dev-environment/webpack/build-output.png)

브라우저가 이를 인식할 수 있도록 하려면 `style-loader`를 모듈에 추가해야 한다.

```bash
npm i -D style-loader
```

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
```

## Reference 

- [https://www.youtube.com/watch?v=rbmUFHZt3sg](https://www.youtube.com/watch?v=rbmUFHZt3sg)
- [https://webpack.js.org/loaders](https://webpack.js.org/loaders)
