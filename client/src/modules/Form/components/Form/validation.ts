import * as yup from 'yup';

export const validationSchema = yup.object({
    name: yup.string().required('El Nombre es obligatorio'),
    email: yup.string().email('El Email no es válido').required('El Email es obligatorio'),
    message: yup.string().required('El Mensaje es obligatorio')
   .min(5, 'El Mensaje debe tener al menos 5 caracteres')
})