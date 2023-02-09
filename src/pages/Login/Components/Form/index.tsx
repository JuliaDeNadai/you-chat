import { Typography } from '@mui/material';
import './styles.scss';
import { Field } from './Components/Field';
import { useStyles } from './styles';

export function Form(){
  const classes = useStyles()

  return (
    <div className="login-form-container">
      <Typography className={classes.title} variant='h5'>Welcome to <Typography className={[classes.contrast].join('')} variant='h5'>YouChat!</Typography></Typography>
      <Typography>Enter your account</Typography>
      <Field name="login" type="text"/>
      <Field name="password" type="password"/>
    </div>
  )
}