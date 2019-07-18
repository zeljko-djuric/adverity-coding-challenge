const extractOptions = dataCSV => {
  var options = [];
  dataCSV.data.forEach((element, i) => {
    options = [
      ...options,
      { campaign: dataCSV.data[i].campaign },
      { channel: dataCSV.data[i].channel }
    ];
  });
  return options;
};
export default extractOptions;
