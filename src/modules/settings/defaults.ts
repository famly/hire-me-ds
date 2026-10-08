export type NurserySettings = {
    lateEmails: boolean;
    dailySummary: boolean;
    parentMessages: boolean;
    defaultPickup: string;
    weekStart: 'monday' | 'sunday';
    showPhotos: boolean;
};

export const defaultSettings: NurserySettings = {
    lateEmails: true,
    dailySummary: false,
    parentMessages: true,
    defaultPickup: '16:00',
    weekStart: 'monday',
    showPhotos: true,
};
