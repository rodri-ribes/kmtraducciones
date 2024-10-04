import { Form as FormFormik, Formik } from 'formik';
import { Input } from '../Input/Input';

import './form.scss';
import { validationSchema } from './validation';
import useEmail from '../../hooks/useEmail';
import { useState } from 'react';

export const Form = () => {
    const mutation = useEmail();
    const [error, setError] = useState({
        message: '',
        isError: false
    })
  return (
    <Formik
        initialValues={{
            name: '',
            email: '',
            message: ''
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, {resetForm}) => {
            try {
                await validationSchema.validate(values);

                mutation.mutate(values);

                if(mutation.isSuccess){
                    setTimeout(() => {
                        resetForm();
                        
                    }, 5000);
                }

            } catch (error) {
                console.log(error)
                setError({
                    message: 'Hay errores en los campos, verifique lo introduccido...',
                    isError: true
                })
            }
        }}
    >
        {
            () => (
                <FormFormik className='container__form'>
                    <Input label='Nombre' type='text' name='name'/>
                    <Input label='Email' type='email' name='email'/>
                    <Input label='Mensaje' type='textarea' name='message'/>
                    <p className={mutation.isSuccess ? 'success' : 'error'}>
                        {mutation.isSuccess && 'Gracias por comunicarte con KmTraducciones. Te responderemos a la brevedad.'}
                        {mutation.isError && 'Hubo un error al enviar el correo, contacte por WhatsApp.'}
                        {mutation.isPending && 'Enviando...'}
                    </p>
                    {error.isError && <p className='error'>{error.message}</p>}
                    <button type='submit' disabled={mutation.isSuccess}>Enviar</button>
                </FormFormik>
            )
        }
    </Formik>
  )
}
