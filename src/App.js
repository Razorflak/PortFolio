import './App.css';
import MainPage from './pages/main-page';
import Navbar from './composant/navBar/navBar';
import { Component } from 'react';
import AboutMe from './pages/about-me';
import MonParcours from './pages/mon-parcours';
import Footer from './composant/footer/footer';
import Projects from './pages//projects/projects';


class App extends Component {
	render() {
		return (
			<div className="generalContainer" style={{height:'100vh', overflow:'hidden'}}>
				<Navbar/>
				<div id="mainContainer" className={`mainContainer`} style={{transform: `translate(0px,${this.state.page*-100}vh)`}}>
					<MainPage id="toto" isDisplay={this.state.page === 0}/>
					<Projects isDisplay={this.state.page === 1}/>
					<AboutMe isDisplay={this.state.page === 2}/>
					<MonParcours isDisplay={this.state.page === 3}/>
				</div>
				<Footer lstPage={this.lstPage} onClick={this.onClickFooterMenu}/>
			</div>
			
		  
		);
	}

	lstPage = [
		{
			pageNumber: 0,
			pageName: 'Accueil',
			isDisplay: true
		},
		{
			pageNumber: 1,
			pageName: 'Projets',
			isDisplay: true
		},
		{
			pageNumber: 2,
			pageName: 'A propos de moi',
			isDisplay: false
		},
		{
			pageNumber: 3,
			pageName: 'Mon parcours',
			isDisplay: false
		}
	]
	
	state = {
		page: -1,
		transitionEnCours: false
	}
	nbrPage = this.lstPage.length;

	

	onClickFooterMenu = page => {
		this.setState(
			(prevState, props) => (
				{
					page: page,
					transitionEnCours: true
				}
			)
		)
	}
	
	componentDidMount() {
		
		document.addEventListener('SwipeDown', (event) => {
			if(this.state.transitionEnCours || this.state.page === this.nbrPage - 1){
				return;
			}
			const currentPage = this.state.page
			this.setState(
				(prevState, props) => (
					{
						page: currentPage + 1,
						transitionEnCours: true
					}
				)
			)

		});

		document.addEventListener('SwipeUp', (event) => {
			if(this.state.transitionEnCours || this.state.page === 0){
				return;
			}		
			const currentPage = this.state.page
			this.setState(
				(prevState, props) => (
					{
						page: currentPage - 1,
						transitionEnCours: true
					}
				)
			)
		});

		document.addEventListener('transitionend', (event) => {
			if (event.target.id === 'mainContainer'){
				this.setState(
					(prevState, props) => (
						{
							transitionEnCours: false
						}
					)
				)
			}
		});
		document.addEventListener('transitionstart', (event) => {
			this.transitionEnCours = true;
		});

		setTimeout(() => {
			this.setState({page: 0})	
		}, 0);
	}

	componentDidUpdate(){
		this.lstPage.forEach(page => {
			page.isDisplay = page.pageNumber === this.state.page;
		})
	}
}

export default App;
