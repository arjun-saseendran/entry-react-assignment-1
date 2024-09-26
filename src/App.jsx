import React from "react";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <ProductCard/>
      </main>
    </>
  );
}

export default App;
