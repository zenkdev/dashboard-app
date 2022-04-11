import React from 'react';
import { Action, AppState, initialState } from '../reducer';

export const AppContext = React.createContext<AppState>(initialState);

export const AppDispatchContext = React.createContext<React.Dispatch<Action>>(() => {});
