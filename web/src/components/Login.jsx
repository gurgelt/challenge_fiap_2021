import { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from './Footer'
import { Link } from "react-router-dom";


const DivLogin = styled.div`
    .corpo{
        padding: 2% 24%;
    }
    
    .login{
        height: 900px;
        width: 100%;
        padding: 75px;
        background-image: linear-gradient(#2c6b21 ,rgb(72, 153, 78));;
    }

    .login h1{
        text-align: center;
        color: #fff;
        margin: 35px 0px;
        /* margin-bottom: 55px; */
    }

    .linha-submit{
        display: flex;
        justify-content: space-between;
    }

    .linha-submit a{
        color: #fff;
        text-decoration: none;
        padding: 50px;
    }

    .linha-submit button{
        width: 40%;
        height: 50px;
        background-color: #084908;
        border: none;
    }

    .linha-submit button:hover{
        transition: 0.4s;
        /* background-color: #6080ff; */
        background-color: #18790d;
    }

    #senha{color: white;}        

    #login{
        margin: 15px 0px;
        display: flex;
        justify-content: space-between; 
    }
`
const Login = ()=>{

    return(
        <DivLogin>
            <div className="login">
                <div className="corpo">
                    <h1>Faça seu Login</h1>
                    <div className="form-floating mb-3">
                        <input type="email" name="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        {/* onChange={getChanges} */}
                        {/* value={usuario.email} */}
                        <label for="floatingInput">Endereço de Email</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" name="password" class="form-control" id="floatingPassword" placeholder="Senha" />
                        {/* onChange={getChanges} */}
                        {/* value={usuario.password} */}
                        <label for="floatingPassword">Senha</label>
                    </div><br/>
                    <div className="esquece">
                        <a href="" id="senha">Esqueceu a senha?</a>
                    </div><br/>
                    <div className="linha-submit">
                        <button type="submit" class="btn btn-primary"><Link to='/'><a href="#">Login</a></Link></button>
                        <button type="submit" class="btn btn-primary"><Link to='/Cadastro'><a href="#">Cadastre-se</a></Link></button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </DivLogin>
    )
}

export default Login;