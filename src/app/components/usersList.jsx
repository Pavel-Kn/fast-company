import React, { useState } from "react";
import User from "./user";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import { PropTypes } from "prop-types";

const UsersList = ({ users, onDelete, onToggle }) => {
    const count = users.length;
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const userCrop = paginate(users, currentPage, pageSize);

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
