import store from 'store/index.js';

var tbzColor ={};
function initColor(){
	const Color = require('libs/color');
	var themeColor = store.getState().themeColor;
	var color = Color(themeColor);
	var value = color.getValue(),  //明度
			saturation = color.getSaturation(), //饱和度
			hue = color.getHue(),		//色相
			lightness = color.getLightness();  //亮度
	tbzColor.bgColor = color.toCSS();
	tbzColor.bgDark = color.darkenByRatio(.5).toCSS();
	tbzColor.fontColor = (lightness>0.75&&value>.78)||(value>.9&&hue>50&&hue<180)?'#3f4652':'#fff';
}
initColor();
store.subscribe(initColor)
export default tbzColor

