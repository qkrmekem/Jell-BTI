import styled from "styled-components"
import Logo from "components/base/Logo"
import Img from "components/base/Img"

const Container = styled.div`
    max-width: 100%;
    display: flex;
    justify-content: center;
    margin-right: 100px;
    padding-top: 12px;
`

const Header = ()=>{
    return(
        <Container>
            <Img src="/haribo.png" width={17} height={17} marginRight={60} />
            <Logo fontSize={16} />
        </Container>
    )
}

export default Header;
