import { livros } from "./dadosLancamentos"
import styled from "styled-components"
import { Titulo } from "../Title"
import Card from "../Card"
import imagemLivros from "../../imagens/livro2.png"

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`



const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

export default function Lancamentos(){

    return(

        <UltimosLancamentosContainer>
            <Titulo>ULTIMOS LANCAMENTOS</Titulo>
            <NovosLivrosContainer>
                {livros.map(livro =>(
                    <img src={livro.src}/>
                ))}
            </NovosLivrosContainer>
            <Card
                titulo ="Talvez você se interesse por"
                subtitulo="Angular 11"
                description="Construindo uma aplicação com a plataforma google"
                imgSrc={imagemLivros}
            />
        </UltimosLancamentosContainer>
    )
}