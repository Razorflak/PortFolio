import './icon-round.css'

function IconRound ({icon, size}){
	return (
		<div className="layout__iconRound" style={{width: `${size}px`, height: `${size}px`}}>
			<img src={icon}  alt="logo"/>
		</div>
	);
}

export default IconRound;