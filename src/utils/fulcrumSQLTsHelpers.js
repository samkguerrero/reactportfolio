import Axios from 'axios';
import fulcrumVarHelpers from '../utils/fulcrumVarHelpers';

function siftInfoData(results) {
  return results;
}

const dataHelpers = {
  getTsData() {
    return Axios.get(`https://api.fulcrumapp.com/api/v2/query?token=737e9590b849b70d7c08e99166d2343ec0c08f913b2ffc4325ded9103bf815b144e1dad4fc47b629&format=json&q=SELECT*FROM"${fulcrumVarHelpers.inFormTimesheet}";`)
      .then((results) =>
        // console.log(results);
        siftInfoData(results))
      .catch((error) =>
        // console.log(error);
         error);
  },
};

export default (dataHelpers);
