import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import InputURL from "./components/InputURL";
import Statistics from "./components/Statistics/Statistics";
import BoostLinks from "./components/BoostLinks";
import Footer from "./components/Footer/Footer";

const App:React.FC = () => {
  return (
    <main>
      <Header />
      <Hero />
      <div className='bg-gray/25 mt-20 pb-10'>
        <InputURL />
        <Statistics />
      </div>
      <BoostLinks />
      <Footer />
    </main>
  )
}

export default App;
