import React, { Component, Fragment } from 'react';
import MessageList from '../Message-List';
import data from 'Data/messages.json';

class Home extends Component {
  componentDidMount() {
    const messages = data.items;
    console.log(data);
    console.log(messages);
  }

    render() {
      return(
        <Fragment>
          {data.items.map(el => {
            return (
              <MessageList
                key={el.id}
                created={el.created_at}
                direction={el.direction}
                from={el.from}
              />
            );
          })}
        </Fragment>
      );
    }
}

export default Home;
