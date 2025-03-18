import styles from './Footer.module.css'
import { FaFigma, FaLinkedin, FaGithub } from "react-icons/fa";


function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.contact}>
                    <h1>Meu contato:</h1>
                    <h1>47 988888888</h1>
                </div>
                <div className={styles.contact}>
                    <h1>Email:</h1>
                    <h1>vieira-devops@gmail.com</h1>
                </div>
                <div className={styles.icons}>
                    <ul>
                        <li>
                            <a target="_blank" href="https://github.com/vieira-devops"><FaGithub className={styles.iconSize} /></a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.linkedin.com/in/lucas-n-vieira/"><FaLinkedin className={styles.iconSize} /></a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.figma.com/file/O2j7uVVhXUnV6dadZc2MMw/Desafio-03%3A-
                            Desenvolva-um-portfólio-com-React-hooks?type=design&node-id=0-1&mode=design&t=RKGkU5Vc57lJ
                            ZxN0-0"><FaFigma className={styles.iconSize} /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
 
export default Footer;