const themePresets = [
    {
        name: "Default",
        primary: "#f80ab2",
        secondary: "#6ecefa",
        background: "#0c0c0f",
    },
    {
        name: "Dark",
        primary: "#FFFFFF",
        secondary: "#FFFFFF",
        background: "#0B0B0B",
    },
    {
        name: "AMOLED",
        primary: "#FFFFFF",
        secondary: "#FFFFFF",
        background: "#000000",
    },
    {
        name: "Tropical",
        primary: "#ff6600",
        secondary: "#ff0066",
        background: "#030309",
    },
    {
        name: "Ocean",
        primary: "#2558b6",
        secondary: "#53c8f0",
        background: "#060713",
    },
    {
        name: "Aqua",
        primary: "#00ff8f",
        secondary: "#00a1ff",
        background: "#0c0c0f",
    },
    {
        name: "Yellow",
        primary: "#f9ed32",
        secondary: "#fbb040",
        background: "#0c0c0f",
    },
    {
        name: "Purple",
        primary: "#e100ff",
        secondary: "#7f00ff",
        background: "#0c0c0f",
    },
    {
        name: "Aurora",
        primary: "#c45bc8",
        secondary: "#2ccebf",
        background: "#0c0c0f",
    },
    {
        name: "Cotton Candy",
        primary: "#fed1c7",
        secondary: "#fe8dc6",
        background: "#1c171c",
    },
    {
        name: "Roses",
        primary: "#ff7db8",
        secondary: "#ee2a7b",
        background: "#13060d",
    },
    {
        name: "Dusk",
        primary: "#4e4cc2",
        secondary: "#8886ff",
        background: "#1f1f29",
    },
    {
        name: "Chirp",
        primary: "#156fab",
        secondary: "#1d9Bf0",
        background: "#15202b",
    },
    {
        name: "Cord",
        primary: "#444DAB",
        secondary: "#5865F2",
        background: "#313338",
    },
    {
        name: "Terminal",
        primary: "#31f2b2",
        secondary: "#65e2a1",
        background: "#0c1327",
    },
    {
        name: "Halloween",
        primary: "#00FF11",
        secondary: "#E100FF",
        background: "#020005",
    },
    {
        name: "Winter",
        primary: "#64AFB9",
        secondary: "#9CD8F2",
        background: "#060B0F",
    },
    {
        name: "Serenity",
        primary: "#90caf9",
        secondary: "#42a5f5",
        background: "#e3f2fd",
    },
    {
        name: "Blush",
        primary: "#f06292",
        secondary: "#ec407a",
        background: "#fce4ec",
    },
    {
        name: "Sage",
        primary: "#8bc34a",
        secondary: "#4caf50",
        background: "#e8f5e9",
    },
    {
        name: "Amber",
        primary: "#ffc107",
        secondary: "#ff9800",
        background: "#fff8e1",
    },
    {
        name: "Rose Gold",
        primary: "#ffbbbc",
        secondary: "#ff8a80",
        background: "#fce4ec",
    },
    {
        name: "Teal",
        primary: "#009688",
        secondary: "#00796b",
        background: "#e0f2f1",
    },
    {
        name: "Lilac",
        primary: "#ce93d8",
        secondary: "#ba68c8",
        background: "#f3e5f5",
    },
    {
        name: "Pastel",
        primary: "#FFB8FF",
        secondary: "#99B2FF",
        background: "#E2E7F7",
    },
    {
        name: "Sunset",
        primary: "#6963D7",
        secondary: "#F5A8B7",
        background: "#FDFDFD",
    },
];

