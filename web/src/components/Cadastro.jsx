import styled from "styled-components";
import Footer from './Footer'

const DivCadastro = styled.div`
    .corpo {
        padding: 2% 24%;
        width: 100%;
        background-image: linear-gradient(#2d7421 ,rgb(72, 153, 78));;
        color: white;
    }
    
    .genero, .row-md-6, .col, .text,
    .humor{
        border: 1px solid black;
        padding: 10px;
        border-radius: 15px;
    }

    .text {  
        display: flex;
        flex-direction: column;
    }

    #mes{
        padding-left: 25px;
    }

    .form-floating{
        width: 100%;
    }

    .logo-login img{
        display: flex;
        align-items: center;
        padding: 0 20%;
    }

    #cadastrar{
        color: white;
    }

    .btn-primary{
        background-color: #084908;
        border: none;
    }

`

const Cadastro = ()=>{
    
    function myFunction(){
        var x = document.getElementById("myDate").value;
        document.getElementById("demo").innerHTML = x;
      }

    return(
        <DivCadastro>
            <div class="corpo cadastro">
                <h1>Cadastre-se</h1>
                <div class="row g-3">
                    <form class="row g-3" method='post'>
                    <div class="col">
                      <input type="text" class="form-control" placeholder="Nome Completo" aria-label="First name"/>
                    </div>
                        <div class="row-md-6">
                            <label for="inputEmail4" class="form-label">Email</label>
                            <input type="email" class="form-control" id="inputEmail4" placeholder="Insira seu email"/>
                            <div id="validationServerUsernameFeedback" class="invalid-feedback">
                                Coloque um email válido
                            </div>
                        </div>
                        <div class="row-md-6">
                            <label for="inputPassword4" class="form-label">Senha</label>
                            <input type="password" class="form-control" id="inputPassword4" placeholder="Insira sua senha"/>
                        </div>
                        <div class="text">
                            <label for="text" class="form-label">Condominio</label>
                            <input type="text" class="form-control" id="inputPassword4" placeholder="Insira o nome do condomínio"/>
                        </div>
                        <div class="genero">
                            <label for="inputGenero" class="form-label">Gênero</label>
                            <select class="form-select" aria-label="Default select example">
                                <option value="1">Masculino</option>
                                <option value="2">Feminino</option>
                                <option value="3">Não Binário</option>
                            </select>
                        </div>
                        <div class="col-12">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                            <label class="form-check-label" for="invalidCheck2">
                              Aceito os termos de condições
                            </label>
                            <div id="invalidCheck3Feedback" class="invalid-feedback">
                                Tem que aceitar para continuar
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <button class="btn btn-primary" type="submit">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </DivCadastro>
    )
}

export default Cadastro;