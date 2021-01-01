import React from "react";
import Users from "./components/Users";
import { UsersProvider } from "./lib/UsersContext";

function App() {
  return (
    <UsersProvider>
      <Users />
    </UsersProvider>
  );
}

export default App;
