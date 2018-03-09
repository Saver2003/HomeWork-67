import React, {Component} from 'react';
import './NumLock.css';

import {connect} from 'react-redux';

class NumLock extends Component {
  componentDidMount() {
    document.body.onkeydown = (e) => {
      if (e.keyCode >= 96 && e.keyCode <= 105) {
        this.props.addNum(e.key);
      }
      
      if (e.keyCode === 13) {
        console.log(e.key);
        this.props.validNum();
      }
      
      if (e.keyCode === 8) {
        this.props.deleteNum();
      }
    }
  }
  render() {
    let buttons = [];
    for (let i = 0; i < 10; i++) {
      buttons.push(<button onClick={() => this.props.addNum(i)} key={i}>{i}</button>);
    }
    return (
      <div className="NumLock">
        <div className="Digit" style={{background: this.props.enterAccess ? '#2ECC5C' : null}}>{this.props.numCode.map(() => '*')}</div>
        {buttons}
        <button onClick={this.props.deleteNum}>Back</button>
        <button onClick={this.props.validNum}>Enter</button>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    numCode: state.numCode,
    id: state.id,
    text: state.text,
    enterAccess: state.enterAccess
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addNum: (value) => dispatch({type: 'ADD_NUMBER', num: value}),
    deleteNum: () => dispatch({type: 'DELETE_NUMBER'}),
    validNum: () => dispatch({type: 'VALID_NUMBER'})
    
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NumLock);