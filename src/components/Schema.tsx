import * as yup from "yup";
const phoneRegex =
  /^(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/;
const einRegex = /([0-9]{9})|([0-9]{3}-[0-9]{2}-[0-9]{4})|([0-9]{2}-[0-9]{7})/;
const requiredField = "This field is required";
const validEmailField = "Should be a valid email";
export const schemaYup = yup.object().shape({
  name: yup.string().required(requiredField),
  company_email: yup.string().required(requiredField).email(validEmailField),
  companyvendor_name: yup.string().required(requiredField),
  ein: yup
    .string()
    .matches(einRegex, "EIN is not valid")
    .required(requiredField),
  company_address: yup.string().required(requiredField),
  phone_number: yup
    .string()
    .matches(phoneRegex, "Phone number is not valid")
    .required(requiredField),
  personal_email: yup.string().email(validEmailField).required(requiredField),
  company_description: yup.string().required(requiredField),
  trueInfo: yup.boolean().oneOf([true], "You need to confirm this field"),
});
