import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useUserById from '@hooks/UserById';
import Error from '@components/Error';
import TopLayerBody from '@components/TopLayerBody';
import './styles.css';

function User() {
  const { username } = useParams();
  const [userData, userError] = useUserById(username);
  const [isUserLoading, setIsUserLoading] = useState(true);

  useEffect(() => {
    setIsUserLoading(() => true);
    if (userData) {
      setIsUserLoading(() => false);
    }
  }, [userData])

  if (userError) {
    const {status, statusText, data: {msg}} = userError.response;
    return (
      <Error status={status} statusText={statusText} msg={msg}/>
    )
  }

  if (isUserLoading) {
    return (
      <main className="User">
        <TopLayerBody>
          <h2>Loading</h2>
        </TopLayerBody>
      </main>
    )
  }

  return (
    <main className="User">
      <TopLayerBody>
        <section>
          <img className="User__avatar" src={userData.avatar_url} alt={`${userData.name} avatar`} />
          <h2 className="User__username">{userData.username}</h2>
          <h3 className="User__name">{userData.name}</h3>
        </section>
      </TopLayerBody>
    </main>
  );
}

export default User;