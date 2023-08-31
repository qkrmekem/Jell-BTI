import Button from "components/base/Button";
import Img from "components/base/Img";
import Modal from "components/base/Modal";
import useAuth from "hooks/useAuth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncUpFetch } from "redux/jellyInfo";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const Title = styled.h1`
    font-size : 9vw;
    text-align: center;
    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
`

const SubTitle = styled(Title)`
    font-size :5vw;
    margin-top: 35px;
    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
`

const Name = styled.h2`
    font-size: 1.8vw;
    text-align: center;
`

const ProductList = ()=>{
    const navigate = useNavigate()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncUpFetch());
    }, []);

    const data = useSelector((state)=> state)

    return(
        <Modal>
            <Title>후기 작성하기</Title>
            <Container>
                {
                    data.jellyInfo.status === "complete" ? data.jellyInfo.value.map((v)=>{
                        return (
                            <Button key={v.jidx} margin={"0 4px"} bgColor={"transparent"} onClick={()=>navigate(`/home/goodsModal/${v.jidx}/review`)}>
                                <Img key={v.jidx} src={v.imageUrl} width={10} padding={5} cursor={"pointer"} />
                                <Name>{v.jname.slice(4)}</Name>
                            </Button>
                        )
                    }) : <SubTitle>로딩중입니다...</SubTitle>
                }
            </Container>
            <SubTitle>클릭해주세요~!</SubTitle>
        </Modal>
    )
}

export default ProductList;