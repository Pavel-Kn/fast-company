import React from "react";

const SearchStatus = ({ users }) => {
    let counter = users.length;
    let endingOfTheWord = "";
    let remainder = counter % 10;

    if (remainder > 1 && remainder < 5) {
        endingOfTheWord = "а";
    }

    if (counter > 10 && counter < 20) {
        endingOfTheWord = "";
    }

    if (remainder === 1) {
        endingOfTheWord = "";
    }

    if (users.length === 0) {
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

export default SearchStatus;
