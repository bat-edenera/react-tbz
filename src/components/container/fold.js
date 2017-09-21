import React,{Component} from 'react';
import colorWrap from 'components/HOC/colorWrap.js'
import Animate from 'rc-animate';
import {animation} from 'components/animation.js';
import {connect} from 'react-redux';
class Fold extends Component{
	constructor(){
		super();
		this.state = {
			show:false,
		}
	}
	getFoldNail(isfull){
		if(isfull){
			return {__html:`<svg class="svg1"  x="0px" y="0px"width="100%" viewBox="0 0 148.976 113.947" enable-background="new 0 0 148.976 113.947"xml:space="preserve"><path fill="${this.props.color.bgColor}" d="M148.976,17.373c0-3.625-2.939-6.564-6.564-6.564H54.04c0,0-4.489-8.163-6.152-9.586C46.88,0.36,45.741,0,43.714,0C40.626,0,6.565,0,6.565,0C2.939,0,0,2.939,0,6.565v107.382h148.976V17.373z"/></svg>`}
		}else{
			return {__html:`<svg version="1.1" class="svg2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" viewBox="0 0 148.976 113.947" enable-background="new 0 0 148.976 113.947"xml:space="preserve"><path fill="${this.props.color.bgColor}" d="M149.548,17.759c0-3.625-2.939-6.564-6.564-6.564H54.612c0,0-4.489-8.163-6.152-9.586c-1.008-0.862-2.146-1.222-4.174-1.222c-3.088,0-37.148,0-37.148,0c-3.626,0-6.565,2.939-6.565,6.565v107.382h148.976V17.759z"/><g><rect x="8.334" y="19.833" fill="#E5E5E4" width="132" height="49.75"/><rect x="8.334" y="25.333" fill="#FFFFFF" width="132" height="49.75"/></g><path fill="${this.props.color.darkColor}" d="M149.548,34.747c0-3.626-2.939-6.565-6.564-6.565c0,0-34.061,0-37.149,0c-2.028,0-3.166,0.36-4.174,1.222c-1.663,1.423-6.151,9.586-6.151,9.586H7.138c-3.626,0-6.565,2.939-6.565,6.565v68.78h148.976V34.747z"/></svg>`}
		}
	}
	componentDidMount(){
		this.setState({show:true})
	}
	render(){
		const {title,childFolderNum,childTplNum} = this.props.data.data;
		const _nailHtml = this.getFoldNail(childFolderNum+childTplNum=='00')
		
		const _html = (<div className="fold" style={{animationDelay:`${this.props.delay}ms`,}}>
			<a href="#" dangerouslySetInnerHTML={_nailHtml}/>
			<div className="figration">{title||'未命名文件夹'}</div>
		</div>)
		return (<Animate component="" animation={{enter:animation.zoomIn}} transitionAppear={true}>
					{this.state.show?_html:null}
				</Animate>
		)
	}
}
export default colorWrap(connect()(Fold));