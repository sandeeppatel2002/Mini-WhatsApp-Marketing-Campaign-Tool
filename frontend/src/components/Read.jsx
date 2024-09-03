import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [data, setData] = useState();
  const [error, setError] = useState("");

  async function getData() {
    debugger;
    const response = await fetch(
      "http://localhost:8000/api/campaign/messageList",
      {
        method: "GET",
      }
    );
    const result = await response.json();

    if (!response.ok) {
      setError(result.error);
    }
    if (response.ok) {
      setData(result.data);
      setError("");
    }
  }

  useEffect(() => {
    getData();
  }, []);

  // const handleDelete = async (id) => {
  //   const response = await fetch(
  //     `http://localhost:5000/api/user/deleteuser/${id}`,
  //     {
  //       method: "DELETE",
  //     }
  //   );
  //   const result = await response.json();

  //   if (!response.ok) {
  //     setError(result.error);
  //   }
  //   if (response.ok) {
  //     setError("Delete Successfully");

  //     setTimeout(() => {
  //       setError("");
  //       getData();
  //     }, 2000);
  //   }
  // };

  console.log(data, "data");

  return (
    <div className="container my-2">
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <h2 className="text-center">Campaign Message List</h2>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Campaign Name</th>
            <th scope="col">Campaign Message</th>
            <th scope="col">UserList</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((data) => (
            <tr key={data._id}>
              <td>{data?.message_id}</td>
              <td>{data?.message_name}</td>
              <td>{data?.message_data}</td>
              <td>
                <Link
                  to={`/userList/${data?.message_id}`}
                  className="card-link m-2"
                >
                  ShowUser
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Read;
