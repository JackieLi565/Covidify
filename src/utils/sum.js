export default function calcDMYavg(object) {
    const days = getDateDiff();
    const months = days/30.417;
    const years = days/365;
    const {
      cases,
      deaths,
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

    const dataDay = {
        cases: Math.round((cases / days) * 100) / 100,
        deaths: Math.round((deaths / days) * 100) / 100,
        hosplitalizations: Math.round((hospitalizations/days) * 1) / 100,
        icu: Math.round((icu/days) * 100) / 100,
        vc1: Math.round((vaccine_coverage_dose_1/days) * 100) / 100,
        vc2: Math.round((vaccine_coverage_dose_2/days) * 100) / 100,
        vc3: Math.round((vaccine_coverage_dose_3/days) * 100) / 100,
        vc4: Math.round((vaccine_coverage_dose_4/days) * 100) / 100,
        va1: Math.round((vaccine_administration_dose_1/days) * 100) / 100,
        va2: Math.round((vaccine_administration_dose_2/days) * 100) / 100,
        va3: Math.round((vaccine_administration_dose_3/days) * 100) / 100,
        va4: Math.round((vaccine_administration_dose_4/days) * 100) / 100,
    };

    const dataMonth = {
      cases: Math.round((cases / months) * 100) / 100,
      deaths: Math.round((deaths / months) * 100) / 100,
      hosplitalizations: Math.round((hospitalizations/months) * 1) / 100,
      icu: Math.round((icu/months) * 100) / 100,
      vc1: Math.round((vaccine_coverage_dose_1/months) * 100) / 100,
      vc2: Math.round((vaccine_coverage_dose_2/months) * 100) / 100,
      vc3: Math.round((vaccine_coverage_dose_3/months) * 100) / 100,
      vc4: Math.round((vaccine_coverage_dose_4/months) * 100) / 100,
      va1: Math.round((vaccine_administration_dose_1/months) * 100) / 100,
      va2: Math.round((vaccine_administration_dose_2/months) * 100) / 100,
      va3: Math.round((vaccine_administration_dose_3/months) * 100) / 100,
      va4: Math.round((vaccine_administration_dose_4/months) * 100) / 100,
    }
    
    const dataYear = {
      cases: Math.round((cases / years) * 100) / 100,
      deaths: Math.round((deaths / years) * 100) / 100,
      hosplitalizations: Math.round((hospitalizations/years) * 1) / 100,
      icu: Math.round((icu/years) * 100) / 100,
      vc1: Math.round((vaccine_coverage_dose_1/years) * 100) / 100,
      vc2: Math.round((vaccine_coverage_dose_2/years) * 100) / 100,
      vc3: Math.round((vaccine_coverage_dose_3/years) * 100) / 100,
      vc4: Math.round((vaccine_coverage_dose_4/years) * 100) / 100,
      va1: Math.round((vaccine_administration_dose_1/years) * 100) / 100,
      va2: Math.round((vaccine_administration_dose_2/years) * 100) / 100,
      va3: Math.round((vaccine_administration_dose_3/years) * 100) / 100,
      va4: Math.round((vaccine_administration_dose_4/years) * 100) / 100,
    }
    
    return [dataDay, dataMonth, dataYear]
  }

  function getDateDiff() {
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