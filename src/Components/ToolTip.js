import React from 'react';
import { Tooltip, Title, Paragraph } from '@zendeskgarden/react-tooltips';
import info from '../assets/info.png';
import parse from 'html-react-parser';

export default function ToolTip(props) {
  const { content, title } = props;

  if (!content) return;

  return (
    <Tooltip
    type="light"
    size="large"
    placement="top-end"
    zIndex={99}
    content={
      <>
        <Title>{title}</Title>
        <Paragraph>
          {parse(content)}
        </Paragraph>
      </>
    }
    >
        <span>
            <img src={info} />
        </span>
    </Tooltip>
  );
};
