import React from "react";

function About() {
  return (
    <div>
      <div style={{ padding: "10px", border: "1px solid #ccc" }}>
        <h1 style={{ textAlign: "center" }}>
          Data Peserta Sanbercode Bootcamp Reactjs
        </h1>
        <ol>
          <li>
            <strong style={{ width: "100px" }}>Nama:</strong> Muhamamd Nur
            Arifin
          </li>
          <li>
            <strong style={{ width: "100px" }}>Email:</strong>{" "}
            nurarifinmuhamamd@gmail.com
          </li>
          <li>
            <strong style={{ width: "100px" }}>
              Sistem Operasi yang digunakan:
            </strong>
            Windows 10/ Ubuntu
          </li>
          <li>
            <strong style={{ width: "100px" }}>Akun Github:</strong> arifinmn11
          </li>
          <li>
            <strong style={{ width: "100px" }}>Akun Telegram:</strong> Arifin
          </li>
        </ol>
      </div>
    </div>
  );
}

export default About;
