class ScrollService{
	constructor(container, isDisplay){
		this.isDisplay = isDisplay
		this.container = container;
		this.createDeleteListener()
		//this.scrollMaxTop = true
	}

	createDeleteListener(){
		if(this.isDisplay){
			this.container.addEventListener("scroll", this.onContainerScroll);
			document.addEventListener("keydown",this.onKeyArrowDown)
			document.addEventListener('wheel', this.onWheel)
		}else{
			this.container.removeEventListener("scroll", this.onContainerScroll);
			document.removeEventListener("keydown",this.onKeyArrowDown)
			document.removeEventListener('wheel', this.onWheel)
		}
		
	}

	onContainerScroll = event => {
		
		var container = event.target;
		var scrollPercentage = 100 * container.scrollTop / (container.scrollHeight-container.clientHeight);
		this.scrollMaxBot = scrollPercentage >= 100;
		this.scrollMaxTop = scrollPercentage <= 0;
	}

	get containerHasScrollBar(){
		return this.container.scrollHeight >  this.container.clientHeight
	}

	setIsDisplay(value){
		this.isDisplay = value
		this.createDeleteListener()
	}


	onKeyArrowDown = event =>{
		if(event.key === 'ArrowUp'){
			this.onGoUp()
		}
		if(event.key === 'ArrowDown'){
			this.onGoDown()
		}
	}

	
	onWheel = event => {
		
		if(event.deltaY < 0){ //Scroll Up
			this.onGoUp()
		}
		if(event.deltaY > 0){ //ScrollDown
			this.onGoDown()
		}
	}

	onGoUp(){
		
		if(!this.isDisplay){
			return;
		}
		//console.log(this.container.id,this.isDisplay,this.containerHasScrollBar, this.scrollMaxTop)
		var swipeUp = false;
		if(this.containerHasScrollBar){
			if(this.scrollMaxTop){
				swipeUp = true
			}
		}else{
			swipeUp = true
		}
		if(swipeUp){
			var evtswipeUp = document.createEvent("Event");
			evtswipeUp.initEvent("SwipeUp");
			document.dispatchEvent(evtswipeUp)
		}
	}

	onGoDown(){
		
		if(!this.isDisplay){
			return;
		}
		//console.log(this.container.id,this.isDisplay,this.containerHasScrollBar, this.scrollMaxTop)
		var swipeDown = false;
		if(this.containerHasScrollBar){
			if(this.scrollMaxBot){
				swipeDown = true
			}
		}else{
			swipeDown = true
		}
		if(swipeDown){
			var evtswipeDown = document.createEvent("Event");
			evtswipeDown.initEvent("SwipeDown");
			document.dispatchEvent(evtswipeDown)
		}
	}

	/*
	var evtScrollMax = document.createEvent("Event");
		evtScrollMax.initEvent("ScrollMaxBot");
		document.dispatchEvent(evtScrollMax)
		*/
	
}

export default ScrollService;