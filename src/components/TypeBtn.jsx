import React, { Component } from 'react'
import './style.css'


export default class TypeBtn extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        const style = this.props.item.style
        console.log(style);
        return (

            <div style={{}} className='divbtn'>
                {this.props.item.img != '' ? <img src={require('../img/hindiFontImage/' + this.props.item.img)} /> : this.props.item.word}


            </div>
        )
    }
}