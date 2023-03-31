import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

/**
 * Send HTTP API request
 * @param {*} method
 * @param {*} endPoint
 * @param {*} data jsonBody
 * @returns
 */
export const request = (method, endPoint, data) => {
  const url = `${API_BASE_URL}/${endPoint}`;
  console.log(`[HTTP][${method}][REQUEST] ${url}`);
  const headers = {
    'Content-Type': 'application/json',
  };

  return axios({
    method,
    url,
    data,
    headers
  })
    .then(response => {
      console.log(`[HTTP][${method}][SUCCESS] ${url}`);
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(`[HTTP][${method}][ERROR] ${url}`);
      if (error.response) {
        console.log(`[HTTP][${method}][ERROR] ${error.response.data}`);
        return error.response.data;
      }
      return error;
    });
};

export const axiosInstance = axios.create(); 
