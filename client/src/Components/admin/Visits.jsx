import { useEffect, useState } from "react";
const API_BASE = process.env.REACT_APP_API_BASE;
export default function Visits() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`${API_BASE}/api/visits`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6 glass rounded-xl text-white">
      <h2 className="text-2xl font-bold mb-4">Total Site Visits</h2>
      <p className="text-lg">{count}</p>
    </div>
  );
}
