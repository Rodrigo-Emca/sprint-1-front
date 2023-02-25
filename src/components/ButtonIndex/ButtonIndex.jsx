import React from 'react'

export default function ButtonIndex(props) {
    // console.log(props)
    console.log(props.children)
    return (
        <button className={props.style}>{props.text || props.children}</button>
    )
}
