"use client"; // Add this directive at the top

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductInfo from "./pages/ProductInfo";

export default function MyApp() {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Render nothing until the app is fully mounted
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Productinfo" element={<ProductInfo />} />
      </Routes>
    </Router>
  );
}
