import store from 'store/index.js';

const Color = require('libs/color');
var tbzColor ={};
var themeColor = store.getState().memberInfo.themeColor;
function initColor(){
	var newColor = store.getState().memberInfo.themeColor;
	if(newColor!==themeColor){
		themeColor = newColor;
		getColor(newColor)
	}
}
function getColor(_color){
	console.log('变色了')
	var color = Color(_color);
	var value = color.getValue(),  //明度
			// saturation = color.getSaturation(), //饱和度
			hue = color.getHue(),		//色相
			lightness = color.getLightness();  //亮度
	//主题色
	tbzColor.bgColor = color.toCSS();
	tbzColor.bgDark = color.darkenByRatio(.5).toCSS();
	tbzColor.bgLignt = color.lightenByRatio(.12).toCSS();
	//对应主题色的文字颜色
	tbzColor.fontColor = (lightness>0.75&&value>.78)||(value>.9&&hue>50&&hue<180)?'#3f4652':'#fff';
	// 对应文字颜色为主题色的背景色
	tbzColor.underBg = lightness<0.4&&value<0.4||lightness<0.3?'#ababab':'#333a42';
	//css
	tbzColor.styles = {
		color:{
			color:tbzColor.fontColor
		},
		themeColor:{
			color:tbzColor.bgColor
		},
		bg:{
			backgroundColor:tbzColor.bgColor
		},
		hoverbg:{
			backgroundColor:tbzColor.bgDark
		},
		init:{
			color:tbzColor.fontColor,
			backgroundColor:tbzColor.bgColor
		},
		activeLi:{
			color:tbzColor.bgColor,
			backgroundColor:tbzColor.underBg,
			borderColor:tbzColor.bgColor
		}
	}
}
getColor(themeColor);
store.subscribe(initColor)
export default tbzColor