let IsInitialized = false;
document.addEventListener("load", function () {
    if (document?.childNodes?.[1]?.textContent?.includes("Copyright (c) SEQTA Software") && isSEQTA(document?.title) && !IsInitialized) {
        IsInitialized = true;
        document.querySelector("link[rel='shortcut icon']").href = chrome.runtime.getURL("images/favicon.ico");

        const vancedStyles = document.createElement("link");
        vancedStyles.rel = "stylesheet";
        vancedStyles.type = "text/css";
        vancedStyles.href = chrome.runtime.getURL("css/vanced.css");
        document.head.appendChild(vancedStyles);

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
            <path style="fill: var(--text);" id="SEQTA" class="cls-1" d="M30.626,193.539q0.781,19.727,16.016,31.25t40.43,11.523q26.561,0,41.8-12.207Q144.2,211.8,144.2,190.511q0-16.405-9.668-25.976t-30.859-14.063l-16.992-3.613q-12.4-2.637-17.773-6.641a12.462,12.462,0,0,1-5.469-10.546,14.938,14.938,0,0,1,6.738-12.793q6.64-4.784,17.774-4.786,10.643,0,17.871,5.079a19,19,0,0,1,8.106,13.476h27.734q-0.684-18.846-15.625-30.664Q111,88.169,87.755,88.168q-24.415,0-39.16,12.011Q33.848,112.29,33.849,132.211q0,32.226,38.281,40.234l18.359,3.906q12.987,2.736,18.653,6.934a13.015,13.015,0,0,1,5.664,10.937q0,8.008-7.324,12.989-7.324,5.079-18.848,5.078-12.5,0-20.41-5.078-8.107-5.078-9.082-13.672H30.626ZM265.392,207.5H201.525V173.226h60.253v-23.34H201.525v-32.91h63.867V91.781h-93.36V232.7h93.36V207.5Zm155.664,38.964-17.481-26.562q22.167-18.945,22.168-57.715,0-34.179-18.261-54.2Q389.22,88.168,358.067,88.168t-49.414,19.824q-18.456,20.02-18.457,54.2,0,34.376,18.262,54.3,18.261,19.826,49.609,19.824a78.973,78.973,0,0,0,24.708-3.711l9.765,13.867h28.516Zm-62.891-36.035q-17.285,0-27.539-12.988t-10.254-35.254q0-22.068,10.254-35.156,10.254-12.987,27.441-12.988,17.089,0,27.344,12.988,10.254,13.088,10.254,35.156,0,20.607-10.058,31.445l-6.543-7.91H352.306l16.015,23.438a44.187,44.187,0,0,1-10.156,1.269h0ZM511.974,232.7V116.976h42.285V91.781H440.2v25.195h42.286V232.7h29.492Zm143.75,0h31.933L638.732,91.781H604.064L555.138,232.7h29.59l10.839-33.594h49.512ZM619.591,121.078h1.758l17.48,55.273H601.915Z" transform="translate(-30.625 -2.313)"></path>
            <path xmlns="http://www.w3.org/2000/svg" fill="url(#Gradient)" id="VANCED" class="cls-2" d="M754.892,232.16L807.417,91.541H793.384L748.85,214.717h-1.267L703.049,91.541H689.016L741.638,232.16h13.254Zm158.354,0h14.033L874.754,91.541H861.5L808.878,232.16h14.131L838.6,189.087h59.055Zm-45.8-123.176h1.267l24.947,68.6H842.6ZM965.674,232.16V115.318h1.267L1049.19,232.16h12.86V91.541H1048.9V208.285h-1.27L965.674,91.541H952.518V232.16h13.156Zm188.756,2.923q22.32,0,37.72-11.791a47.164,47.164,0,0,0,18.32-31.184h-13.55a35.668,35.668,0,0,1-14.52,22.219q-11.685,8.382-27.97,8.38-22.215,0-35.27-16.469Q1106.1,189.867,1106.1,161.9q0-27.869,13.06-44.437,13.05-16.467,35.18-16.469a43.508,43.508,0,0,1,27.67,9.258,40.03,40.03,0,0,1,14.91,24.265h13.55a50.12,50.12,0,0,0-18.62-32.938q-15.78-12.959-37.51-12.961-28.56,0-45.22,19.685-16.665,19.783-16.66,53.6t16.66,53.5q16.665,19.684,45.31,19.684h0Zm170.44-15.007h-71.62V166.089h68.02V154.2h-68.02V103.624h71.62V91.541H1239.9V232.16h84.97V220.076Zm31.67-128.535V232.16h46.29q31.965,0,49.51-18.808,17.235-18.417,17.24-51.55,0-33.036-17.24-51.551-17.64-18.71-49.51-18.71h-46.29Zm13.35,12.083h32.16q25.635,0,39.86,15.5,14.025,15.4,14.03,42.78t-14.03,42.683q-14.235,15.494-39.86,15.494h-32.16V103.624Z" transform="translate(-30.625 -2.313)"></path>
            </svg>
          
            <?xml version="1.0" encoding="utf-8"?>
            <svg id="halloween1" style="fill: var(--secondary); position: absolute; right: 113px; top: 38px; z-index: -1;" viewBox="-0.0837 17.442 241.1571 214.2539" width="25px" height="25px" xmlns="http://www.w3.org/2000/svg">
            <g transform="matrix(1, 0, 0, 1, 1.7763568394002505e-15, 1.7763568394002505e-15)">
            <path d="M 239.917 154.259 C 226.746 133.257 203.527 122.396 172.748 122.793 C 163.941 122.914 155.748 123.937 148.993 125.147 C 141.681 121.518 133.324 119.244 124.394 118.726 L 124.394 21.342 C 124.394 19.188 122.648 17.442 120.495 17.442 C 118.342 17.442 116.596 19.188 116.596 21.342 L 116.596 118.727 C 107.665 119.245 99.309 121.52 91.996 125.149 C 85.242 123.936 77.049 122.915 68.242 122.794 C 37.471 122.386 14.244 133.257 1.073 154.259 C -0.987 157.544 -0.269 169.854 3.016 171.913 C 4.175 172.641 11.635 163.843 12.967 161.716 C 27.334 138.806 54.567 135.614 75.766 137.245 C 71.458 141.968 68.164 147.39 66.166 153.276 C 41.205 154.59 22.277 165.426 11.191 184.862 C 9.271 188.229 7.418 201.046 10.786 202.964 C 11.883 203.591 22.092 194.089 23.387 191.819 C 31.658 177.315 45.279 169.143 63.978 167.489 C 64.095 172.751 65.207 177.807 67.169 182.524 C 50.02 185.919 36.927 196.456 28.879 213.534 C 27.227 217.042 28.456 229.476 31.961 231.131 C 32.928 231.586 40.381 222.06 41.577 219.519 C 49.605 202.482 62.847 196.623 75.407 195.507 C 85.731 207.064 102.083 214.532 120.494 214.532 C 138.905 214.532 155.257 207.063 165.58 195.509 C 178.141 196.624 191.384 202.483 199.41 219.519 C 200.606 222.06 208.885 232.136 209.85 231.681 C 213.357 230.027 213.761 217.042 212.107 213.534 C 204.057 196.452 190.976 185.923 173.816 182.53 C 175.771 177.831 176.88 172.798 177.005 167.557 C 192.263 168.965 208.052 175.078 217.599 191.819 C 218.894 194.089 225.803 203.591 226.9 202.964 C 230.267 201.046 231.716 188.229 229.795 184.862 C 218.708 165.426 199.772 154.596 174.82 153.278 C 172.817 147.374 169.511 141.938 165.186 137.206 C 186.374 135.554 213.607 138.735 228.019 161.716 C 229.352 163.843 236.81 172.089 237.97 171.363 C 241.259 169.303 241.977 157.543 239.917 154.259 Z"/>
            </g>
            </svg>
            

            <?xml version="1.0" encoding="utf-8"?>
            <svg id="halloween2" width="20px" height="20px" style="fill: var(--primary); position: absolute; right: 14px; rotate: 340deg; top: 8px; z-index: -1;" viewBox="52.9532 107.7904 300.2468 248.9981" width="300.247" height="248.998" xmlns="http://www.w3.org/2000/svg">
            <g>
            <g id="Layer_2_50_">
            <g id="Layer_1-2_49_">
            <path d="M 275.6 235.7 C 277.6 236.5 279.7 237.3 281.7 238.2 C 286.8 240.4 287.2 243.7 283 247.2 C 281.2 248.7 279.3 250 277.5 251.5 C 274.6 254 274.6 255.1 276.5 258.4 C 278.1 261.2 157.963 198.449 163.263 198.349 C 170.563 198.249 180.2 187.4 183.1 181.3 C 185.4 176.5 187.3 171.6 189.1 166.5 C 191.3 160.3 195 155.4 200.8 152.5 C 206.9 149.5 213.3 147 219.6 144.4 C 227.5 141.2 234.7 137 240.9 131 C 252.4 119.9 266.7 116.1 282.2 116.9 C 294.2 117.6 306.1 115.5 317.2 110.8 C 329 105.9 340.8 107.5 353.2 111.9 C 351.2 112.8 349.8 113.4 348.5 114.1 C 342.4 117.3 338.3 122.5 334.4 127.9 C 331.7 131.7 329 135.4 326.3 139.1 C 322.6 144.1 317.7 147.4 311.8 149.5 C 308.7 150.6 305.6 151.7 302.5 153.1 C 292.1 157.7 287.7 166.3 286.5 177.1 C 286.4 177.9 286.4 178.7 286.4 179.5 C 287.3 188.2 287.2 196.9 284.5 205.4 C 283.6 208.3 284.2 211.1 286 213.7 C 288.3 216.9 288.7 219.7 284 221 C 282.6 221.4 282 222.3 282.6 224 C 284.3 228.6 283.6 230.1 279.2 232.4 C 278 233 276.8 233.7 275.6 234.4 L 275.6 235.7 Z"/>
            <path d="M 60.2 219.3 C 56.8 218.4 50.421 211.688 54.021 210.588 C 86.621 200.388 150.056 185.981 179.656 201.781 C 201.156 213.181 282.07 253.966 299.77 270.566 C 318.57 288.166 266.094 289.714 284.794 307.314 C 295.394 317.314 328.484 319.664 341.784 325.864 C 354.784 331.964 342.654 352.949 341.654 353.749 C 333.254 360.249 320.8 354.5 310.8 353.2 C 294.5 351.1 279.8 344.4 265.4 336.9 C 240 323.8 216.4 307.7 192.4 292.2 C 169 277.1 145.7 262 121.9 247.5 C 102.5 235.7 82.2 225.5 60.2 219.3 Z"/>
            <path d="M 245 295 C 252.4 296.3 259.2 297.7 266 298.8 C 268.3 299.1 270.8 298.8 273.2 298.4 C 275.1 298.1 275.4 297 274.2 295.4 C 271 291.3 271 291.2 276 289.5 C 278.4 288.7 278.9 287.4 277.7 285.2 C 274.8 279.7 274.8 279.7 280 276.5 C 282.7 274.8 284 271.5 283.2 268.4 C 282.4 265.5 280.9 262.9 279.8 260.1 C 279.2 258.7 278.7 257.3 278.2 255.9 L 279 255.4 C 283.2 258.6 287.5 261.6 291.6 264.9 C 307.1 277 321.7 290 333.2 306.2 C 338.4 313.5 343.27 321.3 344.67 330.4 C 345.97 338.7 344.1 341.2 336.4 344.6 C 325.8 349.2 315.4 348.1 305.1 343.7 C 293.1 338.5 283 330.6 273.4 322.1 C 264.3 314 255.7 305.5 246.9 297.1 C 246.3 296.3 245.8 295.8 245 295 Z"/>
            <path d="M 145.2 216.5 C 113.5 201.8 49.833 214.632 53.133 211.332 C 62.533 202.232 76.617 192.995 89.317 191.495 C 111.817 188.795 135.8 188.8 157.2 195.1 C 157.4 195.2 157.5 195.3 157.5 195.3 C 156.6 198.6 155.8 201.8 155 205 C 154.5 207 153.3 208 151.1 208.1 C 144.9 208.5 144.9 208.5 145.1 214.6 C 145.2 215.2 145.2 215.6 145.2 216.5 Z"/>
            <path d="M215.2,266.3c17.3,9,35.4,14.5,55.5,12.8C260.4,285.3,224.1,276.9,215.2,266.3z"/>
            <path d="M265.2,290c-15.4,0.2-29.3-3.7-40.7-14.7C237.1,282.7,250.5,288.4,265.2,290z"/>
            </g>
            </g>
            </g>
            </svg>
          `;
            document.querySelector("#menu").prepend(logoElement);

            chrome.storage.local.get(null, function ({ primaryTheme, secondaryTheme, backgroundTheme, backgroundImage }) {
                document.body.style.setProperty("--primary", primaryTheme || themePresets[0].primary);
                document.body.style.setProperty("--secondary", secondaryTheme || themePresets[0].secondary);
                document.body.style.setProperty("--primary-text", useDark(primaryTheme || themePresets[0].primary) ? "#fff" : "#000");
                document.body.style.setProperty("--secondary-text", useDark(secondaryTheme || themePresets[0].secondary) ? "#fff" : "#000");
                document.body.style.setProperty("--background", backgroundTheme || themePresets[0].background);
                changeBackgroundImage(backgroundImage);
                changeBackground(backgroundTheme || themePresets[0].background);
            });
        });

        waitForSelector('#content > div.connectedNotificationsWrapper > div > button > div').then(async () => {
            const notifications = await fetchNotifications();
            if (!notifications) return;
            const notificationCount = document.getElementsByClassName("notifications__bubble___1EkSQ");
            if (!notificationCount?.[0]) return;
            notificationCount[0].textContent = notifications.payload.notifications.length;
        });

        document.addEventListener("load", function () {
            const observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    mutation.addedNodes.forEach(function (node) {
                        if ((node?.className && node?.className?.includes("userHTML")) || node?.className == "cke_wysiwyg_frame cke_reset") {
                            const link = document.createElement("link");
                            link.rel = "stylesheet";
                            link.type = "text/css";
                            link.href = chrome.runtime.getURL(useDarkBackground(document.body.style.getPropertyValue("--background")) ? "css/userhtml.css" : "css/userhtml_light.css");
                            if (node.contentDocument?.head) {
                                node.contentDocument.head.appendChild(link);
                            }
                            node.addEventListener("load", function () {
                                if (node.contentDocument?.head) {
                                    node.contentDocument.head.appendChild(link);
                                }
                            });
                        };

                        if (node?.className == "settings") {
                            if (document.querySelector(".settings>.seqtavanced-settings")) return;
                            const div = document.createElement("div");
                            div.className = "seqtavanced-settings";
                            div.innerHTML = `<div class="seqtavanced-branding">
                                <a href="${chrome.runtime.getManifest().homepage_url}" target="_blank">
                                    <img src="${chrome.runtime.getURL("images/logo.png")}" height="65px" width="65px"></img>
                                </a>
                                <div>
                                    <h2>SEQTA Vanced</h2>
                                    <div class="label">Version ${chrome.runtime.getManifest().version} • Created by Max</div>
                                </div>
                            </div>
                            <div class="seqtavanced-about">
                                <a class="seqtavanced-github" href="${chrome.runtime.getManifest().homepage_url}/issues" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512"><path style="fill: var(--text);" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                                    Report Issue or Suggest Feature
                                </a>
                            </div>
                            <div class="seqtavanced-legal">
                                <i>This extension is not affiliated with SEQTA or Education Horizons.</i>
                                <br>
                                <i>All trademarks referenced herein are the properties of their respective owners.</i>
                            </div>
                            <h2>Theme Settings</h2>
                            <div class="theme">
                                <label>Primary Colour</label>
                                <div class="color">
                                    <input id="primaryTheme" type="color" class="selector"></input>
                                </div>
                            </div>
                            <div class="theme">
                                <label>Secondary Colour</label>
                                <div class="color">
                                    <input id="secondaryTheme" type="color" class="selector"></input>
                                </div>
                            </div>
                            <div class="theme">
                                <label>Background Colour</label>
                                <div class="color">
                                    <input id="backgroundTheme" type="color" class="selector"></input>
                                </div>
                            </div>
                            <div class="theme">
                                <label>Background Image (BETA)</label>
                                <div class="background"></div>
                            </div>
                            <small><i>Background images are currently in beta and may not work as expected.</i></small>
                            <h2 class="preSpaced">Theme Presets</h2>
                            <div class="presets">
                            </div>`
                            node.prepend(div);

                            const presets = document.querySelector(".presets");
                            const primaryTheme = document.getElementById("primaryTheme");
                            const secondaryTheme = document.getElementById("secondaryTheme");
                            const backgroundTheme = document.getElementById("backgroundTheme");
                            const backgroundImage = document.querySelector(".theme > .background");

                            const upload = document.createElement("button");
                            upload.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                          </svg>`;
                            backgroundImage.appendChild(upload);

                            upload.addEventListener("click", function () {
                                const input = document.createElement("input");
                                input.type = "file";
                                input.accept = "image/*";
                                input.click();
                                input.addEventListener("change", function () {
                                    const file = input.files[0];
                                    const reader = new FileReader();
                                    reader.readAsDataURL(file);
                                    reader.onload = function () {
                                        changeBackgroundImage(reader.result);
                                        chrome.storage.local.set({ backgroundImage: reader.result });
                                    };
                                });
                            });

                            const reset = document.createElement("button");
                            reset.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                          </svg>`;
                            backgroundImage.appendChild(reset);

                            reset.addEventListener("click", function () {
                                chrome.storage.local.set({ backgroundImage: null });
                                changeBackgroundImage(null);
                            });

                            chrome.storage.local.get(null, function (response) {
                                const userThemes = response.themePresets || [];
                                themePresets.forEach((preset) => createThemePreset(preset));
                                userThemes.forEach((preset) => createThemePreset(preset, true));

                                const addtheme = document.createElement("div");
                                addtheme.className = "preset";
                                addtheme.setAttribute("style", "order: 1;");

                                const add = document.createElement("div");
                                add.className = "preview add";
                                add.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" fill-rule="evenodd"><path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"/></svg>`

                                addtheme.appendChild(add);
                                presets.appendChild(addtheme);

                                addtheme.addEventListener("click", function () {
                                    const newPreset = {
                                        name: `Preset ${userThemes.length + 1}`,
                                        primary: primaryTheme.value,
                                        secondary: secondaryTheme.value,
                                        background: backgroundTheme.value
                                    };

                                    userThemes.push(newPreset);
                                    createThemePreset(newPreset, true);
                                    chrome.storage.local.set({ themePresets: userThemes });
                                });

                                primaryTheme.value = response.primaryTheme || themePresets[0].primary;
                                secondaryTheme.value = response.secondaryTheme || themePresets[0].secondary;
                                backgroundTheme.value = response.backgroundTheme || themePresets[0].background;

                                primaryTheme.addEventListener("input", function () {
                                    document.body.style.setProperty("--primary", primaryTheme.value);
                                    document.body.style.setProperty("--primary-text", useDark(primaryTheme.value) ? "#fff" : "#000");
                                });

                                secondaryTheme.addEventListener("input", function () {
                                    document.body.style.setProperty("--secondary", secondaryTheme.value);
                                    document.body.style.setProperty("--secondary-text", useDark(secondaryTheme.value) ? "#fff" : "#000");
                                });

                                backgroundTheme.addEventListener("input", function () {
                                    changeBackground(backgroundTheme.value);
                                    document.body.style.setProperty("--background", backgroundTheme.value);
                                });

                                primaryTheme.addEventListener("change", function () {
                                    chrome.storage.local.set({ primaryTheme: primaryTheme.value });
                                });

                                secondaryTheme.addEventListener("change", function () {
                                    chrome.storage.local.set({ secondaryTheme: secondaryTheme.value });
                                });

                                backgroundTheme.addEventListener("change", function () {
                                    chrome.storage.local.set({ backgroundTheme: backgroundTheme.value });
                                });

                                function createThemePreset(preset, userPreset = false) {
                                    const presets = document.querySelector(".presets");
                                    const theme = document.createElement("div");
                                    theme.className = "preset";
                                    theme.setAttribute("style", `border-color: ${preset.background};`);

                                    const gradient = document.createElement("div");
                                    gradient.className = "preview";
                                    gradient.setAttribute("style", `background: linear-gradient(90deg, ${preset.secondary} 0%, ${preset.primary} 100%);`);

                                    const name = document.createElement("span");
                                    name.innerText = preset.name;

                                    if (userPreset) {
                                        const deletetheme = document.createElement("div");
                                        deletetheme.className = "add delete";
                                        deletetheme.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"/></svg>`
                                        theme.appendChild(deletetheme);

                                        deletetheme.addEventListener("click", function () {
                                            userThemes.splice(userThemes.indexOf(preset), 1);
                                            chrome.storage.local.set({ themePresets: userThemes });
                                            theme.remove();
                                        });
                                    }

                                    theme.appendChild(gradient);
                                    theme.appendChild(name);
                                    presets.appendChild(theme);

                                    gradient.addEventListener("click", function () {
                                        document.body.style.setProperty("--primary", preset.primary);
                                        document.body.style.setProperty("--secondary", preset.secondary);
                                        document.body.style.setProperty("--primary-text", useDark(preset.primary) ? "#fff" : "#000");
                                        document.body.style.setProperty("--secondary-text", useDark(preset.secondary) ? "#fff" : "#000");
                                        document.body.style.setProperty("--background", preset.background);
                                        changeBackground(preset.background);

                                        primaryTheme.value = preset.primary;
                                        secondaryTheme.value = preset.secondary;
                                        backgroundTheme.value = preset.background;

                                        chrome.storage.local.set({ primaryTheme: primaryTheme.value });
                                        chrome.storage.local.set({ secondaryTheme: secondaryTheme.value });
                                        chrome.storage.local.set({ backgroundTheme: backgroundTheme.value });
                                    });
                                }
                            });
                        }

                        if (node?.className == "uiButton logout") {
                            if (document.querySelector("#userActions > .seqtavanced-shortcut")) return;
                            const button = document.createElement("button");
                            button.className = "uiButton logout seqtavanced-shortcut";
                            button.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16"><path d="M 14.261 13.886 C 9.965 13.886 9.175 13.956 6.996 13.713 C 3.827 13.187 1.568 9.564 2.554 6.492 C 3.278 4.444 5.061 2.74 7.195 2.255 C 9.346 1.827 11.646 2.869 12.855 4.678 C 13.76 6.008 14.349 7.743 13.818 9.331 C 13.492 10.327 12.678 11.554 11.947 12.311"/></svg>`;
                            button.onclick = function () {
                                window.location.href = "#?page=/settings";
                            };
                            document.querySelector("#userActions").appendChild(button);
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

async function fetchNotifications() {
    const response = await fetch(`${location.origin}/seqta/${getSEQTAEnvironment(document?.title)}/heartbeat`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
            timestamp: '1970-01-01 00:00:00.0',
            hash: '#?page=/home',
        }),
    });

    if (!response.ok) {
        throw new Error(`Failed to retrieve notifications with status ${response.status}`);
    }

    const notifications = await response.json();
    return notifications;
}

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

