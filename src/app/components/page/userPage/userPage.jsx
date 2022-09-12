import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../../../api";
import QualitiesList from "../../ui/qualities/qualitiesList";
import PropTypes from "prop-types";

const UserPage = ({ userId }) => {
    const history = useHistory();
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);

    const allUsersButton = () => {
        history.push(`/users/${userId}/edit`);
    };

    if (user) {
        return (
            <>
                <h1>{user.name}</h1>
                <h2>Профессия: {user.profession.name}</h2>
                <QualitiesList qualities={user.qualities} />
                <p>completedMeetings: {user.completedMeetings}</p>
                <h2>Rate: {user.rate}</h2>
                <button onClick={allUsersButton}>Редактировать данные</button>
            </>
        );
    }
    return <h1>Loading</h1>;
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
