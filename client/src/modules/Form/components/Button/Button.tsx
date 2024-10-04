import {Button as ButtonMaterial} from '@material-ui/core';

interface Props {
    label: string;
    [x: string]: any;
}

export const Button = ({label, ...props}: Props) => {
  return (
    <ButtonMaterial  variant="contained" color='primary' {...props}>
        {label}
    </ButtonMaterial>
  )
}
