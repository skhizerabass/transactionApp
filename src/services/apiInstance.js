import axios from 'axios';

import values from 'src/constants/values';


const apiInstance = axios.create({
    baseURL: values.BASE_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-api-version': '3.1',
    },
    timeout: 12000,
});

//Setting authentication token for logged In user
function setAuthToken(token, ID) {
    apiInstance.defaults.headers.Authorization = `Bearer ${token}`;
};

//Removing authentication token for logged out user
function removeAuthToken() {
    delete apiInstance.defaults.headers.Authorization;
}



async function apiCall(url, method, { data, params }, connector) {
    let compUrl = `${url}${connector ? '/' + connector + '/' : ''}`;
    params = params ? params : {};
    console.log(values.BASE_URL + compUrl, method, data);
    try {
        return await apiInstance.request({ url: compUrl, method, data, params });
    } catch (error) {

        console.log(error.response);
        if (error && error.response && error.response.data)
            return Promise.reject(error.response.data);

        return Promise.reject("Request Time Out.")
    }

};

export {
    apiCall,
    removeAuthToken,
    setAuthToken
};
