import { useForm } from "react-hook-form";
import config from "../../../config";
import { AddWorkStyled } from './AddWorkStyled'

export const AddWork = () => {

    const { register, reset, formState: { errors, isSubmitSuccessful }, handleSubmit } = useForm({
        mode: 'onChange',
        defaultValues: {
            originalActor: '',
            title: '',
            character: '',
            year: '',
            imageURL: ''
        }
    });

    const onSubmit = async (data) => {
        reset({
            originalActor: '',
            title: '',
            character: '',
            year: '',
            imageURL: ''
        }, {
            keepErrors: true,
            keepDirty: true,
            keepIsSubmitted: true,
            keepTouched: false,
            keepIsValid: false,
            keepSubmitCount: false,
        });
        await fetch(config.urlAddWork, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    };

    return (
        <AddWorkStyled>
            <div className="formContainer">
                <h1 className="title">🛠 AÑADIR UN NUEVO TRABAJO 🛠</h1>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="inputs"
                        type="text"
                        placeholder="Actor Original"
                        {...register('originalActor', {
                            required: true,
                            minLength: 3,
                            maxLength: 30
                        })}
                        name="originalActor"
                    />

                    {errors.originalActor?.type === 'required' && <p className="validation">El actor original es obligatorio</p>}
                    {errors.originalActor?.type === 'minLength' && <p className="validation">El actor original tiene que tener como mínimo 3 caracteres.</p>}
                    {errors.originalActor?.type === 'maxLength' && <p className="validation">El actor original tiene que tener como máximo 30 caracteres.</p>}

                    <input
                        className="inputs"
                        type="text"
                        placeholder="Título"
                        {...register('title', {
                            required: true,
                            minLength: 3,
                            maxLength: 60
                        })}
                        name="title"
                    />

                    <input
                        className="inputs"
                        type="text"
                        placeholder="Personaje"
                        {...register('character', {
                            required: true,
                            minLength: 3,
                            maxLength: 30
                        })}
                        name="character"
                    />

                    <input
                        className="inputs"
                        type="text"
                        placeholder="Año"
                        {...register('year', {
                            required: true,
                            minLength: 3,
                            maxLength: 30
                        })}
                        name="year"
                    />

                    <input
                        className="inputs"
                        type="text"
                        placeholder="URL de la imagen"
                        {...register('imageURL', {
                            required: true
                        })}
                        name="imageURL"
                    />

                    <button
                        className="send"
                        type='submit'
                    >
                        AÑADIR TRABAJO
                    </button>
                </form>
            </div>
        </AddWorkStyled>
    )
}
