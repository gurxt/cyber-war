/* external library imports */
import React, { useState } from 'react'
/* internal component imports */
import TitlePage from './components/title-page'
/* internal css import */
import ApplicationCSS from './assets/styled/application-css'
/* create insstance of ApplicationCSS */
const CSS = ApplicationCSS()

/* component */
const Application = () => {
    const [page, set_page] = useState(0)

    return (
        <CSS.C>
            <TitlePage />
        </CSS.C>
    )
}

export default Application
