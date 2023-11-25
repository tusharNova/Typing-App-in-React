import React, { Component } from 'react'
import './style.css'


export default class TypeBtn extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        // const style = this.props.item.style
        // console.log(style);
        return (

            <div className='divbtn' style={{width:this.props.item.width,height:this.props.item.height}}>
                {this.props.item.img != '' ? <img src={require('../img/hindiFontImage/' + this.props.item.img)} /> : <p className='btnText'>{this.props.item.word}</p>}


            </div>
        )
    }
}