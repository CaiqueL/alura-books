import profile from '../../imagens/perfil.svg'
import cart from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`

const Icones = styled.ul`
  display: flex;
  align-items: center;
`

const icones = [
    profile,
    cart
  ]

function HeaderIcons() {
    return (
        <Icones>
          { icones.map( (icon) => (
            <Icone><img src={icon}></img></Icone>
          ))}
        </Icones>
    )
}

export default HeaderIcons