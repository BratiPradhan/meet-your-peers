import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "./User";

import "../styles.css";

function FetchUsers() {
  const [currentPage, setCurrentPage] = useState(0);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://give-me-users-forever.herokuapp.com/api/users/${currentPage}/next`
      );
      setUsers(res.data.users);
      setLoading(false);
    };

    fetchData();
  }, [currentPage]);

  return (
    <article className="container">
      <p className="header">Meet your Peers</p>
      {!loading &&
        users.map((user) => (
          <React.Fragment key={user.ID}>
            <User user={user} />
          </React.Fragment>
        ))}
      <section className="button-group">
        <button
          className="button button-secondary"
          disabled={currentPage === 0 ? true : false}
          onClick={() => setCurrentPage((curr) => curr - 10)}
        >
          Previous
        </button>
        <button
          className="button button-primary"
          onClick={() => setCurrentPage((curr) => curr + 10)}
        >
          Next Page
        </button>
      </section>
    </article>
  );
}

export default FetchUsers;
