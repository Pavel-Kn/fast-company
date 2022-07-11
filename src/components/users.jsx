import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (id) => {
    setUsers((prevState) => prevState.filter((row) => row !== id));
  };

  const counterUsers = () => {
    let counter = users.length;
    let endingOfTheWord = "";

    let remainder = counter % 10;

    if (remainder > 1 && remainder < 5) {
      endingOfTheWord = "а";
    }
    if (counter > 10 && counter < 20) {
      endingOfTheWord = "";
    }
    if (remainder === 1) {
      endingOfTheWord = "";
    }

    return (
      <span className="badge m-2 bg-primary">
        {counter} человек{endingOfTheWord} тусанет с тобой сегодня
      </span>
    );
  };

  const renderTable = () => {
    if (users.length === 0) {
      return (
        <span className="badge m-2 bg-danger">Никто с тобой не тусанет</span>
      );
    } else {
      return (
        <>
          {counterUsers()}
          <table className="table table-sm">
            <thead>
              <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился, раз</th>
                <th scope="col">Оценка</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>
                    {" "}
                    {item.qualities.map((element) => {
                      return (
                        <span
                          key={element._id}
                          className={`badge m-1 bg-${element.color}`}
                        >
                          {element.name}
                        </span>
                      );
                    })}
                  </td>
                  <td>{item.profession.name}</td>
                  <td>{item.completedMeetings}</td>
                  <td>{item.rate}/5</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDelete(item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );
    }
  };

  return renderTable();
};

export default Users;
