export type BrandPalette = {
    p50: string;
    p100: string;
    p200: string;
    p300: string;
    p400: string;
    p500: string;
};

export type Brand = {
    id: string;
    name: string;
    brandColor: string;
    colorPalette: BrandPalette;
};
