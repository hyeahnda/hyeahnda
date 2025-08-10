import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Visual() {
  const visualRef = useRef<HTMLDivElement>(null);
  const visualBoxRef = useRef<HTMLDivElement>(null);
  const oriNameRef = useRef<HTMLLIElement>(null);
  const nickNameRef = useRef<HTMLLIElement>(null);
  const portfolioRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLSpanElement>(null);
  useGSAP(
    () => {
      const visual = visualRef.current;
      const visualBox = visualBoxRef.current;
      const ori = oriNameRef.current;
      const nick = nickNameRef.current;
      const port = portfolioRef.current;
      const desc = descRef.current;

      let mm = gsap.matchMedia();
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: visual,
          pin: visual,
          start: '0% 0%',
          end: '200% 100%',
          scrub: 1,
          // markers: true,
        },
      });
      mm.add('all', () => {
        tl.to(port, { opacity: 1, duration: 40 }, 1);
        tl.to(ori, { opacity: 0, duration: 40 }, 40);
        tl.to(nick, { opacity: 1, duration: 40 }, 80);
        tl.to(desc, { opacity: 1, duration: 40 }, 120);
        tl.to({}, { duration: 100 }, '+=0');
        tl.to(visualBox, { opacity: 0, duration: 40 }, 280);
      });
    },
    { scope: visualRef },
  );
  return (
    <div className="visual" ref={visualRef}>
      <div className="visual-box" ref={visualBoxRef}>
        <div className="visual-title">
          <ul className="name">
            <li className="ori" ref={oriNameRef}>
              AHN DA HYE
            </li>
            <li className="nick" ref={nickNameRef}>
              HYE AHN DA
            </li>
          </ul>
          <span className="type" ref={portfolioRef}>
            PORTFOLIO
          </span>
        </div>
        <span className="visual-desc" ref={descRef}>
          Web FrontEnd Developer Portfolio
        </span>
      </div>
    </div>
  );
}
export default Visual;
