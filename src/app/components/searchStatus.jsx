import React from "react";
import { PropTypes } from "prop-types";

const SearchStatus = ({ allUsersCount }) => {
    const counter = allUsersCount;
    let endingOfTheWord = "";
    const remainder = counter % 10;

    if (remainder > 1 && remainder < 5) {
        endingOfTheWord = "а";
    }

    if (counter > 10 && counter < 20) {
        endingOfTheWord = "";
    }

    if (remainder === 1) {
        endingOfTheWord = "";
    }

    if (allUsersCount === 0) {
        return (
            <span className="badge bg-danger fs-4 m-4">
                Никто с тобой сегодня не тусанет =({" "}
            </span>
        );
    } else {
        return (
            <span className="badge bg-primary fs-4 m-4">
                {counter} человек{endingOfTheWord} тусанет с тобой сегодня
            </span>
        );
    }
};

SearchStatus.propTypes = {
    allUsersCount: PropTypes.number.isRequired
};

export default SearchStatus;
