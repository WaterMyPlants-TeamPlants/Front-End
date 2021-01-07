import * as yup from "yup";

export default EditPlants({
  mapPropsToValues: values => {
    return {
      number: values.number || "",
      plant: values.plant || "",
      species: values.species || "",
      water: values.water || ""
    };
  },
  validationSchema: yup.object().shape({
    number: yup.number(),
    plant: yup.string(),
    species: yup.string(),
    water: yup.string()
  }),
  handleSubmit: (values, { setStatus }) => {
    axios
      .put("", values)
      .then(response => {
        setStatus(response.data);
      })
      .catch(error => {
        console.log("Error:", error);
      });
  }
})