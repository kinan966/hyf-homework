const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Sopranos",
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: "The Wire",
      days: 2,
      hours: 12,
      minutes: 0,
    },
    {
        title: "The 100",
        days: 2,
        hours: 23,
        minutes: 40,
      },
  ];

  let seriesName = '';
  
  
  function logOutSeriesText() {
    // write code here

    let total = 0;

    for(i = 0 ; i < seriesDurations.length  ;i++){
        
      seriesName = seriesDurations[i].title

      let totalMinToDay = seriesDurations[i].minutes / (24 * 60);
      let totalHourToDay = seriesDurations[i].hours / (24);
      let totalDay = seriesDurations[i].days;

      let totalTime = totalDay + totalHourToDay + totalMinToDay;

      let percentSerie = ((totalTime / 365.2425) / 80) * 100;

      total += percentSerie;

      let percentTime = percentSerie.toFixed(3);


      console.log(seriesName +' took '+ percentTime +' % '+ 'of my life ');

      }  
   console.log('In total that is '+ total +' % of my life ')
  };

       logOutSeriesText()