function useDarkBackground(bgColor) {
    if (!bgColor) { return true; }
    return (parseInt(bgColor.replace('#', ''), 16) > 0xffffff / 2) ? false : true;
}

function useDark(color) {
    const hex = color.replace('#', '');
    const c_r = parseInt(hex.substr(0, 2), 16);
    const c_g = parseInt(hex.substr(2, 2), 16);
    const c_b = parseInt(hex.substr(4, 2), 16);
    const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
    return brightness < 183;
}

function changeBackgroundImage(value) {
    if (value) {
        document.body.style.setProperty("--background-image", `linear-gradient(to bottom, color-mix(in srgb, var(--background) 90%, transparent), color-mix(in srgb, var(--background) 90%, transparent)), url(${value})`);
    }
    else {
        document.body.style.setProperty("--background-image", "none");
    }
}

function changeBackground(value) {
    const dark = useDarkBackground(value);
    if (dark) {
        document.body.style.setProperty("color", '#ffffff !important');
        document.body.style.setProperty("--theme-sel-fg-parts", '#ffffff');
        document.body.style.setProperty("--text", '#ffffff');
        document.body.style.setProperty("--background-opacity", '#ffffff05');
    }
    else {
        document.body.style.setProperty("color", '#000000 !important');
        document.body.style.setProperty("--theme-sel-fg-parts", '#000000');
        document.body.style.setProperty("--text", '#000000');
        document.body.style.setProperty("--background-opacity", '#0000001a');
    }
}

function isSEQTA(title) {
    if (title.includes("SEQTA Learn") || title.includes("SEQTA Engage")) return true;
    else return false;
}

function getSEQTAEnvironment(title) {
    if (title.includes("SEQTA Engage")) return 'parent';
    else return 'student';
}