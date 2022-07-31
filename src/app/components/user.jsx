import React from 'react';
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";

const User = ({onToggle, element, onDelete}) => {
    const {_id, name, rate, qualities, profession, bookmark, completedMeetings} = element;
    return (
        <tr key={_id}>
            <td>{name}</td>
            <td>
                <Qualitie qualities={qualities}/>
            </td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate}/5</td>
            <td>
                <Bookmark
                    isBookmark={bookmark}
                    id={_id}
                    onToggle={onToggle}
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

export default User;