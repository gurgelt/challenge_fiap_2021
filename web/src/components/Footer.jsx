import styled from 'styled-components'


const DivFooter = styled.div `
    .footer{
        width: 100%;
        height: 150px;
        padding: 0 20px;
        background-color: #053503;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .footer h2{
        font-size: 14px;
        color: white;
        padding-bottom: 10px;
        border-bottom: 2px solid #0d8a11;
    }
`

const Footer = ()=>{

    return(
        <DivFooter>
            <div class="footer">
                <div class="logo">
                    <h2>© Copyright 2021 Unemind</h2>
                </div>
                {/* <div>
                    <a href="https://www.instagram.com/netflixbrasil"><i class="fab redes-sociais fa-instagram"></i></a>
                    <a href="https://twitter.com/NetflixBrasil"><i class="fab redes-sociais fa-twitter"></i></a>
                    <a href="https://www.youtube.com/user/NetflixBRA"><i class="fab redes-sociais fa-youtube"></i></a>
                </div> */}
            </div>
        </DivFooter>
    )
}

export default Footer;