import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import profileImg from '../assets/image/profile-on.jpg';
import {
  IconPerson,
  IconMap,
  IconCall,
  IconMail,
  IconJS,
  IconTS,
  IconReact,
  IconNext,
  IconSass,
  IconHtml,
  IconCss,
  IconFigma,
  IconPhotoShop,
  IconGit,
} from './icon';
gsap.registerPlugin(ScrollTrigger, useGSAP);

function Harmony() {
  const harmonyRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const harmony = harmonyRef.current;
      const profile = profileRef.current;
      const skill = skillRef.current;

      let mm = gsap.matchMedia();
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: harmony,
          // pin: harmony,
          start: '0% 0%',
          end: '100% 100%',
          scrub: 1,
          markers: true,
        },
      });
      mm.add('all', () => {});
    },
    { scope: harmonyRef },
  );
  return (
    <div className="harmony-wrap" ref={harmonyRef}>
      <div className="harmony">
        <div className="profile">
          <div className="profile-img">
            <img src={profileImg} alt="" />
          </div>
          <p className="profile-desc">
            안녕하세요. 프론트엔드 개발자 안다혜입니다.
            <br />
            기획, 디자인과 사용자의 경험, 그리고 개발 사이의 조화를 위해
            노력합니다.
            <br />
            함께 좋은 제품을 만들고 성장할 수 있는 곳을 찾고 있습니다.
          </p>
          <button className="btn-gray">이력서 다운로드</button>
        </div>
        <div className="cont-box core">
          <div className="tit-box">
            <span className="cate">핵심 역량</span>
            <h3 className="tit">유연하게 소통하고 견고하게 개발합니다.</h3>
          </div>
          <ul className="core-list">
            <li>
              <h4 className="core-name">모던 프론트엔드 개발</h4>
              <p className="core-desc">
                React.js를 중심으로 프론트엔드 개발을 하였으며, Javascript,
                Typescript에 능숙합니다. Next.js와 더불어 React Library 활용
                경험이 있습니다. 웹사이트를 개발하고 유지보수하며, 성능을
                개선하기 위해 노력하였습니다.
              </p>
            </li>
            <li>
              <h4 className="core-name">인터랙티브 웹 구현</h4>
              <p className="core-desc">
                Javascript 및 GSAP와 같은 라이브러리를 이용하여 인터랙티브 웹
                개발 경험이 있습니다. 디자이너, 기획자와 소통하여 사용자의
                경험을 생각하며 개발하였습니다..
              </p>
            </li>
            <li>
              <h4 className="core-name">커뮤니케이션 및 협업</h4>
              <p className="core-desc">
                Github를 이용한 협업 경험이 있으며, 기획, 디자인 교육을 기반으로
                다른 직군과 원활한 커뮤니케이션이 가능합니다.
              </p>
            </li>
          </ul>
        </div>
        <div className="cont-box tech">
          <div className="tit-box">
            <span className="cate">기술 및 도구</span>
            <h3 className="tit">
              아래의 기술 및 도구를 사용한 경험이 있습니다.
            </h3>
          </div>
          <ul className="tech-list">
            <li>
              <IconJS />
              JavaScript
            </li>
            <li>
              <IconTS />
              TypeScript
            </li>
            <li>
              <IconReact />
              React
            </li>
            <li>
              <IconNext />
              NEXT.js
            </li>
            <li>
              <IconSass />
              SASS
            </li>
            <li>
              <IconHtml />
              HTML
            </li>
            <li>
              <IconCss />
              CSS
            </li>
            <li>
              <IconGit />
              GitHub
            </li>
            <li>
              <IconFigma />
              Figma
            </li>
            <li>
              <IconPhotoShop />
              PhotoShop
            </li>
          </ul>
        </div>
        <div className="cont-box project">
          <div className="tit-box">
            <span className="cate">경력 및 프로젝트</span>
            <h3 className="tit">아래의 프로젝트에 참여하였습니다.</h3>
          </div>
          <ul className="project-list">
            <li></li>
          </ul>
        </div>
        <div className="cont-box info">
          <div className="tit-box">
            <span className="cate">소개</span>
          </div>
          <ul className="info-list">
            <li>
              경력
              <ul>
                <li>
                  <span>2022.09-2025.04</span>
                  <span>(주)프리버</span>
                </li>
              </ul>
            </li>
            <li>
              교육
              <ul>
                <li>
                  <span>2022.04 - 2022.09</span>
                  <span>
                    프론트엔드개발자(UI/UX웹디자인&웹퍼블리싱) 교육 이수
                  </span>
                </li>
                <li>
                  <span>2016.03 - 2021.02</span>
                  <span>청주대학교 졸업</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/*  <div className="content profile" ref={profileRef}>
          <div className="title-box">
            <h3 className="title">Profile</h3>
          </div>
          <div className="desc-box">
            <div className="profile-img">
              <img src={profileImg} alt="" />
            </div>
            <div className="profile-box">
              <ul className="profile-info">
                <li className="strong">
                  <span className="tit">안다혜</span>
                  <span className="desc">AHN DAHYE</span>
                </li>
                <li className="strong">
                  <span className="tit">Web FrontEnd Developer</span>
                  <span className="desc">2년 7개월</span>
                </li>
                <li>
                  <ul className="info">
                    <li>
                      <IconPerson /> 1997.03.26
                    </li>
                    <li>
                      <IconMap />
                      서울특별시 은평구
                    </li>
                    <li>
                      <IconCall />
                      010-4645-0305
                    </li>
                    <li>
                      <IconMail />
                      hyeahnda@gmail.com
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content skill" ref={skillRef}>
          <div className="title-box">
            <h3 className="title">Skill</h3>
          </div>
          <div className="desc-box">
            <ul className="skill-list">
              <li>
                Used
                <ul className="skill-name">
                  <li>
                    <IconJS />
                    JavaScript
                  </li>
                  <li>
                    <IconTS />
                    TypeScript
                  </li>
                  <li>
                    <IconReact />
                    React
                  </li>
                  <li>
                    <IconNext />
                    NEXT.js
                  </li>
                  <li>
                    <IconSass />
                    SASS
                  </li>
                  <li>
                    <IconHtml />
                    HTML
                  </li>
                  <li>
                    <IconCss />
                    CSS
                  </li>
                </ul>
              </li>
              <li>
                Tool
                <ul className="skill-name">
                  <li>
                    <IconGit />
                    GitHub
                  </li>
                  <li>
                    <IconFigma />
                    Figma
                  </li>
                  <li>
                    <IconPhotoShop />
                    PhotoShop
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
}
export default Harmony;
