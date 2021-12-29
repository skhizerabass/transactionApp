import { Alert } from 'react-native';

export function* onError(error) {
    let message = 'Something went wrong.';
    if (typeof error === 'string') {
        message = error;
    }
    else if (
        typeof error === 'object' &&
        typeof error.Error === 'string'
    ) {
        message = error.Error;
    }
    else if (typeof error === 'object') {

        message = "";

        Object.keys(error).forEach(function (k) {
            message += `${k.toLocaleUpperCase()}: ${error[k]}\n`;
        });
    }

    Alert.alert('Warning', message);
};
