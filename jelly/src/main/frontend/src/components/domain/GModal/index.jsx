import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Img from "../../base/Img";

const ModalCotainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.3);
`;

const ModalSection = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 68vw;
  height: 50vw;
  background: #f7fef7;
  border-radius: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ModalButton = styled.button`
  position: absolute;
  top: -5%;
  right: 5%;
  width: 30px;
  font-size: 101px;
  font-weight: 300;
  border: 0;
  cursor: pointer;
  background-color: transparent;
`;

const ImgBox = styled.div`
  position: absolute;
  top: 14%;
  left: 2.5%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  margin-left: 37%;
`;

const Title = styled.div`
  font-size: 6.5vw;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
  margin: 50px auto;
  width: 35vw;
  text-align: center;
`;

const GModal = () => {
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

  return (
    <ModalCotainer>
      <ModalSection>
        <Content>
          <ImgBox>
            <Img src={value.imageUrl} width={26} />
          </ImgBox>
          <Title>{value.jname}</Title>
          <Outlet />
        </Content>
        <ModalButton onClick={() => navigate("/home")}>&times;</ModalButton>
      </ModalSection>
    </ModalCotainer>
  );
};

export default GModal;
