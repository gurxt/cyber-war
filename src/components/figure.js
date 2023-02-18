import React from 'react'
import FigureCSS from './../assets/styled/figure-css'

const CSS = FigureCSS()
const head_size = 51**2
const head_xy = Math.sqrt(head_size)
const head_xy_dim = 100 / head_xy

const create_figure = () => {
    const head = []
    const rand_color = () => {
        return '#' + [...Array(3).keys()].map(() => {
                    return '0123456789ABCDEF'[Math.floor(Math.random() * 16)]
                }).join('')
    }

    const head_color = rand_color()

    const head_math = {
        l_mid: Math.floor(head_xy / 4),
        x_mid: head_xy * Math.floor(head_xy / 4),
        y_mid: Math.floor(head_size / 2)
    }

    const r_eye = [ 
        head_math.y_mid - head_math.x_mid - head_math.l_mid,
        head_math.y_mid - head_math.x_mid - head_math.l_mid + 1,
        head_math.y_mid - head_math.x_mid - head_math.l_mid - 1,
        head_math.y_mid - head_math.x_mid - head_math.l_mid + 2,
        head_math.y_mid - head_math.x_mid - head_math.l_mid - 2,
        head_math.y_mid - head_math.x_mid - head_math.l_mid + head_xy,
        head_math.y_mid - head_math.x_mid - head_math.l_mid + head_xy + 1,
        head_math.y_mid - head_math.x_mid - head_math.l_mid + head_xy - 1,
        head_math.y_mid - head_math.x_mid - head_math.l_mid + head_xy + 2,
        head_math.y_mid - head_math.x_mid - head_math.l_mid + head_xy - 2,
        head_math.y_mid - head_math.x_mid - head_math.l_mid + head_xy + 3,
        head_math.y_mid - head_math.x_mid - head_math.l_mid + head_xy - 3,
        head_math.y_mid - head_math.x_mid - head_math.l_mid + head_xy * 2,
        head_math.y_mid - head_math.x_mid - head_math.l_mid + head_xy * 2 + 1,
        head_math.y_mid - head_math.x_mid - head_math.l_mid + head_xy * 2 - 1,
        head_math.y_mid - head_math.x_mid - head_math.l_mid + head_xy * 2 + 2,
        head_math.y_mid - head_math.x_mid - head_math.l_mid + head_xy * 2 - 2,
        head_math.y_mid - head_math.x_mid - head_math.l_mid + head_xy * 3,
        head_math.y_mid - head_math.x_mid - head_math.l_mid + head_xy * 3 + 1,
        head_math.y_mid - head_math.x_mid - head_math.l_mid + head_xy * 3 - 1,
        head_math.y_mid - head_math.x_mid - head_math.l_mid + head_xy * 4,
        head_math.y_mid - head_math.x_mid - head_math.l_mid - head_xy,
        head_math.y_mid - head_math.x_mid - head_math.l_mid - head_xy + 1,
        head_math.y_mid - head_math.x_mid - head_math.l_mid - head_xy - 1,
        head_math.y_mid - head_math.x_mid - head_math.l_mid - head_xy * 2
    ]

    const l_eye = [
        head_math.y_mid - head_math.x_mid + head_math.l_mid,
        head_math.y_mid - head_math.x_mid + head_math.l_mid + 1,
        head_math.y_mid - head_math.x_mid + head_math.l_mid - 1,
        head_math.y_mid - head_math.x_mid + head_math.l_mid + 2,
        head_math.y_mid - head_math.x_mid + head_math.l_mid - 2,
        head_math.y_mid - head_math.x_mid + head_math.l_mid + head_xy,
        head_math.y_mid - head_math.x_mid + head_math.l_mid + head_xy + 1,
        head_math.y_mid - head_math.x_mid + head_math.l_mid + head_xy - 1,
        head_math.y_mid - head_math.x_mid + head_math.l_mid + head_xy + 2,
        head_math.y_mid - head_math.x_mid + head_math.l_mid + head_xy - 2,
        head_math.y_mid - head_math.x_mid + head_math.l_mid + head_xy + 3,
        head_math.y_mid - head_math.x_mid + head_math.l_mid + head_xy - 3,
        head_math.y_mid - head_math.x_mid + head_math.l_mid + head_xy * 2,
        head_math.y_mid - head_math.x_mid + head_math.l_mid + head_xy * 2 + 1,
        head_math.y_mid - head_math.x_mid + head_math.l_mid + head_xy * 2 - 1,
        head_math.y_mid - head_math.x_mid + head_math.l_mid + head_xy * 2 + 2,
        head_math.y_mid - head_math.x_mid + head_math.l_mid + head_xy * 2 - 2,
        head_math.y_mid - head_math.x_mid + head_math.l_mid + head_xy * 3,
        head_math.y_mid - head_math.x_mid + head_math.l_mid + head_xy * 3 + 1,
        head_math.y_mid - head_math.x_mid + head_math.l_mid + head_xy * 3 - 1,
        head_math.y_mid - head_math.x_mid + head_math.l_mid + head_xy * 4,
        head_math.y_mid - head_math.x_mid + head_math.l_mid - head_xy,
        head_math.y_mid - head_math.x_mid + head_math.l_mid - head_xy + 1,
        head_math.y_mid - head_math.x_mid + head_math.l_mid - head_xy - 1,
        head_math.y_mid - head_math.x_mid + head_math.l_mid - head_xy * 2
    ]

    for (let i=0; i < head_size; i++) {
        // standard head eyes
        if (l_eye.includes(i) ||
            r_eye.includes(i))
            head.push({ color: '#fff' })
        else
            head.push({ color: head_color })
    }

    return head
}

const Figure = () => {
    return (
        <CSS.C>
            <CSS.F>
            { create_figure().map((x, y) => {
                return (
                    <CSS.Cell key={y} xy_dim={head_xy_dim} color={x.color}>
                    </CSS.Cell>
                )
            })}
            </CSS.F>
        </CSS.C>
    )
}

export default Figure

