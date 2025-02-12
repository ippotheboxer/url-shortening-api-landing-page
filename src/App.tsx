import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InputURL from "./components/InputURL";
import Statistics from "./components/Statistics";

const App:React.FC = () => {
  return (
    <main>
      <Header />
      <Hero />
      <div className='bg-gray/25 mt-20'>
      <InputURL />
      <Statistics />
      </div>
    </main>
  )
}

export default App;
