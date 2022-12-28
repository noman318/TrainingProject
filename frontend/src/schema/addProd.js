import * as Yup from "yup";

export const addProdSchema = Yup.object().shape({
  name: Yup.string()
    .min(3)
    .max(30)
    .required("Please enter product name")
    .matches("^[a-zA-Z ]*$", "Only Text Allowed"),
  category: Yup.string()
    .min(3)
    .max(30)
    .required("Please enter product caegory")
    .matches("^[a-zA-Z]*$", "Only Text Allowed"),
  price: Yup.number()
    .positive()
    .integer()
    .required("Please enter price in Number only"),
  description: Yup.string()
    .min(4)
    .max(50)
    .matches("^[a-zA-Z]*$", "Only Text Allowed")
    .required("Please enter product description"),
  manufacturer: Yup.string()
    .min(3)
    .max(50)
    .required("Please enter product manufaturer")
    .matches("^[a-zA-Z]*$", "Only Text Allowed"),
  availableItems: Yup.number()
    .positive()
    .integer()
    .required("Please enter price in Number only"),
});
