import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  return <h1> Намечается тусовка</h1>;
};

export default Users;
