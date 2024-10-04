import style from '../../style/inputAuth.module.scss';
import { useField } from "formik";
import { useState } from 'react';
import { CiLock, CiUser } from 'react-icons/ci';
import { FaRegEyeSlash, FaRegEye  } from "react-icons/fa";

interface Props {
  name: string;
  type: 'text' | 'email' | 'password' | 'textarea';
  [x: string]: any;
}

export const InputAuth = ({type ,...props}: Props) => {

    const [field, meta] = useField(props);

    const [viewPassword, setviewPassword] = useState(false);

    return (
        <div className={style.container}>
            <div className={style.container__input}>
                <span>
                    {
                        type == 'password' ?
                        <CiLock />
                        : <CiUser/>
                    }
                </span>
                <input
                    type={
                        type === 'password' ?
                            viewPassword ? "text" : "password"
                        : type
                    }
                    {...field} 
                    {...props}
                />
                {
                    type === 'password' &&
                    <button type='button' onClick={() => setviewPassword(prev => !prev)}>
                        {
                            viewPassword ? 
                            <FaRegEyeSlash/>
                            :
                            <FaRegEye/>
                        }
                    </button>
                }
            </div>
            {
                meta.error && meta.touched &&
                <p>{meta.error}</p>
            }
        </div>
    );
  };
