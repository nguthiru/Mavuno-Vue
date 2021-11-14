import moment from 'moment'

function format_date(date) {
    return moment(date).format("Do MMM YYYY");
}

export default  format_date