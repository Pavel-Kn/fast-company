import React, {useState} from "react";
import UsersList from "./components/usersList";
import SearchStatus from "./components/searchStatus";
import api from "../api";

function App() {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {

        setUsers((prevState) => prevState.filter((elem) => elem._id !== userId));
    };

    const handleToggleBookmark = (userMark) => {
        setUsers((prevState) => prevState.map((elem) => {
            console.log(userMark)
            if (elem._id === userMark) {
                return elem.bookmark = true;
            }
            return elem
        }))
    }

    return (
        <div>
            <SearchStatus users={users}/>
            <UsersList
                users={users}
                onDelete={handleDelete}
                onToggle={handleToggleBookmark}
            />
        </div>
    );
};

export default App;