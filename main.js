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
    fn: () => { return add(5, 6); },
    target: 11,
  },
  subtract: {
    fn: () => { return subtract(2, 1); },
    target: 1,
  }
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

