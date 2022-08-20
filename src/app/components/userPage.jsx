import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import api from "../../api";
import QualitiesList from "./qualitiesList";

const UserPage = () => {
    const params = useParams();
    const history = useHistory();
    const [userParams, setUserParams] = useState();
    const { usersId } = params;
    useEffect(() => {
        api.users.getById(usersId).then((data) => setUserParams(data));
    }, []);

    const allUsersButton = () => {
        history.push("/users");
    };

    if (userParams) {
        return (
            <>
                <h1>{userParams.name}</h1>
                <h2>Профессия: {userParams.profession.name}</h2>
                <QualitiesList qualities={userParams.qualities} />
                <div>completedMeetings: {userParams.completedMeetings}</div>
                <h2>Rate: {userParams.rate}</h2>
                <button onClick={() => { allUsersButton(); }}>Все пользователи</button>
            </>
        );
    }
    return <h1>Loading</h1>;
};

export default UserPage;
