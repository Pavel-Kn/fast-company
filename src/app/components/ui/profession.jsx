import React from "react";
import { useProfessions } from "../../hooks/useProfession";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getProfessionLoadingStatus } from "../../store/professions";

const Profession = ({ id }) => {
    const { getProfession } = useProfessions();
    const isLoading = useSelector(getProfessionLoadingStatus());
    const prof = getProfession(id);
    if (!isLoading) {
        return <p>{prof.name}</p>;
    } else return "Loading...";
};
Profession.propTypes = {
    id: PropTypes.string
};
export default Profession;
