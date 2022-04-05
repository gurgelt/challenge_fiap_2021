import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from '../img/quitanda_brancco.png';

const DivMenu = styled.nav`
    *{
        margin: 0%;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;    
    }
    
    ul{
        list-style: none;    
    }

    .banner{
        display: flex;
        align-items: center;
        height: 120px;
        width: 100%;
        /* background-color: #739DDE; */
        background-image: linear-gradient(#225f2c ,rgb(7, 122, 17));;
        /* position: fixed; */
    }
    .nav{
        width: 80%;
        padding: 60px;
        display: flex;
        justify-content: center;
        /* position: fixed; */
    }


    .logoimg{
        height: 110px;
        padding-left: 50px;
    }

    .menu{
        display: flex;
        justify-content: space-between;
        /* position: fixed; */
    }

    .menu li{
        margin: 0 15px;
    }

    .menu li a{
        text-decoration: none;
        font-size: 18px;
        font-weight: bolder;
        padding: 25px 50px;
        /* color: #414153; */
        color: #fff;
    }

    .menu li a:hover{
        color: #fff;
        transition: .75s;
        /* background-color: #5e7eff; */
        background-color: #80e288;
        border: 1px solid #12551b;
        /* border: 2px solid #00a3db; */
        border-radius: 25%;
    }
`

const Menu = ()=>{
    return(
        <DivMenu>
            <div class="banner">
                <div class="logo">
                    <img class="logoimg" src={Logo} alt="unemind-logo"/>
                </div>  
                <div class="nav">
                    <ul class="menu">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/Login'>Login</Link></li>
                        <li><Link to='/Pontos'>Pontos</Link></li>
                        <li><Link to='/Quilos'>Quilos Doados</Link></li>
                    </ul>
                </div>
            </div>        
        </DivMenu>
    )
}

export default Menu;