// import { useState } from 'react';


// export const useForm = (initialForm = {}) => {

//     const [formState, setFormState] = useState(initialForm);

//     const onInputChange = ({ target }) => {
//         const { name, value } = target;
//         setFormState({
//             ...formState,
//             [name]: value
//         });
//     };

//     const onResetForm = () => {
//         setFormState(initialForm);
//     };

//     const onSubmit = (e) => {
//         e.preventDefault();
//         // onSubmit?.(formState);
//         console.log('Enviado');
//     }

//     return {
//         ...formState,
//         formState,
//         onInputChange,
//         onSubmit,
//         onResetForm
//     };
// };