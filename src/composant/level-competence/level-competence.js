import './level-competence.css';

/**
 * 
 * @param {*} param0 
 */
function LevelCompetence ({niveau, libelle, pathLogo, isDisplay, position}){
	return (
		<div className="levelCompetence__layout">
			<div className="logo">
				<img src={pathLogo} alt="logo"/>
			</div>
			<div className="level">
				<div className="libelle">
					<span>{libelle}</span>
				</div>
				<div className="graph">
					<div className="level_graph" style={{
						width: isDisplay?`${100*niveau/100}%`: '0px',
						transitionDelay: isDisplay?`${0.5 + +position/3}s`:'0s'}}></div>
				</div>
			</div>
		</div>
	);
}

export default LevelCompetence;