import { RowFilter, SortOrder } from '../services';
import { Action, ActionTypes } from './actions';

export interface AppState {
  rowFilter: RowFilter;
  sortOrder: {
    [propertyName: string]: SortOrder;
  };
  searchText: {
    [propertyName: string]: string;
  };
}

export const initialState: AppState = {
  rowFilter: RowFilter.All,
  sortOrder: {
    data: SortOrder.Ascending,
  },
  searchText: {},
};

export const reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case ActionTypes.UPDATE_ROW_FILTER:
      return {
        ...state,
        rowFilter: action.payload,
      };
    case ActionTypes.UPDATE_SORT_ORDER: {
      const { propertyName, sortOrder } = action.payload;
      return {
        ...state,
        sortOrder: {
          ...state.sortOrder,
          [propertyName]: sortOrder,
        },
      };
    }
    case ActionTypes.UPDATE_SEARCH_TEXT: {
      const { propertyName, searchText } = action.payload;
      return {
        ...state,
        searchText: {
          ...state.searchText,
          [propertyName]: searchText,
        },
      };
    }
    default:
      return state;
  }
};
