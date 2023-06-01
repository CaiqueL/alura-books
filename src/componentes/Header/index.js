import HeaderIcons from "../HeaderIcons"
import HeaderOptions from "../HeaderOptions"
import Logo from "../logo"
import styled from "styled-components"

const StyledHeader = styled.header`

    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
  
`

function Header(){
    return(
        <StyledHeader>
            <Logo/>
            <HeaderOptions/>
            <HeaderIcons/>
        </StyledHeader>
    )
}

export default Header