function EtapeParcours({imgPath, date, titre, texte}) {
	return (
		<div>
			<div className="timeline-image">
				<img className="rounded-circle img-fluid" src={imgPath} alt=""></img>
			</div>
			<div className="timeline-panel">
				<div className="timeline-heading">
					<h4>{date}</h4>
					<h4 className="subheading">{titre}</h4>
				</div>
				<div className="timeline-body"><p className="text-muted">{texte}</p></div>
			</div>
		</div>
		
	);
}

export default EtapeParcours;