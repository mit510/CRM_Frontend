import PropTypes from 'prop-types';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// theme
import { bgGradient } from 'src/theme/css';
// utils
// import { fShortenNumber } from 'src/utils/format-number';
// import { Link } from '@mui/material';
// import { RouterLink } from 'src/routes/components';
// theme

// ----------------------------------------------------------------------

export default function Widget({
    title,
    icon,
    color = 'primary',
    sx,
    ...other
}) {
    const theme = useTheme();

    return (
        <Stack style={{"marginTop":"20px", "marginBottom":"20px"}}
            alignItems="center"
            sx={{
                ...bgGradient({
                    direction: '135deg',
                    startColor: alpha(theme.palette[color].light, 0.2),
                    endColor: alpha(theme.palette[color].main, 0.2),
                }),
                py: 1,
                px: 1,
                borderRadius: 2,
                textAlign: 'center',
                color: `${color}.darker`,
                backgroundColor: 'common.white',
                ...sx,
            }}
            {...other}
        >
            {icon && <Box sx={{ width: 100, height: 50, mb: 1 }}>{icon}</Box>}
            <Typography variant="subtitle2" sx={{ opacity: 0.64 }}>
                {title}
            </Typography>
        </Stack>
    );
}

Widget.propTypes = {
    color: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    sx: PropTypes.object,
    title: PropTypes.string,
};
