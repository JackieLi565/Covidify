export default function calcDMYavg(object, date) {
  const {
    cases,
    deaths,
    hospitalizations,
    tests_completed,
    icu,
    vaccine_coverage_dose_1,
    vaccine_coverage_dose_2,
    vaccine_coverage_dose_3,
    vaccine_coverage_dose_4,
    vaccine_administration_dose_1,
    vaccine_administration_dose_2,
    vaccine_administration_dose_3,
    vaccine_administration_dose_4
  } = object;

  //make function for calculation
  const dataDay = {
      cases: Math.round((cases / date) * 100) / 100,
      deaths: Math.round((deaths / date) * 100) / 100,
      hosplitalizations: Math.round((hospitalizations/date) * 100) / 100,
      testComplete: Math.round((tests_completed/date) * 100) / 100, //average
      icu: Math.round((icu/date) * 100) / 100,
      vc1: Math.round((vaccine_coverage_dose_1/date) * 100) / 100,
      vc2: Math.round((vaccine_coverage_dose_2/date) * 100) / 100,
      vc3: Math.round((vaccine_coverage_dose_3/date) * 100) / 100,
      vc4: Math.round((vaccine_coverage_dose_4/date) * 100) / 100,
      va1: Math.round((vaccine_administration_dose_1/date) * 100) / 100,
      va2: Math.round((vaccine_administration_dose_2/date) * 100) / 100,
      va3: Math.round((vaccine_administration_dose_3/date) * 100) / 100,
      va4: Math.round((vaccine_administration_dose_4/date) * 100) / 100,
  };
  
  return dataDay;
}

export function formatRange(array) {
  let cases;
  let deaths;
  let hospitalizations;
  let tests_completed;
  let icu;
  let vaccine_coverage_dose_1;
  let vaccine_coverage_dose_2;
  let vaccine_coverage_dose_3;
  let vaccine_coverage_dose_4;
  let vaccine_administration_dose_1;
  let vaccine_administration_dose_2;
  let vaccine_administration_dose_3;
  let vaccine_administration_dose_4;

  array.forEach(object => {
    cases = object.cases
    deaths = object.cases
    hospitalizations = object.hospitalizations
    tests_completed = object.tests_completed_daily
    icu = object.icu
    vaccine_coverage_dose_1 = object.vaccine_coverage_dose_1
    vaccine_coverage_dose_2 = object.vaccine_coverage_dose_2
    vaccine_coverage_dose_3 = object.vaccine_coverage_dose_3
    vaccine_coverage_dose_4 = object.vaccine_coverage_dose_4
    vaccine_administration_dose_1 = object.vaccine_administration_dose_1
    vaccine_administration_dose_2 = object.vaccine_administration_dose_2
    vaccine_administration_dose_3 = object.vaccine_administration_dose_3
    vaccine_administration_dose_4 = object.vaccine_administration_dose_4
  })

  return {
    cases: helper(cases,array.length), 
    deaths: helper(deaths,array.length),
    hosplitalizations: helper(hospitalizations,array.length),
    testComplete: helper(tests_completed,array.length),
    icu: helper(icu,array.length),
    vc1: helper(vaccine_coverage_dose_1,array.length),
    vc2: helper(vaccine_coverage_dose_2,array.length),
    vc3: helper(vaccine_coverage_dose_3,array.length),
    vc4: helper(vaccine_coverage_dose_4,array.length),
    va1: helper(vaccine_administration_dose_1,array.length),
    va2: helper(vaccine_administration_dose_2,array.length),
    va3: helper(vaccine_administration_dose_3,array.length),
    va4: helper(vaccine_administration_dose_4,array.length)
  }
}

function round2Deci (double) {

}

function helper(average, size) {
  return  Math.round((average / size) * 100) / 100;
}

export function formatCustom(object) {
  const {
    cases,
    deaths,
    tests_completed_daily,
    hospitalizations,
    icu,
    vaccine_coverage_dose_1,
    vaccine_coverage_dose_2,
    vaccine_coverage_dose_3,
    vaccine_coverage_dose_4,
    vaccine_administration_dose_1,
    vaccine_administration_dose_2,
    vaccine_administration_dose_3,
    vaccine_administration_dose_4
  } = object;

  const formatted = {
    cases: cases,
    deaths: deaths,
    hosplitalizations: hospitalizations,
    testComplete: tests_completed_daily, //day of that day
    icu: icu,
    vc1: vaccine_coverage_dose_1,
    vc2: vaccine_coverage_dose_2,
    vc3: vaccine_coverage_dose_3,
    vc4: vaccine_coverage_dose_4,
    va1: vaccine_administration_dose_1,
    va2: vaccine_administration_dose_2,
    va3: vaccine_administration_dose_3,
    va4: vaccine_administration_dose_4,
  };
  return formatted;
}

 export function getDateDiff() {
  const march132020 = new Date('2020-03-13');
  const today = new Date();
  const oneDay = 1000 * 60 * 60 * 24; // Number of milliseconds in a day
  const diffInMilliseconds = today - march132020;
  const diffInDays = Math.floor(diffInMilliseconds / oneDay);
  return diffInDays;
}

export function getDate() {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();

  // Add leading zeros
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }

  let formattedDate = year + "-" + month + "-" + day;
  return formattedDate;
}