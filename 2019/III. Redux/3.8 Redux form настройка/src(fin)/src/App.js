import React from 'react';
import { connect } from 'react-redux'

import Form from './form'

import './App.scss';

function App(props) {
  const submit = value => {
    console.info(value)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <span className="count">{props.count}</span>
        <div style={{ display: 'flex' }}>
          <button className="button button--border" onClick={props.inc}><span />+</button>
          <button className="button button--border" onClick={props.dec}><span />-</button>
        </div>
        <div>
          <Form onSubmit={submit} />
        </div>
      </header>
    </div>
  );
}

const ms2props = (state) => ({
  count: state.count
})

const mDispatch2props = (dispatch) => ({
  inc: () => dispatch({ type: 'INCREMENT' }),
  dec: () => dispatch({ type: 'DICREMENT' })
})

export default connect(ms2props, mDispatch2props)(App);
