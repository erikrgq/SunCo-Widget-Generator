import React, { useState } from 'react';
import { ColorpickerDialog } from '@zendeskgarden/react-colorpickers';
import { Field, Label, InputGroup } from '@zendeskgarden/react-forms';
import { useDispatch } from 'react-redux';

const ColorPickerComponent = (props) => {
  const { text, key, reducer } = props.data;
  const [color, setColor] = useState('#ffffff')
  const dispatch = useDispatch();
  const dispatchValue = (hex) => {
    const payload = {
      key,
      value: hex
    };

    dispatch(reducer(payload));
  }
  return (
    <>
      <Field>
          <Label isRegular>{text}</Label>
          <InputGroup style={{ zIndex: 1 }}>
          <ColorpickerDialog
            color={color}
            zIndex={10}
            focusInset
            buttonProps={{
              'aria-label': 'choose your favorite color'
            }}
            onChange={(color) => {
              setColor(color.hex);
              dispatchValue(color.hex);
            }}
          />
        </InputGroup>
      </Field>
      <br></br>
    </>
  )
};

export default ColorPickerComponent;
