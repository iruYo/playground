function reduce(array, init, func) {
    var accum = init;
  
    array.forEach((element) => (accum = func(accum, element)));
  
    return accum;
  }
  
  function filter(array, pred) {
    var filterer = function (build_a_array, element) {
      if (pred(element)) {
        build_a_array.push(element);
        return build_a_array;
      } else {
        return build_a_array;
      }
    };
  
    return reduce(array, [], filterer);
  }
  
  function map(array, func) {
    var mapper = function (build_a_array, element) {
      build_a_array.push(func(element))
      return build_a_array;
    };
  
    return reduce(array, [], mapper);
  }

  var array = [1, 2, 3, 4, 5]
  var test = map(array, (elm) => elm * 2)
  console.log(test)