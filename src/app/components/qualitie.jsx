import React from "react";
import PropTypes from "prop-types";

const Qualitie = ({ qualities }) => {
    const getBadgesAndNames = qualities.map((elem) => {
        return (
            <span key={elem._id} className={`badge m-1 bg-${elem.color}`}>
                {elem.name}
            </span>
        );
    });

    return getBadgesAndNames;
};

Qualitie.propTypes = {
    qualities: PropTypes.array.isRequired
};

export default Qualitie;
