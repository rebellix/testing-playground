import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../src/redux/reducers';
import { middlewares } from '../src/redux/createStore';

export const findByDataTest = (component, attr) => component.find(`[data-test='${attr}']`);

export const checkProps = (component, expectedProps) =>
  checkPropTypes(component.propTypes, expectedProps, 'props', component.name);

export const testStore = (initState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initState);
}