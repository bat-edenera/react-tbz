import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
class Userinfo extends Component{
	render(){
		const {uid,userName,coin} = this.props;
		return(
			<div className="user-box">
				<div className="avatar-box">
					<Link to="/member/settings/0">
						<img src={`http://www.tbz.cn/uploads/face/${uid}_180.png?_=${new Date().getTime()}`} alt=""/>
					</Link>
				</div>
				<p>{userName}</p>
				<div className="info">
					<div className="left">
						<span>{`余额：${coin}图币`}</span>
					</div>
					<div className="right">
						<Link to="/member/settings/3">充值</Link>
						<span className="split"></span>
						<span>签到领图币</span>
					</div>
				</div>
			</div>
		)
	}
}
var mapState = (state)=>({
	uid:state.loginInfo.uid,
	userName:state.memberInfo.userName,
	coin:state.memberInfo.coin,

})
export default connect(mapState)(Userinfo)