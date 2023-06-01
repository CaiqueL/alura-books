import styled from 'styled-components';

const Options = styled.ul`
    display: flex;
`

const Option = styled.li`
    min-width: 120px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 5px;
    cursor: pointer;
`

const textoOptions = [
    'CATEGORIAS',
    'FAVORITOS',
    'MINHA ESTANTE'
  ]

function HeaderOptions(){
    return (
        <Options>
            { textoOptions.map( (text) => (
                <Option><p>{text}</p></Option>
            ))}
        </Options>
    )
}

export default HeaderOptions;