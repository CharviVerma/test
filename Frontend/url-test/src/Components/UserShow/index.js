import { useState, useEffect } from 'react';
import axios from 'axios';

function UserShow({ match }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/users/${match.params.id}`);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [match.params.id]);

  return (
    <div>
      {user ? (
        <div>
          <h1>{user.username}</h1>
          <p>{user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserShow;
