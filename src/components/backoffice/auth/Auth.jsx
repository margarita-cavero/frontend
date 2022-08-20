import { useForm } from "react-hook-form";
import { AuthStyled } from "./AuthStyled";

import config from "../../../config";

export const Auth = () => {

  const { register, reset, formState: { errors, isSubmitSuccessful }, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: {
      user: '',
      password: ''
    }
  });

  const onSubmit = async (data) => {
    reset({
      user: '',
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
    });
  };

  return (
    <AuthStyled>
      <div className="formContainer">
      <h1 className="title text">🛠 BIENVENIDA AL BACKOFFICE 🛠</h1>
      <p className="paragraph text">Desde aquí podrás modificar algunos de los parámetros de tu página web.</p>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <input 
            className="inputs" 
            type="text" 
            placeholder="Usuario"
            {...register('user', {
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
              minLength: 3,
              maxLength: 30
            })}
            name="user"
            />

          {errors.user?.type === 'pattern' && <p className="validation">Introduce un usuario valido.</p>}
          {errors.user?.type === 'required' && <p className="validation">El usuario es obligatorio</p>}
          {errors.user?.type === 'minLength' && <p className="validation">El usuario tiene que tener como mínimo 3 caracteres.</p>}
          {errors.user?.type === 'maxLength' && <p className="validation">El usuario tiene que tener como máximo 30 caracteres.</p>}

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
