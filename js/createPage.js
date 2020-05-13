/** TITLE, DESCRIPTION, KEYWORDS ARE SET IN HTML FILES */
const title = "Theatre Tools";
const description = "Great tools to make better theatre.";

/** CONSTANTS FOR EASY USE */
const div = "div";
const img = "img";
const h2 = "h2";
const span = "span";
const ul = "ul";
const a = "a";
const li = "li";
const br = "br";
const p = "p";

/** DEFINES DIFFERENT CSS FILES THAT CAN BE LOADED - USED IN LOADCSS() FUNCTION */
const cssFiles = [
    "default", "fonts", "totalSeater", "testDesign"
];

/** NAV-BAR NAVIGATION */
const sitePages = [
    ["home", "Home", 1],
    ["testKnowledge", "Test Knowledge", 2],
    ["totalSeater", "Total Seater", 2],
    ["venueList", "Venue List", 2],
    ["contractExplorer", "Contracts", 2],
];

/** VISIBLE SOCIAL MEDIA - DEFINED IN FOOTER */
const socialMedia = [
    ["twitter", "twitter.com/JonathanTaylorP"],
    ["facebook", "facebook.com/JonathanTaylorProductions"],
    ["github", "github.com/TheatreTools/TheatreTools"]
];

/** GETS CURRENT PAGE FROM PATH */
const path = window.location.pathname;
const pageName = path.split("/");
console.log(pageName[1]);

/** CALL FUNCTIONS */
loadCss();
loadHeader();
loadContent();
loadFooter();

/** LOADS ALL CSS FILES AS DEFINED IN ARRAY */
function loadCss() {
    cssFiles.forEach(name => {
        const tag = document.createElement("link");
        tag.href = `/css/${name}.css`;
        tag.rel = "stylesheet";
        tag.text = "text/css";
        tag.media = "all";
        document.head.appendChild(tag);
    });
}

/** LOADS HEADER W/ NAVIGATION */
function loadHeader() {
    const tag1 = document.createElement("div");
    tag1.id = "noLogo-header-wrapper";
    document.body.appendChild(tag1);

    const tag2 = document.createElement("div");
    tag2.id = "header";
    tag2.className = "container";
    tag1.appendChild(tag2);

    const pageTitle = document.createElement("div");
    pageTitle.className = "title";
    tag2.appendChild(pageTitle);

    const h2Title = document.createElement("h2");
    h2Title.innerText = title;
    pageTitle.appendChild(h2Title);

    const byLine = document.createElement("span");
    byLine.className = "byLine";
    byLine.innerText = description;
    pageTitle.appendChild(byLine);

    const tag3 = document.createElement("div");
    tag3.id = "menu";
    tag2.appendChild(tag3);

    const tag4 = document.createElement("ul");
    tag3.appendChild(tag4);

/** ITERATES THROUGH PAGES FROM ARRAY */
    sitePages.forEach(page => {
        const pageTag = document.createElement("li");
        if (page[0] == pageName[1]) {
            pageTag.className = "current_page_item";
        }
        tag4.appendChild(pageTag);
        const pageLink = document.createElement("a");
        pageLink.href = `/${page[0]}`;
        const linkName = document.createTextNode(page[1]);
        pageLink.appendChild(linkName);
        pageTag.appendChild(pageLink);
    });
}


/** LOAD BASIC COMPONENTS AND THEN LOADS CORRECT SCRIPT FOR INDIVIDUAL PAGE CONSTRUCTION */
function loadContent() {
    const wrapper = document.createElement("div");
    wrapper.id = "wrapper1";
    document.body.appendChild(wrapper);

    const container = document.createElement("div");
    container.id = "welcome";
    container.className = "container";
    wrapper.appendChild(container);


/** INDIVIDUAL PAGE CONSTRUCTION */
    sitePages.forEach(page => {
        if(page[0] == pageName[1]) {
            const script = document.createElement("script");
            script.src = `/js/pageConstructor/${page[0]}.js`;
            container.appendChild(script);
        }    
    });
}


/** LOADS FOOTER */
function loadFooter() {
    const outer =  document.createElement("div");
    outer.id = "copyright";
    document.body.appendChild(outer);

    const title = document.createElement("div");
    title.className = "title";
    outer.appendChild(title);

    const titleText = document.createElement("h2");
    titleText.innerText = ""
    title.appendChild(titleText);

    const logo = document.createElement("img");
    logo.src = "/assets/favicon/white_main_logo.png";
    logo.style.width = "3em"
    logo.style.display = "inline-block";
    title.appendChild(logo);

    let i = 0;
    while (i < 2) {
    const additional = document.createElement("br");
    title.appendChild(additional);
    i++
    }

    const byLineText = document.createElement("span")
    byLineText.className = "byLine";
    byLineText.style.fontSize = "1em";
    byLineText.innerText = description;
    title.appendChild(byLineText);

    const contactBar = document.createElement("ul");
    contactBar.className = "contact";
    outer.appendChild(contactBar);

    /** USES SOCIAL MEDIA ARRAY */
    socialMedia.forEach(social => {
        const tag = document.createElement("li");
        contactBar.appendChild(tag);

        const link = document.createElement("a");
        link.href = `//${social[1]}`;
        link.target = "_blank";
        link.className = `icon icon-${social[0]}`;
        tag.appendChild(link);
    });
    
    const para = document.createElement("p");
    para.style.fontSize = "0.7em";
    para.innerHTML = "<p style='font-size: 0.7em'>This is an open-source project hosted on GitHub.</p>";
    outer.appendChild(para);
}

/** FUNCTION FOR ADDING NEW ELEMENTS (SHORTCUT FOR OTHER PAGE CONSTRUCTION) */
function createNewElement(type, classInp, idInp, parent, innerHTML, innerText, srcInp, width, height, size, color, margin, inpType, onInput) {
    if(type != 0 && parent != 0) {
        const element = document.createElement(type);
        if (classInp != 0) {
            element.className = classInp;
        }
        if(idInp != 0) {
            element.id = idInp;
        }
        if(innerHTML != 0) {
            element.innerHTML = innerHTML;
        }
        if(innerText != 0) {
            element.innerText = innerText;
        }
        if (srcInp != 0) {
            element.src = srcInp;
        }
        if (inpType != 0) {
            element.type = inpType;
        }
        if (width !=0) {
            element.style.width = width;
        }
        if (height != 0) {
            element.style.height = height;
        }
        if (size != 0) {
            element.style.fontSize = size;
        }
        if (color != 0) {
            element.style.color = color;
        }
        if (margin != 0) {
            element.style.margin = margin;
        }
        if (onInput != 0) {
            element.setAttribute("onclick", onInput);
        }
        document.getElementById(parent).appendChild(element);
    }
}