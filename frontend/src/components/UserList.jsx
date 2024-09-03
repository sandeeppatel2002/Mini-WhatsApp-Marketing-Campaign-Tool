import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UserList() {
  const [data, setUserList] = useState([]);

  const [error, setError] = useState("");
  const [response, setResponse] = useState("");

  const { id } = useParams();

  const getUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/campaign/userList/${id}`,
        {
          method: "GET",
        }
      );
      const result = await response.json();

      if (!response.ok) {
        console.error(result.error);
        setError(result.error);
      } else {
        setUserList(result.data);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setError("Failed to fetch user data. Please try again later.");
    }
  };

  useEffect(() => {
    getUserData();
  }, [id]); // Added id as a dependency to refetch if id changes

  return (
    <div className="container my-2">
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {response && (
        <div className="alert alert-success" role="alert">
          {response}
        </div>
      )}

      <h2 className="text-center">User List</h2>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">User Id</th>
            <th scope="col">User Name</th>
            <th scope="col">User Mobile Number</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr>
              <td>{user.user_id}</td>
              <td>{user.user_name}</td>
              <td>{user.mobile_number}</td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
