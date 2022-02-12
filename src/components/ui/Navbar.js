import React from "react";

export default function Navbar() {
  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <div>
        <i class="fa-solid fa-user text-white"></i>
        <span className="navbar-brand m-2">Pedro</span>
      </div>
      <button className="btn btn-outline-danger">
        <i className="fa-solid fa-right-from-bracket"></i>
        <span> Salir</span>
      </button>
    </div>
  );
}
