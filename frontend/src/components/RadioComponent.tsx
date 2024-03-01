import { Button, FormControl, FormControlLabel, Input, Radio } from '@mui/material';
import React from 'react'

interface RadioComponent {

}

const RadioComponent: React.FC<RadioComponent> = () => {
  return (
    <FormControl sx={{width: "-webkit-fill-available", marginTop:"1rem"}}>
        <FormControlLabel disabled control={<Radio color='success'/>} label={<Input placeholder='Вопрос'/>} />
        <FormControlLabel disabled control={<Radio color='success'/>} label={<Button color='success' variant="text">Добавить вариант</Button>} />
    </FormControl>
  )
}

export default RadioComponent;
