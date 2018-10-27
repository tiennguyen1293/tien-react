export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

export const changeLanguage = payload => dispatch => {
  dispatch({
    type: CHANGE_LANGUAGE,
    payload,
  });
};
