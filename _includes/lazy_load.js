let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

function callback(entries, observer) {
  console.log(entries);
}

let observer = new IntersectionObserver(options, callback);
