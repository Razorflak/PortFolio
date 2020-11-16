import './icon-round.css'

function IconRound ({icon, size}){
	return (
		<div className="layout__iconRound">
			<img src={icon}  alt="logo"/>
		</div>
	);
}

export default IconRound;