import './navBar.css'
import linkedinIcone from '../../assets/linkedin-icon.png'
import gitHubIcon from '../../assets/gitHub-icon.png'
function NavBar(){
	return (
		<nav>
			<div className="flexNavBar">
				<div className="myName">
					<span>Tanguy Julien</span>
				</div>
				<div className="menuAction">
					<a href="https://github.com/Razorflak?tab=repositories" target="_blank" rel="noreferrer">
						<img src={gitHubIcon} alt="github" style={{height: '32px', marginRight: '32px'}}/>
					</a>
					<a href="https://www.linkedin.com/in/julien-tanguy-dev/" target="_blank" rel="noreferrer">
						<img src={linkedinIcone} alt="linkedin" style={{height: '32px', marginRight: '32px'}} />
					</a>
					{/*<div className="btnMenu">
						<div className="iconMenu"></div>
						<div className="iconMenuSpacer"></div>
						<div className="iconMenu"></div>
					</div>*/}
				</div>
			</div>
		</nav>
	);
}

export default NavBar;