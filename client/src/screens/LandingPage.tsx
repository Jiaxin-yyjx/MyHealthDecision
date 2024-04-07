import React from "react";
import "./LandingPage.css";
import Demo from "../components/sidebar/TopBar.tsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const [patient, setPatient] = useState(false);
  const [provider, setProvider] = useState(false);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () =>{
    setIsOpen(!isOpen)
  }
  const patientClick = () => {
    setPatient(true);
    setProvider(false);
  };

  const providerClick = () => {
    setProvider(true);
    setPatient(false);
  };

  const onNextClick = () => {
    if (patient || provider) navigate("/sign-up");
  };
  return (
    <div className="App wrapper">
      {/* <SideBar toggle={toggle} isOpen={isOpen} /> */}
      <Demo />
    </div>
  );
}
