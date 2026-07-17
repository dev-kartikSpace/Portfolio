import styled from 'styled-components'

const Pill = styled.span`
    font-size: 13px;
    font-weight: 500;
    border-radius: 999px;
    padding: 6px 12px;
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
    ${({ theme, variant }) =>
        variant === 'outline'
            ? `
                background: transparent;
                border: 1px solid ${theme.card_border};
                color: ${theme.text_primary};
            `
            : `
                background: ${theme.badge_filled_bg};
                border: 1px solid transparent;
                color: ${theme.badge_filled_text};
            `}
`

export default Pill
