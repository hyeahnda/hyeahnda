const workList = [
  {
    title: '온파크',
    date: '2024.10 ~ 2025.04',
    skill: ['Next.js', 'React', 'Typescript', 'SCSS'],
  },
  {
    title: '자율주행 관제시스템',
    date: '2024.08 ~ 2025.04',
    skill: ['Next.js', 'React', 'Typescript', 'SCSS'],
  },
  {
    title: '모코엠시스',
    date: '2024.09 ~ 2024.12',
    skill: ['JSP', 'Javascript', 'HTML', 'SCSS'],
  },
  {
    title: '포스코 ESG',
    date: '2024.05 ~ 2024.06',
    skill: ['Javascript', 'HTML', 'SCSS'],
  },
  {
    title: '파크로',
    date: '2024.01 ~ 2025.04',
    skill: ['Next.js', 'React', 'Typescript', 'Javascript', 'HTML', 'SCSS'],
  },
  {
    title: '포스코 기술투자',
    date: '2023.11 ~ 2023.12',
    skill: ['Javascript', 'HTML', 'SCSS'],
  },
  {
    title: '현대건설 E&C',
    date: '2023.06 ~ 2023.12',
    skill: ['Javascript', 'HTML', 'SCSS'],
  },
  {
    title: '태광그룹',
    date: '2023.01 ~ 2024.08',
    skill: ['Javascript', 'HTML', 'SCSS'],
  },
  {
    title: '서울도시철도 GEN',
    date: '2022.12 ~ 2025.04',
    skill: ['Javascript', 'HTML', 'SCSS'],
  },
];

function Archive() {
  return (
    <div className="archive-wrap">
      <div className="content archive">
        <h3 className="title">Project</h3>
        <ul className="project-list">
          {workList.map((work, index) => (
            <li key={'work' + index}>
              <div className="project-tit">
                <h4 className="project-name">{work.title}</h4>
                <span className="project-date">{work.date}</span>
                <ul className="project-skill">
                  {work.skill.map((workSkill, skillIndex) => (
                    <li key={index + skillIndex}>{workSkill}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Archive;
