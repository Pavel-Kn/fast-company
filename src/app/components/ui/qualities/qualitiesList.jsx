import React from "react";
import Qualities from "./qualities";
import PropTypes from "prop-types";

const QualitiesList = ({ qualities }) => {
    return (
        <>
            <Qualities qualities={qualities} />
        </>
    );
};

QualitiesList.propTypes = {
    qualities: PropTypes.array.isRequired
};

export default QualitiesList;
