import { getLogin } from './getLogin';
import { createSelector } from 'reselect';

export const getUsername = createSelector(getLogin, login => login.username);