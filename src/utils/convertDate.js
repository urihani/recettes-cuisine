import moment from "moment";
import "moment/locale/fr";

function convertDate(timestamp) {
  let date = new Date(timestamp);
  moment.locale("fr");
  return moment(date).format("D MMMM YYYY à LTS");
}

export default convertDate;
