import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useLocation,
  BrowserRouter as Router,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage";
import MobileNavbar from "./components/MobileNavBar";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import Merchandise from "./pages/Merchandise";
import GiftHampers from "./pages/GiftHampers";
import MushroomCoffee from "./pages/MushroomCoffee";
import VitaminCoffee from "./pages/VitaminCoffee";
import Coffee from "./pages/Coffee";
import ExploreMushroomCoffee from "./pages/ExploreMushroomCoffee";
import ExploreVitaminCoffee from "./pages/ExploreVitaminCoffee";
const App = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    
    <Router>
                  <MainApp openNav={openNav} setOpenNav={setOpenNav} />
                  </Router>
  );
};

const MainApp = ({ openNav, setOpenNav }) => {
  const location = useLocation();
  const checkoutPage = location.pathname.startsWith('/checkout');

  return (
    <main className="overflow-x-hidden ">      
    {!checkoutPage && <MobileNavbar openNav={openNav} setOpenNav={setOpenNav} />}
    {!checkoutPage && <Navbar openNav={openNav} setOpenNav={setOpenNav} />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/vitamin-coffee" element={<VitaminCoffee />} />
        <Route path="/shop/mushroom-coffee" element={<MushroomCoffee />} />
        <Route path="/shop/gift-hampers" element={<GiftHampers />} />
        <Route path="/shop/merchandise" element={<Merchandise />} />

        <Route path="/coffee" element={<Coffee />} />
        <Route path="/coffee/vitamin-coffee" element={<ExploreVitaminCoffee />} />
        <Route path="/coffee/mushroom-coffee" element={<ExploreMushroomCoffee />} />

      </Routes>
      <Toaster position="bottom-right" reverseOrder={false} />
      {!checkoutPage && <Footer />}

    </main>
  );
};

export default App;
