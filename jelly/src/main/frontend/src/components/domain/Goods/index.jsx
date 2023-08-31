import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Chart from "components/base/Chart";
import useAxios from "hooks/useAxios";
import Button from "components/base/Button";
import Box from "components/base/Box";

export const BoxContainer = styled.ul`
  margin: 0 auto;
`;

export const SubTitle = styled.h2`
  font-size: 3.5vw;
  font-weight: bold;
  padding: 0.2vw 4vw;
`;

const StarBox = styled.div`
  display: flex;
  justify-content: center;
`;

const ChartContainer = styled.div`
  height: 300px;
  font-size: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Goods = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.jellyInfo);
  const { id } = useParams();
  const [value, setValue] = useState([]);
  const [score, setScore] = useState(0);
  let count = parseInt(score);

  useEffect(() => {
    if (data.status === "complete") {
      let item = data.value.filter((v) => {
        return Number(id) === v.jidx;
      });
      setValue(...item);
    }
  }, [data]);

  useEffect(() => {
    axios({
      method: "get",
      url: `/jellies/${id}`,
    }).then((response) => {
      setScore(response.data.jelly.score);
    });
  }, []);

  const { response, loading, error } = useAxios({
    method: "get",
    url: `/jellies/rates/email/magicofclown-naver.com`,
  });

  const a = response?.sort(
    (a, b) => new Date(b.insertDate) - new Date(a.insertDate)
  );


  return (
    <>
      <SubTitle>&lt;맛 평가&gt;</SubTitle>
      <ChartContainer>
        {value.length === 0 ? "Loading..." : <Chart value={value} />}
      </ChartContainer>
      <SubTitle>&lt;별점&gt;</SubTitle>
      <StarBox>
        {[1, 2, 3, 4, 5].map((v, i) => {
          return (
            <FontAwesomeIcon
              icon={faStar}
              key={i}
              style={{ color: count > i ? "#f5eb3b" : "#DCDCDC" }}
              size="2x"
            />
          );
        })}
      </StarBox>
      <SubTitle>&lt;최근 후기&gt;</SubTitle>
      <BoxContainer>
        {loading
          ? null
          : a.slice(0, 5).map((v, i) => {
              return <Box key={i}>{v.rcontent}</Box>;
            })}
      </BoxContainer>
      <Button
        onClick={() => navigate("review")}
        fontSize={40}
        bgColor={"#16f916"}
        fontWeight={600}
        padding={"3px 14px"}
        margin={"15px auto"}
      >
        후기 작성하기
      </Button>
    </>
  );
};

export default Goods;
