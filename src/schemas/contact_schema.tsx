import * as yup from "yup";

const phoneRegex =
/^(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/;

export const ContactSchema = yup.object().shape({
first_name: yup.string().required("This field is required"),
last_name: yup.string().required("This field is required"),
phone_number: yup.string().matches(phoneRegex, "Phone number is not valid"),
email_address: yup.string().required("This field is required").email(),
message: yup.string().required("This field is required"),
});

