// 自动生成，请勿手改。重新生成：`node scripts/build-catalog.mjs`
// 来源：uiverse-io/galaxy（MIT 许可，已带作者署名与原链）。生成时间：2026-05-29T13:47:57.963Z
// 条目数：150
export const CATALOG = [
  {
    "id": "uiverse-g4b413l_brave-wasp-99",
    "title": "Brave Wasp",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "G4b413l",
      "profileUrl": "https://uiverse.io/G4b413l/brave-wasp-99"
    },
    "license": "MIT",
    "description": "Brave Wasp · loader by G4b413l",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div class=\"line-wobble\"></div>",
    "css": "/* From Uiverse.io by G4b413l - Tags: loader */\n.line-wobble {\n --uib-size: 80px;\n --uib-speed: 1.55s;\n --uib-color: black;\n --uib-line-weight: 5px;\n position: relative;\n display: flex;\n align-items: center;\n justify-content: center;\n height: var(--uib-line-weight);\n width: var(--uib-size);\n border-radius: calc(var(--uib-line-weight) / 2);\n overflow: hidden;\n transform: translate3d(0, 0, 0);\n}\n\n.line-wobble::before {\n content: '';\n position: absolute;\n top: 0;\n left: 0;\n height: 100%;\n width: 100%;\n background-color: var(--uib-color);\n opacity: 0.1;\n}\n\n.line-wobble::after {\n content: '';\n height: 100%;\n width: 100%;\n border-radius: calc(var(--uib-line-weight) / 2);\n animation: wobble var(--uib-speed) ease-in-out infinite;\n transform: translateX(-90%);\n background-color: var(--uib-color);\n}\n\n@keyframes wobble {\n 0%,\n  100% {\n  transform: translateX(-90%);\n }\n\n 50% {\n  transform: translateX(90%);\n }\n}"
  },
  {
    "id": "uiverse-jkhuger_little-falcon-22",
    "title": "Little Falcon",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "JkHuger",
      "profileUrl": "https://uiverse.io/JkHuger/little-falcon-22"
    },
    "license": "MIT",
    "description": "Little Falcon · loader by JkHuger",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 850,
    "accentColor": null,
    "html": "<div class=\"item\">\n    <div class=\"loader-pulse\"></div>\n</div>",
    "css": "/* From Uiverse.io by JkHuger - Tags: loader */\n.loader-pulse {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: #8f44fd;\n  animation: load-pulse 0.85s infinite linear;\n}\n\n@keyframes load-pulse {\n  0% {\n    transform: scale(0.15);\n    opacity: 0;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0;\n  }\n}"
  },
  {
    "id": "uiverse-ksaplay_quiet-snake-78",
    "title": "Quiet Snake",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "KSAplay",
      "profileUrl": "https://uiverse.io/KSAplay/quiet-snake-78"
    },
    "license": "MIT",
    "description": "Quiet Snake · loader by KSAplay",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 2000,
    "accentColor": null,
    "html": "<div class=\"loader\"></div>",
    "css": "/* From Uiverse.io by KSAplay - Tags: loader */\n.loader {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.loader::before,\n.loader::after {\n  position: absolute;\n  content: \"\";\n  height: 8em;\n  width: 8em;\n  border: 1em solid #0060fa;\n  border-radius: 50%;\n  animation: loader_79178 2s linear infinite;\n}\n\n.loader::after {\n  opacity: 0;\n  animation-delay: 1s;\n}\n\n@keyframes loader_79178 {\n  0% {\n    border: 1em solid #0060fa;\n    transform: scale(0);\n    opacity: 1;\n  }\n\n  100% {\n    border: 0 solid #0060fa;\n    transform: scale(1);\n    opacity: 0;\n  }\n}"
  },
  {
    "id": "uiverse-gagan-gv_stupid-walrus-23",
    "title": "Stupid Walrus",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "gagan-gv",
      "profileUrl": "https://uiverse.io/gagan-gv/stupid-walrus-23"
    },
    "license": "MIT",
    "description": "Stupid Walrus · loader by gagan-gv",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 2000,
    "accentColor": null,
    "html": "<div class=\"loader\"></div>",
    "css": "/* From Uiverse.io by gagan-gv - Tags: loader */\n.loader {\n border: 0 solid transparent;\n border-radius: 50%;\n width: 100px;\n height: 100px;\n}\n\n.loader::before,\n.loader::after {\n content: '';\n border: 7px solid #ccc;\n border-radius: 50%;\n width: inherit;\n height: inherit;\n position: absolute;\n animation: loader 2s linear infinite;\n opacity: 0;\n}\n\n.loader::before {\n animation-delay: 1s;\n}\n\n@keyframes loader {\n 0% {\n  transform: scale(1);\n  opacity: 0;\n }\n\n 50% {\n  opacity: 1;\n }\n\n 100% {\n  transform: scale(0);\n  opacity: 0;\n }\n}"
  },
  {
    "id": "uiverse-g4b413l_slimy-otter-89",
    "title": "Slimy Otter",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "G4b413l",
      "profileUrl": "https://uiverse.io/G4b413l/slimy-otter-89"
    },
    "license": "MIT",
    "description": "Slimy Otter · loader by G4b413l",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div class=\"ping\"></div>",
    "css": "/* From Uiverse.io by G4b413l - Tags: loader */\n.ping {\n --uib-size: 50px;\n --uib-speed: 1s;\n --uib-color: #3950cf;\n position: relative;\n height: var(--uib-size);\n width: var(--uib-size);\n}\n\n.ping::before,\n.ping::after {\n content: '';\n position: absolute;\n top: 0;\n left: 0;\n height: 100%;\n width: 100%;\n border-radius: 50%;\n background-color: var(--uib-color);\n animation: pulse7132 var(--uib-speed) linear infinite;\n transform: scale(0);\n opacity: 0;\n}\n\n.ping::after {\n animation-delay: calc(var(--uib-speed) / -2);\n}\n\n@keyframes pulse7132 {\n 0% {\n  transform: scale(0);\n  opacity: 1;\n }\n\n 100% {\n  transform: scale(1);\n  opacity: 0;\n }\n}"
  },
  {
    "id": "uiverse-shoh2008_nervous-lizard-11",
    "title": "Nervous Lizard",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "Shoh2008",
      "profileUrl": "https://uiverse.io/Shoh2008/nervous-lizard-11"
    },
    "license": "MIT",
    "description": "Nervous Lizard · loader by Shoh2008",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div class=\"loader\"></div>",
    "css": "/* From Uiverse.io by Shoh2008 - Tags: loader */\n.loader {\n  width: 48px;\n  height: 48px;\n  background: #353535;\n  display: block;\n  margin: 20px auto;\n  position: relative;\n  box-sizing: border-box;\n  animation: rotationBack 1s ease-in-out infinite reverse;\n}\n\n.loader::before {\n  content: '';\n  box-sizing: border-box;\n  left: 0;\n  top: 0;\n  transform: rotate(45deg);\n  position: absolute;\n  width: 48px;\n  height: 48px;\n  background: #2e2e2e;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\n}\n\n.loader::after {\n  content: '';\n  box-sizing: border-box;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  background: rgb(0, 0, 0);\n  transform: translate(-50%, -50%);\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\n}\n\n@keyframes rotationBack {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(-360deg);\n  }\n}"
  },
  {
    "id": "uiverse-satyamchaudharydev_young-puma-4",
    "title": "Young Puma",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "satyamchaudharydev",
      "profileUrl": "https://uiverse.io/satyamchaudharydev/young-puma-4"
    },
    "license": "MIT",
    "description": "Young Puma · loader by satyamchaudharydev",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 2000,
    "accentColor": null,
    "html": "<div class=\"spinner\">\n</div>",
    "css": "/* From Uiverse.io by satyamchaudharydev - Tags: loader */\n.spinner {\n --size-of-spinner: 50px;\n --spinner-border-width: 4px;\n --spinner-color: #08c18a;\n --circle-color: #8bc34a24;\n --speed-of-animation: 2s;\n --scale: 1.3;\n width: var(--size-of-spinner);\n height: var(--size-of-spinner);\n background: var(--circle-color);\n border-radius: 50%;\n position: relative;\n}\n\n.spinner::after {\n content: \"\";\n display: block;\n position: absolute;\n border-radius: 50%;\n inset: 0;\n border: var(--spinner-border-width) solid var(--spinner-color);\n border-left-color: transparent;\n border-right-color: transparent;\n animation: spinny var(--speed-of-animation) linear infinite;\n}\n\n@keyframes spinny {\n 0% {\n  transform: rotate(0deg) scale(1)\n }\n\n 50% {\n  transform: rotate(45deg) scale(var(--scale))\n }\n\n 100% {\n  transform: rotate(360deg) scale(1)\n }\n}"
  },
  {
    "id": "uiverse-mrhyddenn_tasty-crab-98",
    "title": "Tasty Crab",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "mrhyddenn",
      "profileUrl": "https://uiverse.io/mrhyddenn/tasty-crab-98"
    },
    "license": "MIT",
    "description": "Tasty Crab · loader by mrhyddenn",
    "tags": [
      "loader",
      "progress",
      "progress bar",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<div class=\"progress-loader\">\n    <div class=\"progress\"></div>\n</div>",
    "css": "/* From Uiverse.io by mrhyddenn - Tags: progress, progress bar, loader */\n.progress-loader {\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n}\n\n.progress-loader {\n  width: 150px;\n  background: rgba(236, 236, 238, 0.253);\n  height: 3px;\n  border-radius: 7px;\n}\n\n.progress {\n  content: '';\n  width: 1px;\n  height: 3px;\n  border-radius: 7px;\n  background: rgb(255, 255, 255);\n  transition: 0.5s;\n  animation: loading1274 2s ease infinite;\n}\n\n@keyframes loading1274 {\n  0% {\n    width: 0%;\n  }\n\n  10% {\n    width: 10%;\n  }\n\n  50% {\n    width: 40%;\n  }\n\n  60% {\n    width: 60%;\n  }\n\n  100% {\n    width: 100%;\n  }\n}"
  },
  {
    "id": "uiverse-satyamchaudharydev_tough-baboon-84",
    "title": "Tough Baboon",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "satyamchaudharydev",
      "profileUrl": "https://uiverse.io/satyamchaudharydev/tough-baboon-84"
    },
    "license": "MIT",
    "description": "Tough Baboon · loader by satyamchaudharydev",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div class=\"ball\"></div>",
    "css": "/* From Uiverse.io by satyamchaudharydev - Tags: loader */\n.ball {\n --size: 20px;\n --timing: 0.7s;\n --displace: 70px;\n border-radius: 50%;\n width: var(--size);\n height: var(--size);\n background: #000;\n margin-right: var(--displace);\n animation: animation321 var(--timing) infinite alternate\n    cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n\n@keyframes animation321 {\n 0% {\n  background: #4284f3;\n  transform: translateX(var(--displace));\n }\n\n 100% {\n  background: #ea4335;\n  transform: translateX(00px);\n }\n}"
  },
  {
    "id": "uiverse-alexruix_nervous-sheep-18",
    "title": "Nervous Sheep",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "alexruix",
      "profileUrl": "https://uiverse.io/alexruix/nervous-sheep-18"
    },
    "license": "MIT",
    "description": "Nervous Sheep · loader by alexruix",
    "tags": [
      "loader",
      "bars",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"loader\"></div>",
    "css": "/* From Uiverse.io by alexruix - Tags: loader, bars */\n.loader {\n  width: 8px;\n  height: 40px;\n  border-radius: 4px;\n  display: block;\n  background-color: currentColor;\n  margin: 20px auto;\n  position: relative;\n  color: #f2f2f2;\n  animation: animloader 0.3s 0.3s linear infinite alternate;\n}\n\n.loader::after,\n.loader::before {\n  content: '';\n  width: 8px;\n  height: 40px;\n  border-radius: 4px;\n  background: currentColor;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 20px;\n  animation: animloader 0.3s 0.45s linear infinite alternate;\n}\n\n.loader::before {\n  left: -20px;\n  animation-delay: 0s;\n}\n\n@keyframes animloader {\n  0% {\n    height: 48px;\n  }\n\n  100% {\n    height: 4px;\n  }\n}"
  },
  {
    "id": "uiverse-shoh2008_new-lion-60",
    "title": "New Lion",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "Shoh2008",
      "profileUrl": "https://uiverse.io/Shoh2008/new-lion-60"
    },
    "license": "MIT",
    "description": "New Lion · loader by Shoh2008",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 2000,
    "accentColor": null,
    "html": "<div class=\"loader\"></div>",
    "css": "/* From Uiverse.io by Shoh2008 - Tags: loader */\n.loader {\n  width: 84px;\n  height: 84px;\n  position: relative;\n  overflow: hidden;\n}\n\n.loader:before , .loader:after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: yellow;\n  transform: translate(-50% , 100%)  scale(0);\n  animation: push_4051 2s infinite ease-in;\n}\n\n.loader:after {\n  animation-delay: 1s;\n}\n\n@keyframes push_4051 {\n  0% {\n    transform: translate(-50% , 100%)  scale(1);\n  }\n\n  15% , 25% {\n    transform: translate(-50% , 50%)  scale(1);\n  }\n\n  50% , 75% {\n    transform: translate(-50%, -30%) scale(0.5);\n  }\n\n  80%,  100% {\n    transform: translate(-50%, -50%) scale(0);\n  }\n}"
  },
  {
    "id": "uiverse-rodrypaladin_evil-goat-39",
    "title": "Evil Goat",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "Rodrypaladin",
      "profileUrl": "https://uiverse.io/Rodrypaladin/evil-goat-39"
    },
    "license": "MIT",
    "description": "Evil Goat · loader by Rodrypaladin",
    "tags": [
      "loader",
      "animation",
      "red",
      "loading",
      "modern",
      "creative",
      "multicolor",
      "bounce animation"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div class=\"loader\"></div>",
    "css": "/* From Uiverse.io by Rodrypaladin - Tags: animation, red, loading, loader, modern, creative, multicolor, bounce animation */\n.loader {\n  width: 100px;\n  height: 100px;\n  background-color: orange;\n  border-radius: 50%;\n  box-shadow: -15px -15px 15px #ff6600, 15px -15px 15px #ff9100, 15px 15px 15px #ff5500, -15px 15px 15px #ffa600, -15px 0 15px #ff6600, 15px 0 15px #ffcc00;\n  animation: rotate 1s infinite;\n  transform: rotate(0) scale(0.8);\n}\n\n@keyframes rotate {\n  0% {\n    transform: rotate(360deg) scale(0.8);\n  }\n\n  50% {\n    transform: rotate(0) scale(1.2);\n  }\n}"
  },
  {
    "id": "uiverse-mrhyddenn_average-dodo-53",
    "title": "Average Dodo",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "mrhyddenn",
      "profileUrl": "https://uiverse.io/mrhyddenn/average-dodo-53"
    },
    "license": "MIT",
    "description": "Average Dodo · loader by mrhyddenn",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 2000,
    "accentColor": null,
    "html": "<div class=\"loader\">\n    <div class=\"circle\"></div>\n</div>",
    "css": "/* From Uiverse.io by mrhyddenn - Tags: loader */\n.loader {\n  background: transparent;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.circle {\n  width: 80px;\n  height: 80px;\n  border: 2px solid #ccc;\n  position: absolute;\n  border-radius: 50%;\n  animation: circle14512 2s linear infinite;\n}\n\n.circle::before {\n  content: '';\n  position: absolute;\n  top: -10px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #9ae932;\n  box-shadow: 0 0 20px #9ae932, 0 0 60px #9ae932;\n}\n\n@keyframes circle14512 {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}"
  },
  {
    "id": "uiverse-benjimich_shy-newt-25",
    "title": "Shy Newt",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "benjimich",
      "profileUrl": "https://uiverse.io/benjimich/shy-newt-25"
    },
    "license": "MIT",
    "description": "Shy Newt · loader by benjimich",
    "tags": [
      "loader",
      "color",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 3000,
    "accentColor": null,
    "html": "<div class=\"loader\">\n  <div class=\"inner_loader\"></div>\n</div>",
    "css": "/* From Uiverse.io by benjimich - Tags: loader, color */\n.loader {\n  width: 200px;\n  height: 10px;\n  background: #004643;\n  border-radius: 50px;\n  overflow: hidden;\n}\n\n.inner_loader {\n  width: 60%;\n  height: 100%;\n  background: #f9bc60;\n  border-radius: 50px;\n  animation: moveLeftRight 3s ease-in-out infinite;\n}\n\n@keyframes moveLeftRight {\n  0% {\n    transform: translateX(calc(-100% + 10px));\n  }\n\n  50% {\n    transform: translateX(calc(200px - 10px));\n  }\n\n  100% {\n    transform: translateX(calc(-100% + 10px));\n  }\n}"
  },
  {
    "id": "uiverse-mrhyddenn_fast-bear-60",
    "title": "Fast Bear",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "mrhyddenn",
      "profileUrl": "https://uiverse.io/mrhyddenn/fast-bear-60"
    },
    "license": "MIT",
    "description": "Fast Bear · loader by mrhyddenn",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 2000,
    "accentColor": null,
    "html": "<div class=\"mover\"></div>",
    "css": "/* From Uiverse.io by mrhyddenn - Tags: loader */\n.mover {\n  background: rgba(248, 25, 25, 0.979);\n  height: 10px;\n  width: 80px;\n  border-radius: 10px;\n  position: relative;\n  animation: mover5 2s ease-in-out infinite;\n}\n\n.mover::before,\n.mover::after {\n  content: '';\n  position: absolute;\n  height: 10px;\n  border-radius: 10px;\n  left: 20px;\n  animation: mover5 2s ease-in-out infinite;\n}\n\n.mover::before {\n  background: rgb(201, 1, 1);\n  top: 20px;\n  width: 50px;\n}\n\n.mover::after {\n  background: rgb(255, 116, 106);\n  top: -20px;\n  width: 60px;\n}\n\n@keyframes mover5 {\n  0% {\n    transform: translateX(30px) scale(1);\n  }\n\n  50% {\n    transform: translateX(-30px) scale(1.1);\n  }\n\n  100% {\n    transform: translateX(30px) scale(1);\n  }\n}"
  },
  {
    "id": "uiverse-vikramsinghnegi_moody-mole-33",
    "title": "Moody Mole",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "vikramsinghnegi",
      "profileUrl": "https://uiverse.io/vikramsinghnegi/moody-mole-33"
    },
    "license": "MIT",
    "description": "Moody Mole · loader by vikramsinghnegi",
    "tags": [
      "loader",
      "heart",
      "smooth",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1200,
    "accentColor": null,
    "html": "<span class=\"loader\"></span>",
    "css": "/* From Uiverse.io by vikramsinghnegi  - Tags: loader, heart, smooth */\n.loader {\n  position: relative;\n  width: 40px;\n  height: 60px;\n  animation: heartBeat 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n\n.loader:before,\n.loader:after {\n  content: \"\";\n  background: red;\n  width: 40px;\n  height: 60px;\n  border-radius: 50px 50px 0 0;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  transform: rotate(45deg);\n  transform-origin: 50% 68%;\n  box-shadow: 5px 4px 5px #0004 inset;\n}\n.loader:after {\n  transform: rotate(-45deg);\n}\n@keyframes heartBeat {\n  0% {\n    transform: scale(0.95);\n  }\n  5% {\n    transform: scale(1.1);\n  }\n  39% {\n    transform: scale(0.85);\n  }\n  45% {\n    transform: scale(1);\n  }\n  60% {\n    transform: scale(0.95);\n  }\n  100% {\n    transform: scale(0.9);\n  }\n}"
  },
  {
    "id": "uiverse-david-mohseni_breezy-penguin-47",
    "title": "Breezy Penguin",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "david-mohseni",
      "profileUrl": "https://uiverse.io/david-mohseni/breezy-penguin-47"
    },
    "license": "MIT",
    "description": "Breezy Penguin · loader by david-mohseni",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 2000,
    "accentColor": null,
    "html": "<div class=\"arrow\">\n    <span></span>\n    <span></span>\n    <span></span>\n</div>",
    "css": "/* From Uiverse.io by david-mohseni - Tags: loader */\n.arrow {\n  transform: rotate(90deg);\n  cursor: pointer;\n}\n\n.arrow span {\n  display: block;\n  width: 15px;\n  height: 15px;\n  border-bottom: 5px solid red;\n  border-right: 5px solid red;\n  transform: rotate(45deg);\n  margin: -15px;\n  animation: animate28797 2s infinite;\n}\n\n.arrow span:nth-child(2) {\n  animation-delay: -0.2s;\n}\n\n.arrow span:nth-child(3) {\n  animation-delay: -0.4s;\n}\n\n@keyframes animate28797 {\n  0% {\n    opacity: 0;\n    transform: rotate(45deg) translate(-20px, -20px);\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n    transform: rotate(45deg) translate(20px, 20px);\n  }\n}"
  },
  {
    "id": "uiverse-pradeepsaranbishnoi_tricky-catfish-63",
    "title": "Tricky Catfish",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "Pradeepsaranbishnoi",
      "profileUrl": "https://uiverse.io/Pradeepsaranbishnoi/tricky-catfish-63"
    },
    "license": "MIT",
    "description": "Tricky Catfish · loader by Pradeepsaranbishnoi",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 400,
    "accentColor": null,
    "html": "<div class=\"code-loader\">\n  <span>{</span><span>}</span>\n</div>",
    "css": "/* From Uiverse.io by Pradeepsaranbishnoi - Tags: loader */\n.code-loader {\n  color: #fff;\n  font-family: Consolas, Menlo, Monaco, monospace;\n  font-weight: bold;\n  font-size: 100px;\n  opacity: 0.8;\n}\n\n.code-loader span {\n  display: inline-block;\n  animation: pulse_414 0.4s alternate infinite ease-in-out;\n}\n\n.code-loader span:nth-child(odd) {\n  animation-delay: 0.4s;\n}\n\n@keyframes pulse_414 {\n  to {\n    transform: scale(0.8);\n    opacity: 0.5;\n  }\n}"
  },
  {
    "id": "uiverse-youngjid_gentle-dragonfly-99",
    "title": "Gentle Dragonfly",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "youngjid",
      "profileUrl": "https://uiverse.io/youngjid/gentle-dragonfly-99"
    },
    "license": "MIT",
    "description": "Gentle Dragonfly · loader by youngjid",
    "tags": [
      "loader",
      "dark",
      "glitch",
      "text animation",
      "css effect",
      "glitch effect",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"glitch\" data-text=\"Loading ...\">Loading ...</div>",
    "css": "/* From Uiverse.io by youngjid  - Tags: loader, dark, glitch, text animation, css effect, glitch Effect */\n.glitch {\n  position: relative;\n  font-size: 60px;\n  font-weight: bold;\n  color: #ffffff;\n  letter-spacing: 3px;\n  z-index: 1;\n}\n\n.glitch:before,\n.glitch:after {\n  display: block;\n  content: attr(data-text);\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0.8;\n}\n\n.glitch:before {\n  animation: glitch-it 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;\n  color: #00ffff;\n  z-index: -1;\n}\n\n.glitch:after {\n  animation: glitch-it 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both\n    infinite;\n  color: #ff00ff;\n  z-index: -2;\n}\n\n@keyframes glitch-it {\n  0% {\n    transform: translate(0);\n  }\n  20% {\n    transform: translate(-2px, 2px);\n  }\n  40% {\n    transform: translate(-2px, -2px);\n  }\n  60% {\n    transform: translate(2px, 2px);\n  }\n  80% {\n    transform: translate(2px, -2px);\n  }\n  to {\n    transform: translate(0);\n  }\n}"
  },
  {
    "id": "uiverse-cksunandh_young-dragonfly-81",
    "title": "Young Dragonfly",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "Cksunandh",
      "profileUrl": "https://uiverse.io/Cksunandh/young-dragonfly-81"
    },
    "license": "MIT",
    "description": "Young Dragonfly · loader by Cksunandh",
    "tags": [
      "loader",
      "simple",
      "html",
      "css",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 2000,
    "accentColor": null,
    "html": "<div class=\"loader\"><i></i></div>",
    "css": "/* From Uiverse.io by Cksunandh  - Tags: simple, loader, html, css */\n.loader i {\n  display: block;\n  width: 2px;\n  height: 85px;\n  margin-top: 18px;\n  background-color: rgba(61, 61, 61, 0.5);\n  overflow: hidden;\n  position: relative;\n}\n.loader i:before {\n  display: block;\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background-color: #fafafa;\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: loader-animation 2s infinite normal;\n}\n@keyframes loader-animation {\n  0% {\n    transform: translate3d(0, -100%, 0);\n  }\n  15% {\n    transform: translate3d(0, -98%, 0);\n  }\n  85% {\n    transform: translate3d(0, 98%, 0);\n  }\n  100% {\n    transform: translate3d(0, 100%, 0);\n  }\n}"
  },
  {
    "id": "uiverse-leonkohli_ordinary-rat-31",
    "title": "Ordinary Rat",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "LeonKohli",
      "profileUrl": "https://uiverse.io/LeonKohli/ordinary-rat-31"
    },
    "license": "MIT",
    "description": "Ordinary Rat · loader by LeonKohli",
    "tags": [
      "loader",
      "gradient",
      "rounded",
      "gradients",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1500,
    "accentColor": null,
    "html": "<div class=\"loader\">\n  <div class=\"bubble\"></div>\n  <div class=\"bubble\"></div>\n  <div class=\"bubble\"></div>\n</div>",
    "css": "/* From Uiverse.io by LeonKohli  - Tags: gradient, loader, rounded, gradients */\n.loader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.bubble {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-image: linear-gradient(to right, #ff6b81, #ff9a44);\n  margin: 0 5px;\n  animation: bubbleAnimation 1.5s ease-in-out infinite;\n}\n\n@keyframes bubbleAnimation {\n  0%,\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(2);\n    opacity: 0.5;\n  }\n}"
  },
  {
    "id": "uiverse-cornerstone-04_terrible-termite-49",
    "title": "Terrible Termite",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "Cornerstone-04",
      "profileUrl": "https://uiverse.io/Cornerstone-04/terrible-termite-49"
    },
    "license": "MIT",
    "description": "Terrible Termite · loader by Cornerstone-04",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div class=\"loader\">\n\n</div>",
    "css": "/* From Uiverse.io by Cornerstone-04 - Tags: loader */\n.loader {\n  display: inline-block;\n  width: 190px;\n  height: 10px;\n  border-radius: 40px;\n  background-color: rgba(255, 255, 255, 1);\n  position: relative;\n  overflow: hidden;\n}\n\n.loader span {\n  font: 700 22px monospace;\n  text-transform: uppercase;\n  margin: auto;\n  color: #fff;\n  letter-spacing: 5px;\n}\n\n.loader::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: -50px;\n  width: 150%;\n  height: 100%;\n  background-image: linear-gradient(332deg, #6bff7f, #32ff3c);\n  border-radius: inherit;\n  transform: scaleX(0);\n  transform-origin: left;\n  animation: load5123 1s infinite;\n}\n\n@keyframes load5123 {\n  50% {\n    transform: scaleX(1);\n  }\n\n  100% {\n    transform: scaleX(0);\n    transform-origin: right;\n  }\n}"
  },
  {
    "id": "uiverse-g4b413l_nasty-yak-65",
    "title": "Nasty Yak",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "G4b413l",
      "profileUrl": "https://uiverse.io/G4b413l/nasty-yak-65"
    },
    "license": "MIT",
    "description": "Nasty Yak · loader by G4b413l",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<div class=\"spinner\"></div>",
    "css": "/* From Uiverse.io by G4b413l - Tags: loader */\n.spinner {\n  position: relative;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n}\n\n.spinner::before,\n.spinner::after {\n  content: \"\";\n  position: absolute;\n  border-radius: inherit;\n}\n\n.spinner::before {\n  width: 100%;\n  height: 100%;\n  background-image: linear-gradient(0deg, #ff00cc 0%, #212121 50%);\n  animation: spin .5s infinite linear;\n}\n\n.spinner::after {\n  width: 85%;\n  height: 85%;\n  background-color: #212121;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}"
  },
  {
    "id": "uiverse-angelo2004-mateus_neat-owl-38",
    "title": "Neat Owl",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "angelo2004-mateus",
      "profileUrl": "https://uiverse.io/angelo2004-mateus/neat-owl-38"
    },
    "license": "MIT",
    "description": "Neat Owl · loader by angelo2004-mateus",
    "tags": [
      "loader",
      "material design",
      "neumorphism",
      "animation",
      "animated",
      "gradients"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div class=\"loader\">\n  <span></span>\n</div>",
    "css": "/* From Uiverse.io by angelo2004-mateus - Tags: material design, neumorphism, animation, loader, animated, gradients */\n.loader {\n  width: 10rem;\n  height: 10rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border-radius: 50%;\n  box-shadow: -5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94, 104, 121, 0.137);\n}\n\n.loader:before {\n  height: 4rem;\n  width: 4rem;\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 10;\n  background: #ececec;\n  border-radius: 50%;\n  border: 2px solid #e2e1e1;\n  box-shadow: inset -5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3);\n}\n\n.loader span {\n  width: 80%;\n  height: 80%;\n  border-radius: 50%;\n  background: linear-gradient(to bottom, rgb(89, 92, 252), rgb(226, 57, 241));\n  animation: rotate 1s infinite linear;\n}\n\n@keyframes rotate {\n\n  100% {\n    transform: rotate(360deg);\n  }\n}"
  },
  {
    "id": "uiverse-terenceodonoghue_friendly-pug-5",
    "title": "Friendly Pug",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "terenceodonoghue",
      "profileUrl": "https://uiverse.io/terenceodonoghue/friendly-pug-5"
    },
    "license": "MIT",
    "description": "Friendly Pug · loader by terenceodonoghue",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1800,
    "accentColor": null,
    "html": "<div class=\"container\">\n  <span></span>\n  <span></span>\n  <span></span>\n</div>",
    "css": "/* From Uiverse.io by terenceodonoghue - Tags: loader */\n.container {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: flex;\n  gap: 0.625em;\n  transform: translate(-50%, -50%);\n}\n\n.container span {\n  border-radius: 50%;\n  height: 1.5em;\n  width: 1.5em;\n}\n\n.container span::before {\n  content: \"\";\n  display: block;\n  border-radius: inherit;\n  height: inherit;\n  width: inherit;\n  background-color: inherit;\n  animation: ripple 1.8s ease-out infinite;\n  animation-delay: inherit;\n  z-index: -1;\n}\n\n.container span:nth-of-type(1) {\n  background-color: #84cdfa;\n}\n\n.container span:nth-of-type(2) {\n  background-color: #5ad1cd;\n  animation-delay: 0.2s;\n}\n\n.container span:nth-of-type(3) {\n  background-color: #9b59b6;\n  animation-delay: 0.4s;\n}\n\n@keyframes ripple {\n  from {\n    opacity: 1;\n    transform: scale(0);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale(3);\n  }\n}"
  },
  {
    "id": "uiverse-satyamchaudharydev_fresh-frog-39",
    "title": "Fresh Frog",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "satyamchaudharydev",
      "profileUrl": "https://uiverse.io/satyamchaudharydev/fresh-frog-39"
    },
    "license": "MIT",
    "description": "Fresh Frog · loader by satyamchaudharydev",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div class=\"spinner\">\n  <span></span>\n  <span></span>\n  <span></span>\n</div>",
    "css": "/* From Uiverse.io by satyamchaudharydev - Tags: loader */\n.spinner {\n --clr: rgb(0, 113, 128);\n --gap: 6px;\n   /* gap between each circle */\n width: 100px;\n height: 100px;\n display: flex;\n justify-content: center;\n align-items: center;\n gap: var(--gap);\n}\n\n.spinner span {\n width: 20px;\n height: 20px;\n border-radius: 100%;\n background-color: var(--clr);\n opacity: 0;\n}\n\n.spinner span:nth-child(1) {\n animation: fade 1s ease-in-out infinite;\n}\n\n.spinner span:nth-child(2) {\n animation: fade 1s ease-in-out 0.33s infinite;\n}\n\n.spinner span:nth-child(3) {\n animation: fade 1s ease-in-out 0.66s infinite;\n}\n\n@keyframes fade {\n 0%, 100% {\n  opacity: 1;\n }\n\n 60% {\n  opacity: 0;\n }\n}"
  },
  {
    "id": "uiverse-boryanakrasteva_fast-eagle-21",
    "title": "Fast Eagle",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "boryanakrasteva",
      "profileUrl": "https://uiverse.io/boryanakrasteva/fast-eagle-21"
    },
    "license": "MIT",
    "description": "Fast Eagle · loader by boryanakrasteva",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 4000,
    "accentColor": null,
    "html": "<div class=\"loader\">\n  <div class=\"circle\"></div>\n  <div class=\"circle\"></div>\n  <div class=\"circle\"></div>\n  <div class=\"circle\"></div>\n</div>",
    "css": "/* From Uiverse.io by boryanakrasteva - Tags: loader */\n.loader {\n  position: relative;\n}\n\n.circle {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 0px;\n  height: 0px;\n  border-radius: 100%;\n  opacity: 0;\n  animation: pulse_4923 4s infinite linear;\n  border: 0.5px solid #f3f3f3;\n  box-shadow: 0px 0px 5px #eef0e5;\n}\n\n.circle:nth-child(1) {\n  animation-delay: .2s;\n}\n\n.circle:nth-child(2) {\n  animation-delay: .4s;\n}\n\n.circle:nth-child(3) {\n  animation-delay: .8s;\n}\n\n.circle:nth-child(4) {\n  animation-delay: 1s;\n}\n\n@keyframes pulse_4923 {\n  0% {\n    opacity: 0.0;\n    width: 0px;\n    height: 0px;\n    transform: translate(-50%, -50%) scale(1);\n  }\n\n  10% {\n    opacity: 0.5;\n    transform: translate(-50%, -50%) scale(2);\n  }\n\n  100% {\n    opacity: 0.0;\n    width: 100px;\n    height: 100px;\n    transform: translate(-50%, -50%) scale(1);\n  }\n}"
  },
  {
    "id": "uiverse-tilakjain123_shy-yak-36",
    "title": "Shy Yak",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "tilakjain123",
      "profileUrl": "https://uiverse.io/tilakjain123/shy-yak-36"
    },
    "license": "MIT",
    "description": "Shy Yak · loader by tilakjain123",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div class=\"loader\">\n    <div></div>\n\n    <div></div>\n</div>",
    "css": "/* From Uiverse.io by tilakjain123 - Tags: loader */\n.loader {\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n\n.loader div {\n  position: absolute;\n  border: 4px solid #454ade;\n  border-radius: 50%;\n  animation: loader8435 1s ease-out infinite;\n}\n\n.loader div:nth-child(2) {\n  animation-delay: -0.5s;\n}\n\n@keyframes loader8435 {\n  0% {\n    top: 32px;\n    left: 32px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n\n  100% {\n    top: 0;\n    left: 0;\n    width: 64px;\n    height: 64px;\n    opacity: 0;\n  }\n}"
  },
  {
    "id": "uiverse-doniaskima_jolly-fireant-35",
    "title": "Jolly Fireant",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "doniaskima",
      "profileUrl": "https://uiverse.io/doniaskima/jolly-fireant-35"
    },
    "license": "MIT",
    "description": "Jolly Fireant · loader by doniaskima",
    "tags": [
      "loader",
      "simple",
      "neumorphism",
      "success",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div class=\"loader\"></div>",
    "css": "/* From Uiverse.io by doniaskima - Tags: simple, neumorphism, success, loader */\n.loader {\n  display: inline-flex;\n  gap: 10px;\n}\n\n.loader:before,\n.loader:after {\n  content: \"\";\n  height: 20px;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  background: radial-gradient(farthest-side,#000 95%,#0000) 35% 35%/6px 6px no-repeat\n    #fff;\n  transform: scaleX(var(--s,1)) rotate(0deg);\n  animation: l6 1s infinite linear;\n}\n\n.loader:after {\n  --s: -1;\n  animation-delay: -0.1s;\n}\n\n@keyframes l6 {\n  100% {\n    transform: scaleX(var(--s,1)) rotate(360deg);\n  }\n}"
  },
  {
    "id": "uiverse-mrhyddenn_calm-snail-67",
    "title": "Calm Snail",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "mrhyddenn",
      "profileUrl": "https://uiverse.io/mrhyddenn/calm-snail-67"
    },
    "license": "MIT",
    "description": "Calm Snail · loader by mrhyddenn",
    "tags": [
      "loader",
      "spinner",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div class=\"loader\"></div>",
    "css": "/* From Uiverse.io by mrhyddenn - Tags: loader, spinner */\n.loader {\n  width: 50px;\n  height: 50px;\n  display: inline-block;\n  border: 5px solid rgb(255, 17, 0);\n  border-radius: 50%;\n  border-top-color: transparent;\n  border-bottom-color: transparent;\n  animation: rot5 1s infinite;\n}\n\n@keyframes rot5 {\n  0% {\n    transform: rotate(0);\n  }\n\n  50% {\n    transform: rotate(180deg);\n    border-top-color: rgb(139, 46, 46);\n    border-bottom-color: rgb(243, 92, 33);\n    border-right-color: transparent;\n    border-left-color: transparent;\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}"
  },
  {
    "id": "uiverse-shoh2008_cold-walrus-85",
    "title": "Cold Walrus",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "Shoh2008",
      "profileUrl": "https://uiverse.io/Shoh2008/cold-walrus-85"
    },
    "license": "MIT",
    "description": "Cold Walrus · loader by Shoh2008",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 2500,
    "accentColor": null,
    "html": "<div class=\"loader\"></div>",
    "css": "/* From Uiverse.io by Shoh2008 - Tags: loader */\n.loader {\n  position: relative;\n  font-size: 16px;\n  width: 5.5em;\n  height: 5.5em;\n}\n\n.loader:before {\n  content: '';\n  position: absolute;\n  transform: translate(-50%, -50%) rotate(45deg);\n  height: 100%;\n  width: 4px;\n  background: #fff;\n  left: 50%;\n  top: 50%;\n}\n\n.loader:after {\n  content: '';\n  position: absolute;\n  left: 0.2em;\n  bottom: 0.18em;\n  width: 1em;\n  height: 1em;\n  background-color: orange;\n  border-radius: 15%;\n  animation: rollingRock 2.5s cubic-bezier(.79, 0, .47, .97) infinite;\n}\n\n@keyframes rollingRock {\n  0% {\n    transform: translate(0, -1em) rotate(-45deg)\n  }\n\n  5% {\n    transform: translate(0, -1em) rotate(-50deg)\n  }\n\n  20% {\n    transform: translate(1em, -2em) rotate(47deg)\n  }\n\n  25% {\n    transform: translate(1em, -2em) rotate(45deg)\n  }\n\n  30% {\n    transform: translate(1em, -2em) rotate(40deg)\n  }\n\n  45% {\n    transform: translate(2em, -3em) rotate(137deg)\n  }\n\n  50% {\n    transform: translate(2em, -3em) rotate(135deg)\n  }\n\n  55% {\n    transform: translate(2em, -3em) rotate(130deg)\n  }\n\n  70% {\n    transform: translate(3em, -4em) rotate(217deg)\n  }\n\n  75% {\n    transform: translate(3em, -4em) rotate(220deg)\n  }\n\n  100% {\n    transform: translate(0, -1em) rotate(-225deg)\n  }\n}"
  },
  {
    "id": "uiverse-cornerstone-04_neat-dragon-24",
    "title": "Neat Dragon",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "Cornerstone-04",
      "profileUrl": "https://uiverse.io/Cornerstone-04/neat-dragon-24"
    },
    "license": "MIT",
    "description": "Neat Dragon · loader by Cornerstone-04",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 2000,
    "accentColor": null,
    "html": "<div class=\"loader\">\n    <div></div>\n</div>",
    "css": "/* From Uiverse.io by Cornerstone-04 - Tags: loader */\n.loader {\n  width: 50px;\n  height: 50px;\n  border: 7px double;\n  border-color: #43cec7 transparent;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  animation: spin13213 2s linear infinite;\n}\n\n.loader div {\n  width: 50%;\n  height: 50%;\n  background-color: #43cec7;\n  border-radius: 50%;\n}\n\n@keyframes spin13213 {\n  to {\n    transform: rotate(360deg);\n  }\n}"
  },
  {
    "id": "uiverse-satwinder04_afraid-treefrog-79",
    "title": "Afraid Treefrog",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "Satwinder04",
      "profileUrl": "https://uiverse.io/Satwinder04/afraid-treefrog-79"
    },
    "license": "MIT",
    "description": "Afraid Treefrog · loader by Satwinder04",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 2000,
    "accentColor": null,
    "html": "<div class=\"loader\">\n  <div class=\"loader-text\">Loading...</div>\n  <div class=\"loader-bar\"></div>\n</div>",
    "css": "/* From Uiverse.io by Satwinder04 - Tags: loader */\n.loader {\n  /* background-color: blue; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.loader-text {\n  font-size: 24px;\n  color: rgb(0, 0, 0);\n  margin-bottom: 20px;\n  align-self: center;\n}\n\n.loader-bar {\n  width: 30%;\n  height: 10px;\n  border-radius: 5px;\n  background-color: rgb(0, 0, 0);\n  animation: loader-bar-animation 2s ease-in-out infinite;\n}\n\n@keyframes loader-bar-animation {\n  0% {\n    /* transform: translateX(-100%) rotate(270deg); */\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* transform: translateX(100%) rotate(-90deg); */\n    transform: translateX(100%);\n  }\n\n  100% {\n    /* transform: translateX(-100%) rotate(270deg); */\n    transform: translateX(-100%);\n  }\n}"
  },
  {
    "id": "uiverse-guilhermeyohan_fluffy-turtle-93",
    "title": "Fluffy Turtle",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "guilhermeyohan",
      "profileUrl": "https://uiverse.io/guilhermeyohan/fluffy-turtle-93"
    },
    "license": "MIT",
    "description": "Fluffy Turtle · loader by guilhermeyohan",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 2000,
    "accentColor": null,
    "html": "<div class=\"loader\"></div>",
    "css": "/* From Uiverse.io by guilhermeyohan - Tags: loader */\n.loader,\n.loader:before,\n.loader:after {\n  border-radius: 50%;\n}\n\n.loader {\n  color: #ffffff;\n  font-size: 11px;\n  text-indent: -99999em;\n  margin: 55px auto;\n  position: relative;\n  width: 10em;\n  height: 10em;\n  box-shadow: inset 0 0 0 1em;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n}\n\n.loader:before,\n.loader:after {\n  position: absolute;\n  content: '';\n}\n\n.loader:before {\n  width: 5.2em;\n  height: 10.2em;\n  background: #0011ff;\n  border-radius: 10.2em 0 0 10.2em;\n  top: -0.1em;\n  left: -0.1em;\n  -webkit-transform-origin: 5.1em 5.1em;\n  transform-origin: 5.1em 5.1em;\n  -webkit-animation: load2 2s infinite ease 1.5s;\n  animation: load2 2s infinite ease 1.5s;\n}\n\n.loader:after {\n  width: 5.2em;\n  height: 10.2em;\n  background: #0011ff;\n  border-radius: 0 10.2em 10.2em 0;\n  top: -0.1em;\n  left: 4.9em;\n  -webkit-transform-origin: 0.1em 5.1em;\n  transform-origin: 0.1em 5.1em;\n  -webkit-animation: load2 2s infinite ease;\n  animation: load2 2s infinite ease;\n}\n\n@keyframes load2 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}"
  },
  {
    "id": "uiverse-mike11jr_nice-dog-2",
    "title": "Nice Dog",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "Mike11jr",
      "profileUrl": "https://uiverse.io/Mike11jr/nice-dog-2"
    },
    "license": "MIT",
    "description": "Nice Dog · loader by Mike11jr",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 5000,
    "accentColor": null,
    "html": "<div class=\"loader-wrapper\">\n<div class=\"loader\">\n  <div class=\"loader loader-inner\"></div>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by Mike11jr - Tags: loader */\n.loader-wrapper {\n width: 60px;\n height: 60px;\n}\n\n.loader {\n box-sizing: border-box;\n width: 100%;\n height: 100%;\n border: 10px solid #162534;\n border-top-color: #4bc8eb;\n border-bottom-color: #f13a8f;\n border-radius: 50%;\n animation: rotate0925 5s linear infinite;\n}\n\n.loader-inner {\n border-top-color: #36f372;\n border-bottom-color: #fff;\n animation-duration: 2.5s;\n}\n\n@keyframes rotate0925 {\n 0% {\n  transform: scale(1) rotate(360deg);\n }\n\n 50% {\n  transform: scale(.8) rotate(-360deg);\n }\n\n 100% {\n  transform: scale(1) rotate(360deg);\n }\n}"
  },
  {
    "id": "uiverse-satwinder04_tasty-horse-82",
    "title": "Tasty Horse",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "Satwinder04",
      "profileUrl": "https://uiverse.io/Satwinder04/tasty-horse-82"
    },
    "license": "MIT",
    "description": "Tasty Horse · button by Satwinder04",
    "tags": [
      "button",
      "blue",
      "ripple",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<button class=\"animated-button\">hover me</button>",
    "css": "/* From Uiverse.io by Satwinder04 - Tags: blue, button, ripple */\n.animated-button {\n  position: relative;\n  display: inline-block;\n  padding: 16px 28px;\n  font-size: 20px;\n  font-weight: bold;\n  text-transform: uppercase;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  background-color: #1f347b;\n  /* border-radius: 40px; */\n  overflow: hidden;\n  border: none;\n  z-index: 1;\n}\n\n.animated-button:before {\n  transition: 1s;\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  background-color: #fff;\n  border-radius: 50%;\n  opacity: 0;\n  transform: translate(-50%, -50%);\n  z-index: -1;\n}\n\n.animated-button:hover:before {\n  width: 300px;\n  height: 300px;\n  opacity: 0.4;\n  transition: all 0.5s ease-out;\n}\n\n.animated-button:hover {\n  background-color: #fff;\n  color: #202960;\n  transition: all 0.5s ease-out;\n}\n\n.animated-button:hover:after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  background-color: #255ea4;\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -2;\n  animation: pulse 2s infinite;\n}\n\n@keyframes pulse {\n  0% {\n    width: 0;\n    height: 0;\n    opacity: 0.5;\n  }\n\n  100% {\n    width: 200px;\n    height: 200px;\n    opacity: 0;\n  }\n}"
  },
  {
    "id": "uiverse-ercnersoy_swift-bullfrog-99",
    "title": "Swift Bullfrog",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "ercnersoy",
      "profileUrl": "https://uiverse.io/ercnersoy/swift-bullfrog-99"
    },
    "license": "MIT",
    "description": "Swift Bullfrog · button by ercnersoy",
    "tags": [
      "button",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 900,
    "accentColor": null,
    "html": "<button>\n  click me\n</button>",
    "css": "/* From Uiverse.io by ercnersoy - Tags: button */\nbutton {\n  padding: 0.5rem 2.5rem 0.5rem 2.5rem;\n  box-shadow: 0px 0px 0px 3px black;\n  border: 0;\n  border-radius: 0.5rem;\n  font-size: 1rem;\n  background-color: #ffc83d;\n  color: black;\n  font-weight: bolder;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  position: relative;\n  transition: all .9s ease-in-out;\n  letter-spacing: 0.1rem;\n  text-transform: uppercase;\n}\n\nbutton:hover {\n  background-color: #f03a17;\n  color: white;\n}\n\nbutton::before {\n  content: \"😍\";\n  position: absolute;\n  left: -0rem;\n  top: 0rem;\n  opacity: 1;\n  font-size: 1.55rem;\n  transition: all .9s ease-in-out;\n  transform: rotate(0deg);\n}\n\nbutton:hover::before {\n  content: \"😘\";\n  opacity: 1;\n  visibility: visible;\n  transform: rotate(40deg);\n  font-size: 2.5rem;\n  top: -0.75rem;\n  transition: all .9s ease-in-out;\n  animation: rightRun 2s forwards;\n}\n\nbutton:active::before {\n  content: \"🥰\";\n}\n\n@keyframes rightRun {\n  100% {\n    transform: translateX(140px);\n  }\n}"
  },
  {
    "id": "uiverse-misaraadel_dry-cow-55",
    "title": "Dry Cow",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "misaraadel",
      "profileUrl": "https://uiverse.io/misaraadel/dry-cow-55"
    },
    "license": "MIT",
    "description": "Dry Cow · button by misaraadel",
    "tags": [
      "button",
      "creative",
      "3d button",
      "css animation",
      "hover idea",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<button class=\"btn-shape\">\n    <span class=\"title\">\n      hover me\n    </span>\n</button>",
    "css": "/* From Uiverse.io by misaraadel - Tags: button, creative, 3d button, css animation, hover idea */\n.btn-shape {\n  transition: all .3s linear;\n  width: 168px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  outline: none;\n  background-color: #020202;\n  border-radius: 50px;\n  border: 0px;\n  position: relative;\n  z-index: 99;\n  cursor: pointer;\n}\n\n.btn-shape::after,\n.btn-shape::before {\n  content: '';\n  position: absolute;\n  background-color: #020202;\n  width: 100%;\n  opacity: 0;\n  height: 100%;\n  left: 0;\n  border-radius: 100px;\n  bottom: 0;\n  z-index: -2;\n  transition: all .3s linear;\n}\n\n.btn-shape span {\n  font-size: 16px;\n  font-weight: 700;\n  transition: all .3s linear;\n  color: #fff;\n  text-transform: capitalize;\n}\n\n.btn-shape:hover {\n  transform: translate(-12px, -12px);\n}\n\n.btn-shape:hover:after {\n  transform: translate(6px, 6px);\n  opacity: .5;\n}\n\n.btn-shape:hover::before {\n  transform: translate(12px, 12px);\n  opacity: .3;\n}\n\n.btn-shape:hover span {\n  animation: storm .4s linear both;\n}\n\n@keyframes storm {\n  0% {\n    transform: translate3d(0, 0, 0) translateZ(0);\n  }\n\n  25% {\n    transform: translate3d(4px, 0, 0) translateZ(0);\n  }\n\n  50% {\n    transform: translate3d(-3px, 0, 0) translateZ(0);\n  }\n\n  75% {\n    transform: translate3d(2px, 0, 0) translateZ(0);\n  }\n\n  100% {\n    transform: translate3d(0, 0, 0) translateZ(0);\n  }\n}"
  },
  {
    "id": "uiverse-muhammadhasann_calm-quail-31",
    "title": "Calm Quail",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "MuhammadHasann",
      "profileUrl": "https://uiverse.io/MuhammadHasann/calm-quail-31"
    },
    "license": "MIT",
    "description": "Calm Quail · button by MuhammadHasann",
    "tags": [
      "button",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<button>\n  Button\n</button>",
    "css": "/* From Uiverse.io by MuhammadHasann - Tags: button */\nbutton {\n  position: relative;\n  padding: 13px 35px;\n  background: #6d7973;\n  font-size: 17px;\n  font-weight: 900;\n  color: #ffffff;\n  border: 2px solid #6d7973;\n  border-radius: 25px;\n  transition: all .3s ease-in-out;\n}\n\nbutton::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 124px;\n  height: 45px;\n  border: 3px solid #6d7973;\n  border-radius: 25px;\n  transition: all .3s ease-in-out;\n  z-index: 2;\n}\n\nbutton:hover::after {\n  animation: radar_45011 1s ease infinite .3s;\n}\n\n@keyframes radar_45011 {\n  from {\n    opacity: 1;\n    width: 124px;\n    height: 45px;\n    border-radius: 25px;\n  }\n\n  to {\n    opacity: 0;\n    width: 470px;\n    height: 220px;\n    border-radius: 150px;\n  }\n}\n\nbutton:active {\n  transform: scale(.9);\n}"
  },
  {
    "id": "uiverse-martinval9_nervous-owl-11",
    "title": "Nervous Owl",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "martinval9",
      "profileUrl": "https://uiverse.io/martinval9/nervous-owl-11"
    },
    "license": "MIT",
    "description": "Nervous Owl · button by martinval9",
    "tags": [
      "button",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<button class=\"btn\">Button\n</button>",
    "css": "/* From Uiverse.io by martinval9 - Tags: button */\n.btn {\n color: #B500FF;\n padding: 13px 20px;\n border: 2px solid #B500FF;\n font-size: 17px;\n transition: 0.3s;\n border-radius: 10px;\n font-family: Arial;\n font-weight: 600;\n}\n\n.btn:hover {\n transition: 0.3s;\n background-color: #B500FF;\n margin-top: -20px;\n color: #fff;\n animation-name: button_animation;\n animation-duration: 3s;\n animation-iteration-count: infinite;\n}\n\n.btn:active {\n transform: scale(0.97);\n}\n\n@keyframes button_animation {\n 0% {\n  background-color: #B500FF;\n }\n\n 25% {\n  background-color: #000000;\n }\n\n 50% {\n  background-color: #B500FF;\n }\n\n 75% {\n  background-color: #000000;\n }\n\n 100% {\n  background-color: #B500FF;\n }\n}"
  },
  {
    "id": "uiverse-shoh2008_hungry-treefrog-88",
    "title": "Hungry Treefrog",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "Shoh2008",
      "profileUrl": "https://uiverse.io/Shoh2008/hungry-treefrog-88"
    },
    "license": "MIT",
    "description": "Hungry Treefrog · button by Shoh2008",
    "tags": [
      "button",
      "jelly",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<button>\n  Button\n</button>",
    "css": "/* From Uiverse.io by Shoh2008 - Tags: button, jelly */\nbutton {\n  padding: 15px 30px;\n  font-size: 18px;\n  outline: none;\n  border: none;\n  border-radius: 10px;\n  transition: 0.5s;\n  background: #1e1e1e;\n  color: greenyellow;\n  box-shadow: 0 0 10px #363636, inset 0 0 10px #363636;\n}\n\nbutton:hover {\n  animation: a 0.5s 1 linear;\n}\n\n@keyframes a {\n  0% {\n    transform: scale(0.7, 1.3);\n  }\n\n  25% {\n    transform: scale(1.3, 0.7);\n  }\n\n  50% {\n    transform: scale(0.7, 1.3);\n  }\n\n  75% {\n    transform: scale(1.3, 0.7);\n  }\n\n  100% {\n    transform: scale(1, 1);\n  }\n}"
  },
  {
    "id": "uiverse-raspberrybee_warm-mouse-87",
    "title": "Warm Mouse",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "RaspberryBee",
      "profileUrl": "https://uiverse.io/RaspberryBee/warm-mouse-87"
    },
    "license": "MIT",
    "description": "Warm Mouse · button by RaspberryBee",
    "tags": [
      "button",
      "send",
      "rounded",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<button class=\"button\">\n  Send\n</button>",
    "css": "/* From Uiverse.io by RaspberryBee - Tags: send, button, rounded */\n.button {\n  height: 2em;\n  width: 5em;\n  border-radius: 1em;\n  border: 0.1rem solid transparent;\n  background-color: rgb(64, 146, 239);\n  transition: 0.3s;\n  font-size: 1em;\n}\n\n.button:hover {\n  cursor: pointer;\n  transform: scale(1.05) rotate(3deg);\n}\n\n.button:active {\n  animation: borderMove 0.5s forwards;\n  transform: scale(0.9) rotate(-3deg);\n  background-color: rgb(0, 0, 0);\n  color: rgb(64, 146, 239);\n  border: 0.1rem solid rgb(38, 103, 224);\n}\n\n@keyframes borderMove {\n  0% {\n    border-width: 0.1rem;\n    transform: scale(1) rotate(0deg);\n  }\n\n  50% {\n    border-width: 0.4rem;\n    transform: scale(0.9) rotate(-3deg);\n  }\n\n  100% {\n    border-width: 0.15rem;\n    transform: scale(1) rotate(0deg);\n  }\n}"
  },
  {
    "id": "uiverse-ercnersoy_average-warthog-24",
    "title": "Average Warthog",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "ercnersoy",
      "profileUrl": "https://uiverse.io/ercnersoy/average-warthog-24"
    },
    "license": "MIT",
    "description": "Average Warthog · button by ercnersoy",
    "tags": [
      "button",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<button>BUTTON</button>",
    "css": "/* From Uiverse.io by ercnersoy - Tags: button */\nbutton {\n padding: 20px 30px;\n border-radius: 30px;\n border: 5px solid #ffffff;\n background-color: #5584AC;\n font-size: 15px;\n color: white;\n letter-spacing: 5px;\n font-weight: bolder;\n animation: none;\n transition: all .5s ease-in-out;\n font-family: 'Rajdhani', sans-serif;\n}\n\nbutton:hover {\n border-radius: 30px 30px 0px 30px;\n box-shadow: inset 0px 30px 10px -25px black;\n transition: all .5s ease-in-out;\n animation: bounce42 1.6s infinite;\n}\n\n@keyframes bounce42 {\n 0%, 20%, 50%, 80%, 100% {\n  transform: translateY(0);\n }\n\n 40% {\n  transform: translateY(-5px);\n }\n\n 60% {\n  transform: translateY(-5px);\n }\n}"
  },
  {
    "id": "uiverse-pruthvirajmunde_great-cheetah-48",
    "title": "Great Cheetah",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "Pruthvirajmunde",
      "profileUrl": "https://uiverse.io/Pruthvirajmunde/great-cheetah-48"
    },
    "license": "MIT",
    "description": "Great Cheetah · button by Pruthvirajmunde",
    "tags": [
      "button",
      "simple",
      "smooth",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<button class=\"button\">Hire Me</button>",
    "css": "/* From Uiverse.io by Pruthvirajmunde  - Tags: simple, button, smooth */\n.button {\n  position: relative;\n  transition: all 0.3s ease-in-out;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);\n  padding-block: 0.5rem;\n  padding-inline: 1.25rem;\n  background-color: rgb(153, 174, 187);\n  border-radius: 9999px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ffff;\n  gap: 10px;\n  font-weight: bold;\n  border: 3px solid #ffffff4d;\n  outline: none;\n  overflow: hidden;\n  font-size: 15px;\n}\n\n.icon {\n  width: 24px;\n  height: 24px;\n  transition: all 0.3s ease-in-out;\n}\n\n.button:hover {\n  transform: scale(1.05);\n  border-color: #fff9;\n}\n\n.button:hover .icon {\n  transform: translate(4px);\n}\n\n.button:hover::before {\n  animation: shine 1.5s ease-out infinite;\n}\n\n.button::before {\n  content: \"\";\n  position: absolute;\n  width: 100px;\n  height: 100%;\n  background-image: linear-gradient(\n    120deg,\n    rgba(255, 255, 255, 0) 30%,\n    rgba(255, 255, 255, 0.8),\n    rgba(255, 255, 255, 0) 70%\n  );\n  top: 0;\n  left: -100px;\n  opacity: 0.6;\n}\n\n@keyframes shine {\n  0% {\n    left: -100px;\n  }\n\n  60% {\n    left: 100%;\n  }\n\n  to {\n    left: 100%;\n  }\n}"
  },
  {
    "id": "uiverse-vinodjangid07_fluffy-sheep-17",
    "title": "Fluffy Sheep",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "vinodjangid07",
      "profileUrl": "https://uiverse.io/vinodjangid07/fluffy-sheep-17"
    },
    "license": "MIT",
    "description": "Fluffy Sheep · button by vinodjangid07",
    "tags": [
      "button",
      "gradient",
      "hover effect",
      "sign up",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 700,
    "accentColor": null,
    "html": "<button class=\"signupBtn\">\n  SIGN UP\n  <span class=\"arrow\">\n     <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"1em\" viewBox=\"0 0 320 512\" fill=\"rgb(183, 128, 255)\"><path d=\"M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z\"></path></svg>\n  </span>\n</button>",
    "css": "/* From Uiverse.io by vinodjangid07 - Tags: gradient, button, hover effect, sign up */\n.signupBtn {\n  width: 120px;\n  height: 40px;\n  border-radius: 30px;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding-left: 20px;\n  gap: 9px;\n  color: white;\n  background: linear-gradient(to right,rgb(128, 128, 255),rgb(183, 128, 255));\n  position: relative;\n  cursor: pointer;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.212);\n}\n\n.arrow {\n  position: absolute;\n  right: 7.5px;\n  background-color: rgb(255, 255, 255);\n  width: 25px;\n  height: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n}\n\n.signupBtn:hover .arrow {\n  animation: slide-in-left 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n}\n\n@keyframes slide-in-left {\n  0% {\n    transform: translateX(-10px);\n    opacity: 0;\n  }\n\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}"
  },
  {
    "id": "uiverse-akashkobal_blue-octopus-30",
    "title": "Blue Octopus",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "AkashKobal",
      "profileUrl": "https://uiverse.io/AkashKobal/blue-octopus-30"
    },
    "license": "MIT",
    "description": "Blue Octopus · button by AkashKobal",
    "tags": [
      "button",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<button class=\"buttonDownload\">Upload</button>",
    "css": "/* From Uiverse.io by AkashKobal - Tags: button */\n.buttonDownload {\n  display: inline-block;\n  position: relative;\n  padding: 10px 25px;\n  background-color: #4CC713;\n  color: white;\n  font-family: sans-serif;\n  text-decoration: none;\n  font-size: 0.9em;\n  text-align: center;\n  text-indent: 15px;\n  border: none;\n  border-radius: 2em;\n  font-weight: bold;\n}\n\n.buttonDownload:hover {\n  background-color: #1a60a2;\n  color: white;\n}\n\n.buttonDownload:before, .buttonDownload:after {\n  content: ' ';\n  display: block;\n  position: absolute;\n  left: 15px;\n  top: 52%;\n}\n\n.buttonDownload:before {\n  width: 10px;\n  height: 2px;\n  border-style: solid;\n  border-width: 0 2px 2px;\n}\n\n.buttonDownload:after {\n  width: 0;\n  height: 0;\n  margin-left: 3px;\n  margin-top: -7px;\n  border-style: solid;\n  border-width: 4px 4px 0 4px;\n  border-color: transparent;\n  border-top-color: inherit;\n  animation: downloadArrow 1s linear infinite;\n  animation-play-state: paused;\n}\n\n.buttonDownload:hover:before {\n  border-color: #bdd3ef;\n}\n\n.buttonDownload:hover:after {\n  border-top-color: #eff1f7;\n  animation-play-state: running;\n}\n\n@keyframes downloadArrow {\n  0% {\n    margin-top: -7px;\n    opacity: 1;\n  }\n\n  0.001% {\n    margin-top: -15px;\n    opacity: 0.4;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  100% {\n    margin-top: 0;\n    opacity: 0.4;\n  }\n}"
  },
  {
    "id": "uiverse-mi-series_little-frog-95",
    "title": "Little Frog",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "mi-series",
      "profileUrl": "https://uiverse.io/mi-series/little-frog-95"
    },
    "license": "MIT",
    "description": "Little Frog · button by mi-series",
    "tags": [
      "button",
      "simple",
      "material design",
      "flashy",
      "animation",
      "purple",
      "minimalist",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 600,
    "accentColor": null,
    "html": "<div>\n    <button class=\"btn\"><i class=\"animation\"></i>BUTTON<i class=\"animation\"></i>\n    </button>\n</div>",
    "css": "/* From Uiverse.io by mi-series - Tags: simple, material design, flashy, animation, purple, minimalist, button, animated */\n.btn {\n  outline: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #40B3A2;\n  min-width: 200px;\n  border: 0;\n  border-radius: 4px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, .1);\n  box-sizing: border-box;\n  padding: 16px 20px;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 1.2px;\n  text-transform: uppercase;\n  overflow: hidden;\n  cursor: pointer;\n}\n\n.btn:hover {\n  opacity: .95;\n}\n\n.btn .animation {\n  border-radius: 100%;\n  animation: ripple 0.6s linear infinite;\n}\n\n@keyframes ripple {\n  0% {\n    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1), 0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1), 0 0 0 60px rgba(255, 255, 255, 0.1);\n  }\n\n  100% {\n    box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1), 0 0 0 60px rgba(255, 255, 255, 0.1), 0 0 0 80px rgba(255, 255, 255, 0);\n  }\n}"
  },
  {
    "id": "uiverse-satyamchaudharydev_curvy-rat-14",
    "title": "Curvy Rat",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "satyamchaudharydev",
      "profileUrl": "https://uiverse.io/satyamchaudharydev/curvy-rat-14"
    },
    "license": "MIT",
    "description": "Curvy Rat · button by satyamchaudharydev",
    "tags": [
      "button",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<button>\n    Join now\n</button>",
    "css": "/* From Uiverse.io by satyamchaudharydev - Tags: button */\n/* this button is inspired from this -- https://www.newline.co/pricing */\nbutton {\n  --width: 150px;\n  --timing: 2s;\n  border: 0;\n  width: var(--width);\n  padding-block: 1em;\n  color: #fff;\n  font-weight: bold;\n  font-size: 1em;\n  background: rgb(64, 192, 87);\n  transition: all 0.2s;\n  border-radius: 3px;\n}\n\nbutton:hover {\n  background-image: linear-gradient(to right, rgb(250, 82, 82), rgb(250, 82, 82) 16.65%, rgb(190, 75, 219) 16.65%, rgb(190, 75, 219) 33.3%, rgb(76, 110, 245) 33.3%, rgb(76, 110, 245) 49.95%, rgb(64, 192, 87) 49.95%, rgb(64, 192, 87) 66.6%, rgb(250, 176, 5) 66.6%, rgb(250, 176, 5) 83.25%, rgb(253, 126, 20) 83.25%, rgb(253, 126, 20) 100%, rgb(250, 82, 82) 100%);\n  animation: var(--timing) linear dance6123 infinite;\n  transform: scale(1.1) translateY(-1px);\n}\n\n@keyframes dance6123 {\n  to {\n    background-position: var(--width);\n  }\n}"
  },
  {
    "id": "uiverse-praveen-prasad2_jolly-moose-71",
    "title": "Jolly Moose",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "praveen-prasad2",
      "profileUrl": "https://uiverse.io/praveen-prasad2/jolly-moose-71"
    },
    "license": "MIT",
    "description": "Jolly Moose · button by praveen-prasad2",
    "tags": [
      "button",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 750,
    "accentColor": null,
    "html": "<button class=\"button\">\n  <span>Explore </span>\n</button>",
    "css": "/* From Uiverse.io by praveen-prasad2 - Tags: button */\n.button {\n  position: relative;\n  display: inline-block;\n  text-decoration: none;\n  color: #fff;\n  padding: 3px;\n  border-radius: 6px;\n  overflow: hidden;\n}\n\n.button::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 100%;\n  background: linear-gradient(115deg,\n        #4fcf70, #fad648, \n        #a767e5,#12bcfe, \n        #44ce7b);\n  background-size: 50% 100%;\n  border-radius: inherit;\n}\n\n.button:hover::before {\n  animation: animate_border .75s\n        linear infinite;\n}\n\n.button span {\n  position: relative;\n  z-index: 2;\n  display: block;\n  background-color: #000;\n  padding: 13px 20px;\n  border-radius: 3px;\n}\n\n@keyframes animate_border {\n  to {\n    transform: translateX(-50%)\n  }\n}"
  },
  {
    "id": "uiverse-jaydipprajapati1910_giant-mouse-100",
    "title": "Giant Mouse",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "JaydipPrajapati1910",
      "profileUrl": "https://uiverse.io/JaydipPrajapati1910/giant-mouse-100"
    },
    "license": "MIT",
    "description": "Giant Mouse · button by JaydipPrajapati1910",
    "tags": [
      "button",
      "red",
      "hover",
      "play",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<button class=\"button\">\n<svg viewBox=\"0 0 16 16\" fill=\"currentColor\" height=\"18\" width=\"18\" xmlns=\"http://www.w3.org/2000/svg\" class=\"game\"> <path d=\"M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z\"></path> <path d=\"M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z\"></path> </svg>\n  Play Now\n  <div class=\"arrow\">››</div>\n</button>",
    "css": "/* From Uiverse.io by JaydipPrajapati1910 - Tags: red, button, hover, play */\n.button {\n  width: 140px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 10px;\n  padding: 0px 15px;\n  background-color: red;\n  border-radius: 10px;\n  border: none;\n  color: white;\n  position: relative;\n  cursor: pointer;\n  font-weight: 900;\n  transition-duration: .2s;\n}\n\n.game path {\n  color: white;\n}\n\n.button .arrow {\n  position: absolute;\n  right: 0;\n  padding: 0px 5px;\n  width: 30px;\n  height: 100%;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.button:hover,\n.button:focus {\n  background-color: black;\n  transition-duration: .2s;\n}\n\n.button:hover .arrow {\n  animation: slide-right .6s ease-out both;\n}\n/* arrow animation */\n@keyframes slide-right {\n  0% {\n    transform: translateX(-10px);\n    opacity: 0;\n  }\n\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n\n.button:active {\n  transform: translate(1px , 1px);\n  transition-duration: .2s;\n}"
  },
  {
    "id": "uiverse-na3ar-17_sweet-horse-64",
    "title": "Sweet Horse",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "Na3ar-17",
      "profileUrl": "https://uiverse.io/Na3ar-17/sweet-horse-64"
    },
    "license": "MIT",
    "description": "Sweet Horse · button by Na3ar-17",
    "tags": [
      "button",
      "simple",
      "action",
      "hover button",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"container\"><button class=\"button\">Hover me</button></div>",
    "css": "/* From Uiverse.io by Na3ar-17  - Tags: simple, action, button, hover button */\n.container {\n  * {\n    outline: none;\n    border: none;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: Arial, Helvetica, sans-serif;\n  }\n}\n\n.button {\n  width: 140px;\n  height: 32px;\n  border-radius: 0.375rem;\n  cursor: pointer;\n  margin-top: 1rem;\n  background-image: linear-gradient(#268bff, hsl(252, 82%, 57%));\n  transition: all 0.3s ease;\n  color: #fff;\n  font-weight: 600;\n}\n\n.button:hover {\n  -webkit-animation: pulse 2s infinite;\n  animation: pulse512 1.5s infinite;\n  letter-spacing: 2px;\n}\n\n.button:active {\n  transform: translateY(4px);\n}\n\n@keyframes pulse512 {\n  0% {\n    box-shadow: 0 0 0 0 rgba(5, 186, 218, 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 10px rgba(218, 103, 68, 0%);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(218, 103, 68, 0%);\n  }\n}"
  },
  {
    "id": "uiverse-mohsinech_tidy-yak-66",
    "title": "Tidy Yak",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "Mohsinech",
      "profileUrl": "https://uiverse.io/Mohsinech/tidy-yak-66"
    },
    "license": "MIT",
    "description": "Tidy Yak · button by Mohsinech",
    "tags": [
      "button",
      "black",
      "click",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<div class=\"btn\"><span data-text=\"Click me\">Click me</span></div>",
    "css": "/* From Uiverse.io by Mohsinech  - Tags: black, button, click */\n.btn {\n  background: transparent;\n  border: 1px solid #141414;\n  outline: none;\n  padding: 12px 40px;\n  height: 60px;\n  border-radius: 100px;\n  overflow: hidden;\n  transform: scaleX(1);\n  transition: transform 0.5s cubic-bezier(0.4, 0, 0, 1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.btn:hover {\n  animation: animate-scaleX 0.6s cubic-bezier(0.4, 0, 0, 1);\n  background: transparent;\n}\n\n.btn::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  background: black;\n  transition: transform 0.5s cubic-bezier(0.4, 0, 0, 1),\n    border-radius 0.5s cubic-bezier(0.4, 0, 0, 1);\n  width: 100%;\n  height: 100%;\n  border-radius: 50% 50% 0 0;\n  transform: translateY(100%);\n}\n\n.btn:hover::after {\n  transform: translateY(0%);\n  border-radius: 0;\n}\n\n.btn span {\n  font-size: 20px;\n  font-weight: 500;\n  overflow: hidden;\n  position: relative;\n  color: black;\n}\n\n.btn span:after {\n  width: 100%;\n  height: 100%;\n  transition: transform 0.5s cubic-bezier(0.4, 0, 0, 1);\n  content: attr(data-text);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  z-index: 1;\n  transform: translate(-50%, 100%);\n  color: white;\n}\n.btn:hover span:after {\n  transform: translate(-50%, 0);\n}\n\n.btn:focus {\n  outline: none;\n}\n\n@keyframes animate-scaleX {\n  0% {\n    transform: scaleX(1);\n  }\n  50% {\n    transform: scaleX(1.05);\n  }\n  100% {\n    transform: scaleX(1);\n  }\n}"
  },
  {
    "id": "uiverse-wang3616359git_bright-turkey-74",
    "title": "Bright Turkey",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "wang3616359git",
      "profileUrl": "https://uiverse.io/wang3616359git/bright-turkey-74"
    },
    "license": "MIT",
    "description": "Bright Turkey · button by wang3616359git",
    "tags": [
      "button",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<button class=\"bt\" id=\"bt\">\n    <span class=\"msg\" id=\"msg\"></span>\n    SEND\n</button>",
    "css": "/* From Uiverse.io by wang3616359git - Tags: button */\n.bt {\n  border: none;\n  user-select: none;\n  font-size: 18px;\n  color: white;\n  text-align: center;\n  background-color: #0873bd;\n  box-shadow: #cacaca 2px 2px 10px 1px;\n  border-radius: 12px;\n  height: 60px;\n  line-height: 60px;\n  width: 155px;\n  transition: all 0.2s ease;\n  position: relative;\n}\n\n.msg {\n  height: 0;\n  width: 0;\n  border-radius: 2px;\n  position: absolute;\n  left: 15%;\n  top: 25%;\n}\n\n.bt:active {\n  transition: all 0.001s ease;\n  background-color: #5d9fcd;\n  box-shadow: #97989a 0 0 0 0;\n  transform: translateX(1px) translateY(1px);\n}\n\n.bt:hover .msg {\n  animation: msgRun 2s forwards;\n}\n\n@keyframes msgRun {\n  0% {\n    border-top: #d6d6d9 0 solid;\n    border-bottom: #f2f2f5 0 solid;\n    border-left: #f2f2f5 0 solid;\n    border-right: #f2f2f5 0 solid;\n  }\n\n  20% {\n    border-top: #d6d6d9 14px solid;\n    border-bottom: #f2f2f5 14px solid;\n    border-left: #f2f2f5 20px solid;\n    border-right: #f2f2f5 20px solid;\n  }\n\n  25% {\n    border-top: #d6d6d9 12px solid;\n    border-bottom: #f2f2f5 12px solid;\n    border-left: #f2f2f5 18px solid;\n    border-right: #f2f2f5 18px solid;\n  }\n\n  80% {\n    border-top: transparent 12px solid;\n    border-bottom: transparent 12px solid;\n    border-left: transparent 18px solid;\n    border-right: transparent 18px solid;\n  }\n\n  100% {\n    transform: translateX(150px);\n    border-top: transparent 12px solid;\n    border-bottom: transparent 12px solid;\n    border-left: transparent 18px solid;\n    border-right: transparent 18px solid;\n  }\n}"
  },
  {
    "id": "uiverse-peary74_ugly-ape-46",
    "title": "Ugly Ape",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "Peary74",
      "profileUrl": "https://uiverse.io/Peary74/ugly-ape-46"
    },
    "license": "MIT",
    "description": "Ugly Ape · button by Peary74",
    "tags": [
      "button",
      "hover",
      "active",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<button class=\"btn\">\n <svg class=\"icon\" width=\"30\" height=\"30\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z\"></path></svg>\n</button>",
    "css": "/* From Uiverse.io by Peary74 - Tags: button, hover, active */\n.btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  border: none;\n  background-color: transparent;\n  position: relative;\n}\n\n.btn:hover > .icon {\n  transform: scale(1.2);\n  cursor: pointer;\n  transition: .2s linear;\n}\n\n.btn:focus > .icon {\n  fill: #fd1853;\n  animation: grosseur .2s linear;\n}\n\n@keyframes grosseur {\n  0% {\n    width: 50px;\n    height: 50px;\n    fill: #fd1853;\n  }\n\n  100% {\n    width: 30px;\n    height: 30px;\n    fill: #fd1853;\n  }\n}"
  },
  {
    "id": "uiverse-boryanakrasteva_massive-jellyfish-28",
    "title": "Massive Jellyfish",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "boryanakrasteva",
      "profileUrl": "https://uiverse.io/boryanakrasteva/massive-jellyfish-28"
    },
    "license": "MIT",
    "description": "Massive Jellyfish · button by boryanakrasteva",
    "tags": [
      "button",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 6000,
    "accentColor": null,
    "html": "<div class=\"btn-wrapper\">\n  <button class=\"btn\"> button </button>\n</div>",
    "css": "/* From Uiverse.io by boryanakrasteva - Tags: button */\n.btn-wrapper {\n  width: 120px;\n  height: 50px;\n  position: relative;\n  z-index: 1;\n  background: linear-gradient(270deg, #96f061, #a259d3, #1d9de0, #e790b0);\n  box-shadow: 2px 2px 10px rgba(255, 255, 255, 0.363);\n  background-size: 800% 800%;\n  animation: animateBorder 9s ease infinite;\n}\n\n.btn {\n  width: 95%;\n  height: 90%;\n  position: absolute;\n  padding: 5px;\n  border: none;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #212121;\n  z-index: 2;\n  text-transform: uppercase;\n  letter-spacing: 4.5px;\n  color: white;\n  font-weight: bold;\n}\n\n@keyframes animateBorder {\n  0% {\n    background-position: 0% 50%\n  }\n\n  50% {\n    background-position: 100% 50%\n  }\n\n  100% {\n    background-position: 0% 50%\n  }\n}"
  },
  {
    "id": "uiverse-satyamchaudharydev_rude-wolverine-24",
    "title": "Rude Wolverine",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "satyamchaudharydev",
      "profileUrl": "https://uiverse.io/satyamchaudharydev/rude-wolverine-24"
    },
    "license": "MIT",
    "description": "Rude Wolverine · button by satyamchaudharydev",
    "tags": [
      "button",
      "simple",
      "animation",
      "text animation",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<button class=\"button\">\n  Apply Now\n  <svg fill=\"currentColor\" viewBox=\"0 0 24 24\" class=\"icon\">\n    <path clip-rule=\"evenodd\" d=\"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z\" fill-rule=\"evenodd\"></path>\n  </svg>\n</button>",
    "css": "/* From Uiverse.io by satyamchaudharydev - Tags: simple, animation, button, text animation */\n.button {\n  position: relative;\n  transition: all 0.3s ease-in-out;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);\n  padding-block: 0.5rem;\n  padding-inline: 1.25rem;\n  background-color: rgb(0 107 179);\n  border-radius: 9999px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ffff;\n  gap: 10px;\n  font-weight: bold;\n  border: 3px solid #ffffff4d;\n  outline: none;\n  overflow: hidden;\n  font-size: 15px;\n}\n\n.icon {\n  width: 24px;\n  height: 24px;\n  transition: all 0.3s ease-in-out;\n}\n\n.button:hover {\n  transform: scale(1.05);\n  border-color: #fff9;\n}\n\n.button:hover .icon {\n  transform: translate(4px);\n}\n\n.button:hover::before {\n  animation: shine 1.5s ease-out infinite;\n}\n\n.button::before {\n  content: \"\";\n  position: absolute;\n  width: 100px;\n  height: 100%;\n  background-image: linear-gradient(\n    120deg,\n    rgba(255, 255, 255, 0) 30%,\n    rgba(255, 255, 255, 0.8),\n    rgba(255, 255, 255, 0) 70%\n  );\n  top: 0;\n  left: -100px;\n  opacity: 0.6;\n}\n\n@keyframes shine {\n  0% {\n    left: -100px;\n  }\n\n  60% {\n    left: 100%;\n  }\n\n  to {\n    left: 100%;\n  }\n}"
  },
  {
    "id": "uiverse-arturcodecraft_afraid-fish-22",
    "title": "Afraid Fish",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "ArturCodeCraft",
      "profileUrl": "https://uiverse.io/ArturCodeCraft/afraid-fish-22"
    },
    "license": "MIT",
    "description": "Afraid Fish · button by ArturCodeCraft",
    "tags": [
      "button",
      "scroll",
      "scroll to bottom",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 3000,
    "accentColor": null,
    "html": "<div class=\"main__action\">\n  <a class=\"main__scroll\" href=\"#\">\n    <div class=\"main__scroll-box\">\n      <svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n  \t    <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n  \t    <path d=\"M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z\" fill=\"rgba(28,28,30,1)\">\n  \t    </path>\n\t  </svg>\n    </div>\n\n    <span class=\"main__scroll-text\">Scroll</span>\n  </a>\n</div>",
    "css": "/* From Uiverse.io by ArturCodeCraft - Tags: button, scroll, scroll to bottom */\n/* <reset-style> ============================ */\na {\n  text-decoration: none;\n}\n/* <main-style> ============================ */\n.main__scroll-text {\n  color: rgba(28,28,30,1);\n}\n\n.main__action:hover .main__scroll-box {\n  animation: scroll-down 3s infinite;\n}\n\n/* Animate scroll icon */\n@keyframes scroll-down {\n  0%, 100% {\n    transform: translateY(0rem);\n    opacity: 1;\n  }\n\n  35% {\n    transform: translateY(1rem);\n    opacity: 0;\n  }\n\n  70% {\n    transform: translateY(-1rem);\n    opacity: 0;\n  }\n}"
  },
  {
    "id": "uiverse-john-cfo_calm-kangaroo-15",
    "title": "Calm Kangaroo",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "John-CFO",
      "profileUrl": "https://uiverse.io/John-CFO/calm-kangaroo-15"
    },
    "license": "MIT",
    "description": "Calm Kangaroo · button by John-CFO",
    "tags": [
      "button",
      "simple",
      "hover",
      "hover effect",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<button class=\"BTN-style\">\n  <span class=\"BTN-text\">Hover me</span>\n</button>",
    "css": "/* From Uiverse.io by John-CFO  - Tags: simple, button, hover, hover effect */\n.BTN-style {\n  position: relative;\n  width: 12em;\n  height: 3.8em;\n  border-width: 2px;\n  border-radius: 6px;\n  border-color: #ffff;\n  display: block;\n  padding: 8px;\n  background: linear-gradient(to left, #c0c0c0, #dcdcdc);\n  color: #ffffff;\n  line-height: 1.25rem;\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n}\n\n.BTN-text {\n  font-weight: 500;\n  font-size: 0.975rem;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);\n  text-transform: uppercase;\n}\n\n.BTN-style:hover {\n  -webkit-transition: all 0.2s ease-out;\n  -moz-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n\n  cursor: pointer;\n}\n\n.BTN-style:hover::before {\n  -webkit-animation: sh02 0.5s 0s linear;\n  -moz-animation: sh02 0.5s 0s linear;\n  animation: sh02 0.5s 0s linear;\n}\n\n.BTN-style::before {\n  content: \"\";\n  display: block;\n  width: 0px;\n  height: 85%;\n  position: absolute;\n  top: 50%;\n  left: 0%;\n  opacity: 0;\n  background: #fff;\n  box-shadow: 0 0 50px 30px #fff;\n  -webkit-transform: skewX(-20deg);\n  -moz-transform: skewX(-20deg);\n  -ms-transform: skewX(-20deg);\n  -o-transform: skewX(-20deg);\n  transform: skewX(-20deg);\n}\n\n@keyframes sh02 {\n  from {\n    opacity: 0;\n    left: 0%;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    left: 100%;\n  }\n}"
  },
  {
    "id": "uiverse-niat786_perfect-warthog-57",
    "title": "Perfect Warthog",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "niat786",
      "profileUrl": "https://uiverse.io/niat786/perfect-warthog-57"
    },
    "license": "MIT",
    "description": "Perfect Warthog · button by niat786",
    "tags": [
      "button",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 2000,
    "accentColor": null,
    "html": "<button> Button\n</button>",
    "css": "/* From Uiverse.io by niat786 - Tags: button */\nbutton {\n border: none;\n color: #fff;\n background-image: linear-gradient(30deg, #0400ff, #4ce3f7);\n border-radius: 20px;\n background-size: 100% auto;\n font-family: inherit;\n font-size: 17px;\n padding: 0.6em 1.5em;\n}\n\nbutton:hover {\n background-position: right center;\n background-size: 200% auto;\n -webkit-animation: pulse 2s infinite;\n animation: pulse512 1.5s infinite;\n}\n\n@keyframes pulse512 {\n 0% {\n  box-shadow: 0 0 0 0 #05bada66;\n }\n\n 70% {\n  box-shadow: 0 0 0 10px rgb(218 103 68 / 0%);\n }\n\n 100% {\n  box-shadow: 0 0 0 0 rgb(218 103 68 / 0%);\n }\n}"
  },
  {
    "id": "uiverse-jhavelang_hard-penguin-52",
    "title": "Hard Penguin",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "JhaveLang",
      "profileUrl": "https://uiverse.io/JhaveLang/hard-penguin-52"
    },
    "license": "MIT",
    "description": "Hard Penguin · button by JhaveLang",
    "tags": [
      "button",
      "simple",
      "animation",
      "simple button",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<button class=\"button\">Enter</button>",
    "css": "/* From Uiverse.io by JhaveLang  - Tags: simple, animation, simple button */\n.button {\n  font-weight: 600;\n  padding: 1em 4em 1em 4em;\n  border-radius: 4em;\n  border: 0;\n  background: rgb(251, 213, 213);\n  background: linear-gradient(\n    115deg,\n    rgba(251, 213, 213, 1) 20%,\n    rgba(248, 180, 180, 1) 41%,\n    rgba(252, 233, 106, 1) 100%\n  );\n  cursor: pointer;\n  box-shadow: 0em 0em 0em 0.3em rgb(251, 213, 213);\n  transition: background 0.3s ease;\n}\n.button:hover {\n  background: rgb(252, 233, 106);\n  background: linear-gradient(\n    115deg,\n    rgba(252, 233, 106, 1) 0%,\n    rgba(251, 213, 213, 1) 37%,\n    rgba(248, 180, 180, 1) 100%\n  );\n}\n.button:hover {\n  background: rgb(252, 233, 106);\n  background: linear-gradient(\n    115deg,\n    rgba(252, 233, 106, 1) 0%,\n    rgba(251, 213, 213, 1) 37%,\n    rgba(248, 180, 180, 1) 100%\n  );\n}\n\n@keyframes bounce {\n  0%,\n  20%,\n  50%,\n  80%,\n  100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-10px);\n  }\n  60% {\n    transform: translateY(-5px);\n  }\n}"
  },
  {
    "id": "uiverse-selfmadesystem_strange-cobra-12",
    "title": "Strange Cobra",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "SelfMadeSystem",
      "profileUrl": "https://uiverse.io/SelfMadeSystem/strange-cobra-12"
    },
    "license": "MIT",
    "description": "Strange Cobra · button by SelfMadeSystem",
    "tags": [
      "button",
      "animation",
      "animated",
      "rainbow",
      "codepen"
    ],
    "previewType": "css",
    "durationMs": 750,
    "accentColor": null,
    "html": "<a class=\"codepen-button\"><span>Start Coding</span></a>",
    "css": "/* From Uiverse.io by SelfMadeSystem - Tags: animation, button, animated, rainbow, codepen */\n/* Yoinked from CodePen, but improved the animation\nso that it is smooth among other more minor things */\n\n.codepen-button {\n  display: block;\n  cursor: pointer;\n  color: white;\n  margin: 0 auto;\n  position: relative;\n  text-decoration: none;\n  font-weight: 600;\n  border-radius: 6px;\n  overflow: hidden;\n  padding: 3px;\n  isolation: isolate;\n}\n\n.codepen-button::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 400%;\n  height: 100%;\n  background: linear-gradient(115deg,#4fcf70,#fad648,#a767e5,#12bcfe,#44ce7b);\n  background-size: 25% 100%;\n  animation: an-at-keyframe-css-at-rule-that-translates-via-the-transform-property-the-background-by-negative-25-percent-of-its-width-so-that-it-gives-a-nice-border-animation_-We-use-the-translate-property-to-have-a-nice-transition-so-it_s-not-a-jerk-of-a-start-or-stop .75s linear infinite;\n  animation-play-state: paused;\n  translate: -5% 0%;\n  transition: translate 0.25s ease-out;\n}\n\n.codepen-button:hover::before {\n  animation-play-state: running;\n  transition-duration: 0.75s;\n  translate: 0% 0%;\n}\n\n@keyframes an-at-keyframe-css-at-rule-that-translates-via-the-transform-property-the-background-by-negative-25-percent-of-its-width-so-that-it-gives-a-nice-border-animation_-We-use-the-translate-property-to-have-a-nice-transition-so-it_s-not-a-jerk-of-a-start-or-stop {\n  to {\n    transform: translateX(-25%);\n  }\n}\n\n.codepen-button span {\n  position: relative;\n  display: block;\n  padding: 1rem 1.5rem;\n  font-size: 1.1rem;\n  background: #000;\n  border-radius: 3px;\n  height: 100%;\n}"
  },
  {
    "id": "uiverse-nguyenhainam24082000_nervous-insect-23",
    "title": "Nervous Insect",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "NguyenHaiNam24082000",
      "profileUrl": "https://uiverse.io/NguyenHaiNam24082000/nervous-insect-23"
    },
    "license": "MIT",
    "description": "Nervous Insect · button by NguyenHaiNam24082000",
    "tags": [
      "button",
      "skeuomorphism",
      "emergency",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<div class=\"background-button\">\n  <button class=\"button\">\n    EMERGENCY\n  </button>\n</div>",
    "css": "/* From Uiverse.io by NguyenHaiNam24082000 - Tags: skeuomorphism, button, emergency */\n.background-button {\n  background: repeating-linear-gradient(\n    45deg,\n    #3c2209 0 20px,\n    #ff9c00 20px 40px\n  );\n  width: 10em;\n  height: 10em;\n  -webkit-box-shadow: 15px 15px 50px 5px #5f5f5f;\n  box-shadow: 15px 15px 50px 5px #5f5f5f;\n  position: relative;\n  display: inline-block;\n  outline: 2px solid black;\n}\n\n.background-button::before {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  top: 15%;\n  left: 15%;\n  width: 70%;\n  height: 70%;\n  background: #a0b8c4;\n  border: 2px solid #3c2209;\n}\n\n.button {\n  background: #cc2a1f;\n  width: 65%;\n  height: 65%;\n  border-radius: 50%;\n  position: absolute;\n  top: 7.5%;\n  left: 18.25%;\n  color: white;\n  font-size: 1em;\n  font-weight: 900;\n  font-family: 'Courier New', Courier, monospace;\n  -webkit-box-shadow: 0 15px 0 0 #842a2a;\n  box-shadow: 0 15px 0 0 #842a2a;\n  -webkit-transition: all .5s ease;\n  transition: all .5s ease;\n  border: 2px solid black;\n}\n\n.button:active {\n  -webkit-box-shadow: 0 1px 1px 1px #8C0606;\n  box-shadow: 0 1px 1px 1px #8C0606;\n  top: 15%;\n}\n\n.background-button:has(.button:active) + .emergency {\n  display: block;\n  -webkit-transform: rotate(0deg) scaleY(1);\n  -ms-transform: rotate(0deg) scaleY(1);\n  transform: rotate(0deg) scaleY(1);\n  -webkit-animation: anims 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);\n  animation: anims 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n\n@keyframes anims {\n  0% {\n    -webkit-transform: rotate(-30deg) scaleY(0.25);\n    transform: rotate(-30deg) scaleY(0.25);\n  }\n\n  100% {\n    -webkit-transform: rotate(0deg) scaleY(1);\n    transform: rotate(0deg) scaleY(1);\n  }\n}\n\n.emergency {\n  position: absolute;\n  display: none;\n}"
  },
  {
    "id": "uiverse-3bdel3ziz-t_dangerous-newt-76",
    "title": "Dangerous Newt",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "3bdel3ziz-T",
      "profileUrl": "https://uiverse.io/3bdel3ziz-T/dangerous-newt-76"
    },
    "license": "MIT",
    "description": "Dangerous Newt · button by 3bdel3ziz-T",
    "tags": [
      "button",
      "icon",
      "animation",
      "notification",
      "rotate",
      "light&dark",
      "hover effect",
      "hover button"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"notification\">\n  <div class=\"bell-container\">\n    <div class=\"bell\"></div>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by 3bdel3ziz-T  - Tags: icon, animation, notification, button, rotate, light&dark, hover effect, hover button */\n/*making bell shape with one div */\n.bell {\n  border: 2.17px solid white;\n  border-radius: 10px 10px 0 0;\n  width: 15px;\n  height: 17px;\n  background: transparent;\n  display: block;\n  position: relative;\n  top: -3px;\n}\n.bell::before,\n.bell::after {\n  content: \"\";\n  background: white;\n  display: block;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  height: 2.17px;\n}\n.bell::before {\n  top: 100%;\n  width: 20px;\n}\n.bell::after {\n  top: calc(100% + 4px);\n  width: 7px;\n}\n/*container main styling*/\n.notification {\n  background: transparent;\n  border: none;\n  padding: 15px 15px;\n  border-radius: 50px;\n  cursor: pointer;\n  transition: 300ms;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*notifications number with before*/\n.notification::before {\n  content: \"1\";\n  color: white;\n  font-size: 10px;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: red;\n  position: absolute;\n  right: 8px;\n  top: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n/*container background hover effect*/\n.notification:hover {\n  background: rgba(170, 170, 170, 0.062);\n}\n/*container animations*/\n.notification:hover > .bell-container {\n  animation: bell-animation 650ms ease-out 0s 1 normal both;\n}\n/*bell ring and scale animation*/\n@keyframes bell-animation {\n  20% {\n    transform: rotate(15deg);\n  }\n\n  40% {\n    transform: rotate(-15deg);\n    scale: 1.1;\n  }\n  60% {\n    transform: rotate(10deg);\n    scale: 1.1;\n  }\n  80% {\n    transform: rotate(-10deg);\n  }\n  0%,\n  100% {\n    transform: rotate(0deg);\n  }\n}"
  },
  {
    "id": "uiverse-deepanshukant_dry-rattlesnake-75",
    "title": "Dry Rattlesnake",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "DeepanshuKant",
      "profileUrl": "https://uiverse.io/DeepanshuKant/dry-rattlesnake-75"
    },
    "license": "MIT",
    "description": "Dry Rattlesnake · button by DeepanshuKant",
    "tags": [
      "button",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<button class=\"btn\">\n   Button\n</button>",
    "css": "/* From Uiverse.io by DeepanshuKant - Tags: button */\n.btn {\n  position: relative;\n  padding: 1rem 2.5rem;\n  color: #ffd739;\n  font-size: 1em;\n  background-color: #27045b;\n  outline: none;\n  border: none;\n  font-weight: bold;\n  border-radius: 5px;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  transition-property: all;\n  transition-duration: 0.3s;\n  cursor: pointer;\n}\n\n.btn:hover {\n  background-color: #6807f9;\n  box-shadow: 0px 14px 56px -11px #6807f9;\n}\n\n.btn::before {\n  content: \"\";\n  position: absolute;\n  height: 5px;\n  width: 5px;\n  background-color: white;\n  border-radius: 100px;\n  right: 2rem;\n  bottom: 37%;\n  animation: 0.5s both ease-in-out infinite;\n}\n\n.btn:hover::before {\n  animation-name: bounce_591;\n  transition: all 0.3s ease;\n}\n\n@keyframes bounce_591 {\n  0% {\n    bottom: 37%;\n  }\n\n  50% {\n    bottom: 70%;\n  }\n\n  100% {\n    bottom: 37%;\n  }\n}"
  },
  {
    "id": "uiverse-simontheonlyone_warm-duck-56",
    "title": "Warm Duck",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "simontheonlyone - Source: no source link just the close button of Microsoft Windows",
      "profileUrl": "https://uiverse.io/simontheonlyone - Source: no source link just the close button of Microsoft Windows/warm-duck-56"
    },
    "license": "MIT",
    "description": "Warm Duck · button by simontheonlyone - Source: no source link just the close button of Microsoft Windows",
    "tags": [
      "button",
      "animated",
      "click animation",
      "close",
      "minimal"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<button class=\"button\">\n  <span class=\"X\"></span>\n  <span class=\"Y\"></span>\n  <div class=\"close\">Close</div>\n</button>",
    "css": "/* From Uiverse.io by simontheonlyone - Source: no source link just the close button of Microsoft Windows - Tags: button, animated, click animation, close, minimal */\n.button {\n  position: relative;\n  width: 6em;\n  height: 4em;\n  border: none;\n  background: none;\n}\n\n.X {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 33%;\n  width: 2em;\n  height: 1.5px;\n  background-color: #fff;\n  transform: rotate(45deg);\n}\n\n.Y {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 33%;\n  width: 2em;\n  height: 1.5px;\n  background-color: #fff;\n  transform: rotate(-45deg);\n}\n\n.close {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  bottom: -40%;\n  left: 70%;\n  width: 3em;\n  height: 1.7em;\n  font-size: 16px;\n  background-color: rgb(254, 255, 225);\n  color: #000;\n  border: 1px solid #000;\n  pointer-events: none;\n  opacity: 0;\n}\n\n.button:hover {\n  background-color: rgb(210, 0, 0);\n}\n\n.button:active {\n  background-color: rgb(130, 0, 0);\n}\n\n.button:hover > .close {\n  animation: close 0.2s forwards 1.25s;\n}\n\n@keyframes close {\n  100% {\n    opacity: 1;\n  }\n}"
  },
  {
    "id": "uiverse-kareemtolan_tasty-snail-21",
    "title": "Tasty Snail",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "KareemTolan",
      "profileUrl": "https://uiverse.io/KareemTolan/tasty-snail-21"
    },
    "license": "MIT",
    "description": "Tasty Snail · toggle by KareemTolan",
    "tags": [
      "toggle",
      "switch",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<label class=\"toggle-switch\">\n  <input type=\"checkbox\">\n  <span class=\"toggle-switch__slider\"></span>\n</label>",
    "css": "/* From Uiverse.io by KareemTolan - Tags: switch */\n/* Toggle switch styles */\n.toggle-switch {\n  display: inline-block;\n  position: relative;\n  width: 60px;\n  height: 34px;\n}\n\n.toggle-switch input {\n  display: none;\n}\n\n.toggle-switch__slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  border-radius: 34px;\n  transition: background-color 0.2s ease-in-out;\n}\n\n.toggle-switch__slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: #fff;\n  border-radius: 50%;\n  transition: transform 0.2s ease-in-out;\n}\n\n.toggle-switch input:checked + .toggle-switch__slider {\n  background-color: #2196f3;\n  /* Neon effect */\n  box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #2196f3, 0 0 40px #2196f3, 0 0 50px #2196f3, 0 0 60px #2196f3, 0 0 70px #2196f3;\n}\n\n.toggle-switch input:checked + .toggle-switch__slider:before {\n  transform: translateX(26px);\n}\n\n/* Shake animation */\n.toggle-switch input:checked + .toggle-switch__slider:before:hover {\n  animation: shake 0.5s ease-in-out;\n}\n\n@keyframes shake {\n  0% {\n    transform: translateX(0);\n  }\n\n  25% {\n    transform: translateX(-5px);\n  }\n\n  50% {\n    transform: translateX(5px);\n  }\n\n  75% {\n    transform: translateX(-5px);\n  }\n\n  100% {\n    transform: translateX(0);\n  }\n}\n\n/* Accessibility styles */\n.toggle-switch input:focus + .toggle-switch__slider {\n  box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.5);\n}\n\n.toggle-switch input:focus:not(:checked) + .toggle-switch__slider:before,\n.toggle-switch input:focus:checked + .toggle-switch__slider:before {\n  box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.5);\n}\n\n.toggle-switch input:not(:checked):disabled + .toggle-switch__slider,\n.toggle-switch input:checked:disabled + .toggle-switch__slider {\n  opacity: 0.5;\n  cursor: not-allowed;\n}"
  },
  {
    "id": "uiverse-troyrandall_curvy-eagle-61",
    "title": "Curvy Eagle",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "TroyRandall",
      "profileUrl": "https://uiverse.io/TroyRandall/curvy-eagle-61"
    },
    "license": "MIT",
    "description": "Curvy Eagle · toggle by TroyRandall",
    "tags": [
      "toggle",
      "icon",
      "button",
      "switch",
      "like",
      "heart",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 600,
    "accentColor": null,
    "html": "<div class=\"comment-react\">\n  <button>\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"22\"\n      height=\"22\"\n      viewBox=\"0 0 24 24\"\n      fill=\"none\"\n    >\n      <path\n        d=\"M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z\"\n        stroke=\"#707277\"\n        stroke-width=\"2\"\n        stroke-linecap=\"round\"\n        fill=\"#707277\"\n      ></path>\n    </svg>\n  </button>\n\n  <span>14</span>\n</div>",
    "css": "/* From Uiverse.io by TroyRandall  - Tags: icon, button, switch, like, heart */\n/* The switch - the box around the slider */\n.comment-react {\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  padding: 5px;\n  background-color: #f1f1f1;\n  border-radius: 5px;\n  scale: 1.5;\n  width: 100px;\n}\n\n.comment-react button {\n  width: 35px;\n  height: 35px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  border: 0;\n  outline: none;\n}\n\n.comment-react button:after {\n  content: \"\";\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  left: -3px;\n  top: -3px;\n  background-color: #f5356e;\n  border-radius: 50%;\n  z-index: 0;\n  transform: scale(0);\n}\n\n.comment-react button svg {\n  position: relative;\n  z-index: 9;\n}\n\n.comment-react button:hover:after {\n  animation: ripple 0.6s ease-in-out forwards;\n}\n\n.comment-react button:hover svg {\n  fill: #f5356e;\n}\n\n.comment-react button:hover svg path {\n  stroke: #f5356e;\n  fill: #f5356e;\n}\n\n.comment-react hr {\n  width: 80%;\n  height: 1px;\n  background-color: #dfe1e6;\n  margin: auto;\n  border: 0;\n}\n\n.comment-react span {\n  height: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: auto;\n  font-size: 20px;\n  font-weight: 600;\n  color: #707277;\n  padding-right: 10px;\n  text-align: center;\n}\n\n@keyframes ripple {\n  0% {\n    transform: scale(0);\n    opacity: 0.6;\n  }\n\n  100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}"
  },
  {
    "id": "uiverse-simontheonlyone_bad-mole-99",
    "title": "Bad Mole",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "simontheonlyone  - Website: https://www.apple.com - Name: Apple",
      "profileUrl": "https://uiverse.io/simontheonlyone  - Website: https://www.apple.com - Name: Apple/bad-mole-99"
    },
    "license": "MIT",
    "description": "Bad Mole · toggle by simontheonlyone  - Website: https://www.apple.com - Name: Apple",
    "tags": [
      "toggle",
      "apple",
      "minimalist",
      "switch",
      "dark",
      "light&dark",
      "battery",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1600,
    "accentColor": null,
    "html": "<label class=\"switch\">\n  <input type=\"checkbox\" />\n  <span class=\"slider\"></span>\n  <div class=\"battery\"></div>\n</label>",
    "css": "/* From Uiverse.io by simontheonlyone  - Website: https://www.apple.com - Name: Apple - Tags: apple, minimalist, switch, dark, light&dark, battery */\n.switch {\n  font-size: 17px;\n  position: relative;\n  display: inline-block;\n  width: 6em;\n  height: 6em;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  inset: 0;\n  background-color: #333;\n  border-radius: 30px;\n}\n\n.slider:before {\n  height: 0.8em;\n  width: 1.1em;\n  inset: 44px 28px;\n  background: #eee;\n  border-radius: 4px;\n}\n\n.battery {\n  height: 1.4em;\n  width: 2.9em;\n  inset: 39px 23px;\n  border: 2px solid #eee;\n  border-radius: 8px;\n}\n\n.battery:before {\n  height: 0.4em;\n  width: 0.1em;\n  inset: 0.4em 50px;\n  border: none;\n  border-radius: 0% 100% 100% 0% / 0% 50% 50% 0%;\n  background: #eee;\n}\n\n.switch input:checked + .slider {\n  background-color: #eee;\n  box-shadow: 0 0 1px #eee;\n}\n\n.switch input:checked ~ .battery {\n  border: 2px solid #111;\n}\n\n.switch input:checked ~ .battery:before {\n  background: #111;\n}\n\n.switch input:checked + .slider:before {\n  background: rgb(255, 176, 85);\n  animation: lowbattery 1.6s linear;\n}\n\n@keyframes lowbattery {\n  0% {\n    width: 1.1em;\n  }\n  40% {\n    width: 2.3em;\n  }\n  70% {\n    width: 2.3em;\n  }\n  100% {\n    width: 1.1em;\n  }\n}\n\n.slider,\n.battery,\n.slider:before,\n.battery:before {\n  position: absolute;\n  content: \"\";\n  transition: 0.5s;\n}"
  },
  {
    "id": "uiverse-coding-masala_slimy-cow-34",
    "title": "Slimy Cow",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "coding-masala",
      "profileUrl": "https://uiverse.io/coding-masala/slimy-cow-34"
    },
    "license": "MIT",
    "description": "Slimy Cow · toggle by coding-masala",
    "tags": [
      "toggle",
      "switch",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"toggle-switcher\">\n  <input type=\"checkbox\" id=\"toggle-switch\" class=\"toggle-input\">\n  <label for=\"toggle-switch\" class=\"toggle-label\"></label>\n</div>",
    "css": "/* From Uiverse.io by coding-masala - Tags: switch */\n.toggle-switcher {\n  width: 50px;\n  height: 25px;\n  position: relative;\n  margin: 20px auto;\n  background: #000;\n  border-radius: 50px;\n}\n\n.toggle-input {\n  display: none;\n}\n\n.toggle-label {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 50px;\n  cursor: pointer;\n  box-shadow: 0 0 0 0 #ff0000;\n}\n\n.toggle-label::before {\n  content: \"\";\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: #ffffff;\n  border-radius: 50%;\n  transition: all 0.3s ease;\n}\n\n.toggle-input:checked + .toggle-label {\n  animation: shadow-animation_5020 10s linear infinite;\n}\n\n.toggle-input:checked + .toggle-label::before {\n  transform: translateX(25px);\n}\n\n@keyframes shadow-animation_5020 {\n  0% {\n    box-shadow: 0 0 0 0 #ff0000;\n  }\n\n  50% {\n    box-shadow: 0 0 25px 25px #ffa500;\n  }\n\n  100% {\n    box-shadow: 0 0 0 0 #ff0000;\n  }\n}"
  },
  {
    "id": "uiverse-vinodjangid07_breezy-goose-71",
    "title": "Breezy Goose",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "vinodjangid07",
      "profileUrl": "https://uiverse.io/vinodjangid07/breezy-goose-71"
    },
    "license": "MIT",
    "description": "Breezy Goose · toggle by vinodjangid07",
    "tags": [
      "toggle",
      "animation",
      "switch",
      "click",
      "save",
      "pin",
      "bookmark",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<label for=\"checkboxInput\" class=\"bookmark\">\n  <input type=\"checkbox\" id=\"checkboxInput\" />\n  <svg\n    width=\"15\"\n    viewBox=\"0 0 50 70\"\n    fill=\"none\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    class=\"svgIcon\"\n  >\n    <path\n      d=\"M46 62.0085L46 3.88139L3.99609 3.88139L3.99609 62.0085L24.5 45.5L46 62.0085Z\"\n      stroke=\"black\"\n      stroke-width=\"7\"\n    ></path>\n  </svg>\n</label>",
    "css": "/* From Uiverse.io by vinodjangid07  - Tags: animation, switch, toggle, click, save, pin, bookmark */\n#checkboxInput {\n  display: none;\n}\n.bookmark {\n  cursor: pointer;\n  background-color: teal;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n}\n.svgIcon path {\n  stroke-dasharray: 200 0;\n  stroke-dashoffset: 0;\n  stroke: white;\n  fill: #dddddd00;\n  transition-delay: 0s;\n  transition-duration: 0.5s;\n}\n\n#checkboxInput:checked ~ .svgIcon path {\n  fill: white;\n  animation: bookmark 0.5s linear;\n  transition-delay: 0.5s;\n}\n\n@keyframes bookmark {\n  0% {\n    stroke-dasharray: 0 200;\n    stroke-dashoffset: 80;\n  }\n  100% {\n    stroke-dasharray: 200 0;\n  }\n}"
  },
  {
    "id": "uiverse-barisdogansutcu_smart-panda-14",
    "title": "Smart Panda",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "barisdogansutcu",
      "profileUrl": "https://uiverse.io/barisdogansutcu/smart-panda-14"
    },
    "license": "MIT",
    "description": "Smart Panda · toggle by barisdogansutcu",
    "tags": [
      "toggle",
      "switch",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<input type=\"checkbox\" checked=\"checked\" id=\"favorite\" name=\"favorite-checkbox\" value=\"favorite-button\">\n<label for=\"favorite\" class=\"container\">\n  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-heart\"><path d=\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z\"></path></svg>\n  <div class=\"action\">\n    <span class=\"option-1\">Add to Favorites</span>\n    <span class=\"option-2\">Added to Favorites</span>\n  </div>\n</label>",
    "css": "/* From Uiverse.io by barisdogansutcu - Tags: switch */\nlabel {\n background-color: white;\n display: flex;\n align-items: center;\n gap: 14px;\n padding: 10px 15px 10px 10px;\n cursor: pointer;\n user-select: none;\n border-radius: 10px;\n box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n color: black;\n}\n\ninput {\n display: none;\n}\n\ninput:checked + label svg {\n fill: hsl(0deg 100% 50%);\n stroke: hsl(0deg 100% 50%);\n animation: heartButton 1s;\n}\n\n@keyframes heartButton {\n 0% {\n  transform: scale(1);\n }\n\n 25% {\n  transform: scale(1.3);\n }\n\n 50% {\n  transform: scale(1);\n }\n\n 75% {\n  transform: scale(1.3);\n }\n\n 100% {\n  transform: scale(1);\n }\n}\n\ninput + label .action {\n position: relative;\n overflow: hidden;\n display: grid;\n}\n\ninput + label .action span {\n grid-column-start: 1;\n grid-column-end: 1;\n grid-row-start: 1;\n grid-row-end: 1;\n transition: all .5s;\n}\n\ninput + label .action span.option-1 {\n transform: translate(0px,0%);\n opacity: 1;\n}\n\ninput:checked + label .action span.option-1 {\n transform: translate(0px,-100%);\n opacity: 0;\n}\n\ninput + label .action span.option-2 {\n transform: translate(0px,100%);\n opacity: 0;\n}\n\ninput:checked + label .action span.option-2 {\n transform: translate(0px,0%);\n opacity: 1;\n}"
  },
  {
    "id": "uiverse-subaashbala_hard-monkey-38",
    "title": "Hard Monkey",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "Subaashbala",
      "profileUrl": "https://uiverse.io/Subaashbala/hard-monkey-38"
    },
    "license": "MIT",
    "description": "Hard Monkey · toggle by Subaashbala",
    "tags": [
      "toggle",
      "switch",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<label class=\"switch\">\n  <input type=\"checkbox\" />\n  <span class=\"slider\"></span>\n</label>",
    "css": "/* From Uiverse.io by Subaashbala  - Tags: switch */\n/* The switch - the box around the slider */\n.switch {\n  --INITIAL-SWITCH-TRACK-COLOR: #ffdd95;\n  --INITIAL-THUMB-COLOR: #ff9843;\n  --OVERALL-TRANSITION-DURATION: 500ms; /* Overall transition speed */\n  font-size: 17px;\n  position: relative;\n  display: inline-block;\n  width: 3.75em;\n  height: 2em;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--INITIAL-SWITCH-TRACK-COLOR);\n  transition: var(--OVERALL-TRANSITION-DURATION);\n  border-radius: 30px;\n  overflow: hidden;\n}\n\n/* Thumb */\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 100%;\n  aspect-ratio: 1;\n  border-radius: 20px;\n  left: 0;\n  bottom: 0;\n  background-color: var(--INITIAL-THUMB-COLOR);\n  transition: var(--OVERALL-TRANSITION-DURATION);\n}\n\n/* Actions to be performed when the switch is TOGGLED ON */\n.switch input:checked + .slider::before {\n  transform-origin: left;\n  animation: wobble var(--OVERALL-TRANSITION-DURATION);\n  transform: scale(1, 1) translateX(2rem);\n}\n\n/* Actions to be performed when the switch is TOGGLED OFF */\n.switch input:not(:checked) + .slider::before {\n  transform-origin: right;\n  animation: reverse-wobble var(--OVERALL-TRANSITION-DURATION);\n}\n\n@keyframes wobble {\n  0% {\n    transform: scale(1, 1);\n  }\n  50% {\n    transform: scale(3, 1);\n  }\n  100% {\n    transform: scale(1, 1) translateX(2rem);\n  }\n}\n\n@keyframes reverse-wobble {\n  0% {\n    transform: scale(1, 1) translateX(2rem);\n  }\n  50% {\n    transform: scale(3, 1);\n  }\n  100% {\n    transform: scale(1, 1) translateX(0);\n  }\n}"
  },
  {
    "id": "uiverse-amit-dasit_rotten-rat-40",
    "title": "Rotten Rat",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "AmIt-DasIT",
      "profileUrl": "https://uiverse.io/AmIt-DasIT/rotten-rat-40"
    },
    "license": "MIT",
    "description": "Rotten Rat · toggle by AmIt-DasIT",
    "tags": [
      "toggle",
      "switch",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 400,
    "accentColor": null,
    "html": "<label class=\"switch\">\n  <input type=\"checkbox\">\n  <span class=\"slider\"></span>\n</label>",
    "css": "/* From Uiverse.io by AmIt-DasIT - Tags: switch */\n/* The switch - the box around the slider */\n.switch {\n  font-size: 17px;\n  position: relative;\n  display: inline-block;\n  width: 3.5em;\n  height: 2em;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #223243;\n  transition: .4s;\n  border-radius: 30px;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 1.4em;\n  width: 1.4em;\n  border-radius: 20px;\n  left: 0.3em;\n  bottom: 0.3em;\n  background-color: #223243;\n  box-shadow: inset 2px -2px 0 1.8px #fff;\n  transition: .4s;\n  animation: anima1 0.3s linear;\n}\n\n@keyframes anima1 {\n  0% {\n    transform: translateX(1.5em);\n  }\n\n  80% {\n    transform: translateX(-0.3em);\n  }\n\n  100% {\n    transform: translateX(0em);\n  }\n}\n\n.switch input:checked + .slider:before {\n  background-color: yellow;\n  box-shadow: none;\n  transform: translateX(1.5em);\n  animation: anima 0.3s linear;\n}\n\n@keyframes anima {\n  0% {\n    transform: translateX(0px)\n  }\n\n  80% {\n    transform: translateX(1.6em)\n  }\n\n  100% {\n    transform: translateX(1.4em)\n  }\n}"
  },
  {
    "id": "uiverse-subaashbala_quiet-ape-66",
    "title": "Quiet Ape",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "Subaashbala",
      "profileUrl": "https://uiverse.io/Subaashbala/quiet-ape-66"
    },
    "license": "MIT",
    "description": "Quiet Ape · toggle by Subaashbala",
    "tags": [
      "toggle",
      "switch",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<label class=\"switch\">\n  <input type=\"checkbox\" />\n  <span class=\"slider\"></span>\n</label>",
    "css": "/* From Uiverse.io by Subaashbala  - Tags: switch */\n/* The switch - the box around the slider */\n.switch {\n  --INITIAL-SWITCH-TRACK-COLOR: #fffbeb;\n  --INITIAL-THUMB-COLOR: #ff5722;\n  --OVERALL-TRANSITION-DURATION: 500ms; /* Overall transition speed */\n  font-size: 17px;\n  position: relative;\n  display: inline-block;\n  width: 3.75em;\n  height: 2em;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--INITIAL-SWITCH-TRACK-COLOR);\n  transition: var(--OVERALL-TRANSITION-DURATION);\n  border-radius: 30px;\n  overflow: hidden;\n}\n\n/* Thumb */\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 100%;\n  aspect-ratio: 1;\n  border-radius: 20px;\n  left: 0;\n  bottom: 0;\n  background-color: var(--INITIAL-THUMB-COLOR);\n  transition: var(--OVERALL-TRANSITION-DURATION);\n}\n\n.switch input:checked + .slider {\n  background-color: var(--INITIAL-THUMB-COLOR);\n}\n\n/* Actions to be performed when the switch is TOGGLED ON */\n.switch input:checked + .slider::before {\n  transform-origin: left;\n  background-color: var(--INITIAL-SWITCH-TRACK-COLOR);\n  animation: wobble var(--OVERALL-TRANSITION-DURATION)\n    cubic-bezier(0.075, 0.82, 0.165, 1);\n  transform: scale(1, 1) translateX(2rem);\n}\n\n/* Actions to be performed when the switch is TOGGLED OFF */\n.switch input:not(:checked) + .slider::before {\n  transform-origin: right;\n  animation: reverse-wobble var(--OVERALL-TRANSITION-DURATION)\n    cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n\n@keyframes wobble {\n  0% {\n    transform: scale(1, 1);\n  }\n  50% {\n    transform: scale(3, 1);\n  }\n  100% {\n    transform: scale(1, 1) translateX(2rem);\n  }\n}\n\n@keyframes reverse-wobble {\n  0% {\n    transform: scale(1, 1) translateX(2rem);\n  }\n  50% {\n    transform: scale(3, 1);\n  }\n  100% {\n    transform: scale(1, 1) translateX(0);\n  }\n}"
  },
  {
    "id": "uiverse-forzdz_kind-mule-56",
    "title": "Kind Mule",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "ForzDz",
      "profileUrl": "https://uiverse.io/ForzDz/kind-mule-56"
    },
    "license": "MIT",
    "description": "Kind Mule · toggle by ForzDz",
    "tags": [
      "toggle",
      "switch",
      "starrating",
      "3d cool effect",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"rating\">\n  <input type=\"radio\" id=\"star5\" name=\"rating\" value=\"5\">\n  <label for=\"star5\"></label>\n  <input type=\"radio\" id=\"star4\" name=\"rating\" value=\"4\">\n  <label for=\"star4\"></label>\n  <input type=\"radio\" id=\"star3\" name=\"rating\" value=\"3\">\n  <label for=\"star3\"></label>\n  <input type=\"radio\" id=\"star2\" name=\"rating\" value=\"2\">\n  <label for=\"star2\"></label>\n  <input type=\"radio\" id=\"star1\" name=\"rating\" value=\"1\">\n  <label for=\"star1\"></label>\n</div>",
    "css": "/* From Uiverse.io by ForzDz - Tags: switch, starrating, 3d cool effect */\n.rating {\n  display: inline-block;\n  opacity: 1;\n}\n\n.rating input {\n  display: none;\n  opacity: 1;\n}\n\n.rating label {\n  float: right;\n  cursor: pointer;\n  color: #ccc;\n  transition: color 0.3s, transform 0.3s, box-shadow 0.3s;\n}\n\n.rating label:before {\n  content: '\\2605';\n  font-size: 30px;\n  transition: color 0.3s;\n}\n\n.rating input:checked ~ label,\n.rating label:hover,\n.rating label:hover ~ label {\n  color: #ffc300;\n  transform: scale(1.2);\n  transition: color 0.3s, transform 0.3s, box-shadow 0.3s;\n  animation: bounce 0.5s ease-in-out alternate;\n}\n\n@keyframes bounce {\n  to {\n    transform: scale(1.3);\n  }\n}"
  },
  {
    "id": "uiverse-mobinkakei_spicy-moose-47",
    "title": "Spicy Moose",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "mobinkakei",
      "profileUrl": "https://uiverse.io/mobinkakei/spicy-moose-47"
    },
    "license": "MIT",
    "description": "Spicy Moose · toggle by mobinkakei",
    "tags": [
      "toggle",
      "checkbox",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 150,
    "accentColor": null,
    "html": "<div class=\"toggler\">\n    <input id=\"toggler-1\" name=\"toggler-1\" type=\"checkbox\" value=\"1\">\n    <label for=\"toggler-1\">\n        <svg class=\"toggler-on\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 130.2 130.2\">\n            <polyline class=\"path check\" points=\"100.2,40.2 51.5,88.8 29.8,67.5\"></polyline>\n        </svg>\n        <svg class=\"toggler-off\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 130.2 130.2\">\n            <line class=\"path line\" x1=\"34.4\" y1=\"34.4\" x2=\"95.8\" y2=\"95.8\"></line>\n            <line class=\"path line\" x1=\"95.8\" y1=\"34.4\" x2=\"34.4\" y2=\"95.8\"></line>\n        </svg>\n    </label>\n</div>",
    "css": "/* From Uiverse.io by mobinkakei - Tags: checkbox */\n.toggler {\n  width: 72px;\n  margin: 40px auto;\n}\n\n.toggler input {\n  display: none;\n}\n\n.toggler label {\n  display: block;\n  position: relative;\n  width: 72px;\n  height: 36px;\n  border: 1px solid #d6d6d6;\n  border-radius: 36px;\n  background: #e4e8e8;\n  cursor: pointer;\n}\n\n.toggler label::after {\n  display: block;\n  border-radius: 100%;\n  background-color: #d7062a;\n  content: '';\n  animation-name: toggler-size;\n  animation-duration: 0.15s;\n  animation-timing-function: ease-out;\n  animation-direction: forwards;\n  animation-iteration-count: 1;\n  animation-play-state: running;\n}\n\n.toggler label::after, .toggler label .toggler-on, .toggler label .toggler-off {\n  position: absolute;\n  top: 50%;\n  left: 25%;\n  width: 26px;\n  height: 26px;\n  transform: translateY(-50%) translateX(-50%);\n  transition: left 0.15s ease-in-out, background-color 0.2s ease-out, width 0.15s ease-in-out, height 0.15s ease-in-out, opacity 0.15s ease-in-out;\n}\n\n.toggler input:checked + label::after, .toggler input:checked + label .toggler-on, .toggler input:checked + label .toggler-off {\n  left: 75%;\n}\n\n.toggler input:checked + label::after {\n  background-color: #50ac5d;\n  animation-name: toggler-size2;\n}\n\n.toggler .toggler-on, .toggler .toggler-off {\n  opacity: 1;\n  z-index: 2;\n}\n\n.toggler input:checked + label .toggler-off, .toggler input:not(:checked) + label .toggler-on {\n  width: 0;\n  height: 0;\n  opacity: 0;\n}\n\n.toggler .path {\n  fill: none;\n  stroke: #fefefe;\n  stroke-width: 7px;\n  stroke-linecap: round;\n  stroke-miterlimit: 10;\n}\n\n@keyframes toggler-size {\n  0%, 100% {\n    width: 26px;\n    height: 26px;\n  }\n\n  50% {\n    width: 20px;\n    height: 20px;\n  }\n}\n\n@keyframes toggler-size2 {\n  0%, 100% {\n    width: 26px;\n    height: 26px;\n  }\n\n  50% {\n    width: 20px;\n    height: 20px;\n  }\n}"
  },
  {
    "id": "uiverse-burgisimon_breezy-donkey-2",
    "title": "Breezy Donkey",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "BurgiSimon",
      "profileUrl": "https://uiverse.io/BurgiSimon/breezy-donkey-2"
    },
    "license": "MIT",
    "description": "Breezy Donkey · toggle by BurgiSimon",
    "tags": [
      "toggle",
      "simple",
      "animation",
      "red",
      "green",
      "switch",
      "animated",
      "css"
    ],
    "previewType": "css",
    "durationMs": 100,
    "accentColor": null,
    "html": "<label class=\"switch\">\n  <input type=\"checkbox\" />\n  <span class=\"slider\"></span>\n</label>",
    "css": "/* From Uiverse.io by BurgiSimon  - Tags: simple, animation, red, green, switch, animated, css, toggle switch */\n/* The switch - the box around the slider */\n.switch {\n  font-size: 17px;\n  position: relative;\n  display: inline-block;\n  width: 4.5em;\n  height: 2em;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ff3636;\n  transition: 0.1s;\n  transition-delay: 0.2s;\n  border-radius: 30px;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 1.4em;\n  width: 1.4em;\n  border-radius: 20px;\n  left: 0.3em;\n  bottom: 0.3em;\n  background-color: white;\n  transition-delay: 0.2s;\n  transition: 0.1s;\n}\n\n.switch input:checked + .slider {\n  transition-delay: 0.2s;\n  background-color: #00c763;\n}\n\n.switch input:focus + .slider {\n  transition-delay: 0.2s;\n  box-shadow: 0 0 1px #00c763;\n}\n\n.switch input:checked + .slider:before {\n  transform: translateX(2.5em);\n  transition-delay: 0.2s;\n  transition-duration: 0.1s;\n}\n\n/* Animation Right */\n@keyframes slideRight {\n  0% {\n    transform: translateX(0) translateY(0);\n  }\n  20% {\n    transform: translateX(0.5em) translateY(-1.5em);\n  }\n  40% {\n    transform: translateX(1em) translateY(-1.75em); /* Highest Point */\n  }\n  60% {\n    transform: translateX(1.5em) translateY(-1.5em);\n  }\n  80% {\n    transform: translateX(2em) translateY(-1.25em);\n  }\n  100% {\n    transform: translateX(2.5em) translateY(0);\n  }\n}\n\n/* Slide Animation Left */\n@keyframes slideLeft {\n  0% {\n    transform: translateX(2.5em) translateY(0);\n  }\n  20% {\n    transform: translateX(2em) translateY(-0.25em);\n  }\n  40% {\n    transform: translateX(1.5em) translateY(-0.5em); /* Highest Point */\n  }\n  60% {\n    transform: translateX(1em) translateY(-0.75em);\n  }\n  80% {\n    transform: translateX(0.5em) translateY(-0.5em);\n  }\n  100% {\n    transform: translateX(0) translateY(0);\n  }\n}\n\n.switch input:checked + .slider:before {\n  animation: slideRight 0.15s forwards;\n}\n\n.switch input:not(:checked) + .slider:before {\n  animation: slideLeft 0.15s forwards;\n}"
  },
  {
    "id": "uiverse-admin12121_massive-dodo-67",
    "title": "Massive Dodo",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "Admin12121",
      "profileUrl": "https://uiverse.io/Admin12121/massive-dodo-67"
    },
    "license": "MIT",
    "description": "Massive Dodo · toggle by Admin12121",
    "tags": [
      "toggle",
      "switch",
      "animated",
      "click effect"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<label class=\"switch-button\" for=\"switch\">\n  <div class=\"switch-outer\">\n    <input id=\"switch\" type=\"checkbox\">\n    <div class=\"button\">\n      <span class=\"button-toggle\"></span>\n      <span class=\"button-indicator\"></span>\n    </div>\n  </div>\n</label>",
    "css": "/* From Uiverse.io by Admin12121 - Tags: switch, animated, click effect */\n.switch-button {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  justify-content: center;\n  margin: auto;\n  height: 55px;\n}\n\n.switch-button .switch-outer {\n  height: 100%;\n  background: #252532;\n  width: 115px;\n  border-radius: 165px;\n  -webkit-box-shadow: inset 0px 5px 10px 0px #16151c, 0px 3px 6px -2px #403f4e;\n  box-shadow: inset 0px 5px 10px 0px #16151c, 0px 3px 6px -2px #403f4e;\n  border: 1px solid #32303e;\n  padding: 6px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.switch-button .switch-outer input[type=\"checkbox\"] {\n  opacity: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  position: absolute;\n}\n\n.switch-button .switch-outer .button-toggle {\n  height: 42px;\n  width: 42px;\n  background: -webkit-gradient(\n    linear,\n    left top,\n    left bottom,\n    from(#3b3a4e),\n    to(#272733)\n  );\n  background: -o-linear-gradient(#3b3a4e, #272733);\n  background: linear-gradient(#3b3a4e, #272733);\n  border-radius: 100%;\n  -webkit-box-shadow: inset 0px 5px 4px 0px #424151, 0px 4px 15px 0px #0f0e17;\n  box-shadow: inset 0px 5px 4px 0px #424151, 0px 4px 15px 0px #0f0e17;\n  position: relative;\n  z-index: 2;\n  -webkit-transition: left 0.3s ease-in;\n  -o-transition: left 0.3s ease-in;\n  transition: left 0.3s ease-in;\n  left: 0;\n}\n\n.switch-button\n  .switch-outer\n  input[type=\"checkbox\"]:checked\n  + .button\n  .button-toggle {\n  left: 58%;\n}\n\n.switch-button\n  .switch-outer\n  input[type=\"checkbox\"]:checked\n  + .button\n  .button-indicator {\n  -webkit-animation: indicator 1s forwards;\n  animation: indicator 1s forwards;\n}\n\n.switch-button .switch-outer .button {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n}\n\n.switch-button .switch-outer .button-indicator {\n  height: 25px;\n  width: 25px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  border-radius: 50%;\n  border: 3px solid #ef565f;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  right: 10px;\n  position: relative;\n}\n\n@-webkit-keyframes indicator {\n  30% {\n    opacity: 0;\n  }\n\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 1;\n    border: 3px solid #60d480;\n    left: -68%;\n  }\n}\n\n@keyframes indicator {\n  30% {\n    opacity: 0;\n  }\n\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 1;\n    border: 3px solid #60d480;\n    left: -68%;\n  }\n}"
  },
  {
    "id": "uiverse-eddybel_slimy-penguin-36",
    "title": "Slimy Penguin",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "EddyBel",
      "profileUrl": "https://uiverse.io/EddyBel/slimy-penguin-36"
    },
    "license": "MIT",
    "description": "Slimy Penguin · toggle by EddyBel",
    "tags": [
      "toggle",
      "switch",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 3000,
    "accentColor": null,
    "html": "<label class=\"switch\">\n  <input type=\"checkbox\" class=\"input__check\">\n  <span class=\"slider\"></span>\n</label>",
    "css": "/* From Uiverse.io by EddyBel - Tags: switch */\n/* The switch - the box around the slider */\n.switch {\n  font-size: 17px;\n  position: relative;\n  display: inline-block;\n  width: 3.5em;\n  height: 2em;\n  transform-style: preserve-3d;\n  perspective: 500px;\n  animation: toggle__animation 3s infinite;\n}\n\n.switch::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  filter: blur(20px);\n  z-index: -1;\n  border-radius: 50px;\n  background-color: #d8ff99;\n  background-image: radial-gradient(at 21% 46%, hsla(183,65%,60%,1) 0px, transparent 50%),\nradial-gradient(at 23% 25%, hsla(359,74%,70%,1) 0px, transparent 50%),\nradial-gradient(at 20% 1%, hsla(267,83%,75%,1) 0px, transparent 50%),\nradial-gradient(at 86% 87%, hsla(204,69%,68%,1) 0px, transparent 50%),\nradial-gradient(at 99% 41%, hsla(171,72%,77%,1) 0px, transparent 50%),\nradial-gradient(at 55% 24%, hsla(138,60%,62%,1) 0px, transparent 50%);\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #fdfefedc;\n  transition: .4s;\n  border-radius: 30px;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 1.4em;\n  width: 1.4em;\n  left: 0.3em;\n  bottom: 0.35em;\n  transition: .4s;\n  border-radius: 50%;\n  box-shadow: rgba(0, 0, 0, 0.17) 0px -10px 10px 0px inset,\n     rgba(0, 0, 0, 0.09) 0px -1px 15px -8px;\n  background-color: #ff99fd;\n  background-image: radial-gradient(at 81% 39%, hsla(327,79%,79%,1) 0px, transparent 50%),\n  radial-gradient(at 11% 72%, hsla(264,64%,79%,1) 0px, transparent 50%),\n  radial-gradient(at 23% 20%, hsla(75,98%,71%,1) 0px, transparent 50%);\n}\n\n.input__check:checked + .slider {\n  background-color: #17202A;\n}\n\n.input__check:checked + .slider:before {\n  transform: translateX(1.5em);\n}\n\n@keyframes toggle__animation {\n  0%, 100% {\n    transform: translateY(-10px) rotateX(15deg) rotateY(-20deg);\n  }\n\n  50% {\n    transform: translateY(0px) rotateX(15deg) rotateY(-20deg);\n  }\n}"
  },
  {
    "id": "uiverse-type-delta_happy-mule-45",
    "title": "Happy Mule",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "Type-Delta",
      "profileUrl": "https://uiverse.io/Type-Delta/happy-mule-45"
    },
    "license": "MIT",
    "description": "Happy Mule · toggle by Type-Delta",
    "tags": [
      "toggle",
      "animation",
      "minimalist",
      "theme-switch",
      "light&dark",
      "toggle switch",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 400,
    "accentColor": null,
    "html": "<label\n  for=\"themeToggle\"\n  class=\"themeToggle st-sunMoonThemeToggleBtn\"\n  type=\"checkbox\"\n>\n  <input type=\"checkbox\" id=\"themeToggle\" class=\"themeToggleInput\" />\n  <svg\n    width=\"18\"\n    height=\"18\"\n    viewBox=\"0 0 20 20\"\n    fill=\"currentColor\"\n    stroke=\"none\"\n  >\n    <mask id=\"moon-mask\">\n      <rect x=\"0\" y=\"0\" width=\"20\" height=\"20\" fill=\"white\"></rect>\n      <circle cx=\"11\" cy=\"3\" r=\"8\" fill=\"black\"></circle>\n    </mask>\n    <circle\n      class=\"sunMoon\"\n      cx=\"10\"\n      cy=\"10\"\n      r=\"8\"\n      mask=\"url(#moon-mask)\"\n    ></circle>\n    <g>\n      <circle class=\"sunRay sunRay1\" cx=\"18\" cy=\"10\" r=\"1.5\"></circle>\n      <circle class=\"sunRay sunRay2\" cx=\"14\" cy=\"16.928\" r=\"1.5\"></circle>\n      <circle class=\"sunRay sunRay3\" cx=\"6\" cy=\"16.928\" r=\"1.5\"></circle>\n      <circle class=\"sunRay sunRay4\" cx=\"2\" cy=\"10\" r=\"1.5\"></circle>\n      <circle class=\"sunRay sunRay5\" cx=\"6\" cy=\"3.1718\" r=\"1.5\"></circle>\n      <circle class=\"sunRay sunRay6\" cx=\"14\" cy=\"3.1718\" r=\"1.5\"></circle>\n    </g>\n  </svg>\n</label>",
    "css": "/* From Uiverse.io by Type-Delta  - Tags: animation, minimalist, theme-switch, light&dark, toggle switch */\n/* a clone from joshwcomeau.com \n * but this version runs on pure CSS\n */\n\n.themeToggle {\n  color: #bbb;\n  width: 3em;\n}\n\n.st-sunMoonThemeToggleBtn {\n  position: relative;\n  cursor: pointer;\n}\n\n.st-sunMoonThemeToggleBtn .themeToggleInput {\n  opacity: 0;\n  width: 100%;\n  aspect-ratio: 1;\n}\n\n.st-sunMoonThemeToggleBtn svg {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: transform 0.4s ease;\n  transform: rotate(40deg);\n}\n\n.st-sunMoonThemeToggleBtn svg .sunMoon {\n  transform-origin: center center;\n  transition: inherit;\n  transform: scale(1);\n}\n\n.st-sunMoonThemeToggleBtn svg .sunRay {\n  transform-origin: center center;\n  transform: scale(0);\n}\n\n.st-sunMoonThemeToggleBtn svg mask > circle {\n  transition: transform 0.64s cubic-bezier(0.41, 0.64, 0.32, 1.575);\n  transform: translate(0px, 0px);\n}\n\n.st-sunMoonThemeToggleBtn svg .sunRay2 {\n  animation-delay: 0.05s !important;\n}\n.st-sunMoonThemeToggleBtn svg .sunRay3 {\n  animation-delay: 0.1s !important;\n}\n.st-sunMoonThemeToggleBtn svg .sunRay4 {\n  animation-delay: 0.17s !important;\n}\n.st-sunMoonThemeToggleBtn svg .sunRay5 {\n  animation-delay: 0.25s !important;\n}\n.st-sunMoonThemeToggleBtn svg .sunRay5 {\n  animation-delay: 0.29s !important;\n}\n\n.st-sunMoonThemeToggleBtn .themeToggleInput:checked + svg {\n  transform: rotate(90deg);\n}\n.st-sunMoonThemeToggleBtn .themeToggleInput:checked + svg mask > circle {\n  transform: translate(16px, -3px);\n}\n.st-sunMoonThemeToggleBtn .themeToggleInput:checked + svg .sunMoon {\n  transform: scale(0.55);\n}\n.st-sunMoonThemeToggleBtn .themeToggleInput:checked + svg .sunRay {\n  animation: showRay1832 0.4s ease 0s 1 forwards;\n}\n\n@keyframes showRay1832 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}"
  },
  {
    "id": "uiverse-nawsome_witty-emu-55",
    "title": "Witty Emu",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "Nawsome",
      "profileUrl": "https://uiverse.io/Nawsome/witty-emu-55"
    },
    "license": "MIT",
    "description": "Witty Emu · toggle by Nawsome",
    "tags": [
      "toggle",
      "switch",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 250,
    "accentColor": null,
    "html": "<label class=\"checkbox\">\n    <input type=\"checkbox\">\n    <svg viewBox=\"0 0 21 18\">\n        <symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 21 18\" id=\"tick-path\">\n            <path stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"2.25\" fill=\"none\" d=\"M5.22003 7.26C5.72003 7.76 7.57 9.7 8.67 11.45C12.2 6.05 15.65 3.5 19.19 1.69\"></path>\n        </symbol>\n        <defs>\n            <mask id=\"tick\">\n                \n            </mask>\n        </defs>\n        \n        <path d=\"M18 9C18 10.4464 17.9036 11.8929 17.7589 13.1464C17.5179 15.6054 15.6054 17.5179 13.1625 17.7589C11.8929 17.9036 10.4464 18 9 18C7.55357 18 6.10714 17.9036 4.85357 17.7589C2.39464 17.5179 0.498214 15.6054 0.241071 13.1464C0.0964286 11.8929 0 10.4464 0 9C0 7.55357 0.0964286 6.10714 0.241071 4.8375C0.498214 2.39464 2.39464 0.482143 4.85357 0.241071C6.10714 0.0964286 7.55357 0 9 0C10.4464 0 11.8929 0.0964286 13.1625 0.241071C15.6054 0.482143 17.5179 2.39464 17.7589 4.8375C17.9036 6.10714 18 7.55357 18 9Z\" mask=\"url(#tick)\" fill=\"white\"></path>\n    </svg>\n    <svg viewBox=\"0 0 11 11\" class=\"lines\">\n        <path d=\"M5.88086 5.89441L9.53504 4.26746\"></path>\n        <path d=\"M5.5274 8.78838L9.45391 9.55161\"></path>\n        <path d=\"M3.49371 4.22065L5.55387 0.79198\"></path>\n    </svg>\n</label>",
    "css": "/* From Uiverse.io by Nawsome - Tags: switch */\n.checkbox {\n  --border-default: #bbbbc1;\n  --border-hover: #9898a3;\n  --active: #6E7BF2;\n  --active-tick: #ffffff;\n  display: block;\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  position: relative;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.checkbox svg {\n  display: block;\n  position: absolute;\n}\n\n.checkbox input {\n  display: block;\n  outline: none;\n  border: none;\n  padding: 0;\n  margin: 0;\n  -webkit-appearance: none;\n  width: 18px;\n  height: 18px;\n  border-radius: 36%/36%;\n  box-shadow: inset 0 0 0 1.5px var(--border, var(--border-default));\n  background: var(--background, transparent);\n  transition: background 0.25s linear, box-shadow 0.25s linear;\n}\n\n.checkbox input + svg {\n  width: 21px;\n  height: 18px;\n  left: 0;\n  top: 0;\n  color: var(--active);\n}\n\n.checkbox input + svg .tick {\n  stroke-dasharray: 20;\n  stroke-dashoffset: var(--stroke-dashoffset, 20);\n  transition: stroke-dashoffset 0.2s;\n}\n\n.checkbox input + svg .tick.mask {\n  stroke: var(--active-tick);\n}\n\n.checkbox input + svg + svg {\n  width: 11px;\n  height: 11px;\n  fill: none;\n  stroke: var(--active);\n  stroke-width: 1.25;\n  stroke-linecap: round;\n  top: -6px;\n  right: -10px;\n  stroke-dasharray: 4.5px;\n  stroke-dashoffset: 13.5px;\n  pointer-events: none;\n  -webkit-animation: var(--animation, none) 0.2s ease 0.175s;\n  animation: var(--animation, none) 0.2s ease 0.175s;\n}\n\n.checkbox input:checked {\n  --background: var(--active);\n  --border: var(--active);\n}\n\n.checkbox input:checked + svg {\n  --stroke-dashoffset: 0;\n}\n\n.checkbox input:checked + svg + svg {\n  --animation: check95;\n}\n\n.checkbox:hover input:not(:checked) {\n  --border: var(--border-hover);\n}\n\n@keyframes check95 {\n  100% {\n    stroke-dashoffset: 4.5px;\n  }\n}"
  },
  {
    "id": "uiverse-andrew-demchenk0_light-dragonfly-53",
    "title": "Light Dragonfly",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "andrew-demchenk0",
      "profileUrl": "https://uiverse.io/andrew-demchenk0/light-dragonfly-53"
    },
    "license": "MIT",
    "description": "Light Dragonfly · toggle by andrew-demchenk0",
    "tags": [
      "toggle",
      "switch",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 400,
    "accentColor": null,
    "html": "<label class=\"switch\">\n  <input class=\"input\" type=\"checkbox\">\n  <span class=\"slider\">\n    <span class=\"iron-man\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" viewBox=\"0 0 48 48\" height=\"50\"><path fill=\"#d03827\" d=\"m19.479 46.479c-.595.059-1.166-.238-1.441-.77-.415-.803-1.062-1.334-1.595-2.023-1.281-1.657-2.266-3.435-3.411-5.189-.196-.3-.395-.608-.481-.955-.089-.359-.053-.736-.02-1.104.058-.64-.058-1.274-.217-1.897-.384-1.51-2.376-2.642-3.273-3.916-1.248-1.774-1.382-4.075-1.473-6.242-.07-1.661.002-3.513-.032-5.223-.008-.422.162-.816.472-1.103.859-.794 1.844-2.056 2.009-3.191.332-2.29.469-4.653 1.376-6.782 1.679-3.937 5.84-6.913 10.083-7.475 5.19-.687 10.929 1.721 14.485 5.564.586.633 1.124 1.315 1.544 2.069.75 1.344 1.104 2.871 1.337 4.392.201 1.309.03 2.697.055 4.029.009.458.371.863.743 1.131.483.348.784.975.878 1.581.125.809-.061 1.629-.201 2.436-.25 1.443-.352 2.912-.303 4.377.05 1.499.199 3.184-.791 4.312-.511.582-1.458.982-1.927 1.599-1.072 1.409-.446 3.435-.987 5.121-.22.687-.665 1.276-1.102 1.85-1.579 2.075-2.924 4.202-4.503 6.277-.359.472-.878 1.082-1.471 1.066-3.125-.156-6.582-.247-9.754.066z\"></path><path fill=\"#010101\" d=\"m19.328 46.987c-.731 0-1.398-.396-1.734-1.048-.239-.464-.577-.837-.934-1.232-.209-.23-.418-.463-.612-.715-.888-1.147-1.645-2.367-2.377-3.547-.346-.558-.693-1.117-1.058-1.675-.206-.316-.439-.675-.548-1.107-.107-.436-.068-.869-.034-1.252.057-.622-.07-1.23-.201-1.747-.201-.789-.998-1.528-1.77-2.243-.519-.48-1.054-.978-1.428-1.508-1.373-1.95-1.479-4.478-1.564-6.509-.04-.965-.033-2.004-.026-3.009.005-.751.01-1.501-.005-2.226-.012-.558.219-1.098.632-1.479.765-.706 1.708-1.888 1.854-2.896.067-.463.127-.929.186-1.396.234-1.844.476-3.75 1.226-5.51 1.727-4.05 5.938-7.174 10.478-7.775 5.132-.677 11.124 1.619 14.918 5.72.688.743 1.216 1.451 1.613 2.165.851 1.523 1.192 3.237 1.396 4.56.138.902.109 1.829.081 2.726-.015.46-.029.918-.021 1.369.004.218.21.5.536.736.552.398.956 1.112 1.079 1.91.123.789-.015 1.556-.148 2.297l-.054.3c-.243 1.408-.343 2.847-.295 4.275l.013.345c.055 1.463.118 3.122-.928 4.313-.28.319-.648.574-1.004.821-.36.25-.7.486-.9.75-.541.71-.575 1.665-.612 2.676-.027.759-.057 1.544-.297 2.295-.25.776-.744 1.427-1.18 2-.785 1.031-1.526 2.097-2.244 3.127-.72 1.035-1.465 2.106-2.259 3.15-.477.626-1.066 1.263-1.842 1.263-.014 0-.028 0-.042 0-2.81-.14-6.438-.256-9.694.066-.068.006-.134.01-.201.01zm.151-.508h.01zm3.775-45.485c-.579 0-1.15.037-1.711.111-4.137.547-8.12 3.498-9.688 7.176-.695 1.631-.928 3.468-1.153 5.243-.06.473-.12.944-.188 1.413-.185 1.267-1.239 2.632-2.166 3.487-.206.19-.316.448-.311.725.014.734.01 1.493.005 2.252-.007.993-.014 2.021.026 2.962.079 1.899.179 4.264 1.383 5.974.313.445.787.885 1.29 1.351.877.813 1.784 1.655 2.058 2.73.152.598.298 1.311.23 2.064-.032.353-.061.668.007.939.067.269.244.54.415.803.368.563.72 1.129 1.069 1.693.752 1.211 1.463 2.355 2.318 3.463.179.231.372.444.563.656.384.425.781.864 1.08 1.443.178.344.547.552.948.501 3.302-.325 6.824-.218 9.831-.069h.01c.378 0 .874-.653 1.038-.869.781-1.027 1.521-2.089 2.235-3.116.723-1.039 1.471-2.113 2.269-3.161.406-.534.826-1.087 1.023-1.7.198-.619.224-1.303.25-2.026.041-1.122.083-2.282.815-3.244.296-.39.718-.683 1.126-.966.32-.223.623-.433.822-.66.783-.892.73-2.276.68-3.616l-.013-.349c-.05-1.497.055-3.004.311-4.479l.054-.308c.125-.689.242-1.342.145-1.966-.082-.531-.341-1.011-.676-1.253-.35-.253-.937-.786-.951-1.527-.009-.469.006-.943.021-1.42.027-.851.055-1.731-.069-2.543-.19-1.239-.508-2.84-1.28-4.224-.358-.644-.841-1.289-1.475-1.973-3.166-3.421-7.946-5.517-12.341-5.517z\"></path><path fill=\"#febf10\" d=\"m38.104 25.557c-1.123-4.605-1.65-9.529-1.541-14.268-1.207-1.917-2.861-3.551-4.866-4.604-.818-.43-1.954-.717-2.562-.021-.271.31-.351.738-.425 1.143-.326 1.761-.748 3.504-1.265 5.219-.234.776-.545 1.618-1.256 2.006-.435.237-.95.261-1.445.28-.754.029-1.509.057-2.263.086-.168.006-.348.009-.488-.084-.156-.104-.219-.299-.272-.479-.802-2.73-1.692-5.435-2.667-8.108-.086-.237-.215-.509-.464-.549-.148-.024-.294.046-.427.115-2.115 1.1-4.093 2.729-5.751 4.442.34 4.626-.564 9.83-2.475 14.057.237.218.46.466.687.707 3.687 5.347 5.26 11.33 7.888 17.277.163.369.428.763.828.711 3.361-.115 6.812-.309 10.173-.424 2.076-4.558 4.648-9.484 6.647-14.077l-.004-.001c.771-1.072 1.426-2.227 1.948-3.428z\"></path><path fill=\"#16b7b8\" d=\"m13.826 23.27c-.366 1.118-.367 2.353-.002 3.471 1.598.602 3.318.88 5.024.813.38-.015.775-.051 1.105-.241.465-.267.825-1.07.994-1.578\"></path><path fill=\"#16b7b8\" d=\"m27.207 25.601c.225.589.613.676.968 1.198.078.114.161.229.278.303.104.066.227.095.347.12 1.607.34 3.291.314 4.887-.075.245-.06.51-.143.648-.355.083-.128.107-.285.127-.437.171-1.292-.037-2.164-.038-3.467\"></path><path fill=\"#010101\" d=\"m38.589 25.438c-1.106-4.538-1.634-9.428-1.526-14.138.002-.099-.024-.195-.077-.278-1.308-2.077-3.057-3.729-5.057-4.779-1.323-.695-2.511-.662-3.171.093-.361.414-.461.95-.54 1.381-.32 1.732-.741 3.471-1.252 5.166-.201.669-.463 1.409-1.017 1.71-.343.187-.812.204-1.304.223l-2.183.083c-.051.002-.17.006-.182.01-.028-.033-.067-.165-.082-.214-.801-2.728-1.701-5.466-2.677-8.137-.069-.193-.282-.781-.852-.873-.324-.054-.594.089-.738.165-1.961 1.02-3.994 2.588-5.88 4.537-.099.103-.149.242-.14.385.334 4.544-.575 9.708-2.432 13.813-.086.196-.039.428.121.574.219.201.425.433.635.656 2.488 3.617 3.983 7.485 5.561 11.578.705 1.827 1.434 3.717 2.259 5.584.377.856.89 1.016 1.192 1.016.041 0 .077-.003.109-.007 1.684-.058 3.389-.135 5.095-.213 1.7-.077 3.4-.154 5.078-.211.19-.007.359-.12.438-.293.9-1.977 1.915-4.065 2.896-6.085 1.281-2.637 2.604-5.363 3.734-7.955.763-1.069 1.427-2.234 1.964-3.472.044-.102.054-.213.028-.319zm-20.194-18.702c.022-.012.084-.044.079-.069.02.025.058.088.109.232.969 2.652 1.862 5.37 2.657 8.076.06.203.159.544.476.755.277.185.592.171.784.168l2.262-.086c.498-.019 1.117-.042 1.666-.341.845-.46 1.218-1.378 1.495-2.301.521-1.73.951-3.504 1.277-5.272.064-.343.13-.697.312-.904.392-.452 1.296-.209 1.952.134 1.531.804 2.889 2.013 4.006 3.497-.748.863-1.13 1.896-1.198 3.33-.034.689-.099 1.419-.165 2.166-.188 2.116-.382 4.306.029 6.246.031.147.056.299.032.396-.039.104-.306.257-.831.469-6.237 2.525-13.53 2.362-19.149-.398 1.635-4.348.39-8.57-.941-12.214 1.674-1.653 3.441-2.996 5.148-3.884zm15.585 17.484c.05.7.09 1.3-.02 2.07 0 .06-.02.19-.04.23-.02.03-.1.08-.35.14-1.52.37-3.14.4-4.67.07-.05-.01-.15-.03-.18-.05-.04-.02-.1-.12-.13-.16-.18-.27-.37-.44-.52-.58-.084-.075-.15-.139-.211-.207 2.008-.295 3.995-.822 5.891-1.589.067-.027.145-.062.219-.094.004.055.008.116.011.17zm-19.802-.295c1.934.894 4.041 1.501 6.23 1.819-.205.55-.482 1.008-.704 1.135-.241.139-.578.163-.875.175-1.544.068-3.133-.18-4.598-.697-.217-.791-.227-1.63-.053-2.432zm2.551 13.108c-.654-1.697-1.297-3.354-1.999-4.976.132.177.254.359.401.526.34.39.724.749 1.094 1.097.822.772 1.599 1.501 1.855 2.469l.049.188c.171.662.396 1.511.954 2.056 0 .013-.006.025-.006.038.048.963-.065 1.921-.337 2.848l-.038.128c-.03.099-.06.206-.089.313-.668-1.569-1.29-3.149-1.884-4.687zm7.676 5.74c-1.609.074-3.222.145-4.853.204-.003-.05-.006-.1-.024-.148-.116-.306.005-.708.132-1.135l.039-.133c.258-.877.379-1.779.38-2.689 1.283.275 2.588.388 3.872.388 1.422 0 2.809-.128 4.11-.288.002.044.002.087.016.131.361 1.139.661 2.308.91 3.478-1.516.055-3.048.123-4.582.192zm7.56-6.027c-.747 1.539-1.502 3.108-2.225 4.649-.21-.873-.44-1.743-.71-2.596l-.046-.103c-.008-.013-.02-.021-.029-.033.031-.049.073-.09.086-.149.135-.608.352-1.072.582-1.563.173-.37.353-.752.515-1.225.131-.38.267-.746.486-1.032.266-.348.669-.598 1.098-.863l.171-.106c.858-.538 1.666-1.181 2.426-1.896-.765 1.638-1.565 3.293-2.354 4.917zm-.603-3.868-.167.104c-.485.301-.988.612-1.364 1.105-.311.404-.485.871-.638 1.314-.146.422-.313.779-.475 1.126-.203.432-.411.876-.566 1.427-2.56.324-5.5.535-8.176-.115-.478-.201-.71-1.098-.879-1.753l-.051-.193c-.33-1.244-1.249-2.107-2.138-2.941-.369-.347-.718-.674-1.026-1.026-.488-.559-.879-1.19-1.292-1.86-.126-.205-.253-.41-.382-.613-.901-1.41-1.971-2.962-3.188-4.264-.013-.019-.024-.038-.037-.057-.039-.055-.087-.1-.141-.134-.103-.106-.199-.225-.305-.327 1.537-3.535 2.401-7.778 2.435-11.769.982 3.109 1.563 6.542.119 9.977-.091.216-.012.457.172.591-.292 1.122-.276 2.323.084 3.426.047.145.157.259.3.313 1.492.563 3.112.855 4.714.855.169 0 .338-.004.507-.01.446-.019.917-.068 1.333-.308.673-.386 1.077-1.426 1.22-1.854.002-.006 0-.012.002-.017.867.09 1.743.139 2.624.139.909 0 1.822-.053 2.733-.148.169.391.405.618.609.804.13.12.26.24.37.41.1.15.23.32.43.45.17.1.35.15.51.18.78.17 1.58.25 2.38.25.92 0 1.84-.11 2.72-.33.23-.05.69-.17.95-.57.15-.23.19-.48.21-.64.11-.87.07-1.55.02-2.27-.015-.238-.029-.499-.038-.761.087-.113.16-.237.196-.383.073-.296.032-.58-.023-.845-.381-1.795-.193-3.908-.012-5.952.067-.761.134-1.504.167-2.205.053-1.076.31-1.864.79-2.514-.088 4.675.436 9.513 1.519 14.02-1.383 3.108-3.586 5.72-6.216 7.368z\"></path></svg></span>\n    <span class=\"commutator\"><svg fill=\"#303c42\" height=\"55\" stroke=\"#303c42\" stroke-width=\"1.444\" viewBox=\"0 0 76 76\" width=\"55\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#2196F3\" stroke-linejoin=\"round\"><path d=\"m38 29c4.9706 0 9 4.0294 9 9s-4.0294 9-9 9-9-4.0294-9-9 4.0294-9 9-9zm0-10c1.8461 0 3.6307.2633 5.3183.7544l-2.321 4.5672c-.9657-.2106-1.9685-.3216-2.9973-.3216-.7922 0-1.569.0658-2.3252.1922l-2.0953-4.6753c1.4185-.338 2.8986-.5169 4.4205-.5169zm0 38c-1.8461 0-3.6307-.2633-5.3184-.7544l2.3211-4.5672c.9656.2106 1.9685.3216 2.9973.3216.7921 0 1.5689-.0658 2.3252-.1922l2.0952 4.6753c-1.4184.338-2.8985.5169-4.4204.5169zm7.288-36.552c3.0672 1.275 5.7284 3.3306 7.7355 5.9189l-4.5613 2.3301c-1.1837-1.3302-2.6173-2.4332-4.2272-3.2353zm8.9232 7.6374c1.6744 2.7319 2.6776 5.9196 2.7801 9.3337l-5.0581-.7957c-.1783-1.8263-.7075-3.5498-1.5193-5.1021zm-1.7744 22.2674c-2.1253 2.4815-4.8792 4.4086-8.0149 5.5345l-.8067-5.0589c1.6508-.7236 3.1353-1.7566 4.38-3.0255zm4.5042-10.8449c-.2661 3.3899-1.4219 6.5297-3.2341 9.1861l-3.6247-3.617c.8892-1.5149 1.5017-3.2119 1.768-5.0215zm-26.229 16.0441c-3.0673-1.275-5.7284-3.3306-7.7355-5.9189l4.5612-2.3301c1.1837 1.3303 2.6174 2.4333 4.2272 3.2354zm-8.9232-7.6374c-1.6744-2.7319-2.6776-5.9196-2.7801-9.3337l5.0581.7957c.1782 1.8263.7074 3.5498 1.5192 5.1021zm-2.7298-11.4225c.2661-3.3898 1.4219-6.5297 3.2341-9.1861l3.6247 3.6171c-.8893 1.5149-1.5017 3.2118-1.768 5.0214zm4.5042-10.8449c2.1252-2.4814 4.8791-4.4085 8.0149-5.5345l.8067 5.0589c-1.6509.7236-3.1353 1.7566-4.38 3.0255z\" stroke=\"#ccc\" stroke-linecap=\"round\" stroke-width=\"2.432\"></path><path d=\"m38 29c4.9706 0 9 4.0294 9 9s-4.0294 9-9 9-9-4.0294-9-9 4.0294-9 9-9zm0-10c1.8461 0 3.6307.2633 5.3183.7544l-2.321 4.5672c-.9657-.2106-1.9685-.3216-2.9973-.3216-.7922 0-1.569.0658-2.3252.1922l-2.0953-4.6753c1.4185-.338 2.8986-.5169 4.4205-.5169zm0 38c-1.8461 0-3.6307-.2633-5.3184-.7544l2.3211-4.5672c.9656.2106 1.9685.3216 2.9973.3216.7921 0 1.5689-.0658 2.3252-.1922l2.0952 4.6753c-1.4184.338-2.8985.5169-4.4204.5169zm7.288-36.552c3.0672 1.275 5.7284 3.3306 7.7355 5.9189l-4.5613 2.3301c-1.1837-1.3302-2.6173-2.4332-4.2272-3.2353zm8.9232 7.6374c1.6744 2.7319 2.6776 5.9196 2.7801 9.3337l-5.0581-.7957c-.1783-1.8263-.7075-3.5498-1.5193-5.1021zm-1.7744 22.2674c-2.1253 2.4815-4.8792 4.4086-8.0149 5.5345l-.8067-5.0589c1.6508-.7236 3.1353-1.7566 4.38-3.0255zm4.5042-10.8449c-.2661 3.3899-1.4219 6.5297-3.2341 9.1861l-3.6247-3.617c.8892-1.5149 1.5017-3.2119 1.768-5.0215zm-26.229 16.0441c-3.0673-1.275-5.7284-3.3306-7.7355-5.9189l4.5612-2.3301c1.1837 1.3303 2.6174 2.4333 4.2272 3.2354zm-8.9232-7.6374c-1.6744-2.7319-2.6776-5.9196-2.7801-9.3337l5.0581.7957c.1782 1.8263.7074 3.5498 1.5192 5.1021zm-2.7298-11.4225c.2661-3.3898 1.4219-6.5297 3.2341-9.1861l3.6247 3.6171c-.8893 1.5149-1.5017 3.2118-1.768 5.0214zm4.5042-10.8449c2.1252-2.4814 4.8791-4.4085 8.0149-5.5345l.8067 5.0589c-1.6509.7236-3.1353 1.7566-4.38 3.0255z\"></path></g></svg></span>\n  </span>\n</label>",
    "css": "/* From Uiverse.io by andrew-demchenk0 - Tags: switch */\n.switch {\n  font-size: 17px;\n  position: relative;\n  display: inline-block;\n  width: 70px;\n  height: 34.5px;\n  overflow: hidden;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s;\n  border-radius: 30px;\n}\n\n.commutator {\n  cursor: pointer;\n  position: absolute;\n  top: -29%;\n  left: -14%;\n  transition: .4s;\n}\n\n.iron-man {\n  position: absolute;\n  top: -27%;\n  left: -100%;\n  transform: rotate(90deg);\n}\n\n.input:checked + .slider {\n  background-color: #2196F3;\n}\n\n.input:checked + .slider .commutator {\n  transform: translateX(34.5px);\n  opacity: 0;\n}\n\n.input:checked + .slider .iron-man {\n  animation: show_5911 1.3s ease-in-out forwards;\n}\n\n@keyframes show_5911 {\n  0% {\n    transform: translateX(0px) rotate(90deg);\n  }\n\n  50% {\n    transform: translateX(75px) rotate(90deg);\n  }\n\n  100% {\n    transform: translateX(79px) rotate(0deg);\n  }\n}"
  },
  {
    "id": "uiverse-ilkhoeri_blue-zebra-2",
    "title": "Blue Zebra",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "ilkhoeri",
      "profileUrl": "https://uiverse.io/ilkhoeri/blue-zebra-2"
    },
    "license": "MIT",
    "description": "Blue Zebra · toggle by ilkhoeri",
    "tags": [
      "toggle",
      "switch",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"switch-wrap\">\n  <input\n    class=\"switch-input\"\n    aria-label=\"switch\"\n    name=\"switch\"\n    id=\"switch\"\n    type=\"checkbox\"\n    hidden=\"\"\n  />\n  <label class=\"switch-label\" for=\"switch\"></label>\n  <span class=\"switch-marbles\"></span>\n</div>",
    "css": "/* From Uiverse.io by ilkhoeri  - Tags: switch */\n.switch-wrap {\n  z-index: 20;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 9999px;\n  width: calc(var(--w-switch) + calc(var(--p) * 2));\n  height: calc(var(--h-switch) + calc(var(--p) * 2));\n  box-shadow: hsla(var(--pure-black), 0.25) 2px -5px 4px inset,\n    hsla(var(--pure-black), 0.25) 0px 2px 5px -1px,\n    hsla(var(--pure-black), 0.3) 0 1px 3px -1px,\n    0 70px 40px -20px hsla(var(--pure-black), 0.2),\n    hsla(var(--pure-black), 0.2) 0 0 0 1px inset;\n  --round: 4rem;\n  --pure-black: 0, 0%, 0%;\n  --pure-white: 0, 0%, 100%;\n  --scale-x: calc(1.35 * var(--round));\n  --p: calc(calc(6.25 / 100) * var(--round));\n  --checked: calc(100% - calc(var(--round) + var(--p)));\n  --sz-marbles: calc(var(--w-switch) + calc(var(--p) * 2));\n  --h-switch: calc(var(--round) + calc(var(--p) * 2));\n  --w-switch: calc(calc(var(--round) * 2) + calc(var(--p) * 2));\n  --bg-switch: var(--pure-black);\n  --box: var(--pure-white);\n}\n\n.switch-wrap .switch-input {\n  display: none;\n  background: transparent none;\n  visibility: hidden;\n}\n\n.switch-label {\n  cursor: pointer;\n  user-select: none;\n  position: relative;\n  z-index: 20;\n  width: var(--w-switch);\n  height: var(--h-switch);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  outline: none;\n  background-color: hsl(var(--pure-white));\n  border-radius: 9999px;\n  border-width: 0px;\n  transition: all linear 300ms;\n  box-shadow: var(--shadow);\n  --shadow: hsla(var(--pure-black), 0.4) 0 2px 4px,\n    hsla(var(--pure-black), 0.3) 0 7px 13px -3px,\n    hsla(var(--pure-black), 0.25) -2px -5px 4px inset,\n    hsla(var(--pure-black), 0.2) 0 0 0 1px inset;\n}\n\n.switch-label::after {\n  position: absolute;\n  display: block;\n  content: \"\";\n  width: var(--round);\n  height: var(--round);\n  left: var(--p);\n  border-radius: 9999px;\n  background-color: hsl(0, 0%, 100%);\n  will-change: left, width, margin, padding;\n  box-shadow: var(--shadow);\n  transition: left 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275),\n    width 300ms ease, padding 300ms ease, margin 300ms ease,\n    background-color 300ms ease, box-shadow 300ms linear;\n}\n\n.switch-input + .switch-label:active::after {\n  width: var(--scale-x);\n  --shadow: hsla(var(--pure-black), 0.4) 0 2px 4px,\n    hsla(var(--pure-black), 0.3) 0 7px 13px -3px,\n    hsla(var(--pure-black), 0.25) 0px -2px 8px 6px inset,\n    hsla(var(--pure-black), 0.25) 0 0 0 1px inset;\n}\n\n.switch-input:checked + .switch-label {\n  --shadow: hsla(var(--pure-black), 0.4) 0 2px 4px,\n    hsla(var(--pure-black), 0.3) 0 7px 13px -3px,\n    hsla(var(--pure-black), 0.25) 2px -5px 4px inset,\n    hsla(var(--pure-black), 0.2) 0 0 0 1px inset;\n  --bg-switch: var(--pure-white);\n  --box: var(--pure-black);\n}\n\n.switch-input:checked + .switch-label::after {\n  background: white linear-gradient(-45deg, #f8acff 0%, #696eff 100%);\n  left: var(--checked);\n}\n\n.switch-input:checked + .switch-label:active::after {\n  margin-left: calc(calc(var(--checked) - var(--scale-x)) - var(--p));\n}\n\n.switch-marbles {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  border-radius: 9999px;\n}\n\n.switch-marbles::after {\n  height: var(--sz-marbles);\n  width: var(--sz-marbles);\n  z-index: 0;\n  content: \"\";\n  position: absolute;\n  border-radius: 9999px;\n}\n\n.switch-marbles::before {\n  content: \"\";\n  height: var(--sz-marbles);\n  width: var(--sz-marbles);\n  position: absolute;\n  border-radius: 9999px;\n  z-index: -1;\n  background-image: linear-gradient(-45deg, #f8acff 0%, #696eff);\n  filter: blur(20px);\n  opacity: var(0.7);\n  animation: rotate 4000ms linear running infinite;\n}\n\n@keyframes rotate {\n  to {\n    rotate: 360deg;\n  }\n}"
  },
  {
    "id": "uiverse-barisdogansutcu_tender-dingo-64",
    "title": "Tender Dingo",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "barisdogansutcu",
      "profileUrl": "https://uiverse.io/barisdogansutcu/tender-dingo-64"
    },
    "license": "MIT",
    "description": "Tender Dingo · toggle by barisdogansutcu",
    "tags": [
      "toggle",
      "complex",
      "switch",
      "heart",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<div class=\"love\">\n  <input id=\"switch\" type=\"checkbox\">\n  <label class=\"love-heart\" for=\"switch\">\n    <i class=\"left\"></i>\n    <i class=\"right\"></i>\n    <i class=\"bottom\"></i>\n    <div class=\"round\"></div>\n  </label>\n</div>",
    "css": "/* From Uiverse.io by barisdogansutcu - Tags: complex, switch, heart */\n.love-heart:before,#switch {\n display: none;\n}\n\n.love-heart, .love-heart::after {\n border-color: hsl(231deg 28% 86%);\n border: 1px solid;\n border-top-left-radius: 100px;\n border-top-right-radius: 100px;\n width: 10px;\n height: 8px;\n border-bottom: 0\n}\n\n.round {\n position: absolute;\n z-index: 1;\n width: 8px;\n height: 8px;\n background: hsl(0deg 0% 100%);\n box-shadow: rgb(0 0 0 / 24%) 0px 0px 4px 0px;\n border-radius: 100%;\n left: 0px;\n bottom: -1px;\n transition: all .5s ease;\n animation: check-animation2 .5s forwards;\n}\n\ninput:checked + label .round {\n transform: translate(0px, 0px);\n animation: check-animation .5s forwards;\n background-color: hsl(0deg 0% 100%);\n}\n\n@keyframes check-animation {\n 0% {\n  transform: translate(0px, 0px);\n }\n\n 50% {\n  transform: translate(0px, 7px);\n }\n\n 100% {\n  transform: translate(7px, 7px);\n }\n}\n\n@keyframes check-animation2 {\n 0% {\n  transform: translate(7px, 7px);\n }\n\n 50% {\n  transform: translate(0px, 7px);\n }\n\n 100% {\n  transform: translate(0px, 0px);\n }\n}\n\n.love-heart {\n box-sizing: border-box;\n position: relative;\n transform: rotate(-45deg) translate(-50%, -33px) scale(4);\n display: block;\n border-color: hsl(231deg 28% 86%);\n cursor: pointer;\n top: 0;\n}\n\ninput:checked + .love-heart, input:checked + .love-heart::after, input:checked + .love-heart .bottom {\n border-color: hsl(347deg 81% 61%);\n box-shadow: inset 6px -5px 0px 2px hsl(347deg 99% 72%);\n}\n\n.love-heart::after, .love-heart .bottom {\n content: \"\";\n display: block;\n box-sizing: border-box;\n position: absolute;\n border-color: hsl(231deg 28% 86%);\n}\n\n.love-heart::after {\n right: -9px;\n transform: rotate(90deg);\n top: 7px;\n}\n\n.love-heart .bottom {\n width: 11px;\n height: 11px;\n border-left: 1px solid;\n border-bottom: 1px solid;\n border-color: hsl(231deg 28% 86%);\n left: -1px;\n top: 5px;\n border-radius: 0px 0px 0px 5px;\n}"
  },
  {
    "id": "uiverse-praashoo7_nasty-seahorse-26",
    "title": "Nasty Seahorse",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "Praashoo7",
      "profileUrl": "https://uiverse.io/Praashoo7/nasty-seahorse-26"
    },
    "license": "MIT",
    "description": "Nasty Seahorse · toggle by Praashoo7",
    "tags": [
      "toggle",
      "switch",
      "torch",
      "flashlight",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<label class=\"switch\">\n  <input class=\"chk_85\" type=\"checkbox\">\n  <span class=\"slider\">\n    <svg viewBox=\"0 0 100 100\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" class=\"torch\">\n    <path d=\"M 63.85,54.65 Q 62.77,54.13 61.88,53.31 Q 54.13,46.12 46.31,37.69 Q 43.88,35.06 44.29,31.53 Q 44.51,29.56 46.54,25.87 Q 56.15,8.39 59.06,3.56 Q 60.59,1.03 63.83,2.41 Q 67.73,4.07 71.11,6.55 Q 72.85,7.82 77.51,11.86 Q 89.11,21.92 96.94,34.06 Q 100.09,38.95 95.24,41.73 Q 83.77,48.31 72.16,54.64 Q 68.24,56.77 63.85,54.65 Z\" fill=\"#ffffff\"></path>\n    <path d=\"M 14.03,66.29 Q 27.40,51.66 40.57,37.33 A 0.54,0.54 52.1 0 1 41.44,37.44 Q 43.25,40.72 45.58,43.04 Q 47.66,45.11 47.71,45.17 Q 54.67,52.58 62.60,58.93 A 0.44,0.43 43.0 0 1 62.63,59.59 Q 42.87,77.87 22.77,95.78 Q 20.75,97.58 19.20,97.93 Q 16.72,98.49 14.81,96.94 Q 6.88,90.47 2.81,84.94 Q 1.47,83.11 2.03,80.84 Q 2.37,79.43 4.04,77.51 Q 8.97,71.84 14.03,66.29 ZM 42.9269,57.1766 A 3.76 3.76 0.0 0 0 37.6102,57.0930 L 33.1721,61.3938 A 3.76 3.76 0.0 0 0 33.0886,66.7106 L 33.3531,66.9834 A 3.76 3.76 0.0 0 0 38.6698,67.0670 L 43.1079,62.7662 A 3.76 3.76 0.0 0 0 43.1914,57.4494 L 42.9269,57.1766 Z\" fill=\"#ffffff\"></path>\n    </svg>\n    <svg class=\"b\" width=\"100%\" height=\"50%\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M29 20L31 22\" class=\"bling_85\"></path>\n    <path d=\"M31.5 15H34.5\" class=\"bling_85\"></path>\n    <path d=\"M29 10L31 8\" class=\"bling_85\"></path>\n    </svg>\n  </span>\n</label>",
    "css": "/* From Uiverse.io by Praashoo7 - Tags: switch, torch, flashlight */\n/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 3.8em;\n  height: 3.8em;\n}\n\n.torch {\n  margin-top: 0.9em;\n  margin-left: 0.95em;\n  width: 30px;\n  height: 30px;\n  transform: rotate(-45deg);\n}\n\n.slider .b {\n  position: relative;\n  top: -3.3em;\n  transform: rotate(270deg);\n}\n\n.slider .bling_85 {\n  stroke: #fff;\n  stroke-width: 2.5;\n  stroke-linecap: round;\n  stroke-dasharray: 3;\n  stroke-dashoffset: 15;\n  transition: all 0.3s ease;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  transition: .4s;\n  border-radius: 50%;\n  background-color: rgba(116, 115, 115, 0.2);\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n\n.chk_85:checked + .slider {\n  animation: tap 0.3s linear forwards;\n}\n\n.chk_85:checked + .slider .bling_85 {\n  animation: bling_8561328 0.3s linear forwards;\n  animation-delay: 0.2s;\n}\n\n.chk_85:checked + .slider {\n  background-color: #FFA133;\n}\n\n.chk_85:focus + .slider {\n  box-shadow: 0 0 1px #FFA133;\n}\n\n@keyframes bling_8561328 {\n  50% {\n    stroke-dasharray: 3;\n    stroke-dashoffset: 12;\n  }\n\n  100% {\n    stroke-dasharray: 3;\n    stroke-dashoffset: 9;\n  }\n}\n\n@keyframes tap {\n  50% {\n    scale: 0.9;\n  }\n\n  100% {\n    scale: 1;\n  }\n}"
  },
  {
    "id": "uiverse-andrew-demchenk0_honest-stingray-90",
    "title": "Honest Stingray",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "andrew-demchenk0",
      "profileUrl": "https://uiverse.io/andrew-demchenk0/honest-stingray-90"
    },
    "license": "MIT",
    "description": "Honest Stingray · toggle by andrew-demchenk0",
    "tags": [
      "toggle",
      "switch",
      "dark",
      "light",
      "theme-switch",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 400,
    "accentColor": null,
    "html": "<label class=\"switch\">\n  <span class=\"sun\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill=\"#ffd43b\"><circle r=\"5\" cy=\"12\" cx=\"12\"></circle><path d=\"m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z\"></path></g></svg></span>\n  <span class=\"moon\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><path d=\"m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z\"></path></svg></span>   \n  <input type=\"checkbox\" class=\"input\">\n  <span class=\"slider\"></span>\n</label>",
    "css": "/* From Uiverse.io by andrew-demchenk0 - Tags: switch, dark, light, theme-switch */\n.switch {\n  font-size: 17px;\n  position: relative;\n  display: inline-block;\n  width: 64px;\n  height: 34px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #73C0FC;\n  transition: .4s;\n  border-radius: 30px;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 30px;\n  width: 30px;\n  border-radius: 20px;\n  left: 2px;\n  bottom: 2px;\n  z-index: 2;\n  background-color: #e8e8e8;\n  transition: .4s;\n}\n\n.sun svg {\n  position: absolute;\n  top: 6px;\n  left: 36px;\n  z-index: 1;\n  width: 24px;\n  height: 24px;\n}\n\n.moon svg {\n  fill: #73C0FC;\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  z-index: 1;\n  width: 24px;\n  height: 24px;\n}\n\n/* .switch:hover */.sun svg {\n  animation: rotate 15s linear infinite;\n}\n\n@keyframes rotate {\n \n  0% {\n    transform: rotate(0);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/* .switch:hover */.moon svg {\n  animation: tilt 5s linear infinite;\n}\n\n@keyframes tilt {\n \n  0% {\n    transform: rotate(0deg);\n  }\n\n  25% {\n    transform: rotate(-10deg);\n  }\n\n  75% {\n    transform: rotate(10deg);\n  }\n\n  100% {\n    transform: rotate(0deg);\n  }\n}\n\n.input:checked + .slider {\n  background-color: #183153;\n}\n\n.input:focus + .slider {\n  box-shadow: 0 0 1px #183153;\n}\n\n.input:checked + .slider:before {\n  transform: translateX(30px);\n}"
  },
  {
    "id": "uiverse-nawsome_short-dolphin-98",
    "title": "Short Dolphin",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "Nawsome",
      "profileUrl": "https://uiverse.io/Nawsome/short-dolphin-98"
    },
    "license": "MIT",
    "description": "Short Dolphin · toggle by Nawsome",
    "tags": [
      "toggle",
      "skeuomorphism",
      "checkbox",
      "squishy",
      "bubble",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 4000,
    "accentColor": null,
    "html": "<label><input value=\"on\" name=\"dummy\" type=\"checkbox\" class=\"bubble\"></label>",
    "css": "/* From Uiverse.io by Nawsome - Tags: skeuomorphism, checkbox, squishy, bubble */\nlabel, .bubble {\n  display: block;\n  -webkit-tap-highlight-color: transparent;\n}\n\nlabel {\n  animation: float74 4s ease-in-out infinite;\n}\n\n.bubble, .bubble:before, .bubble:after {\n  transition-duration: 0.2s;\n}\n\n.bubble, .bubble:after {\n  border-radius: 50%;\n}\n\n.bubble {\n  background-image: radial-gradient(8% 8% at 22% 28%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),\n\t\tradial-gradient(8% 8% at 23% 27%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),\n\t\tradial-gradient(8% 8% at 24% 26%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),\n\t\tradial-gradient(8% 8% at 25% 25%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),\n\t\tradial-gradient(8% 8% at 26% 24%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),\n\t\tradial-gradient(8% 8% at 27% 23%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),\n\t\tradial-gradient(8% 8% at 28% 22%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%);\n  box-shadow: 0 -0.06em 0.1em hsl(0,90%,100%) inset,\n\t\t0 -0.15em 0.4em hsl(0,90%,45%) inset,\n\t\t0 0.05em 0.05em hsl(0,90%,45%) inset,\n\t\t0.05em 0 0.1em hsl(0,90%,100%) inset,\n\t\t-0.05em 0 0.1em hsl(0,90%,100%) inset,\n\t\t0 0.1em 0.4em hsl(0,90%,60%) inset;\n  cursor: pointer;\n  position: relative;\n  width: 3em;\n  height: 3em;\n  transform-style: preserve-3d;\n  transition-property: box-shadow, transform, width, height;\n  transition-timing-function: ease-in-out, ease-in-out, var(--bubbleTiming), var(--bubbleTiming);\n  will-change: transform;\n  -webkit-appearance: none;\n  appearance: none;\n  z-index: 0;\n}\n\n.bubble:before, .bubble:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  transition-timing-function: var(--bubbleTiming);\n}\n\n.bubble:before {\n  border-radius: 0.75em;\n  box-shadow: 0 0 0 0.5em hsl(0,0%,100%) inset;\n  filter: drop-shadow(0.6em 0.6em 4px hsla(0,0%,0%,0.2));\n  top: 50%;\n  left: 50%;\n  width: 1.5em;\n  height: 1.5em;\n  transform: translate3d(-50%,-50%,-1px);\n  z-index: -1;\n}\n\n.bubble:after {\n  background: radial-gradient(100% 100% at center,hsla(0,0%,0%,0) 35%,hsla(0,0%,0%,0.2) 48%,hsla(0,0%,0%,0) 50%);\n  filter: blur(4px);\n  top: 0.6em;\n  left: 0.6em;\n  width: 100%;\n  height: 100%;\n  transform: translate3d(0,0,-1px);\n  z-index: -2;\n}\n\n.bubble:focus, .bubble:hover {\n  transform: scale(1.1);\n  outline: none;\n}\n\n.bubble:focus:active, .bubble:hover:active {\n  width: 3.6em;\n  height: 2.4em;\n}\n\n.bubble:focus:before, .bubble:hover:before {\n  filter: drop-shadow(0.75em 0.75em 4px hsla(0,0%,0%,0.2));\n}\n\n.bubble:focus:after, .bubble:hover:after {\n  transform: translate3d(0.15em,0.15em,-1px);\n}\n\n.bubble:checked {\n  box-shadow: 0 -0.06em 0.1em hsl(120,90%,100%) inset,\n\t\t0 -0.15em 0.4em hsl(120,90%,45%) inset,\n\t\t0 0.05em 0.05em hsl(120,90%,45%) inset,\n\t\t0.05em 0 0.1em hsl(120,90%,100%) inset,\n\t\t-0.05em 0 0.1em hsl(120,90%,100%) inset,\n\t\t0 0.1em 0.4em hsl(120,90%,60%) inset;\n}\n\n.bubble:checked:before {\n  border-radius: 0.25em;\n  width: 0.5em;\n}\n/* Reduced motion */\n@media (prefers-reduced-motion: reduce) {\n  label {\n    animation: none;\n  }\n\n  .bubble, .bubble:before, .bubble:after {\n    transition-duration: 0s;\n  }\n\n  .bubble:focus, .bubble:hover {\n    transform: scale(1);\n  }\n\n  .bubble:focus:active, .bubble:hover:active {\n    width: 3em;\n    height: 3em;\n  }\n\n  .bubble:focus:before, .bubble:hover:before {\n    filter: drop-shadow(0.6em 0.6em 4px hsla(0,0%,0%,0.2));\n  }\n\n  .bubble:focus:after, .bubble:hover:after {\n    transform: translate3d(0,0,-1px);\n  }\n}\n/* Animations */\n@keyframes float74 {\n  from, to {\n    transform: translate(0,3%);\n  }\n\n  25% {\n    transform: translate(-3%,0);\n  }\n\n  50% {\n    transform: translate(0,-3%);\n  }\n\n  75% {\n    transform: translate(3%,0);\n  }\n}"
  },
  {
    "id": "uiverse-yaya12085_lovely-firefox-94",
    "title": "Lovely Firefox",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "Yaya12085",
      "profileUrl": "https://uiverse.io/Yaya12085/lovely-firefox-94"
    },
    "license": "MIT",
    "description": "Lovely Firefox · toggle by Yaya12085",
    "tags": [
      "toggle",
      "neumorphism",
      "skeuomorphism",
      "icon",
      "3d",
      "button",
      "switch",
      "realistic"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"container\">\n  <input id=\"checkbox\" type=\"checkbox\">\n   <label class=\"button\" for=\"checkbox\">\n    <span class=\"icon\">\n     <svg viewBox=\"0 0 24 24\" fill=\"\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <path d=\"M17.35 12.7901C17.1686 12.7907 16.9935 12.7229 16.86 12.6001C15.5322 11.411 13.8124 10.7534 12.03 10.7534C10.2476 10.7534 8.52779 11.411 7.19999 12.6001C7.12649 12.6658 7.04075 12.7164 6.94767 12.749C6.85459 12.7816 6.756 12.7955 6.65755 12.7899C6.55909 12.7843 6.4627 12.7594 6.37389 12.7165C6.28508 12.6736 6.2056 12.6137 6.13999 12.5401C6.0109 12.3892 5.94595 12.1939 5.95904 11.9958C5.97212 11.7977 6.06219 11.6126 6.20999 11.4801C7.80752 10.0423 9.88072 9.2467 12.03 9.2467C14.1793 9.2467 16.2525 10.0423 17.85 11.4801C17.9978 11.6126 18.0879 11.7977 18.1009 11.9958C18.114 12.1939 18.0491 12.3892 17.92 12.5401C17.8469 12.6181 17.7586 12.6806 17.6606 12.7236C17.5627 12.7665 17.457 12.7892 17.35 12.7901Z\" fill=\"\"></path> <path d=\"M20 10C19.811 9.99907 19.6292 9.92777 19.49 9.80002C17.4685 7.87306 14.7828 6.79812 11.99 6.79812C9.19719 6.79812 6.51153 7.87306 4.48999 9.80002C4.42116 9.88186 4.33563 9.94804 4.23912 9.99411C4.14262 10.0402 4.03738 10.0651 3.93046 10.0672C3.82354 10.0692 3.71742 10.0484 3.61921 10.0061C3.521 9.96375 3.43298 9.90092 3.36105 9.82179C3.28911 9.74267 3.23493 9.64907 3.20214 9.54729C3.16934 9.4455 3.15869 9.33788 3.17091 9.23164C3.18312 9.1254 3.21791 9.023 3.27294 8.93131C3.32798 8.83962 3.40198 8.76076 3.48999 8.70002C5.78577 6.52533 8.82774 5.31329 11.99 5.31329C15.1522 5.31329 18.1942 6.52533 20.49 8.70002C20.5994 8.80134 20.6761 8.93298 20.7103 9.07811C20.7446 9.22324 20.7348 9.37527 20.6822 9.5148C20.6296 9.65433 20.5366 9.77502 20.4151 9.86145C20.2936 9.94787 20.1491 9.99612 20 10Z\" fill=\"\"></path> <path d=\"M9.38 15.64C9.26356 15.64 9.14873 15.6129 9.04459 15.5608C8.94044 15.5088 8.84986 15.4332 8.78 15.34C8.7196 15.2617 8.67551 15.1721 8.65032 15.0765C8.62513 14.9809 8.61936 14.8812 8.63334 14.7834C8.64732 14.6855 8.68078 14.5914 8.73173 14.5067C8.78268 14.4219 8.8501 14.3483 8.93 14.29C9.81277 13.6145 10.8934 13.2485 12.005 13.2485C13.1166 13.2485 14.1972 13.6145 15.08 14.29C15.1588 14.3491 15.2252 14.4232 15.2754 14.5079C15.3255 14.5926 15.3585 14.6865 15.3725 14.784C15.3864 14.8815 15.381 14.9807 15.3565 15.0762C15.3321 15.1716 15.2891 15.2612 15.23 15.34C15.1091 15.497 14.9316 15.6005 14.7355 15.6285C14.5394 15.6565 14.34 15.6068 14.18 15.49C13.5548 15.014 12.7908 14.7561 12.005 14.7561C11.2192 14.7561 10.4551 15.014 9.83 15.49C9.69921 15.5855 9.54193 15.6379 9.38 15.64Z\" fill=\"\"></path> <path d=\"M12 18.75C11.8011 18.75 11.6103 18.671 11.4697 18.5303C11.329 18.3897 11.25 18.1989 11.25 18C11.25 17.8011 11.329 17.6103 11.4697 17.4697C11.6103 17.329 11.8011 17.25 12 17.25C12.1989 17.25 12.3897 17.329 12.5303 17.4697C12.671 17.6103 12.75 17.8011 12.75 18C12.75 18.1989 12.671 18.3897 12.5303 18.5303C12.3897 18.671 12.1989 18.75 12 18.75Z\" fill=\"\"></path> </g></svg> \n   </span> \n   </label> \n</div>",
    "css": "/* From Uiverse.io by Yaya12085 - Tags: neumorphism, skeuomorphism, icon, 3d, button, switch, realistic, toggle */\n.container {\n  width: 7em;\n  height: 7em;\n  position: relative;\n}\n\n.button {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  border: 4px solid #090909;\n  background-color: transparent;\n  background-image: linear-gradient(145deg, #171717, #444245);\n  box-sizing: border-box;\n  box-shadow: inset 2px 2px 0 #7d7c7e, inset -2px -2px 0px #1c1c1c;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.container input {\n  display: none;\n}\n\n.button::before {\n  position: absolute;\n  content: \"\";\n  width: 7.25em;\n  height: 7.25em;\n  border-radius: inherit;\n  background-color: transparent;\n  background-image: linear-gradient(145deg, #262626, #606060);\n  z-index: -1;\n  box-shadow: 11px 11px 22px #141414, -11px -11px 22px #525252;\n}\n\n.button .icon {\n  width: 60px;\n  height: 60px;\n  display: inline-block;\n}\n\n.button .icon svg {\n  height: 100%;\n  width: 100%;\n  fill: #a5a5a5;\n}\n\n.container  input:checked + .button {\n  box-shadow: inset -2px -2px 0 #5e5e5e,inset 2px 2px 0 #1c1c1c;\n  border: 4px solid rgba(77, 124, 255, 0.281);\n  animation: animeBorder .3s linear alternate-reverse infinite;\n}\n\n.container input:checked + .button .icon svg {\n  fill: rgb(77, 124, 255);\n  animation: animeFill .3s linear alternate-reverse infinite;\n}\n\n@keyframes animeFill {\n  to {\n    fill: rgba(77, 124, 255, 0.642);\n  }\n}\n\n@keyframes animeBorder {\n  to {\n    border-color: rgba(77, 124, 255, 0.137);\n  }\n}"
  },
  {
    "id": "uiverse-nawsome_empty-snail-69",
    "title": "Empty Snail",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "Nawsome",
      "profileUrl": "https://uiverse.io/Nawsome/empty-snail-69"
    },
    "license": "MIT",
    "description": "Empty Snail · toggle by Nawsome",
    "tags": [
      "toggle",
      "skeuomorphism",
      "switch",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<label class=\"switch\">\n  <input type=\"checkbox\" checked=\"checked\">\n  <div class=\"button\">\n    <div class=\"light\"></div>\n    <div class=\"dots\"></div>\n    <div class=\"characters\"></div>\n    <div class=\"shine\"></div>\n    <div class=\"shadow\"></div>\n  </div>\n</label>",
    "css": "/* From Uiverse.io by Nawsome - Tags: skeuomorphism, switch */\n.switch {\n  display: block;\n  background-color: black;\n  width: 150px;\n  height: 195px;\n  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2), 0 0 1px 2px black, inset 0 2px 2px -2px white, inset 0 0 2px 15px #47434c, inset 0 0 2px 22px black;\n  border-radius: 5px;\n  padding: 20px;\n  perspective: 700px;\n}\n\n.switch input {\n  display: none;\n}\n\n.switch input:checked + .button {\n  transform: translateZ(20px) rotateX(25deg);\n  box-shadow: 0 -10px 20px #ff1818;\n}\n\n.switch input:checked + .button .light {\n  animation: flicker 0.2s infinite 0.3s;\n}\n\n.switch input:checked + .button .shine {\n  opacity: 1;\n}\n\n.switch input:checked + .button .shadow {\n  opacity: 0;\n}\n\n.switch .button {\n  display: block;\n  transition: all 0.3s cubic-bezier(1, 0, 1, 1);\n  transform-origin: center center -20px;\n  transform: translateZ(20px) rotateX(-25deg);\n  transform-style: preserve-3d;\n  background-color: #9b0621;\n  height: 100%;\n  position: relative;\n  cursor: pointer;\n  background: linear-gradient(#980000 0%, #6f0000 30%, #6f0000 70%, #980000 100%);\n  background-repeat: no-repeat;\n}\n\n.switch .button::before {\n  content: \"\";\n  background: linear-gradient(rgba(255, 255, 255, 0.8) 10%, rgba(255, 255, 255, 0.3) 30%, #650000 75%, #320000) 50% 50%/97% 97%, #b10000;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 50px;\n  transform-origin: top;\n  transform: rotateX(-90deg);\n  position: absolute;\n  top: 0;\n}\n\n.switch .button::after {\n  content: \"\";\n  background-image: linear-gradient(#650000, #320000);\n  width: 100%;\n  height: 50px;\n  transform-origin: top;\n  transform: translateY(50px) rotateX(-90deg);\n  position: absolute;\n  bottom: 0;\n  box-shadow: 0 50px 8px 0px black, 0 80px 20px 0px rgba(0, 0, 0, 0.5);\n}\n\n.switch .light {\n  opacity: 0;\n  animation: light-off 1s;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-image: radial-gradient(#ffc97e, #ff1818 40%, transparent 70%);\n}\n\n.switch .dots {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-image: radial-gradient(transparent 30%, rgba(101, 0, 0, 0.7) 70%);\n  background-size: 10px 10px;\n}\n\n.switch .characters {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(white, white) 50% 20%/5% 20%, radial-gradient(circle, transparent 50%, white 52%, white 70%, transparent 72%) 50% 80%/33% 25%;\n  background-repeat: no-repeat;\n}\n\n.switch .shine {\n  transition: all 0.3s cubic-bezier(1, 0, 1, 1);\n  opacity: 0.3;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(white, transparent 3%) 50% 50%/97% 97%, linear-gradient(rgba(255, 255, 255, 0.5), transparent 50%, transparent 80%, rgba(255, 255, 255, 0.5)) 50% 50%/97% 97%;\n  background-repeat: no-repeat;\n}\n\n.switch .shadow {\n  transition: all 0.3s cubic-bezier(1, 0, 1, 1);\n  opacity: 1;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(transparent 70%, rgba(0, 0, 0, 0.8));\n  background-repeat: no-repeat;\n}\n\n@keyframes flicker {\n  0% {\n    opacity: 1;\n  }\n\n  80% {\n    opacity: 0.8;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes light-off {\n  0% {\n    opacity: 1;\n  }\n\n  80% {\n    opacity: 0;\n  }\n}"
  },
  {
    "id": "uiverse-nawsome_silent-owl-45",
    "title": "Silent Owl",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "Nawsome",
      "profileUrl": "https://uiverse.io/Nawsome/silent-owl-45"
    },
    "license": "MIT",
    "description": "Silent Owl · toggle by Nawsome",
    "tags": [
      "toggle",
      "switch",
      "plane",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 600,
    "accentColor": null,
    "html": "<label class=\"plane-switch\">\n    <input type=\"checkbox\">\n    <div>\n        <div>\n            <svg viewBox=\"0 0 13 13\">\n                <path d=\"M1.55989957,5.41666667 L5.51582215,5.41666667 L4.47015462,0.108333333 L4.47015462,0.108333333 C4.47015462,0.0634601974 4.49708054,0.0249592654 4.5354546,0.00851337035 L4.57707145,0 L5.36229752,0 C5.43359776,0 5.50087375,0.028779451 5.55026392,0.0782711996 L5.59317877,0.134368264 L7.13659662,2.81558333 L8.29565964,2.81666667 C8.53185377,2.81666667 8.72332694,3.01067661 8.72332694,3.25 C8.72332694,3.48932339 8.53185377,3.68333333 8.29565964,3.68333333 L7.63589819,3.68225 L8.63450135,5.41666667 L11.9308317,5.41666667 C12.5213171,5.41666667 13,5.90169152 13,6.5 C13,7.09830848 12.5213171,7.58333333 11.9308317,7.58333333 L8.63450135,7.58333333 L7.63589819,9.31666667 L8.29565964,9.31666667 C8.53185377,9.31666667 8.72332694,9.51067661 8.72332694,9.75 C8.72332694,9.98932339 8.53185377,10.1833333 8.29565964,10.1833333 L7.13659662,10.1833333 L5.59317877,12.8656317 C5.55725264,12.9280353 5.49882018,12.9724157 5.43174295,12.9907056 L5.36229752,13 L4.57707145,13 L4.55610333,12.9978962 C4.51267695,12.9890959 4.48069792,12.9547924 4.47230803,12.9134397 L4.47223088,12.8704208 L5.51582215,7.58333333 L1.55989957,7.58333333 L0.891288881,8.55114605 C0.853775374,8.60544678 0.798421006,8.64327676 0.73629202,8.65879796 L0.672314689,8.66666667 L0.106844414,8.66666667 L0.0715243949,8.66058466 L0.0715243949,8.66058466 C0.0297243066,8.6457608 0.00275502199,8.60729104 0,8.5651586 L0.00593007386,8.52254537 L0.580855011,6.85813984 C0.64492547,6.67265611 0.6577034,6.47392717 0.619193545,6.28316421 L0.580694768,6.14191703 L0.00601851064,4.48064746 C0.00203480725,4.4691314 0,4.45701613 0,4.44481314 C0,4.39994001 0.0269259152,4.36143908 0.0652999725,4.34499318 L0.106916826,4.33647981 L0.672546853,4.33647981 C0.737865848,4.33647981 0.80011301,4.36066329 0.848265401,4.40322477 L0.89131128,4.45169723 L1.55989957,5.41666667 Z\" fill=\"currentColor\"></path>\n            </svg>\n        </div>\n        <span class=\"street-middle\"></span>\n        <span class=\"cloud\"></span>\n        <span class=\"cloud two\"></span>\n    </div>\n</label>",
    "css": "/* From Uiverse.io by Nawsome - Tags: switch, plane */\n.plane-switch {\n  --dot: #fff;\n  --street: #6B6D76;\n  --street-line: #A8AAB4;\n  --street-line-mid: #C0C2C8;\n  --sky-1: #60A7FA;\n  --sky-2: #2F8EFC;\n  --light-1: rgba(255, 233, 0, 1);\n  --light-2: rgba(255, 233, 0, .3);\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.plane-switch input {\n  display: none;\n}\n\n.plane-switch input + div {\n  -webkit-mask-image: -webkit-radial-gradient(white, black);\n  position: relative;\n  overflow: hidden;\n  width: 50px;\n  height: 25px;\n  padding: 1px;\n  border-radius: 13px;\n  background: linear-gradient(90deg, var(--street) 0%, var(--street) 25%, var(--sky-1) 75%, var(--sky-2) 100%) left var(--p, 0%) top 0;\n  background-position-x: var(--p, 0%);\n  background-size: 400% auto;\n  transition: background-position 0.6s;\n}\n\n.plane-switch input + div:before, .plane-switch input + div:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  transform: translateX(var(--s, 0));\n  transition: transform 0.3s;\n}\n\n.plane-switch input + div:before {\n  width: 42px;\n  right: 2px;\n  top: 4px;\n  height: 1px;\n  background: var(--street-line);\n  box-shadow: 0 16px 0 0 var(--street-line);\n}\n\n.plane-switch input + div:after {\n  width: 2px;\n  height: 2px;\n  border-radius: 50%;\n  left: 23px;\n  top: 1px;\n  -webkit-animation: lights2 2s linear infinite;\n  animation: lights2 2s linear infinite;\n  box-shadow: inset 0 0 0 2px var(--light-1), 0 21px 0 var(--light-1), 8px 0 0 var(--light-2), 8px 21px 0 var(--light-2), 16px 0 0 var(--light-2), 16px 21px 0 var(--light-2);\n}\n\n.plane-switch input + div span {\n  display: block;\n  position: absolute;\n}\n\n.plane-switch input + div span.street-middle {\n  top: 12px;\n  left: 21px;\n  width: 3px;\n  height: 1px;\n  transform: translateX(var(--s, 0));\n  background: var(--street-line-mid);\n  box-shadow: 5px 0 0 var(--street-line-mid), 10px 0 0 var(--street-line-mid), 15px 0 0 var(--street-line-mid), 20px 0 0 var(--street-line-mid), 25px 0 0 var(--street-line-mid);\n  transition: transform 0.3s;\n}\n\n.plane-switch input + div span.cloud {\n  width: 12px;\n  height: 4px;\n  border-radius: 2px;\n  background: #fff;\n  position: absolute;\n  top: var(--ct, 8px);\n  left: 100%;\n  opacity: var(--co, 0);\n  transition: opacity 0.3s;\n  -webkit-animation: clouds2 2s linear infinite var(--cd, 0s);\n  animation: clouds2 2s linear infinite var(--cd, 0s);\n}\n\n.plane-switch input + div span.cloud:before, .plane-switch input + div span.cloud:after {\n  content: \"\";\n  position: absolute;\n  transform: translateX(var(--cx, 0));\n  border-radius: 50%;\n  width: var(--cs, 5px);\n  height: var(--cs, 5px);\n  background: #fff;\n  bottom: 1px;\n  left: 1px;\n}\n\n.plane-switch input + div span.cloud:after {\n  --cs: 6px;\n  --cx: 4px;\n}\n\n.plane-switch input + div span.cloud.two {\n  --ct: 20px;\n  --cd: 1s;\n  opacity: var(--co-2, 0);\n}\n\n.plane-switch input + div div {\n  display: table;\n  position: relative;\n  z-index: 1;\n  padding: 5px;\n  border-radius: 50%;\n  background: var(--dot);\n  transform: translateX(var(--x, 0));\n  transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.35, 1.2);\n}\n\n.plane-switch input + div div svg {\n  width: 13px;\n  height: 13px;\n  display: block;\n  color: var(--c, var(--street));\n  transition: color 0.6s;\n}\n\n.plane-switch input:checked + div {\n  --p: 100%;\n  --x: 25px;\n  --s: -50px;\n  --c: var(--sky-2);\n  --co: .8;\n  --co-2: .6;\n}\n\n@keyframes lights2 {\n  20%, 30% {\n    box-shadow: inset 0 0 0 2px var(--light-2), 0 21px 0 var(--light-2), 8px 0 0 var(--light-1), 8px 21px 0 var(--light-1), 16px 0 0 var(--light-2), 16px 21px 0 var(--light-2);\n  }\n\n  55%, 65% {\n    box-shadow: inset 0 0 0 2px var(--light-2), 0 21px 0 var(--light-2), 8px 0 0 var(--light-2), 8px 21px 0 var(--light-2), 16px 0 0 var(--light-1), 16px 21px 0 var(--light-1);\n  }\n\n  90%, 100% {\n    box-shadow: inset 0 0 0 2px var(--light-1), 0 21px 0 var(--light-1), 8px 0 0 var(--light-2), 8px 21px 0 var(--light-2), 16px 0 0 var(--light-2), 16px 21px 0 var(--light-2);\n  }\n}\n\n@keyframes clouds2 {\n  97% {\n    transform: translateX(-72px);\n    visibility: visible;\n  }\n\n  98%, 100% {\n    visibility: hidden;\n  }\n\n  99% {\n    transform: translateX(-72px);\n  }\n\n  100% {\n    transform: translateX(0);\n  }\n}"
  },
  {
    "id": "uiverse-cssbuttons-io_short-shrimp-54",
    "title": "Short Shrimp",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "cssbuttons-io",
      "profileUrl": "https://uiverse.io/cssbuttons-io/short-shrimp-54"
    },
    "license": "MIT",
    "description": "Short Shrimp · checkbox by cssbuttons-io",
    "tags": [
      "checkbox",
      "squishy",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 100,
    "accentColor": null,
    "html": "<div class=\"cntr\">\n  <input checked=\"\" type=\"checkbox\" id=\"cbx\" class=\"hidden-xs-up\">\n  <label for=\"cbx\" class=\"cbx\"></label>\n</div>",
    "css": "/* From Uiverse.io by cssbuttons-io - Tags: checkbox, squishy */\n.cbx {\n position: relative;\n top: 1px;\n width: 27px;\n height: 27px;\n border: 1px solid #c8ccd4;\n border-radius: 3px;\n vertical-align: middle;\n transition: background 0.1s ease;\n cursor: pointer;\n display: block;\n}\n\n.cbx:after {\n content: '';\n position: absolute;\n top: 2px;\n left: 8px;\n width: 7px;\n height: 14px;\n opacity: 0;\n transform: rotate(45deg) scale(0);\n border-right: 2px solid #fff;\n border-bottom: 2px solid #fff;\n transition: all 0.3s ease;\n transition-delay: 0.15s;\n}\n\n.lbl {\n margin-left: 5px;\n vertical-align: middle;\n cursor: pointer;\n}\n\n#cbx:checked ~ .cbx {\n border-color: transparent;\n background: #6871f1;\n animation: jelly 0.6s ease;\n}\n\n#cbx:checked ~ .cbx:after {\n opacity: 1;\n transform: rotate(45deg) scale(1);\n}\n\n.cntr {\n position: relative;\n}\n\n@keyframes jelly {\n from {\n  transform: scale(1, 1);\n }\n\n 30% {\n  transform: scale(1.25, 0.75);\n }\n\n 40% {\n  transform: scale(0.75, 1.25);\n }\n\n 50% {\n  transform: scale(1.15, 0.85);\n }\n\n 65% {\n  transform: scale(0.95, 1.05);\n }\n\n 75% {\n  transform: scale(1.05, 0.95);\n }\n\n to {\n  transform: scale(1, 1);\n }\n}\n\n.hidden-xs-up {\n display: none!important;\n}"
  },
  {
    "id": "uiverse-ozgeozkaraa01_curly-rabbit-54",
    "title": "Curly Rabbit",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "ozgeozkaraa01",
      "profileUrl": "https://uiverse.io/ozgeozkaraa01/curly-rabbit-54"
    },
    "license": "MIT",
    "description": "Curly Rabbit · checkbox by ozgeozkaraa01",
    "tags": [
      "checkbox",
      "click animation",
      "cool checkbox",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"cntr\">\n  <input class=\"hidden-xs-up\" id=\"cbx\" type=\"checkbox\" checked=\"\">\n  <label class=\"cbx\" for=\"cbx\"></label>\n</div>",
    "css": "/* From Uiverse.io by ozgeozkaraa01 - Tags: checkbox, click animation, cool checkbox */\n.cbx {\n  position: relative;\n  top: 1px;\n  width: 27px;\n  height: 27px;\n  border: 1px solid #475569;\n  border-radius: 10px;\n  transition: background 0.2s ease;\n  cursor: pointer;\n  display: block;\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n}\n\n.cbx:after {\n  content: '';\n  position: absolute;\n  top: 2px;\n  left: 8px;\n  width: 7px;\n  height: 14px;\n  opacity: 0;\n  transform: rotate(45deg) scale(0);\n  border-right: 2px solid #fff;\n  border-bottom: 2px solid #fff;\n  transition: all 0.3s ease;\n  transition-delay: 0.15s;\n}\n\n#cbx:checked ~ .cbx {\n  border-color: transparent;\n  background: #ec4899;\n  animation: jelly 0.4s ease;\n}\n\n#cbx:checked ~ .cbx:after {\n  opacity: 1;\n  transform: rotate(45deg) scale(1);\n}\n\n.cntr {\n  position: relative;\n}\n\n@keyframes jelly {\n  from {\n    transform: scale(1, 1);\n  }\n\n  20% {\n    transform: scale(1.3, 0.7);\n  }\n\n  40% {\n    transform: scale(0.7, 1.3);\n  }\n\n  60% {\n    transform: scale(1.1, 0.9);\n  }\n\n  80% {\n    transform: scale(0.9, 1.1);\n  }\n\n  to {\n    transform: scale(1, 1);\n  }\n}\n\n.hidden-xs-up {\n  display: none!important;\n}"
  },
  {
    "id": "uiverse-adamgiebl_proud-donkey-24",
    "title": "Proud Donkey",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "adamgiebl",
      "profileUrl": "https://uiverse.io/adamgiebl/proud-donkey-24"
    },
    "license": "MIT",
    "description": "Proud Donkey · checkbox by adamgiebl",
    "tags": [
      "checkbox",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<label class=\"container\">\n  <input type=\"checkbox\" checked=\"checked\">\n  <div class=\"checkmark\"></div>\n</label>",
    "css": "/* From Uiverse.io by adamgiebl - Tags: checkbox */\n/* Hide the default checkbox */\n.container input {\n position: absolute;\n opacity: 0;\n cursor: pointer;\n height: 0;\n width: 0;\n}\n\n.container {\n display: block;\n position: relative;\n cursor: pointer;\n font-size: 20px;\n user-select: none;\n}\n\n/* Create a custom checkbox */\n.checkmark {\n position: relative;\n top: 0;\n left: 0;\n height: 1.3em;\n width: 1.3em;\n background-color: #ccc;\n transition: all 0.3s;\n border-radius: 5px;\n}\n\n/* When the checkbox is checked, add a blue background */\n.container input:checked ~ .checkmark {\n background-color: #47da99;\n animation: pop 0.5s;\n animation-direction: alternate;\n}\n\n/* Create the checkmark/indicator (hidden when not checked) */\n.checkmark:after {\n content: \"\";\n position: absolute;\n display: none;\n}\n\n/* Show the checkmark when checked */\n.container input:checked ~ .checkmark:after {\n display: block;\n}\n\n/* Style the checkmark/indicator */\n.container .checkmark:after {\n left: 0.45em;\n top: 0.25em;\n width: 0.25em;\n height: 0.5em;\n border: solid white;\n border-width: 0 0.15em 0.15em 0;\n transform: rotate(45deg);\n}\n\n@keyframes pop {\n 0% {\n  transform: scale(1);\n }\n\n 50% {\n  transform: scale(0.9);\n }\n\n 100% {\n  transform: scale(1);\n }\n}"
  },
  {
    "id": "uiverse-aiviiid_hungry-robin-21",
    "title": "Hungry Robin",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "AIVIIID",
      "profileUrl": "https://uiverse.io/AIVIIID/hungry-robin-21"
    },
    "license": "MIT",
    "description": "Hungry Robin · checkbox by AIVIIID",
    "tags": [
      "checkbox",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 700,
    "accentColor": null,
    "html": "<label class=\"container\">\n\t\t<input type=\"checkbox\" checked=\"checked\">\n\t\t<div class=\"checkmark\"></div>\n\t</label>",
    "css": "/* From Uiverse.io by AIVIIID - Tags: checkbox */\n/* Hide the default checkbox */\n.container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.container {\n  display: block;\n  position: relative;\n  cursor: pointer;\n  font-size: 25px;\n  user-select: none;\n}\n\n/* Create a custom checkbox */\n.checkmark {\n  position: relative;\n  top: 0;\n  left: 0;\n  height: 1.3em;\n  width: 1.3em;\n  background: black;\n  border-radius: 50px;\n  transition: all 0.7s;\n  --spread: 20px;\n}\n\n/* When the checkbox is checked, add a blue background */\n.container input:checked ~ .checkmark {\n  background: black;\n  box-shadow: -10px -10px var(--spread) 0px #FFD700, 0 -10px var(--spread) 0px #FFD700, 10px -10px var(--spread) 0px #FFD700, 10px 0 var(--spread) 0px #FFD700, 10px 10px var(--spread) 0px #FFD700, 0 10px var(--spread) 0px #FFD700, -10px 10px var(--spread) 0px #FFD700;\n}\n\n/* Create the checkmark/indicator (hidden when not checked) */\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n/* Show the checkmark when checked */\n.container input:checked ~ .checkmark:after {\n  display: block;\n  animation: checkmark 0.3s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;\n}\n\n/* Style the checkmark/indicator */\n.container .checkmark:after {\n  left: 0.45em;\n  top: 0.25em;\n  width: 0.25em;\n  height: 0.5em;\n  border: solid #FFD700;\n  border-width: 0 0.15em 0.15em 0;\n  transform: rotate(45deg);\n}\n\n/* Add animation for checkmark */\n@keyframes checkmark {\n  from {\n    transform: rotate(-45deg) scale(0);\n  }\n\n  to {\n    transform: rotate(45deg) scale(1);\n  }\n}\n\n/* Style the label text */\n.container span {\n  margin-left: 2em;\n  color: black;\n  font-weight: bold;\n}"
  },
  {
    "id": "uiverse-optx71285225_little-lionfish-48",
    "title": "Little Lionfish",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "OptX71285225",
      "profileUrl": "https://uiverse.io/OptX71285225/little-lionfish-48"
    },
    "license": "MIT",
    "description": "Little Lionfish · checkbox by OptX71285225",
    "tags": [
      "checkbox",
      "simple",
      "green",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<label class=\"checkbox-container\">\n  <input type=\"checkbox\" />\n  <span class=\"checkmark\"></span>\n</label>",
    "css": "/* From Uiverse.io by OptX71285225  - Tags: simple, green, checkbox */\n/* Hide the default checkbox */\n.checkbox-container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n}\n\n/* Create a custom checkbox container */\n.checkbox-container {\n  position: relative;\n  display: inline-block;\n  font-size: 18px; /* Make the checkbox slightly bigger */\n  margin-bottom: 12px;\n  cursor: pointer;\n}\n\n/* Style the checkmark */\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 30px; /* Make the checkbox slightly bigger */\n  width: 30px; /* Make the checkbox slightly bigger */\n  border: 2px solid #ccc; /* Add border for 3D effect */\n  border-radius: 6px; /* Round the corners */\n  background-color: #fff; /* Default color */\n  transition: all 0.3s ease; /* Add smooth transition */\n}\n\n/* Show the checkmark when checkbox is checked */\n.checkbox-container input:checked ~ .checkmark:after {\n  display: block;\n  animation: checkboxExpand 0.3s ease forwards;\n}\n\n/* Style the checkmark/indicator */\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n  top: 50%; /* Center vertically */\n  left: 50%; /* Center horizontally */\n  transform: translate(-50%, -50%) rotate(45deg) scale(0); /* Center and hide initially, then scale to appear */\n  width: 8px; /* Adjust size */\n  height: 15px; /* Adjust size */\n  border: solid #fff; /* Change color of the tick to white */\n  border-width: 0 4px 4px 0; /* Adjust thickness and direction */\n}\n\n/* On hover, add a grey background color */\n.checkbox-container:hover .checkmark {\n  background-color: #ccc;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Add subtle shadow */\n  transform: scale(1.05); /* Scale up slightly */\n}\n\n/* When the checkbox is checked, add a green background */\n.checkbox-container input:checked ~ .checkmark {\n  background-color: #4caf50;\n  border-color: #4caf50; /* Change border color */\n  box-shadow: 0 0 5px rgba(76, 175, 80, 0.5); /* Add shadow for 3D effect */\n}\n\n/* Keyframes for expanding animation */\n@keyframes checkboxExpand {\n  0% {\n    transform: translate(-50%, -50%) rotate(45deg) scale(0);\n  }\n  100% {\n    transform: translate(-50%, -50%) rotate(45deg) scale(1);\n  }\n}"
  },
  {
    "id": "uiverse-ercnersoy_rare-robin-39",
    "title": "Rare Robin",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "ercnersoy",
      "profileUrl": "https://uiverse.io/ercnersoy/rare-robin-39"
    },
    "license": "MIT",
    "description": "Rare Robin · checkbox by ercnersoy",
    "tags": [
      "checkbox",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<label class=\"container\">\n  <input checked=\"checked\" type=\"checkbox\">\n  <div class=\"checkmark\"></div>\n</label>",
    "css": "/* From Uiverse.io by ercnersoy - Tags: checkbox */\n/* Hide the default checkbox */\n.container input {\n position: absolute;\n opacity: 0;\n cursor: pointer;\n height: 0;\n width: 0;\n}\n\n.container {\n display: block;\n position: relative;\n cursor: pointer;\n font-size: 20px;\n user-select: none;\n}\n\n/* Create a custom checkbox */\n.checkmark {\n position: relative;\n top: 0;\n left: 0;\n height: 1.4em;\n width: 1.4em;\n border: 2px solid #2196F3;\n border-radius: 1rem 0rem 1rem;\n transform: rotate(45deg);\n transition: all .5s ease-in-out;\n}\n\n/* When the checkbox is checked, add a blue background */\n.container input:checked ~ .checkmark {\n box-shadow: 0px 0px 40px 5px #2196F3;\n border-radius: 1rem 0rem 1rem;\n background-color: #2195f31f;\n}\n\n/* Create the checkmark/indicator (hidden when not checked) */\n.checkmark:after {\n content: \"\";\n position: absolute;\n display: none;\n}\n\n/* Show the checkmark when checked */\n.container input:checked ~ .checkmark:after {\n display: block;\n}\n\n/* Style the checkmark/indicator */\n.container .checkmark:after {\n left: 0.35em;\n top: 0.20em;\n width: 0.25em;\n height: 0.5em;\n border: solid #2196F3;\n border-width: 0 0.15em 0.15em 0;\n transform: rotate(-5deg);\n animation: upAnimate 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n\n@keyframes upAnimate {\n from {\n  transform: translate(-20px, -20px) rotate(-5deg);\n  opacity: 0;\n }\n\n to {\n  transform: translate(0, 0) rotate(-5deg);\n  opacity: 1;\n }\n}"
  },
  {
    "id": "uiverse-sujeet-12_warm-dragonfly-92",
    "title": "Warm Dragonfly",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "sujeet-12",
      "profileUrl": "https://uiverse.io/sujeet-12/warm-dragonfly-92"
    },
    "license": "MIT",
    "description": "Warm Dragonfly · checkbox by sujeet-12",
    "tags": [
      "checkbox",
      "fun-check",
      "circle-checkbox",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 900,
    "accentColor": null,
    "html": "<label class=\"container\">\n  <input type=\"checkbox\" checked=\"checked\">\n  <div class=\"checkmark\"></div>\n</label>",
    "css": "/* From Uiverse.io by sujeet-12 - Tags: checkbox, fun-check, circle-checkbox */\n/* Hide the default checkbox */\n.container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.container {\n  display: block;\n  position: relative;\n  cursor: pointer;\n  font-size: 20px;\n  user-select: none;\n  animation: jello-horizontal 0.9s both;\n}\n\n.checkmark:hover {\n  animation: jello-horizontal 0.9s both;\n}\n\n/* Create a custom checkbox */\n.checkmark {\n  position: relative;\n  top: 0;\n  left: 0;\n  height: 1.3em;\n  width: 1.3em;\n  border-radius: 50%;\n  background-color: #eee;\n}\n\n/* When the checkbox is checked, add a blue background */\n.container input:checked ~ .checkmark {\n  background-color: royalblue;\n}\n\n/* Create the checkmark/indicator (hidden when not checked) */\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n/* Show the checkmark when checked */\n.container input:checked ~ .checkmark:after {\n  display: block;\n}\n\n/* Style the checkmark/indicator */\n.container .checkmark:after {\n  left: 0.45em;\n  top: 0.25em;\n  width: 0.25em;\n  height: 0.5em;\n  border: solid white;\n  border-width: 0 0.15em 0.15em 0;\n  transform: rotate(45deg);\n}\n\n@keyframes jello-horizontal {\n  0% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    -webkit-transform: scale3d(0.95, 1.05, 1);\n    transform: scale3d(0.95, 1.05, 1);\n  }\n\n  75% {\n    -webkit-transform: scale3d(1.05, 0.95, 1);\n    transform: scale3d(1.05, 0.95, 1);\n  }\n\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}"
  },
  {
    "id": "uiverse-smit-prajapati_white-monkey-91",
    "title": "White Monkey",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "Smit-Prajapati",
      "profileUrl": "https://uiverse.io/Smit-Prajapati/white-monkey-91"
    },
    "license": "MIT",
    "description": "White Monkey · checkbox by Smit-Prajapati",
    "tags": [
      "checkbox",
      "cool checkbox",
      "check",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<input class=\"checkbox\" type=\"checkbox\">",
    "css": "/* From Uiverse.io by Smit-Prajapati - Tags: checkbox, cool checkbox, check */\n.checkbox {\n  appearance: none;\n  width: 30px;\n  aspect-ratio: 1;\n  border-radius: 8px;\n  border: 2px solid black;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n}\n\n.checkbox::before {\n  font-family: \"Quicksand\", sans-serif;\n  position: absolute;\n  bottom: -4px;\n  left: 1px;\n  content: \"✔\";\n  font-size: 40px;\n  color: rgb(255, 153, 0);\n  transform: scale(0);\n  transition: all 0.2s ease-in-out;\n}\n\n.checkbox:checked::before {\n  animation: zoom 0.5s ease-in-out;\n  transform: scale(1);\n}\n\n@keyframes zoom {\n  0% {\n    transform: scale(0);\n  }\n\n  20% {\n    transform: scale(1.5);\n  }\n\n  40% {\n    transform: scale(0.5);\n  }\n\n  50% {\n    transform: scale(1);\n  }\n\n  70% {\n    transform: scale(1.2);\n  }\n\n  90% {\n    transform: scale(0.8);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}"
  },
  {
    "id": "uiverse-ahmed150up_strange-fox-68",
    "title": "Strange Fox",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "ahmed150up",
      "profileUrl": "https://uiverse.io/ahmed150up/strange-fox-68"
    },
    "license": "MIT",
    "description": "Strange Fox · checkbox by ahmed150up",
    "tags": [
      "checkbox",
      "star",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<input type=\"checkbox\" id=\"star\">\n<label for=\"star\">\n  <svg viewBox=\"0 0 24 24\">\n    <path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"></path>\n  </svg>\n</label>",
    "css": "/* From Uiverse.io by ahmed150up - Tags: checkbox, star */\ninput[type=\"checkbox\"] {\n  display: none;\n}\n\nlabel svg {\n  width: 44px;\n  height: 44px;\n  fill: none;\n  stroke: #000;\n  stroke-width: 2px;\n}\n\ninput[type=\"checkbox\"]:checked + label svg {\n  fill: #FFC107;\n  animation: pop_42 0.5s ease-out;\n}\n\n@keyframes pop_42 {\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(1.5);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}"
  },
  {
    "id": "uiverse-danilomgutavo_stupid-mouse-85",
    "title": "Stupid Mouse",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "DaniloMGutavo",
      "profileUrl": "https://uiverse.io/DaniloMGutavo/stupid-mouse-85"
    },
    "license": "MIT",
    "description": "Stupid Mouse · checkbox by DaniloMGutavo",
    "tags": [
      "checkbox",
      "cool checkbox",
      "check",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<label class=\"checkbox-container\">\n    <input class=\"custom-checkbox\" checked=\"\" type=\"checkbox\">\n    <span class=\"checkmark\"></span>\n</label>",
    "css": "/* From Uiverse.io by DaniloMGutavo - Tags: checkbox, cool checkbox, check */\n.checkbox-container {\n  display: inline-block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 16px;\n  user-select: none;\n}\n\n.custom-checkbox {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background-color: #eee;\n  border-radius: 4px;\n  transition: background-color 0.3s;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n}\n\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n  left: 9px;\n  top: 5px;\n  width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n\n.custom-checkbox:checked ~ .checkmark {\n  background-color: #2196F3;\n  box-shadow: 0 3px 7px rgba(33, 150, 243, 0.3);\n}\n\n.custom-checkbox:checked ~ .checkmark:after {\n  display: block;\n}\n\n@keyframes checkAnim {\n  0% {\n    height: 0;\n  }\n\n  100% {\n    height: 10px;\n  }\n}\n\n.custom-checkbox:checked ~ .checkmark:after {\n  animation: checkAnim 0.2s forwards;\n}"
  },
  {
    "id": "uiverse-bocikond_spotty-elephant-13",
    "title": "Spotty Elephant",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "bociKond",
      "profileUrl": "https://uiverse.io/bociKond/spotty-elephant-13"
    },
    "license": "MIT",
    "description": "Spotty Elephant · checkbox by bociKond",
    "tags": [
      "checkbox",
      "pulse",
      "color",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<label class=\"container\">\n  <input checked=\"checked\" type=\"checkbox\">\n  <div class=\"checkmark\"></div>\n</label>",
    "css": "/* From Uiverse.io by bociKond - Tags: checkbox, pulse, color */\n/* Hide the default checkbox */\n.container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.container {\n  display: block;\n  position: relative;\n  cursor: pointer;\n  font-size: 1.5rem;\n  user-select: none;\n}\n\n/* Create a custom checkbox */\n.checkmark {\n  --clr: #0B6E4F;\n  position: relative;\n  top: 0;\n  left: 0;\n  height: 1.3em;\n  width: 1.3em;\n  background-color: #ccc;\n  border-radius: 50%;\n  transition: 300ms;\n}\n\n/* When the checkbox is checked, add a blue background */\n.container input:checked ~ .checkmark {\n  background-color: var(--clr);\n  border-radius: .5rem;\n  animation: pulse 500ms ease-in-out;\n}\n\n/* Create the checkmark/indicator (hidden when not checked) */\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n/* Show the checkmark when checked */\n.container input:checked ~ .checkmark:after {\n  display: block;\n}\n\n/* Style the checkmark/indicator */\n.container .checkmark:after {\n  left: 0.45em;\n  top: 0.25em;\n  width: 0.25em;\n  height: 0.5em;\n  border: solid #E0E0E2;\n  border-width: 0 0.15em 0.15em 0;\n  transform: rotate(45deg);\n}\n\n@keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 #0B6E4F90;\n    rotate: 20deg;\n  }\n\n  50% {\n    rotate: -20deg;\n  }\n\n  75% {\n    box-shadow: 0 0 0 10px #0B6E4F60;\n  }\n\n  100% {\n    box-shadow: 0 0 0 13px #0B6E4F30;\n    rotate: 0;\n  }\n}"
  },
  {
    "id": "uiverse-vishnupprajapat_wicked-catfish-29",
    "title": "Wicked Catfish",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "vishnupprajapat",
      "profileUrl": "https://uiverse.io/vishnupprajapat/wicked-catfish-29"
    },
    "license": "MIT",
    "description": "Wicked Catfish · checkbox by vishnupprajapat",
    "tags": [
      "checkbox",
      "button",
      "switcher",
      "click effect",
      "cool checkbox",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"checkbox-wrapper-46\">\n  <input type=\"checkbox\" id=\"cbx-46\" class=\"inp-cbx\" />\n  <label for=\"cbx-46\" class=\"cbx\"\n    ><span>\n      <svg viewBox=\"0 0 12 10\" height=\"10px\" width=\"12px\">\n        <polyline points=\"1.5 6 4.5 9 10.5 1\"></polyline></svg></span\n    ><span>Checkbox</span>\n  </label>\n</div>",
    "css": "/* From Uiverse.io by vishnupprajapat  - Tags: button, checkbox, switcher, click effect, cool checkbox */\n.checkbox-wrapper-46 input[type=\"checkbox\"] {\n  display: none;\n  visibility: hidden;\n}\n\n.checkbox-wrapper-46 .cbx {\n  margin: auto;\n  -webkit-user-select: none;\n  user-select: none;\n  cursor: pointer;\n}\n.checkbox-wrapper-46 .cbx span {\n  display: inline-block;\n  vertical-align: middle;\n  transform: translate3d(0, 0, 0);\n}\n.checkbox-wrapper-46 .cbx span:first-child {\n  position: relative;\n  width: 18px;\n  height: 18px;\n  border-radius: 3px;\n  transform: scale(1);\n  vertical-align: middle;\n  border: 1px solid #9098a9;\n  transition: all 0.2s ease;\n}\n.checkbox-wrapper-46 .cbx span:first-child svg {\n  position: absolute;\n  top: 3px;\n  left: 2px;\n  fill: none;\n  stroke: #ffffff;\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-dasharray: 16px;\n  stroke-dashoffset: 16px;\n  transition: all 0.3s ease;\n  transition-delay: 0.1s;\n  transform: translate3d(0, 0, 0);\n}\n.checkbox-wrapper-46 .cbx span:first-child:before {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background: #506eec;\n  display: block;\n  transform: scale(0);\n  opacity: 1;\n  border-radius: 50%;\n}\n.checkbox-wrapper-46 .cbx span:last-child {\n  padding-left: 8px;\n}\n.checkbox-wrapper-46 .cbx:hover span:first-child {\n  border-color: #506eec;\n}\n\n.checkbox-wrapper-46 .inp-cbx:checked + .cbx span:first-child {\n  background: #506eec;\n  border-color: #506eec;\n  animation: wave-46 0.4s ease;\n}\n.checkbox-wrapper-46 .inp-cbx:checked + .cbx span:first-child svg {\n  stroke-dashoffset: 0;\n}\n.checkbox-wrapper-46 .inp-cbx:checked + .cbx span:first-child:before {\n  transform: scale(3.5);\n  opacity: 0;\n  transition: all 0.6s ease;\n}\n\n@keyframes wave-46 {\n  50% {\n    transform: scale(0.9);\n  }\n}"
  },
  {
    "id": "uiverse-umangladha_big-sheep-9",
    "title": "Big Sheep",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "UmangLadha",
      "profileUrl": "https://uiverse.io/UmangLadha/big-sheep-9"
    },
    "license": "MIT",
    "description": "Big Sheep · checkbox by UmangLadha",
    "tags": [
      "checkbox",
      "tooltip",
      "action",
      "code",
      "box",
      "cool checkbox",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"checkbox-wrapper\">\n  <input style=\"display: none;\" type=\"checkbox\" id=\"cbx\" class=\"inp-cbx\" />\n  <label for=\"cbx\" class=\"cbx\">\n    <span>\n      <svg viewBox=\"0 0 12 9\" height=\"9px\" width=\"12px\">\n        <polyline points=\"1 5 4 8 11 1\"></polyline>\n      </svg>\n    </span>\n    <span>To-do</span>\n  </label>\n</div>",
    "css": "/* From Uiverse.io by UmangLadha  - Tags: tooltip, action, checkbox, code, box, cool checkbox */\n.checkbox-wrapper .cbx {\n  -webkit-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  cursor: pointer;\n}\n.checkbox-wrapper .cbx span {\n  display: inline-block;\n  vertical-align: middle;\n  transform: translate3d(0, 0, 0);\n}\n.checkbox-wrapper .cbx span:first-child {\n  position: relative;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  transform: scale(1);\n  vertical-align: middle;\n  border: 1px solid #b9b8c3;\n  transition: all 0.2s ease;\n}\n.checkbox-wrapper .cbx span:first-child svg {\n  position: absolute;\n  z-index: 1;\n  top: 8px;\n  left: 6px;\n  fill: none;\n  stroke: white;\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-dasharray: 16px;\n  stroke-dashoffset: 16px;\n  transition: all 0.3s ease;\n  transition-delay: 0.1s;\n  transform: translate3d(0, 0, 0);\n}\n.checkbox-wrapper .cbx span:first-child:before {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background: #506eec;\n  display: block;\n  transform: scale(0);\n  opacity: 1;\n  border-radius: 50%;\n  transition-delay: 0.2s;\n}\n.checkbox-wrapper .cbx span:last-child {\n  margin-left: 8px;\n}\n.checkbox-wrapper .cbx span:last-child:after {\n  content: \"\";\n  position: absolute;\n  top: 8px;\n  left: 0;\n  height: 1px;\n  width: 100%;\n  background: #b9b8c3;\n  transform-origin: 0 0;\n  transform: scaleX(0);\n}\n.checkbox-wrapper .cbx:hover span:first-child {\n  border-color: #3c53c7;\n}\n\n.checkbox-wrapper .inp-cbx:checked + .cbx span:first-child {\n  border-color: #3c53c7;\n  background: #3c53c7;\n  animation: check-15 0.6s ease;\n}\n.checkbox-wrapper .inp-cbx:checked + .cbx span:first-child svg {\n  stroke-dashoffset: 0;\n}\n.checkbox-wrapper .inp-cbx:checked + .cbx span:first-child:before {\n  transform: scale(2.2);\n  opacity: 0;\n  transition: all 0.6s ease;\n}\n.checkbox-wrapper .inp-cbx:checked + .cbx span:last-child {\n  color: #b9b8c3;\n  transition: all 0.3s ease;\n}\n.checkbox-wrapper .inp-cbx:checked + .cbx span:last-child:after {\n  transform: scaleX(1);\n  transition: all 0.3s ease;\n}\n\n@keyframes check-15 {\n  50% {\n    transform: scale(1.2);\n  }\n}"
  },
  {
    "id": "uiverse-ke1221_dangerous-puma-90",
    "title": "Dangerous Puma",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "ke1221",
      "profileUrl": "https://uiverse.io/ke1221/dangerous-puma-90"
    },
    "license": "MIT",
    "description": "Dangerous Puma · checkbox by ke1221",
    "tags": [
      "checkbox",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<input checked=\"\" class=\"check\" type=\"checkbox\">",
    "css": "/* From Uiverse.io by ke1221 - Tags: checkbox */\n.check {\n position: relative;\n width: 20px;\n height: 20px;\n border-radius: 2px;\n appearance: none;\n background-color: #bbb;\n transition: all .3s;\n}\n\n.check::before {\n content: '';\n position: absolute;\n border: solid #fff;\n display: block;\n width: .3em;\n height: .6em;\n border-width: 0 .2em .2em 0;\n z-index: 1;\n opacity: 0;\n right: calc(50% - .3em);\n top: calc(50% - .6em);\n transform: rotate(0deg);\n transition: all .3s;\n transform-origin: center center;\n}\n\n.check:checked {\n animation: a .3s ease-in forwards;\n background-color: rgb(120, 190, 120);\n}\n\n.check:checked::before {\n opacity: 1;\n transform: rotate(405deg);\n}\n\n@keyframes a {\n 0% {\n  opacity: 1;\n  transform: scale(1) rotateY(0deg);\n }\n\n 50% {\n  opacity: 0;\n  transform: scale(.8) rotateY(180deg);\n }\n\n 100% {\n  opacity: 1;\n  transform: scale(1) rotateY(360deg);\n }\n}"
  },
  {
    "id": "uiverse-elijahgummer_friendly-wombat-2",
    "title": "Friendly Wombat",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "elijahgummer  - Website: https://x.com/farrelput/status/1788771619344920729 - Name: Farrel Putra",
      "profileUrl": "https://uiverse.io/elijahgummer  - Website: https://x.com/farrelput/status/1788771619344920729 - Name: Farrel Putra/friendly-wombat-2"
    },
    "license": "MIT",
    "description": "Friendly Wombat · checkbox by elijahgummer  - Website: https://x.com/farrelput/status/1788771619344920729 - Name: Farrel Putra",
    "tags": [
      "checkbox",
      "simple",
      "animation",
      "green",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<label class=\"container\">\n  <input type=\"checkbox\" />\n  <div class=\"checkmark\"></div>\n</label>",
    "css": "/* From Uiverse.io by elijahgummer  - Website: https://x.com/farrelput/status/1788771619344920729 - Name: Farrel Putra - Tags: simple, animation, green, checkbox */\n/* Hide the default checkbox */\n.container input {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.container {\n  display: block;\n  position: relative;\n  cursor: pointer;\n  font-size: 20px;\n  user-select: none;\n  border: 3px solid #beddd0;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n/* Create a custom checkbox */\n.checkmark {\n  position: relative;\n  top: 0;\n  left: 0;\n  height: 1.3em;\n  width: 1.3em;\n  background-color: #2dc38c;\n  border-bottom: 1.5px solid #2dc38c; /* Bottom stroke */\n  box-shadow: 0 0 1px #cef1e4, inset 0 -2.5px 3px #62eab8,\n    inset 0 3px 3px rgba(0, 0, 0, 0.34); /* Inner shadow */\n  border-radius: 8px;\n  transition: transform 0.3s ease-in-out; /* Transition for smooth animation */\n}\n\n/* When the checkbox is checked, modify the checkmark appearance */\n.container input:checked ~ .checkmark {\n  transform: translateY(40px); /* Move down */\n  animation: wipeDown 0.6s ease-in-out forwards; /* Apply wipe animation */\n}\n\n/* When the checkbox is not checked, modify the checkmark appearance */\n.container input:not(:checked) ~ .checkmark {\n  transform: translateY(-40px); /* Move up */\n  animation: wipeUp 0.6s ease-in-out forwards; /* Apply wipe animation */\n}\n\n/* Keyframes for wipe animations */\n@keyframes wipeDown {\n  0% {\n    transform: translateY(0); /* Starting position */\n  }\n  100% {\n    transform: translateY(40px); /* End position */\n  }\n}\n\n@keyframes wipeUp {\n  0% {\n    transform: translateY(40); /* Starting position */\n  }\n  100% {\n    transform: translateY(0px); /* End position */\n  }\n}\n\n/* Create the checkmark/indicator */\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n/* Show the checkmark when checked */\n.container input:checked ~ .checkmark:after {\n  display: block;\n}\n\n/* Style the checkmark/indicator */\n.container .checkmark:before {\n  content: \"\";\n  position: absolute;\n  left: 10px;\n  top: 4px;\n  width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.34); /* Icon drop shadow */\n}"
  },
  {
    "id": "uiverse-radwakhalil22_good-quail-97",
    "title": "Good Quail",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "radwakhalil22",
      "profileUrl": "https://uiverse.io/radwakhalil22/good-quail-97"
    },
    "license": "MIT",
    "description": "Good Quail · checkbox by radwakhalil22",
    "tags": [
      "checkbox",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div class=\"radio-input\">\n  <input type=\"radio\" id=\"neonShadow\" name=\"value-radio\"><span class=\"span\"></span>\n  <input type=\"radio\" id=\"neonShadow\" name=\"value-radio\"><span class=\"span\"></span>\n  <input type=\"radio\" id=\"neonShadow\" name=\"value-radio\"><span class=\"span\"></span>\n</div>",
    "css": "/* From Uiverse.io by radwakhalil22 - Tags:  */\n.radio-input #neonShadow {\n  height: 30px;\n  width: 30px;\n  border: none;\n  border-radius: 50px;\n  background-color: rgba(5, 19, 16, 0.3);\n  animation: glow 1s infinite;\n  transition: 0.5s;\n  accent-color: black;\n  appearance: none;\n  background-size: contain;\n}\n\n#neonShadow[type='radio']:after {\n  width: 100%;\n  height: 100%;\n  border-radius: 15px;\n  position: relative;\n  content: '';\n  display: inline-block;\n  visibility: visible;\n}\n\n#neonShadow[type='radio']:checked:after {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  position: relative;\n  background-color: white;\n  content: '';\n  display: inline-block;\n  visibility: visible;\n}\n\n.span {\n  display: block;\n  width: 100%;\n  height: 100%;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: 700;\n  padding-top: 15%;\n  padding-right: 2.5%;\n  margin-right: 0px;\n  font-size: 1.2rem;\n  transition: 0.3s;\n  opacity: 0;\n}\n\n.span:hover {\n  transition: 0.3s;\n  opacity: 1;\n  font-weight: 700;\n}\n\n#neonShadow:hover {\n  transform: scale(0.9);\n  background-color: #c3bacc;\n  transition: 0.5s;\n}\n\n@keyframes glow {\n  0% {\n    box-shadow: 5px 5px 20px rgb(93, 52, 168),-5px -5px 20px rgb(93, 52, 168);\n  }\n\n  50% {\n    box-shadow: 5px 5px 20px rgb(81, 224, 210),-5px -5px 20px rgb(81, 224, 210)\n  }\n\n  100% {\n    box-shadow: 5px 5px 20px rgb(93, 52, 168),-5px -5px 20px rgb(93, 52, 168)\n  }\n}"
  },
  {
    "id": "uiverse-yaya12085_wonderful-owl-52",
    "title": "Wonderful Owl",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "Yaya12085",
      "profileUrl": "https://uiverse.io/Yaya12085/wonderful-owl-52"
    },
    "license": "MIT",
    "description": "Wonderful Owl · checkbox by Yaya12085",
    "tags": [
      "checkbox",
      "button",
      "input",
      "radio",
      "select",
      "animated",
      "design"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"radio-input\">\n  <input value=\"value-1\" name=\"value-radio\" id=\"value-1\" type=\"radio\">\n  <label for=\"value-1\">Value 1</label>\n  <input value=\"value-2\" name=\"value-radio\" id=\"value-2\" type=\"radio\">\n  <label for=\"value-2\">Value 2</label>\n  <input value=\"value-3\" name=\"value-radio\" id=\"value-3\" type=\"radio\">\n  <label for=\"value-3\">Value 3</label>\n</div>",
    "css": "/* From Uiverse.io by Yaya12085 - Tags: button, input, radio, select, animated, design */\n.radio-input {\n  display: flex;\n  flex-direction: row;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  color: white;\n}\n\n.radio-input input[type=\"radio\"] {\n  display: none;\n}\n\n.radio-input label {\n  display: flex;\n  align-items: center;\n  padding: 10px;\n  border: 1px solid #ccc;\n  background-color: #212121;\n  border-radius: 5px;\n  margin-right: 12px;\n  cursor: pointer;\n  position: relative;\n  transition: all 0.3s ease-in-out;\n}\n\n.radio-input label:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  transform: translate(-50%, -50%);\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: #fff;\n  border: 2px solid #ccc;\n  transition: all 0.3s ease-in-out;\n}\n\n.radio-input input[type=\"radio\"]:checked + label:before {\n  background-color: green;\n  top: 0;\n}\n\n.radio-input input[type=\"radio\"]:checked + label {\n  background-color: royalblue;\n  color: #fff;\n  border-color: rgb(129, 235, 129);\n  animation: radio-translate 0.5s ease-in-out;\n}\n\n@keyframes radio-translate {\n  0% {\n    transform: translateX(0);\n  }\n\n  50% {\n    transform: translateY(-10px);\n  }\n\n  100% {\n    transform: translateX(0);\n  }\n}"
  },
  {
    "id": "uiverse-kyle1dev_smart-fox-51",
    "title": "Smart Fox",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "kyle1dev",
      "profileUrl": "https://uiverse.io/kyle1dev/smart-fox-51"
    },
    "license": "MIT",
    "description": "Smart Fox · checkbox by kyle1dev",
    "tags": [
      "checkbox",
      "radio",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"custom-radio-group\">\n  <label class=\"custom-radio-container\">\n    <input type=\"radio\" name=\"custom-radio\" value=\"option1\" />\n    <span class=\"custom-radio-checkmark\"></span>\n    Option 1\n  </label>\n  <label class=\"custom-radio-container\">\n    <input type=\"radio\" name=\"custom-radio\" value=\"option2\" />\n    <span class=\"custom-radio-checkmark\"></span>\n    Option 2\n  </label>\n  <label class=\"custom-radio-container\">\n    <input type=\"radio\" name=\"custom-radio\" value=\"option3\" />\n    <span class=\"custom-radio-checkmark\"></span>\n    Option 3\n  </label>\n</div>",
    "css": "/* From Uiverse.io by kyle1dev  - Tags: radio */\n.custom-radio-group {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  width: 320px;\n  border-radius: 12px;\n  background: rgba(0, 0, 0, 0.2);\n  padding: 16px;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);\n}\n.custom-radio-container {\n  position: relative;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 12px 20px;\n  border-radius: 8px;\n  background-color: rgba(255, 255, 255, 0.2);\n  transition:\n    background-color 0.3s ease,\n    transform 0.3s ease,\n    box-shadow 0.3s ease;\n  font-size: 16px;\n  color: #333333;\n  user-select: none;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.custom-radio-container:hover {\n  background-color: rgba(255, 255, 255, 0.3);\n  transform: scale(1.03);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);\n}\n.custom-radio-container input[type=\"radio\"] {\n  opacity: 0;\n  position: absolute;\n}\n.custom-radio-checkmark {\n  position: relative;\n  height: 24px;\n  width: 24px;\n  border: 2px solid #ffffff;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.3);\n  transition:\n    background-color 0.4s ease,\n    transform 0.4s ease;\n  margin-right: 12px;\n  display: inline-block;\n  vertical-align: middle;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);\n}\n.custom-radio-container input[type=\"radio\"]:checked + .custom-radio-checkmark {\n  background-color: #ffffff;\n  border-color: #007bff;\n  box-shadow: 0 0 0 8px rgba(0, 123, 255, 0.2);\n  transform: scale(1.2);\n  animation: pulse 0.6s forwards;\n}\n.custom-radio-checkmark::after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n.custom-radio-container\n  input[type=\"radio\"]:checked\n  + .custom-radio-checkmark::after {\n  display: block;\n  left: 50%;\n  top: 50%;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #007bff;\n  transform: translate(-50%, -50%);\n}\n@keyframes pulse {\n  0% {\n    transform: scale(1.2);\n  }\n  50% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1.2);\n  }\n}"
  },
  {
    "id": "uiverse-pradeepsaranbishnoi_tiny-tiger-4",
    "title": "Tiny Tiger",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "Pradeepsaranbishnoi  - Website: https://codepen.io/DeyJordan/pen/poQvgaz - Name: Jordan",
      "profileUrl": "https://uiverse.io/Pradeepsaranbishnoi  - Website: https://codepen.io/DeyJordan/pen/poQvgaz - Name: Jordan/tiny-tiger-4"
    },
    "license": "MIT",
    "description": "Tiny Tiger · checkbox by Pradeepsaranbishnoi  - Website: https://codepen.io/DeyJordan/pen/poQvgaz - Name: Jordan",
    "tags": [
      "checkbox",
      "flashy",
      "green",
      "bubble",
      "radio",
      "click",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<div>\n  <div class=\"Radio\">\n    <input checked=\"\" value=\"radio1\" type=\"radio\" name=\"radio\" id=\"Radio1\" />\n    <label for=\"Radio1\">Bubble 1</label>\n  </div>\n  <div class=\"Radio\">\n    <input value=\"radio2\" type=\"radio\" name=\"radio\" id=\"Radio2\" />\n    <label for=\"Radio2\">Bubble 2</label>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by Pradeepsaranbishnoi  - Website: https://codepen.io/DeyJordan/pen/poQvgaz - Name: Jordan - Tags: flashy, green, bubble, radio, click */\n.Radio input[type=\"radio\"] {\n  position: absolute;\n  left: -100px;\n}\n.Radio input[type=\"radio\"] + label {\n  position: relative;\n  display: block;\n  line-height: 3rem;\n  cursor: pointer;\n  white-space: nowrap;\n  color: #61cea5;\n}\n\n.Radio input[type=\"radio\"] + label::before,\n.Radio input[type=\"radio\"] + label::after {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  transform: translateY(-50%);\n  transition: 0.5s;\n}\n\n.Radio input[type=\"radio\"] + label {\n  padding-left: 3rem;\n}\n\n.Radio input[type=\"radio\"] + label::before {\n  width: 2rem;\n  aspect-ratio: 1 / 1;\n  border-radius: 50%;\n  background: #61cea5;\n}\n\n.Radio input[type=\"radio\"] + label::after {\n  left: 0.2rem;\n  width: 1.4rem;\n  transform: translateY(-50%) scale(0);\n}\n\n.Radio input[type=\"radio\"]:not(:checked) + label::after {\n  animation: radio 0.5s linear;\n}\n\n.Radio input[type=\"radio\"]:checked + label::after {\n  transform: translateY(-50%) scale(1);\n}\n\n.Radio input[type=\"radio\"] + label::after {\n  aspect-ratio: 1 / 1;\n  border: 0.1rem solid #fff;\n  border-radius: 50%;\n  background: radial-gradient(circle at 70% 30%, #fff, rgba(0, 0, 0, 0) 25%),\n    radial-gradient(\n      circle at 60% 55%,\n      rgba(0, 0, 0, 0) 60%,\n      rgba(255, 0, 255, 0.8) 100%\n    ),\n    radial-gradient(\n      circle at 50% 50%,\n      rgba(0, 0, 0, 0) 40%,\n      rgba(0, 255, 255, 0.2) 60%,\n      rgba(0, 0, 0, 0) 68%\n    ),\n    radial-gradient(\n      circle at 50% 55%,\n      rgba(0, 0, 0, 0) 35%,\n      rgba(255, 255, 0, 0.2) 45%,\n      rgba(0, 0, 0, 0) 55%\n    );\n}\n\n@keyframes radio {\n  0% {\n    transform: translateY(-50%) scale(1);\n  }\n  100% {\n    transform: translateY(-50%) scale(1.7);\n  }\n}"
  },
  {
    "id": "uiverse-pradeepsaranbishnoi_black-husky-57",
    "title": "Black Husky",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "Pradeepsaranbishnoi",
      "profileUrl": "https://uiverse.io/Pradeepsaranbishnoi/black-husky-57"
    },
    "license": "MIT",
    "description": "Black Husky · checkbox by Pradeepsaranbishnoi",
    "tags": [
      "checkbox",
      "radio",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<form class=\"form\">\n    <label for=\"01\">One</label>\n    <input id=\"01\" type=\"radio\" name=\"r\" value=\"1\" checked=\"\">\n    <label for=\"02\">Two</label>\n    <input id=\"02\" type=\"radio\" name=\"r\" value=\"2\">\n    <label for=\"03\">Three</label>\n    <input id=\"03\" type=\"radio\" name=\"r\" value=\"3\">\n</form>",
    "css": "/* From Uiverse.io by Pradeepsaranbishnoi - Tags: radio */\n.form {\n  --background: #ffffff;\n  --text: #414856;\n  --radio: #7C96B2;\n  --radio-checked: #4F29F0;\n  --radio-size: 20px;\n  --width: 150px;\n  --height: 140px;\n  --border-radius: 10px;\n  background: var(--background);\n  width: var(--width);\n  height: var(--height);\n  border-radius: var(--border-radius);\n  color: var(--text);\n  position: relative;\n  box-shadow: 0 10px 30px rgba(65, 72, 86, 0.05);\n  padding: 30px 20px;\n  display: grid;\n  grid-template-columns: auto var(--radio-size);\n  align-items: center;\n}\n\n.form label {\n  cursor: pointer;\n}\n\n.form input[type=\"radio\"] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  position: relative;\n  height: var(--radio-size);\n  width: var(--radio-size);\n  outline: none;\n  margin: 0;\n  cursor: pointer;\n  border: 2px solid var(--radio);\n  background: transparent;\n  border-radius: 50%;\n  display: grid;\n  justify-self: end;\n  justify-items: center;\n  align-items: center;\n  overflow: hidden;\n  transition: border .5s ease;\n}\n\n.form input[type=\"radio\"]::before, .form input[type=\"radio\"]::after {\n  content: \"\";\n  display: flex;\n  justify-self: center;\n  border-radius: 50%;\n}\n\n.form input[type=\"radio\"]::before {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: var(--background);\n  z-index: 1;\n  opacity: var(--opacity, 1);\n}\n\n.form input[type=\"radio\"]::after {\n  position: relative;\n  width: calc(100% /2);\n  height: calc(100% /2);\n  background: var(--radio-checked);\n  top: var(--y, 100%);\n  transition: top 0.5s cubic-bezier(0.48, 1.97, 0.5, 0.63);\n}\n\n.form input[type=\"radio\"]:checked {\n  --radio: var(--radio-checked);\n}\n\n.form input[type=\"radio\"]:checked::after {\n  --y: 0%;\n  animation: stretch-animate .3s ease-out .17s;\n}\n\n.form input[type=\"radio\"]:checked::before {\n  --opacity: 0;\n}\n\n.form input[type=\"radio\"]:checked ~ input[type=\"radio\"]::after {\n  --y: -100%;\n}\n\n.form input[type=\"radio\"]:not(:checked)::before {\n  --opacity: 1;\n  transition: opacity 0s linear .5s;\n}\n\n@keyframes stretch-animate {\n  0% {\n    transform: scale(1, 1);\n  }\n\n  28% {\n    transform: scale(1.15, 0.85);\n  }\n\n  50% {\n    transform: scale(0.9, 1.1);\n  }\n\n  100% {\n    transform: scale(1, 1);\n  }\n}\n\n.socials {\n  position: fixed;\n  display: block;\n  left: 20px;\n  bottom: 20px;\n}\n\n.socials > a {\n  display: block;\n  width: 30px;\n  opacity: .2;\n  transform: scale(var(--scale, 0.8));\n  transition: transform 0.3s cubic-bezier(0.38, -0.12, 0.24, 1.91);\n}\n\n.socials > a:hover {\n  --scale: 1;\n}"
  },
  {
    "id": "uiverse-na3ar-17_fast-turtle-85",
    "title": "Fast Turtle",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "Na3ar-17",
      "profileUrl": "https://uiverse.io/Na3ar-17/fast-turtle-85"
    },
    "license": "MIT",
    "description": "Fast Turtle · checkbox by Na3ar-17",
    "tags": [
      "checkbox",
      "simple",
      "black",
      "hover",
      "input",
      "radio",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"radio-input\">\n  <label class=\"label\">\n    <input\n      type=\"radio\"\n      id=\"value-1\"\n      checked=\"\"\n      name=\"value-radio\"\n      value=\"value-1\"\n    />\n    <p class=\"text\">Designer</p>\n  </label>\n  <label class=\"label\">\n    <input type=\"radio\" id=\"value-2\" name=\"value-radio\" value=\"value-2\" />\n    <p class=\"text\">Student</p>\n  </label>\n  <label class=\"label\">\n    <input type=\"radio\" id=\"value-3\" name=\"value-radio\" value=\"value-3\" />\n    <p class=\"text\">Teacher</p>\n  </label>\n</div>",
    "css": "/* From Uiverse.io by Na3ar-17  - Tags: simple, black, hover, input, radio */\n.radio-input {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.radio-input * {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n.radio-input label {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  padding: 0px 20px;\n  width: 220px;\n  cursor: pointer;\n  height: 50px;\n  position: relative;\n}\n\n.radio-input label::before {\n  position: absolute;\n  content: \"\";\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 220px;\n  height: 45px;\n  z-index: -1;\n  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  border-radius: 10px;\n  border: 2px solid transparent;\n}\n.radio-input label:hover::before {\n  transition: all 0.2s ease;\n  background-color: #2a2e3c;\n}\n\n.radio-input .label:has(input:checked)::before {\n  background-color: #2d3750;\n  border-color: #435dd8;\n  height: 50px;\n}\n.radio-input .label .text {\n  color: #fff;\n}\n\n.radio-input .label input[type=\"radio\"] {\n  background-color: #202030;\n  appearance: none;\n  width: 17px;\n  height: 17px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.radio-input .label input[type=\"radio\"]:checked {\n  background-color: #435dd8;\n  -webkit-animation: puls 0.7s forwards;\n  animation: pulse 0.7s forwards;\n}\n\n.radio-input .label input[type=\"radio\"]:before {\n  content: \"\";\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  transition: all 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n  background-color: #fff;\n  transform: scale(0);\n}\n\n.radio-input .label input[type=\"radio\"]:checked::before {\n  transform: scale(1);\n}\n\n@keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 8px rgba(255, 255, 255, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);\n  }\n}"
  },
  {
    "id": "uiverse-ratinax_cold-rabbit-43",
    "title": "Cold Rabbit",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "Ratinax",
      "profileUrl": "https://uiverse.io/Ratinax/cold-rabbit-43"
    },
    "license": "MIT",
    "description": "Cold Rabbit · checkbox by Ratinax",
    "tags": [
      "checkbox",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<div class=\"radio-input\">\n  <input\n    value=\"value-1\"\n    name=\"value-radio\"\n    id=\"value-1\"\n    type=\"radio\"\n    class=\"star s1\"\n  />\n  <input\n    value=\"value-2\"\n    name=\"value-radio\"\n    id=\"value-2\"\n    type=\"radio\"\n    class=\"star s2\"\n  />\n  <input\n    value=\"value-3\"\n    name=\"value-radio\"\n    id=\"value-3\"\n    type=\"radio\"\n    class=\"star s3\"\n  />\n  <input\n    value=\"value-4\"\n    name=\"value-radio\"\n    id=\"value-4\"\n    type=\"radio\"\n    class=\"star s4\"\n  />\n  <input\n    value=\"value-5\"\n    name=\"value-radio\"\n    id=\"value-5\"\n    type=\"radio\"\n    class=\"star s5\"\n  />\n</div>",
    "css": "/* From Uiverse.io by Ratinax  - Tags:  */\n.radio-input {\n  display: flex;\n  scale: 0.15;\n  transform: rotate(180deg);\n}\n\n.star {\n  margin: 1em;\n  appearance: none;\n  --color: white;\n  border-left: 6.4721359549996em solid transparent;\n  border-right: 6.4721359549996em solid transparent;\n  border-bottom: 4em solid var(--color);\n  transform: rotate(0deg);\n  cursor: pointer;\n}\n\n.star:before {\n  content: \"\";\n  border-left: 6.4721359549996em solid transparent;\n  border-right: 6.4721359549996em solid transparent;\n  border-top: 4em solid var(--color);\n  position: absolute;\n  left: -6.4721359549996em;\n  transform: rotate(108deg);\n}\n\n.star:after {\n  content: \"\";\n  border-left: 6.4721359549996em solid transparent;\n  border-right: 6.4721359549996em solid transparent;\n  border-top: 4em solid var(--color);\n  position: absolute;\n  left: -6.4721359549996em;\n  transform: rotate(253deg);\n}\n\n.radio-input > .star:hover ~ .star,\n.radio-input > .star:hover,\n.radio-input > .star:checked ~ .star,\n.radio-input > .star:checked {\n  --color: yellow;\n}\n\n.radio-input > .star:checked ~ .star,\n.radio-input > .star:checked {\n  animation: rotate 0.5s linear forwards;\n  transform: rotate(360deg);\n  transition: transform 0.3s;\n}\n\n@keyframes rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    scale: 1.5;\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}"
  },
  {
    "id": "uiverse-selfmadesystem_fat-bullfrog-40",
    "title": "Fat Bullfrog",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "SelfMadeSystem",
      "profileUrl": "https://uiverse.io/SelfMadeSystem/fat-bullfrog-40"
    },
    "license": "MIT",
    "description": "Fat Bullfrog · checkbox by SelfMadeSystem",
    "tags": [
      "checkbox",
      "radio",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<div class=\"radio-input\">\n  <label class=\"container\">\n    <svg>\n      <rect class=\"hi\" pathLength=\"800\"></rect>\n    </svg>\n    <input type=\"radio\" id=\"value-1\" name=\"value-radio\" checked=\"\" value=\"value-1\">\n  </label>\n  <label class=\"container\">\n    <svg>\n      <rect class=\"hi\" pathLength=\"600\"></rect>\n    </svg>\n    <input type=\"radio\" id=\"value-2\" name=\"value-radio\" value=\"value-2\">\n  </label>\n  <label class=\"container\">\n    <svg>\n      <rect class=\"hi\" pathLength=\"700\"></rect>\n    </svg>\n    <input type=\"radio\" id=\"value-3\" name=\"value-radio\" value=\"value-3\">\n  </label>\n</div>",
    "css": "/* From Uiverse.io by SelfMadeSystem - Tags: radio */\n.radio-input {\n  --c: rgb(74, 156, 233);\n}\n\n.radio-input label {\n  position: relative;\n  display: inline-block;\n  border-radius: 99999px;\n  appearance: unset;\n  margin: 8px;\n  width: 3em;\n  height: 3em;\n}\n\n.radio-input input {\n  position: absolute;\n  border-radius: 99999px;\n  appearance: unset;\n  inset: 0.75em;\n  margin: 0;\n  transition: background-color 0.5s;\n}\n\n.radio-input input:checked {\n  background-color: var(--c);\n  filter: drop-shadow(0 0 10px var(--c));\n}\n\n.radio-input svg {\n  position: absolute;\n  pointer-events: none;\n  overflow: visible;\n  filter: drop-shadow(0 0 4px var(--c));\n}\n\n.radio-input svg .hi {\n  width: 3em;\n  height: 3em;\n  rx: 1.5em;\n  fill: transparent;\n  stroke: var(--c);\n  stroke-width: 0.25em;\n  stroke-dasharray: 70 30;\n  animation: strokeWee 32s linear infinite;\n}\n\n@keyframes strokeWee {\n  0% {\n    stroke-dashoffset: 0;\n  }\n\n  100% {\n    stroke-dashoffset: 1000;\n  }\n}"
  },
  {
    "id": "uiverse-arqui9897_stupid-kangaroo-64",
    "title": "Stupid Kangaroo",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "Arqui9897",
      "profileUrl": "https://uiverse.io/Arqui9897/stupid-kangaroo-64"
    },
    "license": "MIT",
    "description": "Stupid Kangaroo · checkbox by Arqui9897",
    "tags": [
      "checkbox",
      "radio",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 150,
    "accentColor": null,
    "html": "<label>\n    <input checked=\"\" name=\"example\" class=\"option-input radio circlegg\" type=\"radio\">\n  </label>\n  <label>\n    <input name=\"example\" class=\"option-input radio circlegg\" type=\"radio\">\n  </label>\n  <label>\n    <input name=\"example\" class=\"option-input radio circlegg\" type=\"radio\">\n  </label>",
    "css": "/* From Uiverse.io by Arqui9897 - Tags: radio */\n.option-input {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  -o-appearance: none;\n  appearance: none;\n  position: relative;\n  top: 13.33333px;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 40px;\n  width: 40px;\n  transition: all 0.15s ease-out 0s;\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  margin-right: 0.5rem;\n  outline: none;\n  z-index: 1000;\n}\n\n.option-input:hover {\n  background: #fa9115;\n}\n\n.option-input:checked {\n  background: #faa91b;\n}\n\n.option-input:checked::before {\n  width: 80px;\n  height: 80px;\n  display: flex;\n  font-weight: bold;\n  position: absolute;\n  align-items: center;\n  justify-content: center;\n}\n\n.option-input:checked::after {\n  -webkit-animation: click-wave 0.65s;\n  -moz-animation: click-wave 0.65s;\n  animation: click-wave 0.65s;\n  content: '';\n  display: block;\n  position: relative;\n  z-index: 100;\n}\n\n.option-input.radio {\n  border-radius: 50%;\n}\n\n.option-input.radio::after {\n  border-radius: 50%;\n}\n\n@keyframes click-wave {\n  0% {\n    height: 40px;\n    width: 40px;\n    opacity: 0.35;\n    position: relative;\n  }\n\n  100% {\n    height: 200px;\n    width: 200px;\n    margin-left: -80px;\n    margin-top: -80px;\n    opacity: 0;\n  }\n}\n\n.circlegg {\n  position: relative;\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  background: linear-gradient(45deg, transparent, transparent 40%, yellow),\n    linear-gradient(#040404, #0b0707);\n  animation: rotate 1.5s linear infinite;\n}\n\n.circlegg:before,\n.circlegg:after {\n  content: \" \";\n  position: absolute;\n  inset: 4px;\n  background: linear-gradient(#181818, #1f1c1c);\n  border-radius: inherit;\n}\n\n.circlegg:before {\n  background: linear-gradient(45deg, transparent, transparent 40%, rgb(206, 91, 49));\n  filter: blur(25px);\n}\n\n@keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n    filter: hue-rotate(360deg);\n  }\n}"
  },
  {
    "id": "uiverse-wizard503_serious-monkey-58",
    "title": "Serious Monkey",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "wizard503",
      "profileUrl": "https://uiverse.io/wizard503/serious-monkey-58"
    },
    "license": "MIT",
    "description": "Serious Monkey · checkbox by wizard503",
    "tags": [
      "checkbox",
      "radio",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 5000,
    "accentColor": null,
    "html": "<div class=\"box\">\n  <div class=\"radio-input\">\n    <input name=\"challenge\" value=\"Option 1\" type=\"radio\" id=\"1id\">\n    <label for=\"1id\">Never</label><br>\n    <input name=\"challenge\" value=\"Option 2\" type=\"radio\" id=\"2id\">\n    <label for=\"2id\">Stop</label><br>\n    <input name=\"challenge\" value=\"Option 3\" type=\"radio\" id=\"3id\">\n    <label for=\"3id\">Dreaming </label><br>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by wizard503 - Tags: radio */\n.box {\n  position: relative;\n  width: 300px;\n  height: 150px;\n  background: tra;\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.box::before {\n  content: \"\";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 400px;\n  height: 450px;\n  background: linear-gradient(0deg,transparent,transparent,#2df4e9,#2df4e9,#48fb00);\n  z-index: 1;\n  transform-origin: bottom right;\n  animation: animate 5s linear infinite;\n}\n\n.box::after {\n  content: \"\";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 400px;\n  height: 450px;\n  background: linear-gradient(0deg,transparent,transparent,#f07f90,#f07f90,#c70000);\n  z-index: 1;\n  transform-origin: bottom right;\n  animation: animate 5s linear infinite;\n  animation-delay: -2.5s;\n}\n\n@keyframes animate {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.box .radio-input {\n  position: absolute;\n  inset: 4px;\n  background-color: #161616;\n  background-image: radial-gradient(ellipse at center, #eb3be3 0%, #231f55 70%);\n  background-size: 100% 100%;\n  animation: noise 1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n  border-radius: 10px;\n  padding: 50px 0px;\n  z-index: 2;\n  display: flex;\n}\n\n@keyframes noise {\n  0%, 20%, 40%, 60%, 80%, 100% {\n    background-position: 0 0;\n  }\n\n  10% {\n    background-position: -5px -5px;\n  }\n\n  30% {\n    background-position: 5px -5px;\n  }\n\n  50% {\n    background-position: -5px 5px;\n  }\n\n  70% {\n    background-position: 5px 5px;\n  }\n}\n\n.radio-input input {\n  appearance: none;\n  width: 1.3em;\n  height: 1.3em;\n  margin: 12px;\n  font-size: inherit;\n  color: currentColor;\n  border: 0.2em solid #33f8ff;\n  box-shadow: 2px 2px 1px 0px rgb(7, 15, 63),4px 4px 5px 1px #690253 inset;\n  transform: translateY(-0.075em);\n  display: grid;\n  place-content: center;\n  outline: none;\n  transition: all 0.2s ease-in-out;\n}\n\n.radio-input input:checked {\n  width: 1.2em;\n  height: 1.2em;\n  appearance: none;\n  border-radius: 0%;\n  rotate: 45deg;\n  border: 0.2em solid #ff0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  transform: scale(1.4);\n  transition: 120ms transform ease-in-out;\n  box-shadow: 9px 9px 10px 1px #5f0875 inset,12px -12px 10px 1px #2df4e9 inset,0 0 20px #ff0,0 0 20px #ff0;\n}\n\nlabel {\n  cursor: pointer;\n  padding-top: 5%;\n  font-size: 15px;\n  font-weight: bold;\n  text-shadow: 0 0.1em 0.1em rgba(0, 0, 0, 0.2);\n  transition: color 0.2s cubic-bezier(0.45, 0.05, 0.55, 0.95);\n}"
  },
  {
    "id": "uiverse-galahhad_average-snail-50",
    "title": "Average Snail",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "Galahhad",
      "profileUrl": "https://uiverse.io/Galahhad/average-snail-50"
    },
    "license": "MIT",
    "description": "Average Snail · hover by Galahhad",
    "tags": [
      "hover",
      "input",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<input type=\"password\" name=\"text\" class=\"input\" pattern=\"\\d+\" placeholder=\"Numbers only or shake\">",
    "css": "/* From Uiverse.io by Galahhad - Tags: input */\n.input {\n  max-width: 190px;\n  padding: 12px;\n  border: none;\n  border-radius: 4px;\n  box-shadow: 2px 2px 7px 0 rgb(0, 0, 0, 0.2);\n  outline: none;\n  color: dimgray;\n}\n\n.input:invalid {\n  animation: justshake 0.3s forwards;\n  color: red;\n}\n\n@keyframes justshake {\n  25% {\n    transform: translateX(5px);\n  }\n\n  50% {\n    transform: translateX(-5px);\n  }\n\n  75% {\n    transform: translateX(5px);\n  }\n\n  100% {\n    transform: translateX-(5px);\n  }\n}"
  },
  {
    "id": "uiverse-sonusng_lovely-bulldog-50",
    "title": "Lovely Bulldog",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "sonusng",
      "profileUrl": "https://uiverse.io/sonusng/lovely-bulldog-50"
    },
    "license": "MIT",
    "description": "Lovely Bulldog · hover by sonusng",
    "tags": [
      "hover",
      "input",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 140,
    "accentColor": null,
    "html": "<input required=\"\" type=\"text\" placeholder=\"Your Name\">",
    "css": "/* From Uiverse.io by sonusng - Tags: input */\ninput {\n  width: 210px;\n  height: 50px;\n  padding: 0 16px;\n  background: transparent;\n  border-radius: 4px;\n  border: 1px solid #fe4567;\n  color: #f9f9f9;\n  animation: shake_541 0.14s 3;\n}\n\ninput:valid {\n  border-color: #45feaf;\n  animation: none;\n}\n\n@keyframes shake_541 {\n  0%, 100% {\n    translate: 0;\n  }\n\n  25% {\n    translate: 8px 0;\n  }\n\n  75% {\n    translate: -8px 0;\n  }\n}"
  },
  {
    "id": "uiverse-tiagoadag1203_fat-parrot-54",
    "title": "Fat Parrot",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "tiagoadag1203",
      "profileUrl": "https://uiverse.io/tiagoadag1203/fat-parrot-54"
    },
    "license": "MIT",
    "description": "Fat Parrot · hover by tiagoadag1203",
    "tags": [
      "hover",
      "animation",
      "blue",
      "purple",
      "input",
      "shadow",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 2000,
    "accentColor": null,
    "html": "<input placeholder=\"type it\" class=\"input\" name=\"text\" type=\"text\" />",
    "css": "/* From Uiverse.io by tiagoadag1203  - Tags: animation, blue, purple, input, shadow */\n.input {\n  max-width: 190px;\n  background-color: #1a1a1a;\n  border: none;\n  padding: 10px;\n  border-radius: 10px;\n  outline: none;\n  color: white;\n}\n\n.input:focus {\n  animation: rotateShadow 2s infinite linear;\n}\n\n@keyframes rotateShadow {\n  0% {\n    box-shadow: -2px -2px 8px 1px #aa00ff, 2px 2px 8px 1px #3700ff;\n  }\n  25% {\n    box-shadow: -2px 2px 8px 1px #aa00ff, 2px -2px 8px 1px #3700ff;\n  }\n  50% {\n    box-shadow: 2px 2px 8px 1px #aa00ff, -2px -2px 8px 1px #3700ff;\n  }\n  75% {\n    box-shadow: 2px -2px 8px 1px #aa00ff, -2px 2px 8px 1px #3700ff;\n  }\n  100% {\n    box-shadow: -2px -2px 8px 1px #aa00ff, 2px 2px 8px 1px #3700ff;\n  }\n}"
  },
  {
    "id": "uiverse-priyanshugupta28_bitter-bulldog-63",
    "title": "Bitter Bulldog",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "PriyanshuGupta28",
      "profileUrl": "https://uiverse.io/PriyanshuGupta28/bitter-bulldog-63"
    },
    "license": "MIT",
    "description": "Bitter Bulldog · hover by PriyanshuGupta28",
    "tags": [
      "hover",
      "input",
      "input effect",
      "css input",
      "html input",
      "cool input",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"input-container\">\n    <label for=\"name\" class=\"name\">Name:</label>\n    <input placeholder=\"Enter your name\" type=\"text\" class=\"input\">\n    <div class=\"underline\"></div>\n  </div>",
    "css": "/* From Uiverse.io by PriyanshuGupta28 - Tags: input, input effect , css input, html input, cool input */\n.input-container {\n  position: relative;\n  margin: 20px;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 5px;\n  color: #333;\n}\n\n.input[type=\"text\"] {\n  padding: 10px;\n  font-size: 16px;\n  border: none;\n  border-radius: 4px;\n  background-color: #f1f1f1;\n  color: #333;\n  width: 200px;\n  outline: none;\n}\n\n.underline {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 0;\n  height: 2px;\n  background-color: #4158D0;\n  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);\n  transition: width 0.3s;\n}\n\n.input[type=\"text\"]:focus + .underline {\n  width: 100%;\n}\n\n@keyframes floating-label {\n  0% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n\n  100% {\n    transform: translateY(-25px);\n    opacity: 0;\n  }\n}\n\n.input[type=\"text\"]:placeholder-shown + label {\n  position: absolute;\n  top: 50%;\n  left: 10px;\n  transform: translateY(-50%);\n  font-size: 14px;\n  color: #777;\n  pointer-events: none;\n  transition: transform 0.3s, font-size 0.3s, color 0.3s;\n}\n\n.input[type=\"text\"]:focus:not(:placeholder-shown) + label {\n  transform: translateY(-25px);\n  font-size: 12px;\n  background-color: #4158D0;\n  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);\n  animation: floating-label 0.3s forwards;\n}"
  },
  {
    "id": "uiverse-techbyelijah_fluffy-dolphin-33",
    "title": "Fluffy Dolphin",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "TechByElijah",
      "profileUrl": "https://uiverse.io/TechByElijah/fluffy-dolphin-33"
    },
    "license": "MIT",
    "description": "Fluffy Dolphin · hover by TechByElijah",
    "tags": [
      "hover",
      "simple",
      "input",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"input-container\">\n  <input type=\"text\" name=\"text\" class=\"input\" placeholder=\"Enter text\">\n  <div class=\"highlight\"></div>\n</div>",
    "css": "/* From Uiverse.io by TechByElijah - Tags: simple, input, animated */\n.input-container {\n  position: relative;\n}\n\n.input {\n  font-size: 1em;\n  padding: 0.6em 1em;\n  border: none;\n  border-radius: 6px;\n  background-color: #f8f8f8;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: background-color 0.3s ease, box-shadow 0.3s ease;\n  max-width: 200px;\n  color: #333;\n}\n\n.input:hover {\n  background-color: #f2f2f2;\n}\n\n.input:focus {\n  outline: none;\n  background-color: #fff;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n\n.input::placeholder {\n  color: #999;\n}\n\n.highlight {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 0;\n  height: 2px;\n  background-color: #6c63ff;\n  transition: width 0.3s ease;\n}\n\n.input:focus + .highlight {\n  width: 100%;\n}\n\n/* Optional: Animation on focus */\n@keyframes input-focus {\n  from {\n    transform: scale(1);\n    box-shadow: 0 0 0 rgba(0, 0, 0, 0.1);\n  }\n\n  to {\n    transform: scale(1.02);\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  }\n}\n\n.input:focus {\n  animation: input-focus 0.3s ease;\n}"
  },
  {
    "id": "uiverse-g4b413l_mean-stingray-9",
    "title": "Mean Stingray",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "G4b413l",
      "profileUrl": "https://uiverse.io/G4b413l/mean-stingray-9"
    },
    "license": "MIT",
    "description": "Mean Stingray · hover by G4b413l",
    "tags": [
      "hover",
      "input",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"group\">\n  <input required=\"\" type=\"text\" class=\"input\">\n  <span class=\"highlight\"></span>\n  <span class=\"bar\"></span>\n  <label>Name</label>\n</div>",
    "css": "/* From Uiverse.io by G4b413l - Tags: input */\n.group {\n position: relative;\n}\n\n.input {\n font-size: 16px;\n padding: 10px 10px 10px 5px;\n display: block;\n width: 200px;\n border: none;\n border-bottom: 1px solid #515151;\n background: transparent;\n}\n\n.input:focus {\n outline: none;\n}\n\nlabel {\n color: #999;\n font-size: 18px;\n font-weight: normal;\n position: absolute;\n pointer-events: none;\n left: 5px;\n top: 10px;\n transition: 0.2s ease all;\n -moz-transition: 0.2s ease all;\n -webkit-transition: 0.2s ease all;\n}\n\n.input:focus ~ label, .input:valid ~ label {\n top: -20px;\n font-size: 14px;\n color: #5264AE;\n}\n\n.bar {\n position: relative;\n display: block;\n width: 200px;\n}\n\n.bar:before, .bar:after {\n content: '';\n height: 2px;\n width: 0;\n bottom: 1px;\n position: absolute;\n background: #5264AE;\n transition: 0.2s ease all;\n -moz-transition: 0.2s ease all;\n -webkit-transition: 0.2s ease all;\n}\n\n.bar:before {\n left: 50%;\n}\n\n.bar:after {\n right: 50%;\n}\n\n.input:focus ~ .bar:before, .input:focus ~ .bar:after {\n width: 50%;\n}\n\n.highlight {\n position: absolute;\n height: 60%;\n width: 100px;\n top: 25%;\n left: 0;\n pointer-events: none;\n opacity: 0.5;\n}\n\n.input:focus ~ .highlight {\n animation: inputHighlighter 0.3s ease;\n}\n\n@keyframes inputHighlighter {\n from {\n  background: #5264AE;\n }\n\n to {\n  width: 0;\n  background: transparent;\n }\n}"
  },
  {
    "id": "uiverse-akshdeep74644_itchy-turtle-76",
    "title": "Itchy Turtle",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "Akshdeep74644",
      "profileUrl": "https://uiverse.io/Akshdeep74644/itchy-turtle-76"
    },
    "license": "MIT",
    "description": "Itchy Turtle · hover by Akshdeep74644",
    "tags": [
      "hover",
      "input",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<div class=\"container\">\n        <input type=\"text\" required=\"required\">\n        <label>You'r name</label>\n        <i></i>\n    </div>",
    "css": "/* From Uiverse.io by Akshdeep74644 - Tags: input */\n.container {\n  position: relative;\n  width: 200px;\n}\n\n.container input {\n  width: 100%;\n  background: transparent;\n  outline: none;\n  border: none;\n  color: #222;\n  padding: 8px;\n}\n\n.container label {\n  position: absolute;\n  left: 0;\n  top: 0;\n  color: rgba(105, 105, 105, 0.7);\n  text-transform: uppercase;\n  pointer-events: none;\n  transition: .5s;\n  font-weight: bold;\n}\n\n.container input:valid ~ label,\n.container input:focus ~ label {\n  color: rgb(10, 131, 212);\n  transform: translateY(-15px);\n  font-size: .6rem;\n}\n\n.container i {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background: #222;\n}\n\n.container i:before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, #ff1b69, #ff0, #2196f3, #9c27b0, #ff1b69);\n  animation: animate 3s linear infinite;\n}"
  },
  {
    "id": "uiverse-devkatyall_smart-lionfish-91",
    "title": "Smart Lionfish",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "devkatyall",
      "profileUrl": "https://uiverse.io/devkatyall/smart-lionfish-91"
    },
    "license": "MIT",
    "description": "Smart Lionfish · hover by devkatyall",
    "tags": [
      "hover",
      "input",
      "submit",
      "close",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"input\">\n  <input\n    class=\"to-do-input\"\n    placeholder=\"Your Tasks Go Here...\"\n    name=\"text\"\n    type=\"text\"\n  />\n  <div class=\"todo-line\">&nbsp;</div>\n</div>\n<button class=\"input button\">Add</button>",
    "css": "/* From Uiverse.io by devkatyall  - Tags: input, submit, close */\n.input {\n  display: block;\n}\n.to-do-input {\n  color: rgb(133, 198, 255);\n  display: block;\n  max-width: 190px;\n  height: 2.7em;\n  padding: 1em 1em;\n  font-family: \"Instrument Sans\", sans-serif;\n  border: none;\n  border-radius: 4px;\n  background-color: black;\n}\n.to-do-input:focus {\n  outline: none;\n}\n.todo-line {\n  z-index: 2;\n  position: absolute;\n  margin-top: -2px;\n  width: 216px;\n  height: 2px;\n  border-radius: 4px;\n  background-color: black;\n}\n.to-do-input:focus ~ .todo-line {\n  animation: draw 0.3s ease-in;\n  background: rgb(49, 228, 255);\n}\n@keyframes draw {\n  0% {\n    opacity: 0;\n    width: 0px;\n    filter: hue-rotate(0deg);\n  }\n  100% {\n    opacity: 1;\n    width: 200px;\n    filter: hue-rotate(360deg);\n  }\n}\n.input.button {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  display: flex;\n  height: 2.7em;\n  padding: 1em 1em;\n  align-items: center;\n  background-color: black;\n  border: none;\n  color: white;\n  transform: translateX(-4px);\n  cursor: pointer;\n  transition: 0.5s all;\n}\n.input.button:active {\n  background-color: rgb(49, 228, 255);\n  transition: 0.5s all;\n}"
  },
  {
    "id": "uiverse-akshdeep74644_dry-mouse-37",
    "title": "Dry Mouse",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "Akshdeep74644",
      "profileUrl": "https://uiverse.io/Akshdeep74644/dry-mouse-37"
    },
    "license": "MIT",
    "description": "Dry Mouse · hover by Akshdeep74644",
    "tags": [
      "hover",
      "input",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 350,
    "accentColor": null,
    "html": "<section>\n    <div class=\"input-group\">\n        <input class=\"input\" autocomplete=\"off\" name=\"text\" type=\"text\" required=\"\">\n        <label class=\"user-label\">Full Name</label>\n    </div>\n</section>",
    "css": "/* From Uiverse.io by Akshdeep74644 - Tags: input */\n.input-group {\n  position: relative;\n}\n\n.input {\n  border: 3px solid #000;\n  background: none;\n  padding: 1rem;\n  font-size: 1rem;\n  color: black;\n}\n\n.user-label {\n  position: absolute;\n  left: 15px;\n  color: #000;\n  pointer-events: none;\n  transform: translateY(1rem);\n  transition: 350ms;\n}\n\n.input:focus,\ninput:valid {\n  outline: none;\n  --angle: 0deg;\n  border-bottom: 3px solid;\n  border-image: conic-gradient(from var(--angle), red, yellow, lime, aqua, blue, magenta, red) 1;\n  animation: 3s rotate9234 linear infinite;\n}\n\n@keyframes rotate9234 {\n  to {\n    --angle: 360deg;\n  }\n}\n\n@property --angle {\n  syntax: '<angle>';\n  initial-value: 0deg;\n  inherits: false;\n}\n\n.input:focus~label,\ninput:valid~label {\n  transform: translateY(235%) scale(1);\n  background-color: #e8e8e8;\n  padding: 0 .2em;\n  color: #2196f3;\n}"
  },
  {
    "id": "uiverse-akshat-patel28_tender-dolphin-38",
    "title": "Tender Dolphin",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "akshat-patel28",
      "profileUrl": "https://uiverse.io/akshat-patel28/tender-dolphin-38"
    },
    "license": "MIT",
    "description": "Tender Dolphin · hover by akshat-patel28",
    "tags": [
      "hover",
      "input",
      "neon",
      "fillup",
      "box-shadow",
      "file upload",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 2000,
    "accentColor": null,
    "html": "<div class=\"input-div\">\n  <input class=\"input\" name=\"file\" type=\"file\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" stroke-linejoin=\"round\" stroke-linecap=\"round\" viewBox=\"0 0 24 24\" stroke-width=\"2\" fill=\"none\" stroke=\"currentColor\" class=\"icon\"><polyline points=\"16 16 12 12 8 16\"></polyline><line y2=\"21\" x2=\"12\" y1=\"12\" x1=\"12\"></line><path d=\"M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3\"></path><polyline points=\"16 16 12 12 8 16\"></polyline></svg>\n</div>",
    "css": "/* From Uiverse.io by akshat-patel28 - Tags: input, neon, fillup, box-shadow, file upload */\n.input-div {\n  position: relative;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  border: 2px solid rgb(1, 235, 252);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  box-shadow: 0px 0px 100px rgb(1, 235, 252) , inset 0px 0px 10px rgb(1, 235, 252),0px 0px 5px rgb(255, 255, 255);\n  animation: flicker 2s linear infinite;\n}\n\n.icon {\n  color: rgb(1, 235, 252);\n  font-size: 2rem;\n  cursor: pointer;\n  animation: iconflicker 2s linear infinite;\n}\n\n.input {\n  position: absolute;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer !important;\n}\n\n@keyframes flicker {\n  0% {\n    border: 2px solid rgb(1, 235, 252);\n    box-shadow: 0px 0px 100px rgb(1, 235, 252) , inset 0px 0px 10px rgb(1, 235, 252),0px 0px 5px rgb(255, 255, 255);\n  }\n\n  5% {\n    border: none;\n    box-shadow: none;\n  }\n\n  10% {\n    border: 2px solid rgb(1, 235, 252);\n    box-shadow: 0px 0px 100px rgb(1, 235, 252) , inset 0px 0px 10px rgb(1, 235, 252),0px 0px 5px rgb(255, 255, 255);\n  }\n\n  25% {\n    border: none;\n    box-shadow: none;\n  }\n\n  30% {\n    border: 2px solid rgb(1, 235, 252);\n    box-shadow: 0px 0px 100px rgb(1, 235, 252) , inset 0px 0px 10px rgb(1, 235, 252),0px 0px 5px rgb(255, 255, 255);\n  }\n\n  100% {\n    border: 2px solid rgb(1, 235, 252);\n    box-shadow: 0px 0px 100px rgb(1, 235, 252) , inset 0px 0px 10px rgb(1, 235, 252),0px 0px 5px rgb(255, 255, 255);\n  }\n}\n\n@keyframes iconflicker {\n  0% {\n    opacity: 1;\n  }\n\n  5% {\n    opacity: 0.2;\n  }\n\n  10% {\n    opacity: 1;\n  }\n\n  25% {\n    opacity: 0.2;\n  }\n\n  30% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}"
  },
  {
    "id": "uiverse-boryanakrasteva_hard-pig-16",
    "title": "Hard Pig",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "boryanakrasteva",
      "profileUrl": "https://uiverse.io/boryanakrasteva/hard-pig-16"
    },
    "license": "MIT",
    "description": "Hard Pig · hover by boryanakrasteva",
    "tags": [
      "hover",
      "input",
      "search",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"input-container\">\n  <input type=\"text\" name=\"text\" class=\"input\" placeholder=\"search...\">\n  <span class=\"icon\"> \n    <svg width=\"19px\" height=\"19px\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <path opacity=\"1\" d=\"M14 5H20\" stroke=\"#000\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path opacity=\"1\" d=\"M14 8H17\" stroke=\"#000\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2\" stroke=\"#000\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path opacity=\"1\" d=\"M22 22L20 20\" stroke=\"#000\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </g></svg>\n  </span>\n</div>",
    "css": "/* From Uiverse.io by boryanakrasteva - Tags: input, search */\n.input-container {\n  width: 220px;\n  position: relative;\n}\n\n.icon {\n  position: absolute;\n  right: 10px;\n  top: calc(50% + 5px);\n  transform: translateY(calc(-50% - 5px));\n}\n\n.input {\n  width: 100%;\n  height: 40px;\n  padding: 10px;\n  transition: .2s linear;\n  border: 2.5px solid black;\n  font-size: 14px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n\n.input:focus {\n  outline: none;\n  border: 0.5px solid black;\n  box-shadow: -5px -5px 0px black;\n}\n\n.input-container:hover > .icon {\n  animation: anim 1s linear infinite;\n}\n\n@keyframes anim {\n  0%,\n  100% {\n    transform: translateY(calc(-50% - 5px)) scale(1);\n  }\n\n  50% {\n    transform: translateY(calc(-50% - 5px)) scale(1.1);\n  }\n}"
  },
  {
    "id": "uiverse-harsha2lucky_lovely-firefox-67",
    "title": "Lovely Firefox",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "Harsha2lucky",
      "profileUrl": "https://uiverse.io/Harsha2lucky/lovely-firefox-67"
    },
    "license": "MIT",
    "description": "Lovely Firefox · hover by Harsha2lucky",
    "tags": [
      "hover",
      "input",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<form>\n\t<label for=\"search\">Search</label>\n\t<input required=\"\" pattern=\".*\\S.*\" type=\"search\" class=\"input\" id=\"search\">\n\t<span class=\"caret\"></span>\n</form>",
    "css": "/* From Uiverse.io by Harsha2lucky - Tags: input */\n.input {\n  color: black;\n  font: 1em/1.5 Hind, sans-serif;\n}\n\nform, .input, .caret {\n  margin: auto;\n}\n\nform {\n  position: relative;\n  width: 100%;\n  max-width: 17em;\n}\n\n.input, .caret {\n  display: block;\n  transition: all calc(1s * 0.5) linear;\n}\n\n.input {\n  background: transparent;\n  border-radius: 50%;\n  box-shadow: 0 0 0 0.25em inset;\n  caret-color: #255ff4;\n  width: 2em;\n  height: 2em;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.input:focus, .input:valid {\n  background: powderblue;\n  border-radius: 0.25em;\n  box-shadow: none;\n  padding: 0.75em 1em;\n  transition-duration: calc(1s * 0.25);\n  transition-delay: calc(1s * 0.25);\n  width: 100%;\n  height: 3em;\n}\n\n.input:focus {\n  animation: showCaret 1s steps(1);\n  outline: transparent;\n}\n\n.input:focus + .caret, .input:valid + .caret {\n  animation: handleToCaret 1s linear;\n  background: transparent;\n  width: 1px;\n  height: 1.5em;\n  transform: translate(0,-1em) rotate(-180deg) translate(7.5em,-0.25em);\n}\n\n.input::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nlabel {\n  color: #e3e4e8;\n  overflow: hidden;\n  position: absolute;\n  width: 0;\n  height: 0;\n}\n\n.caret {\n  background: black;\n  border-radius: 0 0 0.125em 0.125em;\n  margin-bottom: -0.6em;\n  width: 0.25em;\n  height: 1em;\n  transform: translate(0,-1em) rotate(-45deg) translate(0,0.875em);\n  transform-origin: 50% 0;\n}\n\n/* Animations */\n@keyframes showCaret {\n  from {\n    caret-color: transparent;\n  }\n\n  to {\n    caret-color: #255ff4;\n  }\n}\n\n@keyframes handleToCaret {\n  from {\n    background: currentColor;\n    width: 0.25em;\n    height: 1em;\n    transform: translate(0,-1em) rotate(-45deg) translate(0,0.875em);\n  }\n\n  25% {\n    background: currentColor;\n    width: 0.25em;\n    height: 1em;\n    transform: translate(0,-1em) rotate(-180deg) translate(0,0.875em);\n  }\n\n  50%, 62.5% {\n    background: #255ff4;\n    width: 1px;\n    height: 1.5em;\n    transform: translate(0,-1em) rotate(-180deg) translate(7.5em,2.5em);\n  }\n\n  75%, 99% {\n    background: #255ff4;\n    width: 1px;\n    height: 1.5em;\n    transform: translate(0,-1em) rotate(-180deg) translate(7.5em,-0.25em);\n  }\n\n  87.5% {\n    background: #255ff4;\n    width: 1px;\n    height: 1.5em;\n    transform: translate(0,-1em) rotate(-180deg) translate(7.5em,0.125em);\n  }\n\n  to {\n    background: transparent;\n    width: 1px;\n    height: 1.5em;\n    transform: translate(0,-1em) rotate(-180deg) translate(7.5em,-0.25em);\n  }\n}"
  },
  {
    "id": "uiverse-siraj-ha_serious-moose-70",
    "title": "Serious Moose",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "siraj-ha",
      "profileUrl": "https://uiverse.io/siraj-ha/serious-moose-70"
    },
    "license": "MIT",
    "description": "Serious Moose · hover by siraj-ha",
    "tags": [
      "hover",
      "input",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1500,
    "accentColor": null,
    "html": "<div class=\"search-bar-container\">\n  <form action=\"\">\n    <div class=\"search-container\">\n      <span class=\"search-icon\">\n        <svg\n          height=\"24\"\n          width=\"24\"\n          viewBox=\"0 0 24 24\"\n          xmlns=\"http://www.w3.org/2000/svg\"\n        >\n          <path\n            d=\"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\"\n            fill=\"currentColor\"\n          ></path>\n          <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n        </svg>\n      </span>\n\n      <input type=\"search\" class=\"search-input\" placeholder=\"Search...\" />\n      <span class=\"filter-icon\">\n        <span class=\"filter-icon\">\n          <svg\n            height=\"24\"\n            width=\"24\"\n            viewBox=\"0 0 24 24\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <path\n              d=\"M3 4.6C3 4.03995 3 3.75992 3.10899 3.54601C3.20487 3.35785 3.35785 3.20487 3.54601 3.10899C3.75992 3 4.03995 3 4.6 3H19.4C19.9601 3 20.2401 3 20.454 3.10899C20.6422 3.20487 20.7951 3.35785 20.891 3.54601C21 3.75992 21 4.03995 21 4.6V6.33726C21 6.58185 21 6.70414 20.9724 6.81923C20.9479 6.92127 20.9075 7.01881 20.8526 7.10828C20.7908 7.2092 20.7043 7.29568 20.5314 7.46863L14.4686 13.5314C14.2957 13.7043 14.2092 13.7908 14.1474 13.8917C14.0925 13.9812 14.0521 14.0787 14.0276 14.1808C14 14.2959 14 14.4182 14 14.6627V17L10 21V14.6627C10 14.4182 10 14.2959 9.97237 14.1808C9.94787 14.0787 9.90747 13.9812 9.85264 13.8917C9.7908 13.7908 9.70432 13.7043 9.53137 13.5314L3.46863 7.46863C3.29568 7.29568 3.2092 7.2092 3.14736 7.10828C3.09253 7.01881 3.05213 6.92127 3.02763 6.81923C3 6.70414 3 6.58185 3 6.33726V4.6Z\"\n              stroke-linejoin=\"round\"\n              stroke-linecap=\"round\"\n              stroke-width=\"2\"\n              stroke=\"#ffffff\"\n              fill=\"#000000\"\n            ></path>\n          </svg>\n        </span>\n      </span>\n    </div>\n  </form>\n</div>",
    "css": "/* From Uiverse.io by siraj-ha  - Tags: input */\n.search-bar-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.search-container {\n  border-radius: 15px;\n  max-width: max-content;\n  margin: 100px auto;\n  position: relative;\n  display: flex;\n  align-items: center;\n  background: #000;\n  box-shadow: 5px 5px 10px rgba(108, 110, 255, 0.8),\n    -5px -5px 10px rgba(255, 89, 233, 0.8);\n}\n\n.search-input {\n  flex: 1;\n  margin: 10px 0;\n  padding: 10px 20px;\n  border-radius: 30px;\n  border: none;\n  outline: none;\n  background-color: #000000;\n  color: white;\n  font-size: 16px;\n}\n\n.search-input::placeholder {\n  color: #888;\n}\n\n.material-symbols-outlined {\n  color: white;\n  cursor: pointer;\n}\n\n.search-icon,\n.filter-icon {\n  margin: 0 10px;\n}\n\n.search-icon {\n  color: white;\n  padding: 0 0 0 10px;\n}\n\n.filter-icon {\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border: 2px solid white;\n  border-radius: 10px;\n  margin-left: 10px;\n  box-sizing: border-box;\n  font-size: 24px;\n  line-height: 1;\n  box-shadow: inset 0 0 10px rgba(158, 202, 237, 0.5);\n  padding: 5px;\n}\n\n.search-container:hover {\n  box-shadow: 10px 10px 20px rgba(108, 110, 255, 0.8),\n    -10px -10px 20px rgba(255, 89, 233, 0.8);\n  animation: rotateGlow 1.5s infinite alternate;\n}\n\n@keyframes rotateGlow {\n  0% {\n    box-shadow: 10px 10px 20px rgba(108, 110, 255, 0.8),\n      -10px -10px 20px rgba(255, 89, 233, 0.8);\n  }\n  50% {\n    box-shadow: -10px -10px 20px rgba(255, 89, 233, 0.8),\n      10px 10px 20px rgba(108, 110, 255, 0.8);\n  }\n  100% {\n    box-shadow: 10px 10px 20px rgba(108, 110, 255, 0.8),\n      -10px -10px 20px rgba(255, 89, 233, 0.8);\n  }\n}"
  },
  {
    "id": "uiverse-fadhilmagass_proud-mule-71",
    "title": "Proud Mule",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "Fadhilmagass",
      "profileUrl": "https://uiverse.io/Fadhilmagass/proud-mule-71"
    },
    "license": "MIT",
    "description": "Proud Mule · hover by Fadhilmagass",
    "tags": [
      "hover",
      "minimalist",
      "gradient",
      "input",
      "search",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div id=\"container\" class=\"custom-container\">\n  <div id=\"searchBar\" class=\"custom-search-bar dark-mode\">\n    <svg\n      height=\"24\"\n      width=\"24\"\n      stroke=\"currentColor\"\n      viewBox=\"0 0 24 24\"\n      fill=\"none\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      class=\"custom-search-icon dark-mode\"\n    >\n      <path\n        d=\"M11 19a8 8 0 100-16 8 8 0 000 16zm8-8l5 5\"\n        stroke-width=\"2\"\n        stroke-linejoin=\"round\"\n        stroke-linecap=\"round\"\n      ></path>\n    </svg>\n    <input\n      placeholder=\"Search...\"\n      class=\"custom-search-input dark-mode\"\n      type=\"text\"\n    />\n    <svg\n      height=\"24\"\n      width=\"24\"\n      stroke=\"currentColor\"\n      viewBox=\"0 0 24 24\"\n      fill=\"none\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      class=\"custom-filter-icon dark-mode\"\n    >\n      <path\n        d=\"M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-6.414 6.414A2 2 0 0013 14.828V17.586a1 1 0 01-.293.707l-2 2A1 1 0 019 19.586V14.828a2 2 0 00-.293-1.414L2.293 6.707A1 1 0 012 6V4z\"\n        stroke-width=\"2\"\n        stroke-linejoin=\"round\"\n        stroke-linecap=\"round\"\n      ></path>\n    </svg>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by Fadhilmagass  - Tags: minimalist, gradient, input, search, input, minimalist, gradient, search */\n.custom-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  min-height: 100%;\n  padding: 20px;\n  margin: 0;\n  transition: background-color 0.3s;\n}\n\n.custom-container.dark-mode {\n  background-color: black;\n}\n\n.custom-container.light-mode {\n  background-color: white;\n}\n\n.custom-search-bar {\n  width: 100%;\n  max-width: 600px;\n  border-radius: 50px;\n  padding: 10px 20px;\n  display: flex;\n  align-items: center;\n  border: 2px solid;\n  animation: rgb-outline 5s linear infinite;\n  transition: background 0.3s, box-shadow 0.3s;\n}\n\n@keyframes rgb-outline {\n  0% {\n    border-color: rgb(255, 0, 0);\n  }\n\n  33% {\n    border-color: rgb(0, 255, 0);\n  }\n\n  66% {\n    border-color: rgb(0, 0, 255);\n  }\n\n  100% {\n    border-color: rgb(255, 0, 0);\n  }\n}\n\n.custom-search-bar.dark-mode {\n  background: linear-gradient(145deg, #333, #000);\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);\n}\n\n.custom-search-bar.light-mode {\n  background: linear-gradient(145deg, #ddd, #fff);\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\n\n.custom-search-input {\n  background: transparent;\n  border: none;\n  outline: none;\n  width: 100%;\n  padding: 10px;\n  font-size: 16px;\n  transition: color 0.3s;\n}\n\n.custom-search-input.dark-mode {\n  color: white;\n}\n\n.custom-search-input.light-mode {\n  color: black;\n}\n\n.custom-search-input::placeholder {\n  transition: color 0.3s;\n}\n\n.custom-search-input::placeholder.dark-mode {\n  color: #888;\n}\n\n.custom-search-input::placeholder.light-mode {\n  color: #aaa;\n}\n\n.custom-search-icon,\n.custom-filter-icon {\n  margin: 0 10px;\n  transition: color 0.3s;\n}\n\n.custom-search-icon.dark-mode,\n.custom-filter-icon.dark-mode {\n  color: white;\n}\n\n.custom-search-icon.light-mode,\n.custom-filter-icon.light-mode {\n  color: black;\n}\n\n.toggle-theme {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  padding: 10px;\n  border: none;\n  background-color: gray;\n  color: white;\n  border-radius: 5px;\n  cursor: pointer;\n}"
  },
  {
    "id": "uiverse-mrcool7_white-wombat-51",
    "title": "White Wombat",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "mRcOol7",
      "profileUrl": "https://uiverse.io/mRcOol7/white-wombat-51"
    },
    "license": "MIT",
    "description": "White Wombat · hover by mRcOol7",
    "tags": [
      "hover",
      "flashy",
      "minimalist",
      "gradient",
      "input",
      "search",
      "glow",
      "border"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<input type=\"text\" class=\"search-input\" placeholder=\"Search...\" />",
    "css": "/* From Uiverse.io by mRcOol7  - Tags: flashy, minimalist, gradient, input, search, glow, border, hover effect */\n.search-container {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: linear-gradient(to right, #5c5c5c, #f5f5f5);\n  padding: 30px;\n  border-radius: 15px;\n  transition: background 0.3s ease;\n  perspective: 1000px;\n}\n\n.label {\n  position: absolute;\n  top: 50%;\n  left: 20px;\n  transform: translateY(-50%);\n  color: #999;\n  pointer-events: none;\n  transition: transform 0.3s ease, font-size 0.3s ease, color 0.3s ease,\n    text-shadow 0.3s ease;\n}\n\n.search-input {\n  position: relative;\n  width: 230px;\n  height: 40px;\n  padding: 12px;\n  border: 2px solid #ccc;\n  border-radius: 8px;\n  background: linear-gradient(to right, #d9d9d9, #f8f8f8);\n  font-size: 16px;\n  color: #555;\n  outline: none;\n  transition: box-shadow 0.3s ease, background 0.3s ease, color 0.3s ease,\n    border-color 0.3s ease, transform 0.3s ease;\n  transform-style: preserve-3d;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.2) inset; /* Improved box-shadow for a realistic feel */\n}\n\n.search-input:focus,\n.search-input:not(:placeholder-shown) {\n  border-color: #4caf50;\n  background: linear-gradient(to right, #c2f0c2, #f0f0f0);\n  transform: rotateX(20deg);\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 0, 0, 0.2) inset; /* Improved box-shadow on focus */\n}\n\n.search-input:focus + .label,\n.search-input:not(:placeholder-shown) + .label {\n  transform: translateY(-120%) scale(0.8);\n  font-size: 12px;\n  color: #4caf50;\n  text-shadow: 0 0 5px rgba(76, 175, 80, 0.6);\n}\n\n.search-input:hover {\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 0, 0, 0.2) inset; /* Improved box-shadow on hover */\n  background: linear-gradient(to right, #e6e6e6, #f9f9f9);\n  border-color: #999;\n}\n\n.clear-button {\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  transform: translateY(-50%);\n  color: #999;\n  cursor: pointer;\n  opacity: 0;\n  transition: opacity 0.3s ease, transform 0.3s ease, color 0.3s ease;\n}\n\n.clear-button:hover {\n  color: #4caf50;\n  transform: scale(1.1);\n}\n\n.search-input:not(:focus):not(:placeholder-shown) + .clear-button {\n  opacity: 1;\n}\n\n.shine {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(\n    to bottom right,\n    rgba(255, 255, 255, 0.6),\n    transparent\n  );\n  border-radius: 8px;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n\n.search-input:focus + .shine {\n  opacity: 1;\n}\n\n.search-icon {\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  transform: translateY(-50%);\n  color: #999;\n  cursor: pointer;\n  transition: color 0.3s ease, transform 0.3s ease, filter 0.3s ease;\n  border-radius: 50%;\n}\n\n.search-input:focus + .search-icon {\n  color: #4caf50;\n  transform: translateY(-50%) scale(1.1);\n  filter: drop-shadow(0 0 5px rgba(76, 175, 80, 0.6));\n}\n\n@keyframes inputPulse {\n  0%,\n  100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n}\n\n.search-input:focus {\n  animation: inputPulse 0.5s ease;\n}"
  },
  {
    "id": "uiverse-mythsoul_strange-insect-92",
    "title": "Strange Insect",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "Mythsoul",
      "profileUrl": "https://uiverse.io/Mythsoul/strange-insect-92"
    },
    "license": "MIT",
    "description": "Strange Insect · hover by Mythsoul",
    "tags": [
      "hover",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"custom-search-container\">\n  <div class=\"custom-search-bar\">\n    <div class=\"custom-icon\">\n      <svg\n        class=\"feather feather-search\"\n        stroke-linejoin=\"round\"\n        stroke-linecap=\"round\"\n        stroke-width=\"2\"\n        stroke=\"currentColor\"\n        fill=\"none\"\n        viewBox=\"0 0 24 24\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <circle r=\"8\" cy=\"11\" cx=\"11\"></circle>\n        <line y2=\"16.65\" x2=\"16.65\" y1=\"21\" x1=\"21\"></line>\n      </svg>\n    </div>\n    <input placeholder=\"Search...\" class=\"custom-search-input\" type=\"text\" />\n    <div class=\"custom-icon\">\n      <svg\n        class=\"feather feather-filter\"\n        stroke-linejoin=\"round\"\n        stroke-linecap=\"round\"\n        stroke-width=\"2\"\n        stroke=\"currentColor\"\n        fill=\"none\"\n        viewBox=\"0 0 24 24\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <polygon points=\"22 3 2 3 10 13 10 19 14 21 14 13 22 3\"></polygon>\n      </svg>\n    </div>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by Mythsoul  - Tags:  */\n.custom-search-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  background-color: #000;\n  background-image: radial-gradient(\n    circle,\n    rgba(255, 0, 255, 0.1),\n    rgba(0, 0, 255, 0.1)\n  );\n  background-size: cover, 10px 10px;\n}\n\n.custom-search-bar {\n  display: flex;\n  align-items: center;\n  background-color: #111;\n  padding: 10px;\n  border-radius: 20px;\n  position: relative;\n  width: 80%;\n  max-width: 400px;\n  box-shadow: 0 0 15px rgba(255, 0, 150, 0.5), 0 0 15px rgba(0, 0, 255, 0.5);\n  transition: width 0.3s;\n}\n\n.custom-icon {\n  color: #fff;\n  margin: 0 10px;\n  display: flex;\n  align-items: center;\n}\n\n.custom-search-input {\n  border: none;\n  outline: none;\n  background: transparent;\n  color: #fff;\n  font-size: 16px;\n  width: 100%;\n}\n\n.custom-search-input::placeholder {\n  color: #aaa;\n}\n\n.custom-search-bar:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 20px;\n  background: linear-gradient(\n    90deg,\n    rgba(255, 0, 255, 0.5),\n    rgba(0, 0, 255, 0.5)\n  );\n  z-index: -1;\n  filter: blur(10px);\n  animation: glow 4s infinite alternate;\n}\n\n@keyframes glow {\n  0% {\n    filter: blur(10px);\n    opacity: 0.7;\n    transform: scale(1);\n  }\n  50% {\n    filter: blur(20px);\n    opacity: 1;\n    transform: scale(1.05);\n  }\n  100% {\n    filter: blur(10px);\n    opacity: 0.7;\n    transform: scale(1);\n  }\n}\n\n.custom-icon svg {\n  width: 24px;\n  height: 24px;\n  stroke: currentColor;\n  transition: color 0.3s, transform 0.3s;\n}\n\n.custom-icon:hover svg {\n  color: #ff00ff;\n  cursor: pointer;\n  transform: scale(1.1);\n}\n\n/* Media queries for better responsiveness */\n@media (max-width: 600px) {\n  .custom-search-bar {\n    width: 90%;\n  }\n}\n\n@media (max-width: 400px) {\n  .custom-search-bar {\n    width: 100%;\n  }\n\n  .custom-search-input {\n    font-size: 14px;\n  }\n\n  .custom-icon {\n    margin: 0 5px;\n  }\n\n  .custom-icon svg {\n    width: 20px;\n    height: 20px;\n  }\n}"
  },
  {
    "id": "uiverse-vikas7754_yellow-stingray-17",
    "title": "Yellow Stingray",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "vikas7754",
      "profileUrl": "https://uiverse.io/vikas7754/yellow-stingray-17"
    },
    "license": "MIT",
    "description": "Yellow Stingray · hover by vikas7754",
    "tags": [
      "hover",
      "input",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 4000,
    "accentColor": null,
    "html": "<div class=\"circle-left\"></div>\n<div class=\"card\">\n  <div class=\"search-icon\">\n    <svg\n      stroke-width=\"24.9084\"\n      stroke=\"#ffffff\"\n      xml:space=\"preserve\"\n      viewBox=\"-48.84 -48.84 586.08 586.08\"\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      id=\"Capa_1\"\n      version=\"1.1\"\n      width=\"20px\"\n      height=\"20px\"\n      fill=\"#d0d0d0\"\n    >\n      <g stroke-width=\"0\" id=\"SVGRepo_bgCarrier\"></g>\n      <g\n        stroke-linejoin=\"round\"\n        stroke-linecap=\"round\"\n        id=\"SVGRepo_tracerCarrier\"\n      ></g>\n      <g id=\"SVGRepo_iconCarrier\">\n        <g>\n          <g>\n            <path\n              d=\"M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z\"\n            ></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  </div>\n  <input\n    autocomplete=\"off\"\n    class=\"input\"\n    placeholder=\"Search...\"\n    name=\"text\"\n    type=\"text\"\n  />\n  <div class=\"filter-icon\">\n    <a href=\"https://freecodez.com\">\n      <svg\n        xmlns=\"http://www.w3.org/2000/svg\"\n        viewBox=\"-1.5 -1.5 28.00 28.00\"\n        fill=\"#d0d0d0\"\n        width=\"30px\"\n        height=\"30px\"\n      >\n        <g stroke-width=\"0\" id=\"SVGRepo_bgCarrier\"></g>\n        <g\n          stroke-linejoin=\"round\"\n          stroke-linecap=\"round\"\n          id=\"SVGRepo_tracerCarrier\"\n        ></g>\n        <g id=\"SVGRepo_iconCarrier\">\n          <path\n            stroke-linejoin=\"round\"\n            stroke-linecap=\"round\"\n            stroke-width=\"0.17500000000000002\"\n            stroke=\"#ffffff\"\n            d=\"M22 3.58002H2C1.99912 5.28492 2.43416 6.96173 3.26376 8.45117C4.09337 9.94062 5.29 11.1932 6.73999 12.09C7.44033 12.5379 8.01525 13.1565 8.41062 13.8877C8.80598 14.6189 9.00879 15.4388 9 16.27V21.54L15 20.54V16.25C14.9912 15.4188 15.194 14.599 15.5894 13.8677C15.9847 13.1365 16.5597 12.5178 17.26 12.07C18.7071 11.175 19.9019 9.92554 20.7314 8.43988C21.5608 6.95422 21.9975 5.28153 22 3.58002Z\"\n          ></path>\n        </g>\n      </svg>\n    </a>\n  </div>\n</div>\n<div class=\"circle-right\"></div>",
    "css": "/* From Uiverse.io by vikas7754  - Tags: input */\n.input {\n  width: 100%;\n  height: 100%;\n  border: 2px solid rgba(255, 255, 255, 0.15);\n  outline: none;\n  z-index: 1;\n  background: transparent;\n  padding: 10px;\n  padding-left: 35px;\n  padding-right: 40px;\n  font-size: 16px;\n  border-radius: 16px;\n  color: #fff;\n}\n\n.input:focus {\n  border: 1px solid rgb(242, 0, 255);\n  background: #191919;\n}\n\n.search-icon,\n.filter-icon {\n  position: absolute;\n  left: 10px;\n  top: 55%;\n  transform: translateY(-50%);\n  z-index: 2;\n}\n\n.filter-icon {\n  left: unset;\n  right: 10px;\n}\n\n.circle-left,\n.circle-right {\n  position: absolute;\n  left: 25%;\n  top: 40%;\n  background: linear-gradient(rgb(255, 0, 242), rgb(255, 0, 195));\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  filter: blur(50px);\n  z-index: -1;\n}\n\n.circle-right {\n  left: unset;\n  right: 26%;\n  top: 47%;\n  background: linear-gradient(blue, rgb(255, 0, 230));\n}\n\n.card {\n  position: relative;\n  height: 60px;\n  width: 100%;\n  max-width: 350px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  border-radius: 16px;\n}\n\n.card::before {\n  content: \"\";\n  position: absolute;\n  width: 50px;\n  height: 600%;\n  background: linear-gradient(#ff00e6, #ffffff33, #295bff);\n  animation: animate 4s linear infinite;\n}\n\n.card::after {\n  content: \"\";\n  inset: 1.5px;\n  position: absolute;\n  background: #0000002b;\n  border-radius: 15px;\n  backdrop-filter: blur(30px);\n}\n\n@keyframes animate {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}"
  },
  {
    "id": "uiverse-yaya12085_new-rabbit-37",
    "title": "New Rabbit",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "Yaya12085",
      "profileUrl": "https://uiverse.io/Yaya12085/new-rabbit-37"
    },
    "license": "MIT",
    "description": "New Rabbit · hover by Yaya12085",
    "tags": [
      "hover",
      "animation",
      "gradient",
      "button",
      "input",
      "focus",
      "challenge",
      "input effect"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"wrapper\">\n  <span class=\"search\">\n    <svg\n      fill=\"none\"\n      color=\"#000000\"\n      height=\"24\"\n      width=\"24\"\n      viewBox=\"0 0 24 24\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n    >\n      <path\n        stroke-linejoin=\"round\"\n        stroke-linecap=\"round\"\n        stroke-width=\"1.5\"\n        stroke=\"currentColor\"\n        d=\"M17.5 17.5L22 22\"\n      ></path>\n      <path\n        stroke-linejoin=\"round\"\n        stroke-width=\"1.5\"\n        stroke=\"currentColor\"\n        d=\"M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z\"\n      ></path></svg\n  ></span>\n\n  <input type=\"text\" name=\"text\" class=\"input\" placeholder=\"Search...\" />\n  <div class=\"coloredborder\"></div>\n\n  <button class=\"filter\">\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      viewBox=\"0 0 24 24\"\n      width=\"24\"\n      height=\"24\"\n      color=\"#000000\"\n      fill=\"none\"\n    >\n      <path\n        d=\"M8.85746 12.5061C6.36901 10.6456 4.59564 8.59915 3.62734 7.44867C3.3276 7.09253 3.22938 6.8319 3.17033 6.3728C2.96811 4.8008 2.86701 4.0148 3.32795 3.5074C3.7889 3 4.60404 3 6.23433 3H17.7657C19.396 3 20.2111 3 20.672 3.5074C21.133 4.0148 21.0319 4.8008 20.8297 6.37281C20.7706 6.83191 20.6724 7.09254 20.3726 7.44867C19.403 8.60062 17.6261 10.6507 15.1326 12.5135C14.907 12.6821 14.7583 12.9567 14.7307 13.2614C14.4837 15.992 14.2559 17.4876 14.1141 18.2442C13.8853 19.4657 12.1532 20.2006 11.226 20.8563C10.6741 21.2466 10.0043 20.782 9.93278 20.1778C9.79643 19.0261 9.53961 16.6864 9.25927 13.2614C9.23409 12.9539 9.08486 12.6761 8.85746 12.5061Z\"\n        stroke=\"currentColor\"\n        stroke-width=\"1.5\"\n        stroke-linecap=\"round\"\n        stroke-linejoin=\"round\"\n      ></path>\n    </svg>\n  </button>\n</div>",
    "css": "/* From Uiverse.io by Yaya12085  - Tags: animation, gradient, button, input, focus, challenge, input effect , input */\n.wrapper {\n  --color1: #cc279a;\n  --color2: #4d38de;\n  --color3: #010101;\n  --white: #fff;\n  --radius: 10px;\n  --size: 280px;\n  --icon: 35px;\n  --border-color: rgba(255, 255, 255, 0.3);\n  --line: rgba(114, 114, 114, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: var(--radius);\n  background-color: var(--color3);\n  max-width: var(--size);\n  width: 100%;\n  padding: 2px 8px;\n  position: relative;\n  border: 1px solid var(--border-color);\n  transition: 0.2s 0s linear;\n}\n.wrapper:focus-within {\n  box-shadow: -100px 0px 80px -20px var(--color1),\n    100px 0 80px -20px var(--color2), 0px 0px 80px -0px var(--color3);\n}\n.wrapper::after {\n  position: absolute;\n  content: \"\";\n  inset: -50px;\n  border-radius: var(--radius);\n  z-index: -2;\n  background-color: var(--color3);\n  background-image: linear-gradient(\n      0deg,\n      transparent 24%,\n      var(--line) 25%,\n      var(--line) 26%,\n      transparent 27%,\n      transparent 74%,\n      var(--line) 75%,\n      var(--line) 76%,\n      transparent 77%,\n      transparent\n    ),\n    linear-gradient(\n      90deg,\n      transparent 24%,\n      var(--line) 25%,\n      var(--line) 26%,\n      transparent 27%,\n      transparent 74%,\n      var(--line) 75%,\n      var(--line) 76%,\n      transparent 77%,\n      transparent\n    );\n  background-size: 30px 30px;\n  border: 10px solid rgba(0, 0, 0, 0.6);\n}\n.input {\n  flex: 1;\n  height: 100%;\n  padding: 16px 6px 16px calc(var(--icon) + 6px);\n  outline: none;\n  border: none;\n  background-color: transparent;\n  color: var(--white);\n  font-weight: 400;\n}\n\n.input::placeholder {\n  color: var(--white);\n  font-weight: 400;\n}\n\n.search,\n.filter {\n  width: var(--icon);\n  height: var(--icon);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--radius);\n}\n\n.search svg,\n.filter svg {\n  color: var(--white);\n}\n.search {\n  position: absolute;\n  pointer-events: none;\n}\n.filter {\n  border: none;\n  background-color: transparent;\n  outline: 0;\n  cursor: pointer;\n  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2);\n}\n\n.coloredborder {\n  pointer-events: none;\n  content: \"\";\n  position: absolute;\n  inset: -4px;\n  border-radius: var(--radius);\n  overflow: hidden;\n  background-repeat: no-repeat;\n}\n.coloredborder::after {\n  position: absolute;\n  content: \"\";\n  inset: -10px;\n  overflow: hidden;\n  border-radius: inherit;\n  background-size: 100%;\n  background-image: transparent;\n  z-index: -1;\n  filter: blur(10px);\n}\n\n.input:focus + .coloredborder::after {\n  background-color: var(--color3);\n  background-repeat: no-repeat;\n  background-image: linear-gradient(60deg, var(--color2), var(--color1));\n  animation: border-animate 3s linear infinite alternate;\n}\n\n@keyframes border-animate {\n  0% {\n    background-position: calc(var(--size) * -1) calc(var(--size) / 6 * -1);\n  }\n\n  100% {\n    background-position: var(--size) calc(var(--size) / 6);\n  }\n}"
  },
  {
    "id": "uiverse-0xnihilism_calm-baboon-55",
    "title": "Calm Baboon",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "0xnihilism",
      "profileUrl": "https://uiverse.io/0xnihilism/calm-baboon-55"
    },
    "license": "MIT",
    "description": "Calm Baboon · hover by 0xnihilism",
    "tags": [
      "hover",
      "simple",
      "input",
      "smooth",
      "flip",
      "hover button",
      "brutalist",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"brutalist-container\">\n  <input\n    placeholder=\"TYPE HERE\"\n    class=\"brutalist-input smooth-type\"\n    type=\"text\"\n  />\n  <label class=\"brutalist-label\">SMOOTH BRUTALIST</label>\n</div>",
    "css": "/* From Uiverse.io by 0xnihilism  - Tags: simple, input, smooth, flip, hover button, brutalist */\n.brutalist-container {\n  position: relative;\n  width: 250px;\n  font-family: monospace;\n}\n\n.brutalist-input {\n  width: 100%;\n  padding: 15px;\n  font-size: 18px;\n  font-weight: bold;\n  color: #000;\n  background-color: #fff;\n  border: 4px solid #000;\n  position: relative;\n  overflow: hidden;\n  border-radius: 0;\n  outline: none;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  box-shadow: 5px 5px 0 #000, 10px 10px 0 #4a90e2;\n}\n\n@keyframes glitch {\n  0% {\n    transform: translate(0);\n  }\n  20% {\n    transform: translate(-2px, 2px);\n  }\n  40% {\n    transform: translate(-2px, -2px);\n  }\n  60% {\n    transform: translate(2px, 2px);\n  }\n  80% {\n    transform: translate(2px, -2px);\n  }\n  100% {\n    transform: translate(0);\n  }\n}\n\n.brutalist-input:focus {\n  animation: focus-pulse 4s cubic-bezier(0.25, 0.8, 0.25, 1) infinite,\n    glitch 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) infinite;\n}\n\n.brutalist-input:focus::after {\n  content: \"\";\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  right: -2px;\n  bottom: -2px;\n  background: white;\n  z-index: -1;\n}\n\n.brutalist-input:focus::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: black;\n  z-index: -2;\n  clip-path: inset(0 100% 0 0);\n  animation: glitch-slice 4s steps(2, end) infinite;\n}\n\n@keyframes glitch-slice {\n  0% {\n    clip-path: inset(0 100% 0 0);\n  }\n  10% {\n    clip-path: inset(0 5% 0 0);\n  }\n  20% {\n    clip-path: inset(0 80% 0 0);\n  }\n  30% {\n    clip-path: inset(0 10% 0 0);\n  }\n  40% {\n    clip-path: inset(0 50% 0 0);\n  }\n  50% {\n    clip-path: inset(0 30% 0 0);\n  }\n  60% {\n    clip-path: inset(0 70% 0 0);\n  }\n  70% {\n    clip-path: inset(0 15% 0 0);\n  }\n  80% {\n    clip-path: inset(0 90% 0 0);\n  }\n  90% {\n    clip-path: inset(0 5% 0 0);\n  }\n  100% {\n    clip-path: inset(0 100% 0 0);\n  }\n}\n\n.brutalist-label {\n  position: absolute;\n  left: -3px;\n  top: -35px;\n  font-size: 14px;\n  font-weight: bold;\n  color: #fff;\n  background-color: #000;\n  padding: 5px 10px;\n  transform: rotate(-1deg);\n  z-index: 1;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.brutalist-input:focus + .brutalist-label {\n  transform: rotate(0deg) scale(1.05);\n  background-color: #4a90e2;\n}\n\n.smooth-type {\n  position: relative;\n  overflow: hidden;\n}\n\n.smooth-type::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0) 100%);\n  z-index: 1;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n\n.smooth-type:focus::before {\n  opacity: 1;\n  animation: type-gradient 2s linear infinite;\n}\n\n@keyframes type-gradient {\n  0% {\n    background-position: 300px 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n\n.brutalist-input::placeholder {\n  color: #888;\n  transition: color 0.3s ease;\n}\n\n.brutalist-input:focus::placeholder {\n  color: transparent;\n}\n\n.brutalist-input:focus {\n  animation: focus-pulse 4s cubic-bezier(0.25, 0.8, 0.25, 1) infinite;\n}\n\n@keyframes focus-pulse {\n  0%,\n  100% {\n    border-color: #000;\n  }\n  50% {\n    border-color: #4a90e2;\n  }\n}"
  },
  {
    "id": "uiverse-0xnihilism_silly-quail-9",
    "title": "Silly Quail",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "0xnihilism",
      "profileUrl": "https://uiverse.io/0xnihilism/silly-quail-9"
    },
    "license": "MIT",
    "description": "Silly Quail · hover by 0xnihilism",
    "tags": [
      "hover",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"input-container\">\n  <input\n    class=\"input\"\n    name=\"text\"\n    type=\"text\"\n    placeholder=\"Search the internet...\"\n  />\n</div>",
    "css": "/* From Uiverse.io by 0xnihilism  - Tags:  */\n.input {\n  width: 100%;\n  max-width: 270px;\n  height: 60px;\n  padding: 12px;\n  font-size: 18px;\n  font-family: \"Courier New\", monospace;\n  color: #000;\n  background-color: #fff;\n  border: 4px solid #000;\n  border-radius: 0;\n  outline: none;\n  transition: all 0.3s ease;\n  box-shadow: 8px 8px 0 #000;\n}\n\n.input::placeholder {\n  color: #888;\n}\n\n.input:hover {\n  transform: translate(-4px, -4px);\n  box-shadow: 12px 12px 0 #000;\n}\n\n.input:focus {\n  background-color: #000;\n  color: #fff;\n  border-color: #ffffff;\n}\n\n.input:focus::placeholder {\n  color: #fff;\n}\n\n@keyframes typing {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n\n@keyframes blink {\n  50% {\n    border-color: transparent;\n  }\n}\n\n.input:focus::after {\n  content: \"|\";\n  position: absolute;\n  right: 10px;\n  animation: blink 0.7s step-end infinite;\n}\n\n.input:valid {\n  animation: typing 2s steps(30, end);\n}\n.input-container {\n  position: relative;\n  width: 100%;\n  max-width: 270px;\n}\n\n.input {\n  width: 100%;\n  height: 60px;\n  padding: 12px;\n  font-size: 18px;\n  font-family: \"Courier New\", monospace;\n  color: #000;\n  background-color: #fff;\n  border: 4px solid #000;\n  border-radius: 0;\n  outline: none;\n  transition: all 0.3s ease;\n  box-shadow: 8px 8px 0 #000;\n}\n\n.input::placeholder {\n  color: #888;\n}\n\n.input:hover {\n  transform: translate(-4px, -4px);\n  box-shadow: 12px 12px 0 #000;\n}\n\n.input:focus {\n  background-color: #010101;\n  color: #fff;\n  border-color: #d6d9dd;\n}\n\n.input:focus::placeholder {\n  color: #fff;\n}\n\n@keyframes shake {\n  0% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-5px) rotate(-5deg);\n  }\n  50% {\n    transform: translateX(5px) rotate(5deg);\n  }\n  75% {\n    transform: translateX(-5px) rotate(-5deg);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n\n.input:focus {\n  animation: shake 0.5s ease-in-out;\n}\n\n@keyframes glitch {\n  0% {\n    transform: none;\n    opacity: 1;\n  }\n  7% {\n    transform: skew(-0.5deg, -0.9deg);\n    opacity: 0.75;\n  }\n  10% {\n    transform: none;\n    opacity: 1;\n  }\n  27% {\n    transform: none;\n    opacity: 1;\n  }\n  30% {\n    transform: skew(0.8deg, -0.1deg);\n    opacity: 0.75;\n  }\n  35% {\n    transform: none;\n    opacity: 1;\n  }\n  52% {\n    transform: none;\n    opacity: 1;\n  }\n  55% {\n    transform: skew(-1deg, 0.2deg);\n    opacity: 0.75;\n  }\n  50% {\n    transform: none;\n    opacity: 1;\n  }\n  72% {\n    transform: none;\n    opacity: 1;\n  }\n  75% {\n    transform: skew(0.4deg, 1deg);\n    opacity: 0.75;\n  }\n  80% {\n    transform: none;\n    opacity: 1;\n  }\n  100% {\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.input:not(:placeholder-shown) {\n  animation: glitch 1s linear infinite;\n}\n\n.input-container::after {\n  content: \"|\";\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #000;\n  animation: blink 0.7s step-end infinite;\n}\n\n@keyframes blink {\n  50% {\n    opacity: 0;\n  }\n}\n\n.input:focus + .input-container::after {\n  color: #fff;\n}\n\n.input:not(:placeholder-shown) {\n  font-weight: bold;\n  letter-spacing: 1px;\n  text-shadow: 0px 0px 0 #000;\n}"
  },
  {
    "id": "uiverse-guilhermeyohan_white-cat-52",
    "title": "White Cat",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "guilhermeyohan",
      "profileUrl": "https://uiverse.io/guilhermeyohan/white-cat-52"
    },
    "license": "MIT",
    "description": "White Cat · card by guilhermeyohan",
    "tags": [
      "card",
      "notification",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 2000,
    "accentColor": null,
    "html": "<div class=\"level-up-notification\">\n  <p class=\"kdkkkd\">Congratulations! You have reached level 10!</p>\n</div>",
    "css": "/* From Uiverse.io by guilhermeyohan - Tags: notification */\n.level-up-notification {\n  width: 330px;\n  margin: auto;\n  background-color: #2ed603a1;\n  border-radius: 10px;\n  padding: 20px;\n  animation: pulse 2s ease infinite, slide-in 1.5s ease;\n}\n\n.level-up-notification p.kdkkkd {\n  font-size: 15px;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  margin: 0;\n  text-align: center;\n  color: #ffffff;\n  text-shadow: 1px 2px rgba(60, 59, 59, 0.754);\n}\n\n@keyframes slide-in {\n  0% {\n    transform: translateY(-100%);\n    opacity: 0;\n  }\n\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(1.2);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}"
  },
  {
    "id": "uiverse-tursynbek_gentle-kangaroo-69",
    "title": "Gentle Kangaroo",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "tursynbek",
      "profileUrl": "https://uiverse.io/tursynbek/gentle-kangaroo-69"
    },
    "license": "MIT",
    "description": "Gentle Kangaroo · card by tursynbek",
    "tags": [
      "card",
      "notification",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"level-up\">\n  <span class=\"text\">LEVEL UP!</span>\n</div>",
    "css": "/* From Uiverse.io by tursynbek - Tags: notification */\n.level-up {\n  font-family: 'Montserrat', sans-serif;\n  font-size: 25px;\n  font-weight: bold;\n  color: #ffffff;\n  background-color: #ff5733;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0px 5px 10px rgba(0,0,0,0.2);\n  text-align: center;\n  transition: all 0.3s ease;\n}\n\n.text {\n  position: relative;\n  display: inline-block;\n  animation: bounce 1s infinite;\n}\n\n.level-up:hover {\n  background-color: #ffffff;\n  color: #ff5733;\n  transform: scale(1.1);\n}\n\n.level-up:hover .text {\n  animation: none;\n}\n\n@keyframes bounce {\n  0% {\n    transform: translateY(0);\n  }\n\n  50% {\n    transform: translateY(-10px);\n  }\n\n  100% {\n    transform: translateY(0);\n  }\n}\n\n.level-up:hover::before {\n  content: \"\";\n  display: block;\n  width: 10px;\n  height: 10px;\n  background-color: #ff5733;\n  border-radius: 50%;\n  position: absolute;\n  top: -20px;\n  left: calc(50% - 5px);\n  animation: bounce 0.5s infinite;\n}"
  },
  {
    "id": "uiverse-activeicedigital_fuzzy-fly-47",
    "title": "Fuzzy Fly",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "ActiveIceDigital",
      "profileUrl": "https://uiverse.io/ActiveIceDigital/fuzzy-fly-47"
    },
    "license": "MIT",
    "description": "Fuzzy Fly · card by ActiveIceDigital",
    "tags": [
      "card",
      "notification",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div class=\"notification\">\n  <span>Congratulatioins Champion!</span>\n  <div id=\"level\">\n    <div class=\"one\">↑</div>\n    <div id=\"lvl\">Level 10</div>\n    <div class=\"one\">↑</div>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by ActiveIceDigital - Tags: notification */\n@keyframes ud {\n  0% {\n    transform: translateY(-1px);\n    opacity: 0;\n  }\n\n  50% {\n    transform: translateY(-5px);\n    opacity: 1;\n  }\n\n  100% {\n    transform: translateY(-1px);\n    opacity: 0;\n  }\n}\n\n.notification {\n  width: 250px;\n  height: 60px;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 14px;\n  padding: 5px 15px;\n  text-align: center;\n  box-shadow: 2px 2px 0px 1px rgba(255, 0, 0, 0.5) inset, \n  -2px -2px 0px 1px rgba(255, 0, 0, 0.8) inset,\n  0px 2px 5px 0px rgba(0, 0, 0, .25);\n}\n\n#lvl {\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-size: 20px;\n}\n\n.notification > span {\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n#level {\n  display: flex;\n  justify-content: center;\n  margin-top: 5px;\n  gap: 5px;\n}\n\n.one {\n  display: inline-block;\n  font-size: 25px;\n  line-height: 25px;\n  animation: ud 1s ease-in-out infinite;\n  color: rgba(255, 0, 0, 0.95);\n}"
  },
  {
    "id": "uiverse-jyefu013_unlucky-bird-53",
    "title": "Unlucky Bird",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "jyefu013",
      "profileUrl": "https://uiverse.io/jyefu013/unlucky-bird-53"
    },
    "license": "MIT",
    "description": "Unlucky Bird · card by jyefu013",
    "tags": [
      "card",
      "notification",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<button class=\"btn\">\n  <span class=\"default-text\">New Level Unlocked!</span>\n  <span class=\"hover-text\">Congrats!</span>\n</button>",
    "css": "/* From Uiverse.io by jyefu013 - Tags: notification */\n.btn {\n  padding: 10px;\n  border-radius: 5px;\n  font-size: 15px;\n  background-color: black;\n  color: rgb(238, 255, 0);\n  position: relative;\n  overflow: hidden;\n}\n\n.default-text {\n  z-index: 1;\n}\n\n.hover-text {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0;\n  transition: opacity 0.5s ease-in-out;\n}\n\n.btn:hover .default-text {\n  opacity: 0;\n}\n\n.btn:hover .hover-text {\n  opacity: 1;\n  animation: bounce 0.5s ease-in-out;\n}\n\n@keyframes bounce {\n  0% {\n    transform: scale(1);\n  }\n\n  25% {\n    transform: scale(1.2);\n  }\n\n  75% {\n    transform: scale(1.1);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n\n.btn:hover::after {\n  content: '';\n  position: absolute;\n  top: -10px;\n  left: -10px;\n  width: calc(100% + 20px);\n  height: calc(100% + 20px);\n  border-radius: 50%;\n  background-color: rgba(255, 255, 255, 0.5);\n  opacity: 0;\n  animation: fireworks 1s linear forwards;\n}\n\n@keyframes fireworks {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  100% {\n    transform: scale(4);\n    opacity: 0;\n  }\n}"
  },
  {
    "id": "uiverse-mazonthemoon_curvy-mole-83",
    "title": "Curvy Mole",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "MazontheMoon",
      "profileUrl": "https://uiverse.io/MazontheMoon/curvy-mole-83"
    },
    "license": "MIT",
    "description": "Curvy Mole · card by MazontheMoon",
    "tags": [
      "card",
      "notification",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 2000,
    "accentColor": null,
    "html": "<div class=\"notification\"><span class=\"star\">★</span> <span class=\"text\">New level</span> <span class=\"star\">★</span></div>",
    "css": "/* From Uiverse.io by MazontheMoon - Tags: notification */\n.notification {\n  position: relative;\n  width: 250px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  font-family: Verdana;\n  color: white;\n  font-size: 16px;\n  border-radius: 1rem;\n  text-transform: uppercase;\n  font-weight: bold;\n  letter-spacing: 2px;\n  line-height: 1.5;\n  padding: 0.5rem;\n  overflow: hidden;\n  background-color: #840f00;\n  -webkit-box-shadow: inset 0 1px 0 hsl(6, 100%, 25%), 0 2px 0 hsl(6, 100%, 22%),\n    0 3px 0 hsl(6, 100%, 18%), 0 4px 0 hsl(6, 100%, 16%),\n    0 5px 0 hsl(6, 100%, 12%), 0 6px 0 hsl(6, 100%, 10%),\n    0 7px 0 hsl(6, 100%, 8%), 0 9px 0 hsl(6, 100%, 6%);\n  box-shadow: inset 0 1px 0 hsl(6, 100%, 25%), 0 2px 0 hsl(6, 100%, 22%),\n    0 3px 0 hsl(6, 100%, 18%), 0 4px 0 hsl(6, 100%, 16%),\n    0 5px 0 hsl(6, 100%, 12%), 0 6px 0 hsl(6, 100%, 10%),\n    0 7px 0 hsl(6, 100%, 8%), 0 9px 0 hsl(6, 100%, 6%);\n}\n\n.notification:hover {\n  top: 2px;\n  background: radial-gradient(hsl(6, 100%, 18%), hsl(6, 100%, 16%));\n  -webkit-box-shadow: inset 0 1px 0 hsl(6, 100%, 25%), 0 2px 0 hsl(6, 100%, 22%),\n    0 3px 0 hsl(6, 100%, 18%), 0 4px 0 hsl(6, 100%, 16%),\n    0 5px 0 hsl(6, 100%, 12%), 0 6px 0 hsl(6, 100%, 10%);\n  box-shadow: inset 0 1px 0 hsl(6, 100%, 25%), 0 2px 0 hsl(6, 100%, 22%),\n    0 3px 0 hsl(6, 100%, 18%), 0 4px 0 hsl(6, 100%, 16%),\n    0 5px 0 hsl(6, 100%, 12%), 0 6px 0 hsl(6, 100%, 10%);\n}\n\n.star {\n  padding: 0.5rem;\n  -webkit-transform: scale(1.5);\n  -ms-transform: scale(1.5);\n  transform: scale(1.5);\n  -webkit-animation: fade 2s ease-in 1s infinite;\n  animation: fade 2s ease-in 1s infinite;\n}\n\n@-webkit-keyframes fade {\n  0% {\n    color: rgba(0, 0, 0, 0.9);\n    -webkit-transform: scale(1.5);\n    transform: scale(1.5);\n  }\n\n  50% {\n    color: rgba(0, 0, 0, 0.1);\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n\n  100% {\n    color: rgba(0, 0, 0, 0.9);\n    -webkit-transform: scale(1.5);\n    transform: scale(1.5);\n  }\n}\n\n@keyframes fade {\n  0% {\n    color: rgba(0, 0, 0, 0.9);\n    -webkit-transform: scale(1.5);\n    transform: scale(1.5);\n  }\n\n  50% {\n    color: rgba(0, 0, 0, 0.1);\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n\n  100% {\n    color: rgba(0, 0, 0, 0.9);\n    -webkit-transform: scale(1.5);\n    transform: scale(1.5);\n  }\n}"
  },
  {
    "id": "uiverse-newbiners_warm-deer-90",
    "title": "Warm Deer",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "newbiners",
      "profileUrl": "https://uiverse.io/newbiners/warm-deer-90"
    },
    "license": "MIT",
    "description": "Warm Deer · card by newbiners",
    "tags": [
      "card",
      "notification",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 2000,
    "accentColor": null,
    "html": "<div class=\"notification\">\n  <span>L</span>\n  <span>E</span>\n  <span>V</span>\n  <span>E</span>\n  <span>L</span>\n  <span>U</span>\n  <span>P</span>\n  <span>!</span>\n</div>",
    "css": "/* From Uiverse.io by newbiners - Tags: notification */\n.notification {\n  width: 250px;\n  height: 60px;\n  background: rgb(146, 146, 146);\n  border-radius: 14px;\n  font-size: 2.3em;\n  font-weight: 700;\n  color: black;\n  text-shadow: 2px 2px yellow;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  gap: 4px;\n}\n\n.notification span {\n  -webkit-animation: levelup 2s ease infinite;\n  animation: levelup 2s ease infinite;\n}\n\n.notification span:nth-child(2) {\n  -webkit-animation-delay: 0.25s;\n  animation-delay: 0.25s;\n}\n\n.notification span:nth-child(3) {\n  -webkit-animation-delay: 0.5s;\n  animation-delay: 0.5s;\n}\n\n.notification span:nth-child(4) {\n  -webkit-animation-delay: 0.75s;\n  animation-delay: 0.75s;\n}\n\n.notification span:nth-child(5) {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s;\n}\n\n.notification span:nth-child(6) {\n  -webkit-animation-delay: 1.25s;\n  animation-delay: 1.25s;\n}\n\n.notification span:nth-child(7) {\n  -webkit-animation-delay: 1.5s;\n  animation-delay: 1.5s;\n}\n\n.notification span:nth-child(8) {\n  -webkit-animation-delay: 1.75s;\n  animation-delay: 1.75s;\n}\n\n@-webkit-keyframes levelup {\n  0%, 100% {\n    -webkit-transform: translateY(10px);\n    transform: translateY(10px);\n  }\n\n  50% {\n    -webkit-transform: translateY(-10px);\n    transform: translateY(-10px);\n  }\n}\n\n@keyframes levelup {\n  0%, 100% {\n    -webkit-transform: translateY(10px);\n    transform: translateY(10px);\n  }\n\n  50% {\n    -webkit-transform: translateY(-10px);\n    transform: translateY(-10px);\n  }\n}"
  },
  {
    "id": "uiverse-ahmed150up_terrible-shrimp-45",
    "title": "Terrible Shrimp",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "ahmed150up",
      "profileUrl": "https://uiverse.io/ahmed150up/terrible-shrimp-45"
    },
    "license": "MIT",
    "description": "Terrible Shrimp · card by ahmed150up",
    "tags": [
      "card",
      "notification",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 3000,
    "accentColor": null,
    "html": "<div class=\"notification\">\n  <svg viewBox=\"0 0 200 200\">\n    <path id=\"star\" d=\"M100,25 L129,79 L186,79 L139,119 L158,173 L100,137 L42,173 L61,119 L14,79 L71,79 z\"></path>\n    <text x=\"50%\" y=\"50%\" text-anchor=\"middle\" alignment-baseline=\"central\">Level Up!</text>\n  </svg>\n</div>",
    "css": "/* From Uiverse.io by ahmed150up - Tags: notification */\n.notification {\n  background-color: #FFF;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  z-index: 999;\n}\n\n.notification svg {\n  width: 140px;\n  height: 140px;\n  fill: #FFD700;\n  animation: rotate 3s ease-in-out infinite;\n}\n\n.notification #star {\n  animation: fill 3s ease-in-out infinite;\n  transform-origin: center;\n}\n\n.notification text {\n  font-size: 30px;\n  font-weight: bold;\n  fill: #000;\n}\n\n@keyframes fill {\n  0% {\n    fill: transparent;\n    transform: scale(1);\n  }\n\n  50% {\n    fill: #FFD700;\n    transform: scale(1.2);\n  }\n\n  100% {\n    fill: transparent;\n    transform: scale(1);\n  }\n}\n\n@keyframes rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}"
  },
  {
    "id": "uiverse-gianluks90_funny-impala-78",
    "title": "Funny Impala",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "Gianluks90",
      "profileUrl": "https://uiverse.io/Gianluks90/funny-impala-78"
    },
    "license": "MIT",
    "description": "Funny Impala · card by Gianluks90",
    "tags": [
      "card",
      "notification",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 4000,
    "accentColor": null,
    "html": "<div class=\"notification gradient-border\">\n  <div class=\"icon\">\n    ❤️\n  </div>\n  <div class=\"message-container\">\n    <div class=\"title\">Congratulations!</div>\n    <div class=\"message\">You've reached a new level\n!</div>\n  </div>\n\n</div>",
    "css": "/* From Uiverse.io by Gianluks90 - Tags: notification */\n.notification {\n  width: 255px;\n  height: 60px;\n  background: white;\n  border-radius: 25px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.icon {\n  height: 40px;\n  width: 40px;\n  border-radius: 20px;\n  background-color: rgb(236, 236, 236);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 2px;\n}\n\n.message-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.title {\n  padding: 2px;\n  text-transform: uppercase;\n  color: black;\n  font-weight: 600;\n}\n\n.message {\n  padding: 2px;\n  color: black;\n  font-size: small;\n}\n\n.gradient-border {\n  --borderSize: 3px;\n  position: relative;\n  border-radius: var(--borderSize);\n}\n\n.gradient-border:after {\n  content: '';\n  position: absolute;\n  top: calc(-1 * var(--borderSize));\n  left: calc(-1 * var(--borderSize));\n  height: calc(100% + var(--borderSize) * 2);\n  width: calc(100% + var(--borderSize) * 2);\n  background: linear-gradient(75deg, #E50000, #FF8D00, #FFEE00, #008121, #004CFF, #760188);\n  border-radius: calc(2 * var(--borderSize));\n  z-index: -1;\n  animation: gradientAnimation 4s ease alternate infinite;\n  background-size: 300% 300%;\n}\n\n@keyframes gradientAnimation {\n  0% {\n    background-position: 0% 50%;\n  }\n\n  50% {\n    background-position: 100% 50%;\n  }\n\n  100% {\n    background-position: 0% 50%;\n  }\n}"
  },
  {
    "id": "uiverse-fujitawa_slimy-vampirebat-16",
    "title": "Slimy Vampirebat",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "Fujitawa",
      "profileUrl": "https://uiverse.io/Fujitawa/slimy-vampirebat-16"
    },
    "license": "MIT",
    "description": "Slimy Vampirebat · card by Fujitawa",
    "tags": [
      "card",
      "notification",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div class=\"notification\"> <div class=\"txt\"> Mission passed! <div class=\"lvl\"> 10</div> </div> <button class=\"ff3\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M15.4695 11.2929C15.0789 10.9024 14.4458 10.9024 14.0553 11.2929C13.6647 11.6834 13.6647 12.3166 14.0553 12.7071C14.4458 13.0976 15.0789 13.0976 15.4695 12.7071C15.86 12.3166 15.86 11.6834 15.4695 11.2929Z\" fill=\"currentColor\"></path>\n  <path d=\"M16.1766 9.17156C16.5671 8.78103 17.2003 8.78103 17.5908 9.17156C17.9813 9.56208 17.9813 10.1952 17.5908 10.5858C17.2003 10.9763 16.5671 10.9763 16.1766 10.5858C15.7861 10.1952 15.7861 9.56208 16.1766 9.17156Z\" fill=\"currentColor\"></path>\n  <path d=\"M19.7121 11.2929C19.3216 10.9024 18.6885 10.9024 18.2979 11.2929C17.9074 11.6834 17.9074 12.3166 18.2979 12.7071C18.6885 13.0976 19.3216 13.0976 19.7121 12.7071C20.1027 12.3166 20.1027 11.6834 19.7121 11.2929Z\" fill=\"currentColor\"></path>\n  <path d=\"M16.1766 13.4142C16.5671 13.0237 17.2003 13.0237 17.5908 13.4142C17.9813 13.8048 17.9813 14.4379 17.5908 14.8284C17.2003 15.219 16.5671 15.219 16.1766 14.8284C15.7861 14.4379 15.7861 13.8048 16.1766 13.4142Z\" fill=\"currentColor\"></path>\n  <path d=\"M6 13H4V11H6V9H8V11H10V13H8V15H6V13Z\" fill=\"currentColor\"></path>\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7 5C3.13401 5 0 8.13401 0 12C0 15.866 3.13401 19 7 19H17C20.866 19 24 15.866 24 12C24 8.13401 20.866 5 17 5H7ZM17 7H7C4.23858 7 2 9.23858 2 12C2 14.7614 4.23858 17 7 17H17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7Z\" fill=\"currentColor\"></path>\n</svg> Next </button> </div>",
    "css": "/* From Uiverse.io by Fujitawa - Tags: notification */\n.notification {\n  width: 250px;\n  height: 60px;\n  color: black;\n  background: white;\n  border-radius: 3px;\n  display: grid;\n  grid-auto-flow: column;\n  align-items: center;\n  justify-items: center;\n  -webkit-animation-name: pulse;\n  animation-name: pulse;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  animation-iteration-count: infinite;\n  border: 3px solid #ece0b4;\n}\n\n.notification:hover  button.ff3 {\n  background-color: #f4e0a6;\n}\n\n.notification:hover {\n  border-color: #f4e0a6;\n}\n\n.notification:hover .lvl {\n  border-color: #f4e0a6;\n}\n\nbutton.ff3 {\n  background-color: #ece0b4;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  justify-content: center;\n  flex-direction: column;\n  gap: 3px;\n  cursor: pointer;\n  border: 0;\n  transition: .5s;\n  font-weight: bold;\n}\n\n.lvl {\n  background: white;\n  padding: 6px;\n  border-radius: 100px;\n  border: 3px solid #ece0b4;\n  position: absolute;\n  left: -10px;\n  transform: scale(.8);\n  top: -10px;\n}\n\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes pulse {\n  0% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}"
  },
  {
    "id": "uiverse-alexruix_gentle-octopus-87",
    "title": "Gentle Octopus",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "alexruix",
      "profileUrl": "https://uiverse.io/alexruix/gentle-octopus-87"
    },
    "license": "MIT",
    "description": "Gentle Octopus · card by alexruix",
    "tags": [
      "card",
      "notification",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div class=\"box-avatar\">\n  <div class=\"avatar\">\n      <svg class=\"avatar-icon\" viewBox=\"0 0 17 15\">\n        <path d=\"M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z\"></path>\n      </svg>\n    </div>\n</div>\n  <div class=\"notification\">    \n    <div class=\"notification-info\">\n      <p class=\"notification-text\"> <span class=\"highlight\">Player</span> reached <b>level 15!</b> </p>\n    </div>\n  </div>",
    "css": "/* From Uiverse.io by alexruix - Tags: notification */\n.notification {\n  display: flex;\n  width: 0;\n  background: #ddd;\n  border-radius: 10px;\n  animation: slideIn 1s ease-in-out 1.25s forwards;\n}\n\n.notification-info {\n  display: inline-flex;\n  overflow: hidden;\n  background-color: #181818;\n  color: #fff;\n  width: 100%;\n  border-radius: 12px 8px 8px 12px;\n  padding-left: 16px;\n  align-items: center;\n}\n\n.notification-text {\n  opacity: 0;\n  padding: 10px 8px;\n  white-space: nowrap;\n  animation: textInfo 1s ease-in-out 1.5s forwards;\n}\n\n.highlight {\n  color: #ffc300;\n}\n\n.box-avatar {\n  background-color: #181818;\n  padding: 6px;\n  width: 4.5em;\n  height: 4.5em;\n  border-radius: 50%;\n  margin-right: -20px;\n  box-shadow: 6.2px 3.1px 38.2px -6px rgba(0, 0, 0, 0.2), 63px 32px 176px -6px rgba(0, 0, 0, 0.1);\n  z-index: 1;\n}\n\n.avatar {\n  background-color: #FDA203;\n  padding: .6em;\n  border-radius: 50%;\n}\n\n.avatar-icon {\n  width: 100%;\n  height: 100%;\n  fill: white;\n  animation: grow 2s ease-in-out 3;\n}\n\n/*Animations*/\n@keyframes slideIn {\n  0% {\n    width: 0;\n    padding: 2px;\n  }\n\n  100% {\n    width: 250px;\n    padding: 2px;\n  }\n}\n\n@keyframes textInfo {\n  0% {\n    opacity: 0%;\n    margin-left: -20em;\n  }\n\n  100% {\n    opacity: 100%;\n    margin-left: 0;\n  }\n}\n\n@keyframes grow {\n  0% {\n    transform: scale(100%) translateY(0%);\n  }\n\n  50% {\n    transform: scale(100%) translateY(-10%);\n  }\n\n  100% {\n    transform: scale(100%) translateY(0%);\n  }\n}"
  },
  {
    "id": "uiverse-devsleonardo_red-goat-27",
    "title": "Red Goat",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "devsleonardo",
      "profileUrl": "https://uiverse.io/devsleonardo/red-goat-27"
    },
    "license": "MIT",
    "description": "Red Goat · card by devsleonardo",
    "tags": [
      "card",
      "notification",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<div class=\"notification\">\n  <svg viewBox=\"0 0 100 100\" class=\"trophy\">\n    <g>\n      <path d=\"M10,50 L40,50 L30,10 L20,10 Z\"></path>\n      <path d=\"M60,50 L90,50 L80,10 L70,10 Z\"></path>\n      <path d=\"M20,10 L80,10 L70,30 L30,30 Z\"></path>\n      <path d=\"M30,30 L70,30 L60,50 L40,50 Z\"></path>\n      <path d=\"M25,75 L75,75 L85,90 L15,90 Z\"></path>\n      <path d=\"M40,50 L60,50 L55,70 L45,70 Z\"></path>\n    </g>\n  </svg>\n  <p>Congratulations!\n  </p><p>You reached level 10!</p>\n</div>",
    "css": "/* From Uiverse.io by devsleonardo - Tags: notification */\n.notification {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  margin: 50px;\n  color: white;\n}\n\n.trophy {\n  fill: gold;\n  width: 80px;\n  height: 80px;\n  animation: bounce 0.5s ease-in-out 1;\n}\n\n.trophy:hover {\n  animation: spin 1s ease-in-out 1;\n}\n\n@keyframes bounce {\n  0% {\n    transform: translateY(0);\n  }\n\n  25% {\n    transform: translateY(-20px);\n  }\n\n  50% {\n    transform: translateY(0);\n  }\n\n  75% {\n    transform: translateY(-10px);\n  }\n\n  100% {\n    transform: translateY(0);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}"
  },
  {
    "id": "uiverse-john-cfo_quiet-puma-22",
    "title": "Quiet Puma",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "John-CFO",
      "profileUrl": "https://uiverse.io/John-CFO/quiet-puma-22"
    },
    "license": "MIT",
    "description": "Quiet Puma · card by John-CFO",
    "tags": [
      "card",
      "notification",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 5000,
    "accentColor": null,
    "html": "<div class=\"card\">\n      <svg height=\"180px\" width=\"200px\" version=\"1.1\" id=\"Layer_1\" viewBox=\"0 0 512 512\" xml:space=\"preserve\" class=\"metal\">\n        <path style=\"fill: #ffc61b\" d=\"M256,512c-76.231,0-138.249-62.018-138.249-138.249c0-76.232,62.018-138.25,138.249-138.25\n\tc23.8,0,47.273,6.151,67.886,17.79c7.033,3.971,9.515,12.892,5.544,19.927c-3.971,7.033-12.896,9.515-19.927,5.544\n\tc-16.232-9.166-34.733-14.009-53.503-14.009c-60.102,0-108.999,48.898-108.999,109S195.899,482.751,256,482.751\n\ts108.999-48.896,108.999-108.999c0-8.077,6.549-14.625,14.625-14.625c8.076,0,14.625,6.548,14.625,14.625\n\tC394.249,449.982,332.231,512,256,512z\"></path>\n        <path style=\"fill: #fee187\" d=\"M256,424.249c-27.845,0-50.498-22.653-50.498-50.498s22.653-50.499,50.498-50.499\n\ts50.498,22.654,50.498,50.499C306.498,401.596,283.845,424.249,256,424.249z\"></path>\n        <g>\n          <path style=\"fill: #ffc61b\" d=\"M256,438.874c-35.909,0-65.123-29.214-65.123-65.123s29.215-65.125,65.123-65.125\n\t\ts65.123,29.215,65.123,65.124S291.908,438.874,256,438.874z M256,337.877c-19.781,0-35.873,16.092-35.873,35.874\n\t\tc0,19.781,16.092,35.873,35.873,35.873s35.873-16.092,35.873-35.873C291.873,353.969,275.781,337.877,256,337.877z\"></path>\n          <path style=\"fill: #ffc61b\" d=\"M316.661,280.679c-2.437,0-4.905-0.61-7.178-1.893c-16.262-9.182-34.757-14.036-53.483-14.036\n\t\ts-37.221,4.853-53.483,14.036c-6.986,3.943-15.846,1.525-19.857-5.423l-58.24-100.876c-4.039-6.995-1.642-15.94,5.353-19.978\n\t\tc6.995-4.038,15.94-1.642,19.978,5.353l51.383,88.997c17.255-7.462,35.969-11.359,54.868-11.359s37.613,3.899,54.868,11.359\n\t\tl49.423-85.604V29.25h-25.8c-8.076,0-14.625-6.548-14.625-14.625S326.416,0,334.492,0h40.426c8.076,0,14.625,6.548,14.625,14.625\n\t\tv150.55c0,2.567-0.676,5.09-1.96,7.313l-58.24,100.876C326.632,278.053,321.717,280.679,316.661,280.679z\"></path>\n        </g>\n        <path style=\"fill: #fee187\" d=\"M256,250.126c0.41,0,0.812,0.026,1.22,0.031V14.625H137.084v150.55l58.242,100.876\n\tC213.253,255.929,233.942,250.126,256,250.126z\"></path>\n        <path style=\"fill: #ffc61b\" d=\"M195.338,280.679c-5.057,0-9.971-2.625-12.679-7.314l-58.24-100.876\n\tc-1.284-2.223-1.96-4.746-1.96-7.313V14.625C122.459,6.548,129.008,0,137.084,0H257.22c8.076,0,14.625,6.548,14.625,14.625v235.531\n\tc0,3.905-1.562,7.648-4.338,10.396c-2.776,2.747-6.511,4.291-10.441,4.23c-0.309-0.003-0.616-0.013-0.923-0.023l-0.211-0.007\n\tc-18.662,0-37.155,4.854-53.417,14.037C200.243,280.069,197.774,280.679,195.338,280.679z M151.709,161.256l49.423,85.604\n\tc13.161-5.691,27.171-9.309,41.462-10.706V29.25h-90.885V161.256L151.709,161.256z\"></path>\n      </svg>\n      <span class=\"text-1\">Congratulations</span>\n      <span class=\"text-2\">you've leveled up</span>\n    </div>",
    "css": "/* From Uiverse.io by John-CFO - Tags: notification */\n.card {\n  color: #090909;\n  height: 12rem;\n  width: 20rem;\n  border-radius: 1rem;\n  background: rgb(63, 94, 251);\n  background: radial-gradient(\n    circle,\n    rgba(63, 94, 251, 1) 0%,\n    rgba(252, 70, 223, 1) 100%\n  );\n  border: 1px solid #e8e8e8;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.text-1 {\n  margin: 0;\n  font-family: fantasy;\n  font-size: 35px;\n  padding-bottom: 5px;\n  color: transparent;\n  -webkit-text-stroke: 1px #fff;\n}\n\n.text-2 {\n  margin: 0;\n  padding-bottom: 2rem;\n  font-family: fantasy;\n  font-size: 25px;\n  color: #fff;\n}\n\n.text-1,\n.text-2 {\n  animation: scaling 5s infinite;\n}\n\n@keyframes scaling {\n  0% {\n    transform: scale(1);\n    opacity: 1.8;\n  }\n\n  50% {\n    transform: scale(1.1);\n    opacity: 0.8;\n  }\n}\n\n.metal {\n  margin-top: 10px;\n  width: 60px;\n  animation: spin 5.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotateY(0deg);\n  }\n\n  100% {\n    transform: rotateY(1800deg);\n    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);\n  }\n}"
  },
  {
    "id": "uiverse-santaval_massive-dingo-46",
    "title": "Massive Dingo",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "Santaval",
      "profileUrl": "https://uiverse.io/Santaval/massive-dingo-46"
    },
    "license": "MIT",
    "description": "Massive Dingo · card by Santaval",
    "tags": [
      "card",
      "notification",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<div class=\"bannerContainer\">\n      \n      <div class=\"banner\">\n        \n        <div class=\"loader loader1\"></div>\n        <div class=\"loader loader2\"></div>\n        <div class=\"loader loader3\"></div>\n        \n\n        \n        <div class=\"loader mainCard\">\n          <svg id=\"svg\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 512\">\n            <path fill=\"#393E41\" d=\"M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 248c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40zm-24 56c0 22.1-17.9 40-40 40s-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z\"></path>\n          </svg>\n          <span>Well done</span>\n          <svg id=\"svg\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 512\">\n            <path fill=\"#393E41\" d=\"M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 248c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40zm-24 56c0 22.1-17.9 40-40 40s-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z\"></path>\n          </svg>\n\n          \n          <div class=\"loader secondCard\">\n\n            <span>Next Level</span>\n\n          </div>\n          \n        </div>\n      </div>\n      \n    </div>",
    "css": "/* From Uiverse.io by Santaval - Tags: notification */\n/*Container*/\n\n.bannerContainer {\n  position: relative;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  width: fit-content;\n  height: fit-content;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/*Banner */\n\n.bannerContainer .banner {\n  background-color: #e7e5df;\n  height: 70px;\n  width: 250px;\n  border-radius: 10px;\n  position: relative;\n  overflow-y: hidden;\n}\n\n/*Loaders */\n\n.bannerContainer .banner .loader {\n  height: 100%;\n  width: 100%;\n  border-radius: 10px;\n  position: absolute;\n}\n\n.bannerContainer .banner .loader1 {\n  background-color: #393e41;\n  animation: loader 0.5s linear 0s;\n}\n\n.bannerContainer .banner .loader2 {\n  background-color: #44bba4;\n  animation: loader 0.5s linear 0.2s;\n}\n\n.bannerContainer .banner .loader3 {\n  background-color: #e7bb41;\n  animation: loader 0.5s linear 0.3s;\n}\n\n/*Main card*/\n\n.bannerContainer .banner .mainCard {\n  width: 100%;\n  background-color: #e7e5df;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  color: #393e41;\n  font-weight: bolder;\n  animation: loader 0.5s linear 0.4s;\n  border-radius: 10px;\n}\n\n.bannerContainer .banner span {\n  font-size: 29px;\n  font-weight: 900;\n  transform: translateY(-120px);\n  animation: appear 0.1s ease-in 0.9s forwards;\n}\n\n.bannerContainer .banner svg {\n  width: 30px;\n  transform: translateY(-100px);\n  animation: appear 0.1s ease-in 0.9s forwards;\n}\n\n.bannerContainer .banner .mainCard:hover > .secondCard {\n  height: 100%;\n  color: #e7e5df;\n}\n\n/* Second card */\n\n.bannerContainer .banner .secondCard {\n  background-color: #393e41;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  color: transparent;\n  height: 0px;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n}\n\n/* Animations */\n\n@keyframes loader {\n  from {\n    width: 0%;\n  }\n\n  to {\n    width: 100%;\n  }\n}\n\n@keyframes appear {\n  from {\n    transform: translateY(-100px);\n  }\n\n  to {\n    transform: translateY(0px);\n  }\n}"
  },
  {
    "id": "uiverse-yaya12085_smooth-seahorse-63",
    "title": "Smooth Seahorse",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "Yaya12085",
      "profileUrl": "https://uiverse.io/Yaya12085/smooth-seahorse-63"
    },
    "license": "MIT",
    "description": "Smooth Seahorse · card by Yaya12085",
    "tags": [
      "card",
      "notification",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 600,
    "accentColor": null,
    "html": "<div class=\"notification\">\n  <div class=\"icon\">\n    <svg fill=\"#000000\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" class=\"icon\" viewBox=\"0 0 1024 1024\"><g stroke-width=\"0\" id=\"SVGRepo_bgCarrier\"></g><g stroke-linejoin=\"round\" stroke-linecap=\"round\" id=\"SVGRepo_tracerCarrier\"></g><g id=\"SVGRepo_iconCarrier\"><path fill=\"#E9E8FF\" d=\"M512 512m-480 0a480 480 0 1 0 960 0 480 480 0 1 0-960 0Z\"></path><path fill=\"#8880FE\" d=\"M723.2 704c-25.6 0-51.2-12.8-70.4-32L582.4 582.4H435.2l-38.4 64c-19.2 32-51.2 57.6-89.6 57.6-57.6 0-102.4-44.8-102.4-102.4v-12.8V576l25.6-166.4c6.4-70.4 57.6-121.6 128-121.6 32 0 70.4 12.8 89.6 38.4 25.6 0 89.6-6.4 128 0 25.6-25.6 57.6-32 89.6-32 51.2 0 96 32 115.2 83.2v12.8l38.4 179.2c0 6.4 6.4 19.2 6.4 32 0 51.2-44.8 102.4-102.4 102.4z\"></path><path fill=\"#FFFFFF\" d=\"M716.8 460.8c-12.8 0-19.2-12.8-19.2-19.2s6.4-19.2 19.2-19.2c12.8 0 19.2 12.8 19.2 19.2s-6.4 19.2-19.2 19.2z m-108.8 0c-12.8 0-19.2-12.8-19.2-19.2s6.4-19.2 19.2-19.2c12.8 0 19.2 12.8 19.2 19.2s-6.4 19.2-19.2 19.2z m51.2 57.6c-6.4 0-19.2-6.4-19.2-19.2s6.4-19.2 19.2-19.2 19.2 12.8 19.2 19.2-6.4 19.2-19.2 19.2z m0-115.2c-6.4 0-19.2-6.4-19.2-19.2s6.4-19.2 19.2-19.2 19.2 12.8 19.2 19.2-6.4 19.2-19.2 19.2zM345.6 416h-51.2V448h51.2v51.2h32V448h51.2v-32h-51.2v-51.2h-32z\"></path></g></svg>\n  </div>\n  <div class=\"messages\">\n    <span class=\"title\">Well done!</span>\n    <span class=\"description\">New level reached.</span>\n    <span class=\"level\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"><g stroke-width=\"0\" id=\"SVGRepo_bgCarrier\"></g><g stroke-linejoin=\"round\" stroke-linecap=\"round\" id=\"SVGRepo_tracerCarrier\"></g><g id=\"SVGRepo_iconCarrier\"> <path stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"2\" stroke=\"#fff\" d=\"M15 16L12.1937 13.1937V13.1937C12.0867 13.0867 11.9133 13.0867 11.8063 13.1937V13.1937L9 16\"></path> <path stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"2\" stroke=\"#fff\" d=\"M15 11L12.1505 8.15049V8.15049C12.0674 8.06738 11.9326 8.06738 11.8495 8.15049V8.15049L9 11\"></path> </g></svg>\n      lvl. 8\n      </span>\n      \n  </div>\n  <div class=\"action\">\n    <button>Next</button>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by Yaya12085 - Tags: notification */\n.notification {\n  width: 300px;\n  height: 70px;\n  background: #fff;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: #212121;\n  box-shadow: 0px 42px 53px 13px rgba(0,0,0,0.1);\n  padding: 2px;\n  position: relative;\n  animation: appear .6s linear alternate-reverse infinite;\n  transition: all .6s ease;\n}\n\n.icon {\n  height: 100%;\n  transition: transform .6s ease;\n}\n\n.messages {\n  height: 100%;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 4px;\n}\n\n.title {\n  font-size: 0.95rem;\n  line-height: 1rem;\n  font-weight: 700;\n  margin-bottom: 4px;\n  color: #494949;\n}\n\n.description {\n  font-size: 13px;\n  margin-bottom: 4px;\n}\n\n.level {\n  color: #7d5cf5;\n  font-weight: 600;\n  background-color: #7d5cf53f;\n  display: flex;\n  align-items: center;\n  flex: 1;\n  height: 0;\n  width: max-content;\n  padding: 4px;\n  border-radius: 10px;\n}\n\n.level svg {\n  height: 140%;\n  background-color: #7d5cf5;\n  border-radius: 6px;\n  margin-right: 4px;\n}\n\n.action {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.action button {\n  padding: 0.5rem  1rem;\n  background-color: #7d5cf5;\n  color: #ffffff;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  border-radius: 10px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  border: none;\n  height: 40px;\n  transition: all .6s ease;\n  margin-right: 6px;\n}\n\n.notification:hover .icon {\n  transform: rotate(45deg);\n}\n\n.action button:hover {\n  height: 100%;\n  margin-right: 0;\n}\n\n.action button:active {\n  background-color: #4dec48;\n}\n\n@keyframes appear {\n  from {\n    transform: scale(0.98);\n  }\n\n  to {\n    transform: scale(1);\n  }\n}"
  },
  {
    "id": "uiverse-wittyhydra_nervous-zebra-0",
    "title": "Nervous Zebra",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "WittyHydra",
      "profileUrl": "https://uiverse.io/WittyHydra/nervous-zebra-0"
    },
    "license": "MIT",
    "description": "Nervous Zebra · card by WittyHydra",
    "tags": [
      "card",
      "notification",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div class=\"notification\">\n  <div class=\"notification-top\">\n    <span class=\"level-up\">Level Up!</span>\n  </div>\n  <div class=\"notification-bottom\">\n    <span class=\"level\">Level 5</span>\n    <button class=\"next-level-button\">Next Level</button>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by WittyHydra - Tags: notification */\n.notification {\n  --bg-color: #fff;\n  --text-color: #1c1f2b;\n  --highlight-color: #fc9a32;\n  --button-color: #3d3f4e;\n  --button-color-hover: #27282f;\n  position: relative;\n  width: 300px;\n  height: 100px;\n  background-color: var(--bg-color);\n  border-radius: 10px;\n  -webkit-box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n\n@media (prefers-color-scheme: dark) {\n  .notification {\n    --bg-color: #1c1f2b;\n    --text-color: #fff;\n    --highlight-color: #fc9a32;\n    --button-color: #3d3f4e;\n    --button-color-hover: #27282f;\n  }\n}\n\n.notification-top {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50%;\n  background-color: var(--highlight-color);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-transform: translateY(-100%);\n  -ms-transform: translateY(-100%);\n  transform: translateY(-100%);\n  -webkit-animation: slide-down 1s ease-out forwards;\n  animation: slide-down 1s ease-out forwards;\n}\n\n.notification-bottom {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 50%;\n  background-color: var(--bg-color);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  padding: 20px;\n}\n\n.level-up {\n  color: var(--text-color);\n  font-size: 24px;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  -webkit-animation: rotate-text 1s ease-in-out;\n  animation: rotate-text 1s ease-in-out;\n}\n\n.level {\n  color: var(--text-color);\n  font-size: 20px;\n  font-weight: bold;\n  margin-right: 10px;\n}\n\n.next-level-button {\n  background-color: var(--button-color);\n  color: var(--text-color);\n  border: none;\n  border-radius: 5px;\n  padding: 8px 16px;\n  cursor: pointer;\n  -webkit-transition: background-color 0.3s ease-out;\n  transition: background-color 0.3s ease-out;\n}\n\n.next-level-button {\n  background-color: #efefef;\n  color: #000;\n  font-weight: 600;\n  padding: 5px 10px;\n  border: none;\n  border-radius: 5px;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  -webkit-box-shadow: 0px 0px 10px #888888;\n  box-shadow: 0px 0px 10px #888888;\n}\n\n@-webkit-keyframes slide-down {\n  from {\n    -webkit-transform: translateY(-100%);\n    transform: translateY(-100%);\n  }\n\n  to {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n@keyframes slide-down {\n  from {\n    -webkit-transform: translateY(-100%);\n    transform: translateY(-100%);\n  }\n\n  to {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n@-webkit-keyframes rotate-text {\n  0% {\n    -webkit-transform: rotateX(90deg);\n    transform: rotateX(90deg);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform: rotateX(0);\n    transform: rotateX(0);\n    opacity: 1;\n  }\n}\n\n@keyframes rotate-text {\n  0% {\n    -webkit-transform: rotateX(90deg);\n    transform: rotateX(90deg);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform: rotateX(0);\n    transform: rotateX(0);\n    opacity: 1;\n  }\n}\n\n.next-level-button:hover {\n  background-color: aqua;\n  color: #000;\n  -webkit-transform: scale(1.1);\n  -ms-transform: scale(1.1);\n  transform: scale(1.1);\n  -webkit-box-shadow: 0px 0px 15px #888888;\n  box-shadow: 0px 0px 15px #888888;\n}\n\n.notification {\n  background-color: #1e2b3c;\n  color: #c3daf6;\n}\n\n.notification:hover {\n  background-color: #c3daf6;\n  color: #1e2b3c;\n}\n\n.next-level-button:hover {\n  background-color: #1e2b3c;\n  color: #c3daf6;\n}\n\n/* Light Mode */\n.notification {\n  background-color: #c3daf6;\n  color: #1e2b3c;\n}\n\n.notification:hover {\n  background-color: #1e2b3c;\n  color: #c3daf6;\n}\n\n.next-level-button:hover {\n  background-color: #c3daf6;\n  color: #1e2b3c;\n}"
  }
];
