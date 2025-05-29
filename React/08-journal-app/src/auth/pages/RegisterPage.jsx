
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";


const formData = {
  email: 'Noelia@google.com',
  password: '123456',
  displayName: 'Noelia'
}


export const RegisterPage = () => {

  const { displayName, email, password, onInputChange, formState } = useForm (formData);


  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);

  }


  return (
    <AuthLayout title="Crear cuenta">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nombre Completo"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
            />
          </Grid>


          <Grid item size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
                name="password"
              value={password}
              onChange={onInputChange}
            />
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item size={{ xs: 12 }}>
                <Button
                type="submit"
                 variant="contained" 
                 fullWidth>
                  Crear cuenta
                </Button>
              </Grid>


            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end" size={12}>
            <Typography sx={{ mr: 1 }}> ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};