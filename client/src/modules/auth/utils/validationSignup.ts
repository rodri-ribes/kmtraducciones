import * as yup from 'yup';

export const validationSignup = yup.object({
    name: yup.string()
    .required('El Nombre es obligatorio'),

    // phone: yup.string()
    // .required('El WhatsApp es obligatorio'),

    email: yup.string()
    .email('El Email no es válido')
    .required('El Email es obligatorio'),

    password: yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es obligatoria'),

    confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Las contraseñas deben coincidir')
    .required('Confirmar contraseña'),

    
})