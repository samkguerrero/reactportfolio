import Fulcrum from 'fulcrum-app';
import fulcrumVarHelpers from '../utils/fulcrumVarHelpers';

const fulcrum = new Fulcrum({
  api_key: fulcrumVarHelpers.apiKey,
});

let formResult = {};

const formFound = function formFound(error, form) {
  if (error) {
    return 'Error';
  }
  formResult = form;
  return form;
};

fulcrum.forms.find(fulcrumVarHelpers.inFormTimesheet, formFound);

const appHelpers = {
  getAppInfo() {
    return formResult;
  },
};

export default (appHelpers);
