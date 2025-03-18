import styles from './Presentation.module.css'
import { useEffect, useState } from 'react'
import ButtonA from '../elements/ButtonA'
import { FaBriefcase, FaBook, FaDesktop, FaLightbulb, FaRocket} from "react-icons/fa";

function Presentation() {

    const [text, setText] = useState('');
    const toRotate = [' Bem vindo ao meu portfólio', '  Sou um entusiasta a Dev. Full-stack',];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100)
    
    useEffect(() => {
        let ticker = setInterval(() => {
            toType() 
        }, delta)
        return () => { clearInterval(ticker) }
    }, [text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (!isDeleting && updatedText === fullText) {    
            setIsDeleting(true);      
            setDelta(100);

        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop + 1);
        }
    }
 

    return (
        <div id="presentation" className={styles.Presentation}>
            <h1><strong> Olá, eu sou Lucas N. Vieira  </strong></h1>
            <h2>- {text}</h2>

            <ul>
                <li><FaBriefcase size={'16'} /> Empreendedor & CloudOps</li>
                <li><FaBook size={'16'} /> Estudante de tecnologia; </li>
                <li><FaDesktop size={'16'} /> Cursando na DNC, formação em tecnologia (Desenvolvedor Full-Stack);</li>
                <li><FaLightbulb  /> Interesse em:
                 
                 <ul>Desenvolvimento Front End & Back End</ul>
                 <ul>Observabilidade</ul>
                 <ul>Cloud Computing</ul>
                 <ul>DevOps</ul>
                 
                 </li>
                <li> <FaRocket size={'16'} /> Buscando aprimoramento da minha base de skills;</li>
            </ul>

            <div><ButtonA  text='Saber mais!' link='https://www.linkedin.com/in/lucas-n-vieira/' /></div>

        </div>
    )
} 

export default Presentation