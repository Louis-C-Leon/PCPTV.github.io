function loadMedia(article) {
  const video = article.querySelector(".post-video");
  const playlist = article.querySelector(".playlist");

  // Do nothing if we've already set the source
  const currVidSrc = video.getAttribute("src");
  const currPlaylistSrc = playlist.getAttribute("src");
  if (!!currVidSrc && !!currPlaylistSrc) return;

  const vidLink = video.getAttribute("data-lazy-load");
  const spotURI = playlist.getAttribute("data-lazy-load").split(":");
  const splitSrc = vidLink.split("/");
  const vidId = splitSrc[splitSrc.length - 1];
  const vidSrc = "https://player.vimeo.com/video/" + vidId;
  const spotSrc =
    "https://open.spotify.com/embed/" + spotURI[1] + "/" + spotURI[2];
  video.setAttribute("src", vidSrc);
  playlist.setAttribute("src", spotSrc);
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
