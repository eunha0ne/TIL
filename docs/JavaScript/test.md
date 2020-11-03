# 테스트

NOTE: 

다음 참고를 위한 (구) Jest 테스트 파일

```js
// __tests__/local-storage.test.js'
import { $localStorage } from '../utils/local-storage.js';

const localStorageMock = (function() {
    let storage = {};
    return {
        getItem: function(key) {
            return storage[key] || null;
        },
        setItem: function(key, value) {
            storage[key] = value.toString();
        }
    };
})();

Object.assign(localStorage, { ...localStorageMock });

describe('local-storage.js', () => {
    describe('set(key: string, value: [])', () => {
        it('should store given array to the localStorage with matching key.', () => {
            $localStorage.set('keywords', ['a', 'b', 'c']);
            expect($localStorage.get('keywords')).toEqual(['a', 'b', 'c']);
        })

        it('should be initilized key value on every attemp.', () => {
            $localStorage.set('keywords', ['a']);
            expect($localStorage.get('keywords')).toEqual(['a']);
            $localStorage.set('keywords', ['b']);
            expect($localStorage.get('keywords')).toEqual(['b']);
        });
    });

    describe('set(key: string, value: {})', () => {
        it('also working with Object model.', () => {
            $localStorage.set('objectTest', { "a": 1 });
            expect($localStorage.get('objectTest')).toEqual({ "a": 1 });
        })
    })
});
```

```javascript
import localStorage from './localStorage';

describe('localStorage', () => {
  beforeEach(() => localStorage.clear());

  it('is initialized properly', () => expect(localStorage.store).toEqual({}));

  it("returns undefined if requested item doesn't exist", () => {
    const foo = localStorage.getItem('foo');
    expect(foo).toBeUndefined();
  });

  it('sets the value of an item', () => {
    localStorage.setItem('foo', 'bar');
    expect(localStorage.store).toEqual({ foo: 'bar' });
  });

  it('gets the value of an item', () => {
    localStorage.setItem('foo', 'bar');
    const foo = localStorage.getItem('foo');
    expect(foo).toBe('bar');
  });

  it('removes an item', () => {
    localStorage.setItem('foo', 'bar');
    localStorage.removeItem('foo');
    const foo = localStorage.getItem('foo');
    expect(foo).toBeUndefined();
  });

  it('clears all items', () => {
    localStorage.setItem('foo', 'qwerty');
    localStorage.setItem('bar', 'asdf');
    expect(localStorage.store).toEqual({ foo: 'qwerty', bar: 'asdf' });
    localStorage.clear();
    expect(localStorage.store).toEqual({});
  });
});
```

참고:

- [https://jestjs.io/en/](https://jestjs.io/en/)
- [https://github.com/facebook/jest/issues/2098](https://github.com/facebook/jest/issues/2098)
