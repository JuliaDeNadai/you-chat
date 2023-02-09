import { TextField } from "@mui/material";

type fieldType = 'password' | 'text';

interface Props {
  name: string;
  type: fieldType;
}

export function Field({name, type}: Props){
  return (
    <TextField
      name={name}
      label={name}
      type={type}
    />
  )
}