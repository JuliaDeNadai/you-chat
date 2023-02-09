import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  title: {
    '&.MuiTypography-h5': {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '30px',
      lineHeight: '48px',

      color: '#565555',
    }
  },

  contrast: {
    '&.MuiTypography-h5': {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '30px',
      lineHeight: '48px',
      
      color: '#19D2BC'
    }
  }
})