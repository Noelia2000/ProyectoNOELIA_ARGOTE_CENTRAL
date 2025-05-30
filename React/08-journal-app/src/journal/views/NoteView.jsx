import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
    return (
         <Grid 
         container 
         direction='column' 
         spacing={2}
           className='animate__animated animate__fadeIn animate__faster'
         >
            
        <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
            <Grid item>
                <Typography fontSize={39} fontWeight='ligh'>25 de Mayo, 2025</Typography>
            </Grid>
            <Grid item>
                <Button color="primary" sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>
            </Grid>
          
           
                <Grid item>
                    <TextField
                        type=" text"
                        variant="filled"
                        fullWidth
                        placeholder="Ingrese un titulo"
                        label="Titulo"
                        sx={{ border: 'none', mb: 1 }}
                    />
                     <TextField
                        type=" text"
                        variant="filled"
                        fullWidth
                        multiline
                        placeholder="que sucedio en el dia de hoy?"
                        minRows={5}
                      
                    />

                </Grid>
                 {/* Image gallery */}
              <ImageGallery/>
        </Grid>
    )
}
