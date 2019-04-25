import React,{Component} from 'react';
import './index.less';
import axios from 'axios';
import {connect} from 'react-redux';
import {get_theme} from '../../../../actions/home';
import theme from './data';
let navList = [
'海岛度假','历史文化','探索冒险','美食购物',
'都市生活','邮轮度假','海外游学','亲子乐园'
]
class Nav extends Component {
    handleClick = (id)=>{
        console.log(theme)
        // axios.get('/api/nav',{
        //     params:{
        //         id:id
        //     }
        // }).then((res)=>{
        //     this.props.dispatch(get_theme(res.data))
        // })
        let arr = theme.filter((item)=>id==item.type);
        this.props.dispatch(get_theme(arr));
    }
    render(){
        return(
            <ul className="nav">
                {
                    navList.map((item,index)=>{
                        return (
                            <li onClick={()=>this.handleClick(index)} key={index}>{item}</li>
                        )
                    })
                }
            </ul>
        )
    }
}
export default connect()(Nav);