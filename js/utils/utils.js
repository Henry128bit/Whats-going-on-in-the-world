// тут находятся вспомогательные функции

// выводит текущую дату
const currentData = function(type) {
  let d = new Date();
  return d;
};

// выводит дату которая была указанное число дней назад
const daysAgo = function(days) {
  let d = new Date();
  let dtms = d.valueOf();
  let dAgo = new Date(dtms - ((24 * 60 * 60 * 1000) * days));
  return dAgo;
};

// конвертирует время в нужный формат
const timeConverter = function(time, timeType) {
  let castomData = new Date(time);
  if (timeType === 'yarsON') {
    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };

    return castomData.toLocaleString('ru', options).split(' ').slice(0, 2).join(' ') + ',' + ' ' + castomData.getFullYear();

  } else if (timeType === 'yarsOFF') {
    const options = {
      day: 'numeric',
      weekday: 'short'
    };

    return castomData.toLocaleString('ru', options).split(',').reverse().join(',');
  }
};

// считает кол-во упоминаний
const counter = function(data, type, topic) {
  let count = 0;

  if (type === "headline") {
    data.forEach(element => {
      if (element.title.toLowerCase().includes(topic.toLowerCase())) {
        count ++;
      }
    });

  } else if (type === "days") {
    if(data.toLowerCase().includes(topic.toLowerCase())) {
      count ++;
    }
  }
  return count;
};

// получает день недели
const getDay = function(time) {
  let data = new Date(time);
  return data.getDay();
};

export {
  currentData,
  daysAgo,
  timeConverter,
  counter,
  getDay
};