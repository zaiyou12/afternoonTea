---
tags:
  - blog
  - RedwoodJs
  - React
---

# React 기반 풀스택 프레임워크 RedwoodJs

## 이 글의 목적

React 기반의 풀스택 개발이 가능한 RedwoodJs를 6개월간 직접 사용하여 개발해 보고, RedwoodJs를 도입한 계기, 다른 React 개발 방식과의 차이점, 그리고 예제 코드로 RedoodJs의 장점을 공유해보고자 합니다.

## ReadwoodJs 이전 경험한 js framework

저는 15년도에 브라우저, 서버 그리고 모바일을 모두 하나의 언어로 다룰수 있다는 점에 매료되어 JavaScript와 TypeScript 생태계에 입문했습니다. 약 8년의 시간동안 Vue를 시작으로 React, Svelte, React-Native, express 등 다양한 js library와 framework들을 사용하여 개발하였습니다. 기존에 알고 있던 개발 방식보다 많은 개선점들을 느꼈지만 front에서의 상태관리, front와 back 간의 연계, 개발 생산성 부분에 아쉬움이 있었습니다.

그 이후에는 Next.js, Remix, Gatsby와 같은 FullStack framework를 접하였고 몇가지 프로토타입을 만들어 보았습니다. 폴더 구조, 라우팅, 인증 등 여러 측면에서 개선된 점을 느꼈고, 풀스택 프레임워크가 향후 js의 미래라고 강하게 인식하게 되는 계기가 되었습니다. 그러나 여전히 on rails 처럼 광범위한 기능을 제공해주는 프레임워크가 없다는 점에 아쉬움을 느껴, JAM Stack이나 react template 등을 참고하며 React이나 Vue에 잘 연동되는 기술들이 있을까 지속적으로 실험하고 있었습니다.

하나씩 차근차근 템플릿을 구성하며 좋은 참고 사례들을 찾던 중, "React+GraphQL+Lambda+Prisma"가 하나의 패키지처럼 담겨있는 RedwoodJs 라는 프레임워크를 발견하게 되었습니다. 특히 하나의 완성된 프레임워크지만 기존에 사용하던 기술들을 그대로 사용할 수 있는 점이 매력적이였습니다.

## RedwoodJs의 차이점

RedwoodJs와 다른 js 프레임워크와 차이점을 한줄로 짧게 줄인다면, "편리 기능을 제공하는 것이 그치지 않고, 전체적인 웹개발에 있어서 어떻게 개발하면 좋을지에 대한 방향성을 제시해준다" 입니다.

RedwoodJs의 front는 React을 사용하고 GraphQL을 활용하여 API와 통신합니다. API는 Prsima를 사용하여 DB를 다룹니다. 그리고 테스트를 위한 Jest와 Storybook 코드를 자동으로 생성해주며, pino 기반 로깅을 손쉽게 사용할수 있습니다. 또한 cli 명령어 하나로 인증, css 프레임워크, 배포 등 익숙한 툴을 선택하면, 셋팅이 자동으로 진행됩니다.

React를 활용하여 프로젝트 진행시 고민할 만한 내용들에 대해서, RedwoodJs가 대신 결정을 내려주었고, 각 기술별 버전관리 등을 지원합니다. 사용 기술과 툴에 따라 호불호가 강하게 나타날수 있지만, 만약 RedwoodJs가 제시한 방향성 동의한다면 RedwoodJs의 기능을 십분 활용하여, 서비스 개발에 집중할 수 있는 시간을 확보할 수 있습니다.

## 본격적으로 RedwoodJs

RedwoodJs는 다양한 기능을 제공하기에 꼭 공식문서를 읽어보시는 것을 추천 드리며, 여기서는 개인적으로 인상적이였던 부분만 일부 다루겠습니다.

### 폴더 구조

