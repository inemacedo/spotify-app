import axios from "axios";
import React, { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";
import { Link } from "react-router-dom";

function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const getLogs = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/logs`
      );
      setLogs(response.data);
      //   console.log(response.data);
    };
    getLogs();
  }, []);

  return (
    <div className="container my-5">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">User IP</th>
            <th scope="col">Artist Name</th>
            <th scope="col">Request Date</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.id}>
              <td>{log.ip}</td>
              <td>{log.artistSearched}</td>
              <td>{format(parseISO(log.createdAt), "PP")}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link className="search-btn btn btn-primary w-10" to="/">
        Home
      </Link>
    </div>
  );
}

export default Logs;
