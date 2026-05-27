// 自动生成，请勿手改。重新生成：`node scripts/build-catalog.mjs`
// 来源：uiverse-io/galaxy（MIT 许可，已带作者署名与原链）。生成时间：2026-05-22T02:32:43.939Z
// 条目数：150
export const CATALOG = [
  {
    "id": "uiverse-jack0237_modern-quail-99",
    "title": "Modern Quail",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "jack0237",
      "profileUrl": "https://uiverse.io/jack0237/modern-quail-99"
    },
    "license": "MIT",
    "description": "Modern Quail · loader by jack0237",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1600,
    "accentColor": null,
    "html": "<div class=\"loader\">\n  <div class=\"dot\"></div>\n  <div class=\"dot\"></div>\n  <div class=\"dot\"></div>\n  <div class=\"dot\"></div>\n  <div class=\"dot\"></div>\n</div>",
    "css": "/* From Uiverse.io by jack0237  - Tags:  */\n.loader {\n  display: flex;\n}\n\n.loader .dot {\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  border: 2px solid #e8e8e8;\n  background: #16b0c1;\n  animation: jump 0.8s ease-in-out infinite alternate;\n}\n\n@keyframes jump {\n  100% {\n    background: #661e92;\n    transform: translateY(-3rem) scale(1.9);\n  }\n}\n\n.loader .dot:nth-child(1) {\n  animation-delay: 0.1s;\n}\n\n.loader .dot:nth-child(2) {\n  animation-delay: 0.2s;\n}\n\n.loader .dot:nth-child(3) {\n  animation-delay: 0.3s;\n}\n\n.loader .dot:nth-child(4) {\n  animation-delay: 0.4s;\n}\n\n.loader .dot:nth-child(5) {\n  animation-delay: 0.5s;\n}"
  },
  {
    "id": "uiverse-jeremyssocial_rude-shrimp-72",
    "title": "Rude Shrimp",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "jeremyssocial",
      "profileUrl": "https://uiverse.io/jeremyssocial/rude-shrimp-72"
    },
    "license": "MIT",
    "description": "Rude Shrimp · loader by jeremyssocial",
    "tags": [
      "loader",
      "animation",
      "white",
      "effect loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 2000,
    "accentColor": null,
    "html": "<div class=\"milk-loader\">\n  <div class=\"glass\">\n    <div class=\"milk\"></div>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by jeremyssocial  - Tags: animation, white, loader, effect loader */\n.milk-loader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.glass {\n  position: relative;\n  width: 100px;\n  height: 150px;\n  background-color: transparent;\n  border: 3px solid #666;\n  border-radius: 10px 10px 35px 35px;\n  overflow: hidden;\n}\n\n.milk {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 0;\n  background-color: #fff;\n  border-radius: 5px 5px 30px 30px;\n  animation: fillMilk 2s ease-in-out infinite;\n}\n\n/* Keyframes to animate the milk in a non-uniform way, simulating a filling glass */\n@keyframes fillMilk {\n  0%,\n  100% {\n    height: 10%;\n    border-radius: 5px 5px 30px 30px;\n  }\n  50% {\n    height: 80%;\n    border-radius: 25px;\n  }\n}"
  },
  {
    "id": "uiverse-navarog21_little-falcon-37",
    "title": "Little Falcon",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "Navarog21",
      "profileUrl": "https://uiverse.io/Navarog21/little-falcon-37"
    },
    "license": "MIT",
    "description": "Little Falcon · loader by Navarog21",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div class=\"loader\">\n    <div id=\"first\">\n        <div id=\"second\">\n            <div id=\"third\">\n            </div>\n        </div>\n    </div>\n</div>",
    "css": "/* From Uiverse.io by Navarog21 - Tags: loader */\n.loader {\n  background-color: black;\n  position: relative;\n  width: 2.5em;\n  height: 2.5em;\n  transform-origin: center;\n  transition: 1s;\n  border-radius: 50px;\n  box-shadow: inset 0px 0px 10px purple,\n  inset 5px 5px 12px rgba(44, 0, 114, 0.8),\n  inset 8px 8px 1px rgba(160, 120, 255, 0.7),\n  0px 0px 1px rgba(160, 120, 255, 0.6);\n  animation: 1.2s linear infinite 0s running first682;\n}\n\n.loader div {\n  width: inherit;\n  height: inherit;\n  position: absolute;\n}\n\n#first {\n  transform: rotate(90deg)\n}\n\n#first::before {\n  --width: 1em;\n  --height: 1em;\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: calc(50% - var(--width)/2);\n  width: 1em;\n  height: 1em;\n  background-color: rgb(44, 0, 114);\n  box-shadow: inset 5px 5px 10px rgb(160, 120, 255),\n  0px 0px 2px white;\n  border-radius: 50px;\n  animation: 0.8s ease-in 0s infinite running jump2;\n}\n\n#second {\n  transform: rotate(90deg);\n}\n\n#second::before {\n  --width: 1em;\n  --height: 1em;\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: calc(50% - var(--width)/2);\n  width: 1em;\n  height: 1em;\n  background-color: rgb(44, 0, 114);\n  box-shadow: inset 5px 5px 10px rgb(160, 120, 255),\n  0px 0px 2px white;\n  border-radius: 50px;\n  animation: 1.5s ease-in 0s infinite running jump2;\n}\n\n#third {\n  transform: rotate(90deg)\n}\n\n#third::before {\n  --width: 1em;\n  --height: 1em;\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: calc(50% - var(--width)/2);\n  width: 1em;\n  height: 1em;\n  background-color: rgb(44, 0, 114);\n  box-shadow: inset 5px 5px 10px rgb(160, 120, 255),\n  0px 0px 2px white;\n  border-radius: 50px;\n  animation: 1.6s ease-in 0s infinite running jump2;\n}\n\n.loader::after {\n  --width: 1em;\n  --height: 1em;\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: calc(50% - var(--width)/2);\n  width: 1em;\n  height: 1em;\n  background-color: rgb(44, 0, 114);\n  box-shadow: inset 5px 5px 10px rgb(160, 120, 255),\n  0px 0px 2px white;\n  border-radius: 50px;\n  animation: 1.2s ease-in 1s alternate infinite running jump2;\n}\n\n@keyframes first682 {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  25% {\n    transform: rotate(0deg);\n    transform: rotate(90deg)\n  }\n\n  50% {\n    transform: rotate(90deg);\n    transform: rotate(180deg);\n  }\n\n  75% {\n    transform: rotate(180deg);\n    transform: rotate(270deg)\n  }\n\n  100% {\n    transform: rotate(270deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes jump2 {\n  0% {\n    top: 100%;\n  }\n\n  25% {\n    top: 230%\n  }\n\n  50% {\n    top: 100%;\n  }\n\n  75% {\n    height: 0.6em\n  }\n\n  100% {\n    height: 1em\n  }\n}"
  },
  {
    "id": "uiverse-kemboi-dun_big-dolphin-10",
    "title": "Big Dolphin",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "Kemboi-Dun - Source: https://uiverse.io/Saiyed-Tanvir/old-mole-38",
      "profileUrl": "https://uiverse.io/Kemboi-Dun - Source: https://uiverse.io/Saiyed-Tanvir/old-mole-38/big-dolphin-10"
    },
    "license": "MIT",
    "description": "Big Dolphin · loader by Kemboi-Dun - Source: https://uiverse.io/Saiyed-Tanvir/old-mole-38",
    "tags": [
      "loader",
      "simple",
      "animation",
      "blue",
      "minimalist",
      "loading",
      "cube",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 4000,
    "accentColor": null,
    "html": "<div class=\"loader\"></div>",
    "css": "/* From Uiverse.io by Kemboi-Dun - Source: https://uiverse.io/Saiyed-Tanvir/old-mole-38 - Tags: simple, animation, blue, minimalist, loading, loader, cube, animated */\n.loader {\n  height: 5cm;\n  width: 5cm;\n  border-radius: 1rem;\n  /* border: 1px solid #0a7cbe; */\n  box-shadow: inset 0 0 0 #0a7cbe;\n  animation: load 4s ease infinite;\n}\n\n@keyframes load {\n  \n  0% {\n    box-shadow: inset -5cm -2.5cm 0 #0a7cbe;\n  }\n\n  25% {\n    box-shadow: inset 5cm -2.5cm 0 #0a7cbe;\n  }\n\n  25.01% {\n    box-shadow: inset 2.5cm -5cm 0 #0a7cbe;\n  }\n\n  50% {\n    box-shadow: inset 2.5cm 5cm 0 #0a7cbe;\n  }\n\n  50.01% {\n    box-shadow: inset 5cm 2.5cm 0 #0a7cbe;\n  }\n\n  75% {\n    box-shadow: inset -5cm 2.5cm 0 #0a7cbe;\n  }\n\n  75.01% {\n    box-shadow: inset -2.5cm 5cm 0 #0a7cbe;\n  }\n\n  100% {\n    box-shadow: inset -2.5cm -5cm 0 #0a7cbe;\n  }\n}"
  },
  {
    "id": "uiverse-selfmadesystem_jolly-pig-52",
    "title": "Jolly Pig",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "SelfMadeSystem",
      "profileUrl": "https://uiverse.io/SelfMadeSystem/jolly-pig-52"
    },
    "license": "MIT",
    "description": "Jolly Pig · loader by SelfMadeSystem",
    "tags": [
      "loader",
      "material design",
      "spinner",
      "smooth",
      "spin",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 8000,
    "accentColor": null,
    "html": "<svg class=\"loader\" viewBox=\"0 0 384 384\" xmlns=\"http://www.w3.org/2000/svg\">\n  <circle\n    class=\"active\"\n    pathLength=\"360\"\n    fill=\"transparent\"\n    stroke-width=\"32\"\n    cx=\"192\"\n    cy=\"192\"\n    r=\"176\"\n  ></circle>\n  <circle\n    class=\"track\"\n    pathLength=\"360\"\n    fill=\"transparent\"\n    stroke-width=\"32\"\n    cx=\"192\"\n    cy=\"192\"\n    r=\"176\"\n  ></circle>\n</svg>",
    "css": "/* From Uiverse.io by SelfMadeSystem  - Tags: material design, loader, spinner, smooth, spin */\n/* Inspired by: m3.material.io/components/progress-indicators/overview */\n\n.loader {\n  width: 48px;\n  /* Subpixels get cut off */\n  overflow: visible;\n  transform: rotate(-90deg);\n  transform-origin: center;\n\n  --active: #7627a3;\n  --track: #f2d4fe;\n\n  --duration: 8s;\n\n  animation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    rotate: 0deg;\n  }\n\n  100% {\n    rotate: 360deg;\n  }\n}\n\n.active {\n  stroke: var(--active);\n  stroke-linecap: round;\n  stroke-dashoffset: 360;\n  animation: active-animation var(--duration) ease-in-out infinite;\n}\n\n@keyframes active-animation {\n  0% {\n    stroke-dasharray: 0 0 0 360 0 360;\n  }\n  12.5% {\n    stroke-dasharray: 0 0 270 90 270 90;\n  }\n  25% {\n    stroke-dasharray: 0 270 0 360 0 360;\n  }\n  37.5% {\n    stroke-dasharray: 0 270 270 90 270 90;\n  }\n  50% {\n    stroke-dasharray: 0 540 0 360 0 360;\n  }\n  50.001% {\n    stroke-dasharray: 0 180 0 360 0 360;\n  }\n  62.5% {\n    stroke-dasharray: 0 180 270 90 270 90;\n  }\n  75% {\n    stroke-dasharray: 0 450 0 360 0 360;\n  }\n  87.5% {\n    stroke-dasharray: 0 450 270 90 270 90;\n  }\n  87.501% {\n    stroke-dasharray: 0 90 270 90 270 90;\n  }\n  100% {\n    stroke-dasharray: 0 360 1 360 0 360;\n  }\n}\n\n.track {\n  stroke: var(--track);\n  stroke-linecap: round;\n  stroke-dashoffset: 360;\n  animation: track-animation var(--duration) ease-in-out infinite;\n}\n\n@keyframes track-animation {\n  0% {\n    stroke-dasharray: 0 20 320 40 320 40;\n  }\n  12.5% {\n    stroke-dasharray: 0 290 50 310 50 310;\n  }\n  25% {\n    stroke-dasharray: 0 290 320 40 320 40;\n  }\n  37.5% {\n    stroke-dasharray: 0 560 50 310 50 310;\n  }\n  37.501% {\n    stroke-dasharray: 0 200 50 310 50 310;\n  }\n  50% {\n    stroke-dasharray: 0 200 320 40 320 40;\n  }\n  62.5% {\n    stroke-dasharray: 0 470 50 310 50 310;\n  }\n  62.501% {\n    stroke-dasharray: 0 110 50 310 50 310;\n  }\n  75% {\n    stroke-dasharray: 0 110 320 40 320 40;\n  }\n  87.5% {\n    stroke-dasharray: 0 380 50 310 50 310;\n  }\n  100% {\n    stroke-dasharray: 0 380 320 40 320 40;\n  }\n}"
  },
  {
    "id": "uiverse-abrahamcalsin_serious-turkey-52",
    "title": "Serious Turkey",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "abrahamcalsin",
      "profileUrl": "https://uiverse.io/abrahamcalsin/serious-turkey-52"
    },
    "license": "MIT",
    "description": "Serious Turkey · loader by abrahamcalsin",
    "tags": [
      "loader",
      "spinner",
      "dots",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div class=\"dot-spinner\">\n    <div class=\"dot-spinner__dot\"></div>\n    <div class=\"dot-spinner__dot\"></div>\n    <div class=\"dot-spinner__dot\"></div>\n    <div class=\"dot-spinner__dot\"></div>\n    <div class=\"dot-spinner__dot\"></div>\n    <div class=\"dot-spinner__dot\"></div>\n    <div class=\"dot-spinner__dot\"></div>\n    <div class=\"dot-spinner__dot\"></div>\n</div>",
    "css": "/* From Uiverse.io by abrahamcalsin - Tags: loader, spinner, dots */\n.dot-spinner {\n  --uib-size: 2.8rem;\n  --uib-speed: .9s;\n  --uib-color: #183153;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  height: var(--uib-size);\n  width: var(--uib-size);\n}\n\n.dot-spinner__dot {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  height: 100%;\n  width: 100%;\n}\n\n.dot-spinner__dot::before {\n  content: '';\n  height: 20%;\n  width: 20%;\n  border-radius: 50%;\n  background-color: var(--uib-color);\n  transform: scale(0);\n  opacity: 0.5;\n  animation: pulse0112 calc(var(--uib-speed) * 1.111) ease-in-out infinite;\n  box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);\n}\n\n.dot-spinner__dot:nth-child(2) {\n  transform: rotate(45deg);\n}\n\n.dot-spinner__dot:nth-child(2)::before {\n  animation-delay: calc(var(--uib-speed) * -0.875);\n}\n\n.dot-spinner__dot:nth-child(3) {\n  transform: rotate(90deg);\n}\n\n.dot-spinner__dot:nth-child(3)::before {\n  animation-delay: calc(var(--uib-speed) * -0.75);\n}\n\n.dot-spinner__dot:nth-child(4) {\n  transform: rotate(135deg);\n}\n\n.dot-spinner__dot:nth-child(4)::before {\n  animation-delay: calc(var(--uib-speed) * -0.625);\n}\n\n.dot-spinner__dot:nth-child(5) {\n  transform: rotate(180deg);\n}\n\n.dot-spinner__dot:nth-child(5)::before {\n  animation-delay: calc(var(--uib-speed) * -0.5);\n}\n\n.dot-spinner__dot:nth-child(6) {\n  transform: rotate(225deg);\n}\n\n.dot-spinner__dot:nth-child(6)::before {\n  animation-delay: calc(var(--uib-speed) * -0.375);\n}\n\n.dot-spinner__dot:nth-child(7) {\n  transform: rotate(270deg);\n}\n\n.dot-spinner__dot:nth-child(7)::before {\n  animation-delay: calc(var(--uib-speed) * -0.25);\n}\n\n.dot-spinner__dot:nth-child(8) {\n  transform: rotate(315deg);\n}\n\n.dot-spinner__dot:nth-child(8)::before {\n  animation-delay: calc(var(--uib-speed) * -0.125);\n}\n\n@keyframes pulse0112 {\n  0%,\n  100% {\n    transform: scale(0);\n    opacity: 0.5;\n  }\n\n  50% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}"
  },
  {
    "id": "uiverse-dylanharriscameron_ancient-falcon-18",
    "title": "Ancient Falcon",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "dylanharriscameron",
      "profileUrl": "https://uiverse.io/dylanharriscameron/ancient-falcon-18"
    },
    "license": "MIT",
    "description": "Ancient Falcon · loader by dylanharriscameron",
    "tags": [
      "loader",
      "loading",
      "infinite",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 6000,
    "accentColor": null,
    "html": "<div class=\"loaderBar\"></div>",
    "css": "/* From Uiverse.io by dylanharriscameron - Tags: loading, loader, infinite */\n.loaderBar {\n  width: calc(160px / 0.707);\n  height: 10px;\n  background: #F9F9F9;\n  border-radius: 10px;\n  border: 1px solid #006DFE;\n  position: relative;\n  overflow: hidden;\n}\n\n.loaderBar::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  border-radius: 5px;\n  background: repeating-linear-gradient(45deg, #0031F2 0 30px, #006DFE 0 40px) right/200% 100%;\n  animation: fillProgress 6s ease-in-out infinite, lightEffect 1s infinite linear;\n  animation-fill-mode: forwards;\n}\n\n@keyframes fillProgress {\n  0% {\n    width: 0;\n  }\n\n  33% {\n    width: 33.333%;\n  }\n\n  66% {\n    width: 66.67%;\n  }\n\n  100% {\n    width: 100%;\n  }\n}\n\n@keyframes lightEffect {\n  0%, 20%, 40%, 60%, 80%, 100% {\n    background: repeating-linear-gradient(45deg, #0031F2 0 30px, #006DFE 0 40px) right/200% 100%;\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n    background: repeating-linear-gradient(45deg, #0031F2 0 30px, #006DFE 0 40px, rgba(255, 255, 255, 0.3) 0 40px) right/200% 100%;\n  }\n}"
  },
  {
    "id": "uiverse-priyanshugupta28_little-zebra-36",
    "title": "Little Zebra",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "PriyanshuGupta28",
      "profileUrl": "https://uiverse.io/PriyanshuGupta28/little-zebra-36"
    },
    "license": "MIT",
    "description": "Little Zebra · loader by PriyanshuGupta28",
    "tags": [
      "loader",
      "3d loader",
      "3d cude loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 2000,
    "accentColor": null,
    "html": "<div class=\"loader\">\n  <div class=\"cube\">\n    <div class=\"side front\"></div>\n    <div class=\"side back\"></div>\n    <div class=\"side top\"></div>\n    <div class=\"side bottom\"></div>\n    <div class=\"side left\"></div>\n    <div class=\"side right\"></div>\n  </div>\n\n</div>",
    "css": "/* From Uiverse.io by PriyanshuGupta28 - Tags: loader, 3d loader, 3d cude loader */\n.loader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.cube {\n  width: 100px;\n  height: 100px;\n  position: relative;\n  transform-style: preserve-3d;\n  animation: spin 2s infinite linear;\n}\n\n.side {\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  opacity: 0.8;\n}\n\n.front {\n  transform: translateZ(50px);\n  background: linear-gradient(45deg, #ff4e50, #f9d423);\n}\n\n.back {\n  transform: translateZ(-50px);\n  background: linear-gradient(45deg, #40e0d0, #ff8c00);\n}\n\n.top {\n  transform: rotateX(90deg) translateZ(50px);\n  background: linear-gradient(45deg, #800080, #00bfff);\n}\n\n.bottom {\n  transform: rotateX(90deg) translateZ(-50px);\n  background: linear-gradient(45deg, #008000, #ffff00);\n}\n\n.left {\n  transform: rotateY(90deg) translateZ(50px);\n  background: linear-gradient(45deg, #0000ff, #ff1493);\n}\n\n.right {\n  transform: rotateY(90deg) translateZ(-50px);\n  background: linear-gradient(45deg, #00ffff, #ff0000);\n}\n\n@keyframes spin {\n  0% {\n    transform: rotateX(0deg) rotateY(0deg);\n  }\n\n  100% {\n    transform: rotateX(360deg) rotateY(360deg);\n  }\n}"
  },
  {
    "id": "uiverse-mrpumps31232_strange-dragonfly-94",
    "title": "Strange Dragonfly",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "mrpumps31232",
      "profileUrl": "https://uiverse.io/mrpumps31232/strange-dragonfly-94"
    },
    "license": "MIT",
    "description": "Strange Dragonfly · loader by mrpumps31232",
    "tags": [
      "loader",
      "wave",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div class=\"loading-wave\">\n  <div class=\"loading-bar\"></div>\n  <div class=\"loading-bar\"></div>\n  <div class=\"loading-bar\"></div>\n  <div class=\"loading-bar\"></div>\n</div>",
    "css": "/* From Uiverse.io by mrpumps31232 - Tags: loader, wave */\n.loading-wave {\n  width: 300px;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n}\n\n.loading-bar {\n  width: 20px;\n  height: 10px;\n  margin: 0 5px;\n  background-color: #3498db;\n  border-radius: 5px;\n  animation: loading-wave-animation 1s ease-in-out infinite;\n}\n\n.loading-bar:nth-child(2) {\n  animation-delay: 0.1s;\n}\n\n.loading-bar:nth-child(3) {\n  animation-delay: 0.2s;\n}\n\n.loading-bar:nth-child(4) {\n  animation-delay: 0.3s;\n}\n\n@keyframes loading-wave-animation {\n  0% {\n    height: 10px;\n  }\n\n  50% {\n    height: 50px;\n  }\n\n  100% {\n    height: 10px;\n  }\n}"
  },
  {
    "id": "uiverse-elijahgummer_hungry-moth-59",
    "title": "Hungry Moth",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "elijahgummer  - Website: https://codepen.io/ruijadom/pen/jObpqNb - Name: ruijadom",
      "profileUrl": "https://uiverse.io/elijahgummer  - Website: https://codepen.io/ruijadom/pen/jObpqNb - Name: ruijadom/hungry-moth-59"
    },
    "license": "MIT",
    "description": "Hungry Moth · loader by elijahgummer  - Website: https://codepen.io/ruijadom/pen/jObpqNb - Name: ruijadom",
    "tags": [
      "loader",
      "loading",
      "animated",
      "svg",
      "dog"
    ],
    "previewType": "css",
    "durationMs": 6000,
    "accentColor": null,
    "html": "<div class=\"main\">\n  <div class=\"dog\">\n    <div class=\"dog__paws\">\n      <div class=\"dog__bl-leg leg\">\n        <div class=\"dog__bl-paw paw\"></div>\n        <div class=\"dog__bl-top top\"></div>\n      </div>\n      <div class=\"dog__fl-leg leg\">\n        <div class=\"dog__fl-paw paw\"></div>\n        <div class=\"dog__fl-top top\"></div>\n      </div>\n      <div class=\"dog__fr-leg leg\">\n        <div class=\"dog__fr-paw paw\"></div>\n        <div class=\"dog__fr-top top\"></div>\n      </div>\n    </div>\n\n    <div class=\"dog__body\">\n      <div class=\"dog__tail\"></div>\n    </div>\n\n    <div class=\"dog__head\">\n      <div class=\"dog__snout\">\n        <div class=\"dog__nose\"></div>\n        <div class=\"dog__eyes\">\n          <div class=\"dog__eye-l\"></div>\n          <div class=\"dog__eye-r\"></div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"dog__head-c\">\n      <div class=\"dog__ear-l\"></div>\n      <div class=\"dog__ear-r\"></div>\n    </div>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by elijahgummer  - Website: https://codepen.io/ruijadom/pen/jObpqNb - Name: ruijadom - Tags: loading, loader, animated, svg, dog */\n.main {\n  position: relative;\n  width: 23.5vmax;\n  height: 23.5vmax;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.leg {\n  position: absolute;\n  bottom: 0;\n  width: 2vmax;\n  height: 2.125vmax;\n}\n\n.paw {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 1.95vmax;\n  height: 1.875vmax;\n  overflow: hidden;\n}\n\n.paw::before {\n  content: \"\";\n  position: absolute;\n  width: 3.75vmax;\n  height: 3.75vmax;\n  border-radius: 50%;\n}\n\n.top {\n  position: absolute;\n  bottom: 0;\n  left: 0.75vmax;\n  height: 4.5vmax;\n  width: 2.625vmax;\n  border-top-left-radius: 1.425vmax;\n  border-top-right-radius: 1.425vmax;\n  transform-origin: bottom right;\n  transform: rotateZ(90deg) translateX(-0.1vmax) translateY(1.5vmax);\n  z-index: -1;\n  background-image: linear-gradient(70deg, transparent 20%, #ff8b56 20%);\n}\n\n.dog {\n  position: relative;\n  width: 22.5vmax;\n  height: 8.25vmax;\n}\n\n.dog::before {\n  content: \"\";\n  position: absolute;\n  bottom: -0.75vmax;\n  right: -0.15vmax;\n  width: 100%;\n  height: 1.5vmax;\n  background-color: rgba(28, 49, 48, 0.1);\n  border-radius: 50%;\n  z-index: -1000;\n  animation: shadow 10s cubic-bezier(0.3, 0.41, 0.18, 1.01) infinite;\n}\n\n.dog__head {\n  position: absolute;\n  left: 4.5vmax;\n  bottom: 0;\n  width: 9.75vmax;\n  height: 8.25vmax;\n  border-top-left-radius: 4.05vmax;\n  border-top-right-radius: 4.05vmax;\n  border-bottom-right-radius: 3.3vmax;\n  border-bottom-left-radius: 3.3vmax;\n  background-color: #ff8147;\n  animation: head 10s cubic-bezier(0.3, 0.41, 0.18, 1.01) infinite;\n}\n\n.dog__head-c {\n  position: absolute;\n  left: 1.5vmax;\n  bottom: 0;\n  width: 9.75vmax;\n  height: 8.25vmax;\n  animation: head 10s cubic-bezier(0.3, 0.41, 0.18, 1.01) infinite;\n  z-index: -1;\n}\n\n.dog__snout {\n  position: absolute;\n  left: -1.5vmax;\n  bottom: 0;\n  width: 7.5vmax;\n  height: 3.75vmax;\n  border-top-right-radius: 3vmax;\n  border-bottom-right-radius: 3vmax;\n  border-bottom-left-radius: 4.5vmax;\n  background-color: #d7dbd2;\n  animation: snout 10s cubic-bezier(0.3, 0.41, 0.18, 1.01) infinite;\n}\n\n.dog__snout::before {\n  content: \"\";\n  position: absolute;\n  left: -0.1125vmax;\n  top: -0.15vmax;\n  width: 1.875vmax;\n  height: 1.125vmax;\n  border-top-right-radius: 3vmax;\n  border-bottom-right-radius: 3vmax;\n  border-bottom-left-radius: 4.5vmax;\n  background-color: #1c3130;\n  animation: snout-b 10s cubic-bezier(0.3, 0.41, 0.18, 1.01) infinite;\n}\n\n.dog__nose {\n  position: absolute;\n  top: -1.95vmax;\n  left: 40%;\n  width: 0.75vmax;\n  height: 2.4vmax;\n  border-radius: 0.525vmax;\n  transform-origin: bottom;\n  transform: rotateZ(10deg);\n  background-color: #d7dbd2;\n}\n\n.dog__eye-l,\n.dog__eye-r {\n  position: absolute;\n  top: -0.9vmax;\n  width: 0.675vmax;\n  height: 0.375vmax;\n  border-radius: 50%;\n  background-color: #1c3130;\n  animation: eye 10s cubic-bezier(0.3, 0.41, 0.18, 1.01) infinite;\n}\n\n.dog__eye-l {\n  left: 27%;\n}\n\n.dog__eye-r {\n  left: 65%;\n}\n\n.dog__ear-l,\n.dog__ear-r {\n  position: absolute;\n  width: 10.5vmax;\n  height: 3.375vmax;\n  border-top-left-radius: 0vmax;\n  border-top-right-radius: 0vmax;\n  border-bottom-right-radius: 3.3vmax;\n  border-bottom-left-radius: 3.3vmax;\n  background-color: #e26538;\n}\n\n.dog__ear-l {\n  top: 1.5vmax;\n  left: 6vmax;\n  transform-origin: bottom left;\n  transform: rotateZ(-50deg);\n  z-index: -1;\n  animation: ear-l 10s cubic-bezier(0.3, 0.41, 0.18, 1.01) infinite;\n}\n\n.dog__ear-r {\n  top: 1.5vmax;\n  right: 3vmax;\n  transform-origin: bottom right;\n  transform: rotateZ(20deg);\n  z-index: -2;\n  animation: ear-r 10s cubic-bezier(0.3, 0.41, 0.18, 1.01) infinite;\n}\n\n.dog__body {\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  position: absolute;\n  bottom: 0.3vmax;\n  left: 3.75vmax;\n  width: 18.75vmax;\n  height: 7.2vmax;\n  border-top-left-radius: 3vmax;\n  border-top-right-radius: 6vmax;\n  border-bottom-right-radius: 1.5vmax;\n  border-bottom-left-radius: 6vmax;\n  background-color: #ff702e;\n  z-index: -2;\n  animation: body 10s cubic-bezier(0.3, 0.41, 0.18, 1.01) infinite;\n}\n\n.dog__tail {\n  position: absolute;\n  right: -3vmax;\n  height: 1.5vmax;\n  width: 4.5vmax;\n  background-color: #e96839;\n  border-radius: 1.5vmax;\n}\n\n.dog__paws {\n  position: absolute;\n  bottom: 0;\n  left: 7.5vmax;\n  width: 12vmax;\n  height: 3vmax;\n}\n\n.dog__bl-leg {\n  left: -3vmax;\n  z-index: -10;\n}\n\n.dog__bl-paw::before {\n  background-color: #bec4b6;\n}\n\n.dog__bl-top {\n  background-image: linear-gradient(80deg, transparent 20%, #e96839 20%);\n}\n\n.dog__fl-leg {\n  z-index: 10;\n  left: 0;\n}\n\n.dog__fl-paw::before {\n  background-color: #d7dbd2;\n}\n\n.dog__fr-leg {\n  right: 0;\n}\n\n.dog__fr-paw::before {\n  background-color: #d7dbd2;\n}\n\n/*==============================*/\n\n@keyframes head {\n  0%,\n  10%,\n  20%,\n  26%,\n  28%,\n  90%,\n  100% {\n    height: 8.25vmax;\n    bottom: 0;\n    transform-origin: bottom right;\n    transform: rotateZ(0);\n  }\n  5%,\n  15%,\n  22%,\n  24%,\n  30% {\n    height: 8.1vmax;\n  }\n  32%,\n  50% {\n    height: 8.25vmax;\n  }\n  55%,\n  60% {\n    bottom: 0.75vmax;\n    transform-origin: bottom right;\n    transform: rotateZ(0);\n  }\n  70%,\n  80% {\n    bottom: 0.75vmax;\n    transform-origin: bottom right;\n    transform: rotateZ(10deg);\n  }\n}\n\n@keyframes body {\n  0%,\n  10%,\n  20%,\n  26%,\n  28%,\n  32%,\n  100% {\n    height: 7.2vmax;\n  }\n  5%,\n  15%,\n  22%,\n  24%,\n  30% {\n    height: 7.05vmax;\n  }\n}\n\n@keyframes ear-l {\n  0%,\n  10%,\n  20%,\n  26%,\n  28%,\n  82%,\n  100% {\n    transform: rotateZ(-50deg);\n  }\n  5%,\n  15%,\n  22%,\n  24% {\n    transform: rotateZ(-48deg);\n  }\n  30%,\n  31% {\n    transform: rotateZ(-30deg);\n  }\n  32%,\n  80% {\n    transform: rotateZ(-60deg);\n  }\n}\n\n@keyframes ear-r {\n  0%,\n  10%,\n  20%,\n  26%,\n  28% {\n    transform: rotateZ(20deg);\n  }\n  5%,\n  15%,\n  22%,\n  24% {\n    transform: rotateZ(18deg);\n  }\n  30%,\n  31% {\n    transform: rotateZ(10deg);\n  }\n  32% {\n    transform: rotateZ(25deg);\n  }\n}\n\n@keyframes snout {\n  0%,\n  10%,\n  20%,\n  26%,\n  28%,\n  82%,\n  100% {\n    height: 3.75vmax;\n  }\n  5%,\n  15%,\n  22%,\n  24% {\n    height: 3.45vmax;\n  }\n}\n\n@keyframes snout-b {\n  0%,\n  10%,\n  20%,\n  26%,\n  28%,\n  98%,\n  100% {\n    width: 1.875vmax;\n  }\n  5%,\n  15%,\n  22%,\n  24% {\n    width: 1.8vmax;\n  }\n  34%,\n  98% {\n    width: 1.275vmax;\n  }\n}\n\n@keyframes shadow {\n  0%,\n  10%,\n  20%,\n  26%,\n  28%,\n  30%,\n  84%,\n  100% {\n    width: 99%;\n  }\n  5%,\n  15%,\n  22%,\n  24% {\n    width: 101%;\n  }\n  34%,\n  81% {\n    width: 96%;\n  }\n}\n\n@keyframes eye {\n  0%,\n  30% {\n    width: 0.675vmax;\n    height: 0.3vmax;\n  }\n  32%,\n  59%,\n  90%,\n  100% {\n    width: 0.525vmax;\n    height: 0.525vmax;\n    transform: translateY(0);\n  }\n  60%,\n  75% {\n    transform: translateY(-0.3vmax);\n  }\n  80%,\n  85% {\n    transform: translateY(0.15vmax);\n  }\n}"
  },
  {
    "id": "uiverse-mrhyddenn_giant-lion-34",
    "title": "Giant Lion",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "mrhyddenn",
      "profileUrl": "https://uiverse.io/mrhyddenn/giant-lion-34"
    },
    "license": "MIT",
    "description": "Giant Lion · loader by mrhyddenn",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 2000,
    "accentColor": null,
    "html": "<div class=\"loader\">\n    <span></span>\n</div>",
    "css": "/* From Uiverse.io by mrhyddenn - Tags: loader */\n.loader {\n  position: relative;\n  width: 150px;\n  height: 150px;\n  background: transparent;\n  border-radius: 50%;\n  box-shadow: 25px 25px 75px rgba(0,0,0,0.55);\n  border: 1px solid #333;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n\n.loader::before {\n  content: '';\n  position: absolute;\n  inset: 20px;\n  background: transparent;\n  border: 1px dashed#444;\n  border-radius: 50%;\n  box-shadow: inset -5px -5px 25px rgba(0,0,0,0.25),\n  inset 5px 5px 35px rgba(0,0,0,0.25);\n}\n\n.loader::after {\n  content: '';\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 1px dashed#444;\n  box-shadow: inset -5px -5px 25px rgba(0,0,0,0.25),\n  inset 5px 5px 35px rgba(0,0,0,0.25);\n}\n\n.loader span {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 50%;\n  height: 100%;\n  background: transparent;\n  transform-origin: top left;\n  animation: radar81 2s linear infinite;\n  border-top: 1px dashed #fff;\n}\n\n.loader span::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: seagreen;\n  transform-origin: top left;\n  transform: rotate(-55deg);\n  filter: blur(30px) drop-shadow(20px 20px 20px seagreen);\n}\n\n@keyframes radar81 {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}"
  },
  {
    "id": "uiverse-timlmit_stupid-mouse-79",
    "title": "Stupid Mouse",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "timlmit",
      "profileUrl": "https://uiverse.io/timlmit/stupid-mouse-79"
    },
    "license": "MIT",
    "description": "Stupid Mouse · loader by timlmit",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 6000,
    "accentColor": null,
    "html": "<div class=\"loader\"></div>",
    "css": "/* From Uiverse.io by timlmit - Tags: loader */\n.loader {\n  display: block;\n  position: relative;\n  height: 32px;\n  width: 200px;\n  background: #fff;\n  border: 2px solid #fff;\n  color: rgb(223, 60, 60);\n  overflow: hidden;\n}\n\n.loader::before {\n  content: '';\n  background: rgb(223, 60, 60);\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 100%;\n  animation: loading_302 10s linear infinite;\n}\n\n.loader:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  font-size: 18px;\n  line-height: 32px;\n  color: rgb(0,255,255);\n  mix-blend-mode: difference;\n  animation: percentage_302 10s linear infinite;\n}\n\n@keyframes loading_302 {\n  0% {\n    width: 0\n  }\n\n  100% {\n    width: 100%\n  }\n}\n\n@keyframes percentage_302 {\n  0% {\n    content: \"0%\"\n  }\n\n  5% {\n    content: \"5%\"\n  }\n\n  10% {\n    content: \"10%\"\n  }\n\n  20% {\n    content: \"20%\"\n  }\n\n  30% {\n    content: \"30%\"\n  }\n\n  40% {\n    content: \"40%\"\n  }\n\n  50% {\n    content: \"50%\"\n  }\n\n  60% {\n    content: \"60%\"\n  }\n\n  70% {\n    content: \"70%\"\n  }\n\n  80% {\n    content: \"80%\"\n  }\n\n  90% {\n    content: \"90%\"\n  }\n\n  95% {\n    content: \"95%\"\n  }\n\n  96% {\n    content: \"96%\"\n  }\n\n  97% {\n    content: \"97%\"\n  }\n\n  98% {\n    content: \"98%\"\n  }\n\n  99% {\n    content: \"99%\"\n  }\n\n  100% {\n    content: \"100%\"\n  }\n}"
  },
  {
    "id": "uiverse-elijahgummer_sweet-earwig-47",
    "title": "Sweet Earwig",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "elijahgummer",
      "profileUrl": "https://uiverse.io/elijahgummer/sweet-earwig-47"
    },
    "license": "MIT",
    "description": "Sweet Earwig · loader by elijahgummer",
    "tags": [
      "loader",
      "simple",
      "animation",
      "red",
      "minimalist",
      "gradient",
      "loading",
      "shadow"
    ],
    "previewType": "css",
    "durationMs": 1200,
    "accentColor": null,
    "html": "<div class=\"middle\">\n  <div class=\"bar bar1\"></div>\n  <div class=\"bar bar2\"></div>\n  <div class=\"bar bar3\"></div>\n  <div class=\"bar bar4\"></div>\n  <div class=\"bar bar5\"></div>\n  <div class=\"bar bar6\"></div>\n  <div class=\"bar bar7\"></div>\n  <div class=\"bar bar8\"></div>\n</div>",
    "css": "/* From Uiverse.io by elijahgummer  - Tags: simple, animation, red, minimalist, gradient, loading, loader, shadow */\n.middle {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n}\n\n.bar {\n  width: 10px;\n  height: 70px;\n  display: inline-block;\n  transform-origin: bottom center;\n  border-top-right-radius: 20px;\n  border-top-left-radius: 20px;\n  box-shadow: 5px 10px 20px inset rgba(255, 23, 25.2);\n  animation: loader 1.2s linear infinite;\n}\n\n.bar1 {\n  animation-delay: 0.1s;\n}\n.bar2 {\n  animation-delay: 0.2s;\n}\n.bar3 {\n  animation-delay: 0.3s;\n}\n.bar4 {\n  animation-delay: 0.4s;\n}\n.bar5 {\n  animation-delay: 0.5s;\n}\n.bar6 {\n  animation-delay: 0.6s;\n}\n.bar7 {\n  animation-delay: 0.7s;\n}\n.bar8 {\n  animation-delay: 0.8s;\n}\n\n@keyframes loader {\n  0% {\n    transform: scaleY(0.1);\n    background: transparent; /* Change background to transparent */\n  }\n  50% {\n    transform: scaleY(1);\n    background: #e74c3c; /* Change background to a shade of red */\n  }\n  100% {\n    transform: scaleY(0.1);\n    background: transparent; /* Change background to transparent */\n  }\n}"
  },
  {
    "id": "uiverse-subaashbala_polite-newt-9",
    "title": "Polite Newt",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "Subaashbala",
      "profileUrl": "https://uiverse.io/Subaashbala/polite-newt-9"
    },
    "license": "MIT",
    "description": "Polite Newt · loader by Subaashbala",
    "tags": [
      "loader",
      "animated",
      "loading animation",
      "3d loader"
    ],
    "previewType": "css",
    "durationMs": 2000,
    "accentColor": null,
    "html": "<div class=\"loader\">\n  <div class=\"modelViewPort\">\n    <div class=\"eva\">\n      <div class=\"head\">\n        <div class=\"eyeChamber\">\n          <div class=\"eye\"></div>\n          <div class=\"eye\"></div>\n        </div>\n      </div>\n      <div class=\"body\">\n        <div class=\"hand\"></div>\n        <div class=\"hand\"></div>\n        <div class=\"scannerThing\"></div>\n        <div class=\"scannerOrigin\"></div>\n      </div>\n    </div>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by Subaashbala  - Tags: loader, animated, loading animation, 3d loader */\n.modelViewPort {\n  /* The black circle background around the model*/\n  perspective: 1000px;\n  width: 20rem;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #000;\n  overflow: hidden;\n}\n.eva {\n  --EVA-ROTATION-DURATION: 4s;\n  transform-style: preserve-3d;\n  animation: rotateRight var(--EVA-ROTATION-DURATION) linear infinite alternate;\n}\n.head {\n  position: relative;\n  width: 6rem;\n  height: 4rem;\n  border-radius: 48% 53% 45% 55% / 79% 79% 20% 22%;\n  background: linear-gradient(to right, white 45%, gray);\n}\n.eyeChamber {\n  width: 4.5rem;\n  height: 2.75rem;\n  position: relative;\n  left: 50%;\n  top: 55%;\n  border-radius: 45% 53% 45% 48% / 62% 59% 35% 34%;\n  background-color: #0c203c;\n  box-shadow: 0px 0px 2px 2px white, inset 0px 0px 0px 2px black;\n  transform: translate(-50%, -50%);\n  animation: moveRight var(--EVA-ROTATION-DURATION) linear infinite alternate;\n}\n.eye {\n  width: 1.2rem;\n  height: 1.5rem;\n  position: absolute;\n  border-radius: 50%;\n}\n.eye:first-child {\n  left: 12px;\n  top: 50%;\n  background: repeating-linear-gradient(\n    65deg,\n    #9bdaeb 0px,\n    #9bdaeb 1px,\n    white 2px\n  );\n  box-shadow: inset 0px 0px 5px #04b8d5, 0px 0px 15px 1px #0bdaeb;\n  transform: translate(0, -50%) rotate(-65deg);\n}\n.eye:nth-child(2) {\n  right: 12px;\n  top: 50%;\n  background: repeating-linear-gradient(\n    -65deg,\n    #9bdaeb 0px,\n    #9bdaeb 1px,\n    white 2px\n  );\n  box-shadow: inset 0px 0px 5px #04b8d5, 0px 0px 15px 1px #0bdaeb;\n  transform: translate(0, -50%) rotate(65deg);\n}\n.body {\n  width: 6rem;\n  height: 8rem;\n  position: relative;\n  margin-block-start: 0.25rem;\n  border-radius: 47% 53% 45% 55% / 12% 9% 90% 88%;\n  background: linear-gradient(to right, white 35%, gray);\n}\n.hand {\n  position: absolute;\n  left: -1.5rem;\n  top: 0.75rem;\n  width: 2rem;\n  height: 5.5rem;\n  border-radius: 40%;\n  background: linear-gradient(to left, white 15%, gray);\n  box-shadow: 5px 0px 5px rgba(0, 0, 0, 0.25);\n  transform: rotateY(55deg) rotateZ(10deg);\n}\n.hand:first-child {\n  animation: compensateRotation var(--EVA-ROTATION-DURATION) linear infinite\n    alternate;\n}\n.hand:nth-child(2) {\n  left: 92%;\n  background: linear-gradient(to right, white 15%, gray);\n  transform: rotateY(55deg) rotateZ(-10deg);\n  animation: compensateRotationRight var(--EVA-ROTATION-DURATION) linear\n    infinite alternate;\n}\n.scannerThing {\n  width: 0;\n  height: 0;\n  position: absolute;\n  left: 60%;\n  top: 10%;\n  border-top: 180px solid #9bdaeb;\n  border-left: 250px solid transparent;\n  border-right: 250px solid transparent;\n  transform-origin: top left;\n  mask: linear-gradient(to right, white, transparent 35%);\n  animation: glow 2s cubic-bezier(0.86, 0, 0.07, 1) infinite;\n}\n.scannerOrigin {\n  position: absolute;\n  width: 8px;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  left: 60%;\n  top: 10%;\n  background: #9bdaeb;\n  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.5);\n  animation: moveRight var(--EVA-ROTATION-DURATION) linear infinite;\n}\n@keyframes rotateRight {\n  from {\n    transform: rotateY(0deg);\n  }\n  to {\n    transform: rotateY(25deg);\n  }\n}\n@keyframes moveRight {\n  from {\n    transform: translate(-50%, -50%);\n  }\n  to {\n    transform: translate(-40%, -50%);\n  }\n}\n@keyframes compensateRotation {\n  from {\n    transform: rotateY(55deg) rotateZ(10deg);\n  }\n  to {\n    transform: rotatey(30deg) rotateZ(10deg);\n  }\n}\n@keyframes compensateRotationRight {\n  from {\n    transform: rotateY(55deg) rotateZ(-10deg);\n  }\n  to {\n    transform: rotateY(70deg) rotateZ(-10deg);\n  }\n}\n@keyframes glow {\n  from {\n    opacity: 0;\n  }\n  20% {\n    opacity: 1;\n  }\n  45% {\n    transform: rotate(-25deg);\n  }\n  75% {\n    transform: rotate(5deg);\n  }\n  100% {\n    opacity: 0;\n  }\n}"
  },
  {
    "id": "uiverse-jaydipprajapati1910_curly-monkey-15",
    "title": "Curly Monkey",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "JaydipPrajapati1910",
      "profileUrl": "https://uiverse.io/JaydipPrajapati1910/curly-monkey-15"
    },
    "license": "MIT",
    "description": "Curly Monkey · loader by JaydipPrajapati1910",
    "tags": [
      "loader",
      "animation",
      "infinite",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 2000,
    "accentColor": null,
    "html": "<div class=\"loader\"></div>",
    "css": "/* From Uiverse.io by JaydipPrajapati1910 - Tags: animation, loader, infinite */\n.loader {\n  width: calc(160px / 0.707);\n  height: 28px;\n  background: repeating-linear-gradient(-45deg, #766DF4 0 30px,#0000 0 40px) left/200% 100%;\n  animation: i3 2s infinite linear;\n  border-radius: 10px;\n  border: 1px solid #766DF4;\n}\n\n@keyframes i3 {\n  100% {\n    background-position: right\n  }\n}"
  },
  {
    "id": "uiverse-pradeepsaranbishnoi_fast-frog-4",
    "title": "Fast Frog",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "Pradeepsaranbishnoi",
      "profileUrl": "https://uiverse.io/Pradeepsaranbishnoi/fast-frog-4"
    },
    "license": "MIT",
    "description": "Fast Frog · loader by Pradeepsaranbishnoi",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div>\n<div class=\"loader\"></div>\n</div>",
    "css": "/* From Uiverse.io by Pradeepsaranbishnoi - Tags: loader */\n.loader {\n  animation: rotate 1s infinite;\n  height: 50px;\n  width: 50px;\n}\n\n.loader:before,\n.loader:after {\n  border-radius: 50%;\n  content: '';\n  display: block;\n  height: 20px;\n  width: 20px;\n}\n\n.loader:before {\n  animation: ball1 1s infinite;\n  background-color: #cb2025;\n  box-shadow: 30px 0 0 #f8b334;\n  margin-bottom: 10px;\n}\n\n.loader:after {\n  animation: ball2 1s infinite;\n  background-color: #00a096;\n  box-shadow: 30px 0 0 #97bf0d;\n}\n\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0deg) scale(0.8);\n    -moz-transform: rotate(0deg) scale(0.8);\n  }\n\n  50% {\n    -webkit-transform: rotate(360deg) scale(1.2);\n    -moz-transform: rotate(360deg) scale(1.2);\n  }\n\n  100% {\n    -webkit-transform: rotate(720deg) scale(0.8);\n    -moz-transform: rotate(720deg) scale(0.8);\n  }\n}\n\n@keyframes ball1 {\n  0% {\n    box-shadow: 30px 0 0 #f8b334;\n  }\n\n  50% {\n    box-shadow: 0 0 0 #f8b334;\n    margin-bottom: 0;\n    -webkit-transform: translate(15px,15px);\n    -moz-transform: translate(15px, 15px);\n  }\n\n  100% {\n    box-shadow: 30px 0 0 #f8b334;\n    margin-bottom: 10px;\n  }\n}\n\n@keyframes ball2 {\n  0% {\n    box-shadow: 30px 0 0 #97bf0d;\n  }\n\n  50% {\n    box-shadow: 0 0 0 #97bf0d;\n    margin-top: -20px;\n    -webkit-transform: translate(15px,15px);\n    -moz-transform: translate(15px, 15px);\n  }\n\n  100% {\n    box-shadow: 30px 0 0 #97bf0d;\n    margin-top: 0;\n  }\n}"
  },
  {
    "id": "uiverse-shadowfax29_stupid-lionfish-35",
    "title": "Stupid Lionfish",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "shadowfax29",
      "profileUrl": "https://uiverse.io/shadowfax29/stupid-lionfish-35"
    },
    "license": "MIT",
    "description": "Stupid Lionfish · loader by shadowfax29",
    "tags": [
      "loader",
      "infinitity",
      "infinite spin",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1400,
    "accentColor": null,
    "html": "<div class=\"loading\">\n <svg viewBox=\"0 0 187.3 93.7\" height=\"200px\" width=\"300px\" class=\"svgbox\">\n  <defs>\n    <linearGradient y2=\"0%\" x2=\"100%\" y1=\"0%\" x1=\"0%\" id=\"gradient\">\n      <stop stop-color=\"pink\" offset=\"0%\"></stop>\n      \n         <stop stop-color=\"blue\" offset=\"100%\"></stop>\n    </linearGradient>\n  </defs>\n\n  <path stroke=\"url(#gradient)\" d=\"M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z\"></path>\n</svg>\n\n</div>",
    "css": "/* From Uiverse.io by shadowfax29 - Tags: loader, infinitity, Infinite Spin */\n.svgbox {\n  --blue: rgb(148, 66, 63);\n  stroke: var(--blue);\n  stroke-width: 5;\n  fill: none;\n  stroke-dasharray: 50, 14;\n  stroke-dashoffset: 192;\n  animation: dash_682 1.4s linear infinite;\n}\n\n@keyframes dash_682 {\n  72.5% {\n    opacity: 1;\n  }\n\n  to {\n    stroke-dashoffset: 1;\n  }\n}"
  },
  {
    "id": "uiverse-juanes200122_ugly-zebra-9",
    "title": "Ugly Zebra",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "Juanes200122",
      "profileUrl": "https://uiverse.io/Juanes200122/ugly-zebra-9"
    },
    "license": "MIT",
    "description": "Ugly Zebra · loader by Juanes200122",
    "tags": [
      "loader",
      "simple",
      "animation",
      "circle",
      "html",
      "css",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div class=\"loader\"></div>",
    "css": "/* From Uiverse.io by Juanes200122 - Tags: simple, animation, loader, circle, html, css */\n.loader {\n  width: 15px;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  background: #000;\n  box-shadow: -20px 0px,20px 0px;\n  animation: l18 1s infinite;\n}\n\n@keyframes l18 {\n \n  25% {\n    box-shadow: -20px -20px, 20px 20px\n  }\n\n  50% {\n    box-shadow: 0px -20px,  0px 20px\n  }\n\n  75% {\n    box-shadow: 20px -20px,-20px 20px\n  }\n\n  100% {\n    box-shadow: 20px   0px,-20px  0px\n  }\n}"
  },
  {
    "id": "uiverse-roroland_curly-stingray-36",
    "title": "Curly Stingray",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "roroland",
      "profileUrl": "https://uiverse.io/roroland/curly-stingray-36"
    },
    "license": "MIT",
    "description": "Curly Stingray · loader by roroland",
    "tags": [
      "loader",
      "3d",
      "gradient",
      "text animation",
      "particles",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 2000,
    "accentColor": null,
    "html": "<div class=\"loader\">\n  <p class=\"text\">\n    loading...\n  </p>\n</div>",
    "css": "/* From Uiverse.io by roroland - Tags: 3d, gradient, loader, text animation, particles */\n.loader {\n  --col1: rgba(228, 19, 141, 0.925);\n  --col2: rgb(255, 179, 80);\n  font-size: 2em;\n  font-weight: 600;\n  perspective: 800px;\n  position: relative;\n}\n\n.loader::after,\n.loader::before,\n.loader .text::after,\n.loader .text::before {\n  perspective: 800px;\n  animation: anim 2s ease-in-out infinite, dotMove 10s ease-out alternate infinite, move 10s linear infinite 1s;\n  ;\n  content: '●';\n  color: var(--col1);\n  position: absolute;\n  translate: -60px 500px;\n  width: 5px;\n  height: 5px;\n}\n\n.loader::before {\n  animation-delay: 3s;\n  color: var(--col1);\n}\n\n.loader .text::before {\n  color: var(--col2);\n  animation-delay: 2s;\n}\n\n.loader .text::after {\n  color: var(--col2);\n}\n\n.loader .text {\n  animation: anim 20s linear infinite, move 10s linear infinite 1s;\n  color: transparent;\n  background-image: linear-gradient(90deg, \n  var(--col1) 0%,\n  var(--col2) 100%);\n  background-clip: text;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  transform: skew(5deg, -5deg);\n  -webkit-background-clip: text;\n  position: relative;\n}\n\n@keyframes anim {\n  0%, 100% {\n    text-shadow: 2px 0px 2px rgba(179, 158, 158, .5);\n  }\n\n  50% {\n    background-size: 0%;\n    background-position-x: left;\n    text-shadow: 2px 10px 6px rgba(179, 158, 158, 1);\n  }\n}\n\n@keyframes move {\n  50% {\n    translate: 0px 0px;\n    rotate: x 60deg;\n    transform: skew(-5deg, 5deg);\n  }\n}\n\n@keyframes dotMove {\n  0%, 100% {\n    translate: -60px 300px;\n  }\n\n  50% {\n    translate: 160px -250px;\n    scale: .5;\n    opacity: .85;\n  }\n}"
  },
  {
    "id": "uiverse-z4drus_polite-seahorse-77",
    "title": "Polite Seahorse",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "Z4drus",
      "profileUrl": "https://uiverse.io/Z4drus/polite-seahorse-77"
    },
    "license": "MIT",
    "description": "Polite Seahorse · loader by Z4drus",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"container\">\n  <div class=\"slice\"></div>\n  <div class=\"slice\"></div>\n  <div class=\"slice\"></div>\n  <div class=\"slice\"></div>\n  <div class=\"slice\"></div>\n  <div class=\"slice\"></div>\n</div>",
    "css": "/* From Uiverse.io by Z4drus  - Tags: loader */\n.container {\n  --uib-size: 150px;\n  --uib-speed: 2.5s;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: var(--uib-size);\n  width: var(--uib-size);\n}\n\n.slice {\n  position: relative;\n  height: calc(var(--uib-size) / 6);\n  width: 100%;\n}\n\n.slice::before,\n.slice::after {\n  --uib-a: calc(var(--uib-speed) / -2);\n  --uib-b: calc(var(--uib-speed) / -6);\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: calc(50% - var(--uib-size) / 12);\n  height: 100%;\n  width: calc(100% / 6);\n  border-radius: 50%;\n  background-color: var(--uib-color);\n  flex-shrink: 0;\n  animation: orbit var(--uib-speed) linear infinite;\n  transition: background-color 0.3s ease;\n}\n\n.slice:nth-child(1)::after {\n  animation-delay: var(--uib-a);\n}\n\n.slice:nth-child(2)::before {\n  animation-delay: var(--uib-b);\n}\n\n.slice:nth-child(2)::after {\n  animation-delay: calc(var(--uib-a) + var(--uib-b));\n}\n\n.slice:nth-child(3)::before {\n  animation-delay: calc(var(--uib-b) * 2);\n}\n\n.slice:nth-child(3)::after {\n  animation-delay: calc(var(--uib-a) + var(--uib-b) * 2);\n}\n\n.slice:nth-child(4)::before {\n  animation-delay: calc(var(--uib-b) * 3);\n}\n\n.slice:nth-child(4)::after {\n  animation-delay: calc(var(--uib-a) + var(--uib-b) * 3);\n}\n\n.slice:nth-child(5)::before {\n  animation-delay: calc(var(--uib-b) * 4);\n}\n\n.slice:nth-child(5)::after {\n  animation-delay: calc(var(--uib-a) + var(--uib-b) * 4);\n}\n\n.slice:nth-child(6)::before {\n  animation-delay: calc(var(--uib-b) * 5);\n}\n\n.slice:nth-child(6)::after {\n  animation-delay: calc(var(--uib-a) + var(--uib-b) * 5);\n}\n\n@keyframes orbit {\n  0% {\n    transform: translateX(calc(var(--uib-size) * 0.25)) scale(0.73684);\n    opacity: 0.65;\n  }\n\n  5% {\n    transform: translateX(calc(var(--uib-size) * 0.235)) scale(0.684208);\n    opacity: 0.58;\n  }\n\n  10% {\n    transform: translateX(calc(var(--uib-size) * 0.182)) scale(0.631576);\n    opacity: 0.51;\n  }\n\n  15% {\n    transform: translateX(calc(var(--uib-size) * 0.129)) scale(0.578944);\n    opacity: 0.44;\n  }\n\n  20% {\n    transform: translateX(calc(var(--uib-size) * 0.076)) scale(0.526312);\n    opacity: 0.37;\n  }\n\n  25% {\n    transform: translateX(0%) scale(0.47368);\n    opacity: 0.3;\n  }\n\n  30% {\n    transform: translateX(calc(var(--uib-size) * -0.076)) scale(0.526312);\n    opacity: 0.37;\n  }\n\n  35% {\n    transform: translateX(calc(var(--uib-size) * -0.129)) scale(0.578944);\n    opacity: 0.44;\n  }\n\n  40% {\n    transform: translateX(calc(var(--uib-size) * -0.182)) scale(0.631576);\n    opacity: 0.51;\n  }\n\n  45% {\n    transform: translateX(calc(var(--uib-size) * -0.235)) scale(0.684208);\n    opacity: 0.58;\n  }\n\n  50% {\n    transform: translateX(calc(var(--uib-size) * -0.25)) scale(0.73684);\n    opacity: 0.65;\n  }\n\n  55% {\n    transform: translateX(calc(var(--uib-size) * -0.235)) scale(0.789472);\n    opacity: 0.72;\n  }\n\n  60% {\n    transform: translateX(calc(var(--uib-size) * -0.182)) scale(0.842104);\n    opacity: 0.79;\n  }\n\n  65% {\n    transform: translateX(calc(var(--uib-size) * -0.129)) scale(0.894736);\n    opacity: 0.86;\n  }\n\n  70% {\n    transform: translateX(calc(var(--uib-size) * -0.076)) scale(0.947368);\n    opacity: 0.93;\n  }\n\n  75% {\n    transform: translateX(0%) scale(1);\n    opacity: 1;\n  }\n\n  80% {\n    transform: translateX(calc(var(--uib-size) * 0.076)) scale(0.947368);\n    opacity: 0.93;\n  }\n\n  85% {\n    transform: translateX(calc(var(--uib-size) * 0.129)) scale(0.894736);\n    opacity: 0.86;\n  }\n\n  90% {\n    transform: translateX(calc(var(--uib-size) * 0.182)) scale(0.842104);\n    opacity: 0.79;\n  }\n\n  95% {\n    transform: translateX(calc(var(--uib-size) * 0.235)) scale(0.789472);\n    opacity: 0.72;\n  }\n\n  100% {\n    transform: translateX(calc(var(--uib-size) * 0.25)) scale(0.73684);\n    opacity: 0.65;\n  }\n}\n\n.slice:nth-child(1)::before,\n.slice:nth-child(1)::after {\n  background-color: #334dff;\n}\n\n.slice:nth-child(2)::before,\n.slice:nth-child(2)::after {\n  background-color: #333eff;\n}\n\n.slice:nth-child(3)::before,\n.slice:nth-child(3)::after {\n  background-color: #3334ff;\n}\n\n.slice:nth-child(4)::before,\n.slice:nth-child(4)::after {\n  background-color: #4433ff;\n}\n\n.slice:nth-child(5)::before,\n.slice:nth-child(5)::after {\n  background-color: #6633ff;\n}\n\n.slice:nth-child(6)::before,\n.slice:nth-child(6)::after {\n  background-color: #9933ff;\n}"
  },
  {
    "id": "uiverse-vikramsinghnegi_dangerous-fireant-25",
    "title": "Dangerous Fireant",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "vikramsinghnegi",
      "profileUrl": "https://uiverse.io/vikramsinghnegi/dangerous-fireant-25"
    },
    "license": "MIT",
    "description": "Dangerous Fireant · loader by vikramsinghnegi",
    "tags": [
      "loader",
      "loading",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 2000,
    "accentColor": null,
    "html": "<div class=\"loader\"></div>",
    "css": "/* From Uiverse.io by vikramsinghnegi  - Tags: loader, LOADING, LOADER */\n/* HTML: <div class=\"loader\"></div> */\n.loader {\n  width: fit-content;\n  font-size: 17px;\n  font-family: monospace;\n  line-height: 1.4;\n  font-weight: bold;\n  padding: 30px 2px 50px;\n  background: linear-gradient(#000 0 0) 0 0/100% 100% content-box padding-box\n    no-repeat;\n  position: relative;\n  overflow: hidden;\n  animation: l10-0 2s infinite cubic-bezier(1, 175, 0.5, 175);\n}\n.loader::before {\n  content: \"Loading\";\n  display: inline-block;\n  animation: l10-2 2s infinite;\n}\n.loader::after {\n  content: \"\";\n  position: absolute;\n  width: 34px;\n  height: 28px;\n  top: 110%;\n  left: calc(50% - 16px);\n  background: linear-gradient(\n        90deg,\n        #0000 12px,\n        #f92033 0 22px,\n        #0000 0 26px,\n        #fdc98d 0 32px,\n        #0000\n      )\n      bottom 26px left 50%,\n    linear-gradient(90deg, #0000 10px, #f92033 0 28px, #fdc98d 0 32px, #0000 0)\n      bottom 24px left 50%,\n    linear-gradient(\n        90deg,\n        #0000 10px,\n        #643700 0 16px,\n        #fdc98d 0 20px,\n        #000 0 22px,\n        #fdc98d 0 24px,\n        #000 0 26px,\n        #f92033 0 32px,\n        #0000 0\n      )\n      bottom 22px left 50%,\n    linear-gradient(\n        90deg,\n        #0000 8px,\n        #643700 0 10px,\n        #fdc98d 0 12px,\n        #643700 0 14px,\n        #fdc98d 0 20px,\n        #000 0 22px,\n        #fdc98d 0 28px,\n        #f92033 0 32px,\n        #0000 0\n      )\n      bottom 20px left 50%,\n    linear-gradient(\n        90deg,\n        #0000 8px,\n        #643700 0 10px,\n        #fdc98d 0 12px,\n        #643700 0 16px,\n        #fdc98d 0 22px,\n        #000 0 24px,\n        #fdc98d 0 30px,\n        #f92033 0 32px,\n        #0000 0\n      )\n      bottom 18px left 50%,\n    linear-gradient(\n        90deg,\n        #0000 8px,\n        #643700 0 12px,\n        #fdc98d 0 20px,\n        #000 0 28px,\n        #f92033 0 30px,\n        #0000 0\n      )\n      bottom 16px left 50%,\n    linear-gradient(90deg, #0000 12px, #fdc98d 0 26px, #f92033 0 30px, #0000 0)\n      bottom 14px left 50%,\n    linear-gradient(\n        90deg,\n        #fdc98d 6px,\n        #f92033 0 14px,\n        #222a87 0 16px,\n        #f92033 0 22px,\n        #222a87 0 24px,\n        #f92033 0 28px,\n        #0000 0 32px,\n        #643700 0\n      )\n      bottom 12px left 50%,\n    linear-gradient(\n        90deg,\n        #fdc98d 6px,\n        #f92033 0 16px,\n        #222a87 0 18px,\n        #f92033 0 24px,\n        #f92033 0 26px,\n        #0000 0 30px,\n        #643700 0\n      )\n      bottom 10px left 50%,\n    linear-gradient(\n        90deg,\n        #0000 10px,\n        #f92033 0 16px,\n        #222a87 0 24px,\n        #feee49 0 26px,\n        #222a87 0 30px,\n        #643700 0\n      )\n      bottom 8px left 50%,\n    linear-gradient(\n        90deg,\n        #0000 12px,\n        #222a87 0 18px,\n        #feee49 0 20px,\n        #222a87 0 30px,\n        #643700 0\n      )\n      bottom 6px left 50%,\n    linear-gradient(90deg, #0000 8px, #643700 0 12px, #222a87 0 30px, #643700 0)\n      bottom 4px left 50%,\n    linear-gradient(90deg, #0000 6px, #643700 0 14px, #222a87 0 26px, #0000 0)\n      bottom 2px left 50%,\n    linear-gradient(90deg, #0000 6px, #643700 0 10px, #0000 0) bottom 0px left\n      50%;\n  background-size: 34px 2px;\n  background-repeat: no-repeat;\n  animation: inherit;\n  animation-name: l10-1;\n}\n@keyframes l10-0 {\n  0%,\n  30% {\n    background-position: 0 0px;\n  }\n  50%,\n  100% {\n    background-position: 0 -0.1px;\n  }\n}\n@keyframes l10-1 {\n  50%,\n  100% {\n    top: 109.5%;\n  }\n}\n@keyframes l10-2 {\n  0%,\n  30% {\n    transform: translateY(0);\n  }\n  80%,\n  100% {\n    transform: translateY(-260%);\n  }\n}"
  },
  {
    "id": "uiverse-satyamchaudharydev_horrible-snake-35",
    "title": "Horrible Snake",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "satyamchaudharydev",
      "profileUrl": "https://uiverse.io/satyamchaudharydev/horrible-snake-35"
    },
    "license": "MIT",
    "description": "Horrible Snake · loader by satyamchaudharydev",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<div class=\"loader\">\n  <span></span>\n  <span></span>\n  <span></span>\n  <span></span>\n</div>",
    "css": "/* From Uiverse.io by satyamchaudharydev - Tags: loader */\n.loader {\n --loader: rgb(49, 180, 255);\n --loader-size: 30px;\n position: relative;\n width: 100px;\n height: 40px;\n overflow: hidden;\n transition: .5s;\n letter-spacing: 2px\n}\n\n.loader span {\n position: absolute;\n}\n\n.loader span:nth-child(1) {\n top: 0;\n left: -100%;\n width: 100%;\n height: var(--loader-size);\n background: linear-gradient(90deg, transparent, var(--loader));\n animation: loader-anim1 1s linear infinite;\n}\n\n@keyframes loader-anim1 {\n 0% {\n  left: -100%;\n }\n\n 50%,100% {\n  left: 100%;\n }\n}\n\n.loader  span:nth-child(2) {\n top: -100%;\n right: 0;\n width: var(--loader-size);\n height: 100%;\n background: linear-gradient(180deg, transparent, var(--loader));\n animation: loader-anim2 1s linear infinite;\n animation-delay: .25s\n}\n\n@keyframes loader-anim2 {\n 0% {\n  top: -100%;\n }\n\n 50%,100% {\n  top: 100%;\n }\n}\n\n.loader span:nth-child(3) {\n bottom: 0;\n right: -100%;\n width: 100%;\n height: var(--loader-size);\n background: linear-gradient(270deg, transparent, var(--loader));\n animation: loader-anim3 1s linear infinite;\n animation-delay: .5s\n}\n\n@keyframes loader-anim3 {\n 0% {\n  right: -100%;\n }\n\n 50%,100% {\n  right: 100%;\n }\n}\n\n.loader span:nth-child(4) {\n bottom: -100%;\n left: 0;\n width: var(--loader-size);\n height: 100%;\n background: linear-gradient(360deg, transparent, var(--loader));\n animation: loader-anim4 1s linear infinite;\n animation-delay: .75s\n}\n\n@keyframes loader-anim4 {\n 0% {\n  bottom: -100%;\n }\n\n 50%,100% {\n  bottom: 100%;\n }\n}"
  },
  {
    "id": "uiverse-jkhuger_tall-duck-98",
    "title": "Tall Duck",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "JkHuger",
      "profileUrl": "https://uiverse.io/JkHuger/tall-duck-98"
    },
    "license": "MIT",
    "description": "Tall Duck · loader by JkHuger",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 2000,
    "accentColor": null,
    "html": "<div class=\"container\">\n  <div class=\"block\"></div>\n  <div class=\"block\"></div>\n  <div class=\"block\"></div>\n  <div class=\"block\"></div>\n  <div class=\"block\"></div>\n  <div class=\"block\"></div>\n  <div class=\"block\"></div>\n  <div class=\"block\"></div>\n  <div class=\"block\"></div>\n  <div class=\"block\"></div>\n  <div class=\"block\"></div>\n  <div class=\"block\"></div>\n  <div class=\"block\"></div>\n  <div class=\"block\"></div>\n  <div class=\"block\"></div>\n  <div class=\"block\"></div>\n</div>",
    "css": "/* From Uiverse.io by JkHuger - Tags: loader */\n.container {\n  width: 80px;\n  height: 100px;\n}\n\n.block {\n  position: relative;\n  box-sizing: border-box;\n  float: left;\n  margin: 0 10px 10px 0;\n  width: 12px;\n  height: 12px;\n  border-radius: 3px;\n  background: #FFF;\n}\n\n.block:nth-child(4n+1) {\n  animation: wave_61 2s ease .0s infinite;\n}\n\n.block:nth-child(4n+2) {\n  animation: wave_61 2s ease .2s infinite;\n}\n\n.block:nth-child(4n+3) {\n  animation: wave_61 2s ease .4s infinite;\n}\n\n.block:nth-child(4n+4) {\n  animation: wave_61 2s ease .6s infinite;\n  margin-right: 0;\n}\n\n@keyframes wave_61 {\n  0% {\n    top: 0;\n    opacity: 1;\n  }\n\n  50% {\n    top: 30px;\n    opacity: .2;\n  }\n\n  100% {\n    top: 0;\n    opacity: 1;\n  }\n}"
  },
  {
    "id": "uiverse-hashir-ahmed123_spotty-mouse-64",
    "title": "Spotty Mouse",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "Hashir-Ahmed123",
      "profileUrl": "https://uiverse.io/Hashir-Ahmed123/spotty-mouse-64"
    },
    "license": "MIT",
    "description": "Spotty Mouse · loader by Hashir-Ahmed123",
    "tags": [
      "loader",
      "animation",
      "red",
      "green",
      "blue",
      "purple",
      "pink",
      "gradient"
    ],
    "previewType": "css",
    "durationMs": 5000,
    "accentColor": null,
    "html": "<div class=\"lava-lamp\">\n  <div class=\"bubble\"></div>\n  <div class=\"bubble1\"></div>\n  <div class=\"bubble2\"></div>\n  <div class=\"bubble3\"></div>\n</div>",
    "css": "/* From Uiverse.io by Hashir-Ahmed123  - Tags: animation, red, green, blue, purple, pink, gradient, smooth */\n@keyframes drop {\n  0% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(80px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n.lava-lamp {\n  position: relative;\n  width: 50px;\n  height: 100px;\n  background: #000;\n  border-radius: 25px;\n  overflow: hidden;\n}\n\n.bubble {\n  position: absolute;\n  top: 0;\n  width: 20px;\n  height: 20px;\n  background: linear-gradient(to bottom, #e64980, #ff8787);\n  border-radius: 50%;\n  left: 15px;\n  animation: drop 5s ease-in-out infinite;\n}\n.bubble1 {\n  position: absolute;\n  top: 0;\n  width: 20px;\n  height: 20px;\n  background: linear-gradient(to bottom, #82c91e, #3bc9db);\n  border-radius: 50%;\n  left: 1px;\n  animation: drop 3s ease-in-out infinite;\n}\n.bubble2 {\n  position: absolute;\n  top: 0;\n  width: 20px;\n  height: 20px;\n  background: linear-gradient(to bottom, #7950f2, #f783ac);\n  border-radius: 50%;\n  left: 30px;\n  animation: drop 4s ease-in-out infinite;\n}\n.bubble3 {\n  position: absolute;\n  top: 0;\n  width: 20px;\n  height: 20px;\n  background: linear-gradient(to bottom, #4481eb, #04befe);\n  border-radius: 50%;\n  left: 20px;\n  animation: drop 6s ease-in-out infinite;\n}"
  },
  {
    "id": "uiverse-yaya12085_purple-bullfrog-80",
    "title": "Purple Bullfrog",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "Yaya12085",
      "profileUrl": "https://uiverse.io/Yaya12085/purple-bullfrog-80"
    },
    "license": "MIT",
    "description": "Purple Bullfrog · loader by Yaya12085",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div aria-label=\"Loading...\" role=\"status\" class=\"loader\">\n  <svg class=\"icon\" viewBox=\"0 0 256 256\">\n    <line x1=\"128\" y1=\"32\" x2=\"128\" y2=\"64\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"24\"></line>\n    <line x1=\"195.9\" y1=\"60.1\" x2=\"173.3\" y2=\"82.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"24\"></line>\n    <line x1=\"224\" y1=\"128\" x2=\"192\" y2=\"128\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"24\"></line>\n    <line x1=\"195.9\" y1=\"195.9\" x2=\"173.3\" y2=\"173.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"24\"></line>\n    <line x1=\"128\" y1=\"224\" x2=\"128\" y2=\"192\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"24\"></line>\n    <line x1=\"60.1\" y1=\"195.9\" x2=\"82.7\" y2=\"173.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"24\"></line>\n    <line x1=\"32\" y1=\"128\" x2=\"64\" y2=\"128\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"24\"></line>\n    <line x1=\"60.1\" y1=\"60.1\" x2=\"82.7\" y2=\"82.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"24\"></line>\n  </svg>\n  <span class=\"loading-text\">Loading...</span>\n</div>",
    "css": "/* From Uiverse.io by Yaya12085 - Tags: loader */\n.loader {\n  display: flex;\n  align-items: center;\n}\n\n.icon {\n  height: 1.5rem;\n  width: 1.5rem;\n  animation: spin 1s linear infinite;\n  stroke: rgba(107, 114, 128, 1);\n}\n\n.loading-text {\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 500;\n  color: rgba(107, 114, 128, 1);\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}"
  },
  {
    "id": "uiverse-adir-sl_quiet-goose-19",
    "title": "Quiet Goose",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "Adir-SL",
      "profileUrl": "https://uiverse.io/Adir-SL/quiet-goose-19"
    },
    "license": "MIT",
    "description": "Quiet Goose · button by Adir-SL",
    "tags": [
      "button",
      "pink",
      "toy",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<button> Click here </button>",
    "css": "/* From Uiverse.io by Adir-SL - Tags: pink, button, toy */\nbutton {\n  --fontSize: 2rem;\n  --button: 356, 80%;\n  --buttonColor: hsl(var(--button), 70%);\n  --sideColor: hsl(var(--button), 40%);\n  --text: hsl(var(--button), 30%);\n  --bgColor: #e8e8e8;\n  position: relative;\n  font-size: 0;\n  font-family: sans-serif;\n  transition: all 300ms cubic-bezier(0.47, 1.64, 0.41, 0.8);\n  border-radius: 999px;\n  padding: calc(var(--fontSize) / 2);\n  height: calc(var(--fontSize) * 2);\n  min-width: calc(var(--fontSize) * 2);\n  line-height: calc(var(--fontSize) * 0.75);\n  border: none;\n  outline: none;\n  background-color: var(--buttonColor);\n  transform: rotate(-25deg);\n  color: var(--text);\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n  box-shadow: calc(var(--fontSize) / -25) calc(var(--fontSize) / 25) calc(var(--fontSize) / 25) #ffffffbb inset, calc(var(--fontSize) / -25) calc(var(--fontSize) / -50) calc(var(--fontSize) / 25) #ffffff88 inset,\n    0 0 calc(var(--fontSize) / 5) #0f004a77 inset, 0 0 0 calc(var(--fontSize) / 3.6) var(--buttonColor) inset,\n    0 0 calc(var(--fontSize) / 6.25) calc(var(--fontSize) / 3.125) #0f004a44 inset, calc(var(--fontSize) / -25) calc(var(--fontSize) / 12.5) 0 var(--sideColor),\n    calc(var(--fontSize) / -8.33) calc(var(--fontSize) / 12.5) calc(var(--fontSize) / 6.25) #0f004a44, calc(var(--fontSize) / -16.666) calc(var(--fontSize) / 12.5) calc(var(--fontSize) / 25) #0f004a66;\n}\n\nbutton:hover {\n  transform: rotate(0);\n  overflow: visible;\n  font-size: var(--fontSize);\n}\n\nbutton::before,\nbutton::after {\n  content: \": \";\n  font-family: serif;\n  font-weight: bold;\n  text-shadow: calc(var(--fontSize) / 25) 0 0 var(--sideColor), 0 0 calc(var(--fontSize) / 12.5) #0f004a55,\n    calc(var(--fontSize) / 50) 0 0 var(--sideColor), calc(var(--fontSize) / 50) calc(var(--fontSize) / -50) 0 var(--sideColor);\n  color: var(--bgColor);\n  font-size: var(--fontSize);\n}"
  },
  {
    "id": "uiverse-zebra76966_polite-ape-16",
    "title": "Polite Ape",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "zebra76966",
      "profileUrl": "https://uiverse.io/zebra76966/polite-ape-16"
    },
    "license": "MIT",
    "description": "Polite Ape · button by zebra76966",
    "tags": [
      "button",
      "animation",
      "gradient",
      "click animation",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<button class=\"rainbow-btn\">\n  <div class=\"content\">\n    <svg\n      viewBox=\"0 0 16 16\"\n      class=\"bi bi-lightning-charge-fill\"\n      fill=\"currentColor\"\n      height=\"25\"\n      width=\"25\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n    >\n      <path\n        d=\"M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z\"\n      ></path>\n    </svg>\n\n    Join now\n  </div>\n</button>",
    "css": "/* From Uiverse.io by zebra76966  - Tags: animation, gradient, button, click animation */\n.rainbow-btn {\n  border: 2px;\n  border-radius: 35px;\n  width: 18em;\n  font-size: 2rem;\n  padding: 28px 28px;\n  color: black;\n  background: transparent;\n  position: relative;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n}\n\n.rainbow-btn::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -1;\n  content: \"\";\n  height: 4.3em;\n  border-radius: 35px;\n  width: 18em;\n  filter: blur(1px);\n  background: radial-gradient(\n      at 0% 0%,\n      hsla(312, 66%, 67%, 1) 0px,\n      transparent 50%\n    ),\n    radial-gradient(at 28% 79%, hsla(355, 80%, 64%, 1) 0px, transparent 50%),\n    radial-gradient(at 100% 1%, hsla(279, 96%, 65%, 1) 0px, transparent 50%),\n    radial-gradient(at 5% 91%, hsla(289, 80%, 70%, 1) 0px, transparent 50%),\n    radial-gradient(at 50% 37%, hsla(28, 100%, 74%, 1) 0px, transparent 50%),\n    radial-gradient(at 27% 38%, hsla(189, 0%, 100%, 1) 0px, transparent 50%),\n    radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 1) 0px, transparent 50%),\n    radial-gradient(at 64% 78%, hsla(340, 100%, 76%, 1) 0px, transparent 50%),\n    radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%),\n    radial-gradient(at 72% 55%, hsla(240, 68%, 97%, 1) 0px, transparent 50%),\n    radial-gradient(at 51% 14%, hsla(28, 100%, 74%, 1) 0px, transparent 50%);\n}\n\n.rainbow-btn .content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px 8px;\n  font-weight: 500;\n  border: 3px solid rgba(255, 255, 255, 0.2);\n  border-radius: 25px;\n  box-shadow: inset 0 0 1px 2px rgba(255, 255, 255, 0.712);\n}\n.rainbow-btn .content::before {\n  content: \" \";\n  border: 10px double rgba(247, 201, 232, 0.5);\n  border-radius: 35px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 17em;\n  height: 3em;\n  padding: 10px 8px;\n  position: absolute;\n  z-index: 2;\n}\n\n.rainbow-btn .content svg {\n  margin-right: 10px;\n}\n\n.rainbow-btn:hover {\n  scale: 1.1;\n}\n.rainbow-btn:focus {\n  scale: 0.9;\n}"
  },
  {
    "id": "uiverse-muhammadhasann_silent-lizard-44",
    "title": "Silent Lizard",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "MuhammadHasann",
      "profileUrl": "https://uiverse.io/MuhammadHasann/silent-lizard-44"
    },
    "license": "MIT",
    "description": "Silent Lizard · button by MuhammadHasann",
    "tags": [
      "button",
      "hover",
      "star"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<button>Button\n  <div class=\"star-1\">\n    <svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 784.11 815.53\" style=\"shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd\" version=\"1.1\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\"><defs></defs><g id=\"Layer_x0020_1\"><metadata id=\"CorelCorpID_0Corel-Layer\"></metadata><path d=\"M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z\" class=\"fil0\"></path></g></svg>\n  </div>\n  <div class=\"star-2\">\n    <svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 784.11 815.53\" style=\"shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd\" version=\"1.1\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\"><defs></defs><g id=\"Layer_x0020_1\"><metadata id=\"CorelCorpID_0Corel-Layer\"></metadata><path d=\"M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z\" class=\"fil0\"></path></g></svg>\n  </div>\n  <div class=\"star-3\">\n    <svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 784.11 815.53\" style=\"shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd\" version=\"1.1\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\"><defs></defs><g id=\"Layer_x0020_1\"><metadata id=\"CorelCorpID_0Corel-Layer\"></metadata><path d=\"M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z\" class=\"fil0\"></path></g></svg>\n  </div>\n  <div class=\"star-4\">\n    <svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 784.11 815.53\" style=\"shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd\" version=\"1.1\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\"><defs></defs><g id=\"Layer_x0020_1\"><metadata id=\"CorelCorpID_0Corel-Layer\"></metadata><path d=\"M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z\" class=\"fil0\"></path></g></svg>\n  </div>\n  <div class=\"star-5\">\n    <svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 784.11 815.53\" style=\"shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd\" version=\"1.1\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\"><defs></defs><g id=\"Layer_x0020_1\"><metadata id=\"CorelCorpID_0Corel-Layer\"></metadata><path d=\"M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z\" class=\"fil0\"></path></g></svg>\n  </div>\n  <div class=\"star-6\">\n    <svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 784.11 815.53\" style=\"shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd\" version=\"1.1\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\"><defs></defs><g id=\"Layer_x0020_1\"><metadata id=\"CorelCorpID_0Corel-Layer\"></metadata><path d=\"M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z\" class=\"fil0\"></path></g></svg>\n  </div>\n</button>",
    "css": "/* From Uiverse.io by MuhammadHasann - Tags: button, hover, star */\nbutton {\n  position: relative;\n  padding: 12px 35px;\n  background: #FEC195;\n  font-size: 17px;\n  font-weight: 500;\n  color: #181818;\n  border: 3px solid #FEC195;\n  border-radius: 8px;\n  box-shadow: 0 0 0 #fec1958c;\n  transition: all .3s ease-in-out;\n}\n\n.star-1 {\n  position: absolute;\n  top: 20%;\n  left: 20%;\n  width: 25px;\n  height: auto;\n  filter: drop-shadow(0 0 0 #fffdef);\n  z-index: -5;\n  transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);\n}\n\n.star-2 {\n  position: absolute;\n  top: 45%;\n  left: 45%;\n  width: 15px;\n  height: auto;\n  filter: drop-shadow(0 0 0 #fffdef);\n  z-index: -5;\n  transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);\n}\n\n.star-3 {\n  position: absolute;\n  top: 40%;\n  left: 40%;\n  width: 5px;\n  height: auto;\n  filter: drop-shadow(0 0 0 #fffdef);\n  z-index: -5;\n  transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);\n}\n\n.star-4 {\n  position: absolute;\n  top: 20%;\n  left: 40%;\n  width: 8px;\n  height: auto;\n  filter: drop-shadow(0 0 0 #fffdef);\n  z-index: -5;\n  transition: all .8s cubic-bezier(0, 0.4, 0, 1.01);\n}\n\n.star-5 {\n  position: absolute;\n  top: 25%;\n  left: 45%;\n  width: 15px;\n  height: auto;\n  filter: drop-shadow(0 0 0 #fffdef);\n  z-index: -5;\n  transition: all .6s cubic-bezier(0, 0.4, 0, 1.01);\n}\n\n.star-6 {\n  position: absolute;\n  top: 5%;\n  left: 50%;\n  width: 5px;\n  height: auto;\n  filter: drop-shadow(0 0 0 #fffdef);\n  z-index: -5;\n  transition: all .8s ease;\n}\n\nbutton:hover {\n  background: transparent;\n  color: #FEC195;\n  box-shadow: 0 0 25px #fec1958c;\n}\n\nbutton:hover .star-1 {\n  position: absolute;\n  top: -80%;\n  left: -30%;\n  width: 25px;\n  height: auto;\n  filter: drop-shadow(0 0 10px #fffdef);\n  z-index: 2;\n}\n\nbutton:hover .star-2 {\n  position: absolute;\n  top: -25%;\n  left: 10%;\n  width: 15px;\n  height: auto;\n  filter: drop-shadow(0 0 10px #fffdef);\n  z-index: 2;\n}\n\nbutton:hover .star-3 {\n  position: absolute;\n  top: 55%;\n  left: 25%;\n  width: 5px;\n  height: auto;\n  filter: drop-shadow(0 0 10px #fffdef);\n  z-index: 2;\n}\n\nbutton:hover .star-4 {\n  position: absolute;\n  top: 30%;\n  left: 80%;\n  width: 8px;\n  height: auto;\n  filter: drop-shadow(0 0 10px #fffdef);\n  z-index: 2;\n}\n\nbutton:hover .star-5 {\n  position: absolute;\n  top: 25%;\n  left: 115%;\n  width: 15px;\n  height: auto;\n  filter: drop-shadow(0 0 10px #fffdef);\n  z-index: 2;\n}\n\nbutton:hover .star-6 {\n  position: absolute;\n  top: 5%;\n  left: 60%;\n  width: 5px;\n  height: auto;\n  filter: drop-shadow(0 0 10px #fffdef);\n  z-index: 2;\n}\n\n.fil0 {\n  fill: #FFFDEF\n}"
  },
  {
    "id": "uiverse-custyyyy_short-lizard-47",
    "title": "Short Lizard",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "Custyyyy",
      "profileUrl": "https://uiverse.io/Custyyyy/short-lizard-47"
    },
    "license": "MIT",
    "description": "Short Lizard · button by Custyyyy",
    "tags": [
      "button",
      "skeuomorphism",
      "realistic",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 150,
    "accentColor": null,
    "html": "<button role=\"button\" class=\"button-name\">Button-name</button>",
    "css": "/* From Uiverse.io by Custyyyy - Tags: skeuomorphism, button, realistic */\n.button-name {\n align-items: center;\n appearance: none;\n background-color: #FCFCFD;\n border-radius: 4px;\n border-width: 0;\n box-shadow: rgba(45, 35, 66, 0.2) 0 2px 4px,rgba(45, 35, 66, 0.15) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;\n box-sizing: border-box;\n color: #36395A;\n cursor: pointer;\n display: inline-flex;\n font-family: \"JetBrains Mono\",monospace;\n height: 48px;\n justify-content: center;\n line-height: 1;\n list-style: none;\n overflow: hidden;\n padding-left: 16px;\n padding-right: 16px;\n position: relative;\n text-align: left;\n text-decoration: none;\n transition: box-shadow .15s,transform .15s;\n user-select: none;\n -webkit-user-select: none;\n touch-action: manipulation;\n white-space: nowrap;\n will-change: box-shadow,transform;\n font-size: 18px;\n}\n\n.button-name:focus {\n box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;\n}\n\n.button-name:hover {\n box-shadow: rgba(45, 35, 66, 0.3) 0 4px 8px, rgba(45, 35, 66, 0.2) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;\n transform: translateY(-2px);\n}\n\n.button-name:active {\n box-shadow: #D6D6E7 0 3px 7px inset;\n transform: translateY(2px);\n}"
  },
  {
    "id": "uiverse-akaspidey01_spotty-husky-49",
    "title": "Spotty Husky",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "AKAspidey01",
      "profileUrl": "https://uiverse.io/AKAspidey01/spotty-husky-49"
    },
    "license": "MIT",
    "description": "Spotty Husky · button by AKAspidey01",
    "tags": [
      "button",
      "simple",
      "flashy",
      "animation",
      "hover",
      "smooth",
      "hover effect",
      "button hover effect"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<button class=\"button\">\n  <div class=\"similar-line line-1\"></div>\n  <div class=\"similar-line line-2\"></div>\n  <div class=\"similar-line line-3\"></div>\n</button>",
    "css": "/* From Uiverse.io by AKAspidey01  - Tags: simple, flashy, animation, button, hover, smooth, hover effect, button hover effect  */\n.button {\n  cursor: pointer;\n  position: relative;\n  width: 5em;\n  height: 4em;\n  border: none;\n  background: rgb(248, 66, 42);\n  padding: 0.5em;\n  display: flex;\n  justify-content: center;\n  gap: 0.7em;\n  flex-direction: column;\n  transition-duration: 0.5s;\n}\n.button:hover {\n  background: rgb(7, 142, 253);\n}\n.similar-line {\n  height: 0.2em;\n  background: #fff;\n  border-radius: 1em;\n  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);\n}\n.line-1 {\n  width: 40%;\n}\n.line-2 {\n  width: 70%;\n}\n.line-3 {\n  width: 90%;\n}\n.button:hover .line-1 {\n  width: 90%;\n}\n.button:hover .line-2 {\n  width: 70%;\n}\n.button:hover .line-3 {\n  width: 40%;\n}"
  },
  {
    "id": "uiverse-himanshu9682_wise-shrimp-26",
    "title": "Wise Shrimp",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "himanshu9682",
      "profileUrl": "https://uiverse.io/himanshu9682/wise-shrimp-26"
    },
    "license": "MIT",
    "description": "Wise Shrimp · button by himanshu9682",
    "tags": [
      "button",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"container\">\n  <a href=\"#\" class=\"button type--C\">\n    <div class=\"button__line\"></div>\n    <div class=\"button__line\"></div>\n    <span class=\"button__text\">ENTRY</span>\n    <div class=\"button__drow1\"></div>\n    <div class=\"button__drow2\"></div>\n  </a>\n</div>",
    "css": "/* From Uiverse.io by himanshu9682  - Tags: button */\n.type--A {\n  --line_color: #555555;\n  --back_color: #ffecf6;\n}\n.type--B {\n  --line_color: #1b1919;\n  --back_color: #e9ecff;\n}\n.type--C {\n  --line_color: #00135c;\n  --back_color: #defffa;\n}\n.button {\n  position: relative;\n  z-index: 0;\n  width: 240px;\n  height: 56px;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: bold;\n  color: var(--line_color);\n  letter-spacing: 2px;\n  transition: all 0.3s ease;\n}\n.button__text {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.button::before,\n.button::after,\n.button__text::before,\n.button__text::after {\n  content: \"\";\n  position: absolute;\n  height: 3px;\n  border-radius: 2px;\n  background: var(--line_color);\n  transition: all 0.5s ease;\n}\n.button::before {\n  top: 0;\n  left: 54px;\n  width: calc(100% - 56px * 2 - 16px);\n}\n.button::after {\n  top: 0;\n  right: 54px;\n  width: 8px;\n}\n.button__text::before {\n  bottom: 0;\n  right: 54px;\n  width: calc(100% - 56px * 2 - 16px);\n}\n.button__text::after {\n  bottom: 0;\n  left: 54px;\n  width: 8px;\n}\n.button__line {\n  position: absolute;\n  top: 0;\n  width: 56px;\n  height: 100%;\n  overflow: hidden;\n}\n.button__line::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  width: 150%;\n  height: 100%;\n  box-sizing: border-box;\n  border-radius: 300px;\n  border: solid 3px var(--line_color);\n}\n.button__line:nth-child(1),\n.button__line:nth-child(1)::before {\n  left: 0;\n}\n.button__line:nth-child(2),\n.button__line:nth-child(2)::before {\n  right: 0;\n}\n.button:hover {\n  letter-spacing: 6px;\n}\n.button:hover::before,\n.button:hover .button__text::before {\n  width: 8px;\n}\n.button:hover::after,\n.button:hover .button__text::after {\n  width: calc(100% - 56px * 2 - 16px);\n}\n.button__drow1,\n.button__drow2 {\n  position: absolute;\n  z-index: -1;\n  border-radius: 16px;\n  transform-origin: 16px 16px;\n}\n.button__drow1 {\n  top: -16px;\n  left: 40px;\n  width: 32px;\n  height: 0;\n  transform: rotate(30deg);\n}\n.button__drow2 {\n  top: 44px;\n  left: 77px;\n  width: 32px;\n  height: 0;\n  transform: rotate(-127deg);\n}\n.button__drow1::before,\n.button__drow1::after,\n.button__drow2::before,\n.button__drow2::after {\n  content: \"\";\n  position: absolute;\n}\n.button__drow1::before {\n  bottom: 0;\n  left: 0;\n  width: 0;\n  height: 32px;\n  border-radius: 16px;\n  transform-origin: 16px 16px;\n  transform: rotate(-60deg);\n}\n.button__drow1::after {\n  top: -10px;\n  left: 45px;\n  width: 0;\n  height: 32px;\n  border-radius: 16px;\n  transform-origin: 16px 16px;\n  transform: rotate(69deg);\n}\n.button__drow2::before {\n  bottom: 0;\n  left: 0;\n  width: 0;\n  height: 32px;\n  border-radius: 16px;\n  transform-origin: 16px 16px;\n  transform: rotate(-146deg);\n}\n.button__drow2::after {\n  bottom: 26px;\n  left: -40px;\n  width: 0;\n  height: 32px;\n  border-radius: 16px;\n  transform-origin: 16px 16px;\n  transform: rotate(-262deg);\n}\n.button__drow1,\n.button__drow1::before,\n.button__drow1::after,\n.button__drow2,\n.button__drow2::before,\n.button__drow2::after {\n  background: var(--back_color);\n}\n.button:hover .button__drow1 {\n  animation: drow1 ease-in 0.06s;\n  animation-fill-mode: forwards;\n}\n.button:hover .button__drow1::before {\n  animation: drow2 linear 0.08s 0.06s;\n  animation-fill-mode: forwards;\n}\n.button:hover .button__drow1::after {\n  animation: drow3 linear 0.03s 0.14s;\n  animation-fill-mode: forwards;\n}\n.button:hover .button__drow2 {\n  animation: drow4 linear 0.06s 0.2s;\n  animation-fill-mode: forwards;\n}\n.button:hover .button__drow2::before {\n  animation: drow3 linear 0.03s 0.26s;\n  animation-fill-mode: forwards;\n}\n.button:hover .button__drow2::after {\n  animation: drow5 linear 0.06s 0.32s;\n  animation-fill-mode: forwards;\n}\n@keyframes drow1 {\n  0% {\n    height: 0;\n  }\n  100% {\n    height: 100px;\n  }\n}\n@keyframes drow2 {\n  0% {\n    width: 0;\n    opacity: 0;\n  }\n  10% {\n    opacity: 0;\n  }\n  11% {\n    opacity: 1;\n  }\n  100% {\n    width: 120px;\n  }\n}\n@keyframes drow3 {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 80px;\n  }\n}\n@keyframes drow4 {\n  0% {\n    height: 0;\n  }\n  100% {\n    height: 120px;\n  }\n}\n@keyframes drow5 {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 124px;\n  }\n}\n\n.container {\n  width: 100%;\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.button:not(:last-child) {\n  margin-bottom: 64px;\n}"
  },
  {
    "id": "uiverse-vikas7754_honest-falcon-30",
    "title": "Honest Falcon",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "vikas7754",
      "profileUrl": "https://uiverse.io/vikas7754/honest-falcon-30"
    },
    "license": "MIT",
    "description": "Honest Falcon · button by vikas7754",
    "tags": [
      "button",
      "3d button",
      "mac button",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"container\">\n  <button class=\"btn cmd\">\n    <svg\n      fill=\"#fff\"\n      version=\"1.1\"\n      id=\"Capa_1\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n      width=\"20px\"\n      height=\"20px\"\n      viewBox=\"0 0 80 80\"\n      xml:space=\"preserve\"\n    >\n      <g>\n        <path\n          d=\"M64,48L64,48h-8V32h8c8.836,0,16-7.164,16-16S72.836,0,64,0c-8.837,0-16,7.164-16,16v8H32v-8c0-8.836-7.164-16-16-16\n\t\tS0,7.164,0,16s7.164,16,16,16h8v16h-8l0,0l0,0C7.164,48,0,55.164,0,64s7.164,16,16,16c8.837,0,16-7.164,16-16l0,0v-8h16v7.98\n\t\tc0,0.008-0.001,0.014-0.001,0.02c0,8.836,7.164,16,16,16s16-7.164,16-16S72.836,48.002,64,48z M64,8c4.418,0,8,3.582,8,8\n\t\ts-3.582,8-8,8h-8v-8C56,11.582,59.582,8,64,8z M8,16c0-4.418,3.582-8,8-8s8,3.582,8,8v8h-8C11.582,24,8,20.417,8,16z M16,72\n\t\tc-4.418,0-8-3.582-8-8s3.582-8,8-8l0,0h8v8C24,68.418,20.418,72,16,72z M32,48V32h16v16H32z M64,72c-4.418,0-8-3.582-8-8l0,0v-8\n\t\th7.999c4.418,0,8,3.582,8,8S68.418,72,64,72z\"\n        ></path>\n      </g>\n    </svg>\n    command\n  </button>\n  <a href=\"https://freecodez.com/post/7jypdpp\" class=\"btn c\">C</a>\n</div>",
    "css": "/* From Uiverse.io by vikas7754  - Tags: button, 3d button, mac button */\n.container {\n  background: #ff6f6f;\n  border-radius: 15px;\n  padding: 15px;\n  display: flex;\n  gap: 15px;\n  box-shadow: 3px 5px 10px #ff7a7a, inset 3px 0 0 #ff5751d6,\n    inset -3px 0 0 #ff5751d6, inset 0 3px 0 #ffffff23, inset 0 -3px 0 #00000023;\n}\n.btn {\n  text-decoration: none;\n  border: none;\n  outline: none;\n  background: #ff6f6f;\n  padding: 10px;\n  box-shadow: 0 0 5px #0000005a, 2px 2px 3px #00000078,\n    inset 1px 1px 2px #ffffff9d;\n  border-radius: 10px;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: sans-serif;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn:focus {\n  animation: 0.3s clicked linear;\n}\n.cmd {\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n}\n.c {\n  width: 75px;\n  font-size: 1.5rem;\n}\n@keyframes clicked {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(0.95);\n    box-shadow: 0 0 5px #00000067, inset 0 0 3px #ffffff78;\n  }\n  100% {\n    transform: scale(1);\n  }\n}"
  },
  {
    "id": "uiverse-doniaskima_stupid-walrus-83",
    "title": "Stupid Walrus",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "doniaskima",
      "profileUrl": "https://uiverse.io/doniaskima/stupid-walrus-83"
    },
    "license": "MIT",
    "description": "Stupid Walrus · button by doniaskima",
    "tags": [
      "button",
      "animated bar loader",
      "doubletriangle",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<button class=\"btn-9\"><span>Button</span></button>",
    "css": "/* From Uiverse.io by doniaskima - Tags: button, animated bar loader, DoubleTriangle  */\n.btn-9,\n.btn-9 *,\n.btn-9 :after,\n.btn-9 :before,\n.btn-9:after,\n.btn-9:before {\n  border: 0 solid;\n  box-sizing: border-box;\n}\n\n.btn-9 {\n  -webkit-tap-highlight-color: transparent;\n  -webkit-appearance: button;\n  background-color: #000;\n  background-image: none;\n  color: #fff;\n  cursor: pointer;\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,\n    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,\n    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;\n  font-size: 100%;\n  font-weight: 900;\n  line-height: 1.5;\n  margin: 0;\n  -webkit-mask-image: -webkit-radial-gradient(#000, #fff);\n  padding: 0;\n  text-transform: uppercase;\n}\n\n.btn-9:disabled {\n  cursor: default;\n}\n\n.btn-9:-moz-focusring {\n  outline: auto;\n}\n\n.btn-9 svg {\n  display: block;\n  vertical-align: middle;\n}\n\n.btn-9 [hidden] {\n  display: none;\n}\n\n.btn-9 {\n  border-radius: 99rem;\n  border-width: 2px;\n  overflow: hidden;\n  padding: 0.8rem 3rem;\n  position: relative;\n}\n\n.btn-9 span {\n  mix-blend-mode: difference;\n}\n\n.btn-9:after,\n.btn-9:before {\n  --tilt: 1.2rem;\n  background: #fff;\n  -webkit-clip-path: polygon(\n    0 0,\n    calc(100% - var(--tilt)) 0,\n    100% 50%,\n    calc(100% - var(--tilt)) 100%,\n    0 100%\n  );\n  clip-path: polygon(\n    0 0,\n    calc(100% - var(--tilt)) 0,\n    100% 50%,\n    calc(100% - var(--tilt)) 100%,\n    0 100%\n  );\n  content: \"\";\n  display: block;\n  height: 100%;\n  left: calc(-100% - var(--tilt));\n  position: absolute;\n  top: 0;\n  transform: translateX(var(--progress, 0));\n  transition: transform 0.2s ease;\n  width: calc(100% + var(--tilt));\n}\n\n.btn-9:after {\n  left: 100%;\n  transform: translateX(var(--progress, 0)) rotate(180deg);\n  z-index: -1;\n}\n\n.btn-9:hover:before {\n  --progress: 100%;\n}\n\n.btn-9:hover:after {\n  --progress: -100%;\n}"
  },
  {
    "id": "uiverse-ernestnash_cold-turtle-83",
    "title": "Cold Turtle",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "ernestnash",
      "profileUrl": "https://uiverse.io/ernestnash/cold-turtle-83"
    },
    "license": "MIT",
    "description": "Cold Turtle · button by ernestnash",
    "tags": [
      "button",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<a class=\"btn\" href=\"#\">I am a button</a>",
    "css": "/* From Uiverse.io by ernestnash - Tags: button */\n.btn {\n display: inline-block;\n padding: 0.9rem 1.8rem;\n font-size: 16px;\n font-weight: 700;\n color: white;\n border: 3px solid rgb(252, 70, 100);\n cursor: pointer;\n position: relative;\n background-color: transparent;\n text-decoration: none;\n overflow: hidden;\n z-index: 1;\n font-family: inherit;\n}\n\n.btn::before {\n content: \"\";\n position: absolute;\n left: 0;\n top: 0;\n width: 100%;\n height: 100%;\n background-color: rgb(252, 70, 100);\n transform: translateX(-100%);\n transition: all .3s;\n z-index: -1;\n}\n\n.btn:hover::before {\n transform: translateX(0);\n}"
  },
  {
    "id": "uiverse-hecktorviegas_green-cow-45",
    "title": "Green Cow",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "HecktorViegas",
      "profileUrl": "https://uiverse.io/HecktorViegas/green-cow-45"
    },
    "license": "MIT",
    "description": "Green Cow · button by HecktorViegas",
    "tags": [
      "button",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<button class=\"button\">\n  <span>Join Today</span>\n\n  <svg\n    class=\"icon\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    fill=\"none\"\n    viewBox=\"0 0 24 24\"\n    stroke=\"currentColor\"\n    stroke-width=\"2\"\n  >\n    <path\n      stroke-linecap=\"round\"\n      stroke-linejoin=\"round\"\n      d=\"M17 8l4 4m0 0l-4 4m4-4H3\"\n    ></path>\n  </svg>\n</button>",
    "css": "/* From Uiverse.io by HecktorViegas  - Tags: button */\n.button {\n  cursor: pointer;\n  display: flex;\n  text-wrap: nowrap;\n  align-items: center;\n  gap: 0.9rem;\n  padding: 1.5rem 2rem;\n  border-radius: 1.2rem;\n  background: linear-gradient(to bottom, #e3a8fc, #8d38cf);\n  box-sizing: border-box;\n  box-shadow:\n    -3px 5px 1.5px #5a2982,\n    -15px 12px 20px #5a2982ba;\n  border: none;\n  transform: rotate3d(2, -1, 1, 343deg) rotatex(27deg) scale(0.9);\n  color: #ffcaf7;\n  font-weight: bold;\n  font-size: 1.2rem;\n  transition: all 0.2s;\n}\n\n.button:before {\n  content: \"\";\n  width: 97%;\n  position: absolute;\n  height: 91%;\n  top: 4.5%;\n  z-index: -2;\n  left: 1.3%;\n  border-radius: 1.1rem;\n  box-shadow: inset 0 -5px 5px -1px #7926bc;\n  background: linear-gradient(to bottom, #d591ff, #7f2dc2);\n}\n\n.button:hover {\n  transition: all 0.2s;\n  transform: scale(1.2);\n  box-shadow: inset -0.5px -3px 3px 1px #7926bc;\n}\n\n.button:active {\n  transition: all 0.1s;\n  box-shadow: inset 2px 2px 3px #5a2982ba;\n  transform: scale(1.15);\n}\n\n.icon {\n  width: 1.8rem;\n  height: 1.8rem;\n}\n\n.button span {\n  background: -webkit-linear-gradient(#ffe4fe, #ffcaf7);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}"
  },
  {
    "id": "uiverse-ramdaniali_mean-cobra-4",
    "title": "Mean Cobra",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "ramdaniAli",
      "profileUrl": "https://uiverse.io/ramdaniAli/mean-cobra-4"
    },
    "license": "MIT",
    "description": "Mean Cobra · button by ramdaniAli",
    "tags": [
      "button",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<button>\n  Button\n</button>",
    "css": "/* From Uiverse.io by ramdaniAli - Tags: button */\nbutton {\n  color: #4181f098;\n  text-transform: uppercase;\n  letter-spacing: 5px;\n  /* border: none; */\n  font-weight: bold;\n  font-size: 17px;\n  padding: 1rem 2rem;\n  border: 1px solid #ffffff1f;\n  border-radius: 20px;\n  background: #ebebeb;\n  -webkit-box-shadow: 5px 5px 15px #cccccc,\n              -5px -5px 15px #ffffff;\n  box-shadow: 5px 5px 15px #cccccc,\n              -5px -5px 15px #ffffff;\n  -webkit-transition: box-shadow 0.3s ease-in-out;\n  transition: box-shadow 0.3s ease-in-out;\n}\n\nbutton:hover {\n  color: #357af0;\n  background: linear-gradient(145deg, #d4d4d4, #fbfbfb);\n  -webkit-box-shadow: 5px 5px 15px #cccccc,\n              -5px -5px 15px #ffffff;\n  box-shadow: 5px 5px 15px #cccccc,\n              -5px -5px 15px #ffffff;\n}\n\nbutton:active {\n  color: #357af0;\n  background: #ebebeb;\n  -webkit-box-shadow: inset 5px 5px 15px #cccccc,\n              inset -5px -5px 15px #ffffff;\n  box-shadow: inset 5px 5px 15px #cccccc,\n              inset -5px -5px 15px #ffffff;\n}"
  },
  {
    "id": "uiverse-damithkumara_green-chipmunk-67",
    "title": "Green Chipmunk",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "Damithkumara",
      "profileUrl": "https://uiverse.io/Damithkumara/green-chipmunk-67"
    },
    "license": "MIT",
    "description": "Green Chipmunk · button by Damithkumara",
    "tags": [
      "button",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<button><span></span>button</button>",
    "css": "/* From Uiverse.io by Damithkumara - Tags: button */\nbutton {\n padding: 0.9em 1.8em;\n text-transform: uppercase;\n text-decoration: none;\n letter-spacing: 4px;\n color: transparent;\n border: 3px solid #ff0;\n font-size: 14px;\n position: relative;\n font-family: inherit;\n background: transparent;\n}\n\nbutton::before {\n content: \"button\";\n position: absolute;\n top: 0;\n left: 0;\n width: 100%;\n height: 100%;\n background-color: #363636;\n color: #ff0;\n display: flex;\n justify-content: center;\n align-items: center;\n transition: all 0.5s;\n}\n\nbutton:hover::before {\n left: 100%;\n transform: scale(0) rotateY(360deg);\n opacity: 0;\n}\n\nbutton::after {\n content: \"button\";\n position: absolute;\n top: 0;\n left: -100%;\n width: 100%;\n height: 100%;\n background-color: #363636;\n color: #ff0;\n display: flex;\n justify-content: center;\n align-items: center;\n transition: all 0.5s;\n transform: scale(0) rotateY(0deg);\n opacity: 0;\n}\n\nbutton:hover::after {\n left: 0;\n transform: scale(1) rotateY(360deg);\n opacity: 1;\n}"
  },
  {
    "id": "uiverse-vinodjangid07_slippery-fox-79",
    "title": "Slippery Fox",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "vinodjangid07",
      "profileUrl": "https://uiverse.io/vinodjangid07/slippery-fox-79"
    },
    "license": "MIT",
    "description": "Slippery Fox · button by vinodjangid07",
    "tags": [
      "button",
      "tooltip",
      "hover",
      "trash",
      "delete",
      "hover effect",
      "bin"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<button class=\"deleteButton\">\n  <svg\n    xmlns=\"http://www.w3.org/2000/svg\"\n    fill=\"none\"\n    viewBox=\"0 0 50 59\"\n    class=\"bin\"\n  >\n    <path\n      fill=\"#B5BAC1\"\n      d=\"M0 7.5C0 5.01472 2.01472 3 4.5 3H45.5C47.9853 3 50 5.01472 50 7.5V7.5C50 8.32843 49.3284 9 48.5 9H1.5C0.671571 9 0 8.32843 0 7.5V7.5Z\"\n    ></path>\n    <path\n      fill=\"#B5BAC1\"\n      d=\"M17 3C17 1.34315 18.3431 0 20 0H29.3125C30.9694 0 32.3125 1.34315 32.3125 3V3H17V3Z\"\n    ></path>\n    <path\n      fill=\"#B5BAC1\"\n      d=\"M2.18565 18.0974C2.08466 15.821 3.903 13.9202 6.18172 13.9202H43.8189C46.0976 13.9202 47.916 15.821 47.815 18.0975L46.1699 55.1775C46.0751 57.3155 44.314 59.0002 42.1739 59.0002H7.8268C5.68661 59.0002 3.92559 57.3155 3.83073 55.1775L2.18565 18.0974ZM18.0003 49.5402C16.6196 49.5402 15.5003 48.4209 15.5003 47.0402V24.9602C15.5003 23.5795 16.6196 22.4602 18.0003 22.4602C19.381 22.4602 20.5003 23.5795 20.5003 24.9602V47.0402C20.5003 48.4209 19.381 49.5402 18.0003 49.5402ZM29.5003 47.0402C29.5003 48.4209 30.6196 49.5402 32.0003 49.5402C33.381 49.5402 34.5003 48.4209 34.5003 47.0402V24.9602C34.5003 23.5795 33.381 22.4602 32.0003 22.4602C30.6196 22.4602 29.5003 23.5795 29.5003 24.9602V47.0402Z\"\n      clip-rule=\"evenodd\"\n      fill-rule=\"evenodd\"\n    ></path>\n    <path fill=\"#B5BAC1\" d=\"M2 13H48L47.6742 21.28H2.32031L2 13Z\"></path>\n  </svg>\n\n  <span class=\"tooltip\">Delete</span>\n</button>",
    "css": "/* From Uiverse.io by vinodjangid07  - Tags: tooltip, button, hover, trash, delete, hover effect, bin */\n.deleteButton {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 3px;\n  background-color: transparent;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n  position: relative;\n  overflow: hidden;\n}\n.deleteButton svg {\n  width: 44%;\n}\n.deleteButton:hover {\n  background-color: rgb(237, 56, 56);\n  overflow: visible;\n}\n.bin path {\n  transition: all 0.2s;\n}\n.deleteButton:hover .bin path {\n  fill: #fff;\n}\n.deleteButton:active {\n  transform: scale(0.98);\n}\n.tooltip {\n  --tooltip-color: rgb(41, 41, 41);\n  position: absolute;\n  top: -40px;\n  background-color: var(--tooltip-color);\n  color: white;\n  border-radius: 5px;\n  font-size: 12px;\n  padding: 8px 12px;\n  font-weight: 600;\n  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.105);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: all 0.5s;\n}\n.tooltip::before {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  transform: rotate(45deg);\n  content: \"\";\n  background-color: var(--tooltip-color);\n  bottom: -10%;\n}\n.deleteButton:hover .tooltip {\n  opacity: 1;\n}"
  },
  {
    "id": "uiverse-alexmaracinaru_perfect-panda-77",
    "title": "Perfect Panda",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "alexmaracinaru",
      "profileUrl": "https://uiverse.io/alexmaracinaru/perfect-panda-77"
    },
    "license": "MIT",
    "description": "Perfect Panda · button by alexmaracinaru",
    "tags": [
      "button",
      "icon",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<button>\n    <span>Continue</span>\n    <svg width=\"34\" height=\"34\" viewBox=\"0 0 74 74\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"37\" cy=\"37\" r=\"35.5\" stroke=\"black\" stroke-width=\"3\"></circle>\n        <path d=\"M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z\" fill=\"black\"></path>\n    </svg>\n</button>",
    "css": "/* From Uiverse.io by alexmaracinaru - Tags: icon, button */\nbutton {\n  cursor: pointer;\n  font-weight: 700;\n  font-family: Helvetica,\"sans-serif\";\n  transition: all .2s;\n  padding: 10px 20px;\n  border-radius: 100px;\n  background: #cfef00;\n  border: 1px solid transparent;\n  display: flex;\n  align-items: center;\n  font-size: 15px;\n}\n\nbutton:hover {\n  background: #c4e201;\n}\n\nbutton > svg {\n  width: 34px;\n  margin-left: 10px;\n  transition: transform .3s ease-in-out;\n}\n\nbutton:hover svg {\n  transform: translateX(5px);\n}\n\nbutton:active {\n  transform: scale(0.95);\n}"
  },
  {
    "id": "uiverse-khaledmatalkah_odd-gecko-75",
    "title": "Odd Gecko",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "KhaledMatalkah",
      "profileUrl": "https://uiverse.io/KhaledMatalkah/odd-gecko-75"
    },
    "license": "MIT",
    "description": "Odd Gecko · button by KhaledMatalkah",
    "tags": [
      "button",
      "hover",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 2000,
    "accentColor": null,
    "html": "<button class=\"button\">HOVER ME!</button>",
    "css": "/* From Uiverse.io by KhaledMatalkah - Tags: button, hover, animated */\n@keyframes glowing-pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);\n  }\n\n  70% {\n    box-shadow: 0 0 0 30px rgba(255, 255, 255, 0);\n  }\n\n  100% {\n    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);\n  }\n}\n\n.button {\n  position: relative;\n  display: inline-block;\n  background: linear-gradient(to right, #FFB900, #FF7730);\n  border: none;\n  border-radius: 25px;\n  color: white;\n  padding: 10px 20px;\n  font-size: 18px;\n  text-transform: uppercase;\n  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);\n  animation: glowing-pulse 2s infinite;\n}\n\n.button::before {\n  content: \"\";\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  right: -5px;\n  bottom: -5px;\n  border-radius: 30px;\n  box-shadow: 0 0 20px #FF7730;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.3s ease;\n}\n\n.button:hover::before {\n  opacity: 1;\n}"
  },
  {
    "id": "uiverse-mininaim_helpless-horse-85",
    "title": "Helpless Horse",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "mininaim",
      "profileUrl": "https://uiverse.io/mininaim/helpless-horse-85"
    },
    "license": "MIT",
    "description": "Helpless Horse · button by mininaim",
    "tags": [
      "button",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<button class=\"space-button\">\n  <svg class=\"space-icon\" viewBox=\"0 0 24 24\" width=\"16\" height=\"16\">\n    <path fill=\"currentColor\" d=\"M12 0c-1.2 0-2.2 1-2.2 2.2v3.3c0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1V2.2C7.6 1 6.7 0 5.5 0S3.4 1 3.4 2.2v3.3c0 .6-.5 1.1-1.1 1.1S1.1 6.1 1.1 5.5V2.2C1.1 1 0 2 0 3.2 0 16.3 7.7 24 20.8 24 23 24 24 23 24 20.8c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2c0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1 0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2c0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1 0-2.1 1.7-3.8 3.8-3.8s3.8 1.7 3.8 3.8c0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1 0-1.2-1-2.2-2.2-2.2z\"></path>\n  </svg>\n  Launch\n</button>",
    "css": "/* From Uiverse.io by mininaim - Tags: button */\n.space-button {\n  font-size: 1.2rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 5px;\n  padding: 10px 20px;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n}\n\n.space-icon {\n  margin-right: 10px;\n  fill: currentColor;\n}\n\n/* Light Mode */\n@media (prefers-color-scheme: light) {\n  .space-button {\n    background-color: #0074D9;\n    color: #fff;\n    box-shadow: 0px 0px 10px 0px #0074D9;\n  }\n\n  .space-button:hover {\n    box-shadow: 0px 0px 20px 0px #fff;\n  }\n\n  .space-button:active {\n    box-shadow: none;\n    background-color: #001f3f;\n  }\n}\n\n/* Dark Mode */\n@media (prefers-color-scheme: dark) {\n  .space-button {\n    background-color: #f0f0f0;\n    color: #000;\n    box-shadow: 0px 0px 10px 0px #000;\n  }\n\n  .space-button:hover {\n    box-shadow: 0px 0px 20px 0px #fff;\n  }\n\n  .space-button:active {\n    box-shadow: none;\n    background-color: #bbb;\n  }\n}"
  },
  {
    "id": "uiverse-akaspidey01_moody-moose-26",
    "title": "Moody Moose",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "AKAspidey01",
      "profileUrl": "https://uiverse.io/AKAspidey01/moody-moose-26"
    },
    "license": "MIT",
    "description": "Moody Moose · button by AKAspidey01",
    "tags": [
      "button",
      "add",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 600,
    "accentColor": null,
    "html": "<div class=\"main-section\">\n  <button class=\"first-button\"> Hover Me </button>\n  <button class=\"second-button\"> <svg viewBox=\"0 0 24 24\" width=\"20\" height=\"20\" stroke=\"#ffd300\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"css-i6dzq1\"><circle cx=\"9\" cy=\"21\" r=\"1\"></circle><circle cx=\"20\" cy=\"21\" r=\"1\"></circle><path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"></path></svg> Add To Cart</button>\n</div>",
    "css": "/* From Uiverse.io by AKAspidey01 - Tags: button, add */\n.first-button {\n  background: rgb(115, 15, 209);\n  color: #fff;\n  border: none;\n  font-weight: 700;\n  font-size: 1em;\n  min-height: 60px;\n  width: 200px;\n  gap: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition-duration: 0.6s;\n}\n\n.main-section {\n  display: flex;\n  flex-direction: column;\n  height: 60px;\n  overflow: hidden;\n  align-items: flex-start;\n}\n\n.main-section:hover .second-button , .main-section:hover .first-button {\n  transform: translateY(-60px);\n}\n\n.second-button {\n  background: rgb(209, 15, 57);\n  color: #fff;\n  border: none;\n  font-weight: 700;\n  font-size: 1em;\n  min-height: 60px;\n  width: 200px;\n  gap: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition-duration: 0.6s;\n}"
  },
  {
    "id": "uiverse-lucaasbre_quiet-bat-17",
    "title": "Quiet Bat",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "Lucaasbre - Source: Frontend Joe - https://frontendjoe.com",
      "profileUrl": "https://uiverse.io/Lucaasbre - Source: Frontend Joe - https://frontendjoe.com/quiet-bat-17"
    },
    "license": "MIT",
    "description": "Quiet Bat · button by Lucaasbre - Source: Frontend Joe - https://frontendjoe.com",
    "tags": [
      "button",
      "active",
      "delete",
      "animated",
      "css"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<button>\n  <span class=\"button-text\">\n  </span>\n  <span class=\"animation\">\n    <span class=\"paper-wrapper\">\n      <span class=\"paper\">\n      </span>\n    </span>\n    <span class=\"shredded-wrapper\">\n      <span class=\"shredded\">\n      </span>\n    </span>\n    <span class=\"lid\">\n    </span>\n    <span class=\"can\">\n      <span class=\"filler\">\n      </span>\n    </span>\n  </span>\n</button>",
    "css": "/* From Uiverse.io by Lucaasbre - Source: Frontend Joe - https://frontendjoe.com - Tags: button, active, delete, animated, css */\nbutton {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  border: 0;\n  background: #ff2c6c;\n  font-size: 22px;\n  font-weight: 400;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  color: #f9f9f9;\n  padding: 0 0 0 24px;\n  width: 210px;\n  height: 64px;\n  text-align: left;\n  cursor: pointer;\n  transition: 0.3s;\n}\n\n.button-text {\n  flex: 0 0 120px;\n}\n\n.button-text::before {\n  content: \"Delete\";\n}\n\n.animation {\n  position: relative;\n  overflow: hidden;\n  display: grid;\n  place-items: center;\n  width: 64px;\n  height: 64px;\n  scale: 1;\n}\n\n.can {\n  overflow: hidden;\n  position: relative;\n  translate: 0 3px;\n  width: 20px;\n  height: 22px;\n  border-left-radius: 5px;\n  border-right-radius: 5px;\n  border: 2px solid #ffffff;\n}\n\n.lid {\n  position: absolute;\n  top: 20px;\n  left: 50%;\n  translate: -50% 0;\n  width: 22px;\n  height: 2px;\n  background: #ffffff;\n}\n\n@keyframes move {\n  75%,\n  100% {\n    translate: 0 88px;\n  }\n}\n\n.paper-wrapper,\n.shredded-wrapper {\n  overflow: hidden;\n  position: absolute;\n  display: flex;\n  top: -20px;\n  left: 50%;\n  margin-left: -5px;\n  width: 10px;\n  height: 64px;\n}\n\n.paper-wrapper {\n  height: 40px;\n}\n\n.shredded-wrapper {\n  top: 24px;\n  height: 20px;\n  justify-content: center;\n}\n\n.paper, .shredded {\n  display: block;\n  background: #ffffff;\n  height: 20px;\n}\n\n.paper {\n  width: 10px;\n}\n\n.shredded {\n  margin-top: -40px;\n  width: 2px;\n}\n\n.shredded::before,\n.shredded::after {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  width: inherit;\n  height: inherit;\n  background: inherit;\n}\n\n.shredded::before {\n  left: -4px;\n}\n\n.shredded::after {\n  right: -4px;\n}\n\n@keyframes fill {\n  0%, 20% {\n    translate: 0 0;\n  }\n\n  40%, 70% {\n    translate: 0 -50%;\n  }\n\n  90%, 100% {\n    translate: 0 -100%;\n  }\n}\n\n.filler {\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -32px;\n  width: 64px;\n  height: 120%;\n  background: #ffffff;\n}\n\nbutton:hover {\n  opacity: 0.75;\n}\n\nbutton:active .button-text::before {\n  content: \"Deleting...\";\n}\n\nbutton:active :is(.paper, .shredded) {\n  animation: move 1.25s linear 2 both;\n}\n\nbutton:active .filler {\n  animation: fill 2.5s both;\n}"
  },
  {
    "id": "uiverse-satyamchaudharydev_afraid-yak-30",
    "title": "Afraid Yak",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "satyamchaudharydev",
      "profileUrl": "https://uiverse.io/satyamchaudharydev/afraid-yak-30"
    },
    "license": "MIT",
    "description": "Afraid Yak · button by satyamchaudharydev",
    "tags": [
      "button",
      "download",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"button\" data-tooltip=\"Size: 20Mb\">\n<div class=\"button-wrapper\">\n  <div class=\"text\">Download</div>\n    <span class=\"icon\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" role=\"img\" width=\"2em\" height=\"2em\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17\"></path></svg>\n    </span>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by satyamchaudharydev - Tags: button, download */\n.button {\n  --width: 100px;\n  --height: 35px;\n  --tooltip-height: 35px;\n  --tooltip-width: 90px;\n  --gap-between-tooltip-to-button: 18px;\n  --button-color: #1163ff;\n  --tooltip-color: #fff;\n  width: var(--width);\n  height: var(--height);\n  background: var(--button-color);\n  position: relative;\n  text-align: center;\n  border-radius: 0.45em;\n  font-family: \"Arial\";\n  transition: background 0.3s;\n}\n\n.button::before {\n  position: absolute;\n  content: attr(data-tooltip);\n  width: var(--tooltip-width);\n  height: var(--tooltip-height);\n  background-color: var(--tooltip-color);\n  font-size: 0.9rem;\n  color: #111;\n  border-radius: .25em;\n  line-height: var(--tooltip-height);\n  bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) + 10px);\n  left: calc(50% - var(--tooltip-width) / 2);\n}\n\n.button::after {\n  position: absolute;\n  content: '';\n  width: 0;\n  height: 0;\n  border: 10px solid transparent;\n  border-top-color: var(--tooltip-color);\n  left: calc(50% - 10px);\n  bottom: calc(100% + var(--gap-between-tooltip-to-button) - 10px);\n}\n\n.button::after,.button::before {\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.5s;\n}\n\n.text {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.button-wrapper,.text,.icon {\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  color: #fff;\n}\n\n.text {\n  top: 0\n}\n\n.text,.icon {\n  transition: top 0.5s;\n}\n\n.icon {\n  color: #fff;\n  top: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.icon svg {\n  width: 24px;\n  height: 24px;\n}\n\n.button:hover {\n  background: #6c18ff;\n}\n\n.button:hover .text {\n  top: -100%;\n}\n\n.button:hover .icon {\n  top: 0;\n}\n\n.button:hover:before,.button:hover:after {\n  opacity: 1;\n  visibility: visible;\n}\n\n.button:hover:after {\n  bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) - 20px);\n}\n\n.button:hover:before {\n  bottom: calc(var(--height) + var(--gap-between-tooltip-to-button));\n}"
  },
  {
    "id": "uiverse-ferlagher_afraid-dingo-99",
    "title": "Afraid Dingo",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "ferlagher",
      "profileUrl": "https://uiverse.io/ferlagher/afraid-dingo-99"
    },
    "license": "MIT",
    "description": "Afraid Dingo · button by ferlagher",
    "tags": [
      "button",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<button>\n    <b>Fold me!</b>\n</button>",
    "css": "/* From Uiverse.io by ferlagher - Tags: button */\nbutton {\n  position: relative;\n  font-size: 1.2em;\n  padding: 0.7em 1.4em;\n  background-color: #BF0426;\n  text-decoration: none;\n  border: none;\n  border-radius: 0.5em;\n  color: #DEDEDE;\n  box-shadow: 0.5em 0.5em 0.5em rgba(0, 0, 0, 0.3);\n}\n\nbutton::before {\n  position: absolute;\n  content: '';\n  height: 0;\n  width: 0;\n  top: 0;\n  left: 0;\n  background: linear-gradient(135deg, rgba(33,33,33,1) 0%, rgba(33,33,33,1) 50%, rgba(150,4,31,1) 50%, rgba(191,4,38,1) 60%);\n  border-radius: 0 0 0.5em 0;\n  box-shadow: 0.2em 0.2em 0.2em rgba(0, 0, 0, 0.3);\n  transition: 0.3s;\n}\n\nbutton:hover::before {\n  width: 1.6em;\n  height: 1.6em;\n}\n\nbutton:active {\n  box-shadow: 0.2em 0.2em 0.3em rgba(0, 0, 0, 0.3);\n  transform: translate(0.1em, 0.1em);\n}"
  },
  {
    "id": "uiverse-1osm_rude-panda-79",
    "title": "Rude Panda",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "1osm",
      "profileUrl": "https://uiverse.io/1osm/rude-panda-79"
    },
    "license": "MIT",
    "description": "Rude Panda · button by 1osm",
    "tags": [
      "button",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<button>\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path fill=\"none\" d=\"M0 0h24v24H0z\"></path><path fill=\"currentColor\" d=\"M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z\"></path></svg>\n  <p class=\"Click\">Click</p>\n  <p class=\"OnHover\">Thanks</p>\n\n</button>",
    "css": "/* From Uiverse.io by 1osm - Tags: button */\nbutton {\n  width: 130px;\n  height: 45px;\n  color: white;\n  font-weight: bold;\n  font-size: 20px;\n  border-width: 10px;\n  background: linear-gradient(to right, #5f6d7c, #456b8b, #49a6fc);\n  border: none;\n  letter-spacing: 0.05em;\n  border-radius: 10px;\n}\n\nbutton svg {\n  height: 40px;\n  width: 60px;\n  transform: translate(-30px,3px) rotate(90deg);\n  transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1)\n}\n\nbutton .Click {\n  transform: translate(20px,-33px);\n  font-size: 20px;\n  transition: 0.3s cubic-bezier(0.76, 0, 0.24, 1)\n}\n\nbutton .OnHover {\n  transform: translate(-15px,-56px);\n  font-size: 20px;\n  opacity: 0%;\n  transition: 0.3s cubic-bezier(0.76, 0, 0.24, 1)\n}\n\nbutton:hover svg {\n  transform: translate(40px,3px) rotate(90deg);\n}\n\nbutton:hover .Click {\n  opacity: 0%;\n}\n\nbutton:hover .OnHover {\n  opacity: 100%;\n}"
  },
  {
    "id": "uiverse-voxybuns_lucky-fireant-71",
    "title": "Lucky Fireant",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "Voxybuns",
      "profileUrl": "https://uiverse.io/Voxybuns/lucky-fireant-71"
    },
    "license": "MIT",
    "description": "Lucky Fireant · button by Voxybuns",
    "tags": [
      "button",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 100,
    "accentColor": null,
    "html": "<button>\n  <span class=\"button_top\"> Button\n  </span>\n</button>",
    "css": "/* From Uiverse.io by Voxybuns - Tags: button */\nbutton {\n  /* Variables */\n  --button_radius: 0.75em;\n  --button_color: #e8e8e8;\n  --button_outline_color: #000000;\n  font-size: 17px;\n  font-weight: bold;\n  border: none;\n  border-radius: var(--button_radius);\n  background: var(--button_outline_color);\n}\n\n.button_top {\n  display: block;\n  box-sizing: border-box;\n  border: 2px solid var(--button_outline_color);\n  border-radius: var(--button_radius);\n  padding: 0.75em 1.5em;\n  background: var(--button_color);\n  color: var(--button_outline_color);\n  transform: translateY(-0.2em);\n  transition: transform 0.1s ease;\n}\n\nbutton:hover .button_top {\n  /* Pull the button upwards when hovered */\n  transform: translateY(-0.33em);\n}\n\nbutton:active .button_top {\n  /* Push the button downwards when pressed */\n  transform: translateY(0);\n}"
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
    "id": "uiverse-ziyadouamna_hungry-penguin-18",
    "title": "Hungry Penguin",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "ZiyadOuamna",
      "profileUrl": "https://uiverse.io/ZiyadOuamna/hungry-penguin-18"
    },
    "license": "MIT",
    "description": "Hungry Penguin · button by ZiyadOuamna",
    "tags": [
      "button",
      "active",
      "like",
      "dark",
      "light",
      "shadow",
      "modern",
      "click"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<button class=\"button\">Button</button>\n\n<footer></footer>",
    "css": "/* From Uiverse.io by ZiyadOuamna  - Tags: button, active, like, dark, light, shadow, modern, click */\n.button {\n  cursor: pointer;\n  padding: 10px 20px;\n  border-radius: 15px;\n  background-color: gray;\n  font-weight: bolder;\n  font-size: 25px;\n  border: 2px solid black;\n  transition: all 0.5s;\n}\n.button:hover {\n  background-color: aqua;\n  box-shadow: 0px 0px 15px aqua;\n\n  transform: scale(0.9);\n}"
  },
  {
    "id": "uiverse-aarjaycreation_fluffy-owl-5",
    "title": "Fluffy Owl",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "aarjaycreation",
      "profileUrl": "https://uiverse.io/aarjaycreation/fluffy-owl-5"
    },
    "license": "MIT",
    "description": "Fluffy Owl · button by aarjaycreation",
    "tags": [
      "button",
      "social",
      "social media",
      "2d button",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"main__socials\">\n  <button class=\"Link__instagram\">\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n      viewBox=\"0,0,256,256\"\n      width=\"30px\"\n      height=\"30px\"\n      fill-rule=\"nonzero\"\n      class=\"instagram\"\n    >\n      <g\n        fill-rule=\"nonzero\"\n        stroke=\"none\"\n        stroke-width=\"1\"\n        stroke-linecap=\"butt\"\n        stroke-linejoin=\"miter\"\n        stroke-miterlimit=\"10\"\n        stroke-dasharray=\"\"\n        stroke-dashoffset=\"0\"\n        font-family=\"none\"\n        font-weight=\"none\"\n        font-size=\"none\"\n        text-anchor=\"none\"\n        style=\"mix-blend-mode: normal\"\n      >\n        <g transform=\"scale(8,8)\">\n          <path\n            d=\"M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z\"\n          ></path>\n        </g>\n      </g>\n    </svg>\n  </button>\n  <button class=\"Link__twitter\">\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      viewBox=\"0 0 48 48\"\n      width=\"30px\"\n      height=\"30px\"\n      class=\"twitter\"\n    >\n      <path\n        d=\"M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429\"\n      ></path>\n    </svg>\n  </button>\n  <button class=\"Link__github\">\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      viewBox=\"0 0 30 30\"\n      width=\"30px\"\n      height=\"30px\"\n      class=\"github\"\n    >\n      <path\n        d=\"M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z\"\n      ></path>\n    </svg>\n  </button>\n  <button class=\"Link__discord\">\n    <svg\n      height=\"30px\"\n      width=\"30px\"\n      viewBox=\"0 0 48 48\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      class=\"discord\"\n    >\n      <path\n        d=\"M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z\"\n      ></path>\n    </svg>\n  </button>\n</div>",
    "css": "/* From Uiverse.io by aarjaycreation  - Tags: social, button, social media, 2d button */\n.main__socials {\n  display: flex;\n  flex-direction: row;\n  gap: 0.5em;\n}\n\n.Link__instagram {\n  padding: 0.8em;\n  outline: none;\n  border: none;\n  background: white;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,\n    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n  transition: 0.2s ease-in-out;\n}\n\n.instagram {\n  fill: #cc39a4;\n}\n\n.Link__twitter {\n  padding: 0.8em;\n  outline: none;\n  border: none;\n  background: white;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,\n    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n  transition: 0.2s ease-in-out;\n}\n\n.twitter {\n  fill: #03a9f4;\n}\n\n.Link__github {\n  padding: 0.8em;\n  outline: none;\n  border: none;\n  background: white;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,\n    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n  transition: 0.2s ease-in-out;\n}\n\n.Link__discord {\n  padding: 0.8em;\n  outline: none;\n  border: none;\n  background: white;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,\n    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n  transition: 0.2s ease-in-out;\n}\n\n.discord {\n  fill: #8c9eff;\n}\n\n.Link__instagram:hover {\n  cursor: pointer;\n  scale: 1.1;\n  background-color: #cc39a4;\n}\n\n.Link__instagram:hover .instagram {\n  fill: white;\n}\n\n.Link__twitter:hover {\n  cursor: pointer;\n  scale: 1.1;\n  background-color: #03a9f4;\n}\n\n.Link__twitter:hover .twitter {\n  fill: white;\n}\n\n.Link__github:hover {\n  cursor: pointer;\n  scale: 1.1;\n  background-color: black;\n}\n\n.Link__github:hover .github {\n  fill: white;\n}\n\n.Link__discord:hover {\n  cursor: pointer;\n  scale: 1.1;\n  background-color: #8c9eff;\n}\n\n.Link__discord:hover .discord {\n  fill: white;\n}"
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
    "id": "uiverse-galahhad_modern-quail-75",
    "title": "Modern Quail",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "Galahhad",
      "profileUrl": "https://uiverse.io/Galahhad/modern-quail-75"
    },
    "license": "MIT",
    "description": "Modern Quail · toggle by Galahhad",
    "tags": [
      "toggle",
      "switch",
      "checkbox",
      "bubble",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<label class=\"switch\">\n    <input checked=\"\" type=\"checkbox\">\n    <div class=\"slider\">\n        <div class=\"circle\">\n            <svg class=\"cross\" xml:space=\"preserve\" style=\"enable-background:new 0 0 512 512\" viewBox=\"0 0 365.696 365.696\" y=\"0\" x=\"0\" height=\"6\" width=\"6\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n                <g>\n                    <path data-original=\"#000000\" fill=\"currentColor\" d=\"M243.188 182.86 356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0\"></path>\n                </g>\n            </svg>\n            <svg class=\"checkmark\" xml:space=\"preserve\" style=\"enable-background:new 0 0 512 512\" viewBox=\"0 0 24 24\" y=\"0\" x=\"0\" height=\"10\" width=\"10\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n                <g>\n                    <path class=\"\" data-original=\"#000000\" fill=\"currentColor\" d=\"M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z\"></path>\n                </g>\n            </svg>\n        </div>\n    </div>\n</label>",
    "css": "/* From Uiverse.io by Galahhad - Tags: switch, checkbox, bubble */\n.switch {\n  /* switch */\n  --switch-width: 46px;\n  --switch-height: 24px;\n  --switch-bg: rgb(131, 131, 131);\n  --switch-checked-bg: rgb(0, 218, 80);\n  --switch-offset: calc((var(--switch-height) - var(--circle-diameter)) / 2);\n  --switch-transition: all .2s cubic-bezier(0.27, 0.2, 0.25, 1.51);\n  /* circle */\n  --circle-diameter: 18px;\n  --circle-bg: #fff;\n  --circle-shadow: 1px 1px 2px rgba(146, 146, 146, 0.45);\n  --circle-checked-shadow: -1px 1px 2px rgba(163, 163, 163, 0.45);\n  --circle-transition: var(--switch-transition);\n  /* icon */\n  --icon-transition: all .2s cubic-bezier(0.27, 0.2, 0.25, 1.51);\n  --icon-cross-color: var(--switch-bg);\n  --icon-cross-size: 6px;\n  --icon-checkmark-color: var(--switch-checked-bg);\n  --icon-checkmark-size: 10px;\n  /* effect line */\n  --effect-width: calc(var(--circle-diameter) / 2);\n  --effect-height: calc(var(--effect-width) / 2 - 1px);\n  --effect-bg: var(--circle-bg);\n  --effect-border-radius: 1px;\n  --effect-transition: all .2s ease-in-out;\n}\n\n.switch input {\n  display: none;\n}\n\n.switch {\n  display: inline-block;\n}\n\n.switch svg {\n  -webkit-transition: var(--icon-transition);\n  -o-transition: var(--icon-transition);\n  transition: var(--icon-transition);\n  position: absolute;\n  height: auto;\n}\n\n.switch .checkmark {\n  width: var(--icon-checkmark-size);\n  color: var(--icon-checkmark-color);\n  -webkit-transform: scale(0);\n  -ms-transform: scale(0);\n  transform: scale(0);\n}\n\n.switch .cross {\n  width: var(--icon-cross-size);\n  color: var(--icon-cross-color);\n}\n\n.slider {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  width: var(--switch-width);\n  height: var(--switch-height);\n  background: var(--switch-bg);\n  border-radius: 999px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  position: relative;\n  -webkit-transition: var(--switch-transition);\n  -o-transition: var(--switch-transition);\n  transition: var(--switch-transition);\n  cursor: pointer;\n}\n\n.circle {\n  width: var(--circle-diameter);\n  height: var(--circle-diameter);\n  background: var(--circle-bg);\n  border-radius: inherit;\n  -webkit-box-shadow: var(--circle-shadow);\n  box-shadow: var(--circle-shadow);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-transition: var(--circle-transition);\n  -o-transition: var(--circle-transition);\n  transition: var(--circle-transition);\n  z-index: 1;\n  position: absolute;\n  left: var(--switch-offset);\n}\n\n.slider::before {\n  content: \"\";\n  position: absolute;\n  width: var(--effect-width);\n  height: var(--effect-height);\n  left: calc(var(--switch-offset) + (var(--effect-width) / 2));\n  background: var(--effect-bg);\n  border-radius: var(--effect-border-radius);\n  -webkit-transition: var(--effect-transition);\n  -o-transition: var(--effect-transition);\n  transition: var(--effect-transition);\n}\n\n/* actions */\n\n.switch input:checked+.slider {\n  background: var(--switch-checked-bg);\n}\n\n.switch input:checked+.slider .checkmark {\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  transform: scale(1);\n}\n\n.switch input:checked+.slider .cross {\n  -webkit-transform: scale(0);\n  -ms-transform: scale(0);\n  transform: scale(0);\n}\n\n.switch input:checked+.slider::before {\n  left: calc(100% - var(--effect-width) - (var(--effect-width) / 2) - var(--switch-offset));\n}\n\n.switch input:checked+.slider .circle {\n  left: calc(100% - var(--circle-diameter) - var(--switch-offset));\n  -webkit-box-shadow: var(--circle-checked-shadow);\n  box-shadow: var(--circle-checked-shadow);\n}"
  },
  {
    "id": "uiverse-sabin-koju_spicy-robin-42",
    "title": "Spicy Robin",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "sabin-koju",
      "profileUrl": "https://uiverse.io/sabin-koju/spicy-robin-42"
    },
    "license": "MIT",
    "description": "Spicy Robin · toggle by sabin-koju",
    "tags": [
      "toggle",
      "switch",
      "toggle switch",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 750,
    "accentColor": null,
    "html": "<div class=\"switch\">\n  <input role=\"switch\" type=\"checkbox\" class=\"switch-input\" id=\"switchId\">\n  <label class=\"switch-input-label\"></label>\n</div>",
    "css": "/* From Uiverse.io by sabin-koju - Tags: switch, toggle, toggle switch */\n.switch {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.switch .switch-label {\n  cursor: pointer;\n}\n\n.switch .switch-input {\n  appearance: none;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-align: center;\n  align-items: center;\n  box-shadow: inset 0 0 0 1px #c9c9c9;\n  background-color: #dadada;\n  width: 3rem;\n  min-width: 3rem;\n  padding: 0.125rem;\n  border-radius: 3rem;\n  cursor: pointer;\n  transition: background-color 0.75s ease, box-shadow 0.35s ease-in;\n}\n\n.switch .switch-input:before {\n  position: relative;\n  content: \"\";\n  display: inline-block;\n  border-radius: 1rem;\n  height: 1.5rem;\n  width: 1.5rem;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.32);\n  background-color: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0);\n  transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.175);\n}\n\n.switch .switch-input:active:not(:disabled):before {\n  width: 1.75rem;\n}\n\n.switch .switch-input:hover:not(:disabled) {\n  box-shadow: inset 0 0 0 1rem #c9c9c9;\n}\n\n.switch .switch-input:focus, .switch .switch-input:focus-within {\n  box-shadow: 0 0 0 0.125rem #4caf30;\n  outline: none;\n}\n\n.switch .switch-input:focus:before, .switch .switch-input:focus-within:before {\n  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.4);\n}\n\n.switch .switch-input:checked {\n  background-color: #5dca3e;\n  box-shadow: inset 0 0 0 1px #5dca3e;\n}\n\n.switch .switch-input:checked:before {\n  transform: translate3d(calc(100% - 0.5rem), 0, 0);\n}\n\n.switch .switch-input:checked:active:not(:disabled):before {\n  margin-left: -0.5rem;\n}\n\n.switch .switch-input:checked:hover:not(:disabled) {\n  box-shadow: inset 0 0 0 1rem #459f2c;\n}\n\n.switch .switch-input:checked:focus, .switch .switch-input:checked:focus-within {\n  box-shadow: 0 0 0 0.125rem #4caf30;\n}\n\n.switch .switch-input:disabled {\n  pointer-events: none;\n  cursor: not-allowed;\n  opacity: 0.5;\n  user-select: none;\n}\n\n.switch .switch-input:disabled:before {\n  background-color: #f8f8f8;\n}"
  },
  {
    "id": "uiverse-elijahgummer_lovely-hound-41",
    "title": "Lovely Hound",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "elijahgummer",
      "profileUrl": "https://uiverse.io/elijahgummer/lovely-hound-41"
    },
    "license": "MIT",
    "description": "Lovely Hound · toggle by elijahgummer",
    "tags": [
      "toggle",
      "simple",
      "animation",
      "blue",
      "switch",
      "transition",
      "click effect",
      "click animation"
    ],
    "previewType": "css",
    "durationMs": 400,
    "accentColor": null,
    "html": "<div class=\"checkbox\">\n  <input class=\"tgl\" id=\"toggle\" type=\"checkbox\" />\n  <label class=\"tgl-btn\" for=\"toggle\"></label>\n</div>",
    "css": "/* From Uiverse.io by elijahgummer  - Tags: simple, animation, blue, switch, transition, click effect, click animation */\n.checkbox {\n  --blue: #0d7eff;\n  --g08: #e1e5eb;\n  --g04: #848ea1;\n  text-align: center;\n}\n\n.checkbox .tgl {\n  display: none;\n}\n.checkbox .tgl,\n.checkbox .tgl:after,\n.checkbox .tgl:before,\n.checkbox .tgl *,\n.checkbox .tgl *:after,\n.checkbox .tgl *:before,\n.checkbox .tgl + .tgl-btn {\n  box-sizing: border-box;\n}\n.checkbox .tgl::selection,\n.checkbox .tgl:after::selection,\n.checkbox .tgl:before::selection,\n.checkbox .tgl *::selection,\n.checkbox .tgl *:after::selection,\n.checkbox .tgl *:before::selection,\n.checkbox .tgl + .tgl-btn::selection {\n  background: none;\n}\n.checkbox .tgl + .tgl-btn {\n  outline: 0;\n  display: block;\n  width: 57px;\n  height: 27px;\n  position: relative;\n  cursor: pointer;\n  user-select: none;\n  font-size: 12px;\n  font-weight: 400;\n  color: #fff;\n}\n.checkbox .tgl + .tgl-btn:after,\n.checkbox .tgl + .tgl-btn:before {\n  position: relative;\n  display: block;\n  content: \"\";\n  width: 44%;\n  height: 100%;\n}\n.checkbox .tgl + .tgl-btn:after {\n  left: 0;\n}\n.checkbox .tgl + .tgl-btn:before {\n  display: inline;\n  position: absolute;\n  top: 7px;\n}\n.checkbox .tgl:checked + .tgl-btn:after {\n  left: 56.5%;\n}\n\n.checkbox .tgl + .tgl-btn {\n  background: var(--g08);\n  border-radius: 20rem;\n  padding: 2px;\n  transition: all 0.4s ease;\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);\n}\n.checkbox .tgl + .tgl-btn:after {\n  border-radius: 2em;\n  background: #fff;\n  transition: left 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),\n    padding 0.3s ease, margin 0.3s ease;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);\n}\n.checkbox .tgl + .tgl-btn:before {\n  content: \"No\";\n  left: 28px;\n  color: var(--g04);\n  transition: left 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.checkbox .tgl + .tgl-btn:active {\n  box-shadow: inset 0 0 0 30px rgba(0, 0, 0, 0.1);\n}\n.checkbox .tgl + .tgl-btn:active:after {\n  padding-right: 0.4em;\n}\n.checkbox .tgl:checked + .tgl-btn {\n  background: var(--blue);\n}\n.checkbox .tgl:checked + .tgl-btn:active {\n  box-shadow: inset 0 0 0 30px rgba(0, 0, 0, 0.1);\n}\n.checkbox .tgl:checked + .tgl-btn:active:after {\n  margin-left: -0.4em;\n}\n.checkbox .tgl:checked + .tgl-btn:before {\n  content: \"Yes\";\n  left: 4px;\n  color: #fff;\n}"
  },
  {
    "id": "uiverse-jaydipprajapati1910_neat-newt-18",
    "title": "Neat Newt",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "JaydipPrajapati1910",
      "profileUrl": "https://uiverse.io/JaydipPrajapati1910/neat-newt-18"
    },
    "license": "MIT",
    "description": "Neat Newt · toggle by JaydipPrajapati1910",
    "tags": [
      "toggle",
      "switch",
      "toggle switch",
      "am/pm",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"btn-container\">\n\t\n\t\t\t<label class=\"switch btn-color-mode-switch\">\n\t\t        <input value=\"1\" id=\"color_mode\" name=\"color_mode\" type=\"checkbox\">\n\t\t        <label class=\"btn-color-mode-switch-inner\" data-off=\"AM\" data-on=\"PM\" for=\"color_mode\"></label>\n\t\t    </label>\n        \n\t</div>",
    "css": "/* From Uiverse.io by JaydipPrajapati1910 - Tags: switch, toggle switch, AM/PM */\n.btn-container {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n}\n\n.btn-color-mode-switch {\n  display: inline-block;\n  margin: 0px;\n  position: relative;\n}\n\n.btn-color-mode-switch > label.btn-color-mode-switch-inner {\n  margin: 0px;\n  width: 140px;\n  height: 40px;\n  background-color: #fcce8a;\n  border-radius: 26px;\n  overflow: hidden;\n  position: relative;\n  transition: all 0.3s ease;\n    /*box-shadow: 0px 0px 8px 0px rgba(17, 17, 17, 0.34) inset;*/\n  display: block;\n}\n\n.btn-color-mode-switch > label.btn-color-mode-switch-inner:before {\n  content: attr(data-on);\n  position: absolute;\n  font-size: 20px;\n  font-weight: 600;\n  top: 7px;\n  right: 20px;\n  color: #222;\n}\n\n.btn-color-mode-switch > label.btn-color-mode-switch-inner:after {\n  content: attr(data-off);\n  width: 70px;\n  height: 25px;\n  background: #fff;\n  border-radius: 26px;\n  position: absolute;\n  font-size: 20px;\n  display: flex;\n  justify-content: center;\n  left: 2px;\n  top: 2px;\n  text-align: center;\n  transition: all 0.3s ease;\n  box-shadow: 0px 0px 6px -2px #111;\n  padding: 5px 0px;\n  color: #222;\n  font-weight: 600;\n}\n\n.btn-color-mode-switch input[type=\"checkbox\"] {\n  cursor: pointer;\n  width: 50px;\n  height: 25px;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  z-index: 1;\n  margin: 0px;\n}\n\n.btn-color-mode-switch input[type=\"checkbox\"]:checked + label.btn-color-mode-switch-inner {\n  background-color: #fcce8a;\n}\n\n.btn-color-mode-switch input[type=\"checkbox\"]:checked + label.btn-color-mode-switch-inner:after {\n  content: attr(data-on);\n  left: 68px;\n}\n\n.btn-color-mode-switch input[type=\"checkbox\"]:checked + label.btn-color-mode-switch-inner:before {\n  content: attr(data-off);\n  right: auto;\n  left: 20px;\n}"
  },
  {
    "id": "uiverse-radwakhalil22_afraid-donkey-40",
    "title": "Afraid Donkey",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "radwakhalil22",
      "profileUrl": "https://uiverse.io/radwakhalil22/afraid-donkey-40"
    },
    "license": "MIT",
    "description": "Afraid Donkey · toggle by radwakhalil22",
    "tags": [
      "toggle",
      "gradient",
      "switch",
      "checkbox",
      "glow",
      "animated",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 400,
    "accentColor": null,
    "html": "<label class=\"switch\">\n  <input class=\"checkbox\" type=\"checkbox\">\n  <span class=\"slider\"></span>\n</label>",
    "css": "/* From Uiverse.io by radwakhalil22 - Tags: gradient, switch, checkbox, glow, animated */\n/* The switch - the box around the slider */\n.switch {\n  font-size: 17px;\n  position: relative;\n  display: inline-block;\n  width: 3.5em;\n  height: 2em;\n}\n\n/* Hide default HTML checkbox */\n.switch .checkbox {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s;\n  border-radius: 30px;\n  box-shadow: 2px 2px 2px 2px #222831, -2px -2px 2px 2px #393E46, -2px 2px 2px 2px #00ADB5, 2px -2px 2px 2px #EEEEEE;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 1.4em;\n  width: 1.4em;\n  border-radius: 20px;\n  left: 0.3em;\n  bottom: 0.3em;\n  background-color: white;\n  transition: .4s;\n}\n\n.checkbox:checked + .slider:before {\n  box-shadow: 2px 2px 2px 2px #222831, -2px -2px 2px 2px #393E46, -2px 2px 2px 2px #00ADB5, 2px -2px 2px 2px #EEEEEE;\n}\n\n.checkbox:checked + .slider {\n  background-color: #afa2a2;\n  box-shadow: 2px 2px 2px 2px #222831, -2px -2px 2px 2px #393E46, -2px 2px 2px 2px #00ADB5, 2px -2px 2px 2px #EEEEEE;\n}\n\n.checkbox:checked + .slider:before {\n  transform: translateX(1.5em);\n}"
  },
  {
    "id": "uiverse-bodyhc_wet-squid-26",
    "title": "Wet Squid",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "Bodyhc",
      "profileUrl": "https://uiverse.io/Bodyhc/wet-squid-26"
    },
    "license": "MIT",
    "description": "Wet Squid · toggle by Bodyhc",
    "tags": [
      "toggle",
      "switch",
      "click",
      "buttons",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"flipswitch\">\n    <input checked=\"\" id=\"fs\" class=\"flipswitch-cb\" name=\"flipswitch\" type=\"checkbox\">\n    <label for=\"fs\" class=\"flipswitch-label\">\n        <div class=\"flipswitch-inner\"></div>\n        <div class=\"flipswitch-switch\"></div>\n    </label>\n</div>",
    "css": "/* From Uiverse.io by Bodyhc - Tags: switch, click, buttons */\n.flipswitch {\n  position: relative;\n  width: 100px;\n}\n\n.flipswitch input[type=checkbox] {\n  display: none;\n}\n\n.flipswitch-label {\n  display: block;\n  overflow: hidden;\n  cursor: pointer;\n  border: 1px solid #999999;\n  border-radius: 50px;\n}\n\n.flipswitch-inner {\n  width: 200%;\n  margin-left: -100%;\n  transition: margin 0.3s ease-in 0s;\n}\n\n.flipswitch-inner:before, .flipswitch-inner:after {\n  float: left;\n  width: 50%;\n  height: 30px;\n  padding: 0;\n  line-height: 30px;\n  font-size: 20px;\n  color: white;\n  font-family: Trebuchet, Arial, sans-serif;\n  font-weight: bold;\n  box-sizing: border-box;\n}\n\n.flipswitch-inner:before {\n  content: \"ON\";\n  padding-left: 18px;\n  background-color: #437A99;\n  color: #FFFFFF;\n}\n\n.flipswitch-inner:after {\n  content: \"OFF\";\n  padding-right: 18px;\n  background-color: #FFFFFF;\n  color: #437A99;\n  text-align: right;\n}\n\n.flipswitch-switch {\n  width: 35px;\n  margin: -2.5px;\n  background: #FFFFFF;\n  border: 1px solid #999999;\n  border-radius: 50px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 67px;\n  transition: all 0.3s ease-in 0s;\n}\n\n.flipswitch-cb:checked + .flipswitch-label .flipswitch-inner {\n  margin-left: 0;\n}\n\n.flipswitch-cb:checked + .flipswitch-label .flipswitch-switch {\n  right: 0;\n}"
  },
  {
    "id": "uiverse-muaz-aldalil_tasty-fish-22",
    "title": "Tasty Fish",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "Muaz-Aldalil",
      "profileUrl": "https://uiverse.io/Muaz-Aldalil/tasty-fish-22"
    },
    "license": "MIT",
    "description": "Tasty Fish · toggle by Muaz-Aldalil",
    "tags": [
      "toggle",
      "switch",
      "radio-buttons",
      "toggle switch",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<label>\n  <input type=\"checkbox\" class=\"toggle-checkbox\">\n  <div class=\"toggle-switch\"></div>\n</label>",
    "css": "/* From Uiverse.io by Muaz-Aldalil - Tags: switch, radio-buttons, toggle switch */\n.toggle-checkbox {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  display: none;\n}\n\n.toggle-switch {\n  background-color: gray;\n  width: 78px;\n  height: 32px;\n  border-radius: 16px;\n  position: relative;\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n.toggle-switch::before {\n  content: \"\";\n  font-weight: 900;\n  background-color: white;\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  border-radius: 50%;\n  top: 4px;\n  left: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #ddd;\n  transition: 0.3s;\n}\n\n.toggle-checkbox:checked+.toggle-switch {\n  background-color: #0075ff;\n}\n\n.toggle-checkbox:checked+.toggle-switch::before {\n  content: \"\";\n  left: 50px;\n  color: #0075ff;\n}"
  },
  {
    "id": "uiverse-gianluks90_ordinary-goat-76",
    "title": "Ordinary Goat",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "Gianluks90",
      "profileUrl": "https://uiverse.io/Gianluks90/ordinary-goat-76"
    },
    "license": "MIT",
    "description": "Ordinary Goat · toggle by Gianluks90",
    "tags": [
      "toggle",
      "switch",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 400,
    "accentColor": null,
    "html": "<label class=\"switch\">\n  <input type=\"checkbox\" class=\"slider-input\">\n  <span class=\"slider\"></span>\n</label>",
    "css": "/* From Uiverse.io by Gianluks90 - Tags: switch */\n.switch {\n  font-size: 17px;\n  position: relative;\n  display: inline-block;\n  width: 3.5em;\n  height: 2em;\n  margin-right: 12px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s;\n  box-shadow: inset 2px 2px 12px -5px gray;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 2em;\n  width: 1.75em;\n  left: 0;\n  bottom: 0;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.slider-input:checked + .slider {\n  background-color: #90EE90;\n  box-shadow: inset 2px 2px 9px -5px gray;\n}\n\n.slider-input:focus + .slider {\n  box-shadow: 0 0 1px #90EE90;\n}\n\n.slider-input:checked + .slider:before {\n  -webkit-transform: translateX(1.75em);\n  -ms-transform: translateX(1.75em);\n  transform: translateX(1.75em);\n}"
  },
  {
    "id": "uiverse-g4b413l_giant-panther-83",
    "title": "Giant Panther",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "G4b413l",
      "profileUrl": "https://uiverse.io/G4b413l/giant-panther-83"
    },
    "license": "MIT",
    "description": "Giant Panther · toggle by G4b413l",
    "tags": [
      "toggle",
      "switch",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<label class=\"switch\">\n  <input type=\"checkbox\">\n  <span class=\"slider\"></span>\n</label>",
    "css": "/* From Uiverse.io by G4b413l - Tags: switch */\n.switch input {\n display: none;\n}\n\n.switch {\n width: 60px;\n height: 30px;\n position: relative;\n}\n\n.slider {\n position: absolute;\n top: 0;\n bottom: 0;\n left: 0;\n right: 0;\n border-radius: 30px;\n box-shadow: 0 0 0 2px #777, 0 0 4px #777;\n cursor: pointer;\n border: 4px solid transparent;\n overflow: hidden;\n transition: 0.2s;\n}\n\n.slider:before {\n position: absolute;\n content: \"\";\n width: 100%;\n height: 100%;\n background-color: #777;\n border-radius: 30px;\n transform: translateX(-30px);\n /*translateX(-(w-h))*/\n transition: 0.2s;\n}\n\ninput:checked + .slider:before {\n transform: translateX(30px);\n /*translateX(w-h)*/\n background-color: limeGreen;\n}\n\ninput:checked + .slider {\n box-shadow: 0 0 0 2px limeGreen, 0 0 8px limeGreen;\n}\n\n.switch200 .slider:before {\n width: 200%;\n transform: translateX(-82px);\n /*translateX(-(w-h))*/\n}\n\n.switch200 input:checked + .slider:before {\n background-color: red;\n}\n\n.switch200 input:checked + .slider {\n box-shadow: 0 0 0 2px red, 0 0 8px red;\n}"
  },
  {
    "id": "uiverse-mobinkakei_great-skunk-8",
    "title": "Great Skunk",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "mobinkakei",
      "profileUrl": "https://uiverse.io/mobinkakei/great-skunk-8"
    },
    "license": "MIT",
    "description": "Great Skunk · toggle by mobinkakei",
    "tags": [
      "toggle",
      "neumorphism",
      "switch",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 400,
    "accentColor": null,
    "html": "<label class=\"label\">\n    <div class=\"toggle\">\n        <input class=\"toggle-state\" type=\"checkbox\" name=\"check\" value=\"check\">\n        <div class=\"indicator\"></div>\n    </div>\n</label>",
    "css": "/* From Uiverse.io by mobinkakei - Tags: neumorphism, switch */\n.label {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  color: #394a56;\n}\n\n.label-text {\n  margin-left: 16px;\n}\n\n.toggle {\n  isolation: isolate;\n  position: relative;\n  height: 30px;\n  width: 60px;\n  border-radius: 15px;\n  overflow: hidden;\n  box-shadow: -8px -4px 8px 0px #ffffff,\n    8px 4px 12px 0px #d1d9e6,\n    4px 4px 4px 0px #d1d9e6 inset,\n    -4px -4px 4px 0px #ffffff inset;\n}\n\n.toggle-state {\n  display: none;\n}\n\n.indicator {\n  height: 100%;\n  width: 200%;\n  background: #ecf0f3;\n  border-radius: 15px;\n  transform: translate3d(-75%, 0, 0);\n  transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);\n  box-shadow: -8px -4px 8px 0px #ffffff,\n    8px 4px 12px 0px #d1d9e6;\n}\n\n.toggle-state:checked ~ .indicator {\n  transform: translate3d(25%, 0, 0);\n}"
  },
  {
    "id": "uiverse-abanoubmagdy1_fluffy-octopus-90",
    "title": "Fluffy Octopus",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "AbanoubMagdy1",
      "profileUrl": "https://uiverse.io/AbanoubMagdy1/fluffy-octopus-90"
    },
    "license": "MIT",
    "description": "Fluffy Octopus · toggle by AbanoubMagdy1",
    "tags": [
      "toggle",
      "switch",
      "flip",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 400,
    "accentColor": null,
    "html": "<label class=\"switch\">\n  <input type=\"checkbox\">\n  <div class=\"slider\"></div>\n  <div class=\"slider-card\">\n    <div class=\"slider-card-face slider-card-front\"></div>\n    <div class=\"slider-card-face slider-card-back\"></div>\n  </div>\n</label>",
    "css": "/* From Uiverse.io by AbanoubMagdy1 - Tags: switch, flip */\n.switch {\n  --circle-dim: 1.4em;\n  font-size: 17px;\n  position: relative;\n  display: inline-block;\n  width: 3.5em;\n  height: 2em;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #f5aeae;\n  transition: .4s;\n  border-radius: 30px;\n}\n\n.slider-card {\n  position: absolute;\n  content: \"\";\n  height: var(--circle-dim);\n  width: var(--circle-dim);\n  border-radius: 20px;\n  left: 0.3em;\n  bottom: 0.3em;\n  transition: .4s;\n  pointer-events: none;\n}\n\n.slider-card-face {\n  position: absolute;\n  inset: 0;\n  backface-visibility: hidden;\n  perspective: 1000px;\n  border-radius: 50%;\n  transition: .4s transform;\n}\n\n.slider-card-front {\n  background-color: #DC3535;\n}\n\n.slider-card-back {\n  background-color: #379237;\n  transform: rotateY(180deg);\n}\n\ninput:checked ~ .slider-card .slider-card-back {\n  transform: rotateY(0);\n}\n\ninput:checked ~ .slider-card .slider-card-front {\n  transform: rotateY(-180deg);\n}\n\ninput:checked ~ .slider-card {\n  transform: translateX(1.5em);\n}\n\ninput:checked ~ .slider {\n  background-color: #9ed99c;\n}"
  },
  {
    "id": "uiverse-zebra76966_black-mayfly-32",
    "title": "Black Mayfly",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "zebra76966",
      "profileUrl": "https://uiverse.io/zebra76966/black-mayfly-32"
    },
    "license": "MIT",
    "description": "Black Mayfly · toggle by zebra76966",
    "tags": [
      "toggle",
      "switch",
      "moon",
      "sun",
      "light&dark",
      "emoji",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 400,
    "accentColor": null,
    "html": "<label class=\"switch\">\n  <input type=\"checkbox\">\n  <span class=\"slider\"></span>\n</label>",
    "css": "/* From Uiverse.io by zebra76966 - Tags: switch, moon, sun, toggle, light&dark, emoji */\n.switch {\n  position: absolute;\n  top: 50%;\n  width: 30px;\n  height: 60px;\n  padding: 2px;\n  left: 50%;\n  transform: translate(-50%,-50%);\n}\n\n.switch input {\n  opacity: 0;\n  height: 0;\n  width: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 20px;\n  border: 1px solid rgba(0,0,0,0.2);\n  border-style: outset;\n  background-color: white;\n  transition: 0.4s;\n}\n\n.slider::before {\n  content: \"🌞\";\n  font-size: 22px;\n  line-height: 15px;\n  border-radius: 100%;\n  position: absolute;\n  left: -0.8px;\n  top: 8px;\n  background-color: transparent;\n  transition: 0.4s;\n}\n\n.switch > input:checked + .slider {\n  background-color: #000429;\n}\n\n.switch > input:checked + .slider:before {\n  content: \"🌑\";\n  font-size: 22px;\n  line-height: 25px;\n  background-color: transparent;\n  transform: translateY(24px);\n}"
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
    "id": "uiverse-andrew-demchenk0_tiny-fish-66",
    "title": "Tiny Fish",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "andrew-demchenk0",
      "profileUrl": "https://uiverse.io/andrew-demchenk0/tiny-fish-66"
    },
    "license": "MIT",
    "description": "Tiny Fish · toggle by andrew-demchenk0",
    "tags": [
      "toggle",
      "blue",
      "switch",
      "animated",
      "toggle switch",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<label class=\"switch\">\n  <input class=\"toggle\" type=\"checkbox\">\n  <span class=\"slider\"></span>\n  <span class=\"card-side\"></span>\n</label>",
    "css": "/* From Uiverse.io by andrew-demchenk0 - Tags: blue, switch, toggle, animated, toggle switch */\n.switch {\n  --input-focus: #2d8cf0;\n  --font-color: #323232;\n  --font-color-sub: #666;\n  --bg-color: #fff;\n  --bg-color-alt: #666;\n  --main-color: #323232;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n  width: 50px;\n  height: 20px;\n}\n\n.toggle {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  box-sizing: border-box;\n  border-radius: 5px;\n  border: 2px solid var(--main-color);\n  box-shadow: 4px 4px var(--main-color);\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--bg-colorcolor);\n  transition: 0.3s;\n}\n\n.slider:before {\n  box-sizing: border-box;\n  position: absolute;\n  content: \"\";\n  height: 20px;\n  width: 20px;\n  border: 2px solid var(--main-color);\n  border-radius: 5px;\n  left: -2px;\n  bottom: 2px;\n  background-color: var(--bg-color);\n  box-shadow: 0 3px 0 var(--main-color);\n  transition: 0.3s;\n}\n\n.toggle:checked + .slider {\n  background-color: var(--input-focus);\n}\n\n.toggle:checked + .slider:before {\n  transform: translateX(30px);\n}"
  },
  {
    "id": "uiverse-praashoo7_tricky-turkey-18",
    "title": "Tricky Turkey",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "Praashoo7",
      "profileUrl": "https://uiverse.io/Praashoo7/tricky-turkey-18"
    },
    "license": "MIT",
    "description": "Tricky Turkey · toggle by Praashoo7",
    "tags": [
      "toggle",
      "switch",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 400,
    "accentColor": null,
    "html": "<label class=\"switch\">\n  <input type=\"checkbox\" class=\"chk1\">\n  <span class=\"slider\"></span>\n</label>",
    "css": "/* From Uiverse.io by Praashoo7 - Tags: switch */\n/* The switch - the box around the slider */\n.switch {\n  font-size: 17px;\n  position: relative;\n  display: inline-block;\n  width: 4em;\n  height: 2em;\n}\n\n/* Hide default HTML checkbox */\n.switch .chk1 {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s;\n  border-radius: 5px;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 1.4em;\n  width: 1.4em;\n  border-radius: 2.5px;\n  left: 0.3em;\n  bottom: 0.3em;\n  background-color: white;\n  transition: 0.4s;\n  box-shadow: 0 6px 7px rgba(0,0,0,0.3);\n}\n\n.slider:after {\n  position: absolute;\n  content: \"\";\n  height: 1.4em;\n  width: 1.4em;\n  border-radius: 2.5px;\n  left: 2.3em;\n  bottom: 0.3em;\n  background-color: #ccc;\n  transition: 0.4s;\n  box-shadow: 0 0px 0px rgba(0,0,0,0.3);\n}\n\n.chk1:checked + .slider:before {\n  background-color: #ccc;\n  box-shadow: 0 0px 0px rgba(0,0,0,0.3);\n}\n\n.chk1:checked + .slider:after {\n  background-color: rgb(0, 182, 45);\n  box-shadow: 0 6px 7px rgba(0,0,0,0.3);\n}"
  },
  {
    "id": "uiverse-jay-9527_weak-dingo-78",
    "title": "Weak Dingo",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "Jay-9527",
      "profileUrl": "https://uiverse.io/Jay-9527/weak-dingo-78"
    },
    "license": "MIT",
    "description": "Weak Dingo · toggle by Jay-9527",
    "tags": [
      "toggle",
      "switch",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 400,
    "accentColor": null,
    "html": "<label class=\"switch\">\n  <input type=\"checkbox\">\n  <span class=\"slider\"></span>\n</label>",
    "css": "/* From Uiverse.io by Jay-9527 - Tags: switch */\n/* The switch - the box around the slider */\n.switch {\n font-size: 17px;\n position: relative;\n display: inline-block;\n width: 3.5em;\n height: 2em;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n opacity: 0;\n width: 0;\n height: 0;\n}\n\n/* The slider */\n.slider {\n position: absolute;\n cursor: pointer;\n top: 0;\n left: 0;\n right: 0;\n bottom: 0;\n background-color: #ccc;\n transition: .4s;\n border-radius: 30px;\n}\n\n.slider:before {\n position: absolute;\n content: \"\";\n height: 1.4em;\n width: 1.4em;\n border-radius: 20px;\n left: 0.3em;\n bottom: 0.3em;\n background-color: white;\n transition: .4s;\n}\n\ninput:checked + .slider {\n background-color: rgb(0,221,80);\n}\n\ninput:focus + .slider {\n box-shadow: 0 0 1px rgb(0,221,80);\n}\n\ninput:checked + .slider:before {\n transform: translateX(1.5em);\n}"
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
    "id": "uiverse-shoh2008_light-shrimp-88",
    "title": "Light Shrimp",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "Shoh2008",
      "profileUrl": "https://uiverse.io/Shoh2008/light-shrimp-88"
    },
    "license": "MIT",
    "description": "Light Shrimp · toggle by Shoh2008",
    "tags": [
      "toggle",
      "switch",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"checkbox-wrapper-9\">\n  <input type=\"checkbox\" id=\"cb4-9\" class=\"tgl tgl-flat\">\n  <label for=\"cb4-9\" class=\"tgl-btn\"></label>\n</div>",
    "css": "/* From Uiverse.io by Shoh2008 - Tags: switch */\n.checkbox-wrapper-9 .tgl {\n  display: none;\n}\n\n.checkbox-wrapper-9 .tgl,\n  .checkbox-wrapper-9 .tgl:after,\n  .checkbox-wrapper-9 .tgl:before,\n  .checkbox-wrapper-9 .tgl *,\n  .checkbox-wrapper-9 .tgl *:after,\n  .checkbox-wrapper-9 .tgl *:before,\n  .checkbox-wrapper-9 .tgl + .tgl-btn {\n  box-sizing: border-box;\n}\n\n.checkbox-wrapper-9 .tgl::-moz-selection,\n  .checkbox-wrapper-9 .tgl:after::-moz-selection,\n  .checkbox-wrapper-9 .tgl:before::-moz-selection,\n  .checkbox-wrapper-9 .tgl *::-moz-selection,\n  .checkbox-wrapper-9 .tgl *:after::-moz-selection,\n  .checkbox-wrapper-9 .tgl *:before::-moz-selection,\n  .checkbox-wrapper-9 .tgl + .tgl-btn::-moz-selection,\n  .checkbox-wrapper-9 .tgl::selection,\n  .checkbox-wrapper-9 .tgl:after::selection,\n  .checkbox-wrapper-9 .tgl:before::selection,\n  .checkbox-wrapper-9 .tgl *::selection,\n  .checkbox-wrapper-9 .tgl *:after::selection,\n  .checkbox-wrapper-9 .tgl *:before::selection,\n  .checkbox-wrapper-9 .tgl + .tgl-btn::selection {\n  background: none;\n}\n\n.checkbox-wrapper-9 .tgl + .tgl-btn {\n  outline: 0;\n  display: block;\n  width: 4em;\n  height: 2em;\n  position: relative;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.checkbox-wrapper-9 .tgl + .tgl-btn:after,\n  .checkbox-wrapper-9 .tgl + .tgl-btn:before {\n  position: relative;\n  display: block;\n  content: \"\";\n  width: 50%;\n  height: 100%;\n}\n\n.checkbox-wrapper-9 .tgl + .tgl-btn:after {\n  left: 0;\n}\n\n.checkbox-wrapper-9 .tgl + .tgl-btn:before {\n  display: none;\n}\n\n.checkbox-wrapper-9 .tgl:checked + .tgl-btn:after {\n  left: 50%;\n}\n\n.checkbox-wrapper-9 .tgl-flat + .tgl-btn {\n  padding: 2px;\n  transition: all 0.2s ease;\n  background: #fff;\n  border: 4px solid #f2f2f2;\n  border-radius: 2em;\n}\n\n.checkbox-wrapper-9 .tgl-flat + .tgl-btn:after {\n  transition: all 0.2s ease;\n  background: #f2f2f2;\n  content: \"\";\n  border-radius: 1em;\n}\n\n.checkbox-wrapper-9 .tgl-flat:checked + .tgl-btn {\n  border: 4px solid #7FC6A6;\n}\n\n.checkbox-wrapper-9 .tgl-flat:checked + .tgl-btn:after {\n  left: 50%;\n  background: #7FC6A6;\n}"
  },
  {
    "id": "uiverse-shoh2008_gentle-firefox-59",
    "title": "Gentle Firefox",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "Shoh2008",
      "profileUrl": "https://uiverse.io/Shoh2008/gentle-firefox-59"
    },
    "license": "MIT",
    "description": "Gentle Firefox · toggle by Shoh2008",
    "tags": [
      "toggle",
      "switch",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"checkbox-wrapper-11\">\n  <input value=\"2\" name=\"r\" type=\"checkbox\" id=\"02-11\">\n  <label for=\"02-11\">To-do</label>\n</div>",
    "css": "/* From Uiverse.io by Shoh2008 - Tags: switch */\n.checkbox-wrapper-11 {\n  --text: #414856;\n  --check: #4F29F0;\n  --disabled: #C3C8DE;\n  --border-radius: 10px;\n  border-radius: var(--border-radius);\n  position: relative;\n  padding: 5px;\n  display: grid;\n  grid-template-columns: 30px auto;\n  align-items: center;\n}\n\n.checkbox-wrapper-11 label {\n  color: var(--text);\n  position: relative;\n  cursor: pointer;\n  display: grid;\n  align-items: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  transition: color 0.3s ease;\n}\n\n.checkbox-wrapper-11 label::before,\n  .checkbox-wrapper-11 label::after {\n  content: \"\";\n  position: absolute;\n}\n\n.checkbox-wrapper-11 label::before {\n  height: 2px;\n  width: 8px;\n  left: -27px;\n  background: var(--check);\n  border-radius: 2px;\n  transition: background 0.3s ease;\n}\n\n.checkbox-wrapper-11 label:after {\n  height: 4px;\n  width: 4px;\n  top: 8px;\n  left: -25px;\n  border-radius: 50%;\n}\n\n.checkbox-wrapper-11 input[type=checkbox] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  position: relative;\n  height: 15px;\n  width: 15px;\n  outline: none;\n  border: 0;\n  margin: 0 15px 0 0;\n  cursor: pointer;\n  background: var(--background);\n  display: grid;\n  align-items: center;\n}\n\n.checkbox-wrapper-11 input[type=checkbox]::before, .checkbox-wrapper-11 input[type=checkbox]::after {\n  content: \"\";\n  position: absolute;\n  height: 2px;\n  top: auto;\n  background: var(--check);\n  border-radius: 2px;\n}\n\n.checkbox-wrapper-11 input[type=checkbox]::before {\n  width: 0px;\n  right: 60%;\n  transform-origin: right bottom;\n}\n\n.checkbox-wrapper-11 input[type=checkbox]::after {\n  width: 0px;\n  left: 40%;\n  transform-origin: left bottom;\n}\n\n.checkbox-wrapper-11 input[type=checkbox]:checked::before {\n  -webkit-animation: check-01-11 0.4s ease forwards;\n  animation: check-01-11 0.4s ease forwards;\n}\n\n.checkbox-wrapper-11 input[type=checkbox]:checked::after {\n  -webkit-animation: check-02-11 0.4s ease forwards;\n  animation: check-02-11 0.4s ease forwards;\n}\n\n.checkbox-wrapper-11 input[type=checkbox]:checked + label {\n  color: var(--disabled);\n  -webkit-animation: move-11 0.3s ease 0.1s forwards;\n  animation: move-11 0.3s ease 0.1s forwards;\n}\n\n.checkbox-wrapper-11 input[type=checkbox]:checked + label::before {\n  background: var(--disabled);\n  -webkit-animation: slice-11 0.4s ease forwards;\n  animation: slice-11 0.4s ease forwards;\n}\n\n.checkbox-wrapper-11 input[type=checkbox]:checked + label::after {\n  -webkit-animation: firework-11 0.5s ease forwards 0.1s;\n  animation: firework-11 0.5s ease forwards 0.1s;\n}\n\n@-webkit-keyframes move-11 {\n  50% {\n    padding-left: 8px;\n    padding-right: 0px;\n  }\n\n  100% {\n    padding-right: 4px;\n  }\n}\n\n@keyframes move-11 {\n  50% {\n    padding-left: 8px;\n    padding-right: 0px;\n  }\n\n  100% {\n    padding-right: 4px;\n  }\n}\n\n@-webkit-keyframes slice-11 {\n  60% {\n    width: 100%;\n    left: 4px;\n  }\n\n  100% {\n    width: 100%;\n    left: -2px;\n    padding-left: 0;\n  }\n}\n\n@keyframes slice-11 {\n  60% {\n    width: 100%;\n    left: 4px;\n  }\n\n  100% {\n    width: 100%;\n    left: -2px;\n    padding-left: 0;\n  }\n}\n\n@-webkit-keyframes check-01-11 {\n  0% {\n    width: 4px;\n    top: auto;\n    transform: rotate(0);\n  }\n\n  50% {\n    width: 0px;\n    top: auto;\n    transform: rotate(0);\n  }\n\n  51% {\n    width: 0px;\n    top: 8px;\n    transform: rotate(45deg);\n  }\n\n  100% {\n    width: 5px;\n    top: 8px;\n    transform: rotate(45deg);\n  }\n}\n\n@keyframes check-01-11 {\n  0% {\n    width: 4px;\n    top: auto;\n    transform: rotate(0);\n  }\n\n  50% {\n    width: 0px;\n    top: auto;\n    transform: rotate(0);\n  }\n\n  51% {\n    width: 0px;\n    top: 8px;\n    transform: rotate(45deg);\n  }\n\n  100% {\n    width: 5px;\n    top: 8px;\n    transform: rotate(45deg);\n  }\n}\n\n@-webkit-keyframes check-02-11 {\n  0% {\n    width: 4px;\n    top: auto;\n    transform: rotate(0);\n  }\n\n  50% {\n    width: 0px;\n    top: auto;\n    transform: rotate(0);\n  }\n\n  51% {\n    width: 0px;\n    top: 8px;\n    transform: rotate(-45deg);\n  }\n\n  100% {\n    width: 10px;\n    top: 8px;\n    transform: rotate(-45deg);\n  }\n}\n\n@keyframes check-02-11 {\n  0% {\n    width: 4px;\n    top: auto;\n    transform: rotate(0);\n  }\n\n  50% {\n    width: 0px;\n    top: auto;\n    transform: rotate(0);\n  }\n\n  51% {\n    width: 0px;\n    top: 8px;\n    transform: rotate(-45deg);\n  }\n\n  100% {\n    width: 10px;\n    top: 8px;\n    transform: rotate(-45deg);\n  }\n}\n\n@-webkit-keyframes firework-11 {\n  0% {\n    opacity: 1;\n    box-shadow: 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0;\n  }\n\n  30% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n    box-shadow: 0 -15px 0 0px #4F29F0, 14px -8px 0 0px #4F29F0, 14px 8px 0 0px #4F29F0, 0 15px 0 0px #4F29F0, -14px 8px 0 0px #4F29F0, -14px -8px 0 0px #4F29F0;\n  }\n}\n\n@keyframes firework-11 {\n  0% {\n    opacity: 1;\n    box-shadow: 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0;\n  }\n\n  30% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n    box-shadow: 0 -15px 0 0px #4F29F0, 14px -8px 0 0px #4F29F0, 14px 8px 0 0px #4F29F0, 0 15px 0 0px #4F29F0, -14px 8px 0 0px #4F29F0, -14px -8px 0 0px #4F29F0;\n  }\n}"
  },
  {
    "id": "uiverse-vinodjangid07_gentle-parrot-87",
    "title": "Gentle Parrot",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "vinodjangid07",
      "profileUrl": "https://uiverse.io/vinodjangid07/gentle-parrot-87"
    },
    "license": "MIT",
    "description": "Gentle Parrot · toggle by vinodjangid07",
    "tags": [
      "toggle",
      "active",
      "switch",
      "toggle switch",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<input type=\"checkbox\" id=\"checkbox\" />\n<label for=\"checkbox\" class=\"switch\">\n  Start\n  <svg\n    class=\"slider\"\n    viewBox=\"0 0 512 512\"\n    height=\"1em\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n  >\n    <path\n      d=\"M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z\"\n    ></path>\n  </svg>\n</label>",
    "css": "/* From Uiverse.io by vinodjangid07  - Tags: active, switch, toggle, toggle switch */\n#checkbox {\n  display: none;\n}\n\n.switch {\n  position: relative;\n  width: fit-content;\n  padding: 10px 20px;\n  background-color: rgb(46, 46, 46);\n  border-radius: 50px;\n  z-index: 1;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  color: white;\n  font-size: 0.9em;\n  font-weight: 600;\n  transition: all 0.3s;\n}\n.switch svg path {\n  fill: white;\n}\n#checkbox:checked + .switch {\n  background-color: rgb(174, 0, 255);\n  box-shadow: 0px 0px 40px rgba(174, 0, 255, 0.438);\n}"
  },
  {
    "id": "uiverse-vk-uiux_serious-wasp-12",
    "title": "Serious Wasp",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "vk-uiux",
      "profileUrl": "https://uiverse.io/vk-uiux/serious-wasp-12"
    },
    "license": "MIT",
    "description": "Serious Wasp · toggle by vk-uiux",
    "tags": [
      "toggle",
      "animation",
      "switch",
      "hamburger",
      "bars",
      "css",
      "toggle switch",
      "css effect"
    ],
    "previewType": "css",
    "durationMs": 350,
    "accentColor": null,
    "html": "<div id=\"menuToggle\">\n  <input id=\"checkbox\" type=\"checkbox\">\n  <label class=\"toggle\" for=\"checkbox\">\n    <div class=\"bar bar--top\"></div>\n    <div class=\"bar bar--middle\"></div>\n    <div class=\"bar bar--bottom\"></div>\n  </label>\n</div>",
    "css": "/* From Uiverse.io by vk-uiux - Tags: animation, switch, hamburger, bars, toggle, css, toggle switch, css effect, interactive, tornado */\n#checkbox {\n  display: none;\n}\n\n.toggle {\n  position: relative;\n  width: 40px;\n  cursor: pointer;\n  margin: auto;\n  display: block;\n  height: calc(4px * 3 + 11px * 2);\n}\n\n.bar {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 4px;\n  border-radius: calc(4px / 2);\n  background: #7b52b9;\n  color: inherit;\n  opacity: 1;\n  transition: none 0.35s cubic-bezier(.5,-0.35,.35,1.5) 0s;\n}\n\n/***** Tornado Animation *****/\n\n.bar--top {\n  bottom: calc(50% + 11px + 4px/ 2);\n  transition-property: bottom,transform;\n  transition-delay: calc(0s + 0.35s) * .6;\n}\n\n.bar--middle {\n  top: calc(50% - 4px/ 2);\n  transition-property: opacity,transform;\n  transition-delay: calc(0s + 0.35s * .3);\n}\n\n.bar--bottom {\n  top: calc(50% + 11px + 4px/ 2);\n  transition-property: top,transform;\n  transition-delay: 0s;\n}\n\n#checkbox:checked + .toggle .bar--top {\n  transform: rotate(-135deg);\n  transition-delay: 0s;\n  bottom: calc(50% - 4px/ 2);\n}\n\n#checkbox:checked + .toggle .bar--middle {\n  opacity: 0;\n  transform: rotate(-135deg);\n  transition-delay: calc(0s + 0.35s * .3);\n}\n\n#checkbox:checked + .toggle .bar--bottom {\n  top: calc(50% - 4px/ 2);\n  transform: rotate(-225deg);\n  transition-delay: calc(0s + 0.35s * .6);\n}"
  },
  {
    "id": "uiverse-pradeepsaranbishnoi_cold-gecko-57",
    "title": "Cold Gecko",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "Pradeepsaranbishnoi",
      "profileUrl": "https://uiverse.io/Pradeepsaranbishnoi/cold-gecko-57"
    },
    "license": "MIT",
    "description": "Cold Gecko · toggle by Pradeepsaranbishnoi",
    "tags": [
      "toggle",
      "switch",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<div class=\"bauble_box\">\n\t<input class=\"bauble_input\" id=\"bauble_check\" name=\"bauble\" type=\"checkbox\">\n\t<label class=\"bauble_label\" for=\"bauble_check\">Toggle</label>\n</div>",
    "css": "/* From Uiverse.io by Pradeepsaranbishnoi - Tags: switch */\n.bauble_box .bauble_label {\n  background: #2c2;\n  background-position: 62px 5px;\n  background-repeat: no-repeat;\n  background-size: auto 5px;\n  border: 0;\n  border-radius: 50px;\n  box-shadow: inset 0 10px 20px rgba(0,0,0,.4), 0 -1px 0px rgba(0,0,0,.2), inset 0 -1px 0px #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 0;\n  height: 40px;\n  position: relative;\n  -webkit-transition: all 500ms ease;\n  transition: all 500ms ease;\n  width: 90px;\n}\n\n.bauble_box .bauble_label:before {\n  background-color: rgba(255,255,255,.2);\n  background-position: 0 0;\n  background-repeat: repeat;\n  background-size: 30% auto;\n  border-radius: 50%;\n  box-shadow: inset 0 -5px 25px #050, 0 10px 20px rgba(0,0,0,.4);\n  content: '';\n  display: block;\n  height: 30px;\n  left: 5px;\n  position: absolute;\n  top: 6px;\n  -webkit-transition: all 500ms ease;\n  transition: all 500ms ease;\n  width: 30px;\n  z-index: 2;\n}\n\n.bauble_box input.bauble_input {\n  opacity: 0;\n  z-index: 0;\n}\n\n/* Checked */\n.bauble_box input.bauble_input:checked + .bauble_label {\n  background-color: #c22;\n}\n\n.bauble_box input.bauble_input:checked + .bauble_label:before {\n  background-position: 150% 0;\n  box-shadow: inset 0 -5px 25px #500, 0 10px 20px rgba(0,0,0,.4);\n  left: calc( 100% - 35px );\n}"
  },
  {
    "id": "uiverse-ami-hp_heavy-horse-9",
    "title": "Heavy Horse",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "ami-hp",
      "profileUrl": "https://uiverse.io/ami-hp/heavy-horse-9"
    },
    "license": "MIT",
    "description": "Heavy Horse · toggle by ami-hp",
    "tags": [
      "toggle",
      "minimalist",
      "switch",
      "svg",
      "light&dark",
      "switcher",
      "toggle switch",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"my-body\">\n  <div class=\"darkThemeBtn\">\n    <input id=\"darkmode-toggle\" type=\"checkbox\">\n    <label for=\"darkmode-toggle\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"sun\">\n        <g transform=\"translate(0 512) scale(.1 -.1)\"><path d=\"m2513 5105c-59-25-63-46-63-320 0-266 4-288 54-315 33-17 79-17 112 0 50 27 54 49 54 315 0 275-4 295-65 321-42 17-51 17-92-1z\"></path><path d=\"m754 4366c-28-28-34-41-34-77 0-42 3-45 188-231l187-188h47c39 0 52 5 77 31 26 25 31 38 31 77v47l-188 187c-186 185-189 188-231 188-36 0-49-6-77-34z\"></path><path d=\"m4058 4212-188-187v-47c0-39 5-52 31-77 25-26 38-31 77-31h46l188 188c186 186 188 188 188 231 0 36-6 49-34 77s-41 34-77 34c-42 0-45-3-231-188z\"></path><path d=\"m2440 4224c-453-50-760-192-1056-488-264-264-419-570-475-936-17-109-17-371 0-480 56-366 211-672 475-936s570-419 936-475c109-17 371-17 480 0 366 56 672 211 936 475 225 225 358 455 438 758 38 143 50 249 50 418 0 219-30 388-104 590-137 372-450 719-813 901-143 72-315 128-474 154-89 15-329 26-393 19zm335-235c305-46 582-186 805-409 567-567 567-1473 0-2040s-1473-567-2040 0-567 1473 0 2040c328 328 777 476 1235 409z\"></path><path d=\"m54 2651c-20-12-37-34-44-55-16-49 2-101 44-127 28-17 52-19 279-19 268 0 289 4 317 54 17 33 17 79 0 112-28 50-49 54-317 54-227 0-251-2-279-19z\"></path><path d=\"m4512 2657c-73-41-73-155 0-193 21-11 81-14 275-14 227 0 251 2 279 19 42 26 60 78 44 127-7 21-24 43-44 55-28 17-52 19-281 19-181-1-256-4-273-13z\"></path><path d=\"m908 1062c-185-186-188-189-188-231 0-36 6-49 34-77s41-34 77-34c43 0 45 2 231 188l188 188v46c0 39-5 52-31 77-25 26-38 31-77 31h-47l-187-188z\"></path><path d=\"m3901 1219c-26-25-31-38-31-77v-47l188-187c186-185 189-188 231-188 36 0 49 6 77 34s34 41 34 77c0 43-2 45-188 231l-188 188h-46c-39 0-52-5-77-31z\"></path><path d=\"m2540 663c-87-28-90-37-90-330 0-227 2-251 19-279 40-66 142-66 182 0 17 28 19 52 19 279 0 266-4 291-52 314-32 16-60 22-78 16z\"></path></g>\n      </svg>\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"moon\">\n        <g transform=\"translate(0 512) scale(.1 -.1)\">\n          <path d=\"m2090 5105c-248-51-443-118-659-226-514-256-909-652-1161-1163-94-191-139-311-185-490-127-500-110-999 51-1468 133-389 331-706 624-998 403-404 875-642 1460-736 147-24 529-24 693 0 539 78 981 283 1390 644 362 319 647 793 766 1270 46 186 56 256 42 299-22 71-80 116-151 117-73 1-104-19-181-116-307-390-733-627-1233-689-119-14-385-7-501 15-582 106-1066 469-1321 991-120 246-171 452-181 731-21 586 230 1126 695 1493 96 75 117 107 117 177 0 85-67 155-153 160-26 1-76-3-112-11zm110-149c0-2-26-23-57-47-81-60-254-230-325-318-213-264-353-573-415-916-22-126-25-508-5-625 62-346 195-651 395-910 72-93 228-250 327-329 266-213 571-349 930-413 117-20 499-17 625 5 343 62 652 202 916 415 88 71 258 244 318 325 24 32 46 56 48 54s-8-60-23-128c-127-606-501-1155-1027-1505-780-521-1798-535-2602-36-295 183-594 482-777 777-335 539-445 1180-308 1795 138 621 515 1158 1060 1511 136 88 374 201 530 253 148 49 390 106 390 92z\"></path>\n        </g>\n      </svg>\n    </label>\n    <span class=\"fake-body\"></span>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by ami-hp - Tags: minimalist, switch, toggle, svg, light&dark, switcher, toggle switch */\n.darkThemeBtn * {\n  transition: all 0.3s;\n}\n\n.darkThemeBtn input {\n  width: 0;\n  height: 0;\n  visibility: hidden;\n}\n\n.darkThemeBtn label {\n  border: 1px solid #efefef;\n  background: rgba(239, 239, 239, 0.5);\n  border-radius: 10px;\n  height: 46px;\n  width: 46px;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n}\n\n.darkThemeBtn label:active {\n  border-radius: 5px;\n}\n\n.darkThemeBtn label svg {\n  position: absolute;\n  width: 16px;\n  transition: 0.3s;\n  z-index: 1;\n  fill: #000;\n}\n\n.darkThemeBtn label svg.sun {\n  width: 20px;\n  opacity: 0;\n  fill: #fff;\n}\n\n.darkThemeBtn label svg.moon {\n  opacity: 1;\n}\n\n.darkThemeBtn input:checked + label {\n  background: #4a6cf7;\n}\n\n.darkThemeBtn input:checked + label svg.sun {\n  opacity: 1;\n}\n\n.darkThemeBtn input:checked + label svg.moon {\n  opacity: 0;\n}\n\n.darkThemeBtn input:checked ~ span {\n  background-color: #16174b;\n}"
  },
  {
    "id": "uiverse-csemszepp_rude-dolphin-85",
    "title": "Rude Dolphin",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "csemszepp - Source: codepen.io/narohan/pen/dyNwjJL",
      "profileUrl": "https://uiverse.io/csemszepp - Source: codepen.io/narohan/pen/dyNwjJL/rude-dolphin-85"
    },
    "license": "MIT",
    "description": "Rude Dolphin · toggle by csemszepp - Source: codepen.io/narohan/pen/dyNwjJL",
    "tags": [
      "toggle",
      "switch",
      "checkbox",
      "cool checkbox",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<label class=\"switch\">\n\t<input type=\"checkbox\" class=\"chbox\">\n\t<div class=\"slider slider--0\">ON</div>\n\t<div class=\"slider slider--1\">\n\t\t<div></div>\n\t\t<div></div>\n\t</div>\n\t<div class=\"slider slider--2\"></div>\n\t<div class=\"slider slider--3\">OFF</div>\n</label>",
    "css": "/* From Uiverse.io by csemszepp - Source: codepen.io/narohan/pen/dyNwjJL - Tags: switch, checkbox, cool checkbox */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n  border: 2px solid #dcdcdc;\n  background: #e0e0e0;\n  box-shadow: 7px 7px 23px #bebebe, -7px -7px 23px #ffffff;\n  overflow: hidden;\n  border-radius: 60px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.chbox:checked + .slider:before {\n  background: white;\n  box-shadow: none;\n}\n\n.chbox:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\n.slider {\n  color: #9a9a9a;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-family: sans-serif;\n}\n\n.slider--0 {\n  color: white;\n  font-weight: 600;\n  background-color: #49d84e;\n}\n\n.slider--1 div {\n  transition: 0.5s;\n}\n\n.slider--1 div {\n  position: absolute;\n  width: 100%;\n  height: 50%;\n  left: 0;\n}\n\n.chbox:checked ~ .slider--1 div:first-child {\n  transform: translateY(-100%);\n  transition-delay: 1s;\n}\n\n.chbox:checked ~ .slider--1 div:last-child {\n  transform: translateY(100%);\n  transition-delay: 1s;\n}\n\n.chbox:checked ~ .slider--2 {\n  transform: translateX(100%);\n  transition-delay: 0.5s;\n}\n\n.chbox:checked ~ .slider--3 {\n  transform: translateX(-100%);\n  transition-delay: 0s;\n}\n\n.slider--1 div:first-child {\n  transform: translateY(0);\n  top: 0;\n  background-color: #f3f3f3;\n  transition-delay: 0s;\n}\n\n.slider--1 div:last-child {\n  transform: translateY(0);\n  bottom: 0;\n  background-color: #f3f3f3;\n  border-top: 1px solid #e0e0e0;\n  transition-delay: 0s;\n}\n\n.slider--2 {\n  background-color: #e6e6e6;\n  transition-delay: 0.5s;\n  transform: translateX(0);\n  border-left: 1px solid #d2d2d2;\n}\n\n.slider--3 {\n  background-color: #d2d2d2;\n  transition-delay: 1s;\n  transform: translatex(0);\n  border-right: 1px solid #d2d2d2;\n}"
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
    "id": "uiverse-mrhyddenn_slippery-bear-64",
    "title": "Slippery Bear",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "mrhyddenn",
      "profileUrl": "https://uiverse.io/mrhyddenn/slippery-bear-64"
    },
    "license": "MIT",
    "description": "Slippery Bear · checkbox by mrhyddenn",
    "tags": [
      "checkbox",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"container\">\n    <input type=\"checkbox\" id=\"cbx\" style=\"display: none;\">\n    <label for=\"cbx\" class=\"check\">\n        <svg width=\"18px\" height=\"18px\" viewBox=\"0 0 18 18\">\n            <path d=\"M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z\"></path>\n            <polyline points=\"1 9 7 14 15 4\"></polyline>\n        </svg>\n    </label>\n</div>",
    "css": "/* From Uiverse.io by mrhyddenn - Tags: checkbox */\n.check {\n  cursor: pointer;\n  position: relative;\n  margin: auto;\n  width: 18px;\n  height: 18px;\n  -webkit-tap-highlight-color: transparent;\n  transform: translate3d(0, 0, 0);\n}\n\n.check:before {\n  content: \"\";\n  position: absolute;\n  top: -15px;\n  left: -15px;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: rgba(34,50,84,0.03);\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n\n.check svg {\n  position: relative;\n  z-index: 1;\n  fill: none;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke: #c8ccd4;\n  stroke-width: 1.5;\n  transform: translate3d(0, 0, 0);\n  transition: all 0.2s ease;\n}\n\n.check svg path {\n  stroke-dasharray: 60;\n  stroke-dashoffset: 0;\n}\n\n.check svg polyline {\n  stroke-dasharray: 22;\n  stroke-dashoffset: 66;\n}\n\n.check:hover:before {\n  opacity: 1;\n}\n\n.check:hover svg {\n  stroke: #4285f4;\n}\n\n#cbx:checked + .check svg {\n  stroke: #4285f4;\n}\n\n#cbx:checked + .check svg path {\n  stroke-dashoffset: 60;\n  transition: all 0.3s linear;\n}\n\n#cbx:checked + .check svg polyline {\n  stroke-dashoffset: 42;\n  transition: all 0.2s linear;\n  transition-delay: 0.15s;\n}"
  },
  {
    "id": "uiverse-cornerstone-04_terrible-kangaroo-96",
    "title": "Terrible Kangaroo",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "Cornerstone-04",
      "profileUrl": "https://uiverse.io/Cornerstone-04/terrible-kangaroo-96"
    },
    "license": "MIT",
    "description": "Terrible Kangaroo · checkbox by Cornerstone-04",
    "tags": [
      "checkbox",
      "circle",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"check_container\">\n  <input id=\"checkbox\" class=\"hidden\" type=\"checkbox\">\n  <label class=\"checkbox\" for=\"checkbox\"></label>\n</div>",
    "css": "/* From Uiverse.io by Cornerstone-04 - Tags: checkbox, circle */\n.check_container {\n  position: relative;\n}\n\n.checkbox {\n  position: relative;\n  top: 1px;\n  width: 30px;\n  height: 30px;\n  border: 2px solid #212fab;\n  border-radius: 50px;\n  cursor: pointer;\n  display: block;\n  transition: all 0.3s linear;\n}\n\n.checkbox::after {\n  content: \"\";\n  position: absolute;\n  top: 25%;\n  left: 20%;\n  width: 6px;\n  height: 12px;\n  opacity: 0;\n  transform: rotate(45deg) scale(0) translate(-50%, -50%);\n  border-right: 4px solid #ffffff;\n  border-bottom: 4px solid #ffffff;\n  transition: all 0.3s linear;\n}\n\n#checkbox:checked ~ .checkbox::after {\n  opacity: 1 !important;\n  transform: rotate(50deg) scale(1) translate(20%, -25%) !important;\n}\n\n#checkbox:checked ~ .checkbox {\n  background: #212fab;\n  border: none;\n}\n\n.hidden {\n  display: none !important;\n}"
  },
  {
    "id": "uiverse-gagan-gv_wonderful-monkey-77",
    "title": "Wonderful Monkey",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "gagan-gv",
      "profileUrl": "https://uiverse.io/gagan-gv/wonderful-monkey-77"
    },
    "license": "MIT",
    "description": "Wonderful Monkey · checkbox by gagan-gv",
    "tags": [
      "checkbox",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<label class=\"container\">\n  <input checked=\"checked\" type=\"checkbox\">\n  <div class=\"checkmark\"></div>\n</label>",
    "css": "/* From Uiverse.io by gagan-gv - Tags: checkbox */\n/* Hide the default checkbox */\n.container input {\n position: absolute;\n opacity: 0;\n cursor: pointer;\n height: 0;\n width: 0;\n}\n\n.container {\n display: block;\n position: relative;\n cursor: pointer;\n font-size: 20px;\n user-select: none;\n}\n\n/* Create a custom checkbox */\n.checkmark {\n position: relative;\n top: 0;\n left: 0;\n height: 1.3em;\n width: 1.3em;\n background-color: #343434;\n border-radius: 5px;\n transition: all 0.5s;\n}\n\n/* When the checkbox is checked, add a blue background */\n.container input:checked ~ .checkmark {\n background-color: #f0f0f0;\n border: 2px solid #343434;\n}\n\n/* Create the checkmark/indicator (hidden when not checked) */\n.checkmark:after {\n content: \"\";\n position: absolute;\n display: none;\n filter: drop-shadow(0 0 10px #888);\n}\n\n/* Show the checkmark when checked */\n.container input:checked ~ .checkmark:after {\n display: block;\n}\n\n/* Style the checkmark/indicator */\n.container .checkmark:after {\n left: 0.3em;\n top: 0.05em;\n width: 0.3em;\n height: 0.65em;\n border: solid #343434;\n border-width: 0 0.2em 0.2em 0;\n border-radius: 4px;\n transform: rotate(45deg);\n animation: bounceFadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n\n@keyframes bounceFadeIn {\n from {\n  transform: translate(0, -10px) rotate(45deg);\n  opacity: 0;\n }\n\n to {\n  transform: translate(0, 0) rotate(45deg);\n  opacity: 1;\n }\n}"
  },
  {
    "id": "uiverse-ali-tahmazi99_unlucky-termite-68",
    "title": "Unlucky Termite",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "Ali-Tahmazi99",
      "profileUrl": "https://uiverse.io/Ali-Tahmazi99/unlucky-termite-68"
    },
    "license": "MIT",
    "description": "Unlucky Termite · checkbox by Ali-Tahmazi99",
    "tags": [
      "checkbox",
      "hamburger",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<label class=\"bar\" for=\"check\">\n    <input type=\"checkbox\" id=\"check\">\n\n    <span class=\"top\"></span>\n    <span class=\"middle\"></span>\n    <span class=\"bottom\"></span>\n</label>",
    "css": "/* From Uiverse.io by Ali-Tahmazi99 - Tags: hamburger */\ninput[type = \"checkbox\"] {\n  -webkit-appearance: none;\n  display: none;\n  visibility: hidden;\n}\n\n.bar {\n  display: block;\n  position: relative;\n  cursor: pointer;\n  width: 50px;\n  height: 40px;\n}\n\n.bar span {\n  position: absolute;\n  width: 45px;\n  height: 7px;\n  background: #f1faee;\n  border-radius: 100px;\n  display: inline-block;\n  transition: 0.3s ease;\n  left: 0;\n}\n\n.bar span.top {\n  top: 0;\n}\n\n.bar span.middle {\n  top: 17px;\n}\n\n.bar span.bottom {\n  bottom: 0;\n}\n\ninput[type]:checked ~ span.top {\n  transform: rotate(45deg);\n  transform-origin: top left;\n  width: 48px;\n  left: 5px;\n}\n\ninput[type]:checked ~ span.bottom {\n  transform: rotate(-45deg);\n  transform-origin: top left;\n  width: 48px;\n  bottom: -1px;\n  box-shadow: 0 0 10px #495057;\n}\n\ninput[type]:checked ~ span.middle {\n  transform: translateX(-20px);\n  opacity: 0;\n}"
  },
  {
    "id": "uiverse-timbar09_popular-bulldog-40",
    "title": "Popular Bulldog",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "Timbar09",
      "profileUrl": "https://uiverse.io/Timbar09/popular-bulldog-40"
    },
    "license": "MIT",
    "description": "Popular Bulldog · checkbox by Timbar09",
    "tags": [
      "checkbox",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<label class=\"checkbox__label\" for=\"checkbox\">\n  <span class=\"checkbox__container\">\n    <input class=\"checkbox\" id=\"checkbox\" type=\"checkbox\" />\n\n    <span class=\"checkbox__label--text\"> Check box. </span>\n  </span>\n</label>",
    "css": "/* From Uiverse.io by Timbar09  - Tags: checkbox */\n.checkbox__container {\n  --primary-clr-1: #2bbee7;\n  --primary-clr-2: #0e728e;\n  --text-clr-1: #8f8f8f;\n\n  --checkbox-bg-clr: #33333367;\n  --checkbox-border-clr: #55555575;\n\n  color: var(--text-clr-1);\n  display: flex;\n  align-items: center;\n  gap: 0.5em;\n}\n\n.checkbox {\n  --dimension: 1.5em;\n  --tick-dimension: 0.15em;\n\n  appearance: none;\n  margin: 0;\n  position: relative;\n  width: var(--dimension);\n  height: var(--dimension);\n  border: 1px solid transparent;\n  border-radius: 50%;\n  cursor: pointer;\n  rotate: 45deg;\n}\n\n.checkbox:checked {\n  animation: shrink 0.5s ease forwards;\n}\n\n.checkbox:not(:checked) {\n  animation: grow 0.5s 0.75s ease forwards;\n}\n\n@keyframes shrink {\n  0% {\n    scale: 1;\n    background-color: var(--checkbox-bg-clr);\n    border: solid 1px var(--checkbox-border-clr);\n  }\n  50% {\n    scale: 0;\n    background-color: var(--checkbox-bg-clr);\n    border: solid 1px var(--checkbox-border-clr);\n  }\n  51% {\n    scale: 0;\n    background-color: transparent;\n    border: solid 1px transparent;\n  }\n  100% {\n    scale: 1;\n    background-color: transparent;\n    border: solid 1px transparent;\n  }\n}\n\n@keyframes grow {\n  0% {\n    scale: 0;\n    background-color: transparent;\n    border: solid 1px transparent;\n  }\n\n  100% {\n    scale: 1;\n    background-color: var(--checkbox-bg-clr);\n    border: solid 1px var(--checkbox-border-clr);\n  }\n}\n\n.checkbox:before,\n.checkbox:after {\n  content: \"\";\n  position: absolute;\n  top: calc(50% - var(--tick-dimension) / 2);\n  left: calc(50% - var(--tick-dimension) / 2);\n  width: var(--tick-dimension);\n  height: var(--tick-dimension);\n  border-radius: 10rem;\n}\n\n.checkbox::before {\n  background-color: transparent;\n  top: calc(var(--dimension) * 0.65);\n  left: 0;\n  width: var(--tick-dimension);\n}\n\n.checkbox:not(:checked)::before {\n  transition: background-color 0.3s 0.5s ease-in-out, width 0.5s ease-in-out;\n}\n\n.checkbox:checked::before {\n  background-color: var(--primary-clr-1);\n  top: calc(var(--dimension) * 0.65);\n  left: 0;\n  width: calc(var(--dimension) / 2);\n  transition: background-color 0.3s 0.3s ease-in-out,\n    width 0.5s 0.75s ease-in-out;\n}\n\n.checkbox::after {\n  background-color: transparent;\n  top: 0;\n  left: calc((var(--dimension) * 0.5) - var(--tick-dimension));\n  height: var(--tick-dimension);\n}\n\n.checkbox:not(:checked)::after {\n  transition: background-color 0.3s 0.5s ease-in-out, height 0.5s ease-in-out;\n}\n\n.checkbox:checked::after {\n  background-color: var(--primary-clr-2);\n  top: 0;\n  left: calc((var(--dimension) * 0.5) - var(--tick-dimension));\n  height: calc(var(--dimension) * 0.75);\n  transition: background-color 0.3s 0.3s ease-in-out, height 0.5s 1s ease-in-out;\n}\n\n.checkbox__label {\n  --hover: #cdcdcd;\n  --checked: #8f8f8f49;\n  --stroke-dimension: 0.05em;\n\n  cursor: pointer;\n  user-select: none;\n  scale: 1.5;\n  transition: color 0.3s;\n}\n\n.checkbox__label:hover {\n  color: var(--hover);\n}\n\n.checkbox:checked + .checkbox__label--text {\n  color: var(--checked);\n}\n\n.checkbox__label--text {\n  position: relative;\n}\n\n.checkbox__label--text::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: calc(-1 * var(--stroke-dimension));\n  width: var(--stroke-dimension);\n  height: var(--stroke-dimension);\n  margin-right: 0.5em;\n  border-radius: 1em;\n}\n\n.checkbox__label--text::before {\n  background-color: var(--primary-clr-1);\n  width: 0;\n  transition: width 0.5s, background-color 0.3s 0.5s;\n}\n\n.checkbox:checked + .checkbox__label--text::before {\n  background-color: var(--checked);\n  width: calc(100% + var(--stroke-dimension));\n  transition: width 1.25s 0.75s, background-color 0.5s 2s;\n}"
  },
  {
    "id": "uiverse-elijahgummer_stale-bobcat-64",
    "title": "Stale Bobcat",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "elijahgummer",
      "profileUrl": "https://uiverse.io/elijahgummer/stale-bobcat-64"
    },
    "license": "MIT",
    "description": "Stale Bobcat · checkbox by elijahgummer",
    "tags": [
      "checkbox",
      "simple",
      "animation",
      "blue",
      "modern",
      "transition",
      "click effect",
      "click animation"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"checkbox\">\n  <input type=\"checkbox\" id=\"cbx\" />\n  <label for=\"cbx\" class=\"cbx\">\n    <div class=\"flip\">\n      <div class=\"front\"></div>\n      <div class=\"back\">\n        <svg viewBox=\"0 0 16 14\" height=\"14\" width=\"16\">\n          <path d=\"M2 8.5L6 12.5L14 1.5\"></path>\n        </svg>\n      </div>\n    </div>\n  </label>\n</div>",
    "css": "/* From Uiverse.io by elijahgummer  - Tags: simple, animation, blue, checkbox, modern, transition, click effect, click animation */\n.checkbox {\n  position: relative;\n}\n\n.checkbox input[type=\"checkbox\"] {\n  display: none;\n  visibility: hidden;\n}\n\n.checkbox .cbx {\n  -webkit-perspective: 20;\n  perspective: 20;\n  display: inline-block;\n  border: 2px solid #e8e8eb;\n  background: #e8e8eb;\n  border-radius: 4px;\n  transform: translate3d(0, 0, 0);\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.checkbox .cbx:hover {\n  border-color: #0b76ef;\n}\n\n.checkbox .flip {\n  display: block;\n  transition: all 0.4s ease;\n  transform-style: preserve-3d;\n  position: relative;\n  width: 20px;\n  height: 20px;\n}\n\n.checkbox input[type=\"checkbox\"]:checked + .cbx {\n  border-color: #0b76ef;\n}\n\n.checkbox input[type=\"checkbox\"]:checked + .cbx .flip {\n  transform: rotateY(180deg);\n}\n\n.checkbox .front,\n.checkbox .back {\n  backface-visibility: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 20px;\n  height: 20px;\n  border-radius: 2px;\n}\n\n.checkbox .front {\n  background: #fff;\n  z-index: 1;\n}\n\n.checkbox .back {\n  transform: rotateY(180deg);\n  background: #0b76ef;\n  text-align: center;\n  color: #fff;\n  line-height: 20px;\n  box-shadow: 0 0 0 1px #0b76ef;\n}\n\n.checkbox .back svg {\n  margin-top: 3px;\n  fill: none;\n}\n\n.checkbox .back svg path {\n  stroke: #fff;\n  stroke-width: 2.5;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}"
  },
  {
    "id": "uiverse-priyanshugupta28_thin-hound-49",
    "title": "Thin Hound",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "PriyanshuGupta28",
      "profileUrl": "https://uiverse.io/PriyanshuGupta28/thin-hound-49"
    },
    "license": "MIT",
    "description": "Thin Hound · checkbox by PriyanshuGupta28",
    "tags": [
      "checkbox",
      "docs checkbox",
      "cool checkbox",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<div class=\"checkbox-wrapper\">\n  <input checked=\"\" type=\"checkbox\" class=\"check\" id=\"check1-61\">\n  <label for=\"check1-61\" class=\"label\">\n    <svg width=\"45\" height=\"45\" viewBox=\"0 0 95 95\">\n      <rect x=\"30\" y=\"20\" width=\"50\" height=\"50\" stroke=\"black\" fill=\"none\"></rect>\n      <g transform=\"translate(0,-952.36222)\">\n        <path d=\"m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4\" stroke=\"black\" stroke-width=\"3\" fill=\"none\" class=\"path1\"></path>\n      </g>\n    </svg>\n    <span>Checkbox</span>\n  </label>\n</div>",
    "css": "/* From Uiverse.io by PriyanshuGupta28 - Tags: checkbox, docs checkbox, cool checkbox */\n.checkbox-wrapper input[type=\"checkbox\"] {\n  visibility: hidden;\n  display: none;\n}\n\n.checkbox-wrapper *,\n  .checkbox-wrapper ::after,\n  .checkbox-wrapper ::before {\n  box-sizing: border-box;\n  user-select: none;\n}\n\n.checkbox-wrapper {\n  position: relative;\n  display: block;\n  overflow: hidden;\n}\n\n.checkbox-wrapper .label {\n  cursor: pointer;\n}\n\n.checkbox-wrapper .check {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  opacity: 0;\n}\n\n.checkbox-wrapper .label svg {\n  vertical-align: middle;\n}\n\n.checkbox-wrapper .path1 {\n  stroke-dasharray: 400;\n  stroke-dashoffset: 400;\n  transition: .5s stroke-dashoffset;\n  opacity: 0;\n}\n\n.checkbox-wrapper .check:checked + label svg g path {\n  stroke-dashoffset: 0;\n  opacity: 1;\n}"
  },
  {
    "id": "uiverse-catraco_hungry-squid-59",
    "title": "Hungry Squid",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "catraco",
      "profileUrl": "https://uiverse.io/catraco/hungry-squid-59"
    },
    "license": "MIT",
    "description": "Hungry Squid · checkbox by catraco",
    "tags": [
      "checkbox",
      "animated",
      "click animation",
      "cool checkbox",
      "checkmark"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<label class=\"container\">\n  <input type=\"checkbox\" checked=\"checked\">\n  <div class=\"checkmark\"></div>\n  <svg width=\"50\" height=\"50\" xmlns=\"http://www.w3.org/2000/svg\" class=\"celebrate\">\n      <polygon points=\"0,0 10,10\"></polygon>\n      <polygon points=\"0,25 10,25\"></polygon>\n      <polygon points=\"0,50 10,40\"></polygon>\n      <polygon points=\"50,0 40,10\"></polygon>\n      <polygon points=\"50,25 40,25\"></polygon>\n      <polygon points=\"50,50 40,40\"></polygon>\n    </svg>\n</label>",
    "css": "/* From Uiverse.io by catraco - Tags: checkbox, animated, click animation, cool checkbox, checkmark */\n/* Hide the default checkbox */\n.container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n}\n\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  font-size: 20px;\n  user-select: none;\n  border-radius: 50%;\n  background-color: white;\n}\n\n/* Create a custom checkbox */\n.checkmark {\n  position: relative;\n  top: 0;\n  left: 0;\n  height: 1.3em;\n  width: 1.3em;\n  transition: .3s;\n  transform: scale(0);\n  border-radius: 50%;\n}\n\n/* When the checkbox is checked, add a blue background */\n.container input:checked ~ .checkmark {\n  background-color: #20c580;\n  transform: scale(1);\n}\n\n/* Create the checkmark/indicator (hidden when not checked) */\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n/* Show the checkmark when checked */\n.container input:checked ~ .checkmark:after {\n  display: block;\n}\n\n.container input:checked ~ .celebrate {\n  display: block;\n}\n\n/* Style the checkmark/indicator */\n.container .checkmark:after {\n  left: 0.45em;\n  top: 0.25em;\n  width: 0.30em;\n  height: 0.5em;\n  border: solid white;\n  border-width: 0 0.15em 0.15em 0;\n  transform: rotate(45deg);\n}\n\n.container .celebrate {\n  position: absolute;\n  transform-origin: center;\n  animation: kfr-celebrate .4s;\n  animation-fill-mode: forwards;\n  display: none;\n  stroke: #20c580;\n}\n\n@keyframes kfr-celebrate {\n  0% {\n    transform: scale(0);\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  100% {\n    transform: scale(1.2);\n    opacity: 0;\n    display: none;\n  }\n}"
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
    "id": "uiverse-csozidev_shy-horse-87",
    "title": "Shy Horse",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "csozidev",
      "profileUrl": "https://uiverse.io/csozidev/shy-horse-87"
    },
    "license": "MIT",
    "description": "Shy Horse · checkbox by csozidev",
    "tags": [
      "checkbox",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 100,
    "accentColor": null,
    "html": "<label class=\"container\">\n  <input type=\"checkbox\" checked=\"checked\">\n  <div class=\"checkmark\"></div>\n</label>",
    "css": "/* From Uiverse.io by csozidev - Tags: checkbox */\n/* Green glow checkbox made by: csozi | Website: www.csozi.hu*/\n\n.container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.container {\n  display: block;\n  position: relative;\n  cursor: pointer;\n  font-size: 20px;\n  user-select: none;\n  background-color: #676767;\n  padding: 4px;\n  border-radius: 25px;\n}\n\n.checkmark {\n  position: relative;\n  top: 0;\n  left: 0;\n  height: 1.3em;\n  width: 1.3em;\n  border-radius: 1rem;\n  background-color: #004000;\n  transition: 0.1s;\n}\n\n.container input:checked ~ .checkmark {\n  background-color: #00de00;\n  box-shadow: 0 0 10px #00ff00;\n}"
  },
  {
    "id": "uiverse-nawsome_heavy-cheetah-95",
    "title": "Heavy Cheetah",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "Nawsome",
      "profileUrl": "https://uiverse.io/Nawsome/heavy-cheetah-95"
    },
    "license": "MIT",
    "description": "Heavy Cheetah · checkbox by Nawsome",
    "tags": [
      "checkbox",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"content\">\n  <label class=\"checkBox\">\n    <input id=\"ch1\" type=\"checkbox\">\n    <div class=\"transition\"></div>\n  </label>\n</div>",
    "css": "/* From Uiverse.io by Nawsome - Tags: checkbox */\n.clear {\n  clear: both;\n}\n\n.checkBox {\n  display: block;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border: 3px solid rgba(255, 255, 255, 0);\n  border-radius: 10px;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0px 0px 0px 2px #fff;\n}\n\n.checkBox div {\n  width: 60px;\n  height: 60px;\n  background-color: #fff;\n  top: -52px;\n  left: -52px;\n  position: absolute;\n  transform: rotateZ(45deg);\n  z-index: 100;\n}\n\n.checkBox input[type=checkbox]:checked + div {\n  left: -10px;\n  top: -10px;\n}\n\n.checkBox input[type=checkbox] {\n  position: absolute;\n  left: 50px;\n  visibility: hidden;\n}\n\n.transition {\n  transition: 300ms ease;\n}"
  },
  {
    "id": "uiverse-julandealb_tall-swan-6",
    "title": "Tall Swan",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "JulanDeAlb",
      "profileUrl": "https://uiverse.io/JulanDeAlb/tall-swan-6"
    },
    "license": "MIT",
    "description": "Tall Swan · checkbox by JulanDeAlb",
    "tags": [
      "checkbox",
      "hamburger",
      "toggle",
      "menu",
      "animated",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 600,
    "accentColor": null,
    "html": "<label class=\"hamburger\">\n  <input type=\"checkbox\">\n  <svg viewBox=\"0 0 32 32\">\n    <path class=\"line line-top-bottom\" d=\"M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22\"></path>\n    <path class=\"line\" d=\"M7 16 27 16\"></path>\n  </svg>\n</label>",
    "css": "/* From Uiverse.io by JulanDeAlb - Tags: checkbox, hamburger, toggle, menu, animated */\n.hamburger {\n  cursor: pointer;\n}\n\n.hamburger input {\n  display: none;\n}\n\n.hamburger svg {\n  /* The size of the SVG defines the overall size */\n  height: 3em;\n  /* Define the transition for transforming the SVG */\n  transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.line {\n  fill: none;\n  stroke: white;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 3;\n  /* Define the transition for transforming the Stroke */\n  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),\n              stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.line-top-bottom {\n  stroke-dasharray: 12 63;\n}\n\n.hamburger input:checked + svg {\n  transform: rotate(-45deg);\n}\n\n.hamburger input:checked + svg .line-top-bottom {\n  stroke-dasharray: 20 300;\n  stroke-dashoffset: -32.42;\n}"
  },
  {
    "id": "uiverse-praashoo7_moody-sloth-42",
    "title": "Moody Sloth",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "Praashoo7",
      "profileUrl": "https://uiverse.io/Praashoo7/moody-sloth-42"
    },
    "license": "MIT",
    "description": "Moody Sloth · checkbox by Praashoo7",
    "tags": [
      "checkbox",
      "thumb",
      "like",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<label class=\"container\">\n  <input type=\"checkbox\">\n  <div class=\"checkmark\">\n    <svg viewBox=\"0 0 50 50\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\">\n    <path d=\"M 24.10 6.29 Q 28.34 7.56 28.00 12.00 Q 27.56 15.10 27.13 18.19 A 0.45 0.45 4.5 0 0 27.57 18.70 Q 33.16 18.79 38.75 18.75 Q 42.13 18.97 43.23 21.45 Q 43.91 22.98 43.27 26.05 Q 40.33 40.08 40.19 40.44 Q 38.85 43.75 35.50 43.75 Q 21.75 43.75 7.29 43.75 A 1.03 1.02 0.0 0 1 6.26 42.73 L 6.42 19.43 A 0.54 0.51 -89.4 0 1 6.93 18.90 L 14.74 18.79 A 2.52 2.31 11.6 0 0 16.91 17.49 L 22.04 7.17 A 1.74 1.73 21.6 0 1 24.10 6.29 Z M 21.92 14.42 Q 20.76 16.58 19.74 18.79 Q 18.74 20.93 18.72 23.43 Q 18.65 31.75 18.92 40.06 A 0.52 0.52 88.9 0 0 19.44 40.56 L 35.51 40.50 A 1.87 1.83 5.9 0 0 37.33 39.05 L 40.51 23.94 Q 40.92 22.03 38.96 21.97 L 23.95 21.57 A 0.49 0.47 2.8 0 1 23.47 21.06 Q 23.76 17.64 25.00 12.00 Q 25.58 9.36 24.28 10.12 Q 23.80 10.40 23.50 11.09 Q 22.79 12.80 21.92 14.42 Z M 15.57 22.41 A 0.62 0.62 0 0 0 14.95 21.79 L 10.01 21.79 A 0.62 0.62 0 0 0 9.39 22.41 L 9.39 40.07 A 0.62 0.62 0 0 0 10.01 40.69 L 14.95 40.69 A 0.62 0.62 0 0 0 15.57 40.07 L 15.57 22.41 Z\" fill-opacity=\"1.000\"></path>\n    <circle r=\"1.51\" cy=\"37.50\" cx=\"12.49\" fill-opacity=\"1.000\"></circle>\n    </svg>\n  </div>\n  <p class=\"like\">Liked!</p>\n</label>",
    "css": "/* From Uiverse.io by Praashoo7 - Tags: checkbox, thumb, like */\n/* Hide the default checkbox */\n.container input {\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.container {\n  display: block;\n  position: relative;\n  cursor: pointer;\n  font-size: 20px;\n  user-select: none;\n}\n\n/* Create a custom checkbox */\n.checkmark {\n  position: relative;\n  top: 0;\n  left: 0;\n  height: 3em;\n  width: 3em;\n  background-color: #171717;\n  border-radius: 10px;\n  transition: .2s ease-in-out;\n  z-index: 2;\n}\n\n.like {\n  position: relative;\n  font-size: 0.8em;\n  top: -3.5em;\n  text-align: center;\n  z-index: -1;\n}\n\n.icon {\n  margin: 0.2em;\n  fill: white;\n  transition: .4s ease-in-out;\n}\n\n.checkmark:hover {\n  background-color: white;\n}\n\n.checkmark:hover .icon {\n  fill: black;\n  transform: rotate(-8deg);\n  transform-origin: bottom left;\n}\n\n/* When the checkbox is checked, add a blue background */\n.container input:checked ~ .checkmark {\n  background-color: limegreen;\n}\n\n.container input:checked ~ .like {\n  color: white;\n  animation: 0.6s up_3951;\n}\n\n.container input:checked ~ .checkmark .icon {\n  fill: white;\n  transform: none;\n  animation: 0.5s jump_3951;\n}\n\n/* Create the checkmark/indicator (hidden when not checked) */\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n/* Show the checkmark when checked */\n.container input:checked ~ .checkmark:after {\n  display: block;\n}\n\n@keyframes up_3951 {\n  100% {\n    transform: translateY(-2em);\n  }\n}\n\n@keyframes jump_3951 {\n  50% {\n    transform-origin: center;\n    transform: translateY(-0.5em) rotate(-8deg);\n  }\n\n  100% {\n    transform-origin: center;\n    transform: translateY(0em);\n  }\n}"
  },
  {
    "id": "uiverse-lucaasbre_strong-stingray-2",
    "title": "Strong Stingray",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "Lucaasbre",
      "profileUrl": "https://uiverse.io/Lucaasbre/strong-stingray-2"
    },
    "license": "MIT",
    "description": "Strong Stingray · checkbox by Lucaasbre",
    "tags": [
      "checkbox",
      "simple",
      "button",
      "menu",
      "light&dark",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<input type=\"checkbox\" class=\"checkbox\" />\n<span class=\"button-menu\"></span>\n<button class=\"option-a option\">A</button>\n<button class=\"option-b option\">B</button>\n<button class=\"option-c option\">C</button>",
    "css": "/* From Uiverse.io by Lucaasbre  - Tags: simple, button, checkbox, menu, light&dark */\n.button-menu {\n  cursor: pointer;\n  position: absolute;\n  z-index: 1;\n  background-color: #ffdd00;\n  border: 2px solid #1e1e1e;\n  color: #1e1e1e;\n  font-size: 30px;\n  font-weight: 700;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  -webkit-box-shadow: 0px 3px 10px 0px rgba(16, 16, 16, 0.5);\n  -moz-box-shadow: 0px 3px 10px 0px rgba(16, 16, 16, 0.5);\n  box-shadow: 0px 3px 10px 0px rgba(16, 16, 16, 0.5);\n}\n\n.checkbox {\n  width: 60px;\n  height: 60px;\n  opacity: 0;\n  z-index: 10;\n  cursor: pointer;\n}\n\n.option {\n  position: absolute;\n  background-color: #1e1e1e;\n  border: 2px solid #ffdd00;\n  color: #ffdd00;\n  z-index: -1;\n  width: 55px;\n  height: 55px;\n  border-radius: 50%;\n  cursor: pointer;\n  font-weight: 700;\n  transition: all 0.3s;\n  -webkit-box-shadow: 3px 3px 10px 0px rgba(16, 16, 16, 0.5);\n  -moz-box-shadow: 3px 3px 10px 0px rgba(16, 16, 16, 0.5);\n  box-shadow: 3px 3px 10px 0px rgba(16, 16, 16, 0.5);\n}\n\n.checkbox:hover ~ .button-menu,\n.checkbox:checked ~ .button-menu {\n  background-color: #eccd00;\n  scale: 0.98;\n  box-shadow: none;\n}\n\n.checkbox:not(:checked) ~ .button-menu::before {\n  content: \"+\";\n}\n\n.checkbox:checked ~ .button-menu::after {\n  content: \"-\";\n  scale: 0.98;\n  box-shadow: none;\n}\n\n.checkbox:not(:checked) ~ .option {\n  box-shadow: none;\n}\n\n.option:hover,\n.option:active,\n.option:focus {\n  box-shadow: none;\n  scale: 0.98;\n}\n\n.checkbox:checked ~ .option-a {\n  transition-delay: 0.1s;\n  transform: translateY(-70px);\n}\n\n.checkbox:checked ~ .option-b {\n  transition-delay: 0.2s;\n  transform: translateY(-140px);\n}\n\n.checkbox:checked ~ .option-c {\n  transition-delay: 0.3s;\n  transform: translateY(-210px);\n}"
  },
  {
    "id": "uiverse-galahhad_perfect-cheetah-72",
    "title": "Perfect Cheetah",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "Galahhad",
      "profileUrl": "https://uiverse.io/Galahhad/perfect-cheetah-72"
    },
    "license": "MIT",
    "description": "Perfect Cheetah · checkbox by Galahhad",
    "tags": [
      "checkbox",
      "theme",
      "theme-switch",
      "radio",
      "dropdown",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div class=\"theme-popup\">\n    <input type=\"radio\" name=\"theme\" id=\"default\" checked=\"\">\n    <input type=\"radio\" name=\"theme\" id=\"light\">\n    <input type=\"radio\" name=\"theme\" id=\"dark\">\n    <input type=\"checkbox\" id=\"checkbox\">\n  <label for=\"checkbox\" class=\"theme-popup__button\">\n    <span class=\"theme-popup__icons\">\n      <svg class=\"default\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.5 2.52267C6.13332 2.64713 4.86254 3.27802 3.9372 4.29146C3.01186 5.3049 2.49882 6.62766 2.49882 8C2.49882 9.37234 3.01186 10.6951 3.9372 11.7085C4.86254 12.722 6.13332 13.3529 7.5 13.4773V2.52267ZM1.5 8C1.5 4.41 4.41 1.5 8 1.5C11.59 1.5 14.5 4.41 14.5 8C14.5 11.59 11.59 14.5 8 14.5C4.41 14.5 1.5 11.59 1.5 8Z\" fill=\"currentColor\"></path>\n      </svg>\n      <svg class=\"sun\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n        <g clip-path=\"url(#clip0_78_63)\">\n          <path d=\"M7.99998 3.99256C5.79024 3.99256 3.99254 5.79061 3.99254 8.00035C3.99254 10.2101 5.79024 12.0081 7.99998 12.0081C10.2094 12.0081 12.0074 10.2105 12.0074 8.00035C12.0074 5.79026 10.2094 3.99256 7.99998 3.99256ZM7.99998 2.81453C7.79266 2.81453 7.59383 2.73219 7.4472 2.58563C7.30057 2.43907 7.21814 2.24027 7.21805 2.03295V0.781931C7.21805 0.57455 7.30043 0.375663 7.44707 0.229022C7.59371 0.0823818 7.7926 0 7.99998 0C8.20736 0 8.40625 0.0823818 8.55289 0.229022C8.69953 0.375663 8.78191 0.57455 8.78191 0.781931V2.03295C8.78182 2.24027 8.6994 2.43907 8.55276 2.58563C8.40613 2.73219 8.2073 2.81453 7.99998 2.81453ZM7.99998 13.1851C7.8973 13.1851 7.79562 13.2053 7.70075 13.2446C7.60588 13.2839 7.51968 13.3415 7.44707 13.4141C7.37446 13.4868 7.31687 13.573 7.27757 13.6678C7.23828 13.7627 7.21805 13.8644 7.21805 13.9671V15.2177C7.21805 15.4251 7.30043 15.624 7.44707 15.7706C7.59371 15.9173 7.7926 15.9996 7.99998 15.9996C8.20736 15.9996 8.40625 15.9173 8.55289 15.7706C8.69953 15.624 8.78191 15.4251 8.78191 15.2177V13.9671C8.78182 13.7597 8.69941 13.5609 8.55279 13.4142C8.40617 13.2676 8.20733 13.1852 7.99998 13.1851ZM11.6662 4.33339C11.5197 4.18671 11.4374 3.98785 11.4374 3.78051C11.4374 3.57318 11.5197 3.37432 11.6662 3.22764L12.5509 2.34296C12.6232 2.26911 12.7095 2.21033 12.8047 2.17003C12.8999 2.12972 13.0021 2.1087 13.1055 2.10816C13.2088 2.10762 13.3113 2.12758 13.4069 2.16689C13.5025 2.2062 13.5894 2.26408 13.6625 2.33717C13.7356 2.41026 13.7934 2.49712 13.8327 2.59273C13.872 2.68833 13.892 2.79078 13.8915 2.89415C13.8909 2.99752 13.8699 3.09976 13.8296 3.19494C13.7893 3.29013 13.7305 3.37639 13.6567 3.44872L12.772 4.33339C12.6254 4.48001 12.4265 4.56238 12.2191 4.56238C12.0117 4.56238 11.8129 4.48001 11.6662 4.33339ZM4.33337 11.667C4.26081 11.5943 4.17463 11.5366 4.07976 11.4973C3.98489 11.4579 3.8832 11.4377 3.78049 11.4377C3.67779 11.4377 3.5761 11.4579 3.48123 11.4973C3.38636 11.5366 3.30018 11.5943 3.22762 11.667L2.34294 12.5513C2.19882 12.6984 2.11858 12.8965 2.11966 13.1025C2.12073 13.3084 2.20303 13.5057 2.34867 13.6513C2.49431 13.797 2.69154 13.8793 2.8975 13.8803C3.10347 13.8814 3.30154 13.8012 3.4487 13.657L4.33337 12.772C4.40599 12.6995 4.46361 12.6134 4.50291 12.5186C4.54222 12.4237 4.56245 12.3221 4.56245 12.2195C4.56245 12.1169 4.54222 12.0152 4.50291 11.9204C4.46361 11.8256 4.40599 11.7395 4.33337 11.667ZM13.1851 8C13.1851 7.56811 13.5351 7.21807 13.967 7.21807H15.218C15.3221 7.21585 15.4256 7.23444 15.5224 7.27273C15.6191 7.31102 15.7073 7.36825 15.7817 7.44106C15.8561 7.51387 15.9152 7.6008 15.9555 7.69675C15.9958 7.7927 16.0166 7.89574 16.0166 7.99982C16.0166 8.10391 15.9958 8.20695 15.9555 8.3029C15.9152 8.39884 15.8561 8.48577 15.7817 8.55859C15.7073 8.6314 15.6191 8.68863 15.5224 8.72692C15.4256 8.76521 15.3221 8.78379 15.218 8.78158H13.967C13.8644 8.78162 13.7627 8.76144 13.6678 8.72218C13.573 8.68293 13.4868 8.62536 13.4141 8.55278C13.3415 8.4802 13.2839 8.39403 13.2446 8.29918C13.2053 8.20433 13.1851 8.10267 13.1851 8ZM2.81451 8C2.81451 7.89732 2.79428 7.79564 2.75499 7.70077C2.71569 7.6059 2.65809 7.5197 2.58548 7.44709C2.51288 7.37448 2.42668 7.31689 2.33181 7.27759C2.23694 7.23829 2.13526 7.21807 2.03258 7.21807H0.781912C0.67785 7.21585 0.574393 7.23444 0.477607 7.27273C0.380821 7.31102 0.292654 7.36825 0.218276 7.44106C0.143897 7.51387 0.0848039 7.6008 0.044461 7.69675C0.00411808 7.7927 -0.0166626 7.89574 -0.0166626 7.99982C-0.0166626 8.10391 0.00411808 8.20695 0.044461 8.3029C0.0848039 8.39884 0.143897 8.48577 0.218276 8.55859C0.292654 8.6314 0.380821 8.68863 0.477607 8.72692C0.574393 8.76521 0.67785 8.78379 0.781912 8.78158H2.03293C2.24022 8.78158 2.43901 8.69923 2.58559 8.55266C2.73216 8.40608 2.81451 8.20729 2.81451 8ZM11.6662 11.667C11.8129 11.5204 12.0118 11.4381 12.2191 11.4381C12.4264 11.4381 12.6253 11.5204 12.772 11.667L13.6567 12.5516C13.8033 12.6983 13.8856 12.8971 13.8856 13.1045C13.8855 13.3118 13.8031 13.5106 13.6565 13.6572C13.5839 13.7298 13.4977 13.7874 13.4028 13.8266C13.308 13.8659 13.2063 13.8861 13.1037 13.8861C12.8963 13.8861 12.6975 13.8037 12.5509 13.657L11.6662 12.7724C11.5936 12.6998 11.536 12.6137 11.4967 12.5188C11.4574 12.424 11.4371 12.3223 11.4371 12.2197C11.4371 12.117 11.4574 12.0153 11.4967 11.9205C11.536 11.8257 11.5936 11.7395 11.6662 11.667ZM4.33337 4.33339C4.48 4.18675 4.56237 3.98788 4.56237 3.78051C4.56237 3.57315 4.48 3.37427 4.33337 3.22764L3.4487 2.34331C3.3011 2.20166 3.10386 2.12349 2.89929 2.12558C2.69473 2.12766 2.49913 2.20983 2.35445 2.35447C2.20976 2.4991 2.12753 2.69468 2.12538 2.89924C2.12323 3.10381 2.20133 3.30107 2.34294 3.44872L3.22762 4.33339C3.30018 4.40608 3.38636 4.46374 3.48123 4.50308C3.5761 4.54243 3.67779 4.56268 3.78049 4.56268C3.8832 4.56268 3.98489 4.54243 4.07976 4.50308C4.17463 4.46374 4.26081 4.40608 4.33337 4.33339Z\" fill=\"currentColor\"></path>\n        </g>\n        <defs>\n          <clipPath>\n            <rect width=\"16\" height=\"16\" fill=\"currentColor\"></rect>\n          </clipPath>\n        </defs>\n      </svg>\n      <svg class=\"moon\" width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <g clip-path=\"url(#clip0_78_60)\">\n          <path d=\"M7.24135 14C10.1123 13.9981 12.6803 12.2445 13.7367 9.59537C13.7953 9.44832 13.727 9.39266 13.5866 9.46575C12.7818 9.88471 11.888 10.1036 10.9806 10.104C7.86082 10.1042 5.33169 7.57506 5.33188 4.45524C5.3323 3.64636 5.50645 2.84701 5.84254 2.11127C6.17863 1.37552 6.66883 0.720544 7.27996 0.190644C7.42672 0.0486062 7.38444 -0.0171645 7.09498 0.00382823C3.42058 0.029058 0.24231 3.13569 0.24231 7.00113C0.24231 10.8666 3.3758 14.0002 7.24135 14Z\" fill=\"currentColor\"></path>\n        </g>\n        <defs>\n          <clipPath>\n            <rect width=\"14\" height=\"14\" fill=\"currentColor\"></rect>\n          </clipPath>\n        </defs>\n      </svg>\n    </span>\n    Theme\n  </label>\n  <div class=\"theme-popup__list-container\">\n    <ul class=\"theme-popup__list\">\n      <li>\n        <label for=\"default\">\n          <span class=\"theme-popup__icons\">\n            <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.5 2.52267C6.13332 2.64713 4.86254 3.27802 3.9372 4.29146C3.01186 5.3049 2.49882 6.62766 2.49882 8C2.49882 9.37234 3.01186 10.6951 3.9372 11.7085C4.86254 12.722 6.13332 13.3529 7.5 13.4773V2.52267ZM1.5 8C1.5 4.41 4.41 1.5 8 1.5C11.59 1.5 14.5 4.41 14.5 8C14.5 11.59 11.59 14.5 8 14.5C4.41 14.5 1.5 11.59 1.5 8Z\" fill=\"currentColor\"></path>\n            </svg>\n          </span>\n          <span>\n            OS Default\n          </span>\n        </label>\n      </li>\n      <li>\n        <label for=\"light\">\n          <span class=\"theme-popup__icons\">\n            <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n              <g clip-path=\"url(#clip0_78_63)\">\n                <path d=\"M7.99998 3.99256C5.79024 3.99256 3.99254 5.79061 3.99254 8.00035C3.99254 10.2101 5.79024 12.0081 7.99998 12.0081C10.2094 12.0081 12.0074 10.2105 12.0074 8.00035C12.0074 5.79026 10.2094 3.99256 7.99998 3.99256ZM7.99998 2.81453C7.79266 2.81453 7.59383 2.73219 7.4472 2.58563C7.30057 2.43907 7.21814 2.24027 7.21805 2.03295V0.781931C7.21805 0.57455 7.30043 0.375663 7.44707 0.229022C7.59371 0.0823818 7.7926 0 7.99998 0C8.20736 0 8.40625 0.0823818 8.55289 0.229022C8.69953 0.375663 8.78191 0.57455 8.78191 0.781931V2.03295C8.78182 2.24027 8.6994 2.43907 8.55276 2.58563C8.40613 2.73219 8.2073 2.81453 7.99998 2.81453ZM7.99998 13.1851C7.8973 13.1851 7.79562 13.2053 7.70075 13.2446C7.60588 13.2839 7.51968 13.3415 7.44707 13.4141C7.37446 13.4868 7.31687 13.573 7.27757 13.6678C7.23828 13.7627 7.21805 13.8644 7.21805 13.9671V15.2177C7.21805 15.4251 7.30043 15.624 7.44707 15.7706C7.59371 15.9173 7.7926 15.9996 7.99998 15.9996C8.20736 15.9996 8.40625 15.9173 8.55289 15.7706C8.69953 15.624 8.78191 15.4251 8.78191 15.2177V13.9671C8.78182 13.7597 8.69941 13.5609 8.55279 13.4142C8.40617 13.2676 8.20733 13.1852 7.99998 13.1851ZM11.6662 4.33339C11.5197 4.18671 11.4374 3.98785 11.4374 3.78051C11.4374 3.57318 11.5197 3.37432 11.6662 3.22764L12.5509 2.34296C12.6232 2.26911 12.7095 2.21033 12.8047 2.17003C12.8999 2.12972 13.0021 2.1087 13.1055 2.10816C13.2088 2.10762 13.3113 2.12758 13.4069 2.16689C13.5025 2.2062 13.5894 2.26408 13.6625 2.33717C13.7356 2.41026 13.7934 2.49712 13.8327 2.59273C13.872 2.68833 13.892 2.79078 13.8915 2.89415C13.8909 2.99752 13.8699 3.09976 13.8296 3.19494C13.7893 3.29013 13.7305 3.37639 13.6567 3.44872L12.772 4.33339C12.6254 4.48001 12.4265 4.56238 12.2191 4.56238C12.0117 4.56238 11.8129 4.48001 11.6662 4.33339ZM4.33337 11.667C4.26081 11.5943 4.17463 11.5366 4.07976 11.4973C3.98489 11.4579 3.8832 11.4377 3.78049 11.4377C3.67779 11.4377 3.5761 11.4579 3.48123 11.4973C3.38636 11.5366 3.30018 11.5943 3.22762 11.667L2.34294 12.5513C2.19882 12.6984 2.11858 12.8965 2.11966 13.1025C2.12073 13.3084 2.20303 13.5057 2.34867 13.6513C2.49431 13.797 2.69154 13.8793 2.8975 13.8803C3.10347 13.8814 3.30154 13.8012 3.4487 13.657L4.33337 12.772C4.40599 12.6995 4.46361 12.6134 4.50291 12.5186C4.54222 12.4237 4.56245 12.3221 4.56245 12.2195C4.56245 12.1169 4.54222 12.0152 4.50291 11.9204C4.46361 11.8256 4.40599 11.7395 4.33337 11.667ZM13.1851 8C13.1851 7.56811 13.5351 7.21807 13.967 7.21807H15.218C15.3221 7.21585 15.4256 7.23444 15.5224 7.27273C15.6191 7.31102 15.7073 7.36825 15.7817 7.44106C15.8561 7.51387 15.9152 7.6008 15.9555 7.69675C15.9958 7.7927 16.0166 7.89574 16.0166 7.99982C16.0166 8.10391 15.9958 8.20695 15.9555 8.3029C15.9152 8.39884 15.8561 8.48577 15.7817 8.55859C15.7073 8.6314 15.6191 8.68863 15.5224 8.72692C15.4256 8.76521 15.3221 8.78379 15.218 8.78158H13.967C13.8644 8.78162 13.7627 8.76144 13.6678 8.72218C13.573 8.68293 13.4868 8.62536 13.4141 8.55278C13.3415 8.4802 13.2839 8.39403 13.2446 8.29918C13.2053 8.20433 13.1851 8.10267 13.1851 8ZM2.81451 8C2.81451 7.89732 2.79428 7.79564 2.75499 7.70077C2.71569 7.6059 2.65809 7.5197 2.58548 7.44709C2.51288 7.37448 2.42668 7.31689 2.33181 7.27759C2.23694 7.23829 2.13526 7.21807 2.03258 7.21807H0.781912C0.67785 7.21585 0.574393 7.23444 0.477607 7.27273C0.380821 7.31102 0.292654 7.36825 0.218276 7.44106C0.143897 7.51387 0.0848039 7.6008 0.044461 7.69675C0.00411808 7.7927 -0.0166626 7.89574 -0.0166626 7.99982C-0.0166626 8.10391 0.00411808 8.20695 0.044461 8.3029C0.0848039 8.39884 0.143897 8.48577 0.218276 8.55859C0.292654 8.6314 0.380821 8.68863 0.477607 8.72692C0.574393 8.76521 0.67785 8.78379 0.781912 8.78158H2.03293C2.24022 8.78158 2.43901 8.69923 2.58559 8.55266C2.73216 8.40608 2.81451 8.20729 2.81451 8ZM11.6662 11.667C11.8129 11.5204 12.0118 11.4381 12.2191 11.4381C12.4264 11.4381 12.6253 11.5204 12.772 11.667L13.6567 12.5516C13.8033 12.6983 13.8856 12.8971 13.8856 13.1045C13.8855 13.3118 13.8031 13.5106 13.6565 13.6572C13.5839 13.7298 13.4977 13.7874 13.4028 13.8266C13.308 13.8659 13.2063 13.8861 13.1037 13.8861C12.8963 13.8861 12.6975 13.8037 12.5509 13.657L11.6662 12.7724C11.5936 12.6998 11.536 12.6137 11.4967 12.5188C11.4574 12.424 11.4371 12.3223 11.4371 12.2197C11.4371 12.117 11.4574 12.0153 11.4967 11.9205C11.536 11.8257 11.5936 11.7395 11.6662 11.667ZM4.33337 4.33339C4.48 4.18675 4.56237 3.98788 4.56237 3.78051C4.56237 3.57315 4.48 3.37427 4.33337 3.22764L3.4487 2.34331C3.3011 2.20166 3.10386 2.12349 2.89929 2.12558C2.69473 2.12766 2.49913 2.20983 2.35445 2.35447C2.20976 2.4991 2.12753 2.69468 2.12538 2.89924C2.12323 3.10381 2.20133 3.30107 2.34294 3.44872L3.22762 4.33339C3.30018 4.40608 3.38636 4.46374 3.48123 4.50308C3.5761 4.54243 3.67779 4.56268 3.78049 4.56268C3.8832 4.56268 3.98489 4.54243 4.07976 4.50308C4.17463 4.46374 4.26081 4.40608 4.33337 4.33339Z\" fill=\"currentColor\"></path>\n              </g>\n              <defs>\n                <clipPath>\n                  <rect width=\"16\" height=\"16\" fill=\"currentColor\"></rect>\n                </clipPath>\n              </defs>\n            </svg>\n          </span>\n          <span>\n            Light\n          </span>\n        </label>\n      </li>\n      <li>\n        <label for=\"dark\">\n          <span class=\"theme-popup__icons\">\n            <svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n              <g clip-path=\"url(#clip0_78_60)\">\n                <path d=\"M7.24135 14C10.1123 13.9981 12.6803 12.2445 13.7367 9.59537C13.7953 9.44832 13.727 9.39266 13.5866 9.46575C12.7818 9.88471 11.888 10.1036 10.9806 10.104C7.86082 10.1042 5.33169 7.57506 5.33188 4.45524C5.3323 3.64636 5.50645 2.84701 5.84254 2.11127C6.17863 1.37552 6.66883 0.720544 7.27996 0.190644C7.42672 0.0486062 7.38444 -0.0171645 7.09498 0.00382823C3.42058 0.029058 0.24231 3.13569 0.24231 7.00113C0.24231 10.8666 3.3758 14.0002 7.24135 14Z\" fill=\"currentColor\"></path>\n              </g>\n              <defs>\n                <clipPath>\n                  <rect width=\"14\" height=\"14\" fill=\"currentColor\"></rect>\n                </clipPath>\n              </defs>\n            </svg>\n          </span>\n          <span>\n            Night\n          </span>\n        </label>\n      </li>\n    </ul>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by Galahhad - Tags: theme, theme-switch, radio, dropdown */\n/* radio settings 👇 */\n\n.theme-popup {\n  /* total */\n  --total_text_color: #e0e0e0;\n  --total_font_family: Menlo, Roboto Mono, monospace;\n  /* button */\n  --btn_bg: #3A3A3A;\n  --btn_padding: 0.5em;\n  --btn_height: 2em;\n  --btn_border_radius: 0.3125em;\n  --btn_outline_width: 0.0625em;\n  --btn_outline_color: #A0A0A0;\n  --btn_outline_offset: 0.0625em;\n  --btn_gap: 0.3125em;\n  /* list */\n  --list_padding: 0.5em;\n  --list_bg: var(--btn_bg);\n  --list_border_radius: var(--btn_border_radius);\n  --list_gap: 0.1875em;\n  --list_btn_hover_bg: #5A5656;\n  --list_btn_active: #b9b9b970;\n  --list_btn_border_radius: 0.25em;\n  --list_btn_padding: 0.35em 1em;\n  --list_btn_gap: 0.4375em;\n  --list_btn_outline_width: 0.0625em;\n  --list_btn_outline_color: rgb(212, 210, 210);\n  --list_offset: 0.35em;\n  --list_btn_font_size: 14px;\n  --list_position_left: 0;\n  --list_position_right: unset;\n  /* 👆 if you want to change sides just switch one property */\n  /* from properties to \"unset\" and the other to 0 */\n}\n\n.theme-popup__button .theme-popup__icons svg,\n#light,\n#dark, \n#default, \n#checkbox,\n.theme-popup__list-container {\n  display: none;\n}\n\n.theme-popup {\n  color: var(--total_text_color);\n  font-family: var(--total_font_family);\n  position: relative;\n  user-select: none;\n}\n\n.theme-popup__list-container {\n  position: absolute;\n  left: var(--list_position_left);\n  right: var(--list_position_right);\n  top: calc(var(--btn_height) + var(--list_offset));\n}\n\n.theme-popup__icons {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 16px;\n  height: 16px;\n}\n\n.theme-popup__button {\n  line-height: var(--btn_height);\n  background-color: var(--btn_bg);\n  padding: 0 var(--btn_padding);\n  display: inline-flex;\n  align-items: center;\n  column-gap: var(--btn_gap);\n  border-radius: var(--btn_border_radius);\n  border: none;\n  color: inherit;\n  font-family: inherit;\n  outline: none;\n  font-weight: bold;\n}\n\n.theme-popup__list {\n  margin: 0;\n  list-style-type: none;\n  padding: var(--list_padding);\n  border-radius: var(--list_border_radius);\n  background-color: var(--list_bg);\n  display: flex;\n  flex-direction: column;\n  row-gap: var(--list_gap);\n}\n\n.theme-popup__list label {\n  display: flex;\n  align-items: center;\n  justify-content: start;\n  column-gap: var(--list_btn_gap);\n  padding: var(--list_btn_padding);\n  border-radius: var(--list_btn_border_radius);\n  white-space: nowrap;\n}\n\n.theme-popup__list label span {\n  font-size: var(--list_btn_font_size);\n}\n\n/* actions */\n\n#checkbox:checked~.theme-popup__button {\n  outline: var(--btn_outline_width) solid var(--btn_outline_color);\n  outline-offset: var(--btn_outline_offset);\n}\n\n#checkbox:checked~.theme-popup__list-container {\n  display: block;\n}\n\n.theme-popup__list label:hover,\n.theme-popup__button:hover,\n#checkbox:checked~.theme-popup__button {\n  background-color: var(--list_btn_hover_bg);\n}\n\n#default:checked~.theme-popup__list-container label[for=\"default\"],\n#light:checked~.theme-popup__list-container label[for=\"light\"],\n#dark:checked~.theme-popup__list-container label[for=\"dark\"] {\n  background-color: var(--list_btn_active);\n  outline: var(--list_btn_outline_width) solid var(--list_btn_outline_color);\n}\n\n#default:checked~label svg.default,\n#light:checked~label svg.sun,\n#dark:checked~label svg.moon {\n  display: block;\n}"
  },
  {
    "id": "uiverse-ratinax_itchy-mouse-15",
    "title": "Itchy Mouse",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "Ratinax",
      "profileUrl": "https://uiverse.io/Ratinax/itchy-mouse-15"
    },
    "license": "MIT",
    "description": "Itchy Mouse · checkbox by Ratinax",
    "tags": [
      "checkbox",
      "radio",
      "buttons",
      "traffic light",
      "traffic-light",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div class=\"container\">\n    <div class=\"fire\">\n        <label class=\"label red\">\n            <input type=\"radio\" checked=\"checked\" name=\"radio\" class=\"input\">\n        </label>\n        <label class=\"label orange\">\n            <input type=\"radio\" name=\"radio\" class=\"input\">\n        </label>\n        <label class=\"label green\">\n            <input type=\"radio\" name=\"radio\" class=\"input\">\n        </label>\n        <span class=\"selection\"></span>\n    </div>\n</div>",
    "css": "/* From Uiverse.io by Ratinax - Tags: radio, buttons, traffic light, traffic-light */\n.container {\n  scale: 0.7;\n}\n\n.fire {\n  width: 2em;\n  height: 6.5em;\n  background-color: black;\n  border-radius: 1em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.label {\n  width: 1.5em;\n  height: 1.5em;\n  border-radius: 50%;\n  margin-top: .25em;\n  margin-bottom: .25em;\n  border-top: .2em solid black;\n  cursor: pointer;\n}\n\n.input {\n  display: none;\n}\n\n.label.red {\n  background-color: #990000;\n  box-shadow: 0 0 2em #990000;\n}\n\n.label.orange {\n  background-color: #999900;\n  box-shadow: 0 0 2em #999900;\n}\n\n.label.green {\n  background-color: #009900;\n  box-shadow: 0 0 2em #009900;\n}\n\n.label.red:hover {\n  background-color: red;\n}\n\n.label.orange:hover {\n  background-color: orange;\n}\n\n.label.green:hover {\n  background-color: lime;\n}\n\n.label.red:has(input:checked) {\n  background-color: red;\n  box-shadow: 0 0 2em red;\n}\n\n.label.orange:has(input:checked) {\n  background-color: orange;\n  box-shadow: 0 0 2em orange;\n}\n\n.label.green:has(input:checked) {\n  background-color: lime;\n  box-shadow: 0 0 2em lime;\n}"
  },
  {
    "id": "uiverse-pradeepsaranbishnoi_wise-snake-15",
    "title": "Wise Snake",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "Pradeepsaranbishnoi  - Website: https://codepen.io/t_afif/pen/abaYxQj - Name: Temani",
      "profileUrl": "https://uiverse.io/Pradeepsaranbishnoi  - Website: https://codepen.io/t_afif/pen/abaYxQj - Name: Temani/wise-snake-15"
    },
    "license": "MIT",
    "description": "Wise Snake · checkbox by Pradeepsaranbishnoi  - Website: https://codepen.io/t_afif/pen/abaYxQj - Name: Temani",
    "tags": [
      "checkbox",
      "simple",
      "animation",
      "radio",
      "advanced",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 400,
    "accentColor": null,
    "html": "<div class=\"container\">\n  <label><input name=\"e\" type=\"radio\" /> Click</label>\n  <label><input name=\"e\" type=\"radio\" /> Me</label>\n  <label><input name=\"e\" type=\"radio\" /> to</label>\n  <label><input disabled=\"\" name=\"e\" type=\"radio\" /> And so on ..</label>\n</div>",
    "css": "/* From Uiverse.io by Pradeepsaranbishnoi  - Website: https://codepen.io/t_afif/pen/abaYxQj - Name: Temani - Tags: simple, animation, radio, advanced */\n.container {\n  --s: 1em; /* control the size */\n  --g: 10px; /* the gap */\n  --c: #009688; /* the active color */\n\n  display: grid;\n  grid-auto-rows: 1fr;\n  gap: var(--g);\n  position: relative;\n}\n.container:before {\n  content: \"\";\n  position: absolute;\n  height: calc(var(--s) / 2);\n  left: calc(var(--s) / 4 + var(--_x, 0px));\n  top: calc(var(--s) / 4);\n  background: var(--c);\n  border-radius: 50%;\n  aspect-ratio: 1;\n  transition: 0.4s, left cubic-bezier(0.1, -2000, 0.7, -2000) 0.4s;\n}\n.container label {\n  display: inline-flex;\n  line-height: var(--s);\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n}\n.container input {\n  height: var(--s);\n  aspect-ratio: 1;\n  border: calc(var(--s) / 8) solid var(--_c, #939393);\n  border-radius: 50%;\n  outline-offset: calc(var(--s) / 10);\n  padding: calc(var(--s) / 8);\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  cursor: pointer;\n  font-size: inherit;\n  margin: 0;\n  transition: 0.3s;\n}\n.container input:checked {\n  --_c: var(--c);\n}\n.container:not(:has(input:checked)):before {\n  --_i: -1;\n  opacity: 0;\n}\n.container:has(input:checked):before {\n  opacity: 1;\n  transform: translateY(calc(var(--_i) * (var(--s) + var(--g))));\n}\n.container:has(label:nth-child(1) input:checked):before {\n  --_i: 0;\n  --_x: 0.02px;\n}\n.container:has(label:nth-child(2) input:checked):before {\n  --_i: 1;\n  --_x: 0.04px;\n}\n.container:has(label:nth-child(3) input:checked):before {\n  --_i: 2;\n  --_x: 0.06px;\n}\n.container:has(label:nth-child(4) input:checked):before {\n  --_i: 3;\n  --_x: 0.08px;\n}\n.container:has(label:nth-child(5) input:checked):before {\n  --_i: 4;\n  --_x: 0.1px;\n}\n/* and so on ..*/\n\n.container input:disabled {\n  background: linear-gradient(#939393 0 0) 50%/100% 20% no-repeat content-box;\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media print {\n  input[type=\"radio\"] {\n    -webkit-appearance: auto;\n    -moz-appearance: auto;\n    appearance: auto;\n    background: none;\n  }\n}\n@supports not selector(:has(*)) {\n  .container:before {\n    display: none;\n  }\n  .container input:checked {\n    --_c: var(--c);\n    background: var(--c) content-box;\n  }\n}"
  },
  {
    "id": "uiverse-christosmourgelas_polite-rattlesnake-85",
    "title": "Polite Rattlesnake",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "ChristosMourgelas",
      "profileUrl": "https://uiverse.io/ChristosMourgelas/polite-rattlesnake-85"
    },
    "license": "MIT",
    "description": "Polite Rattlesnake · checkbox by ChristosMourgelas",
    "tags": [
      "checkbox",
      "radio",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"radio-input\">\n  <input class=\"value-radio\" name=\"value-radio\" id=\"option-1\" type=\"radio\">\n  <label class=\"value-radio-label\" for=\"option-1\">Option A</label>\n\n  <input class=\"value-radio\" name=\"value-radio\" id=\"option-2\" type=\"radio\">\n  <label class=\"value-radio-label\" for=\"option-2\">Option B</label>\n  \n  <input class=\"value-radio\" name=\"value-radio\" id=\"option-3\" type=\"radio\">\n  <label class=\"value-radio-label\" for=\"option-3\">Option C</label>\n\n</div>",
    "css": "/* From Uiverse.io by ChristosMourgelas - Tags: radio */\n.radio-input {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.value-radio {\n  display: none;\n}\n\n.value-radio-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  border: 2px solid #4d4d4d;\n  border-radius: 20px;\n  color: #ccc;\n  background-color: #333;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n\n.value-radio:checked + .value-radio-label {\n  border-color: #00b4ff;\n  background-color: #00b4ff;\n  color: #fff;\n}\n\n.value-radio-label::before {\n  content: '';\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid #4d4d4d;\n  transition: all 1s;\n}\n\n.value-radio:checked + .value-radio-label::before {\n  border-color: #0175a6;\n  background-color: #ffffff;\n}"
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
    "id": "uiverse-pradeepsaranbishnoi_heavy-dragonfly-92",
    "title": "Heavy Dragonfly",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "Pradeepsaranbishnoi",
      "profileUrl": "https://uiverse.io/Pradeepsaranbishnoi/heavy-dragonfly-92"
    },
    "license": "MIT",
    "description": "Heavy Dragonfly · checkbox by Pradeepsaranbishnoi",
    "tags": [
      "checkbox",
      "radio",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 150,
    "accentColor": null,
    "html": "<div class=\"container\">\n\t<div class=\"tabs\">\n\t\t<input type=\"radio\" id=\"radio-1\" name=\"tabs\" checked=\"\">\n\t\t<label class=\"tab\" for=\"radio-1\">Hello<span class=\"notification\">2</span></label>\n\t\t<input type=\"radio\" id=\"radio-2\" name=\"tabs\">\n\t\t<label class=\"tab\" for=\"radio-2\">UI</label>\n\t\t<input type=\"radio\" id=\"radio-3\" name=\"tabs\">\n\t\t<label class=\"tab\" for=\"radio-3\">World</label>\n\t\t<span class=\"glider\"></span>\n\t</div>\n</div>",
    "css": "/* From Uiverse.io by Pradeepsaranbishnoi - Tags: radio */\n.tabs {\n  display: flex;\n  position: relative;\n  background-color: #fff;\n  box-shadow: 0 0 1px 0 rgba(24, 94, 224, 0.15), 0 6px 12px 0 rgba(24, 94, 224, 0.15);\n  padding: 0.75rem;\n  border-radius: 99px;\n}\n\n.tabs * {\n  z-index: 2;\n}\n\n.container input[type=\"radio\"] {\n  display: none;\n}\n\n.tab {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 30px;\n  width: 50px;\n  font-size: .8rem;\n  color: black;\n  font-weight: 500;\n  border-radius: 99px;\n  cursor: pointer;\n  transition: color 0.15s ease-in;\n}\n\n.notification {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: .8rem;\n  height: .8rem;\n  position: absolute;\n  top: 10px;\n  left: 30%;\n  font-size: 10px;\n  margin-left: 0.75rem;\n  border-radius: 50%;\n  margin: 0px;\n  background-color: #e6eef9;\n  transition: 0.15s ease-in;\n}\n\n.container input[type=\"radio\"]:checked + label {\n  color: #185ee0;\n}\n\n.container input[type=\"radio\"]:checked + label > .notification {\n  background-color: #185ee0;\n  color: #fff;\n  margin: 0px;\n}\n\n.container input[id=\"radio-1\"]:checked ~ .glider {\n  transform: translateX(0);\n}\n\n.container input[id=\"radio-2\"]:checked ~ .glider {\n  transform: translateX(100%);\n}\n\n.container input[id=\"radio-3\"]:checked ~ .glider {\n  transform: translateX(200%);\n}\n\n.glider {\n  position: absolute;\n  display: flex;\n  height: 30px;\n  width: 50px;\n  background-color: #e6eef9;\n  z-index: 1;\n  border-radius: 99px;\n  transition: 0.25s ease-out;\n}\n\n@media (max-width: 700px) {\n \n  .tabs {\n    transform: scale(0.6);\n  }\n}"
  },
  {
    "id": "uiverse-coding-masala_polite-monkey-88",
    "title": "Polite Monkey",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "coding-masala",
      "profileUrl": "https://uiverse.io/coding-masala/polite-monkey-88"
    },
    "license": "MIT",
    "description": "Polite Monkey · checkbox by coding-masala",
    "tags": [
      "checkbox",
      "radio",
      "advanced",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"radio-group\">\n    <input class=\"radio-input\" name=\"radio-group\" id=\"radio1\" type=\"radio\">\n    <label class=\"radio-label\" for=\"radio1\">\n      <span class=\"radio-inner-circle\"></span>\n      Option 1\n    </label>\n    \n    <input class=\"radio-input\" name=\"radio-group\" id=\"radio2\" type=\"radio\">\n    <label class=\"radio-label\" for=\"radio2\">\n      <span class=\"radio-inner-circle\"></span>\n      Option 2\n    </label>\n    \n    <input class=\"radio-input\" name=\"radio-group\" id=\"radio3\" type=\"radio\">\n    <label class=\"radio-label\" for=\"radio3\">\n      <span class=\"radio-inner-circle\"></span>\n      Option 3\n    </label>\n  </div>",
    "css": "/* From Uiverse.io by coding-masala - Tags: radio, advanced */\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: Arial, sans-serif;\n  background-color: #f1f1f1;\n  padding: 20px;\n}\n\n.radio-group {\n  display: flex;\n  flex-direction: column;\n}\n\n.radio-label {\n  display: flex;\n  align-items: center;\n  padding: 0.5em;\n  margin-bottom: 0.5em;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  transition: background-color 0.2s, border-color 0.2s;\n}\n\n.radio-label:hover {\n  background-color: #e6e6e6;\n}\n\n.radio-input {\n  position: absolute;\n  opacity: 0;\n}\n\n.radio-input:checked + .radio-label {\n  background-color: #ffc3c3;\n  border-color: #ff1111;\n}\n\n.radio-input:focus + .radio-label {\n  outline: 2px solid #ff1111;\n}\n\n.radio-inner-circle {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  border: 2px solid #888;\n  border-radius: 50%;\n  margin-right: 0.5em;\n  transition: border-color 0.2s;\n  position: relative;\n}\n\n.radio-label:hover .radio-inner-circle {\n  border-color: #555;\n}\n\n.radio-input:checked + .radio-label .radio-inner-circle {\n  border-color: #ff1111;\n}\n\n.radio-input:checked + .radio-label .radio-inner-circle::after {\n  content: '';\n  display: block;\n  width: 0.5em;\n  height: 0.5em;\n  background-color: #ff1111;\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}"
  },
  {
    "id": "uiverse-andrew-demchenk0_lucky-bobcat-25",
    "title": "Lucky Bobcat",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "andrew-demchenk0",
      "profileUrl": "https://uiverse.io/andrew-demchenk0/lucky-bobcat-25"
    },
    "license": "MIT",
    "description": "Lucky Bobcat · checkbox by andrew-demchenk0",
    "tags": [
      "checkbox",
      "cyberpunk",
      "neon",
      "radio",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"container\">\n  <div class=\"radio-wrapper\">\n    <input class=\"input\" name=\"btn\" id=\"value-1\" type=\"radio\">\n    <div class=\"btn\">\n      <span aria-hidden=\"\">_</span>Cyber\n      <span class=\"btn__glitch\" aria-hidden=\"\">_Cyber🦾</span>\n      <label class=\"number\">r1</label>\n    </div>\n  </div>\n  <div class=\"radio-wrapper\">\n    <input class=\"input\" name=\"btn\" id=\"value-2\" checked=\"true\" type=\"radio\">\n    <div class=\"btn\">\n      _Radio<span aria-hidden=\"\">_</span>\n      <span class=\"btn__glitch\" aria-hidden=\"\">_R_a_d_i_o_</span>\n      <label class=\"number\">r2</label>\n    </div>\n  </div>\n  <div class=\"radio-wrapper\">\n    <input class=\"input\" name=\"btn\" id=\"value-3\" type=\"radio\">\n    <div class=\"btn\">\n      Buttons<span aria-hidden=\"\"></span>\n      <span class=\"btn__glitch\" aria-hidden=\"\">Buttons_</span>\n      <label class=\"number\">r3</label>\n    </div> \n  </div>\n</div>",
    "css": "/* From Uiverse.io by andrew-demchenk0  - Tags: cyberpunk, neon, radio, radio, neon */\n.container {\n  display: flex;\n  flex-direction: row;\n}\n\n.radio-wrapper {\n  position: relative;\n  height: 38px;\n  width: 84px;\n  margin: 3px;\n}\n\n.radio-wrapper .input {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  cursor: pointer;\n  z-index: 10;\n  opacity: 0;\n}\n\n.btn {\n  --primary: #ff184c;\n  --shadow-primary: #fded00;\n  --color: white;\n  --font-size: 9px;\n  --shadow-primary-hue: 180;\n  --shadow-secondary-hue: 60;\n  --shadow-secondary: hsl(var(--shadow-secondary-hue), 90%, 60%);\n  --clip: polygon(11% 0, 95% 0, 100% 25%, 90% 90%, 95% 90%, 85% 90%, 85% 100%, 7% 100%, 0 80%);\n  --border: 5px;\n  --shimmy-distance: 5;\n  --clip-one: polygon(0 2%, 100% 2%, 100% 95%, 95% 95%, 95% 90%, 85% 90%, 85% 95%, 8% 95%, 0 70%);\n  --clip-two: polygon(0 78%, 100% 78%, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 78%);\n  --clip-three: polygon(0 44%, 100% 44%, 100% 54%, 95% 54%, 95% 54%, 85% 54%, 85% 54%, 8% 54%, 0 54%);\n  --clip-four: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);\n  --clip-five: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);\n  --clip-six: polygon(0 40%, 100% 40%, 100% 85%, 95% 85%, 95% 85%, 85% 85%, 85% 85%, 8% 85%, 0 70%);\n  --clip-seven: polygon(0 63%, 100% 63%, 100% 80%, 95% 80%, 95% 80%, 85% 80%, 85% 80%, 8% 80%, 0 70%);\n  color: var(--color);\n  text-transform: uppercase;\n  font-size: var(--font-size);\n  letter-spacing: 3px;\n  position: relative;\n  font-weight: 900;\n  width: 100%;\n  height: 100%;\n  line-height: 38px;\n  text-align: center;\n  transition: background 0.2s, 0.3s;\n}\n\n.input:checked + .btn {\n  --primary: #8B00FF;\n  --shadow-primary: #00e572;\n}\n\n.input:hover + .btn {\n  --primary: #cc133c;\n  --font-size: 11px;\n}\n\n.btn:after, .btn:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  clip-path: var(--clip);\n  z-index: -1;\n}\n\n.btn:before {\n  background: var(--shadow-primary);\n  transform: translate(var(--border), 0);\n}\n\n.btn:after {\n  background: var(--primary);\n}\n\n.btn__tag {\n  position: absolute;\n  padding: 1px 4px;\n  letter-spacing: 1px;\n  line-height: 1;\n  bottom: -5%;\n  right: 5%;\n  font-weight: normal;\n  color: hsl(0, 0%, 0%);\n  font-size: var(--label-size);\n}\n\n.btn__glitch {\n  position: absolute;\n  top: calc(var(--border) * -1);\n  left: calc(var(--border) * -1);\n  right: calc(var(--border) * -1);\n  bottom: calc(var(--border) * -1);\n  background: var(--shadow-primary);\n  text-shadow: 2px 2px var(--shadow-primary), -2px -2px var(--shadow-secondary);\n  clip-path: var(--clip);\n  animation: glitch 2s infinite;\n  display: none;\n}\n\n.input:hover + .btn .btn__glitch {\n  display: block;\n}\n\n.input:checked + .btn .btn__glitch {\n  display: block;\n  animation: glitch 5s infinite;\n}\n\n.btn__glitch:before {\n  content: '';\n  position: absolute;\n  top: calc(var(--border) * 1);\n  right: calc(var(--border) * 1);\n  bottom: calc(var(--border) * 1);\n  left: calc(var(--border) * 1);\n  clip-path: var(--clip);\n  background: var(--primary);\n  z-index: -1;\n}\n\n@keyframes glitch {\n  0% {\n    clip-path: var(--clip-one);\n  }\n\n  2%, 8% {\n    clip-path: var(--clip-two);\n    transform: translate(calc(var(--shimmy-distance) * -1%), 0);\n  }\n\n  6% {\n    clip-path: var(--clip-two);\n    transform: translate(calc(var(--shimmy-distance) * 1%), 0);\n  }\n\n  9% {\n    clip-path: var(--clip-two);\n    transform: translate(0, 0);\n  }\n\n  10% {\n    clip-path: var(--clip-three);\n    transform: translate(calc(var(--shimmy-distance) * 1%), 0);\n  }\n\n  13% {\n    clip-path: var(--clip-three);\n    transform: translate(0, 0);\n  }\n\n  14%, 21% {\n    clip-path: var(--clip-four);\n    transform: translate(calc(var(--shimmy-distance) * 1%), 0);\n  }\n\n  25% {\n    clip-path: var(--clip-five);\n    transform: translate(calc(var(--shimmy-distance) * 1%), 0);\n  }\n\n  30% {\n    clip-path: var(--clip-five);\n    transform: translate(calc(var(--shimmy-distance) * -1%), 0);\n  }\n\n  35%, 45% {\n    clip-path: var(--clip-six);\n    transform: translate(calc(var(--shimmy-distance) * -1%));\n  }\n\n  40% {\n    clip-path: var(--clip-six);\n    transform: translate(calc(var(--shimmy-distance) * 1%));\n  }\n\n  50% {\n    clip-path: var(--clip-six);\n    transform: translate(0, 0);\n  }\n\n  55% {\n    clip-path: var(--clip-seven);\n    transform: translate(calc(var(--shimmy-distance) * 1%), 0);\n  }\n\n  60% {\n    clip-path: var(--clip-seven);\n    transform: translate(0, 0);\n  }\n\n  31%, 61%, 100% {\n    clip-path: var(--clip-four);\n  }\n}\n\n.number {\n  background: var(--shadow-primary);\n  color: #323232;\n  font-size: 5.5px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  position: absolute;\n  width: 15px;\n  height: 6px;\n  top: 0;\n  left: 81%;\n  line-height: 6.2px;\n}"
  },
  {
    "id": "uiverse-lilarest_soft-baboon-75",
    "title": "Soft Baboon",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "LilaRest",
      "profileUrl": "https://uiverse.io/LilaRest/soft-baboon-75"
    },
    "license": "MIT",
    "description": "Soft Baboon · checkbox by LilaRest",
    "tags": [
      "checkbox",
      "neumorphism",
      "skeuomorphism",
      "glassmorphism",
      "animation",
      "minimalist",
      "ball",
      "radio"
    ],
    "previewType": "css",
    "durationMs": 800,
    "accentColor": null,
    "html": "<div class=\"radio-input\">\n  <div class=\"glass\">\n    <div class=\"glass-inner\">\n    </div>\n  </div>\n  <div class=\"selector\">\n    <div class=\"choice\">\n      <div>\n        <input type=\"radio\" id=\"one\" name=\"number-selector\" value=\"one\" checked=\"true\" class=\"choice-circle\">\n        <div class=\"ball\"></div>\n      </div>\n      <label class=\"choice-name\" for=\"one\">1</label>\n    </div>\n    <div class=\"choice\">\n      <div>\n        <input type=\"radio\" id=\"two\" name=\"number-selector\" value=\"two\" class=\"choice-circle\">\n        <div class=\"ball\"></div>\n      </div>\n      <label class=\"choice-name\">2</label>\n    </div>\n    <div class=\"choice\">\n      <div>\n        <input type=\"radio\" id=\"three\" name=\"number-selector\" value=\"three\" class=\"choice-circle\">\n        <div class=\"ball\"></div>\n      </div>\n      <label class=\"choice-name\" for=\"three\">3</label>\n    </div>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by LilaRest - Tags: neumorphism, skeuomorphism, glassmorphism, animation, minimalist, ball, radio, futuristic */\n.radio-input {\n  display: flex;\n  height: 210px;\n  align-items: center;\n}\n\n.glass {\n  z-index: 2;\n  height: 110%;\n  width: 95px;\n  margin-right: 25px;\n  padding: 8px;\n  background-color: rgba(190, 189, 189, 0.5);\n  border-radius: 35px;\n  box-shadow: rgba(50, 50, 93, 0.2) 0px 25px 50px -10px,\n   rgba(0, 0, 0, 0.25) 0px 10px 30px -15px,\n    rgba(10, 37, 64, 0.26) 0px -2px 6px 0px inset;\n  backdrop-filter: blur(8px);\n}\n\n.glass-inner {\n  width: 100%;\n  height: 100%;\n  border-color: rgba(245, 245, 245, 0.45);\n  border-width: 9px;\n  border-style: solid;\n  border-radius: 30px\n}\n\n.selector {\n  display: flex;\n  flex-direction: column;\n}\n\n.choice {\n  margin: 10px 0 10px 0;\n  display: flex;\n  align-items: center;\n}\n\n.choice > div {\n  position: relative;\n  width: 41px;\n  height: 41px;\n  margin-right: 15px;\n  z-index: 0;\n}\n\n.choice-circle {\n  appearance: none;\n  height: 100%;\n  width: 100%;\n  border-radius: 100%;\n  border-width: 9px;\n  border-style: solid;\n  border-color: rgba(245, 245, 245, 0.45);\n  cursor: pointer;\n  box-shadow: 0px 0px 20px -13px gray,\n  0px 0px 20px -14px gray inset;\n}\n\n.ball {\n  z-index: 1;\n  position: absolute;\n  inset: 0px;\n  transform: translateX(-95px);\n  box-shadow: rgba(0, 0, 0, 0.17) 0px -10px 10px 0px inset,\n   rgba(0, 0, 0, 0.15) 0px -15px 15px 0px inset,\n    rgba(0, 0, 0, 0.1) 0px -40px 20px 0px inset,\n     rgba(0, 0, 0, 0.06) 0px 2px 1px, \n     rgba(0, 0, 0, 0.09) 0px 4px 2px, \n     rgba(0, 0, 0, 0.09) 0px 8px 4px, \n     rgba(0, 0, 0, 0.09) 0px 16px 8px,\n      rgba(0, 0, 0, 0.09) 0px 32px 16px,\n       0px -1px 15px -8px rgba(0, 0, 0, 0.09);\n  border-radius: 100%;\n  transition: transform 800ms cubic-bezier(1,-0.4,0,1.4);\n  background-color: rgb(232, 232, 232, 1);\n}\n\n.choice-circle:checked + .ball {\n  transform: translateX(0px);\n}\n\n.choice-name {\n  color: rgb(177, 176, 176);\n  font-size: 35px;\n  font-weight: 900;\n  font-family: monospace;\n  cursor: pointer;\n}"
  },
  {
    "id": "uiverse-cbolson_ugly-yak-75",
    "title": "Ugly Yak",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "cbolson",
      "profileUrl": "https://uiverse.io/cbolson/ugly-yak-75"
    },
    "license": "MIT",
    "description": "Ugly Yak · checkbox by cbolson",
    "tags": [
      "checkbox",
      "radio",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 150,
    "accentColor": null,
    "html": "<form class=\"my-form\">\n  <div>\n    <input id=\"radio-1\" type=\"radio\" name=\"option\" />\n    <label for=\"radio-1\">Radio 1</label>\n  </div>\n  <div>\n    <input checked=\"\" id=\"radio-2\" type=\"radio\" name=\"option\" />\n    <label for=\"radio-2\">Radio 2</label>\n  </div>\n  <div>\n    <input id=\"radio-3\" type=\"radio\" name=\"option\" />\n    <label for=\"radio-3\">Radio 3</label>\n  </div>\n  <div>\n    <input id=\"radio-4\" type=\"radio\" name=\"option\" />\n    <label for=\"radio-4\">Radio 4</label>\n  </div>\n</form>",
    "css": "/* From Uiverse.io by cbolson  - Tags: radio */\n/* From Uiverse.io by cbolson */\n.my-form {\n  --_clr-primary: #666;\n  --_clr-hover: #f33195;\n  --_clr-checked: #127acf;\n}\n.my-form > div {\n  --_clr-current: var(--_clr-primary);\n\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.my-form > div + div {\n  margin-block-start: 0.5rem;\n}\n.my-form label {\n  cursor: pointer;\n  color: var(--_clr-current);\n  transition: color 150ms ease-in-out;\n}\n/* styled radio */\n.my-form input[type=\"radio\"] {\n  appearance: none;\n  outline: none;\n  width: 1.5rem;\n  height: 1.5rem;\n  aspect-ratio: 1;\n  padding: 0.25rem;\n  background: transparent;\n  border: 1px solid var(--_clr-current);\n  border-radius: 50%;\n  display: grid;\n  place-content: center;\n  cursor: pointer;\n  position: relative;\n}\n.my-form input[type=\"radio\"]::after {\n  content: \"\";\n  position: absolute;\n  inset: 0.25rem;\n  opacity: 0;\n  scale: 0;\n  transition:\n    opacity 150ms ease-in-out,\n    scale 150ms ease-in-out;\n  background-color: var(--_clr-checked);\n  border-radius: inherit;\n}\n\n.my-form label:hover,\n.my-form input[type=\"radio\"]:focus-visible,\n.my-form input[type=\"radio\"]:focus-visible + label,\n.my-form input[type=\"radio\"]:hover,\n.my-form input[type=\"radio\"]:hover + label {\n  --_clr-current: var(--_clr-hover);\n}\n.my-form input[type=\"radio\"]:focus-visible::after,\n.my-form input[type=\"radio\"]:hover::after {\n  opacity: 0.5;\n  scale: 1;\n  background-color: var(--_clr-hover);\n}\n\n.my-form input[type=\"radio\"]:checked + label:not(:hover),\n.my-form input[type=\"radio\"]:checked:not(:hover) {\n  --_clr-current: var(--_clr-checked);\n}\n.my-form input[type=\"radio\"]:checked::after {\n  opacity: 1;\n  scale: 1;\n}"
  },
  {
    "id": "uiverse-javierrocadev_fast-panther-65",
    "title": "Fast Panther",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "Javierrocadev",
      "profileUrl": "https://uiverse.io/Javierrocadev/fast-panther-65"
    },
    "license": "MIT",
    "description": "Fast Panther · card by Javierrocadev",
    "tags": [
      "card",
      "list",
      "blue",
      "hover",
      "dark",
      "hover effect",
      "card hover",
      "mozilla"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div class=\"card\">\n  <span>In this article</span>\n  <div class=\"card__container\">\n   <p class=\"element\">Try it</p> \n   <p class=\"element\">Syntax</p> \n   <p class=\"element active\">Formal definition</p> \n   <p class=\"element\">Formal syntax</p> \n   <p class=\"element\">Examples</p> \n   <p class=\"element\">See also</p> \n  </div>\n</div>",
    "css": "/* From Uiverse.io by Javierrocadev - Tags: list, blue, card, hover, dark, hover effect, card hover, mozilla */\n.card {\n  width: 250px;\n  height: 290px;\n  border-radius: 15px;\n  background: rgb(27, 26, 26);\n  color: white;\n  font-weight: 600;\n  font-size: 1.2em;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-shadow: -5px 5px 1px 0px #004d92;\n}\n\n.element {\n  color: grey;\n  font-size: .8em;\n  padding: 6px 15px;\n  border-left: 2px solid grey;\n  cursor: pointer;\n}\n\n.active {\n  background-color: #004d92;\n  border-left: 2px solid #8cb4ff;\n  color: azure;\n}\n\n.element:hover:not(.active) {\n  color: #3775bb;\n}"
  },
  {
    "id": "uiverse-bastiennnn_wicked-dog-68",
    "title": "Wicked Dog",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "Bastiennnn",
      "profileUrl": "https://uiverse.io/Bastiennnn/wicked-dog-68"
    },
    "license": "MIT",
    "description": "Wicked Dog · card by Bastiennnn",
    "tags": [
      "card",
      "animation",
      "blue",
      "code",
      "hover effect",
      "cool card",
      "cardhover",
      "card hover"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<div class=\"card\">\n  <div class=\"header\">\n    <div class=\"top\">\n      <div class=\"circle\">\n        <span class=\"red circle2\"></span>\n      </div>\n      <div class=\"circle\">\n        <span class=\"yellow circle2\"></span>\n      </div>\n      <div class=\"circle\">\n        <span class=\"green circle2\"></span>\n      </div>\n      <div class=\"title\">\n        <p id=\"title2\">style.css</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"code-container\">\n    <textarea class=\"area\" id=\"code\" name=\"code\" readonly=\"\">\n.card {\n  width: 300px;\n  height: 400px;\n  margin: 0 auto;\n  background-color: #24233b;\n  border-radius: 8px;\n  z-index: 1;\n  box-shadow: 0px 10px 10px rgb(73, 70, 92);\n  transition: 0.5s;\n}\n\n.card:hover {\n  transform: translateY(-7px);\n  box-shadow: 0px 10px 10px black;\n}\n\n.top {\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n}</textarea\n    >\n  </div>\n</div>",
    "css": "/* From Uiverse.io by Bastiennnn  - Tags: animation, blue, card, code, hover effect, cool card, cardhover , card hover */\n.card {\n  width: 300px;\n  height: 400px;\n  margin: 0 auto;\n  background-color: #24233b;\n  border-radius: 8px;\n  z-index: 1;\n  box-shadow: 0px 10px 10px rgb(73, 70, 92);\n  transition: 0.5s;\n}\n\n.card:hover {\n  transform: translateY(-7px);\n  box-shadow: 0px 10px 10px black;\n}\n\n.top {\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n}\n\n.circle {\n  padding: 0 4px;\n}\n\n.circle2 {\n  display: inline-block;\n  align-items: center;\n  width: 10px;\n  height: 10px;\n  padding: 1px;\n  border-radius: 5px;\n}\n\n.red {\n  background-color: #ff605c;\n}\n\n.yellow {\n  background-color: #ffbd44;\n}\n\n.green {\n  background-color: #00ca4e;\n}\n\n.header {\n  margin: 5px;\n  margin-top: 5px;\n  border-radius: 5px;\n}\n\n#title2 {\n  color: white;\n  padding-left: 50px;\n  font-size: 15px;\n}\n\n.code-container {\n  text-align: center;\n}\n#code {\n  width: 270px;\n  height: 350px;\n  resize: none;\n  background-color: rgb(73, 70, 92);\n  border-radius: 5px;\n  border: none;\n  color: white;\n  padding: 10px;\n}\n#code:focus {\n  outline: none !important;\n}"
  },
  {
    "id": "uiverse-ahmedyasserdev_cuddly-gecko-77",
    "title": "Cuddly Gecko",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "ahmedyasserdev",
      "profileUrl": "https://uiverse.io/ahmedyasserdev/cuddly-gecko-77"
    },
    "license": "MIT",
    "description": "Cuddly Gecko · card by ahmedyasserdev",
    "tags": [
      "card",
      "hover effect",
      "cardhover",
      "card hover",
      "3d card",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<div class=\"three-d-card\">\n  <div class=\"card-wrapper\">\n    <div class=\"card-face front\">\n      <div class=\"card-content\">\n        <div class=\"card-title\">3D Card</div>\n        <div class=\"card-description\">Hover over me for a 3D effect!</div>\n      </div>\n    </div>\n    <div class=\"card-face back\">\n      <div class=\"card-content\">\n        <div class=\"card-title\">Back Side</div>\n        <div class=\"card-description\">This is the back of the 3D card.</div>\n      </div>\n    </div>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by ahmedyasserdev  - Tags: card, hover effect, cardhover , card hover, 3d card */\n.three-d-card {\n  position: relative;\n  width: 300px;\n  height: 200px;\n  perspective: 1000px;\n}\n\n.card-wrapper {\n  width: 100%;\n  height: 100%;\n  transform-style: preserve-3d;\n  transition: transform 0.5s;\n}\n\n.three-d-card:hover .card-wrapper {\n  transform: rotateY(180deg);\n}\n\n.card-face {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  backface-visibility: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid #3498db;\n  border-radius: 15px;\n  background-color: #fff;\n}\n\n.card-face.front {\n  transform: rotateY(0deg);\n}\n\n.card-face.back {\n  transform: rotateY(180deg);\n}\n\n.card-content {\n  text-align: center;\n  color: #333;\n}\n\n.card-title {\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n.card-description {\n  font-size: 16px;\n}"
  },
  {
    "id": "uiverse-praashoo7_popular-lionfish-100",
    "title": "Popular Lionfish",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "Praashoo7",
      "profileUrl": "https://uiverse.io/Praashoo7/popular-lionfish-100"
    },
    "license": "MIT",
    "description": "Popular Lionfish · card by Praashoo7",
    "tags": [
      "card",
      "neumorphism",
      "gradients",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 400,
    "accentColor": null,
    "html": "<div class=\"card\">\n    <div class=\"heading\">Join the Open-Source <span>Galaxy</span></div>\n    <div class=\"content\">\n        <div class=\"item item--create\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\">\n                <path fill=\"currentColor\" d=\"M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z\"></path>\n            </svg>\n            <span>Create</span>\n        </div>\n        <div class=\"item item--post\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\">\n                <path fill=\"currentColor\" d=\"M4.99958 12.9998C4.99958 7.91186 7.90222 3.56348 11.9996 1.81787C16.0969 3.56348 18.9996 7.91186 18.9996 12.9998C18.9996 13.8227 18.9236 14.6263 18.779 15.4026L20.7194 17.2352C20.8845 17.3911 20.9238 17.6388 20.815 17.8381L18.3196 22.4132C18.1873 22.6556 17.8836 22.7449 17.6412 22.6127C17.5993 22.5898 17.5608 22.5611 17.5271 22.5273L15.2925 20.2927C15.1049 20.1052 14.8506 19.9998 14.5854 19.9998H9.41379C9.14857 19.9998 8.89422 20.1052 8.70668 20.2927L6.47209 22.5273C6.27683 22.7226 5.96025 22.7226 5.76498 22.5273C5.73122 22.4935 5.70246 22.4551 5.67959 22.4132L3.18412 17.8381C3.07537 17.6388 3.11464 17.3911 3.27975 17.2352L5.22014 15.4026C5.07551 14.6263 4.99958 13.8227 4.99958 12.9998ZM6.47542 19.6955L7.29247 18.8785C7.85508 18.3159 8.61814 17.9998 9.41379 17.9998H14.5854C15.381 17.9998 16.1441 18.3159 16.7067 18.8785L17.5237 19.6955L18.5056 17.8954L17.4058 16.8566C16.9117 16.39 16.6884 15.7044 16.8128 15.0363C16.9366 14.3721 16.9996 13.691 16.9996 12.9998C16.9996 9.13025 15.0045 5.69953 11.9996 4.04021C8.99462 5.69953 6.99958 9.13025 6.99958 12.9998C6.99958 13.691 7.06255 14.3721 7.18631 15.0363C7.31078 15.7044 7.08746 16.39 6.59338 16.8566L5.49353 17.8954L6.47542 19.6955ZM11.9996 12.9998C10.895 12.9998 9.99958 12.1044 9.99958 10.9998C9.99958 9.89525 10.895 8.99982 11.9996 8.99982C13.1041 8.99982 13.9996 9.89525 13.9996 10.9998C13.9996 12.1044 13.1041 12.9998 11.9996 12.9998Z\"></path>\n            </svg>\n            <span>Post</span>\n        </div>\n        <div class=\"item item--inspire\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\">\n                <path fill=\"currentColor\" d=\"M10.6144 17.7956C10.277 18.5682 9.20776 18.5682 8.8704 17.7956L7.99275 15.7854C7.21171 13.9966 5.80589 12.5726 4.0523 11.7942L1.63658 10.7219C.868536 10.381.868537 9.26368 1.63658 8.92276L3.97685 7.88394C5.77553 7.08552 7.20657 5.60881 7.97427 3.75892L8.8633 1.61673C9.19319.821767 10.2916.821765 10.6215 1.61673L11.5105 3.75894C12.2782 5.60881 13.7092 7.08552 15.5079 7.88394L17.8482 8.92276C18.6162 9.26368 18.6162 10.381 17.8482 10.7219L15.4325 11.7942C13.6789 12.5726 12.2731 13.9966 11.492 15.7854L10.6144 17.7956ZM4.53956 9.82234C6.8254 10.837 8.68402 12.5048 9.74238 14.7996 10.8008 12.5048 12.6594 10.837 14.9452 9.82234 12.6321 8.79557 10.7676 7.04647 9.74239 4.71088 8.71719 7.04648 6.85267 8.79557 4.53956 9.82234ZM19.4014 22.6899 19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899ZM18.3745 19.0469 18.937 18.4883 19.4878 19.0469 18.937 19.5898 18.3745 19.0469Z\"></path>\n            </svg>\n            <span>Inspire</span>\n        </div>\n    </div>\n    <button>Code to Infinity!</button>\n</div>",
    "css": "/* From Uiverse.io by Praashoo7 - Tags: neumorphism, card, gradients */\n.card {\n  width: 8em;\n  font-family: Montserrat;\n  height: 8em;\n  background: #ae47c2;\n  box-shadow: inset -25px -25px 0px #a73dbd, 10px 10px 10px rgba(0,0,0,0.2);\n  overflow: hidden;\n  border-radius: 50%;\n  transition: .4s ease-in-out;\n}\n\n.card:before {\n  position: relative;\n  text-align: center;\n  content: \"Code Planet\";\n  color: white;\n  border-radius: 50%;\n  top: 3.4em;\n  left: 0.85em;\n  font-weight: 600;\n}\n\n.card .heading {\n  opacity: 0;\n  transition: .1s ease-in-out;\n}\n\n.card .heading span {\n  transition: .4s ease-in-out;\n}\n\n.card button {\n  opacity: 0;\n  transition: .001s ease-in-out;\n}\n\n.card .heading:hover {\n  background: linear-gradient(to right, #fff 20%,orange 40%,yellow 60%, skyblue 80%, #ffe4f2 100%);\n  background-size: 200% auto;\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  animation: gradient_6346 5s linear infinite;\n  letter-spacing: 1px;\n  scale: 1.01;\n}\n\n@keyframes gradient_6346 {\n  to {\n    background-position: 200% center;\n  }\n}\n\n.card .content {\n  opacity: 0;\n  transition: .1s ease-in-out;\n}\n\n.card:hover {\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  width: 15.4em;\n  height: 22.9em;\n  padding-top: .4em;\n  padding-bottom: 1.5em;\n  background-color: #171717;\n  border-radius: 20px;\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 2px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset;\n  background: linear-gradient(270deg, #ce68d9, #45c6db, #45db79);\n  background-size: 800% 800%;\n  -webkit-animation: AnimationName 3s ease infinite;\n  -moz-animation: AnimationName 3s ease infinite;\n  animation: AnimationName 3s ease infinite;\n  transition: .4s ease-in-out;\n}\n\n.card:hover .heading {\n  opacity: 1;\n  transition: .8s ease-in-out;\n}\n\n.card:hover .content {\n  opacity: 1;\n  transition: .8s ease-in-out;\n}\n\n.card:hover button {\n  opacity: 1;\n  transition: .4s ease-in-out;\n}\n\n.card:hover::before {\n  opacity: 0;\n}\n\n.heading {\n  display: flex;\n  flex-direction: column;\n  color: white;\n  font-size: 1em;\n  text-align: center;\n  padding-bottom: 1em;\n  font-weight: bold;\n  transition: .4s ease-in-out;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 2em;\n}\n\n.item {\n  font-size: 0.8em;\n  margin: 0.5em;\n  padding: 0.8em;\n  display: flex;\n  color: white;\n  align-items: center;\n  justify-content: center;\n  gap: 0.8em;\n  border-radius: 15px;\n  transition: .4s ease-in-out;\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\n}\n\n.item:hover {\n  cursor: pointer;\n  scale: 0.9;\n  box-shadow: none;\n}\n\n.item:active {\n  cursor: pointer;\n  scale: 0.8;\n  box-shadow: inset 2px 5px 10px rgba(0,0,0,0.2);\n}\n\n.item--create {\n  padding-left: 2.5em;\n  padding-right: 2.5em;\n}\n\n.item--post {\n  padding-left: 3em;\n  padding-right: 3em;\n}\n\n.item--inspire {\n  padding-left: 2.5em;\n  padding-right: 2.5em;\n}\n\nbutton {\n  padding: 0.8em;\n  width: 14em;\n  border-radius: 10px;\n  align-self: center;\n  outline: none;\n  font-weight: bold;\n  border: 1px solid white;\n  background-color: transparent;\n  color: white;\n  transition: .4s ease-in-out;\n}\n\nbutton::after {\n  content: \"(Hold Me)\";\n  opacity: 0;\n  position: absolute;\n}\n\nbutton::before {\n  content: \"∞\";\n  font-size: 3.5em;\n  position: absolute;\n  opacity: 0;\n  left: 1.6em;\n  top: -0.33em;\n  transition: .4s ease-in-out;\n}\n\nbutton:hover {\n  cursor: pointer;\n  color: black;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 16px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n\nbutton:hover::after {\n  position: relative;\n  opacity: 1;\n  font-size: 0.7em;\n}\n\n@keyframes AnimationName {\n  0% {\n    background-position: 0% 50%\n  }\n\n  50% {\n    background-position: 100% 50%\n  }\n\n  100% {\n    background-position: 0% 50%\n  }\n}\n\nbutton:active {\n  scale: 1.1;\n  opacity: 1;\n  color: transparent;\n  background: linear-gradient(90deg, #ce68d9, #45c6db, #45db79, #9f45b0, #e54ed0, #ffe4f2);\n  background-size: 800% 800%;\n  -webkit-animation: AnimationName 1s ease infinite;\n  -moz-animation: AnimationName 1s ease infinite;\n  animation: AnimationName 1s ease infinite;\n}\n\nbutton:active::before {\n  color: white;\n  opacity: 1;\n}"
  },
  {
    "id": "uiverse-jeremyssocial_lucky-lionfish-47",
    "title": "Lucky Lionfish",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "jeremyssocial",
      "profileUrl": "https://uiverse.io/jeremyssocial/lucky-lionfish-47"
    },
    "license": "MIT",
    "description": "Lucky Lionfish · card by jeremyssocial",
    "tags": [
      "card",
      "simple",
      "light",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 6000,
    "accentColor": null,
    "html": "<div class=\"card\">\n  <img\n    src=\"https://uiverse.io/build/_assets/astronaut-WTFWARES.png\"\n    alt=\"\"\n    class=\"image\"\n  />\n  <div class=\"heading\">We're on Social Media</div>\n  <div class=\"icons\">\n    <a href=\"https://www.instagram.com/uiverse.io/\" class=\"instagram\">\n      <svg\n        width=\"24\"\n        height=\"25\"\n        viewBox=\"0 0 24 25\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <path\n          d=\"M17.0459 7.5H17.0559M3.0459 12.5C3.0459 9.986 3.0459 8.73 3.3999 7.72C3.71249 6.82657 4.22237 6.01507 4.89167 5.34577C5.56096 4.67647 6.37247 4.16659 7.2659 3.854C8.2759 3.5 9.5329 3.5 12.0459 3.5C14.5599 3.5 15.8159 3.5 16.8269 3.854C17.7202 4.16648 18.5317 4.67621 19.201 5.34533C19.8702 6.01445 20.3802 6.82576 20.6929 7.719C21.0459 8.729 21.0459 9.986 21.0459 12.5C21.0459 15.014 21.0459 16.27 20.6929 17.28C20.3803 18.1734 19.8704 18.9849 19.2011 19.6542C18.5318 20.3235 17.7203 20.8334 16.8269 21.146C15.8169 21.5 14.5599 21.5 12.0469 21.5C9.5329 21.5 8.2759 21.5 7.2659 21.146C6.37268 20.8336 5.56131 20.324 4.89202 19.6551C4.22274 18.9862 3.71274 18.1751 3.3999 17.282C3.0459 16.272 3.0459 15.015 3.0459 12.501V12.5ZM15.8239 11.94C15.9033 12.4387 15.8829 12.9481 15.7641 13.4389C15.6453 13.9296 15.4304 14.392 15.1317 14.7991C14.833 15.2063 14.4566 15.5501 14.0242 15.8108C13.5917 16.0715 13.1119 16.2439 12.6124 16.318C12.1129 16.392 11.6037 16.3663 11.1142 16.2422C10.6248 16.1182 10.1648 15.8983 9.76082 15.5953C9.35688 15.2923 9.01703 14.9123 8.76095 14.4771C8.50486 14.0419 8.33762 13.5602 8.2689 13.06C8.13201 12.0635 8.39375 11.0533 8.99727 10.2487C9.6008 9.44407 10.4974 8.91002 11.4923 8.76252C12.4873 8.61503 13.5002 8.86599 14.3112 9.46091C15.1222 10.0558 15.6658 10.9467 15.8239 11.94Z\"\n          stroke=\"currentColor\"\n          stroke-width=\"2\"\n          stroke-linecap=\"round\"\n          stroke-linejoin=\"round\"\n        ></path>\n      </svg>\n    </a>\n    <a href=\"https://twitter.com/uiverse_io\" class=\"x\">\n      <svg\n        width=\"24\"\n        height=\"24\"\n        viewBox=\"0 0 24 24\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <path\n          d=\"M19.8003 3L13.5823 10.105L19.9583 19.106C20.3923 19.719 20.6083 20.025 20.5983 20.28C20.594 20.3896 20.5657 20.4969 20.5154 20.5943C20.4651 20.6917 20.3941 20.777 20.3073 20.844C20.1043 21 19.7293 21 18.9793 21H17.2903C16.8353 21 16.6083 21 16.4003 20.939C16.2168 20.8847 16.0454 20.7957 15.8953 20.677C15.7253 20.544 15.5943 20.358 15.3313 19.987L10.6813 13.421L4.64033 4.894C4.20733 4.281 3.99033 3.975 4.00033 3.72C4.00478 3.61035 4.03323 3.50302 4.08368 3.40557C4.13414 3.30812 4.20536 3.22292 4.29233 3.156C4.49433 3 4.87033 3 5.62033 3H7.30833C7.76333 3 7.99033 3 8.19733 3.061C8.38119 3.1152 8.55295 3.20414 8.70333 3.323C8.87333 3.457 9.00433 3.642 9.26733 4.013L13.5833 10.105M4.05033 21L10.6823 13.421\"\n          stroke=\"currentColor\"\n          stroke-width=\"2\"\n          stroke-linecap=\"round\"\n          stroke-linejoin=\"round\"\n        ></path>\n      </svg>\n    </a>\n    <a href=\"https://discord.gg/KD8ba2uUpT\" class=\"discord\">\n      <svg\n        width=\"25\"\n        height=\"25\"\n        viewBox=\"0 0 25 25\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <path\n          d=\"M11.5989 6.5003H14.2919C14.3851 6.5003 14.4764 6.47427 14.5555 6.42515C14.6347 6.37603 14.6985 6.30577 14.7399 6.2223L15.4179 4.8543C15.4664 4.75358 15.5488 4.67313 15.6506 4.62706C15.7524 4.58098 15.8673 4.57222 15.9749 4.6023C16.6309 4.7903 18.0049 5.2433 19.1029 6.0003C22.9669 8.8973 22.6069 15.3903 22.5779 16.7603C22.5765 16.8444 22.5541 16.9269 22.5129 17.0003C20.5299 20.5003 17.0899 20.5003 17.0899 20.5003L15.9239 18.0743M15.9239 18.0743C16.4479 17.9163 17.0029 17.7253 17.6029 17.5003M15.9239 18.0743C13.4799 18.8093 11.7219 18.8083 9.27791 18.0733M13.5989 6.5003H10.9109C10.8179 6.50039 10.7266 6.47451 10.6475 6.42557C10.5683 6.37664 10.5044 6.30659 10.4629 6.2233L9.77991 4.8533C9.73146 4.75279 9.64925 4.6725 9.54762 4.62644C9.446 4.58038 9.33142 4.57148 9.22391 4.6013C8.56891 4.7893 7.19291 5.2433 6.09391 6.0003C2.23091 8.8973 2.59091 15.3903 2.61991 16.7603C2.62132 16.8445 2.64366 16.9269 2.68491 17.0003C4.66791 20.5003 8.10791 20.5003 8.10791 20.5003L9.27791 18.0733M9.27791 18.0733C8.75491 17.9163 8.19891 17.7253 7.59891 17.5003M10.6009 12.5003C10.6009 12.7655 10.4956 13.0199 10.308 13.2074C10.1205 13.3949 9.86612 13.5003 9.60091 13.5003C9.33569 13.5003 9.08134 13.3949 8.8938 13.2074C8.70626 13.0199 8.60091 12.7655 8.60091 12.5003C8.60091 12.2351 8.70626 11.9807 8.8938 11.7932C9.08134 11.6057 9.33569 11.5003 9.60091 11.5003C9.86612 11.5003 10.1205 11.6057 10.308 11.7932C10.4956 11.9807 10.6009 12.2351 10.6009 12.5003ZM16.6029 12.5003C16.6029 12.7655 16.4976 13.0199 16.31 13.2074C16.1225 13.3949 15.8681 13.5003 15.6029 13.5003C15.3377 13.5003 15.0833 13.3949 14.8958 13.2074C14.7083 13.0199 14.6029 12.7655 14.6029 12.5003C14.6029 12.2351 14.7083 11.9807 14.8958 11.7932C15.0833 11.6057 15.3377 11.5003 15.6029 11.5003C15.8681 11.5003 16.1225 11.6057 16.31 11.7932C16.4976 11.9807 16.6029 12.2351 16.6029 12.5003Z\"\n          stroke=\"currentColor\"\n          stroke-width=\"2\"\n          stroke-linecap=\"round\"\n          stroke-linejoin=\"round\"\n        ></path>\n      </svg>\n    </a>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by jeremyssocial  - Tags: simple, card, light */\n/* General styles */\n.card {\n  width: 22em;\n  padding: 1.5em;\n  background: #fff;\n  transform: rotate(-1deg);\n  font-family: \"Shadows Into Light\", cursive;\n  box-shadow: 0.5em 0.5em 1em rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: linear-gradient(135deg, #f9f9f9, #e0e0e0 100%);\n  border-radius: 2em;\n  position: relative;\n  overflow: hidden;\n}\n\n.card::before,\n.card::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 150%;\n  height: 150%;\n  background: conic-gradient(from 0deg, #ffeb3b, #ff9100, #e040fb, #ff1493);\n  transform-origin: center;\n  animation: rotate 8s linear infinite;\n  z-index: -1;\n  border-radius: 50%;\n  filter: blur(20px);\n}\n\n.card::after {\n  animation-direction: reverse;\n}\n\n@keyframes rotate {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.image {\n  width: 100%;\n  max-width: 200px;\n  height: auto;\n  border-radius: 1em;\n  margin-bottom: 1em;\n  box-shadow: 0.2em 0.2em 0.4em rgba(0, 0, 0, 0.15);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n.image:hover {\n  transform: scale(1.05);\n  box-shadow: 0.4em 0.4em 0.8em rgba(0, 0, 0, 0.3);\n}\n\n.heading {\n  font-size: 2em;\n  color: #000;\n  text-align: center;\n  margin-bottom: 1.2em;\n  text-shadow: 2px 2px 4px #888;\n  position: relative;\n  z-index: 1;\n  background: linear-gradient(45deg, #f39c12, #e74c3c, #9b59b6, #3498db);\n  -webkit-background-clip: text;\n  color: transparent;\n  animation: hueShift 2s linear infinite;\n}\n\n@keyframes hueShift {\n  0% {\n    filter: hue-rotate(0);\n  }\n  100% {\n    filter: hue-rotate(360deg);\n  }\n}\n\n.heading::after {\n  content: \"\";\n  position: absolute;\n  width: 110%;\n  height: 0.2em;\n  background: linear-gradient(90deg, #ff1493 0%, #ffe600 100%);\n  bottom: -0.4em;\n  left: -5%;\n  transform: rotate(-2deg);\n  box-shadow: 0 0 10px #ffe600;\n}\n\n.icons {\n  display: flex;\n  gap: 1em;\n  padding: 0.75em;\n  border-radius: 0.75em;\n  background: rgba(255, 255, 255, 0.8);\n  box-shadow: inset 0.125em 0.125em 0 #ccc, 0 0 1em rgba(255, 255, 255, 0.5);\n  border: 2px solid #e040fb;\n  transform: skew(-3deg);\n  animation: float 3s ease-in-out infinite;\n}\n\n@keyframes float {\n  0%,\n  100% {\n    transform: translateY(0) skew(-3deg);\n  }\n  50% {\n    transform: translateY(-0.5em) skew(-3deg);\n  }\n}\n\n.icons a {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 3em;\n  height: 3em;\n  border: 2px dashed #000;\n  border-radius: 50%;\n  background-color: #fff;\n  box-shadow: 0.125em 0.125em 0 #ccc, 0.125em 0.125em 0.5em rgba(0, 0, 0, 0.1);\n  transition: background-color 0.3s ease, transform 0.3s ease,\n    box-shadow 0.3s ease;\n  text-decoration: none;\n  color: inherit;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n}\n\n.icons a:hover {\n  background: linear-gradient(45deg, #ff1493, #e040fb);\n  color: #fff;\n  transform: scale(1.2) rotate(-5deg);\n  box-shadow: 0 0 1em rgba(255, 105, 180, 0.5);\n}\n\n.icons a::before,\n.icons a::after {\n  content: \"\";\n  position: absolute;\n  width: 0.5em;\n  height: 0.5em;\n  background-color: #ff1493;\n  border-radius: 50%;\n  animation: bounce 2s infinite alternate;\n}\n\n.icons a::before {\n  top: -0.5em;\n  right: 50%;\n  transform: translateX(50%);\n}\n\n.icons a::after {\n  bottom: -0.5em;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n@keyframes bounce {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(-0.3em);\n  }\n}\n\n/* Additional styles for SVG icons */\n.icons a svg {\n  filter: drop-shadow(0 0 0.5em #e040fb);\n}"
  },
  {
    "id": "uiverse-vinodjangid07_fast-squid-10",
    "title": "Fast Squid",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "vinodjangid07",
      "profileUrl": "https://uiverse.io/vinodjangid07/fast-squid-10"
    },
    "license": "MIT",
    "description": "Fast Squid · card by vinodjangid07",
    "tags": [
      "card",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 5000,
    "accentColor": null,
    "html": "<div class=\"card\">\n    <div class=\"heading\">Join the Open-Source <span>Galaxy</span></div>\n    <div class=\"content\">\n        <div class=\"item item--create\">\n            <svg height=\"24\" width=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z\" fill=\"currentColor\"></path>\n            </svg>\n            <span>Create</span>\n        </div>\n        <div class=\"item item--post\">\n            <svg height=\"24\" width=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M4.99958 12.9998C4.99958 7.91186 7.90222 3.56348 11.9996 1.81787C16.0969 3.56348 18.9996 7.91186 18.9996 12.9998C18.9996 13.8227 18.9236 14.6263 18.779 15.4026L20.7194 17.2352C20.8845 17.3911 20.9238 17.6388 20.815 17.8381L18.3196 22.4132C18.1873 22.6556 17.8836 22.7449 17.6412 22.6127C17.5993 22.5898 17.5608 22.5611 17.5271 22.5273L15.2925 20.2927C15.1049 20.1052 14.8506 19.9998 14.5854 19.9998H9.41379C9.14857 19.9998 8.89422 20.1052 8.70668 20.2927L6.47209 22.5273C6.27683 22.7226 5.96025 22.7226 5.76498 22.5273C5.73122 22.4935 5.70246 22.4551 5.67959 22.4132L3.18412 17.8381C3.07537 17.6388 3.11464 17.3911 3.27975 17.2352L5.22014 15.4026C5.07551 14.6263 4.99958 13.8227 4.99958 12.9998ZM6.47542 19.6955L7.29247 18.8785C7.85508 18.3159 8.61814 17.9998 9.41379 17.9998H14.5854C15.381 17.9998 16.1441 18.3159 16.7067 18.8785L17.5237 19.6955L18.5056 17.8954L17.4058 16.8566C16.9117 16.39 16.6884 15.7044 16.8128 15.0363C16.9366 14.3721 16.9996 13.691 16.9996 12.9998C16.9996 9.13025 15.0045 5.69953 11.9996 4.04021C8.99462 5.69953 6.99958 9.13025 6.99958 12.9998C6.99958 13.691 7.06255 14.3721 7.18631 15.0363C7.31078 15.7044 7.08746 16.39 6.59338 16.8566L5.49353 17.8954L6.47542 19.6955ZM11.9996 12.9998C10.895 12.9998 9.99958 12.1044 9.99958 10.9998C9.99958 9.89525 10.895 8.99982 11.9996 8.99982C13.1041 8.99982 13.9996 9.89525 13.9996 10.9998C13.9996 12.1044 13.1041 12.9998 11.9996 12.9998Z\" fill=\"currentColor\"></path>\n            </svg>\n            <span>Post</span>\n        </div>\n        <div class=\"item item--inspire\">\n            <svg height=\"24\" width=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M10.6144 17.7956C10.277 18.5682 9.20776 18.5682 8.8704 17.7956L7.99275 15.7854C7.21171 13.9966 5.80589 12.5726 4.0523 11.7942L1.63658 10.7219C.868536 10.381.868537 9.26368 1.63658 8.92276L3.97685 7.88394C5.77553 7.08552 7.20657 5.60881 7.97427 3.75892L8.8633 1.61673C9.19319.821767 10.2916.821765 10.6215 1.61673L11.5105 3.75894C12.2782 5.60881 13.7092 7.08552 15.5079 7.88394L17.8482 8.92276C18.6162 9.26368 18.6162 10.381 17.8482 10.7219L15.4325 11.7942C13.6789 12.5726 12.2731 13.9966 11.492 15.7854L10.6144 17.7956ZM4.53956 9.82234C6.8254 10.837 8.68402 12.5048 9.74238 14.7996 10.8008 12.5048 12.6594 10.837 14.9452 9.82234 12.6321 8.79557 10.7676 7.04647 9.74239 4.71088 8.71719 7.04648 6.85267 8.79557 4.53956 9.82234ZM19.4014 22.6899 19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899ZM18.3745 19.0469 18.937 18.4883 19.4878 19.0469 18.937 19.5898 18.3745 19.0469Z\" fill=\"currentColor\"></path>\n            </svg>\n            <span>Inspire</span>\n        </div>\n    </div>\n    <button>Code to Infinity!</button>\n</div>",
    "css": "/* From Uiverse.io by vinodjangid07 - Tags: card */\n.card {\n  position: relative;\n  box-sizing: border-box;\n  background: linear-gradient(-45deg,#6bc5f8, #cf59e6,#6bc5f8, #cf59e6);\n  animation: gradient 5s ease infinite;\n  background-size: 500% 500%;\n  width: 230px;\n  height: 280px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n  padding: 20px;\n  border-radius: 20px;\n}\n\n@keyframes gradient {\n  0% {\n    background-position: 0 50%;\n    box-shadow: 0px 0px 2px #ffffff,\n      0px 0px 5px #ffffff,\n      0px 0px 10px #6bc5f8,\n      0px 0px 50px #6bc5f8;\n  }\n\n  50% {\n    background-position: 100% 50%;\n    box-shadow: 0px 0px 2px #ffffff,\n      0px 0px 5px #ffffff,\n      0px 0px 10px #cf59e6,\n      0px 0px 50px #cf59e6;\n  }\n\n  100% {\n    background-position: 0 50%;\n    box-shadow: 0px 0px 2px #ffffff,\n          0px 0px 5px #ffffff,\n          0px 0px 10px #6bc5f8,\n          0px 0px 50px #6bc5f8;\n  }\n}\n\n.heading {\n  color: white;\n  font-weight: 500;\n  font-size: 0.8em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n}\n\n.heading span {\n  font-size: 2em;\n  font-weight: 800;\n  filter: drop-shadow(0px 0px 10px rgb(255, 255, 255));\n  animation: flickering 2s linear infinite both;\n}\n\n@keyframes flickering {\n  0%,\n  100% {\n    opacity: 1;\n  }\n\n  41.99% {\n    opacity: 1;\n  }\n\n  42% {\n    opacity: 0;\n  }\n\n  43% {\n    opacity: 0;\n  }\n\n  43.01% {\n    opacity: 1;\n  }\n\n  47.99% {\n    opacity: 1;\n  }\n\n  48% {\n    opacity: 0;\n  }\n\n  49% {\n    opacity: 0;\n  }\n\n  49.01% {\n    opacity: 1;\n  }\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  height: fit-content;\n  gap: 10px;\n}\n\n.item {\n  color: white;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  cursor: default;\n}\n\n.item svg {\n  transition-duration: .3s;\n}\n\n.item:hover svg {\n  filter: drop-shadow(0px 0px 10px white);\n  transition-duration: .3s;\n}\n\nbutton {\n  width: 100%;\n  height: 30px;\n  background-color: transparent;\n  border: none;\n  border-radius: 10px;\n  color: white;\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 0px 100px white;\n  transition-duration: .3s;\n}\n\nbutton:hover {\n  letter-spacing: 1.5px;\n  transition-duration: .3s;\n}\n\n.card:before {\n  content: \"∞\";\n  position: absolute;\n  font-size: 4em;\n  width: 100%;\n  height: fit-content;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  bottom: -14.2%;\n  filter: drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.445));\n}"
  },
  {
    "id": "uiverse-alexruix_weak-lionfish-37",
    "title": "Weak Lionfish",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "alexruix",
      "profileUrl": "https://uiverse.io/alexruix/weak-lionfish-37"
    },
    "license": "MIT",
    "description": "Weak Lionfish · card by alexruix",
    "tags": [
      "card",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"card\">\n        <div class=\"card-info\">\n        <div class=\"card-avatar\"></div>\n        <div class=\"card-title\">Steve Jobs</div>\n        <div class=\"card-subtitle\">CEO &amp; Co-Founder</div>\n        </div>\n        <ul class=\"card-social\">\n        <li class=\"card-social__item\">\n        <svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z\"></path>\n      </svg></li>\n      <li class=\"card-social__item\">\n      <svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z\"></path>\n    </svg></li>\n    <li class=\"card-social__item\">\n      <svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z\"></path>\n      </svg>\n    </li>\n  </ul>\n</div>",
    "css": "/* From Uiverse.io by alexruix - Tags: card */\n.card {\n width: 190px;\n height: 254px;\n background: #f5f5f5;\n padding: 2rem 1.5rem;\n transition: box-shadow .3s ease, transform .2s ease;\n}\n\n.card-info {\n display: flex;\n flex-direction: column;\n justify-content: center;\n align-items: center;\n transition: transform .2s ease, opacity .2s ease;\n}\n\n/*Image*/\n.card-avatar {\n --size: 60px;\n background: linear-gradient(to top, #f1e1c1 0%, #fcbc97 100%);\n width: var(--size);\n height: var(--size);\n border-radius: 50%;\n transition: transform .2s ease;\n margin-bottom: 1rem;\n}\n\n\n/*Card footer*/\n.card-social {\n transform: translateY(200%);\n display: flex;\n justify-content: space-around;\n width: 100%;\n opacity: 0;\n transition: transform .2s ease, opacity .2s ease;\n}\n\n.card-social__item {\n list-style: none;\n}\n\n.card-social__item svg {\n display: block;\n height: 18px;\n width: 18px;\n fill: #515F65;\n cursor: pointer;\n transition: fill 0.2s ease ,transform 0.2s ease;\n}\n\n/*Text*/\n.card-title {\n color: #333;\n font-size: 1.5em;\n font-weight: 600;\n line-height: 2rem;\n}\n\n.card-subtitle {\n color: #859ba8;\n font-size: 0.8em;\n}\n\n/*Hover*/\n.card:hover {\n box-shadow: 0 8px 50px #23232333;\n}\n\n.card:hover .card-info {\n transform: translateY(-5%);\n}\n\n.card:hover .card-social {\n transform: translateY(100%);\n opacity: 1;\n}\n\n.card-social__item svg:hover {\n fill: #232323;\n transform: scale(1.1);\n}\n\n.card-avatar:hover {\n transform: scale(1.1);\n}"
  },
  {
    "id": "uiverse-praashoo7_fat-horse-65",
    "title": "Fat Horse",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "Praashoo7",
      "profileUrl": "https://uiverse.io/Praashoo7/fat-horse-65"
    },
    "license": "MIT",
    "description": "Fat Horse · card by Praashoo7",
    "tags": [
      "card",
      "error",
      "card template",
      "card animation",
      "404",
      "not found",
      "404 not found",
      "tv"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"main_wrapper\">\n  <div class=\"main\">\n    <div class=\"antenna\">\n      <div class=\"antenna_shadow\"></div>\n      <div class=\"a1\"></div>\n      <div class=\"a1d\"></div>\n      <div class=\"a2\"></div>\n      <div class=\"a2d\"></div>\n      <div class=\"a_base\"></div>\n    </div>\n    <div class=\"tv\">\n      <div class=\"cruve\">\n        <svg\n          xml:space=\"preserve\"\n          viewBox=\"0 0 189.929 189.929\"\n          xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n          xmlns=\"http://www.w3.org/2000/svg\"\n          version=\"1.1\"\n          class=\"curve_svg\"\n        >\n          <path\n            d=\"M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13\n        C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z\"\n          ></path>\n        </svg>\n      </div>\n      <div class=\"display_div\">\n        <div class=\"screen_out\">\n          <div class=\"screen_out1\">\n            <div class=\"screen\">\n              <span class=\"notfound_text\"> NOT FOUND</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"lines\">\n        <div class=\"line1\"></div>\n        <div class=\"line2\"></div>\n        <div class=\"line3\"></div>\n      </div>\n      <div class=\"buttons_div\">\n        <div class=\"b1\"><div></div></div>\n        <div class=\"b2\"></div>\n        <div class=\"speakers\">\n          <div class=\"g1\">\n            <div class=\"g11\"></div>\n            <div class=\"g12\"></div>\n            <div class=\"g13\"></div>\n          </div>\n          <div class=\"g\"></div>\n          <div class=\"g\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"bottom\">\n      <div class=\"base1\"></div>\n      <div class=\"base2\"></div>\n      <div class=\"base3\"></div>\n    </div>\n  </div>\n  <div class=\"text_404\">\n    <div class=\"text_4041\">4</div>\n    <div class=\"text_4042\">0</div>\n    <div class=\"text_4043\">4</div>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by Praashoo7  - Tags: card, error, card template, card animation, 404, not found, 404 not found, tv */\n/* Design Inspired by one of Stefan Devai's Design on Dribble */\n\n.main_wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30em;\n  height: 30em;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 5em;\n}\n\n.antenna {\n  width: 5em;\n  height: 5em;\n  border-radius: 50%;\n  border: 2px solid black;\n  background-color: #f27405;\n  margin-bottom: -6em;\n  margin-left: 0em;\n  z-index: -1;\n}\n.antenna_shadow {\n  position: absolute;\n  background-color: transparent;\n  width: 50px;\n  height: 56px;\n  margin-left: 1.68em;\n  border-radius: 45%;\n  transform: rotate(140deg);\n  border: 4px solid transparent;\n  box-shadow: inset 0px 16px #a85103, inset 0px 16px 1px 1px #a85103;\n  -moz-box-shadow: inset 0px 16px #a85103, inset 0px 16px 1px 1px #a85103;\n}\n.antenna::after {\n  content: \"\";\n  position: absolute;\n  margin-top: -9.4em;\n  margin-left: 0.4em;\n  transform: rotate(-25deg);\n  width: 1em;\n  height: 0.5em;\n  border-radius: 50%;\n  background-color: #f69e50;\n}\n.antenna::before {\n  content: \"\";\n  position: absolute;\n  margin-top: 0.2em;\n  margin-left: 1.25em;\n  transform: rotate(-20deg);\n  width: 1.5em;\n  height: 0.8em;\n  border-radius: 50%;\n  background-color: #f69e50;\n}\n.a1 {\n  position: relative;\n  top: -102%;\n  left: -130%;\n  width: 12em;\n  height: 5.5em;\n  border-radius: 50px;\n  background-image: linear-gradient(\n    #171717,\n    #171717,\n    #353535,\n    #353535,\n    #171717\n  );\n  transform: rotate(-29deg);\n  clip-path: polygon(50% 0%, 49% 100%, 52% 100%);\n}\n.a1d {\n  position: relative;\n  top: -211%;\n  left: -35%;\n  transform: rotate(45deg);\n  width: 0.5em;\n  height: 0.5em;\n  border-radius: 50%;\n  border: 2px solid black;\n  background-color: #979797;\n  z-index: 99;\n}\n.a2 {\n  position: relative;\n  top: -210%;\n  left: -10%;\n  width: 12em;\n  height: 4em;\n  border-radius: 50px;\n  background-color: #171717;\n  background-image: linear-gradient(\n    #171717,\n    #171717,\n    #353535,\n    #353535,\n    #171717\n  );\n  margin-right: 5em;\n  clip-path: polygon(\n    47% 0,\n    47% 0,\n    34% 34%,\n    54% 25%,\n    32% 100%,\n    29% 96%,\n    49% 32%,\n    30% 38%\n  );\n  transform: rotate(-8deg);\n}\n.a2d {\n  position: relative;\n  top: -294%;\n  left: 94%;\n  width: 0.5em;\n  height: 0.5em;\n  border-radius: 50%;\n  border: 2px solid black;\n  background-color: #979797;\n  z-index: 99;\n}\n\n.notfound_text {\n  background-color: black;\n  padding-left: 0.3em;\n  padding-right: 0.3em;\n  font-size: 0.75em;\n  color: white;\n  letter-spacing: 0;\n  border-radius: 5px;\n  z-index: 10;\n}\n.tv {\n  width: 17em;\n  height: 9em;\n  margin-top: 3em;\n  border-radius: 15px;\n  background-color: #d36604;\n  display: flex;\n  justify-content: center;\n  border: 2px solid #1d0e01;\n  box-shadow: inset 0.2em 0.2em #e69635;\n}\n.tv::after {\n  content: \"\";\n  position: absolute;\n  width: 17em;\n  height: 9em;\n  border-radius: 15px;\n  background: repeating-radial-gradient(#d36604 0 0.0001%, #00000070 0 0.0002%)\n      50% 0/2500px 2500px,\n    repeating-conic-gradient(#d36604 0 0.0001%, #00000070 0 0.0002%) 60% 60%/2500px\n      2500px;\n  background-blend-mode: difference;\n  opacity: 0.09;\n}\n.curve_svg {\n  position: absolute;\n  margin-top: 0.25em;\n  margin-left: -0.25em;\n  height: 12px;\n  width: 12px;\n}\n.display_div {\n  display: flex;\n  align-items: center;\n  align-self: center;\n  justify-content: center;\n  border-radius: 15px;\n  box-shadow: 3.5px 3.5px 0px #e69635;\n}\n.screen_out {\n  width: auto;\n  height: auto;\n\n  border-radius: 10px;\n}\n.screen_out1 {\n  width: 11em;\n  height: 7.75em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n}\n.screen {\n  width: 13em;\n  height: 7.85em;\n  font-family: Montserrat;\n  border: 2px solid #1d0e01;\n  background: repeating-radial-gradient(#000 0 0.0001%, #ffffff 0 0.0002%) 50% 0/2500px\n      2500px,\n    repeating-conic-gradient(#000 0 0.0001%, #ffffff 0 0.0002%) 60% 60%/2500px\n      2500px;\n  background-blend-mode: difference;\n  animation: b 0.2s infinite alternate;\n  border-radius: 10px;\n  z-index: 99;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  color: #252525;\n  letter-spacing: 0.15em;\n  text-align: center;\n}\n@keyframes b {\n  100% {\n    background-position: 50% 0, 60% 50%;\n  }\n}\n\n/* Another Error Screen to Use \n\n.screen {\n  width: 13em;\n  height: 7.85em;\n  position: relative;\n  background: linear-gradient(to right, #002fc6 0%, #002bb2 14.2857142857%, #3a3a3a 14.2857142857%, #303030 28.5714285714%, #ff0afe 28.5714285714%, #f500f4 42.8571428571%, #6c6c6c 42.8571428571%, #626262 57.1428571429%, #0affd9 57.1428571429%, #00f5ce 71.4285714286%, #3a3a3a 71.4285714286%, #303030 85.7142857143%, white 85.7142857143%, #fafafa 100%);\n  border-radius: 10px;\n  border: 2px solid black;\n  z-index: 99;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  color: #252525;\n  letter-spacing: 0.15em;\n  text-align: center;\n  overflow: hidden;\n}\n.screen:before, .screen:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n}\n.screen:before {\n  top: 0;\n  height: 68.4782608696%;\n  background: linear-gradient(to right, white 0%, #fafafa 14.2857142857%, #ffe60a 14.2857142857%, #f5dc00 28.5714285714%, #0affd9 28.5714285714%, #00f5ce 42.8571428571%, #10ea00 42.8571428571%, #0ed600 57.1428571429%, #ff0afe 57.1428571429%, #f500f4 71.4285714286%, #ed0014 71.4285714286%, #d90012 85.7142857143%, #002fc6 85.7142857143%, #002bb2 100%);\n}\n.screen:after {\n  bottom: 0;\n  height: 21.7391304348%;\n  background: linear-gradient(to right, #006c6b 0%, #005857 16.6666666667%, white 16.6666666667%, #fafafa 33.3333333333%, #001b75 33.3333333333%, #001761 50%, #6c6c6c 50%, #626262 66.6666666667%, #929292 66.6666666667%, #888888 83.3333333333%, #3a3a3a 83.3333333333%, #303030 100%);\n}\n\n  */\n\n.lines {\n  display: flex;\n  column-gap: 0.1em;\n  align-self: flex-end;\n}\n.line1,\n.line3 {\n  width: 2px;\n  height: 0.5em;\n  background-color: black;\n  border-radius: 25px 25px 0px 0px;\n  margin-top: 0.5em;\n}\n.line2 {\n  flex-grow: 1;\n  width: 2px;\n  height: 1em;\n  background-color: black;\n  border-radius: 25px 25px 0px 0px;\n}\n\n.buttons_div {\n  width: 4.25em;\n  align-self: center;\n  height: 8em;\n  background-color: #e69635;\n  border: 2px solid #1d0e01;\n  padding: 0.6em;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  row-gap: 0.75em;\n  box-shadow: 3px 3px 0px #e69635;\n}\n.b1 {\n  width: 1.65em;\n  height: 1.65em;\n  border-radius: 50%;\n  background-color: #7f5934;\n  border: 2px solid black;\n  box-shadow: inset 2px 2px 1px #b49577, -2px 0px #513721,\n    -2px 0px 0px 1px black;\n}\n.b1::before {\n  content: \"\";\n  position: absolute;\n  margin-top: 1em;\n  margin-left: 0.5em;\n  transform: rotate(47deg);\n  border-radius: 5px;\n  width: 0.1em;\n  height: 0.4em;\n  background-color: #000000;\n}\n.b1::after {\n  content: \"\";\n  position: absolute;\n  margin-top: 0.9em;\n  margin-left: 0.8em;\n  transform: rotate(47deg);\n  border-radius: 5px;\n  width: 0.1em;\n  height: 0.55em;\n  background-color: #000000;\n}\n.b1 div {\n  content: \"\";\n  position: absolute;\n  margin-top: -0.1em;\n  margin-left: 0.65em;\n  transform: rotate(45deg);\n  width: 0.15em;\n  height: 1.5em;\n  background-color: #000000;\n}\n.b2 {\n  width: 1.65em;\n  height: 1.65em;\n  border-radius: 50%;\n  background-color: #7f5934;\n  border: 2px solid black;\n  box-shadow: inset 2px 2px 1px #b49577, -2px 0px #513721,\n    -2px 0px 0px 1px black;\n}\n.b2::before {\n  content: \"\";\n  position: absolute;\n  margin-top: 1.05em;\n  margin-left: 0.8em;\n  transform: rotate(-45deg);\n  border-radius: 5px;\n  width: 0.15em;\n  height: 0.4em;\n  background-color: #000000;\n}\n.b2::after {\n  content: \"\";\n  position: absolute;\n  margin-top: -0.1em;\n  margin-left: 0.65em;\n  transform: rotate(-45deg);\n  width: 0.15em;\n  height: 1.5em;\n  background-color: #000000;\n}\n.speakers {\n  display: flex;\n  flex-direction: column;\n  row-gap: 0.5em;\n}\n.speakers .g1 {\n  display: flex;\n  column-gap: 0.25em;\n}\n.speakers .g1 .g11,\n.g12,\n.g13 {\n  width: 0.65em;\n  height: 0.65em;\n  border-radius: 50%;\n  background-color: #7f5934;\n  border: 2px solid black;\n  box-shadow: inset 1.25px 1.25px 1px #b49577;\n}\n.speakers .g {\n  width: auto;\n  height: 2px;\n  background-color: #171717;\n}\n\n.bottom {\n  width: 100%;\n  height: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  column-gap: 8.7em;\n}\n.base1 {\n  height: 1em;\n  width: 2em;\n  border: 2px solid #171717;\n  background-color: #4d4d4d;\n  margin-top: -0.15em;\n  z-index: -1;\n}\n.base2 {\n  height: 1em;\n  width: 2em;\n  border: 2px solid #171717;\n  background-color: #4d4d4d;\n  margin-top: -0.15em;\n  z-index: -1;\n}\n.base3 {\n  position: absolute;\n  height: 0.15em;\n  width: 17.5em;\n  background-color: #171717;\n  margin-top: 0.8em;\n}\n\n.text_404 {\n  position: absolute;\n  display: flex;\n  flex-direction: row;\n  column-gap: 6em;\n  z-index: -5;\n  margin-bottom: 2em;\n  align-items: center;\n  justify-content: center;\n  opacity: 0.5;\n  font-family: Montserrat;\n}\n.text_4041 {\n  transform: scaleY(24.5) scaleX(9);\n}\n.text_4042 {\n  transform: scaleY(24.5) scaleX(9);\n}\n.text_4043 {\n  transform: scaleY(24.5) scaleX(9);\n}"
  },
  {
    "id": "uiverse-alexruix_moody-goose-93",
    "title": "Moody Goose",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "alexruix",
      "profileUrl": "https://uiverse.io/alexruix/moody-goose-93"
    },
    "license": "MIT",
    "description": "Moody Goose · card by alexruix",
    "tags": [
      "card",
      "product",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"card\">\n  <div class=\"card-img\"></div>\n  <div class=\"card-info\">\n    <p class=\"text-title\">Product title </p>\n    <p class=\"text-body\">Product description and details</p>\n  </div>\n  <div class=\"card-footer\">\n  <span class=\"text-title\">$499.49</span>\n  <div class=\"card-button\">\n    <svg class=\"svg-icon\" viewBox=\"0 0 20 20\">\n      <path d=\"M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z\"></path>\n      <path d=\"M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z\"></path>\n      <path d=\"M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z\"></path>\n    </svg>\n  </div>\n</div></div>",
    "css": "/* From Uiverse.io by alexruix - Tags: card, product */\n.card {\n width: 190px;\n height: 254px;\n padding: .8em;\n background: #f5f5f5;\n position: relative;\n overflow: visible;\n box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n}\n\n.card-img {\n background-color: #ffcaa6;\n height: 40%;\n width: 100%;\n border-radius: .5rem;\n transition: .3s ease;\n}\n\n.card-info {\n padding-top: 10%;\n}\n\nsvg {\n width: 20px;\n height: 20px;\n}\n\n.card-footer {\n width: 100%;\n display: flex;\n justify-content: space-between;\n align-items: center;\n padding-top: 10px;\n border-top: 1px solid #ddd;\n}\n\n/*Text*/\n.text-title {\n font-weight: 900;\n font-size: 1.2em;\n line-height: 1.5;\n}\n\n.text-body {\n font-size: .9em;\n padding-bottom: 10px;\n}\n\n/*Button*/\n.card-button {\n border: 1px solid #252525;\n display: flex;\n padding: .3em;\n cursor: pointer;\n border-radius: 50px;\n transition: .3s ease-in-out;\n}\n\n/*Hover*/\n.card-img:hover {\n transform: translateY(-25%);\n box-shadow: rgba(226, 196, 63, 0.25) 0px 13px 47px -5px, rgba(180, 71, 71, 0.3) 0px 8px 16px -8px;\n}\n\n.card-button:hover {\n border: 1px solid #ffcaa6;\n background-color: #ffcaa6;\n}"
  },
  {
    "id": "uiverse-andrew-demchenk0_quick-seahorse-69",
    "title": "Quick Seahorse",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "andrew-demchenk0",
      "profileUrl": "https://uiverse.io/andrew-demchenk0/quick-seahorse-69"
    },
    "license": "MIT",
    "description": "Quick Seahorse · card by andrew-demchenk0",
    "tags": [
      "card",
      "product",
      "price",
      "img",
      "description",
      "hover effect",
      "buy now",
      "title"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<div class=\"card\">\n    <div class=\"card-img\"><div class=\"img\"></div></div>\n    <div class=\"card-title\">Product title</div>\n    <div class=\"card-subtitle\">Product description. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>\n    <hr class=\"card-divider\">\n    <div class=\"card-footer\">\n        <div class=\"card-price\"><span>$</span> 123.45</div>\n        <button class=\"card-btn\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z\"></path><path d=\"m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z\"></path><path d=\"m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z\"></path><path d=\"m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z\"></path></svg>\n        </button>\n    </div>\n</div>",
    "css": "/* From Uiverse.io by andrew-demchenk0 - Tags: card, product, price, img, description, hover effect, buy now, title, product card */\n/* before adding the img to the div with the \n\"card-img\" class, remove css styles \n.card-img .img::before and .card-img .img::after,\nthen set the desired styles for .card-img. */\n.card {\n  --font-color: #323232;\n  --font-color-sub: #666;\n  --bg-color: #fff;\n  --main-color: #323232;\n  --main-focus: #2d8cf0;\n  width: 230px;\n  height: 300px;\n  background: var(--bg-color);\n  border: 2px solid var(--main-color);\n  box-shadow: 4px 4px var(--main-color);\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 20px;\n  gap: 10px;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.card:last-child {\n  justify-content: flex-end;\n}\n\n.card-img {\n    /* clear and add new css */\n  transition: all 0.5s;\n  display: flex;\n  justify-content: center;\n}\n\n.card-img .img {\n /* delete */\n  transform: scale(1);\n  position: relative;\n  box-sizing: border-box;\n  width: 100px;\n  height: 100px;\n  border-top-left-radius: 80px 50px;\n  border-top-right-radius: 80px 50px;\n  border: 2px solid black;\n  background-color: #228b22;\n  background-image: linear-gradient(to top,transparent 10px,rgba(0,0,0,0.3) 10px,rgba(0,0,0,0.3) 13px,transparent 13px);\n}\n\n.card-img .img::before {\n /* delete */\n  content: '';\n  position: absolute;\n  width: 65px;\n  height: 110px;\n  margin-left: -32.5px;\n  left: 50%;\n  bottom: -4px;\n  background-repeat: no-repeat;\n  background-image: radial-gradient(ellipse at center,rgba(0,0,0,0.7) 30%,transparent 30%),linear-gradient(to top,transparent 17px,rgba(0,0,0,0.3) 17px,rgba(0,0,0,0.3) 20px,transparent 20px),linear-gradient(to right,black 2px,transparent 2px),linear-gradient(to left,black 2px,transparent 2px),linear-gradient(to top,black 2px,#228b22 2px);\n  background-size: 60% 10%,100% 100%,100% 65%,100% 65%,100% 50%;\n  background-position: center 3px,center bottom,center bottom,center bottom,center bottom;\n  border-radius: 0 0 4px 4px;\n  z-index: 2;\n}\n\n.card-img .img::after {\n /* delete */\n  content: '';\n  position: absolute;\n  box-sizing: border-box;\n  width: 28px;\n  height: 28px;\n  margin-left: -14px;\n  left: 50%;\n  top: -13px;\n  background-repeat: no-repeat;\n  background-image: linear-gradient(80deg,#ffc0cb 45%,transparent 45%),linear-gradient(-175deg,#ffc0cb 45%,transparent 45%),linear-gradient(80deg,rgba(0,0,0,0.2) 51%,rgba(0,0,0,0) 51%),linear-gradient(-175deg,rgba(0,0,0,0.2) 51%,rgba(0,0,0,0) 51%),radial-gradient(circle at center,#ffa6b6 45%,rgba(0,0,0,0.2) 45%,rgba(0,0,0,0.2) 52%,rgba(0,0,0,0) 52%),linear-gradient(45deg,rgba(0,0,0,0) 48%,rgba(0,0,0,0.2) 48%,rgba(0,0,0,0.2) 52%,rgba(0,0,0,0) 52%),linear-gradient(65deg,rgba(0,0,0,0) 48%,rgba(0,0,0,0.2) 48%,rgba(0,0,0,0.2) 52%,rgba(0,0,0,0) 52%),linear-gradient(22deg,rgba(0,0,0,0) 48%,rgba(0,0,0,0.2) 48%,rgba(0,0,0,0.2) 54%,rgba(0,0,0,0) 54%);\n  background-size: 100% 100%,100% 100%,100% 100%,100% 100%,100% 100%,100% 75%,100% 95%,100% 60%;\n  background-position: center center;\n  border-top-left-radius: 120px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 70px;\n  border-top: 2px solid black;\n  border-left: 2px solid black;\n  transform: rotate(45deg);\n  z-index: 1;\n}\n\n.card-title {\n  font-size: 20px;\n  font-weight: 500;\n  text-align: center;\n  color: var(--font-color);\n}\n\n.card-subtitle {\n  font-size: 14px;\n  font-weight: 400;\n  color: var(--font-color-sub);\n}\n\n.card-divider {\n  width: 100%;\n  border: 1px solid var(--main-color);\n  border-radius: 50px;\n}\n\n.card-footer {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.card-price {\n  font-size: 20px;\n  font-weight: 500;\n  color: var(--font-color);\n}\n\n.card-price span {\n  font-size: 20px;\n  font-weight: 500;\n  color: var(--font-color-sub);\n}\n\n.card-btn {\n  height: 35px;\n  background: var(--bg-color);\n  border: 2px solid var(--main-color);\n  border-radius: 5px;\n  padding: 0 15px;\n  transition: all 0.3s;\n}\n\n.card-btn svg {\n  width: 100%;\n  height: 100%;\n  fill: var(--main-color);\n  transition: all 0.3s;\n}\n\n.card-img:hover {\n  transform: translateY(-3px);\n}\n\n.card-btn:hover {\n  border: 2px solid var(--main-focus);\n}\n\n.card-btn:hover svg {\n  fill: var(--main-focus);\n}\n\n.card-btn:active {\n  transform: translateY(3px);\n}"
  },
  {
    "id": "uiverse-andrew-demchenk0_stupid-liger-18",
    "title": "Stupid Liger",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "andrew-demchenk0",
      "profileUrl": "https://uiverse.io/andrew-demchenk0/stupid-liger-18"
    },
    "license": "MIT",
    "description": "Stupid Liger · card by andrew-demchenk0",
    "tags": [
      "card",
      "code",
      "project",
      "project-card",
      "preview",
      "img",
      "links",
      "description"
    ],
    "previewType": "css",
    "durationMs": 400,
    "accentColor": null,
    "html": "<div class=\"card\">\n  <div class=\"card__img\"></div>\n  <div class=\"card__descr-wrapper\">\n    <p class=\"card__title\">\n    Project\n  </p>\n  <p class=\"card__descr\">\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis nemo fugit autem possimus, magnam consequatur sint esse.\n  </p>\n  <div class=\"card__links\">\n    <div>\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 512\" class=\"svg\">&lt;<path d=\"M562.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L405.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C189.5 251.2 196 330 246 380c56.5 56.5 148 56.5 204.5 0L562.8 267.7zM43.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C57 372 57 321 88.5 289.5L200.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C416.5 260.8 410 182 360 132c-56.5-56.5-148-56.5-204.5 0L43.2 244.3z\"></path></svg>\n      <a class=\"link\" href=\"#\">Preview</a>\n    </div>\n    <div>\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 496 512\" class=\"svg\"><path d=\"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z\"></path></svg>\n      <a class=\"link\" href=\"#\">Code</a>\n    </div>\n  </div>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by andrew-demchenk0 - Tags: card, code, project, project-card, preview, img, links, description */\n.card {\n  --font-color: #323232;\n  --bg-color: #e0e0e0;\n  width: 250px;\n  height: 350px;\n  border-radius: 20px;\n  background: var(--bg-color);\n  box-shadow: -9px 9px 18px #5a5a5a,\n              9px -9px 18px #ffffff;\n  display: flex;\n  flex-direction: column;\n  transition: .4s;\n  position: relative;\n}\n\n.card:hover {\n  transform: scale(1.02);\n  box-shadow: 0px 0px 10px 2px #5a5a5a;\n}\n\n.card__img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 20px 20px 0 0;\n  background-color: blueviolet;\n}\n\n.card__descr-wrapper {\n  padding: 15px;\n  display: grid;\n}\n\n.card__title {\n  color: var(--font-color);\n  text-align: center;\n  margin-bottom: 15px;\n  font-weight: 900;\n  font-size: 16px;\n}\n\n.card__descr {\n  color: var(--font-color);\n}\n\n.svg {\n  width: 25px;\n  height: 25px;\n  transform: translateY(25%);\n  fill: var(--font-color);\n}\n\n.card__links {\n  margin-top: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-self: flex-end;\n}\n\n.card__links .link {\n  color: var(--font-color);\n  font-weight: 600;\n  font-size: 15px;\n  text-decoration: none;\n}\n\n.card__links .link:hover {\n  text-decoration: underline;\n}"
  },
  {
    "id": "uiverse-spacious74_new-dog-87",
    "title": "New Dog",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "Spacious74",
      "profileUrl": "https://uiverse.io/Spacious74/new-dog-87"
    },
    "license": "MIT",
    "description": "New Dog · card by Spacious74",
    "tags": [
      "card",
      "flashy",
      "animation",
      "box-shadow",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1500,
    "accentColor": null,
    "html": "<div class=\"card\">\n  <img\n    class=\"image\"\n    alt=\"\"\n    src=\"https://uiverse.io/build/_assets/astronaut-WTFWARES.png\"\n  />\n  <div class=\"heading\">We're on Social Media</div>\n  <div class=\"icons\">\n    <a class=\"instagram\" href=\"https://www.instagram.com/uiverse.io/\">\n      <svg\n        xmlns=\"http://www.w3.org/2000/svg\"\n        fill=\"none\"\n        viewBox=\"0 0 24 25\"\n        height=\"25\"\n        width=\"24\"\n      >\n        <path\n          stroke-linejoin=\"round\"\n          stroke-linecap=\"round\"\n          stroke-width=\"2\"\n          stroke=\"currentColor\"\n          d=\"M17.0459 7.5H17.0559M3.0459 12.5C3.0459 9.986 3.0459 8.73 3.3999 7.72C3.71249 6.82657 4.22237 6.01507 4.89167 5.34577C5.56096 4.67647 6.37247 4.16659 7.2659 3.854C8.2759 3.5 9.5329 3.5 12.0459 3.5C14.5599 3.5 15.8159 3.5 16.8269 3.854C17.7202 4.16648 18.5317 4.67621 19.201 5.34533C19.8702 6.01445 20.3802 6.82576 20.6929 7.719C21.0459 8.729 21.0459 9.986 21.0459 12.5C21.0459 15.014 21.0459 16.27 20.6929 17.28C20.3803 18.1734 19.8704 18.9849 19.2011 19.6542C18.5318 20.3235 17.7203 20.8334 16.8269 21.146C15.8169 21.5 14.5599 21.5 12.0469 21.5C9.5329 21.5 8.2759 21.5 7.2659 21.146C6.37268 20.8336 5.56131 20.324 4.89202 19.6551C4.22274 18.9862 3.71274 18.1751 3.3999 17.282C3.0459 16.272 3.0459 15.015 3.0459 12.501V12.5ZM15.8239 11.94C15.9033 12.4387 15.8829 12.9481 15.7641 13.4389C15.6453 13.9296 15.4304 14.392 15.1317 14.7991C14.833 15.2063 14.4566 15.5501 14.0242 15.8108C13.5917 16.0715 13.1119 16.2439 12.6124 16.318C12.1129 16.392 11.6037 16.3663 11.1142 16.2422C10.6248 16.1182 10.1648 15.8983 9.76082 15.5953C9.35688 15.2923 9.01703 14.9123 8.76095 14.4771C8.50486 14.0419 8.33762 13.5602 8.2689 13.06C8.13201 12.0635 8.39375 11.0533 8.99727 10.2487C9.6008 9.44407 10.4974 8.91002 11.4923 8.76252C12.4873 8.61503 13.5002 8.86599 14.3112 9.46091C15.1222 10.0558 15.6658 10.9467 15.8239 11.94Z\"\n        ></path>\n      </svg>\n    </a>\n    <a class=\"x\" href=\"https://twitter.com/uiverse_io\">\n      <svg\n        xmlns=\"http://www.w3.org/2000/svg\"\n        fill=\"none\"\n        viewBox=\"0 0 24 24\"\n        height=\"24\"\n        width=\"24\"\n      >\n        <path\n          stroke-linejoin=\"round\"\n          stroke-linecap=\"round\"\n          stroke-width=\"2\"\n          stroke=\"currentColor\"\n          d=\"M19.8003 3L13.5823 10.105L19.9583 19.106C20.3923 19.719 20.6083 20.025 20.5983 20.28C20.594 20.3896 20.5657 20.4969 20.5154 20.5943C20.4651 20.6917 20.3941 20.777 20.3073 20.844C20.1043 21 19.7293 21 18.9793 21H17.2903C16.8353 21 16.6083 21 16.4003 20.939C16.2168 20.8847 16.0454 20.7957 15.8953 20.677C15.7253 20.544 15.5943 20.358 15.3313 19.987L10.6813 13.421L4.64033 4.894C4.20733 4.281 3.99033 3.975 4.00033 3.72C4.00478 3.61035 4.03323 3.50302 4.08368 3.40557C4.13414 3.30812 4.20536 3.22292 4.29233 3.156C4.49433 3 4.87033 3 5.62033 3H7.30833C7.76333 3 7.99033 3 8.19733 3.061C8.38119 3.1152 8.55295 3.20414 8.70333 3.323C8.87333 3.457 9.00433 3.642 9.26733 4.013L13.5833 10.105M4.05033 21L10.6823 13.421\"\n        ></path>\n      </svg>\n    </a>\n    <a class=\"discord\" href=\"https://discord.gg/KD8ba2uUpT\">\n      <svg\n        xmlns=\"http://www.w3.org/2000/svg\"\n        fill=\"none\"\n        viewBox=\"0 0 25 25\"\n        height=\"25\"\n        width=\"25\"\n      >\n        <path\n          stroke-linejoin=\"round\"\n          stroke-linecap=\"round\"\n          stroke-width=\"2\"\n          stroke=\"currentColor\"\n          d=\"M11.5989 6.5003H14.2919C14.3851 6.5003 14.4764 6.47427 14.5555 6.42515C14.6347 6.37603 14.6985 6.30577 14.7399 6.2223L15.4179 4.8543C15.4664 4.75358 15.5488 4.67313 15.6506 4.62706C15.7524 4.58098 15.8673 4.57222 15.9749 4.6023C16.6309 4.7903 18.0049 5.2433 19.1029 6.0003C22.9669 8.8973 22.6069 15.3903 22.5779 16.7603C22.5765 16.8444 22.5541 16.9269 22.5129 17.0003C20.5299 20.5003 17.0899 20.5003 17.0899 20.5003L15.9239 18.0743M15.9239 18.0743C16.4479 17.9163 17.0029 17.7253 17.6029 17.5003M15.9239 18.0743C13.4799 18.8093 11.7219 18.8083 9.27791 18.0733M13.5989 6.5003H10.9109C10.8179 6.50039 10.7266 6.47451 10.6475 6.42557C10.5683 6.37664 10.5044 6.30659 10.4629 6.2233L9.77991 4.8533C9.73146 4.75279 9.64925 4.6725 9.54762 4.62644C9.446 4.58038 9.33142 4.57148 9.22391 4.6013C8.56891 4.7893 7.19291 5.2433 6.09391 6.0003C2.23091 8.8973 2.59091 15.3903 2.61991 16.7603C2.62132 16.8445 2.64366 16.9269 2.68491 17.0003C4.66791 20.5003 8.10791 20.5003 8.10791 20.5003L9.27791 18.0733M9.27791 18.0733C8.75491 17.9163 8.19891 17.7253 7.59891 17.5003M10.6009 12.5003C10.6009 12.7655 10.4956 13.0199 10.308 13.2074C10.1205 13.3949 9.86612 13.5003 9.60091 13.5003C9.33569 13.5003 9.08134 13.3949 8.8938 13.2074C8.70626 13.0199 8.60091 12.7655 8.60091 12.5003C8.60091 12.2351 8.70626 11.9807 8.8938 11.7932C9.08134 11.6057 9.33569 11.5003 9.60091 11.5003C9.86612 11.5003 10.1205 11.6057 10.308 11.7932C10.4956 11.9807 10.6009 12.2351 10.6009 12.5003ZM16.6029 12.5003C16.6029 12.7655 16.4976 13.0199 16.31 13.2074C16.1225 13.3949 15.8681 13.5003 15.6029 13.5003C15.3377 13.5003 15.0833 13.3949 14.8958 13.2074C14.7083 13.0199 14.6029 12.7655 14.6029 12.5003C14.6029 12.2351 14.7083 11.9807 14.8958 11.7932C15.0833 11.6057 15.3377 11.5003 15.6029 11.5003C15.8681 11.5003 16.1225 11.6057 16.31 11.7932C16.4976 11.9807 16.6029 12.2351 16.6029 12.5003Z\"\n        ></path>\n      </svg>\n    </a>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by Spacious74  - Tags: flashy, animation, card, box-shadow */\n.card {\n  border: solid 1px #dcfffc;\n  padding: 10px 20px;\n  border-radius: 25px;\n  background-color: #000;\n  color: #f0f8ff;\n  box-shadow: 0 10px 40px -15px #000;\n  background-image: radial-gradient(\n      circle 200px at 10% 80%,\n      #9f06ec46,\n      #00000000\n    ),\n    radial-gradient(circle 200px at 100% 10%, #41fff263, #00000000);\n}\n.image {\n  filter: drop-shadow(0 0 10px #242025);\n  margin: auto;\n  display: block;\n  max-width: 190px;\n  animation: social_image 1.5s ease-in-out infinite alternate;\n}\n@keyframes social_image {\n  0% {\n    transform: translate(0);\n  }\n  100% {\n    transform: translateY(15px);\n    filter: drop-shadow(0 0 10px #f6d7ffb4) drop-shadow(0 0 30px #41fff288);\n  }\n}\n.heading {\n  text-align: center;\n  font-weight: bolder;\n  letter-spacing: 1px;\n  font-size: 1.22rem;\n}\n\n.icons {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 10px 0;\n}\n.icons a {\n  text-decoration: none;\n  color: #fff;\n}"
  },
  {
    "id": "uiverse-jkhuger_spotty-swan-68",
    "title": "Spotty Swan",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "JkHuger",
      "profileUrl": "https://uiverse.io/JkHuger/spotty-swan-68"
    },
    "license": "MIT",
    "description": "Spotty Swan · card by JkHuger",
    "tags": [
      "card",
      "glossy",
      "debitcard",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 3000,
    "accentColor": null,
    "html": "<div class=\"card\">\n<div class=\"card__info\">\n    <div class=\"card__logo\">MasterCard</div>\n    <div class=\"card__chip\">\n        <svg class=\"card__chip-lines\" role=\"img\" width=\"20px\" height=\"20px\" viewBox=\"0 0 100 100\" aria-label=\"Chip\">\n            <g opacity=\"0.8\">\n                <polyline points=\"0,50 35,50\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\"></polyline>\n                <polyline points=\"0,20 20,20 35,35\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\"></polyline>\n                <polyline points=\"50,0 50,35\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\"></polyline>\n                <polyline points=\"65,35 80,20 100,20\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\"></polyline>\n                <polyline points=\"100,50 65,50\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\"></polyline>\n                <polyline points=\"35,35 65,35 65,65 35,65 35,35\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\"></polyline>\n                <polyline points=\"0,80 20,80 35,65\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\"></polyline>\n                <polyline points=\"50,100 50,65\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\"></polyline>\n                <polyline points=\"65,65 80,80 100,80\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\"></polyline>\n            </g>\n        </svg>\n        <div class=\"card__chip-texture\"></div>\n    </div>\n      <div class=\"card__type\">debit</div>\n      <div class=\"card__number\">\n        <span class=\"card__digit-group\">0123</span>\n        <span class=\"card__digit-group\">4567</span>\n        <span class=\"card__digit-group\">8901</span>\n        <span class=\"card__digit-group\">2345</span>\n    </div>\n      <div class=\"card__valid-thru\" aria-label=\"Valid thru\">Valid<br>thru</div>\n      <div class=\"card__exp-date\"><time datetime=\"2038-01\">01/38</time></div>\n      <div class=\"card__name\" aria-label=\"Dee Stroyer\">Jk Huger</div>\n      <div class=\"card__vendor\" role=\"img\" aria-labelledby=\"card-vendor\">\n      <span id=\"card-vendor\" class=\"card__vendor-sr\">Mastercard</span>\n    </div>\n<div class=\"card__texture\"></div>\n        </div>\n            </div>",
    "css": "/* From Uiverse.io by JkHuger - Tags: card, glossy, debitcard */\n.card,\n.card__chip {\n  overflow: hidden;\n  position: relative;\n}\n\n.card,\n.card__chip-texture,\n.card__texture {\n  animation-duration: 3s;\n  animation-timing-function: ease-in-out;\n  animation-iteration-count: infinite;\n}\n\n.card {\n  animation-name: rotate_500;\n  background-color: var(--primary);\n  background-image: radial-gradient(circle at 100% 0%,hsla(0,0%,100%,0.08) 29.5%,hsla(0,0%,100%,0) 30%),\n        radial-gradient(circle at 100% 0%,hsla(0,0%,100%,0.08) 39.5%,hsla(0,0%,100%,0) 40%),\n        radial-gradient(circle at 100% 0%,hsla(0,0%,100%,0.08) 49.5%,hsla(0,0%,100%,0) 50%);\n  border-radius: 0.5em;\n  box-shadow: 0 0 0 hsl(0,0%,80%),\n        0 0 0 hsl(0,0%,100%),\n        -0.2rem 0 0.75rem 0 hsla(0,0%,0%,0.3);\n  color: hsl(0,0%,100%);\n  width: 10.3em;\n  height: 6.8em;\n  transform: translate3d(0,0,0);\n}\n\n.card__info,\n.card__chip-texture,\n.card__texture {\n  position: absolute;\n}\n\n.card__chip-texture,\n.card__texture {\n  animation-name: texture;\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 100%;\n}\n\n.card__info {\n  font: 0.75em/1 \"DM Sans\", sans-serif;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  padding: 0.75rem;\n  inset: 0;\n}\n\n.card__logo,\n.card__number {\n  width: 100%;\n}\n\n.card__logo {\n  font-weight: bold;\n  font-style: italic;\n}\n\n.card__chip {\n  background-image: linear-gradient(hsl(0,0%,70%),hsl(0,0%,80%));\n  border-radius: 0.2rem;\n  box-shadow: 0 0 0 0.05rem hsla(0,0%,0%,0.5) inset;\n  width: 1.25rem;\n  height: 1.25rem;\n  transform: translate3d(0,0,0);\n}\n\n.card__chip-lines {\n  width: 100%;\n  height: auto;\n}\n\n.card__chip-texture {\n  background-image: linear-gradient(-80deg,hsla(0,0%,100%,0),hsla(0,0%,100%,0.6) 48% 52%,hsla(0,0%,100%,0));\n}\n\n.card__type {\n  align-self: flex-end;\n  margin-left: auto;\n}\n\n.card__digit-group,\n.card__exp-date,\n.card__name {\n  background: linear-gradient(hsl(0,0%,100%),hsl(0,0%,85%) 15% 55%,hsl(0,0%,70%) 70%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-family: \"Courier Prime\", monospace;\n  filter: drop-shadow(0 0.05rem hsla(0,0%,0%,0.3));\n}\n\n.card__number {\n  font-size: 0.8rem;\n  display: flex;\n  justify-content: space-between;\n}\n\n.card__valid-thru,\n.card__name {\n  text-transform: uppercase;\n}\n\n.card__valid-thru,\n.card__exp-date {\n  margin-bottom: 0.25rem;\n  width: 50%;\n}\n\n.card__valid-thru {\n  font-size: 0.3rem;\n  padding-right: 0.25rem;\n  text-align: right;\n}\n\n.card__exp-date,\n.card__name {\n  font-size: 0.6rem;\n}\n\n.card__exp-date {\n  padding-left: 0.25rem;\n}\n\n.card__name {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 6.25rem;\n}\n\n.card__vendor,\n.card__vendor:before,\n.card__vendor:after {\n  position: absolute;\n}\n\n.card__vendor {\n  right: 0.375rem;\n  bottom: 0.375rem;\n  width: 2.55rem;\n  height: 1.5rem;\n}\n\n.card__vendor:before,\n.card__vendor:after {\n  border-radius: 50%;\n  content: \"\";\n  display: block;\n  top: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n\n.card__vendor:before {\n  background-color: #e71d1a;\n  left: 0;\n}\n\n.card__vendor:after {\n  background-color: #fa5e03;\n  box-shadow: -1.05rem 0 0 #f59d1a inset;\n  right: 0;\n}\n\n.card__vendor-sr {\n  clip: rect(1px,1px,1px,1px);\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n}\n\n.card__texture {\n  animation-name: texture;\n  background-image: linear-gradient(-80deg,hsla(0,0%,100%,0.3) 25%,hsla(0,0%,100%,0) 45%);\n}\n \n/* Dark theme */\n@media (prefers-color-scheme: dark) {\n  :root {\n    --bg: hsl(var(--hue),10%,30%);\n    --fg: hsl(var(--hue),10%,90%);\n  }\n}\n\n/* Animation */\n@keyframes rotate_500 {\n  from,\n    to {\n    animation-timing-function: ease-in;\n    box-shadow: 0 0 0 hsl(0,0%,80%),\n            0.1rem 0 0 hsl(0,0%,100%),\n            -0.2rem 0 0.75rem 0 hsla(0,0%,0%,0.3);\n    transform: rotateY(-10deg);\n  }\n\n  25%,\n    75% {\n    animation-timing-function: ease-out;\n    box-shadow: 0 0 0 hsl(0,0%,80%),\n            0 0 0 hsl(0,0%,100%),\n            -0.25rem -0.05rem 1rem 0.15rem hsla(0,0%,0%,0.3);\n    transform: rotateY(0deg);\n  }\n\n  50% {\n    animation-timing-function: ease-in;\n    box-shadow: -0.1rem 0 0 hsl(0,0%,80%),\n            0 0 0 hsl(0,0%,100%),\n            -0.3rem -0.1rem 1.5rem 0.3rem hsla(0,0%,0%,0.3);\n    transform: rotateY(10deg);\n  }\n}\n\n@keyframes texture {\n  from,\n    to {\n    transform: translate3d(0,0,0);\n  }\n\n  50% {\n    transform: translate3d(-50%,0,0);\n  }\n}"
  },
  {
    "id": "uiverse-andrew-demchenk0_quick-impala-15",
    "title": "Quick Impala",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "andrew-demchenk0",
      "profileUrl": "https://uiverse.io/andrew-demchenk0/quick-impala-15"
    },
    "license": "MIT",
    "description": "Quick Impala · card by andrew-demchenk0",
    "tags": [
      "card",
      "animation",
      "3d",
      "border",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"card\">\n  <div class=\"card__content\">your content here ↓<div>\n</div></div></div>",
    "css": "/* From Uiverse.io by andrew-demchenk0 - Tags: animation, 3d, card, border */\n.card {\n  width: 190px;\n  height: 254px;\n  background: lightgrey;\n  position: relative;\n  transform: skewY(-10deg);\n  border: 5px solid #6d74e3;\n  box-sizing: border-box;\n  transition: all 0.3s;\n}\n\n.card::before {\n  content: '';\n  width: 10px;\n  height: 254px;\n  background: #6d74e3;\n  position: absolute;\n  top: -5px;\n  left: -14.7px;\n  transform-origin: right;\n  transform: skewY(45deg);\n  border: none;\n  transition: all 0.5s;\n}\n\n.card::after {\n  content: '';\n  height: 10px;\n  width: 190px;\n  background: #6d74e3;\n  position: absolute;\n  top: -14.7px;\n  left: -5px;\n  transform-origin: bottom;\n  transform: skewX(45deg);\n  border: none;\n  transition: all 0.5s;\n}\n\n.card:hover {\n  transform: skewY(0deg);\n}\n\n.card:hover::before {\n  width: 0px;\n  height: 249px;\n  left: 0;\n  top: 0.1px;\n}\n\n.card:hover::after {\n  width: 184px;\n  height: 0px;\n  left: 0.1px;\n  top: 0;\n}\n\n.card__content {\n  padding: 10px;\n  color: #323232;\n}"
  },
  {
    "id": "uiverse-souravbandyopadhyay_giant-squid-24",
    "title": "Giant Squid",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "SouravBandyopadhyay",
      "profileUrl": "https://uiverse.io/SouravBandyopadhyay/giant-squid-24"
    },
    "license": "MIT",
    "description": "Giant Squid · card by SouravBandyopadhyay",
    "tags": [
      "card",
      "transition",
      "business card",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 350,
    "accentColor": null,
    "html": "<div class=\"card\">\n      <p class=\"card-title\">Product Name</p>\n      <p class=\"small-desc\">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat\n        veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio\n        officia deleniti. Expedita iste et illum, quaerat pariatur consequatur\n        eum nihil itaque!\n      </p>\n      <div class=\"go-corner\">\n        <div class=\"go-arrow\">→</div>\n      </div>\n    </div>",
    "css": "/* From Uiverse.io by SouravBandyopadhyay - Tags: card, transition, business card */\n.card-title {\n  color: #262626;\n  font-size: 1.5em;\n  line-height: normal;\n  font-weight: 700;\n  margin-bottom: 0.5em;\n}\n\n.small-desc {\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.5em;\n  color: #452c2c;\n}\n\n.small-desc {\n  font-size: 1em;\n}\n\n.go-corner {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  width: 2em;\n  height: 2em;\n  overflow: hidden;\n  top: 0;\n  right: 0;\n  background: linear-gradient(135deg, #6293c8, #384c6c);\n  border-radius: 0 4px 0 32px;\n}\n\n.go-arrow {\n  margin-top: -4px;\n  margin-right: -4px;\n  color: white;\n  font-family: courier, sans;\n}\n\n.card {\n  display: block;\n  position: relative;\n  max-width: 300px;\n  max-height: 320px;\n  background-color: #f2f8f9;\n  border-radius: 10px;\n  padding: 2em 1.2em;\n  margin: 12px;\n  text-decoration: none;\n  z-index: 0;\n  overflow: hidden;\n  background: linear-gradient(to bottom, #c3e6ec, #a7d1d9);\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.card:before {\n  content: '';\n  position: absolute;\n  z-index: -1;\n  top: -16px;\n  right: -16px;\n  background: linear-gradient(135deg, #364a60, #384c6c);\n  height: 32px;\n  width: 32px;\n  border-radius: 32px;\n  transform: scale(1);\n  transform-origin: 50% 50%;\n  transition: transform 0.35s ease-out;\n}\n\n.card:hover:before {\n  transform: scale(28);\n}\n\n.card:hover .small-desc {\n  transition: all 0.5s ease-out;\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.card:hover .card-title {\n  transition: all 0.5s ease-out;\n  color: #ffffff;\n}"
  },
  {
    "id": "uiverse-devkatyall_spicy-mule-43",
    "title": "Spicy Mule",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "devkatyall",
      "profileUrl": "https://uiverse.io/devkatyall/spicy-mule-43"
    },
    "license": "MIT",
    "description": "Spicy Mule · card by devkatyall",
    "tags": [
      "card",
      "text animation",
      "text",
      "shining text",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 5000,
    "accentColor": null,
    "html": "<div class=\"shine\">UIVERSE</div>",
    "css": "/* From Uiverse.io by devkatyall  - Tags: card, text animation, text, shining text */\n.shine {\n  font-size: 2em;\n  font-weight: 900;\n  color: rgba(255, 255, 255, 0.3);\n  background: #222 -webkit-gradient(\n      linear,\n      left top,\n      right top,\n      from(#222),\n      to(#222),\n      color-stop(0.5, #fff)\n    ) 0 0 no-repeat;\n  background-image: -webkit-linear-gradient(\n    -40deg,\n    transparent 0%,\n    transparent 40%,\n    #fff 50%,\n    transparent 60%,\n    transparent 100%\n  );\n  -webkit-background-clip: text;\n  -webkit-background-size: 50px;\n  -webkit-animation: zezzz;\n  -webkit-animation-duration: 5s;\n  -webkit-animation-iteration-count: infinite;\n}\n@-webkit-keyframes zezzz {\n  0%,\n  10% {\n    background-position: -200px;\n  }\n  20% {\n    background-position: top left;\n  }\n  100% {\n    background-position: 200px;\n  }\n}"
  },
  {
    "id": "uiverse-sachinkumar666_spicy-tiger-75",
    "title": "Spicy Tiger",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "SachinKumar666",
      "profileUrl": "https://uiverse.io/SachinKumar666/spicy-tiger-75"
    },
    "license": "MIT",
    "description": "Spicy Tiger · card by SachinKumar666",
    "tags": [
      "card",
      "simple",
      "material design",
      "animation",
      "shadow",
      "glow",
      "code",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"card\"></div>",
    "css": "/* From Uiverse.io by SachinKumar666  - Tags: simple, material design, animation, card, shadow, glow, code */\n.card {\n  padding: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 190px;\n  height: 254px;\n  background: rgb(255, 255, 255);\n  border-radius: 1rem;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n  transition: all ease-in-out 0.3s;\n}\n\n.card:hover {\n  background-color: #fdfdfd;\n  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,\n    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,\n    rgba(0, 0, 0, 0.09) 0px 32px 16px;\n}"
  },
  {
    "id": "uiverse-mnikita7767_wicked-parrot-99",
    "title": "Wicked Parrot",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "mnikita7767",
      "profileUrl": "https://uiverse.io/mnikita7767/wicked-parrot-99"
    },
    "license": "MIT",
    "description": "Wicked Parrot · card by mnikita7767",
    "tags": [
      "card",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div class=\"container\">\n  <div class=\"container-inner\">\n    <div class=\"content\">\n      <p>Do you want to Continue?</p>\n    </div>\n    <div class=\"buttons\">\n      <button class=\"confirm\" type=\"button\">Confirm</button>\n      <button class=\"cancel\" type=\"button\">Cancel</button>\n    </div>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by mnikita7767  - Tags: card */\n.container-inner {\n  background: #a4363e;\n  box-sizing: border-box;\n  border-radius: 30px;\n  box-shadow: 5px 6px 0px -2px #620d15, -6px 5px 0px -2px #620d15,\n    0px -2px 0px 2px #ee9191, 0px 10px 0px 0px #610c14,\n    0px -10px 0px 1px #e66565, 0px 0px 180px 90px #0d2f66;\n  padding: 20px;\n  width: 310px;\n}\n.container-inner .content {\n  background: radial-gradient(#fffbf3, #ffe19e);\n  border-radius: 20px 18px 20px 18px;\n  box-shadow: 0px 0px 0px 6px #5e1e21, 0px 0px 8px 6px #84222b,\n    inset 0px 0px 15px 0px #614506, 6px 6px 1px 1px #e66565,\n    -6px 6px 1px 1px #e66565;\n  font-family: \"Skranji\", cursive;\n  padding: 25px;\n}\n.container-inner .content p {\n  color: #461417;\n  font-size: 30px;\n  font-weight: 600;\n  text-align: center;\n}\n.buttons {\n  margin-top: 40px;\n  display: flex;\n  justify-content: center;\n  gap: 40px;\n}\nbutton {\n  border-radius: 20px;\n  border: 2px solid #49181e;\n  color: #fff;\n  cursor: pointer;\n  font-size: 20px;\n  padding-inline: 20px;\n  padding-block: 15px;\n  text-shadow: 1px 2px 3px #000000;\n}\n.confirm {\n  background: linear-gradient(#ced869, #536d1b);\n  box-shadow: 0px 0px 0px 4px #7e1522, 0px 2px 0px 3px #e66565;\n}\n.confirm:hover {\n  box-shadow: 0px 0px 0px 4px #7e1522, 0px 2px 0px 3px #e66565,\n    inset 2px 2px 10px 3px #4e6217;\n}\n.cancel {\n  background: linear-gradient(#ea7079, #891a1a);\n  box-shadow: 0px 0px 0px 4px #7e1522, 0px 2px 0px 3px #e66565;\n}\n.cancel:hover {\n  box-shadow: 0px 0px 0px 4px #7e1522, 0px 2px 0px 3px #e66565,\n    inset 2px 2px 10px 3px #822828;\n}"
  },
  {
    "id": "uiverse-abrahamcalsin_grumpy-ape-40",
    "title": "Grumpy Ape",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "abrahamcalsin",
      "profileUrl": "https://uiverse.io/abrahamcalsin/grumpy-ape-40"
    },
    "license": "MIT",
    "description": "Grumpy Ape · card by abrahamcalsin",
    "tags": [
      "card",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"card-client\">\n    <div class=\"user-picture\">\n        <svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z\"></path>\n        </svg>\n    </div>\n    <p class=\"name-client\"> Jhon Doe\n        <span>CEO of WritBook\n        </span>\n    </p>\n    <div class=\"social-media\">\n        <a href=\"#\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n                <path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path>\n            </svg>\n            <span class=\"tooltip-social\">Twitter</span>\n        </a>\n        <a href=\"#\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\">\n                <path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path>\n            </svg>\n            <span class=\"tooltip-social\">Instagram</span>\n        </a>\n        <a href=\"#\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n                <path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path>\n            </svg>\n            <span class=\"tooltip-social\">Facebook</span>\n        </a>\n        <a href=\"#\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\">\n                <path d=\"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z\"></path>\n            </svg>\n            <span class=\"tooltip-social\">LinkedIn</span>\n        </a>\n    </div>\n</div>",
    "css": "/* From Uiverse.io by abrahamcalsin - Tags: card */\n.card-client {\n  background: #2cb5a0;\n  width: 13rem;\n  padding-top: 25px;\n  padding-bottom: 25px;\n  padding-left: 20px;\n  padding-right: 20px;\n  border: 4px solid #7cdacc;\n  box-shadow: 0 6px 10px rgba(207, 212, 222, 1);\n  border-radius: 10px;\n  text-align: center;\n  color: #fff;\n  font-family: \"Poppins\", sans-serif;\n  transition: all 0.3s ease;\n}\n\n.card-client:hover {\n  transform: translateY(-10px);\n}\n\n.user-picture {\n  overflow: hidden;\n  object-fit: cover;\n  width: 5rem;\n  height: 5rem;\n  border: 4px solid #7cdacc;\n  border-radius: 999px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n}\n\n.user-picture svg {\n  width: 2.5rem;\n  fill: currentColor;\n}\n\n.name-client {\n  margin: 0;\n  margin-top: 20px;\n  font-weight: 600;\n  font-size: 18px;\n}\n\n.name-client span {\n  display: block;\n  font-weight: 200;\n  font-size: 16px;\n}\n\n.social-media:before {\n  content: \" \";\n  display: block;\n  width: 100%;\n  height: 2px;\n  margin: 20px 0;\n  background: #7cdacc;\n}\n\n.social-media a {\n  position: relative;\n  margin-right: 15px;\n  text-decoration: none;\n  color: inherit;\n}\n\n.social-media a:last-child {\n  margin-right: 0;\n}\n\n.social-media a svg {\n  width: 1.1rem;\n  fill: currentColor;\n}\n\n/*-- Tooltip Social Media --*/\n.tooltip-social {\n  background: #262626;\n  display: block;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  padding: 0.5rem 0.4rem;\n  border-radius: 5px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  opacity: 0;\n  pointer-events: none;\n  transform: translate(-50%, -90%);\n  transition: all 0.2s ease;\n  z-index: 1;\n}\n\n.tooltip-social:after {\n  content: \" \";\n  position: absolute;\n  bottom: 1px;\n  left: 50%;\n  border: solid;\n  border-width: 10px 10px 0 10px;\n  border-color: transparent;\n  transform: translate(-50%, 100%);\n}\n\n.social-media a .tooltip-social:after {\n  border-top-color: #262626;\n}\n\n.social-media a:hover .tooltip-social {\n  opacity: 1;\n  transform: translate(-50%, -130%);\n}"
  },
  {
    "id": "uiverse-vinodjangid07_ordinary-crab-91",
    "title": "Ordinary Crab",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "vinodjangid07  - Website: https://www.patreon.com/posts/animated-gender-78055964?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=join_link - Name: Online Tutorials",
      "profileUrl": "https://uiverse.io/vinodjangid07  - Website: https://www.patreon.com/posts/animated-gender-78055964?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=join_link - Name: Online Tutorials/ordinary-crab-91"
    },
    "license": "MIT",
    "description": "Ordinary Crab · card by vinodjangid07  - Website: https://www.patreon.com/posts/animated-gender-78055964?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=join_link - Name: Online Tutorials",
    "tags": [
      "card",
      "form",
      "hover",
      "radio",
      "gender",
      "buttons"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"gender-card\">\n  <div class=\"large-svg-container\">\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      fill=\"none\"\n      viewBox=\"0 0 50 90\"\n      class=\"largemalesvg\"\n      height=\"90\"\n      width=\"50\"\n    >\n      <circle stroke-width=\"6\" stroke=\"#76E3FE\" r=\"22\" cy=\"25\" cx=\"25\"></circle>\n      <path\n        stroke-linecap=\"round\"\n        stroke-width=\"6\"\n        stroke=\"#76E3FE\"\n        d=\"M25 47L25 87\"\n      ></path>\n      <path\n        stroke-linecap=\"round\"\n        stroke-width=\"6\"\n        stroke=\"#76E3FE\"\n        d=\"M25 86.6958L38.6958 73\"\n      ></path>\n      <path\n        stroke-linecap=\"round\"\n        stroke-width=\"6\"\n        stroke=\"#76E3FE\"\n        d=\"M11 73L24.6958 86.6958\"\n      ></path>\n    </svg>\n\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      fill=\"none\"\n      viewBox=\"0 0 50 90\"\n      class=\"largefemalesvg\"\n      height=\"90\"\n      width=\"50\"\n    >\n      <circle stroke-width=\"6\" stroke=\"#F57CB3\" r=\"22\" cy=\"25\" cx=\"25\"></circle>\n      <path\n        stroke-linecap=\"round\"\n        stroke-width=\"6\"\n        stroke=\"#F57CB3\"\n        d=\"M25 47L25 87\"\n      ></path>\n      <path\n        stroke-linecap=\"round\"\n        stroke-width=\"6\"\n        stroke=\"#F57CB3\"\n        d=\"M12 73H38\"\n      ></path>\n    </svg>\n  </div>\n  <form action=\"#\">\n    <p class=\"heading\">What's your gender?</p>\n    <div class=\"radio-wrapper\">\n      <input\n        class=\"gender-radio-buttons\"\n        id=\"male\"\n        value=\"male\"\n        name=\"gender\"\n        type=\"radio\"\n      />\n      <label class=\"genderlabel malebutton\" for=\"male\">\n        <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          fill=\"none\"\n          viewBox=\"0 0 50 90\"\n          class=\"smallsvg malesmallsvg\"\n        >\n          <circle\n            stroke-width=\"6\"\n            stroke=\"#76E3FE\"\n            r=\"22\"\n            cy=\"25\"\n            cx=\"25\"\n          ></circle>\n          <path\n            stroke-linecap=\"round\"\n            stroke-width=\"6\"\n            stroke=\"#76E3FE\"\n            d=\"M25 47L25 87\"\n          ></path>\n          <path\n            stroke-linecap=\"round\"\n            stroke-width=\"6\"\n            stroke=\"#76E3FE\"\n            d=\"M25 86.6958L38.6958 73\"\n          ></path>\n          <path\n            stroke-linecap=\"round\"\n            stroke-width=\"6\"\n            stroke=\"#76E3FE\"\n            d=\"M11 73L24.6958 86.6958\"\n          ></path></svg\n        >Male\n      </label>\n\n      <input\n        class=\"gender-radio-buttons\"\n        id=\"female\"\n        value=\"female\"\n        name=\"gender\"\n        type=\"radio\"\n      />\n      <label class=\"genderlabel femalebutton\" for=\"female\">\n        <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          fill=\"none\"\n          viewBox=\"0 0 50 90\"\n          class=\"smallsvg\"\n        >\n          <circle\n            stroke-width=\"6\"\n            stroke=\"#F57CB3\"\n            r=\"22\"\n            cy=\"25\"\n            cx=\"25\"\n          ></circle>\n          <path\n            stroke-linecap=\"round\"\n            stroke-width=\"6\"\n            stroke=\"#F57CB3\"\n            d=\"M25 47L25 87\"\n          ></path>\n          <path\n            stroke-linecap=\"round\"\n            stroke-width=\"6\"\n            stroke=\"#F57CB3\"\n            d=\"M12 73H38\"\n          ></path></svg\n        >Female\n      </label>\n\n      <input\n        class=\"gender-radio-buttons\"\n        id=\"other\"\n        value=\"other\"\n        name=\"gender\"\n        type=\"radio\"\n      />\n      <label class=\"genderlabel otherbutton\" for=\"other\">\n        <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          fill=\"none\"\n          viewBox=\"0 0 78 75\"\n          class=\"smallsvg other-gender\"\n        >\n          <path\n            stroke-linecap=\"round\"\n            stroke-width=\"6\"\n            stroke=\"#9B4AED\"\n            d=\"M73.4657 16.6983L48.2159 16.6984L19.9816 58.0001L2.99911 58\"\n          ></path>\n          <path\n            stroke-linecap=\"round\"\n            stroke-width=\"6\"\n            stroke=\"#9B4AED\"\n            d=\"M73.1641 16.698L59.4705 2.99992\"\n          ></path>\n          <path\n            stroke-linecap=\"round\"\n            stroke-width=\"6\"\n            stroke=\"#9B4AED\"\n            d=\"M59.4648 30.696L73.1629 17.0024\"\n          ></path>\n          <path\n            stroke-linecap=\"round\"\n            stroke-width=\"6\"\n            stroke=\"#9B4AED\"\n            d=\"M74.022 57.8121L51.1697 57.8121L19.9997 16.9999L3 17\"\n          ></path>\n          <path\n            stroke-linecap=\"round\"\n            stroke-width=\"6\"\n            stroke=\"#9B4AED\"\n            d=\"M73.748 57.8123L61.3547 71.51\"\n          ></path>\n          <path\n            stroke-linecap=\"round\"\n            stroke-width=\"6\"\n            stroke=\"#9B4AED\"\n            d=\"M61.3496 43.8147L73.747 57.5079\"\n          ></path>\n        </svg>\n\n        Other\n      </label>\n    </div>\n  </form>\n</div>",
    "css": "/* From Uiverse.io by vinodjangid07  - Website: https://www.patreon.com/posts/animated-gender-78055964?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=join_link - Name: Online Tutorials - Tags: form, card, hover, radio, gender, buttons */\n.gender-card {\n  width: fit-content;\n  height: fit-content;\n  background-color: rgb(255, 255, 255);\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 30px;\n  border-radius: 20px;\n  font-family: Arial, Helvetica, sans-serif;\n  gap: 25px;\n}\n.large-svg-container {\n  width: auto;\n  height: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n}\n.largemalesvg {\n  transform: rotate(180deg);\n}\n.heading {\n  color: #1d1d1d;\n  font-weight: 600;\n  font-size: 25px;\n  text-align: center;\n}\n.gender-radio-buttons {\n  display: none;\n}\n.smallsvg {\n  width: 10px;\n}\n.other-gender {\n  width: 15px;\n}\n.malesmallsvg {\n  transform: rotate(225deg);\n}\n.genderlabel {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: fit-content;\n  height: fit-content;\n  background-color: rgb(46, 46, 46);\n  border-radius: 5px;\n  padding: 8px 16px;\n  gap: 8px;\n  color: white;\n  cursor: pointer;\n  transition: all 0.3s ease-out;\n}\n\n.radio-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  margin-top: 25px;\n}\n.femalebutton:hover {\n  background-color: rgb(245, 185, 195);\n}\n.malebutton:hover {\n  background-color: #569fcf;\n}\n.otherbutton:hover {\n  background-color: #4d227a;\n}\n#female:checked + .femalebutton {\n  background-color: rgb(245, 185, 195);\n  transform: scale(1.1);\n}\n#male:checked + .malebutton {\n  background-color: #569fcf;\n  transform: scale(1.1);\n}\n#other:checked + .otherbutton {\n  background-color: #4d227a;\n  transform: scale(1.2);\n}"
  },
  {
    "id": "uiverse-xantha01_odd-eagle-16",
    "title": "Odd Eagle",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "xantha01",
      "profileUrl": "https://uiverse.io/xantha01/odd-eagle-16"
    },
    "license": "MIT",
    "description": "Odd Eagle · card by xantha01",
    "tags": [
      "card",
      "animated",
      "card hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"container\">\n\n      <div class=\"card\">\n        <svg width=\"22\" height=\"22\" viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M7 14C7.33333 14.6667 8.6 16 11 16C13.4 16 14.6667 14.6667 15 14M7.31238 8.31247H7.68738M7.31238 8.68747H7.68738M14.3124 8.31247H14.6874M14.3124 8.68747H14.6874M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11ZM8 8.5C8 8.77614 7.77614 9 7.5 9C7.22386 9 7 8.77614 7 8.5C7 8.22386 7.22386 8 7.5 8C7.77614 8 8 8.22386 8 8.5ZM15 8.5C15 8.77614 14.7761 9 14.5 9C14.2239 9 14 8.77614 14 8.5C14 8.22386 14.2239 8 14.5 8C14.7761 8 15 8.22386 15 8.5Z\" stroke=\"black\" stroke-width=\"2\" stroke-linecap=\"round\"></path>\n        </svg>          \n        <br>Picture 1</div>\n\n      <div class=\"card\">\n        <svg width=\"22\" height=\"22\" viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M8 14H14M7.31238 8.31247H7.68738M7.31238 8.68747H7.68738M14.3124 8.31247H14.6874M14.3124 8.68747H14.6874M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11ZM8 8.5C8 8.77614 7.77614 9 7.5 9C7.22386 9 7 8.77614 7 8.5C7 8.22386 7.22386 8 7.5 8C7.77614 8 8 8.22386 8 8.5ZM15 8.5C15 8.77614 14.7761 9 14.5 9C14.2239 9 14 8.77614 14 8.5C14 8.22386 14.2239 8 14.5 8C14.7761 8 15 8.22386 15 8.5Z\" stroke=\"black\" stroke-width=\"2\" stroke-linecap=\"round\"></path>\n        </svg>\n        <br>Picture 2</div>\n\n      <div class=\"card\">\n        <svg width=\"22\" height=\"22\" viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M7.31238 8.31247H7.68738M7.31238 8.68747H7.68738M14.3124 8.31247H14.6874M14.3124 8.68747H14.6874M15 15C14.6667 14.3333 13.4 13 11 13C8.6 13 7.33333 14.3333 7 15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11ZM8 8.5C8 8.77614 7.77614 9 7.5 9C7.22386 9 7 8.77614 7 8.5C7 8.22386 7.22386 8 7.5 8C7.77614 8 8 8.22386 8 8.5ZM15 8.5C15 8.77614 14.7761 9 14.5 9C14.2239 9 14 8.77614 14 8.5C14 8.22386 14.2239 8 14.5 8C14.7761 8 15 8.22386 15 8.5Z\" stroke=\"black\" stroke-width=\"2\" stroke-linecap=\"round\"></path>\n        </svg>\n        <br>Picture 3</div>\n\n      <div class=\"card\">\n        <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M1 10C1 14.9706 5.02944 19 10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C7.69494 1 5.59227 1.86656 4 3.29168M3 1V4C3 4.55228 3.44772 5 4 5H7M13 8L9.35355 11.6464C9.15829 11.8417 8.84171 11.8417 8.64645 11.6464L7 10\" stroke=\"black\" stroke-width=\"2\" stroke-linecap=\"round\"></path>\n        </svg>\n        <br>Picture 4</div>\n    </div>",
    "css": "/* From Uiverse.io by xantha01 - Tags: card, animated, card hover */\n.container {\n  position: relative;\n  width: 225px;\n  height: 325px;\n  cursor: pointer;\n}\n\n.card {\n  position: absolute;\n  inset: 2.5px;\n  border-radius: 10px;\n  transform-origin: bottom left;\n  transition: 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #f1f4f7;\n  font-weight: bold;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);\n}\n\n.container:hover .card:nth-child(1) {\n  animation: cardAnimation1 4s 0.5s infinite ease;\n}\n\n.container:hover .card:nth-child(2) {\n  animation: cardAnimation2 4s 1s infinite ease;\n}\n\n.container:hover .card:nth-child(3) {\n  animation: cardAnimation3 4s 1.5s infinite ease;\n}\n\n.container:hover .card:nth-child(4) {\n  animation: cardAnimation4 4s 2s infinite ease;\n}\n\n.card:nth-child(1) {\n  background: linear-gradient(0deg, #4776e6 0%, #8e54e9 100%);\n}\n\n.card:nth-child(2) {\n  background: linear-gradient(0deg, #b3ffab 0%, #12fff7 100%);\n  opacity: 0;\n}\n\n.card:nth-child(3) {\n  background: linear-gradient(178deg, #ffb99a 0%, #ffdbc5 100%);\n  opacity: 0;\n}\n\n.card:nth-child(4) {\n  background: linear-gradient(178deg, #606c88 0%, #3f4c6b 100%);\n  opacity: 0;\n}\n\n@keyframes cardAnimation1 {\n  0% {\n    transform: rotateZ(0deg);\n    opacity: 0;\n    z-index: -1;\n  }\n\n  25% {\n    transform: rotateZ(-20deg);\n    opacity: 1;\n    z-index: 0;\n  }\n\n  50% {\n    transform: rotateZ(0deg);\n    z-index: 1;\n    opacity: 1;\n  }\n\n  75% {\n    transform: rotateZ(20deg);\n    z-index: 0;\n    opacity: 1;\n  }\n\n  100% {\n    transform: rotateZ(0deg);\n    z-index: -1;\n    opacity: 0;\n  }\n}\n\n@keyframes cardAnimation2 {\n  0% {\n    transform: rotateZ(0deg);\n    z-index: -1;\n    opacity: 0;\n  }\n\n  45% {\n    transform: rotateZ(-15deg);\n    z-index: 0;\n    opacity: 1;\n  }\n\n  60% {\n    transform: rotateZ(0deg);\n    z-index: 1;\n    opacity: 1;\n  }\n\n  75% {\n    transform: rotateZ(15deg);\n    z-index: 0;\n    opacity: 1;\n  }\n\n  100% {\n    transform: rotateZ(0deg);\n    z-index: -1;\n    opacity: 0;\n  }\n}\n\n@keyframes cardAnimation3 {\n  0% {\n    transform: rotateZ(0deg);\n    z-index: -1;\n    opacity: 0;\n  }\n\n  45% {\n    transform: rotateZ(-20deg);\n    z-index: 0;\n    opacity: 0;\n  }\n\n  60% {\n    transform: rotateZ(0deg);\n    z-index: 1;\n    opacity: 1;\n  }\n\n  75% {\n    transform: rotateZ(20deg);\n    z-index: 0;\n    opacity: 1;\n  }\n\n  100% {\n    transform: rotateZ(0deg);\n    z-index: -1;\n    opacity: 0;\n  }\n}\n\n@keyframes cardAnimation4 {\n  0% {\n    transform: rotateZ(0deg);\n    z-index: 0;\n    opacity: 0;\n  }\n\n  35% {\n    transform: rotateZ(-25deg);\n    z-index: 0;\n    opacity: 0.0;\n  }\n\n  75% {\n    transform: rotateZ(0deg);\n    z-index: 1;\n    opacity: 1;\n  }\n\n  90% {\n    transform: rotateZ(25deg);\n    z-index: 0;\n    opacity: 1;\n  }\n\n  100% {\n    transform: rotateZ(0deg);\n    z-index: 0;\n    opacity: 0;\n  }\n}"
  },
  {
    "id": "uiverse-aadium_mighty-dog-12",
    "title": "Mighty Dog",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "aadium",
      "profileUrl": "https://uiverse.io/aadium/mighty-dog-12"
    },
    "license": "MIT",
    "description": "Mighty Dog · card by aadium",
    "tags": [
      "card",
      "code",
      "syntax",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"card\">\n  <div class=\"titlebar\">\n    <span class=\"buttons\">\n    <button class=\"minimize\">\n\t\t\t<svg x=\"0px\" y=\"0px\" viewBox=\"0 0 10.2 1\"><rect x=\"0\" y=\"50%\" width=\"10.2\" height=\"1\"></rect></svg>\n\t\t</button>\n    <button class=\"maximize\">\n\t\t\t<svg viewBox=\"0 0 10 10\"><path d=\"M0,0v10h10V0H0z M9,9H1V1h8V9z\"></path></svg>\n\t\t</button>\n    <button class=\"close\">\n\t\t\t<svg viewBox=\"0 0 10 10\"><polygon points=\"10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1\"></polygon></svg>\n\t\t</button>\n    </span>\n  </div>\n  <div class=\"cppcode\">\n    <pre id=\"pre\"><code><span class=\"s1\">#include</span> <span class=\"s2\">&lt;iostream&gt;</span>\nusing<span class=\"s3\"> namespace </span>std<span class=\"sc\">;</span>\n\n<span class=\"s3\">int</span> <span class=\"s2\">main()</span> <span class=\"curlies\">{</span>\n\n  <span class=\"s3\">int</span> <span class=\"s4\">a</span> <span class=\"operator\">=</span> 12<span class=\"sc\">;</span>\n  <span class=\"s3\">int</span> <span class=\"s4\">b</span> <span class=\"operator\">=</span> 5<span class=\"sc\">;</span>\n\n  <span class=\"s4\">cout</span> <span class=\"s5\">&lt;&lt;</span> <span class=\"s1\">\"Sum of the numbers\n    is: \"</span> <span class=\"s5\">&lt;&lt;</span> <span class=\"rounds\">(</span><span class=\"s4\">a </span><span class=\"operator\">+</span><span class=\"s4\"> b</span><span class=\"rounds\">)</span><span class=\"sc\">;</span>\n\n  <span class=\"s6\">return</span> 0<span class=\"sc\">;</span>\n\n<span class=\"curlies\">}</span>\n    </code></pre>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by aadium - Tags: card, code, syntax */\n.card {\n  width: 250px;\n  height: 300px;\n  background: #15001f;\n  border: 1px solid #c042ff;\n  font-size: 14px;\n  font-family: monospace;\n  overflow: auto;\n}\n\n.titlebar {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  font-size: 21px;\n  font-weight: 450;\n  background-color: #2e0043;\n  width: 100%;\n  text-align: right;\n}\n\n.card button {\n  width: 40px;\n  height: 35px;\n  margin-left: -5px;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  transition: 0.2s;\n}\n\nbutton svg path, \nbutton svg rect, \nbutton svg polygon {\n  fill: #ffffff;\n}\n\nbutton svg {\n  width: 10px;\n  height: 10px;\n}\n\n.close:hover {\n  background-color: #e81123;\n}\n\n.maximize:hover {\n  background-color: #c042ff2e;\n}\n\n.minimize:hover {\n  background-color: #c042ff2e;\n}\n\n#pre {\n  overflow: auto;\n  width: 100%;\n  padding: 10px;\n  height: auto;\n  color: #bafff8;\n}\n\n.curlies {\n  color: #ff0000;\n}\n\n.sc {\n  color: #e600ff;\n}\n\n.rounds {\n  color: #ffffff;\n}\n\n.operator {\n  color: #ffff00;\n}\n\n.s1 {\n  color: #22ff00;\n}\n\n.s2 {\n  color: #4281ff;\n}\n\n.s3 {\n  color: #ff4284;\n}\n\n.s4 {\n  color: #ffae00;\n}\n\n.s5 {\n  color: #ffffff;\n}\n\n.s6 {\n  color: #ffff00;\n}"
  },
  {
    "id": "uiverse-jinhuynh_friendly-octopus-41",
    "title": "Friendly Octopus",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "JinHuynh",
      "profileUrl": "https://uiverse.io/JinHuynh/friendly-octopus-41"
    },
    "license": "MIT",
    "description": "Friendly Octopus · card by JinHuynh",
    "tags": [
      "card",
      "hover effect",
      "cardhover",
      "card hover",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<a class=\"card education\" href=\"#\">\n  <div class=\"overlay\"></div>\n  <div class=\"circle\">\n    <svg\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      version=\"1.1\"\n      viewBox=\"29 14 71 76\"\n      height=\"76px\"\n      width=\"71px\"\n    >\n      <desc>Created with Sketch.</desc>\n      <defs></defs>\n      <g\n        transform=\"translate(30.000000, 14.000000)\"\n        fill-rule=\"evenodd\"\n        fill=\"none\"\n        stroke-width=\"1\"\n        stroke=\"none\"\n        id=\"Group\"\n      >\n        <g fill=\"#D98A19\" id=\"Group-8\">\n          <g id=\"Group-7\">\n            <g id=\"Group-6\">\n              <path\n                id=\"Fill-1\"\n                d=\"M0,0 L0,75.9204805 L69.1511499,75.9204805 L0,0 Z M14.0563973,32.2825679 L42.9457663,63.9991501 L14.2315268,63.9991501 L14.0563973,32.2825679 Z\"\n              ></path>\n            </g>\n          </g>\n        </g>\n        <g\n          stroke-linecap=\"square\"\n          stroke=\"#FFFFFF\"\n          transform=\"translate(0.000000, 14.114286)\"\n          id=\"Group-20\"\n        >\n          <path\n            id=\"Line\"\n            d=\"M0.419998734,54.9642857 L4.70316223,54.9642857\"\n          ></path>\n          <path\n            id=\"Line\"\n            d=\"M0.419998734,50.4404762 L4.70316223,50.4404762\"\n          ></path>\n          <path\n            id=\"Line\"\n            d=\"M0.419998734,45.9166667 L4.70316223,45.9166667\"\n          ></path>\n          <path\n            id=\"Line\"\n            d=\"M0.419998734,41.3928571 L2.93999114,41.3928571\"\n          ></path>\n          <path\n            id=\"Line\"\n            d=\"M0.419998734,36.8690476 L4.70316223,36.8690476\"\n          ></path>\n          <path\n            id=\"Line\"\n            d=\"M0.419998734,32.3452381 L4.70316223,32.3452381\"\n          ></path>\n          <path\n            id=\"Line\"\n            d=\"M0.419998734,27.8214286 L4.70316223,27.8214286\"\n          ></path>\n          <path\n            id=\"Line\"\n            d=\"M0.419998734,23.297619 L2.93999114,23.297619\"\n          ></path>\n          <path\n            id=\"Line\"\n            d=\"M0.419998734,18.7738095 L4.70316223,18.7738095\"\n          ></path>\n          <path id=\"Line\" d=\"M0.419998734,14.25 L4.70316223,14.25\"></path>\n          <path\n            id=\"Line\"\n            d=\"M0.419998734,9.72619048 L4.70316223,9.72619048\"\n          ></path>\n          <path\n            id=\"Line\"\n            d=\"M0.419998734,5.20238095 L2.93999114,5.20238095\"\n          ></path>\n          <path\n            id=\"Line\"\n            d=\"M0.419998734,0.678571429 L4.70316223,0.678571429\"\n          ></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n  <p>Education</p>\n</a>",
    "css": "/* From Uiverse.io by JinHuynh  - Tags: card, hover effect, cardhover , card hover */\n.education {\n  --bg-color: #ffd861;\n  --bg-color-light: #ffeeba;\n  --text-color-hover: #4c5656;\n  --box-shadow-color: rgba(255, 215, 97, 0.48);\n}\n\n.credentialing {\n  --bg-color: #b8f9d3;\n  --bg-color-light: #e2fced;\n  --text-color-hover: #4c5656;\n  --box-shadow-color: rgba(184, 249, 211, 0.48);\n}\n\n.wallet {\n  --bg-color: #ceb2fc;\n  --bg-color-light: #f0e7ff;\n  --text-color-hover: #fff;\n  --box-shadow-color: rgba(206, 178, 252, 0.48);\n}\n\n.human-resources {\n  --bg-color: #dce9ff;\n  --bg-color-light: #f1f7ff;\n  --text-color-hover: #4c5656;\n  --box-shadow-color: rgba(220, 233, 255, 0.48);\n}\n\n.card {\n  width: 220px;\n  height: 321px;\n  background: #fff;\n  border-top-right-radius: 10px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  box-shadow: 0 14px 26px rgba(0, 0, 0, 0.04);\n  transition: all 0.3s ease-out;\n  text-decoration: none;\n}\n\n.card:hover {\n  transform: translateY(-5px) scale(1.005) translateZ(0);\n  box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11),\n    0 24px 46px var(--box-shadow-color);\n}\n\n.card:hover .overlay {\n  transform: scale(4) translateZ(0);\n}\n\n.card:hover .circle {\n  border-color: var(--bg-color-light);\n  background: var(--bg-color);\n}\n\n.card:hover .circle:after {\n  background: var(--bg-color-light);\n}\n\n.card:hover p {\n  color: var(--text-color-hover);\n}\n\n.card:active {\n  transform: scale(1) translateZ(0);\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.11),\n    0 15px 24px var(--box-shadow-color);\n}\n\n.card p {\n  font-size: 17px;\n  color: #4c5656;\n  margin-top: 30px;\n  z-index: 1000;\n  transition: color 0.3s ease-out;\n}\n\n.circle {\n  width: 136px;\n  height: 136px;\n  border-radius: 50%;\n  background: #fff;\n  border: 2px solid var(--bg-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  z-index: 1;\n  transition: all 0.3s ease-out;\n}\n\n.circle:after {\n  content: \"\";\n  width: 118px;\n  height: 118px;\n  display: block;\n  position: absolute;\n  background: var(--bg-color);\n  border-radius: 50%;\n  top: 7px;\n  left: 7px;\n  transition: opacity 0.3s ease-out;\n}\n\n.circle svg {\n  z-index: 10000;\n  transform: translateZ(0);\n}\n\n.overlay {\n  width: 118px;\n  position: absolute;\n  height: 118px;\n  border-radius: 50%;\n  background: var(--bg-color);\n  top: 70px;\n  left: 50px;\n  z-index: 0;\n  transition: transform 0.3s ease-out;\n}"
  },
  {
    "id": "uiverse-zanina-yassine_dangerous-pug-69",
    "title": "Dangerous Pug",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "zanina-yassine",
      "profileUrl": "https://uiverse.io/zanina-yassine/dangerous-pug-69"
    },
    "license": "MIT",
    "description": "Dangerous Pug · card by zanina-yassine",
    "tags": [
      "card",
      "blue",
      "minimalist",
      "loading",
      "loader",
      "gradients",
      "multicolor",
      "loading animation"
    ],
    "previewType": "css",
    "durationMs": 5000,
    "accentColor": null,
    "html": "<div class=\"card\">\n  <span class=\"card_title\">Loading users</span>\n  <div class=\"loader\"></div>\n  <div class=\"card_content\">\n    <button class=\"load-more\" name=\"load-more\" type=\"button\">Load more</button>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by zanina-yassine  - Tags: blue, minimalist, loading, card, loader, gradients, multicolor, loading animation */\n.card {\n  width: 400px;\n  max-width: 450px;\n  height: fit-content;\n\n  display: grid;\n  grid-template-rows: auto 4px auto;\n\n  padding-bottom: 20px;\n\n  border-radius: 11px;\n\n  background: #ffffff;\n  box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01),\n    0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09),\n    0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n\n.card_title {\n  display: block;\n\n  padding: 12px 15px;\n\n  color: rgb(70, 70, 76);\n  font-size: 0.875rem;\n  font-weight: 600;\n  text-align: center;\n}\n\n.loader {\n  height: 3px;\n  width: 100%;\n\n  position: relative;\n\n  background-color: #e2e4e8;\n  animation: retract 5s cubic-bezier(0.15, 0.83, 0.66, 1) 2s forwards infinite;\n}\n\n.card:has(.load-more:hover) .loader {\n  height: 2px;\n}\n\n.loader::before {\n  content: \"\";\n\n  height: 100%;\n\n  position: absolute;\n\n  left: 0;\n\n  background: linear-gradient(#4480ff 0%, #115dfc 50%, #0550ed 100%);\n  animation: slide 5s cubic-bezier(0.15, 0.83, 0.66, 1) 2s forwards infinite;\n}\n\n.card_content {\n  width: 100%;\n  height: 150px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.load-more {\n  width: fit-content;\n  height: 36px;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n\n  padding: 0 15px;\n\n  border-radius: 5px;\n  border: 0;\n\n  background: linear-gradient(180deg, #4480ff 0%, #115dfc 50%, #0550ed 100%);\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 15px;\n  color: #ffffff;\n\n  box-shadow: 0px 0.5px 0.5px #efefef, 0px 1px 0.5px rgba(239, 239, 239, 0.5);\n  transition: all 0.6s cubic-bezier(0.15, 0.83, 0.66, 1);\n  cursor: pointer;\n}\n\n.load-more:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 10px 20px 0#054eed6b;\n}\n\n@keyframes slide {\n  0% {\n    width: 0%;\n  }\n  30% {\n    width: 20%;\n  }\n  50% {\n    width: 30%;\n  }\n  70% {\n    width: 80%;\n  }\n  90% {\n    width: 100%;\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes retract {\n  0% {\n    height: 3px;\n  }\n  95% {\n    height: 3px;\n  }\n  100% {\n    height: 1px;\n  }\n}"
  },
  {
    "id": "uiverse-sujitkavaiya_mighty-pig-81",
    "title": "Mighty Pig",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "Sujitkavaiya",
      "profileUrl": "https://uiverse.io/Sujitkavaiya/mighty-pig-81"
    },
    "license": "MIT",
    "description": "Mighty Pig · card by Sujitkavaiya",
    "tags": [
      "card",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<div class=\"card\"></div>",
    "css": "/* From Uiverse.io by Sujitkavaiya - Tags: card */\n.card {\n width: 190px;\n height: 254px;\n background: rgb(255, 255, 255);\n border-radius: 0.4em;\n box-shadow: 0.3em 0.3em 0.7em #00000015;\n transition: border 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n border: rgb(250, 250, 250) 0.2em solid;\n}\n\n.card:hover {\n border: #006fff 0.2em solid;\n}"
  },
  {
    "id": "uiverse-neerajbaniwal_gentle-turkey-54",
    "title": "Gentle Turkey",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "neerajbaniwal",
      "profileUrl": "https://uiverse.io/neerajbaniwal/gentle-turkey-54"
    },
    "license": "MIT",
    "description": "Gentle Turkey · hover by neerajbaniwal",
    "tags": [
      "hover",
      "simple",
      "neumorphism",
      "glassmorphism",
      "tooltip",
      "hover effect"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"tooltip-container\">\n  <span class=\"tooltip\">Uiverse.io</span>\n  <span class=\"text\">@</span>\n</div>",
    "css": "/* From Uiverse.io by neerajbaniwal  - Tags: simple, neumorphism, glassmorphism, tooltip, hover, hover effect */\n.tooltip-container {\n  height: 70px;\n  width: 110px;\n  border-radius: 5px;\n  background-color: #fff;\n  background-image: linear-gradient(\n    to left bottom,\n    #f2f5f8,\n    #ecf1f2,\n    #e7eceb,\n    #e3e7e4,\n    #e1e2de\n  );\n  border: 1px solid white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.151);\n  position: relative;\n  transition: transform 0.3s ease;\n  z-index: 1;\n}\n\n.tooltip-container::before {\n  position: absolute;\n  content: \"\";\n  top: -50%;\n  clip-path: polygon(50% 0, 0 100%, 100% 100%);\n  border-radius: 5px;\n  background-color: fff;\n  background-image: linear-gradient(\n    to left bottom,\n    #1288ff,\n    #e4eaec,\n    #d8dfde,\n    #cdd3cf,\n    #c5c7c1\n  );\n  width: 100%;\n  height: 50%;\n  transform-style: preserve-3d;\n  transform: perspective(1000px) rotateX(-150deg) translateY(-110%);\n  transition: transform 0.3s ease;\n  z-index: -1;\n}\n\n.tooltip-container .text {\n  color: rgb(32, 30, 30);\n  font-weight: bold;\n  font-size: 40px;\n}\n\n.tooltip {\n  position: absolute;\n  top: -20px;\n  opacity: 0;\n  background: linear-gradient(-90deg, rgba(0, 0, 0, 0.05) 1px, white 1px),\n    linear-gradient(rgba(0, 0, 0, 0.05) 1px, white 1px),\n    linear-gradient(-90deg, rgba(0, 0, 0, 0.04) 1px, white 1px),\n    linear-gradient(rgba(0, 0, 0, 0.04) 1px, white 1px),\n    linear-gradient(white 3px, #f2f2f2 3px, #f2f2f2 78px, white 78px),\n    linear-gradient(-90deg, #aaa 1px, white 1px),\n    linear-gradient(-90deg, white 3px, #f2f2f2 3px, #f2f2f2 78px, white 78px),\n    linear-gradient(#aaa 1px, white 1px), #f2f2f2;\n  background-size: 4px 4px, 4px 4px, 80px 80px, 80px 80px, 80px 80px, 80px 80px,\n    80px 80px, 80px 80px;\n  padding: 5px 10px;\n  border: 1px solid rgb(206, 204, 204);\n\n  height: 70px;\n  width: 110px;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition-duration: 0.2s;\n  pointer-events: none;\n  letter-spacing: 0.5px;\n  font-size: 18px;\n  font-weight: 600;\n  text-shadow: 10px salmon;\n  z-index: ;\n}\n.tooltip-container:hover {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.tooltip-container:hover::before {\n  transform: rotateY(0);\n  background-image: none;\n  background-color: white;\n}\n\n.tooltip-container:hover .tooltip {\n  top: -90px;\n  opacity: 1;\n  transition-duration: 0.3s;\n}"
  },
  {
    "id": "uiverse-jhavelang_strange-wasp-98",
    "title": "Strange Wasp",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "JhaveLang",
      "profileUrl": "https://uiverse.io/JhaveLang/strange-wasp-98"
    },
    "license": "MIT",
    "description": "Strange Wasp · hover by JhaveLang",
    "tags": [
      "hover",
      "simple",
      "tooltip",
      "animation"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"tooltip-container\">\n  <span class=\"tooltip\">Uiverse.io</span>\n  <span class=\"text\">Tooltip</span>\n</div>",
    "css": "/* From Uiverse.io by JhaveLang  - Tags: simple, tooltip, animation */\n/* This is an example, feel free to delete this code */\n.tooltip-container {\n  --background: linear-gradient(45deg, #22d3ee, #1f9df5);\n  position: relative;\n  background: var(--background);\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 17px;\n  padding: 0.7em 1.8em;\n  border-radius: 8px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  color: #fff;\n}\n\n.tooltip {\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%) scale(0.8);\n  transform-origin: bottom;\n  padding: 0.3em 0.6em;\n  opacity: 0;\n  pointer-events: none;\n  transition: all 0.3s;\n  background: var(--background);\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.tooltip::before {\n  position: absolute;\n  content: \"\";\n  height: 0.6em;\n  width: 0.6em;\n  bottom: -0.2em;\n  left: 50%;\n  transform: translate(-50%) rotate(45deg);\n  background: var(--background);\n}\n\n.tooltip-container:hover .tooltip {\n  top: -45px;\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n  transform: translateX(-50%) scale(1);\n}\n.tooltip-container:hover {\n  transform: scale(0.9);\n}"
  },
  {
    "id": "uiverse-kyle1dev_quiet-cougar-91",
    "title": "Quiet Cougar",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "kyle1dev",
      "profileUrl": "https://uiverse.io/kyle1dev/quiet-cougar-91"
    },
    "license": "MIT",
    "description": "Quiet Cougar · hover by kyle1dev",
    "tags": [
      "hover",
      "tooltip"
    ],
    "previewType": "css",
    "durationMs": 800,
    "accentColor": null,
    "html": "<div class=\"tooltip-wrapper\">\n  <button class=\"tooltip-button\">\n    <span class=\"tooltip-text\">Hover me</span>\n  </button>\n  <div class=\"tooltip-content\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n      <path\n        d=\"M13 13h-2v-2h2v2zm0 4h-2v-2h2v2zm1-18h-8v2h8v-2zm0 20h-8v-2h8v2zm5.5-7h-2v-2h2v2zm-7 0h-2v-2h2v2zm1-10h-2v6h2v-6zm6.5 5.5h-1.5v1.5h1.5v-1.5zM4.5 16.5h1.5v1.5h-1.5v-1.5zm12-5h-2v-2h2v2zm-4 4h-2v-2h2v2zm5-3h-2v-2h2v2zm-7 0h-2v-2h2v2zm-3-5h-2v2h2v-2zm-4 8.5h1.5v1.5h-1.5v-1.5zm4.5-12h-2v2h2v-2zm10 1h-2v2h2v-2zm-7 3h-2v2h2v-2zm6 5h-2v-2h2v2zm-7-6h-2v-2h2v2zM6 13H4v-2h2v2zm12 6h-2v-2h2v2zM9 4H7v2h2V4zm11 0h-2v2h2V4z\"\n      ></path>\n    </svg>\n    Uiverse.io\n  </div>\n</div>",
    "css": "/* From Uiverse.io by kyle1dev  - Tags: tooltip */\n.tooltip-wrapper {\n  position: relative;\n  display: inline-block;\n}\n.tooltip-wrapper .tooltip-content {\n  visibility: hidden;\n  background: linear-gradient(to right, #000, #333);\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 8px 12px;\n  position: absolute;\n  z-index: 1;\n  bottom: 125%;\n  left: 50%;\n  transform: translateX(-50%) translateY(10px);\n  opacity: 0;\n  transition:\n    visibility 0s linear 0.4s,\n    opacity 0.4s ease,\n    transform 0.4s ease;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.6);\n  white-space: nowrap;\n  pointer-events: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.tooltip-wrapper:hover .tooltip-content {\n  visibility: visible;\n  opacity: 1;\n  transform: translateX(-50%) translateY(0);\n  transition-delay: 0s;\n}\n.tooltip-wrapper:not(:hover) .tooltip-content {\n  visibility: visible;\n  transition-delay: 0s, 0.4s;\n}\n.tooltip-button {\n  background: linear-gradient(to right, #333, #000);\n  border: none;\n  color: white;\n  padding: 15px 30px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n  border-radius: 6px;\n  position: relative;\n  overflow: hidden;\n  transition:\n    background 0.3s ease,\n    box-shadow 0.3s ease;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);\n}\n.tooltip-button:hover {\n  background: linear-gradient(to right, #000, #333);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.7);\n}\n.tooltip-button:active {\n  background: #222;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n  transform: scale(0.95);\n}\n.tooltip-button .tooltip-text {\n  position: relative;\n  display: inline-block;\n  transition: transform 0.4s ease;\n}\n.tooltip-button:hover .tooltip-text {\n  transform: translateY(-10px);\n}\n.tooltip-content svg {\n  fill: #fff;\n  width: 16px;\n  height: 16px;\n}"
  },
  {
    "id": "uiverse-quezaquo_bitter-wolverine-27",
    "title": "Bitter Wolverine",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "Quezaquo",
      "profileUrl": "https://uiverse.io/Quezaquo/bitter-wolverine-27"
    },
    "license": "MIT",
    "description": "Bitter Wolverine · hover by Quezaquo",
    "tags": [
      "hover",
      "simple",
      "tooltip",
      "transition",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"container\">\n  <span class=\"hover-me\">Hover me !</span>\n  <div class=\"tooltip\">\n    <p>Heyy👋</p>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by Quezaquo  - Tags: simple, tooltip, transition */\n.container {\n  font-size: 18px;\n  color: #333;\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n}\n\n.hover-me {\n  position: relative;\n  z-index: 1;\n  text-decoration: underline;\n  text-underline-offset: 4px;\n  text-decoration-color: #333;\n}\n\n.tooltip {\n  width: 100%;\n  height: 10px;\n  background: #ffffff;\n  padding: 0.25em;\n  text-align: center;\n  position: absolute;\n  top: 40px;\n  left: 0;\n  opacity: 0;\n  visibility: hidden;\n  transform-origin: center top;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);\n  transition: opacity 0.3s ease-in-out;\n}\n\n.tooltip::before {\n  content: \"\";\n  position: absolute;\n  bottom: -8px;\n  left: 80%;\n  transform: translateX(-50%);\n  border-width: 8px 7px 0;\n  border-style: solid;\n  border-color: #ffffff transparent transparent transparent;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);\n}\n\n.tooltip p {\n  margin: 0;\n  color: #333;\n  font-weight: 600;\n}\n\n.container:hover .tooltip {\n  top: -10px;\n  opacity: 1;\n  visibility: visible;\n  animation: goPopup 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;\n}\n\n.container:hover .tooltip p {\n  animation: bounce 2s ease-in-out infinite;\n}\n\n@keyframes goPopup {\n  0% {\n    transform: translateY(0) scaleY(0);\n    opacity: 0;\n  }\n  50% {\n    transform: translateY(-50%) scaleY(1.2);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-100%) scaleY(1);\n    border-radius: 8px;\n    opacity: 1;\n    height: 40px;\n  }\n}\n\n@keyframes bounce {\n  0%,\n  20%,\n  50%,\n  80%,\n  100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-3px);\n  }\n  60% {\n    transform: translateY(-2px);\n  }\n}"
  },
  {
    "id": "uiverse-yassin6up_rare-goose-44",
    "title": "Rare Goose",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "Yassin6up",
      "profileUrl": "https://uiverse.io/Yassin6up/rare-goose-44"
    },
    "license": "MIT",
    "description": "Rare Goose · hover by Yassin6up",
    "tags": [
      "hover",
      "simple",
      "material design",
      "tooltip",
      "subscription",
      "3d",
      "action",
      "black"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"tooltip-container\">\n  <span class=\"tooltip\">Uiverse.io</span>\n  <span class=\"text\">Tooltip</span>\n</div>",
    "css": "/* From Uiverse.io by Yassin6up  - Tags: simple, material design, tooltip, subscription, 3d, action, black */\n/* This is an example, feel free to delete this code */\n.tooltip-container {\n  --background: #22d3ee;\n  position: relative;\n  background: var(--background);\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 17px;\n  padding: 0.7em 1.8em;\n  border-radius: 10px;\n  color: white;\n  box-shadow: 0 0 10px var(--background);\n}\n\n.tooltip {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 0.3em 0.6em;\n  opacity: 0;\n  pointer-events: none;\n  transition: all 0.3s;\n  background: var(--background);\n  border-radius: 10px;\n}\n\n.tooltip::before {\n  position: absolute;\n  content: \"\";\n  height: 0.6em;\n  width: 0.6em;\n  bottom: -0.2em;\n  left: 50%;\n  transform: translate(-50%) rotate(45deg);\n  background: var(--background);\n}\n\n.tooltip-container:hover .tooltip {\n  top: -100%;\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n  animation: 1s animated infinite alternate;\n}\n\n@keyframes animated {\n  from {\n    transform: translate(0) translateY(10px);\n  }\n  to {\n    transform: translate(-100%) translateY(0);\n  }\n}"
  },
  {
    "id": "uiverse-andrew-demchenk0_bad-sloth-57",
    "title": "Bad Sloth",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "andrew-demchenk0",
      "profileUrl": "https://uiverse.io/andrew-demchenk0/bad-sloth-57"
    },
    "license": "MIT",
    "description": "Bad Sloth · hover by andrew-demchenk0",
    "tags": [
      "hover",
      "tooltip",
      "animation",
      "action",
      "green",
      "button",
      "click",
      "border"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div class=\"container\">\n  <input type=\"checkbox\" id=\"showCheckbox\" class=\"toggle-checkbox\" />\n  <label for=\"showCheckbox\" class=\"toggle-label\">Show Tooltip</label>\n\n  <div id=\"popup\" class=\"popup\">\n    <label for=\"showCheckbox\" class=\"close-label\"></label>\n    <p>I am looking for a job. Trainee/junior React dev. <br />📍Ukraine.</p>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by andrew-demchenk0  - Tags: tooltip, animation, action, green, button, hover, click, border */\n.container {\n  position: relative;\n  --main-color: #19e68c;\n  --dark-color: #222;\n  --bg-light: #fff;\n  --dark-alternative: #666;\n}\n\n.popup {\n  display: none;\n  padding: 10px 20px;\n  position: absolute;\n  width: 200px;\n  top: -100%;\n  left: -25%;\n  background-color: var(--bg-light);\n  border: 1.5px solid var(--dark-alternative);\n  border-radius: 2px;\n  animation: slideIn 1s;\n}\n\n.toggle-checkbox {\n  display: none;\n}\n\n.toggle-label {\n  position: relative;\n  padding: 10px;\n  background-color: var(--main-color);\n  color: var(--dark-color);\n  font-weight: 600;\n  cursor: help;\n  display: inline-block;\n  border: 2px solid var(--dark-color);\n  border-radius: 3px;\n  box-shadow: 2px 2px var(--dark-color);\n  transition: 0.5s;\n}\n\n.toggle-label::before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  animation: pulsate 0.7s infinite;\n}\n\n.toggle-label:hover::before {\n  animation: none;\n}\n\n.toggle-label:active {\n  transform: translate(2px, 2px);\n  box-shadow: 0px 0px var(--dark-color);\n}\n\n.close-label {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  width: 20px;\n  height: 20px;\n}\n.close-label::before {\n  content: \"⊗\";\n  font-size: 22px;\n  position: absolute;\n  top: -7px;\n  left: 0;\n  color: var(--dark-alternative);\n  cursor: pointer;\n}\n.toggle-checkbox:checked ~ .popup {\n  display: block;\n}\n.toggle-checkbox:checked ~ .toggle-label {\n  opacity: 0;\n}\n\n@keyframes slideIn {\n  0% {\n    transform: translateX(200%);\n    opacity: 0;\n  }\n  50% {\n    transform: translateX(200%);\n    opacity: 0;\n  }\n  70% {\n    transform: translateX(-10%);\n    opacity: 0.5;\n  }\n  80% {\n    transform: translateX(5%);\n  }\n  90% {\n    transform: translateX(-5%);\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n@keyframes pulsate {\n  0% {\n    box-shadow: 0 0 -5px rgba(255, 255, 255, 1);\n  }\n  50% {\n    box-shadow: 0 0 10px var(--dark-color);\n  }\n  100% {\n    box-shadow: 0 0 -5px rgb(255, 255, 255);\n  }\n}"
  },
  {
    "id": "uiverse-mohammad-rahme-576_hard-starfish-64",
    "title": "Hard Starfish",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "Mohammad-Rahme-576",
      "profileUrl": "https://uiverse.io/Mohammad-Rahme-576/hard-starfish-64"
    },
    "license": "MIT",
    "description": "Hard Starfish · hover by Mohammad-Rahme-576",
    "tags": [
      "hover",
      "tooltip",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 400,
    "accentColor": null,
    "html": "<div class=\"tooltip-container\">\n  <div class=\"button-content\">\n    <span class=\"text\">Share</span>\n    <svg\n      class=\"share-icon\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      viewBox=\"0 0 24 24\"\n      width=\"24\"\n      height=\"24\"\n    >\n      <path\n        d=\"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z\"\n      ></path>\n    </svg>\n  </div>\n  <div class=\"tooltip-content\">\n    <div class=\"social-icons\">\n      <a href=\"#\" class=\"social-icon twitter\">\n        <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          viewBox=\"0 0 24 24\"\n          width=\"24\"\n          height=\"24\"\n        >\n          <path\n            d=\"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z\"\n          ></path>\n        </svg>\n      </a>\n      <a href=\"#\" class=\"social-icon facebook\">\n        <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          viewBox=\"0 0 24 24\"\n          width=\"24\"\n          height=\"24\"\n        >\n          <path\n            d=\"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z\"\n          ></path>\n        </svg>\n      </a>\n      <a href=\"#\" class=\"social-icon linkedin\">\n        <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          viewBox=\"0 0 24 24\"\n          width=\"24\"\n          height=\"24\"\n        >\n          <path\n            d=\"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z\"\n          ></path>\n        </svg>\n      </a>\n    </div>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by Mohammad-Rahme-576  - Tags: tooltip */\n/* Container Styles */\n.tooltip-container {\n  position: relative;\n  display: inline-block;\n  font-family: \"Arial\", sans-serif;\n  overflow: visible;\n}\n\n/* Button Styles */\n.button-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, #6e8efb, #a777e3);\n  color: white;\n  padding: 14px 28px;\n  border-radius: 50px;\n  cursor: pointer;\n  transition:\n    background 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),\n    transform 0.3s ease,\n    box-shadow 0.4s ease;\n  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);\n  position: relative;\n  z-index: 10;\n  overflow: hidden;\n}\n\n.button-content::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  border-radius: inherit;\n  background: linear-gradient(\n    135deg,\n    rgba(110, 142, 251, 0.4),\n    rgba(167, 119, 227, 0.4)\n  );\n  filter: blur(15px);\n  opacity: 0;\n  transition: opacity 0.5s ease;\n  z-index: -1;\n}\n\n.button-content::after {\n  content: \"\";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background: radial-gradient(\n    circle,\n    rgba(255, 255, 255, 0.3) 0%,\n    rgba(255, 255, 255, 0) 70%\n  );\n  transform: scale(0);\n  transition: transform 0.6s ease-out;\n  z-index: -1;\n}\n\n.button-content:hover::before {\n  opacity: 1;\n}\n\n.button-content:hover::after {\n  transform: scale(1);\n}\n\n.button-content:hover {\n  background: linear-gradient(135deg, #a777e3, #6e8efb);\n  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);\n  transform: translateY(-4px) scale(1.03);\n}\n\n.button-content:active {\n  transform: translateY(-2px) scale(0.98);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);\n}\n\n.text {\n  font-size: 18px;\n  font-weight: 600;\n  margin-right: 12px;\n  white-space: nowrap;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  transition: letter-spacing 0.3s ease;\n}\n\n.button-content:hover .text {\n  letter-spacing: 1px;\n}\n\n.share-icon {\n  fill: white;\n  transition:\n    transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55),\n    fill 0.3s ease;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\n}\n\n.button-content:hover .share-icon {\n  transform: rotate(180deg) scale(1.1);\n  fill: #ffffff;\n}\n\n/* Tooltip Styles */\n.tooltip-content {\n  position: absolute;\n  top: 102%;\n  left: 50%;\n  transform: translateX(-50%) scale(0.8);\n  background: white;\n  border-radius: 15px;\n  padding: 22px;\n  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);\n  opacity: 0;\n  visibility: hidden;\n  transition:\n    opacity 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55),\n    transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55),\n    visibility 0.5s ease;\n  z-index: 100;\n  pointer-events: none;\n  backdrop-filter: blur(10px);\n  background: rgba(255, 255, 255, 0.9);\n}\n\n.tooltip-container:hover .tooltip-content {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(-50%) scale(1);\n  pointer-events: auto;\n}\n\n/* Social Icons Styles */\n.social-icons {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.social-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: #f0f0f0;\n  transition:\n    transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55),\n    background 0.3s ease,\n    box-shadow 0.4s ease;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  position: relative;\n  overflow: hidden;\n}\n\n.social-icon::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: radial-gradient(\n    circle at center,\n    rgba(255, 255, 255, 0.8) 0%,\n    rgba(255, 255, 255, 0) 70%\n  );\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n\n.social-icon:hover::before {\n  opacity: 1;\n}\n\n.social-icon svg {\n  width: 24px;\n  height: 24px;\n  fill: #333;\n  transition:\n    transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55),\n    fill 0.3s ease;\n  z-index: 1;\n}\n\n.social-icon:hover {\n  transform: translateY(-5px) scale(1.1);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\n}\n\n.social-icon:active {\n  transform: translateY(-2px) scale(1.05);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n}\n\n.social-icon:hover svg {\n  transform: scale(1.2);\n  fill: white;\n}\n\n.social-icon.twitter:hover {\n  background: linear-gradient(135deg, #1da1f2, #1a91da);\n}\n\n.social-icon.facebook:hover {\n  background: linear-gradient(135deg, #1877f2, #165ed0);\n}\n\n.social-icon.linkedin:hover {\n  background: linear-gradient(135deg, #0077b5, #005e94);\n}\n\n/* Animation for Pulse Effect */\n@keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(110, 142, 251, 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 20px rgba(110, 142, 251, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(110, 142, 251, 0);\n  }\n}\n\n.button-content {\n  animation: pulse 3s infinite;\n}\n\n/* Hover Ripple Effect */\n@keyframes ripple {\n  0% {\n    transform: scale(0);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(4);\n    opacity: 0;\n  }\n}\n\n.button-content::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: inherit;\n  transform: scale(0);\n  opacity: 0;\n}\n\n.button-content:active::before {\n  animation: ripple 0.6s linear;\n}\n\n/* Tooltip Arrow */\n.tooltip-content::before {\n  content: \"\";\n  position: absolute;\n  top: -10px;\n  left: 50%;\n  transform: translateX(-50%);\n  border-width: 0 10px 10px 10px;\n  border-style: solid;\n  border-color: transparent transparent rgba(255, 255, 255, 0.9) transparent;\n  filter: drop-shadow(0 -3px 3px rgba(0, 0, 0, 0.1));\n}\n\n/* Accessibility */\n.button-content:focus {\n  outline: none;\n  box-shadow:\n    0 0 0 3px rgba(110, 142, 251, 0.5),\n    0 8px 15px rgba(0, 0, 0, 0.1);\n}\n\n.button-content:focus:not(:focus-visible) {\n  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);\n}\n\n/* Responsive Design */\n@media (max-width: 768px) {\n  .button-content {\n    padding: 12px 24px;\n    border-radius: 40px;\n  }\n\n  .text {\n    font-size: 16px;\n  }\n\n  .tooltip-content {\n    width: 240px;\n    padding: 18px;\n  }\n\n  .social-icon {\n    width: 44px;\n    height: 44px;\n  }\n\n  .social-icon svg {\n    width: 20px;\n    height: 20px;\n  }\n}\n\n@media (max-width: 480px) {\n  .button-content {\n    padding: 10px 20px;\n  }\n\n  .text {\n    font-size: 14px;\n  }\n\n  .tooltip-content {\n    width: 200px;\n    padding: 15px;\n  }\n\n  .social-icon {\n    width: 40px;\n    height: 40px;\n  }\n\n  .social-icon svg {\n    width: 18px;\n    height: 18px;\n  }\n}\n\n/* Dark Mode Support */\n@media (prefers-color-scheme: dark) {\n  .tooltip-content {\n    background: rgba(30, 30, 30, 0.9);\n    color: white;\n  }\n\n  .tooltip-content::before {\n    border-color: transparent transparent rgba(30, 30, 30, 0.9) transparent;\n  }\n\n  .social-icon {\n    background: #2a2a2a;\n  }\n\n  .social-icon svg {\n    fill: #e0e0e0;\n  }\n}\n\n/* Print Styles */\n@media print {\n  .tooltip-container {\n    display: none;\n  }\n}\n\n/* Reduced Motion */\n@media (prefers-reduced-motion: reduce) {\n  .button-content,\n  .share-icon,\n  .social-icon,\n  .tooltip-content {\n    transition: none;\n  }\n\n  .button-content {\n    animation: none;\n  }\n}\n\n/* Custom Scrollbar for Tooltip Content */\n.tooltip-content::-webkit-scrollbar {\n  width: 6px;\n}\n\n.tooltip-content::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 3px;\n}\n\n.tooltip-content::-webkit-scrollbar-thumb {\n  background: #888;\n  border-radius: 3px;\n}\n\n.tooltip-content::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}"
  },
  {
    "id": "uiverse-vikas7754_evil-mule-52",
    "title": "Evil Mule",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "vikas7754",
      "profileUrl": "https://uiverse.io/vikas7754/evil-mule-52"
    },
    "license": "MIT",
    "description": "Evil Mule · hover by vikas7754",
    "tags": [
      "hover",
      "neumorphism",
      "tooltip",
      "3d",
      "dark",
      "modern"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"tooltip-container\">\n  <div class=\"tooltip\">\n    <div class=\"profile\">\n      <div class=\"user\">\n        <div class=\"img\">Ui</div>\n        <div class=\"details\">\n          <div class=\"name\">User</div>\n          <div class=\"username\">@username</div>\n        </div>\n      </div>\n      <div class=\"about\">500+ Connections</div>\n    </div>\n  </div>\n  <div class=\"text\">\n    <a class=\"icon\" href=\"https://freecodez.com/\">\n      <div class=\"layer\">\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span class=\"fab fa-linkedin\">\n          <svg viewBox=\"0 0 448 512\" height=\"1em\">\n            <path\n              d=\"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z\"\n            ></path>\n          </svg>\n        </span>\n      </div>\n      <div class=\"text\">LinkedIn</div>\n    </a>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by vikas7754  - Tags: neumorphism, tooltip, 3d, dark, modern */\n.tooltip-container {\n  position: relative;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 17px;\n  border-radius: 10px;\n}\n\n.tooltip {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 10px;\n  opacity: 0;\n  pointer-events: none;\n  transition: all 0.3s;\n  border-radius: 15px;\n  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),\n    inset -5px -5px 15px rgba(255, 255, 255, 0.1),\n    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);\n}\n\n.profile {\n  background: #2a2b2f;\n  border-radius: 10px 15px;\n  padding: 10px;\n  border: 1px solid rgba(11, 63, 95, 1);\n}\n\n.tooltip-container:hover .tooltip {\n  top: -150px;\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n}\n\n.icon {\n  text-decoration: none;\n  color: #fff;\n  display: block;\n  position: relative;\n}\n.layer {\n  width: 55px;\n  height: 55px;\n  transition: transform 0.3s;\n}\n.icon:hover .layer {\n  transform: rotate(-35deg) skew(20deg);\n}\n.layer span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  border: 1px solid #fff;\n  border-radius: 5px;\n  transition: all 0.3s;\n}\n\n.layer span,\n.text {\n  color: #1da1f2;\n  border-color: #1da1f2;\n}\n\n.icon:hover.layer span {\n  box-shadow: -1px 1px 3px #1da1f2;\n}\n.icon .text {\n  position: absolute;\n  left: 50%;\n  bottom: -5px;\n  opacity: 0;\n  font-weight: 500;\n  transform: translateX(-50%);\n  transition: bottom 0.3s ease, opacity 0.3s ease;\n}\n.icon:hover .text {\n  bottom: -35px;\n  opacity: 1;\n}\n\n.icon:hover .layer span:nth-child(1) {\n  opacity: 0.2;\n}\n.icon:hover .layer span:nth-child(2) {\n  opacity: 0.4;\n  transform: translate(5px, -5px);\n}\n.icon:hover .layer span:nth-child(3) {\n  opacity: 0.6;\n  transform: translate(10px, -10px);\n}\n.icon:hover .layer span:nth-child(4) {\n  opacity: 0.8;\n  transform: translate(15px, -15px);\n}\n.icon:hover .layer span:nth-child(5) {\n  opacity: 1;\n  transform: translate(20px, -20px);\n}\n\n.layer span.fab {\n  font-size: 30px;\n  line-height: 64px;\n  text-align: center;\n  fill: #1da1f2;\n  background: #000;\n}\n.user {\n  display: flex;\n  gap: 10px;\n}\n.img {\n  width: 50px;\n  height: 50px;\n  font-size: 25px;\n  font-weight: 700;\n  border: 1px solid #1da1f2;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n}\n.name {\n  font-size: 17px;\n  font-weight: 700;\n  color: #1da1f2;\n}\n.details {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  color: #fff;\n}\n.about {\n  color: #ccc;\n  padding-top: 5px;\n}"
  },
  {
    "id": "uiverse-vnuny_stale-mouse-74",
    "title": "Stale Mouse",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "vnuny",
      "profileUrl": "https://uiverse.io/vnuny/stale-mouse-74"
    },
    "license": "MIT",
    "description": "Stale Mouse · hover by vnuny",
    "tags": [
      "hover",
      "simple",
      "tooltip",
      "animation",
      "black",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 700,
    "accentColor": null,
    "html": "<div class=\"item-hints\">\n  <div class=\"hint\" data-position=\"4\">\n    <span class=\"hint-radius\"></span>\n    <span class=\"hint-dot\">Tip</span>\n    <div class=\"hint-content do--split-children\">\n      <p>Use Navbar to navigate the website quickly and easily.</p>\n    </div>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by vnuny  - Tags: simple, tooltip, animation, black, animated */\n.item-hints {\n  --purple: #720c8f;\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  padding-right: 170px;\n}\n.item-hints .hint {\n  margin: 150px auto;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.item-hints .hint-dot {\n  z-index: 3;\n  border: 1px solid #ffe4e4;\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n  -webkit-transform: translate(-0%, -0%) scale(0.95);\n  transform: translate(-0%, -0%) scale(0.95);\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n.item-hints .hint-radius {\n  background-color: rgba(255, 255, 255, 0.1);\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -125px 0 0 -125px;\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n.item-hints .hint[data-position=\"1\"] .hint-content {\n  top: 85px;\n  left: 50%;\n  margin-left: 56px;\n}\n.item-hints .hint-content {\n  width: 300px;\n  position: absolute;\n  z-index: 5;\n  padding: 35px 0;\n  opacity: 0;\n  transition: opacity 0.7s ease, visibility 0.7s ease;\n  color: #fff;\n  visibility: hidden;\n  pointer-events: none;\n}\n.item-hints .hint:hover .hint-content {\n  position: absolute;\n  z-index: 5;\n  padding: 35px 0;\n  opacity: 1;\n  -webkit-transition: opacity 0.7s ease, visibility 0.7s ease;\n  transition: opacity 0.7s ease, visibility 0.7s ease;\n  color: #fff;\n  visibility: visible;\n  pointer-events: none;\n}\n.item-hints .hint-content::before {\n  width: 0px;\n  bottom: 29px;\n  left: 0;\n  content: \"\";\n  background-color: #fff;\n  height: 1px;\n  position: absolute;\n  transition: width 0.4s;\n}\n.item-hints .hint:hover .hint-content::before {\n  width: 180px;\n  transition: width 0.4s;\n}\n.item-hints .hint-content::after {\n  -webkit-transform-origin: 0 50%;\n  transform-origin: 0 50%;\n  -webkit-transform: rotate(-225deg);\n  transform: rotate(-225deg);\n  bottom: 29px;\n  left: 0;\n  width: 80px;\n  content: \"\";\n  background-color: #fff;\n  height: 1px;\n  position: absolute;\n  opacity: 1;\n  -webkit-transition: opacity 0.5s ease;\n  transition: opacity 0.5s ease;\n  -webkit-transition-delay: 0s;\n  transition-delay: 0s;\n}\n.item-hints .hint:hover .hint-content::after {\n  opacity: 1;\n  visibility: visible;\n}\n.item-hints .hint[data-position=\"4\"] .hint-content {\n  bottom: 85px;\n  left: 50%;\n  margin-left: 56px;\n}"
  },
  {
    "id": "uiverse-pipo-13_ugly-swan-20",
    "title": "Ugly Swan",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "Pipo-13",
      "profileUrl": "https://uiverse.io/Pipo-13/ugly-swan-20"
    },
    "license": "MIT",
    "description": "Ugly Swan · hover by Pipo-13",
    "tags": [
      "hover",
      "simple",
      "tooltip",
      "svg"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"tooltip-container\">\n  <span class=\"tooltip\">\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n      width=\"80\"\n      zoomAndPan=\"magnify\"\n      viewBox=\"0 0 60 44.999999\"\n      height=\"60\"\n      preserveAspectRatio=\"xMidYMid meet\"\n      version=\"1.0\"\n    >\n      <defs>\n        <clipPath id=\"e2947948d6\">\n          <path\n            d=\"M 2.25 6.75 L 57.75 6.75 C 58.992188 6.75 60 7.757812 60 9 L 60 42.75 C 60 43.992188 58.992188 45 57.75 45 L 2.25 45 C 1.007812 45 0 43.992188 0 42.75 L 0 9 C 0 7.757812 1.007812 6.75 2.25 6.75 Z M 2.25 6.75\"\n            clip-rule=\"nonzero\"\n          ></path>\n        </clipPath>\n      </defs>\n      <g clip-path=\"url(#e2947948d6)\">\n        <path\n          fill=\"#ff914d\"\n          d=\"M 0 6.75 L 60.0625 6.75 L 60.0625 45 L 0 45 Z M 0 6.75\"\n          fill-opacity=\"1\"\n          fill-rule=\"nonzero\"\n        ></path>\n        <text x=\"15\" y=\"30\" fill=\"white\" style=\"font-size:12px\">hello</text>\n      </g>\n      <path\n        fill=\"#ff914d\"\n        d=\"M 38.988281 12.292969 C 38.988281 11.898438 38.820312 11.449219 38.496094 10.988281 L 31.664062 0.996094 C 31.226562 0.351562 30.625 0 29.992188 0 C 29.363281 0 28.757812 0.351562 28.324219 0.996094 L 21.488281 10.972656 C 21.167969 11.4375 21.011719 11.898438 21.011719 12.292969 C 21.011719 13.035156 21.613281 13.5 22.613281 13.5 L 37.386719 13.5 C 38.386719 13.5 38.988281 13.035156 38.988281 12.292969 Z M 38.988281 12.292969\"\n        fill-opacity=\"1\"\n        fill-rule=\"nonzero\"\n      ></path>\n    </svg>\n  </span>\n  <span class=\"text\">Tooltip</span>\n</div>",
    "css": "/* From Uiverse.io by Pipo-13  - Tags: simple, tooltip, svg */\n.tooltip-container {\n  --background: #d87639;\n  position: relative;\n  background: var(--background);\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 17px;\n  padding: 0.7em 1.8em;\n  border-radius: 0.2rem;\n}\n\n.tooltip {\n  position: absolute;\n  top: 90%;\n  left: 50%;\n  transform: translateX(-50%) rotateX(90deg);\n  padding: 0.6em;\n  opacity: 0.6;\n  transition: all 0.5s ease;\n  background: transparent;\n  height: 0px;\n  cursor: default;\n}\n\n.tooltip-container:hover .tooltip {\n  opacity: 1;\n  pointer-events: auto;\n  background: none;\n  transform: translateX(-50%) rotateX(0deg);\n}"
  },
  {
    "id": "uiverse-theleaderofenemy_rotten-liger-72",
    "title": "Rotten Liger",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "theleaderofenemy",
      "profileUrl": "https://uiverse.io/theleaderofenemy/rotten-liger-72"
    },
    "license": "MIT",
    "description": "Rotten Liger · hover by theleaderofenemy",
    "tags": [
      "hover",
      "simple",
      "tooltip",
      "action",
      "light"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"tooltip-container\">\n  <span class=\"text\">Tooltip</span>\n  <span class=\"tooltip\">Uiverse.io</span>\n</div>",
    "css": "/* From Uiverse.io by theleaderofenemy  - Tags: simple, tooltip, action, light */\n.tooltip-container {\n  position: relative;\n  display: inline-block;\n  margin: 20px;\n}\n\n.text {\n  color: #333;\n  font-size: 18px;\n  cursor: pointer;\n}\n\n.tooltip {\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  opacity: 0;\n  visibility: hidden;\n  background: #0b798a;\n  color: #fff;\n  padding: 10px;\n  border-radius: 4px;\n  transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;\n  z-index: 1;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.tooltip::before {\n  content: \"\";\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  border-width: 8px;\n  border-style: solid;\n  border-color: transparent transparent #0b798a transparent;\n  transform: translateX(-50%);\n}\n\n.tooltip-container:hover .tooltip {\n  top: 120%;\n  opacity: 1;\n  visibility: visible;\n  background: #0e94a0;\n  transform: translate(-50%, -5px);\n}"
  },
  {
    "id": "uiverse-tsiangana_thin-cougar-23",
    "title": "Thin Cougar",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "Tsiangana",
      "profileUrl": "https://uiverse.io/Tsiangana/thin-cougar-23"
    },
    "license": "MIT",
    "description": "Thin Cougar · hover by Tsiangana",
    "tags": [
      "hover",
      "tooltip",
      "gradient",
      "space",
      "modern"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"tooltip-container\">\n  <span class=\"tooltip\">Discover</span>\n  <span class=\"text\">\n    <div class=\"borde-back\">\n      <div class=\"icon\">\n        <svg\n          viewBox=\"0 0 16 16\"\n          class=\"bi bi-discord\"\n          height=\"23\"\n          width=\"23\"\n          xmlns=\"http://www.w3.org/2000/svg\"\n        >\n          <path\n            d=\"M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z\"\n          ></path>\n        </svg>\n      </div>\n    </div>\n  </span>\n</div>",
    "css": "/* From Uiverse.io by Tsiangana  - Tags: tooltip, gradient, hover, space, modern */\n/* This is an example, feel free to delete this code */\n.tooltip-container {\n  position: relative;\n  background-color: #ff3cac;\n  background-image: linear-gradient(\n    225deg,\n    #ff3cac 0%,\n    #784ba0 50%,\n    #2b86c5 100%\n  );\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 17px;\n  /*padding: 0.7em 1.8em;*/\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  fill: #fff;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n}\n.tooltip-container .borde-back {\n  width: 60px;\n  height: 60px;\n  background-color: #e8e8e8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  box-shadow: none;\n}\n\n.tooltip-container .icon {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n  background-color: #ff3cac;\n  background-image: linear-gradient(\n    225deg,\n    #ff3cac 0%,\n    #784ba0 50%,\n    #2b86c5 100%\n  );\n  cursor: pointer;\n}\n\n.tooltip {\n  position: absolute;\n  top: -2;\n  left: -45px; /* Altere a posição inicial para a esquerda, fora da tela */\n  transform: translateX(\n    -32%\n  ); /* Usando translateX para controlar a transição da esquerda para a direita */\n  width: 160px;\n  height: 52px;\n  opacity: 0;\n  pointer-events: none;\n  transition: all 0.6s;\n  border-radius: 50px;\n  background-color: #ff3cac;\n  background-image: linear-gradient(\n    225deg,\n    #ff3cac 0%,\n    #784ba0 50%,\n    #2b86c5 100%\n  );\n  display: flex;\n  align-items: center;\n  justify-content: right;\n  padding-right: 16px;\n  color: #fff;\n  font-size: 18px;\n  font-family: sans-serif;\n  font-weight: 800px;\n}\n\n.tooltip::before {\n  position: absolute;\n  content: \"\";\n  height: 0.6em;\n  width: 0.6em;\n  right: -0.2em; /* Mude para a direita */\n  top: 50%; /* Altere o topo para o meio da tooltip */\n  transform: translateY(-50%) rotate(45deg); /* Use translateY para centralizar verticalmente */\n  background: var(--background);\n}\n\n.tooltip-container:hover .tooltip {\n  left: 100%; /* Altere para a posição desejada (a direita) */\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n  z-index: -10;\n}\n.tooltip-container:hover {\n  transform: translateX(-50px);\n  transition: 0.5s linear;\n}"
  },
  {
    "id": "uiverse-yaya12085_average-earwig-11",
    "title": "Average Earwig",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "Yaya12085",
      "profileUrl": "https://uiverse.io/Yaya12085/average-earwig-11"
    },
    "license": "MIT",
    "description": "Average Earwig · hover by Yaya12085",
    "tags": [
      "hover",
      "tooltip",
      "icon",
      "message",
      "custom"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"tooltip-container\">\n  <span class=\"tooltip\">Uiverse.io</span>\n  <span class=\"text\">@</span>\n</div>",
    "css": "/* From Uiverse.io by Yaya12085  - Tags: tooltip, icon, message, custom */\n.tooltip-container {\n  height: 70px;\n  width: 110px;\n  border-radius: 5px;\n  background-color: #fff;\n  background-image: linear-gradient(\n    to left bottom,\n    #f2f5f8,\n    #ecf1f2,\n    #e7eceb,\n    #e3e7e4,\n    #e1e2de\n  );\n  border: 1px solid white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.151);\n  position: relative;\n  transition: transform 0.3s ease;\n}\n\n.tooltip-container::before {\n  position: absolute;\n  content: \"\";\n  top: -50%;\n  clip-path: polygon(50% 0, 0 100%, 100% 100%);\n  border-radius: 5px;\n  background-color: fff;\n  background-image: linear-gradient(\n    to left bottom,\n    #f2f5f8,\n    #e4eaec,\n    #d8dfde,\n    #cdd3cf,\n    #c5c7c1\n  );\n  width: 100%;\n  height: 50%;\n  transform-style: preserve-3d;\n  transform: perspective(1000px) rotateX(-150deg) translateY(-110%);\n  transition: transform 0.3s ease;\n}\n\n.tooltip-container .text {\n  color: rgb(32, 30, 30);\n  font-weight: bold;\n  font-size: 40px;\n}\n\n.tooltip {\n  position: absolute;\n  top: -20px;\n  opacity: 0;\n  background: linear-gradient(-90deg, rgba(0, 0, 0, 0.05) 1px, white 1px),\n    linear-gradient(rgba(0, 0, 0, 0.05) 1px, white 1px),\n    linear-gradient(-90deg, rgba(0, 0, 0, 0.04) 1px, white 1px),\n    linear-gradient(rgba(0, 0, 0, 0.04) 1px, white 1px),\n    linear-gradient(white 3px, #f2f2f2 3px, #f2f2f2 78px, white 78px),\n    linear-gradient(-90deg, #aaa 1px, white 1px),\n    linear-gradient(-90deg, white 3px, #f2f2f2 3px, #f2f2f2 78px, white 78px),\n    linear-gradient(#aaa 1px, white 1px), #f2f2f2;\n  background-size: 4px 4px, 4px 4px, 80px 80px, 80px 80px, 80px 80px, 80px 80px,\n    80px 80px, 80px 80px;\n  padding: 5px 10px;\n  border: 1px solid rgb(206, 204, 204);\n\n  height: 70px;\n  width: 110px;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition-duration: 0.2s;\n  pointer-events: none;\n  letter-spacing: 0.5px;\n  font-size: 18px;\n  font-weight: 600;\n  text-shadow: 10px salmon;\n}\n.tooltip-container:hover {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.tooltip-container:hover::before {\n  transform: rotateY(0);\n  background-image: none;\n  background-color: white;\n}\n\n.tooltip-container:hover .tooltip {\n  top: -90px;\n  opacity: 1;\n  transition-duration: 0.3s;\n}"
  },
  {
    "id": "uiverse-elijahgummer_brown-moose-94",
    "title": "Brown Moose",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "elijahgummer",
      "profileUrl": "https://uiverse.io/elijahgummer/brown-moose-94"
    },
    "license": "MIT",
    "description": "Brown Moose · hover by elijahgummer",
    "tags": [
      "hover",
      "simple",
      "tooltip",
      "green",
      "minimalist",
      "github",
      "clean",
      "transition"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"tooltip-container\">\n  <span class=\"tooltip\">8 contributions on March 8th.</span>\n  <span class=\"text\"></span>\n</div>",
    "css": "/* From Uiverse.io by elijahgummer  - Tags: simple, tooltip, green, minimalist, github, clean, transition, hover effect */\n.tooltip-container {\n  --background-tooltip-container: #2ea44f; /* GitHub green color */\n  position: relative;\n  background: var(--background-tooltip-container);\n  cursor: pointer;\n  transition: all 0.2s;\n  width: 16px;\n  height: 16px;\n  border-radius: 6px;\n  font-size: 17px;\n}\n\n.tooltip {\n  --background-tooltip: #6e7681; /* Default background color for tooltip */\n  position: absolute;\n  top: -39px; /* Adjusted top position */\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 0.5em;\n  opacity: 0;\n  pointer-events: none;\n  transition: all 0.3s;\n  background: var(--background-tooltip);\n  color: white; /* Text color */\n  border-radius: 5px;\n  width: 210px;\n  height: 30px;\n  font-size: 13px;\n  text-align: center;\n}\n\n.tooltip::before {\n  position: absolute;\n  content: \"\";\n  height: 0.6em;\n  width: 0.6em;\n  bottom: -0.2em;\n  left: 50%;\n  transform: translate(-50%) rotate(45deg);\n  background: var(\n    --background-tooltip\n  ); /* Use the same background color as the tooltip */\n}\n\n.tooltip-container:hover .tooltip {\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n}"
  },
  {
    "id": "uiverse-priyanshugupta28_dry-mole-12",
    "title": "Dry Mole",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "PriyanshuGupta28",
      "profileUrl": "https://uiverse.io/PriyanshuGupta28/dry-mole-12"
    },
    "license": "MIT",
    "description": "Dry Mole · hover by PriyanshuGupta28",
    "tags": [
      "hover",
      "tooltip",
      "3d tooltip",
      "cool tooltip"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<main>\n  <ul class=\"example-1\">\n    <li class=\"icon-content\">\n      <a\n        class=\"link\"\n        data-social=\"spotify\"\n        aria-label=\"Spotify\"\n        href=\"https://www.spotify.com/\"\n      >\n        <svg viewBox=\"0 0 100 100\" version=\"1.1\">\n          <path\n            fill=\"currentColor\"\n            d=\"M50,4C24.7,4,4,24.7,4,50s20.6,46,46,46s46-20.6,46-46S75.4,4,50,4z M71.6,71.5c0,0,0,0.1-0.1,0.1c-0.8,1.2-2,1.8-3.2,1.8  c-0.7,0-1.4-0.2-2-0.6c-10.2-6.3-23.3-7.7-38.8-4.1c-2.1,0.6-4-0.9-4.5-2.7c-0.6-2.3,0.9-4.1,2.7-4.6c17.7-4,32.6-2.3,44.4,5  c0.9,0.4,1.5,1,1.8,1.9C72.2,69.3,72.1,70.5,71.6,71.5z M76.9,59.3L76.9,59.3c-0.8,1.1-1.9,1.9-3.2,2.1c-0.2,0-0.5,0.1-0.7,0.1  c-0.8,0-1.6-0.3-2.3-0.7c-12-7.3-30.1-9.4-43.9-5c-2.5,0.6-5-0.7-5.6-3c-0.6-2.5,0.7-4.9,3-5.5c16.5-5,37.2-2.5,51.4,6.2  c0.8,0.4,1.5,1.3,1.8,2.5C77.9,57,77.6,58.3,76.9,59.3z M83.2,45.6c-1,1.4-2.7,2.1-4.4,2.1c-0.9,0-1.9-0.2-2.7-0.7c0,0,0,0,0,0  c-13.9-8.3-37.8-9.3-51.4-5.1c-2.7,0.8-5.5-0.7-6.4-3.3c-0.8-2.7,0.7-5.6,3.3-6.4c16.2-4.8,43-3.8,59.8,6.2  C83.8,39.6,84.7,42.9,83.2,45.6C83.3,45.5,83.3,45.5,83.2,45.6z\"\n          ></path>\n        </svg>\n      </a>\n      <div class=\"tooltip\">Spotify</div>\n    </li>\n    <li class=\"icon-content\">\n      <a\n        class=\"link\"\n        data-social=\"pinterest\"\n        aria-label=\"Pinterest\"\n        href=\"https://www.pinterest.com/\"\n      >\n        <svg xml:space=\"preserve\" viewBox=\"0 0 100 100\" version=\"1.1\">\n          <path\n            fill=\"currentColor\"\n            d=\"M83,17.8C74.5,8.9,63.4,4.3,50,4.1C37.7,4.2,26.8,8.6,17.9,17.3C8.9,26,4.3,37,4.1,50c0,0,0,0,0,0c0,9.1,2.5,17.4,7.4,24.9  c4.9,7.4,11.6,13.2,20.1,17.1c0.3,0.1,0.7,0.1,1-0.1c0.3-0.2,0.5-0.5,0.5-0.8l0-4.9c0.1-2.1,0.7-5.3,1.7-9.5c1-4,1.7-6.7,1.9-7.6  c0.7-3,1.7-7.2,3-12.6c0.1-0.2,0-0.5-0.1-0.7c-0.4-0.8-1-2.6-1.5-6.6c0.1-2.7,0.8-5.2,2.1-7.3c1.2-2,3.1-3.1,5.7-3.5  c2,0.1,4.7,0.8,5.1,5.9c-0.1,1.8-0.8,4.5-1.9,8.1c-1.2,3.8-1.9,6.3-2.1,7.6c-0.7,2.5-0.2,4.8,1.5,6.8c1.6,1.9,3.8,2.9,6.5,3.1  c4.3-0.1,8.1-2.6,11.2-7.5c1.7-3,2.9-6.3,3.5-9.7c0.7-3.4,0.7-7.1,0-10.8c-0.7-3.8-2.2-7.1-4.5-9.8c0,0-0.1-0.1-0.1-0.1  c-4.3-3.7-9.5-5.3-15.6-5c-6,0.4-11.3,2.6-15.9,6.6c-2.9,3.2-4.8,7.1-5.7,11.6c-0.9,4.6,0,9.1,2.6,13.3c0.3,0.5,0.5,0.8,0.6,1  c0,0.3,0,1-0.5,2.8c-0.5,1.8-0.9,2.2-0.9,2.2c0,0-0.1,0-0.1,0.1c0,0-0.2,0-0.4-0.1c-2.2-1-3.9-2.4-5.2-4.2c-1.3-1.9-2.1-4-2.5-6.3  c-0.3-2.5-0.4-5-0.3-7.5c0.2-2.5,0.7-5.1,1.4-7.7c3-6.9,8.5-11.9,16.3-14.8c7.8-2.9,16-3.2,24.3-0.8c6.5,2.8,11,7.4,13.6,13.7  c2.5,6.4,2.8,13.4,0.8,20.8c-2.2,7.1-6.4,12.4-12.1,15.7c-5.6,2.8-10.8,3-15.7,0.7c-1.8-1.1-3.1-2.3-3.9-3.5c-0.2-0.3-0.6-0.5-1-0.5  c-0.4,0.1-0.7,0.3-0.8,0.7c-0.7,2.7-1.3,4.7-1.6,6.2c-1.4,5.4-2.6,9.2-3.4,11c-0.8,1.6-1.6,3.1-2.4,4.3c-0.2,0.3-0.2,0.6-0.1,0.9  s0.3,0.5,0.6,0.6c4.3,1.3,8.7,2,13,2c12.4-0.1,23.2-4.6,32.1-13.4C91.1,73.9,95.8,62.9,96,50C95.9,37.5,91.5,26.7,83,17.8z\"\n          ></path>\n        </svg>\n      </a>\n      <div class=\"tooltip\">Pinterest</div>\n    </li>\n    <li class=\"icon-content\">\n      <a\n        class=\"link\"\n        data-social=\"dribbble\"\n        aria-label=\"Dribbble\"\n        href=\"https://dribbble.com/\"\n      >\n        <svg viewBox=\"0 0 100 100\" version=\"1.1\">\n          <path\n            fill=\"currentColor\"\n            d=\"M83.5,18.5C74.9,9.3,62.8,4,50.2,4c-6.1,0-12,1.1-17.6,3.4C15.2,14.5,4,31.3,4,50c0,13.9,6.2,26.9,17,35.7  C29.2,92.3,39.4,96,50,96c6.6,0,13.2-1.5,19.2-4.2c12.5-5.7,21.7-16.6,25.2-29.8C95.5,57.9,96,53.8,96,50  C96,38.3,91.6,27.1,83.5,18.5z M75,22.3c-0.7,0.9-1.4,1.8-2.1,2.6c-1.4,1.6-2.8,3-4.4,4.3c-0.3,0.3-0.6,0.6-1,0.8  c-1,0.9-2.1,1.7-3.2,2.5l-0.3,0.2c-1.1,0.7-2.2,1.5-3.5,2.2c-0.4,0.3-0.9,0.5-1.4,0.8c-0.8,0.5-1.7,0.9-2.7,1.4  c-0.6,0.3-1.2,0.5-1.8,0.8L54.3,38c-0.1,0-0.2,0.1-0.3,0.1c0,0,0,0,0,0c-1.3-2.6-2.4-4.9-3.5-7l-0.3-0.5c-1.1-2-2.2-4-3.3-6  l-0.7-1.3c-1.1-1.9-2.2-3.7-3.2-5.4l-0.7-1.1c-0.7-1.2-1.4-2.3-2.2-3.5c3.2-0.8,6.5-1.3,9.8-1.3c9.4,0,18.4,3.5,25.4,9.8  C75.3,21.9,75.2,22.1,75,22.3z M46.4,40.6c-1.4,0.4-2.9,0.8-4.4,1.1c-0.3,0-0.7,0.1-0.9,0.2c-6,1-12.5,1.4-19.4,1.1  c-0.3,0-0.6,0-0.9,0c-0.3,0-0.5,0-0.7,0c-2.5-0.2-4.9-0.4-7.2-0.7c2.3-11.2,9.6-20.9,19.8-26.1c2.1,3.3,4.2,6.7,6.3,10.3l0.4,0.7  c0.9,1.6,1.9,3.4,3.2,5.8l0.6,1.2C44.4,36.6,45.4,38.6,46.4,40.6z M24.4,51.1c2.2,0.1,4.2,0,6.2-0.1l0.7,0c0.4,0,0.9,0,1.3,0  c2.8-0.2,5.5-0.5,8.5-1c0.5-0.1,1-0.2,1.6-0.3l0.5-0.1c2.2-0.4,4.2-0.9,6.1-1.4c0.1,0,0.3-0.1,0.4-0.1l0.5,1.1  c1.2,2.8,2.3,5.5,3.3,8.1c0,0,0,0,0,0c-0.2,0.1-0.5,0.2-0.7,0.2c-2,0.6-4,1.4-5.9,2.2c-0.6,0.3-1.3,0.5-1.9,0.8  c-1.4,0.6-2.7,1.3-4.1,2.1l-0.3,0.2c-0.2,0.1-0.5,0.2-0.6,0.4c-1.5,0.9-3.1,1.9-4.7,3c-0.2,0.1-0.4,0.3-0.6,0.4  c-0.2,0.1-0.4,0.3-0.6,0.5c-1,0.7-2,1.5-3,2.3c-0.4,0.3-0.7,0.6-1.1,0.9l-0.3,0.3c-0.7,0.6-1.5,1.3-2.2,1.9l-0.2,0.2  c-0.4,0.4-0.7,0.7-1.1,1.1l-0.2,0.2c-0.6,0.6-1.3,1.3-2,2l-0.4,0.4c-0.2,0.2-0.4,0.4-0.5,0.6C16.1,69.9,12,60.2,12,50.3  c0,0,0.1,0,0.1,0c0.4,0,0.7,0,1.1,0.1c3.5,0.4,6.9,0.6,10.3,0.7C23.8,51,24.1,51.1,24.4,51.1z M29.5,81.9c0.2-0.2,0.3-0.4,0.5-0.5  c1-1.1,2-2.1,3-3c1.9-1.8,3.8-3.3,5.7-4.8c0.2-0.1,0.4-0.3,0.6-0.4c0.2-0.2,0.5-0.4,0.8-0.6c1.1-0.8,2.2-1.5,3.4-2.2  c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.2-0.1,0.3-0.2c1.4-0.8,2.9-1.6,4.5-2.3c0.3-0.1,0.6-0.2,0.8-0.4l0.6-0.3  c1.1-0.5,2.2-0.9,3.5-1.4c0.5-0.2,1.1-0.4,1.7-0.6l0.2-0.1c0.4-0.1,0.7-0.2,1.1-0.3c0,0,0,0,0,0c1.1,3.2,2.3,6.4,3.3,9.8l0.1,0.4  c1.1,3.6,2,7.3,2.9,10.8C51.7,89.8,39.3,88.3,29.5,81.9C29.4,81.9,29.4,81.9,29.5,81.9z M65.6,62.9c0.7-0.1,1.3-0.2,2-0.2  c2-0.2,4-0.2,5.9-0.2c0.2,0,0.4,0,0.6,0l0.2,0c2.2,0.1,4.6,0.3,6.9,0.6c0.4,0.1,0.9,0.1,1.3,0.2l0.6,0.1c0.7,0.1,1.5,0.3,2.2,0.4  c-3,7.6-8.3,14-15.2,18.3c-0.8-3.1-1.7-6.2-2.6-9.2l-0.1-0.4c-0.9-3-1.9-6.1-3.1-9.5C64.8,63.1,65.2,63,65.6,62.9z M81.6,55.2  C80,55,78.4,54.9,77,54.8l-0.9-0.1c-0.9-0.1-1.9-0.1-2.8-0.2c-0.2,0-0.3,0-0.5,0c-0.2,0-0.4,0-0.6,0c-2,0-3.9,0.1-5.9,0.3  c-0.2,0-0.3,0-0.5,0.1c-0.1,0-0.2,0-0.3,0c-1.3,0.1-2.6,0.3-3.9,0.5c-0.1-0.1-0.1-0.3-0.2-0.4c-0.1-0.2-0.2-0.5-0.3-0.7  c-1.1-2.9-2.3-5.7-3.2-7.8l-0.3-0.6c-0.1-0.1-0.1-0.3-0.2-0.4c0,0,0,0,0.1,0c0.2-0.1,0.5-0.2,0.7-0.3c0.6-0.2,1.2-0.5,1.8-0.8  c1.2-0.5,2.4-1.2,3.6-1.8c0.1-0.1,0.3-0.2,0.5-0.2c0.2-0.1,0.5-0.2,0.7-0.4c1.5-0.9,2.9-1.8,4.2-2.7l0.3-0.2  c0.2-0.1,0.4-0.3,0.6-0.4c0.9-0.6,1.9-1.4,2.8-2.2c1.5-1.2,2.9-2.5,4.3-4c0.8-0.8,1.5-1.6,2.2-2.4l0.4-0.5c0.5-0.5,0.9-1.1,1.3-1.6  C85.5,34.3,88,42.1,88,50c0,2-0.2,4.1-0.5,6.1c-0.3,0-0.6-0.1-0.8-0.1c-0.4-0.1-0.7-0.1-1.1-0.2l-1.1-0.2  C83.5,55.5,82.5,55.3,81.6,55.2z\"\n          ></path>\n        </svg>\n      </a>\n      <div class=\"tooltip\">Dribbble</div>\n    </li>\n    <li class=\"icon-content\">\n      <a\n        class=\"link\"\n        data-social=\"telegram\"\n        aria-label=\"Telegram\"\n        href=\"https://telegram.org/\"\n      >\n        <svg viewBox=\"0 0 100 100\" version=\"1.1\">\n          <path\n            fill=\"currentColor\"\n            d=\"M95,9.9c-1.3-1.1-3.4-1.2-7-0.1c0,0,0,0,0,0c-2.5,0.8-24.7,9.2-44.3,17.3c-17.6,7.3-31.9,13.7-33.6,14.5  c-1.9,0.6-6,2.4-6.2,5.2c-0.1,1.8,1.4,3.4,4.3,4.7c3.1,1.6,16.8,6.2,19.7,7.1c1,3.4,6.9,23.3,7.2,24.5c0.4,1.8,1.6,2.8,2.2,3.2  c0.1,0.1,0.3,0.3,0.5,0.4c0.3,0.2,0.7,0.3,1.2,0.3c0.7,0,1.5-0.3,2.2-0.8c3.7-3,10.1-9.7,11.9-11.6c7.9,6.2,16.5,13.1,17.3,13.9  c0,0,0.1,0.1,0.1,0.1c1.9,1.6,3.9,2.5,5.7,2.5c0.6,0,1.2-0.1,1.8-0.3c2.1-0.7,3.6-2.7,4.1-5.4c0-0.1,0.1-0.5,0.3-1.2  c3.4-14.8,6.1-27.8,8.3-38.7c2.1-10.7,3.8-21.2,4.8-26.8c0.2-1.4,0.4-2.5,0.5-3.2C96.3,13.5,96.5,11.2,95,9.9z M30,58.3l47.7-31.6  c0.1-0.1,0.3-0.2,0.4-0.3c0,0,0,0,0,0c0.1,0,0.1-0.1,0.2-0.1c0.1,0,0.1,0,0.2-0.1c-0.1,0.1-0.2,0.4-0.4,0.6L66,38.1  c-8.4,7.7-19.4,17.8-26.7,24.4c0,0,0,0,0,0.1c0,0-0.1,0.1-0.1,0.1c0,0,0,0.1-0.1,0.1c0,0.1,0,0.1-0.1,0.2c0,0,0,0.1,0,0.1  c0,0,0,0,0,0.1c-0.5,5.6-1.4,15.2-1.8,19.5c0,0,0,0,0-0.1C36.8,81.4,31.2,62.3,30,58.3z\"\n          ></path>\n        </svg>\n      </a>\n      <div class=\"tooltip\">Telegram</div>\n    </li>\n  </ul>\n</main>",
    "css": "/* From Uiverse.io by PriyanshuGupta28  - Tags: tooltip, 3d tooltip, cool tooltip */\nul {\n  list-style: none;\n}\n\n.example-1 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.example-1 .icon-content {\n  margin: 0 10px;\n  position: relative;\n}\n.example-1 .icon-content .tooltip {\n  position: absolute;\n  top: -30px;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: #000;\n  color: #fff;\n  padding: 6px 10px;\n  border-radius: 5px;\n  opacity: 0;\n  visibility: hidden;\n  font-size: 14px;\n  transition: all 0.3s ease;\n}\n.example-1 .icon-content:hover .tooltip {\n  opacity: 1;\n  visibility: visible;\n  top: -50px;\n}\n.example-1 .icon-content .link {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  color: #4d4d4d;\n  background-color: #fff;\n  transition: all 0.3s ease-in-out;\n}\n.example-1 .icon-content .link:hover {\n  box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);\n}\n.example-1 .icon-content .link svg {\n  width: 30px;\n  height: 30px;\n}\n.example-1 .icon-content .link[data-social=\"spotify\"]:hover {\n  color: #1db954;\n}\n.example-1 .icon-content .link[data-social=\"pinterest\"]:hover {\n  color: #bd081c;\n}\n.example-1 .icon-content .link[data-social=\"dribbble\"]:hover {\n  color: #ea4c89;\n}\n.example-1 .icon-content .link[data-social=\"telegram\"]:hover {\n  color: #0088cc;\n}"
  },
  {
    "id": "uiverse-steveblox_orange-fox-41",
    "title": "Orange Fox",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "SteveBloX",
      "profileUrl": "https://uiverse.io/SteveBloX/orange-fox-41"
    },
    "license": "MIT",
    "description": "Orange Fox · hover by SteveBloX",
    "tags": [
      "hover",
      "material design",
      "tooltip",
      "shadow",
      "md",
      "md3"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"tooltip-container\">\n  <span class=\"tooltip\">\n    <p class=\"title\">Title</p>\n    <p class=\"content\">\n      Lorem ipsum dolor sit amet consectetur adipisicing elit.\n    </p>\n  </span>\n  <span class=\"text\">Material Design Tooltip</span>\n</div>",
    "css": "/* From Uiverse.io by SteveBloX  - Tags: material design, tooltip, shadow, md, md3 */\n/* Material Design 3 tooltip */\n.tooltip-container {\n  position: relative;\n  background: #e8def8;\n  color: #1d192b;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 17px;\n  padding: 0.7em 1.8em;\n  font-family: Montserrat, sans-serif;\n  border-radius: 50px;\n}\n.tooltip-container .text {\n  font-weight: bold;\n}\n\n.tooltip {\n  transform-origin: center left;\n  scale: 0;\n  position: absolute;\n  top: 130%;\n  left: 50%;\n  transform: translate(-50%, -10px);\n  transition: all 0.25s;\n  background: #f3edf7;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3), 0 2px 6px 2px rgba(0, 0, 0, 0.15);\n  padding: 17px;\n  border-radius: 12px;\n  color: #49454f;\n  min-width: 312px;\n}\n\n.tooltip-container:hover .tooltip {\n  scale: 1;\n}\n\n.tooltip .title {\n  font-weight: bold;\n  font-size: 1em;\n}\n\n.tooltip .content {\n  font-size: 0.85em;\n  font-weight: semibold;\n}"
  },
  {
    "id": "uiverse-bocikond_terrible-emu-64",
    "title": "Terrible Emu",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "bociKond  - Website: https://codepen.io/milanraring/pen/JjoamZx - Name: Milan Raring",
      "profileUrl": "https://uiverse.io/bociKond  - Website: https://codepen.io/milanraring/pen/JjoamZx - Name: Milan Raring/terrible-emu-64"
    },
    "license": "MIT",
    "description": "Terrible Emu · hover by bociKond  - Website: https://codepen.io/milanraring/pen/JjoamZx - Name: Milan Raring",
    "tags": [
      "hover",
      "simple",
      "tooltip",
      "social",
      "notification"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"tooltip-container\">\n  <span class=\"tooltip\">\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      viewBox=\"0 0 64 64\"\n      height=\"64\"\n      width=\"64\"\n      class=\"svg\"\n    >\n      <path\n        d=\"M50.27 6.44997C47.2255 5.1936 43.8836 4.84045 40.6437 5.43274C37.4039 6.02503 34.4031 7.5377 32 9.78997C23.57 2.35997 13.8 4.63997 8.05998 10.14C2.05998 15.88 -0.590017 26.14 7.68998 35.14C8.22998 35.83 31 58.46 31 58.46C31.2829 58.7415 31.6658 58.8995 32.065 58.8995C32.4641 58.8995 32.847 58.7415 33.13 58.46L56.34 35.21C58.4116 33.1493 59.9346 30.603 60.7702 27.8031C61.6058 25.0032 61.7275 22.0387 61.1241 19.1797C60.5207 16.3207 59.2114 13.6582 57.3156 11.4348C55.4197 9.21134 52.9976 7.49768 50.27 6.44997V6.44997Z\"\n      ></path>\n    </svg>\n    <svg\n      viewBox=\"0 0 48 48\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      data-name=\"Layer 1\"\n      id=\"Layer_1\"\n      class=\"svg\"\n    >\n      <path\n        d=\"M42.455,31.235l-2.267-2.266a5.274,5.274,0,0,0-7.459,0l-1.3,1.3a3.287,3.287,0,0,1-4.132.409A35.791,35.791,0,0,1,17.322,20.7a3.283,3.283,0,0,1,.409-4.132l1.3-1.3a5.274,5.274,0,0,0,0-7.459L16.765,5.545a5.279,5.279,0,0,0-7.459,0L6.8,8.054a9.535,9.535,0,0,0-2.769,7.484A21.294,21.294,0,0,0,8.232,26.7,65.334,65.334,0,0,0,21.3,39.769a21.3,21.3,0,0,0,11.162,4.2c.246.018.491.028.736.028a9.536,9.536,0,0,0,6.748-2.8l2.509-2.509a5.274,5.274,0,0,0,0-7.459Z\"\n      ></path>\n    </svg>\n    <svg\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      xml:space=\"preserve\"\n      viewBox=\"0 0 24 24\"\n      version=\"1.1\"\n      style=\"enable-background:new 0 0 24 24;\"\n      class=\"svg\"\n    >\n      <g id=\"info\"></g>\n      <g id=\"icons\">\n        <path\n          id=\"share\"\n          d=\"M21.7,10.2l-6.6-6C14.6,3.7,14,4.2,14,5v3c-4.7,0-8.7,2.9-10.6,6.8c-0.7,1.3-1.1,2.7-1.4,4.1   c-0.2,1,1.3,1.5,1.9,0.6C6.1,16,9.8,13.7,14,13.7V17c0,0.8,0.6,1.3,1.1,0.8l6.6-6C22.1,11.4,22.1,10.6,21.7,10.2z\"\n        ></path>\n      </g>\n    </svg>\n  </span>\n  <span class=\"text\">+</span>\n</div>",
    "css": "/* From Uiverse.io by bociKond  - Website: https://codepen.io/milanraring/pen/JjoamZx - Name: Milan Raring - Tags: simple, tooltip, social, notification */\n.tooltip-container {\n  --white: #f2f2f2;\n  --background: #1f8392;\n  position: relative;\n  background: var(--background);\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 2rem;\n  font-weight: 900;\n  color: var(--white);\n  width: 5rem;\n  aspect-ratio: 1/1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n}\n\n.tooltip {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 0.3em 0.6em;\n  opacity: 0;\n  pointer-events: none;\n  background: var(--background);\n  transition: all 300ms;\n  fill: white;\n\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  border-radius: 30rem;\n}\n.tooltip .svg {\n  height: 3rem;\n  aspect-ratio: 1/1;\n  cursor: pointer;\n}\n.tooltip .svg:nth-child(2) {\n  width: 4rem;\n}\n.tooltip::before {\n  position: absolute;\n  content: \"\";\n  height: 0.6em;\n  width: 0.6em;\n  bottom: -0.2em;\n  left: 50%;\n  transform: translate(-50%) rotate(45deg);\n  background: var(--background);\n}\n.tooltip-container .text {\n  transition: all 600ms;\n}\n.tooltip-container:hover .text {\n  transform: rotate(225deg);\n}\n.tooltip-container:hover .tooltip {\n  top: -100%;\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n}"
  },
  {
    "id": "uiverse-mohamedaboseada_bitter-skunk-14",
    "title": "Bitter Skunk",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "MohamedAboSeada",
      "profileUrl": "https://uiverse.io/MohamedAboSeada/bitter-skunk-14"
    },
    "license": "MIT",
    "description": "Bitter Skunk · hover by MohamedAboSeada",
    "tags": [
      "hover",
      "simple",
      "tooltip",
      "animation",
      "minimalist",
      "rounded",
      "cube",
      "modern"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"tooltip-container\">\n  <div class=\"tooltip\">\n    <p>This is a test</p>\n    <button>Got It</button>\n    <div class=\"line\"></div>\n  </div>\n  <span class=\"text\">Tooltip</span>\n</div>",
    "css": "/* From Uiverse.io by MohamedAboSeada  - Tags: simple, tooltip, animation, minimalist, hover, rounded, cube, modern */\n.tooltip-container {\n  position: relative;\n  height: 50px;\n  display: flex;\n  background-color: darkgray;\n  border-radius: 5px;\n  box-shadow: 0 3px 0 rgb(0 0 0 / 80%);\n  width: 200px;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n}\n.tooltip {\n  position: absolute;\n  top: -110px;\n  left: 50%;\n  opacity: 0;\n  transition: 300ms ease;\n  background-color: #000;\n  color: #fff;\n  border-radius: 5px;\n  display: flex;\n  gap: 10px 0;\n  cursor: auto;\n  box-shadow: 0 0 10px rgb(0 0 0 / 50%);\n  font-style: oblique;\n  flex-direction: column;\n  padding: 10px;\n  width: 200px;\n  animation: opacity;\n  transform: translateX(-50%);\n}\n.tooltip button {\n  outline: none;\n  border: 1px solid #fff;\n  background-color: transparent;\n  color: #fff;\n  width: 70px;\n  height: 30px;\n  border-radius: 5px;\n  font-family: inherit;\n  font-size: 1rem;\n  align-self: flex-end;\n  cursor: pointer;\n}\n.line {\n  position: absolute;\n  width: 3px;\n  height: 25px;\n  background-color: #000;\n  top: 100%;\n  left: 50%;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  transform: translateX(-50%);\n}\n.line::before {\n  content: \"\";\n  position: absolute;\n  bottom: -5px;\n  width: 10px;\n  height: 10px;\n  background-color: #000;\n  border-radius: 50%;\n}\n.tooltip-container:hover > .tooltip {\n  opacity: 1;\n}\n.tooltip-container:hover > .tooltip > .line {\n  animation: HeightUP 400ms ease;\n}\n@keyframes HeightUP {\n  0% {\n    height: 0;\n  }\n  100% {\n    height: 25px;\n  }\n}\n@keyframes opcaityUp {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}"
  },
  {
    "id": "uiverse-neerajbaniwal_sweet-sloth-99",
    "title": "Sweet Sloth",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "neerajbaniwal",
      "profileUrl": "https://uiverse.io/neerajbaniwal/sweet-sloth-99"
    },
    "license": "MIT",
    "description": "Sweet Sloth · hover by neerajbaniwal",
    "tags": [
      "hover",
      "tooltip",
      "animation",
      "social media",
      "animated",
      "svg",
      "buttons",
      "bounce animation"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<div class=\"wrapper\">\n  <input type=\"checkbox\" />\n  <div class=\"btn\"></div>\n  <div class=\"tooltip\">\n    <svg></svg>\n    <svg></svg>\n    <svg></svg>\n  </div>\n  <svg></svg>\n</div>\n\n<svg style=\"display: none;\" xmlns=\"http://www.w3.org/2000/svg\">\n  <symbol id=\"icon-01\" viewBox=\"0 0 26 22\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path\n      transform=\"translate(0 -2)\"\n      d=\"M18.29,5.76l-.7-1.37A2.59,2.59,0,0,0,15.29,3H10.71a2.59,2.59,0,0,0-2.3,1.39l-.7,1.37a2.6,2.6,0,0,1-2.3,1.39H3.58A2.57,2.57,0,0,0,1,9.71V20.44A2.57,2.57,0,0,0,3.58,23H22.42A2.57,2.57,0,0,0,25,20.44V9.71a2.57,2.57,0,0,0-2.58-2.56H20.59A2.6,2.6,0,0,1,18.29,5.76Z\"\n    ></path>\n    <ellipse ry=\"4.49\" rx=\"4.52\" cy=\"12.99\" cx=\"13\"></ellipse>\n  </symbol>\n  <symbol id=\"icon-02\" viewBox=\"0 0 26 22\" xmlns=\"http://www.w3.org/2000/svg\">\n    <line y2=\"9.42\" x2=\"25\" y1=\"12.58\" x1=\"25\"></line>\n    <line y2=\"7.84\" x2=\"21\" y1=\"14.16\" x1=\"21\"></line>\n    <line y2=\"6.26\" x2=\"17\" y1=\"15.74\" x1=\"17\"></line>\n    <line y2=\"1\" x2=\"13\" y1=\"21\" x1=\"13\"></line>\n    <line y2=\"4.68\" x2=\"9\" y1=\"17.32\" x1=\"9\"></line>\n    <line y2=\"8.37\" x2=\"5\" y1=\"13.63\" x1=\"5\"></line>\n    <line y2=\"10.47\" x2=\"1\" y1=\"11.53\" x1=\"1\"></line>\n  </symbol>\n  <symbol id=\"icon-03\" viewBox=\"0 0 26 22\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon\n      points=\"8.08 10 1 21 25 21 18.09 12.66 13.78 17.45 8.08 10\"\n    ></polygon>\n    <circle r=\"3\" cy=\"4\" cx=\"8\"></circle>\n  </symbol>\n\n  <symbol\n    id=\"shape-01\"\n    viewBox=\"0 0 300 300\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n  >\n    <polygon\n      points=\"155.77 140.06 141.08 152.42 159.12 158.96 155.77 140.06\"\n      stroke=\"var(--shape-color-03)\"\n    ></polygon>\n  </symbol>\n  <symbol\n    id=\"shape-02\"\n    viewBox=\"0 0 300 300\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n  >\n    <g stroke=\"var(--shape-color-02)\">\n      <line y2=\"152.29\" x2=\"141.54\" y1=\"146.73\" x1=\"158.66\"></line>\n      <line y2=\"158.07\" x2=\"152.88\" y1=\"140.95\" x1=\"147.32\"></line>\n    </g>\n  </symbol>\n  <symbol\n    id=\"shape-03\"\n    viewBox=\"0 0 300 300\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n  >\n    <circle\n      r=\"13\"\n      cy=\"149.51\"\n      cx=\"150.1\"\n      stroke=\"var(--shape-color-01)\"\n    ></circle>\n  </symbol>\n  <symbol\n    id=\"shape-04\"\n    viewBox=\"0 0 300 300\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n  >\n    <circle r=\"4\" cy=\"149.51\" cx=\"150.1\" fill=\"var(--shape-color-01)\"></circle>\n  </symbol>\n  <symbol\n    id=\"shape-05\"\n    viewBox=\"0 0 300 300\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n  >\n    <rect\n      transform=\"translate(40.44 -31.76) rotate(13.94)\"\n      height=\"18\"\n      width=\"18\"\n      y=\"140.51\"\n      x=\"141.1\"\n      stroke=\"var(--shape-color-03)\"\n    ></rect>\n  </symbol>\n  <symbol\n    id=\"shape-06\"\n    viewBox=\"0 0 300 300\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n  >\n    <g stroke=\"var(--shape-color-02)\">\n      <line y2=\"146.24\" x2=\"141.72\" y1=\"152.78\" x1=\"158.48\"></line>\n      <line y2=\"157.89\" x2=\"146.83\" y1=\"141.13\" x1=\"153.37\"></line>\n    </g>\n  </symbol>\n  <symbol\n    id=\"shape-07\"\n    viewBox=\"0 0 300 300\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n  >\n    <rect\n      transform=\"translate(-42.94 62.23) rotate(-20.56)\"\n      height=\"24\"\n      width=\"24\"\n      y=\"137.51\"\n      x=\"138.1\"\n      stroke=\"var(--shape-color-03)\"\n    ></rect>\n  </symbol>\n\n  <symbol\n    id=\"shape-08\"\n    viewBox=\"0 0 300 300\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n  >\n    <circle r=\"4\" cy=\"149.51\" cx=\"150.1\" fill=\"var(--shape-color-01)\"></circle>\n  </symbol>\n  <symbol\n    id=\"shape-09\"\n    viewBox=\"0 0 300 300\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n  >\n    <circle\n      r=\"8\"\n      cy=\"149.51\"\n      cx=\"150.1\"\n      stroke=\"var(--shape-color-01)\"\n    ></circle>\n  </symbol>\n</svg>",
    "css": "/* From Uiverse.io by neerajbaniwal  - Tags: tooltip, animation, social media, animated, svg, buttons, bounce animation */\n.wrapper {\n  --background: #62abff;\n  --icon-color: #414856;\n  --shape-color-01: #b8cbee;\n  --shape-color-02: #7691e8;\n  --shape-color-03: #fdd053;\n  --width: 90px;\n  --height: 90px;\n  --border-radius: var(--height);\n  width: var(--width);\n  height: var(--height);\n  position: relative;\n  border-radius: var(--border-radius);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.wrapper .btn {\n  background: var(--background);\n  width: var(--width);\n  height: var(--height);\n  position: relative;\n  z-index: 3;\n  border-radius: var(--border-radius);\n  box-shadow: 0 10px 30px rgba(65, 72, 86, 0.05);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  -webkit-animation: plus-animation-reverse 0.5s ease-out forwards;\n  animation: plus-animation-reverse 0.5s ease-out forwards;\n}\n.wrapper .btn::before,\n.wrapper .btn::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-radius: 4px;\n  background: #fff;\n}\n.wrapper .btn::before {\n  width: 4px;\n  height: 28px;\n}\n.wrapper .btn::after {\n  width: 28px;\n  height: 4px;\n}\n.wrapper .tooltip {\n  width: 90px;\n  height: 75px;\n  border-radius: 70px;\n  position: absolute;\n  background: #fff;\n  z-index: 2;\n  padding: 0 15px;\n  box-shadow: 0 10px 30px rgba(65, 72, 86, 0.05);\n  opacity: 0;\n  top: 0;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  transition: opacity 0.15s ease-in, top 0.15s ease-in, width 0.15s ease-in;\n}\n.wrapper .tooltip > svg {\n  width: 100%;\n  height: 26px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  cursor: pointer;\n}\n.wrapper .tooltip > svg .icon {\n  fill: none;\n  stroke: var(--icon-color);\n  stroke-width: 2px;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  opacity: 0.4;\n  transition: opacity 0.3s ease;\n}\n.wrapper .tooltip > svg:hover .icon {\n  opacity: 1;\n}\n.wrapper .tooltip::after {\n  content: \"\";\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  border-radius: 3px;\n  position: absolute;\n  left: 50%;\n  margin-left: -10px;\n  bottom: -8px;\n  transform: rotate(45deg);\n  z-index: 0;\n}\n.wrapper > svg {\n  width: 300px;\n  height: 300px;\n  position: absolute;\n  z-index: 1;\n  transform: scale(0);\n}\n.wrapper > svg .shape {\n  fill: none;\n  stroke: none;\n  stroke-width: 3px;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  transform-origin: 50% 20%;\n}\n.wrapper input {\n  height: 100%;\n  width: 100%;\n  border-radius: var(--border-radius);\n  cursor: pointer;\n  position: absolute;\n  z-index: 5;\n  opacity: 0;\n}\n.wrapper input:checked ~ svg {\n  -webkit-animation: pang-animation 1.2s ease-out forwards;\n  animation: pang-animation 1.2s ease-out forwards;\n}\n.wrapper input:checked ~ svg .shape:nth-of-type(1) {\n  transform: translate(25px, 30%) rotate(40deg);\n}\n.wrapper input:checked ~ svg .shape:nth-of-type(2) {\n  transform: translate(-4px, 30%) rotate(80deg);\n}\n.wrapper input:checked ~ svg .shape:nth-of-type(3) {\n  transform: translate(12px, 30%) rotate(120deg);\n}\n.wrapper input:checked ~ svg .shape:nth-of-type(4) {\n  transform: translate(8px, 30%) rotate(160deg);\n}\n.wrapper input:checked ~ svg .shape:nth-of-type(5) {\n  transform: translate(21px, 30%) rotate(200deg);\n}\n.wrapper input:checked ~ svg .shape:nth-of-type(6) {\n  transform: translate(0px, 30%) rotate(240deg);\n}\n.wrapper input:checked ~ svg .shape:nth-of-type(7) {\n  transform: translate(17px, 30%) rotate(280deg);\n}\n.wrapper input:checked ~ svg .shape:nth-of-type(8) {\n  transform: translate(-3px, 30%) rotate(320deg);\n}\n.wrapper input:checked ~ svg .shape:nth-of-type(9) {\n  transform: translate(25px, 30%) rotate(360deg);\n}\n.wrapper input:checked ~ .btn {\n  -webkit-animation: plus-animation 0.5s ease-out forwards;\n  animation: plus-animation 0.5s ease-out forwards;\n}\n.wrapper input:checked ~ .tooltip {\n  width: 190px;\n  height: 70px;\n  -webkit-animation: stretch-animation 1s ease-out forwards 0.15s;\n  animation: stretch-animation 1s ease-out forwards 0.15s;\n  top: -90px;\n  opacity: 1;\n}\n\n@-webkit-keyframes pang-animation {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  40% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1.1);\n    opacity: 0;\n  }\n}\n\n@keyframes pang-animation {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  40% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1.1);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes plus-animation {\n  0% {\n    transform: rotate(0) scale(1);\n  }\n  20% {\n    transform: rotate(60deg) scale(0.93);\n  }\n  55% {\n    transform: rotate(35deg) scale(0.97);\n  }\n  80% {\n    transform: rotate(48deg) scale(0.94);\n  }\n  100% {\n    transform: rotate(45deg) scale(0.95);\n  }\n}\n@keyframes plus-animation {\n  0% {\n    transform: rotate(0) scale(1);\n  }\n  20% {\n    transform: rotate(60deg) scale(0.93);\n  }\n  55% {\n    transform: rotate(35deg) scale(0.97);\n  }\n  80% {\n    transform: rotate(48deg) scale(0.94);\n  }\n  100% {\n    transform: rotate(45deg) scale(0.95);\n  }\n}\n@-webkit-keyframes plus-animation-reverse {\n  0% {\n    transform: rotate(45deg) scale(0.95);\n  }\n  20% {\n    transform: rotate(-15deg);\n  }\n  55% {\n    transform: rotate(10deg);\n  }\n  80% {\n    transform: rotate(-3deg);\n  }\n  100% {\n    transform: rotate(0) scale(1);\n  }\n}\n@keyframes plus-animation-reverse {\n  0% {\n    transform: rotate(45deg) scale(0.95);\n  }\n  20% {\n    transform: rotate(-15deg);\n  }\n  55% {\n    transform: rotate(10deg);\n  }\n  80% {\n    transform: rotate(-3deg);\n  }\n  100% {\n    transform: rotate(0) scale(1);\n  }\n}\n@-webkit-keyframes stretch-animation {\n  0% {\n    transform: scale(1, 1);\n  }\n  10% {\n    transform: scale(1.1, 0.9);\n  }\n  30% {\n    transform: scale(0.9, 1.1);\n  }\n  50% {\n    transform: scale(1.05, 0.95);\n  }\n  100% {\n    transform: scale(1, 1);\n  }\n}\n@keyframes stretch-animation {\n  0% {\n    transform: scale(1, 1);\n  }\n  10% {\n    transform: scale(1.1, 0.9);\n  }\n  30% {\n    transform: scale(0.9, 1.1);\n  }\n  50% {\n    transform: scale(1.05, 0.95);\n  }\n  100% {\n    transform: scale(1, 1);\n  }\n}\n\n.socials {\n  position: fixed;\n  display: block;\n  left: 20px;\n  bottom: 20px;\n}\n.socials > a {\n  display: block;\n  width: 30px;\n  opacity: 0.2;\n  transform: scale(var(--scale, 0.8));\n  transition: transform 0.3s cubic-bezier(0.38, -0.12, 0.24, 1.91);\n}\n.socials > a:hover {\n  --scale: 1;\n}"
  },
  {
    "id": "uiverse-vinodjangid07_mighty-elephant-52",
    "title": "Mighty Elephant",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "vinodjangid07",
      "profileUrl": "https://uiverse.io/vinodjangid07/mighty-elephant-52"
    },
    "license": "MIT",
    "description": "Mighty Elephant · hover by vinodjangid07",
    "tags": [
      "hover",
      "tooltip",
      "animation",
      "social",
      "social media",
      "follow",
      "hover effect"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"tooltip-container\">\n  <span class=\"tooltip\">45k</span>\n  <span class=\"text\">\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      fill=\"none\"\n      viewBox=\"0 0 95 114\"\n      class=\"svgIcon\"\n    >\n      <rect fill=\"black\" rx=\"28.5\" height=\"57\" width=\"57\" x=\"19\"></rect>\n      <path\n        fill=\"black\"\n        d=\"M0 109.5C0 83.2665 21.2665 62 47.5 62V62C73.7335 62 95 83.2665 95 109.5V114H0V109.5Z\"\n      ></path>\n    </svg>\n    Follow</span\n  >\n</div>",
    "css": "/* From Uiverse.io by vinodjangid07  - Tags: tooltip, animation, social, hover, social media, follow, hover effect */\n.tooltip-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  transition: all 0.3s;\n  background-color: rgb(255, 255, 255);\n  padding: 11px 18px;\n  border-radius: 12px;\n  cursor: pointer;\n  border: 1px solid rgb(211, 211, 211);\n}\n\n.text {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  color: rgb(0, 0, 0);\n}\n.svgIcon {\n  width: 16px;\n  height: auto;\n}\n.tooltip {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 0.3em 0.6em;\n  opacity: 0;\n  pointer-events: none;\n  transition: all 0.3s;\n  background-color: rgb(255, 255, 255);\n  border-radius: 12px;\n  color: rgb(34, 34, 34);\n}\n\n.tooltip::before {\n  position: absolute;\n  content: \"\";\n  height: 0.6em;\n  width: 0.6em;\n  bottom: -0.2em;\n  left: 50%;\n  transform: translate(-50%) rotate(45deg);\n  background-color: rgb(255, 255, 255);\n}\n\n.tooltip-container:hover .tooltip {\n  top: -100%;\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n}"
  },
  {
    "id": "uiverse-souravbandyopadhyay_ugly-pug-52",
    "title": "Ugly Pug",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "SouravBandyopadhyay",
      "profileUrl": "https://uiverse.io/SouravBandyopadhyay/ugly-pug-52"
    },
    "license": "MIT",
    "description": "Ugly Pug · hover by SouravBandyopadhyay",
    "tags": [
      "hover",
      "simple",
      "tooltip",
      "black",
      "clean",
      "submit",
      "transition",
      "hover effect"
    ],
    "previewType": "css",
    "durationMs": 700,
    "accentColor": null,
    "html": "<div class=\"button\" data-tooltip=\"PRICE $20\">\n  <div class=\"button-wrapper\">\n    <div class=\"text\">Add To Cart</div>\n    <span class=\"icon\">\n      <svg\n        xmlns=\"http://www.w3.org/2000/svg\"\n        width=\"16\"\n        height=\"16\"\n        fill=\"currentColor\"\n        class=\"bi bi-cart2\"\n        viewBox=\"0 0 16 16\"\n      >\n        <path\n          d=\"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z\"\n        ></path>\n      </svg>\n    </span>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by SouravBandyopadhyay  - Tags: simple, tooltip, black, clean, submit, transition, hover effect, tailwind */\n.button {\n  --width: 100px;\n  --height: 35px;\n  --tooltip-height: 35px;\n  --tooltip-width: 90px;\n  --gap-between-tooltip-to-button: 18px;\n  --button-color: #222;\n  --tooltip-color: #fff;\n  width: var(--width);\n  height: var(--height);\n  background: var(--button-color);\n  position: relative;\n  text-align: center;\n  border-radius: 0.5em;\n  font-family: \"Arial\";\n  transition: background 0.7s;\n}\n\n.button::before {\n  position: absolute;\n  content: attr(data-tooltip);\n  width: var(--tooltip-width);\n  height: var(--tooltip-height);\n  background-color: #555;\n  font-size: 0.9rem;\n  color: #fff;\n  border-radius: 0.25em;\n  line-height: var(--tooltip-height);\n  bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) + 10px);\n  left: calc(50% - var(--tooltip-width) / 2);\n}\n\n.button::after {\n  position: absolute;\n  content: \"\";\n  width: 0;\n  height: 0;\n  border: 10px solid transparent;\n  border-top-color: #555;\n  left: calc(50% - 10px);\n  bottom: calc(100% + var(--gap-between-tooltip-to-button) - 10px);\n}\n\n.button::after,\n.button::before {\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.5s;\n}\n\n.text {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.button-wrapper,\n.text,\n.icon {\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  color: #fff;\n}\n\n.text {\n  top: 0;\n}\n\n.text,\n.icon {\n  transition: top 0.5s;\n}\n\n.icon {\n  color: #fff;\n  top: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.icon svg {\n  width: 24px;\n  height: 24px;\n}\n\n.button:hover {\n  background: #222;\n}\n\n.button:hover .text {\n  top: -100%;\n}\n\n.button:hover .icon {\n  top: 0;\n}\n\n.button:hover:before,\n.button:hover:after {\n  opacity: 1;\n  visibility: visible;\n}\n\n.button:hover:after {\n  bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) - 20px);\n}\n\n.button:hover:before {\n  bottom: calc(var(--height) + var(--gap-between-tooltip-to-button));\n}"
  },
  {
    "id": "uiverse-gharsh11032000_spotty-zebra-83",
    "title": "Spotty Zebra",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "gharsh11032000",
      "profileUrl": "https://uiverse.io/gharsh11032000/spotty-zebra-83"
    },
    "license": "MIT",
    "description": "Spotty Zebra · hover by gharsh11032000",
    "tags": [
      "hover",
      "tooltip",
      "animation",
      "bounce",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 400,
    "accentColor": null,
    "html": "<div class=\"tooltip-container\">\n  <span class=\"tooltip\">Uiverse.io</span>\n  <span class=\"text\">Tooltip 👆</span>\n  <span>Hello! 👋</span>\n</div>",
    "css": "/* From Uiverse.io by gharsh11032000  - Tags: tooltip, animation, hover, bounce */\n/* This is an example, feel free to delete this code */\n.tooltip-container {\n  --background: #333333;\n  --color: #e8e8e8;\n  position: relative;\n  cursor: pointer;\n  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--color);\n  padding: 0.7em 1.8em;\n  border-radius: 8px;\n  text-transform: uppercase;\n  height: 60px;\n  width: 180px;\n  display: grid;\n  place-items: center;\n  border: 2px solid var(--color);\n}\n\n.text {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  place-items: center;\n  transform-origin: -100%;\n  transform: scale(1);\n  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);\n}\n\n.tooltip-container span:last-child {\n  position: absolute;\n  top: 0%;\n  left: 100%;\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n  opacity: 1;\n  background-color: var(--background);\n  z-index: -1;\n  border: 2px solid var(--background);\n  transform: scale(0);\n  transform-origin: 0;\n  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);\n  display: grid;\n  place-items: center;\n}\n\n.tooltip {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 0.3em 0.6em;\n  opacity: 0;\n  pointer-events: none;\n  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);\n  background: var(--background);\n  z-index: -1;\n  border-radius: 8px;\n  scale: 0;\n  transform-origin: 0 0;\n  text-transform: capitalize;\n  font-weight: 400;\n  font-size: 16px;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;\n}\n\n.tooltip::before {\n  position: absolute;\n  content: \"\";\n  height: 0.6em;\n  width: 0.6em;\n  bottom: -0.2em;\n  left: 50%;\n  transform: translate(-50%) rotate(45deg);\n  background: var(--background);\n}\n\n.tooltip-container:hover .tooltip {\n  top: -100%;\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n  scale: 1;\n  animation: shake 0.5s ease-in-out both;\n}\n\n.tooltip-container:hover {\n  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;\n  color: white;\n  border-color: transparent;\n}\n\n.tooltip-container:hover span:last-child {\n  transform: scale(1);\n  left: 0;\n}\n\n.tooltip-container:hover .text {\n  opacity: 0;\n  top: 0%;\n  left: 100%;\n  transform: scale(0);\n}\n\n@keyframes shake {\n  0% {\n    rotate: 0;\n  }\n\n  25% {\n    rotate: 7deg;\n  }\n\n  50% {\n    rotate: -7deg;\n  }\n\n  75% {\n    rotate: 1deg;\n  }\n\n  100% {\n    rotate: 0;\n  }\n}"
  },
  {
    "id": "uiverse-tsiangana_honest-bobcat-61",
    "title": "Honest Bobcat",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "Tsiangana",
      "profileUrl": "https://uiverse.io/Tsiangana/honest-bobcat-61"
    },
    "license": "MIT",
    "description": "Honest Bobcat · hover by Tsiangana",
    "tags": [
      "hover",
      "tooltip",
      "social media",
      "creative",
      "advanced"
    ],
    "previewType": "css",
    "durationMs": 600,
    "accentColor": null,
    "html": "<div class=\"tooltip-container\">\n  <span class=\"text\">\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"22\"\n      height=\"22\"\n      class=\"bi bi-send-fill\"\n      viewBox=\"0 0 16 16\"\n    >\n      <path\n        d=\"M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z\"\n      ></path>\n    </svg>\n  </span>\n  <span class=\"tooltip1\">\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"20\"\n      height=\"20\"\n      class=\"bi bi-twitter\"\n      viewBox=\"0 0 16 16\"\n    >\n      <path\n        d=\"M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15\"\n      ></path>\n    </svg>\n  </span>\n  <span class=\"tooltip2\">\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"20\"\n      height=\"20\"\n      class=\"bi bi-facebook\"\n      viewBox=\"0 0 16 16\"\n    >\n      <path\n        d=\"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951\"\n      ></path>\n    </svg>\n  </span>\n  <span class=\"tooltip3\">\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"20\"\n      height=\"20\"\n      class=\"bi bi-whatsapp\"\n      viewBox=\"0 0 16 16\"\n    >\n      <path\n        d=\"M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232\"\n      ></path>\n    </svg>\n  </span>\n  <span class=\"tooltip4\">\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"20\"\n      height=\"20\"\n      class=\"bi bi-discord\"\n      viewBox=\"0 0 16 16\"\n    >\n      <path\n        d=\"M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612\"\n      ></path>\n    </svg>\n  </span>\n  <span class=\"tooltip5\">\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"20\"\n      height=\"20\"\n      class=\"bi bi-pinterest\"\n      viewBox=\"0 0 16 16\"\n    >\n      <path\n        d=\"M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0\"\n      ></path>\n    </svg>\n  </span>\n  <span class=\"tooltip6\">\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"20\"\n      height=\"20\"\n      viewBox=\"0 0 16 16\"\n    >\n      <path\n        fill-rule=\"evenodd\"\n        d=\"M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8m5.284 3.688a6.8 6.8 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A7 7 0 0 1 8 1.18m-2.907.642A43 43 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.87 6.87 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.82 6.82 0 0 1-1.752-4.564zM8 14.837a6.8 6.8 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.3 28.3 0 0 1 1.457 5.18A6.7 6.7 0 0 1 8 14.837m3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.77 6.77 0 0 1-2.924 4.573z\"\n      ></path>\n    </svg>\n  </span>\n  <span class=\"tooltip7\">\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"20\"\n      height=\"20\"\n      class=\"bi bi-github\"\n      viewBox=\"0 0 16 16\"\n    >\n      <path\n        d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8\"\n      ></path>\n    </svg>\n  </span>\n  <span class=\"tooltip8\">\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"20\"\n      height=\"20\"\n      class=\"bi bi-reddit\"\n      viewBox=\"0 0 16 16\"\n    >\n      <path\n        d=\"M6.167 8a.83.83 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661m1.843 3.647c.315 0 1.403-.038 1.976-.611a.23.23 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83s.83-.381.83-.83a.831.831 0 0 0-1.66 0z\"\n      ></path>\n      <path\n        d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.2.2 0 0 0-.153.028.2.2 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224q-.03.17-.029.353c0 1.795 2.091 3.256 4.669 3.256s4.668-1.451 4.668-3.256c0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165\"\n      ></path>\n    </svg>\n  </span>\n  <span class=\"tooltip9\"> </span>\n</div>",
    "css": "/* From Uiverse.io by Tsiangana  - Tags: tooltip, hover, social media, creative, advanced */\n/* This is an example, feel free to delete this code */\n.tooltip-container {\n  background: rgb(3, 169, 244);\n  background: linear-gradient(\n    138deg,\n    rgba(3, 169, 244, 1) 15%,\n    rgba(63, 180, 233, 1) 65%\n  );\n  position: relative;\n  cursor: pointer;\n  font-size: 17px;\n  padding: 0.7em 0.7em;\n  border-radius: 50px;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);\n}\n.tooltip-container:hover {\n  background: #fff;\n  transition: all 0.6s;\n}\n.tooltip-container .text {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  fill: #fff;\n  transition: all 0.2s;\n}\n.tooltip-container:hover .text {\n  fill: rgb(3, 169, 244);\n  transition: all 0.6s;\n}\n\n/* Inicio do tooltip twitter */\n.tooltip1 {\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  opacity: 0;\n  visibility: hidden;\n  background: #fff;\n  fill: #03a9f4;\n  padding: 10px;\n  border-radius: 50px;\n  transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;\n  z-index: 1;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.tooltip-container:hover .tooltip1 {\n  top: 150%;\n  opacity: 1;\n  visibility: visible;\n  background: #fff;\n  border-radius: 50px;\n  transform: translate(-50%, -5px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tooltip-container:hover .tooltip1:hover {\n  background: #03a9f4;\n  fill: #fff;\n}\n/* Fim do tooltip twitter */\n\n/* Inicio do tooltip facebook */\n.tooltip2 {\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  opacity: 0;\n  visibility: hidden;\n  background: #fff;\n  fill: #0462df;\n  padding: 10px;\n  border-radius: 50px;\n  transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;\n  z-index: 1;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.tooltip-container:hover .tooltip2 {\n  top: -120%;\n  opacity: 1;\n  visibility: visible;\n  background: #fff;\n  transform: translate(-50%, -5px);\n  border-radius: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.tooltip-container:hover .tooltip2:hover {\n  background: #0462df;\n  fill: #fff;\n}\n/* Fim do tooltip facebook */\n\n/* Inicio do tooltip whatsApp */\n.tooltip3 {\n  position: absolute;\n  top: 100%;\n  left: 60%;\n  transform: translateX(80%);\n  opacity: 0;\n  visibility: hidden;\n  background: #fff;\n  fill: #1db954;\n  padding: 10px;\n  border-radius: 50px;\n  transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;\n  z-index: 1;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.tooltip-container:hover .tooltip3 {\n  top: 10%;\n  opacity: 1;\n  visibility: visible;\n  background: #fff;\n  transform: translate(85%, -5px);\n  border-radius: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tooltip-container:hover .tooltip3:hover {\n  background: #1db954;\n  fill: #fff;\n}\n/* Fim do tooltip whatsApp */\n\n/* Inicio do tooltip Discord */\n.tooltip4 {\n  position: absolute;\n  top: 100%;\n  left: -190%;\n  transform: translateX(70%);\n  opacity: 0;\n  visibility: hidden;\n  background: #fff;\n  fill: #8c9eff;\n  padding: 10px;\n  border-radius: 50px;\n  transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;\n  z-index: 1;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.tooltip-container:hover .tooltip4 {\n  top: 10%;\n  opacity: 1;\n  visibility: visible;\n  background: #fff;\n  transform: translate(70%, -5px);\n  border-radius: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tooltip-container:hover .tooltip4:hover {\n  background: #8c9eff;\n  fill: #fff;\n}\n/* Fim do tooltip Discord */\n\n/* Inicio do tooltip pinterest */\n.tooltip5 {\n  position: absolute;\n  top: 100%;\n  left: -145%;\n  transform: translateX(70%);\n  opacity: 0;\n  visibility: hidden;\n  background: #fff;\n  fill: #bd081c;\n  padding: 10px;\n  border-radius: 50px;\n  transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;\n  z-index: 1;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.tooltip-container:hover .tooltip5 {\n  top: -78%;\n  opacity: 1;\n  visibility: visible;\n  background: #fff;\n  transform: translate(70%, -5px);\n  border-radius: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tooltip-container:hover .tooltip5:hover {\n  background: #bd081c;\n  fill: #fff;\n}\n/* Fim do tooltip pinterest */\n\n/* Inicio do tooltip dribbble */\n.tooltip6 {\n  position: absolute;\n  top: 100%;\n  left: 35%;\n  transform: translateX(70%);\n  opacity: 0;\n  visibility: hidden;\n  background: #fff;\n  fill: #ea4c89;\n  padding: 10px;\n  border-radius: 50px;\n  transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;\n  z-index: 1;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.tooltip-container:hover .tooltip6 {\n  top: -79%;\n  opacity: 1;\n  visibility: visible;\n  background: #fff;\n  transform: translate(70%, -5px);\n  border-radius: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tooltip-container:hover .tooltip6:hover {\n  background: #ea4c89;\n  fill: #fff;\n}\n/* Fim do tooltip dribbble */\n\n/* Inicio do tooltip github */\n.tooltip7 {\n  position: absolute;\n  top: 100%;\n  left: 39%;\n  transform: translateX(70%);\n  opacity: 0;\n  visibility: hidden;\n  background: #fff;\n  fill: #000;\n  padding: 10px;\n  border-radius: 50px;\n  transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;\n  z-index: 1;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.tooltip-container:hover .tooltip7 {\n  top: 104%;\n  opacity: 1;\n  visibility: visible;\n  background: #fff;\n  transform: translate(70%, -5px);\n  border-radius: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tooltip-container:hover .tooltip7:hover {\n  background: #000;\n  fill: #fff;\n}\n/* Fim do tooltip github */\n\n/* Inicio do tooltip reddit */\n.tooltip8 {\n  position: absolute;\n  top: 100%;\n  left: -150%;\n  transform: translateX(70%);\n  opacity: 0;\n  visibility: hidden;\n  background: #fff;\n  fill: #ff4500;\n  padding: 10px;\n  border-radius: 50px;\n  transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;\n  z-index: 1;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.tooltip-container:hover .tooltip8 {\n  top: 101%;\n  opacity: 1;\n  visibility: visible;\n  background: #fff;\n  transform: translate(70%, -5px);\n  border-radius: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tooltip-container:hover .tooltip8:hover {\n  background: #ff4500;\n  fill: #fff;\n}\n/* Fim do tooltip reddit */\n\n/* Inicio do tooltip fixo */\n.tooltip9 {\n  position: absolute;\n  top: 0;\n  left: -115%;\n  opacity: 0;\n  visibility: hidden;\n  width: 150px;\n  height: 150px;\n  z-index: -1;\n}\n\n.tooltip-container:hover .tooltip9 {\n  top: -110%;\n  opacity: 1;\n  visibility: visible;\n  border-radius: 50%;\n  z-index: -1;\n}\n/* Fim do tooltip fixo */\n/* Por meio desse ultimo tooltip todos os outros podem\nficar fixos quando houver no principal, para vê-lo dê um\nbackground black acima*/"
  },
  {
    "id": "uiverse-piolho123_lazy-husky-91",
    "title": "Lazy Husky",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "piolho123",
      "profileUrl": "https://uiverse.io/piolho123/lazy-husky-91"
    },
    "license": "MIT",
    "description": "Lazy Husky · hover by piolho123",
    "tags": [
      "hover",
      "simple",
      "tooltip",
      "pink"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"tooltip-container\">\n  <span class=\"tooltip\">Uiverse.io</span>\n  <span class=\"text\">Tooltip</span>\n</div>",
    "css": "/* From Uiverse.io by piolho123  - Tags: simple, tooltip, pink */\n/* This is an example, feel free to delete this code */\n.tooltip-container {\n  border-radius: 20px;\n  --background: #f1f;\n  position: relative;\n  background: var(--background);\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 17px;\n  padding: 0.7em 1.8em;\n  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,\n    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,\n    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,\n    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,\n    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;\n}\n\n.tooltip {\n  border: 1px solid #f1f;\n  border-radius: 20px;\n  position: absolute;\n  top: 0;\n  left: 10%;\n  transform: translateX(-50%);\n  padding: 0.3em 0.6em;\n  opacity: 0;\n  pointer-events: none;\n  transition: all 0.3s;\n  background: transparente;\n  color: #f1f;\n  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,\n    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,\n    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,\n    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,\n    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;\n}\n\n.tooltip::before {\n  position: absolute;\n  content: \"\";\n  height: 0.6em;\n  width: 0.6em;\n  bottom: -0.2em;\n  left: 50%;\n  transform: translate(-50%) rotate(45deg);\n  background: var(--background);\n}\n\n.tooltip-container:hover .tooltip {\n  top: -100%;\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n}"
  },
  {
    "id": "uiverse-dyls00_afraid-newt-19",
    "title": "Afraid Newt",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "Dyls00",
      "profileUrl": "https://uiverse.io/Dyls00/afraid-newt-19"
    },
    "license": "MIT",
    "description": "Afraid Newt · hover by Dyls00",
    "tags": [
      "hover",
      "tooltip",
      "smooth",
      "cube",
      "colorful",
      "custom"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"tooltip-container\">\n  <span class=\"tooltip\">Uiverse.io</span>\n  <span class=\"text\">Tooltip</span>\n</div>",
    "css": "/* From Uiverse.io by Dyls00  - Tags: tooltip, smooth, cube, colorful, custom */\n/* This is an example, feel free to delete this code */\n.tooltip-container {\n  --background: #ee6d22;\n  position: relative;\n  background: var(--background);\n  cursor: pointer;\n  transition: all 0.2s;\n  border-radius: 15px;\n  font-size: 25px;\n  padding: 0.7em 1.8em;\n}\n\n.tooltip {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 0.3em 0.6em;\n  opacity: 0;\n  pointer-events: none;\n  transition: all 0.3s;\n  border-radius: 15px;\n  font-size: 50px;\n  margin-top: 90%;\n  background: black;\n}\n\n.tooltip::before {\n  position: absolute;\n  content: \"\";\n  height: 0.6em;\n  width: 0.6em;\n  bottom: 1.8em;\n  left: 50%;\n  transform: translate(-50%) rotate(180deg);\n  background: var(--background);\n}\n\n.tooltip-container:hover .tooltip {\n  top: -100%;\n  opacity: 1;\n  color: white;\n  visibility: visible;\n  pointer-events: auto;\n}"
  }
];
