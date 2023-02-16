/* external library imports */
import React, { useState, useEffect, useRef } from 'react'
import TypeWriter from 'react-typewriter'
/* internal css import */
import TitlePageCSS from './../assets/styled/title-page-css'
/* create instance of TitlePageCSS */
const CSS = TitlePageCSS()

/* component */
const TitlePage = () => {
    const [x, set_x] = useState(1)
    const [y, set_y] = useState(0)
    const timeoutRef = useRef(null)

    const text = [
        'Welcome to Cyberwar.',
        'Humans.',
        'Androids.',
        'Cyborgs.',
        'Cyberwar.'
    ]

    const handleErase = () => {
        timeoutRef.current = setTimeout(() => {
            if (x === -1) {
                set_y(prev => (prev + 1) % text.length)
            }
            set_x(x * -1)
        }, 1000)
    }

    useEffect(() => {
        return () => clearTimeout(timeoutRef.current)
    }, [])

    return (
        <CSS.C>
            <TypeWriter 
                typing={x}
                minDelay={x > 0 ? 25: 10}
                maxDelay={x > 0 ? 75: 20}
                onTypingEnd={handleErase}

            >
                <CSS.Text>{ text[y] }</CSS.Text>
            </TypeWriter>
        </CSS.C>
    )
}

export default TitlePage
