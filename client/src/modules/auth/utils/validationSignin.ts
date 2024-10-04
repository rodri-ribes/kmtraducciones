import * as yup from 'yup';

export const validationSignin = yup.object({
    email: yup.string().email('El Email no es válido').required('El Email es obligatorio'),
    password: yup.string().required('La contraseña es requerida'),
})