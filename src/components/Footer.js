import { Typography, Grid, Link, Box } from '@mui/material';

// Footer component with additional links
const Footer = () => (
    <Box sx={{ bgcolor: '#232323', color: '#DFDFDF', p: 3 }}>
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="body2">
          Copyright © {new Date().getFullYear()} SuperNet
        </Typography>
      </Grid>
      <Grid item>
        <Link href="#" color="inherit" underline="none" sx={{ ml: 2 }}>
          Privacy Policy
        </Link>
        <Link href="#" color="inherit" underline="none" sx={{ ml: 2 }}>
          Cookies
        </Link>
        <Link href="#" color="inherit" underline="none" sx={{ ml: 2 }}>
          Accessibility
        </Link>
      </Grid>
    </Grid>
  </Box>
);

export default Footer;