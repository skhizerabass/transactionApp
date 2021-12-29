import { apiCall } from "./apiInstance";

function signup(username, password, name, lastName, phone, email) {
    return apiCall('auth/register', 'post', {
        data: {
            username,
            password,
            email,
            first_name: name,
            last_name: lastName,
            phone: phone
        }
    });

}

function login(username, password) {
    return apiCall('auth/login', 'post', {
        data: {
            username,
            password
        }
    });

}

//to be called on splash screen for new access token if user is logged in
function refresh(refresh) {
    return apiCall('auth/refresh', 'post', {
        data: {
            refresh
        }
    });

}

function getUserInfo() {
    return apiCall('user', 'get', {
        params: {
        }
    });

}


function updateUserInfo(id, params) {
    return apiCall('user/profile/' + id + "/", 'patch', {
        params
    });

}


function updateDOBApi(id, data) {
    return apiCall(`user/plaid/${id}/`, 'patch', {
        data
    });

}

function getUserProfile(id) {
    return apiCall('user/profile/' + id + "/", 'get', {
        params: {}
    });

}


function getUserBudget() {
    return apiCall('user/budget', 'get', {
        params: {}
    });

}

function getUserEnvelopes(id) {
    return apiCall('user/envelopes', 'get', {
        params: {}
    }, id);

}

function getUserEssentials(id) {
    return apiCall('user/essentials', 'get', {
        params: {}
    }, id);

}

function createEnvelope(data) {
    return apiCall('envelope/', 'post', {
        data
    });

}

function updateEnvelope(data, id) {
    return apiCall('envelope/' + id, 'patch', {
        data

    });

}

function removeEnvelope(id) {
    return apiCall('envelope', 'delete', {
        params: {
            id
        }
    });

}

function envelopeTransaction(id, amount, merchant) {
    return apiCall('envelope/transaction', 'post', {
        data: {
            id
        }
    });

}

function getPlaidLink(id) {
    return apiCall(`plaid/create_token/${id}/`, 'get', {
        params: {}
    });

}

function getPlaidToken(id, access_token) {
    // console.log(id, token);
    return apiCall('plaid/set_token/', 'post', {
        data: {
            access_token,
            id
        }
    });

}

function updatePlaid(id, token) {

    return apiCall('plaid/get_access_token', 'patch', {
        params: {
            id,
            token
        }
    });

}

function getAccountBalance(id) {
    return apiCall('plaid/get_account_bal', 'get', {
        params: {
            id
        }
    });

}

function getPlaidTransactions(id) {
    return apiCall('plaid/get_transactions', 'get', {
        params: {
            id
        }
    });

}

function getPlaces(long, lat, Category) {
    return apiCall('places/locations', 'post', {
        data: {
            long,
            lat,
            Category
        }
    });

}

function createTransactions(data) {
    return apiCall('transactions/', 'post', {
        data
    });

}


function getTransactionsByEnvelope(id) {
    return apiCall('transactions/' + id, 'get', {
        params: {}
    });

}

function getTransactions(id, envelope) {
    var route = "transactions/" + id + "/";
    if (envelope) {
        route += (envelope);
    }
    console.log(envelope);
    return apiCall(route, 'get', {
        params: {}
    });

}


function updatePlaidUser(data, id) {

    return apiCall('user/plaid', 'patch', {
        data
    }, id);

}



function setFeedBack(data) {

    return apiCall('feedback/post_feedback', 'post', {
        data
    });

}

function shiftTransactions(transID, envID) {
    return apiCall('transactions/' + transID + "/" + envID + "/", 'patch', {
        params: {}
    });
}

function createEnvelopes(envelopes) {
    return apiCall('envelope/essentials', 'post', {
        data: {
            envelopes
        }
    });

}
export default {
    createEnvelopes,
    setFeedBack,
    signup,
    login,
    refresh,
    getPlaidLink,
    getPlaidToken,
    getUserProfile,
    updateUserInfo,
    getTransactions,
    createEnvelope,
    updatePlaidUser,
    getUserEnvelopes,
    updateEnvelope,
    updateDOBApi,
    getUserEssentials,
    createTransactions,
    getPlaces,
    getTransactionsByEnvelope,
    shiftTransactions

}
