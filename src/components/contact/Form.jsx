import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { FormStyled } from "./FormStyled";


export const Form = () => {

    const { formState, onInputChange, onTextAreaChange, onSubmit, onResetForm, firstName, lastName, email, message } = useForm({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    return (
        <FormStyled>
            <div className="formParts halfContact">
                <img className="contactImage" src='../../../assets/images/contact.jpeg' />
            </div>
            <div className="formParts formContainer">
                <h1 className="title">CONTACTO</h1>
                <form className="form" onSubmit={onSubmit}>
                    <input
                        className="input"
                        type='text'
                        name="firstName"
                        value={firstName}
                        onChange={onInputChange}
                        placeholder="Nombre"
                    />
                    <input
                        className="input"
                        type='text'
                        name="lastName"
                        value={lastName}
                        onChange={onInputChange}
                        placeholder="Apellido"
                    />
                    <input
                        className="input"
                        type='email'
                        name="email"
                        value={email}
                        onChange={onInputChange}
                        placeholder="Email"
                    />
                    <textarea
                        className="input textArea"
                        name="message"
                        value={message}
                        onChange={onInputChange}
                        placeholder="Escribe tu mensaje..."
                    >
                    </textarea>
                    <button
                        onClick={onResetForm}
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
