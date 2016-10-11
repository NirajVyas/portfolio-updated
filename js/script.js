r(function(){

  // make a request to grab the data from the JSON file
  var xhr = new XMLHttpRequest;
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
          var data = JSON.parse(xhr.responseText);
          console.log("data: ", data);
      }
  }
  xhr.open("GET", "../projects.json")
  xhr.send();

  // window.addEventListener('hashchange', function() {
  //     render(decodeURI(window.location.hash));
  // })

  var container = document.querySelector('.page');

  container.addEventListener('click', function(e) {
    if (e.target != e.currentTarget) {
      e.preventDefault();

      var data = e.target.getAttribute('data-name'),
      url = data + ".html";
      history.pushState(null, null, url);

      console.log(history)

    }
    e.stopPropagation();
  }, false);

  function render(url) {
   console.log("@render url:", url);

    // Get the keyword from the url.
    var temp = url.split('/')[0];

    // Hide whatever page is currently shown.
    var page = document.querySelector('.main-content .visible');

    console.log("page:: ", page)

    if (page && page.classList) {
      page.classList.remove('visible');
    } 

    var map = {

      // The Homepage.
      '': function() {
        console.log("Homepage function")

        renderHomePage();

      },
      // Single Products page.
      '#allProjects': function() {

        console.log("projecttts")

        // Get the index of which product we want to show and call the appropriate function.
        //var index = url.split('#projects/')[1].trim();

        renderAllPorjectsPage();
      },

      // Single Products page.
      '#contact': function() {

        console.log("contact us function")

        contactPage();
      },


    };

    // Execute the needed function depending on the url keyword (stored in temp).
    if(map[temp]){
      map[temp]();
    }
    // If the keyword isn't listed in the above - render the error page.
    else {
      renderErrorPage();
    }

  }

  // show homepage
  function renderHomePage() {
    var page = document.querySelector('.home');

    console.log("page: ", page)

    if (page.classList) {
      page.classList.add('visible');
     } else {
      page.className += ' ' + 'visible';
    }
  }

  // show renderAllPorjectsPage
  function renderAllPorjectsPage() {
    var page = document.querySelector('.all-projects');

    console.log("page: ", page)

    if (page.classList) {
      page.classList.add('visible');
     } else {
      page.className += ' ' + 'visible';
    }
  }

  function contactPage() {
    var page = document.querySelector('.contact');

    console.log("page: ", page)

    if (page.classList) {
      page.classList.add('visible');
     } else {
      page.className += ' ' + 'visible';
    }
  }

  // Shows the error page.
  function renderErrorPage() {

    var page = document.querySelector('.error');

    console.log("page: ", page)

    if (page.classList) {
      page.classList.add('visible');
    } else {
      page.className += ' ' + 'visible';
    }
  };

});
function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}