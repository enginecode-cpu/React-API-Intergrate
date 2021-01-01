import React, { useEffect } from "react";
import { getUser, useUsersDispatch, useUsersState } from "../lib/UsersContext";

function User({ id }) {
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  useEffect(() => {
    getUser(dispatch, id);
  }, [dispatch, id]);

  const { loding, data: user, error } = state.user;

  if (loding) return <div>Loading...</div>;
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
