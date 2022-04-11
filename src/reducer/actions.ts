import { Row, RowFilter, SortOrder } from '../services';

export enum ActionTypes {
  UPDATE_ROW_FILTER = 'UPDATE_ROW_FILTER',
  UPDATE_SORT_ORDER = 'UPDATE_SORT_ORDER',
  UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT',
}

interface UpdateRowFilter {
  type: ActionTypes.UPDATE_ROW_FILTER;
  payload: RowFilter;
}

interface UpdateSortOrder {
  type: ActionTypes.UPDATE_SORT_ORDER;
  payload: { propertyName: keyof Row; sortOrder: SortOrder };
}

interface UpdateSearchText {
  type: ActionTypes.UPDATE_SEARCH_TEXT;
  payload: { propertyName: keyof Row; searchText: string };
}

export type Action = UpdateRowFilter | UpdateSortOrder | UpdateSearchText;

export const updateRowFilter = (rowFilter: RowFilter): Action => ({
  type: ActionTypes.UPDATE_ROW_FILTER,
  payload: rowFilter,
});

export const updateSortOrder = (propertyName: keyof Row, sortOrder: SortOrder): Action => ({
  type: ActionTypes.UPDATE_SORT_ORDER,
  payload: { propertyName, sortOrder },
});

export const updateSearchText = (propertyName: keyof Row, searchText: string): Action => ({
  type: ActionTypes.UPDATE_SEARCH_TEXT,
  payload: { propertyName, searchText },
});
