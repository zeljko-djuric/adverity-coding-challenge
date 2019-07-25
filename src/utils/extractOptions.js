const extractOptions = data => {
  var options = [];
  data.data.forEach((element, i) => {
    options = [
      ...options,
      { label: data.data[i].campaign },
      { label: data.data[i].channel }
    ];
  });
  console.log(options);

  return options;
};
export default extractOptions;
