import { FormStyled } from "./FormStyled";


export const Form = () => {
    return (
        <FormStyled>
            <div className="formParts halfContact">
                <img className="contactImage" src='../../../assets/images/contact.jpeg' />
            </div>
            <div className="formParts formContainer">
                <h1 className="title">CONTACTO</h1>
                <form className="form">
                    <input className="input" type='text' name="firstName" value="" placeholder="Nombre" />
                    <input className="input" type='text' name=" lastName" value="" placeholder="Apellido" />
                    <input className="input" type='email' name="email" value="" placeholder="Email" />
                    <textarea className="input textArea" placeholder="Escribe tu mensaje..."></textarea>
                    <button className="send" type='submit'>Enviar</button>
                </form>
            </div>
        </FormStyled>
    )
};
