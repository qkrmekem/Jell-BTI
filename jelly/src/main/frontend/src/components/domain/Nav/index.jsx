import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import useAuth from "hooks/useAuth"

const MenuBox = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`

const MenuList = styled.li`
    font-size: 48px;
    font-weight: 700;
    padding-left: 51px;
    padding: 20px 48px;
    text-shadow: 3px 3px 1px #d0d2cf;
    cursor: pointer;
    transition: all 0.2s;
    :nth-child(1){
        color : #00A3FF;
    }
    a{
        text-decoration: none;
        color: inherit;
        display: block;
        border-radius: 30px;
        padding: 7px 20px;
    }
    &:hover{
        transform: scale(1.2);
    }
`

const Nav = ()=>{
    const navigate = useNavigate()

    const [bool, setBool] = useState(undefined);

    useEffect(() => {
        const fetchData = async (mEmail) => {
            try {
                mEmail = "pizzay@kakao.com"; // 수정해야 한다.
                const response = await axios.get(`/jellBTI?mEmail=${mEmail}`);
                setBool(response.data); // 서버에서 boolean 값을 바로 받아온다고 가정합니다.
            } catch (error) {
                console.error(error);   
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        console.log(bool);
    }, [bool]);

    const mypageAuth = (route) => {
        const token = localStorage.getItem('token');        
          if (!token) {
            alert("로그인을 해주세요.")
          }else if(token){
            navigate(`/${route}`)
          }
      };

    return(
        <MenuBox>
            <MenuList><Link to="/home">홈</Link></MenuList>
            <MenuList onClick={()=>navigate("/practice")}>젤리 테스트</MenuList>
            <MenuList><Link to="/board">커뮤니티</Link></MenuList>
            <MenuList onClick={()=>mypageAuth("mypage")}>마이페이지</MenuList>
        </MenuBox>
    )
}

export default Nav;