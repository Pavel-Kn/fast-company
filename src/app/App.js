import React, {useState} from "react";
import UsersList from "./components/usersList";
import SearchStatus from "./components/searchStatus";
import api from "../api";

function App() {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {
        setUsers((prevState) => prevState.filter((elem) => elem._id !== userId));
    };

    return (
        <div>
            <SearchStatus users={users}/>
            <UsersList
                users={users}
                onDelete={handleDelete}
            />
        </div>
    );
};

export default App;