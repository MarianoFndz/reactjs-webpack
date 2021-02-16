import React, { useState, useEffect } from "react";

export default function App({ message }) {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    setMsg(message);
  }, []);

  return (
    <div>
      <h3>{msg}</h3>
    </div>
  );
}
