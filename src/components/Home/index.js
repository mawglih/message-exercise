import React, { Component } from 'react';
import MessageList from '../Message-List';
import Header from '../Header';
import data from 'Data/messages.json';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: data.items,
      unread: 0
    }
  }
    render() {
      const {
        messages,
      } = this.state;
      return(
        <div className="home">
          <div className="headerDiv">
            <Header messages={messages} />
          </div>
          <div className="messageDiv">
            {messages.map(el => {
              return (
                <MessageList
                  key={el.id}
                  created={el.created_at}
                  direction={el.direction}
                  from={el.from}
                  to={el.to[0].number}
                  isNew={el.is_new}
                  text={el.text}
                  handleClick={() => console.log(`${el.id} is clicked`)}
                />
              );
            })}
          </div>
        </div>
      );
    }
}

export default Home;
