import { getLogin } from './getLogin';
import { createSelector } from 'reselect';

export const getPassword = createSelector(getLogin, login => login.password);