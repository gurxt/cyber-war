import styled from 'styled-components'

const TitlePageCSS = () => {
    const C = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #fff;
        width: 30%;
        height: 30%;
    `

    const Text = styled.h3`
        color: #999;
        font-size: 5vh;
    `

    return {
        C, Text
    }
}

export default TitlePageCSS