```bash
├── api
│   ├── db
│   │   └── schema.prisma
│   ├── dist
│   ├── src
│   │   ├── directives
│   │   │   ├── requireAuth
│   │   │   └── skipAuth
│   │   ├── functions
│   │   │   └── graphql.ts
│   │   ├── graphql
│   │   ├── lib
│   │   │   ├── auth.ts
│   │   │   ├── db.ts
│   │   │   └── logger.ts
│   │   └── services
│   └── types
│
├── scripts
│   └── seed.ts
│
└── web
    ├── public
    │   ├── favicon.png
    │   ├── README.md
    │   └── robots.txt
    └── src
        ├── components
        ├── layouts
        ├── pages
        │   ├── FatalErrorPage
        │   │   └── FatalErrorPage.tsx
        │   └── NotFoundPage
        │       └── NotFoundPage.tsx
        ├── App.tsx
        ├── index.css
        ├── index.html
        └── Routes.tsx
```

RedwoodJs는 `api`, `scripts`, `web`으로 구분되어 있고, yarn workspace로 생성되어 있습니다다. 각각의 폴더들은 용도에 맞게 세분화가 잘 되어있고, 코드들은 선언적으로 되어있기에 RedwoodJs의 작동방식을 쉽게 이해하고, 수정할수 있게 되어있습니다.

서버를 담당하는 `api/src`는 크게 4개의 폴더로 나뉘어져 있고, `directives`, `lib` 각각 GraphQL schema directive와 API의 유틸 함수들이 포함하고 있고, `functions`에는 labmda functions, `services`에는 비즈니스 로직이 포함되어 있다. 별도로 폴더를 만들 필요가 없을 정도로 명확하게 세분화되어 있고 자연스럽게 축약된 코드를 유도하고 있다. 웹 부분은 다른 프레임워크에서도 쉽게 볼수 있는 폴더 구조인 `components`, `layouts`, `pages`로 명확하게 구분되어 있다.

### 강력한 CLI

RedwoodJs의 CLI는 여러가지 기능을 제공하여 배포나 인증 등의 설정 방식에 대해 고민할 필요가 없으며, 반복적으로 작성해야하는 boilerplate 코드들을 자동으로 생성해줍니다.

```bash
# deploy 코맨드는 Web 과 API를 배포할 수 있게 셋팅하며, 아래의 사이트들을 지원한다.
#   target: netlify, vercel, serverless, render, baremetal
yarn rw deploy <target>
```

`deploy`는 다양한 방식을 지원하기에 필요에 따라 사용할수 있는 점이 큰 장점이다. 프로토타입이나 QA 환경에서는 사내 서버 혹은 vercel이나 firebase에 배포하여 쉽게 확인할 수 있고, 배포 환경에서는 웹 클라이언트는 CDN에 배포하고, 비즈니스 로직은 Lambda, DB는 AWS Aurora에 올릴 수 있어 스케일링의 장점이 있다.

```bash
# boilerplate 코드들을 자동으로 생성해주어 개발 생산성이 증가합니다.
#   type: cell, component, function, layout, page, scaffold, sdl, secret, service, types, script
yarn rw g <type>
```

`generate`는 web, api와 script에 모두 파일을 생성할 수 있어 가장 많이 사용하는 cli 기능이며, jest와 storybook을 자동으로 생성하여 테스트를 유도하는 점이 만족스러웠다. 또한 page 생성시 해당 페이지를 자동으로 routes에 코드를 추가하여 번거로운 작업이 줄일 수 있다.

`generate scaffold`를 사용하면 해당 데이터에 대한 CRUD UI와 기능들을 생성해주어, UI 디자인 혹은 핵심적인 비즈니스 로직에 집중할 수 있게 해준다. 예를 들어 `yarn rw g scaffold post`를 입력하면 아래의 파일들이 생성된다.

- web/src/pages/Post 에 각종 페이지들이 생성
  - EditPostPage
  - NewPostPage
  - PostPage
  - PostsPage
- web/src/layouts/PostsLayout/PostsLayout.tsx에 레이아웃 생성
- web/src/Routes.tsx에 Set component를 활용하여 Post 페이지들이 PostsLayout.tsx를 사용하도록 설정
- web/src/components/Post에서 컴포넌트 세분화
  - EditPostCell
  - PostCell
  - PostsCell
  - NewPost
  - Post
  - PostForm
  - Posts

