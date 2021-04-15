const greetingsController = (id) => {
  let name = id;
  let stringName = JSON.stringify(name);
  let regex = /^\w+$/;
  let regexCode = /\b(let|var|function|if|else|const)\b/g;
  if (
    name == null ||
    Number.isNaN(name) === true ||
    regex.test(name) === false ||
    regexCode.test(name) === true
  ) {
    let error = 'Please write a correct name';
    return error;
  } else {
    let text = 'Hello, ' + name + '!';
    return text;
  }
};

module.exports = greetingsController;
