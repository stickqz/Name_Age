import { useState } from "react";
import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";

function App() {
  const [userData, setUserData] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserData((prevList) => {
      return [
        ...prevList,
        { age: uAge, name: uName, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userData} />
    </div>
  );
}

export default App;
