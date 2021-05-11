import "./Partenaire.css";

export const Partenaire = ({logo, name, width, height}) => {
    return(
        <div className="partenaire">
            <img className="logo-partenaire" src={logo} width={width} height={height} alt={name}/>

        </div>
    )
}