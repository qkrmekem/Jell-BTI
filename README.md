# 🎉 Jell-BTI (젤리 추천 사이트)
<img width="1024" alt="JELL-BTI" src="https://github.com/kimpizza/Jell-BTI_Project/assets/83896466/98885bc4-d727-4904-81f3-acf3e4cf69b5">


## 🎞 프로젝트 설명        
많은 하리보 젤리 중 내 취향에 맞는 젤리는 무엇일까?

## ✨ 담당 기능
### 1. 젤리 정보 관리 기능 <br>
: 공공데이터 API와 연동해 젤리에 대한 영양정보를 관리할 수 있습니다.
### 2. 로그인 체크 기능 <br>
: 인터셉터를 활용하여 사용자의 로그인 여부에 따라 기능을 제한하도록 하였습니다.
### 3. 로그인 및 회원가입 기능 <br>
: 네이버 API를 활용해 로그인 및 회원가입 기능을 구현하였습니다.<br>
  로그인의 경우 세션을 활용하였습니다.
### 4. 후기 작성 기능 <br>
: JPA를 활용하여 젤리에 대한 후기를 작성할 수 있도록 구현하였습니다.

## 🎨 프로젝트 화면 구성(초안)
https://www.figma.com/file/BirIA9SMcNDdzDCB2IDUsj/HARIBO_DESIGN?type=design&node-id=0%3A1&t=RuZ8fKREFFKmksmX-1

## ⚒️ 프로젝트를 진행하며 겪은 어려움
### 1. 민감정보 관리
#### 문제
네이버 api나 카카오 api, 데이터 베이스 등 노출되지 말아야 할 데이터들이 appliction.properties파일에 포함되어 그대로 노출이 되는 상황이 발생<br>
#### 해결
1. 따로 properties파일을 생성해 민감한 정보를 옮겨두고 gitignore파일을 이용해 해당 파일은 커밋에서 자동으로 제외되도록 설정함
2. 네이버api나 카카오api의 경우 컨트롤러나 서비스에서 사용되어야 하므로 @Value어노테이션을 사용해 활용하는 방식으로 문제를 해결함
### 2. JPA의 단점
#### 문제
JPA를 단독으로 사용했을 때 동적 쿼리를 구현해야 하는 경우 문제가 발생할 수 있는 상황을 인지함
jpql을 활용하여 동적 쿼리를 작성할 수 있으나, 이는 문제가 생길경우 컴파일 시점에는 알 수 없고 해당 기능을 누군가가 사용하는 시점에 발견이 됨
#### 해결
QueryDsl을 활용하여 동적쿼리를 사용하는 경우 컴파일 시점에 이를 알아챌 수 있도록 문제를 해결함
## 🧑‍💻 팀원 소개
### 3. 로그인 인터셉터 구현
#### 문제
비로그인 사용자가 권한이 필요한 기능에 접근하려 할 때 redirect를 이용해 로그인 페이지로 이동시키려고 시도를 하였는데, 현재 해당 프로젝트에서는<br>
모달창을 이용해 로그인 페이지를 구현하고 있어 redirect로 구현할 수 없었음
#### 해결
ObjectMapper를 이용해 상태 메세지를 json형태로 변환하고, response 객체를 이용해 http메세지를 전송하는 방식으로 기능을 구현
#### 생각해봐야 할 점
response객체를 그대로 사용하는 것은 비효율적일 수 있지 않나 하는 생각이 듦<br>
뭔가 더 효율적인 처리 방식이 없을까?
  
### Back End Developer 🙋
 
|                                     PIZZAY                                      |                                       EuiMin Park                                       |
| :---------------------------------------------------------------------------: |:---------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/108074336?v=4" width="200"/> |<img src="https://avatars.githubusercontent.com/u/108075531?v=4" width="200"/> |
|                      [김유리](https://github.com/kimpizza)                      |                 [박의민](https://github.com/qkrmekem)                   | 

### Front End Developer 🙋

|                                     이재호                                      |                                       Leutbing                                      |
| :---------------------------------------------------------------------------: |:---------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/111284065?v=4" width="200"/> |<img src="https://avatars.githubusercontent.com/u/83896466?s=400&u=fc59230a4dc6b05fb9e03f786c9dfa16d9e21ea6&v=4" width="200"/> |
|                      [이재호](https://github.com/jaeho13)                      |                 [이태형](https://github.com/spdhsrnvl123)                   | 

## 🏃‍♂️ 개발 기간(진행중..)

## ✨ 프로젝트 기능
1. 젤리 정보
: 젤리에 대한 영양정보와 맛과 식감에 대한 점수, 다른 사람들이 남긴 젤리 평점을 확인해 젤리 선택에 도움을 줍니다.

2. 젤비티아이
: 나와 성향이 가장 비슷한 곰 젤리는 무엇일까 확인하고, 나와 비슷한 유형의 사람들은 어떤 젤리를 선호하는지 알 수 있습니다.

3. 회원 게시판
: 젤리에 대한 다양한 이야기를 나눌 수 있습니다.

## 🎨 프로젝트 화면 구성(초안)
https://www.figma.com/file/BirIA9SMcNDdzDCB2IDUsj/HARIBO_DESIGN?type=design&node-id=0%3A1&t=RuZ8fKREFFKmksmX-1

<img width="909" alt="스크린샷 2023-03-02 오후 4 48 28" src="https://user-images.githubusercontent.com/108074336/222364621-fff306dd-b5cf-4566-891b-77f3d6bc1fa7.png">

## 🚀 ERD
<img width="1081" alt="스크린샷 2023-03-23 오후 2 25 47" src="https://user-images.githubusercontent.com/108074336/227111784-c32170d6-1cbe-4f66-858c-1875cbbafdc3.png">


## ⚒️ 사용 기술
<table>
    <tr>
        <th>구분</th>
        <th>내용</th>
    </tr>
    <tr>
        <td>기본 사용언어</td>
        <td>
            <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=Java&logoColor=white"/>
            <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
        </td>
    </tr>
    <tr>
        <td>Frontend</td>
        <td>
           <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
           <img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white">
           <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white">           
           <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
        </td>
    </tr>
    <tr>
        <td>Backend</td>
        <td>
           <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=Spring&logoColor=white"/> 
           <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=Spring Boot&logoColor=white"/>
           <img src="https://img.shields.io/badge/hibernate-59666C?style=for-the-badge&logo=hibernate&logoColor=white">
        </td>
    </tr>
     <tr>
        <td>API</td>
        <td>
            <img src="https://img.shields.io/badge/Kakao-FFCD00?style=for-the-badge&logo=Kakao&logoColor=white"/>
            <img src="https://img.shields.io/badge/Naver-03C75A?style=for-the-badge&logo=Naver&logoColor=white"/>
        </td>
    </tr>
    <tr>
        <td>개발도구</td>
        <td>
            <img src="https://img.shields.io/badge/Intellij-000000?style=for-the-badge&logo=IntelliJ IDEA&logoColor=white"/>
            <img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=VisualStudioCode&logoColor=white"/>
        </td>
    </tr>
    <tr>
        <td>서버환경</td>
        <td>
            <img src="https://img.shields.io/badge/Apache Tomcat-D22128?style=for-the-badge&logo=Apache Tomcat&logoColor=white"/>
        </td>
    </tr>
    <tr>
        <td>데이터베이스</td>
        <td>
          <img src="https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=Oracle&logoColor=white"/>
        </td>
    </tr>
    <tr>
        <td>협업도구</td>
        <td>
            <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"/>
            <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>
            <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white"/>
        </td>
    </tr>
</table>

