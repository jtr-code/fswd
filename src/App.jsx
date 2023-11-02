import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pagination, Stack, useMediaQuery } from "@mui/material";
import ProductList from "./components/ProductList/ProductList";
import Filter from "./utils/Filter";
import Sort from "./utils/Sort";
import styled from "styled-components";

function App() {
  // State variables
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("name");
  const [currentProducts, setCurrentProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "https://fakestoreapi.com/products";

  // Handle filter
  const handleFilter = (filterText) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(filterText.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // Handle sorting
  const handleSort = (sortOrder) => {
    setSortOrder(sortOrder);
    const sortedProducts = [...filteredProducts];
    sortedProducts.sort((a, b) => {
      if (sortOrder === "name") {
        return a.title.localeCompare(b.title);
      } else if (sortOrder === "price") {
        return a.price - b.price;
      }
    });
    setFilteredProducts(sortedProducts);
  };

  // Fetch products from the API
  const fetchProduct = async () => {
    try {
      const response = await axios.get(API_URL);
      setProducts(response.data);
      setFilteredProducts(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  // Pagination
  useEffect(() => {
    const newCurrentProducts = paginate(
      filteredProducts,
      currentPage,
      itemsPerPage
    );
    setCurrentProducts(newCurrentProducts);
  }, [filteredProducts, currentPage, itemsPerPage]);

  // Helper function to paginate data
  const paginate = (data, page, itemsPerPage) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  // Scroll to top when changing the page
  const handleNavigation = () => {
    window.scrollTo(0, 0);
  };

  // Responsive design
  const matches = useMediaQuery("(max-width:600px");

  return (
    <div>
      {loading ? (
        <h1>Loading.......</h1>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <>
          <Utils>
            <Filter onFilter={handleFilter} />
            <Sort onSort={handleSort} />
          </Utils>
          {filteredProducts.length === 0 ? (
            <p>No products matching your filter were found.</p>
          ) : (
            <ProductList products={currentProducts} />
          )}
        </>
      )}
      {!loading && (
        <Stack style={{ display: "flex", alignItems: "center" }}>
          <Pagination
            count={Math.ceil(filteredProducts.length / itemsPerPage)}
            page={currentPage}
            onChange={(event, page) => setCurrentPage(page)}
            color="primary"
            size={matches ? "small" : "large"}
            onClick={handleNavigation}
          />
        </Stack>
      )}
    </div>
  );
}

export default App;

const Utils = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 1rem;
`;
