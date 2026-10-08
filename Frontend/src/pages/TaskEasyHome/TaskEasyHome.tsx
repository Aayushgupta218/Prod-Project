import { useState, useEffect } from "react";
function TaskEasyHome() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/health")
      .then((response) => response.text())
      .then((data) => setMessage(data));
  }, []);
  return (
    <div>
    <h1>Welcome to TaskEasy Home Services</h1>
    <span>{message}</span>
    </div>
  );
}
export default TaskEasyHome;
