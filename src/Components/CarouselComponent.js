import React, { useState } from 'react';
import { Field, Label, Input, Textarea } from "@zendeskgarden/react-forms";
import { Button } from '@zendeskgarden/react-buttons';
import { Row, Col } from '@zendeskgarden/react-grid';

const CarouselComponent = () => {
    const [items, setItems] = useState([]);
    const [item, setItem] = useState(
        {
            title: '',
            description: '',
            mediaUrl: '',
            actions: [
                {
                    type: 'postback',
                    text: 'Learn more',
                    payload: 'NOOP'
                },
                {
                    type: 'postback',
                    text: 'Check availability',
                    payload: 'NOOP'
                }
            ]
        }
    );

    return (
        <div>
            <h2>Carousel</h2>
            <div>
                <h3>Carousel Pane #1</h3>
                <Field>
                    <Input placeholder='Pane Image' />
                </Field>
                <Field>
                    <Input placeholder='Pane Title'/>
                </Field>
                <Field>
                    <Textarea placeholder='Pane Description' />
                </Field>
                <Field>
                    <Input placeholder='CTA' />
                </Field>
            </div>
            <Row justifyContent="between">
                <Col>
                    <Button isDanger>Delete Pane</Button>
                </Col>
                <Col textAlign='end'>
                    <Button onClick={() => console.log('yo')}>Add Pane</Button>
                </Col>
            </Row>
        </div>
    );
};

export default CarouselComponent;
