import logo from './logo.svg';
import './App.css';
import MainPage from './pages/main-page';
import PainOParcPage from './pages/painOparc-page';
import Navbar from './composant/navBar/navBar';
import { Component } from 'react';


class App extends Component {
	
	render() {
		return (
			<div>
				<Navbar/>
				<div className={`mainContainer ${'page' + this.state.page}`}>
					<MainPage isDisplay={this.state.page === 0}/>
					<PainOParcPage isDisplay={this.state.page === 1}/>
				</div>
			</div>
			
		  
		);
	}
	
	state = {
		page: -1	
	}
	nbrPage = 2;
	transitionEnCours = false;
	componentWillMount() {
		
		document.addEventListener("keydown",(event) => {
			const currentPage = this.state.page
			var change = false;
			if(event.key === 'ArrowUp' &&  currentPage > 0){
				this.setState({page: currentPage - 1})
				change = true
			}
			if(event.key === 'ArrowDown' &&  currentPage < this.nbrPage - 1){
				this.setState({page: currentPage + 1})
				change = true
			}
			if(change){
				this.onPageChange(currentPage);
			}

		})

		document.addEventListener('wheel', (event) =>  {
			const currentPage = this.state.page
			var change = false;
			if(event.deltaY < 0 &&  currentPage > 0){
				this.setState({page: currentPage - 1})
				change = true
			}
			if(event.deltaY > 0 &&  currentPage < this.nbrPage - 1){
				this.setState({page: currentPage + 1})
				change = true
			}
			if(change){
				this.onPageChange(currentPage);
			}
			
		})

		document.addEventListener('transitionend', () => {
			this.transitionEnCours = false;
		});
		document.addEventListener('transitionstart', () => {
			this.transitionEnCours = true;
		});
	}

	onPageChange(currentPage){

	}

	componentDidMount(){
		setTimeout(() => {
			this.setState({page: 0})	
		}, 0);
	}
	componentWillUnmount() {
		//document.removeEventListener("keydown");
	}
	
}

export default App;
