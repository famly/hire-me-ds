import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

import type {Child} from '../../api/types';
import {useBrand} from '../../brand/BrandProvider';
import {brands} from '../../themes';
import {fixedPalette} from '../../tokens';

type Props = {
    children: Child[];
    loading: boolean;
    onRefresh: () => void;
};

export function AttendanceBar({children, loading, onRefresh}: Props) {
    const {brand, setBrandId} = useBrand();
    const checkedIn = children.filter(child => child.checkedIn).length;

    return (
        <Box
            component="header"
            sx={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '14px',
                px: '24px',
                py: '14px',
                bgcolor: brand.brandColor,
                color: '#fff',
            }}
        >
            <Typography component="h1" sx={{fontSize: 20, fontWeight: 700, mr: 'auto'}}>
                {brand.name}
            </Typography>

            <Chip
                label={`${checkedIn} of ${children.length} checked in`}
                color="success"
                sx={{fontWeight: 600}}
            />

            <Select
                size="small"
                value={brand.id}
                onChange={event => setBrandId(event.target.value)}
                inputProps={{'aria-label': 'Brand'}}
                sx={{bgcolor: '#fff', minWidth: 180, borderRadius: '8px'}}
            >
                {brands.map(option => (
                    <MenuItem key={option.id} value={option.id}>
                        {option.name}
                    </MenuItem>
                ))}
            </Select>

            <Button
                variant="contained"
                onClick={onRefresh}
                disabled={loading}
                disableElevation
                sx={{
                    borderRadius: '20px',
                    px: '18px',
                    bgcolor: fixedPalette.b400,
                    '&:hover': {bgcolor: fixedPalette.b500},
                }}
            >
                {loading ? 'Refreshing…' : 'Refresh'}
            </Button>
        </Box>
    );
}
