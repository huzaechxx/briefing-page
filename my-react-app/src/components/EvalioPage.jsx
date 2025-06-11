import React from "react";
import "./EvalioPage.css";

const EvalioPage = () => {
  return (
    <div className="evalio-container">
      <h1 className="title">Evalio</h1>
      <hr />

      <section className="section">
        <h2>Project Brief</h2>
        <p>
          Evalio is a performance management platform designed to help
          organizations streamline feedback, track goals, and support employee
          growth through a secure, user-friendly interface.
        </p>
        <p>
          It offers a centralized Feedback Hub that enables meaningful peer and
          manager feedback across departments. Through the integrated Objectives
          and Key Results (OKRs) framework, Evalio facilitates goal-setting and
          alignment at both the individual and organizational levels.
        </p>
        <p>
          To ensure clarity and accountability, Evalio supports 1:1 meeting
          tools for structured conversations, tracking action points, and
          improving alignment between employees and managers.
        </p>
        <p>
          Organizations can easily set up their structure within the platform
          using Company and User Management features. Evalio provides secure
          user onboarding, authentication, and fine-grained Role-Based Access
          Control (RBAC) — ensuring every user interacts with the platform
          according to their role, whether as an admin, manager, or employee.
        </p>
        <p>
          Evalio’s architecture is built with scalability and performance in
          mind, powered by a NestJS backend, Prisma ORM, and PostgreSQL. The
          frontend is developed using React, ensuring a responsive and intuitive
          experience.
        </p>
      </section>

      <hr />

      <section className="section">
        <h2>Team Members</h2>
        <div className="member">
          <strong>▪ M. Barum Khan [FA21-BCS-035]</strong>
          <br />
          Email:{" "}
          <a href="mailto:barumkhan123@gmail.com">barumkhan123@gmail.com</a>
          <br />
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/barum-khan/">barum-khan</a>
          <br />
          GitHub: <a href="https://github.com/Barum-Khan">Barum-Khan</a>
        </div>
        <div className="member">
          <strong>▪ Huzaifa Zahid [FA21-BCS-104]</strong>
          <br />
          Email:{" "}
          <a href="mailto:huzaifazahid77@gmail.com">huzaifazahid77@gmail.com</a>
          <br />
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/huzaifa-zahid-2a8287224/">
            huzaifa-zahid
          </a>
          <br />
          GitHub: <a href="https://github.com/huzaefzck">huzaefzck</a>
        </div>
        <div className="member">
          <strong>▪ Duaa Abrar [FA21-BCS-113]</strong>
          <br />
          Email:{" "}
          <a href="mailto:duaa.abrar123@gmail.com">duaa.abrar123@gmail.com</a>
          <br />
          GitHub: <a href="https://github.com/duaa-abrar123">duaa-abrar123</a>
        </div>
      </section>

      <hr />

      <section className="section">
        <h2>Supervisors</h2>
        <div className="member">
          <strong>▪ Mr. Imran Raza</strong>
          <br />
          Email:{" "}
          <a href="mailto:imran.raza@ucp.edu.pk">imran.raza@ucp.edu.pk</a>
          <br />
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/imran-raza-35a3b0244/">
            imran-raza
          </a>
        </div>
        <div className="member">
          <strong>▪ Mr. Usman Parvez</strong>
          <br />
          Email:{" "}
          <a href="mailto:usman.azeem@ucp.edu.pk">usman.azeem@ucp.edu.pk</a>
          <br />
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/usmanparvez/">usmanparvez</a>
        </div>
      </section>
    </div>
  );
};

export default EvalioPage;
