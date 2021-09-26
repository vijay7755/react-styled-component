import styled, { css } from 'styled-components'
import propTypes from 'prop-types'

const largeStyles = ({ large }) => {
    if (large) {
        return css`
        padding: 14px;
        border-radius: 5px;
        font-size: 1.5em;
    `
    }
    else {
        return css`
        padding: 8px;
        border-radius: 4px;
        font-size: 1em;
    `
    }
}

const Button = styled.button`
    color: white;
    background: ${props => props.secondary ? p => p.theme.secondaryColor : p => p.theme.primaryColor};
    font-weight: bold;
    border-radius: 4px;
    box-shadow: none;
    font-size: 1em;
    border: none;
    width: 100%;
    display: block;
    white-space: none;

    ${largeStyles}

    &:disabled {
        background: #eee;
        color: #666;
    }
`

Button.propTypes = {
    large: propTypes.bool,
    secondary: propTypes.bool
}

export { Button }