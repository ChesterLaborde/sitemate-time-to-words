// expecting time to be a string in the format like '8:15' or '12:30'
const NUMBERS_TO_WORDS = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  15: 'quarter',
  20: 'twenty',
  27: 'twenty seven',
  30: 'half',
  45: 'quarter'
}


const handleMinutes = (timeObj, hours) => {
  if (Number(timeObj.minutes) <= 30) {
    return NUMBERS_TO_WORDS[Number(timeObj.minutes)] + ' past ';
  } else {
    timeObj.hours = (Number(timeObj.hours) + 1).toString();
    const remainingMinutes = 60 - Number(timeObj.minutes);
    return NUMBERS_TO_WORDS[remainingMinutes] + ' to ';
  }
}

function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  }
  if (time === '12:00') {
    return 'midday';
  }

  const [hours, minutes] = time.split(':');
  const timeObj = {
    hours,
    minutes
  }
  if (timeObj.minutes === '00') {
    return NUMBERS_TO_WORDS[timeObj.hours] + ' o\'clock';
  }

  return handleMinutes(timeObj, hours) + NUMBERS_TO_WORDS[timeObj.hours];

  
}

module.exports = { convertTimeToWords };