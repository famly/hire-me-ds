import {createTheme} from '@mui/material/styles';

import type {Brand} from '../../themes';
import {fixedPalette, fontFamily} from '../../tokens';

export function createMuiTheme(brand: Brand) {
    return createTheme({
        palette: {
            primary: {
                main: brand.colorPalette.p400,
            },
            error: {
                main: fixedPalette.dRed400,
            },
            text: {
                primary: fixedPalette.n400,
            },
        },
        typography: {
            fontFamily,
            button: {
                textTransform: 'none',
            },
        },
        shape: {
            borderRadius: 6,
        },
    });
}
