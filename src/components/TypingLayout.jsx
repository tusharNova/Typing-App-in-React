import React, { Component, useState } from 'react'

export default class TypingLayout extends Component {
        constructor(props){
            super(props)
        }

        

    render() {
        const text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia maiores nihil quasi minima sit alias natus assumenda libero, neque rem sapiente, quaerat necessitatibus! Aliquid optio molestias, obcaecati commodi dolore non?"
        const len = text.length
        return (
            <>
            <div className="wordlayout">
                <p>{text}{len}</p>
            </div>
             <div className="typinglayout" >
                <div contentEditable='true'  onInput={e => console.log('Text inside div', e.currentTarget.textContent)}></div>
            </div>

            </>
           
        )
    }
}
