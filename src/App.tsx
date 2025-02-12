import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InputURL from "./components/InputURL";

const App:React.FC = () => {
  return (
    <main>
      <Header />
      <Hero />
      <InputURL />
    </main>
  )
}

export default App;
