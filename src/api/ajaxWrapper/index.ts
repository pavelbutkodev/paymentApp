import axios from 'axios';


export const ajaxWrapper = (params: any) => {
  let defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
  };

  if (!params.withAuth) {
    defaultHeaders = {
      ...defaultHeaders,
    };
  }

  const headers = {
    ...defaultHeaders,
    ...params.headers,
  };

  return axios({
    headers,
    method: params.method,
    url: params.url,
    data: params.data,
  });
};
