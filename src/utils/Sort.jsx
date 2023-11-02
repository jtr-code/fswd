import React from "react";
import styled from "styled-components";
import { Select, MenuItem } from "@mui/material";

const SortWrapper = styled.div`
  padding: 1rem;
`;
function Sort({ onSort }) {
  const handleSortChange = (event) => {
    onSort(event.target.value);
  };

  return (
    <SortWrapper>
      <label htmlFor="sortSelect">Sort by: </label>
      <Select id="sortSelect" value="" onChange={handleSortChange} size="small">
        <MenuItem value="name">Name (A-Z)</MenuItem>
        <MenuItem value="price">Price (Low to High)</MenuItem>
      </Select>
    </SortWrapper>
  );
}

export default Sort;
