import {ThemeProvider as MuiThemeProvider} from '@mui/material/styles';
import {createContext, useContext, useEffect, useMemo, useState, type ReactNode} from 'react';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';

import {createMuiTheme} from '../modules/insights/mui-theme';
import {brands, type Brand} from '../themes';

type BrandContextValue = {
    brand: Brand;
    setBrandId: (id: string) => void;
};

const BrandContext = createContext<BrandContextValue | null>(null);

export function useBrand(): BrandContextValue {
    const value = useContext(BrandContext);
    if (!value) {
        throw new Error('useBrand must be used inside BrandProvider');
    }
    return value;
}

export function BrandProvider({children}: {children: ReactNode}) {
    const [brandId, setBrandId] = useState(brands[0].id);
    const brand = brands.find(b => b.id === brandId) ?? brands[0];

    // The Sass styles can't read the JS theme, so we expose a few brand colours as CSS variables.
    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--brand-color', brand.brandColor);
        root.style.setProperty('--p200', brand.colorPalette.p200);
        root.style.setProperty('--p400', brand.colorPalette.p400);
    }, [brand]);

    const muiTheme = useMemo(() => createMuiTheme(brand), [brand]);
    const value = useMemo(() => ({brand, setBrandId}), [brand]);

    return (
        <BrandContext.Provider value={value}>
            <StyledThemeProvider theme={brand}>
                <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
            </StyledThemeProvider>
        </BrandContext.Provider>
    );
}
