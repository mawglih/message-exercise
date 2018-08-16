import React, { Fragment } from 'react';

const MessageList = ({
  created,
  direction,
  from,
}) => (
  <Fragment>
    <p>
      <span>{from} </span>
      <span>{direction} </span>
      <span>{created} </span>
    </p>
  </Fragment>
);

export default MessageList;