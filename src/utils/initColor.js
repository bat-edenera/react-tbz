import store from 'store/index.js';
const Color = require('libs/color');
//初始化系列颜色
var themeColor = store.getState().memberInfo.themeColor;
function initColor(){
	var newColor = store.getState().memberInfo.themeColor;
	if(newColor!==themeColor){
		themeColor = newColor;
		getColor(newColor)
	}
}
function getColor(_color){
	var color = Color(_color);
	var value = color.getValue(),  //明度
			// saturation = color.getSaturation(), //饱和度
			hue = color.getHue(),		//色相
			lightness = color.getLightness();  //亮度
	//主题色
	var bgColor = color.toCSS();
	var darkColor = color.darkenByRatio(.12).toCSS();
	var lightColor = color.lightenByRatio(.12).toCSS();
	//对应主题色的文字颜色
	var fontColor = (lightness>0.75&&value>.78)||(value>.9&&hue>50&&hue<180)?'#3f4652':'#fff';
	// 对应文字颜色为主题色的背景色
	var underBg = lightness<0.4&&value<0.4||lightness<0.3?'#ababab':'#333a42';
	store.dispatch({
		type:'INIT_COLOR',
		payload:{
			bgColor,
			darkColor,
			lightColor,
			fontColor,
			underBg
		}
	})
}
export default ()=>{
	getColor(themeColor);
	store.subscribe(initColor)
}

