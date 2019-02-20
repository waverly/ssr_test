export const setBodyHeight = () => {
  if (typeof window === "undefined") {
    return 0;
  } else if (typeof window != "undefined") {
    if (document.getElementById("womanList")) {
      console.log("set body height is running");
      const womanListHeight = document.getElementById("womanList").offsetHeight;
      // Added 100px to the bottom for padding -
      // TODO: adjust for responsive
      // calculate half of window height and add to women's list
      const halfHeight = window.innerHeight / 2.5;

      document.body.style.height = womanListHeight + halfHeight + "px";
    }
  }
};
