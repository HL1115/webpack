import React,{Component} from 'react';
import './index.less';
import axios from 'axios';
let navList = [
'海岛度假','历史文化','探索冒险','美食购物',
'都市生活','邮轮度假','海外游学','亲子乐园'
]
export default class Nav extends Component {
    handleClick = (id)=>{
        axios.get('/api/nav',{
            params:{
                id:id
            }
        }).then((res)=>{
            console.log(res)
        })
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