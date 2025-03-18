import styles from './Projects.module.css'
import challengeOne from '../../image/challengeOne.svg'
import challengeTwo from '../../image/challengeTwo.svg'
import portfolio from '../../image/portfolio.svg'
import Cards from '../elements/Cards'

function Projects() {
    return (
        <section className={styles.Projects} id="projects">
            <h1>Projetos</h1>
            <div className={styles.cardSection}>
                <Cards hiddenInfo='Este primeiro desafio avaliativo não só me proporcionou um senso de realização pessoal,
                 mas também solidificou minha paixão pela programação e me motivou a continuar avançando no curso com entusiasmo e determinação.' 
                 img={challengeOne} title='Primeiro desafio DNC' tech='HTML,CSS'
                    description='O meu primeiro desafio avaliativo no curso de programação foi uma experiência emocionante e desafiadora.
                    Foi a primeira vez que tive a oportunidade de aplicar os conhecimentos adquiridos de forma independente, sem a orientação 
                    direta do instrutor. O desafio consistia em construir uma landing page para uma empresa de arquitetura.'
                    site='https://challenge1-dnc.netlify.app/'
                    btnText='Clique aqui'
                    repo='https://github.com/vieira-devops/desafio1-dnc' 
                    subtilteImg='Clique na imagem para saber mais, e ter acesso ao link do projeto!'/>
                <Cards hiddenInfo='Ao trabalhar com as APIs, aprendemos a fazer solicitações HTTP, manipular dados JSON 
                    e integrar as respostas das APIs em nossa aplicação.Este desafio me preparou para enfrentar tarefas mais complexas no mundo da programação.' 
                    img={challengeTwo} title='Segundo desafio DNC' tech='HTML,CSS,JS,APIs'
                    description='No segundo desafio avaliativo do curso, fomos desafiados a explorar o mundo das APIs 
                    para resolver um problema específico: coletar informações do CEP e obter previsões meteorológicas com 
                    base na latitude e longitude fornecidas. Foi uma experiência empolgante e enriquecedora, pois nos permitiu 
                    aplicar nossas habilidades de programação de forma prática e realista.'
                    site='https://desafio-dnc-2.netlify.app/'
                    btnText='Clique aqui'
                    repo='https://github.com/vieira-devops/desafio2-dnc'
                    subtilteImg='Clique na imagem para saber mais, e ter acesso ao link do projeto!'/>
                <Cards hiddenInfo='Com uma abordagem moderna e responsiva, meu portfólio destaca minha jornada de aprendizado, exibindo projetos 
                    significativos que desenvolvi durante o curso. Convido-o a explorar meu portfólio e, em seguida, conectar-se comigo no LinkedIn.'
                    img={portfolio} title='Portfólio' tech='HTML,CSS,JS,REACT'
                    description='Meu portfólio de desenvolvedor é uma representação dinâmica e visualmente atraente das minhas 
                    habilidades e projetos. Construído com React utilizando Vite como ferramenta de desenvolvimento, ele representa a terceira atividade 
                    avaliativa do meu curso de programação. '   
                    site='https://www.linkedin.com/in/lucas-n-vieira/'
                    btnText='Visite meu Linkedin'
                    repo='https://github.com/vieira-devops/RID145352_Desafio03'
                    subtilteImg='Clique na imagem para saber mais, e ter acesso ao meu LinkedIn!' />
            </div>
        </section>

    )
}

export default Projects