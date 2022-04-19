import { Link } from "react-router-dom";
import "../styles/FloatingLogs.css";

function FloatingLogs() {
  // useState();

  return (
    <div id="floatingLogs">
      <Link
        className="text-decoration-none link px-4 py-2 shadow-lg"
        to="/logs"
      >
        <span>Logs</span>
      </Link>
    </div>
  );
}

export default FloatingLogs;
