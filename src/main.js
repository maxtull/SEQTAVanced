var IsInitialized = false;
document.addEventListener("load", function () {
    if (document.childNodes[1].textContent?.includes("Copyright (c) SEQTA Software") && document.title.includes("SEQTA Learn") && !IsInitialized) {
        IsInitialized = true;
        document.querySelector("link[rel='shortcut icon']").href = chrome.runtime.getURL("images/favicon.ico");

        waitForSelector('#menu').then(() => {
            const logoElement = document.createElement("div");
            logoElement.className = "seqtavanced-logo"
            logoElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1500 334" width="250" height="65" style="padding-left: 8px;">
            <defs>
              <linearGradient id="Gradient">
                <stop xmlns="http://www.w3.org/2000/svg" class="stop1" offset="0%" stop-color="var(--secondary)"></stop>
                <stop xmlns="http://www.w3.org/2000/svg" class="stop3" offset="100%" stop-color="var(--primary)"></stop>
              </linearGradient>
            </defs>
            <path id="SEQTA" class="cls-1" d="M30.626,193.539q0.781,19.727,16.016,31.25t40.43,11.523q26.561,0,41.8-12.207Q144.2,211.8,144.2,190.511q0-16.405-9.668-25.976t-30.859-14.063l-16.992-3.613q-12.4-2.637-17.773-6.641a12.462,12.462,0,0,1-5.469-10.546,14.938,14.938,0,0,1,6.738-12.793q6.64-4.784,17.774-4.786,10.643,0,17.871,5.079a19,19,0,0,1,8.106,13.476h27.734q-0.684-18.846-15.625-30.664Q111,88.169,87.755,88.168q-24.415,0-39.16,12.011Q33.848,112.29,33.849,132.211q0,32.226,38.281,40.234l18.359,3.906q12.987,2.736,18.653,6.934a13.015,13.015,0,0,1,5.664,10.937q0,8.008-7.324,12.989-7.324,5.079-18.848,5.078-12.5,0-20.41-5.078-8.107-5.078-9.082-13.672H30.626ZM265.392,207.5H201.525V173.226h60.253v-23.34H201.525v-32.91h63.867V91.781h-93.36V232.7h93.36V207.5Zm155.664,38.964-17.481-26.562q22.167-18.945,22.168-57.715,0-34.179-18.261-54.2Q389.22,88.168,358.067,88.168t-49.414,19.824q-18.456,20.02-18.457,54.2,0,34.376,18.262,54.3,18.261,19.826,49.609,19.824a78.973,78.973,0,0,0,24.708-3.711l9.765,13.867h28.516Zm-62.891-36.035q-17.285,0-27.539-12.988t-10.254-35.254q0-22.068,10.254-35.156,10.254-12.987,27.441-12.988,17.089,0,27.344,12.988,10.254,13.088,10.254,35.156,0,20.607-10.058,31.445l-6.543-7.91H352.306l16.015,23.438a44.187,44.187,0,0,1-10.156,1.269h0ZM511.974,232.7V116.976h42.285V91.781H440.2v25.195h42.286V232.7h29.492Zm143.75,0h31.933L638.732,91.781H604.064L555.138,232.7h29.59l10.839-33.594h49.512ZM619.591,121.078h1.758l17.48,55.273H601.915Z" transform="translate(-30.625 -2.313)" style="fill: white;"></path>
            <path xmlns="http://www.w3.org/2000/svg" fill="url(#Gradient)" id="VANCED" class="cls-2" d="M754.892,232.16L807.417,91.541H793.384L748.85,214.717h-1.267L703.049,91.541H689.016L741.638,232.16h13.254Zm158.354,0h14.033L874.754,91.541H861.5L808.878,232.16h14.131L838.6,189.087h59.055Zm-45.8-123.176h1.267l24.947,68.6H842.6ZM965.674,232.16V115.318h1.267L1049.19,232.16h12.86V91.541H1048.9V208.285h-1.27L965.674,91.541H952.518V232.16h13.156Zm188.756,2.923q22.32,0,37.72-11.791a47.164,47.164,0,0,0,18.32-31.184h-13.55a35.668,35.668,0,0,1-14.52,22.219q-11.685,8.382-27.97,8.38-22.215,0-35.27-16.469Q1106.1,189.867,1106.1,161.9q0-27.869,13.06-44.437,13.05-16.467,35.18-16.469a43.508,43.508,0,0,1,27.67,9.258,40.03,40.03,0,0,1,14.91,24.265h13.55a50.12,50.12,0,0,0-18.62-32.938q-15.78-12.959-37.51-12.961-28.56,0-45.22,19.685-16.665,19.783-16.66,53.6t16.66,53.5q16.665,19.684,45.31,19.684h0Zm170.44-15.007h-71.62V166.089h68.02V154.2h-68.02V103.624h71.62V91.541H1239.9V232.16h84.97V220.076Zm31.67-128.535V232.16h46.29q31.965,0,49.51-18.808,17.235-18.417,17.24-51.55,0-33.036-17.24-51.551-17.64-18.71-49.51-18.71h-46.29Zm13.35,12.083h32.16q25.635,0,39.86,15.5,14.025,15.4,14.03,42.78t-14.03,42.683q-14.235,15.494-39.86,15.494h-32.16V103.624Z" transform="translate(-30.625 -2.313)"></path>
          </svg>`;
            document.querySelector("#menu").prepend(logoElement);

            chrome.storage.local.get(null, function (response) {
                document.body.style.setProperty("--primary", response.primaryTheme || "#f80ab2");
                document.body.style.setProperty("--secondary", response.secondaryTheme || "#6ecefa");
            });
        });

        document.addEventListener("load", function () {
            const observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    mutation.addedNodes.forEach(function (node) {
                        if (node.className == "userHTML") {
                            const link = document.createElement("link");
                            link.rel = "stylesheet";
                            link.type = "text/css";
                            link.href = chrome.runtime.getURL("css/userhtml.css");
                            node.contentDocument.head.appendChild(link);
                        };

                        if (node?.className == "settings") {
                            if (document.querySelector(".seqtavanced-settings")) return;
                            const div = document.createElement("div");
                            div.className = "seqtavanced-settings";
                            div.innerHTML = `<div class="seqtavanced-branding">
                                <a href="${chrome.runtime.getManifest().homepage_url}" target="_blank">
                                    <img src="${chrome.runtime.getURL("images/logo.png")}" height="65px" width="65px"></img>
                                </a>
                                <div class="seqtavanced-version">
                                    <h2>SEQTA Vanced</h2>
                                    <div class="label">Version ${chrome.runtime.getManifest().version} • Created by Max</div>
                                </div>
                            </div>
                            <h2>Theme Settings</h2>
                            <div class="theme">
                                <label>Primary Theme</label>
                                <div class="color">
                                    <input id="primaryTheme" type="color" class="selector"></input>
                                </div>
                            </div>
                            <div class="theme">
                                <label>Secondary Theme</label>
                                <div class="color">
                                    <input id="secondaryTheme" type="color" class="selector"></input>
                                </div>
                            </div>`
                            node.prepend(div);

                            const primaryTheme = document.getElementById("primaryTheme");
                            const secondaryTheme = document.getElementById("secondaryTheme");

                            chrome.storage.local.get(null, function (response) {
                                primaryTheme.value = response.primaryTheme || "#f80ab2";
                                secondaryTheme.value = response.secondaryTheme || "#6ecefa";
                            });

                            primaryTheme.addEventListener("input", function () {
                                document.body.style.setProperty("--primary", primaryTheme.value);
                            });

                            secondaryTheme.addEventListener("input", function () {
                                document.body.style.setProperty("--secondary", secondaryTheme.value);
                            });

                            primaryTheme.addEventListener("change", function () {
                                chrome.storage.local.set({ primaryTheme: primaryTheme.value });
                            });

                            secondaryTheme.addEventListener("change", function () {
                                chrome.storage.local.set({ secondaryTheme: secondaryTheme.value });
                            });
                        }
                    });
                });
            });

            observer.observe(document, {
                subtree: true,
                childList: true,
            });
        }, true);
    }
}, true);

function waitForSelector(selector) {
    return new Promise((resolve) => {
        if (document.querySelector(selector)) return resolve(document.querySelector(selector));

        const observer = new MutationObserver(() => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document, {
            childList: true,
            subtree: true
        });
    });
}