import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const Context = createContext();

export function MyContext(props) {
  const [states, setStates] = useState({
    msg: '',
    pg: '',
    form: ''
  })

  return (
    <Context.Provider value={{ states, setStates }}>
      {props.children}
    </Context.Provider>
  )
}

MyContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Context;
