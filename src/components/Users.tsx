import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export type UserType = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
};

type UsersType = Array<UserType>;

const Users = (props: any) => {
  const [users, setUsers] = useState<UsersType>([]);

  useEffect(() => {
    console.log(props);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div className="users">
      <h1>All users</h1>
      <Link to="/users/new">Add a new user</Link>
      <div className="users__list">
        {users &&
          users.map((user) => (
            <div className="users__card" key={user.id}>
              <Link to={`/users/${user.id}`}>
                <p>
                  Name: <span className="normal"> {user.name}</span>
                </p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Users;
