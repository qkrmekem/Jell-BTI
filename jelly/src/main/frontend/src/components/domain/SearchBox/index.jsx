import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Card from "components/base/Card";

export const Content = styled.div`
  position: relative;
  margin-top: 60px;
  z-index: 10px;
  background: #fba0c4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 55%;
  height: 70vh;
  border-radius: 161px;
`;

export const Circle = styled.div`
  position: absolute;
  z-index: -1;
  border-radius: 50%;
  top: -7%;
  left: -2%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #fb82b1;
  width: 150px;
  height: 150px;
`;
export const Circle2 = styled.div`
  position: absolute;
  top: -7%;
  right: -2%;
  z-index: -1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #fb82b1;
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const CardBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  width: 60%;
  height: 70%;
  background: #fb82b1;
  border-radius: 41px;
  overflow: hidden;
`;

const Search = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 56px;
  font-weight: 800;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Box = styled.div`
  height: 100%;
  background-color: red;
  align-items: center;
`;

const SearchBox = ({ boolean, jelly }) => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  useEffect(() => {
    let searchQuery = query.get("jellyName") || "";
    let url = `/jellies?jellyName=${searchQuery}`;

    axios({
      method: "get",
      url: url,
    }).then((response) => {
      setProductList(response.data);
    });
  }, [query]);

  return (
    <>
      <Content>
        <Circle />
        <Circle2 />
        <CardBox>
          <Card productList={productList} />
        </CardBox>
        <Outlet />
      </Content>
    </>
  );
};

export default SearchBox;
