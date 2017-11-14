this.gen = function(conf) {
  'use strict';

  var mConf = {
    'prefix': 'id',
    'separator': '-',
    'sufix': '',
    'size': 8,
    'type': 'alpha'
  };

  if (typeof conf == 'undefined') {
    conf = mConf;
  } else {
    for (var iConf in mConf) {
      if (typeof conf[iConf] == 'undefined') {
        conf[iConf] = mConf[iConf];
      }
    }
  }

  function alpha() {

    var s = '';
    var randomchar = function () {
      var n = Math.floor(Math.random() * 62);
      if (n < 10)
        return n; //1-10
      if (n < 36)
        return String.fromCharCode(n + 55); //A-Z
      return String.fromCharCode(n + 61); //a-z
    };

    while (s.length < conf.size)
      s += randomchar();

    return s;

  }

  function numeric() {

    var sNum = '';

    while (sNum.length < conf.size)
      sNum += '' + Math.floor(Math.random() * 10);

    return sNum;

  }

  function timeStamp() {
    return new Date().getTime();
  }

  function makeId(r) {

    var prefix = '', sufix = '';

    if (typeof conf.prefix == 'string' && (conf.prefix)) {
      prefix = conf.prefix + conf.separator;
    }

    if (typeof conf.sufix == 'string' && (conf.sufix)) {
      sufix = conf.separator + conf.sufix;
    }

    return prefix + r + sufix;

  }

  function getId() {

    var id;

    switch (conf.type) {
      case 'numeric':
        id = numeric();
        break;
      case 'timeStamp':
        id = timeStamp();
        break;
      default: //alpha
        id = alpha();
        break;
    }

    return makeId(id);
  }

  return getId();

};
