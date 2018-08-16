import React from 'react';
import moment from 'moment';
import './Messagelist.css';

const MessageList = ({
  created,
  direction,
  from,
  to,
  isNew,
  text,
  handleClick,
}) => (
  <div className={isNew ? 'bold' : 'regular'} onClick={handleClick}>
    <div className="list">
      <span>From: {from} </span>
      <span>{direction} </span>
      <span>{moment(created).format('MMMM Do YYYY, h:mm:ss a')} </span>
      <span>To: {to} </span>
      <span> Message: {text}</span>
    </div>
  </div>
);

export default MessageList;