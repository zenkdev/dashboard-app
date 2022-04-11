import '../sass/App.scss';

import React, { useReducer } from 'react';
import { initialState, reducer } from '../reducer';
import Header from './Header';
import Main from './Main';
import { AppContext, AppDispatchContext } from './AppContext';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        <div className="app__container">
          <Header />
          <Main />
        </div>
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
