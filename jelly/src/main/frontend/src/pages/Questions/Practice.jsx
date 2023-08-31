import React from "react"
import Header from "components/domain/Header"
import Navigation from "components/domain/Nav"
import { useState } from "react"
import styled from "styled-components"
import axios from "axios"
import useAuth from "hooks/useAuth"
import { MyPageBallonBlue, MyPageBallonGreen, MyPageBallonGreen_2, MyPageBallonRed, MyPageBallonRed_2, MyPageBallonSkyblue_2 } from "pages/MyPage";
import { Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const Practice = () => {
    const navigate = useNavigate();

    const questionList = [
        {
            q: ['새 학기가 시작하고 젤리를 가져온 처음 보는 친구'],
            a: [{ type: 'E', text: '어 나도 줘 넌 이름이 뭐야' },
            { type: 'I', text: '나도 먹고 싶다.. 근데 다가가진 못하겠어' }]
        },
        {
            q: ['처음 가는 젤리 투어'],
            a: [{ type: 'E', text: '와 여기 진짜 재밌다' },
            { type: 'I', text: '내가 왜 여기에 있지 집 가고 싶다' }]
        },
        {
            q: ['앞에 가시는 분이 젤리를 떨어트리셨다'],
            a: [{ type: 'E', text: '저기요!! 여기 젤리 떨어트리셨어요!!!' },
            { type: 'I', text: '헉 젤리 떨어트리셨는데 어떡하지….' }]
        },

        {
            q: ['처음보는 젤리를 발견'],
            a: [{ type: 'N', text: '이런걸 또 어디서 사겠어 일단 구매' },
            { type: 'S', text: '도전 노노 익숙한 젤리 구매' }]
        },
        {
            q: ['길을 가는데 맞은편에서 무섭게 생긴 사람이 걸어온다'],
            a: [{ type: 'N', text: '저 사람이 내 가방에 있는 젤리 다 내놓으라 하면 어쩌지' },
            { type: 'S', text: '무서워 보이는 사람이네' }]
        },
        {
            q: ['일주일동안 젤리만 먹기'],
            a: [{ type: 'N', text: '그거 성공하면 뭐 줄거야?' },
            { type: 'S', text: '그건 불가능 하지 않을까' }]
        },

        {
            q: ['친구가 기분이 안 좋아서 젤리를 먹었다 한다'],
            a: [{ type: 'F', text: '기분이 왜 안 좋아?' },
            { type: 'T', text: '무슨 젤리 먹었어?' }]
        },
        {
            q: ['버려진 젤리를 보고'],
            a: [{ type: 'F', text: '헉 저거 맛있는건데 왜 버렸을까' },
            { type: 'T', text: '저기 쓰레기통 아닌데 누가 버린거야' }]
        },
        {
            q: ['내가 힘들어 보인다고 젤리를 사온 친구'],
            a: [{ type: 'F', text: '이거 내가 진짜 좋아하는거야 고마워' },
            { type: 'T', text: '내가 왜 힘들어 보였어?' }]
        },

        {
            q: ['친구가 여행 장소를 정하자한다'],
            a: [{ type: 'P', text: '난 아무 곳이나 다 좋아' },
            { type: 'J', text: '당산역 ㅇㅇ가게로 젤리 사러 가자' }]
        },
        {
            q: ['과제를 하는 나의 모습'],
            a: [{ type: 'P', text: '책상 먼저 정리하고 시작하자' },
            { type: 'J', text: '10시엔 프론트.. 11시엔 백엔드.. 12시엔 젤리 먹으면서 휴식..' }]
        },
        {
            q: ['집에 사람들을 초대하며'],
            a: [{ type: 'P', text: '부족하면 더 시켜먹지 뭐' },
            { type: 'J', text: '몇 명이 오려나?? 젤리는 이 정도면 되겠지' }]
        },
        {
            q: ['테스트가 모두 끝났습니다.'],
            a: [{ type: '', text: '결과 보러 가기' }],
        }

    ]

    const [mbtiList, setMbtiList] = useState([
        { name: 'E', count: 0 }, { name: 'I', count: 0 }, { name: 'N', count: 0 }, { name: 'S', count: 0 },
        { name: 'F', count: 0 }, { name: 'T', count: 0 }, { name: 'P', count: 0 }, { name: 'J', count: 0 }
    ])

    const [page, setPage] = useState(0)

    const handleAnswer = (type) => {
        const updatedMbtiList = mbtiList.map((item) => {
            if (item.name === type) {
                return { ...item, count: item.count + 1 };
            }
            return item;
        });

        setMbtiList(updatedMbtiList);

        if (page < questionList.length - 1) {
            setPage(page + 1);
        } else {
            console.log("테스트 종료");
            setMbti();
            goToResult(); // 결과 보기 페이지로 이동하는 함수 호출
        }
    };

    const goToResult = () => {
        console.log("결과 보러 가기");
        navigate("/result");
    };
    //이동

    const setMbti = () => {
        let EorI =
            mbtiList.find((data) => data.name === "E").count >
                mbtiList.find((data) => data.name === "I").count
                ? "E"
                : "I";
        let NorS =
            mbtiList.find((data) => data.name === "N").count >
                mbtiList.find((data) => data.name === "S").count
                ? "N"
                : "S";
        let ForT =
            mbtiList.find((data) => data.name === "F").count >
                mbtiList.find((data) => data.name === "T").count
                ? "F"
                : "T";
        let PorJ =
            mbtiList.find((data) => data.name === "P").count >
                mbtiList.find((data) => data.name === "J").count
                ? "P"
                : "J";

        let mbti = EorI + NorS + ForT + PorJ;

        console.log("MBTI 결과:", mbti);

        axios
            .post(`/jResult?mJelly=${mbti}`)
            .then((response) => {
                console.log("결과 전송 성공:", response.data);
                // 여기에서 필요한 추가 동작 수행
            })
            .catch((error) => {
                console.error("결과 전송 실패:", error);
                // 여기에서 필요한 오류 처리 수행
            });
    };

    return (
        <>
            <Header />
            <Navigation />
            <Topic>질문</Topic>
            <div>
                <QuestButton>{questionList[page].q}</QuestButton>
                <div>
                    {questionList[page].a.map((answer, index) => (
                        <Answer key={index}>
                            <AnswerButton onClick={() => handleAnswer(answer.type)}>
                                {answer.text}
                            </AnswerButton>
                        </Answer>
                    ))}
                </div>
                <Page>{`페이지: ${page + 1} / ${questionList.length}`}</Page>
            </div>
            <MyPageBallonBlue src="/balloonBlue.png" />
            <MyPageBallonRed src="/balloonRed.png" />
            <MyPageBallonRed_2 src="/balloonRed.png" />
            <MyPageBallonGreen src="/balloonGreen.png" />
            <MyPageBallonGreen_2 src="/balloonGreen.png" />
            <MyPageBallonSkyblue_2 src="/ballonSkyblue.png" />
        </>
    );
}

export default Practice;



const Topic = styled.div`
    width: 100%;
    height: 3rem;
    background-color: #FFFFE0;
    text-align: center;
    font-size: 3rem;
    border: 3px solid #F5DA81;
`;

const QuestButton = styled.div`
    width: 30%;
    height: 10rem;
    font-size: 4rem;
    /* border: 2px solid black; */
    border-radius: 2rem;
    margin: 0 auto;
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const Bind = styled.div`
    display: flex;
    flex-direction: row;
`

const Answer = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
`

const AnswerButton = styled.button`
    width: 30%;
    height: 10rem;
    font-size: 3rem;
    border: 2px solid black;
    border-radius: 2rem;
    margin: 0 auto;
    margin-top: 5rem;
    display: flex; /* 수정: 기본 값인 'row' 대신 'flex'로 설정 */
    justify-content: center;
    align-items: center;
    background-color: #F4E6D0;
    cursor: pointer;
`

const Page = styled.div`
    width: 50%;
    height: 5rem;
    font-size: 3rem;
    /* border: 2px solid black; */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 3rem;
    margin-bottom: 3rem;
`;

