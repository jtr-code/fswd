import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";

const FilterWrapper = styled.div`
  padding: 1rem;
`;

function Filter({ onFilter }) {
  const [filterText, setFilterText] = useState("");

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
    onFilter(event.target.value);
  };

  return (
    <FilterWrapper>
      <TextField
        type="text"
        id="filterInput"
        value={filterText}
        size="small"
        label="Filter by name"
        onChange={handleFilterChange}
      />
    </FilterWrapper>
  );
}

export default Filter;
