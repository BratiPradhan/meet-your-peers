import { AiOutlineMail } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";

import "../styles.css";

function User({ user }) {
  return (
    <section className="card">
      <section className="card-item-left">
        <p className="name">{user.FirstNameLastName}</p>
        <p className="job">{`${user.JobTitle} at ${user.Company}`}</p>
      </section>

      <section className="card-item-right">
        <p className="contact-header">Contact Details</p>
        <p className="contact-item">
          <span>
            <AiOutlineMail />
          </span>{" "}
          <span>{user.Email}</span>
        </p>
        <p className="contact-item">
          <span>
            <FaPhone />
          </span>{" "}
          <span>{user.Phone}</span>
        </p>
      </section>
    </section>
  );
}

export default User;
