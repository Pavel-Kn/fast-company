import React from "react";
import User from "./user";

const UsersList = (props) => {
    const {users, onDelete, onToggle} = props;

    const listOfUsers = users.map((elem) => {
        return (
            <User
                key={elem._id}
                {...elem}
                onDelete={onDelete}
                onToggle={onToggle}
            />
        );
    });

    const renderTable = () => {

        return (
            <>
                <table className="table table-sm fs-3 m-4">
                    <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th scope="col">Избранное</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {listOfUsers}
                    </tbody>
                </table>
            </>
        );
    };

    return renderTable();
};

export default UsersList;