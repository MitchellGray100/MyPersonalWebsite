$("img", "#gifs-rows-Speed").hover(function() {
  $('#preset-file-Speed').toggle();
  $('#gif-file-Speed').toggle();
  $('#gif-file-Speed').attr("src", "images/Speed/ArchitectureDiagram.png");
});
$("img", "#gifs-rows-DBMS").hover(function() {
  $('#preset-file-DBMS').toggle();
  $('#gif-file-DBMS').toggle();
  $('#gif-file-DBMS').attr("src", "images/DBMS/DBMS.PNG");
});
$("img", "#gifs-rows-dslabs").hover(function() {
  $('#preset-file-dslabs').toggle();
  $('#gif-file-dslabs').toggle();
  $('#gif-file-dslabs').attr("src", "images/dslabs/dslabs-two.PNG");
});
$("img", "#gifs-rows-adopt").hover(function() {
  $('#preset-file-adopt').toggle();
  $('#gif-file-adopt').toggle();
  $('#gif-file-adopt').attr("src", "images/Adopt/Tree.gif");
});
$("img", "#gifs-rows-MeetUp").hover(function() {
  $('#preset-file-MeetUp').toggle();
  $('#gif-file-MeetUp').toggle();
  $('#gif-file-MeetUp').attr("src", "images/CornellMeetUp/Map1.PNG");
});
$("img", "#gifs-rows-Egos").hover(function() {
  $('#preset-file-Egos').toggle();
  $('#gif-file-Egos').toggle();
  $('#gif-file-Egos').attr("src", "images/Egos/Bootup.gif");
});
$("img", "#gifs-rows-Uno").hover(function() {
  $('#preset-file-Uno').toggle();
  $('#gif-file-Uno').toggle();
  $('#gif-file-Uno').attr("src", "images/Uno/photo2.PNG");
});
$("img", "#gifs-rows-LinearRegression").hover(function() {
  $('#preset-file-LinearRegression').toggle();
  $('#gif-file-LinearRegression').toggle();
  $('#gif-file-LinearRegression').attr("src", "images/LinearRegression/gif4.gif");
});
$("img", "#gifs-rows-critterworld").hover(function() {
  $('#preset-file-critterworld').toggle();
  $('#gif-file-critterworld').toggle();
  $('#gif-file-critterworld').attr("src", "images/CritterWorld/image7.png");
});
$("img", "#gifs-rows-connect4").hover(function() {
  $('#preset-file-connect4').toggle();
  $('#gif-file-connect4').toggle();
  $('#gif-file-connect4').attr("src", "images/Connect4/SmallerGIF.gif");
});
$("img", "#gifs-rows-graph").hover(function() {
  $('#preset-file-graph').toggle();
  $('#gif-file-graph').toggle();
  $('#gif-file-graph').attr("src", "images/GraphSearchVisualizer/GIF 3.gif");
});
$("img", "#gifs-rows-fulkerson").hover(function() {
  $('#preset-file-fulkerson').toggle();
  $('#gif-file-fulkerson').toggle();
  $('#gif-file-fulkerson').attr("src", "images/FordFulkerson/AddNodesGIF.gif");
});
$("img", "#gifs-rows-tanks").hover(function() {
  $('#preset-file-tanks').toggle();
  $('#gif-file-tanks').toggle();
  $('#gif-file-tanks').attr("src", "images/Tanks/AIGIF.gif");

});
$("img", "#gifs-rows-chess").hover(function() {
  $('#preset-file-chess').toggle();
  $('#gif-file-chess').toggle();
  $('#gif-file-chess').attr("src", "images/Chess/ScalingGIF.gif");
});

document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener('scroll', fadeInOnScroll);
  
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function fadeInOnScroll() {
    const timelinePanels = document.querySelectorAll('.timeline-panel');
    
    for (let i = 0; i < timelinePanels.length; i++) {
      if (isInViewport(timelinePanels[i])) {
        timelinePanels[i].classList.add('in-view');
      }
    }
  }
  
  fadeInOnScroll();
});


