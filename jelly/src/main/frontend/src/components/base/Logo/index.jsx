import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LogoImage = styled.img.attrs({ alt : 'logo' })`
    width:250px;
`
const Title = styled.button`
  font: ${({fontSize})=>`${fontSize}vw`}/0.65 "Dongle", "Kaushan Script", Futura, "Roboto", "Trebuchet MS", Helvetica, sans-serif;
  border : 0;
  background : transparent;
  cursor: pointer;

.stage {
  height: 15vw;
  width: 25vw;
  margin: auto;
  perspective: 9999px;
  transform-style: preserve-3d;
}

.layer {
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  animation: ಠ_ಠ 5s infinite alternate ease-in-out -7.5s;
  animation-fill-mode: forwards;
  transform: rotateY(40deg) rotateX(33deg) translateZ(0);
}

.layer:after {
  content: "JELL-BTI";
  white-space: pre;
  text-align: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 50px;
  left: -70px;
  color: white;
  letter-spacing: -2px;
  text-shadow: 4px 0 10px #FB82B1;
}

.layer:nth-child(1):after {
  transform: translateZ(0px);
}

.layer:nth-child(2):after {
  transform: translateZ(-1.5px);
}

.layer:nth-child(3):after {
  transform: translateZ(-3px);
}

.layer:nth-child(4):after {
  transform: translateZ(-4.5px);
}

.layer:nth-child(5):after {
  transform: translateZ(-6px);
}

.layer:nth-child(6):after {
  transform: translateZ(-7.5px);
}

.layer:nth-child(7):after {
  transform: translateZ(-9px);
}

.layer:nth-child(8):after {
  transform: translateZ(-10.5px);
}

.layer:nth-child(9):after {
  transform: translateZ(-12px);
}

.layer:nth-child(10):after {
  transform: translateZ(-13.5px);
}

.layer:nth-child(11):after {
  transform: translateZ(-15px);
}

.layer:nth-child(12):after {
  transform: translateZ(-16.5px);
}

.layer:nth-child(13):after {
  transform: translateZ(-18px);
}

.layer:nth-child(14):after {
  transform: translateZ(-19.5px);
}

.layer:nth-child(15):after {
  transform: translateZ(-21px);
}

.layer:nth-child(16):after {
  transform: translateZ(-22.5px);
}

.layer:nth-child(17):after {
  transform: translateZ(-24px);
}

.layer:nth-child(18):after {
  transform: translateZ(-25.5px);
}

.layer:nth-child(19):after {
  transform: translateZ(-27px);
}

.layer:nth-child(20):after {
  transform: translateZ(-28.5px);
}

.layer:nth-child(n+10):after {
  -webkit-text-stroke: 3px #FB82B1;
}

.layer:nth-child(n+11):after {
  -webkit-text-stroke: 15px #FB82B1;
  text-shadow: 6px 0 6px #FB82B1, 5px 5px 5px #FB82B1, 0 6px 6px #FB82B1;
}

.layer:nth-child(n+12):after {
  -webkit-text-stroke: 15px #FB82B1;
}

.layer:last-child:after {
  -webkit-text-stroke: 17px #FB82B1;
}

.layer:first-child:after {
  color: white;
  text-shadow: none;
}

@keyframes ಠ_ಠ {
  100% {
    transform: rotateY(-40deg) rotateX(-43deg);
  }
}
`

const Logo = ({fontSize, ...props})=>{
    return (
        <>
        {/* <LogoImage src="./logo.png" /> */}
        <Title fontSize={fontSize} style={{...props}}>
        <div className="stage">
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
        </div>
        </Title>
        </>
    )
}

export default Logo;