/**
 * Colours that are the same for every brand.
 */
export const fixedPalette = {
    // Blues
    b50: 'hsla(210, 95%, 98%, 1)',
    b100: 'hsla(210, 95%, 96%, 1)',
    b200: 'hsla(210, 95%, 90%, 1)',
    b300: 'hsla(210, 95%, 65%, 1)',
    b400: 'hsla(210, 95%, 48%, 1)',
    b500: 'hsla(210, 95%, 25%, 1)',

    // Greens
    g50: 'hsla(155, 73%, 98%, 1)',
    g100: 'hsla(155, 73%, 96%, 1)',
    g200: 'hsla(155, 73%, 85%, 1)',
    g300: 'hsla(155, 73%, 50%, 1)',
    g400: 'hsla(155, 73%, 40%, 1)',
    g500: 'hsla(155, 73%, 20%, 1)',

    // Oranges
    o50: 'hsla(25, 95%, 98%, 1)',
    o100: 'hsla(25, 95%, 96%, 1)',
    o200: 'hsla(25, 95%, 90%, 1)',
    o300: 'hsla(25, 95%, 70%, 1)',
    o400: 'hsla(25, 95%, 55%, 1)',
    o500: 'hsla(25, 95%, 25%, 1)',

    // Yellows
    y50: 'hsla(43, 95%, 98%, 1)',
    y100: 'hsla(43, 95%, 96%, 1)',
    y200: 'hsla(43, 95%, 90%, 1)',
    y300: 'hsla(43, 95%, 70%, 1)',
    y400: 'hsla(43, 95%, 58%, 1)',
    y500: 'hsla(43, 95%, 20%, 1)',

    // Reds
    r50: 'hsla(0, 90%, 98%, 1)',
    r100: 'hsla(0, 90%, 96%, 1)',
    r200: 'hsla(0, 90%, 90%, 1)',
    r300: 'hsla(0, 90%, 70%, 1)',
    r400: 'hsla(0, 90%, 40%, 1)',
    r500: 'hsla(0, 90%, 20%, 1)',

    // Neutrals
    n0: 'hsla(0, 0%, 100%, 1)',
    n25: 'hsla(240, 12%, 99%, 1)',
    n50: 'hsla(240, 12%, 98%, 1)',
    n75: 'hsla(240, 12%, 95%, 1)',
    n100: 'hsla(240, 12%, 90%, 1)',
    n200: 'hsla(240, 12%, 80%, 1)',
    n300: 'hsla(240, 12%, 45%, 1)',
    n400: 'hsla(240, 12%, 20%, 1)',
    n500: 'hsla(240, 12%, 1%, 1)',

    // Decorative
    dGreen400: 'hsla(155, 75%, 50%, 1)',
    dGreen100: 'hsla(155, 74%, 88%, 1)',
    dGrey400: 'hsla(213, 19%, 34%, 1)',
    dGrey100: 'hsla(213, 19%, 89%, 1)',
    dTeal400: 'hsla(164, 42%, 53%, 1)',
    dTeal100: 'hsla(164, 42%, 91%, 1)',
    dTurquoise400: 'hsla(184, 61%, 61%, 1)',
    dTurquoise100: 'hsla(184, 61%, 90%, 1)',
    dBlue400: 'hsla(204, 72%, 53%, 1)',
    dBlue100: 'hsla(204, 72%, 91%, 1)',
    dPink400: 'hsla(339, 100%, 70%, 1)',
    dPink100: 'hsla(339, 100%, 91%, 1)',
    dYellow400: 'hsla(43, 96%, 70%, 1)',
    dYellow100: 'hsla(43, 96%, 88%, 1)',
    dOrange400: 'hsla(32, 87%, 69%, 1)',
    dOrange100: 'hsla(32, 87%, 94%, 1)',
    dRed400: 'hsla(13, 100%, 62%, 1)',
    dRed100: 'hsla(13, 100%, 90%, 1)',
    dCrimson400: 'hsla(337, 85%, 37%, 1)',
    dCrimson100: 'hsla(351, 84%, 83%, 1)',
    dPurple400: 'hsla(317, 100%, 27%, 1)',
    dPurple100: 'hsla(318, 38%, 88%, 1)',
    dBrown400: 'hsla(1, 33%, 48%, 1)',
    dBrown100: 'hsla(1, 33%, 84%, 1)',
} as const;

export type FixedPalette = typeof fixedPalette;
export type FixedPaletteColor = keyof FixedPalette;
