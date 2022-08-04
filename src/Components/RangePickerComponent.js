import React, { useState } from 'react';
import { Field, Label, Range, Hint } from '@zendeskgarden/react-forms';
import { useDispatch } from 'react-redux';
import { Row, Col, Grid } from '@zendeskgarden/react-grid';
import ToolTip from './ToolTip';

const RangePickerComponent = (props) => {
    const { text, key, reducer, toolTip } = props.data;
    const [rangeValue, setRangeValue] = useState('58');
    const dispatch = useDispatch();
    const dispatchValue = (value) => {
        const payload = {
          key,
          value
        };
    
        dispatch(reducer(payload));
    };

    return (
        <Grid>
            <Row>
                <Col sm={0}>
                    <ToolTip content={toolTip} title={text} />
                </Col>
                <Col sm={11}>
                    <Field>
                        <Label isRegular>{text}</Label>
                        <Hint>{rangeValue} Pixels</Hint>
                        <Range max={75} step={1} onChange={e => {
                                    setRangeValue(e.target.value)
                                    dispatchValue(e.target.value);
                                }
                            }
                        />
                    </Field>
                </Col>
            </Row>
            <br></br>
        </Grid>
    );
};

export default RangePickerComponent;