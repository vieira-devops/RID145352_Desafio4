import Styles from './Cards.module.css';
import ButtonA from './ButtonA';
import { useState } from 'react';

function Cards({ img, title, description, tech, repo, site, hiddenInfo, btnText, subtitleImg }) {
    const [info, setInfo] = useState(false);

    // Alterna o estado de exibição
    const toggleInfo = () => {
        setInfo((prev) => !prev);
    };

    return (
        <div className={Styles.card}>
            {info ? (
                <RenderHiddenContent
                    img={img}
                    subtitleImg={subtitleImg}
                    hiddenInfo={hiddenInfo}
                    btnText={btnText}
                    site={site}
                    toggleInfo={toggleInfo}
                />
            ) : (
                <RenderDefaultContent
                    img={img}
                    title={title}
                    description={description}
                    tech={tech}
                    repo={repo}
                    subtitleImg={subtitleImg}
                    toggleInfo={toggleInfo}
                />
            )}
        </div>
    );
}

const RenderDefaultContent = ({ img, title, description, tech, repo, subtitleImg, toggleInfo }) => (
    <section>
        <div className={Styles.cardImg} onClick={toggleInfo} role="button" tabIndex={0} aria-label="Clique para mais informações">
            <img src={img} alt={subtitleImg || 'Imagem do Projeto'} />
            <p>{subtitleImg}</p>
        </div>
        <div className={Styles.cardText}>
            <h2>{title}</h2>
            <p>{description}</p>
            <h3>Tecnologias:</h3> {tech}
            <ButtonA className={Styles.btn} id="btnCards" text="Repositório" link={repo} />
        </div>
    </section>
);

const RenderHiddenContent = ({ img, subtitleImg, hiddenInfo, btnText, site, toggleInfo }) => (
    <section>
        <div className={Styles.cardImg} onClick={toggleInfo} role="button" tabIndex={0} aria-label="Clique para retornar">
            <img src={img} alt={subtitleImg || 'Imagem do Projeto'} />
            <p>Clique na imagem para retornar ao conteúdo inicial!</p>
        </div>
        <div className={Styles.hiddenCard}>
            <div className={Styles.hiddenInfo}>
                <h3>Sobre o projeto</h3>
                <p>{hiddenInfo}</p>
                <ButtonA className={Styles.hiddenBtn} id="btnCards" text={btnText} link={site} />
            </div>
        </div>
    </section>
);

export default Cards;