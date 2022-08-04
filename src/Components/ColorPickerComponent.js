import React, { useState } from 'react';
import { Field, Label, InputGroup, Input } from '@zendeskgarden/react-forms';
import { useDispatch } from 'react-redux';
import { Row, Col, Grid } from '@zendeskgarden/react-grid';
import ToolTip from './ToolTip';

const ColorPickerComponent = (props) => {
  const dispatch = useDispatch();
  const { text, key, reducer, toolTip } = props.data;
  const [color, setColor] = useState(props.defaultColor);

  const dispatchValue = (hex) => {
    hex = hex.split('#')[1];
    
    const payload = {
      key,
      value: hex
    };

    dispatch(reducer(payload));
  }

  return (
    <Grid>
      <Row>
        <Col sm={0}>
          <ToolTip content={toolTip} title={text} />
        </Col>
        <Col sm={11}>
        <Field>
          <Label isRegular>{text}</Label>
          <br></br>
          <InputGroup>
            <Input type="text" value={color} onChange={(event) => setColor(event.target.value)} />
            <input
              style={{"height": "40px", "marginBottom": "0", "borderRadius": "4px"}}
              type="color"
              value={color}
              onChange={(event) => {
                setColor(event.target.value);
                dispatchValue(event.target.value);
              }}/>
          </InputGroup>
          </Field>
        </Col>
      </Row>
        <br></br>
    </Grid>
  )
};

export default ColorPickerComponent;
