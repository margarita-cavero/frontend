import { useForm } from "react-hook-form";
import { FormStyled } from "./FormStyled";


export const Form = () => {

    const { register, reset, formState: { errors, isSubmitSuccessful }, handleSubmit } = useForm({
        mode: 'onChange',
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        }
    });

    const onSubmit = async (data) => {
        reset({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        }, {
            keepErrors: true,
            keepDirty: true,
            keepIsSubmitted: true,
            keepTouched: false,
            keepIsValid: false,
            keepSubmitCount: false,
        });
        await fetch('http://localhost:8080/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
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
                    {errors.lastName?.type === 'maxLength' && <p className="validation">El apellido tiene que tener como máximo 30 caracteres.</p>}
                    <input
                        className="input"
                        type='email'
                        name="email"
                        {...register('email', {
                            required: true,
                            pattern: /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
                            maxLength: 50
                        })}
                        placeholder="Email"
                    />
                    {errors.email?.type === 'pattern' && <p className="validation">Introduce un correo valido.</p>}
                    {errors.email?.type === 'required' && <p className="validation">El correo electronico es obligatorio.</p>}
                    {errors.email?.type === 'maxLength' && <p className="validation">El correo electronico puede tener como máximo 50 caracteres.</p>}
                    <textarea
                        className="input textArea"
                        name="message"
                        {...register('message', {
                            minLength: 30,
                            maxLength: 1000,
                            required: true
                        })}
                        placeholder="Escribe tu mensaje..."
                    >
                    </textarea>
                    {errors.message?.type === 'minLength' && <p className="validation">El mensaje tiene que tener como mínimo 30 caracteres.</p>}
                    {errors.message?.type === 'maxLength' && <p className="validation">El mensaje tiene que tener como máximo 1000 caracteres.</p>}
                    {errors.message?.type === 'required' && <p className="validation">El mensaje es obligatorio.</p>}
                    <button
                        className="send"
                        type='submit'
                    >
                        Enviar
                    </button>
                </form>
                {isSubmitSuccessful === true && <p className="sendMessage">Mensaje enviado correctamente</p>}
            </div>
        </FormStyled>
    )
};
