
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth";


const formData = {
  email: '',
  password: '',
  displayName: ''
}

// se crea un objeto personalizado 
const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe de tener un @.'],
  password: [(value) => value.length >= 6, 'El password debe de tener mas de 6 letras.'],
  displayName: [(value) => value.length >= 1, 'El nombre es requerido.'],


}

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);


  const { status, errorMessage } = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);


  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm(formData, formValidations);




  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);


    if (!isFormValid) return;


    dispatch(startCreatingUserWithEmailPassword(formState));

  }


  return (
    <AuthLayout title="Crear cuenta">
      {/* <h1>FormValid:{isFormValid ? ' Valido ' : ' Incorrecto '}</h1> */}
      <form onSubmit={onSubmit}    className='animate__animated animate__fadeIn animate__faster'>
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
              error={!displayName && formSubmitted}
              helperText={displayNameValid}
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
              error={!email && formSubmitted}
              helperText={emailValid}
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
              error={!password && formSubmitted}
              helperText={passwordValid}
            />
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid 
              item
               size={{ xs: 12 }}
               display={!!errorMessage ? '' : 'none' }
         
               
               >
                <Alert severity='error'>{ errorMessage }</Alert>
              </Grid>

              <Grid item size={{ xs: 12 }}>
                <Button
                  disabled={isCheckingAuthentication}
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