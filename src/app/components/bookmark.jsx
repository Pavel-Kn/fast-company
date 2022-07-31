import React from 'react';

const Bookmark = (props) => {
    const {isBookmark} = props

    const bookmarkIcon = (isBookmark === false) ? "bi bi-bookmark-heart" : "bi bi-bookmark-heart-fill";

    return (
        <button
            className="btn btn-light"
            onClick={() => props.onToggle(props._id)}
        >
            <i className={bookmarkIcon} style={{margin: 10, fontSize: "1.3rem"}}></i>
        </button>
    );
};

export default Bookmark;