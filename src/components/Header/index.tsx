import React from "react";
import styled from 'styled-components'
import LogoImage from '../../assets/images/logo.png'
import AutoComplete from "../Input/AutoComplete";
const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Logo src={LogoImage} />
                <AutoComplete/>
            </Container>
        </Wrapper>
    )
}

export default Header

const Logo = styled.img`
    width: 65px;
    height: auto;
    margin-right: 40px;
`

const Wrapper = styled.div`
    background-color: #D70018;
`

const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
`
