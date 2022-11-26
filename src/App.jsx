import React from "react";
import Cards from "./components/Cards";
import Categories from "./components/Categories";
import Filters from "./components/Filters";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Cards />
      <Filters />
      <Categories />
    </div>
  );
}

export default App;
