import styled from 'styled-components';

import type {StaffMember} from '../../api/types';
import {fixedPalette} from '../../tokens';

export const Page = styled.div`
    max-width: 980px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 20px;
`;

export const Title = styled.h1`
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    color: ${fixedPalette.n500};
`;

export const Count = styled.span`
    margin-right: auto;
    font-size: 14px;
    color: ${fixedPalette.n300};
`;

export const Search = styled.input`
    width: 240px;
    padding: 9px 12px;
    border: 1px solid ${fixedPalette.n200};
    border-radius: 10px;
    font: inherit;
    font-size: 15px;
    color: ${fixedPalette.n400};

    &::placeholder {
        color: ${fixedPalette.n200};
    }

    &:focus {
        outline: none;
        border-color: ${props => props.theme.colorPalette.p300};
    }
`;

export const List = styled.div`
    background: ${fixedPalette.n0};
    border: 1px solid ${fixedPalette.n100};
    border-radius: 16px;
    overflow: hidden;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: 40px minmax(0, 2fr) minmax(0, 1.2fr) minmax(0, 1fr) auto;
    align-items: center;
    gap: 14px;
    padding: 12px 18px;
    border-bottom: 1px solid ${fixedPalette.n75};

    &:last-child {
        border-bottom: none;
    }
`;

export const Initials = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 600;
    background: ${props => props.theme.colorPalette.p100};
    color: ${props => props.theme.colorPalette.p400};
`;

export const Name = styled.div`
    font-size: 15px;
    font-weight: 600;
    color: ${fixedPalette.n400};
`;

export const Email = styled.div`
    font-size: 13px;
    color: ${fixedPalette.n300};
`;

const roleColours: Record<StaffMember['role'], [string, string]> = {
    Manager: [fixedPalette.dPurple100, fixedPalette.dPurple400],
    'Room leader': [fixedPalette.dTeal100, fixedPalette.dTeal400],
    Practitioner: [fixedPalette.dBlue100, fixedPalette.dBlue400],
    Apprentice: [fixedPalette.dYellow100, fixedPalette.dYellow400],
    Cook: [fixedPalette.dOrange100, fixedPalette.dOrange400],
};

export const RoleBadge = styled.span<{$role: StaffMember['role']}>`
    justify-self: start;
    padding: 3px 10px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 600;
    background: ${props => roleColours[props.$role][0]};
    color: ${props => roleColours[props.$role][1]};
`;

export const Room = styled.div`
    margin-top: 2px;
    font-size: 13px;
    color: ${fixedPalette.n300};
`;

const statusColours: Record<StaffMember['status'], string> = {
    onShift: fixedPalette.dGreen400,
    off: fixedPalette.n200,
    onLeave: '#f59f00',
};

export const Status = styled.span<{$status: StaffMember['status']}>`
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-size: 14px;
    color: ${fixedPalette.n400};

    &::before {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${props => statusColours[props.$status]};
    }
`;

export const Actions = styled.div`
    display: flex;
    gap: 6px;
`;

export const Empty = styled.p`
    margin: 0;
    padding: 28px 18px;
    font-size: 15px;
    color: ${fixedPalette.n300};
`;

export const Footer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 12px;
`;
