window.onload = function() {
    console.log("begin menu construction");

    // create main div for menu
    var maindiv = document.createElement("div");
    maindiv.className = "menu";

    // create link for home
    var homeLink = document.createElement("a");
    homeLink.href = "/index.html";
    maindiv.appendChild(homeLink);

    // create icon
    var iconImg = document.createElement("img");
    iconImg.src = "/icon.png";
    iconImg.className = "icon";
    homeLink.appendChild(iconImg);

    // create home text
    var homeText = document.createElement("a");
    homeText.className = "menuTextOne";
    homeText.href = "/index.html";
    homeText.appendChild(document.createTextNode("Home"));
    maindiv.appendChild(homeText);

    // line 1
    var line1 = document.createElement("hr");
    line1.className = "one";
    maindiv.appendChild(line1);

    // create about text
    var aboutText1 = document.createElement("a");
    aboutText1.href = "/about.html";
    var aboutText2 = document.createElement("a");
    aboutText2.href = "/about.html";
    aboutText2.className = "menuTextTwo";
    aboutText2.appendChild(document.createTextNode("About"));
    aboutText1.appendChild(aboutText2);
    maindiv.appendChild(aboutText1);

    // line 2
    var line2 = document.createElement("hr");
    line2.className = "two";
    maindiv.appendChild(line2);

    document.body.appendChild(maindiv);
    console.log("end menu construction");

    // create model text
    var modelText1 = document.createElement("a");
    aboutText1.href = "/models";
    var modelText2 = document.createElement("a");
    modelText2.href = "/models";
    modelText2.className = "menuTextThree";
    modelText2.appendChild(document.createTextNode("Models"));
    modelText1.appendChild(modelText2);
    maindiv.appendChild(modelText1);
}