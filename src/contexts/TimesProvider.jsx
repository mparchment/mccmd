// TimesProvider.js
import { useState, useEffect } from 'react';
import TimesContext from './TimesContext';
import PropTypes from 'prop-types';
import axios from 'axios';

const TimesProvider = ({ children }) => {
  const [apiData, setApiData] = useState({
    times: null,
    hijriMonth: null,
    hijriDay: null,
    hijriYear: null,
  });

  const convertTo12Hour = (time) => {
    const [hours, minutes] = time.split(':');
    const convertedHours = hours % 12 || 12; // If 0, make it 12
    return `${convertedHours}:${minutes}`;
  };

  const normalizeHijriMonth = (month) => {
    return month.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  }

  useEffect(() => {
    axios.get('https://api.aladhan.com/v1/timingsByAddress?address=15200%20New%20Hampshire%20Ave,%20Silver%20Spring,%20MD%2020905')
      .then(response => {
        if (response.data.code === 200) {
          const timings = response.data.data.timings;
          const hijriMonth = response.data.data.date.hijri.month.en;
          const hijriDay = response.data.data.date.hijri.day;
          const hijriYear = response.data.data.date.hijri.year;
  
          setApiData({
            times: {
              Fajr: convertTo12Hour(timings.Fajr),
              Dhuhr: convertTo12Hour(timings.Dhuhr),
              Asr: convertTo12Hour(timings.Asr),
              Maghrib: convertTo12Hour(timings.Maghrib),
              Isha: convertTo12Hour(timings.Isha)
            },
            hijriMonth: normalizeHijriMonth(hijriMonth),
            hijriDay: hijriDay,
            hijriYear: hijriYear,
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, []);  

  return (
    <TimesContext.Provider value={apiData}>
      {children}
    </TimesContext.Provider>
  );
};

TimesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TimesProvider;
