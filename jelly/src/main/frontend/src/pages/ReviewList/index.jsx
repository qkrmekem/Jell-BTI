import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Box, { List } from "components/base/Box";
import Button from "components/base/Button";
import Modal from "components/base/Modal";
import StarRating from "components/domain/StarRating";
import useAxios from "hooks/useAxios";
import { useInput } from "hooks/useInput";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userInformationIn } from "redux/store";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 7vw;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 10px;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
`;

const Name = styled.h2`
  font-size: 36px;
  margin-bottom: 10px;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`;

const DateText = styled.div`
  font-size: 20px;
  padding-left: 10px;
  margin-right: 10px;
`;

const FirstFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SecondFlex = styled(FirstFlex)`
  justify-content: flex-end;
`;

const Content = styled.div`
  margin-bottom: 20px;
`;

const Input = styled(List)`
  border: 0;
  outline: none;
  height: 143px;
`

const ReviewList = () => {
  let user = localStorage.getItem("user")

  const [count, setCount] = useState(0);
  //재랜더링을 통한 state
  const [render, setRender] = useState(0);
  //젤리후기 정보 가져오기
  const { response, loading, error } = useAxios({
    method: "get",
    url: `/jellies/rates/email/${user.replace("@","-")}`,
    render,
  });
  const [inputValue, setInputValue, handleChange, boolean, handleSubmit] = useInput();

  //수정 모드인지 확인하기 위한 플래그
  const [edited, setEdited] = useState();

  //클릭시 edited값을 true로 변경
  const onClickEditButton = (rcontent,id)=>{
    setEdited(id)
    setInputValue(rcontent)
  }

  //최신날짜순으로 내림차순 정렬하기
  const data = response?.sort(
    (a, b) => new Date(b.insertDate) - new Date(a.insertDate)
  );
  
  //삭제기능 구현
  const deleteHandler = (id) => {
    if (window.confirm("작성한 리뷰를 삭제하시겠습니까?")) {
      axios
        .delete(`/jellies/rates/${id}`)
        .then((response) => {
          console.log(response);
          setRender(render + 1);
          alert("삭제되었습니다.")
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const modifyHandler = (id)=>{
    if (window.confirm("리뷰를 수정을 완료하시겠습니까?")) {
      axios({
        url: `/jellies/rates/${id}`,
        method: 'patch',
        data: {
          "jStar" : count,
          "rContent" : inputValue
        }
    }).then((response) => {
      console.log(response)
      window.location.reload()
      alert("수정되었습니다")
    }).catch((err)=>{
      console.log(err);
    })
    }
  }

  return (
    <Modal width={"50%"}>
      <Title>내가 작성한 리뷰</Title>
      <Container>
        {loading
          ? null
          : data.map((v, i) => {
              return (
                <div key={v.ridx}>
                  <Name>-{v.jinfoVO.jname}-</Name>
                  <Content>
                    <FirstFlex>
                      <DateText>
                        {
                        edited === v.ridx ? (
                          <StarRating setCount={setCount} /> 
                        ):(
                          [1, 2, 3, 4, 5].map((q, p) => {
                            return (
                              <FontAwesomeIcon
                                icon={faStar}
                                key={p}
                                style={{
                                  color: v.jstar > p ? "#f5eb3b" : "#DCDCDC",
                                }}
                                size="1x"
                              />
                            );
                          })
                        )
                        }
                      </DateText>
                      <DateText>{v.insertDate.slice(0, 10)}</DateText>
                    </FirstFlex>
                    {
                      edited === v.ridx ? (
                        <Input as="input" value={inputValue} onChange={handleChange} />
                      ) : (
                        <Box>{v.rcontent}</Box>
                      )
                    }
                    <SecondFlex>
                      {
                        edited === v.ridx ? (
                          <Button
                          fontWeight={900}
                          bgColor={"#FBEAFF"}
                          fontSize={20}
                          width={60}
                          margin={"0px 10px"}
                          onClick={()=>modifyHandler(v.ridx)}
                        >
                          수정완료
                        </Button>
                        ) : (
                          <Button
                          fontWeight={900}
                          bgColor={"#FBEAFF"}
                          fontSize={20}
                          width={40}
                          margin={"0px 10px"}
                          onClick={()=>onClickEditButton(v.rcontent,v.ridx)}
                        >
                          수정
                        </Button>
                        )
                      }
                      <Button
                        bgColor={"#FBEAFF"}
                        onClick={() => deleteHandler(v.ridx)}
                        fontSize={20}
                        fontWeight={900}
                        width={44}
                      >
                        삭제
                      </Button>
                    </SecondFlex>
                  </Content>
                </div>
              );
            })}
      </Container>
    </Modal>
  );
};

export default ReviewList;
