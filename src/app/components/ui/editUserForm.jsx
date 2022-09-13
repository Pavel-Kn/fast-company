import React, { useEffect, useState } from "react";
import TextField from "../common/form/textField";
import MultiSelectField from "../common/form/multiSelectField";
import { useHistory, useParams } from "react-router-dom";
import api from "../../../api";
import SelectField from "../common/form/selectField";
import RadioField from "../common/form/radioField";

const EditUserForm = () => {
    const [user, setUser] = useState();
    const params = useParams();
    const [professions, setProfession] = useState([]);
    const [qualities, setQualities] = useState([]);
    const { userId } = params;
    const history = useHistory();
    const [data, setData] = useState({
        name: "",
        email: "",
        profession: "",
        sex: "male",
        qualities: []
    });

    useEffect(() => {
        if (user) {
            setData({
                name: user.name,
                email: user.email,
                sex: user.sex,
                profession: user.profession,
                qualities: user.qualities
            });
        }
    }, [user]);

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);

    const getProfessionById = (id) => {
        for (const prof of professions) {
            if (prof.value === id) {
                return { _id: prof.value, name: prof.label };
            }
        }
    };

    const getQualities = (elements) => {
        const qualitiesArray = [];
        for (const elem of elements) {
            for (const quality in qualities) {
                if (elem.value === qualities[quality].value) {
                    qualitiesArray.push({
                        _id: qualities[quality].value,
                        name: qualities[quality].label,
                        color: qualities[quality].color
                    });
                }
            }
        }
        return qualitiesArray;
    };

    useEffect(() => {
        api.professions.fetchAll().then((data) => {
            const professionsList = Object.keys(data).map((professionName) => ({
                label: data[professionName].name,
                value: data[professionName]._id
            }));
            setProfession(professionsList);
        });
        api.qualities.fetchAll().then((data) => {
            const qualitiesList = Object.keys(data).map((optionName) => ({
                label: data[optionName].name,
                value: data[optionName]._id,
                color: data[optionName].color
            }));
            setQualities(qualitiesList);
        });
    }, []);

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, sex, profession, qualities } = data;

        api.users.update(userId, {
            ...data,
            name: name,
            email: email,
            sex: sex,
            profession: getProfessionById(profession),
            qualities: getQualities(qualities)
        })

        .then((data) => setUser(data));
        history.push(`/users/${userId}`);
    };

    if (user) {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 shadow p-4">
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Имя"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                            />
                            <TextField
                                label="Электронная почта"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                            />
                            <SelectField
                                label="Выбери свою профессию"
                                defaultOption="Choose..."
                                name="profession"
                                options={professions}
                                onChange={handleChange}
                                value={data.profession}
                            />
                            <RadioField
                                label="Выберите ваш пол"
                                options={[
                                    { name: "Male", value: "male" },
                                    { name: "Female", value: "female" },
                                    { name: "Other", value: "other" }
                                ]}
                                value={data.sex}
                                name="sex"
                                onChange={handleChange}
                            />
                            <MultiSelectField
                                label="Выберите ваши качества"
                                options={qualities}
                                onChange={handleChange}
                                defaultValue={data.qualities.name}
                                name="qualities"
                            />
                            <button
                                type="submit"
                                className="btn btn-primary w-100 mx-auto"
                            >
                                Обновить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
    return <h2>Loading...</h2>;
};

export default EditUserForm;
