import ButtonIcon from 'components/ButtonIcon';
import './styles.css';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div>
          <h1>Desafio Github API</h1>
        </div>
        <div>
          <h2>Bootcamp Spring React - DevSuperior</h2>
        </div>
        <div>
          <Link to="/gitsearch">
            <ButtonIcon text="Começar" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
