import React, { useState } from "react";
import axios from "axios";
import Styled from "styled-components";
import Header from "../../components/domain/Header";
import Navigation from "../../components/domain/Nav";
import { useNavigate } from "react-router-dom";
import useAuth from "hooks/useAuth";

const Writing = () => {
    useAuth("/writing")
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/board");
    };

    const [value, setValue] = useState("");
    const [boardTitle, setBoardTitle] = useState("");
    const [boardContent, setBoardContent] = useState("");
    const [memberAccount, setMemberAccount] = useState("pizzay@kakao.com");

    const handleTitleChange = (e) => {
        setBoardTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setBoardContent(e.target.value);
    };

    const handleAccountChange = (e) => {
        setMemberAccount(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios({
            url: "/board",
            method: "post",
            data: {
                boardTitle,
                boardContent,
                memberAccount,
            },
        })
            .then((response) => {
                console.log(response);
                navigate("/board");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <Header />
            <Navigation />
            <Topic>글 쓰기</Topic>
            <form onSubmit={handleSubmit}>
                <Title
                    type="text"
                    placeholder="*제목"
                    onChange={handleTitleChange}
                    value={boardTitle}
                />
                <Content
                    type="text"
                    placeholder="*글 내용"
                    onChange={handleContentChange}
                    value={boardContent}
                />
                <Button>
                    <Button1 type="submit">제출하기</Button1>
                    <Button2 onClick={handleButtonClick}>취소하기</Button2>
                </Button>
            </form>
        </>
    );
};

const Topic = Styled.div`
    width: 100%;
    height: 3rem;
    background-color: #FFFFE0;
    text-align: center;
    font-size: 3rem;
    border: 3px solid #F5DA81;
`

const Title = Styled.input`
    width: 90%;
    height: 4rem;
    font-size: 4rem;
    border: 2px solid black;
    border-radius: 15px;
    margin: 0 auto;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    background-color: #F4E6D0;
`

const Content = Styled.textarea`
    width: 90%;
    height: 35rem;
    font-size: 4rem;
    border: 2px solid black;
    border-radius: 15px;
    margin: 0 auto;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    background-color: #F4E6D0;
`

const Button = Styled.div`
    float: right;
    margin-right: 4.5rem;
    margin-bottom: 2rem;
`

const Button1 = Styled.button`
    width: 6rem;
    height: 3rem;
    margin-top: 2rem;
    border-radius: 10px;
    border: 2px solid black;
    background-color: skyblue;
    &:hover{  
    background-color : #FFFFE0;
  }
    cursor: pointer;
    font-size: 2rem;
`
// #16f916 다른 버튼 색상
//#F5DA81

const Button2 = Styled.button`
    width: 6rem;
    height: 3rem;
    margin-top: 2rem;
    margin-left: 1rem;
    border-radius: 10px;
    border: 2px solid black;
    background-color: skyblue;
    &:hover{  
    background-color : #FFFFE0;
  }
    cursor: pointer;
    font-size: 2rem;
`

export default Writing;

