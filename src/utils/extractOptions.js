const extractOptions = dataCSV => {
  var options = [];
  dataCSV.data.forEach((element, i) => {
    options = [
      ...options,
      { label: dataCSV.data[i].campaign },
      { label: dataCSV.data[i].channel }
    ];
  });
  return options;
};
export default extractOptions;
