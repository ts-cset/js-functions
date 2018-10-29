function showResult(section, result) {
  const el = document.createElement('p');
  el.className = 'testResult';
  el.classList.add(result ? 'pass' : 'fail');

  const txt = result ? 'Success!' : 'Try Again.';
  el.appendChild(document.createTextNode(txt));

  section.appendChild(el);
}

// TODO: randomize inputs?
const tests = {
  add: {
    fn: () => add(5, 6),
    target: 11,
  },
  subtract: {
    fn: () => subtract(2, 1),
    target: 1,
  },
  min: {
    fn: () => min(5, 3),
    target: 3,
  },
  max: {
    fn: () => max(5, 3),
    target: 5,
  },
  isEven: {
    fn: () => isEven(200),
    target: true,
  },
  isOdd: {
    fn: () => isOdd(200),
    target: false,
  },
  factorial: {
    fn: () => factorial(6),
    target: 720,
  },
  oddFactorial: {
    fn: () => oddFactorial(5),
    target: 15,
  },
};

/**
 * Setup event listeners
 */
Object.keys(tests).forEach(t => {
  const section = document.getElementById(`${t}Section`);
  const button = document.getElementById(`${t}Button`);

  button.addEventListener('click', () => {
    let result = tests[t].fn();
    showResult(section, result === tests[t].target);
  });
});

