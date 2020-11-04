import './mon-parcours.css';

import { Component } from 'react';
import EtapeParcours from '../composant/parcours/etape-parcours';
import operisLogo from '../assets/operis-logo.png'
import ScrollService from '../service/scroll-service';

class MonParcours extends Component {

	render() {
		return (
			<div id="monParcours__layout" className="monParcours__layout page__layout">
				<div id="lstEtape" className="lstEtape">
					<EtapeParcours index="0" imgPath={operisLogo} date="2013-2020" titre="Operis" texte="Une Bonne entreprise de merde qui fait plein de trucs qui ne servent à rien! duofhq osmfmoqsdfnmq sdfndomsfjqs ifbmqsdlmfj qsdmiofj qsdjfiomqsd fiomqsdh fioqsdj gqsiodmgh iqsdfh ioqsdjf hqsiofj jqspdifh iosmqfj siqdofhi qsd fjhioqsdfj qsdiof qsipdf hqsiodf jqsiomdf qsdif hiosq"/>
					<EtapeParcours index="1" imgPath={operisLogo} date="2013-2020" titre="Operis" texte="Une Bonne entreprise de merde qui fait plein de trucs qui ne servent à rien! duofhq osmfmoqsdfnmq sdfndomsfjqs ifbmqsdlmfj qsdmiofj qsdjfiomqsd fiomqsdh fioqsdj gqsiodmgh iqsdfh ioqsdjf hqsiofj jqspdifh iosmqfj siqdofhi qsd fjhioqsdfj qsdiof qsipdf hqsiodf jqsiomdf qsdif hiosq"/>
					<EtapeParcours index="2" imgPath={operisLogo} date="2013-2020" titre="Operis" texte="Une Bonne entreprise de merde qui fait plein de trucs qui ne servent à rien! duofhq osmfmoqsdfnmq sdfndomsfjqs ifbmqsdlmfj qsdmiofj qsdjfiomqsd fiomqsdh fioqsdj gqsiodmgh iqsdfh ioqsdjf hqsiofj jqspdifh iosmqfj siqdofhi qsd fjhioqsdfj qsdiof qsipdf hqsiodf jqsiomdf qsdif hiosq"/>
					<EtapeParcours index="3" imgPath={operisLogo} date="2013-2020" titre="Operis" texte="Une Bonne entreprise de merde qui fait plein de trucs qui ne servent à rien! duofhq osmfmoqsdfnmq sdfndomsfjqs ifbmqsdlmfj qsdmiofj qsdjfiomqsd fiomqsdh fioqsdj gqsiodmgh iqsdfh ioqsdjf hqsiofj jqspdifh iosmqfj siqdofhi qsd fjhioqsdfj qsdiof qsipdf hqsiodf jqsiomdf qsdif hiosq"/>
					<EtapeParcours index="4" imgPath={operisLogo} date="2013-2020" titre="Operis" texte="Une Bonne entreprise de merde qui fait plein de trucs qui ne servent à rien! duofhq osmfmoqsdfnmq sdfndomsfjqs ifbmqsdlmfj qsdmiofj qsdjfiomqsd fiomqsdh fioqsdj gqsiodmgh iqsdfh ioqsdjf hqsiofj jqspdifh iosmqfj siqdofhi qsd fjhioqsdfj qsdiof qsipdf hqsiodf jqsiomdf qsdif hiosq"/>
					<EtapeParcours index="5" imgPath={operisLogo} date="2013-2020" titre="Operis" texte="Une Bonne entreprise de merde qui fait plein de trucs qui ne servent à rien! duofhq osmfmoqsdfnmq sdfndomsfjqs ifbmqsdlmfj qsdmiofj qsdjfiomqsd fiomqsdh fioqsdj gqsiodmgh iqsdfh ioqsdjf hqsiofj jqspdifh iosmqfj siqdofhi qsd fjhioqsdfj qsdiof qsipdf hqsiodf jqsiomdf qsdif hiosq"/>
				</div>
			</div>
		);
	}
	scrollService;
	componentDidMount(){
		this.scrollService = new ScrollService(document.getElementById('monParcours__layout'), this.props.isDisplay);
	}

	componentDidUpdate(){
		this.scrollService.setIsDisplay(this.props.isDisplay)
	}

	ScrollBottomMaxBottom(){
		console.log('bottom')
	}

	ScrollBottomMaxTop(){
		console.log('top')
	}
	
}

export default MonParcours;