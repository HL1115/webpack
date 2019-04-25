import React,{Component} from 'react';
import {connect} from 'react-redux';

class Theme extends Component { 
    componentDidMount(){
        console.log(this.props);
    }
    render(){
        return(
            <ul>
                {
                    this.props.data.map((item,index)=>{
                        return (
                            <li key={index}>{item.tit}</li>
                        )
                    })
                }
            </ul>
        )
    }
}
let mapStateToProps = (state)=>{
    return{
        data:state
    }
}
export default connect(mapStateToProps)(Theme);