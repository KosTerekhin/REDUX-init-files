import { createSelector } from 'reselect';

export const selectUi = (state) => state.ui;

export const selectLoading = createSelector([ selectUi ], (ui) => ui.loading);
