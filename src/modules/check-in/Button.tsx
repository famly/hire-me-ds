import styled, {css} from 'styled-components';

import {fixedPalette} from '../../tokens';

type ButtonProps = {
    $variant?: 'primary' | 'danger' | 'secondary';
};

export const Button = styled.button<ButtonProps>`
    padding: 12px 16px;
    border: none;
    border-radius: 12px;
    font: inherit;
    font-size: 16px;
    cursor: pointer;
    color: ${fixedPalette.n0};
    background: ${props => props.theme.colorPalette.p400};

    &:hover:not(:disabled) {
        background: ${props => props.theme.colorPalette.p300};
    }

    &:focus-visible {
        outline: 2px solid ${props => props.theme.colorPalette.p400};
        outline-offset: 2px;
    }

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }

    ${props =>
        props.$variant === 'danger' &&
        css`
            background: ${fixedPalette.r400};

            &:hover:not(:disabled) {
                background: ${fixedPalette.r300};
            }
        `}

    ${props =>
        props.$variant === 'secondary' &&
        css`
            background: ${fixedPalette.n0};
            color: ${fixedPalette.n400};
            border: 1px solid ${fixedPalette.n200};

            &:hover:not(:disabled) {
                background: ${fixedPalette.n75};
            }
        `}
`;
