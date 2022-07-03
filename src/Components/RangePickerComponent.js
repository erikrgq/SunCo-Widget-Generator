import React, { useState } from 'react';
import { Field, Label, Range, Hint } from '@zendeskgarden/react-forms';
import { useDispatch } from 'react-redux';

const RangePickerComponent = (props) => {
    const { text, key, reducer } = props.data;
    const [rangeValue, setRangeValue] = useState('250');
    const dispatch = useDispatch();
    const dispatchValue = (value) => {
        const payload = {
          key,
          value
        };
    
        dispatch(reducer(payload));
    };

    return (
        <>
            <Field>
                <Label isRegular>{text}</Label>
                <Hint>{rangeValue} Pixels</Hint>
                <Range max={500} step={1} onChange={e => {
                            setRangeValue(e.target.value)
                            dispatchValue(e.target.value);
                        }
                    }
                />
            </Field>
            <br></br>
        </>
    );
};

export default RangePickerComponent;