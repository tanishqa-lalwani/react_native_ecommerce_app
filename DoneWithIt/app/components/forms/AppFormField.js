import { useFormikContext } from 'formik';
import React from 'react';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';


function AppFormField({name,...otherProps}) {
    const { setFieldTouched, handleChange, errors, touched,values } = useFormikContext();

    return (
        <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        text = {values.name}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
    );
}

export default AppFormField;