import { useForm } from "react-hook-form";
import { FormStyled } from "./FormStyled";


export const Form = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <FormStyled>
            <div className="formParts halfContact">
                <img className="contactImage" src='../../../assets/images/contact.jpeg' />
            </div>
            <div className="formParts formContainer">
                <h1 className="title">CONTACTO</h1>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="input"
                        type='text'
                        {...register('firstName', {
                            required: true,
                            minLength: 3,
                            maxLength: 10
                        })}
                        name="firstName"
                        placeholder="Nombre"
                    />
                    {errors.firstName?.type === 'required' && <p className="validation">El nombre es obligatorio</p>}
                    {errors.firstName?.type === 'minLength' && <p className="validation">El nombre tiene que tener como mínimo 3 caracteres.</p>}
                    {errors.firstName?.type === 'maxLength' && <p className="validation">El nombre tiene que tener como máximo 10 caracteres.</p>}
                    <input
                        className="input"
                        type='text'
                        name="lastName"
                        {...register('lastName', {
                            required: true,
                            minLength: 3,
                            maxLength: 30
                        })}
                        placeholder="Apellido"
                    />
                    {errors.lastName?.type === 'required' && <p className="validation">El apellido es obligatorio</p>}
                    {errors.lastName?.type === 'minLength' && <p className="validation">El apellido tiene que tener como mínimo 3 caracteres.</p>}
                    {errors.lastName?.type === 'maxLength' && <p className="validation">El apellido tiene que tener como máximo 10 caracteres.</p>}
                    <input
                        className="input"
                        type='email'
                        name="email"
                        {...register('email', {
                            pattern: /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
                        })}
                        placeholder="Email"
                    />
                    {errors.email?.type === 'pattern' && <p className="validation">El correo electronico no es válido</p>}
                    <textarea
                        className="input textArea"
                        name="message"
                        {...register('message', {
                            minLength: 10,
                            required: true
                        })}
                        placeholder="Escribe tu mensaje..."
                    >
                    </textarea>
                    {errors.message?.type === 'minLength' && <p className="validation">El mensaje tiene que tener como mínimo 10 caracteres.</p>}
                    {errors.message?.type === 'required' && <p className="validation">El mensaje es obligatorio.</p>}
                    <button
                        className="send"
                        type='submit'
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </FormStyled>
    )
};
