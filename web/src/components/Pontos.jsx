import styled from "styled-components";
import Footer from './Footer'

const DivPontos = styled.div`
    .corpo{
        height: 700px;
        width: 100%;
        padding: 75px;
        align-items: center;
        background-image: linear-gradient(#2d7421 ,rgb(72, 153, 78));;
    }

    .teste1{
        width: 50%;
        /* border: 1px solid black; */
        padding: 10px 20px;
        background-color: #2c2f33;
    }
    
    .teste1 img{
        width: 100%;
        border-radius: 10%;
    }
    
    .descricao{
    width: 90%;
    border: 1px solid black;
    background-color: #5865f2a9;

    .h1{
       text-align: center;
       border-radius: 0%;
    }
}

`

const Pontos = ()=>{

    return(
        <DivPontos>
            <div className="Pontos">
                <div className="corpo">
                    <h1>Veja seus pontos!</h1>
                    <div className="form-floating mb-3">
                        <input type="text" name="nome" class="form-control" id="floatingInput" placeholder="condominio"/>
                        <label for="floatingInput">Nome do Condomínio</label>
                    </div>
                    <div className="form-floating">
                        <input type="number" name="number" class="form-control" id="floatingNumber" placeholder="numeroap"/>
                        <label for="flotingNumber">Número do Apartamento</label><br></br>
                    </div>
                    <div className="form-floating">
                        <input type="text" name="texto" class="form-control" id="floatingText" placeholder="blocoap"/>
                        <label for="flotingText">Bloco do Apartamento</label><br></br>
                    </div>
                    <div className="pesquisar">
                        <button type="submit" class="btn btn-primary">Pesquisar</button><br></br><br></br>
                    </div>
                    <h2>Total de Pontos Acumulados: 350</h2><br/>
                    <h3>Você pode resgatar os seguintes benefícios:</h3>
                </div>
            </div>
            <Footer></Footer>
        </DivPontos>
    )
}

export default Pontos;