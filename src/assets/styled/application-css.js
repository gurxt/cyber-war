import styled from 'styled-components'

const ApplicationCSS = () => {
    const C = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background-color: #110021;
        user-select: none;
    `

    return {
        C
    }
}

export default ApplicationCSS
