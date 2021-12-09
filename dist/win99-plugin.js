(function() {
    if (!parent.location == "https://windows99.vercel.app" || !parent.location == "https://windows99dev.vercel.app") {
        var gg = document.createElement("p");
        gg.innerText = "The script this app is using (w99-plugin) is not being used on Windows 99, and therefore cannot run.";
        document.body.appendChild(gg);
    } else {
        var head = document.getElementsByTagName("head")[0];
        var stylelink = document.createElement("link");
        stylelink.setAttribute("rel", "stylesheet");
        stylelink.setAttribute("href", parent.document.getElementById("stylelink"));
        head.appendChild(stylelink)
        if (document.currentScript.getAttribute("context")) {
            return;
        } else {
            document.body.oncontextmenu = "return false;"; //Turn off context menu for now.
        }
    }
}())
