window.addEventListener("load", function () {
  let search, currPage, navButtons, pages;

  function getVariables() {
    search = new URLSearchParams(window.location.search);
    if (search.has("page")) {
      currPage = Number(search.get("page"));
    } else {
      currPage = 1;
    }
    navButtons = Array.from(
      document.getElementsByClassName("post-list-nav-button")
    );
    pages = Array.from(document.getElementsByClassName("episodes-page"));
  }

  function setupButton(element, dest) {
    if (currPage === dest || dest < 1 || dest > pages.length) {
      element.classList.add("disabled");
      element.onclick = null;
    } else {
      element.classList.remove("disabled");
      element.onclick = function () {
        const newurl =
          window.location.origin + window.location.pathname + "?page=" + dest;
        window.history.pushState({ path: newurl }, "", newurl);
        window.dispatchEvent(new Event("popstate"));
      };
    }
  }

  function setupButtons() {
    navButtons.forEach(function (button) {
      if (button.id === "prev-page") {
        setupButton(button, currPage - 1);
      } else if (button.id === "next-page") {
        setupButton(button, currPage + 1);
      } else {
        const goTo = Number(button.id.split("-")[1]);
        setupButton(button, goTo);
      }
    });
  }

  function showPage() {
    pages.forEach((page) => {
      pageNum = Number(page.id.split("-")[1]);
      if (pageNum === currPage) {
        page.classList.add("show");
      } else {
        page.classList.remove("show");
      }
    });
  }

  getVariables();
  setupButtons();
  showPage();

  window.onpopstate = function () {
    getVariables();
    setupButtons();
    showPage();
  };
});
