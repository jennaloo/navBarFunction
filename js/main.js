//Write a function which, given a color code, a set of links, and a boolean, creates a fully responsive fixed-position navbar in this background color with functioning links. The boolean should be used to indicate whether the navbar theme is to be dark or light.


function makeNav(color, lightColor, navArray, linkArray, bool) {

    //make navBar, give it background color, make it fit to top,
    //make it a container for all else.
    var navBar = document.createElement('div');
    navBar.style.backgroundColor = color;
    navBar.style.height = '80px';
    navBar.className = 'fixed-top container-fluid';
    document.body.appendChild(navBar);

    //create ul element, make it same size as container, append it to the navbar/container.
    var navUl = document.createElement('ul');
    navUl.style = "height: 80px; margin:0; padding:0;";
    navUl.className = "row";
    navBar.appendChild(navUl);

    //create anchor tags, create li objects
    //anchor tags take navArray to display navigation words
    //li tags take linkArray to assign href
    //put li inside the anchor tag
    for (i = 0; i < navArray.length; i++) {
        var newAnchor = document.createElement('a');
        newAnchor.className = "col-3 text-center pt-4";
        var newLi = document.createElement('li');
        newAnchor.setAttribute('href', linkArray[i]);
        newLi.style = "color:white;display:inline-block;";
        newLi.innerText = navArray[i];
        navUl.appendChild(newAnchor);
        newAnchor.appendChild(newLi);
    }

    if (bool == true) {
        //true indicates light
        navBar.style.backgroundColor = lightColor;
    } else {
        //false indicates dark (normal state)
    }

}


makeNav('#800000', '#aa7d7b', ['HOME', 'ABOUT', 'SERVICES', 'CONTACT'], ['index.html', 'about.html', 'services.html', 'contact.html'], true);
