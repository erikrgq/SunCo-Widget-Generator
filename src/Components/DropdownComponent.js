import React, { useState } from 'react';
import { Dropdown, Field, Menu, Item, Select, Label } from '@zendeskgarden/react-dropdowns';
import { Row, Col } from '@zendeskgarden/react-grid';

const items = [
  { label: 'Compound Message', value: 'Compound Message' },
  { label: 'Carousel Message', value: 'Carousel Message' },
  { label: 'File Message', value: 'File Message' },
  { label: 'Form Message', value: 'Form Message' },
  { label: 'Quick Reply', value: 'Quick Reply' },
  { label: 'Location Request', value: 'Location Request' },
  { label: 'NPS Survey', value: 'NPS Survey' }
];

const DropdownComponent = () => {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
        <Dropdown
          selectedItem={selectedItem}
          onSelect={setSelectedItem}
          downshiftProps={{ itemToString: (item) => item && item.label }}
        >
          <Field>
            <Label>Template</Label>
            <Select>{selectedItem.label}</Select>
          </Field>
          <Menu>
            {items.map(option => (
              <Item key={option.value} value={option}>
                {option.label}
              </Item>
            ))}
          </Menu>
        </Dropdown>
  );
};

export default DropdownComponent;