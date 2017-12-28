import React,{Component} from 'react';
import {connect} from 'react-redux';
class Version extends Component{
	render(){
		return(
			<div className="version-modal">
				<div className="new">
					<div className="btnteam">快速创建团队</div>
					<p>创建团队后，可以邀请成员加入</p>
					<p>共享团队的一切设计与资源</p>
				</div>
			</div>

		)
		
	}
}
export default connect()(Version)