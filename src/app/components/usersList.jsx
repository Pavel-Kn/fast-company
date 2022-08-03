import React, { useState, useEffect } from "react";
import User from "./user";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import api from "../../api";

const UsersList = ({ users: allUsers, onDelete, onToggle }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfession] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const count = allUsers.length;
    const pageSize = 4;

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data));
    }, []);

    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const filteredUsers = selectedProf
        ? allUsers.filter((user) => user.profession === selectedProf)
        : allUsers;
    const userCrop = paginate(filteredUsers, currentPage, pageSize);

    const listOfUsers = userCrop.map((elem) => {
        return (
            <User
                key={elem._id}
                element={elem}
                onDelete={onDelete}
                onToggle={onToggle}
            />
        );
    });

    const renderTable = () => {
        return (
            <>
                {professions && (
                    <GroupList
                        selectedItem={selectedProf}
                        items={professions}
                        onItemSelect={handleProfessionSelect}
                    />
                )}

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
                    <tbody>{listOfUsers}</tbody>
                </table>
                <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </>
        );
    };

    return renderTable();
};

UsersList.propTypes = {
    users: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired
};

export default UsersList;
