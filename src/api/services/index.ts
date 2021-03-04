import { ajaxWrapper } from '../ajaxWrapper/';

import { urls } from '../constant/';


export const getCards = () => {
  const url = `${urls.API}/5d145fa22f0000ff3ec4f030/`;
  return ajaxWrapper({
    method: 'GET',
    url,
  }).then((state) => state.data);
};

export const getSuccess = () => {
  const url = `${urls.API}/5d8de422310000b19d2b517a/`;
  return ajaxWrapper({
    method: 'GET',
    url,
  }).then((state) => state.data);
};

export const getFail = () => {
  const url = `${urls.API}/5d8de441310000a2612b517c/`;
  return ajaxWrapper({
    method: 'GET',
    url,
  }).then((state) => state.data);
};