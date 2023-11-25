// import userEvent from '@testing-library/user-event'
import React, { useState, useRef, } from 'react'
import { useEffect } from 'react';
export default function TypingLayout() {

    const focusRef = useRef();
    useEffect(() => {
        focusRef.current.focus()
    })

    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. At fugit illo veritatis ex cupiditate temporibus voluptates repudiandae aliquid quod. Iusto modi eius aspernatur nulla cum amet sed fuga non assumenda."
    const textlen = text.length
    const [count, setcount] = useState(0)
    var befourstr = "", currstr = "", afterstr = ""
    return (
        <>
            <div className="wordlayout">
                {
                    (() => {
                        if (count === 0) {
                            befourstr = "";
                            currstr = text[count];
                            afterstr = text.substring(count + 1, textlen);
                        } else {
                            befourstr = text.substring(0, count)
                            currstr = text[count];
                            afterstr = text.substring(count + 1, textlen);
                        }
                        return "";
                    })()
                }
                {befourstr}<span style={{ backgroundColor: 'lightblue' }}>{currstr}</span>{afterstr}
            </div>
            <div className="typinglayout" contentEditable='true' ref={focusRef} onInput={() => setcount(count + 1)} style={{ padding: "5px" }}>

            </div>
            {/* {count} */}
        </>

    )
}
