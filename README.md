![image](https://github.com/user-attachments/assets/aaa89322-2351-484c-b742-868d20b422dd)

## ⚡️ 더컴퍼스 2024 동계 인턴 인턴쉽 챌린지 
### 1. 프로젝트 폴더 구조
* 공통 과제의 경우 별도의 폴더(common)에 정리했습니다.
```
📦src
 ┣ 📂common //공통 과제
 ┃ ┣ 📂first-algorithm
 ┃ ┃ ┣ 📜first-algorithm.md
 ┃ ┃ ┗ 📜friendRecommendations.js
 ┃ ┗ 📂second-algorithm
 ┃ ┃ ┣ 📜isEmpty.js
 ┃ ┃ ┗ 📜second-algorithm.md
 ┣ 📂pages
 ┃ ┣ 📜Home.js
 ┃ ┣ 📜ProjectDetail.js
 ┃ ┣ 📜ProjectForm.js
 ┃ ┣ 📜ProjectList.js
 ┃ ┣ 📜TaskForm.js
 ┃ ┗ 📜TaskItem.js
 ┣ 📂styles // 스타일 적용을 위한 폴더
 ┃ ┣ 📜ProjectDetail.css
 ┃ ┣ 📜ProjectForm.css
 ┃ ┣ 📜ProjectList.css
 ┃ ┣ 📜TaskForm.css
 ┃ ┗ 📜TaskItem.css
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜App.test.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┣ 📜logo.svg
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js
```
<br>

### 2. 컴포넌트 별 주요 기능
`App.js`: 페이지 라우팅 및 프로젝트 데이터 상태 관리
<br/>
`ProjectList.js`: 프로젝트 목록 표시
<br/>
`ProjectForm.js`: 프로젝트 생성
<br/>
`ProjectDetail.js`: 프로젝트 세부 정보 및 tasks 목록 표시, 프로젝트 삭제
<br/>
`TaskItem.js`: task 컴포넌트 표시, task 삭제, 마감일 및 상태 표시
<br/>
`TaskForm.js`: task 생성
<br/>
<br/>

### 3. 데이터 구조
* 백엔드 파트의 과제를 참고하여 mock data의 구조를 설정했습니다. 
```
// project
{
  "id": "1",
  "title": "프로젝트 제목",
  "description": "프로젝트 설명",
  "tasks": [] // task id list
}
```

```
// task
{
  "id": "1",
  "title": "프로젝트 제목",
  "description": "프로젝트 설명",
  "tasks": [] // task id list
}
```