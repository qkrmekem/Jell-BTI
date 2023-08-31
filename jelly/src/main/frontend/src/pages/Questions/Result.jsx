import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "components/domain/Header";
import Navigation from "components/domain/Nav";
import axios from "axios";

const Result = () => {
  const [jellyResult, setJellyResult] = useState({});

  useEffect(() => {
    fetchJellyResult();
  }, []);

  const fetchJellyResult = async () => {
    try {
      const response = await axios.get("/jResult");
      setJellyResult(response.data);
    } catch (error) {
      console.error("Error fetching jelly result:", error);
    }
  };


  return (
    <>
      <Header />
      <Navigation />
      <Topic>테스트 결과</Topic>
      <Finish>
        <Img>
          {jellyResult.title === "빨간곰 젤리" && (
            <Img1 src="/jelly/red.png" alt="Jelly Image" />
          )}
          {jellyResult.title === "주황곰 젤리" && (
            <Img1 src="/jelly/orange.png" alt="Jelly Image" />
          )}
          {jellyResult.title === "노란곰 젤리" && (
            <Img1 src="/jelly/yellow.png" alt="Jelly Image" />
          )}
          {jellyResult.title === "초록곰 젤리" && (
            <Img1 src="/jelly/green.png" alt="Jelly Image" />
          )}
          {jellyResult.title === "투명곰 젤리" && (
            <Img1 src="/jelly/transparency.png" alt="Jelly Image" />
          )}
        </Img>
        <List>
          {jellyResult.title} <br />
          {jellyResult.content}
        </List>
      </Finish>
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

const Finish = styled.div`
  width: 50%;
  height: 30rem;
  /* border: 3px solid black; */
  border-radius: 2px;
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: row;
`;

const Img = styled.div`
  width: 40%;
  height: 30rem;
  /* border: 3px dashed red; */
`;

const Img1 = styled.img`
  width: 100%;
  height: 100%;
  /* border: 3px dashed red; */
`;

const List = styled.div`
  width: 60%;
  height: 30rem;
  /* border: 3px solid blue; */
  font-size: 3rem;
  text-align: center;
`;

export default Result;
