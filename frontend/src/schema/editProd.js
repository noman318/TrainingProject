import * as Yup from "yup";

export const editProdSchema = Yup.object().shape({
  name: Yup.string().min(3).max(30).required("Please enter product name"),
  category: Yup.string()
    .min(3)
    .max(30)
    .matches("^[a-zA-Z]*$", "Only Text Allowed")
    .required("Please enter product caegory"),
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
    .matches("^[a-zA-Z]*$", "Only Text Allowed")
    .required("Please enter product manufaturer"),
  availableItems: Yup.number()
    .positive()
    .integer()
    .required("Please enter price in Number only"),
});
