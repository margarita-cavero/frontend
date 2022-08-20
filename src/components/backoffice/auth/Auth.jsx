import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthStyled } from "./AuthStyled";

import config from "../../../config";

export const Auth = () => {

  const { register, reset, formState: { errors, isSubmitSuccessful }, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = async (data) => {
    reset({
      email: '',
      password: ''
    }, {
      keepErrors: true,
      keepDirty: true,
      keepIsSubmitted: true,
      keepTouched: false,
      keepIsValid: false,
      keepSubmitCount: false,
    });
    await fetch(config.urlLogin, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then((res) => {
      localStorage.setItem('token', res.JWTGenerated);
      window.location.href = '/admin/works/add';
    });
  };

  const validateToken = async () => {
    const token = localStorage.getItem('token') || '';

    if(token.length < 10){
      localStorage.removeItem('token');
    };
    if (token.length > 10) {
       return window.location.href = '/admin/works/add';
    };
  };

  useEffect(() => {
    validateToken();
  }, []);

  return (
    <AuthStyled>
      <div className="formContainer">
      <h1 className="title text">🛠 BIENVENIDA AL BACKOFFICE 🛠</h1>
      <p className="paragraph text">Desde aquí podrás modificar algunos de los parámetros de tu página web.</p>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <input 
            className="inputs" 
            type="email" 
            placeholder="Usuario"
            {...register('email', {
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
              minLength: 3,
              maxLength: 30
            })}
            name="email"
            />

          {errors.email?.type === 'pattern' && <p className="validation">Introduce un usuario valido.</p>}
          {errors.email?.type === 'required' && <p className="validation">El usuario es obligatorio</p>}
          {errors.email?.type === 'minLength' && <p className="validation">El usuario tiene que tener como mínimo 3 caracteres.</p>}
          {errors.email?.type === 'maxLength' && <p className="validation">El usuario tiene que tener como máximo 30 caracteres.</p>}

          <input 
            className="inputs" 
            type="password" 
            placeholder="Contraseña"
            {...register('password', {
              required: true,
            })}
            name="password"
            />

          {errors.password?.type === 'required' && <p className="validation">La contraseña es obligatoria</p>}

          <button
            className="send"
            type='submit'
          >
            ENTRAR AL BACKOFFICE
          </button>
        </form>
      </div>
    </AuthStyled>
  )
}
