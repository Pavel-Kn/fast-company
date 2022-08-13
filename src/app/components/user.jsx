import React from "react";
import Bookmark from "./bookmark";
import PropTypes from "prop-types";

const User = ({ onToggleBookMark, element, onDelete }) => {
    const { _id, name, rate, profession, bookmark, completedMeetings } =
        element;
    return (
        <tr key={_id}>
            <td>{name}</td>
            <td></td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate}/5</td>
            <td>
                <Bookmark
                    isBookmark={bookmark}
                    id={_id}
                    onToggle={() => onToggleBookMark(_id)}
                />
            </td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => onDelete(_id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

User.propTypes = {
    element: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggleBookMark: PropTypes.func.isRequired
};

export default User;
