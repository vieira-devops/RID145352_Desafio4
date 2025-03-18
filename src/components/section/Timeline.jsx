import styles from './Timeline.module.css'
import React from 'react';


function Timeline() {
    return (
        <section>
            <div className={styles.title} id="timeline">
                <h1>Sobre mim</h1>
            </div>
            <div className={styles.verticalConfig}>
                {/* Títulos das Fases */}
                <div className={styles.time}>
                    <div className={styles.pointTitle} id="pointTitle">
                        <p>2013</p>
                        <p>2019</p>
                        <p>2021</p>
                        <p>2022</p>
                        <p>2023</p>
                    </div>
                </div>
                {/* Linha de Conexão */}
                <div className={styles.lineConfig}>
                    <div className={styles.line}>
                        <div className={styles.point}></div>
                        <div className={styles.point}></div>
                        <div className={styles.point}></div>
                        <div className={styles.point}></div>
                        <div className={styles.point}></div>
                    </div>
                </div>
                {/* Descrição das Fases */}
                <div className={styles.general}>
                    <div className={styles.info}>
                        {/* Fase 1 */}
                        <div className={styles.infoText}>
                            <p>
                                Minha carreira em tecnologia começou como SysAdmin, onde construí uma base sólida em infraestrutura, 
                                suporte técnico e gerenciamento de redes. Durante esse período, adquiri experiência com Linux, VMware e 
                                ferramentas de monitoramento como Zabbix.
                            </p>
                        </div>
                        {/* Fase 2 */}
                        <div className={styles.infoText}>
                            <p>
                                Encontrei minha verdadeira paixão ao migrar para o mundo DevOps e fundei a <strong>NetworkLab</strong>, 
                                uma iniciativa voltada para oferecer soluções em infraestrutura e automação para empresas de diversos setores. 
                                Durante esse período, automatizei processos com ferramentas como Terraform e Ansible e implementei pipelines CI/CD 
                                com Jenkins e GitLab CI. Essa transição marcou o início de meu envolvimento com práticas ágeis e infraestrutura como código (IaC).
                            </p>
                        </div>
                        {/* Fase 3 */}
                        <div className={styles.infoText}>
                            <p>
                                Minha atuação como DevOps Engineer se consolidou com a implementação de soluções em nuvem (AWS, Azure e GCP). 
                                Trabalhei em colaboração com equipes multidisciplinares, otimizando processos de entrega e escalabilidade 
                                operacional. Meu foco passou a ser a confiabilidade dos serviços, implementando observabilidade com Grafana 
                                e Prometheus.
                            </p>
                        </div>
                        {/* Fase 4 */}
                        <div className={styles.infoText}>
                            <p>
                                Como Tech Lead SRE e Cloud Architect, lidero equipes e defino estratégias para garantir alta disponibilidade 
                                e eficiência dos sistemas. Com automações avançadas e metodologias SRE, reduzi custos e aumentei a 
                                confiabilidade dos serviços em mais de 30%. Hoje, estou focado em projetos que combinam inovação 
                                tecnológica e liderança humanizada.
                            </p>
                        </div>
                        {/* Fase 5 */}
                        <div className={styles.infoText}>
                            <p>
                            Foi o ano que decidi focar 100% no empreendedorismo, expandindo a atuação da NetworkLab e 
                            desenvolvendo soluções inovadoras para os desafios tecnológicos do mercado.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Timeline;