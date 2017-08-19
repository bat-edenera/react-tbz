import fetchApi from './fetchApi.js';
export function queryPageData(url){
	return (dispatch)=>{
		dispatch({
			type:'PAGE_STATE',
			payload:"loading"
		})
		setTimeout(()=>{
			dispatch({
				type:'SOURCE',
				payload:{
					source:[{"id":"135370","pid":"0","parents":"0","status":"1","title":"新建文件夹(3)","name":"新建文件夹(3)","createdTime":"2017-08-18 10:01","updatedTime":"2017-08-18 10:01","childFolderNum":"0","sortSize":0,"sortTime":"1503021706","size":"0 B","childTplNum":"0","isFolder":1},{"id":"128490","pid":"0","parents":"0","status":"1","title":"dasdasdasd","name":"dasdasdasd","createdTime":"2017-08-02 15:27","updatedTime":"2017-08-02 15:27","childFolderNum":"1","sortSize":0,"sortTime":"1501658856","size":"0 B","childTplNum":"0","isFolder":1},{"id":"123340","pid":"0","parents":"0","status":"1","title":"新建文件夹(2)","name":"新建文件夹(2)","createdTime":"2017-07-19 11:46","updatedTime":"2017-07-19 11:46","childFolderNum":"1","sortSize":0,"sortTime":"1500435980","size":"0 B","childTplNum":"0","isFolder":1},{"id":"13537","pid":"0","parents":"0","status":"1","title":"新建文件夹(3)","name":"新建文件夹(3)","createdTime":"2017-08-18 10:01","updatedTime":"2017-08-18 10:01","childFolderNum":"0","sortSize":0,"sortTime":"1503021706","size":"0 B","childTplNum":"0","isFolder":1},{"id":"12849","pid":"0","parents":"0","status":"1","title":"dasdasdasd","name":"dasdasdasd","createdTime":"2017-08-02 15:27","updatedTime":"2017-08-02 15:27","childFolderNum":"1","sortSize":0,"sortTime":"1501658856","size":"0 B","childTplNum":"0","isFolder":1},{"id":"12334","pid":"0","parents":"0","status":"1","title":"新建文件夹(2)","name":"新建文件夹(2)","createdTime":"2017-07-19 11:46","updatedTime":"2017-07-19 11:46","childFolderNum":"1","sortSize":0,"sortTime":"1500435980","size":"0 B","childTplNum":"0","isFolder":1},{"id":"12262","pid":"0","parents":"0","status":"1","title":"新建文件夹","name":"新建文件夹","createdTime":"2017-07-17 16:56","updatedTime":"2017-07-17 16:56","childFolderNum":"0","sortSize":425442,"sortTime":"1500281789","size":"415.5 K","childTplNum":"1","isFolder":1},{"id":"5228","pid":"0","parents":"0","status":"1","title":"未命名文件夹","name":"未命名文件夹","createdTime":"2017-04-24 10:57","updatedTime":"2017-07-17 11:08","childFolderNum":"3","sortSize":3099774,"sortTime":"1493002643","size":"3.0 M","childTplNum":"5","isFolder":1},{"id":"378960","uid":"17708","product":"zhanjia","title":"未命名","folder_id":"0","status":"1","thumbnail":"/uploads/template4/member/201708/18/nail/t_e4bc7fadcb590fd31b2c0ee71fc38bfb_193.png?t=1503043400","is_print":"0","edit_from_tpl":"101447","editUrl":"/diy4/378960/","tplUrl":"/diy4/378960/","author":"吴波","image":"/uploads/template4/member/201708/18/nail/t_e4bc7fadcb590fd31b2c0ee71fc38bfb_193.png?t=1503043400","width":193,"height":482,"tplSourceUrl":"/template/101447.html","createdTime":"2017-08-18 16:03","updatedTime":"2017-08-18 16:03","printUrl":"http://www.duoduoyin.com/Xzhanjia.html?printTplId=378960","canPrint":1,"allowedPdf":1,"sortSize":"503929","size":"492.1 K","sortTime":"1503043394","isFolder":0},{"id":"376160","uid":"17708","product":"","title":"未命名","folder_id":"0","status":"1","thumbnail":"/uploads/template4/member/201708/17/nail/t_8bafeec288577cefcb6fcd287e1cf7cc_193.png?t=1502961797","is_print":"0","edit_from_tpl":"0","editUrl":"/diy4/376160/","tplUrl":"/diy4/376160/","author":"吴波","image":"/uploads/template4/member/201708/17/nail/t_8bafeec288577cefcb6fcd287e1cf7cc_193.png?t=1502961797","width":193,"height":109,"tplSourceUrl":"","createdTime":"2017-08-17 16:51","updatedTime":"2017-08-17 17:23","printUrl":"http://www.duoduoyin.com/classify.html","canPrint":0,"allowedPdf":1,"sortSize":"437","size":"437 B","sortTime":"1502959904","isFolder":0},{"id":"336433","uid":"17708","product":"ppt169","title":"未命名 副本","folder_id":"0","status":"1","thumbnail":"/uploads/template4/member/201708/02/nail/t_ceab456149f0fe8de33a64f0c742a6aa_193.png?t=1501637643","is_print":"0","edit_from_tpl":"101002","editUrl":"/diy4/336433/","tplUrl":"/diy4/336433/","author":"吴波","image":"/uploads/template4/member/201708/02/nail/t_ceab456149f0fe8de33a64f0c742a6aa_193.png?t=1501637643","width":193,"height":109,"tplSourceUrl":"/template/101002.html","createdTime":"2017-08-02 09:34","updatedTime":"2017-08-02 09:34","printUrl":"http://www.duoduoyin.com/classify.html","canPrint":0,"allowedPdf":1,"sortSize":"425442","size":"415.5 K","sortTime":"1501637643","isFolder":0},{"id":"275621","uid":"17708","product":"ppt169","title":"2017-年中总结","folder_id":"0","status":"1","thumbnail":"/uploads/template4/member/201707/10/nail/t_253d6f22c80bc180114c7d500765abc4_193.png?t=1503043473","is_print":"0","edit_from_tpl":"100583","editUrl":"/diy4/275621/","tplUrl":"/diy4/275621/","author":"吴波","image":"/uploads/template4/member/201707/10/nail/t_253d6f22c80bc180114c7d500765abc4_193.png?t=1503043473","width":193,"height":145,"tplSourceUrl":"/template/100583.html","createdTime":"2017-07-10 12:33","updatedTime":"2017-08-18 16:04","printUrl":"http://www.duoduoyin.com/classify.html","canPrint":0,"allowedPdf":1,"sortSize":"37323","size":"36.4 K","sortTime":"1499661221","isFolder":0},{"id":"269172","uid":"17708","product":"ppt169","title":"未命名","folder_id":"0","status":"1","thumbnail":"/uploads/template4/member/201707/07/nail/t_608cf50b4811bbb4461dda3cb75d9cb8_193.png?t=1501641526","is_print":"0","edit_from_tpl":"101002","editUrl":"/diy4/269172/","tplUrl":"/diy4/269172/","author":"吴波","image":"/uploads/template4/member/201707/07/nail/t_608cf50b4811bbb4461dda3cb75d9cb8_193.png?t=1501641526","width":193,"height":109,"tplSourceUrl":"/template/101002.html","createdTime":"2017-07-07 16:51","updatedTime":"2017-08-02 10:38","printUrl":"http://www.duoduoyin.com/classify.html","canPrint":0,"allowedPdf":1,"sortSize":"425442","size":"415.5 K","sortTime":"1499417486","isFolder":0},{"id":"140562","uid":"17708","product":"mingpian","title":"姓名A","folder_id":"0","status":"1","thumbnail":"/uploads/template4/member/201704/27/nail/t_6ab01686c175ac1c4c20dd8d9b171982_193.png?t=1503043451","is_print":"0","edit_from_tpl":"2370","editUrl":"/diy4/140562/","tplUrl":"/diy4/140562/","author":"吴波","image":"/uploads/template4/member/201704/27/nail/t_6ab01686c175ac1c4c20dd8d9b171982_193.png?t=1503043451","width":193,"height":117,"tplSourceUrl":"/template/2370.html","createdTime":"2017-04-24 17:36","updatedTime":"2017-08-18 16:04","printUrl":"http://www.duoduoyin.com/mingpian.html?printTplId=140562","canPrint":1,"allowedPdf":1,"sortSize":"50033","size":"48.9 K","sortTime":"1493026563","isFolder":0},{"id":"140416","uid":"17708","product":"xuanchuandan","title":"asdasd","folder_id":"0","status":"1","thumbnail":"/uploads/template4/member/201704/27/nail/t_263b30b05d84d6f58dafd2193e40a0ad_193.png?t=1503043493","is_print":"0","edit_from_tpl":"1985","editUrl":"/diy4/140416/","tplUrl":"/diy4/140416/","author":"吴波","image":"/uploads/template4/member/201704/27/nail/t_263b30b05d84d6f58dafd2193e40a0ad_193.png?t=1503043493","width":193,"height":260,"tplSourceUrl":"/template/1985.html","createdTime":"2017-04-24 14:36","updatedTime":"2017-08-18 16:04","printUrl":"http://www.duoduoyin.com/goods/6.html?printTplId=140416","canPrint":1,"allowedPdf":1,"sortSize":"5236614","size":"5.0 M","sortTime":"1493015785","isFolder":0},{"id":"140380","uid":"17708","product":"mingpian","title":"姓名A","folder_id":"0","status":"1","thumbnail":"/uploads/template4/member/201704/27/nail/t_7299bd1b805872e55f6efae32a563d46_193.png?t=1503043456","is_print":"0","edit_from_tpl":"2370","editUrl":"/diy4/140380/","tplUrl":"/diy4/140380/","author":"吴波","image":"/uploads/template4/member/201704/27/nail/t_7299bd1b805872e55f6efae32a563d46_193.png?t=1503043456","width":193,"height":117,"tplSourceUrl":"/template/2370.html","createdTime":"2017-04-24 13:32","updatedTime":"2017-08-18 16:04","printUrl":"http://www.duoduoyin.com/mingpian.html?printTplId=140380","canPrint":1,"allowedPdf":1,"sortSize":"50033","size":"48.9 K","sortTime":"1493011935","isFolder":0},{"id":"140253","uid":"17708","product":"mingpian","title":"","folder_id":"0","status":"1","thumbnail":"/uploads/template4/member/201704/27/nail/t_57aee401a344abf1b3a2f85261c63244_193.png?t=1503043468","is_print":"0","edit_from_tpl":"2363","editUrl":"/diy4/140253/","tplUrl":"/diy4/140253/","author":"吴波","image":"/uploads/template4/member/201704/27/nail/t_57aee401a344abf1b3a2f85261c63244_193.png?t=1503043468","width":193,"height":117,"tplSourceUrl":"/template/2363.html","createdTime":"2017-04-24 09:54","updatedTime":"2017-08-18 16:04","printUrl":"http://www.duoduoyin.com/mingpian.html?printTplId=140253","canPrint":1,"allowedPdf":1,"sortSize":"110222","size":"107.6 K","sortTime":"1492998857","isFolder":0},{"id":"140252","uid":"17708","product":"huace","title":"asd","folder_id":"0","status":"1","thumbnail":"/uploads/template4/member/201704/27/nail/t_23cf4850e3a53a79635950eb9e54eef9_193.png?t=1503043483","is_print":"0","edit_from_tpl":"2189","editUrl":"/diy4/140252/","tplUrl":"/diy4/140252/","author":"吴波","image":"/uploads/template4/member/201704/27/nail/t_23cf4850e3a53a79635950eb9e54eef9_193.png?t=1503043483","width":193,"height":132,"tplSourceUrl":"/template/2189.html","createdTime":"2017-04-24 09:53","updatedTime":"2017-08-18 16:04","printUrl":"http://www.duoduoyin.com/huace.html?printTplId=140252","canPrint":1,"allowedPdf":1,"sortSize":"34254443","size":"32.7 M","sortTime":"1492998796","isFolder":0},{"id":"140562","uid":"17708","product":"mingpian","title":"姓名A","folder_id":"0","status":"1","thumbnail":"/uploads/template4/member/201704/27/nail/t_6ab01686c175ac1c4c20dd8d9b171982_193.png?t=1503043451","is_print":"0","edit_from_tpl":"2370","editUrl":"/diy4/140562/","tplUrl":"/diy4/140562/","author":"吴波","image":"/uploads/template4/member/201704/27/nail/t_6ab01686c175ac1c4c20dd8d9b171982_193.png?t=1503043451","width":193,"height":117,"tplSourceUrl":"/template/2370.html","createdTime":"2017-04-24 17:36","updatedTime":"2017-08-18 16:04","printUrl":"http://www.duoduoyin.com/mingpian.html?printTplId=140562","canPrint":1,"allowedPdf":1,"sortSize":"50033","size":"48.9 K","sortTime":"1493026563","isFolder":0},{"id":"140416","uid":"17708","product":"xuanchuandan","title":"asdasd","folder_id":"0","status":"1","thumbnail":"/uploads/template4/member/201704/27/nail/t_263b30b05d84d6f58dafd2193e40a0ad_193.png?t=1503043493","is_print":"0","edit_from_tpl":"1985","editUrl":"/diy4/140416/","tplUrl":"/diy4/140416/","author":"吴波","image":"/uploads/template4/member/201704/27/nail/t_263b30b05d84d6f58dafd2193e40a0ad_193.png?t=1503043493","width":193,"height":260,"tplSourceUrl":"/template/1985.html","createdTime":"2017-04-24 14:36","updatedTime":"2017-08-18 16:04","printUrl":"http://www.duoduoyin.com/goods/6.html?printTplId=140416","canPrint":1,"allowedPdf":1,"sortSize":"5236614","size":"5.0 M","sortTime":"1493015785","isFolder":0},{"id":"140380","uid":"17708","product":"mingpian","title":"姓名A","folder_id":"0","status":"1","thumbnail":"/uploads/template4/member/201704/27/nail/t_7299bd1b805872e55f6efae32a563d46_193.png?t=1503043456","is_print":"0","edit_from_tpl":"2370","editUrl":"/diy4/140380/","tplUrl":"/diy4/140380/","author":"吴波","image":"/uploads/template4/member/201704/27/nail/t_7299bd1b805872e55f6efae32a563d46_193.png?t=1503043456","width":193,"height":117,"tplSourceUrl":"/template/2370.html","createdTime":"2017-04-24 13:32","updatedTime":"2017-08-18 16:04","printUrl":"http://www.duoduoyin.com/mingpian.html?printTplId=140380","canPrint":1,"allowedPdf":1,"sortSize":"50033","size":"48.9 K","sortTime":"1493011935","isFolder":0},{"id":"140253","uid":"17708","product":"mingpian","title":"","folder_id":"0","status":"1","thumbnail":"/uploads/template4/member/201704/27/nail/t_57aee401a344abf1b3a2f85261c63244_193.png?t=1503043468","is_print":"0","edit_from_tpl":"2363","editUrl":"/diy4/140253/","tplUrl":"/diy4/140253/","author":"吴波","image":"/uploads/template4/member/201704/27/nail/t_57aee401a344abf1b3a2f85261c63244_193.png?t=1503043468","width":193,"height":117,"tplSourceUrl":"/template/2363.html","createdTime":"2017-04-24 09:54","updatedTime":"2017-08-18 16:04","printUrl":"http://www.duoduoyin.com/mingpian.html?printTplId=140253","canPrint":1,"allowedPdf":1,"sortSize":"110222","size":"107.6 K","sortTime":"1492998857","isFolder":0},{"id":"140252","uid":"17708","product":"huace","title":"asd","folder_id":"0","status":"1","thumbnail":"/uploads/template4/member/201704/27/nail/t_23cf4850e3a53a79635950eb9e54eef9_193.png?t=1503043483","is_print":"0","edit_from_tpl":"2189","editUrl":"/diy4/140252/","tplUrl":"/diy4/140252/","author":"吴波","image":"/uploads/template4/member/201704/27/nail/t_23cf4850e3a53a79635950eb9e54eef9_193.png?t=1503043483","width":193,"height":132,"tplSourceUrl":"/template/2189.html","createdTime":"2017-04-24 09:53","updatedTime":"2017-08-18 16:04","printUrl":"http://www.duoduoyin.com/huace.html?printTplId=140252","canPrint":1,"allowedPdf":1,"sortSize":"34254443","size":"32.7 M","sortTime":"1492998796","isFolder":0}],
					pageState:'loaded'
				}
			})
		},1000)
		// fetchApi.get('http://www.tbz.cn/editorApi/v1/member/info?branch=0').then((data) => {
		//   console.log('data : ', data); // 正确的返回
		// }, (err) => {
		//   console.log('error: ', err); // 错误的处理
		// });
	}
}