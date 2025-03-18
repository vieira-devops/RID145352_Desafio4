import styles from './Navbar.module.css'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'
import { useState } from 'react'
import Tech from '../elements/Tech' // Importando o componente Tech

function Navbar() {
    const [showTechnologies, setShowTechnologies] = useState(false);

    // Função para alternar o estado de exibição de tecnologias
    const handleToggleTechnologies = () => {
        setShowTechnologies(!showTechnologies);
        
        // Se a seção "Tecnologias" for aberta, a página rola para o topo
        window.scrollTo({
            top: 0,
            behavior: "smooth"   
        });
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.links}>
                    <ul>
                        <li><Nav.Link onClick={() => scrollToSection('projects')}>Projetos</Nav.Link></li>
                        <li>
                            <Nav.Link href="#" onClick={handleToggleTechnologies}>
                                Tecnologias
                            </Nav.Link>
                        </li>
                        <li><Nav.Link onClick={() => scrollToSection('timeline')}>Sobre mim</Nav.Link></li>
                    </ul>
                </div>
                <div className={styles.icons}>
                    <ul>
                        <li><a target="_blank" href="https://github.com/vieira-devops"><FaGithub className={styles.iconSize} /></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/lucas-n-vieira/"><FaLinkedin className={styles.iconSize} /></a></li>
                    </ul>
                </div>
            </nav>

            {/* Renderiza o componente Tech somente quando showTechnologies for verdadeiro */}
            {showTechnologies && <Tech />}
        </>
    );
}

export default Navbar;
