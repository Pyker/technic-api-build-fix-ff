chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        let url = new URL(details.url);

        if (url.hostname === "api.technicpack.net") {
            if (!url.searchParams.has("build")) {
                url.searchParams.append("build", "999");
                return { redirectUrl: url.toString() };
            }
        }

        return {}; // no redirect
    },
    {
        urls: ["*://api.technicpack.net/*"],
        types: ["xmlhttprequest", "sub_frame", "main_frame"]
    },
    ["blocking"]
);
