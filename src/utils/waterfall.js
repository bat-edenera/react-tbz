import React,{Component} from 'react';
import WaterfallItem from './waterfallItem.js'
export default class Waterfall extends Component{
	static defaultProps = {
		getterX:20,
		getterY:20,
		fixHeight:50,
	}
	constructor(props){
		super(props);
		this.options = {
			column:6,
			unitW:0,
		};
		this.renderData = [];
		this.mixtri = [];
		this.scrollHeight = 0;
	}
	_calcColumn(width){
		if(width>1200){
			return 8
		}
		if(width>900){
			return 6
		}else{
			return 5
		}
	}
	_calcUnit(width){
		this.options.column = this._calcColumn(width);
		this.options.unitW = (width - this.props.getterX*(this.options.column-1))/this.options.column;
	}
	//数据处理（默认为保持所有列数之间的高度差）
	//计算矩阵
	_calcMixtri(width){
		var {getterX,getterY,fixHeight,source} = this.props;
		var {column,unitW} = this.options;
		this.renderData = [];
		this.mixtri = [];
		//初始化矩阵
		for (var i = 0; i < column; i++) {
			this.mixtri[i] = 0;
		};
		//map计算
		source.map((item,index)=>{
			var render = {};
			render.data = item;
			render.width = unitW.toFixed(3);
			render.height = (unitW*item.height/item.width+fixHeight);

			var minIndex = this._orderMixtri()
			render.top = this.mixtri[minIndex];
			render.left = (unitW+getterX)*minIndex;
			this.renderData.push(render)
			this.mixtri[minIndex]+=render.height+getterY;
		})
		this.scrollHeight = Math.max.apply(null,this.mixtri)
	}
	_orderMixtri(){
		var min = Math.min.apply(null,this.mixtri);
		return this.mixtri.indexOf(min)
	}
	componentWillMount(){
		console.log(this.props)
		this._calcUnit(this.props.width)
		this._calcMixtri(this.props.width);
	}
	componentWillUpdate(nextProps){
		this._calcUnit(nextProps.width)
		this._calcMixtri(nextProps.width);
	}
	render(){
			return (
				<div style={{position:'relative',height:`${this.scrollHeight}px`}}>
					{this.renderData.map((source,index)=>(
						<WaterfallItem key={index} width={source.width} height={source.height} top={source.top} left={source.left} data={source} cell={this.props.cell} delay={index*100}/>
					))}
				</div>
			)
	}
}