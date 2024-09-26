import React from "react";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <ProductCard/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
