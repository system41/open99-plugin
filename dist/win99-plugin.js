(function() {
        var head = document.getElementsByTagName("head")[0];
        var stylelink = document.createElement("link");
        stylelink.setAttribute("rel", "stylesheet");
        stylelink.setAttribute("href", parent.document.getElementById("stylelink"));
        head.appendChild(stylelink)
        var sys41Style = document.createElement("link");
        sys41Style.setAttribute("rel", "stylesheet");
        sys41Style.setAttribute("href", "https://windows99.vercel.app/system/styles/sys41.css");
        sys41Style.id = "sys41Style";
        if (document.currentScript.getAttribute("context") == "true") {
            document.body.oncontextmenu = "return false;"; //Turn off context menu for now.
        }
        if ((parent.location.href == "windows99.vercel.app") || (parent.location.href == "windows99dev.vercel.app")) {
            let win99 = true
        }
        if (win99) {
            parent.sys41.user.apps.ie.data.currentURL = location.href
        }
}())
