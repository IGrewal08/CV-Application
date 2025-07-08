import { useState } from 'react'
import General from '/src/components/General.jsx';
import Educational from '/src/components/Educational.jsx';
import Practical from '/src/components/Practical.jsx';
import './App.css'

export default function App() {
  return (
    <>
      <General />
      <h3 className='divider'><b>EDUCATION</b></h3>
      <Educational />
      <h3 className='divider'><b>PRACTICAL EXPERIENCE</b></h3>
      <Practical />
    </>
  );
}
