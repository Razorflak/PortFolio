import './project-slide.css'
const { default: IconRound } = require("../../../composant/icon-round/icon-round");


function ProjectSlide({borderImg, text, lstIcon, nbrSlide}){
	return (
		<div className="slide_project" style={{width:`calc(100%/${nbrSlide})`}}>
			<img src={borderImg} alt=""/>
			<div className="textProject">
				<p>{text}</p>
				
				<div className="icons_project">
					{lstIcon.map((icon) => (
						<IconRound icon={icon}/>
					))}
				</div>
				
			</div>
		</div>
	)
}

export default ProjectSlide