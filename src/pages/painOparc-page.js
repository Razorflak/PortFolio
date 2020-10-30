import LevelCompetence from '../composant/level-competence/level-competence';
import './painOparc-page.css';
import jsIcon from '../assets/js-icon.png'
import { Component } from 'react';

class PainOParcPage extends Component {

	render() {
		return (
			<div className="layoutPainOParc">
				<h1>PAGE 2</h1>
				<br></br>
				<div className="competences">
					<LevelCompetence key="javaScript" niveau='90' libelle='javaScript' pathLogo={jsIcon} isDisplay={this.props.isDisplay} position='1'/>
					<LevelCompetence key="1" niveau='70' libelle='javaScript' pathLogo={jsIcon} isDisplay={this.props.isDisplay} position='2'/>
					<LevelCompetence key="2" niveau='50' libelle='javaScript' pathLogo={jsIcon} isDisplay={this.props.isDisplay} position='3'/>
					<LevelCompetence key="3" niveau='50' libelle='javaScript' pathLogo={jsIcon} isDisplay={this.props.isDisplay} position='4'/>
					<LevelCompetence key="4" niveau='80' libelle='javaScript' pathLogo={jsIcon} isDisplay={this.props.isDisplay} position='5'/>
					<LevelCompetence key="5" niveau='40' libelle='javaScript' pathLogo={jsIcon} isDisplay={this.props.isDisplay} position='6'/>
				</div>
				
			</div>
		);
	}
	
}

export default PainOParcPage;