`generate cell`은 RedwoodJs의 API 통신을 고려한 특수한 컴포넌트 구성 방식이다. cell에서 API 통신을 직접 수행하고 이에 대한 상태값을 가지고 있기에, 단순한 코드에서 통신, 상태 변화, 상태에 따른 UI까지 다 포함되어 있다. 아래의 코드는 cell 컴포넌트 생성시 자동으로 생성되는 코드이다. 코드가 직관적이기에 데이터 통신에 결과에 따라 loading, empty, failure, success를 구분해았다면 쉽게 이해할 수 있다.

```TypeScript
// `yarn rw g cell Article` 실행시 결과 파일 
import type { FindPosts } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindPosts {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>No posts yet!</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div>Error loading posts: {error.message}</div>
)

export const Success = ({ posts }: CellSuccessProps<FindPosts>) => {
  return posts.map((post) => (
    <article key={post.id}>
      <h2>{post.title}</h2>
      <div>{post.body}</div>
    </article>
  ))
}
```

`setup`은 third-party의 초기값을 자동으로 생성해주어, 손쉽게 third-party를 사용할 수 있다.

```bash
# config 초기 값들을 생성하여 third-party를 손 쉽게 프로젝트에서 사용할 수 있습니다.
#   category: auth, custom-web-index, deploy, generator, i18n, tsconfig, ui, webpack
yarn rw setup <category>

# 이중 setup auth는 여러개의 provider를 제공한다.
#   provider: auth0, azureActiveDirectory, clerk, dbAuth, ethereum, firebase, goTrue, magicLink, netlify, nhost, supabase
yarn rw setup auth <provider>

# 이중 setup ui는 3개의 ui design library를 지원한다
#   library: Chakra UI, TailwindCSS, WindiCSS
yarn rw setup ui <library>
```

### 엄청난 문서

RedwoodJs는 굉장히 훌륭한 문서를 가지고 있습니다. 보통 "문서가 잘되어 있다"라고 이야기하면 튜토리얼이 잘 되어 있는 경우를 말하는데, RedwoodJs는 Github README, 튜토리얼, reference, How To (유즈케이스) 모두 훌륭하게 잘 되어있습니다. reference와 How To는 가독성이 튜토리얼만큼 훌륭할 뿐만 아니라, 튜토리얼에서 다루지 않은 SEO와 메타태그 동적 변경, background worker 구성 방식, email 전송 지원, file upload, mocking graphQL 등 웹 개발에 필요한 다양한 기능과 예시를 볼 수 있습니다. 또한 자체 커뮤니티가 매우 잘 되어있어, "왜 RedwoodJs는 이런 방식을 지원하지 않지?"라는 고민을 가지고 커뮤니티를 방문하면, 많은 경우 해당 문제를 가지고 논의한 기록들을 찾아볼 수 있어 Redwood만의 개발 방법과 철학을 더욱 깊게 이해할 수 있습니다.

## 이 글을 마치며

js 생태계가 빠르게 발전하는 것을 경험하면서 자연스럽게 "어떤 라이브러리를 어떻게 결합해서 사용할까?", "함수형 프로그래밍이 좋을까? OOP가 좋을까?", "상태관리 중 어느 것이 가장 좋을까?"등의 고민들이 많아졌습니다. 그러나 RedwoodJs를 처음 보았을때 마치 ruby on rails나 flask를 처음 보았을때가 생각났습니다. 그간의 고민들도 나름 의미있는 고민이였지만, RedwoodJs는 "웹 개발을 어떻게 할까?"라는 조금 더 큰 틀에서 고민할수 있는 계기를 만들어주어 확실한 장점으로 다가 왔습니다. RedwoodJs 프레임워크를 학습하고 선택할 때 조금이나마 도움이 되었으면 하는 바램과 함께 글을 마칩니다.
