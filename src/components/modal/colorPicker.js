import React,{Component} from 'react';
import {connect} from 'react-redux';
import {changeColor} from 'action/action.js';
class ColorPicker extends Component{
	constructor(props){
		super(...arguments);
		//ctx
		this.falt = null;
		this.bar = null;
		//event mark
		this.mouse = {
			type:undefined,
			x:0,
			y:0,
		}
		this.state ={
			//pos
			flatPos:[.5,.5],
			barPos:0,
			color: this.props.initColor,
			newColor:this.props.initColor,
			hex:'',
		}
		this.flatMdown = this.flatMdown.bind(this);
		this.barMdown = this.barMdown.bind(this);
		this.mouseMove = this.mouseMove.bind(this);
		this.mouseUp = this.mouseUp.bind(this);
		this.inputChange = this.inputChange.bind(this);
	}
	componentDidMount(){
		this.flat = this.refs.flat.getContext('2d'),
		this.bar = this.refs.bar.getContext('2d');
		this._initBar();
		this._analyseColor(this.props.initColor)
		document.addEventListener('mousemove',this.mouseMove,false);
		document.addEventListener('mouseup',this.mouseUp,false)
	}
	componentWillUnmount(){
		document.removeEventListener('mousemove',this.mouseMove)
		document.removeEventListener('mouseup',this.mouseUp)
	}
	flatMdown(event){
		this.mouse = {
			type:'flat',
			x:event.clientX,
			y:event.clientY
		}
		var rect = event.target.getBoundingClientRect();
		var flatPos = [];
		flatPos[0] = (event.clientX-rect.left)/160;
		flatPos[1] = (event.clientY-rect.top)/160;
		this.setState({
			flatPos
		})
		this._analysePos(flatPos,this.state.barPos)
	}
	barMdown(event){
		this.mouse = {
			type:'bar',
			x:event.clientX,
			y:event.clientY
		}
		var rect = event.target.getBoundingClientRect();
		var barPos = [];
		barPos = (event.clientY-rect.top)/160;
		this.setState({
			barPos
		})
		var hsb = [(1-barPos)*360,1,1];
		this._initFlat(this._hsb2rgb(hsb).toCss);
		this._analysePos(this.state.flatPos,barPos)
	}
	mouseMove(event){
		if(this.mouse.type!==undefined){
			var x = (event.clientX - this.mouse.x)/160;
			var y = (event.clientY - this.mouse.y)/160;
			this.mouse.x = event.clientX;
			this.mouse.y = event.clientY;
		}
		if(this.mouse.type==='flat'){
			var fx = this.state.flatPos[0]+x;
			var fy = this.state.flatPos[1]+y;
			fx<0&&(fx=0);
			fx>1&&(fx=1);
			fy<0&&(fy=0);
			fy>1&&(fy=1);
			var flatPos = [fx,fy];
			this.setState({
				flatPos
			})
			this._analysePos(flatPos,this.state.barPos)
		}
		if(this.mouse.type==="bar"){
			var barPos = this.state.barPos+y;
			barPos<0&&(barPos=0);
			barPos>1&&(barPos=1);
			var hsb = [(1-barPos)*360,1,1];
			this.setState({
				barPos
			})
			this._initFlat(this._hsb2rgb(hsb).toCss);
			this._analysePos(this.state.flatPos,barPos)
		}
	}
	mouseUp(){
		this.mouse.type=undefined;
	}
	inputChange(evt){
		var hex = evt.target.value;
		if(hex.length===0){
			hex = '#';
		}
		this.setState({hex})
	}
	render(){
		const {posX,posY} = this.props;
		const {color,newColor,hex} = this.state;
		const styles = {
			flat:{
				left:`${this.state.flatPos[0]*100}%`,
				top:`${this.state.flatPos[1]*100}%`
			},
			bar:{
				top:`${this.state.barPos*100}%`
			},
			cur:{
				backgroundColor:newColor
			},
			old:{
				backgroundColor:color
			}
		}
		return (
			<div className="color-picker" style={{left:posX,top:posY}}>
				<div className="flat">
					<canvas ref="flat" width="160" height="160" onMouseDown={this.flatMdown} />
					<span className="dot" style={styles.flat}/>
				</div>
				<div className="bar">
					<canvas ref="bar" width="20" height="160"	onMouseDown={this.barMdown} />
					<span className="focus" style={styles.bar}/>
				</div>
				<div className="info">
					<span className="cur" style={styles.cur}></span>
					<span className="old" style={styles.old}></span>
					<input type="text" value={hex} onChange={this.inputChange}/>
					<button>确定</button>
				</div>
			</div>
		)
	}
	_initBar(){
		var ctx = this.bar;
		var gradientBar = ctx.createLinearGradient(0, 0, 0, 160);
		gradientBar.addColorStop(0, '#f00');
		gradientBar.addColorStop(1 / 6, '#f0f');
		gradientBar.addColorStop(2 / 6, '#00f');
		gradientBar.addColorStop(3 / 6, '#0ff');
		gradientBar.addColorStop(4 / 6, '#0f0');
		gradientBar.addColorStop(5 / 6, '#ff0');
		gradientBar.addColorStop(1, '#f00');
		ctx.fillStyle = gradientBar;
		ctx.fillRect(0, 0, 20, 160);
	}
	_initFlat(color){
		var ctx = this.flat;
		var gradientBase = ctx.createLinearGradient(0, 0, 160, 0);
		gradientBase.addColorStop(1, color);
		gradientBase.addColorStop(0, '#fff');
		ctx.fillStyle = gradientBase;
		ctx.fillRect(0, 0, 160, 160);
		var my_gradient1 = ctx.createLinearGradient(0, 0, 0, 160);
    my_gradient1.addColorStop(0, 'rgba(0,0,0,0)');
    my_gradient1.addColorStop(1, 'rgba(0,0,0,1)');
    ctx.fillStyle = my_gradient1;
    ctx.fillRect(0, 0, 160, 160);
	}
	_analyseColor(color){
		var hsb,rgb,hex;
		if(!/^#/.test(color)){
			color = color.replace('rgb(','');
			color = color.replace(')','')
			color = `#${this._rgb2hex(color)}`;
		}
		hex = color;
		color = color.replace('#','');
		color = this._hex2rgb(color);
		hsb = color = this._rbg2hsb(color);

		this._initFlat(this._hsb2rgb([color[0],1,1]).toCss);
		var barPos = (1-color[0]/360);
		var flatPos = [color[1],1-color[2]];

		this.setState({
			barPos,
			flatPos,
			hex
		})
	}
	_analysePos(flatPos,barPos){
		var hsb = [];
		hsb[0] = (1-barPos)*360;
		hsb[1] = flatPos[0];
		hsb[2] = 1-flatPos[1];
		var rgb = this._hsb2rgb(hsb);
		var hex = this._rgb2hex(rgb.data);
		this.setState({
			hex:`#${hex}`,
			newColor:rgb.toCss
		})
		this.props.changeColor(rgb.toCss)
	}
	//颜色转换
	_rbg2hsb(rgb){
		var hsb = [];
		var rearranged = rgb.slice();        
		var maxIndex = 0,minIndex = 0;
		var tmp;        
		//将rgb的值从小到大排列，存在rearranged数组里
		for(let i=0;i<2;i++) {
				for(let j=0;j<2-i;j++)
						if(rearranged[j]>rearranged[j+1]) {
								tmp=rearranged[j+1];
								rearranged[j+1]=rearranged[j];
								rearranged[j]=tmp;
						}                
		}
		//rgb的下标分别为0、1、2，maxIndex和minIndex用于存储rgb中最大最小值的下标
		for(let i=0;i<3;i++) {
				if(rearranged[0]==rgb[i]) minIndex=i;
				if(rearranged[2]==rgb[i]) maxIndex=i;
		}
		//算出亮度
		hsb[2]=rearranged[2]/255;
		//算出饱和度
		hsb[1]=1-rearranged[0]/rearranged[2];
		//算出色相
		hsb[0]=maxIndex*120+60* (rearranged[1]/hsb[1]/rearranged[2]+(1-1/hsb[1])) *((maxIndex-minIndex+3)%3==1?1:-1);
		//防止色相为负值
		hsb[0]=(hsb[0]+360)%360;
		return hsb;
	}
	//hsb(h,s,b) h(0-359) s(0-1) b(0-1)
	_hsb2rgb(hsb){
		var rgb = []       
		for(let offset=240,i=0;i<3;i++,offset-=120) {
				var x=Math.abs((hsb[0]+offset)%360-240);
				if(x<=60){rgb[i]=255}
				else if(60<x && x<120){rgb[i]=((1-(x-60)/60)*255)}
				else{rgb[i]=0;}
		}
		//在调节饱和度s
		for(let i=0;i<3;i++)
				rgb[i]+=(255-rgb[i])*(1-hsb[1]);
		//最后调节亮度b
		for(let i=0;i<3;i++)
				rgb[i]=Math.round(rgb[i]*hsb[2]);
		return {
			toCss:`rgb(${rgb.join(',')})`,
			data:rgb
		}
	}
	_rgb2hex(rgb) {
		var aRgb = rgb instanceof Array ? rgb : (rgb.split(',') || [0, 0, 0]);
		var temp;
		return [
			(temp = Number(aRgb[0]).toString(16)).length == 1 ? ('0' + temp) : temp,
			(temp = Number(aRgb[1]).toString(16)).length == 1 ? ('0' + temp) : temp,
			(temp = Number(aRgb[2]).toString(16)).length == 1 ? ('0' + temp) : temp,
		].join('');
	}
	_hex2rgb(hex) {
		if (hex.length == 3) {
			hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
		}
		return [
			parseInt(hex[0] + hex[1], 16),
			parseInt(hex[2] + hex[3], 16),
			parseInt(hex[4] + hex[5], 16),
		]
	}
}
var mapState = (state)=>({
	posX:state.modal.colorPicker.posX,
	posY:state.modal.colorPicker.posY,
	initColor:state.memberInfo.themeColor
})
var mapProps = (dispatch)=>({
	changeColor:(color)=>{
		dispatch(changeColor({
			themeColor:color,
			isDiy:true
		}))
	}
})
export default connect(mapState,mapProps)(ColorPicker)