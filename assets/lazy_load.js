function loadMedia(article) {
  const iframes = Array.from(article.querySelectorAll("iframe"));

  iframes.forEach(function (element) {
    if (!!element.getAttribute("src")) {
      return;
    }
    const data = element.getAttribute("data-lazy-load");
    let src;

    // Construct correct src strings for each media type
    if (element.classList.contains("vimeo")) {
      const vidId = data.split("/")[data.split("/").length - 1];
      src = "https://player.vimeo.com/video/" + vidId;
    } else if (element.classList.contains("spotify")) {
      const spotURI = data.split(":");
      src = "https://open.spotify.com/embed/" + spotURI[1] + "/" + spotURI[2];
    } else if (element.classList.contains("google-drive")) {
      const fileId = data.split("/")[data.split("/").length - 2];
      src =
        "https://drive.google.com/file/d/" + fileId + "/preview?usp=sharing";
    } else if (element.classList.contains("youtube")) {
      const ytId = data.split("/")[data.split("/").length - 1];
      src = "https://www.youtube.com/embed/" + ytId;
    } else if (element.classList.contains("soundcloud")) {
      const split = data.split("=");
      console.log(data)
      console.log(split);
    }

    element.setAttribute("src", src);
  });
}

function callback(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      loadMedia(entry.target);
    }
  });
}

let observer = new IntersectionObserver(callback);

window.addEventListener("load", function () {
  const articleArr = Array.from(document.querySelectorAll("article"));
  articleArr.forEach(function (article) {
    observer.observe(article);
  });
});
