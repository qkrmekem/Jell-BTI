import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import styled from "styled-components";
import Button from "../Button";
import Img from "../Img";
import { useNavigate } from "react-router-dom";

const ImgBox = styled.div`
  position: relative;
  z-index: 11;
  right: 12%;
`

const CardContent = styled.div`
  background: rgba(0, 0, 0, 0.41);
  width: 110px;
  border-top-right-radius : 133px;
  border-bottom-right-radius: 133px;
  padding : 40px 27px;
  position: absolute;
  z-index: -1;
  top:50%;
  left:124%;
  transform: translate(-50%,-50%);
`

const JellyTitle = styled.div`
  font-size : 26px;
  color :#ffffff;
  padding-bottom: 10px;
`

export default function Card({ productList }) {
  const navigate = useNavigate()
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        style={{width: "100%",height: "100%"}}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {productList.map((v, i) => {
          return (
            <SwiperSlide key={v.jidx} style={{
              textAlign: "center",
              fontSize: "18px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <ImgBox>
                <Img src = {v.imageUrl} width={17} height={24} />              
                <CardContent>
                  <JellyTitle>{v.jname}</JellyTitle>
                  <Button onClick={()=>navigate(`/home/goodsModal/${v.jidx}`)} fontSize={20} bgColor={"#16f916"} padding={"2px 10px"}>상세보기</Button>
                </CardContent>
              </ImgBox>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
