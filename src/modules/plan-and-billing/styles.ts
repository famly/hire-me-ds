import styled, {css} from 'styled-components';

import type {Invoice} from '../../api/types';
import {fixedPalette} from '../../tokens';

export const Page = styled.div`
    display: flex;
    flex-direction: column;
    gap: 22px;
    max-width: 960px;
`;

export const Title = styled.h1`
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    color: ${fixedPalette.n500};
`;

export const UpgradeBanner = styled.section`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    padding: 20px 24px;
    border-radius: 14px;
    background: linear-gradient(135deg, #fff7f0, ${fixedPalette.o100});
    border: 1px solid ${fixedPalette.o200};
`;

export const BannerText = styled.div`
    flex: 1;
    min-width: 260px;

    h2 {
        margin: 0 0 4px;
        font-size: 19px;
        font-weight: 700;
        color: ${fixedPalette.o500};
    }

    p {
        margin: 0;
        font-size: 15px;
        color: ${fixedPalette.n400};
    }
`;

export const UpsellButton = styled.button<{$outlined?: boolean}>`
    padding: 11px 20px;
    border: 2px solid ${fixedPalette.o400};
    border-radius: 24px;
    font: inherit;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    background: ${fixedPalette.o400};
    color: ${fixedPalette.n0};

    &:hover {
        background: #ff8a3d;
        border-color: #ff8a3d;
    }

    ${props =>
        props.$outlined &&
        css`
            background: ${fixedPalette.n0};
            color: ${fixedPalette.o500};

            &:hover {
                background: ${fixedPalette.o50};
                border-color: ${fixedPalette.o400};
            }
        `}
`;

export const Columns = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 20px;

    @media (max-width: 900px) {
        grid-template-columns: minmax(0, 1fr);
    }
`;

export const Card = styled.section`
    padding: 22px 24px;
    border: 1px solid ${fixedPalette.n100};
    border-radius: 14px;
    background: ${fixedPalette.n0};
`;

export const CardLabel = styled.h2`
    margin: 0 0 10px;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: ${fixedPalette.n300};
`;

export const PlanName = styled.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-size: 32px;
    font-weight: 700;
    color: ${fixedPalette.n500};

    span {
        font-size: 16px;
        font-weight: 400;
        color: ${fixedPalette.n300};
    }
`;

export const Usage = styled.div`
    margin-top: 18px;
    font-size: 14px;
    color: ${fixedPalette.n400};
`;

export const UsageTrack = styled.div`
    height: 8px;
    margin: 8px 0 6px;
    border-radius: 4px;
    background: #ececf2;
    overflow: hidden;
`;

export const UsageFill = styled.div<{$percent: number}>`
    width: ${props => props.$percent}%;
    height: 100%;
    background: ${props => props.theme.colorPalette.p400};
`;

export const UsageWarning = styled.p`
    margin: 0;
    font-size: 13px;
    font-weight: 600;
    color: #d9480f;
`;

export const FeatureList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Feature = styled.li<{$locked?: boolean}>`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    color: ${props => (props.$locked ? fixedPalette.n300 : fixedPalette.n400)};

    &::before {
        content: '${props => (props.$locked ? '🔒' : '✓')}';
        width: 18px;
        color: ${fixedPalette.g400};
    }
`;

export const UnlockLink = styled.button`
    margin-left: auto;
    padding: 0;
    border: none;
    background: none;
    font: inherit;
    font-size: 14px;
    font-weight: 600;
    color: ${fixedPalette.o400};
    cursor: pointer;
`;

export const TableHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
`;

export const OutlineButton = styled.button`
    padding: 8px 14px;
    border: 1px solid ${fixedPalette.n200};
    border-radius: 8px;
    background: ${fixedPalette.n0};
    color: ${fixedPalette.n400};
    font: inherit;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        border-color: ${fixedPalette.n300};
    }
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-size: 15px;

    th {
        padding: 10px 8px;
        text-align: left;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: ${fixedPalette.n300};
        border-bottom: 1px solid ${fixedPalette.n100};
    }

    td {
        padding: 13px 8px;
        color: ${fixedPalette.n400};
        border-bottom: 1px solid ${fixedPalette.n75};
    }

    tr:last-child td {
        border-bottom: none;
    }
`;

const statusColours: Record<Invoice['status'], [string, string]> = {
    paid: [fixedPalette.g100, fixedPalette.g500],
    due: [fixedPalette.y100, fixedPalette.y500],
    overdue: ['#ffe3e3', '#c92a2a'],
};

export const StatusPill = styled.span<{$status: Invoice['status']}>`
    padding: 3px 10px;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 600;
    background: ${props => statusColours[props.$status][0]};
    color: ${props => statusColours[props.$status][1]};
`;

export const DownloadLink = styled.a`
    font-size: 14px;
    font-weight: 500;
    color: ${props => props.theme.brandColor};
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;
