import styled from "styled-components";
import { useState } from "react";
import Ballon from "@/components/base/Ballon";
import Logo from "@/components/base/Logo";
import BallonThird from "@/components/base/BallonThird";
import Button from "components/base/Button";
import { useNavigate } from "react-router-dom";
import Img from "components/base/Img";

const Container = styled.div`
    height: 100vh;
    display: flex;
    overflow: hidden;
`

const HariboBox = styled.div`
    display : flex;
    flex-direction : column;
    width: 100%;
    justify-content : center;
    align-items : center;
    transition: all 1s;
`

const KakaoBox = styled.div`
    position: relative;
    /* left : ${(props) => props.kakaoMove}; */
    transition: all 2s;
    button{
        position: absolute;
        top:43%;
        left: 34%;
    }
`

const SubTitle = styled.div`
    font-size: 82px;
    font-family: 'Inter';
	font-family: 'Dongle', sans-serif;
    -webkit-text-stroke-width: 2px;
     -webkit-text-stroke-color: black;
`

const StartPage = ()=>{
    const [move, setMove] = useState(true)
    const navigate = useNavigate()

    return(
        <Container>
            <HariboBox>
                <Img src="./haribo.png" width={26} height={26} />
                <Logo fontSize={17} />
                <SubTitle>HARIBO</SubTitle>
            </HariboBox>
            <KakaoBox>
                <Img src="./kakaoBackground.png" width={53} height={61}/>
                <BallonThird />
                    <Button fontSize={70} fontWeight={600} padding={"0px 44px"} bgColor={"#16f916"} onClick={()=>navigate("/home")}>Jell-BTI 시작하기</Button>
                <Ballon />
            </KakaoBox>
        </Container>
    )
}

export default StartPage;