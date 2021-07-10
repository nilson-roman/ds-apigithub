import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import axios from 'axios';

import './styles.css';
import GitSearchLoader from './GitSearchLoader';

type FormData = {
  username: string;
};

type UserData = {
  url: string;
  followers: string;
  location: string;
  name: string;
  avatar_url: string;
};

const GitSearch = () => {
  const [userData, setUserData] = useState<UserData>();

  const [formData, setFormData] = useState<FormData>({
    username: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);
    axios
      .get(`https://api.github.com/users/${formData.username}`)
      .then((response) => {
        setUserData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setUserData(undefined);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="before-container">
      <div className="base-card">
        <div className="before-content-container">
          <div>
            <h1>Encontre um perfil Github</h1>
          </div>
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-container">
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  className="search-input"
                  placeholder="Usuário Github"
                  onChange={handleChange}
                />
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary search-button"
                  >
                    Encontrar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        {isLoading ? <GitSearchLoader />: (userData && (
          <div>
            <ResultCard
              avatar={userData.avatar_url}
              followers={userData.followers}
              location={userData.location}
              profile={userData.url}
              name={userData.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitSearch;
