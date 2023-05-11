export const logger = (store) => (next) => (action) => {
  console.log('dispatching', action);
  console.log('before', store.getState());

  const res = next(action);

  console.log('after', store.getState());
  return res;
};
