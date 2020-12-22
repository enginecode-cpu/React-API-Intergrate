import React from "react";
import axios from "axios";
import useAsync from "../lib/useAsync";

async function getUser(id) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
}

function User({ id }) {
  const [state] = useAsync(() => getUser(id), [id]);

  const { loading, data: user, error } = state;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!user) return null;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>
        <strong>Email</strong>: {user.email}
      </p>
    </div>
  );
}

export default User;