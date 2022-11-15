import React, { useState, useEffect } from "react";
import Pagination from "../../common/pagination";
import { paginate } from "../../../utils/paginate";
import GroupList from "../../common/groupList";
import api from "../../../../api";
import SearchStatus from "../../ui/searchStatus";
import UsersTable from "../../ui/usersTable";
import _ from "lodash";
import { useUser } from "../../../hooks/useUsers";

const UsersListPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfession] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });
    const [searchQuery, setSearchQuery] = useState("");
    const pageSize = 8;

    const { users } = useUser();

    const handleDelete = (userId) => {
        // setUsers((prevState) =>
        //     prevState.filter((elem) => elem._id !== userId)
        // );
        console.log(userId);
    };

    const handleToggleBookmark = (id) => {
        const elemIndex = users.findIndex((elem) => elem._id === id);
        const newUsersArray = [...users];
        newUsersArray[elemIndex].bookmark = !newUsersArray[elemIndex].bookmark;
        // setUsers(newUsersArray);
        console.log(newUsersArray);
    };

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data));
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf, searchQuery]);

    const handleQuery = ({ target }) => {
        setSelectedProf(undefined);
        setSearchQuery(target.value);
    };

    const handleProfessionSelect = (item) => {
        if (searchQuery !== "") setSearchQuery("");
        setSelectedProf(item);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleSort = (item) => {
        setSortBy(item);
    };

    if (users) {
        const filteredUsers = searchQuery
            ? users.filter(
                (user) =>
                    user.name
                        .toLowerCase()
                        .indexOf(searchQuery.toLowerCase()) !== -1
            )
            : selectedProf
                ? users.filter(
                    (user) =>
                        JSON.stringify(user.profession) ===
                        JSON.stringify(selectedProf)
                )
                : users;
        const count = filteredUsers.length;
        const sortedUsers = _.orderBy(
            filteredUsers,
            [sortBy.path],
            [sortBy.order]
        );
        const userCrop = paginate(sortedUsers, currentPage, pageSize);
        const clearFilter = () => {
            setSelectedProf();
        };

        const renderTable = () => {
            return (
                <div className="d-flex">
                    {professions && (
                        <div className="d-flex flex-column flex-shrink-0 p-3">
                            <GroupList
                                selectedItem={selectedProf}
                                items={professions}
                                onItemSelect={handleProfessionSelect}
                            />
                            <button
                                className="btn btn-secondary mt-2"
                                onClick={clearFilter}
                            >
                                Очистить
                            </button>
                        </div>
                    )}
                    <div className="d-flex flex-column">
                        <SearchStatus allUsersCount={count} />
                        <div className="input-group p-4">
                            <span className="input-group-text "><i className="bi bi-search"/></span>
                            <div className="form-floating w-50">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Search..."
                                    onChange={handleQuery}
                                    value={searchQuery}
                                />
                                <label>Search...</label>
                            </div>
                        </div>
                        <UsersTable
                            onSort={handleSort}
                            selectedSort={sortBy}
                            users={userCrop}
                            onDelete={handleDelete}
                            onToggleBookMark={handleToggleBookmark}
                        />
                        <div className="d-flex justify-content-center">
                            <Pagination
                                itemsCount={count}
                                pageSize={pageSize}
                                currentPage={currentPage}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    </div>
                </div>
            );
        };

        return renderTable();
    }
    return "Loading...";
};

export default UsersListPage;
