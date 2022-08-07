import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    const arrayData = items.map((elem) => {
        return (
            <li
                key={elem[valueProperty]}
                className={
                    "list-group-item" + (elem === selectedItem ? " active" : "")
                }
                onClick={() => onItemSelect(elem)}
                role="button"
            >
                {elem[contentProperty]}
            </li>
        );
    });

    const objectData = Object.keys(items).map((item) => {
        return (
            <li
                key={items[item][valueProperty]}
                className={
                    "list-group-item" +
                    (items[item] === selectedItem ? " active" : "")
                }
                onClick={() => onItemSelect(items[item])}
                role="button"
            >
                {items[item][contentProperty]}
            </li>
        );
    });

    return (
        <ul className="list-group">
            {typeof items === "object" ? objectData : arrayData}
        </ul>
    );
};

GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object
};

export default GroupList;
