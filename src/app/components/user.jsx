import React from 'react';
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";

const User = (props) => {
    const {onToggle} = props

    return (
        <tr key={props._id}>
            <td>{props.name}</td>
            <td>
                <Qualitie qualities={props.qualities}/>
            </td>
            <td>{props.profession.name}</td>
            <td>{props.completedMeetings}</td>
            <td>{props.rate}/5</td>
            <td>
                <Bookmark
                    isBookmark={props.bookmark}
                    onToggle={onToggle}
                />
            </td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => props.onDelete(props._id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default User;