import "./styles.css";

type Props = {
  profile: string;
  followers: string;
  location: string;
  name: string;
  avatar: string;
};

const ResultCard = ({ profile, followers, location, name, avatar }: Props) => {
  return (
    <div className="result-container">
      <div className="img-container">
        <img src={avatar} alt="Avatar do usuário" />
      </div>

      <div className="info-container">
        <div>
          <h4>Informações</h4>
        </div>
        <div className="info-container-profile"><p><span>Perfil:</span> <a href={profile}>{profile}</a></p></div>
        <div><p><span>Seguidores:</span> {followers}</p></div>
        <div><p><span>Localidade:</span> {location}</p></div>
        <div><p><span>Nome:</span> {name}</p></div>
      </div>
    </div>
  );
};

export default ResultCard;
