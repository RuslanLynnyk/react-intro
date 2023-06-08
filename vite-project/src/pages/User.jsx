
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';


const User = () => {
    const [user, setUser] = useState({});
    const {userId} = useParams ();

  useEffect(() => {
    const fetchUser = async () => {
      const responce = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      )
      const data = await responce.json();

      setUser(data)
    };

    fetchUser()
  }, [userId]);
  return (
    <div>
        <p>Name:{user.name}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
    </div>
  )
}

export default User
