import Axios from 'axios';
import fulcrumVarHelpers from '../utils/fulcrumVarHelpers';

function siftInfoData(results) {
  return results.data.records;
}

const dataHelpers = {
  getInfoData() {
    return Axios.get(fulcrumVarHelpers.timesheetjson)
      .then((results) =>
        // console.log(results);
        siftInfoData(results))
      .catch((error) =>
        // console.log(error);
         error);
  },
};

export default (dataHelpers);
