import './etape-parcours.css'

function EtapeParcours({imgPath, date, titre, texte, index,isLast}) {
	return (
		<div className={` ${+index%2 === 1?'EtapeParcours__layout__reverse':''} EtapeParcours__layout` }>
			<div className="timeline_panel">
				<div className="timeline_heading">
					<h4>{date}</h4>
					<h4 className="subheading">{titre}</h4>
				</div>
				<div className="timeline_body"><p className="text-muted">{texte}</p></div>
			</div>
			<div className="timeline_image">
				<img className="rounded_circle" src={imgPath} alt=""></img>
				<div className="timeline"/>
			</div>
			<div className="timeline_panel_spacer">
			</div>
		</div>
		
	);
}

export default EtapeParcours;