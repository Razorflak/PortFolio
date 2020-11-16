import IconRound from '../../composant/icon-round/icon-round';
import CommonService from '../../service/common-service';
import ScrollService from '../../service/scroll-service';
import './projects.css'
import darts from './../../assets/img/Project_DartsScorer.png'
import painoparc from './../../assets/img/Project_PainOparc.png'
import fureur from './../../assets/img/Project_Fureur.png'
const { Component } = require("react");

class Projects extends Component{

	

	render() {
		return (
			<div id="layout__projects" className="layout__projects page__layout">
				<button onClick={this.onClickLeft}>Left</button>
				<div className="projects__fixed_slide">
					<div className="slider" style={{
						minWidth: `calc(100%*${this.nbrSlide})`,
						transform: `translate(${-100*this.state.currentSlide/this.nbrSlide}%)`}}>
						{/* Slide DartsScorer START */}
						<div className="slide_project" style={{width:`calc(100%/${this.nbrSlide})`}}>
							<img src={darts} alt=""/>
							<div className="textProject">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit eu quam sed rhoncus. Integer pellentesque vel turpis quis porta. Fusce finibus vitae mi vel auctor. Cras eget risus auctor diam euismod maximus ac ac leo. Praesent finibus libero ac augue placerat, tincidunt eleifend purus dignissim. Cras vel mollis lectus. Cras gravida, ligula id finibus pretium, dui dolor semper justo, in finibus nisi nisl quis sem. Etiam tempus, nibh non imperdiet molestie, augue eros malesuada nibh, sed viverra elit arcu ut nisi. Ut eu sollicitudin nulla. Sed id blandit diam.
								</p>
								<p>
									Praesent et justo ante. In dictum velit rutrum, molestie lorem sit amet, hendrerit libero. Sed id dui ut massa gravida tristique id et nisl. Donec sed massa mattis, ultrices velit nec, auctor mauris. Quisque ac erat lorem. Sed aliquet nunc vel purus tempus aliquam. Donec scelerisque faucibus metus. Donec eu eleifend arcu. In tempor non ante quis hendrerit. Duis egestas laoreet convallis. Nulla sem eros, semper in turpis eget, laoreet tincidunt metus. Aenean ullamcorper sit amet augue et mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit volutpat quam dapibus malesuada. In hac habitasse platea dictumst. Integer aliquet in tortor non accumsan.
								</p>
								<div className="icons_project">
									<IconRound icon={CommonService.icons.html} size={50}/>
									<IconRound icon={CommonService.icons.css} size={50}/>
									<IconRound icon={CommonService.icons.js} size={50}/>
									<IconRound icon={CommonService.icons.node} size={50}/>
									<IconRound icon={CommonService.icons.express} size={50}/>
									<IconRound icon={CommonService.icons.socketio} size={50}/>
									<IconRound icon={CommonService.icons.nginx} size={50}/>
								</div>
								
							</div>
						</div>
						{/* Slide DartsScorer END */}
						{/* Slide PainOParc START */}
						<div className="slide_project" style={{width:`calc(100%/${this.nbrSlide})`}}>
							<img src={painoparc} alt=""/>
							<div className="textProject">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit eu quam sed rhoncus. Integer pellentesque vel turpis quis porta. Fusce finibus vitae mi vel auctor. Cras eget risus auctor diam euismod maximus ac ac leo. Praesent finibus libero ac augue placerat, tincidunt eleifend purus dignissim. Cras vel mollis lectus. Cras gravida, ligula id finibus pretium, dui dolor semper justo, in finibus nisi nisl quis sem. Etiam tempus, nibh non imperdiet molestie, augue eros malesuada nibh, sed viverra elit arcu ut nisi. Ut eu sollicitudin nulla. Sed id blandit diam.
								</p>
								<p>
									Praesent et justo ante. In dictum velit rutrum, molestie lorem sit amet, hendrerit libero. Sed id dui ut massa gravida tristique id et nisl. Donec sed massa mattis, ultrices velit nec, auctor mauris. Quisque ac erat lorem. Sed aliquet nunc vel purus tempus aliquam. Donec scelerisque faucibus metus. Donec eu eleifend arcu. In tempor non ante quis hendrerit. Duis egestas laoreet convallis. Nulla sem eros, semper in turpis eget, laoreet tincidunt metus. Aenean ullamcorper sit amet augue et mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit volutpat quam dapibus malesuada. In hac habitasse platea dictumst. Integer aliquet in tortor non accumsan.
								</p>
								<div className="icons_project">
									<IconRound icon={CommonService.icons.html} size={50}/>
									<IconRound icon={CommonService.icons.css} size={50}/>
									<IconRound icon={CommonService.icons.angular} size={50}/>
									<IconRound icon={CommonService.icons.node} size={50}/>
									<IconRound icon={CommonService.icons.express} size={50}/>
									<IconRound icon={CommonService.icons.socketio} size={50}/>
									<IconRound icon={CommonService.icons.sequelize} size={50}/>
									<IconRound icon={CommonService.icons.nginx} size={50}/>
									<IconRound icon={CommonService.icons.postgres} size={50}/>
								</div>
								
							</div>
						</div>
						{/* Slide PainOParc END */}
						{/* Slide OverlayFureur START */}
						<div className="slide_project" style={{width:`calc(100%/${this.nbrSlide})`}}>
							<img src={fureur} alt=""/>
							<div className="textProject">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit eu quam sed rhoncus. Integer pellentesque vel turpis quis porta. Fusce finibus vitae mi vel auctor. Cras eget risus auctor diam euismod maximus ac ac leo. Praesent finibus libero ac augue placerat, tincidunt eleifend purus dignissim. Cras vel mollis lectus. Cras gravida, ligula id finibus pretium, dui dolor semper justo, in finibus nisi nisl quis sem. Etiam tempus, nibh non imperdiet molestie, augue eros malesuada nibh, sed viverra elit arcu ut nisi. Ut eu sollicitudin nulla. Sed id blandit diam.
								</p>
								<p>
									Praesent et justo ante. In dictum velit rutrum, molestie lorem sit amet, hendrerit libero. Sed id dui ut massa gravida tristique id et nisl. Donec sed massa mattis, ultrices velit nec, auctor mauris. Quisque ac erat lorem. Sed aliquet nunc vel purus tempus aliquam. Donec scelerisque faucibus metus. Donec eu eleifend arcu. In tempor non ante quis hendrerit. Duis egestas laoreet convallis. Nulla sem eros, semper in turpis eget, laoreet tincidunt metus. Aenean ullamcorper sit amet augue et mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit volutpat quam dapibus malesuada. In hac habitasse platea dictumst. Integer aliquet in tortor non accumsan.
								</p>
								<div className="icons_project">
									<IconRound icon={CommonService.icons.html} size={50}/>
									<IconRound icon={CommonService.icons.css} size={50}/>
									<IconRound icon={CommonService.icons.js} size={50}/>
									<IconRound icon={CommonService.icons.node} size={50}/>
									<IconRound icon={CommonService.icons.express} size={50}/>
								</div>
								
							</div>
						</div>
						{/* Slide OverlayFureur END */}
					</div>
					
				</div>
				<button onClick={this.onClickRight}>Right</button>
			</div>
		)
		
	}

	state = {
		currentSlide: 0,
		transitionEnCours: false
	}
	nbrSlide = 3;
	componentDidMount() {
		this.scrollService = new ScrollService(document.getElementById('layout__projects'), this.props.isDisplay) 
	}

	componentDidUpdate(){
		this.scrollService.setIsDisplay(this.props.isDisplay)
	}
	
	

	onClickLeft = e =>{
		const currentSlide = this.state.currentSlide
		if(this.state.currentSlide > 0){
			this.setState(
				(prevState, props) => (
					{
						currentSlide: currentSlide - 1,
						transitionEnCours: true
					}
				)
			)
		}
	}

	onClickRight = e => {
		const currentSlide = this.state.currentSlide
		console.log()
		if(this.state.currentSlide < this.nbrSlide - 1){
			this.setState(
				(prevState, props) => (
					{
						currentSlide: currentSlide + 1,
						transitionEnCours: true
					}
				)
			)
		}
	}
	
}

export default Projects;