import React,{Component} from 'react';
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
			return 6
		}
		if(width>900){
			return 5
		}else{
			return 4
		}
	}
	_calcUnit(width){
		this.options.column = this._calcColumn(width);
		this.options.unitW = (width - this.props.getterX*(this.options.column-1))/this.options.column;
	}
	//计算矩阵
	_calcMixtri(){
		var {width,getterX,getterY,fixHeight,source} = this.props;
		var {column,unitW} = this.options;
		//初始化矩阵
		for (var i = 0; i < column; i++) {
			this.mixtri[i] = 0;
		};
		//map计算
		source.map((item,index)=>{
			var render = {};
			render.data = item;
			render.width = unitW;
			render.height = unitW*item.height/item.width+fixHeight;

			var minIndex = this._orderMixtri()
			render.top = this.mixtri[minIndex];
			render.left = (unitW+getterX)*minIndex;
			this.renderData.push(render)
			this.mixtri[minIndex]+=render.height+getterY;
		})
		this.scrollHeight = Math.max.apply(null,this.mixtri)
		console.log(this.renderData)
	}
	_orderMixtri(){
		var min = Math.min.apply(null,this.mixtri);
		return this.mixtri.indexOf(min)
	}
	componentWillMount(){
		this._calcUnit(this.props.width)
		this._calcMixtri();
		console.log(this.options)
	}
	render(){
			return (
				<div style={{position:'relative',height:`${this.scrollHeight}px`}}>
					{this.renderData.map((source,index)=>(
						<div key={index} style={{top:source.top,left:source.left,width:source.width,height:source.height,position:'absolute',border:'1px solid #00a2eb'}}>
						</div>
					))}
				</div>
			)
	}
}