import React, { useState, useEffect } from 'react'
import  {Routes, Route} from "react-router-dom";
import LandingPage from "./screens/LandingPage.tsx";

function App() {

  const [data, setData] = useState([{}])
  // useEffect(() => {
  //   fetch("/members").then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       setData(data)
  //       console.log(data)
  //     }
  //   )
  // }, [])

  return (
    // <div>
    //   {(typeof data.members === 'undefined') ? (
    //     <p>Loading...</p>
    //   ) : (
    //     data.members.map((member, i) => (
    //       <p key={i}>{member}</p>
    //     ))
    //   )}
    // </div>
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/recommendations" element={<RecommendationsPage />} /> */}
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
