import React, { useState } from 'react';
import { Field, Label, Input } from "@zendeskgarden/react-forms";
import { Row, Col } from '@zendeskgarden/react-grid';

const InputComponent = () => {
  return (
        <Field>
            <Label>Template Name</Label>
            <Input />
        </Field>
  );
};

export default InputComponent;