import styled, {css} from 'styled-components';

import {fixedPalette} from '../../tokens';

type Props = {
    $variant?: 'primary' | 'transparent' | 'icon';
};

// Our own button, so the staff pages don't depend on the check-in team's one.
export const StaffButton = styled.button<Props>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 10px 18px;
    border: none;
    border-radius: 10px;
    font: inherit;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    color: ${fixedPalette.n0};
    background: ${props => props.theme.colorPalette.p400};

    &:hover {
        background: ${props => props.theme.colorPalette.p500};
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px ${props => props.theme.colorPalette.p200};
    }

    ${props =>
        props.$variant === 'transparent' &&
        css`
            padding: 8px 10px;
            background: transparent;
            color: ${props.theme.brandColor};

            &:hover {
                background: ${fixedPalette.n50};
            }
        `}

    ${props =>
        props.$variant === 'icon' &&
        css`
            width: 32px;
            height: 32px;
            padding: 0;
            border: 1px solid ${fixedPalette.n100};
            border-radius: 8px;
            background: ${fixedPalette.n0};
            color: ${fixedPalette.n300};
            font-size: 15px;

            &:hover {
                background: ${fixedPalette.n75};
            }
        `}
`;
