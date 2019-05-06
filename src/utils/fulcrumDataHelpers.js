import Axios from 'axios';
import fulcrumVarHelpers from '../utils/fulcrumVarHelpers';

function siftInfoData(results) {
  return results;
}

const dataHelpers = {
  getInfoData() {
    return Axios.get(fulcrumVarHelpers.alldatajson)
      .then((results) =>
        // console.log(results);
        siftInfoData(results))
      .catch((error) =>
        // console.log(error);
         error);
  },
};

export default (dataHelpers);
