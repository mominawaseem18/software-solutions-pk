import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AnnouncementBar from "./Components/AnnouncementBar";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Clients from "./Components/Clients";
import Problems from "./Components/Problems";
import Products from "./Components/Products";
import Services from "./Components/Services";
import Esasoft from "./Components/Esasoft";
import Industries from "./Components/Industries";
import HowItWorks from "./Components/HowItWorks";
import FAQ from "./Components/FAQ";

import About from "./Components/About";
import ServicesPage from "./Components/ServicesPage";
import ContactPage from "./Components/ContactPage";

// ================= LOCATION API =================
import LocationPage from "./Components/Location/LocationPage";

import POS from "./Components/POS";
import BillBaaz from "./Components/BillBaz";
import Munshi from "./Components/Munshi";
import HotelManagement from "./Components/HotelManagement";

import Footer from "./Components/Footer";

// ================= HOME PAGE =================
function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <Products />
      <Services />
      <Esasoft />
      <Industries />
      <HowItWorks />
      <FAQ />
      <Footer />
    </>
  );
}

// ================= ABOUT PAGE =================
function AboutPage() {
  return (
    <>
      <About />
      <Footer />
    </>
  );
}

// ================= APP =================
function App() {
  return (
    <BrowserRouter>
      <AnnouncementBar />
      <Navbar />

      <Routes>
        {/* ================= HOME ================= */}
        <Route path="/" element={<Home />} />

        {/* ================= ABOUT ================= */}
        <Route path="/about" element={<AboutPage />} />

        {/* ================= CLIENTS ================= */}
        <Route
          path="/clients"
          element={
            <>
              <Clients />
              <Footer />
            </>
          }
        />

        {/* ================= SERVICES ================= */}
        <Route
          path="/services"
          element={
            <>
              <ServicesPage />
              <FAQ />
              <Footer />
            </>
          }
        />

        {/* ================= CONTACT ================= */}
        <Route
          path="/contact"
          element={
            <>
              <ContactPage />
              <Footer />
            </>
          }
        />

        {/* ================= LOCATION ================= */}
        <Route
          path="/location"
          element={
            <>
              <LocationPage />
              <Footer />
            </>
          }
        />

        {/* ================= MY POS ================= */}
        <Route
          path="/products/pos"
          element={
            <>
              <POS />
              <Footer />
            </>
          }
        />

        {/* ================= BILLBAAZ ================= */}
        <Route
          path="/products/billbaaz"
          element={
            <>
              <BillBaaz />
              <Footer />
            </>
          }
        />

        {/* ================= MUNSHI ================= */}
        <Route
          path="/products/munshi"
          element={
            <>
              <Munshi />
              <Footer />
            </>
          }
        />

        {/* ================= HOTEL MANAGEMENT ================= */}
        <Route
          path="/products/hotel"
          element={
            <>
              <HotelManagement />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
