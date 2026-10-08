import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import {useBrand} from '../../brand/BrandProvider';

export type Page = 'attendance' | 'profiles' | 'staff' | 'settings' | 'billing';

export const pages: {id: Page; label: string}[] = [
    {id: 'attendance', label: 'Attendance'},
    {id: 'profiles', label: 'Child profiles'},
    {id: 'staff', label: 'Staff'},
    {id: 'settings', label: 'Settings'},
    {id: 'billing', label: 'Plan and billing'},
];

type Props = {
    page: Page;
    onNavigate: (page: Page) => void;
};

export function SideNav({page, onNavigate}: Props) {
    const {brand} = useBrand();

    return (
        <Box
            component="nav"
            aria-label="Main"
            sx={{
                width: 232,
                flexShrink: 0,
                px: '10px',
                py: '18px',
                bgcolor: '#fff',
                borderRight: '1px solid #e9e9ef',
            }}
        >
            <Typography
                sx={{
                    px: '14px',
                    mb: '6px',
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#8a8aa0',
                }}
            >
                Menu
            </Typography>
            <List disablePadding>
                {pages.map(item => (
                    <ListItemButton
                        key={item.id}
                        selected={item.id === page}
                        onClick={() => onNavigate(item.id)}
                        sx={{
                            mb: '2px',
                            borderRadius: '10px',
                            '&:hover': {bgcolor: '#f4f4f7'},
                            '&.Mui-selected, &.Mui-selected:hover': {
                                bgcolor: brand.colorPalette.p100,
                                color: brand.brandColor,
                                fontWeight: 600,
                            },
                        }}
                    >
                        <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{fontSize: 15, fontWeight: 'inherit'}}
                        />
                    </ListItemButton>
                ))}
            </List>
        </Box>
    );
}
