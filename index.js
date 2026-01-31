function setGifState(rowId, gifId, gifSrc, isActive) {
  const row = document.getElementById(rowId);
  const gif = document.getElementById(gifId);
  if (!row || !gif) {
    return;
  }
  if (isActive) {
    row.classList.add('gif-active');
    if (gifSrc) {
      gif.setAttribute("src", gifSrc);
    }
  } else {
    row.classList.remove('gif-active');
  }
}

$("img", "#gifs-rows-flightcascade").hover(
  () => setGifState("gifs-rows-flightcascade", "gif-file-flightcascade", "images/FlightCascade/image2.png", true),
  () => setGifState("gifs-rows-flightcascade", "gif-file-flightcascade", "", false)
);
$("img", "#gifs-rows-sparsematrix").hover(
  () => setGifState("gifs-rows-sparsematrix", "gif-file-sparsematrix", "images/SparseMatrix/image2.png", true),
  () => setGifState("gifs-rows-sparsematrix", "gif-file-sparsematrix", "", false)
);
$("img", "#gifs-rows-pointcloud").hover(
  () => setGifState("gifs-rows-pointcloud", "gif-file-pointcloud", "images/PointCloud/image2.png", true),
  () => setGifState("gifs-rows-pointcloud", "gif-file-pointcloud", "", false)
);
$("img", "#gifs-rows-nosi").hover(
  () => setGifState("gifs-rows-nosi", "gif-file-nosi", "images/Nosi/NosiImage2.gif", true),
  () => setGifState("gifs-rows-nosi", "gif-file-nosi", "", false)
);
$("img", "#gifs-rows-Speed").hover(
  () => setGifState("gifs-rows-Speed", "gif-file-Speed", "images/Speed/ArchitectureDiagram.png", true),
  () => setGifState("gifs-rows-Speed", "gif-file-Speed", "", false)
);
$("img", "#gifs-rows-DBMS").hover(
  () => setGifState("gifs-rows-DBMS", "gif-file-DBMS", "images/DBMS/DBMS.PNG", true),
  () => setGifState("gifs-rows-DBMS", "gif-file-DBMS", "", false)
);
$("img", "#gifs-rows-dslabs").hover(
  () => setGifState("gifs-rows-dslabs", "gif-file-dslabs", "images/dslabs/dslabs-two.PNG", true),
  () => setGifState("gifs-rows-dslabs", "gif-file-dslabs", "", false)
);
$("img", "#gifs-rows-adopt").hover(
  () => setGifState("gifs-rows-adopt", "gif-file-adopt", "images/Adopt/Tree.gif", true),
  () => setGifState("gifs-rows-adopt", "gif-file-adopt", "", false)
);
$("img", "#gifs-rows-MeetUp").hover(
  () => setGifState("gifs-rows-MeetUp", "gif-file-MeetUp", "images/CornellMeetUp/Map1.PNG", true),
  () => setGifState("gifs-rows-MeetUp", "gif-file-MeetUp", "", false)
);
$("img", "#gifs-rows-Egos").hover(
  () => setGifState("gifs-rows-Egos", "gif-file-Egos", "images/Egos/Bootup.gif", true),
  () => setGifState("gifs-rows-Egos", "gif-file-Egos", "", false)
);
$("img", "#gifs-rows-Uno").hover(
  () => setGifState("gifs-rows-Uno", "gif-file-Uno", "images/Uno/photo2.PNG", true),
  () => setGifState("gifs-rows-Uno", "gif-file-Uno", "", false)
);
$("img", "#gifs-rows-LinearRegression").hover(
  () => setGifState("gifs-rows-LinearRegression", "gif-file-LinearRegression", "images/LinearRegression/gif4.gif", true),
  () => setGifState("gifs-rows-LinearRegression", "gif-file-LinearRegression", "", false)
);
$("img", "#gifs-rows-critterworld").hover(
  () => setGifState("gifs-rows-critterworld", "gif-file-critterworld", "images/CritterWorld/image7.png", true),
  () => setGifState("gifs-rows-critterworld", "gif-file-critterworld", "", false)
);
$("img", "#gifs-rows-connect4").hover(
  () => setGifState("gifs-rows-connect4", "gif-file-connect4", "images/Connect4/SmallerGIF.gif", true),
  () => setGifState("gifs-rows-connect4", "gif-file-connect4", "", false)
);
$("img", "#gifs-rows-graph").hover(
  () => setGifState("gifs-rows-graph", "gif-file-graph", "images/GraphSearchVisualizer/GIF 3.gif", true),
  () => setGifState("gifs-rows-graph", "gif-file-graph", "", false)
);
$("img", "#gifs-rows-fulkerson").hover(
  () => setGifState("gifs-rows-fulkerson", "gif-file-fulkerson", "images/FordFulkerson/AddNodesGIF.gif", true),
  () => setGifState("gifs-rows-fulkerson", "gif-file-fulkerson", "", false)
);
$("img", "#gifs-rows-tanks").hover(
  () => setGifState("gifs-rows-tanks", "gif-file-tanks", "images/Tanks/AIGIF.gif", true),
  () => setGifState("gifs-rows-tanks", "gif-file-tanks", "", false)
);
$("img", "#gifs-rows-chess").hover(
  () => setGifState("gifs-rows-chess", "gif-file-chess", "images/Chess/ScalingGIF.gif", true),
  () => setGifState("gifs-rows-chess", "gif-file-chess", "", false)
);

