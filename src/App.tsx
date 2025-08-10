import './assets/css/styles.css';
import { useState, useEffect, useRef } from 'react';
import Visual from './component/visual';
import Harmony from './component/harmony';
import Archive from './component/archive';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function App() {
  return (
    <div className="wrap">
      <main className="container">
        <Visual />
        <Harmony />
        {/* <Archive /> */}
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
