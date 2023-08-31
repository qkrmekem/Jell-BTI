import { useState } from "react";
import styled from "styled-components";

export const List = styled.li`
    width: 33vw;
    /* height: 43px; */
    background: #EBFFED;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25), 0px 8px 24px rgba(0, 0, 0, 0.1);
    border-radius: 40px;
    font-size: 2.5vw;
    display: flex;
    align-items: center;
    padding: 0px 20px;
    margin : 10px 0px;
    cursor:pointer;
    overflow-x: auto;
    transition: all 0.6s;
    height: ${({height})=> `${height}vh`};
`

const Box = ({children})=>{
    const [state,setState] = useState(false)

    const heightHandler = ()=>{
        setState((state)=>!state)
    }

    return <List height={state?22:6} onClick={()=> heightHandler()}>{children}</List>
}

export default Box;