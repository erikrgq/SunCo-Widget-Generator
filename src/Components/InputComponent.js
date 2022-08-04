import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Field, Label, Input, Checkbox, Hint } from "@zendeskgarden/react-forms";
import { Row, Col, Grid } from '@zendeskgarden/react-grid';
import ToolTip from './ToolTip';

const InputComponent = (props) => {
  const { text, placeholder, type, hint, inputType, key, reducer, inputs, toolTip } = props.data;
  const { value } = props;
  const [isDisabled, setIsDisabled] = useState(true);

  const dispatch = useDispatch();
  const dispatchValue = (reducer, value, key) => {
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
      <Grid>
        <Row>
          <Col sm={0}>
            <ToolTip content={toolTip} title={text} />
          </Col>
          <Col sm={11}>
            <Field>
              <Label isRegular>
                {text}
              </Label>
              <Input required placeholder={placeholder} type={inputType} onChange={(event) => dispatchValue(reducer ,event.target.value, key)} {...value && {'value': value}} />
            </Field>
          </Col>
          </Row>
          <br></br>
      </Grid>
    );
  };

  if (type === 'checkbox') {
    return (
    <Grid>
      <Row>
        <Col sm={0}>
          <ToolTip content={toolTip} title={text} />   
        </Col>
        <Col sm={11}>
          <Field>
            <Checkbox onChange={(event) => dispatchValue(reducer, event.target.checked, key)}>
              <Label isRegular>
                {text}
              </Label>
              <Hint>
                {hint}       
              </Hint>
            </Checkbox>
          </Field>
        </Col>
      </Row>
      <br></br>
    </Grid>
    );
  };

  if (type === 'checkbox-input') {
    return (      
      <>
        <Grid>
          <Row>
            <Col sm={0}>
              <ToolTip content={toolTip} title={text} />
            </Col>
            <Col sm={11}>
              <Field>
                <Checkbox onChange={(event) => {
                    setIsDisabled(!isDisabled)
                    dispatchValue(reducer, event.target.checked, key);
                    }
                  }
                >
                  <Label isRegular>{text}</Label>
                  <Hint>{hint}</Hint>
                </Checkbox>
              </Field>
            </Col>
          </Row>
        </Grid>
        
        <br></br>
        {inputs && inputs.map((input, index) => (
          <Grid key={index}>
            <Row>
              <Col sm={0}>
                <ToolTip content={input.toolTip} title={input.text} />
              </Col>
              <Col sm={11}>
                <Field>
                  <Label isRegular>
                    {input.text}
                  </Label>
                  <Input disabled={isDisabled} placeholder={input.placeholder} type={input.inputType} onChange={(event) => dispatchValue(input.reducer, event.target.value, input.key)} {...value && {'value': value}} /> 
                </Field>
              </Col>
            </Row>
          </Grid>
          ))}
        <br></br>
      </>
    );
  };
};

export default InputComponent;