const getElement = (selector, list) => {
  const el = list
    ? [...document.querySelectorAll(selector)]
    : document.querySelector(selector);

  // check if only one element
  if (list && el.length === 1) return el[0];
  // check if list is not empty
  if (list && el.length > 0) return el;
  // if not a list and element exists
  if (!list && el) return el;
  throw new Error(`Please double check the ${selector}`);
};

// traversing the dom
const btns = getElement('.question-btn', true);

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const question = e.currentTarget.parentElement.parentElement;

    question.classList.toggle('show-text');
  });
});
