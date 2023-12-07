import React from "react";
import Selector from "../Selector/Selector";
import "./styles.css";

const status = ['Alive', 'Dead', 'unknown']
const gender = ["Female","Male", "unknown"]

function FilterBar({ filterChange }) {
  return (
    <>
      <div className="container filterBar">
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
          <input type="text" placeholder="Search by name" onChange={filterChange("name")}/>
          <Selector label={"status"} options={status} onChange={filterChange("status")}/>
          <Selector label={"gender"} options={gender} onChange={filterChange("gender")}/>
        </nav>
      </div>
    </>
  )
}

export default FilterBar