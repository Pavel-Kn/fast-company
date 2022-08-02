import React, { useState } from "react";
import UsersList from "./components/usersList";
import SearchStatus from "./components/searchStatus";
import api from "../api";

function App() {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {
        setUsers((prevState) =>
            prevState.filter((elem) => elem._id !== userId)
        );
    };

    const handleToggleBookmark = (userMark) => {
        const elemIndex = users.findIndex((elem) => elem._id === userMark);
        const newUsersArray = [...users];
        newUsersArray[elemIndex].bookmark = !newUsersArray[elemIndex].bookmark;
        setUsers(newUsersArray);
    };

    return (
        <div>
            <SearchStatus allUsersCount={users.length} />
            <UsersList
                users={users}
                onDelete={handleDelete}
                onToggle={handleToggleBookmark}
            />
        </div>
    );
}

export default App;
