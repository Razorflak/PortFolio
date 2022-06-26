import './main-page.css';
import React, {  Component } from 'react';
import moi from '../assets/moi.png'
import stars from '../assets/stars.png';
import ScrollService from '../service/scroll-service';
import CommonService from '../service/common-service';

class MainPage extends Component {
	render (){
		return (
		<div id="layout__main" className='mainDiv'>
			<div  className="layout page__layout">
				<img id="starsBg" className="starsBg" src={stars} alt="stars"/>
				<div className={`personnalInfo ${!this.props.isDisplay? "hiddenLeft" : ""}`}>
					<h1>Tanguy <br/>Julien</h1>
					<span className="sepRedInfo" style={{marginRight: '90px'}}></span>
					<span className="sepRedInfo"></span>
					<span className="metier">Développeur Full Stack</span>
				</div>
				<div className={`myPicParallax`}>
					<div className={`${!this.props.isDisplay? "hiddenRight" : ""}`} style={{transition: 'translate 2s ease-in-out', zIndex: 10}}>
						<img id="l1" className={`moi`} src={moi} alt="c'est moi!"/>
					</div>
					<div id="l2" className={`l2 ${!this.props.isDisplay? "hiddenRight" : ""}`}>
						<span style={{color:'cyan'}}>console</span>
						<span style={{color:'wheat'}}>.log</span>
						<span style={{color:'yellow'}}>(</span>
						<span style={{color:'orange'}}>' Hello World ! '</span>
						<span style={{color:'yellow'}}>)</span>
						<span style={{color:'white'}}>;</span>
						
					</div>
					<div id="l3" className="l3"/>
					<div id="l4" className="l4"/>
				</div>
				
			</div>
			<span className="scrollDowwn">Scroll down_↓</span>
		</div>	
		
		)
	};
	scrollService
	componentDidMount() {
		this.scrollService = new ScrollService(document.getElementById('layout__main'), this.props.isDisplay) 
		var parallaxBox = document.getElementById ( 'layout__main' );
		const c1left = document.getElementById ( 'l1' ).offsetLeft,
		c1top = document.getElementById ( 'l1' ).offsetTop
		if(!CommonService.isMobilDevice()){
			window.onmousemove = ( event ) => {
				event = event || window.event;
				const x = event.clientX - parallaxBox.offsetLeft
				const y = event.clientY - parallaxBox.offsetTop;
				
				this.mouseParallax ( 'starsBg', x, y,  100 );
				this.mouseParallax ( 'l1', x, y,  -50 );
				this.mouseParallax ( 'l2', x, y,  -10 );
				this.mouseParallax ( 'l3', x, y,  -20 );
				this.mouseParallax ( 'l4', x, y,  -30 );
	
			}
		}else {
			//Si on est sur mobil on fait un random pour avoir un mouvement constant
		
		}
	};

	componentDidUpdate(){
		this.scrollService.setIsDisplay(this.props.isDisplay)
	}

	
	mouseParallax ( id, mouseX, mouseY, speed ) {
		
		var obj = document.getElementById ( id );
		var distx = mouseX - obj.offsetWidth;
		var disty = mouseY - obj.offsetHeight;
		var translate = distx / speed + 'px, ' + disty / speed + 'px'
		obj.style.transform  = `translate(${translate})`;
	};

}





export default MainPage;