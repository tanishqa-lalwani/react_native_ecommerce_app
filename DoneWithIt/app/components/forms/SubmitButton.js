import React from "react";
import { useFormikContext } from "formik";
import AppButton from "../AppButton";


function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} color = "#fc5c65"/>;
}

export default SubmitButton;
