import styled from 'styled-components'

const FigureCSS = () => {
    const C = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        background: #fff;
    `

    const F = styled.div`
        display: flex;
        flex-wrap: wrap; 
        height: 500px;
        width: 500px;
    `
    
    const Cell = styled.div`
        width: ${props => props.xy_dim}%;
        height: ${props => props.xy_dim}%;
        background: ${props => props.color};
    `

    return { C, F, Cell }
}

export default FigureCSS
