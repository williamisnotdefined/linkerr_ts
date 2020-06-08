import { createGlobalStyle } from 'styled-components'

import { colors, typography, getSpace, getSpaceNumber } from './variables'

import 'react-toastify/dist/ReactToastify.css'

export const theme = {
    colors,
    font: typography,
    getSpace,
    getSpaceNumber
}

type themeType = {
    colors: { [key in keyof typeof colors]: string }
    font: { [key in keyof typeof typography]: string }
    getSpace(space?: number): string
    getSpaceNumber(space?: number): number
}

export const GlobalStyle = createGlobalStyle<{ theme: themeType }>`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        text-decoration: none;
        outline-color:  none;
    }

    html, body, #root {
        height: 100%;
    }

    button {
        cursor: pointer;
    }

    body {
        -webkit-font-smoothing: antialiased !important;
        text-rendering: optimizeLegibility !important;
        font-family: 'Montserrat', sans-serif;
        background-color: ${props => props.theme.colors.brandGrey20};
    }

    ul {
        list-style: none;
    }
`
