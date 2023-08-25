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
- [⌛ 진행 과정](#-진행-과정)
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
https://main.d1dfbvng6pnql9.amplifyapp.com/

## ⚙️ 실행 방법
```
npm install
npm run start
```
## ⌛ 진행 과정
### 과제 스케줄링 방식 및 회의
 - day1 : 각자 formatting 및 linter 룰, 코드 컨벤션 및 개인 과제 코드 리뷰 준비
 - day2 : 코드 리뷰 및 업무 분담, 초기세팅(format(by동현), lint룰(by도하) 결정
   - 초기세팅(format, lint github) 및 배포 : 김진현, 이기석
   - 로그인 및 로그아웃 구현:  박정민, 윤다솜
   - 투두리스트: 안동현, 이도하
 - day3 : 각자 기능 구현 및 진행상황 공유
 - day4 : Readme작성 및 리팩토링 

### 구현 기능 방법
  - 코드리뷰로 각자 구현 방법 공유
  - 각자 기능팀내 업무 분담
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
|타입|설명|
| --- | --- |
|Feat| 새로운 기능 추가|
|Fix|버그 수정|
|Env|개발 환경 관련 |
|Style| 코드 자체의 변경이 없는 경우, formatting, semicolon 등|
|Refactor|코드 리팩토링 (더 효율적인 코드로 변경 등)(기능은 동일)|
|Design|CSS 등 사용자 UI 디자인 변경|
|Comment|필요한 주석 추가 및 변경|
|Docs|내부 문서 추가/수정|
|Test|테스트 코드, 리팩토링 테스트 코드 추가|
|Chore| 빌드, 패키지 매니저 수정, 그 외 기타 수정 (.gitignore 등)|
|Rename|파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우|
|Remove|파일 또는 폴더를 삭제하는 작업만한 경우|
|!BREAKING CHANGE|커다란 API 변경의 경우|
|!HOTFIX|급하게 치명적인 버그를 고치는 경우|


## 🤝팀 규칙
  ### formating 및 lint 전략
  ```json
  {//formating
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
│
├── public/ # 정적 파일들
│ ├── index.html
│ └── manifest.json
│
├── src/ # 소스 코드
│ ├── components/    # 재사용 가능한 컴포넌트들
│ ├── hooks/         # custom hooks
│ ├── api/           # api 함수들
│ ├── pages/         # 페이지 또는 뷰 컴포넌트
│ ├── router/        # 라우팅 관련 설정 
│ ├── App.tsx        # App 컴포넌트
│ ├── index.tsx      # 진입점 파일
│ ├── types.ts       # TypeScript 타입 정의
│ └── GlobalStyle.ts # 전역 스타일 설정파일
│
├── .gitignore
├── .eslintignore
├── .eslintrc
├── .prettierrc.js
├── package.json
├── tsconfig.json 
└── README.md


```
## 🛠️ 기술 스택
<img src="https://img.shields.io/badge/Typescript-blue?style=square"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/Axios-56347C?style=flat-square&logo=Axios&logoColor=white"/> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=flat-square&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/> <img src="https://img.shields.io/badge/Amazon Amplify-569A31?style=flat-square&logo=Amazon S3&logoColor=white"/>

## 기능 구현

## 👑 Best Practice

### Assignment 1 유효성 검사


| 이름 | 의견 |
| --- | --- |
| 김진현 | - regExp=/@/g(정규식), string.length 두가지 조건으로 삼항연산자를 통해, disabled속성 설정 |
| 박정민 | - 유효성 검사에 onChange 속성 사용하여 함수를 통해 실시간으로 검사<br>- disabled: 삼항연산자를 통해 바로 true / false 변경 |
| 윤다솜 | - 중복되는 validate 코드를 custom hook을 사용하여 코드 중복 해결 |
| 이기석 | - 변경 가능성을 고려하여 validate 코드를 함수로 만들고 custom hook 에서 import |
| 이도하 | - onChange 이벤트 발생시 input의 name을 조건문으로 확인하여 email, password 유효성검사 <br>- isValid state로 false 일경우 disabled |
| 안동현 |  |

### Best Practice

- 유효성 검사 → 이메일: includes(’@’) 사용 / 비밀번호: length > 7 사용
- 유효성 검사는 hooks로 따로 관리
- disabled → useState(object)로 삼항 연산자를 통해 속성 true / false

### 선정 이유

- 유효성 검사 조건이 복잡하다면 정규식을 사용하는 것이 정확하지만 이번 과제의 경우 조건이 간단하여 더 이해하기 쉬운 includes와 length를 사용하였습니다.
- 검사 조건은 언제든 변경 될 수 있기 때문에 따로 관리하는 것이 용이하다고 생각하여 선정하였습니다.

---

### Assignment 2 & 3 페이지 이동/ jwt 관리



| 이름 | 의견 |
| --- | --- |
| 김진현 |  - 로그인 및 회원가입 버튼 이벤트핸들러에 로그인 / 회원가입 성공시 useNavigate 사용하여 페이지 이동 <br>- 로그인 성공시 토튼 localStorage에 저장 |
| 박정민 | - 로그인 / 회원가입 성공시 useNavigate 사용하여 페이지 이동 <br>- 로그인 성공시 토튼 localStorage에 저장 |
| 윤다솜 | - react-router-dom을 이용하여 페이지 이동 <br>- 로그인 성공시 토큰을 localStorage에 저장하여 전역적으로 관리 |
| 이기석 | - 로그인 / 회원가입 성공시 useNavigate 사용하여 페이지 이동<br>- 로그인 성공시 토튼 localStorage에 저장<br>- localStorage를 contextAPI 전역변수에 저장 및 관리  |
| 이도하 | - 로그인, 회원가입 성공시 useNavigate로 /signin과 /todo로 이동<br>- 로그인 post 요청 성공시 localStorage에 JWT저장 |
| 안동현 |  |

### Best Practice

- 로그인 / 회원가입 성공시 localStorage에 토큰 저장 후 UseNavigate 사용하여 페이지 이동
- 토큰 저장, 페이지 이동 모두 한 함수로 관리

### 선정 이유

- 토큰 저장과 페이지 이동이 따로 작동하는 것이 아니라 한번에 작동 하는 것이 더 좋을 것 같아 선정하였습니다.

---

### Assignment 4 리다이렉트


| 이름 | 의견 |
| --- | --- |
| 김진현 | - useEffect를 사용하여, 페이지 렌더링시 token확인 함수를 이용해  토큰 여부 확인 뒤 각 경로로 리다이렉트처리 |
| 박정민 | - useEffect를 사용하여 페이지 렌더링 시 바로 토큰 여부 확인 후 리다이렉트 |
| 윤다솜 | - useEffect의 의존성 배열에 token을 두어, 리다이렉트 처리 |
| 이기석 | - 리다이렉트 정책 변경시 한 곳에서 관리하고 변경할 수 있도록 App.tsx에서 표현<br>- 토큰 유무 확인 후  라우팅 분기 처리 |
| 이도하 | - useEffect에서 token을 의존하여 token 확인 후 리다이렉트 처리 |
| 안동현 |  |

### Best Practice

- useEffect 사용하여 페이지 렌더링 시 localStorage에 저장된 token 유무에 따른 라우팅 처리

### 선정 이유

- useEffect로 관리하는 것이 좀 더 용이하다고 생각하여 선정하게 되었습니다.

---

### Assignment 5 투두 리스트 목록과 체크박스


| 이름 | 의견 |
| --- | --- |
| 김진현 | - 투두리스트는 경로에 접속 할 때마다 렌더링 되어야 하므로, useEffect에서 get요청 작성, 객체는 배열형태로 state에 저장  <br> - 투두의 완료 여부는 state의 완료여부 값을 tag안의 defaultChecked 속성에 바로 부여해준다. |
| 박정민 | 처음 페이지 접속시 useEffect로 데이터를 받아 map을 이용하여 렌더링 |
| 윤다솜 | 서버에서 패칭한 투두리스트를 map을 이용하여 뿌려준다. |
| 이기석 | -todo기능 관련  최상위 컴포넌트에서 useReducer를 사용하여 todos를 자식 컴포넌트에게 전달  |
| 이도하 | - useEffect로 경로 접속시 get 요청 후 state에 저장 하여 isCompleted를 기준으로 state안의 data를 sort()를 사용하여 정렬 후 map() 메소드로 렌더링  |
| 안동현 | useEffeact 를 사용하여 todo 페이지 마운트 시점에 리스트 데이터를 받아서 map을 이용하여 랜더링 |


### Best Practice

- 데이터를 가져오는 함수 axios사용, api 폴더의 requests에서 관리
- todo로 접속시 useEffect로 GetTodos 함수를 실행, 데이터 요청 후 state에 저장
- 저장된 data를 sort()메소드로 정렬 하여 완료된 todo는 IsCompleted로 비교해 밑으로 내려가게 정렬 후 map으로 렌더링

---

### Assignment 6 투두 리스트 추가



| 이름 | 의견 |
| --- | --- |
| 김진현 | - button 클릭시 post요청, 빈값이면(todo.length===0)일때 입력못하게함<br>- 동시에 get요청해서 저장한 투두리스트에 추가 ex)setTodolist([...todolist,result])<br>- useEffect를 사용하여 렌더링시마다 get요청  |
| 박정민 | 버튼 클릭 시 post 요청 후 getTodo를 이용하여 업데이트 |
| 윤다솜 | handleTodoCreate로 추가 버튼 클릭 이벤트를 핸들링, 핸들러 내부에서는 createTodo api를 호출하고, 응답 받은 데이터 setTodos를 호출하여 Todos 상태값 변경 |
| 이기석 | - 아이템을 추가하는 폼을 컴포넌트로 분리<br>- 성공적으로 추가되면 의 dispatch 함수 호출 |
| 이도하 | - input, button 컴포넌트 분리<br>- input handleInputChange함수로 onChange 이벤트 핸들링, setState에 input value 저장<br>- button onClick 이벤트 handleAddClick이벤트 핸들링, 이벤트 발생시 getTodo 함수 호출 하여 todolist 업데이트  |
| 안동현 | 버튼 클릭시 입력된 값을 post 후 리스트 상태 값 변경 |

### Best Practice

- toDoInput로 form 자체를 분리
- enter를 키보드 입력시 submit 이벤트 발생하기 위해 form 태그로 작성
- 추가 버튼을 클릭시 submit 이벤트 발생, form에서 handleSubmit 이벤트 핸들링
- post 요청 성공시 setTodo setstate에 할당

---

### Assignment 7&10 투두리스트,체크박스 수정

| 이름 | 의견 |
| --- | --- |
| 김진현 | - 수정모드: 수정여부를 useState를 사용하여 클릭된 투두의 id를 이용해 삼항연산자로 표현<br>- 체크박스 클릭시 update 요청 후 업데이트. |
| 박정민 | - 수정모드: useState를 사용하여 상태 값으로 수정 여부 변경 / if문을 통해 return 분리<br>- 체크 박스 onChange로 상태가 변화하면 함수를 통해 update요청 후 업데이트 |
| 윤다솜 | - handleTodoCheckboxChange로 Checkbox 이벤트 핸들링, 핸들러 내부에서 는 updateTodo api 호출하고 응답 데이터를 인자로setTodos를 호출하여 Todos 상태 변경<br>- editingTodo 상태 값을 두어 편집 중 여부를 판단하고, editingTodoTitle 상태 값을 두어 편집 중인 투두의 제목을 관리한다.수정 시 handleTodoEditingSubmit으로 핸들링, 핸들러 내부에서 updateTodo api<br> -method 호출하여 응답 데이터로 Todos 상태를 변경한다. |
| 이기석 | - 투두를 수정하는 폼을 컴포넌트로 분리<br>- DOM 변경은 isEditing,setIsEdting state 변수와 활용<br>-  setIsEdting 함수를 서비스 함수에 함께 전달하여 서버에서 OK 응답이 오면 다시 DOM 변경<br>- 체크박스 클릭과 수정 완료 버튼 클릭은 같은 다른 함수를 사용 |
| 이도하 | - 체크 박스 클릭시 updateTodo 함수 호출<br>- isModify useState로 수정모드의 boolean값을 확인하여 렌더링, 수정모드시 input의 value를 handleNewTodo onChange 이벤트 핸들링, 새로운 입력 값을 제출 버튼 클릭시 updateTodo 함수 호출 put요청 성공 후 getTodo 로 데이터 get요청 |
| 안동현 | - useState을 사용하여 상태 값으로 수정 여부 변경<br>- 수정완료 버튼을 클릭하면 변경된 내용을 put 요청을 통해 업데이트 요청. 응답 코드에 따라 수정 여부 변경 |

### Best Practice

- 체크박스 클릭시 updateTodo 함수 실행, put 성공시 새로운 데이터 getTodo로 get 요청
- 수정 버튼 클릭시 input으로 변경되면서 input에 새로운 todo 입력 후 제출시 updateTodo 함수 실행, put 성공시 getTodo로 get 요청

---

### Assignment 8 & Assignment 9 투두리스트 삭제

| 이름 | 의견 |
| --- | --- |
| 김진현 | 삭제버튼 클릭시 삭제 함수 실행 후 get요청에서 받아온 투두리스트에 filter함수통해서 업데이트 |
| 박정민 | 삭제 버튼 클릭 시 delete 요청 후 업데이트 (get 요청) |
| 윤다솜 | handleTodoDelete 핸들러 내부에서 deleteTodo api method 호출, 응답 데이터로 Todos 상태 변경 |
| 이기석 | -성공적으로 제거되면 dispatch 함수 호출 |
| 이도하 | - 삭제 버튼 클릭시 deleteTodo 함수 호출, delete 요청 성공시에 getTodo로 get 요청으로 todolist 업데이트 |
| 안동현 | 삭제 버튼 클릭시 삭제 함수 실행 후, filter메서드를 사용하여 리스트의 값 변경; |

### Best Practice

- 삭제 버튼 클릭시 deleteTodo 실행, delete 요청 성공시 getTodo로 get 요청
