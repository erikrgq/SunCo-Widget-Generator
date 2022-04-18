import React from 'react'
import DropdownComponent from './DropdownComponent';
import InputComponent from './InputComponent';
import { Row, Col } from '@zendeskgarden/react-grid';
import CarouselComponent from './CarouselComponent';

const TemplateComponent = () => {
  return (
    <Row justifyContent="center">
        <Col sm={5}>
            <InputComponent />
            <DropdownComponent />
            <CarouselComponent />
        </Col>
    </Row>
  )
}

export default TemplateComponent;
