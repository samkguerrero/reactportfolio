import Moment from 'moment';
import Axios from 'axios';
import fulcrumVarHelpers from '../utils/fulcrumVarHelpers';

const startDate = Moment(fulcrumVarHelpers.startDate, 'MM/DD/YYYY');
const endDate = Moment(fulcrumVarHelpers.endDate, 'MM/DD/YYYY');
const todayDate = Moment();

const daysLeft = endDate.diff(todayDate, 'days');
const daysPassed = todayDate.diff(startDate, 'days');

const totalDays = daysLeft + daysPassed;
const timePassedPercent = Math.floor((daysPassed / totalDays) * 100);

const passedMilestones = [];
const nextMilestones = [];
const milestonesListMoments = fulcrumVarHelpers.milestones.map((value) => Moment(value, 'MM/DD/YYYY'));
const milestonesListMomentsOrder = milestonesListMoments.sort((left, right) => left.diff(right));
milestonesListMomentsOrder.unshift(startDate);

function milestoneBlocks() {
  const pairs = [];
  milestonesListMomentsOrder.forEach((value, i) => (i !== milestonesListMomentsOrder.length - 1 ?
    pairs.push([value, milestonesListMomentsOrder[i + 1]]) : null));
  return pairs;
}

function placeMilestones() {
  fulcrumVarHelpers.milestones.forEach((element) => {
    const milestoneMoment = Moment(element, 'MM/DD/YYYY');
    if (todayDate.isBefore(milestoneMoment)) {
      nextMilestones.push(milestoneMoment);
    } else {
      passedMilestones.push(milestoneMoment);
    }
  });
}

function sortMilestones() {
  nextMilestones.sort((left, right) => left.diff(right));
  passedMilestones.sort((left, right) => left.diff(right));
}

function getCurrentMilestone() {
  placeMilestones();
  sortMilestones();
  const theCurrentMilestone = typeof (nextMilestones[0]) !== 'undefined' ?
    nextMilestones[0].toDate().toLocaleDateString() :
    passedMilestones[passedMilestones.length - 1].toDate().toLocaleDateString();
  return theCurrentMilestone;
}

function siftgetAllMs(results) {
  const totalCases = results.data.rows[0].count;
  const milestonesNum = fulcrumVarHelpers.milestones.length;
  const casesPerMilestones = Math.floor(totalCases / milestonesNum);

  const resultResponse = { casesPerMilestones, milestonesNum, totalCases };
  return resultResponse;
}

function enumerateDaysBetweenDates(startHere, endHere) {
  const dates = [];

  const currDate = startHere.clone().startOf('day');
  const lastDate = endHere.clone().startOf('day');
  dates.push(Moment(startHere.toISOString(), 'YYYY-MM-DDTHH:mm:ss.SSSSZ'));

  while (currDate.add(1, 'days').diff(lastDate) < 0) {
    dates.push(Moment(currDate.toDate().toISOString(), 'YYYY-MM-DDTHH:mm:ss.SSSSZ'));
  }
  return dates;
}

const dateHelpers = {
  daysLeft,
  daysPassed,
  timePassedPercent,
  totalDays,
  milestonesListMomentsOrder,
  allDatesList: enumerateDaysBetweenDates(startDate, endDate),
  milestoneBlocks: milestoneBlocks(),
  startDateString: fulcrumVarHelpers.startDate,
  endDateString: fulcrumVarHelpers.endDate,
  currentMilestone: getCurrentMilestone(),
  lastPastMs: passedMilestones,
  nextUpMs: nextMilestones,
  getAllMs() {
    return Axios.get(`https://api.fulcrumapp.com/api/v2/query?token=737e9590b849b70d7c08e99166d2343ec0c08f913b2ffc4325ded9103bf815b144e1dad4fc47b629&format=json&q=SELECT count(*)FROM"${fulcrumVarHelpers.inFormOSLHUA}";`)
      .then((results) =>
        // console.log(results);
        siftgetAllMs(results))
      .catch((error) =>
        // console.log(error);
         error);
  },
};

export default (dateHelpers);
