import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { starLogout } from "../../actions/auth";

export default function Navbar() {
  const dispatch = useDispatch();
  const {name} = useSelector( state => state.auth );

  const handleLogout = () => {
      dispatch(starLogout());
  }

  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <div>
        <i className="fa-solid fa-user text-white"></i>
        <span className="navbar-brand m-2">{name}</span>
      </div>
      <button 
        className="btn btn-outline-danger"
        onClick={handleLogout}
      >
        <i className="fa-solid fa-right-from-bracket"></i>
        <span> Salir</span>
      </button>
    </div>
  );
}
