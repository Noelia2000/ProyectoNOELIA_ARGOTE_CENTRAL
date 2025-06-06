import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import { useForm } from "../../hooks/useForm"
import { useSelector } from "react-redux"
import { useMemo } from "react"

export const NoteView = () => {

    const {active:note}= useSelector(state=> state.journal);

   const {body, title,date, onInputChange, formState}= useForm(note);

   const dateString= useMemo(()=>{
    const newDate= new Date (date)
    return newDate.toUTCString();
   },[date])


    return (
         <Grid 
         container 
         direction='column' 
         spacing={2}
           className='animate__animated animate__fadeIn animate__faster'
         >
            
        <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
            <Grid item>
                <Typography fontSize={39} fontWeight='ligh'>{ dateString}</Typography>
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
                        name="title"
                        value={title}
                        onChange={onInputChange}
                    />
                     <TextField
                        type=" text"
                        variant="filled"
                        fullWidth
                        multiline
                        placeholder="que sucedio en el dia de hoy?"
                        minRows={5}
                         name="body"
                        value={body}
                        onChange={onInputChange}
                      
                    />

                </Grid>
                 {/* Image gallery */}
              <ImageGallery/>
        </Grid>
    )
}
