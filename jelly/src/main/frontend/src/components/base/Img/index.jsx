import styled from "styled-components"
import PropTypes from "prop-types";

const Root = styled.img`
    width : ${({width})=>`${width}vw`};
    height : ${({height})=>`${height}vw`};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const Img = ({src, width, height, ...props})=>{
    return(
        <Root src={src} width={width} height={height} style={{...props}} />
    )
}

Img.propType = {
    src : PropTypes.string,
    width : PropTypes.number,
    height : PropTypes.number
}

export default Img;
