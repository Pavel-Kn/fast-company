import React, { useEffect, useState } from "react";
import UsersList from "./components/usersList";
import api from "../api";

function App() {
    const [users, setUsers] = useState();

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

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
            {users && (
                <UsersList
                    users={users}
                    onDelete={handleDelete}
                    onToggle={handleToggleBookmark}
                />
            )}
        </div>
    );
}

export default App;
