import styled from "styled-components";
import Footer from './Footer'
import '../css/gallery.min.css'
import '../css/gallery.theme.css'


const DivQuilos = styled.div`
    .contatodiv{
        background-color: #2c2f33;
        color: white;
        width: 100%;
        padding: 20px;
    }

    .corpo{
        padding: 6%;
        width: 100%;
        height: 720px;
        background-image: linear-gradient(#2d7421 ,rgb(72, 153, 78));;
    }

    .toggle { display: none; } 
    .same-box-1 { display: none; }
    .dica h2{
        margin: 1%;
        padding: 10px;
        text-align: center;
        color:#5865f2;
    }

    .imagem img{
        width: 100%;
        height: 100%;
    }

    .imagem{
        width: 40%;
        height: 600px;
        /* margin-left: 30%; */
        margin: 1% 30%;
    }

    .texto{
        font-size: 22px;
        padding: 25px;
        width: 80%;
        height: 320px;
        margin: 0% 10%;
        color: #fff;
    }

    button{
        color: #fff;
        border-radius: 3%;
        border: 1px solid #4d70ff;
        padding: 20px 30px;
        background-color: #5865f2;
        border: none;
    }

    .alinhar{
        display: flex;
        justify-content: center; 
    }

    .Pontos{
        height: 900px;
        width: 100%;
        padding: 75px;
        background-image: linear-gradient(#2d7421 ,rgb(72, 153, 78));;
    }

    .pesquisar{
        display: flex;
        justify-content: flex-end;
        color: #fff;
        text-decoration: none;
        padding: 10px;
        width: 90%;
        /* height: 50px; */
        align-items: center;
        text-align: center;
    }
`

const Quilos = () => {

    return (
        <DivQuilos>
            <div className="Pontos">
                <div className="corpo">
                    <h1>Veja quantos quilos de alimento foram doados!</h1>
                    <div className="form-floating mb-3">
                        <input type="text" name="nome" class="form-control" id="floatingInput" placeholder="condominio"/>
                        <label for="floatingInput">Nome do Condomínio</label>
                    </div>
                    <div className="pesquisar">
                        <button type="submit" class="btn btn-primary">Pesquisar</button><br></br><br></br>
                    </div>
                    <h2>Total de alimentos doados:</h2><br/>
                </div>
            </div>
            <Footer></Footer>
        </DivQuilos>
                )
}

export default Quilos;