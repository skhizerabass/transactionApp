import moment from "moment";

export function getDate(date) {
    return moment(date).format('YYYY-MM-DDThh:mm');
}
