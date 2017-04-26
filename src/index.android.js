import React, { Component } from 'react';

import io from 'socket.io-client'

export default class JXS extends Component {
  constructor(props){
    super(props);
    this.state = {
      ledValue:false,
      socket:io('http://localhost:3002'),
    }
  };
  
  componentDidMount(){
    this.state.socket.connect()
  };

  componentWillUnmount(){
    this.state.socket.disconnect()
  };

  _emitEvent(action,data = {}){
    this.state.socket.emit(action, data)
  };

  _handleSwitch(value){
    let action = value ? 'led:on' : 'led:off'
    this._emitEvent(action)
    this.setState({ledValue:value})
  }

  render() {
    return (
      <div>
        <button onClick={()=>this._emitEvent('led:on')}>On</button>
        <button onClick={()=>this._emitEvent('led:off')}>Off</button>
      </div>
    );
  }
}
