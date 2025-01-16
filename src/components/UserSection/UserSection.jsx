import { useState, useEffect } from "react";
import useInput from "../../hooks/useInput";

export default function UserSection() {
  const input = useInput();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let isMounted = true;

    async function fetchUsers() {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        const users = await response.json();
        if (isMounted) {
          setUsers(users);
        }
      } catch (err) {
        console.error("Error fetching users:", err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchUsers();
  }, []);

  return (
    <section>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <input type="text" className="control" {...input} />
          <ul>
            {users
              .filter((user) =>
                user.name.toLowerCase().includes(input.value.toLowerCase())
              )
              .map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
}
