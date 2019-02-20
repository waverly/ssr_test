export const setBodyHeight = () => {
  console.log("inside set body height");
  if (typeof window === "undefined") {
    return 0;
  } else if (typeof window != "undefined") {
    if (document.getElementById("womanList")) {
      const womanListHeight = document.getElementById("womanList").offsetHeight;
      // Added 100px to the bottom for padding -
      // TODO: adjust for responsive
      // calculate half of window height and add to women's list
      const halfHeight = window.innerHeight / 2.5;
      console.log({ halfHeight });
      document.body.style.height = womanListHeight + halfHeight + "px";
      console.log("there is a woman list and the height is ", womanListHeight);
    }
  }
};
