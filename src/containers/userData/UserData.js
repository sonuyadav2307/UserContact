import React from "react";
import { useSelector } from "react-redux";

import UserTable from "../../components/UserTable";
const UserData = () => {
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  console.log("this is loading", users);
  if (loading || undefined) {
    return <h1>Loading...</h1>;
  }
  if (users === undefined) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <UserTable user={users} />
    </div>
  );
};

export default UserData;
