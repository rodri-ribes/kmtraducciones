import { Form as FormFormik, Formik } from 'formik';
import { Input } from '../Input/Input';

import './form.scss';
import { validationSchema } from './validation';
import useEmail from '../../hooks/useEmail';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Form = () => {

    const [translation] = useTranslation('global');

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
                    <Input label={translation("form.inputs-name")} type='text' name='name'/>
                    <Input label={translation("form.inputs-email")} type='email' name='email'/>
                    <Input label={translation("form.inputs-message")} type='textarea' name='message'/>
                    <p className={mutation.isSuccess ? 'success' : 'error'}>
                        {mutation.isSuccess && translation("form.messages.success")}
                        {mutation.isError && translation("form.messages.error")}
                        {mutation.isPending && translation("form.messages.pending")}
                    </p>
                    {error.isError && <p className='error'>{error.message}</p>}
                    <button type='submit' disabled={mutation.isSuccess}>{translation("form.inputs-button")}</button>
                </FormFormik>
            )
        }
    </Formik>
  )
}
