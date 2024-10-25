import { Form as FormFormik, Formik } from 'formik';
import { Input } from '../Input/Input';

import './form.scss';
import { validationSchema } from './validation';
import useEmail from '../../hooks/useEmail';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import File from '../File/File';

interface FormValues {
    name: string;
    email: string;
    message: string;
    file: FileList | null;
  }


export const Form = () => {

    const [translation] = useTranslation('global');

    const mutation = useEmail();
    const [error, setError] = useState({
        message: '',
        isError: false
    })
  return (
    <Formik<FormValues>
        initialValues={{
            name: '',
            email: '',
            message: '',
            file: null,
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, {resetForm}) => {
            try {
                await validationSchema.validate(values);

                const formData = new FormData();
                formData.append('name', values.name);
                formData.append('email', values.email);
                formData.append('message', values.message);
                
                if (values.file) {
                    Array.from(values.file).forEach((file) => {
                        formData.append('files', file); // Usa 'files' como nombre
                    });
                }
        
                mutation.mutate(formData);

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
            ({setValues, values}) => (
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
                    <div className='container__form__footer'>
                        <File setValues={setValues} values={values}/>
                        <button type='submit' disabled={mutation.isSuccess || mutation.isPending}>{translation("form.inputs-button")}</button>
                    </div>
                </FormFormik>
            )
        }
    </Formik>
  )
}
