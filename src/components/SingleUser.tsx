import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { UserType } from "./Users";

const SingleUser = () => {
  const params = useParams();
  const [user, setUser] = useState<UserType>();
  console.log(params);

  useEffect(() => {
    const singleUserApiUrl = `https://jsonplaceholder.typicode.com/users/${params.userId}`;
    fetch(singleUserApiUrl)
      .then((res) => res.json())
      .then((json) => setUser(json));
  }, [params]);

  return (
    <>
      <Link to="/users">Go back</Link>
      {user && (
        <div className="users__card" key={user.id}>
          <p>
            Name: <span className="normal"> {user.name}</span>
          </p>
          <p>
            email: <span className="normal"> {user.email}</span>
          </p>
          <p>
            phone: <span className="normal"> {user.phone}</span>
          </p>
          <p>
            website: <span className="normal"> {user.website}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default SingleUser;
