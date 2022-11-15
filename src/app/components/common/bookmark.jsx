import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ isBookmark, onToggleBookMark }) => {
    const bookmarkIcon =
        isBookmark === false
            ? "bi bi-bookmark-heart"
            : "bi bi-bookmark-heart-fill";

    return (
        <button className="btn btn-light" onClick={onToggleBookMark}>
            <i
                className={bookmarkIcon}
                style={{ margin: 10, fontSize: "1.3rem" }}
            ></i>
        </button>
    );
};

Bookmark.propTypes = {
    isBookmark: PropTypes.bool,
    onToggleBookMark: PropTypes.func.isRequired
};

export default Bookmark;
