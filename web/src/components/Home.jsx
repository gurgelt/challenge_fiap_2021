import styled from "styled-components";
import Footer from './Footer'
import doacao from '../img/doacao.jpeg'
import alimento from '../img/alimento.jpg'
import caixa from '../img/caixa.jpg'
import desperdicio from '../img/desperdicio.jpg'
import noticia from '../img/noticia.jpg'

import '../css/gallery.min.css'
import '../css/gallery.theme.css'

const DivHome = styled.div`
    ul{
        list-style: none;    
    }

    .banner{
        display: flex;
        align-items: center;
        height: 360px;
        width: 100%;
        border: 1px solid black;
        background-color: #5865f2;
    }

    .corpo{
        width: 100%;
        height: 620px;
    }
    
    .propaganda{
        height: 700px;
        width: 100%;
    }

    .propaganda img{
        width: 100%;
        height: 700px;
    }

    .news{
        padding: 5%;
        align-items: center;
        justify-content: left;
        text-align: center;
    }
`

const Home = () => {


    return (
        <DivHome>
            {/* <!-- Propaganda --> */}
            <div class="corpo propaganda">
                <div class="gallery autoplay items-3">
                    <div id="item-1" class="control-operator"></div>
                    <div id="item-2" class="control-operator"></div>
                    <div id="item-3" class="control-operator"></div>

                    <figure class="item">
                        <a href="#"><img src={doacao} alt="" /></a>
                    </figure>

                    <figure class="item">
                        <a href="#"><img src={alimento} alt="" /></a>
                    </figure>

                    <figure class="item">
                        <a href="#"><img src={caixa} alt="" /></a>
                    </figure>

                    <div class="controls">
                        <a href="#item-1" class="control-button">•</a>
                        <a href="#item-2" class="control-button">•</a>
                        <a href="#item-3" class="control-button">•</a>
                    </div>
                </div>
            </div>
            <div class="news">
                <h1>Notícias</h1><br/>
                <h2>Os efeitos do desperdício chocante de alimentos no mundo</h2><br/>
                <img src={desperdicio}></img><br/><br/>
                <p>Qual é a primeira coisa que você faz quando abre a geladeira e vê que há um alimento cujo prazo de validade já expirou ou tem uma aparência ruim? Possivelmente, você o joga fora.</p>
                <p>Mas você já parou para analisar quais são as consequências de desperdiçar comida?</p>
                <p>Se sua resposta for não, não se preocupe, pois, de fato, a verdadeira escala de desperdício de alimentos no mundo e seu impacto não foram totalmente medidos até hoje.</p>
                <p>Essa é uma das conclusões do relatório mais recente e abrangente sobre o assunto do Programa das Nações Unidas para o Meio Ambiente (Pnuma) e da organização britânica de resíduos WRAP.</p>
                <p>O chamado "Índice de Desperdício de Alimentos 2021" apresenta um número quase assustador: em 2019, foram 931 milhões de toneladas de alimentos desperdiçados. Isso sugere que 17% da produção total de alimentos do mundo foram para o lixo.</p>
                <h2>Hortas comunitárias resistem à urbanização na maior metrópole do Brasil</h2><br/>
                <h3>Em São Paulo, as iniciativas periféricas trazem novas perspectivas de vida aos agricultores urbanos, homens e mulheres que vivem em condições de vulnerabilidade social</h3>
                <img src={noticia}></img><br/><br/>
                <p>Do plantio ao prato, seja em um restaurante ou em qualquer residência na cidade de São Paulo, os legumes e as hortaliças passam por um longo caminho. São produzidos, em grande parte, em municípios próximos à capital, como Mogi das Cruzes, Santa Isabel e Suzano, na região leste, e Ibiúna, Itapetininga, Piedade do Sul e Sorocaba, na região oeste, formando o Cinturão Verde. Essa produção é encaminhada à Companhia de Entrepostos e Armazéns Gerais de São Paulo (Ceagesp), na Zona Oeste da cidade, que comercializa os alimentos junto a feirantes e comerciantes em geral. Nesse trajeto, os preços vão aumentando a cada etapa, ainda mais se existirem outros atravessadores e intermediários.</p>
                <p>Além desta produção, há na capital paulista iniciativas de plantio de legumes e hortaliças nas chamadas “hortas comunitárias”. Nestes casos, o trajeto do plantio ao consumo é mais curto.</p>
                <p>A USP vem atuando nesse caminho auxiliando estas iniciativas com pesquisas e estudos que permitem viabilizar novos empreendimentos ou incentivar os já existentes. Estes locais acabam se tornando campos férteis para a Universidade desenvolver estudos e experimentos em educação e segurança alimentar, cultivos de ervas medicinais e geração de conhecimento.</p>
                <p>Estas “hortas comunitárias” vão surgindo cada vez mais nesta São Paulo que é a maior metrópole brasileira, com cerca de 12,3 milhões segundo dados do Instituto Brasileiro de Geografia e Estatística (IBGE) de 2021 – distribuídos numa área de 1.521 quilômetros quadrados (km²). Elas brotam em cantos cinzentos das regiões centrais da cidade ou em pedaços de chão esquecidos nas periferias.</p>
                <p>Não se sabe ao certo quantas são, mas já passam de centenas, algumas com um caráter mais social de produzir alimentos saudáveis e gerar renda para quem há muito já foi esquecido pelo mercado de trabalho, ou como mote de sobrevivência contra desigualdades estruturais. E outras, instaladas em bairros de classe média, possuem um valor mais simbólico de resistência à frenética urbanização da cidade e mostram uma nova relação de consumo com o alimento.</p>
                <p>De acordo com informações da Secretaria do Verde e Meio Ambiente, da Prefeitura de São Paulo, a plataforma Sampa+rural, que reúne iniciativas de agricultura, turismo e alimentação saudável, registra atualmente 103 hortas urbanas na capital paulista. No site da plataforma é possível visualizar a localização das hortas espalhadas pela cidade.</p>
            </div>
            <Footer></Footer>
        </DivHome>
    )
}

export default Home;