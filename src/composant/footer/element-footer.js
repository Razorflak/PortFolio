import './element-footer.css'
export default function ElementFooter({pageNumber, pageName, onClick, pageIsDisplay}){

	return (
		<div className={`elementFooter__layout ${pageIsDisplay?"elementFooter__isDisplay":""}`} onClick={() => onClick(pageNumber)}>
			<span className="pageName">{pageName}</span>
			<div className="stickPage"></div>
		</div>
	);
}