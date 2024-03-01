import { Button, FormControlLabel, FormGroup, Input } from '@mui/material';
import React from 'react'
import Checkbox from '@mui/material/Checkbox';

interface CheckboxesComponent {

}

const CheckboxesComponent: React.FC<CheckboxesComponent> = () => {
  return (
    <FormGroup sx={{width: "-webkit-fill-available", marginTop:"1rem"}}>
      <FormControlLabel disabled control={<Checkbox />} label={<Input placeholder='Вопрос'/>} />
      <FormControlLabel disabled control={<Checkbox />} label={<Button color='success' variant="text">Добавить вариант</Button>} />
    </FormGroup>
  )
}

export default CheckboxesComponent;
