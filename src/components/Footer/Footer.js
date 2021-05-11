import "./Footer.css";
import {Partenaire} from "./Partenaire";
import marscapadelogo from './images/marscapadelogo.svg';
import nasalogo from './images/nasa-logo.png';
import githublogo from './images/github.png';

export const Footer = () => {
    return (
        <div className="footer">

            <div className="coordonnees">
                <p>La Loutre Compagnie</p>

                    <a className="email-la-loutre" href="mailto:MarsCapade@laloutre.fr">MarsCapade@laloutre.fr</a>

                <a href="https://github.com/vio9/Marscapade" target="_blank">
                    <img className="logo-github" src={githublogo} alt="logo Github"/>
                </a>
            </div>

            <div className="separateur"></div>

            <div className="partenaires">
                <Partenaire
                    name="MarsCapade"
                    logo={marscapadelogo}
                    width={110}
                    height={110}

                />



                <Partenaire
                    name="Nasa"
                    logo={nasalogo}
                    width={133}
                    height={110}
                />

            </div>

            <div className="mentions-generales">
                <em>Site réalisé la tête dans les étoiles par Pierre, Jérôme, Julien Nicolas, Pauline, Violaine et Aline</em>
            </div>

        </div>
)
}