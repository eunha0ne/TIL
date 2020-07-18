# shell-script

> 참고 자료의 `BASH 쉘 스크립트 문서`를 바탕으로 키워드를 정리

## 들어가기

기본 용어 정리: 

- TERMINAL: 컴퓨팅 시스템에 데이터를 입력하거나 표시하는데 쓰이는 사용자 인터페이스.
- SHELL: 터미널에서 동작하는 프로그램으로 명령어 인터프리터(해석기)이자 프로그래밍 언어이다. 간단히 말해, 매크로 전처리기이다. 매크로 전처리기는 특정 언어에 제약 받지 않는 독립된 프로그램 형태일 수 있으며, 약속된 텍스트와 심볼을 통해 기능적으로 수행된다. 이러한 확장된 표현식의 실행은 내부의 구체적이고 복잡한 수행이 감추어진 상태로 미리 정의된 동작을 이행한다.
- SH(SHell): `sh`는 쉘 종류 중 하나이다. POSIX 시스템과 호환성을 가지며 표준이다.
- BASH(Bourne-Again SHell): `bash`는 쉘 종류 중 하나이며, `sh`를 호환하며 더 많은 기능을 제공한다. 여러 운영체제의 기본 쉘로 광범위하게 사용된다.

## `프로그래밍 언어`와 `스크립트 프로그래밍 언어`

### 차이

프로그래밍 언어는 소스 코드를 컴파일 하는 과정이 필요하지만 스크립팅 언어는 실행 가능한 파일로 만들기 위한 과정이 없다. 번역기(interpreter)가 소스 파일에서 지시문을 읽고 각 지시문을 실행시킨다. 

- (목적 파일로 컴파일이 필요한) 프로그래밍 언어: C, C++, Java
- 스크립트 프로그래밍 언어: Perl, Lisp, Tcl, JavaScript

> JavaScript는 동적 번역 프로그래밍 언어로 프로그램이 실제 실행하는 시점에 기계어로 번역하는 컴파일 기법을 사용한다.  

### 스크립트 프로그래밍 언어

단점:

- 각 지시문을 하나씩 읽어 나가기 때문에 일반적으로 컴파일된 프로그램 보다 느리다. 
- 큰 규모의 애플리케이션을 작성할 때는 비효율적이다.

장점:

- 소스 파일을 어떤 운영 체제에나 쉽게 이식할 수 있으며, 번역기를 통해 바로 실행할 수 있다.

## 쉘 스크립트 작성을 위한 사전 지식

- 리눅스 명령어
- 텍스트 편집기 사용법: 리눅스 (Vi, Emacs, Pico)
- (스크립팅을 공부할 때는 루트 권한이 없는 일반 사용자 계정을 사용하자.)

## 참고

- [Read: 배시](https://ko.wikipedia.org/wiki/%EB%B0%B0%EC%8B%9C_(%EC%9C%A0%EB%8B%89%EC%8A%A4_%EC%85%B8))
- [Read: 쉘 스크립트](https://ko.wikipedia.org/wiki/%EC%85%B8_%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8)
- [Read: Macro processor](https://www.ibm.com/support/knowledgecenter/SSUFAU_2.0.0/com.ibm.ent.pl1.zos.doc/pg/makropp.html)
- [Read: General purpose macro processor](https://en.wikipedia.org/wiki/General-purpose_macro_processor)
- [Track: Difference between sh and bash](https://stackoverflow.com/questions/5725296/difference-between-sh-and-bash)
- [Track: How do i prompt for yes no cancel input in a linux shell script](https://stackoverflow.com/questions/226703/how-do-i-prompt-for-yes-no-cancel-input-in-a-linux-shell-script)
- [Read: BASH 쉘 스크립팅 입문](http://coffeenix.net/doc/shell/introbashscript.htm)