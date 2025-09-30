import { ReactElement, useEffect, useRef } from 'react';
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

interface pjType {
  id: string;
  date: string;
  name: string;
  desc: string;
  link?: string;
  skill: string[];
}

const skillIconMap: Record<string, ReactElement> = {
  React: <IconReact />,
  TS: <IconTS />,
  Next: <IconNext />,
  SCSS: <IconSass />,
  JS: <IconJS />,
  HTML: <IconHtml />,
  CSS: <IconCss />,
};

const pjList: pjType[] = [
  {
    id: 'onpark',
    date: '2024.01-2025.04',
    name: '온파크',
    desc: '파크골프 앱 회원 관리, 예약 관리, 커뮤니티 관리, 매장 관리 솔루션 <br /> - REST API 연동 및 UI 구현 <br/> - 유효성 검사 후 회원가입, 게시물 관리 기능 개발 <br/>- 알리고 API를 사용하여 예약 확정 및 수정 시 카카오톡 알림 메시지 발송 기능 개발 <br/> - Custom Hook Pattern을 통한 공통 로직 분리 및 재사용 <br/> - 프로젝트 일정 관리 및 설계를 위한 회의 참여 <br/> - 기획자, 디자이너와 직접적으로 소통하여 기능 개발 및 디자인 구현 <br/> - 타사 협업 백엔드 개발자와 직간접적으로 소통하여 필요한 API 피드백 및 연동 <br/>- 앱 테스트 및 전체 QA에 참여하여 이슈해결을 위한 피드백 전달',
    skill: ['React', 'TS', 'Next', 'SCSS'],
  },
  {
    id: 'vehicle',
    date: '2024.08-2025.03',
    name: '국토부 국책과제',
    desc: '자율주행 차량 실시간 상태 및 위치 확인 솔루션 <br/> - REST API 연동 및 UI 구현 <br/> - 유효성 검사 후 게시물 관리 기능 개발 <br/> - 기상청 API를 사용하여 실시간 날씨 확인 기능 개발 <br/> - 프로젝트 일정 관리 및 설계를 위한 회의 참여',
    skill: ['React', 'TS', 'Next', 'SCSS'],
  },
  {
    id: 'mocomsys',
    date: '2024.06-2024.11',
    name: '모코엠시스',
    desc: '홈페이지 퍼블리싱 및 유지보수 <br/> - 반응형 UI 및 CSS 애니메이션 구현 <br/> - 디자이너와 직접적인 소통으로 이슈 해결',
    skill: ['JS', 'HTML', 'CSS', 'SCSS'],
    link: 'https://www.mocomsys.com/',
  },
  {
    id: 'poscoESG',
    date: '2024.05-2024.06',
    name: '포스코 ESG',
    desc: '홈페이지 퍼블리싱 <br>- 모바일 UI 및 CSS 애니메이션 구현 <br>- 디자이너와 직접적인 소통으로 이슈 최소화 및 주기적으로 피시버전을 확인 후 담당자와 커뮤니케이션',
    skill: ['JS', 'HTML', 'CSS', 'SCSS'],
    link: 'https://sustainability.posco.com/',
  },
  {
    id: 'posco',
    date: '2023.11-2023.12',
    name: '포스코 기술투자',
    desc: '홈페이지 퍼블리싱 <br> - 반응형 UI 및 CSS 애니메이션 구현',
    skill: ['JS', 'HTML', 'CSS', 'SCSS'],
    link: 'https://www.poscoinvestment.com/',
  },
  {
    id: 'hd',
    date: '2023.06-2023.12',
    name: '현대건설 E&C',
    desc: '홈페이지 퍼블리싱 및 웹 접근성 취득 <br/> - 반응형 UI 및 CSS 애니메이션 구현 <br/> - 웹접근성 취득을 위한 마크업 개발 및 웹접근성 담당자와 소통 <br/>- 기획, 디자이너 담당자와 직접적인 소통으로 이슈 최소화 <br/> - 프로젝트 일정 관리 및 이슈해결을 위한 미팅 참석',
    skill: ['JS', 'HTML', 'CSS', 'SCSS'],
    link: 'https://esg.hdec.kr/',
  },
  {
    id: 'tk',
    date: '2023.01-2024.08',
    name: '태광그룹',
    desc: '태광그룹 계열사 홈페이지 퍼블리싱 및 유지보수 <br/> - 기획 및 마케터, 개발자와 소통하여 마크업 개발  <br/> - 태광그룹, 씨네큐브, 티캐스트 등 반응형 UI 및 CSS 애니메이션 구현 <br/> - 태광그룹 뉴스레터 퍼블리싱',
    skill: ['JS', 'HTML', 'CSS', 'SCSS'],
    link: 'https://taekwanggroup.co.kr/',
  },
  {
    id: 'smrtg',
    date: '2022.12-2023.03',
    name: '서울도시철도 그린환경',
    desc: '홈페이지 퍼블리싱 및 유지보수<br/> - 반응형 UI 및 CSS 애니메이션 구현 <br/>- 기획, 개발자와 소통하여 이슈 최소화',
    skill: ['JS', 'HTML', 'CSS'],
    link: 'https://www.smrtg.co.kr/',
  },
];

function Harmony() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume_ahndahye.pdf';
    link.download = '안다혜_이력서.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="harmony-wrap">
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
          <button className="btn-gray" onClick={handleDownload}>
            이력서 다운로드
          </button>
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
                경험이 있습니다. 웹사이트를 개발하고 유지보수하며 성능을
                개선하기 위해 노력하였습니다.
              </p>
            </li>
            <li>
              <h4 className="core-name">인터랙티브 웹 구현</h4>
              <p className="core-desc">
                Javascript 및 GSAP와 같은 라이브러리를 이용하여 인터랙티브 웹
                개발 경험이 있습니다. 디자이너, 기획자와 소통하고, 사용자의
                경험을 고려하여 개발하였습니다.
              </p>
            </li>
            <li>
              <h4 className="core-name">커뮤니케이션 및 협업</h4>
              <p className="core-desc">
                Github를 이용한 협업 경험이 있으며, 기획, 디자인, 개발 교육을
                기반으로 다른 직군과 원활한 커뮤니케이션이 가능합니다.
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
            </li>
            <li>
              <IconTS />
            </li>
            <li>
              <IconReact />
            </li>
            <li>
              <IconNext />
            </li>
            <li>
              <IconSass />
            </li>
            <li>
              <IconHtml />
            </li>
            <li>
              <IconCss />
            </li>
            <li>
              <IconGit />
            </li>
            <li>
              <IconFigma />
            </li>
            <li>
              <IconPhotoShop />
            </li>
          </ul>
        </div>
        <div className="cont-box project">
          <div className="tit-box">
            <span className="cate">프로젝트</span>
            <h3 className="tit">아래의 프로젝트에 참여하였습니다.</h3>
          </div>
          <ul className="project-list">
            {pjList.map((pj, idx) => (
              <li key={pj.id}>
                <span className="date">{pj.date}</span>
                <div className="info">
                  <span className="name">{pj.name}</span>
                  <p
                    className="desc"
                    dangerouslySetInnerHTML={{ __html: pj.desc }}
                  ></p>
                  <ul className="pj-skill">
                    {pj.skill.map((pjSkill, skillIdx) => (
                      <li key={pj.id + skillIdx}>
                        {skillIconMap[pjSkill] ?? null}
                      </li>
                    ))}
                  </ul>
                  {pj.link && (
                    <a href={pj.link} target="_blank" className="pj-link">
                      대표 홈페이지 이동
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Harmony;
