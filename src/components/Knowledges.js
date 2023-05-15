import React from 'react';

const Knowledges = () => {
    return (
        <div id='experience'>
            <div className='KnowledgesContent'>
                <div className='experienceContent'>
                    <h3>EXPÉRIENCES PROFESSIONNELLES :</h3>
                    <ul>
                        <div className='exp1'>
                            <h4>Avril 2020 - Mars 2020 : Stagiaire</h4>
                            <h5>BNP Paribas, - Cergy-Pontoise</h5>
                            <ul>
                                <li>
                                    Explications fournies aux usagers pour accéder au
                                    site internet et effectuer leurs démarches en ligne.
                                </li>
                                <li>
                                    Conseils clients dans l'utilisation des automates
                                    bancaires, inspection régulière des équipements afin
                                    de vérifier leur bon état de fonctionnement.
                                </li>
                                <li>
                                    Tâches de secrétariat : accueil physique et
                                    téléphonique, gestion du courrier, traitement des
                                    mails, rédaction et mise en forme de courriers,
                                    démarches administratives.
                                </li>
                            </ul>
                        </div>
                    </ul>
                </div>
                <div className='formationContent'>
                    <h3>FORMATION :</h3>
                    <ul>
                        <li>
                            <div>
                                <h4>Actuel - 2023 : Coding Factory by ESIEE-IT - Cergy</h4>
                                <h5>Licence : développeur Web & Mobile Sécurité (Full-Stack)</h5>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h4>2023 - 2020 : Lycée Général Et Technologique Galilée Cergy-Pontoise</h4>
                                <h5>Bac techno STI2D spécialité système d'information technologique</h5>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h4>2020 - 2016 : Collège Gérard Philipe, Allée des Vanneaux, Cergy</h4>
                                <h5>Brevet des collèges</h5>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Knowledges;