const isTouchDevice = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
if (isTouchDevice) {
  document.body.classList.add('touch-device');
  document.querySelectorAll('.image-links').forEach((link) => {
    let touchHandled = false;
    let touchStartX = 0;
    let touchStartY = 0;
    let touchMoved = false;

    const toggleGif = () => {
      const row = link.closest('.gif-row');
      if (!row) {
        return;
      }
      row.classList.toggle('gif-active');
      link.classList.add('tap-cue-seen');
    };

    link.addEventListener('touchstart', function(event) {
      touchHandled = true;
      touchMoved = false;
      if (event.touches && event.touches[0]) {
        touchStartX = event.touches[0].clientX;
        touchStartY = event.touches[0].clientY;
      }
    }, { passive: true });

    link.addEventListener('touchmove', function(event) {
      if (event.touches && event.touches[0]) {
        const deltaX = Math.abs(event.touches[0].clientX - touchStartX);
        const deltaY = Math.abs(event.touches[0].clientY - touchStartY);
        if (deltaX > 8 || deltaY > 8) {
          touchMoved = true;
        }
      }
    }, { passive: true });

    link.addEventListener('touchend', function(event) {
      if (!touchMoved) {
        event.preventDefault();
        event.stopPropagation();
        toggleGif();
      }
    }, { passive: false });

    link.addEventListener('click', function(event) {
      if (touchHandled) {
        touchHandled = false;
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      toggleGif();
    }, { passive: false });
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const timelineItems = document.querySelectorAll('.timeline > li');
  const scrollTarget = document.getElementById('scroll-spot');
  const mainSection = document.getElementById('main-section');
  const firstProjectCard = document.querySelector('#scroll-spot .card');
  let autoScrollTriggered = false;
  const heroReadyAt = Date.now() + 800;
  let autoScrollPending = false;
  const topThreshold = 5;
  let topSnapTriggered = false;
  let lastSnapScrollY = window.scrollY;
  if (timelineItems.length) {
    timelineItems.forEach((item, index) => {
      item.style.setProperty('--timeline-delay', `${Math.min(index * 0.06, 0.3)}s`);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('timeline-in-view');
          entry.target.classList.remove('timeline-exit');
        } else if (entry.boundingClientRect.top < 0) {
          entry.target.classList.add('timeline-exit');
          entry.target.classList.remove('timeline-in-view');
        } else {
          entry.target.classList.remove('timeline-in-view');
          entry.target.classList.remove('timeline-exit');
        }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -15% 0px' });

    timelineItems.forEach((item) => observer.observe(item));
  }

  function shouldAutoScrollFromTop() {
    if (!scrollTarget || !mainSection || autoScrollTriggered || Date.now() < heroReadyAt) {
      return false;
    }
    const scrollThreshold = 80;
    const hasScrolledEnough = window.scrollY >= scrollThreshold;
    return hasScrolledEnough;
  }

  function handleTopScroll(event) {
    if (!shouldAutoScrollFromTop()) {
      return;
    }
    autoScrollTriggered = true;
    scrollTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function updateAutoScrollState() {
    if (window.scrollY <= topThreshold) {
      autoScrollTriggered = false;
      return;
    }
  }

  window.addEventListener('scroll', handleTopScroll, { passive: true });
  window.addEventListener('scroll', updateAutoScrollState, { passive: true });
  window.addEventListener('scroll', () => {
    if (autoScrollTriggered) {
      return;
    }
    if (Date.now() < heroReadyAt) {
      const scrollThreshold = 80;
      autoScrollPending = window.scrollY >= scrollThreshold;
      setTimeout(() => {
        if (autoScrollPending && !autoScrollTriggered) {
          handleTopScroll();
          autoScrollPending = false;
        }
      }, Math.max(heroReadyAt - Date.now(), 0));
    }
  }, { passive: true });
  window.addEventListener('load', () => {
    if (window.scrollY > topThreshold) {
      autoScrollTriggered = true;
    }
  });
  window.addEventListener('pageshow', () => {
    if (window.scrollY > topThreshold) {
      autoScrollTriggered = true;
    }
  });
  setTimeout(() => {
    if (window.scrollY > topThreshold) {
      autoScrollTriggered = true;
    }
  }, 250);

  function handleTopProjectSnap() {
    if (!firstProjectCard) {
      return;
    }
    const currentScrollY = window.scrollY;
    const isScrollingUp = currentScrollY < lastSnapScrollY;
    lastSnapScrollY = currentScrollY;

    const firstCardRect = firstProjectCard.getBoundingClientRect();
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const coverThreshold = isMobile ? 0.05 : 0.5;
    const coveredFraction = Math.max(0, firstCardRect.top) / firstCardRect.height;
    const shouldSnapUp = isScrollingUp && coveredFraction >= coverThreshold;

    if (shouldSnapUp && !topSnapTriggered) {
      topSnapTriggered = true;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (firstCardRect.top < window.innerHeight * 0.3) {
      topSnapTriggered = false;
    }
  }

  window.addEventListener('scroll', handleTopProjectSnap, { passive: true });

});


