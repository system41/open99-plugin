(function() {
        let head = document.getElementsByTagName("head")[0];
        let stylelink = document.createElement("link");
        stylelink.setAttribute("rel", "stylesheet");
        stylelink.setAttribute("href", parent.document.getElementById("stylelink"));
        head.appendChild(stylelink);
        let sys41Style = document.createElement("link");
        sys41Style.setAttribute("rel", "stylesheet");
        sys41Style.setAttribute("href", "https://windows99.vercel.app/system/styles/sys41.css");
        sys41Style.id = "sys41Style";
        if (document.currentScript.getAttribute("context") == "true") {
            document.body.oncontextmenu = "return false;"; //Turn off context menu for now.
        };
        let win99;
        if ((parent.location.href == "windows99.vercel.app") || (parent.location.href == "windows99dev.vercel.app")) {
            win99 = true
        };
}())
