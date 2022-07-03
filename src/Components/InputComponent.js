import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Field, Label, Input, Checkbox, Hint } from "@zendeskgarden/react-forms";

const InputComponent = (props) => {
  const { text, placeholder, type, hint, inputType, key, reducer } = props.data;
  const [isDisabled, setIsDisabled] = useState(true);

  const dispatch = useDispatch();
  const dispatchValue = (value) => {
    const payload = {
      key,
      value
    };

    if (!key) {
      dispatch(reducer(value));
      return;
    };

    dispatch(reducer(payload));
  }

  if (type === 'input') {
    return (
      <Field>
        <Label isRegular>{text}</Label>
        <Input placeholder={placeholder} type={inputType} onChange={(event) => dispatchValue(event.target.value)}/>
      </Field>
    );
  };

  if (type === 'checkbox') {
    return (
    <>
      <Field>
        <Checkbox onChange={(event) => dispatchValue(event.target.checked)}>
          <Label isRegular>{text}</Label>
          <Hint>{hint}</Hint>
        </Checkbox>
      </Field>
      <br></br>
    </>
    );
  };

  if (type === 'checkbox-input') {
    return (      
      <>
        <Field>
          <Checkbox onChange={(event) => {
              setIsDisabled(!isDisabled)
              dispatchValue(event.target.checked);
              }
            }
          >
            <Label isRegular>{text}</Label>
            <Hint>{hint}</Hint>
          </Checkbox>
          <Input disabled={isDisabled} placeholder={placeholder} />
        </Field>
        <br></br>
      </>
    );
  };
};

export default InputComponent;