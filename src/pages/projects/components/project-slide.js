import './project-slide.css'
import gitIcon from './../../../assets/gitHub-icon.png'
import demoIcon from './../../../assets/icon/demo2.png'
const { default: IconRound } = require("../../../composant/icon-round/icon-round");


function ProjectSlide({borderImg, text, lstIcon, nbrSlide, isDisplay, demoLink, gitHubLink}){
	return (
		<div className="slide_project" style={{width:`calc(100%/${nbrSlide})`}}>
			<div className={`img_project ${isDisplay?'slide_project_isDisplay':''}`}>
				<img src={borderImg} alt=""/>
			</div>
			<div className="textProject">
				<p>{text}</p>
				
				<div className="icons_project">
					{lstIcon.map((icon) => (
						<IconRound icon={icon}/>
					))}
				</div>
				<div className="links_project">
					<a href={gitHubLink} target="_blank" rel="noreferrer">
						<img src={gitIcon} alt="Git"/>
					</a>
					<a href={demoLink} target="_blank" rel="noreferrer">
						<img src={demoIcon} alt="Demo"/>
					</a>
				</div>
			</div>
			
		</div>
	)
}

export default ProjectSlide