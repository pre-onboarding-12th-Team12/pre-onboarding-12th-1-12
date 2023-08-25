# **Week 1**

동료학습을 통해서 팀에서 생각한 Todolist(선발과제)의 Best Pratice를 만들고 제출해주세요

> 💡 Best Practice란 모범사례라는 말로서, 특정 문제를 효과적으로 해결하기 위한 가장 성공적인 해결책 또는 방법론을 의미합니다.
>
> 과제 수행 과정에서 Best Practice란 팀원들이 각자의 구현방법을 설명하고 토론했을 때 팀 안에서 이 방법이 가장 효율적이라고 판단되는 것을 정하고 그것을 팀의 Best Practice로 삼는것입니다.
>
> 이때 특정한 팀원의 과제 전체를 Best Practice로 선정하는 것이 아닌, 과제의 각 부분이나 중점을 둬야할 부분을 단위를 나눈뒤, 각 단위마다의 Best Practice를 토론하고, 단위별로 Best Practice를 모아서 팀의 최종 결과물을 만들어내는 방식으로 진행해주세요

# 과제목표

- 기본적인 형태의 서비스를 만들 수 있는가?
- 코드 스타일은 어떤가?
- 프로젝트 구조를 어떻게 설계했는가?
- 과제를 수행하는 기본적인 태도는 어떤가?
- README는 잘 작성되었는가?
- Git은 잘 활용되었는가?

<h2>팀원 소개</h2>

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/wlsgus93"><img src="https://avatars.githubusercontent.com/u/35252854?v=4" width="100px;" alt=""/><br /><sub><b>김진현</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/plou102"><img src="https://avatars.githubusercontent.com/u/107393773?v=4" width="100px;" alt=""/><br /><sub><b>박정민</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/Donghyun-git"><img src="https://avatars.githubusercontent.com/u/78803763?v=4" width="100px;" alt=""/><br /><sub><b>안동현</b></sub></a><br /></td>
           <td align="center"><a href="https://github.com/datoybi"><img src="https://avatars.githubusercontent.com/u/41810621?v=4" width="100px;" alt=""/><br /><sub><b>윤다솜</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/kiseokDev"><img src="https://avatars.githubusercontent.com/u/107299502?v=4" width="100px;" alt=""/><br /><sub><b>이기석</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/haron-lee"><img src="https://avatars.githubusercontent.com/u/88657261?v=4" width="100px;" alt=""/><br /><sub><b>이도하</b></sub></a><br /></td>
     <tr/>
     <tr/>
  </tbody>
</table>
</div>

# 목차

- [🔗 배포 링크](#-배포-링크)
- [⚙️ 실행 방법](#️-실행-방법)
- [진행 방식]
- [🔗 사전 선발 과제](#-사전-선발-과제)
  - [브랜치 전략](#브랜치-전략)
  - [커밋 메시지 컨벤션](#커밋-메시지-컨벤션)
- [🤝 팀 규칙](#-팀-규칙)
- [📂 폴더 구조](#-폴더-구조)
- [🛠️ 기술 스택](#️-기술-스택)
- [📖 서비스 소개](#-서비스-소개)
  - [기능 구현](#기능-구현)
  - [페이지](#페이지)
- [👑 Best Practice 도출 과정](#-best-practice)

## 🔗 배포 링크

https://main.d1dfbvng6pnql9.amplifyapp.com/%EB%8B%A4

## ⚙️ 실행 방법

```
npm install
npm run start
```

## 진행 방식

- 각자 기능별 역할별 팀별 업무 분담
- 팀내에서 개발한 뒤 가장 Best Practice 라고 생각되는 걸 선정하여 리팩토링 하는 방식

## 브랜치 전략

<img src="https://github.com/wlsgus93/pre-onboarding-12th-1-12/assets/35252854/31806487-9c20-4b5c-8bf0-f7b49d536af9" alt=""/>
<br>


- upstream에는 main(배포용), dev(개발용) 브랜치 존재
- 브랜치명: feature/구현기능
- ex: feature/todoForm
- 개인 원격 저장소 fork한뒤 작업한뒤 원본 저장소의 origin:dev으로 PR 날림
- 팀원 승인 받으면 origin:dev=> origin:main에 merge
- Pull request시에 reviewer 3명 이상 Approve시 merge 가능

## 커밋 메시지 컨벤션

| 타입             | 설명                                                      |
| ---------------- | --------------------------------------------------------- |
| Feat             | 새로운 기능 추가                                          |
| Fix              | 버그 수정                                                 |
| Env              | 개발 환경 관련                                            |
| Style            | 코드 자체의 변경이 없는 경우, formatting, semicolon 등    |
| Refactor         | 코드 리팩토링 (더 효율적인 코드로 변경 등)(기능은 동일)   |
| Design           | CSS 등 사용자 UI 디자인 변경                              |
| Comment          | 필요한 주석 추가 및 변경                                  |
| Docs             | 내부 문서 추가/수정                                       |
| Test             | 테스트 코드, 리팩토링 테스트 코드 추가                    |
| Chore            | 빌드, 패키지 매니저 수정, 그 외 기타 수정 (.gitignore 등) |
| Rename           | 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우       |
| Remove           | 파일 또는 폴더를 삭제하는 작업만한 경우                   |
| !BREAKING CHANGE | 커다란 API 변경의 경우                                    |
| !HOTFIX          | 급하게 치명적인 버그를 고치는 경우                        |

## 🤝팀 규칙

### formating 및 lint 전략

```json
{
  //formating
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "bracketSpacing": true
}
```

```json
//Lint
"rules": {
  "no-var": "error", // var 금지
  "no-multiple-empty-lines": "error", // 여러 줄 공백 금지
  "eqeqeq": "error", // 일치 연산자 사용 필수
  "dot-notation": "error", // 가능하다면 dot notation 사용
  "no-unused-vars": "warn" // 사용하지 않는 변수 금지
},
```

### 기타

- 폴더: 소문자
- 함수 : arrowfunction
- 함수이름: camel
- 컴포넌트: pascal
- 훅,로직파일: camel
- 상수변수: 대문자

### 협업툴

## 📂 폴더 구조

```
project-root/
├── src/
│   ├── components/
│   ├── styles/
│   └── index.js
├── public/
├── package.json
└── README.md
```

## 🛠️ 기술 스택

<img src="https://img.shields.io/badge/Typescript-blue?style=square"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/Axios-56347C?style=flat-square&logo=Axios&logoColor=white"/> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=flat-square&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/> <img src="https://img.shields.io/badge/Amazon Amplify-569A31?style=flat-square&logo=Amazon S3&logoColor=white"/>

## 기능 구현

## 👑 Best Practice
