function toggleDropdown(toggle, open) {
  var parentElement = toggle.parentNode;
  var dropdown = document.getElementById(toggle.getAttribute('aria-controls'));
  dropdown.setAttribute('aria-hidden', !open);

  if (open) {
    parentElement.classList.add('is-active');
  } else {
    parentElement.classList.remove('is-active');
  }
}

function closeAllDropdowns(toggles) {
  toggles.forEach(function (toggle) {
    toggleDropdown(toggle, false);
  });
}

function handleClickOutside(toggles, containerClass) {
  document.addEventListener('click', function (event) {
    var target = event.target;

    if (target.closest) {
      if (!target.closest(containerClass)) {
        closeAllDropdowns(toggles);
      }
    }
  });
}

function initNavDropdowns(containerClass) {
  var toggles = [].slice.call(document.querySelectorAll(containerClass + ' [aria-controls]'));

  handleClickOutside(toggles, containerClass);

  toggles.forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();

      closeAllDropdowns(toggles);
      toggleDropdown(toggle, true);
    });
  });
}

initNavDropdowns('.p-navigation__item--dropdown-toggle')



///
function initNavigation(element) {

  const menuButton = element.querySelector('.js-menu-button');
  if (menuButton) {
    menuButton.addEventListener('click', toggleMenu);
  }

  function toggleMenu(e) {
    e.preventDefault();

    var navigation = e.target.closest('.p-navigation');
    if (navigation.classList.contains('has-menu-open')) {
      closeAll();
    } else {
      closeAll();
      openMenu(e);
    }
  }

  function openMenu(e) {
    e.preventDefault();
    var navigation = e.target.closest('.p-navigation');
    var nav = navigation.querySelector('.p-navigation__nav');

    var buttons = document.querySelectorAll('.js-menu-button');

    buttons.forEach((searchButton) => {
      searchButton.setAttribute('aria-pressed', true);
    });

    navigation.classList.add('has-menu-open');
    document.addEventListener('keyup', keyPressHandler);
  }

  function closeMenu() {
    var navigation = document.querySelector('.p-navigation');
    var nav = navigation.querySelector('.p-navigation__nav');

    var banner = document.querySelector('.p-navigation__banner');
    var buttons = document.querySelectorAll('.js-menu-button');

    buttons.forEach((searchButton) => {
      searchButton.removeAttribute('aria-pressed');
    });

    navigation.classList.remove('has-menu-open');
    document.removeEventListener('keyup', keyPressHandler);
  }

  function closeAll() {
    closeMenu();
  }

  function keyPressHandler(e) {
    if (e.key === 'Escape') {
      closeAll();
    }
  }
}

var navigation = document.querySelector('#navigation');
initNavigation(navigation);

///


let searchToggles = document.getElementsByClassName("p-navigation__link--search-toggle");
for(let i = 0; i < searchToggles.length; i++) {
  searchToggles[i].addEventListener("click", function (event) {
      console.log("Search toggle clicked");
      let target = document.getElementById("search");
      if (target.style.display == "none") {
          target.style.display = "block";
          document.getElementById("searchinput").focus();
      } else {
          target.style.display = "none";
      }
    });
}

let fuse = undefined;

async function initSearchIndex() {
    let res = await fetch('/index.json');
    let data = await res.json();
    fuse = new Fuse(data, { // fuse.js options; check fuse.js website for details
        shouldSort: true,
        location: 0,
        distance: 100,
        threshold: 0.4,
        minMatchCharLength: 2,
        keys: [
            'title',
            'permalink',
            'summary',
            'contents'
        ]
    });
}

document.getElementById("searchinput").addEventListener("keydown", function (event) {
  console.log(event.target.value);
  if(!fuse){
      initSearchIndex();
  }
  let result = fuse.search(event.target.value);
  let resultTarget = document.getElementById("searchresults");
  let resultHtml = "";
  console.log(result)
  for (let i = 0; i < result.length; i++) {
      resultHtml += 
      `<a href="${result[i].item.permalink}">
      <li class="p-list__item">
          <p>
            <b>${result[i].item.title}</b><br/>
            ${result[i].item.contents.substring(0, 100)}...
          </p>
          </li>
      </a>`;
  }
  resultTarget.innerHTML = resultHtml;
})