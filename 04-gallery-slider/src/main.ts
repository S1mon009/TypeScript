import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import "./style.scss";

export const images: string[] = [
  "lisbon.jpg",
  "london.jpg",
  "madrid.jpg",
  "paris.jpg",
  "rome.jpg",
  "warsaw.jpeg",
];
// export let activeIndex: number = 0;

document.querySelector<HTMLDivElement>(
  "#app"
)!.innerHTML = `<section id="main-carousel" class="splide" aria-label="My Awesome Gallery">
<div class="splide__track">
  <ul class="splide__list">
    <li class="splide__slide">
      <img src="/${images[0]}" alt="">
    </li>
    <li class="splide__slide">
      <img src="/${images[1]}" alt="">
    </li>
    <li class="splide__slide">
      <img src="/${images[2]}" alt="">
    </li>
    <li class="splide__slide">
      <img src="/${images[3]}" alt="">
    </li>
  </ul>
</div>
</section>

<ul id="thumbnails" class="thumbnails">
<li class="thumbnail">
  <img src="/${images[0]}" alt="">
</li>
<li class="thumbnail">
  <img src="/${images[1]}" alt="">
</li>
<li class="thumbnail">
  <img src="/${images[2]}" alt="">
</li>
<li class="thumbnail">
  <img src="/${images[3]}" alt="">
</li>
</ul>`;

var splide = new Splide("#main-carousel", {
  pagination: false,
});

var thumbnails = document.getElementsByClassName("thumbnail");
var current;

for (var i = 0; i < thumbnails.length; i++) {
  initThumbnail(thumbnails[i], i);
}

function initThumbnail(thumbnail, index) {
  thumbnail.addEventListener("click", function () {
    splide.go(index);
  });
}

splide.on("mounted move", function () {
  var thumbnail = thumbnails[splide.index];

  if (thumbnail) {
    if (current) {
      current.classList.remove("is-active");
    }

    thumbnail.classList.add("is-active");
    current = thumbnail;
  }
});

splide.mount();
