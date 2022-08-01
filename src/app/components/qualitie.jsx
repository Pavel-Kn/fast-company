import React from "react";

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

export default Qualitie;
