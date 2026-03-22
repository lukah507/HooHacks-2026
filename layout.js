// automatically load header/footer into each website page 
// allows each page to receive updated header/footer
// without changing them one-by-one

document.addEventListener('DOMContentLoaded', function () {
    if (document.body.classList.contains("no-layout")) return;
    
    const main_content = document.getElementById('main');
    main_content.insertAdjacentHTML('beforebegin', headerEl);

    initActiveLinks();
});


// FUNCTIONS

function initActiveLinks() {
  // This function adds the class "active" to any link that links to the current page.

  const pathname = window.location.pathname;
  [...document.querySelectorAll("a")].forEach((el) => {
    const elHref = el.getAttribute("href").replace(".html", "").replace("/public", "");

    if (pathname == "/") {
      // homepage
      if (elHref == "/" || elHref == "/index.html") el.classList.add("active");
    } else {
      // other pages
      if (window.location.href.includes(elHref)) el.classList.add("active");
    }
  });
}

function getNestingString() {
  // This function prepares the "nesting" variable for your header and footer (see below).
  // Only change this function if you know what you're doing.
  const currentUrl = window.location.href.replace("http://", "").replace("https://", "").replace("/public/", "/");
  const numberOfSlahes = currentUrl.split("/").length - 1;
  if (numberOfSlahes == 1) return ".";
  if (numberOfSlahes == 2) return "..";
  return ".." + "/..".repeat(numberOfSlahes - 2);
}

// HTML

const nesting = getNestingString();

/**
  Use ${nesting} to output a . or .. or ../.. etc according to the current page's folder depth.
  Example:
    <img src="${nesting}/images/example.jpg" />
  will output
    <img src="./images/example.jpg" /> on a page that isn't in any folder.
    <img src="../images/example.jpg" /> on a page that is in a folder.
    <img src="../../images/example.jpg" /> on a page that is in a sub-folder.
    etc.
 */

const headerEl = `
	<header id='header'>
        <div id="title-container">
            <h1 id="website-title"><a href="/index.html" style="text-decoration:none; color:black;">Persona Palette</a></h1>
        </div>
    </header>`;