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
                            minLength: 2
                        })}
                        name="originalActor"
                    />

                    {errors.originalActor?.type === 'required' && <p className="validation">El actor original es obligatorio</p>}
                    {errors.originalActor?.type === 'minLength' && <p className="validation">El actor original tiene que tener como mínimo 2 caracteres.</p>}

                    <input
                        className="inputs"
                        type="text"
                        placeholder="Título"
                        {...register('title', {
                            required: true,
                            minLength: 3,
                            maxLength: 100
                        })}
                        name="title"
                    />

                    {errors.title?.type === 'required' && <p className="validation">El título es obligatorio</p>}
                    {errors.title?.type === 'minLength' && <p className="validation">El título tiene que tener como mínimo 3 caracteres.</p>}
                    {errors.title?.type === 'maxLength' && <p className="validation">El título tiene que tener como máximo 100 caracteres.</p>}

                    <input
                        className="inputs"
                        type="text"
                        placeholder="Personaje"
                        {...register('character', {
                            required: true,
                            minLength: 3
                        })}
                        name="character"
                    />

                    {errors.character?.type === 'required' && <p className="validation">El personaje es obligatorio</p>}
                    {errors.character?.type === 'minLength' && <p className="validation">El personaje tiene que tener como mínimo 3 caracteres.</p>}

                    <input
                        className="inputs"
                        type="text"
                        placeholder="Año"
                        {...register('year', {
                            required: true,
                            minLength: 4,
                            maxLength: 4
                        })}
                        name="year"
                    />

                    {errors.year?.type === 'required' && <p className="validation">El año es obligatorio</p>}
                    {errors.year?.type === 'minLength' && <p className="validation">El año tiene que tener 4 caracteres.</p>}
                    {errors.year?.type === 'maxLength' && <p className="validation">El año tiene que tener 4 caracteres.</p>}

                    <input
                        className="inputs"
                        type="text"
                        placeholder="URL de la imagen"
                        {...register('imageURL', {
                            required: true
                        })}
                        name="imageURL"
                    />

                    {errors.imageURL?.type === 'required' && <p className="validation">La imagen es obligatoria</p>}

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
