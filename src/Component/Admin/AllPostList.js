import React from "react";

const AllPostList = ({ item }) => {
  const { _id, title, category, location, jobtype, status } = item;

  const handleChange = (e) => {
    fetch(`https://frozen-chamber-29591.herokuapp.com/update/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: e.target.value }),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.reload();
      });
  };

  return (
    <tbody>
      <tr>
        <td>{title}</td>
        <td>{location}</td>
        <td>{category}</td>
        <td>{jobtype}</td>
        <td>
          <select
            onChange={handleChange}
            value={status}
            className="form-control"
            id="cars"
            name="status"
          >
            <option className="text-danger" value="pending">
              Pending
            </option>
            <option className="text-success" value="done">
              Done
            </option>
          </select>
        </td>
      </tr>
    </tbody>
  );
};

export default AllPostList;
