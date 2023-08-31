import styled from "styled-components";
import Button from "../../base/Button";
import { useInput } from "hooks/useInput";
import { useNavigate, useParams } from "react-router-dom";
import StarRating from "../StarRating";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import useAxios from "hooks/useAxios";
import useAuth from "hooks/useAuth";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextArea = styled.textarea`
  width: 30vw;
  height: 20vw;
  background: #d9d9d9;
  border-radius: 30px;
  border: 0;
  margin-bottom: 20px;
  font-size: 35px;
  padding: 0px 20px;
  outline: none;
  margin-top: 20px;
`;

const Wrap = styled.div`
    display : flex;
    flex-direction: column;
    padding-top:15px;
`

const RatingText = styled.div`
    color : #787878;
    font-size : 12px;
    font-weight : 400;
`

const Stars = styled.div`
    display: flex;
    padding-top:5px;
    & svg{
        color:gray;
        cursor: pointer;
    }
    :hover svg {
    color: #fcc419;
  }
  & svg:hover ~ svg {
    color: gray;
  }
  .yellowStar {
    color: #fcc419;
  }
`

const Review = () => {
  const [inputValue, setInputValue, handleChange] = useInput("");
  const [count, setCount] = useState(0);
  const {id} = useParams();
  const userData = useSelector((state)=>state.userInformation);
  const navigate = useNavigate()

  useAuth(`/home/goodsModal/${id}/review`)

  const ReviewHandler = (e)=>{
    e.preventDefault();
      axios({
        url: '/jellies/rates',
        method: 'post',
        data: {
          "jIdx": id,
          "mNick": userData.mNick,
          "mJelly": userData.mJelly,
          "jStar": count,
          "rContent": inputValue,
          "mEmail": userData.mEmail
        }
    }).then((response) => {
      console.log(response)
      alert("후기가 작성되었습니다.")
      navigate("/mypage/reviewlist")
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <>
      <Form onSubmit={ReviewHandler}>
        <h1 style={{fontSize:"3.7vw",marginBottom:"20px", marginTop:"-40px"}}>별점을 입력해주세요!</h1>
        <StarRating setCount={setCount} /> 
        <TextArea
         type="text"
         placeholder="후기를 입력해주세요."
         value={inputValue}
         onChange={handleChange}
        >
        </TextArea>
        <Button
          fontSize={40}
          bgColor={"#16f916"}
          fontWeight={600}
          padding={"1px 14px"}
          margin={"0px 10px"}
        >
          제출하기
        </Button>
      </Form>
    </>
  );
};

export default Review;
