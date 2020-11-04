import ElementFooter from './element-footer'
import './footer.css'

export default function Footer ({lstPage, onClick}){
		return (
			<div className="footer_layout">
				{lstPage.map((page)=>(
					<ElementFooter key={page.pageNumber} pageNumber={page.pageNumber} pageName={page.pageName} pageIsDisplay={page.isDisplay} onClick={onClick}/>
				))}
			</div>
		)
}