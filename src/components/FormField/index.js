import React from 'react';
import PropTypes from 'prop-types';
import {
  FormFieldWrapper, Label, Input, LabelText,
} from './style';

function FormField({
  label, type, name, value, onChange,
}) {
  const fieldId = `id_${name}`;
  const isTextArea = type === 'textarea';
  const tag = isTextArea ? 'textarea' : 'input';

  const hasValue = value.lenght;

  return (
    <FormFieldWrapper>
      <Label
        htmlFor={fieldId}
      >
        <Input
          as={tag}
          id={fieldId}
          type={type}
          value={value}
          name={name}
          hasValue={hasValue}
          onChange={onChange}
        />
        <LabelText>
          {label}
          :
        </LabelText>
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default FormField;
