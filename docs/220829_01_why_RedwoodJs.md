---
tags:
  - blog
---

# RedwoodJs 도입기

1~3줄 간략한 소개

## view library에서 full-stack framework로

15년도에 브라우저, 서버 그리고 모바일을 모두 하나의 언어로 다룰수 있다는 점에 매료되어 JavaScript와 TypeScript 생태계에 입문. 약 8년의 시간동안 Vue를 시작으로 React, Svelte, React-Native, express 등 다양한 js library와 framework들을 배웠으며 실무에 적용함. 기존에 알고 있던 ajax 방식보다 많은 개선점들을 느꼈지만 front에서의 상태관리, front와 back 간의 연계, 개발 생산성 부분에 아쉬운 점들이 있었음.

그 이후에는 Next.js 와 같은 FullStack framework 들을 접하게 되었고, Nuxt.js, Gatsby, Meteor.js, ionic 등을 사용하며 실무에 도입하기 위해 프로토타입을 만들어 직접 체험해봄. 폴더 구조, 라우팅, 인증 등 여러 측면에서 개선된 점을 많이 느꼈으며, 개발 생산성이 높아짐을 느낌. 풀스택 프레임워크가 향후 js의 미래라고 생각하였으나 광범위하게 기능을 제공해주는 프레임워크가 없다는 것에 아쉬움.

## template 직접 구성에서 다시 full-stack framework 으로

- App과 Web을 동시에 고려할 필요가 없음
- 국내 시장에서 채용이 용이 해야함

React.js와 express 를 조합하여 template을 만들어야 겠다고 생각. 필수적으로 사용해야하는 라이브러리들을 쉽게 사용할 수 있게 템플릿 구성.

- 컴포넌트 생성시 cli를 활용하여 jest와 Storybook을 기본적으로 생성
- GraphQL을 셋팅하여 개발 생산성 증가
- 기획과 무관한 로그인과 배포와 같은 기본적인 셋팅을 사전에 설정

하나씩 차근차근 템플릿을 구성하며 좋은 참고 사례들을 찾던 중 우연한 기회에 RedwoodJs를 발견. 고려하지 못했던 추가적인 내용들도 발견. Cell 방식, SEO와 메타태그 동적변경, serverless function 지원. 공식문서에서 background worker, Email 전송, file upload, mocking graphQL, serverless 배포까지 예시로 제공 되는 것을 보고 바로 결정.

## RedwooJs의 우수성

사용 예시와 함께 구체적으로 제시

- 언제든 직접 수정할 수 있는 구성 (Flask와 다르지만 비슷한 느낌, auth와 development에서 느낌)
- Storybook과 테스트 작성을 유도하고, 불필요한 반복을 없애주는 CLI
- 익숙한 코드 구성 방식 (Cell, logger, forms, layout, scaffold)
- 다양한 유즈케이스가 포함된 공식 문서
- 일정한 코드 퀄리티 유지

## 기타 내용

- Next.js vs. Remix vs. Gatsby: CSR, Gatsby pregenerate page. Remix generate html on demand. Next.js는 두가지 장점을 모두 가지고 있음. 
- 생산성: 신생 스타트업이고 첫번째이자 유일한 개발자였기에, 최대한 반복을 줄이고 핵심적인 업무에 집중하고자 함. 학습 곡선이 높아도 선행 코드를 잘 짜놓은 다면, 팀이 커지더라도 충분히 극복 가능하다고 판단.
- 상품 적합성: 회사 로드맵을 보았을때 App과 Web 간의 제공되는 기능의 차이가 있고, 금융 분야 특성상 App에서 MTS 연동, 인증서 관리, 얼굴 인식, 보안키패트 등 다소 복잡한 기능들이 있기에, 팀이 성장함에 따라 App 개발 팀과 Web 개발 팀이 자연스럽게 분리될 것으로 생각. Web 개발시에 App도 호완이 되는 프레임워크를 고를 필요는 없다고 생각.
- feature 단위 개발: front와 back 간에 업무를 나누고, 소통하기 위한 문서와 테스트를 따로 구성하는 것이 시간 소모적이라고 생각. 반대로 단순한 버튼 하나라도 한 사람이 ui부터 db까지 처음부터 끝까지 책임지고 일할 수 있다면 상품에 대한 오너십이 생기고 보람도 배가 될 수 있다고 생각하여 feature 단위로 개발하는 것을 선호. 그렇기에 front와 back 코드를 하나의 코드베이스에서 작업하는 것을 mono-repo 방식을 선호.

너무 높은 자유도. 신규 프로젝트 시작시 하나씩 새로 구성하게 되는 점이 불편하고, 같은 React을 사용해도 라이브러리 구성 방식에 따라 개발자 경험이 천차만별.  사용하는 툴이 조금씩 다르

- view library 형태로 DOM을 찾을 필요 없이 편하게 작업 가능. Component 단위의 UI 개발에 최적화 되있다고 생각. 그러나 그 외 다른 기능이나 모듈을 추가할때 너무 많은 선택폭으로 인하여, 신규 개발시 혼란스러운 상황이 많음.
- 상태관리시 간결한 hook을 사용하여 편리한 점이 많지만, useEffect를 사용해야 하는 부분이 lifeCycle 개념에 비해 어색하고, 규모가 커지면서 불필요한 리랜더링을 막기 위해 일정한 시간 투자 필요. 글로벌 상태관리에서는 Redux, Recoil, Global hook을 사용해보면서 여러 시행착오를 겪었으며, 았고, 현재는 jotai를 사용중.
- React의 경험을 바탕으로 React-Native에서도 활용 가능한 점이 있다고 생각하였지만, 각 플랫폼별 기능을 깊게 사용하면 할 수록 차이가 벌어짐. 웹과 앱을 분리하는 것이 좋다고 판단.

React에 대한 좋은 경험을 바탕으로 Vue.js, Svelte, Next.js, Nuxt.js까지 사용해보았으나, 

- Next.js, Nuxt.js의 불충분함
- Yarn workspace와 Nx의 어려움
- FullStack Framework로 향하는 트랜드: [Four Eras of JavaScript Frameworks](https://www.pzuraq.com/blog/four-eras-of-javascript-frameworks)
