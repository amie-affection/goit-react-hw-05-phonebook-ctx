import React from "react";

const FilterContacts = ({ filter, onChange }) => {
  return (
    <>
      <p style={{ marginLeft: "30px" }}>Find contacts by name</p>
      <input
        style={{ marginLeft: "30px" }}
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      ></input>
    </>
  );
};

export default FilterContacts;
