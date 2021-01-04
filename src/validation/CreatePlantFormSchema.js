import * as yup from 'yup';

export default yup.object().shape({
    nickname: yup
     .string()
     .required('Plant nickname is required.'),
    species: yup
     .string()
     .required('Plant species is required.'),
    waterfrequency: yup
     .string()
     .required('The frequency of watering plant is required.'),
})