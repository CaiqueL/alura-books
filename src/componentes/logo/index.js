import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoDiv = styled.div`
    display: flex;
    font-size: 30px;
`

const StyledImage = styled.img`
    margin-right: 10px;
`


export default function Logo(){
    return (
        <LogoDiv>
            <StyledImage 
                className='logo-img' 
                src={logo}
            />
            <p> <strong>Alura</strong>Books</p>
        </LogoDiv>
    )
}

