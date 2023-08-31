import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

import Header from "../../components/domain/Header";
import Navigation from "../../components/domain/Nav";
import useAuth from 'hooks/useAuth';

const Modify = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [board, setBoard] = useState({});
    const bIdx = new URLSearchParams(location.search).get('bIdx');

    useAuth(`/modify?bldx=${bIdx}`)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/board?bIdx=${bIdx}`);
                const { btitle, bcontent } = response.data.board;
                setBoard({ bTitle: btitle, bContent: bcontent });
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [bIdx]);

    const handleUpdate = async () => {
        try {
            const updatedData = {
                bIdx: bIdx,
                bTitle: board.bTitle,
                bContent: board.bContent,
            };

            await axios.put("/Insert", updatedData);
            navigate(`/read?bIdx=${bIdx}`);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.get(`/delete?bIdx=${bIdx}`);
            navigate(`/board`);
        } catch (error) {

            console.error(error);
        }
    };

    return (
        <>
            <Header />
            <Navigation />
            <Topic>글 수정하기</Topic>
            {board ? (
                <>
                    <Title
                        type="text"
                        placeholder="*제목"
                        value={board.bTitle || ''}
                        onChange={(e) =>
                            setBoard((prevBoard) => ({
                                ...prevBoard,
                                bTitle: e.target.value,
                            }))
                        }
                    />

                    <Content
                        type="text"
                        placeholder="*글 내용"
                        value={board.bContent || ''}
                        onChange={(e) =>
                            setBoard((prevBoard) => ({
                                ...prevBoard,
                                bContent: e.target.value,
                            }))
                        }
                    />

                    <Button>
                        <Button1 type="submit" onClick={handleUpdate}>
                            수정하기
                        </Button1>
                        <Button2 type="submit" onClick={handleDelete}>
                            삭제하기
                        </Button2>
                        <Button3 onClick={() => navigate('/board')}>취소하기</Button3>
                    </Button>
                </>
            ) : (
                <Loading>Loading...</Loading>
            )}
        </>
    );
};


const Topic = styled.div`
    width: 100%;
    height: 3rem;
    background-color: #ffffe0;
    text-align: center;
    font-size: 3rem;
    border: 3px solid #f5da81;
`;

const Title = styled.input`
    width: 90%;
    height: 4rem;
    font-size: 4rem;
    border: 2px solid black;
    border-radius: 15px;
    margin: 0 auto;
    margin-top: 2rem;
    background-color: #f4e6d0;
    display: flex;
    align-items: center;
`;

const Content = styled.input`
    width: 90%;
    height: 35rem;
    font-size: 4rem;
    border: 2px solid black;
    border-radius: 15px;
    margin: 0 auto;
    margin-top: 2rem;
    background-color: #f4e6d0;
    display: flex;
    align-items: center;
`;

const Button = styled.div`
    float: right;
    margin-right: 4.5rem;
    margin-bottom: 2rem;
`

const Button1 = styled.button`
    width: 6rem;
    height: 3rem;
    margin-top: 2rem;
    border-radius: 10px;
    border: 2px solid black;
    background-color: skyblue;
    &:hover {
        background-color: #ffffe0;
    }
    cursor: pointer;
    font-size: 2rem;
    `;

const Button2 = styled.button`
    width: 6rem;
    height: 3rem;
    margin-top: 2rem;
    margin-left: 1rem;
    border-radius: 10px;
    border: 2px solid black;
    background-color: skyblue;
    &:hover {
        background-color: #ffffe0;
    }
    cursor: pointer;
    font-size: 2rem;
`;

const Button3 = styled.button`
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

const Loading = styled.div`
    width: 100%;
    height: 40rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
`;

export default Modify;