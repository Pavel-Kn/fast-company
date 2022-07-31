import React from 'react';

const Bookmark = ({isBookmark, onToggle, id}) => {

    const bookmarkIcon = (isBookmark === false) ? "bi bi-bookmark-heart" : "bi bi-bookmark-heart-fill";

    return (
        <button
            className="btn btn-light"
            onClick={() => onToggle(id)}
        >
            <i className={bookmarkIcon} style={{margin: 10, fontSize: "1.3rem"}}></i>
        </button>
    );
};

export default Bookmark;