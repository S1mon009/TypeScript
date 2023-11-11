export function setRating(stars: NodeListOf<HTMLElement>) {
  interface Classes {
    notActive: string;
    active: string;
  }
  const classes: Classes = {
    notActive: "bi bi-star",
    active: "bi bi-star-fill",
  };
  let activeIndex: number | null = null;
  function setActiveStarsOnHover(starIndex: number) {
    stars.forEach((star: HTMLElement, index: number) => {
      if (starIndex === -1 && activeIndex === null) {
        star.className = classes.notActive;
      } else if (index <= starIndex) {
        star.className = classes.active;
      } else if (activeIndex != null) {
        if (index <= activeIndex) {
          star.className = classes.active;
        } else {
          star.className = classes.notActive;
        }
      } else {
        star.className = classes.notActive;
      }
    });
  }

  stars.forEach((star: HTMLElement, index: number) => {
    star.addEventListener("mouseover", setActiveStarsOnHover.bind(null, index));
    star.addEventListener("mouseleave", setActiveStarsOnHover.bind(null, -1));
    star.addEventListener("click", () => {
      activeIndex = index;
      setActiveStarsOnHover(-1);
    });
  });
}
