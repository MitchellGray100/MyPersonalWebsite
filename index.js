$("img", "#gifs-rows-flightcascade").hover(function() {
  $('#preset-file-flightcascade').toggle();
  $('#gif-file-flightcascade').toggle();
  $('#gif-file-flightcascade').attr("src", "images/FlightCascade/image2.png");
});
$("img", "#gifs-rows-sparsematrix").hover(function() {
  $('#preset-file-sparsematrix').toggle();
  $('#gif-file-sparsematrix').toggle();
  $('#gif-file-sparsematrix').attr("src", "images/SparseMatrix/image2.png");
});
$("img", "#gifs-rows-pointcloud").hover(function() {
  $('#preset-file-pointcloud').toggle();
  $('#gif-file-pointcloud').toggle();
  $('#gif-file-pointcloud').attr("src", "images/PointCloud/image2.png");
});
$("img", "#gifs-rows-nosi").hover(function() {
  $('#preset-file-nosi').toggle();
  $('#gif-file-nosi').toggle();
  $('#gif-file-nosi').attr("src", "images/Nosi/NosiImage2.png");
});
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
  const timelinePanels = document.querySelectorAll('.timeline-panel');
  const scrollTarget = document.getElementById('scroll-spot');
  const mainSection = document.getElementById('main-section');
  let autoScrollTriggered = false;
  const initialAtTop = window.scrollY <= 2;

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top < viewportHeight * 0.9 && rect.bottom > 0;
  }

  function fadeInOnScroll() {
    for (let i = 0; i < timelinePanels.length; i++) {
      if (isInViewport(timelinePanels[i])) {
        timelinePanels[i].classList.add('in-view');
      }
    }
  }

  window.addEventListener('scroll', fadeInOnScroll, { passive: true });
  window.addEventListener('resize', fadeInOnScroll);
  window.addEventListener('load', fadeInOnScroll);
  fadeInOnScroll();

  function shouldAutoScrollFromTop() {
    if (!scrollTarget || !mainSection || autoScrollTriggered) {
      return false;
    }
    const scrollThreshold = 200;
    const hasScrolledEnough = window.scrollY >= scrollThreshold;
    return initialAtTop && hasScrolledEnough;
  }

  function handleTopScroll(event) {
    if (!shouldAutoScrollFromTop()) {
      return;
    }
    autoScrollTriggered = true;
    scrollTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  window.addEventListener('scroll', handleTopScroll, { passive: true });
});


