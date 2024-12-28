import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api")
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching API:', error));
  }, []);

  return (
    <div>
      <h1>React App</h1>
      <p>{message || "Loading..."}</p>
    </div>
  );
}

export default App;
