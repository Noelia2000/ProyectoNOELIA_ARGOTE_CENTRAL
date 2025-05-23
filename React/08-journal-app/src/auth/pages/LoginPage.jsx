import { Box, Typography, TextField, Grid, Button, Link } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { AuthLayout } from '../layout/AuthLayout';


export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>


      <Grid container component="form" spacing={2}>
        <Grid size={{ xs: 12 }}>
          <TextField
            id="email"
            label="Email"
            type="email"
            placeholder="email@google.com"
            size="small"
            fullWidth />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            id="password"
            label="Password"
            type="password"
            placeholder="password"
            size="small"
            fullWidth />
        </Grid>
      </Grid>


      {/* New */}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Button variant="contained" fullWidth>
            Login
          </Button>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Button variant="contained" fullWidth startIcon={<Google />}            >
            Google
          </Button>
        </Grid>
      </Grid>
      <Grid container direction="row" justifyContent="end" sx={{ mt: 2 }}        >
        <Link component={RouterLink} color="inherit" to="/auth/register"          >
          Create una cuenta.
        </Link>
      </Grid>
    </AuthLayout>



  );
};