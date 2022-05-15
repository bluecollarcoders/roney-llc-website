/*-------------scroll magic ------------------*/
$.scrollIt({
  easing: "linear", // the easing function for animation
  downKey: 40, // key code to navigate to the previous section
  scrollTime: 600, // how long (in ms) the animation takes
  activeClass: "active", // class given to the active nav element
  onPageChange: null, // function(pageIndex) that is called when page is changed
  topOffset: -63,
});
