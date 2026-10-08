import styled from 'styled-components';

import {fixedPalette} from '../../tokens';

export const Panel = styled.aside`
    background: ${fixedPalette.n0};
    border: 1px solid ${fixedPalette.n100};
    border-radius: 16px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 18px;
`;

export const Header = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
`;

export const Title = styled.h2`
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    color: ${fixedPalette.n500};
`;

export const Subtitle = styled.p`
    margin: 4px 0 0;
    font-size: 14px;
    color: ${fixedPalette.n300};
`;

export const CloseButton = styled.button`
    border: none;
    background: none;
    font-size: 22px;
    line-height: 1;
    color: ${fixedPalette.n300};
    cursor: pointer;
    padding: 2px 6px;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 14px;
    font-weight: 600;
    color: ${fixedPalette.n400};
`;

export const Select = styled.select`
    font: inherit;
    font-size: 16px;
    padding: 10px 12px;
    border: 1px solid ${fixedPalette.n200};
    border-radius: 8px;
    background: ${fixedPalette.n0};
    color: ${fixedPalette.n400};

    &:focus {
        outline: none;
        border-color: ${props => props.theme.brandColor};
    }
`;

export const LateBadge = styled.span`
    align-self: flex-start;
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 600;
    background: ${fixedPalette.o400};
    color: white;
`;

export const Actions = styled.div`
    display: flex;
    gap: 10px;
`;

export const Info = styled.p`
    margin: 0;
    font-size: 15px;
    color: ${fixedPalette.n400};
`;
