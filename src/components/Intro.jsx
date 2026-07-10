export default function Intro() {
  return (
    <section id="intro">
      <div className="title">
        THINK is a <span className="bold">science</span>,{' '}
        <span className="bold">research</span>, and{' '}
        <span className="bold">innovation</span> program for high school
        students.
      </div>
      <div className="content">
        <div className="row">
          <div className="col" id="premise">
            <p className="intro-col-content">
              Rather than requiring students to have completed a research
              project before applying, THINK caters to students who have done
              extensive research on the <b>background</b> of a potential
              research project, but lack the resources to complete the project
              themselves and are looking for additional guidance in the early
              stages of their project. The program is organized by a group of
              undergraduates at MIT.
            </p>
            <p className="intro-col-label">the PREMISE</p>
          </div>
          <div className="col" id="prize">
            <p className="intro-col-content">
              Selected finalists have <b>weekly mentorship meetings</b> with
              THINK team members for technical guidance, helpful resources, and
              updates on the projects progress and are given up to{' '}
              <b>$1,000 in funding</b> for their project. Additionally, if
              permitting, finalists are invited to a four-day{' '}
              <b>all-expenses paid trip to MIT&apos;s campus</b>, where they
              tour labs, present their research to MIT students and faculty,
              and hang out with members of the THINK team.
            </p>
            <p className="intro-col-label">the PRIZE</p>
          </div>
        </div>
      </div>
    </section>
  )
}
