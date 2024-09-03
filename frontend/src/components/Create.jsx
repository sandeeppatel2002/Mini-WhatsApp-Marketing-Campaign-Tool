import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Papa from "papaparse";
import "./all.css"; // Assuming you save the CSS in Create.css

function Create() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [csvData, setCsvData] = useState([]);
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const addUser = { name, message, csvData };
    const response = await fetch(
      "http://localhost:8000/api/campaign/newCampaign",
      {
        method: "POST",
        body: JSON.stringify(addUser),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();

    if (!response.ok) {
      console.error(result.error);
      setError(result.error);
    } else {
      console.log(result);
      setResponse(result.message);
      setError("");

      // Clear form fields and CSV data
      setName("");
      setMessage("");
      setCsvData([]);

      // Hide alert after 3 seconds
      setTimeout(() => {
        setResponse("");
        navigate("/messageList");
      }, 3000);
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: (results) => {
          console.log("Parsed CSV Results:", results.data);
          results.data.pop(); // Remove the last empty object if present
          setCsvData(results.data);
        },
        error: (error) => {
          console.error("CSV Parsing Error:", error);
          setError("Error parsing CSV file");
        },
      });
    }
  };

  return (
    <div className="container my-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Create a New Campaign</h3>

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

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Campaign Name</label>
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Enter campaign name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Campaign Message</label>
              <textarea
                name="message"
                className="form-control"
                placeholder="Enter campaign message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="form-label">Upload CSV File</label>
              <input
                type="file"
                className="form-control"
                accept=".csv"
                onChange={handleFileUpload}
                required
              />
              <small className="form-text text-muted">
                Please upload a CSV file with user details.
              </small>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-block">
                Create Campaign
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
