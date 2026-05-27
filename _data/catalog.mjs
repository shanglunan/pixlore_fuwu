// 自动生成，请勿手改。重新生成：`node scripts/build-catalog.mjs`
// 来源：uiverse-io/galaxy（MIT 许可，已带作者署名与原链）。生成时间：2026-05-27T08:47:32.430Z
// 条目数：150
export const CATALOG = [
  {
    "id": "uiverse-jkhuger_tidy-skunk-55",
    "title": "Tidy Skunk",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "JkHuger",
      "profileUrl": "https://uiverse.io/JkHuger/tidy-skunk-55"
    },
    "license": "MIT",
    "description": "Tidy Skunk · loader by JkHuger",
    "tags": [
      "loader",
      "pacman",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 5000,
    "accentColor": null,
    "html": "<main id=\"container\">\n        \n        <div class=\"dots\">\n            <div class=\"dot\"></div>\n            <div class=\"dot\"></div>\n            <div class=\"dot\"></div>\n            <div class=\"dot\"></div>\n            <div class=\"dot\"></div>\n            <div class=\"dot\"></div>\n            <div class=\"dot\"></div>\n            <div class=\"dot\"></div>\n            <div class=\"dot\"></div>\n            <div class=\"dot\"></div>\n        </div>\n        <div class=\"dots2\">\n            <div class=\"dot2\"></div>\n            <div class=\"dot2\"></div>\n            <div class=\"dot2\"></div>\n            <div class=\"dot2\"></div>\n            <div class=\"dot2\"></div>\n            <div class=\"dot2\"></div>\n            <div class=\"dot2\"></div>\n            <div class=\"dot2\"></div>\n            <div class=\"dot2\"></div>\n            <div class=\"dot2\"></div>\n        </div>\n        <div class=\"circle\"></div>\n    </main>",
    "css": "/* From Uiverse.io by JkHuger - Tags: loader, pacman */\n.circle {\n  position: relative;\n  left: -100px;\n  width: 0;\n  height: 0;\n  border: 50px solid #FDD835;\n  border-radius: 50%;\n  border-right-color: transparent;\n  animation: move 5s linear 0s infinite normal forwards;\n}\n\n.circle:before {\n  content: \"\";\n  position: absolute;\n  top: -50px;\n  left: -50px;\n  width: 0;\n  height: 0;\n  border: 50px solid #FDD835;\n  border-radius: 50%;\n  border-right-color: transparent;\n  animation: chomp1 .25s ease-in-out 0s infinite normal forwards;\n}\n\n.circle:after {\n  content: \"\";\n  position: absolute;\n  top: -50px;\n  left: -50px;\n  width: 0;\n  height: 0;\n  border: 50px solid #FDD835;\n  border-radius: 50%;\n  border-right-color: transparent;\n  animation: chomp2 .25s ease-in-out 0s infinite normal forwards;\n}\n\n.loader {\n  position: relative;\n  top: 50px;\n  width: 300px;\n  height: 0px;\n  border-top: 10px dotted black;\n  animation: loader_4013 5s ease-in-out 0s infinite normal forwards;\n}\n\n.dots {\n  position: relative;\n  top: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.dot {\n  position: relative;\n  width: 10px;\n  height: 10px;\n  margin: 0 10px;\n  border-radius: 50%;\n  background: #1E88E5;\n  animation: dot1 5s linear 0s infinite none normal;\n}\n\n.dot:nth-child(1) {\n  animation-delay: 0s\n}\n\n.dot:nth-child(2) {\n  animation-delay: 0.25s\n}\n\n.dot:nth-child(3) {\n  animation-delay: 0.5s\n}\n\n.dot:nth-child(4) {\n  animation-delay: 0.75s\n}\n\n.dot:nth-child(5) {\n  animation-delay: 1s\n}\n\n.dot:nth-child(6) {\n  animation-delay: 1.25s\n}\n\n.dot:nth-child(7) {\n  animation-delay: 1.5s\n}\n\n.dot:nth-child(8) {\n  animation-delay: 1.75s\n}\n\n.dot:nth-child(9) {\n  animation-delay: 1.9s\n}\n\n.dot:nth-child(10) {\n  animation-delay: 2.1s\n}\n\n.dots2 {\n  position: relative;\n  top: 50px;\n  left: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.dot2 {\n  position: relative;\n  left: -10px;\n  width: 10px;\n  height: 10px;\n  margin: 0 10px;\n  border-radius: 50%;\n  background: #F44336;\n  opacity: 0;\n  animation: dot2 5s linear 0s infinite none normal;\n}\n\n.dot2:nth-child(10) {\n  animation-delay: 2.5s\n}\n\n.dot2:nth-child(9) {\n  animation-delay: 2.75s\n}\n\n.dot2:nth-child(8) {\n  animation-delay: 3.0s\n}\n\n.dot2:nth-child(7) {\n  animation-delay: 3.25s\n}\n\n.dot2:nth-child(6) {\n  animation-delay: 3.5s\n}\n\n.dot2:nth-child(5) {\n  animation-delay: 3.75s\n}\n\n.dot2:nth-child(4) {\n  animation-delay: 4.0s\n}\n\n.dot2:nth-child(3) {\n  animation-delay: 4.25s\n}\n\n.dot2:nth-child(2) {\n  animation-delay: 4.5s\n}\n\n.dot2:nth-child(1) {\n  animation-delay: 4.6s\n}\n/* #F44336;, #1E88E5, #FDD835; */\n@keyframes chomp1 {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  50% {\n    transform: rotate(45deg);\n  }\n\n  100% {\n    transform: rotate(0deg);\n  }\n}\n\n@keyframes chomp2 {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  50% {\n    transform: rotate(-45deg);\n  }\n\n  100% {\n    transform: rotate(0deg);\n  }\n}\n\n@keyframes move {\n  0%, 100% {\n    left: -100px;\n  }\n\n  0%, 48% {\n    transform: rotateY(0deg);\n  }\n\n  50%, 100% {\n    transform: rotateY(180deg);\n  }\n\n  50% {\n    left: 100%;\n  }\n}\n\n@keyframes loader_4013 {\n  0%, 100% {\n    border-top: 10px dotted #1E88E5;\n  }\n\n  0%, 48% {\n    border-top: 10px dotted #1E88E5;\n  }\n\n  50%, 100% {\n    border-top: 10px dotted #F44336;\n  }\n\n  50% {\n    border-top: 10px dotted #F44336;\n  }\n}\n\n@keyframes dot1 {\n  0%,4% {\n    background: #1E88E5;\n    opacity: 1;\n  }\n\n  5%,94% {\n    background: #F44336;\n    opacity: 0;\n  }\n\n  95%,100% {\n    background: #1E88E5;\n    opacity: 1;\n  }\n}\n\n@keyframes dot2 {\n  0%,4% {\n    background: #F44336;\n    opacity: 1;\n  }\n\n  5%,94% {\n    opacity: 0;\n  }\n\n  95%,100% {\n    background: #F44336;\n    opacity: 1;\n  }\n}"
  },
  {
    "id": "uiverse-nlghtm4re_tasty-puma-74",
    "title": "Tasty Puma",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "NlghtM4re",
      "profileUrl": "https://uiverse.io/NlghtM4re/tasty-puma-74"
    },
    "license": "MIT",
    "description": "Tasty Puma · loader by NlghtM4re",
    "tags": [
      "loader",
      "progress",
      "progress bar",
      "glow",
      "bars",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 5000,
    "accentColor": null,
    "html": "<div class=\"loader\">\n  <div class=\"loader-inner\"> \n    <div class=\"loader-block\"></div>\n    <div class=\"loader-block\"></div>\n    <div class=\"loader-block\"></div>\n    <div class=\"loader-block\"></div>\n    <div class=\"loader-block\"></div>\n    <div class=\"loader-block\"></div>\n    <div class=\"loader-block\"></div>\n    <div class=\"loader-block\"></div>\n    <div class=\"loader-block\"></div>\n    <div class=\"loader-block\"></div>\n    <div class=\"loader-block\"></div>\n    <div class=\"loader-block\"></div>\n    <div class=\"loader-block\"></div>\n    <div class=\"loader-block\"></div>\n    <div class=\"loader-block\"></div>\n    <div class=\"loader-block\"></div>\n    <div class=\"loader-block\"></div>\n    <div class=\"loader-block\"></div>\n    <div class=\"loader-block\"></div>\n    <div class=\"loader-block\"></div>\n    <div class=\"loader-block\"></div>\n    <div class=\"loader-block\"></div>\n    <div class=\"loader-block\"></div>\n    <div class=\"loader-block\"></div>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by NlghtM4re - Tags: progress, progress bar, loader, glow, bars, animated */\n.loader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80px;\n  height: 80px;\n  position: relative;\n}\n\n.loader:before {\n  content: \"\";\n  position: absolute;\n  top: -10px;\n  left: -10px;\n  right: -10px;\n  bottom: -10px;\n  border-radius: 50%;\n}\n\n.loader-inner {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.loader-block {\n  display: inline-block;\n  width: 8px;\n  height: 10px;\n  margin: 2px;\n  background-color: rgb(53, 143, 246);\n  box-shadow: 0 0 30px rgb(53, 143, 246);\n  animation: loader 5s infinite;\n}\n\n.loader-block:nth-child(1) {\n  animation-delay: 0.2s;\n}\n\n.loader-block:nth-child(2) {\n  animation-delay: 0.4s;\n}\n\n.loader-block:nth-child(3) {\n  animation-delay: 0.6s;\n}\n\n.loader-block:nth-child(4) {\n  animation-delay: 0.8s;\n}\n\n.loader-block:nth-child(5) {\n  animation-delay: 1s;\n}\n\n.loader-block:nth-child(6) {\n  animation-delay: 1.2s;\n}\n\n.loader-block:nth-child(7) {\n  animation-delay: 1.4s;\n}\n\n.loader-block:nth-child(8) {\n  animation-delay: 1.6s;\n}\n\n.loader-block:nth-child(9) {\n  animation-delay: 1.8s;\n}\n\n.loader-block:nth-child(10) {\n  animation-delay: 2s;\n}\n\n.loader-block:nth-child(11) {\n  animation-delay: 2.2s;\n}\n\n.loader-block:nth-child(12) {\n  animation-delay: 2.4s;\n}\n\n.loader-block:nth-child(13) {\n  animation-delay: 2.6s;\n}\n\n.loader-block:nth-child(14) {\n  animation-delay: 2.8s;\n}\n\n.loader-block:nth-child(15) {\n  animation-delay: 3s;\n}\n\n.loader-block:nth-child(16) {\n  animation-delay: 3.2s;\n}\n\n.loader-block:nth-child(17) {\n  animation-delay: 3.4s;\n}\n\n.loader-block:nth-child(18) {\n  animation-delay: 3.6s;\n}\n\n.loader-block:nth-child(19) {\n  animation-delay: 3.8s;\n}\n\n.loader-block:nth-child(20) {\n  animation-delay: 4s;\n}\n\n.loader-block:nth-child(21) {\n  animation-delay: 4.2s;\n}\n\n.loader-block:nth-child(22) {\n  animation-delay: 4.4s;\n}\n\n.loader-block:nth-child(23) {\n  animation-delay: 4.6s;\n}\n\n.loader-block:nth-child(24) {\n  animation-delay: 4.8s;\n}\n\n@keyframes loader {\n  0% {\n    transform: scale(1);\n    box-shadow: 0 0 40px rgb(53, 143, 246);\n  }\n\n  13% {\n    transform: scale(1, 4);\n    box-shadow: 0 0 60px rgb(53, 143, 246);\n  }\n\n  26% {\n    transform: scale(1);\n    box-shadow: 0 0 40px rgb(53, 143, 246);\n  }\n}"
  },
  {
    "id": "uiverse-abanoubmagdy1_tall-bobcat-75",
    "title": "Tall Bobcat",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "AbanoubMagdy1",
      "profileUrl": "https://uiverse.io/AbanoubMagdy1/tall-bobcat-75"
    },
    "license": "MIT",
    "description": "Tall Bobcat · loader by AbanoubMagdy1",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 5000,
    "accentColor": null,
    "html": "<div class=\"loader\">\n  <svg class=\"loader-svg\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 47.94 47.94\" style=\"enable-background:new 0 0 47.94 47.94;\" xml:space=\"preserve\">\n<path style=\"fill:#fff;\" d=\"M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757\n\tc2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042\n\tc0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685\n\tc-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528\n\tc-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956\n\tC22.602,0.567,25.338,0.567,26.285,2.486z\"></path>\n</svg>\n</div>",
    "css": "/* From Uiverse.io by AbanoubMagdy1 - Tags: loader */\n.loader {\n  --dim: 6rem;\n  background-color: #ED8A19;\n  width: var(--dim);\n  height: var(--dim);\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  animation: spin_412 5s infinite;\n}\n\n.loader .loader-svg {\n  transform: translateY(-2px) scale(.7);\n}\n\n@keyframes spin_412 {\n  0% {\n    transform: rotate(0) scale(1);\n  }\n\n  50% {\n    transform: rotate(720deg) scale(1.3);\n  }\n\n  100% {\n    transform: rotate(0) scale(1);\n  }\n}"
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
    "id": "uiverse-selfmadesystem_orange-crab-82",
    "title": "Orange Crab",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "SelfMadeSystem",
      "profileUrl": "https://uiverse.io/SelfMadeSystem/orange-crab-82"
    },
    "license": "MIT",
    "description": "Orange Crab · loader by SelfMadeSystem",
    "tags": [
      "loader",
      "animation",
      "animated",
      "svg",
      "steam",
      "valve"
    ],
    "previewType": "css",
    "durationMs": 4000,
    "accentColor": null,
    "html": "<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"loader\">\n  <g class=\"dash\">\n    <path style=\"--sped: 4s;\" pathLength=\"360\" d=\"M 31.9463 1 C 15.6331 1 2.2692 13.6936 1 29.8237 L 17.644 36.7682 C 19.0539 35.794 20.7587 35.2264 22.5909 35.2264 C 22.7563 35.2264 22.9194 35.231 23.0803 35.2399 L 30.4828 24.412 L 30.4828 24.2601 C 30.4828 17.7446 35.7359 12.4423 42.1933 12.4423 C 48.6507 12.4423 53.9038 17.7446 53.9038 24.2601 C 53.9038 30.7756 48.6507 36.08 42.1933 36.08 C 42.104 36.08 42.0168 36.0778 41.9275 36.0755 L 31.3699 43.6747 C 31.3766 43.8155 31.3811 43.9562 31.3811 44.0947 C 31.3811 48.9881 27.4374 52.9675 22.5909 52.9675 C 18.3367 52.9675 14.7773 49.902 13.9729 45.8443 L 2.068 40.8772 C 5.7548 54.0311 17.7312 63.6748 31.9463 63.6748 C 49.0976 63.6748 63 49.6428 63 32.3374 C 63 15.0297 49.0976 1 31.9463 1 Z\" class=\"big\"></path>\n    <path pathLength=\"360\" d=\"M 20.4603 48.5493 L 16.6461 46.9584 C 17.3209 48.3794 18.4917 49.5682 20.0447 50.2206 C 23.4007 51.6328 27.2707 50.0262 28.6694 46.6367 C 29.3464 44.9966 29.3509 43.1867 28.6806 41.5422 C 28.0103 39.8977 26.7434 38.6151 25.119 37.9315 C 23.5035 37.2544 21.7741 37.279 20.2547 37.8576 L 24.1961 39.5022 C 26.6719 40.5434 27.8427 43.4124 26.8104 45.9105 C 25.7803 48.4085 22.936 49.5905 20.4603 48.5493 Z\" class=\"aaa\"></path>\n    <path pathLength=\"360\" d=\"M 49.9968 24.2603 C 49.9968 19.9188 46.4954 16.384 42.1943 16.384 C 37.8908 16.384 34.3894 19.9188 34.3894 24.2603 C 34.3894 28.6017 37.8908 32.1343 42.1943 32.1343 C 46.4954 32.1343 49.9968 28.6017 49.9968 24.2603 Z\"></path>\n    <path pathLength=\"360\" d=\"M 36.3446 24.2469 C 36.3446 20.9802 38.97 18.3324 42.2054 18.3324 C 45.4431 18.3324 48.0685 20.9802 48.0685 24.2469 C 48.0685 27.5135 45.4431 30.1613 42.2054 30.1613 C 38.97 30.1613 36.3446 27.5135 36.3446 24.2469 Z\"></path>\n  </g>\n  <path pathLength=\"360\" d=\"M 31.9463 1 C 15.6331 1 2.2692 13.6936 1 29.8237 L 17.644 36.7682 C 19.0539 35.794 20.7587 35.2264 22.5909 35.2264 C 22.7563 35.2264 22.9194 35.231 23.0803 35.2399 L 30.4828 24.412 L 30.4828 24.2601 C 30.4828 17.7446 35.7359 12.4423 42.1933 12.4423 C 48.6507 12.4423 53.9038 17.7446 53.9038 24.2601 C 53.9038 30.7756 48.6507 36.08 42.1933 36.08 C 42.104 36.08 42.0168 36.0778 41.9275 36.0755 L 31.3699 43.6747 C 31.3766 43.8155 31.3811 43.9562 31.3811 44.0947 C 31.3811 48.9881 27.4374 52.9675 22.5909 52.9675 C 18.3367 52.9675 14.7773 49.902 13.9729 45.8443 L 2.068 40.8772 C 5.7548 54.0311 17.7312 63.6748 31.9463 63.6748 C 49.0976 63.6748 63 49.6428 63 32.3374 C 63 15.0297 49.0976 1 31.9463 1 Z\" fill=\"#212121\"></path>\n  <path class=\"fill\" pathLength=\"360\" d=\"M 31.9463 1 C 15.6331 1 2.2692 13.6936 1 29.8237 L 17.644 36.7682 C 19.0539 35.794 20.7587 35.2264 22.5909 35.2264 C 22.7563 35.2264 22.9194 35.231 23.0803 35.2399 L 30.4828 24.412 L 30.4828 24.2601 C 30.4828 17.7446 35.7359 12.4423 42.1933 12.4423 C 48.6507 12.4423 53.9038 17.7446 53.9038 24.2601 C 53.9038 30.7756 48.6507 36.08 42.1933 36.08 C 42.104 36.08 42.0168 36.0778 41.9275 36.0755 L 31.3699 43.6747 C 31.3766 43.8155 31.3811 43.9562 31.3811 44.0947 C 31.3811 48.9881 27.4374 52.9675 22.5909 52.9675 C 18.3367 52.9675 14.7773 49.902 13.9729 45.8443 L 2.068 40.8772 C 5.7548 54.0311 17.7312 63.6748 31.9463 63.6748 C 49.0976 63.6748 63 49.6428 63 32.3374 C 63 15.0297 49.0976 1 31.9463 1 Z\"></path>\n</svg>",
    "css": "/* From Uiverse.io by SelfMadeSystem - Tags: animation, loader, animated, svg, steam, valve */\n.loader {\n  display: block;\n  width: 12em;\n  height: 12em;\n  overflow: visible;\n}\n\n.loader path.fill {\n  fill: #2Af2;\n  animation: fill 4s ease-in-out infinite;\n}\n\n.loader .dash path {\n  stroke: #2AF;\n  stroke-width: 1px;\n  stroke-linecap: round;\n  animation: dashArray var(--sped, 2s) ease-in-out infinite,\n    dashOffset var(--sped, 2s) linear infinite;\n}\n\n.loader .dash path.aaa {\n  stroke-width: 2px;\n  stroke-linecap: butt;\n  clip-path: path('M 20.4603 48.5493 L 16.6461 46.9584 C 17.3209 48.3794 18.4917 49.5682 20.0447 50.2206 C 23.4007 51.6328 27.2707 50.0262 28.6694 46.6367 C 29.3464 44.9966 29.3509 43.1867 28.6806 41.5422 C 28.0103 39.8977 26.7434 38.6151 25.119 37.9315 C 23.5035 37.2544 21.7741 37.279 20.2547 37.8576 L 24.1961 39.5022 C 26.6719 40.5434 27.8427 43.4124 26.8104 45.9105 C 25.7803 48.4085 22.936 49.5905 20.4603 48.5493 Z');\n}\n\n.loader .dash path.big {\n  stroke-width: 2px;\n  filter: drop-shadow(0 0 2px #2AF);\n}\n\n@keyframes dashArray {\n  0% {\n    stroke-dasharray: 0 1 359 0;\n  }\n\n  50% {\n    stroke-dasharray: 0 359 1 0;\n  }\n\n  100% {\n    stroke-dasharray: 359 1 0 0;\n  }\n}\n\n@keyframes dashOffset {\n  0% {\n    stroke-dashoffset: -5;\n  }\n\n  100% {\n    stroke-dashoffset: -365;\n  }\n}\n\n@keyframes fill {\n  30%,\n  55% {\n    fill: #2AF0;\n  }\n}"
  },
  {
    "id": "uiverse-srivatsajbhat_tidy-parrot-17",
    "title": "Tidy Parrot",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "Srivatsajbhat",
      "profileUrl": "https://uiverse.io/Srivatsajbhat/tidy-parrot-17"
    },
    "license": "MIT",
    "description": "Tidy Parrot · loader by Srivatsajbhat",
    "tags": [
      "loader",
      "animated",
      "star wars",
      "lightsaber"
    ],
    "previewType": "css",
    "durationMs": 2000,
    "accentColor": null,
    "html": "<div id=\"loader\">\n    <div class=\"ls-particles ls-part-1\"></div>\n    <div class=\"ls-particles ls-part-2\"></div>\n    <div class=\"ls-particles ls-part-3\"></div>\n    <div class=\"ls-particles ls-part-4\"></div>\n    <div class=\"ls-particles ls-part-5\"></div>\n    <div class=\"lightsaber ls-left ls-green\"></div>\n    <div class=\"lightsaber ls-right ls-red\"></div>\n  </div>",
    "css": "/* From Uiverse.io by Srivatsajbhat - Tags: loader, animated, star wars, lightsaber */\n#loader {\n  width: 80px;\n  height: 40px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -20px -40px;\n  z-index: 1000;\n}\n\n.lightsaber {\n  position: absolute;\n  width: 4px;\n  height: 12px;\n  background-color: #666;\n  border-radius: 1px;\n  bottom: 0;\n}\n\n.lightsaber.ls-left {\n  left: 0;\n}\n\n.lightsaber.ls-right {\n  right: 0;\n}\n\n.lightsaber:before {\n  position: absolute;\n  content: ' ';\n  display: block;\n  width: 2px;\n  height: 25px;\n  max-height: 1px;\n  left: 1px;\n  top: 1px;\n  background-color: #fff;\n  border-radius: 1px;\n  -webkit-transform: rotateZ(180deg);\n  transform: rotateZ(180deg);\n  -webkit-transform-origin: center top;\n  -ms-transform-origin: center top;\n  transform-origin: center top;\n}\n\n.lightsaber:after {\n  position: absolute;\n  content: ' ';\n  display: block;\n  width: 2px;\n  height: 2px;\n  left: 1px;\n  top: 4px;\n  background-color: #fff;\n  border-radius: 50%;\n}\n\n.ls-particles {\n  position: absolute;\n  left: 42px;\n  top: 10px;\n  width: 1px;\n  height: 5px;\n  background-color: rgb(51, 51, 51, 0);\n  -webkit-transform: rotateZ(0deg);\n  transform: rotateZ(0deg);\n}\n\n.lightsaber.ls-green:before {\n  -webkit-animation: showlightgreen 2s ease-in-out infinite 1s;\n  animation: showlightgreen 2s ease-in-out infinite 1s;\n}\n\n.lightsaber.ls-red:before {\n  -webkit-animation: showlightred 2s ease-in-out infinite 1s;\n  animation: showlightred 2s ease-in-out infinite 1s;\n}\n\n.lightsaber.ls-left {\n  -webkit-animation: fightleft 2s ease-in-out infinite 1s;\n  animation: fightleft 2s ease-in-out infinite 1s;\n}\n\n.lightsaber.ls-right {\n  -webkit-animation: fightright 2s ease-in-out infinite 1s;\n  animation: fightright 2s ease-in-out infinite 1s;\n}\n\n.ls-particles.ls-part-1 {\n  -webkit-animation: particles1 2s ease-out infinite 1s;\n  animation: particles1 2s ease-out infinite 1s;\n}\n\n.ls-particles.ls-part-2 {\n  -webkit-animation: particles2 2s ease-out infinite 1s;\n  animation: particles2 2s ease-out infinite 1s;\n}\n\n.ls-particles.ls-part-3 {\n  -webkit-animation: particles3 2s ease-out infinite 1s;\n  animation: particles3 2s ease-out infinite 1s;\n}\n\n.ls-particles.ls-part-4 {\n  -webkit-animation: particles4 2s ease-out infinite 1s;\n  animation: particles4 2s ease-out infinite 1s;\n}\n\n.ls-particles.ls-part-5 {\n  -webkit-animation: particles5 2s ease-out infinite 1s;\n  animation: particles5 2s ease-out infinite 1s;\n}\n\n@-webkit-keyframes showlightgreen {\n  0% {\n    max-height: 0;\n    box-shadow: 0 0 0 0 #87c054;\n  }\n\n  5% {\n    box-shadow: 0 0 4px 2px #87c054;\n  }\n\n  10% {\n    max-height: 22px;\n  }\n\n  80% {\n    max-height: 22px;\n  }\n\n  85% {\n    box-shadow: 0 0 4px 2px #87c054;\n  }\n\n  100% {\n    max-height: 0;\n    box-shadow: 0 0 0 0 #87c054;\n  }\n}\n\n@-webkit-keyframes showlightred {\n  0% {\n    max-height: 0;\n    box-shadow: 0 0 0 0 #f06363;\n  }\n\n  20% {\n    box-shadow: 0 0 4px 2px #f06363;\n  }\n\n  25% {\n    max-height: 22px;\n  }\n\n  80% {\n    max-height: 22px;\n  }\n\n  85% {\n    box-shadow: 0 0 4px 2px #f06363;\n  }\n\n  100% {\n    max-height: 0;\n    box-shadow: 0 0 0 0 #f06363;\n  }\n}\n\n@-webkit-keyframes fightleft {\n  0% {\n    -webkit-transform: rotateZ(0deg);\n    transform: rotateZ(0deg);\n    left: 0;\n    bottom: 0;\n  }\n\n  30% {\n    -webkit-transform: rotateZ(0deg);\n    transform: rotateZ(0deg);\n    bottom: 0;\n  }\n\n  40% {\n    -webkit-transform: rotateZ(45deg);\n    transform: rotateZ(45deg);\n    left: 0;\n    bottom: 2px;\n  }\n\n  45% {\n    -webkit-transform: rotateZ(65deg);\n    transform: rotateZ(65deg);\n    left: 0;\n  }\n\n  65% {\n    -webkit-transform: rotateZ(410deg);\n    transform: rotateZ(410deg);\n    left: 30px;\n    bottom: 10px;\n  }\n\n  95% {\n    -webkit-transform: rotateZ(410deg);\n    transform: rotateZ(410deg);\n    left: 0;\n    bottom: 0;\n  }\n\n  100% {\n    -webkit-transform: rotateZ(360deg);\n    transform: rotateZ(360deg);\n    left: 0;\n    bottom: 0;\n  }\n}\n\n@-webkit-keyframes fightright {\n  0% {\n    -webkit-transform: rotateZ(0deg);\n    transform: rotateZ(0deg);\n    right: 0;\n    bottom: 0;\n  }\n\n  30% {\n    -webkit-transform: rotateZ(0deg);\n    transform: rotateZ(0deg);\n    bottom: 0;\n  }\n\n  45% {\n    -webkit-transform: rotateZ(-45deg);\n    transform: rotateZ(-45deg);\n    right: 0;\n    bottom: 2px;\n  }\n\n  50% {\n    -webkit-transform: rotateZ(-65deg);\n    transform: rotateZ(-65deg);\n    right: 0;\n  }\n\n  68% {\n    -webkit-transform: rotateZ(-410deg);\n    transform: rotateZ(-410deg);\n    right: 27px;\n    bottom: 13px;\n  }\n\n  95% {\n    -webkit-transform: rotateZ(-410deg);\n    transform: rotateZ(-410deg);\n    right: 0;\n    bottom: 0;\n  }\n\n  100% {\n    -webkit-transform: rotateZ(-360deg);\n    transform: rotateZ(-360deg);\n    right: 0;\n    bottom: 0;\n  }\n}\n\n@-webkit-keyframes particles1 {\n  0% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(35deg) translateY(0px);\n    transform: rotateZ(35deg) translateY(0px);\n  }\n\n  63% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(35deg) translateY(0px);\n    transform: rotateZ(35deg) translateY(0px);\n  }\n\n  64% {\n    background-color: rgba(51, 51, 51,1);\n    -webkit-transform: rotateZ(35deg) translateY(0px);\n    transform: rotateZ(35deg) translateY(0px);\n  }\n\n  100% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(35deg) translateY(-30px);\n    transform: rotateZ(35deg) translateY(-30px);\n  }\n}\n\n@-webkit-keyframes particles2 {\n  0% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(-65deg) translateY(0px);\n    transform: rotateZ(-65deg) translateY(0px);\n  }\n\n  63% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(-65deg) translateY(0px);\n    transform: rotateZ(-65deg) translateY(0px);\n  }\n\n  64% {\n    background-color: rgba(51, 51, 51,1);\n    -webkit-transform: rotateZ(-65deg) translateY(0px);\n    transform: rotateZ(-65deg) translateY(0px);\n  }\n\n  95% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(-65deg) translateY(-40px);\n    transform: rotateZ(-65deg) translateY(-40px);\n  }\n\n  100% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(-65deg) translateY(-40px);\n    transform: rotateZ(-65deg) translateY(-40px);\n  }\n}\n\n@-webkit-keyframes particles3 {\n  0% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(-75deg) translateY(0px);\n    transform: rotateZ(-75deg) translateY(0px);\n  }\n\n  63% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(-75deg) translateY(0px);\n    transform: rotateZ(-75deg) translateY(0px);\n  }\n\n  64% {\n    background-color: rgba(51, 51, 51,1);\n    -webkit-transform: rotateZ(-75deg) translateY(0px);\n    transform: rotateZ(-75deg) translateY(0px);\n  }\n\n  97% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(-75deg) translateY(-35px);\n    transform: rotateZ(-75deg) translateY(-35px);\n  }\n\n  100% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(-75deg) translateY(-35px);\n    transform: rotateZ(-75deg) translateY(-35px);\n  }\n}\n\n@-webkit-keyframes particles4 {\n  0% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(-25deg) translateY(0px);\n    transform: rotateZ(-25deg) translateY(0px);\n  }\n\n  63% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(-25deg) translateY(0px);\n    transform: rotateZ(-25deg) translateY(0px);\n  }\n\n  64% {\n    background-color: rgba(51, 51, 51,1);\n    -webkit-transform: rotateZ(-25deg) translateY(0px);\n    transform: rotateZ(-25deg) translateY(0px);\n  }\n\n  97% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(-25deg) translateY(-30px);\n    transform: rotateZ(-25deg) translateY(-30px);\n  }\n\n  100% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(-25deg) translateY(-30px);\n    transform: rotateZ(-25deg) translateY(-30px);\n  }\n}\n\n@-webkit-keyframes particles5 {\n  0% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(65deg) translateY(0px);\n    transform: rotateZ(65deg) translateY(0px);\n  }\n\n  63% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(65deg) translateY(0px);\n    transform: rotateZ(65deg) translateY(0px);\n  }\n\n  64% {\n    background-color: rgba(51, 51, 51,1);\n    -webkit-transform: rotateZ(65deg) translateY(0px);\n    transform: rotateZ(65deg) translateY(0px);\n  }\n\n  97% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(65deg) translateY(-35px);\n    transform: rotateZ(65deg) translateY(-35px);\n  }\n\n  100% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(65deg) translateY(-35px);\n    transform: rotateZ(65deg) translateY(-35px);\n  }\n}\n\n@keyframes showlightgreen {\n  0% {\n    max-height: 0;\n    box-shadow: 0 0 0 0 #87c054;\n  }\n\n  5% {\n    box-shadow: 0 0 4px 2px #87c054;\n  }\n\n  10% {\n    max-height: 22px;\n  }\n\n  80% {\n    max-height: 22px;\n  }\n\n  85% {\n    box-shadow: 0 0 4px 2px #87c054;\n  }\n\n  100% {\n    max-height: 0;\n    box-shadow: 0 0 0 0 #87c054;\n  }\n}\n\n@keyframes showlightred {\n  0% {\n    max-height: 0;\n    box-shadow: 0 0 0 0 #f06363;\n  }\n\n  20% {\n    box-shadow: 0 0 4px 2px #f06363;\n  }\n\n  25% {\n    max-height: 22px;\n  }\n\n  80% {\n    max-height: 22px;\n  }\n\n  85% {\n    box-shadow: 0 0 4px 2px #f06363;\n  }\n\n  100% {\n    max-height: 0;\n    box-shadow: 0 0 0 0 #f06363;\n  }\n}\n\n@keyframes fightleft {\n  0% {\n    -webkit-transform: rotateZ(0deg);\n    transform: rotateZ(0deg);\n    left: 0;\n    bottom: 0;\n  }\n\n  30% {\n    -webkit-transform: rotateZ(0deg);\n    transform: rotateZ(0deg);\n    bottom: 0;\n  }\n\n  40% {\n    -webkit-transform: rotateZ(45deg);\n    transform: rotateZ(45deg);\n    left: 0;\n    bottom: 2px;\n  }\n\n  45% {\n    -webkit-transform: rotateZ(65deg);\n    transform: rotateZ(65deg);\n    left: 0;\n  }\n\n  65% {\n    -webkit-transform: rotateZ(410deg);\n    transform: rotateZ(410deg);\n    left: 30px;\n    bottom: 10px;\n  }\n\n  95% {\n    -webkit-transform: rotateZ(410deg);\n    transform: rotateZ(410deg);\n    left: 0;\n    bottom: 0;\n  }\n\n  100% {\n    -webkit-transform: rotateZ(360deg);\n    transform: rotateZ(360deg);\n    left: 0;\n    bottom: 0;\n  }\n}\n\n@keyframes fightright {\n  0% {\n    -webkit-transform: rotateZ(0deg);\n    transform: rotateZ(0deg);\n    right: 0;\n    bottom: 0;\n  }\n\n  30% {\n    -webkit-transform: rotateZ(0deg);\n    transform: rotateZ(0deg);\n    bottom: 0;\n  }\n\n  45% {\n    -webkit-transform: rotateZ(-45deg);\n    transform: rotateZ(-45deg);\n    right: 0;\n    bottom: 2px;\n  }\n\n  50% {\n    -webkit-transform: rotateZ(-65deg);\n    transform: rotateZ(-65deg);\n    right: 0;\n  }\n\n  68% {\n    -webkit-transform: rotateZ(-410deg);\n    transform: rotateZ(-410deg);\n    right: 27px;\n    bottom: 13px;\n  }\n\n  95% {\n    -webkit-transform: rotateZ(-410deg);\n    transform: rotateZ(-410deg);\n    right: 0;\n    bottom: 0;\n  }\n\n  100% {\n    -webkit-transform: rotateZ(-360deg);\n    transform: rotateZ(-360deg);\n    right: 0;\n    bottom: 0;\n  }\n}\n\n@keyframes particles1 {\n  0% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(35deg) translateY(0px);\n    transform: rotateZ(35deg) translateY(0px);\n  }\n\n  63% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(35deg) translateY(0px);\n    transform: rotateZ(35deg) translateY(0px);\n  }\n\n  64% {\n    background-color: rgba(51, 51, 51,1);\n    -webkit-transform: rotateZ(35deg) translateY(0px);\n    transform: rotateZ(35deg) translateY(0px);\n  }\n\n  100% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(35deg) translateY(-30px);\n    transform: rotateZ(35deg) translateY(-30px);\n  }\n}\n\n@keyframes particles2 {\n  0% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(-65deg) translateY(0px);\n    transform: rotateZ(-65deg) translateY(0px);\n  }\n\n  63% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(-65deg) translateY(0px);\n    transform: rotateZ(-65deg) translateY(0px);\n  }\n\n  64% {\n    background-color: rgba(51, 51, 51,1);\n    -webkit-transform: rotateZ(-65deg) translateY(0px);\n    transform: rotateZ(-65deg) translateY(0px);\n  }\n\n  95% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(-65deg) translateY(-40px);\n    transform: rotateZ(-65deg) translateY(-40px);\n  }\n\n  100% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(-65deg) translateY(-40px);\n    transform: rotateZ(-65deg) translateY(-40px);\n  }\n}\n\n@keyframes particles3 {\n  0% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(-75deg) translateY(0px);\n    transform: rotateZ(-75deg) translateY(0px);\n  }\n\n  63% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(-75deg) translateY(0px);\n    transform: rotateZ(-75deg) translateY(0px);\n  }\n\n  64% {\n    background-color: rgba(51, 51, 51,1);\n    -webkit-transform: rotateZ(-75deg) translateY(0px);\n    transform: rotateZ(-75deg) translateY(0px);\n  }\n\n  97% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(-75deg) translateY(-35px);\n    transform: rotateZ(-75deg) translateY(-35px);\n  }\n\n  100% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(-75deg) translateY(-35px);\n    transform: rotateZ(-75deg) translateY(-35px);\n  }\n}\n\n@keyframes particles4 {\n  0% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(-25deg) translateY(0px);\n    transform: rotateZ(-25deg) translateY(0px);\n  }\n\n  63% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(-25deg) translateY(0px);\n    transform: rotateZ(-25deg) translateY(0px);\n  }\n\n  64% {\n    background-color: rgba(51, 51, 51,1);\n    -webkit-transform: rotateZ(-25deg) translateY(0px);\n    transform: rotateZ(-25deg) translateY(0px);\n  }\n\n  97% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(-25deg) translateY(-30px);\n    transform: rotateZ(-25deg) translateY(-30px);\n  }\n\n  100% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(-25deg) translateY(-30px);\n    transform: rotateZ(-25deg) translateY(-30px);\n  }\n}\n\n@keyframes particles5 {\n  0% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(65deg) translateY(0px);\n    transform: rotateZ(65deg) translateY(0px);\n  }\n\n  63% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(65deg) translateY(0px);\n    transform: rotateZ(65deg) translateY(0px);\n  }\n\n  64% {\n    background-color: rgba(51, 51, 51,1);\n    -webkit-transform: rotateZ(65deg) translateY(0px);\n    transform: rotateZ(65deg) translateY(0px);\n  }\n\n  97% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(65deg) translateY(-35px);\n    transform: rotateZ(65deg) translateY(-35px);\n  }\n\n  100% {\n    background-color: rgba(51, 51, 51,0);\n    -webkit-transform: rotateZ(65deg) translateY(-35px);\n    transform: rotateZ(65deg) translateY(-35px);\n  }\n}"
  },
  {
    "id": "uiverse-carhtube_happy-puma-68",
    "title": "Happy Puma",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "carhtube",
      "profileUrl": "https://uiverse.io/carhtube/happy-puma-68"
    },
    "license": "MIT",
    "description": "Happy Puma · loader by carhtube",
    "tags": [
      "loader",
      "animation",
      "loading",
      "circle loader",
      "click animation",
      "effect loader",
      "bounce animation",
      "3d loader"
    ],
    "previewType": "css",
    "durationMs": 6000,
    "accentColor": null,
    "html": "<div class=\"loader\">\n  <div class=\"worm\"></div>\n  <div class=\"circleMiddle\"></div>\n</div>",
    "css": "/* From Uiverse.io by carhtube  - Tags: animation, loading, loader, circle loader, click animation, effect loader, bounce animation, 3d loader */\n.loader {\n  background: linear-gradient(\n    90deg,\n    #6f22ff,\n    #00aaff,\n    #2cc92c,\n    #00aaff,\n    #6f22ff\n  );\n  background-size: 600% 600%;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  animation: neonRotate 10s linear infinite;\n  position: relative;\n}\n.circleMiddle {\n  background-color: rgb(255, 255, 255);\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  z-index: 99;\n}\n.worm {\n  position: absolute;\n  width: 20px;\n  height: 105px;\n  background-color: hsl(0, 0%, 100%);\n  border-radius: 5px;\n  animation: rotateWorm 4s linear infinite;\n  z-index: 80;\n}\n@keyframes neonRotate {\n  0%,\n  100% {\n    background-position: 0% 0%;\n  }\n  25%,\n  75% {\n    background-position: 100% 0%;\n  }\n  50% {\n    background-position: 0% 100%;\n  }\n}\n@keyframes rotateWorm {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}"
  },
  {
    "id": "uiverse-fanishah_selfish-goose-88",
    "title": "Selfish Goose",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "fanishah",
      "profileUrl": "https://uiverse.io/fanishah/selfish-goose-88"
    },
    "license": "MIT",
    "description": "Selfish Goose · loader by fanishah",
    "tags": [
      "loader",
      "loading",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 2000,
    "accentColor": null,
    "html": "<div class=\"loading-bar\">\n    Loading\n</div>",
    "css": "/* From Uiverse.io by fanishah - Tags: loading, loader */\n.loading-bar {\n  position: absolute;\n  transform: translate(-50%,-50%);\n  width: 110px;\n  height: 110px;\n  background: transparent;\n  border: px solid #3c3c3c;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 111px;\n  font-family: sans-serif;\n  font-size: 15px;\n  color: #fff000;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  text-shadow: 0 0 20px #fff000;\n  box-shadow: 0 0 20px rgba(0,0,0,.5);\n}\n\n.loading-bar:before {\n  content: '';\n  position: absolute;\n  top: -3px;\n  left: -3px;\n  width: 100%;\n  height: 100%;\n  border: 3px solid transparent;\n  border-top: 5px solid #fff000;\n  border-right: 5px solid #fff000;\n  border-radius: 50%;\n  animation: animateC 2s linear infinite;\n}\n\n@keyframes animateC {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes animate {\n  0% {\n    transform: rotate(45deg);\n  }\n\n  100% {\n    transform: rotate(405deg);\n  }\n}"
  },
  {
    "id": "uiverse-pradeepsaranbishnoi_nervous-starfish-15",
    "title": "Nervous Starfish",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "Pradeepsaranbishnoi",
      "profileUrl": "https://uiverse.io/Pradeepsaranbishnoi/nervous-starfish-15"
    },
    "license": "MIT",
    "description": "Nervous Starfish · loader by Pradeepsaranbishnoi",
    "tags": [
      "loader",
      "3d",
      "cube",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 4000,
    "accentColor": null,
    "html": "<div class=\"loader\">\n  <div class=\"cube\">\n    <div class=\"side\"></div>\n    <div class=\"side\"></div>\n    <div class=\"side\"></div>\n    <div class=\"side\"></div>\n    <div class=\"side\"></div>\n    <div class=\"side\"></div>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by Pradeepsaranbishnoi - Tags: 3d, loader, cube */\n/* The loader container */\n.loader {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 200px;\n  height: 200px;\n  margin-top: -100px;\n  margin-left: -100px;\n  perspective: 1000px;\n  transform-type: preserve-3d;\n}\n\n\n/* The cube */\n.cube {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 50%;\n  height: 50%;\n  transform-style: preserve-3d;\n  transform: translateZ(-50px);\n  animation: cube 4s cubic-bezier(.18,.56,.64,1) infinite;\n}\n\n@keyframes cube {\n  0% {\n    top: 0%;\n    left: 0%;\n    transform: translateZ(-50px);\n  }\n\n  25% {\n    top: 50%;\n    left: 50%;\n    transform: translateZ(-50px) rotateX(-90deg) rotateZ(90deg);\n  }\n\n  50% {\n    top: 0%;\n    left: 50%;\n    transform: translateZ(-50px) rotateX(0deg) rotateZ(180deg);\n  }\n\n  75% {\n    top: 50%;\n    left: 0%;\n    transform: translateZ(-50px) rotateX(-90deg) rotateZ(-90deg);\n  }\n}\n\n\n/* The side */\n.side {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transform-style: preserve-3d;\n  backface-visibility: hidden;\n}\n\n/* back */\n.side:nth-child(1) {\n  transform: rotateX(-180deg) translateZ(50px);\n  background-color: #1e3f57;\n}\n\n/* left side */\n.side:nth-child(2) {\n  transform: rotateY(-90deg) translateZ(50px);\n  background-color: #6bb2cd;\n}\n\n/* right side */\n.side:nth-child(3) {\n  transform: rotateY(90deg) translateZ(50px);\n  background-color: #6bb2cd;\n}\n\n/* top side */\n.side:nth-child(4) {\n  transform: rotateX(90deg) translateZ(50px);\n  background-color: #3c617d;\n}\n\n/* bottom side */\n.side:nth-child(5) {\n  transform: rotateX(-90deg) translateZ(50px);\n  background-color: #3c617d;\n}\n\n/* top */\n.side:nth-child(6) {\n  transform: translateZ(50px);\n  background-color: #1e3f57;\n}"
  },
  {
    "id": "uiverse-ibrahimjlidi_tasty-impala-53",
    "title": "Tasty Impala",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "ibrahimjlidi - Source: alexruix/white-cat-50",
      "profileUrl": "https://uiverse.io/ibrahimjlidi - Source: alexruix/white-cat-50/tasty-impala-53"
    },
    "license": "MIT",
    "description": "Tasty Impala · loader by ibrahimjlidi - Source: alexruix/white-cat-50",
    "tags": [
      "loader",
      "3d loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<div class=\"loader\"></div>",
    "css": "/* From Uiverse.io by ibrahimjlidi - Source: alexruix/white-cat-50 - Tags: loader, 3d loader */\n.loader {\n  width: 48px;\n  height: 48px;\n  margin: auto;\n  position: relative;\n}\n\n.loader:before {\n  content: '';\n  width: 48px;\n  height: 5px;\n  background: #253050;\n  position: absolute;\n  top: 60px;\n  left: 0;\n  border-radius: 50%;\n  animation: shadow324 0.5s linear infinite;\n}\n\n.loader:after {\n  content: '';\n  width: 100%;\n  height: 100%;\n  background: #044080;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 40px;\n  animation: jump7456 0.5s linear infinite;\n}\n\n@keyframes jump7456 {\n  15% {\n    border-bottom-right-radius: px;\n  }\n\n  25% {\n    transform: translateY(15px) rotate(22.5deg);\n  }\n\n  50% {\n    transform: translateY(17px) scale(1, .9) rotate(45deg);\n    border-bottom-right-radius: 40px;\n  }\n\n  75% {\n    transform: translateY(4px) rotate(50.5deg);\n  }\n\n  100% {\n    transform: translateY(4) rotate(90deg);\n  }\n}\n\n@keyframes shadow324 {\n\n  0%,\n    100% {\n    transform: scale(2, 2);\n  }\n\n  50% {\n    transform: scale(2, );\n  }\n}"
  },
  {
    "id": "uiverse-aqfox_sour-robin-86",
    "title": "Sour Robin",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "AqFox",
      "profileUrl": "https://uiverse.io/AqFox/sour-robin-86"
    },
    "license": "MIT",
    "description": "Sour Robin · loader by AqFox",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1250,
    "accentColor": null,
    "html": "<div class=\"spinner\">\n<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>\n</div>",
    "css": "/* From Uiverse.io by AqFox - Tags: loader */\n.spinner {\n position: relative;\n width: 16px;\n height: 16px;\n}\n\n.spinner div {\n width: 100%;\n height: 100%;\n background-color: #004dff;\n border-radius: 50%;\n animation: spinner-4t3wzl 1.25s infinite backwards;\n}\n\n.spinner div:nth-child(1) {\n animation-delay: 0.15s;\n background-color: rgba(0,77,255,0.9);\n}\n\n.spinner div:nth-child(2) {\n animation-delay: 0.3s;\n background-color: rgba(0,77,255,0.8);\n}\n\n.spinner div:nth-child(3) {\n animation-delay: 0.45s;\n background-color: rgba(0,77,255,0.7);\n}\n\n.spinner div:nth-child(4) {\n animation-delay: 0.6s;\n background-color: rgba(0,77,255,0.6);\n}\n\n.spinner div:nth-child(5) {\n animation-delay: 0.75s;\n background-color: rgba(0,77,255,0.5);\n}\n\n@keyframes spinner-4t3wzl {\n 0% {\n  transform: rotate(0deg) translateY(-200%);\n }\n\n 60%, 100% {\n  transform: rotate(360deg) translateY(-200%);\n }\n}"
  },
  {
    "id": "uiverse-dvhoang2106_orange-fox-63",
    "title": "Orange Fox",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "dvhoang2106",
      "profileUrl": "https://uiverse.io/dvhoang2106/orange-fox-63"
    },
    "license": "MIT",
    "description": "Orange Fox · loader by dvhoang2106",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 2400,
    "accentColor": null,
    "html": "<div class=\"spinner\">\n<div></div>\n</div>",
    "css": "/* From Uiverse.io by dvhoang2106 - Tags: loader */\n.spinner {\n display: inline-block;\n transform: translateZ(1px);\n}\n\n.spinner > div {\n display: inline-block;\n width: 64px;\n height: 64px;\n margin: 8px;\n border-radius: 50%;\n background: #fff;\n animation: spinner8344 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n\n@keyframes spinner8344 {\n 0%,\n  100% {\n  animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);\n }\n\n 0% {\n  transform: rotateY(0deg);\n }\n\n 50% {\n  transform: rotateY(1800deg);\n  animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);\n }\n\n 100% {\n  transform: rotateY(3600deg);\n }\n}"
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
    "id": "uiverse-jkhuger_mean-bobcat-66",
    "title": "Mean Bobcat",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "JkHuger",
      "profileUrl": "https://uiverse.io/JkHuger/mean-bobcat-66"
    },
    "license": "MIT",
    "description": "Mean Bobcat · loader by JkHuger",
    "tags": [
      "loader",
      "animation",
      "text",
      "writing",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 5000,
    "accentColor": null,
    "html": "<div class=\"animation\">Text writing!</div>",
    "css": "/* From Uiverse.io by JkHuger - Tags: animation, text, writing */\n@keyframes typing {\n  from {\n    width: 0;\n  }\n}\n\n@keyframes blink-caret {\n  50% {\n    border-color: transparent;\n  }\n}\n/* When you change the amount of characters in the h1, you have to change \nthe with: 14ch and  steps(14, end), if there is 14 characters, put 14, \nif there is 20 put 20 */\n.animation {\n  font: bold 200% Consolas, Monaco, monospace;\n  border-right: .1em solid black;\n  width: 13.20ch;\n  margin: 2em 2em;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-animation: typing 5s steps(13, end),\n\t           blink-caret .5s step-end infinite alternate;\n}"
  },
  {
    "id": "uiverse-yaya12085_giant-shrimp-51",
    "title": "Giant Shrimp",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "Yaya12085",
      "profileUrl": "https://uiverse.io/Yaya12085/giant-shrimp-51"
    },
    "license": "MIT",
    "description": "Giant Shrimp · loader by Yaya12085",
    "tags": [
      "loader",
      "pulse",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1500,
    "accentColor": null,
    "html": "<div class=\"loader\"></div>",
    "css": "/* From Uiverse.io by Yaya12085 - Tags: loader, pulse */\n.loader {\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  background-color: #69ffa8;\n  animation: 1.5s pulse infinite ease-in-out;\n}\n\n@keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 0 #69ffa8;\n  }\n\n  100% {\n    box-shadow: 0 0 0 14px #69ffa800;\n  }\n}"
  },
  {
    "id": "uiverse-jeremyssocial_curvy-walrus-79",
    "title": "Curvy Walrus",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "jeremyssocial",
      "profileUrl": "https://uiverse.io/jeremyssocial/curvy-walrus-79"
    },
    "license": "MIT",
    "description": "Curvy Walrus · loader by jeremyssocial",
    "tags": [
      "loader",
      "animation",
      "green",
      "black",
      "animated",
      "css effect",
      "cool card",
      "loading animation"
    ],
    "previewType": "css",
    "durationMs": 3000,
    "accentColor": null,
    "html": "<div class=\"hacker-loader\">\n  <div class=\"loader-text\">\n    <span data-text=\"Initializing...\" class=\"text-glitch\">Initializing...</span>\n  </div>\n  <div class=\"loader-bar\">\n    <div class=\"bar-fill\"></div>\n    <div class=\"bar-glitch\"></div>\n  </div>\n  <div class=\"particles\">\n    <div class=\"particle\"></div>\n    <div class=\"particle\"></div>\n    <div class=\"particle\"></div>\n    <div class=\"particle\"></div>\n    <div class=\"particle\"></div>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by jeremyssocial  - Tags: animation, green, black, loader, animated, css effect, cool card, loading animation */\n.hacker-loader {\n  position: relative;\n  width: 24em;\n  height: 6em;\n  background-color: #0a0a0a;\n  border: 0.2em solid #00ff00;\n  border-radius: 0.5em;\n  padding: 1em;\n  overflow: hidden;\n  box-shadow: 0 0 1em rgba(0, 255, 0, 0.3);\n}\n\n.loader-text {\n  text-align: center;\n  margin-bottom: 1em;\n}\n\n.text-glitch {\n  color: #00ff00;\n  font-family: monospace;\n  font-size: 1.5em;\n  position: relative;\n  display: inline-block;\n}\n\n.text-glitch::before,\n.text-glitch::after {\n  content: attr(data-text);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #0a0a0a;\n  clip: rect(0, 0, 0, 0);\n}\n\n.text-glitch::before {\n  left: -0.1em;\n  text-shadow: 0.1em 0 #ff00ff;\n  animation: glitch-effect 3s infinite linear alternate-reverse;\n}\n\n.text-glitch::after {\n  left: 0.1em;\n  text-shadow: -0.1em 0 #00ffff;\n  animation: glitch-effect 2s infinite linear alternate-reverse;\n}\n\n.loader-bar {\n  width: 100%;\n  height: 0.5em;\n  background-color: #003300;\n  border-radius: 0.25em;\n  position: relative;\n  overflow: hidden;\n}\n\n.bar-fill {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 100%;\n  background-color: #00ff00;\n  animation: bar-fill-animation 2s infinite ease-in-out;\n}\n\n.bar-glitch {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(\n    45deg,\n    transparent,\n    rgba(0, 255, 0, 0.2),\n    transparent\n  );\n  background-size: 200% 200%;\n  animation: bar-glitch-animation 2s infinite linear;\n}\n\n.particles {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n\n.particle {\n  position: absolute;\n  width: 0.2em;\n  height: 0.2em;\n  background-color: #00ff00;\n  border-radius: 50%;\n  opacity: 0;\n  animation: particle-animation 2s infinite linear;\n}\n\n.particle:nth-child(1) {\n  top: 10%;\n  left: 10%;\n  animation-delay: 0s;\n}\n\n.particle:nth-child(2) {\n  top: 30%;\n  left: 60%;\n  animation-delay: 0.5s;\n}\n\n.particle:nth-child(3) {\n  top: 70%;\n  left: 30%;\n  animation-delay: 1s;\n}\n\n.particle:nth-child(4) {\n  top: 90%;\n  left: 90%;\n  animation-delay: 1.5s;\n}\n\n.particle:nth-child(5) {\n  top: 50%;\n  left: 50%;\n  animation-delay: 2s;\n}\n\n@keyframes glitch-effect {\n  0% {\n    clip: rect(42px, 9999px, 44px, 0);\n  }\n  5% {\n    clip: rect(12px, 9999px, 59px, 0);\n  }\n  10% {\n    clip: rect(48px, 9999px, 29px, 0);\n  }\n  15.0% {\n    clip: rect(42px, 9999px, 73px, 0);\n  }\n  20% {\n    clip: rect(63px, 9999px, 27px, 0);\n  }\n  25% {\n    clip: rect(34px, 9999px, 55px, 0);\n  }\n  30.0% {\n    clip: rect(86px, 9999px, 73px, 0);\n  }\n  35% {\n    clip: rect(20px, 9999px, 20px, 0);\n  }\n  40% {\n    clip: rect(26px, 9999px, 60px, 0);\n  }\n  45% {\n    clip: rect(25px, 9999px, 66px, 0);\n  }\n  50% {\n    clip: rect(57px, 9999px, 98px, 0);\n  }\n  55.0% {\n    clip: rect(5px, 9999px, 46px, 0);\n  }\n  60.0% {\n    clip: rect(82px, 9999px, 31px, 0);\n  }\n  65% {\n    clip: rect(54px, 9999px, 27px, 0);\n  }\n  70% {\n    clip: rect(28px, 9999px, 99px, 0);\n  }\n  75% {\n    clip: rect(45px, 9999px, 69px, 0);\n  }\n  80% {\n    clip: rect(23px, 9999px, 85px, 0);\n  }\n  85.0% {\n    clip: rect(54px, 9999px, 84px, 0);\n  }\n  90% {\n    clip: rect(45px, 9999px, 47px, 0);\n  }\n  95% {\n    clip: rect(37px, 9999px, 20px, 0);\n  }\n  100% {\n    clip: rect(4px, 9999px, 91px, 0);\n  }\n}\n\n@keyframes bar-fill-animation {\n  0%,\n  100% {\n    width: 0;\n  }\n  50% {\n    width: 100%;\n  }\n}\n\n@keyframes bar-glitch-animation {\n  0% {\n    background-position: 0 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n}\n\n@keyframes particle-animation {\n  0% {\n    opacity: 0;\n    transform: translate(0, 0);\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translate(2em, 2em);\n  }\n}"
  },
  {
    "id": "uiverse-jkhuger_silly-termite-54",
    "title": "Silly Termite",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "JkHuger",
      "profileUrl": "https://uiverse.io/JkHuger/silly-termite-54"
    },
    "license": "MIT",
    "description": "Silly Termite · loader by JkHuger",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 800,
    "accentColor": null,
    "html": "<div class=\"loader-pencil-content\">\n  <div class=\"btn\">\n    <svg id=\"loader-pencil\" xmlns=\"http://www.w3.org/2000/svg\" width=\"667\" height=\"182\" viewBox=\"0 0 677.34762 182.15429\">\n      <g>\n        <path id=\"body-pencil\" d=\"M128.273 0l-3.9 2.77L0 91.078l128.273 91.076 549.075-.006V.008L128.273 0zm20.852 30l498.223.006V152.15l-498.223.007V30zm-25 9.74v102.678l-49.033-34.813-.578-32.64 49.61-35.225z\">\n        </path>\n        <path id=\"line\" d=\"M134.482 157.147v25l518.57.008.002-25-518.572-.008z\">\n        </path>\n      </g>\n    </svg>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by JkHuger - Tags: loader */\n.btn {\n  align-items: center;\n  background: #93e2cb;\n  border-radius: 4px;\n  display: flex;\n  height: 80px;\n  justify-content: center;\n  padding: 1rem;\n  width: 180px;\n}\n\n#line {\n  animation: linePencil .8s infinite linear;\n}\n\n@keyframes linePencil {\n  0% {\n    transform: translateY(0);\n  }\n\n  100% {\n    transform: translateY(-150px);\n  }\n}"
  },
  {
    "id": "uiverse-preshpi_friendly-donkey-60",
    "title": "Friendly Donkey",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "preshpi  - Website: https://10015.io/tools/css-loader-generator - Name: 10015",
      "profileUrl": "https://uiverse.io/preshpi  - Website: https://10015.io/tools/css-loader-generator - Name: 10015/friendly-donkey-60"
    },
    "license": "MIT",
    "description": "Friendly Donkey · loader by preshpi  - Website: https://10015.io/tools/css-loader-generator - Name: 10015",
    "tags": [
      "loader",
      "spinner",
      "css",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 3000,
    "accentColor": null,
    "html": "<div class=\"spinner\"></div>",
    "css": "/* From Uiverse.io by preshpi  - Website: https://10015.io/tools/css-loader-generator - Name: 10015 - Tags: loader, spinner, css */\n.spinner {\n  width: 46px;\n  height: 46px;\n  display: grid;\n  animation: spinner-plncf9 3s infinite;\n}\n\n.spinner::before,\n.spinner::after {\n  content: \"\";\n  grid-area: 1/1;\n  border: 9px solid;\n  border-radius: 50%;\n  border-color: #474bff #474bff #0000 #0000;\n  mix-blend-mode: darken;\n  animation: spinner-plncf9 1s infinite linear;\n}\n\n.spinner::after {\n  border-color: #0000 #0000 #dbdcef #dbdcef;\n  animation-direction: reverse;\n}\n\n@keyframes spinner-plncf9 {\n  100% {\n    transform: rotate(1turn);\n  }\n}"
  },
  {
    "id": "uiverse-temrevil_little-duck-0",
    "title": "Little Duck",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "TemRevil",
      "profileUrl": "https://uiverse.io/TemRevil/little-duck-0"
    },
    "license": "MIT",
    "description": "Little Duck · loader by TemRevil",
    "tags": [
      "loader",
      "simple",
      "animation",
      "blue",
      "loading",
      "spinner",
      "smooth",
      "space"
    ],
    "previewType": "css",
    "durationMs": 1200,
    "accentColor": null,
    "html": "<div class=\"loading\">\n  <div class=\"loading-wide\">\n    <div class=\"l1 color\"></div>\n    <div class=\"l2 color\"></div>\n    <div class=\"e1 color animation-effect-light\"></div>\n    <div class=\"e2 color animation-effect-light-d\"></div>\n    <div class=\"e3 animation-effect-rot\">X</div>\n    <div class=\"e4 color animation-effect-light\"></div>\n    <div class=\"e5 color animation-effect-light-d\"></div>\n    <div class=\"e6 animation-effect-scale\">*</div>\n    <div class=\"e7 color\"></div>\n    <div class=\"e8 color\"></div>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by TemRevil  - Tags: simple, animation, blue, loading, loader, spinner, smooth, space */\n.loading {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.loading-wide {\n  width: 150px;\n  height: 150px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n.color {\n  background-color: #3395ff;\n}\n\n.l1 {\n  width: 15px;\n  height: 65px;\n  position: absolute;\n  animation: move-h 1.2s infinite cubic-bezier(0.65, 0.05, 0.36, 1);\n}\n\n.l2 {\n  width: 15px;\n  height: 60px;\n  position: absolute;\n  transform: rotate(90deg);\n  animation: move-v 1.2s infinite cubic-bezier(0.65, 0.05, 0.36, 1);\n}\n\n@keyframes move-h {\n  0% {\n    top: 0;\n    opacity: 0;\n  }\n  25% {\n    opacity: 1;\n  }\n  50% {\n    top: 30%;\n    opacity: 1;\n  }\n  75% {\n    opacity: 1;\n  }\n  100% {\n    top: 100%;\n    opacity: 0;\n  }\n}\n@keyframes move-v {\n  0% {\n    left: 0;\n    opacity: 0;\n  }\n  25% {\n    opacity: 1;\n  }\n  50% {\n    left: 45%;\n    opacity: 1;\n  }\n  75% {\n    opacity: 1;\n  }\n  100% {\n    left: 100%;\n    opacity: 0;\n  }\n}\n\n.animation-effect-light {\n  animation: effect 0.2s 0.1s infinite linear;\n}\n.animation-effect-light-d {\n  animation: effect 0.3s 0.2s infinite linear;\n}\n.animation-effect-rot {\n  animation: rot 0.8s infinite cubic-bezier(0.65, 0.05, 0.36, 1);\n}\n.animation-effect-scale {\n  animation: scale 0.8s infinite cubic-bezier(0.65, 0.05, 0.36, 1);\n}\n\n@keyframes effect {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes rot {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes scale {\n  0% {\n    scale: 1;\n  }\n  50% {\n    scale: 1.9;\n  }\n  100% {\n    scale: 1;\n  }\n}\n.e1 {\n  width: 1px;\n  height: 40px;\n  opacity: 0.3;\n  position: absolute;\n  top: 0;\n  left: 8%;\n}\n.e2 {\n  width: 60px;\n  height: 1px;\n  opacity: 0.8;\n  position: absolute;\n  top: 8%;\n  left: 0;\n}\n.e3 {\n  position: absolute;\n  top: 10%;\n  left: 12%;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: 900;\n  font-size: 18px;\n  color: #3395ff;\n}\n.e4 {\n  width: 1px;\n  height: 40px;\n  opacity: 0.3;\n  position: absolute;\n  top: 90%;\n  right: 10%;\n}\n.e5 {\n  width: 40px;\n  height: 1px;\n  opacity: 0.3;\n  position: absolute;\n  top: 100%;\n  right: 0;\n}\n.e6 {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 32px;\n  color: #3395ff;\n}\n.e7 {\n  width: 1px;\n  height: 20px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  transform: rotate(45deg);\n  animation: height 1s infinite cubic-bezier(0.65, 0.05, 0.36, 1);\n}\n@keyframes height {\n  0% {\n    bottom: 0%;\n    left: 0%;\n    height: 0px;\n  }\n  25% {\n    height: 90px;\n  }\n  50% {\n    bottom: 100%;\n    left: 100%;\n    height: 90px;\n  }\n  75% {\n    height: 0px;\n  }\n  100% {\n    bottom: 0%;\n    left: 0%;\n    height: 0px;\n  }\n}\n.e8 {\n  width: 20px;\n  height: 1px;\n  position: absolute;\n  bottom: 50%;\n  left: 0;\n  animation: width 1.5s infinite cubic-bezier(0.65, 0.05, 0.36, 1);\n}\n@keyframes width {\n  0% {\n    left: 0%;\n    width: 0px;\n  }\n  50% {\n    left: 100%;\n    width: 90px;\n  }\n  100% {\n    left: 0%;\n    width: 0px;\n  }\n}"
  },
  {
    "id": "uiverse-david-mohseni_smart-cow-19",
    "title": "Smart Cow",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "david-mohseni",
      "profileUrl": "https://uiverse.io/david-mohseni/smart-cow-19"
    },
    "license": "MIT",
    "description": "Smart Cow · loader by david-mohseni",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 2400,
    "accentColor": null,
    "html": "<div class=\"ball\"></div>\n<div class=\"shadow\"></div>",
    "css": "/* From Uiverse.io by david-mohseni - Tags: loader */\n.ball {\n  animation: float612 2.4s ease-in-out infinite;\n  height: 80px;\n  width: 80px;\n  border-radius: 50%;\n  position: relative;\n  background: radial-gradient( circle at 75% 30%, white 5px, #DF00FF 8%, #DB9EDF 60%, #DF00FF 100%);\n  box-shadow: inset 0 0 20px #C1AAC6, inset 10px 0 46px #DF00FF, inset 88px 0px 60px #DB9EDF, inset -20px -60px 100px #fde9ea, inset 0 50px 140px #fde9ea, 0 0 90px #fff;\n}\n\n@keyframes float612 {\n  0% {\n    transform: translatey(0px);\n  }\n\n  50% {\n    transform: translatey(-50px);\n  }\n\n  100% {\n    transform: translatey(0px);\n  }\n}\n\n.shadow {\n  background: #DB9EDF;\n  width: 80px;\n  height: 25px;\n  top: 65%;\n  animation: expand6234 2.4s ease-in-out infinite;\n  position: absolute;\n  border-radius: 50%;\n}\n\n@keyframes expand6234 {\n  0%,\n            100% {\n    transform: scale(0.6);\n  }\n\n  50% {\n    transform: scale(0.3);\n    filter: blur(5px);\n  }\n}"
  },
  {
    "id": "uiverse-satyamchaudharydev_red-cow-21",
    "title": "Red Cow",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "satyamchaudharydev",
      "profileUrl": "https://uiverse.io/satyamchaudharydev/red-cow-21"
    },
    "license": "MIT",
    "description": "Red Cow · loader by satyamchaudharydev",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div class=\"loader\"></div>",
    "css": "/* From Uiverse.io by satyamchaudharydev - Tags: loader */\n.loader {\n  display: block;\n  --height-of-loader: 4px;\n  --loader-color: #0071e2;\n  width: 130px;\n  height: var(--height-of-loader);\n  border-radius: 30px;\n  background-color: rgba(0,0,0,0.2);\n  position: relative;\n}\n\n.loader::before {\n  content: \"\";\n  position: absolute;\n  background: var(--loader-color);\n  top: 0;\n  left: 0;\n  width: 0%;\n  height: 100%;\n  border-radius: 30px;\n  animation: moving 1s ease-in-out infinite;\n  ;\n}\n\n@keyframes moving {\n  50% {\n    width: 100%;\n  }\n\n  100% {\n    width: 0;\n    right: 0;\n    left: unset;\n  }\n}"
  },
  {
    "id": "uiverse-coding-masala_shaggy-vampirebat-38",
    "title": "Shaggy Vampirebat",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "coding-masala",
      "profileUrl": "https://uiverse.io/coding-masala/shaggy-vampirebat-38"
    },
    "license": "MIT",
    "description": "Shaggy Vampirebat · loader by coding-masala",
    "tags": [
      "loader",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div class=\"loader\">\n  <div class=\"loader-bar\"></div>\n  <div class=\"loader-bar\"></div>\n  <div class=\"loader-bar\"></div>\n  <div class=\"loader-bar\"></div>\n</div>",
    "css": "/* From Uiverse.io by coding-masala - Tags: loader */\n.loader {\n  display: flex;\n  justify-content: center;\n}\n\n.loader-bar {\n  width: 4px;\n  height: 18px;\n  margin: 0 8px;\n  border-radius: 4px;\n  animation: loading_3194 1s ease-in-out infinite;\n  background-color: #333;\n}\n\n@keyframes loading_3194 {\n  0% {\n    transform: scale(1);\n  }\n\n  20% {\n    transform: scaleY(3);\n  }\n\n  40% {\n    transform: scale(1);\n  }\n}"
  },
  {
    "id": "uiverse-selfmadesystem_pretty-treefrog-77",
    "title": "Pretty Treefrog",
    "category": "loader",
    "source": "uiverse",
    "author": {
      "name": "SelfMadeSystem",
      "profileUrl": "https://uiverse.io/SelfMadeSystem/pretty-treefrog-77"
    },
    "license": "MIT",
    "description": "Pretty Treefrog · loader by SelfMadeSystem",
    "tags": [
      "loader",
      "animation",
      "gradient",
      "spinner",
      "text animation",
      "animated",
      "gradients",
      "svg"
    ],
    "previewType": "css",
    "durationMs": 2000,
    "accentColor": null,
    "html": "<div class=\"loader\">\n  <svg height=\"0\" width=\"0\" viewBox=\"0 0 64 64\" class=\"absolute\">\n    <defs class=\"s-xJBuHA073rTt\" xmlns=\"http://www.w3.org/2000/svg\">\n      <linearGradient class=\"s-xJBuHA073rTt\" gradientUnits=\"userSpaceOnUse\" y2=\"2\" x2=\"0\" y1=\"62\" x1=\"0\" id=\"b\">\n        <stop class=\"s-xJBuHA073rTt\" stop-color=\"#973BED\"></stop>\n        <stop class=\"s-xJBuHA073rTt\" stop-color=\"#007CFF\" offset=\"1\"></stop>\n      </linearGradient>\n      <linearGradient class=\"s-xJBuHA073rTt\" gradientUnits=\"userSpaceOnUse\" y2=\"0\" x2=\"0\" y1=\"64\" x1=\"0\" id=\"c\">\n        <stop class=\"s-xJBuHA073rTt\" stop-color=\"#FFC800\"></stop>\n        <stop class=\"s-xJBuHA073rTt\" stop-color=\"#F0F\" offset=\"1\"></stop>\n        <animateTransform repeatCount=\"indefinite\" keySplines=\".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1\" keyTimes=\"0; 0.125; 0.25; 0.375; 0.5; 0.625; 0.75; 0.875; 1\" dur=\"8s\" values=\"0 32 32;-270 32 32;-270 32 32;-540 32 32;-540 32 32;-810 32 32;-810 32 32;-1080 32 32;-1080 32 32\" type=\"rotate\" attributeName=\"gradientTransform\"></animateTransform>\n      </linearGradient>\n      <linearGradient class=\"s-xJBuHA073rTt\" gradientUnits=\"userSpaceOnUse\" y2=\"2\" x2=\"0\" y1=\"62\" x1=\"0\" id=\"d\">\n        <stop class=\"s-xJBuHA073rTt\" stop-color=\"#00E0ED\"></stop>\n        <stop class=\"s-xJBuHA073rTt\" stop-color=\"#00DA72\" offset=\"1\"></stop>\n      </linearGradient>\n    </defs>\n  </svg>\n  <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 64 64\" height=\"64\" width=\"64\" class=\"inline-block\">\n    <path stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"8\" stroke=\"url(#b)\" d=\"M 54.722656,3.9726563 A 2.0002,2.0002 0 0 0 54.941406,4 h 5.007813 C 58.955121,17.046124 49.099667,27.677057 36.121094,29.580078 a 2.0002,2.0002 0 0 0 -1.708985,1.978516 V 60 H 29.587891 V 31.558594 A 2.0002,2.0002 0 0 0 27.878906,29.580078 C 14.900333,27.677057 5.0448787,17.046124 4.0507812,4 H 9.28125 c 1.231666,11.63657 10.984383,20.554048 22.6875,20.734375 a 2.0002,2.0002 0 0 0 0.02344,0 c 11.806958,0.04283 21.70649,-9.003371 22.730469,-20.7617187 z\" class=\"dash\" id=\"y\" pathLength=\"360\"></path>\n  </svg>\n  <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" style=\"--rotation-duration:0ms; --rotation-direction:normal;\" viewBox=\"0 0 64 64\" height=\"64\" width=\"64\" class=\"inline-block\">\n    <path stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"10\" stroke=\"url(#c)\" d=\"M 32 32\n        m 0 -27\n        a 27 27 0 1 1 0 54\n        a 27 27 0 1 1 0 -54\" class=\"spin\" id=\"o\" pathLength=\"360\"></path>\n  </svg>\n  <div class=\"w-2\"></div>\n  <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" style=\"--rotation-duration:0ms; --rotation-direction:normal;\" viewBox=\"0 0 64 64\" height=\"64\" width=\"64\" class=\"inline-block\">\n    <path stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"8\" stroke=\"url(#d)\" d=\"M 4,4 h 4.6230469 v 25.919922 c -0.00276,11.916203 9.8364941,21.550422 21.7500001,21.296875 11.616666,-0.240651 21.014356,-9.63894 21.253906,-21.25586 a 2.0002,2.0002 0 0 0 0,-0.04102 V 4 H 56.25 v 25.919922 c 0,14.33873 -11.581192,25.919922 -25.919922,25.919922 a 2.0002,2.0002 0 0 0 -0.0293,0 C 15.812309,56.052941 3.998433,44.409961 4,29.919922 Z\" class=\"dash\" id=\"u\" pathLength=\"360\"></path>\n  </svg>\n</div>",
    "css": "/* From Uiverse.io by SelfMadeSystem - Tags: animation, gradient, loader, spinner, text animation, animated, gradients, svg */\n.absolute {\n  position: absolute;\n}\n\n.inline-block {\n  display: inline-block;\n}\n\n.loader {\n  display: flex;\n  margin: 0.25em 0;\n}\n\n.w-2 {\n  width: 0.5em;\n}\n\n.dash {\n  animation: dashArray 2s ease-in-out infinite,\n    dashOffset 2s linear infinite;\n}\n\n.spin {\n  animation: spinDashArray 2s ease-in-out infinite,\n    spin 8s ease-in-out infinite,\n    dashOffset 2s linear infinite;\n  transform-origin: center;\n}\n\n@keyframes dashArray {\n  0% {\n    stroke-dasharray: 0 1 359 0;\n  }\n\n  50% {\n    stroke-dasharray: 0 359 1 0;\n  }\n\n  100% {\n    stroke-dasharray: 359 1 0 0;\n  }\n}\n\n@keyframes spinDashArray {\n  0% {\n    stroke-dasharray: 270 90;\n  }\n\n  50% {\n    stroke-dasharray: 0 360;\n  }\n\n  100% {\n    stroke-dasharray: 270 90;\n  }\n}\n\n@keyframes dashOffset {\n  0% {\n    stroke-dashoffset: 365;\n  }\n\n  100% {\n    stroke-dashoffset: 5;\n  }\n}\n\n@keyframes spin {\n  0% {\n    rotate: 0deg;\n  }\n\n  12.5%,\n  25% {\n    rotate: 270deg;\n  }\n\n  37.5%,\n  50% {\n    rotate: 540deg;\n  }\n\n  62.5%,\n  75% {\n    rotate: 810deg;\n  }\n\n  87.5%,\n  100% {\n    rotate: 1080deg;\n  }\n}"
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
    "id": "uiverse-priyanshugupta28_shaggy-wombat-39",
    "title": "Shaggy Wombat",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "PriyanshuGupta28",
      "profileUrl": "https://uiverse.io/PriyanshuGupta28/shaggy-wombat-39"
    },
    "license": "MIT",
    "description": "Shaggy Wombat · button by PriyanshuGupta28",
    "tags": [
      "button",
      "hover effect",
      "3d button",
      "cool button",
      "glass button",
      "onclick effect",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<button role=\"button\" class=\"button\">Hover Me</button>",
    "css": "/* From Uiverse.io by PriyanshuGupta28 - Tags: button, hover effect, 3d button, cool button, glass button, onClick effect */\n.button {\n  all: unset;\n  width: 100px;\n  height: 30px;\n  font-size: 16px;\n  background: transparent;\n  border: none;\n  position: relative;\n  color: #f0f0f0;\n  cursor: pointer;\n  z-index: 1;\n  padding: 10px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  white-space: nowrap;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  transition: 0.3s ease-in-out;\n}\n\n.button:hover {\n  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;\n}\n\n.button::after,\n.button::before {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  z-index: -99999;\n  transition: all .4s;\n}\n\n.button::before {\n  transform: translate(0%, 0%);\n  width: 100%;\n  height: 100%;\n  background-color: #4158D0;\n  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);\n  border-radius: 10px;\n}\n\n.button::after {\n  transform: translate(10px, 10px);\n  width: 35px;\n  height: 35px;\n  background: #6804da2f;\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n  border-radius: 50px;\n}\n\n.button:hover::before {\n  transform: translate(5%, 20%);\n  width: 110%;\n  height: 110%;\n}\n\n.button:hover::after {\n  border-radius: 10px;\n  transform: translate(0, 0);\n  width: 100%;\n  height: 100%;\n}\n\n.button:active::after {\n  transition: 0s;\n  transform: translate(0, 5%);\n}"
  },
  {
    "id": "uiverse-mobinkakei_light-pug-30",
    "title": "Light Pug",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "mobinkakei",
      "profileUrl": "https://uiverse.io/mobinkakei/light-pug-30"
    },
    "license": "MIT",
    "description": "Light Pug · button by mobinkakei",
    "tags": [
      "button",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<button class=\"btn btn-1\">Hover Me!</button>",
    "css": "/* From Uiverse.io by mobinkakei - Tags: button */\n.btn {\n  text-decoration: none;\n  padding: 20px 40px;\n  font-size: 1em;\n  position: relative;\n  margin: 32px;\n  border: none;\n  background-color: #26caf8;\n  font-weight: 600;\n}\n\n.btn-1 {\n  overflow: hidden;\n  color: #fff;\n  border-radius: 30px;\n  box-shadow: 0 0 0 0 rgba(143, 64, 248, 0.5), 0 0 0 0 rgba(39, 200, 255, 0.5);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n.btn-1::after {\n  content: \"\";\n  width: 400px;\n  height: 400px;\n  position: absolute;\n  top: -50px;\n  left: -100px;\n  background-color: #ff3cac;\n  background-image: linear-gradient(225deg, #27d86c 0%, #26caf8 50%, #c625d0 100%);\n  z-index: -1;\n  transition: transform 0.5s ease;\n}\n\n.btn-1:hover {\n  transform: translate(0, -6px);\n  box-shadow: 10px -10px 25px 0 rgba(143, 64, 248, 0.5),  -10px 10px 25px 0 rgba(39, 200, 255, 0.5);\n}\n\n.btn-1:hover::after {\n  transform: rotate(150deg);\n}"
  },
  {
    "id": "uiverse-priyanshugupta28_short-horse-44",
    "title": "Short Horse",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "PriyanshuGupta28",
      "profileUrl": "https://uiverse.io/PriyanshuGupta28/short-horse-44"
    },
    "license": "MIT",
    "description": "Short Horse · button by PriyanshuGupta28",
    "tags": [
      "button",
      "bootsrap button",
      "button hover effect",
      "2d button",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<button class=\"swipe-button\">Hover Me</button>",
    "css": "/* From Uiverse.io by PriyanshuGupta28 - Tags: button, bootsrap button, button hover effect , 2d button */\n.swipe-button {\n  padding: 10px 20px;\n  font-size: 18px;\n  border: none;\n  background: linear-gradient(45deg, #3498db, #e74c3c, #9b59b6, #2ecc71);\n  background-size: 200% 200%;\n  background-position: 0 0;\n  color: white;\n  border-radius: 5px;\n  cursor: pointer;\n  font-family: sans-serif;\n  transition: background-position 0.5s ease-in-out, transform 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;\n}\n\n.swipe-button:hover {\n  background-position: 100% 100%;\n  transform: scale(1.05);\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);\n}\n\n.swipe-button:active {\n  transform: translateY(2px);\n  color: #fff;\n /* Change text color when active */\n}"
  },
  {
    "id": "uiverse-lakshay-art_polite-tiger-43",
    "title": "Polite Tiger",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "Lakshay-art",
      "profileUrl": "https://uiverse.io/Lakshay-art/polite-tiger-43"
    },
    "license": "MIT",
    "description": "Polite Tiger · button by Lakshay-art",
    "tags": [
      "button",
      "simple",
      "animation",
      "transition",
      "click animation",
      "bounce animation",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<button class=\"button\">\n  <div id=\"main-border\">\n    <div id=\"main\">\n      <div id=\"inner-box\">\n        <div id=\"inner-dent\"></div>\n        <div id=\"send\">Send</div>\n        <div id=\"sent\">Sent</div>\n        <div id=\"tick\">\n          <svg\n            stroke-width=\"1.5\"\n            stroke-linejoin=\"round\"\n            stroke-linecap=\"round\"\n            stroke=\"#000000\"\n            fill=\"none\"\n            version=\"1.1\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n            viewBox=\"0 0 16 16\"\n            height=\"30px\"\n            width=\"30px\"\n          >\n            <path\n              d=\"m1.75 9.75 2.5 2.5m3.5-4 2.5-2.5m-4.5 4 2.5 2.5 6-6.5\"\n            ></path>\n          </svg>\n        </div>\n        <div tabindex=\"-1\" id=\"text-container\">\n          <div id=\"planebody\">\n            <svg\n              text-rendering=\"geometricPrecision\"\n              shape-rendering=\"geometricPrecision\"\n              viewBox=\"0 0 24 24\"\n              width=\"30\"\n              height=\"30\"\n            >\n              <path\n                stroke-width=\"1\"\n                stroke=\"#000\"\n                transform=\"matrix(-.613681 0.628244-.642735-.627837 26.9797 9.305393)\"\n                d=\"M14.2199,21.63c-1.18,0-2.85-.83-4.17-4.8l-.72002-2.16-2.16-.72c-3.96-1.32-4.79-2.99-4.79-4.16999c0-1.17.83-2.85,4.79-4.18l8.49002-2.83c2.12-.71,3.89-.5,4.98.58s1.3,2.86.59,4.98L18.3999,16.82c-1.33,3.98-3,4.81-4.18,4.81ZM7.63988,7.03001c-2.78.93-3.77,2.03-3.77,2.75s.99,1.81999,3.77,2.73999l2.52002.84c.22.07.4.25.47.47l.84,2.52c.92,2.78,2.03,3.77,2.75,3.77s1.82-.99,2.75-3.77l2.83-8.48999c.51-1.54.42-2.8-.23-3.45s-1.91-.73-3.44-.22l-8.49002,2.84Z\"\n              ></path>\n              <path\n                stroke-width=\"3\"\n                stroke=\"#000\"\n                transform=\"matrix(.16967 0.39318-.400015 0.172619 21.274592 7.311157)\"\n                d=\"M14.2199,21.63c-1.18,0-11.84002-10.67-11.84002-11.84999c0-1.17.83-2.85,4.79-4.18l8.49002-2.83c2.12-.71,3.89-.5,4.98.58s1.3,2.86.59,4.98L18.3999,16.82c-1.33,3.98-3,4.81-4.18,4.81ZM7.63988,7.03001c-2.78.93-3.77,2.03-3.77,2.75s.99,1.81999,3.77,2.73999l3.83002,3.83c.92,2.78,2.03,3.77,2.75,3.77s1.82-.99,2.75-3.77l2.83-8.48999c.51-1.54.42-2.8-.23-3.45s-1.91-.73-3.44-.22l-8.49002,2.84Z\"\n              ></path>\n              <path\n                stroke-width=\"3\"\n                stroke=\"#000\"\n                transform=\"matrix(-.404334-.141041 0.143493-.411362 8.624859 20.731701)\"\n                d=\"M14.2199,21.63c-1.18,0-11.84002-10.67-11.84002-11.84999c0-1.17.83-2.85,4.79-4.18l8.49002-2.83c2.12-.71,3.89-.5,4.98.58s1.3,2.86.59,4.98L18.3999,16.82c-1.33,3.98-3,4.81-4.18,4.81ZM7.63988,7.03001c-2.78.93-3.77,2.03-3.77,2.75s.99,1.81999,3.77,2.73999l3.83002,3.83c.92,2.78,2.03,3.77,2.75,3.77s1.82-.99,2.75-3.77l2.83-8.48999c.51-1.54.42-2.8-.23-3.45s-1.91-.73-3.44-.22l-8.49002,2.84Z\"\n              ></path>\n            </svg>\n          </div>\n          <div id=\"arrow\">\n            <svg\n              width=\"30px\"\n              height=\"30px\"\n              viewBox=\"0 0 24 24\"\n              fill=\"none\"\n              stroke-width=\"0.5px\"\n              stroke=\"black\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n            >\n              <path\n                d=\"M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z\"\n                fill=\"#000000\"\n              ></path>\n              <path\n                d=\"M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z\"\n                fill=\"#000000\"\n              ></path>\n            </svg>\n          </div>\n          <div id=\"text\">Message</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</button>",
    "css": "/* From Uiverse.io by Lakshay-art  - Tags: simple, animation, button, transition, click animation, bounce animation */\n.button {\n  cursor: pointer;\n  border: none;\n  /* margin: 0px !important; */\n  background: transparent;\n  transition: scale 1s;\n}\n.button:hover {\n  scale: 1.05;\n}\n#main-border {\n  border-radius: 22px;\n  padding: 1px;\n  background: linear-gradient(180deg, #e8e8e8, #d2d2d2);\n  box-shadow: 0px 20px 25px #0002, 0px 3px 4px #0004;\n}\n#main {\n  /* border: 2px solid #e4e4e4; */\n  border-radius: 21px;\n  width: 260px;\n  height: 90px;\n  background: linear-gradient(180deg, #1111, #0007);\n  padding: 4px;\n\n  /* overflow: hidden; */\n}\n#inner-box {\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(180deg, #fff, #eaeaea);\n  border-radius: 16px;\n  box-shadow: 0px 2px 3px #0008;\n  padding-block: 6px;\n  padding-inline: 6px;\n  position: relative;\n}\n#inner-dent {\n  border-radius: 35px;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(180deg, #eaeaea 0%, #fff 70%);\n  filter: blur(1.5px);\n}\n#text-container {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  gap: 75px;\n  /* background-color: red; */\n}\n#text {\n  font-size: 24px;\n  font-weight: 600;\n}\n#text-container:focus > #arrow {\n  transform: rotate(-45deg) translateX(110px) translateY(90px);\n  /* transform: rotate(45deg) translateX(100px) translateY(-90px); */\n  transition: transform 1s;\n}\n#send {\n  font-size: 24px;\n  font-weight: 600;\n  position: absolute;\n  top: 0px;\n  left: 57px;\n  /* justify-content: center; */\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n#text-container:focus {\n  transform: translateY(-450px);\n  transition: transform 1.5s 1s ease-in;\n  /* background-color: red; */\n}\n#inner-box:focus-within > #send {\n  opacity: 0;\n  transition: opacity 1s 1s;\n}\n#sent {\n  font-size: 24px;\n  font-weight: 600;\n  position: absolute;\n  top: 0px;\n  left: 57px;\n  /* justify-content: center; */\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  opacity: 0;\n}\n\n#inner-box:focus-within > #sent {\n  opacity: 1;\n  transform: translateX(20px);\n  transition: opacity 1s 1s, transform 1s 1s;\n}\n\n#tick {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  /* justify-content: center; */\n  align-items: center;\n  /* width: 100%; */\n  height: 100%;\n  display: flex;\n  opacity: 0;\n}\n#inner-box:focus-within > #tick {\n  opacity: 1;\n  transform: translateX(-85px);\n  transition: opacity 1s 1.3s, transform 1s 1s;\n}\n.button:focus-within {\n  animation: recoil 0.4s 0.9s;\n  /* transform: translateY(10px);\n  transition: transform 1s 0.8s; */\n}\n\n@keyframes recoil {\n  0% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(10px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n#planebody {\n  position: absolute;\n  top: 22px;\n  right: 62px;\n  /* justify-content: center; */\n  align-items: center;\n  /* width: 100%; */\n  height: 100%;\n  display: flex;\n  opacity: 0;\n}\n#text-container:focus-within > #planebody {\n  opacity: 1;\n  /* transform: translateX(20px); */\n  transition: opacity 1s 0.5s;\n}"
  },
  {
    "id": "uiverse-ercnersoy_bitter-swan-59",
    "title": "Bitter Swan",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "ercnersoy",
      "profileUrl": "https://uiverse.io/ercnersoy/bitter-swan-59"
    },
    "license": "MIT",
    "description": "Bitter Swan · button by ercnersoy",
    "tags": [
      "button",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<button> <span>LIKE</span></button>",
    "css": "/* From Uiverse.io by ercnersoy - Tags: button */\nbutton {\n  padding: 0 20px 0 10px;\n  border-radius: 10px;\n  box-shadow: 0px 0px 5px 7px #e7413373;\n  background-color: #e74133;\n  color: white;\n  font-size: 17px;\n  border: none;\n  display: flex;\n  align-items: center;\n  transition: all .5s ease-in-out;\n  letter-spacing: 2px;\n}\n\nbutton:hover {\n  background-color: #f54d3e;\n  transition: all .5s ease-in-out;\n  box-shadow: 0px 0px 5px 3px #e7413373;\n}\n\nbutton::before {\n  content: \"\";\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtMzc2LjMyIDU1Mi4zYy0wLjM4NjcyIDAtMC43ODEyNS0wLjAxNTYyNS0xLjE3MTktMC4wNTA3ODEtMS4wNzgxLTAuMDc0MjE5LTIuMTM2Ny0wLjI2NTYyLTMuMTU2Mi0wLjU0Njg4LTIuNzMwNS0wLjU5Mzc1LTUuMjkzLTEuODUxNi03LjM0MzgtMy43ODEybC0xMzcuNTQtMTI5LjY2Yy00NC40NTMtNDEuOTAyLTQ5LjQ4LTExNS40Ni0xMS4yMTUtMTYzLjk3IDE5LjA4Mi0yNC4xODQgNDUuNzctMzguNjk1IDc1LjE1Mi00MC44NTUgMjguOTMtMi4xMTcyIDU2Ljg2MyA4LjAzMTIgNzguNjggMjguNTk4bDYuMjY1NiA1LjkwMjMgNi4yNjU2LTUuOTAyM2MyMS44MzItMjAuNTcgNDkuODA1LTMwLjY5MSA3OC42OTEtMjguNTk4IDI5LjM4MyAyLjE2NDEgNTYuMDY2IDE2LjY3NiA3NS4xNDUgNDAuODU1IDM4LjI2MiA0OC41MTIgMzMuMjM0IDEyMi4wNy0xMS4yMTUgMTYzLjk3bC0xMzcuNTQgMTI5LjY3Yy0yLjk5MjIgMi44MTY0LTYuOTM3NSA0LjM3NS0xMS4wMjMgNC4zNzV6bS03Ny44MTItMzA3LjAxYy0xLjY5NTMgMC0zLjM5NDUgMC4wNjI1LTUuMTAxNiAwLjE4NzUtMjAuMjgxIDEuNDk2MS0zOC44NTIgMTEuNjkxLTUyLjI4MSAyOC43MTEtMjguMjE1IDM1Ljc3My0yNC42MTMgODkuOTEgOC4wMjczIDEyMC42OGwxMjYuODQgMTE5LjU5IDEyNi44NC0xMTkuNTljMzIuNjQ1LTMwLjc3MyAzNi4yNDYtODQuOTEgOC4wMjczLTEyMC42OC0xMy40MjItMTcuMDItMzEuOTg0LTI3LjIxNS01Mi4yNy0yOC43MTEtMTkuODI4LTEuNDY0OC0zOS4xMDUgNS42MjExLTU0LjI4NSAxOS45MzRsLTE3LjI4NSAxNi4yOTNjLTYuMTk1MyA1LjgzOTgtMTUuODU5IDUuODM5OC0yMi4wNDcgMGwtMTcuMjg1LTE2LjI5M2MtMTMuODcxLTEzLjA3OC0zMS4xNzYtMjAuMTE3LTQ5LjE4LTIwLjExN3oiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg==\");\n  background-size: 100%;\n  background-repeat: no-repeat;\n  color: transparent;\n  position: relative;\n  width: 50px;\n  height: 50px;\n  display: block;\n  margin-right: 5px;\n  transition: all .9s ease-in-out;\n}\n\nbutton:hover:before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtMzY5Ljg0IDU1MC4yOGMwLjQ3MjY2IDAuNDcyNjYgMC45NDUzMSAwLjQ3MjY2IDAuOTQ1MzEgMC45NDUzMSA2NS4zNTUtNTEuNjIxIDE5My43LTE0OC4yMyAxOTMuNy0yNDkuMTEgMC01NS44ODMtNDUuNDY1LTEwMS4zNS0xMDEuMzUtMTAxLjM1LTM5Ljc4MSAwLTc0LjM1MiAyMy4yMDctOTAuOTI2IDU2LjgyOC0wLjQ3MjY2IDAuOTQ1MzEtMS40MjE5IDMuMzE2NC0xLjQyMTkgMy4zMTY0cy0wLjk0NTMxLTEuODk0NS0wLjk0NTMxLTIuMzY3MmMtMTYuMTAyLTM0LjA5LTUwLjY3Mi01Ny43Ny05MC45MjYtNTcuNzctNTUuODgzIDAtMTAxLjM1IDQ1LjQ2MS0xMDEuMzUgMTAxLjM0IDAgMTAxLjgyIDEyNy44NyAxOTcuMDEgMTkyLjI3IDI0OC4xNnoiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg==\");\n  transition: all .9s ease-in-out;\n  transform: rotate(-1turn);\n}"
  },
  {
    "id": "uiverse-vinodjangid07_afraid-wombat-15",
    "title": "Afraid Wombat",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "vinodjangid07",
      "profileUrl": "https://uiverse.io/vinodjangid07/afraid-wombat-15"
    },
    "license": "MIT",
    "description": "Afraid Wombat · button by vinodjangid07",
    "tags": [
      "button",
      "tooltip",
      "hover effect",
      "fullscreen",
      "full window",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<button class=\"fullscreen-btn\">\n  <svg viewBox=\"0 0 448 512\" height=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path\n      d=\"M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z\"\n    ></path>\n  </svg>\n  <span class=\"tooltip\">Fullscreen</span>\n</button>",
    "css": "/* From Uiverse.io by vinodjangid07  - Tags: tooltip, button, hover effect, fullscreen, full window */\n.fullscreen-btn {\n  width: 25px;\n  height: 25px;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  cursor: pointer;\n  transition: all 0.3s;\n  position: relative;\n  overflow: hidden;\n}\n\n.fullscreen-btn svg {\n  height: 100%;\n}\n.fullscreen-btn:hover {\n  width: 30px;\n  height: 30px;\n  overflow: visible;\n}\n.tooltip {\n  position: absolute;\n  top: -40px;\n  background-color: rgba(0, 0, 0, 0.753);\n  color: white;\n  padding: 5px 10px;\n  border-radius: 5px;\n  font-size: 0.8em;\n  transition: all 0.3s;\n  opacity: 0;\n}\n.fullscreen-btn:hover .tooltip {\n  transform: translateY(2.5px);\n  opacity: 1;\n}"
  },
  {
    "id": "uiverse-lilarest_strong-fly-77",
    "title": "Strong Fly",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "LilaRest",
      "profileUrl": "https://uiverse.io/LilaRest/strong-fly-77"
    },
    "license": "MIT",
    "description": "Strong Fly · button by LilaRest",
    "tags": [
      "button",
      "neumorphism",
      "skeuomorphism",
      "animation",
      "minimalist",
      "heart",
      "realistic",
      "support"
    ],
    "previewType": "css",
    "durationMs": 400,
    "accentColor": null,
    "html": "<button>\n  Support us\n  <svg height=\"32\" width=\"32\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0H24V24H0z\" fill=\"none\"></path><path d=\"M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z\"></path></svg>\n</button>",
    "css": "/* From Uiverse.io by LilaRest - Tags: neumorphism, skeuomorphism, animation, minimalist, button, heart, realistic, support */\nbutton {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px 22px 20px 25px;\n  box-shadow: rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n  background-color: #e8e8e8;\n  border-color: #ffe2e2;\n  border-style: solid;\n  border-width: 9px;\n  border-radius: 35px;\n  font-size: 25px;\n  font-weight: 900;\n  color: rgb(134, 124, 124);\n  font-family: monospace;\n  transition: transform 400ms cubic-bezier(.68,-0.55,.27,2.5), \n  border-color 400ms ease-in-out,\n  background-color 400ms ease-in-out;\n  word-spacing: -2px;\n}\n\n@keyframes movingBorders {\n  0% {\n    border-color: #fce4e4;\n  }\n\n  50% {\n    border-color: #ffd8d8;\n  }\n\n  90% {\n    border-color: #fce4e4;\n  }\n}\n\nbutton:hover {\n  background-color: #eee;\n  transform: scale(105%);\n  animation: movingBorders 3s infinite;\n}\n\nbutton svg {\n  fill: rgb(255, 110, 110);\n  margin-left: 13px;\n}\n\n@keyframes beatingHeart {\n  0% {\n    transform: scale(1);\n  }\n\n  15% {\n    transform: scale(1.15);\n  }\n\n  30% {\n    transform: scale(1);\n  }\n\n  45% {\n    transform: scale(1.15);\n  }\n\n  60% {\n    transform: scale(1);\n  }\n}\n\nbutton:hover svg {\n  transform: scale(105%);\n  border-color: #ffd8d8;\n  animation: beatingHeart 1.2s infinite;\n}"
  },
  {
    "id": "uiverse-elijahgummer_proud-goat-69",
    "title": "Proud Goat",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "elijahgummer",
      "profileUrl": "https://uiverse.io/elijahgummer/proud-goat-69"
    },
    "license": "MIT",
    "description": "Proud Goat · button by elijahgummer",
    "tags": [
      "button",
      "icon",
      "animation",
      "3d",
      "hover",
      "modern",
      "play",
      "cyan"
    ],
    "previewType": "css",
    "durationMs": 150,
    "accentColor": null,
    "html": "<button class=\"button-with-icon\">\n  <svg\n    class=\"icon\"\n    id=\"Play\"\n    viewBox=\"0 0 48 48\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n  >\n    <path\n      class=\"color000000 svgShape\"\n      fill=\"#ffffff\"\n      d=\"M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z\"\n    ></path>\n  </svg>\n  <span class=\"text\">Play</span>\n</button>",
    "css": "/* From Uiverse.io by elijahgummer  - Tags: icon, animation, 3d, button, hover, modern, play, cyan */\n.button-with-icon {\n  overflow: hidden;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #0f988e;\n  font-family: \"Istok Web\", sans-serif;\n  letter-spacing: 1px;\n  padding: 0 12px;\n  text-align: center;\n  width: 120px;\n  height: 40px;\n  font-size: 14px;\n  text-transform: uppercase;\n  font-weight: normal;\n  border-radius: 3px;\n  outline: none;\n  user-select: none;\n  cursor: pointer;\n  transform: translateY(0px);\n  position: relative;\n  box-shadow:\n    inset 0 30px 30px -15px rgba(255, 255, 255, 0.1),\n    inset 0 0 0 1px rgba(255, 255, 255, 0.3),\n    inset 0 1px 20px rgba(0, 0, 0, 0),\n    0 3px 0 #0f988e,\n    0 3px 2px rgba(0, 0, 0, 0.2),\n    0 5px 10px rgba(0, 0, 0, 0.1),\n    0 10px 20px rgba(0, 0, 0, 0.1);\n  background: #15ccbe;\n  color: white;\n  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);\n  transition: 150ms all ease-in-out;\n}\n\n.button-with-icon .icon {\n  margin-right: 8px;\n  width: 24px;\n  height: 24px;\n  transition: all 0.5s ease-in-out;\n}\n\n.button-with-icon:active {\n  transform: translateY(3px);\n  box-shadow:\n    inset 0 16px 2px -15px rgba(0, 0, 0, 0),\n    inset 0 0 0 1px rgba(255, 255, 255, 0.15),\n    inset 0 1px 20px rgba(0, 0, 0, 0.1),\n    0 0 0 #0f988e,\n    0 0 0 2px rgba(255, 255, 255, 0.5),\n    0 0 0 rgba(0, 0, 0, 0),\n    0 0 0 rgba(0, 0, 0, 0);\n}\n\n.button-with-icon:hover .text {\n  transform: translateX(80px);\n}\n.button-with-icon:hover .icon {\n  transform: translate(23px);\n}\n\n.text {\n  transition: all 0.5s ease-in-out;\n}"
  },
  {
    "id": "uiverse-eirikvold_foolish-grasshopper-52",
    "title": "Foolish Grasshopper",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "eirikvold",
      "profileUrl": "https://uiverse.io/eirikvold/foolish-grasshopper-52"
    },
    "license": "MIT",
    "description": "Foolish Grasshopper · button by eirikvold",
    "tags": [
      "button",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<button>\n  <div class=\"svg-wrapper-1\">\n    <div class=\"svg-wrapper\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\">\n        <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\n        <path fill=\"currentColor\" d=\"M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z\"></path>\n      </svg>\n    </div>\n  </div>\n  <span>Send</span>\n</button>",
    "css": "/* From Uiverse.io by eirikvold - Tags: button */\nbutton {\n  font-family: inherit;\n  font-size: 18px;\n  background: linear-gradient(to bottom, #4dc7d9 0%,#66a6ff 100%);\n  color: white;\n  padding: 0.8em 1.2em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  border-radius: 25px;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);\n  transition: all 0.3s;\n}\n\nbutton:hover {\n  transform: translateY(-3px);\n  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);\n}\n\nbutton:active {\n  transform: scale(0.95);\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);\n}\n\nbutton span {\n  display: block;\n  margin-left: 0.4em;\n  transition: all 0.3s;\n}\n\nbutton svg {\n  width: 18px;\n  height: 18px;\n  fill: white;\n  transition: all 0.3s;\n}\n\nbutton .svg-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: rgba(255, 255, 255, 0.2);\n  margin-right: 0.5em;\n  transition: all 0.3s;\n}\n\nbutton:hover .svg-wrapper {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\nbutton:hover svg {\n  transform: rotate(45deg);\n}"
  },
  {
    "id": "uiverse-vinodjangid07_nervous-gecko-43",
    "title": "Nervous Gecko",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "vinodjangid07",
      "profileUrl": "https://uiverse.io/vinodjangid07/nervous-gecko-43"
    },
    "license": "MIT",
    "description": "Nervous Gecko · button by vinodjangid07",
    "tags": [
      "button",
      "gradient",
      "chat",
      "hover effect",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<button class=\"chatBtn\">\n <svg height=\"1.6em\" fill=\"white\" xml:space=\"preserve\" viewBox=\"0 0 1000 1000\" y=\"0px\" x=\"0px\" version=\"1.1\">\n<path d=\"M881.1,720.5H434.7L173.3,941V720.5h-54.4C58.8,720.5,10,671.1,10,610.2v-441C10,108.4,58.8,59,118.9,59h762.2C941.2,59,990,108.4,990,169.3v441C990,671.1,941.2,720.5,881.1,720.5L881.1,720.5z M935.6,169.3c0-30.4-24.4-55.2-54.5-55.2H118.9c-30.1,0-54.5,24.7-54.5,55.2v441c0,30.4,24.4,55.1,54.5,55.1h54.4h54.4v110.3l163.3-110.2H500h381.1c30.1,0,54.5-24.7,54.5-55.1V169.3L935.6,169.3z M717.8,444.8c-30.1,0-54.4-24.7-54.4-55.1c0-30.4,24.3-55.2,54.4-55.2c30.1,0,54.5,24.7,54.5,55.2C772.2,420.2,747.8,444.8,717.8,444.8L717.8,444.8z M500,444.8c-30.1,0-54.4-24.7-54.4-55.1c0-30.4,24.3-55.2,54.4-55.2c30.1,0,54.4,24.7,54.4,55.2C554.4,420.2,530.1,444.8,500,444.8L500,444.8z M282.2,444.8c-30.1,0-54.5-24.7-54.5-55.1c0-30.4,24.4-55.2,54.5-55.2c30.1,0,54.4,24.7,54.4,55.2C336.7,420.2,312.3,444.8,282.2,444.8L282.2,444.8z\"></path>\n</svg>\n<span class=\"tooltip\">Chat</span>\n</button>",
    "css": "/* From Uiverse.io by vinodjangid07 - Tags: gradient, button, chat, hover effect */\n.chatBtn {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  border: none;\n  background-color: #FFE53B;\n  background-image: linear-gradient(147deg, #FFE53B, #FF2525,#FFE53B);\n  cursor: pointer;\n  padding-top: 3px;\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.164);\n  position: relative;\n  background-size: 300%;\n  background-position: left;\n  transition-duration: 1s;\n}\n\n.tooltip {\n  position: absolute;\n  top: -40px;\n  opacity: 0;\n  background-color: rgb(255, 180, 82);\n  color: white;\n  padding: 5px 10px;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition-duration: .5s;\n  pointer-events: none;\n  letter-spacing: 0.5px;\n}\n\n.chatBtn:hover .tooltip {\n  opacity: 1;\n  transition-duration: .5s;\n}\n\n.chatBtn:hover {\n  background-position: right;\n  transition-duration: 1s;\n}"
  },
  {
    "id": "uiverse-megasteve19_shy-eel-92",
    "title": "Shy Eel",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "megasteve19",
      "profileUrl": "https://uiverse.io/megasteve19/shy-eel-92"
    },
    "license": "MIT",
    "description": "Shy Eel · button by megasteve19",
    "tags": [
      "button",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 225,
    "accentColor": null,
    "html": "<button>\n  Button\n</button>",
    "css": "/* From Uiverse.io by megasteve19 - Tags: button */\nbutton {\n  border: none;\n  background-color: seagreen;\n  color: white;\n  font-size: 1.15rem;\n  font-weight: 500;\n  padding: 0.8rem 2rem;\n  border-radius: 0.5rem;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  transform: translate(1) translate(0, 0);\n  transition: transform 225ms, box-shadow 225ms;\n}\n\nbutton:hover {\n  transform: scale(1.05) translate(0, -0.15rem);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.35);\n}\n\nbutton:active {\n  transform: scale(1) translate(0, 0.15rem);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n}"
  },
  {
    "id": "uiverse-steveblox_short-fish-35",
    "title": "Short Fish",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "SteveBloX",
      "profileUrl": "https://uiverse.io/SteveBloX/short-fish-35"
    },
    "license": "MIT",
    "description": "Short Fish · button by SteveBloX",
    "tags": [
      "button",
      "blue",
      "white",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<button>\n  Button\n</button>",
    "css": "/* From Uiverse.io by SteveBloX - Tags: blue, white, hover, button */\nbutton {\n  width: 150px;\n  height: 60px;\n  border: 3px solid #315cfd;\n  border-radius: 45px;\n  transition: all 0.3s;\n  cursor: pointer;\n  background: white;\n  font-size: 1.2em;\n  font-weight: 550;\n  font-family: 'Montserrat', sans-serif;\n}\n\nbutton:hover {\n  background: #315cfd;\n  color: white;\n  font-size: 1.5em;\n}"
  },
  {
    "id": "uiverse-ksaplay_strong-panther-58",
    "title": "Strong Panther",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "KSAplay",
      "profileUrl": "https://uiverse.io/KSAplay/strong-panther-58"
    },
    "license": "MIT",
    "description": "Strong Panther · button by KSAplay",
    "tags": [
      "button",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<button class=\"btn\">\n  <span class=\"text\">Play</span>\n</button>",
    "css": "/* From Uiverse.io by KSAplay - Tags: button */\n.btn {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  padding: 1em 2em;\n  font-size: 15px;\n  font-weight: bold;\n  border-width: 0;\n  border-radius: 1.5em;\n  text-transform: uppercase;\n  transition: .2s ease;\n}\n\n.text {\n  font-size: 1.2em;\n  color: white;\n  z-index: 1;\n}\n\n.btn::before {\n  position: absolute;\n  content: '';\n  width: 120%;\n  height: 260%;\n  background-image: linear-gradient(135deg, rgba(0,5,255,1) 0%, rgba(255,0,159,1) 100%);\n}\n\n.btn::after {\n  position: absolute;\n  content: '';\n  width: 88%;\n  height: 80%;\n  border-width: 0;\n  border-radius: 1.2em;\n  background-color: black;\n  opacity: .7;\n  transition: 100ms ease;\n}\n\n.btn:hover.btn {\n  transform: scale(1.1);\n}\n\n.btn:hover.btn::after {\n  opacity: .5;\n}\n\n.btn:hover.btn::before {\n  animation: turn_4810 .4s infinite linear;\n}\n\n.btn:active.btn {\n  transform: scale(1.05);\n}\n\n.btn:active.btn::before {\n  transform: scale(1.05);\n  animation: turn_4810 .2s infinite linear;\n}\n\n@keyframes turn_4810 {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}"
  },
  {
    "id": "uiverse-alexreyes091_soft-crab-61",
    "title": "Soft Crab",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "alexreyes091",
      "profileUrl": "https://uiverse.io/alexreyes091/soft-crab-61"
    },
    "license": "MIT",
    "description": "Soft Crab · button by alexreyes091",
    "tags": [
      "button",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<button class=\"btn\"> Button\n</button>",
    "css": "/* From Uiverse.io by alexreyes091 - Tags: button */\n.btn {\n padding: 1rem 2rem;\n font-weight: 700;\n background: rgb(255, 255, 255);\n color: blueviolet;\n border-radius: .5rem;\n border-bottom: 2px solid blueviolet;\n border-right: 2px solid blueviolet;\n border-top: 2px solid white;\n border-left: 2px solid white;\n transition-duration: 1s;\n transition-property: border-top, \n    border-left, \n    border-bottom,\n    border-right,\n    box-shadow;\n}\n\n.btn:hover {\n border-top: 2px solid blueviolet;\n border-left: 2px solid blueviolet;\n border-bottom: 2px solid rgb(238, 103, 238);\n border-right: 2px solid rgb(238, 103, 238);\n box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px;\n}"
  },
  {
    "id": "uiverse-sanketsuryawanshi_smooth-mouse-22",
    "title": "Smooth Mouse",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "SanketSuryawanshi",
      "profileUrl": "https://uiverse.io/SanketSuryawanshi/smooth-mouse-22"
    },
    "license": "MIT",
    "description": "Smooth Mouse · button by SanketSuryawanshi",
    "tags": [
      "button",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<div class=\"main_div\">\n  <button>Sign up</button>\n</div>",
    "css": "/* From Uiverse.io by SanketSuryawanshi - Tags: button */\n.main_div {\n --color: #3992e6;\n position: relative;\n z-index: 1;\n}\n\n.main_div::before {\n content: '';\n position: absolute;\n width: 30px;\n height: 30px;\n background: transparent;\n top: -7px;\n left: -7px;\n z-index: -5;\n border-top: 3px solid var(--color);\n border-left: 3px solid var(--color);\n transition: 0.5s;\n}\n\n.main_div::after {\n content: '';\n position: absolute;\n width: 30px;\n height: 30px;\n background: transparent;\n bottom: -7px;\n right: -7px;\n z-index: -5;\n border-right: 3px solid var(--color);\n border-bottom: 3px solid var(--color);\n transition: 0.5s;\n}\n\n.main_div:hover::before {\n width: 100%;\n height: 100%;\n}\n\n.main_div:hover::after {\n width: 100%;\n height: 100%;\n}\n\n.main_div button {\n padding: 0.7em 2em;\n font-size: 16px;\n background: #222222;\n color: #fff;\n border: none;\n cursor: pointer;\n font-family: inherit;\n}"
  },
  {
    "id": "uiverse-sujitadroja_strong-bullfrog-56",
    "title": "Strong Bullfrog",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "SujitAdroja",
      "profileUrl": "https://uiverse.io/SujitAdroja/strong-bullfrog-56"
    },
    "license": "MIT",
    "description": "Strong Bullfrog · button by SujitAdroja",
    "tags": [
      "button",
      "simple",
      "material design",
      "hover effect",
      "hoverme",
      "hover button",
      "button hover effect",
      "button hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<button class=\"btn\">Hover Me</button>",
    "css": "/* From Uiverse.io by SujitAdroja  - Tags: simple, material design, button, hover effect, hoverme, hover button, button hover effect , button hover */\n.btn {\n  position: relative;\n  background: none;\n  border: 2px solid black;\n  font-size: 1.2rem;\n  padding: 1rem 2rem;\n  border-radius: 0.5rem;\n  transition: all 0.3s;\n}\n.btn::before {\n  content: \"\";\n  height: 0%;\n  width: 0%;\n  border-radius: 50%;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  position: absolute;\n  background-color: #494958;\n  transition: all 0.3s;\n}\n.btn:hover {\n  border: 2px solid #32323c;\n  color: white;\n}\n.btn:hover::before {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  border-radius: 0.3rem;\n}"
  },
  {
    "id": "uiverse-arturcodecraft_bad-mayfly-19",
    "title": "Bad Mayfly",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "ArturCodeCraft",
      "profileUrl": "https://uiverse.io/ArturCodeCraft/bad-mayfly-19"
    },
    "license": "MIT",
    "description": "Bad Mayfly · button by ArturCodeCraft",
    "tags": [
      "button",
      "icon",
      "menu",
      "menuicon",
      "menu button",
      "hamburger menu",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 400,
    "accentColor": null,
    "html": "<div class=\"background\">\n  <button class=\"menu__icon\">\n    <span></span>\n    <span></span>\n    <span></span>\n  </button>\n</div>",
    "css": "/* From Uiverse.io by ArturCodeCraft - Tags: icon, button, menu, menuicon, menu button , hamburger menu */\n/* <reset-style> ============================ */\nbutton {\n  border: none;\n  background: none;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n  font-family: inherit;\n}\n/* ============================ */\n/* <style for bg> ======== */\n.background {\n  border-radius: 16px;\n  border: 1px solid #1a1a1a;\n  background: rgba(74, 74, 74, 0.39);\n  mix-blend-mode: luminosity;\n  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.20);\n  backdrop-filter: blur(15px);\n  width: 65px;\n  height: 65px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* <style for menu__icon> ======== */\n.menu__icon {\n  width: 32px;\n  height: 32px;\n  padding: 4px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  transition: transform .4s;\n}\n\n.menu__icon span {\n  width: 100%;\n  height: 0.25rem;\n  border-radius: 0.125rem;\n  background-color: rgb(0, 122, 255);\n  box-shadow: 0 .5px 2px 0 hsla(0, 0%, 0%, .2);\n  transition: width .4s, transform .4s, background-color .4s;\n}\n\n.menu__icon :nth-child(1) {\n  width: 75%;\n}\n\n.menu__icon :nth-child(2) {\n  width: 50%;\n}\n\n.menu__icon:hover {\n  transform: rotate(-90deg);\n}\n\n.menu__icon:hover span {\n  width: .25rem;\n  transform: translateX(10px);\n  background-color: rgb(255, 59, 48);\n}"
  },
  {
    "id": "uiverse-vinodjangid07_splendid-panda-48",
    "title": "Splendid Panda",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "vinodjangid07",
      "profileUrl": "https://uiverse.io/vinodjangid07/splendid-panda-48"
    },
    "license": "MIT",
    "description": "Splendid Panda · button by vinodjangid07",
    "tags": [
      "button",
      "hover effect",
      "filter",
      "setting",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<button title=\"filter\" class=\"filter\">\n  <svg viewBox=\"0 0 512 512\" height=\"1em\">\n    <path\n      d=\"M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z\"\n    ></path>\n  </svg>\n</button>",
    "css": "/* From Uiverse.io by vinodjangid07  - Tags: button, hover effect, filter, setting */\n.filter {\n  width: 50px;\n  height: 50px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid rgba(0, 0, 0, 0.192);\n  cursor: pointer;\n  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.021);\n  transition: all 0.3s;\n}\n\n.filter svg {\n  height: 16px;\n  fill: rgb(77, 77, 77);\n  transition: all 0.3s;\n}\n.filter:hover {\n  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.11);\n  background-color: rgb(59, 59, 59);\n}\n.filter:hover svg {\n  fill: white;\n}"
  },
  {
    "id": "uiverse-leoodaviid_loud-pug-70",
    "title": "Loud Pug",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "Leoodaviid",
      "profileUrl": "https://uiverse.io/Leoodaviid/loud-pug-70"
    },
    "license": "MIT",
    "description": "Loud Pug · button by Leoodaviid",
    "tags": [
      "button",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 600,
    "accentColor": null,
    "html": "<button class=\"loading\">\n  <p>Loading...</p>\n</button>",
    "css": "/* From Uiverse.io by Leoodaviid - Tags: button */\nbutton {\n  position: relative;\n  overflow: hidden;\n  padding: 1rem 2.5rem 1rem 2.5rem;\n  border: 0;\n  border-radius: 2rem;\n  font-size: 18px;\n  font-weight: 500;\n  background: transparent;\n  color: #1d1d1d;\n}\n\nbutton:hover {\n  cursor: wait;\n}\n\nbutton > p {\n  position: relative;\n  z-index: 3;\n}\n\nbutton::before,\nbutton::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 300%;\n  height: 100%;\n  opacity: 0;\n}\n\nbutton::before {\n  background: #79efff repeating-linear-gradient(50deg, transparent, transparent 10px, #71e0ef 10px, #71e0ef 20px);\n}\n\nbutton::after {\n  z-index: 2;\n  background: linear-gradient(#79efff 30%, transparent 100%);\n}\n\nbutton.loading::before,\nbutton.loading::after {\n  opacity: 1;\n}\n\n@keyframes loading_49100 {\n  0% {\n    translate: 25px 0;\n  }\n\n  100% {\n    translate: -30px 0;\n  }\n}\n\nbutton.loading::before {\n  animation: loading_49100 0.6s infinite linear;\n}"
  },
  {
    "id": "uiverse-medisetti-venkata-saikiran_silly-duck-5",
    "title": "Silly Duck",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "Medisetti-Venkata-Saikiran",
      "profileUrl": "https://uiverse.io/Medisetti-Venkata-Saikiran/silly-duck-5"
    },
    "license": "MIT",
    "description": "Silly Duck · button by Medisetti-Venkata-Saikiran",
    "tags": [
      "button",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 400,
    "accentColor": null,
    "html": "<div class=\"social-login-icons\">\n  <div class=\"socialcontainer\">\n    <div class=\"social-icon-1\">\n      <svg\n        viewBox=\"0 0 512 512\"\n        height=\"1.7em\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        class=\"svgIcontwit\"\n        fill=\"white\"\n      >\n        <path\n          d=\"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z\"\n        ></path>\n      </svg>\n    </div>\n    <div class=\"social-icon-1\">\n      <svg\n        viewBox=\"0 0 512 512\"\n        height=\"1.7em\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        class=\"svgIcontwit\"\n        fill=\"white\"\n      >\n        <path\n          d=\"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z\"\n        ></path>\n      </svg>\n    </div>\n  </div>\n  <div class=\"socialcontainer\">\n    <div class=\"social-icon-2\">\n      <svg\n        fill=\"white\"\n        class=\"svgIcon\"\n        viewBox=\"0 0 448 512\"\n        height=\"1.5em\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <path\n          d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"\n        ></path>\n      </svg>\n    </div>\n    <div class=\"social-icon-2\">\n      <svg\n        fill=\"white\"\n        class=\"svgIcon\"\n        viewBox=\"0 0 448 512\"\n        height=\"1.5em\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <path\n          d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"\n        ></path>\n      </svg>\n    </div>\n  </div>\n  <div class=\"socialcontainer\">\n    <div class=\"social-icon-3\">\n      <svg\n        viewBox=\"0 0 384 512\"\n        fill=\"white\"\n        height=\"1.6em\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <path\n          d=\"M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z\"\n        ></path>\n      </svg>\n    </div>\n    <div class=\"social-icon-3\">\n      <svg\n        viewBox=\"0 0 384 512\"\n        fill=\"white\"\n        height=\"1.6em\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <path\n          d=\"M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z\"\n        ></path>\n      </svg>\n    </div>\n  </div>\n  <div class=\"socialcontainer\">\n    <div class=\"social-icon-4\">\n      <svg fill=\"white\" viewBox=\"0 0 496 512\" height=\"1.6em\">\n        <path\n          d=\"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z\"\n        ></path>\n      </svg>\n    </div>\n    <div class=\"social-icon-4\">\n      <svg fill=\"white\" viewBox=\"0 0 496 512\" height=\"1.6em\">\n        <path\n          d=\"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z\"\n        ></path>\n      </svg>\n    </div>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by Medisetti-Venkata-Saikiran  - Tags: button */\n.social-login-icons {\n  display: flex;\n  align-items: center;\n}\n.social-login-icons svg {\n  width: 40px;\n}\n\n.social-icon-1,\n.social-icon-2,\n.social-icon-3,\n.social-icon-4 {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/* .social-icon-1 i{\n    color: rgba(175, 7, 7, 0.899);\n    font-size:50px;\n\n} */\n/* .social-icon-2 i{\n    color: skyblue;\n    font-size:50px;\n\n} */\n/* .social-icon-3 i{\n    color: rgb(58 58 227 / 87%);\n    font-size:50px;\n\n} */\n/* .social-login-icons{\n    margin: 30px 0px;\n} */\n\n.socialcontainer {\n  height: 50px;\n  overflow: hidden;\n}\n.social-icon-1 {\n  transition-duration: 0.4s;\n  background-color: rgb(0, 0, 0);\n}\n.socialcontainer:hover .social-icon-1 {\n  transform: translateY(-50px);\n}\n.social-icon-2 {\n  transition-duration: 0.4s;\n  background: linear-gradient(\n    72.44deg,\n    #ff7a00 11.92%,\n    #ff0169 51.56%,\n    #d300c5 85.69%\n  );\n}\n.socialcontainer:hover .social-icon-2 {\n  transform: translateY(-50px);\n}\n.social-icon-3 {\n  transition-duration: 0.4s;\n  background: #316ff6;\n}\n\n.socialcontainer:hover .social-icon-3 {\n  transform: translateY(-50px);\n}\n.social-icon-4 {\n  transition-duration: 0.4s;\n  background: linear-gradient(\n    180deg,\n    rgba(129, 34, 144, 1) 0%,\n    rgba(77, 34, 124, 1) 91%\n  );\n}\n\n.socialcontainer:hover .social-icon-4 {\n  transform: translateY(-50px);\n}"
  },
  {
    "id": "uiverse-bodyhc_sharp-seahorse-46",
    "title": "Sharp Seahorse",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "Bodyhc",
      "profileUrl": "https://uiverse.io/Bodyhc/sharp-seahorse-46"
    },
    "license": "MIT",
    "description": "Sharp Seahorse · button by Bodyhc",
    "tags": [
      "button",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<button class=\"button\"> \n  <svg height=\"18\" width=\"18\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 1024 1024\" class=\"icon\"> \n  <path fill=\"#fff\" d=\"M767.99994 585.142857q75.995429 0 129.462857 53.394286t53.394286 129.462857-53.394286 129.462857-129.462857 53.394286-129.462857-53.394286-53.394286-129.462857q0-6.875429 1.170286-19.456l-205.677714-102.838857q-52.589714 49.152-124.562286 49.152-75.995429 0-129.462857-53.394286t-53.394286-129.462857 53.394286-129.462857 129.462857-53.394286q71.972571 0 124.562286 49.152l205.677714-102.838857q-1.170286-12.580571-1.170286-19.456 0-75.995429 53.394286-129.462857t129.462857-53.394286 129.462857 53.394286 53.394286 129.462857-53.394286 129.462857-129.462857 53.394286q-71.972571 0-124.562286-49.152l-205.677714 102.838857q1.170286 12.580571 1.170286 19.456t-1.170286 19.456l205.677714 102.838857q52.589714-49.152 124.562286-49.152z\"></path> \n  </svg> \n  <span class=\"share\">SHARE </span> \n  </button>",
    "css": "/* From Uiverse.io by Bodyhc - Tags: button */\n.button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgb(66, 13, 240);\n  width: 200px;\n  height: 50px;\n  border-radius: 10px;\n  font-size: 18px;\n  outline: 3px solid #270092;\n  cursor: pointer;\n  transition: ease-out .5s;\n}\n\n.button:hover {\n  width: 180px;\n  height: 60px;\n  outline-offset: 4px;\n  transform: scale(1.3) rotate(2deg);\n  background-color: blue;\n  box-shadow: 5px 20px #cdcbd4\n}\n\n.icon {\n  color: #270092;\n  margin-right: 5px;\n}\n\n.share {\n  margin-left: 5px;\n  color: #fff;\n}"
  },
  {
    "id": "uiverse-felipesntr_strange-bobcat-47",
    "title": "Strange Bobcat",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "felipesntr",
      "profileUrl": "https://uiverse.io/felipesntr/strange-bobcat-47"
    },
    "license": "MIT",
    "description": "Strange Bobcat · button by felipesntr",
    "tags": [
      "button",
      "icon",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<button>\n  <span>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path fill=\"none\" d=\"M0 0h24v24H0z\"></path><path fill=\"currentColor\" d=\"M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z\"></path></svg> Create\n  </span>\n</button>",
    "css": "/* From Uiverse.io by felipesntr - Tags: icon, button */\nbutton {\n border: 2px solid #24b4fb;\n background-color: #24b4fb;\n border-radius: 0.9em;\n padding: 0.8em 1.2em 0.8em 1em;\n transition: all ease-in-out 0.2s;\n font-size: 16px;\n}\n\nbutton span {\n display: flex;\n justify-content: center;\n align-items: center;\n color: #fff;\n font-weight: 600;\n}\n\nbutton:hover {\n background-color: #0071e2;\n}"
  },
  {
    "id": "uiverse-roroland_brave-moth-43",
    "title": "Brave Moth",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "roroland",
      "profileUrl": "https://uiverse.io/roroland/brave-moth-43"
    },
    "license": "MIT",
    "description": "Brave Moth · button by roroland",
    "tags": [
      "button",
      "flat design",
      "flip",
      "animated",
      "two side",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div class=\"flip-button\">\n  <button class=\"button button-front\">\n    <span class=\"text-front\">Label one</span>\n    <span class=\"text-back\">Back can be longer</span>\n  </button>\n</div>",
    "css": "/* From Uiverse.io by roroland - Tags: flat design, button, flip, animated, two side */\n.flip-button {\n  --col1: #4CAF50;\n  --col2: #4f16ac;\n  --col3: #d8d1e4;\n  position: relative;\n  min-width: 10rem;\n  min-height: 3rem;\n  perspective: 500px;\n}\n\n.flip-button .button {\n  appearance: none;\n  position: absolute;\n  inset: 0;\n  height: 100%;\n  border-radius: 30px;\n  font-size: .75em;\n  font-weight: bold;\n  color: #fff;\n  text-transform: uppercase;\n  background-color: var(--col1);\n  border: none;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n  transition: all 1s ease-out .5s;\n  transform-style: preserve-3d;\n  width: 100%;\n}\n\n.flip-button:hover .button {\n  background-color: var(--col2);\n  cursor: pointer;\n  transform: rotateY(180deg) scale(1.5);\n  transition: all .3s ease-out;\n}\n\n.flip-button:hover .button:active {\n  background-color: rgba(81, 23, 173, 0.75);\n  transform: rotateY(180deg) scale(1.45);\n  outline: 10px solid var(--col3);\n  transition: all .1s ease-out;\n}\n\n.flip-button .button::after {\n  content: '';\n  box-shadow: 0px 0px 60px 5px rgba(0, 0, 0, 0.25);\n  display: block;\n  border-radius: 30px;\n  height: 100%;\n  width: 100%;\n  transition: all .3s ease-out .95s;\n}\n\n.flip-button:hover .button::after {\n  box-shadow: 0px 0px 1px 10px rgba(160, 29, 149, 0.15);\n  transition: all .3s ease-out;\n}\n\n.flip-button .text-front,\n.flip-button .text-back {\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  padding: 0 1.5em;\n  transform: translate(-50%, -50%);\n  backface-visibility: hidden;\n  width: 100%;\n}\n\n.flip-button .text-back {\n  transform: translate(-50%, -50%) rotateY(180deg);\n}"
  },
  {
    "id": "uiverse-nhfiz_unlucky-pug-80",
    "title": "Unlucky Pug",
    "category": "button",
    "source": "uiverse",
    "author": {
      "name": "nhfiz",
      "profileUrl": "https://uiverse.io/nhfiz/unlucky-pug-80"
    },
    "license": "MIT",
    "description": "Unlucky Pug · button by nhfiz",
    "tags": [
      "button",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<button>\n <span class=\"icon\">\n    \n<svg height=\"303.09363\" width=\"187.41829\" version=\"1.1\">\n  <path id=\"path4\" stroke-linecap=\"round\" style=\"stroke:none;stroke-width:2.81;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none\" d=\"m 105.04479,7.9451197 c -0.54247,-0.518571 -1.09286,-1.029222 -1.64524,-1.54186 -0.61595,-0.572255 -1.22596,-1.146482 -1.85384,-1.710782 -1.25775,-1.134567 -2.537358,-2.259184 -3.844788,-3.36394 -2.09427,-1.77237697 -5.16413,-1.77038997 -7.26039,0 -1.30742,1.104756 -2.58107,2.227394 -3.83882,3.35798 -0.63782,0.574234 -1.25577,1.156416 -1.87769,1.734625 -0.53847,0.502703 -1.0829,1.003419 -1.61143,1.512084 -0.88818,0.848436 -1.75648,1.70482 -2.61684,2.5651783 -0.14306,0.143062 -0.28811,0.288111 -0.42919,0.43316 -17.060123,17.22703 -28.588524,37.172235 -35.801225,61.735159 -0.125179,0.435146 -0.260293,0.860358 -0.387459,1.293517 -0.04371,0.154984 -0.09339,0.300033 -0.137101,0.455017 -0.0099,0.03377 -0.0079,0.07153 -0.01788,0.105302 -5.766187,20.286964 -8.524101,43.53849 -8.524101,70.45796 0,3.05993 0.05365,6.10596 0.13114,9.14403 l -24.167515,28.14543 c -0.707361,0.82261 -1.160391,1.83199 -1.3074264,2.90495 l -9.80369097,72.24621 c -0.311955,2.29892 0.818631,4.55414 2.84931497,5.67479 2.028696,1.12263 4.538239,0.88221 6.320552,-0.60206 L 51.189952,227.47351 h 24.37615 c -3.33215,5.3072 -5.31316,12.12847 -5.31514,19.66505 0.002,4.51638 0.72127,8.8599 2.15983,12.95305 1.93929,5.40854 7.59023,18.67752 13.573,32.72739 l 2.91687,6.85505 c 0.88221,2.07439 2.91687,3.42156 5.17208,3.41957 1.52003,0.002 2.94072,-0.61199 3.97593,-1.6472 0.49873,-0.49873 0.90804,-1.09879 1.19615,-1.77635 l 3.020198,-7.10143 c 5.93309,-13.93661 11.53635,-27.10227 13.48358,-32.51875 1.42267,-4.06137 2.14394,-8.40687 2.14394,-12.91729 0,-7.53459 -1.983,-14.35387 -5.31515,-19.66107 h 23.65289 l 41.9668,35.01637 c 1.78032,1.48626 4.29185,1.72469 6.32055,0.60205 0.46892,-0.2583 0.88817,-0.5782 1.25378,-0.94381 1.22,-1.22 1.83596,-2.96058 1.59553,-4.73097 l -9.80569,-72.24027 c -0.14704,-1.07297 -0.60007,-2.08235 -1.30743,-2.90495 l -23.45419,-27.31289 c 0.0914,-3.31427 0.14107,-6.63847 0.14306,-9.97857 0,-26.93934 -2.75792,-50.202781 -8.53006,-70.499678 -0.006,-0.02183 -0.006,-0.0457 -0.012,-0.06753 -0.0278,-0.09936 -0.0596,-0.190728 -0.0874,-0.290098 -0.26625,-0.929902 -0.5484,-1.843908 -0.83055,-2.761888 -7.23257,-23.950938 -18.64573,-43.486827 -35.37602,-60.391968 -0.16279,-0.16704 -0.32573,-0.329972 -0.49064,-0.49489 -0.84022,-0.8487053 -1.69701,-1.6927643 -2.57114,-2.5274333 z m 12.504,114.1176503 c 0,6.2669 -2.44,12.16423 -6.87492,16.59915 -4.43293,4.43293 -10.32827,6.87491 -16.599138,6.87491 -12.94511,-0.002 -23.47407,-10.53094 -23.47605,-23.47605 v 0 c 0.004,-12.94709 10.53889,-23.47406 23.47406,-23.47406 6.268888,-0.002 12.166218,2.43801 16.601138,6.87293 4.43491,4.43492 6.8769,10.33025 6.87491,16.60312 z\"></path>\n</svg>\n\n   </span>\n<span class=\"text\">\nLaunch\n</span>   \n<span class=\"launch\">\n</span>   \n</button>",
    "css": "/* From Uiverse.io by nhfiz - Tags: button */\nbutton {\n  padding: 15px 30px 15px 50px;\n  background: #181c35;\n  border-radius: 30px;\n  display: flex;\n  position: relative;\n  color: #fff;\n  font-weight: 400;\n  overflow: hidden;\n  transition: all ease-in-out .5s;\n  border: #ffffff56 solid 1px;\n  box-shadow: #51eafd 0px 0px 50px -15px;\n}\n\nbutton:before {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: -90%;\n  left: -90%;\n  filter: blur(20px);\n  background: #a11ee3;\n}\n\nbutton:after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: -90%;\n  right: -90%;\n  filter: blur(20px);\n  background: #51eafd;\n}\n\nbutton .icon {\n  transform: scale(0.07);\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  left: 14px;\n  top: 2px;\n  transition: all ease-in-out .5s;\n  z-index: 9;\n  rotate: 45deg\n}\n\nbutton .icon path {\n  fill: #fff;\n}\n\nbutton .launch {\n  background: fff;\n  background: #fff;\n  width: 300px;\n  height: 300px;\n  rotate: 45deg;\n  position: absolute;\n  left: -9px;\n  top: 550%;\n  z-index: 0;\n  transform: translateX(-56%);\n  transition: all ease-in-out 1s;\n}\n\nbutton .text {\n  z-index: 9;\n  transition: all ease-in-out .3s;\n}\n\nbutton:hover .icon {\n  transform: scale(0.07);\n  animation: shake_341 2s infinite;\n  top: 5px;\n  left: 8px;\n  rotate: 0deg;\n}\n\nbutton:active {\n  transform: scale(0.7);\n}\n\nbutton:hover {\n  box-shadow: 0px 0px 0px 10px #00000017;\n}\n\nbutton:focus {\n  color: #464646;\n}\n\nbutton:focus .icon {\n  transform: scale(0.07);\n  animation: launch_341 2s alternate;\n}\n\nbutton:focus .icon path {\n  animation: fill_341 2s linear;\n  animation-fill-mode: forwards;\n}\n\nbutton:focus .launch {\n  top: -90%;\n}\n\n@keyframes shake_341 {\n  10%, 90% {\n    transform: scale(0.07) translate3d(-6px, 0, 0);\n  }\n\n  20%, 80% {\n    transform: scale(0.07)  translate3d(7px, 0, 0);\n  }\n\n  30%, 50%, 70% {\n    transform: scale(0.07)  translate3d(-9px, 0, 0);\n  }\n\n  40%, 60% {\n    transform: scale(0.07)  translate3d(9px, 0, 0);\n  }\n}\n\n@keyframes launch_341 {\n  0% {\n    top: 0px;\n    opacity: 1;\n  }\n\n  20% {\n    top: -100%;\n    opacity: 1;\n  }\n\n  20.5% {\n    opacity: 0;\n  }\n\n  24% {\n    opacity: 0;\n    top: 100%;\n  }\n\n  25% {\n    opacity: 1;\n  }\n\n  100% {\n    top: 6px;\n  }\n}\n\n@keyframes fill_341 {\n  0% {\n    fill: #fff;\n  }\n\n  20% {\n    fill: #fff;\n  }\n\n  20.5% {\n    opacity: 0;\n  }\n\n  100% {\n    fill: #464646;\n  }\n}"
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
    "id": "uiverse-shoh2008_average-duck-41",
    "title": "Average Duck",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "Shoh2008",
      "profileUrl": "https://uiverse.io/Shoh2008/average-duck-41"
    },
    "license": "MIT",
    "description": "Average Duck · toggle by Shoh2008",
    "tags": [
      "toggle",
      "switch",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"checkbox-wrapper-8\">\n  <input type=\"checkbox\" id=\"cb3-8\" class=\"tgl tgl-skewed\">\n  <label for=\"cb3-8\" data-tg-on=\"ON\" data-tg-off=\"OFF\" class=\"tgl-btn\"></label>\n</div>",
    "css": "/* From Uiverse.io by Shoh2008 - Tags: switch */\n.checkbox-wrapper-8 .tgl {\n  display: none;\n}\n\n.checkbox-wrapper-8 .tgl,\n  .checkbox-wrapper-8 .tgl:after,\n  .checkbox-wrapper-8 .tgl:before,\n  .checkbox-wrapper-8 .tgl *,\n  .checkbox-wrapper-8 .tgl *:after,\n  .checkbox-wrapper-8 .tgl *:before,\n  .checkbox-wrapper-8 .tgl + .tgl-btn {\n  box-sizing: border-box;\n}\n\n.checkbox-wrapper-8 .tgl::-moz-selection,\n  .checkbox-wrapper-8 .tgl:after::-moz-selection,\n  .checkbox-wrapper-8 .tgl:before::-moz-selection,\n  .checkbox-wrapper-8 .tgl *::-moz-selection,\n  .checkbox-wrapper-8 .tgl *:after::-moz-selection,\n  .checkbox-wrapper-8 .tgl *:before::-moz-selection,\n  .checkbox-wrapper-8 .tgl + .tgl-btn::-moz-selection,\n  .checkbox-wrapper-8 .tgl::selection,\n  .checkbox-wrapper-8 .tgl:after::selection,\n  .checkbox-wrapper-8 .tgl:before::selection,\n  .checkbox-wrapper-8 .tgl *::selection,\n  .checkbox-wrapper-8 .tgl *:after::selection,\n  .checkbox-wrapper-8 .tgl *:before::selection,\n  .checkbox-wrapper-8 .tgl + .tgl-btn::selection {\n  background: none;\n}\n\n.checkbox-wrapper-8 .tgl + .tgl-btn {\n  outline: 0;\n  display: block;\n  width: 4em;\n  height: 2em;\n  position: relative;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.checkbox-wrapper-8 .tgl + .tgl-btn:after,\n  .checkbox-wrapper-8 .tgl + .tgl-btn:before {\n  position: relative;\n  display: block;\n  content: \"\";\n  width: 50%;\n  height: 100%;\n}\n\n.checkbox-wrapper-8 .tgl + .tgl-btn:after {\n  left: 0;\n}\n\n.checkbox-wrapper-8 .tgl + .tgl-btn:before {\n  display: none;\n}\n\n.checkbox-wrapper-8 .tgl:checked + .tgl-btn:after {\n  left: 50%;\n}\n\n.checkbox-wrapper-8 .tgl-skewed + .tgl-btn {\n  overflow: hidden;\n  transform: skew(-10deg);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transition: all 0.2s ease;\n  font-family: sans-serif;\n  background: #888;\n}\n\n.checkbox-wrapper-8 .tgl-skewed + .tgl-btn:after,\n  .checkbox-wrapper-8 .tgl-skewed + .tgl-btn:before {\n  transform: skew(10deg);\n  display: inline-block;\n  transition: all 0.2s ease;\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  line-height: 2em;\n  font-weight: bold;\n  color: #fff;\n  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);\n}\n\n.checkbox-wrapper-8 .tgl-skewed + .tgl-btn:after {\n  left: 100%;\n  content: attr(data-tg-on);\n}\n\n.checkbox-wrapper-8 .tgl-skewed + .tgl-btn:before {\n  left: 0;\n  content: attr(data-tg-off);\n}\n\n.checkbox-wrapper-8 .tgl-skewed + .tgl-btn:active {\n  background: #888;\n}\n\n.checkbox-wrapper-8 .tgl-skewed + .tgl-btn:active:before {\n  left: -10%;\n}\n\n.checkbox-wrapper-8 .tgl-skewed:checked + .tgl-btn {\n  background: #86d993;\n}\n\n.checkbox-wrapper-8 .tgl-skewed:checked + .tgl-btn:before {\n  left: -100%;\n}\n\n.checkbox-wrapper-8 .tgl-skewed:checked + .tgl-btn:after {\n  left: 0;\n}\n\n.checkbox-wrapper-8 .tgl-skewed:checked + .tgl-btn:active:after {\n  left: 10%;\n}"
  },
  {
    "id": "uiverse-zanina-yassine_afraid-eel-50",
    "title": "Afraid Eel",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "zanina-yassine",
      "profileUrl": "https://uiverse.io/zanina-yassine/afraid-eel-50"
    },
    "license": "MIT",
    "description": "Afraid Eel · toggle by zanina-yassine",
    "tags": [
      "toggle",
      "switch",
      "ios",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<p class=\"component-title\">iOS Switch</p>\n\n<div class=\"container\">\n  <input type=\"checkbox\" class=\"checkbox\" id=\"checkbox\">\n  <label class=\"switch\" for=\"checkbox\">\n    <span class=\"slider\"></span>\n  </label>\n</div>",
    "css": "/* From Uiverse.io by zanina-yassine - Tags: switch, ios */\n/* Remove this container when use*/\n.component-title {\n  width: 100%;\n  position: absolute;\n  z-index: 999;\n  top: 30px;\n  left: 0;\n  padding: 0;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #888;\n  text-align: center;\n}\n\n/* The switch - the box around the slider */\n.container {\n  width: 51px;\n  height: 31px;\n  position: relative;\n}\n\n/* Hide default HTML checkbox */\n.checkbox {\n  opacity: 0;\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n\n.switch {\n  width: 100%;\n  height: 100%;\n  display: block;\n  background-color: #e9e9eb;\n  border-radius: 16px;\n  cursor: pointer;\n  transition: all 0.2s ease-out;\n}\n\n/* The slider */\n.slider {\n  width: 27px;\n  height: 27px;\n  position: absolute;\n  left: calc(50% - 27px/2 - 10px);\n  top: calc(50% - 27px/2);\n  border-radius: 50%;\n  background: #FFFFFF;\n  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15), 0px 3px 1px rgba(0, 0, 0, 0.06);\n  transition: all 0.2s ease-out;\n  cursor: pointer;\n}\n\n.checkbox:checked + .switch {\n  background-color: #34C759;\n}\n\n.checkbox:checked + .switch .slider {\n  left: calc(50% - 27px/2 + 10px);\n  top: calc(50% - 27px/2);\n}"
  },
  {
    "id": "uiverse-njesenberger_brave-firefox-90",
    "title": "Brave Firefox",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "njesenberger",
      "profileUrl": "https://uiverse.io/njesenberger/brave-firefox-90"
    },
    "license": "MIT",
    "description": "Brave Firefox · toggle by njesenberger",
    "tags": [
      "toggle",
      "skeuomorphism",
      "switch",
      "realistic",
      "toggle switch",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 240,
    "accentColor": null,
    "html": "<div class=\"toggle-container\">\n  <input class=\"toggle-input\" type=\"checkbox\">\n  <div class=\"toggle-handle-wrapper\">\n    <div class=\"toggle-handle\">\n      <div class=\"toggle-handle-knob\"></div>\n      <div class=\"toggle-handle-bar-wrapper\">\n        <div class=\"toggle-handle-bar\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"toggle-base\">\n    <div class=\"toggle-base-inside\"></div>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by njesenberger - Tags: skeuomorphism, switch, realistic, toggle, toggle switch */\n.toggle-container {\n  --knob-size: 1.75em;\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n\n.toggle-input {\n  position: absolute;\n  z-index: 2;\n  bottom: 132.5%;\n  border-radius: 50%;\n  transform: rotate(-25deg);\n  transform-origin: 50% 4.75em;\n  width: var(--knob-size);\n  height: var(--knob-size);\n  opacity: 0;\n  /* fix em sizing */\n  font: inherit;\n  transition: transform .24s cubic-bezier(.65, 1.35, .5, 1);\n  cursor: pointer;\n}\n\n.toggle-input:checked {\n  transform: rotate(25deg);\n}\n\n.toggle-handle-wrapper {\n  position: absolute;\n  z-index: 1;\n  bottom: -135%;\n  -webkit-mask-image: linear-gradient(to bottom, #000 62.125%, transparent 50%);\n  mask-image: linear-gradient(to bottom, #000 62.125%, transparent 50%);\n  width: 200%;\n  overflow: hidden;\n}\n\n.toggle-handle {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  transform: rotate(-25deg);\n  transform-origin: bottom center;\n  transition: transform .24s cubic-bezier(.65, 1.35, .5, 1);\n}\n\n.toggle-input:checked + .toggle-handle-wrapper > .toggle-handle {\n  transform: rotate(25deg);\n}\n\n.toggle-handle-knob {\n  position: relative;\n  z-index: 1;\n  border-radius: 50%;\n  width: var(--knob-size);\n  height: var(--knob-size);\n  background-image: radial-gradient(farthest-corner at 70% 30%, #fedee2 4%, #d63534 12% 24%, #a81a1a 50% 65%, #d63534 75%);\n  transition: transform .24s cubic-bezier(.65, 1.35, .5, 1);\n}\n\n.toggle-input:checked + .toggle-handle-wrapper .toggle-handle-knob {\n  transform: rotate(-90deg);\n}\n\n/* toggle handle knob hover inner shadow */\n.toggle-handle-knob::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: inherit;\n  width: 100%;\n  height: 100%;\n  box-shadow: inset 0 0 8px 2px rgb(255 255 255 / .4);\n  opacity: 0;\n  transition: opacity .2s;\n}\n\n@media (hover: hover) {\n  .toggle-input:hover + .toggle-handle-wrapper .toggle-handle-knob::after,\n  .toggle-input:focus-visible + .toggle-handle-wrapper .toggle-handle-knob::after {\n    opacity: 1;\n  }\n}\n\n.toggle-handle-bar-wrapper {\n  position: relative;\n  width: .5em;\n  height: 3em;\n}\n\n.toggle-handle-bar {\n  position: absolute;\n  top: calc(var(--knob-size) / 2 * -1);\n  left: 0;\n  width: 100%;\n  height: calc(100% + var(--knob-size) / 2);\n  background-image: linear-gradient(to right, #777475, #a4a4a4, #fff 45% 55%, #a4a4a4, #777475);\n  background-position-x: .06125em;\n  transition: background-position-x .24s cubic-bezier(.65, 1.35, .5, 1);\n  box-shadow: inset 0 1em .25em rgb(0 0 0 / .4);\n}\n\n.toggle-input:checked + .toggle-handle-wrapper .toggle-handle-bar {\n  background-position-x: -.06125em;\n}\n\n.toggle-base {\n  position: relative;\n  border-radius: 3.125em;\n  padding: .25em;\n  width: 3.5em;\n  height: 1.125em;\n  background-color: #fff;\n  background-image: linear-gradient(to bottom, #fff, #d7d7d7);\n  box-shadow: 0 -.25em .5em #fff, 0 .25em .5em #d7d7d7;\n}\n\n.toggle-base-inside {\n  position: relative;\n  border-radius: inherit;\n  width: 100%;\n  height: 100%;\n  background-image: linear-gradient(to bottom, #a6a6a6, #7d7d7d);\n  box-shadow: inset 0 .0625em rgb(255 255 255 / .2), inset 0 -.03125em rgb(255 255 255 / 1), inset 0 -.0625em .25em rgb(0 0 0 / .1);\n}\n\n/* toggle base inside active */\n.toggle-base-inside::after {\n  content: '';\n  position: absolute;\n  border-radius: inherit;\n  width: 100%;\n  height: 100%;\n  background-image: linear-gradient(to bottom, #5ab054, #438c3c);\n  box-shadow: inherit;\n  opacity: 0;\n  transition: opacity .24s cubic-bezier(.65, 1.35, .5, 1);\n}\n\n.toggle-input:checked ~ .toggle-base .toggle-base-inside::after {\n  opacity: 1;\n}"
  },
  {
    "id": "uiverse-vikramsinghnegi_sweet-cow-44",
    "title": "Sweet Cow",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "vikramsinghnegi",
      "profileUrl": "https://uiverse.io/vikramsinghnegi/sweet-cow-44"
    },
    "license": "MIT",
    "description": "Sweet Cow · toggle by vikramsinghnegi",
    "tags": [
      "toggle",
      "loading",
      "active",
      "switch",
      "2d button",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"checkbox-wrap\">\n  <input name=\"slide\" id=\"slide\" type=\"checkbox\" />\n  <label for=\"slide\">\n    <div id=\"pinkliquid\">\n      <div id=\"shine-one\" class=\"shine\"></div>\n      <div id=\"shine-two\" class=\"shine\"></div>\n      <div id=\"bubbles\"></div>\n    </div>\n    <div id=\"circle\">\n      <div id=\"inner-circle\"></div>\n      <div id=\"inner-circle-two\"></div>\n    </div>\n  </label>\n</div>",
    "css": "/* From Uiverse.io by vikramsinghnegi  - Tags: loading, active, switch, 2d button */\n.checkbox-wrap {\n  display: block;\n  width: 106px;\n  height: 51px;\n  position: relative;\n  margin: 1px auto;\n}\n#slide {\n  display: block;\n  width: 106px;\n  height: 51px;\n  margin: 0px;\n  padding: 0px;\n  position: absolute;\n  z-index: 2;\n  opacity: 0;\n}\n#slide + label {\n  display: block;\n  width: 105px;\n  height: 50px;\n  margin: 0px;\n  padding: 0px;\n  z-index: 1;\n  border-top: 1px solid transparent;\n  border-left: 1px solid transparent;\n}\n#pinkliquid {\n  width: 88px;\n  height: 36px;\n  border-radius: 18px;\n  margin: 7px 0 0 9px;\n  overflow: hidden;\n  background: #b4264a;\n  background: linear-gradient(to bottom, #fe0744 0%, #ff0460 50%, #ff0082 100%);\n  box-shadow: 0px 0px 9px 0px #ff1e00;\n}\n.shine {\n  width: 100%;\n  background: rgba(255, 255, 255, 0.23);\n  margin: 6px 0 4px 0;\n  transition: all 300ms ease;\n}\n.shine#shine-one {\n  height: 12px;\n}\n.shine#shine-two {\n  height: 3px;\n}\n#bubbles {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n}\n#bubbles i {\n  display: block;\n  border-radius: 20px;\n  background: #3a3236;\n  position: absolute;\n  transition: all 600ms ease;\n}\ni#a {\n  width: 4px;\n  height: 4px;\n  top: 35px;\n  left: 19px;\n}\ni#b {\n  width: 5px;\n  height: 5px;\n  top: 24px;\n  left: 30px;\n}\ni#c {\n  width: 3px;\n  height: 3px;\n  top: 15px;\n  left: 26px;\n}\ni#d {\n  width: 6px;\n  height: 6px;\n  top: 20px;\n  left: 40px;\n}\ni#e {\n  width: 5px;\n  height: 5px;\n  top: 30px;\n  left: 33px;\n}\ni#f {\n  width: 5px;\n  height: 5px;\n  top: 30px;\n  right: 33px;\n}\ni#g {\n  width: 6px;\n  height: 6px;\n  top: 20px;\n  right: 40px;\n}\ni#h {\n  width: 3px;\n  height: 3px;\n  top: 15px;\n  right: 26px;\n}\ni#i {\n  width: 4px;\n  height: 4px;\n  top: 35px;\n  right: 19px;\n}\ni#j {\n  width: 5px;\n  height: 5px;\n  top: 24px;\n  right: 30px;\n}\n#circle {\n  width: 37px;\n  height: 37px;\n  border-radius: 19px;\n  background: #191919;\n  position: absolute;\n  top: 7px;\n  left: 9px;\n  border-right: 1px solid #e3006f;\n  box-shadow: inset 0px 0px 10px 0px rgba(255, 255, 255, 0.24),\n    0px 3px 4px 0px #000000;\n  transition: all 300ms ease;\n}\n#inner-circle {\n  width: 31px;\n  height: 31px;\n  margin: 3px;\n  border-radius: 16px;\n  background: linear-gradient(\n    to right,\n    rgba(0, 0, 0, 0) 0%,\n    rgba(255, 1, 122, 0.2) 100%\n  );\n}\n#slide:checked + label #circle {\n  left: 60px;\n  border-right: 1px solid transparent;\n  border-left: 1px solid #e3006f;\n  background-color: #c27098;\n}\n#slide:checked + label #inner-circle {\n  background: linear-gradient(\n    to right,\n    rgba(255, 1, 122, 0.2) 0%,\n    rgba(0, 0, 0, 0) 100%\n  );\n}\n#slide:checked + label i#a {\n  width: 4px;\n  height: 4px;\n  top: 26px;\n  left: 19px;\n}\n#slide:checked + label i#b {\n  width: 5px;\n  height: 5px;\n  top: 24px;\n  left: 30px;\n}\n#slide:checked + label i#c {\n  width: 3px;\n  height: 3px;\n  top: 24px;\n  left: 26px;\n}\n#slide:checked + label i#d {\n  width: 6px;\n  height: 6px;\n  top: 29px;\n  left: 40px;\n}\n#slide:checked + label i#e {\n  width: 5px;\n  height: 5px;\n  top: 21px;\n  left: 33px;\n}\n#slide:checked + label i#f {\n  width: 5px;\n  height: 5px;\n  top: 26px;\n  right: 33px;\n}\n#slide:checked + label i#g {\n  width: 6px;\n  height: 6px;\n  top: 28px;\n  right: 40px;\n}\n#slide:checked + label i#h {\n  width: 3px;\n  height: 3px;\n  top: 23px;\n  right: 26px;\n}\n#slide:checked + label i#i {\n  width: 4px;\n  height: 4px;\n  top: 25px;\n  right: 19px;\n}\n#slide:checked + label i#j {\n  width: 5px;\n  height: 5px;\n  top: 30px;\n  right: 30px;\n}\n#slide:checked + label .shine#shine-one {\n  height: 12px;\n  margin-top: 12px;\n}\n#slide:checked + label .shine#shine-two {\n  height: 3px;\n  margin-top: -20px;\n}"
  },
  {
    "id": "uiverse-souravbandyopadhyay_empty-grasshopper-29",
    "title": "Empty Grasshopper",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "SouravBandyopadhyay",
      "profileUrl": "https://uiverse.io/SouravBandyopadhyay/empty-grasshopper-29"
    },
    "license": "MIT",
    "description": "Empty Grasshopper · toggle by SouravBandyopadhyay",
    "tags": [
      "toggle",
      "simple",
      "3d",
      "action",
      "red",
      "button",
      "switch",
      "input"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<label class=\"toggle-button-cover\">\n      <div id=\"button-2\" class=\"button r\">\n        <input class=\"checkbox\" type=\"checkbox\">\n        <div class=\"knobs\"></div>\n        <div class=\"layer\"></div>\n      </div>\n    </label>",
    "css": "/* From Uiverse.io by SouravBandyopadhyay - Tags: simple, 3d, action, red, button, switch, input, toggle switch */\n.toggle-button-cover {\n  display: inline-block;\n  position: relative;\n  width: 200px;\n  height: 140px;\n  box-sizing: border-box;\n}\n\n.button-cover:before {\n  counter-increment: button-counter;\n  content: counter(button-counter);\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  color: #d7e3e3;\n  font-size: 12px;\n  line-height: 1;\n  padding: 5px;\n}\n\n.button-cover,\n.knobs,\n.layer {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.button {\n  position: relative;\n  top: 50%;\n  width: 74px;\n  height: 36px;\n  margin: -20px auto 0 auto;\n  overflow: hidden;\n}\n\n.button.r,\n.button.r .layer {\n  border-radius: 100px;\n}\n\n.checkbox {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  opacity: 0;\n  cursor: pointer;\n  z-index: 3;\n}\n\n.knobs {\n  z-index: 2;\n}\n\n.layer {\n  width: 100%;\n  background-color: #ebf7fc;\n  transition: 0.3s ease all;\n  z-index: 1;\n}\n\n#button-2 .knobs:before,\n#button-2 .knobs:after {\n  content: 'YES';\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  width: 20px;\n  height: 10px;\n  color: #fff;\n  font-size: 10px;\n  font-weight: bold;\n  text-align: center;\n  line-height: 1;\n  padding: 9px 4px;\n  background-color: #03f480;\n  border-radius: 50%;\n  transition: 0.3s ease all;\n}\n\n#button-2 .knobs:before {\n  content: 'YES';\n}\n\n#button-2 .knobs:after {\n  content: 'NO';\n}\n\n#button-2 .knobs:after {\n  right: -28px;\n  left: auto;\n  background-color: #f44336;\n}\n\n#button-2 .checkbox:checked + .knobs:before {\n  left: -28px;\n}\n\n#button-2 .checkbox:checked + .knobs:after {\n  right: 4px;\n}\n\n#button-2 .checkbox:checked ~ .layer {\n  background-color: #fcebeb;\n}"
  },
  {
    "id": "uiverse-anthonypreite_neat-bat-64",
    "title": "Neat Bat",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "AnthonyPreite",
      "profileUrl": "https://uiverse.io/AnthonyPreite/neat-bat-64"
    },
    "license": "MIT",
    "description": "Neat Bat · toggle by AnthonyPreite",
    "tags": [
      "toggle",
      "minimalist",
      "switch",
      "theme-switch",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 400,
    "accentColor": null,
    "html": "<label class=\"switch\">\n  <input class=\"checkbox\" type=\"checkbox\" />\n  <span class=\"slider round\"></span>\n</label>",
    "css": "/* From Uiverse.io by AnthonyPreite  - Tags: minimalist, switch, theme-switch */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n.switch .checkbox {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: transparent;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  box-shadow: 1px 1px 5px 0 #d84f68 inset;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: #d84f68;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  box-shadow: inset 1px 1px 2px 0px #ff7ca7;\n}\n\n.checkbox:checked + .slider {\n  box-shadow: 1px 1px 5px 0 #2a9d8f inset;\n}\n\n.checkbox:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n  background-color: #2a9d8f;\n  box-shadow: inset -1px 1px 2px 0px #a3fff4;\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}"
  },
  {
    "id": "uiverse-jkhuger_old-falcon-20",
    "title": "Old Falcon",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "JkHuger",
      "profileUrl": "https://uiverse.io/JkHuger/old-falcon-20"
    },
    "license": "MIT",
    "description": "Old Falcon · toggle by JkHuger",
    "tags": [
      "toggle",
      "switch",
      "dark",
      "theme",
      "light",
      "theme-switch",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<label for=\"theme\" class=\"theme\">\n\t<span class=\"theme__toggle-wrap\">\n\t\t<input id=\"theme\" class=\"theme__toggle\" type=\"checkbox\" role=\"switch\" name=\"theme\" value=\"dark\">\n\t\t<span class=\"theme__fill\"></span>\n\t\t<span class=\"theme__icon\">\n\t\t\t<span class=\"theme__icon-part\"></span>\n\t\t\t<span class=\"theme__icon-part\"></span>\n\t\t\t<span class=\"theme__icon-part\"></span>\n\t\t\t<span class=\"theme__icon-part\"></span>\n\t\t\t<span class=\"theme__icon-part\"></span>\n\t\t\t<span class=\"theme__icon-part\"></span>\n\t\t\t<span class=\"theme__icon-part\"></span>\n\t\t\t<span class=\"theme__icon-part\"></span>\n\t\t\t<span class=\"theme__icon-part\"></span>\n\t\t</span>\n\t</span>\n</label>",
    "css": "/* From Uiverse.io by JkHuger - Tags: switch, dark, theme, light, theme-switch */\n/* Default */\n.theme {\n  display: flex;\n  align-items: center;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.theme__fill,\n.theme__icon {\n  transition: 0.3s;\n}\n\n.theme__fill {\n  background-color: var(--bg);\n  display: block;\n  mix-blend-mode: difference;\n  position: fixed;\n  inset: 0;\n  height: 100%;\n  transform: translateX(-100%);\n}\n\n.theme__icon,\n.theme__toggle {\n  z-index: 1;\n}\n\n.theme__icon,\n.theme__icon-part {\n  position: absolute;\n}\n\n.theme__icon {\n  display: block;\n  top: 0.5em;\n  left: 0.5em;\n  width: 1.5em;\n  height: 1.5em;\n}\n\n.theme__icon-part {\n  border-radius: 50%;\n  box-shadow: 0.4em -0.4em 0 0.5em hsl(0,0%,100%) inset;\n  top: calc(50% - 0.5em);\n  left: calc(50% - 0.5em);\n  width: 1em;\n  height: 1em;\n  transition: box-shadow var(--transDur) ease-in-out,\n\t\topacity var(--transDur) ease-in-out,\n\t\ttransform var(--transDur) ease-in-out;\n  transform: scale(0.5);\n}\n\n.theme__icon-part ~ .theme__icon-part {\n  background-color: hsl(0,0%,100%);\n  border-radius: 0.05em;\n  top: 50%;\n  left: calc(50% - 0.05em);\n  transform: rotate(0deg) translateY(0.5em);\n  transform-origin: 50% 0;\n  width: 0.1em;\n  height: 0.2em;\n}\n\n.theme__icon-part:nth-child(3) {\n  transform: rotate(45deg) translateY(0.45em);\n}\n\n.theme__icon-part:nth-child(4) {\n  transform: rotate(90deg) translateY(0.45em);\n}\n\n.theme__icon-part:nth-child(5) {\n  transform: rotate(135deg) translateY(0.45em);\n}\n\n.theme__icon-part:nth-child(6) {\n  transform: rotate(180deg) translateY(0.45em);\n}\n\n.theme__icon-part:nth-child(7) {\n  transform: rotate(225deg) translateY(0.45em);\n}\n\n.theme__icon-part:nth-child(8) {\n  transform: rotate(270deg) translateY(0.5em);\n}\n\n.theme__icon-part:nth-child(9) {\n  transform: rotate(315deg) translateY(0.5em);\n}\n\n.theme__label,\n.theme__toggle,\n.theme__toggle-wrap {\n  position: relative;\n}\n\n.theme__toggle,\n.theme__toggle:before {\n  display: block;\n}\n\n.theme__toggle {\n  background-color: hsl(48,90%,85%);\n  border-radius: 25% / 50%;\n  box-shadow: 0 0 0 0.125em var(--primaryT);\n  padding: 0.25em;\n  width: 6em;\n  height: 3em;\n  -webkit-appearance: none;\n  appearance: none;\n  transition: background-color var(--transDur) ease-in-out,\n\t\tbox-shadow 0.15s ease-in-out,\n\t\ttransform var(--transDur) ease-in-out;\n}\n\n.theme__toggle:before {\n  background-color: hsl(48,90%,55%);\n  border-radius: 50%;\n  content: \"\";\n  width: 2.5em;\n  height: 2.5em;\n  transition: 0.3s;\n}\n\n.theme__toggle:focus {\n  box-shadow: 0 0 0 0.125em var(--primary);\n  outline: transparent;\n}\n\n/* Checked */\n.theme__toggle:checked {\n  background-color: hsl(198,90%,15%);\n}\n\n.theme__toggle:checked:before,\n.theme__toggle:checked ~ .theme__icon {\n  transform: translateX(3em);\n}\n\n.theme__toggle:checked:before {\n  background-color: hsl(198,90%,55%);\n}\n\n.theme__toggle:checked ~ .theme__fill {\n  transform: translateX(0);\n}\n\n.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(1) {\n  box-shadow: 0.2em -0.2em 0 0.2em hsl(0,0%,100%) inset;\n  transform: scale(1);\n  top: 0.2em;\n  left: -0.2em;\n}\n\n.theme__toggle:checked ~ .theme__icon .theme__icon-part ~ .theme__icon-part {\n  opacity: 0;\n}\n\n.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(2) {\n  transform: rotate(45deg) translateY(0.8em);\n}\n\n.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(3) {\n  transform: rotate(90deg) translateY(0.8em);\n}\n\n.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(4) {\n  transform: rotate(135deg) translateY(0.8em);\n}\n\n.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(5) {\n  transform: rotate(180deg) translateY(0.8em);\n}\n\n.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(6) {\n  transform: rotate(225deg) translateY(0.8em);\n}\n\n.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(7) {\n  transform: rotate(270deg) translateY(0.8em);\n}\n\n.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(8) {\n  transform: rotate(315deg) translateY(0.8em);\n}\n\n.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(9) {\n  transform: rotate(360deg) translateY(0.8em);\n}\n\n.theme__toggle-wrap {\n  margin: 0 0.75em;\n}\n\n@supports selector(:focus-visible) {\n  .theme__toggle:focus {\n    box-shadow: 0 0 0 0.125em var(--primaryT);\n  }\n\n  .theme__toggle:focus-visible {\n    box-shadow: 0 0 0 0.125em var(--primary);\n  }\n}"
  },
  {
    "id": "uiverse-csemszepp_curly-parrot-90",
    "title": "Curly Parrot",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "csemszepp - Source: https://codepen.io/jkantner/pen/eYPYppR",
      "profileUrl": "https://uiverse.io/csemszepp - Source: https://codepen.io/jkantner/pen/eYPYppR/curly-parrot-90"
    },
    "license": "MIT",
    "description": "Curly Parrot · toggle by csemszepp - Source: https://codepen.io/jkantner/pen/eYPYppR",
    "tags": [
      "toggle",
      "switch",
      "toggle switch",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 150,
    "accentColor": null,
    "html": "<div class=\"container\">\n<label class=\"switch\">\n\t<input role=\"switch\" type=\"checkbox\" class=\"switch__input\">\n\t<svg aria-hidden=\"true\" height=\"12px\" width=\"12px\" viewBox=\"0 0 12 12\" class=\"switch__icon switch__icon--light\">\n\t\t<g stroke-linecap=\"round\" stroke-width=\"1\" stroke=\"#fff\" fill=\"none\">\n\t\t\t<circle r=\"2\" cy=\"6\" cx=\"6\"></circle>\n\t\t\t<g stroke-dasharray=\"1.5 1.5\">\n\t\t\t\t<polyline transform=\"rotate(0,6,6)\" points=\"6 10,6 11.5\"></polyline>\n\t\t\t\t<polyline transform=\"rotate(45,6,6)\" points=\"6 10,6 11.5\"></polyline>\n\t\t\t\t<polyline transform=\"rotate(90,6,6)\" points=\"6 10,6 11.5\"></polyline>\n\t\t\t\t<polyline transform=\"rotate(135,6,6)\" points=\"6 10,6 11.5\"></polyline>\n\t\t\t\t<polyline transform=\"rotate(180,6,6)\" points=\"6 10,6 11.5\"></polyline>\n\t\t\t\t<polyline transform=\"rotate(225,6,6)\" points=\"6 10,6 11.5\"></polyline>\n\t\t\t\t<polyline transform=\"rotate(270,6,6)\" points=\"6 10,6 11.5\"></polyline>\n\t\t\t\t<polyline transform=\"rotate(315,6,6)\" points=\"6 10,6 11.5\"></polyline>\n\t\t\t</g>\n\t\t</g>\n\t</svg>\n\t<svg aria-hidden=\"true\" height=\"12px\" width=\"12px\" viewBox=\"0 0 12 12\" class=\"switch__icon switch__icon--dark\">\n\t\t<g transform=\"rotate(-45,6,6)\" stroke-linejoin=\"round\" stroke-width=\"1\" stroke=\"#fff\" fill=\"none\">\n\t\t\t<path d=\"m9,10c-2.209,0-4-1.791-4-4s1.791-4,4-4c.304,0,.598.041.883.105-.995-.992-2.367-1.605-3.883-1.605C2.962.5.5,2.962.5,6s2.462,5.5,5.5,5.5c1.516,0,2.888-.613,3.883-1.605-.285.064-.578.105-.883.105Z\"></path>\n\t\t</g>\t\n\t</svg>\n\t<span class=\"switch__sr\">Dark Mode</span>\n</label>\n<div></div></div>",
    "css": "/* From Uiverse.io by csemszepp - Source: https://codepen.io/jkantner/pen/eYPYppR - Tags: switch, toggle switch */\n:root {\n  --hue: 223;\n  --bg: hsl(var(--hue),10%,90%);\n  --fg: hsl(var(--hue),10%,10%);\n  --primary: hsl(var(--hue),90%,50%);\n  --trans-dur: 0.3s;\n  --trans-timing: cubic-bezier(0.76,0.05,0.24,0.95);\n  --trans-timing-in: cubic-bezier(0.76,0.05,0.86,0.06);\n  --trans-timing-out: cubic-bezier(0.05,0.76,0.06,0.86);\n  font-size: calc(40px + (80 - 40) * (100px - 320px) / (2560 - 320));\n}\n\n.container,\n.switch__input {\n  color: var(--fg);\n  font: 1em/1.5 sans-serif;\n}\n\n.container {\n  background-color: var(--bg);\n  display: flex;\n  height: 100%;\n  transition: background-color var(--trans-dur),\n\t\tcolor var(--trans-dur);\n}\n\n.container:has(.switch__input:checked) {\n  background-color: var(--fg);\n  color: var(--bg);\n}\n\n.switch {\n  margin: auto;\n  position: relative;\n}\n\n.switch__icon,\n.switch__input {\n  display: block;\n}\n\n.switch__icon {\n  position: absolute;\n  top: 0.375em;\n  right: 0.375em;\n  width: 0.75em;\n  height: 0.75em;\n  transition: opacity calc(var(--trans-dur) / 2),\n\t\ttransform calc(var(--trans-dur) / 2);\n}\n\n.switch__icon polyline {\n  transition: stroke-dashoffset calc(var(--trans-dur) / 2);\n}\n\n.switch__icon--light,\n.switch__icon--light polyline {\n  transition-delay: calc(var(--trans-dur) / 2);\n  transition-timing-function: var(--trans-timing-out);\n}\n\n.switch__icon--dark {\n  opacity: 0;\n  transform: translateX(-0.75em) rotate(30deg) scale(0.75);\n  transition-timing-function: var(--trans-timing-in);\n}\n\n.switch__input {\n  background-color: hsl(210,90%,70%);\n  border-radius: 0.75em;\n  box-shadow: 0 0 0 0.125em hsla(var(--hue),90%,50%,0),\n\t\t0.125em 0.125em 0.25em hsla(var(--hue),90%,10%,0.2);\n  outline: transparent;\n  position: relative;\n  width: 3em;\n  height: 1.5em;\n  -webkit-appearance: none;\n  appearance: none;\n  -webkit-tap-highlight-color: transparent;\n  transition: background-color var(--trans-dur) var(--trans-timing),\n\t\tbox-shadow 0.15s linear;\n}\n\n.switch__input:focus-visible {\n  box-shadow: 0 0 0 0.125em hsl(var(--hue),90%,50%),\n\t\t0.125em 0.125em 0.25em hsla(var(--hue),90%,10%,0.2);\n}\n\n.switch__input:before,\n.switch__input:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n}\n\n.switch__input:before {\n  background-color: hsl(50,90%,50%);\n  border-radius: inherit;\n  mask-image: linear-gradient(120deg,hsl(0,0%,0%) 20%,hsla(0,0%,0%,0) 80%);\n  -webkit-mask-image: linear-gradient(120deg,hsl(0,0%,0%) 20%,hsla(0,0%,0%,0) 80%);\n  inset: 0;\n  transition: background-color var(--trans-dur) var(--trans-timing);\n}\n\n.switch__input:after {\n  background-color: hsl(0,0%,100%);\n  border-radius: 50%;\n  box-shadow: 0.05em 0.05em 0.05em hsla(var(--hue),90%,10%,0.1);\n  top: 0.125em;\n  left: 0.125em;\n  width: 1.25em;\n  height: 1.25em;\n  transition: background-color var(--trans-dur) var(--trans-timing),\n\t\ttransform var(--trans-dur) var(--trans-timing);\n  z-index: 1;\n}\n\n.switch__input:checked {\n  background-color: hsl(290,90%,40%);\n}\n\n.switch__input:checked:before {\n  background-color: hsl(220,90%,40%);\n}\n\n.switch__input:checked:after {\n  background-color: hsl(0,0%,0%);\n  transform: translateX(1.5em);\n}\n\n.switch__input:checked ~ .switch__icon--light,\n.switch__input:checked ~ .switch__icon--light polyline {\n  transition-delay: 0s;\n  transition-timing-function: var(--trans-timing-in);\n}\n\n.switch__input:checked ~ .switch__icon--light {\n  opacity: 0;\n  transform: translateX(-0.75em) rotate(-30deg) scale(0.75);\n}\n\n.switch__input:checked ~ .switch__icon--light polyline {\n  stroke-dashoffset: 1.5;\n}\n\n.switch__input:checked ~ .switch__icon--dark {\n  opacity: 1;\n  transform: translateX(-1.5em);\n  transition-delay: calc(var(--trans-dur) / 2);\n  transition-timing-function: var(--trans-timing-out);\n}\n\n.switch__sr {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n}"
  },
  {
    "id": "uiverse-shoh2008_brown-bulldog-12",
    "title": "Brown Bulldog",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "Shoh2008",
      "profileUrl": "https://uiverse.io/Shoh2008/brown-bulldog-12"
    },
    "license": "MIT",
    "description": "Brown Bulldog · toggle by Shoh2008",
    "tags": [
      "toggle",
      "switch",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<div class=\"checkbox-wrapper-41\">\n  <input type=\"checkbox\">\n</div>",
    "css": "/* From Uiverse.io by Shoh2008 - Tags: switch */\n.checkbox-wrapper-41 {\n  --size: 100px;\n}\n\n.checkbox-wrapper-41 input[type=\"checkbox\"] {\n  -webkit-appearance: none;\n  width: var(--size);\n  height: calc(var(--size) / 2);\n  background-color: #fff;\n  border: 3px solid #222;\n  border-radius: 30px 100px 100px 100px;\n  box-shadow: 0 10px 20px rgba(0,0,0,0.2);\n  outline: none;\n  cursor: pointer;\n  position: relative;\n  transition: all 0.5s;\n}\n\n.checkbox-wrapper-41 input[type=\"checkbox\"]::before {\n  content: \"\";\n  position: absolute;\n  width: calc(var(--size) / 2);\n  height: calc(var(--size) / 2);\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%) scale(0.7);\n  border: 3px solid #222;\n  border-radius: 30px 100px 100px 100px;\n  background-color: #fde881;\n  box-sizing: border-box;\n  transition: all 0.5s;\n}\n\n.checkbox-wrapper-41 input[type=\"checkbox\"]:checked {\n  background-color: #fde881;\n  border-radius: 100px 100px 30px 100px;\n}\n\n.checkbox-wrapper-41 input[type=\"checkbox\"]:checked::before {\n  left: 50%;\n  background-color: #fff;\n  border-radius: 100px 100px 30px 100px;\n}"
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
    "id": "uiverse-isweat-exe_unlucky-wasp-16",
    "title": "Unlucky Wasp",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "iSweat-exe",
      "profileUrl": "https://uiverse.io/iSweat-exe/unlucky-wasp-16"
    },
    "license": "MIT",
    "description": "Unlucky Wasp · toggle by iSweat-exe",
    "tags": [
      "toggle",
      "simple",
      "animation",
      "minimalist",
      "switch",
      "on/off",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 400,
    "accentColor": null,
    "html": "<label class=\"switch\">\n  <input type=\"checkbox\" />\n  <span class=\"slider\"></span>\n</label>",
    "css": "/* From Uiverse.io by iSweat-exe  - Tags: simple, animation, minimalist, switch, on/off */\n/* The switch - the box around the slider */\n.switch {\n  font-size: 20px;\n  position: relative;\n  display: inline-block;\n  width: 3.5em;\n  height: 2em;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n  border-radius: 10px;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 1.4em;\n  width: 1.4em;\n  border-radius: 5px;\n  left: 0.3em;\n  bottom: 0.3em;\n  background-color: white;\n  transition: 0.4s;\n}\n\n.switch input:checked + .slider {\n  background-color: green;\n}\n\n.switch input:checked + .slider:before {\n  transform: translateX(1.5em);\n}"
  },
  {
    "id": "uiverse-alexruix_silent-otter-72",
    "title": "Silent Otter",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "alexruix",
      "profileUrl": "https://uiverse.io/alexruix/silent-otter-72"
    },
    "license": "MIT",
    "description": "Silent Otter · toggle by alexruix",
    "tags": [
      "toggle",
      "switch",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 400,
    "accentColor": null,
    "html": "<label class=\"switch\">\n  <input type=\"checkbox\">\n  <span class=\"slider\">\n   <svg class=\"slider-icon\" viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" role=\"presentation\"><path fill=\"none\" d=\"m4 16.5 8 8 16-16\"></path></svg> \n  </span>\n</label>",
    "css": "/* From Uiverse.io by alexruix - Tags: switch */\n/* The switch - the box around the slider */\n.switch {\n  font-size: 17px;\n  position: relative;\n  display: inline-block;\n  width: 3.5em;\n  height: 2em;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #B0B0B0;\n  border: 1px solid #B0B0B0;\n  transition: .4s;\n  border-radius: 32px;\n  outline: none;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 2rem;\n  width: 2rem;\n  border-radius: 50%;\n  outline: 2px solid #B0B0B0;\n  left: -1px;\n  bottom: -1px;\n  background-color: #fff;\n  transition: transform .25s ease-in-out 0s;\n}\n\n.slider-icon {\n  opacity: 0;\n  height: 12px;\n  width: 12px;\n  stroke-width: 8;\n  position: absolute;\n  z-index: 999;\n  stroke: #222222;\n  right: 60%;\n  top: 30%;\n  transition: right ease-in-out .3s, opacity ease-in-out .15s;\n}\n\ninput:checked + .slider {\n  background-color: #222222;\n}\n\ninput:checked + .slider .slider-icon {\n  opacity: 1;\n  right: 20%;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(1.5em);\n  outline-color: #181818;\n}"
  },
  {
    "id": "uiverse-yaya12085_bright-dolphin-91",
    "title": "Bright Dolphin",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "Yaya12085",
      "profileUrl": "https://uiverse.io/Yaya12085/bright-dolphin-91"
    },
    "license": "MIT",
    "description": "Bright Dolphin · toggle by Yaya12085",
    "tags": [
      "toggle",
      "3d",
      "switch",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 400,
    "accentColor": null,
    "html": "<div class=\"container\">\n  <input id=\"checkbox\" name=\"checkbox\" type=\"checkbox\">\n  <label class=\"label\" for=\"checkbox\">\n            </label>\n\n</div>",
    "css": "/* From Uiverse.io by Yaya12085 - Tags: 3d, switch */\n.container {\n}\n\n.label {\n  height: 60px;\n  width: 120px;\n  background-color: #ffffff;\n  border-radius: 30px;\n  -webkit-box-shadow: inset 0 0 5px 4px rgba(255, 255, 255, 1),\n    inset 0 0 20px 1px rgba(0, 0, 0, 0.488), 10px 20px 30px rgba(0, 0, 0, 0.096),\n    inset 0 0 0 3px rgba(0, 0, 0, 0.3);\n  box-shadow: inset 0 0 5px 4px rgba(255, 255, 255, 1),\n    inset 0 0 20px 1px rgba(0, 0, 0, 0.488), 10px 20px 30px rgba(0, 0, 0, 0.096),\n    inset 0 0 0 3px rgba(0, 0, 0, 0.3);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n  -webkit-transition: -webkit-transform 0.4s;\n  transition: -webkit-transform 0.4s;\n  transition: transform 0.4s;\n}\n\n.label:hover {\n  -webkit-transform: perspective(100px) rotateX(5deg) rotateY(-5deg);\n  transform: perspective(100px) rotateX(5deg) rotateY(-5deg);\n}\n\n#checkbox:checked ~ .label:hover {\n  -webkit-transform: perspective(100px) rotateX(-5deg) rotateY(5deg);\n  transform: perspective(100px) rotateX(-5deg) rotateY(5deg);\n}\n\n#checkbox {\n  display: none;\n}\n\n#checkbox:checked ~ .label::before {\n  left: 70px;\n  background-color: #000000;\n  background-image: linear-gradient(315deg, #000000 0%, #414141 70%);\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.label::before {\n  position: absolute;\n  content: \"\";\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  background-color: #000000;\n  background-image: linear-gradient(\n    130deg,\n    #757272 10%,\n    #ffffff 11%,\n    #726f6f 62%\n  );\n  left: 10px;\n  -webkit-box-shadow: 0 2px 1px rgba(0, 0, 0, 0.3), 10px 10px 10px rgba(0, 0, 0, 0.3);\n  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.3), 10px 10px 10px rgba(0, 0, 0, 0.3);\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}"
  },
  {
    "id": "uiverse-catraco_brown-termite-67",
    "title": "Brown Termite",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "catraco",
      "profileUrl": "https://uiverse.io/catraco/brown-termite-67"
    },
    "license": "MIT",
    "description": "Brown Termite · toggle by catraco",
    "tags": [
      "toggle",
      "switch",
      "dark",
      "light",
      "animated",
      "light&dark",
      "slide",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<label class=\"switch-name\">\n  <input type=\"checkbox\" class=\"checkbox\">\n  <div class=\"back\"></div>\n  <svg class=\"moon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\">\n  <path d=\"M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z\"></path>\n  </svg>\n  <svg class=\"sun\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n  <path d=\"M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z\"></path>\n  </svg>\n</label>",
    "css": "/* From Uiverse.io by catraco - Tags: switch, dark, light, toggle, animated, light&dark, slide */\n.switch-name {\n  --dark-sky: #5050e5;\n  --moon: #ffd365;\n  --light-sky: #35d5e5;\n  --sun: #ffed89;\n  display: inline-block;\n  position: relative;\n  border-radius: 5em;\n  cursor: pointer;\n  width: 80px;\n  height: 40px;\n  overflow: hidden;\n  transition: all .5s;\n}\n\n.switch-name .back {\n  background-color: var(--dark-sky);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  transition: .5s ease-in-out;\n}\n\n.switch-name .checkbox {\n  opacity: 0;\n}\n\n.switch-name .checkbox:checked ~ .back {\n  background-color: var(--light-sky);\n}\n\n.switch-name .checkbox:checked ~ .moon {\n  transform: translate(100%) rotate(180deg);\n  opacity: 0;\n}\n\n.switch-name .checkbox:checked ~ .sun {\n  transform: translate(100%) rotate(180deg);\n  opacity: 1;\n}\n\n.switch-name .moon {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  padding: .4em;\n  fill: var(--moon);\n  transition: .5s;\n}\n\n.switch-name .sun {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  padding: .4em;\n  fill: var(--sun);\n  transition: .5s;\n  opacity: 0;\n}"
  },
  {
    "id": "uiverse-csemszepp_witty-fly-56",
    "title": "Witty Fly",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "csemszepp - Source: codepen.io/ykadosh/pen/jOwjmJe",
      "profileUrl": "https://uiverse.io/csemszepp - Source: codepen.io/ykadosh/pen/jOwjmJe/witty-fly-56"
    },
    "license": "MIT",
    "description": "Witty Fly · toggle by csemszepp - Source: codepen.io/ykadosh/pen/jOwjmJe",
    "tags": [
      "toggle",
      "neumorphism",
      "skeuomorphism",
      "switch",
      "toggle switch",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div class=\"container\">\n<label class=\"switch\">\n  <input class=\"togglesw\" type=\"checkbox\" checked=\"\">\n  <div class=\"indicator left\"></div>\n  <div class=\"indicator right\"></div>\n  <div class=\"button\"></div>\n</label>\n</div>",
    "css": "/* From Uiverse.io by csemszepp - Source: codepen.io/ykadosh/pen/jOwjmJe - Tags: neumorphism, skeuomorphism, switch, toggle switch */\n.container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  --hue: 220deg;\n  --width: 15rem;\n  --accent-hue: 22deg;\n  --duration: 0.6s;\n  --easing: cubic-bezier(1, 0, 1, 1);\n}\n\n.togglesw {\n  display: none;\n}\n\n.switch {\n  --shadow-offset: calc(var(--width) / 20);\n  position: relative;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  width: var(--width);\n  height: calc(var(--width) / 2.5);\n  border-radius: var(--width);\n  box-shadow: inset 10px 10px 10px hsl(var(--hue) 20% 80%),\n    inset -10px -10px 10px hsl(var(--hue) 20% 93%);\n}\n\n.indicator {\n  content: '';\n  position: absolute;\n  width: 40%;\n  height: 60%;\n  transition: all var(--duration) var(--easing);\n  box-shadow: inset 0 0 2px hsl(var(--hue) 20% 15% / 60%),\n    inset 0 0 3px 2px hsl(var(--hue) 20% 15% / 60%),\n    inset 0 0 5px 2px hsl(var(--hue) 20% 45% / 60%);\n}\n\n.indicator.left {\n  --hue: var(--accent-hue);\n  overflow: hidden;\n  left: 10%;\n  border-radius: 100px 0 0 100px;\n  background: linear-gradient(180deg, hsl(calc(var(--accent-hue) + 20deg) 95% 80%) 10%, hsl(calc(var(--accent-hue) + 20deg) 100% 60%) 30%, hsl(var(--accent-hue) 90% 50%) 60%, hsl(var(--accent-hue) 90% 60%) 75%, hsl(var(--accent-hue) 90% 50%));\n}\n\n.indicator.left::after {\n  content: '';\n  position: absolute;\n  opacity: 0.6;\n  width: 100%;\n  height: 100%;\n}\n\n.indicator.right {\n  right: 10%;\n  border-radius: 0 100px 100px 0;\n  background-image: linear-gradient(180deg, hsl(var(--hue) 20% 95%), hsl(var(--hue) 20% 65%) 60%, hsl(var(--hue) 20% 70%) 70%, hsl(var(--hue) 20% 65%));\n}\n\n.button {\n  position: absolute;\n  z-index: 1;\n  width: 55%;\n  height: 80%;\n  left: 5%;\n  border-radius: 100px;\n  background-image: linear-gradient(160deg, hsl(var(--hue) 20% 95%) 40%, hsl(var(--hue) 20% 65%) 70%);\n  transition: all var(--duration) var(--easing);\n  box-shadow: 2px 2px 3px hsl(var(--hue) 18% 50% / 80%),\n    2px 2px 6px hsl(var(--hue) 18% 50% / 40%),\n    10px 20px 10px hsl(var(--hue) 18% 50% / 40%),\n    20px 30px 30px hsl(var(--hue) 18% 50% / 60%);\n}\n\n.button::before, \n.button::after {\n  content: '';\n  position: absolute;\n  top: 10%;\n  width: 41%;\n  height: 80%;\n  border-radius: 100%;\n}\n\n.button::before {\n  left: 5%;\n  box-shadow: inset 1px 1px 2px hsl(var(--hue) 20% 85%);\n  background-image: linear-gradient(-50deg, hsl(var(--hue) 20% 95%) 20%, hsl(var(--hue) 20% 85%) 80%);\n}\n\n.button::after {\n  right: 5%;\n  box-shadow: inset 1px 1px 3px hsl(var(--hue) 20% 70%);\n  background-image: linear-gradient(-50deg, hsl(var(--hue) 20% 95%) 20%, hsl(var(--hue) 20% 75%) 80%);\n}\n\n.togglesw:checked ~ .button {\n  left: 40%;\n}\n\n.togglesw:not(:checked) ~ .indicator.left,\n.togglesw:checked ~ .indicator.right {\n  box-shadow: inset 0 0 5px hsl(var(--hue) 20% 15% / 100%),\n    inset 20px 20px 10px hsl(var(--hue) 20% 15% / 100%),\n    inset 20px 20px 15px hsl(var(--hue) 20% 45% / 100%);\n}"
  },
  {
    "id": "uiverse-guilhermeyohan_nervous-wasp-81",
    "title": "Nervous Wasp",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "guilhermeyohan",
      "profileUrl": "https://uiverse.io/guilhermeyohan/nervous-wasp-81"
    },
    "license": "MIT",
    "description": "Nervous Wasp · toggle by guilhermeyohan",
    "tags": [
      "toggle",
      "switch",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<input id=\"toggle_checkbox\" type=\"checkbox\">\n  <label for=\"toggle_checkbox\"></label>",
    "css": "/* From Uiverse.io by guilhermeyohan - Tags: switch */\n#toggle_checkbox {\n  display: none;\n}\n\nlabel {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  left: 0;\n  display: block;\n  width: 70px;\n  height: 30px;\n  margin: 0 auto;\n  transform: translateY(-50%);\n  cursor: pointer;\n}\n\nlabel:before {\n  top: 2px;\n  left: 3px;\n  width: 26px;\n  height: 26px;\n  border: 3px solid rgb(2, 169, 38);\n}\n\nlabel:after {\n  top: 0;\n  right: 0;\n  width: 70px;\n  height: 30px;\n  border: 3px solid #103445;\n}\n\nlabel:before, label:after {\n  content: \"\";\n  position: absolute;\n  border-radius: 50px;\n  box-sizing: border-box;\n  transition: 0.5s ease top, 0.5s ease left, 0.5s ease right, 0.5s ease width, 0.5s ease height, 0.5s ease border-color;\n}\n\n#toggle_checkbox:checked + label:before {\n  top: 0;\n  left: 0;\n  width: 70px;\n  height: 30px;\n  border-color: #143240;\n}\n\n#toggle_checkbox:checked + label:after {\n  top: 2px;\n  right: 3px;\n  width: 26px;\n  height: 26px;\n  border-color: red;\n}"
  },
  {
    "id": "uiverse-elijahwgummer-poc_giant-panda-93",
    "title": "Giant Panda",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "elijahwgummer-poc",
      "profileUrl": "https://uiverse.io/elijahwgummer-poc/giant-panda-93"
    },
    "license": "MIT",
    "description": "Giant Panda · toggle by elijahwgummer-poc",
    "tags": [
      "toggle",
      "simple",
      "switch",
      "yes",
      "no",
      "animated",
      "start/stop",
      "wobble"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<label class=\"switch\">\n  <input type=\"checkbox\">\n  <span class=\"slider\"></span>\n  <span class=\"knob\"></span>\n</label>",
    "css": "/* From Uiverse.io by elijahwgummer-poc - Tags: simple, switch, yes, no, animated, start/stop, wobble  */\n.switch {\n  display: inline-block;\n  position: relative;\n  width: 60px;\n  height: 34px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  cursor: pointer;\n  background-color: #ff6b6b;\n  border-radius: 34px;\n  transition: background-color 0.3s ease;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: #ffffff;\n  border-radius: 50%;\n  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n}\n\n.switch input:checked + .slider {\n  background-color: #66bb6a;\n}\n\n.switch input:checked + .slider:before {\n  transform: translateX(26px);\n}\n\n.slider:before {\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.knob {\n  position: absolute;\n  top: 50%;\n  left: 4px;\n  transform: translateY(-50%);\n  width: 26px;\n  height: 26px;\n  background-color: #ffffff;\n  border-radius: 50%;\n  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n}\n\n.switch input:checked ~ .knob {\n  transform: translateX(27px) translateY(-50%);\n}"
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
    "id": "uiverse-kshitijadhikaree_spotty-insect-89",
    "title": "Spotty Insect",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "KshitijAdhikaree",
      "profileUrl": "https://uiverse.io/KshitijAdhikaree/spotty-insect-89"
    },
    "license": "MIT",
    "description": "Spotty Insect · toggle by KshitijAdhikaree",
    "tags": [
      "toggle",
      "switch",
      "moon",
      "sun",
      "toggle switch",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<label class=\"switch-container\">\n  <input type=\"checkbox\">\n  <span class=\"slider\"></span>\n</label>",
    "css": "/* From Uiverse.io by KshitijAdhikaree - Tags: switch, moon, sun, toggle switch */\n/* The switch - the box around the slider */\n.switch-container {\n  position: relative;\n  display: inline-block;\n  width: 3.5em;\n  height: 2em;\n}\n\n/* Hide default HTML checkbox */\n.switch-container input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.switch-container .slider {\n  --background: linear-gradient(to right, #090613ef, #18151f);\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--background);\n  transition: background-color 0.5s;\n  border-radius: 30px;\n}\n\n.switch-container .slider:before {\n  position: absolute;\n  content: \"\";\n  height: 1.4em;\n  width: 1.4em;\n  border-radius: 50%;\n  left: 10%;\n  bottom: 15%;\n  box-shadow: inset 15px -4px 0px 15px #f8ea27;\n  background: var(--background);\n  transition: transform 0.5s, box-shadow 0.5s;\n}\n\n.switch-container input:checked + .slider {\n  background-color: #000;\n}\n\n.switch-container input:checked + .slider:before {\n  transform: translateX(100%);\n  box-shadow: inset 8px -4px 0px 0px #f8f8f4;\n}"
  },
  {
    "id": "uiverse-erzenxz_weak-falcon-28",
    "title": "Weak Falcon",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "ErzenXz",
      "profileUrl": "https://uiverse.io/ErzenXz/weak-falcon-28"
    },
    "license": "MIT",
    "description": "Weak Falcon · toggle by ErzenXz",
    "tags": [
      "toggle",
      "switch",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<label class=\"toggle-switch\">\n  <input type=\"checkbox\">\n  <div class=\"toggle-switch-background\">\n    <div class=\"toggle-switch-handle\"></div>\n  </div>\n</label>",
    "css": "/* From Uiverse.io by ErzenXz - Tags: switch */\n.toggle-switch {\n  position: relative;\n  display: inline-block;\n  width: 80px;\n  height: 40px;\n  cursor: pointer;\n}\n\n.toggle-switch input[type=\"checkbox\"] {\n  display: none;\n}\n\n.toggle-switch-background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #ddd;\n  border-radius: 20px;\n  box-shadow: inset 0 0 0 2px #ccc;\n  transition: background-color 0.3s ease-in-out;\n}\n\n.toggle-switch-handle {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  width: 30px;\n  height: 30px;\n  background-color: #fff;\n  border-radius: 50%;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  transition: transform 0.3s ease-in-out;\n}\n\n.toggle-switch::before {\n  content: \"\";\n  position: absolute;\n  top: -25px;\n  right: -35px;\n  font-size: 12px;\n  font-weight: bold;\n  color: #aaa;\n  text-shadow: 1px 1px #fff;\n  transition: color 0.3s ease-in-out;\n}\n\n.toggle-switch input[type=\"checkbox\"]:checked + .toggle-switch-handle {\n  transform: translateX(45px);\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 0 0 3px #05c46b;\n}\n\n.toggle-switch input[type=\"checkbox\"]:checked + .toggle-switch-background {\n  background-color: #05c46b;\n  box-shadow: inset 0 0 0 2px #04b360;\n}\n\n.toggle-switch input[type=\"checkbox\"]:checked + .toggle-switch:before {\n  content: \"On\";\n  color: #05c46b;\n  right: -15px;\n}\n\n.toggle-switch input[type=\"checkbox\"]:checked + .toggle-switch-background .toggle-switch-handle {\n  transform: translateX(40px);\n}"
  },
  {
    "id": "uiverse-metablue2000_curly-firefox-62",
    "title": "Curly Firefox",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "MetaBlue2000",
      "profileUrl": "https://uiverse.io/MetaBlue2000/curly-firefox-62"
    },
    "license": "MIT",
    "description": "Curly Firefox · toggle by MetaBlue2000",
    "tags": [
      "toggle",
      "red",
      "green",
      "minimalist",
      "switch",
      "click animation",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 400,
    "accentColor": null,
    "html": "<label class=\"switch\">\n  <input type=\"checkbox\" />\n  <span class=\"slider\"></span>\n</label>",
    "css": "/* From Uiverse.io by MetaBlue2000  - Tags: red, green, minimalist, switch, click animation */\n.switch {\n  font-size: 17px;\n  position: relative;\n  display: inline-block;\n  width: 3.5em;\n  height: 01em;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ff6a59;\n  transition: 0.4s;\n  border-radius: 30px;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"✕\";\n  display: grid;\n  text-align: center;\n  vertical-align: middle;\n  place-items: center;\n  font-size: 1em;\n  font-weight: 900;\n  width: 2em;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  left: 0;\n  top: 50%;\n  transform: translate(0, -50%);\n  color: white;\n  background-color: #ff3c00;\n  border: 1px solid #ba0300;\n  transition: 0.4s;\n}\n\n.switch input:checked + .slider {\n  background-color: teal;\n}\n\n.switch input:checked + .slider:before {\n  content: \"\\002713\";\n  color: teal;\n  background: paleturquoise;\n  border: 1px solid rgba(0, 128, 128, 0.514);\n  transform: translate(1.75em, -50%) rotateZ(360deg);\n}"
  },
  {
    "id": "uiverse-cssbuttons-io_mean-dolphin-24",
    "title": "Mean Dolphin",
    "category": "toggle",
    "source": "uiverse",
    "author": {
      "name": "cssbuttons-io",
      "profileUrl": "https://uiverse.io/cssbuttons-io/mean-dolphin-24"
    },
    "license": "MIT",
    "description": "Mean Dolphin · toggle by cssbuttons-io",
    "tags": [
      "toggle",
      "skeuomorphism",
      "switch",
      "realistic",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<div class=\"toggle-border\">\n  <input id=\"one\" type=\"checkbox\">\n  <label for=\"one\">\n    <div class=\"handle\"></div>\n  </label>\n</div>",
    "css": "/* From Uiverse.io by cssbuttons-io - Tags: skeuomorphism, switch, realistic */\n.toggle-border {\n border: 2px solid #f0ebeb;\n border-radius: 130px;\n margin-bottom: 45px;\n padding: 1px 2px;\n background: linear-gradient(to bottom right, white, rgba(220,220,220,.5)), white;\n box-shadow: 0 0 0 2px #fbfbfb;\n cursor: pointer;\n display: flex;\n align-items: center;\n}\n\n.toggle-border:last-child {\n margin-bottom: 0;\n}\n\n.toggle-border input[type=\"checkbox\"] {\n display: none;\n}\n\n.toggle-border label {\n position: relative;\n display: inline-block;\n width: 65px;\n height: 20px;\n background: #d13613;\n border-radius: 80px;\n cursor: pointer;\n box-shadow: inset 0 0 16px rgba(0,0,0,.3);\n transition: background .5s;\n}\n\n.toggle-border input[type=\"checkbox\"]:checked + label {\n background: #13d162;\n}\n\n.handle {\n position: absolute;\n top: -8px;\n left: -10px;\n width: 35px;\n height: 35px;\n border: 1px solid #e5e5e5;\n background: repeating-radial-gradient(circle at 50% 50%, rgba(200,200,200,.2) 0%, rgba(200,200,200,.2) 2%, transparent 2%, transparent 3%, rgba(200,200,200,.2) 3%, transparent 3%), conic-gradient(white 0%, silver 10%, white 35%, silver 45%, white 60%, silver 70%, white 80%, silver 95%, white 100%);\n border-radius: 50%;\n box-shadow: 3px 5px 10px 0 rgba(0,0,0,.4);\n transition: left .4s;\n}\n\n.toggle-border input[type=\"checkbox\"]:checked + label > .handle {\n left: calc(100% - 35px + 10px);\n}"
  },
  {
    "id": "uiverse-ksaplay_tough-pug-83",
    "title": "Tough Pug",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "KSAplay",
      "profileUrl": "https://uiverse.io/KSAplay/tough-pug-83"
    },
    "license": "MIT",
    "description": "Tough Pug · checkbox by KSAplay",
    "tags": [
      "checkbox",
      "thumb",
      "like",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 100,
    "accentColor": null,
    "html": "<label class=\"container\">\n  <input type=\"checkbox\" checked=\"checked\">\n  <div class=\"checkmark\">\n    <svg fill=\"none\" viewBox=\"0 0 24 24\">\n    <path stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"1.3\" stroke=\"#FFFFFF\" d=\"M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20\"></path>\n    </svg>\n  </div>\n</label>",
    "css": "/* From Uiverse.io by KSAplay - Tags: checkbox, thumb, like */\n.container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.container {\n  display: block;\n  position: relative;\n  cursor: pointer;\n  font-size: 25px;\n  user-select: none;\n  transition: 100ms;\n}\n\n.checkmark {\n  top: 0;\n  left: 0;\n  height: 2em;\n  width: 2em;\n  transition: 100ms;\n  animation: dislike_401 400ms ease;\n}\n\n.container input:checked ~ .checkmark path {\n  fill: #1C7DFF;\n  stroke-width: 1.2;\n  stroke: #212121;\n /*same background color*/\n}\n\n.container input:checked ~ .checkmark {\n  animation: like_401 400ms ease;\n}\n\n.container:hover {\n  transform: scale(1.1);\n}\n\n@keyframes like_401 {\n  0% {\n    transform: scale(0);\n  }\n\n  50% {\n    transform: scale(1.2);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes dislike_401 {\n  0% {\n    transform: scale(0);\n  }\n\n  50% {\n    transform: scale(1.2);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}"
  },
  {
    "id": "uiverse-reshades_average-horse-80",
    "title": "Average Horse",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "reshades",
      "profileUrl": "https://uiverse.io/reshades/average-horse-80"
    },
    "license": "MIT",
    "description": "Average Horse · checkbox by reshades",
    "tags": [
      "checkbox",
      "clean",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<label class=\"container\">\n  <input checked=\"checked\" type=\"checkbox\">\n  <div class=\"checkmark\">\n    <div class=\"checkmark2\"></div>\n  </div>\n</label>",
    "css": "/* From Uiverse.io by reshades - Tags: checkbox, clean */\n.container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.container {\n  display: block;\n  position: relative;\n  cursor: pointer;\n  font-size: 20px;\n  user-select: none;\n}\n\n.checkmark {\n  position: relative;\n  top: 0;\n  left: 0;\n  height: 1.3em;\n  width: 1.3em;\n  background-color: #ffffff00;\n  border-radius: 5px;\n  border: #fff 1px solid;\n  transition: all 0.2s;\n}\n\n.checkmark2 {\n  position: relative;\n  top: 0.12em;\n  left: 0.12em;\n  height: 1.0em;\n  width: 1.0em;\n  background-color: #ffffff00;\n  border-radius: 111px;\n  border: #fff 1px solid;\n  transition: all 0.2s;\n}\n\n.container input:checked ~ .checkmark {\n  background-color: #4346ff;\n  border: #4346ff 1px solid\n}"
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
    "id": "uiverse-dev-mdtuhin_grumpy-panda-46",
    "title": "Grumpy Panda",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "Dev-MdTuhin",
      "profileUrl": "https://uiverse.io/Dev-MdTuhin/grumpy-panda-46"
    },
    "license": "MIT",
    "description": "Grumpy Panda · checkbox by Dev-MdTuhin",
    "tags": [
      "checkbox",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"checkbox-wrapper-10\">\n  <input checked=\"\" type=\"checkbox\" id=\"cb5\" class=\"tgl tgl-flip\">\n  <label for=\"cb5\" data-tg-on=\"Yeah!\" data-tg-off=\"Nope\" class=\"tgl-btn\"></label>\n</div>",
    "css": "/* From Uiverse.io by Dev-MdTuhin - Tags: checkbox */\n.checkbox-wrapper-10 .tgl {\n  display: none;\n}\n\n.checkbox-wrapper-10 .tgl,\n  .checkbox-wrapper-10 .tgl:after,\n  .checkbox-wrapper-10 .tgl:before,\n  .checkbox-wrapper-10 .tgl *,\n  .checkbox-wrapper-10 .tgl *:after,\n  .checkbox-wrapper-10 .tgl *:before,\n  .checkbox-wrapper-10 .tgl + .tgl-btn {\n  box-sizing: border-box;\n}\n\n.checkbox-wrapper-10 .tgl::-moz-selection,\n  .checkbox-wrapper-10 .tgl:after::-moz-selection,\n  .checkbox-wrapper-10 .tgl:before::-moz-selection,\n  .checkbox-wrapper-10 .tgl *::-moz-selection,\n  .checkbox-wrapper-10 .tgl *:after::-moz-selection,\n  .checkbox-wrapper-10 .tgl *:before::-moz-selection,\n  .checkbox-wrapper-10 .tgl + .tgl-btn::-moz-selection,\n  .checkbox-wrapper-10 .tgl::selection,\n  .checkbox-wrapper-10 .tgl:after::selection,\n  .checkbox-wrapper-10 .tgl:before::selection,\n  .checkbox-wrapper-10 .tgl *::selection,\n  .checkbox-wrapper-10 .tgl *:after::selection,\n  .checkbox-wrapper-10 .tgl *:before::selection,\n  .checkbox-wrapper-10 .tgl + .tgl-btn::selection {\n  background: none;\n}\n\n.checkbox-wrapper-10 .tgl + .tgl-btn {\n  outline: 0;\n  display: block;\n  width: 4em;\n  height: 2em;\n  position: relative;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.checkbox-wrapper-10 .tgl + .tgl-btn:after,\n  .checkbox-wrapper-10 .tgl + .tgl-btn:before {\n  position: relative;\n  display: block;\n  content: \"\";\n  width: 50%;\n  height: 100%;\n}\n\n.checkbox-wrapper-10 .tgl + .tgl-btn:after {\n  left: 0;\n}\n\n.checkbox-wrapper-10 .tgl + .tgl-btn:before {\n  display: none;\n}\n\n.checkbox-wrapper-10 .tgl:checked + .tgl-btn:after {\n  left: 50%;\n}\n\n.checkbox-wrapper-10 .tgl-flip + .tgl-btn {\n  padding: 2px;\n  transition: all 0.2s ease;\n  font-family: sans-serif;\n  perspective: 100px;\n}\n\n.checkbox-wrapper-10 .tgl-flip + .tgl-btn:after,\n  .checkbox-wrapper-10 .tgl-flip + .tgl-btn:before {\n  display: inline-block;\n  transition: all 0.4s ease;\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  line-height: 2em;\n  font-weight: bold;\n  color: #fff;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  border-radius: 4px;\n}\n\n.checkbox-wrapper-10 .tgl-flip + .tgl-btn:after {\n  content: attr(data-tg-on);\n  background: #02C66F;\n  transform: rotateY(-180deg);\n}\n\n.checkbox-wrapper-10 .tgl-flip + .tgl-btn:before {\n  background: #FF3A19;\n  content: attr(data-tg-off);\n}\n\n.checkbox-wrapper-10 .tgl-flip + .tgl-btn:active:before {\n  transform: rotateY(-20deg);\n}\n\n.checkbox-wrapper-10 .tgl-flip:checked + .tgl-btn:before {\n  transform: rotateY(180deg);\n}\n\n.checkbox-wrapper-10 .tgl-flip:checked + .tgl-btn:after {\n  transform: rotateY(0);\n  left: 0;\n  background: #7FC6A6;\n}\n\n.checkbox-wrapper-10 .tgl-flip:checked + .tgl-btn:active:after {\n  transform: rotateY(20deg);\n}"
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
    "id": "uiverse-shoh2008_good-bat-75",
    "title": "Good Bat",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "Shoh2008",
      "profileUrl": "https://uiverse.io/Shoh2008/good-bat-75"
    },
    "license": "MIT",
    "description": "Good Bat · checkbox by Shoh2008",
    "tags": [
      "checkbox",
      "about me",
      "add",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"checkbox-wrapper-19\">\n  <input id=\"cbtest-19\" type=\"checkbox\">\n  <label class=\"check-box\" for=\"cbtest-19\">\n</label></div>",
    "css": "/* From Uiverse.io by Shoh2008 - Tags: checkbox, about me, add */\n.checkbox-wrapper-19 {\n  box-sizing: border-box;\n  --background-color: #fff;\n  --checkbox-height: 25px;\n}\n\n@-moz-keyframes dothabottomcheck-19 {\n  0% {\n    height: 0;\n  }\n\n  100% {\n    height: calc(var(--checkbox-height) / 2);\n  }\n}\n\n@-webkit-keyframes dothabottomcheck-19 {\n  0% {\n    height: 0;\n  }\n\n  100% {\n    height: calc(var(--checkbox-height) / 2);\n  }\n}\n\n@keyframes dothabottomcheck-19 {\n  0% {\n    height: 0;\n  }\n\n  100% {\n    height: calc(var(--checkbox-height) / 2);\n  }\n}\n\n@keyframes dothatopcheck-19 {\n  0% {\n    height: 0;\n  }\n\n  50% {\n    height: 0;\n  }\n\n  100% {\n    height: calc(var(--checkbox-height) * 1.2);\n  }\n}\n\n@-webkit-keyframes dothatopcheck-19 {\n  0% {\n    height: 0;\n  }\n\n  50% {\n    height: 0;\n  }\n\n  100% {\n    height: calc(var(--checkbox-height) * 1.2);\n  }\n}\n\n@-moz-keyframes dothatopcheck-19 {\n  0% {\n    height: 0;\n  }\n\n  50% {\n    height: 0;\n  }\n\n  100% {\n    height: calc(var(--checkbox-height) * 1.2);\n  }\n}\n\n.checkbox-wrapper-19 input[type=checkbox] {\n  display: none;\n}\n\n.checkbox-wrapper-19 .check-box {\n  height: var(--checkbox-height);\n  width: var(--checkbox-height);\n  background-color: transparent;\n  border: calc(var(--checkbox-height) * .1) solid #000;\n  border-radius: 5px;\n  position: relative;\n  display: inline-block;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -moz-transition: border-color ease 0.2s;\n  -o-transition: border-color ease 0.2s;\n  -webkit-transition: border-color ease 0.2s;\n  transition: border-color ease 0.2s;\n  cursor: pointer;\n}\n\n.checkbox-wrapper-19 .check-box::before,\n  .checkbox-wrapper-19 .check-box::after {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  position: absolute;\n  height: 0;\n  width: calc(var(--checkbox-height) * .2);\n  background-color: #34b93d;\n  display: inline-block;\n  -moz-transform-origin: left top;\n  -ms-transform-origin: left top;\n  -o-transform-origin: left top;\n  -webkit-transform-origin: left top;\n  transform-origin: left top;\n  border-radius: 5px;\n  content: \" \";\n  -webkit-transition: opacity ease 0.5;\n  -moz-transition: opacity ease 0.5;\n  transition: opacity ease 0.5;\n}\n\n.checkbox-wrapper-19 .check-box::before {\n  top: calc(var(--checkbox-height) * .72);\n  left: calc(var(--checkbox-height) * .41);\n  box-shadow: 0 0 0 calc(var(--checkbox-height) * .05) var(--background-color);\n  -moz-transform: rotate(-135deg);\n  -ms-transform: rotate(-135deg);\n  -o-transform: rotate(-135deg);\n  -webkit-transform: rotate(-135deg);\n  transform: rotate(-135deg);\n}\n\n.checkbox-wrapper-19 .check-box::after {\n  top: calc(var(--checkbox-height) * .37);\n  left: calc(var(--checkbox-height) * .05);\n  -moz-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n\n.checkbox-wrapper-19 input[type=checkbox]:checked + .check-box,\n  .checkbox-wrapper-19 .check-box.checked {\n  border-color: #34b93d;\n}\n\n.checkbox-wrapper-19 input[type=checkbox]:checked + .check-box::after,\n  .checkbox-wrapper-19 .check-box.checked::after {\n  height: calc(var(--checkbox-height) / 2);\n  -moz-animation: dothabottomcheck-19 0.2s ease 0s forwards;\n  -o-animation: dothabottomcheck-19 0.2s ease 0s forwards;\n  -webkit-animation: dothabottomcheck-19 0.2s ease 0s forwards;\n  animation: dothabottomcheck-19 0.2s ease 0s forwards;\n}\n\n.checkbox-wrapper-19 input[type=checkbox]:checked + .check-box::before,\n  .checkbox-wrapper-19 .check-box.checked::before {\n  height: calc(var(--checkbox-height) * 1.2);\n  -moz-animation: dothatopcheck-19 0.4s ease 0s forwards;\n  -o-animation: dothatopcheck-19 0.4s ease 0s forwards;\n  -webkit-animation: dothatopcheck-19 0.4s ease 0s forwards;\n  animation: dothatopcheck-19 0.4s ease 0s forwards;\n}"
  },
  {
    "id": "uiverse-lenin55_black-dragon-46",
    "title": "Black Dragon",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "lenin55",
      "profileUrl": "https://uiverse.io/lenin55/black-dragon-46"
    },
    "license": "MIT",
    "description": "Black Dragon · checkbox by lenin55",
    "tags": [
      "checkbox",
      "material design",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<label class=\"cl-checkbox\">\n  <input checked=\"\" type=\"checkbox\">\n  <span></span>\n</label>",
    "css": "/* From Uiverse.io by lenin55 - Tags: material design, checkbox */\n.cl-checkbox {\n position: relative;\n display: inline-block;\n}\n\n/* Input */\n.cl-checkbox > input {\n appearance: none;\n -moz-appearance: none;\n -webkit-appearance: none;\n z-index: -1;\n position: absolute;\n left: -10px;\n top: -8px;\n display: block;\n margin: 0;\n border-radius: 50%;\n width: 40px;\n height: 40px;\n background-color: rgba(0, 0, 0, 0.6);\n box-shadow: none;\n outline: none;\n opacity: 0;\n transform: scale(1);\n pointer-events: none;\n transition: opacity 0.3s, transform 0.2s;\n}\n\n/* Span */\n.cl-checkbox > span {\n display: inline-block;\n width: 100%;\n cursor: pointer;\n}\n\n/* Box */\n.cl-checkbox > span::before {\n content: \"\";\n display: inline-block;\n box-sizing: border-box;\n margin: 3px 11px 3px 1px;\n border: solid 2px;\n /* Safari */\n border-color: rgba(0, 0, 0, 0.6);\n border-radius: 2px;\n width: 18px;\n height: 18px;\n vertical-align: top;\n transition: border-color 0.2s, background-color 0.2s;\n}\n\n/* Checkmark */\n.cl-checkbox > span::after {\n content: \"\";\n display: block;\n position: absolute;\n top: 3px;\n left: 1px;\n width: 10px;\n height: 5px;\n border: solid 2px transparent;\n border-right: none;\n border-top: none;\n transform: translate(3px, 4px) rotate(-45deg);\n}\n\n/* Checked, Indeterminate */\n.cl-checkbox > input:checked,\n.cl-checkbox > input:indeterminate {\n background-color: #018786;\n}\n\n.cl-checkbox > input:checked + span::before,\n.cl-checkbox > input:indeterminate + span::before {\n border-color: #018786;\n background-color: #018786;\n}\n\n.cl-checkbox > input:checked + span::after,\n.cl-checkbox > input:indeterminate + span::after {\n border-color: #fff;\n}\n\n.cl-checkbox > input:indeterminate + span::after {\n border-left: none;\n transform: translate(4px, 3px);\n}\n\n/* Hover, Focus */\n.cl-checkbox:hover > input {\n opacity: 0.04;\n}\n\n.cl-checkbox > input:focus {\n opacity: 0.12;\n}\n\n.cl-checkbox:hover > input:focus {\n opacity: 0.16;\n}\n\n/* Active */\n.cl-checkbox > input:active {\n opacity: 1;\n transform: scale(0);\n transition: transform 0s, opacity 0s;\n}\n\n.cl-checkbox > input:active + span::before {\n border-color: #85b8b7;\n}\n\n.cl-checkbox > input:checked:active + span::before {\n border-color: transparent;\n background-color: rgba(0, 0, 0, 0.6);\n}\n\n/* Disabled */\n.cl-checkbox > input:disabled {\n opacity: 0;\n}\n\n.cl-checkbox > input:disabled + span {\n color: rgba(0, 0, 0, 0.38);\n cursor: initial;\n}\n\n.cl-checkbox > input:disabled + span::before {\n border-color: currentColor;\n}\n\n.cl-checkbox > input:checked:disabled + span::before,\n.cl-checkbox > input:indeterminate:disabled + span::before {\n border-color: transparent;\n background-color: currentColor;\n}"
  },
  {
    "id": "uiverse-martinval9_wise-elephant-23",
    "title": "Wise Elephant",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "martinval9",
      "profileUrl": "https://uiverse.io/martinval9/wise-elephant-23"
    },
    "license": "MIT",
    "description": "Wise Elephant · checkbox by martinval9",
    "tags": [
      "checkbox",
      "circle",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 150,
    "accentColor": null,
    "html": "<label class=\"container\">\n  <input type=\"checkbox\" checked=\"checked\">\n  <div class=\"checkmark\"></div>\n</label>",
    "css": "/* From Uiverse.io by martinval9 - Tags: checkbox, circle */\n/* Hide the default checkbox */\n.container input {\n position: absolute;\n opacity: 0;\n cursor: pointer;\n height: 0;\n width: 0;\n}\n\n.container {\n display: block;\n position: relative;\n cursor: pointer;\n font-size: 20px;\n user-select: none;\n}\n\n/* Create a custom checkbox */\n.checkmark {\n position: relative;\n top: 0;\n left: 0;\n height: 1.3em;\n width: 1.3em;\n background-color: #ccc;\n border-radius: 25px;\n transition: 0.15s;\n}\n\n/* When the checkbox is checked, add a blue background */\n.container input:checked ~ .checkmark {\n background-color: limegreen;\n border-radius: 25px;\n transition: 0.15s;\n}\n\n/* Create the checkmark/indicator (hidden when not checked) */\n.checkmark:after {\n content: \"\";\n position: absolute;\n display: none;\n}\n\n/* Show the checkmark when checked */\n.container input:checked ~ .checkmark:after {\n display: block;\n}\n\n/* Style the checkmark/indicator */\n.container .checkmark:after {\n left: 0.45em;\n top: 0.25em;\n width: 0.25em;\n height: 0.5em;\n border: solid white;\n border-width: 0 0.15em 0.15em 0;\n transform: rotate(45deg);\n}"
  },
  {
    "id": "uiverse-jaydipprajapati1910_odd-rat-12",
    "title": "Odd Rat",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "JaydipPrajapati1910",
      "profileUrl": "https://uiverse.io/JaydipPrajapati1910/odd-rat-12"
    },
    "license": "MIT",
    "description": "Odd Rat · checkbox by JaydipPrajapati1910",
    "tags": [
      "checkbox",
      "wifi",
      "switcher",
      "checkmark",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 600,
    "accentColor": null,
    "html": "<label class=\"theme\">\n  <input class=\"input\" checked=\"checked\" type=\"checkbox\">\n <svg fill=\"red\" class=\"icon wifi-off\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\">\n  <path d=\"M10.706 3.294A12.545 12.545 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c.63 0 1.249.05 1.852.148l.854-.854zM8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065 8.448 8.448 0 0 1 3.51-1.27L8 6zm2.596 1.404.785-.785c.63.24 1.227.545 1.785.907a.482.482 0 0 1 .063.745.525.525 0 0 1-.652.065 8.462 8.462 0 0 0-1.98-.932zM8 10l.933-.933a6.455 6.455 0 0 1 2.013.637c.285.145.326.524.1.75l-.015.015a.532.532 0 0 1-.611.09A5.478 5.478 0 0 0 8 10zm4.905-4.905.747-.747c.59.3 1.153.645 1.685 1.03a.485.485 0 0 1 .047.737.518.518 0 0 1-.668.05 11.493 11.493 0 0 0-1.811-1.07zM9.02 11.78c.238.14.236.464.04.66l-.707.706a.5.5 0 0 1-.707 0l-.707-.707c-.195-.195-.197-.518.04-.66A1.99 1.99 0 0 1 8 11.5c.374 0 .723.102 1.021.28zm4.355-9.905a.53.53 0 0 1 .75.75l-10.75 10.75a.53.53 0 0 1-.75-.75l10.75-10.75z\"></path>\n</svg>\n<svg class=\"icon wifi-on\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\">\n  <path d=\"M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z\"></path>\n  <path d=\"M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z\"></path>\n</svg>\n</label>",
    "css": "/* From Uiverse.io by JaydipPrajapati1910 - Tags: checkbox, wifi, switcher, checkmark */\n.theme {\n  --bg-color: rgb(24, 19, 19);\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  background-color: var(--bg-color);\n  border-radius: 100%;\n  box-shadow: 0px 0px 5px 7px rgba(0, 0, 0, 0.199);\n  transition: all .6s ease;\n}\n\n.input {\n  cursor: pointer;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n  opacity: 0;\n}\n\n.icon {\n  position: absolute;\n  top: calc(50% -13px);\n  left: calc(50% -13px);\n  width: 26px;\n  height: 26px;\n}\n\n.wifi-on {\n  fill: lightgreen;\n}\n\n.wifi-off {\n  display: none;\n}\n\n.input:checked ~ .wifi-off {\n  display: block;\n}\n\n.input:checked ~ .wifi-on {\n  display: none;\n}\n\n.theme:active {\n  border-radius: 100%;\n  box-shadow: inset 0px 0px 10px 0px rgb(240, 237, 237);\n  transform: translate(3px, 3px);\n}"
  },
  {
    "id": "uiverse-gagan-gv_average-warthog-41",
    "title": "Average Warthog",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "gagan-gv",
      "profileUrl": "https://uiverse.io/gagan-gv/average-warthog-41"
    },
    "license": "MIT",
    "description": "Average Warthog · checkbox by gagan-gv",
    "tags": [
      "checkbox",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<label class=\"container\">\n  <input type=\"checkbox\" checked=\"checked\">\n  <div class=\"checkmark\"></div>\n</label>",
    "css": "/* From Uiverse.io by gagan-gv - Tags: checkbox */\n/* Hide the default checkbox */\n.container input {\n position: absolute;\n opacity: 0;\n cursor: pointer;\n height: 0;\n width: 0;\n}\n\n.container {\n display: block;\n position: relative;\n cursor: pointer;\n font-size: 20px;\n user-select: none;\n}\n\n/* Create a custom checkbox */\n.checkmark {\n position: relative;\n top: 0;\n left: 0;\n height: 1.3em;\n width: 1.3em;\n background-color: #fff;\n transition: all 0.5s;\n}\n\n/* When the checkbox is checked, add a blue background */\n.container input:checked ~ .checkmark {\n border: 2px solid #080;\n}\n\n/* Create the checkmark/indicator (hidden when not checked) */\n.checkmark:after {\n content: \"\";\n position: absolute;\n display: none;\n}\n\n/* Show the checkmark when checked */\n.container input:checked ~ .checkmark:after {\n display: block;\n}\n\n/* Style the checkmark/indicator */\n.container .checkmark:after {\n left: 0.55em;\n top: -0.15em;\n width: 0.35em;\n height: 0.7em;\n border: solid #080;\n border-width: 0 0.25em 0.25em 0;\n transform: rotate(45deg);\n transition: all 0.5s;\n}"
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
    "id": "uiverse-priyanshugupta28_plastic-panther-7",
    "title": "Plastic Panther",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "PriyanshuGupta28",
      "profileUrl": "https://uiverse.io/PriyanshuGupta28/plastic-panther-7"
    },
    "license": "MIT",
    "description": "Plastic Panther · checkbox by PriyanshuGupta28",
    "tags": [
      "checkbox",
      "cool checkbox",
      "checkmark",
      "tick switchbox",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"checkbox-wrapper\">\n  <input id=\"cbtest-19\" type=\"checkbox\">\n  <label class=\"check-box\" for=\"cbtest-19\">\n</label></div>",
    "css": "/* From Uiverse.io by PriyanshuGupta28 - Tags: checkbox, cool checkbox, checkmark, tick switchbox */\n.checkbox-wrapper {\n  box-sizing: border-box;\n  --background-color: #fff;\n  --checkbox-height: 25px;\n}\n\n.checkbox-wrapper input[type=checkbox] {\n  display: none;\n}\n\n.checkbox-wrapper .check-box {\n  height: var(--checkbox-height);\n  width: var(--checkbox-height);\n  background-color: transparent;\n  border: calc(var(--checkbox-height) * .1) solid #000;\n  border-radius: 5px;\n  position: relative;\n  display: inline-block;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -moz-transition: border-color ease 0.2s;\n  -o-transition: border-color ease 0.2s;\n  -webkit-transition: border-color ease 0.2s;\n  transition: border-color ease 0.2s;\n  cursor: pointer;\n}\n\n.checkbox-wrapper .check-box::before,\n  .checkbox-wrapper .check-box::after {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  position: absolute;\n  height: 0;\n  width: calc(var(--checkbox-height) * .2);\n  background-color: #4158D0;\n  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);\n  display: inline-block;\n  -moz-transform-origin: left top;\n  -ms-transform-origin: left top;\n  -o-transform-origin: left top;\n  -webkit-transform-origin: left top;\n  transform-origin: left top;\n  border-radius: 5px;\n  content: \" \";\n  -webkit-transition: opacity ease 0.5;\n  -moz-transition: opacity ease 0.5;\n  transition: opacity ease 0.5;\n}\n\n.checkbox-wrapper .check-box::before {\n  top: calc(var(--checkbox-height) * .72);\n  left: calc(var(--checkbox-height) * .41);\n  box-shadow: 0 0 0 calc(var(--checkbox-height) * .05) var(--background-color);\n  -moz-transform: rotate(-135deg);\n  -ms-transform: rotate(-135deg);\n  -o-transform: rotate(-135deg);\n  -webkit-transform: rotate(-135deg);\n  transform: rotate(-135deg);\n}\n\n.checkbox-wrapper .check-box::after {\n  top: calc(var(--checkbox-height) * .37);\n  left: calc(var(--checkbox-height) * .05);\n  -moz-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n\n.checkbox-wrapper input[type=checkbox]:checked + .check-box,\n  .checkbox-wrapper .check-box.checked {\n  border-color: #5900ff;\n}\n\n.checkbox-wrapper input[type=checkbox]:checked + .check-box::after,\n  .checkbox-wrapper .check-box.checked::after {\n  height: calc(var(--checkbox-height) / 2);\n  -moz-animation: dothabottomcheck-19 0.2s ease 0s forwards;\n  -o-animation: dothabottomcheck-19 0.2s ease 0s forwards;\n  -webkit-animation: dothabottomcheck-19 0.2s ease 0s forwards;\n  animation: dothabottomcheck-19 0.2s ease 0s forwards;\n}\n\n.checkbox-wrapper input[type=checkbox]:checked + .check-box::before,\n  .checkbox-wrapper .check-box.checked::before {\n  height: calc(var(--checkbox-height) * 1.2);\n  -moz-animation: dothatopcheck-19 0.4s ease 0s forwards;\n  -o-animation: dothatopcheck-19 0.4s ease 0s forwards;\n  -webkit-animation: dothatopcheck-19 0.4s ease 0s forwards;\n  animation: dothatopcheck-19 0.4s ease 0s forwards;\n}"
  },
  {
    "id": "uiverse-csemszepp_calm-grasshopper-57",
    "title": "Calm Grasshopper",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "csemszepp - Source: https://codepen.io/RitikaAgrawal08/pen/eYGXQLz",
      "profileUrl": "https://uiverse.io/csemszepp - Source: https://codepen.io/RitikaAgrawal08/pen/eYGXQLz/calm-grasshopper-57"
    },
    "license": "MIT",
    "description": "Calm Grasshopper · checkbox by csemszepp - Source: https://codepen.io/RitikaAgrawal08/pen/eYGXQLz",
    "tags": [
      "checkbox",
      "play",
      "music player",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 700,
    "accentColor": null,
    "html": "<div class=\"container\">\n      <label>\n        <input class=\"play-btn\" type=\"checkbox\">\n        <div class=\"play-icon\"></div>\n        <div class=\"pause-icon\"></div>\n      </label>\n    </div>",
    "css": "/* From Uiverse.io by csemszepp - Source: https://codepen.io/RitikaAgrawal08/pen/eYGXQLz - Tags: checkbox, play, music player */\n.container {\n  width: 120px;\n  height: 120px;\n  position: relative;\n  border-radius: 50%;\n}\n\n.play-btn {\n  position: absolute;\n  appearance: none;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background: conic-gradient(#ff6347, #ff6347);\n  cursor: pointer;\n  outline: none;\n}\n\n.play-btn::before {\n  content: \"\";\n  position: absolute;\n  width: 93%;\n  height: 93%;\n  background-color: #000;\n  border-radius: 50%;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.play-btn:checked {\n  animation: borderAnimate 700ms ease-in-out 1;\n  animation-fill-mode: forwards;\n}\n\n@keyframes borderAnimate {\n  0% {\n    transform: rotate(0);\n    background: conic-gradient(#ff6347, transparent 20%);\n  }\n\n  80% {\n    background: conic-gradient(#ff6347, transparent 90%);\n  }\n\n  100% {\n    transform: rotate(360deg);\n    background: conic-gradient(#ff6347, #ff6347);\n  }\n}\n\n.play-icon {\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  left: 60%;\n  top: 50%;\n  background-color: #ff6347;\n  transform: translate(-60%, -50%) rotate(90deg);\n  clip-path: polygon(50% 15%, 0% 100%, 100% 100%);\n  transition: all 400ms ease-in-out;\n  cursor: pointer;\n}\n\n.play-btn:checked + .play-icon {\n  clip-path: polygon(0 100%, 0% 100%, 100% 100%);\n}\n\n.pause-icon {\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  cursor: pointer;\n}\n\n.pause-icon::before {\n  content: \"\";\n  position: absolute;\n  width: 0%;\n  height: 100%;\n  background-color: #ff6347;\n  left: 0;\n}\n\n.pause-icon::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 100%;\n  background-color: #ff6347;\n  right: 0;\n}\n\n.play-btn:checked ~ .pause-icon::before {\n  animation: reveal 300ms ease-in-out 350ms 1;\n  animation-fill-mode: forwards;\n}\n\n.play-btn:checked ~ .pause-icon::after {\n  animation: reveal 300ms ease-in-out 600ms 1;\n  animation-fill-mode: forwards;\n}\n\n@keyframes reveal {\n  0% {\n    width: 0;\n  }\n\n  100% {\n    width: 35%;\n  }\n}"
  },
  {
    "id": "uiverse-3bdel3ziz-t_angry-grasshopper-50",
    "title": "Angry Grasshopper",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "3bdel3ziz-T",
      "profileUrl": "https://uiverse.io/3bdel3ziz-T/angry-grasshopper-50"
    },
    "license": "MIT",
    "description": "Angry Grasshopper · checkbox by 3bdel3ziz-T",
    "tags": [
      "checkbox",
      "material design",
      "animation",
      "hamburger",
      "menu",
      "click effect",
      "click animation",
      "close"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"burger-icon\">\n  <label class=\"burger\" for=\"burger\">\n    <input class=\"line\" type=\"checkbox\" id=\"burger\" />\n  </label>\n</div>",
    "css": "/* From Uiverse.io by 3bdel3ziz-T  - Tags: material design, animation, checkbox, hamburger, menu, click effect, click animation, close */\n.burger {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  user-select: none;\n  cursor: pointer;\n  transition: 300ms;\n  border-radius: 10px;\n}\n.burger input[type=\"checkbox\"] {\n  appearance: none;\n  transition: 300ms;\n}\n\n.burger::before,\n.burger::after {\n  content: \"\";\n  transition: 300ms;\n  transform-origin: center center;\n}\n\n.burger::before {\n  transform: translateY(8px);\n}\n.burger::after {\n  transform: translateY(-8px);\n}\n.burger .line,\n.burger::before,\n.burger::after {\n  width: 25px;\n  height: 2.1px;\n  display: block;\n  background-color: black;\n  border-radius: 5px;\n  position: absolute;\n}\n\n.burger .line:checked {\n  width: 0;\n  transition-delay: 100ms;\n}\n.burger:has(.line:checked)::before {\n  animation: animation1 400ms ease-out 0s 1 both;\n}\n.burger:has(.line:checked)::after {\n  animation: animation2 400ms ease-out 0s 1 both;\n}\n\n.burger:hover {\n  background: #aeaeae;\n  border-radius: 50%;\n}\n\n.burger:hover .line,\n.burger:hover::before,\n.burger:hover::after {\n  background: #e8e8e8;\n}\n\n.burger:active {\n  scale: 0.95;\n}\n@keyframes animation1 {\n  0% {\n    transform: translateY(8px) rotate(0deg);\n  }\n  50% {\n    transform: translateY(0px) rotate(0deg);\n  }\n  100% {\n    transform: translateY(0px) rotate(45deg);\n  }\n}\n@keyframes animation2 {\n  0% {\n    transform: translateY(-8px) rotate(0deg);\n  }\n  50% {\n    transform: translateY(0px) rotate(0deg);\n  }\n  100% {\n    transform: translateY(0px) rotate(-45deg);\n  }\n}"
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
    "id": "uiverse-slowless0_helpless-termite-82",
    "title": "Helpless Termite",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "SlowLess0",
      "profileUrl": "https://uiverse.io/SlowLess0/helpless-termite-82"
    },
    "license": "MIT",
    "description": "Helpless Termite · checkbox by SlowLess0",
    "tags": [
      "checkbox",
      "radio",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div>\n\n  <label class=\"rad-label\">\n    <input type=\"radio\" class=\"rad-input\" name=\"rad\">\n    <div class=\"rad-design\"></div>\n    <div class=\"rad-text\">Air</div>\n  </label>\n\n  <label class=\"rad-label\">\n    <input type=\"radio\" class=\"rad-input\" name=\"rad\">\n    <div class=\"rad-design\"></div>\n    <div class=\"rad-text\">Earth</div>\n  </label>\n\n  <label class=\"rad-label\">\n    <input type=\"radio\" class=\"rad-input\" name=\"rad\">\n    <div class=\"rad-design\"></div>\n    <div class=\"rad-text\">Water</div>\n  </label>\n\n</div>",
    "css": "/* From Uiverse.io by SlowLess0 - Tags: radio */\n.rad-label {\n  display: flex;\n  padding: 14px 16px;\n  margin: 10px 0;\n  border-radius: 100px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n\n.rad-label:hover, .rad-label:focus-within {\n  background: hsla(0, 0%, 40%, .14);\n}\n\n.rad-input {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  height: 1px;\n  opacity: 0;\n  z-index: -1;\n}\n\n.rad-design {\n  width: 22px;\n  height: 22px;\n  border-radius: 100px;\n  background: linear-gradient(to right bottom, hsl(172, 97%, 62%), hsl(251, 97%, 62%));\n  position: relative;\n}\n\n.rad-design::before {\n  content: '';\n  display: inline-block;\n  width: inherit;\n  height: inherit;\n  border-radius: inherit;\n  background: hsl(0, 0%, 80%);\n  transform: scale(1.1);\n  transition: .3s;\n}\n\n.rad-input:checked+.rad-design::before {\n  transform: scale(0);\n}\n\n.rad-text {\n  color: hsl(0, 0%, 60%);\n  margin-left: 14px;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  font-size: 18px;\n  font-weight: 900;\n  transition: .3s;\n}\n\n.rad-input:checked~.rad-text {\n  color: hsl(0, 0%, 40%);\n}"
  },
  {
    "id": "uiverse-jaydipprajapati1910_foolish-donkey-86",
    "title": "Foolish Donkey",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "JaydipPrajapati1910",
      "profileUrl": "https://uiverse.io/JaydipPrajapati1910/foolish-donkey-86"
    },
    "license": "MIT",
    "description": "Foolish Donkey · checkbox by JaydipPrajapati1910",
    "tags": [
      "checkbox",
      "yellow",
      "radio",
      "radio-buttons",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 400,
    "accentColor": null,
    "html": "<div class=\"radio-input\">\n <input type=\"radio\" id=\"value-1\" name=\"value-radio\" value=\"value-1\">\n  <div class=\"circle\">\n   </div> \n <input checked=\"\" type=\"radio\" id=\"value-2\" name=\"value-radio\" value=\"value-2\">\n  <div class=\"circle\">\n  </div> \n <input type=\"radio\" id=\"value-3\" name=\"value-radio\" value=\"value-3\">\n  <div class=\"circle\">\n  </div>\n</div>",
    "css": "/* From Uiverse.io by JaydipPrajapati1910 - Tags: yellow, radio, radio-buttons */\n.radio-input {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.radio-input input {\n  appearance: none;\n  width: 2em;\n  height: 2em;\n  background-color: #171717;\n  box-shadow: inset 2px 5px 10px rgb(5, 5, 5);\n  border-radius: 50%;\n  transition: .4s ease-in-out;\n}\n\n.radio-input input:hover {\n  scale: 1.2;\n  cursor: pointer;\n  box-shadow: none;\n}\n\n.radio-input .circle {\n  position: relative;\n  top: 0.01em;\n  left: -1.1em;\n  width: 0.6em;\n  height: 0.6em;\n  background-color: yellow;\n  scale: 0;\n  border-radius: 10px;\n  transition: .4s ease-in-out;\n}\n\n.radio-input input:checked {\n  box-shadow: none;\n  border: 1px solid yellow;\n}\n\n.radio-input input:checked + .circle {\n  transform: rotate(360deg);\n  scale: 1;\n}"
  },
  {
    "id": "uiverse-spj2401dev_lucky-moth-60",
    "title": "Lucky Moth",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "spj2401Dev",
      "profileUrl": "https://uiverse.io/spj2401Dev/lucky-moth-60"
    },
    "license": "MIT",
    "description": "Lucky Moth · checkbox by spj2401Dev",
    "tags": [
      "checkbox",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<fieldset>\n  <legend>Frameworks</legend>\n\n  <div class=\"button-group\">\n    <input type=\"radio\" id=\"svelt\" name=\"frameworks\" checked=\"\" />\n    <label for=\"svelt\">Svelt</label>\n  </div>\n\n  <div class=\"button-group\">\n    <input type=\"radio\" id=\"react\" name=\"frameworks\" />\n    <label for=\"react\">React</label>\n  </div>\n\n  <div class=\"button-group\">\n    <input type=\"radio\" id=\"vue\" name=\"frameworks\" />\n    <label for=\"vue\">Vue</label>\n  </div>\n</fieldset>",
    "css": "/* From Uiverse.io by spj2401Dev  - Tags:  */\n.button-group {\n  flex-grow: 1;\n  margin: auto;\n}\n\n.button-group input[type=\"radio\"] {\n  display: none;\n}\n\n.button-group label {\n  display: inline-block;\n  padding: 10px 20px;\n  cursor: pointer;\n  border: 1px solid #2b426d;\n  background-color: #385c7e;\n  color: white;\n  border-radius: 15px;\n  transition: all ease 0.2s;\n  text-align: center;\n  flex-grow: 1;\n  flex-basis: 0;\n  width: 90px;\n  font-size: 13px;\n  margin: 5px;\n  box-shadow: 0px 0px 50px -15px #000000;\n}\n\n.button-group input[type=\"radio\"]:checked + label {\n  background-color: white;\n  color: #02375a;\n  border: 1px solid #2b426d;\n}\n\nfieldset {\n  border: 0;\n  display: flex;\n}"
  },
  {
    "id": "uiverse-aadium_silly-bulldog-25",
    "title": "Silly Bulldog",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "aadium",
      "profileUrl": "https://uiverse.io/aadium/silly-bulldog-25"
    },
    "license": "MIT",
    "description": "Silly Bulldog · checkbox by aadium",
    "tags": [
      "checkbox",
      "radio",
      "futuristic",
      "futuristic-radio-buttons",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<label id=\"topleft\" class=\"container\">\n  <input name=\"my-radio-button\" type=\"radio\">\n  <label id=\"tl\">Top <br>Left</label>\n  <div class=\"selected\"></div>\n</label>\n&nbsp;\n<label id=\"topright\" class=\"container\">\n  <input name=\"my-radio-button\" type=\"radio\">\n  <label id=\"tr\">Top<br>Right</label>\n  <div class=\"selected\"></div>\n</label>\n<br>\n<br>\n<label id=\"bottomleft\" class=\"container\">\n  <input name=\"my-radio-button\" type=\"radio\">\n  <label id=\"bl\">Bottom <br>Left</label>\n  <div class=\"selected\"></div>\n</label>\n&nbsp;\n<label id=\"bottomright\" class=\"container\">\n  <input name=\"my-radio-button\" type=\"radio\">\n  <label id=\"br\">Bottom <br>Right</label>\n  <div class=\"selected\"></div>\n</label>",
    "css": "/* From Uiverse.io by aadium - Tags: radio, futuristic, futuristic-radio-buttons */\n.container input[type=\"radio\"] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.container {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  font-size: 17px;\n  width: 4em;\n  height: 4em;\n  user-select: none;\n  border: 4px solid;\n  border-image-slice: 1;\n  background-color: #212121;\n}\n\nlabel {\n  font-size: 12px;\n  margin-top: -6px;\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n  text-align: center;\n  visibility: visible;\n}\n\n#topleft {\n  border-image-source: linear-gradient(-45deg, #743ad5, #d53a9d);\n  color: white\n}\n\n#topright {\n  border-image-source: linear-gradient(45deg, #743ad5, #d53a9d);\n  color: white\n}\n\n#bottomleft {\n  border-image-source: linear-gradient(-135deg, #743ad5, #d53a9d);\n  color: white\n}\n\n#bottomright {\n  border-image-source: linear-gradient(135deg, #743ad5, #d53a9d);\n  color: white\n}\n\n.selected {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n#topleft:hover {\n  border-image-source: linear-gradient(-45deg, #743ad5, #d53a9d);\n  background-image: linear-gradient(-45deg, #743ad5, #d53a9d);\n}\n\n#topright:hover {\n  border-image-source: linear-gradient(45deg, #743ad5, #d53a9d);\n  background-image: linear-gradient(45deg, #743ad5, #d53a9d);\n}\n\n#bottomleft:hover {\n  border-image-source: linear-gradient(-135deg, #743ad5, #d53a9d);\n  background-image: linear-gradient(-135deg, #743ad5, #d53a9d);\n}\n\n#bottomright:hover {\n  border-image-source: linear-gradient(135deg, #743ad5, #d53a9d);\n  background-image: linear-gradient(135deg, #743ad5, #d53a9d);\n}\n\n#topleft input[type=\"radio\"]:checked ~ .selected {\n  box-shadow: 5px 5px 25px #743ad5,\n                -5px -5px 25px #d53a9d;\n  border-image-slice: 1;\n}\n\n#topright input[type=\"radio\"]:checked ~ .selected {\n  box-shadow: -5px 5px 25px #743ad5,\n                5px -5px 25px #d53a9d;\n  border-image-slice: 1;\n}\n\n#bottomleft input[type=\"radio\"]:checked ~ .selected {\n  box-shadow: -5px 5px 25px #d53a9d,\n                5px -5px 25px #743ad5;\n  border-image-slice: 1;\n}\n\n#bottomright input[type=\"radio\"]:checked ~ .selected {\n  box-shadow: -5px -5px 25px #743ad5,\n                5px 5px 25px #d53a9d;\n  border-image-slice: 1;\n}"
  },
  {
    "id": "uiverse-nlghtm4re_mighty-wasp-74",
    "title": "Mighty Wasp",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "NlghtM4re",
      "profileUrl": "https://uiverse.io/NlghtM4re/mighty-wasp-74"
    },
    "license": "MIT",
    "description": "Mighty Wasp · checkbox by NlghtM4re",
    "tags": [
      "checkbox",
      "radio",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div class=\"radio-buttons\">\n  <label>\n    <input type=\"radio\" name=\"option\" value=\"1\" checked=\"\">\n    <span class=\"option\">Option 1</span>\n  </label>\n  <label>\n    <input type=\"radio\" name=\"option\" value=\"2\">\n    <span class=\"option\">Option 2</span>\n  </label>\n  <label>\n    <input type=\"radio\" name=\"option\" value=\"3\">\n    <span class=\"option\">Option 3</span>\n  </label>\n</div>",
    "css": "/* From Uiverse.io by NlghtM4re - Tags: radio */\n.radio-buttons {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(164, 215, 246);\n  border-radius: 15px;\n  box-shadow: rgb(71, 175, 239) 0px 5px 29px 5px;\n}\n\n.radio-buttons label {\n  position: relative;\n  cursor: pointer;\n}\n\n.radio-buttons input[type=\"radio\"] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n}\n\n.option {\n  position: relative;\n  display: inline-block;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border: none;\n  color: black;\n  border-radius: 14px;\n  padding: 10px;\n}\n\n.option:hover {\n  background-color: rgb(137, 207, 251);\n}\n\n.radio-buttons input[type=\"radio\"]:checked + .option {\n  background-color: rgb(71, 175, 239);\n  box-shadow: rgb(11, 70, 107) 0px 5px 29px 5px;\n}"
  },
  {
    "id": "uiverse-jkhuger_dull-lizard-58",
    "title": "Dull Lizard",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "JkHuger",
      "profileUrl": "https://uiverse.io/JkHuger/dull-lizard-58"
    },
    "license": "MIT",
    "description": "Dull Lizard · checkbox by JkHuger",
    "tags": [
      "checkbox",
      "radio",
      "male",
      "female",
      "non binary",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"radio-container\">\n  <div class=\"radio-wrapper\">\n    <label class=\"radio-button\">\n      <input id=\"option1\" name=\"radio-group\" type=\"radio\">\n      <span class=\"radio-checkmark\"></span>\n      <span class=\"radio-label\">Male</span>\n    </label>\n  </div>\n\n  <div class=\"radio-wrapper\">\n    <label class=\"radio-button\">\n      <input id=\"option2\" name=\"radio-group\" type=\"radio\">\n      <span class=\"radio-checkmark\"></span>\n      <span class=\"radio-label\">Female</span>\n    </label>\n  </div>\n\n  <div class=\"radio-wrapper\">\n    <label class=\"radio-button\">\n      <input id=\"option3\" name=\"radio-group\" type=\"radio\">\n      <span class=\"radio-checkmark\"></span>\n      <span class=\"radio-label\">Other</span>\n    </label>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by JkHuger - Tags: radio, male, female, non binary */\n.radio-container {\n  margin: 0 auto;\n  max-width: 300px;\n  color: white;\n}\n\n.radio-wrapper {\n  margin-bottom: 20px;\n}\n\n.radio-button {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n}\n\n.radio-button:hover {\n  transform: translateY(-2px);\n}\n\n.radio-button input[type=\"radio\"] {\n  display: none;\n}\n\n.radio-checkmark {\n  display: inline-block;\n  position: relative;\n  width: 16px;\n  height: 16px;\n  margin-right: 10px;\n  border: 2px solid #333;\n  border-radius: 50%;\n}\n\n.radio-checkmark:before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: #333;\n  transition: all 0.2s ease-in-out;\n}\n\n.radio-button input[type=\"radio\"]:checked ~ .radio-checkmark:before {\n  transform: translate(-50%, -50%) scale(1);\n}\n\n.radio-label {\n  font-size: 16px;\n  font-weight: 600;\n}"
  },
  {
    "id": "uiverse-sanjanasogimatt_short-chipmunk-97",
    "title": "Short Chipmunk",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "SanjanaSogimatt",
      "profileUrl": "https://uiverse.io/SanjanaSogimatt/short-chipmunk-97"
    },
    "license": "MIT",
    "description": "Short Chipmunk · checkbox by SanjanaSogimatt",
    "tags": [
      "checkbox",
      "neumorphism",
      "skeuomorphism",
      "minimalist",
      "gradient",
      "button",
      "hover",
      "glow"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<div class=\"radio-input\">\n        <input value=\"value-1\" name=\"value-radio\" id=\"value-1\" type=\"radio\">\n        <label for=\"value-1\" class=\"label\">BASIC</label>\n        <input value=\"value-2\" name=\"value-radio\" id=\"value-2\" type=\"radio\">\n        <label for=\"value-2\" class=\"label\">STANDARD</label>\n        <input value=\"value-3\" name=\"value-radio\" id=\"value-3\" type=\"radio\">\n        <label for=\"value-3\" class=\"label\">PREMIUM</label>\n</div>",
    "css": "/* From Uiverse.io by SanjanaSogimatt - Tags: neumorphism, skeuomorphism, minimalist, gradient, button, hover, glow, radio, animated, futuristic-radio-buttons */\n.radio-input {\n  box-shadow: -10px -15px 15px rgba(255, 255, 255, 0.5),\n    10px 10px 25px rgba(70, 70, 70, 0.5);\n  margin: auto;\n  height: 80px;\n  width: 300px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  position: absolute;\n  border-radius: 50px;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: white;\n}\n\n.radio-input input[type=\"radio\"] {\n  display: none;\n}\n\n.label {\n  font-size: .9rem;\n  font-weight: 600;\n  font-family: 'poppins',sans-serif;\n  padding: 18px 15px;\n  border-radius: 35px;\n  transition: 0.5s;\n  cursor: pointer;\n  color: black;\n}\n\n.radio-input input[type=\"radio\"]:checked + label {\n  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.151),\n    10px 10px 15px rgba(0, 0, 0, 0.218);\n  background: linear-gradient(45deg,#cf6efb,#4f29cd);\n  color: white;\n  transform: translateY(-4px);\n}\n\n.radio-input input[type=\"radio\"]:hover:not(:checked)+ label {\n  box-shadow: inset 10px 10px 15px rgba(0, 0, 0, 0.151),\n    inset 10px 10px 15px rgba(0, 0, 0, 0.218);\n}"
  },
  {
    "id": "uiverse-yaya12085_rude-mouse-79",
    "title": "Rude Mouse",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "Yaya12085",
      "profileUrl": "https://uiverse.io/Yaya12085/rude-mouse-79"
    },
    "license": "MIT",
    "description": "Rude Mouse · checkbox by Yaya12085",
    "tags": [
      "checkbox",
      "radio",
      "select",
      "tab",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 150,
    "accentColor": null,
    "html": "<div class=\"radio-inputs\">\n  <label class=\"radio\">\n    <input type=\"radio\" name=\"radio\" checked=\"\">\n    <span class=\"name\">HTML</span>\n  </label>\n  <label class=\"radio\">\n    <input type=\"radio\" name=\"radio\">\n    <span class=\"name\">React</span>\n  </label>\n      \n  <label class=\"radio\">\n    <input type=\"radio\" name=\"radio\">\n    <span class=\"name\">Vue</span>\n  </label>\n</div>",
    "css": "/* From Uiverse.io by Yaya12085 - Tags: radio, select, tab */\n.radio-inputs {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  border-radius: 0.5rem;\n  background-color: #EEE;\n  box-sizing: border-box;\n  box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);\n  padding: 0.25rem;\n  width: 300px;\n  font-size: 14px;\n}\n\n.radio-inputs .radio {\n  flex: 1 1 auto;\n  text-align: center;\n}\n\n.radio-inputs .radio input {\n  display: none;\n}\n\n.radio-inputs .radio .name {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.5rem;\n  border: none;\n  padding: .5rem 0;\n  color: rgba(51, 65, 85, 1);\n  transition: all .15s ease-in-out;\n}\n\n.radio-inputs .radio input:checked + .name {\n  background-color: #fff;\n  font-weight: 600;\n}"
  },
  {
    "id": "uiverse-mijailvillegas_friendly-panther-39",
    "title": "Friendly Panther",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "MijailVillegas",
      "profileUrl": "https://uiverse.io/MijailVillegas/friendly-panther-39"
    },
    "license": "MIT",
    "description": "Friendly Panther · checkbox by MijailVillegas",
    "tags": [
      "checkbox",
      "cyberpunk",
      "neon",
      "radio",
      "futuristic",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<form action=\"\" class=\"container\">\n        <input class=\"input-btn\" type=\"radio\" id=\"valueIs-1\" name=\"valueIs-radio\" checked=\"\" value=\"valueIs-1\">\n        <label class=\"neon-btn\" for=\"valueIs-1\">\n            <span class=\"span\"></span>\n            <span class=\"txt\">OPTION 1</span>\n        </label>\n\n        <input class=\"input-btn\" type=\"radio\" id=\"valueIs-2\" name=\"valueIs-radio\" value=\"valueIs-2\">\n        <label class=\"neon-btn\" for=\"valueIs-2\">\n            <span class=\"span\"></span>\n            <span class=\"txt\">OPTION 2</span>\n        </label>\n    </form>",
    "css": "/* From Uiverse.io by MijailVillegas - Tags: cyberpunk, neon, radio, futuristic, animated */\n.container {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-style: italic;\n  font-weight: bold;\n  font-size: 1.2em;\n  display: grid;\n  gap: 2em;\n  place-content: center;\n  width: 400px;\n}\n\n.container input[type=radio] {\n  display: none;\n}\n\n.input-btn:is(:checked) + .neon-btn .span {\n  inset: 2px;\n  background-color: #4090b5;\n  background: repeating-linear-gradient(to bottom, transparent 0%, #4090b5 1px, #4090b5 3px, #4090b5 5px, #4090b5 4px, transparent 0.5%), repeating-linear-gradient(to left, hsl(295, 60%, 12%) 100%, hsl(295, 60%, 12%) 100%);\n  box-shadow: inset 0 40px 20px hsl(296, 59%, 10%);\n}\n\n.input-btn:is(:checked) + .neon-btn .txt {\n  text-shadow: 2px 4px 1px #9e30a9, 2px 2px 1px #4090b5, 0 0 20px rgba(255, 255, 255, 0.616);\n  color: rgb(255, 255, 255);\n  animation: colorchange 0.3s ease;\n}\n\n.input-btn:is(:checked) + .neon-btn::before {\n  animation-duration: 0.6s;\n}\n\n.input-btn:is(:checked) + .neon-btn::after {\n  animation-duration: 0.6s;\n}\n\n.neon-btn {\n  width: 300px;\n  height: 60px;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.5em 5em;\n  text-align: right;\n  background: transparent;\n  position: relative;\n  overflow: hidden;\n  transition: all 2s ease-in-out;\n  -webkit-clip-path: polygon(6% 0, 93% 0, 100% 8%, 100% 86%, 90% 89%, 88% 100%, 5% 100%, 0% 85%);\n  clip-path: polygon(6% 0, 93% 0, 100% 8%, 100% 86%, 90% 89%, 88% 100%, 5% 100%, 0% 85%);\n}\n\n.neon-btn .span {\n  display: flex;\n  -webkit-clip-path: polygon(6% 0, 93% 0, 100% 8%, 100% 86%, 90% 89%, 88% 100%, 5% 100%, 0% 85%);\n  clip-path: polygon(6% 0, 93% 0, 100% 8%, 100% 86%, 90% 89%, 88% 100%, 5% 100%, 0% 85%);\n  position: absolute;\n  inset: 1px;\n  background-color: #212121;\n  z-index: 1;\n}\n\n.neon-btn .txt {\n  text-align: right;\n  position: relative;\n  z-index: 2;\n  color: aliceblue;\n  font-size: 1em;\n  transition: all ease-in-out 2s linear;\n  text-shadow: 0px 0px 1px #4090b5, 0px 0px 1px #9e30a9, 0 0 1px white;\n}\n\n.neon-btn::before {\n  content: \"\";\n  position: absolute;\n  height: 300px;\n  aspect-ratio: 1.5/1;\n  box-shadow: -17px -19px 20px #9e30a9;\n  background-image: conic-gradient(#9e30a9, transparent, transparent, transparent, transparent, transparent, transparent, #9e30a9);\n  animation: rotate 4s linear infinite -2s;\n}\n\n.neon-btn::after {\n  content: \"\";\n  position: absolute;\n  height: 300px;\n  aspect-ratio: 1.5/1;\n  box-shadow: -17px -19px 10px #4090b5;\n  background-image: conic-gradient(#4090b5, transparent, transparent, transparent, transparent, transparent, transparent, transparent, #4090b5);\n  animation: rotate 4s linear infinite;\n}\n\n@keyframes rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes colorchange {\n  0% {\n    text-shadow: 0px 0px 0px #9e30a9, 0px 0px 0px #4090b5, 0 0 0px rgba(255, 255, 255, 0.616);\n  }\n\n  50% {\n    text-shadow: -6px 5px 1px #9e30a9, 5px 11px 1px #4090b5, 0 0 20px rgba(255, 255, 255, 0.616);\n  }\n\n  to {\n    text-shadow: 2px 4px 1px #9e30a9, 2px 2px 1px #4090b5, 0 0 20px rgba(255, 255, 255, 0.616);\n  }\n}\n\n@keyframes backgroundchange {\n  0% {\n    background-color: transparent;\n  }\n\n  50% {\n    background-color: #4090b5;\n  }\n\n  to {\n    background-color: transparent;\n  }\n}"
  },
  {
    "id": "uiverse-admin12121_cold-bobcat-20",
    "title": "Cold Bobcat",
    "category": "checkbox",
    "source": "uiverse",
    "author": {
      "name": "Admin12121",
      "profileUrl": "https://uiverse.io/Admin12121/cold-bobcat-20"
    },
    "license": "MIT",
    "description": "Cold Bobcat · checkbox by Admin12121",
    "tags": [
      "checkbox",
      "simple",
      "material design",
      "radio",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 250,
    "accentColor": null,
    "html": "<div class=\"body\">\n  <div class=\"tabs\">\n    <input\n      checked=\"\"\n      value=\"HTML\"\n      name=\"fav_language\"\n      id=\"html\"\n      type=\"radio\"\n      class=\"input\"\n    />\n    <label for=\"html\" class=\"label\">HTML</label>\n    <input\n      value=\"CSS\"\n      name=\"fav_language\"\n      id=\"css\"\n      type=\"radio\"\n      class=\"input\"\n    />\n    <label for=\"css\" class=\"label\">CSS</label>\n    <input\n      value=\"JavaScript\"\n      name=\"fav_language\"\n      id=\"javascript\"\n      type=\"radio\"\n      class=\"input\"\n    />\n    <label for=\"javascript\" class=\"label\">JavaScript</label>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by Admin12121  - Tags: simple, material design, checkbox, radio */\n.body {\n  --radius: 8px;\n  --border: 4px;\n  --height: 48px;\n  --speed: 0.25s;\n  display: grid;\n  place-items: center;\n  align-content: center;\n  font-family: \"SF Pro Text\", \"SF Pro Icons\", \"AOS Icons\", \"Helvetica Neue\",\n    Helvetica, Arial, sans-serif, system-ui;\n}\n\n.tabs {\n  height: var(--height);\n  display: grid;\n  grid-auto-flow: column;\n  background: hsl(0 0% 0%);\n  border-radius: var(--radius);\n  grid-auto-columns: 1fr;\n  position: relative;\n  border: var(--border) solid hsl(0 0% 0%);\n}\n\n.tabs {\n  --ease: linear(\n    0,\n    0.1641 3.52%,\n    0.311 7.18%,\n    0.4413 10.99%,\n    0.5553 14.96%,\n    0.6539 19.12%,\n    0.738 23.5%,\n    0.8086 28.15%,\n    0.8662 33.12%,\n    0.9078 37.92%,\n    0.9405 43.12%,\n    0.965 48.84%,\n    0.9821 55.28%,\n    0.992 61.97%,\n    0.9976 70.09%,\n    1\n  );\n}\n\n.tabs > .input,\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.tabs:has(:checked:nth-of-type(1)) {\n  --active: 0;\n}\n.tabs:has(:checked:nth-of-type(2)) {\n  --active: 1;\n}\n.tabs:has(:checked:nth-of-type(3)) {\n  --active: 2;\n}\n.tabs:has(:checked:nth-of-type(4)) {\n  --active: 3;\n}\n\n.tabs :checked + .label {\n  --highlight: 1;\n}\n\n.tabs:has(.input:nth-of-type(2)) {\n  --count: 2;\n}\n.tabs:has(.input:nth-of-type(3)) {\n  --count: 3;\n}\n.tabs:has(.input:nth-of-type(4)) {\n  --count: 4;\n}\n\n.tabs .label {\n  padding: 0 clamp(10px, 10px + 10px, 20px);\n  cursor: pointer;\n  text-align: center;\n  height: 100%;\n  display: grid;\n  border-radius: calc(var(--radius) - var(--border));\n  place-items: center;\n  color: hsl(0 0% 100% / calc(0.5 + var(--highlight, 0)));\n  transition: background, color;\n  transition-duration: 0.25s;\n  transition-timing-function: var(--ease, ease);\n}\n\n.input:not(:checked) + .label:hover {\n  --highlight: 0.35;\n  background: hsl(0 0% 20%);\n}\n\n.tabs::after {\n  pointer-events: none;\n  content: \"\";\n  width: calc(100% / var(--count));\n  height: 100%;\n  background: hsl(0 0% 100%);\n  position: absolute;\n  border-radius: calc(var(--radius) - var(--border));\n  mix-blend-mode: difference;\n  translate: calc(var(--active, 0) * 100%) 0;\n  transition: translate, outline-color;\n  transition-duration: var(--speed);\n  transition-timing-function: var(--ease, ease);\n  outline: 2px solid transparent;\n}\n\n.tabs:has(:focus-visible)::after {\n  outline-color: red;\n}"
  },
  {
    "id": "uiverse-johnnycsilva_black-rabbit-68",
    "title": "Black Rabbit",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "JohnnyCSilva",
      "profileUrl": "https://uiverse.io/JohnnyCSilva/black-rabbit-68"
    },
    "license": "MIT",
    "description": "Black Rabbit · card by JohnnyCSilva",
    "tags": [
      "card",
      "crypto",
      "bitcoin",
      "rotating",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 6000,
    "accentColor": null,
    "html": "<div class=\"coin\">\n  <div class=\"side heads\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" width=\"100%\" height=\"100%\" version=\"1.1\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" image-rendering=\"optimizeQuality\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" viewBox=\"0 0 4091.27 4091.73\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n <g id=\"Layer_x0020_1\">\n  <metadata id=\"CorelCorpID_0Corel-Layer\"></metadata>\n  <g id=\"_1421344023328\">\n   <path fill=\"#F7931A\" fill-rule=\"nonzero\" d=\"M4030.06 2540.77c-273.24,1096.01 -1383.32,1763.02 -2479.46,1489.71 -1095.68,-273.24 -1762.69,-1383.39 -1489.33,-2479.31 273.12,-1096.13 1383.2,-1763.19 2479,-1489.95 1096.06,273.24 1763.03,1383.51 1489.76,2479.57l0.02 -0.02z\"></path>\n   <path fill=\"white\" fill-rule=\"nonzero\" d=\"M2947.77 1754.38c40.72,-272.26 -166.56,-418.61 -450,-516.24l91.95 -368.8 -224.5 -55.94 -89.51 359.09c-59.02,-14.72 -119.63,-28.59 -179.87,-42.34l90.16 -361.46 -224.36 -55.94 -92 368.68c-48.84,-11.12 -96.81,-22.11 -143.35,-33.69l0.26 -1.16 -309.59 -77.31 -59.72 239.78c0,0 166.56,38.18 163.05,40.53 90.91,22.69 107.35,82.87 104.62,130.57l-104.74 420.15c6.26,1.59 14.38,3.89 23.34,7.49 -7.49,-1.86 -15.46,-3.89 -23.73,-5.87l-146.81 588.57c-11.11,27.62 -39.31,69.07 -102.87,53.33 2.25,3.26 -163.17,-40.72 -163.17,-40.72l-111.46 256.98 292.15 72.83c54.35,13.63 107.61,27.89 160.06,41.3l-92.9 373.03 224.24 55.94 92 -369.07c61.26,16.63 120.71,31.97 178.91,46.43l-91.69 367.33 224.51 55.94 92.89 -372.33c382.82,72.45 670.67,43.24 791.83,-303.02 97.63,-278.78 -4.86,-439.58 -206.26,-544.44 146.69,-33.83 257.18,-130.31 286.64,-329.61l-0.07 -0.05zm-512.93 719.26c-69.38,278.78 -538.76,128.08 -690.94,90.29l123.28 -494.2c152.17,37.99 640.17,113.17 567.67,403.91zm69.43 -723.3c-63.29,253.58 -453.96,124.75 -580.69,93.16l111.77 -448.21c126.73,31.59 534.85,90.55 468.94,355.05l-0.02 0z\"></path>\n  </g>\n </g>\n    </svg>\n  </div>\n  <div class=\"side tails\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"svg_back\" xml:space=\"preserve\" width=\"100%\" height=\"100%\" version=\"1.1\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" image-rendering=\"optimizeQuality\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" viewBox=\"0 0 4091.27 4091.73\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n <g id=\"Layer_x0020_1\">\n  <metadata id=\"CorelCorpID_0Corel-Layer\"></metadata>\n  <g id=\"_1421344023328\">\n   <path fill=\"#F7931A\" fill-rule=\"nonzero\" d=\"M4030.06 2540.77c-273.24,1096.01 -1383.32,1763.02 -2479.46,1489.71 -1095.68,-273.24 -1762.69,-1383.39 -1489.33,-2479.31 273.12,-1096.13 1383.2,-1763.19 2479,-1489.95 1096.06,273.24 1763.03,1383.51 1489.76,2479.57l0.02 -0.02z\"></path>\n   <path fill=\"white\" fill-rule=\"nonzero\" d=\"M2947.77 1754.38c40.72,-272.26 -166.56,-418.61 -450,-516.24l91.95 -368.8 -224.5 -55.94 -89.51 359.09c-59.02,-14.72 -119.63,-28.59 -179.87,-42.34l90.16 -361.46 -224.36 -55.94 -92 368.68c-48.84,-11.12 -96.81,-22.11 -143.35,-33.69l0.26 -1.16 -309.59 -77.31 -59.72 239.78c0,0 166.56,38.18 163.05,40.53 90.91,22.69 107.35,82.87 104.62,130.57l-104.74 420.15c6.26,1.59 14.38,3.89 23.34,7.49 -7.49,-1.86 -15.46,-3.89 -23.73,-5.87l-146.81 588.57c-11.11,27.62 -39.31,69.07 -102.87,53.33 2.25,3.26 -163.17,-40.72 -163.17,-40.72l-111.46 256.98 292.15 72.83c54.35,13.63 107.61,27.89 160.06,41.3l-92.9 373.03 224.24 55.94 92 -369.07c61.26,16.63 120.71,31.97 178.91,46.43l-91.69 367.33 224.51 55.94 92.89 -372.33c382.82,72.45 670.67,43.24 791.83,-303.02 97.63,-278.78 -4.86,-439.58 -206.26,-544.44 146.69,-33.83 257.18,-130.31 286.64,-329.61l-0.07 -0.05zm-512.93 719.26c-69.38,278.78 -538.76,128.08 -690.94,90.29l123.28 -494.2c152.17,37.99 640.17,113.17 567.67,403.91zm69.43 -723.3c-63.29,253.58 -453.96,124.75 -580.69,93.16l111.77 -448.21c126.73,31.59 534.85,90.55 468.94,355.05l-0.02 0z\"></path>\n  </g>\n </g>\n</svg></div>\n</div>",
    "css": "/* From Uiverse.io by JohnnyCSilva  - Tags: card, crypto, bitcoin, rotating */\n.coin {\n  font-size: 200px;\n  width: 0.1em;\n  height: 1em;\n  background: linear-gradient(#faa504, #141001);\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  animation: rotate_4001510 7s infinite linear;\n  transform-style: preserve-3d;\n}\n\n.coin .side, .coin:before, .coin:after {\n  content: \"\";\n  position: absolute;\n  width: 1em;\n  height: 1em;\n  overflow: hidden;\n  border-radius: 50%;\n  right: -0.4em;\n  text-align: center;\n  line-height: 1;\n  transform: rotateY(-90deg);\n  -moz-backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.coin .tails, .coin:after {\n  left: -0.4em;\n  transform: rotateY(90deg);\n}\n\n.coin:before, .coin:after {\n  background: linear-gradient(#faa504, #141001);\n  backface-visibility: hidden;\n  transform: rotateY(90deg);\n}\n\n.coin:after {\n  transform: rotateY(-90deg);\n}\n\n@keyframes rotate_4001510 {\n  100% {\n    transform: rotateY(360deg);\n  }\n}\n\n.svg_back {\n  transform: scaleX(-1);\n}"
  },
  {
    "id": "uiverse-mrez321_slippery-owl-0",
    "title": "Slippery Owl",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "MRez321",
      "profileUrl": "https://uiverse.io/MRez321/slippery-owl-0"
    },
    "license": "MIT",
    "description": "Slippery Owl · card by MRez321",
    "tags": [
      "card",
      "hover",
      "animated",
      "floating",
      "div",
      "eye"
    ],
    "previewType": "css",
    "durationMs": 2000,
    "accentColor": null,
    "html": "<div class=\"one-div\"></div>",
    "css": "/* From Uiverse.io by MRez321 - Tags: hover, animated, floating, div, eye */\n.one-div {\n  background-color: #322e2e;\n  width: 20rem;\n  height: 15rem;\n  position: relative;\n  border: solid 1.2rem #dacfcf;\n  border-radius: 50% 50% 44% 44% / 55% 55% 40% 40%;\n}\n\n.one-div::before,\n.one-div::after {\n  content: '';\n  width: 6rem;\n  height: 6rem;\n  position: absolute;\n  top: 35%;\n  background-image: repeating-linear-gradient(0deg, #474bff, #474bff 3.5px, transparent 3.5px, transparent);\n  background-size: .4rem .4rem;\n  background-color: #31abd1;\n  border: solid 2px #00adcc;\n  filter: drop-shadow(0 1px 6px #04d9ff);\n}\n\n.one-div::before {\n  left: 1.4rem;\n  border-radius: 25% 75% 25% 75% / 25% 75% 25% 75%;\n}\n\n.one-div::after {\n  right: 1.4rem;\n  border-radius: 75% 25% 75% 25% / 75% 25% 75% 25%;\n}\n\n.one-div:hover {\n  animation: float 2s infinite;\n}\n\n.one-div:hover::before,\n.one-div:hover::after {\n  animation: blink 2.5s infinite;\n}\n\n@keyframes float {\n  0% {\n    bottom: 0;\n  }\n\n  50% {\n    bottom: -.4rem;\n  }\n\n  100% {\n    bottom: 0;\n  }\n}\n\n@keyframes blink {\n  90% {\n    transform: none;\n    animation-timing-function: ease-in;\n  }\n\n  93% {\n    transform: translateY(15px) scaleY(0)\n  }\n\n  100% {\n    animation-timing-function: ease-out;\n  }\n}"
  },
  {
    "id": "uiverse-johnnycsilva_spicy-vampirebat-51",
    "title": "Spicy Vampirebat",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "JohnnyCSilva",
      "profileUrl": "https://uiverse.io/JohnnyCSilva/spicy-vampirebat-51"
    },
    "license": "MIT",
    "description": "Spicy Vampirebat · card by JohnnyCSilva",
    "tags": [
      "card",
      "card template",
      "product card",
      "cool card",
      "simplistic",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"card\">\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 58 58\" class=\"image\"><g fill-rule=\"evenodd\" fill=\"none\" id=\"Page-1\"><g fill-rule=\"nonzero\" id=\"059---Money-Bag\"><path fill=\"#f29c1f\" d=\"m23 16.98v-9.98c0-1.66-2.91-3-6.5-3s-6.5 1.34-6.5 3v11.01c-3.36.12-6 1.41-6 2.99v26.23c-2.35.45-4 1.52-4 2.77v5c0 1.66 2.91 3 6.5 3s6.5-1.34 6.5-3v-2c0 1.66 2.91 3 6.5 3s6.5-1.34 6.5-3l.5-13z\" id=\"Shape\"></path><path fill=\"#f3d55b\" d=\"m54.527 13.355c-.072-.108-1.461-2.092-5.5-3 1.0331933-.84954961 1.6441867-2.10769199 1.673-3.445 0-2.358-2.006-4.417-4.769-4.895-.5372791-.08053169-1.0405693.28263221-1.1334952.81790692s.2585108 1.04682267.7914952 1.15209308c1.798.315 3.111 1.542 3.111 2.925 0 1.638-1.775 2.984-4 3-.8755119.01021562-1.7370699-.21978683-2.491-.665-.4719273-.28691192-1.0870881-.13692731-1.374.33500001-.2869119.47192729-.1369273 1.08708809.335 1.37399999 1.0594655.6270481 2.2688888.9556657 3.5.951.01 0 .017.005.026.005 6.213 0 8.124 2.5 8.176 2.567.200426.2958159.5434432.4622351.8998403.436569.356397-.025666.6720289-.239518.828-.561.155971-.3214819.1285857-.7017531-.0718403-.997569z\" id=\"Shape\"></path><path fill=\"#a56a43\" d=\"m45.19 52h-19.19v-12c0-1.66-2.91-3-6.5-3-.8387701-.0034358-1.6759363.0735835-2.5.23v-10.89c1.4565382-3.4367258 3.4852949-6.6015863 6-9.36v-.01c2.0874104-2.3329398 4.5726948-4.2764728 7.34-5.74v-.01c.8551132.5204315 1.8390235.7906603 2.84.78h5.6c1.0050057.0070139 1.9920265-.2665813 2.85-.79 2.18 1.08 12.01 6.72 15.56 21.79 4 17-8 19-12 19z\" id=\"Shape\"></path><path fill=\"#fdd7ad\" d=\"m45.19 49c-.5522847 0-1-.4477153-1-1s.4477153-1 1-1c.723 0 4.425-.125 6.376-2.589.9225786-1.3035875 1.4145252-2.8629918 1.407-4.46.0332885-.5485091.4978261-.970453 1.047-.951.2649656.0126906.5140321.1301392.6923876.326499.1783554.1963597.2713838.4555393.2586124.720501-.0084762 2.0150456-.6508108 3.9763353-1.836 5.606-2.524 3.186-7.061 3.347-7.945 3.347z\" id=\"Shape\"></path><path fill=\"#805333\" d=\"m46 1.17c.01 2.2-.43 7-3.95 9.75-.1318612.1079533-.2723293.2049432-.42.29-.8579735.5234187-1.8449943.7970139-2.85.79h-5.6c-1.0009765.0106603-1.9848868-.2595685-2.84-.78-.1495192-.0908277-.2931396-.191028-.43-.3-3.52-2.75-3.95-7.55-3.95-9.75.0016568-.33258473.1685567-.6425818.4452874-.8270689.2767306-.18448711.6270741-.21931899.9347126-.0929311 1.28.54 1.71 1.75 3.65 1.75 2.49 0 2.49-2 4.98-2s2.5 2 5 2c1.94 0 2.37-1.22 3.65-1.75.3076385-.12638789.657982-.09155601.9347126.0929311.2767307.1844871.4436306.49448417.4452874.8270689z\" id=\"Shape\"></path><path fill=\"#603e26\" d=\"m36.45 11.982c1.164119-1.6359812 2.0400633-3.45889226 2.59-5.39.1491169-.53295478.7020452-.84411688 1.235-.695s.8441169.70204522.695 1.235c-.545409 1.83131833-1.3359015 3.5804932-2.35 5.2l3.34 3.12c.4031679.3783151.423315 1.0118321.045 1.415-.3783151.4031678-1.0118321.423315-1.415.045l-3.59-3.35v3.3c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1v-3.3l-3.58 3.35c-.1844231.1726652-.4273651.2691275-.68.27-.2800466-.0009897-.5474685-.1166316-.74-.32-.3709419-.4048785-.3486888-1.0324134.05-1.41l3.35-3.12c-1.0179074-1.618792-1.8117948-3.36803545-2.36-5.2-.0704836-.2559398-.0363072-.52940237.0949974-.76012341.1313047-.23072105.3489609-.3997642.6050026-.46987659.2546559-.07392838.5283328-.04249768.7595988.08723693.231266.1297346.4007475.34690489.4704012.60276307.5569409 1.93085241 1.4433119 3.7509576 2.62 5.38z\" id=\"Shape\"></path><path fill=\"#f0c419\" d=\"m17 21c0 1.66-2.91 3-6.5 3s-6.5-1.34-6.5-3c0-1.58 2.64-2.87 6-2.99.17-.01.33-.01.5-.01 3.59 0 6.5 1.34 6.5 3z\" id=\"Shape\"></path><path fill=\"#e57e25\" d=\"m23 7v9.98c-2.5147051 2.7584137-4.5434618 5.9232742-6 9.36v-5.34c0-1.66-2.91-3-6.5-3-.17 0-.33 0-.5.01v-11.01c0 1.66 2.91 3 6.5 3s6.5-1.34 6.5-3z\" id=\"Shape\"></path><path fill=\"#f9eab0\" d=\"m13 50c0 1.66-2.91 3-6.5 3s-6.5-1.34-6.5-3c0-1.25 1.65-2.32 4-2.77.82406367-.1564165 1.66122992-.2334358 2.5-.23 3.59 0 6.5 1.34 6.5 3z\" id=\"Shape\"></path><path fill=\"#f3d55b\" d=\"m13 50v5c0 1.66-2.91 3-6.5 3s-6.5-1.34-6.5-3v-5c0 1.66 2.91 3 6.5 3s6.5-1.34 6.5-3z\" id=\"Shape\"></path><path fill=\"#f3d55b\" d=\"m26 40c0 1.66-2.91 3-6.5 3s-6.5-1.34-6.5-3c0-1.25 1.65-2.32 4-2.77.8240637-.1564165 1.6612299-.2334358 2.5-.23 3.59 0 6.5 1.34 6.5 3z\" id=\"Shape\"></path><path fill=\"#f0c419\" d=\"m26 40v13c0 1.66-2.91 3-6.5 3s-6.5-1.34-6.5-3v-13c0 1.66 2.91 3 6.5 3s6.5-1.34 6.5-3z\" id=\"Shape\"></path><path fill=\"#fdd7ad\" d=\"m39 27c0 .5522847.4477153 1 1 1s1-.4477153 1-1c0-2.209139-1.790861-4-4-4v-1c0-.5522847-.4477153-1-1-1s-1 .4477153-1 1v1c-2.209139 0-4 1.790861-4 4s1.790861 4 4 4v4c-1.1045695 0-2-.8954305-2-2 0-.5522847-.4477153-1-1-1s-1 .4477153-1 1c0 2.209139 1.790861 4 4 4v1c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-1c2.209139 0 4-1.790861 4-4s-1.790861-4-4-4v-4c1.1045695 0 2 .8954305 2 2zm0 6c0 1.1045695-.8954305 2-2 2v-4c1.1045695 0 2 .8954305 2 2zm-4-4c-1.1045695 0-2-.8954305-2-2s.8954305-2 2-2z\" id=\"Shape\"></path></g></g></svg>\n  <p class=\"number-h1\">01</p>\n  <p class=\"h1\"> Save with cofidence </p>\n  <p class=\"p\">Eliminate the stress of saving money with our innovative solution. We understand that saving is something hard.</p>\n  </div>",
    "css": "/* From Uiverse.io by JohnnyCSilva - Tags: card, card template, product card, cool card, simplistic */\n.card {\n  width: 275px;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  border-radius: 20px;\n  padding: 30px;\n  gap: 10px;\n  border: 2px solid transparent;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n}\n\n.card:hover {\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n}\n\n.card > .image {\n  width: 70px;\n  height: 70px;\n  transition: all 0.1s ease-in-out;\n}\n\n.card > .number-h1 {\n  font-size: 15px;\n  font-weight: bold;\n  padding: 5px 7px;\n  border-radius: 10px;\n  color: white;\n  background-color: #e57e25;\n}\n\n.card > .h1 {\n  font-size: 17px;\n  font-weight: bold;\n  text-align: center;\n}\n\n.card > .p {\n  color: #9e9da1;\n  font-size: 14px;\n  text-align: center;\n}"
  },
  {
    "id": "uiverse-smit-prajapati_dull-dolphin-40",
    "title": "Dull Dolphin",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "Smit-Prajapati",
      "profileUrl": "https://uiverse.io/Smit-Prajapati/dull-dolphin-40"
    },
    "license": "MIT",
    "description": "Dull Dolphin · card by Smit-Prajapati",
    "tags": [
      "card",
      "cool card",
      "cardhover",
      "card animation",
      "card hover",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<div class=\"card\">\n    <div class=\"dot-container-main\">\n      <span class=\"dot dot1\t size-5\"></span>\n      <span class=\"dot dot2\t size-5\"></span>\n      <span class=\"dot dot3\t size-5\"></span>\n      <span class=\"dot dot4\t size-5\"></span>\n      <span class=\"dot dot5\t size-5\"></span>\n      <span class=\"dot dot6\t size-5\"></span>\n      <span class=\"dot dot7\t size-5\"></span>\n      <span class=\"dot dot8\t size-5\"></span>\n      <span class=\"dot dot9\t size-5\"></span>\n      <span class=\"dot dot10 size-5\"></span>\n      <span class=\"dot dot11 size-5\"></span>\n      <span class=\"dot dot12 size-5\"></span>\n      <span class=\"dot dot13 size-5\"></span>\n      <span class=\"dot dot14 size-5\"></span>\n      <span class=\"dot dot15 size-5\"></span>\n      <span class=\"dot dot16 size-5\"></span>\n      <span class=\"dot dot17 size-5\"></span>\n      <span class=\"dot dot18 size-5\"></span>\n      <span class=\"dot dot19 size-5\"></span>\n      <span class=\"dot dot20 size-5\"></span>\n      <span class=\"dot dot21 size-5\"></span>\n      <span class=\"dot dot22 size-5\"></span>\n      <span class=\"dot dot23 size-5\"></span>\n      <span class=\"dot dot24 size-5\"></span>\n      <span class=\"dot dot25 size-5\"></span>\n      <span class=\"dot dot26 size-5\"></span>\n      <span class=\"dot dot27 size-5\"></span>\n      <span class=\"dot dot28 size-5\"></span>\n      <span class=\"dot dot29 size-5\"></span>\n      <span class=\"dot dot30 size-5\"></span>\n      <span class=\"dot dot31 size-5\"></span>\n      <span class=\"dot dot32 size-5\"></span>\n      <span class=\"dot dot33 size-5\"></span>\n      <span class=\"dot dot34 size-5\"></span>\n      <span class=\"dot dot35 size-5\"></span>\n      <span class=\"dot dot36 size-5\"></span>\n      <span class=\"dot dot37 size-5\"></span>\n      <span class=\"dot dot38 size-5\"></span>\n      <span class=\"dot dot39 size-5\"></span>\n      <span class=\"dot dot40 size-5\"></span>\n      <span class=\"dot dot41 size-5\"></span>\n      <span class=\"dot dot42 size-5\"></span>\n      <span class=\"dot dot43 size-5\"></span>\n      <span class=\"dot dot44 size-5\"></span>\n      <span class=\"dot dot45 size-5\"></span>\n      <span class=\"dot dot46 size-5\"></span>\n      <span class=\"dot dot47 size-5\"></span>\n      <span class=\"dot dot48 size-5\"></span>\n      <span class=\"dot dot49 size-5\"></span>\n      <span class=\"dot dot50 size-5\"></span>\n      <span class=\"dot dot51 size-5\"></span>\n      <span class=\"dot dot52 size-10\"></span>\n      <span class=\"dot dot53 size-10\"></span>\n      <span class=\"dot dot54 size-10\"></span>\n      <span class=\"dot dot55 size-10\"></span>\n      <span class=\"dot dot56 size-10\"></span>\n      <span class=\"dot dot57 size-10\"></span>\n      <span class=\"dot dot58 size-10\"></span>\n      <span class=\"dot dot59 size-10\"></span>\n      <span class=\"dot dot60 size-10\"></span>\n      <span class=\"dot dot61 size-10\"></span>\n      <span class=\"dot dot62 size-10\"></span>\n      <span class=\"dot dot63 size-10\"></span>\n      <span class=\"dot dot64 size-10\"></span>\n      <span class=\"dot dot65 size-10\"></span>\n      <span class=\"dot dot66 size-10\"></span>\n      <span class=\"dot dot67 size-10\"></span>\n      <span class=\"dot dot68 size-10\"></span>\n      <span class=\"dot dot69 size-10\"></span>\n      <span class=\"dot dot70 size-10\"></span>\n      <span class=\"dot dot71 size-10\"></span>\n      <span class=\"dot dot72 size-15\"></span>\n      <span class=\"dot dot73 size-15\"></span>\n      <span class=\"dot dot74 size-15\"></span>\n      <span class=\"dot dot75 size-15\"></span>\n      <span class=\"dot dot76 size-20\">\n        <svg viewBox=\"0 0 30 30\" xmlns=\"http://www.w3.org/2000/svg\" class=\"svg\">\n          <path d=\"M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z\"></path>\n        </svg>\n      </span>\n      <span class=\"dot dot77\tsize-20\">\n        <svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\" class=\"svg\">\n          <path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path>\n        </svg>\n      </span>\n      <span class=\"dot dot78\tsize-20\">\n        <svg viewBox=\"0 0 640 512\" xmlns=\"http://www.w3.org/2000/svg\" class=\"svg\">\n          <path d=\"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z\"></path>\n        </svg>\n      </span>\n      <span class=\"dot dot79\tsize-15\"></span>\n      <span class=\"dot dot80\tsize-5\"></span>\n      <span class=\"dot dot81\tsize-5\"></span>\n      <span class=\"dot dot82\tsize-5\"></span>\n      <span class=\"dot dot83\tsize-5\"></span>\n    </div>\n    <div class=\"text\">UIVERS.IO</div>\n  </div>",
    "css": "/* From Uiverse.io by Smit-Prajapati - Tags: card, cool card, cardhover , card animation, card hover */\n.card {\n  width: 200px;\n  height: 300px;\n  position: relative;\n  background-image: linear-gradient(230deg, rgba(93, 93, 93, 0.03) 0%, rgba(93, 93, 93, 0.03) 50%, rgba(78, 78, 78, 0.03) 50%, rgba(78, 78, 78, 0.03) 100%), linear-gradient(107deg, rgba(55, 55, 55, 0.01) 0%, rgba(55, 55, 55, 0.01) 50%, rgba(170, 170, 170, 0.01) 50%, rgba(170, 170, 170, 0.01) 100%), linear-gradient(278deg, rgba(16, 16, 16, 0.03) 0%, rgba(16, 16, 16, 0.03) 50%, rgba(24, 24, 24, 0.03) 50%, rgba(24, 24, 24, 0.03) 100%), linear-gradient(205deg, rgba(116, 116, 116, 0.03) 0%, rgba(116, 116, 116, 0.03) 50%, rgba(0, 0, 0, 0.03) 50%, rgba(0, 0, 0, 0.03) 100%), linear-gradient(150deg, rgba(5, 5, 5, 0.03) 0%, rgba(5, 5, 5, 0.03) 50%, rgba(80, 80, 80, 0.03) 50%, rgba(80, 80, 80, 0.03) 100%), linear-gradient(198deg, rgba(231, 231, 231, 0.03) 0%, rgba(231, 231, 231, 0.03) 50%, rgba(26, 26, 26, 0.03) 50%, rgba(26, 26, 26, 0.03) 100%), linear-gradient(278deg, rgba(89, 89, 89, 0.03) 0%, rgba(89, 89, 89, 0.03) 50%, rgba(26, 26, 26, 0.03) 50%, rgba(26, 26, 26, 0.03) 100%), linear-gradient(217deg, rgba(28, 28, 28, 0.03) 0%, rgba(28, 28, 28, 0.03) 50%, rgba(202, 202, 202, 0.03) 50%, rgba(202, 202, 202, 0.03) 100%), linear-gradient(129deg, rgba(23, 23, 23, 0.03) 0%, rgba(23, 23, 23, 0.03) 50%, rgba(244, 244, 244, 0.03) 50%, rgba(244, 244, 244, 0.03) 100%), linear-gradient(135deg, rgb(1, 132, 255), rgb(198, 5, 91));\n  display: grid;\n  place-content: center;\n  border-radius: 20px;\n  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.size-5 {\n  width: 5px;\n  border-radius: 2px;\n}\n\n.size-10 {\n  width: 10px;\n  border-radius: 4px;\n}\n\n.size-15 {\n  width: 15px;\n  border-radius: 5px;\n}\n\n.size-20 {\n  width: 20px;\n  border-radius: 7px;\n}\n\n.dot-container-main {\n  width: 95px;\n  height: 110px;\n  position: relative;\n}\n\n.dot {\n  position: absolute;\n  aspect-ratio: 1;\n  background: linear-gradient(45deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.34) 100%);\n  border-top: 1px solid rgb(255, 255, 255);\n  border-right: 1px solid white;\n  transition: left 1s ease-in-out, top 1s ease-in-out, transform 0.2s ease-in-out;\n}\n\n.dot:hover {\n  transform: scale(1.8);\n}\n\n.dot1 {\n  left: -40px;\n  top: -80px;\n}\n\n.dot52 {\n  left: 10px;\n  top: -75px;\n}\n\n.dot4 {\n  left: 40px;\n  top: -50px;\n}\n\n.dot3 {\n  left: -20px;\n  top: -70px;\n}\n\n.dot72 {\n  left: 50px;\n  top: -85px;\n}\n\n.dot2 {\n  left: 110px;\n  top: -30px;\n}\n\n.dot53 {\n  left: 125px;\n  top: -80px;\n}\n\n.dot5 {\n  left: 100px;\n  top: -20px;\n}\n\n.dot73 {\n  left: -25px;\n  top: -50px;\n}\n\n.dot6 {\n  left: 30px;\n  top: -45px;\n}\n\n.dot7 {\n  left: 80px;\n  top: -60px;\n}\n\n.dot55 {\n  left: 60px;\n  top: -30px;\n}\n\n.dot8 {\n  left: 70px;\n  top: -35px;\n}\n\n.dot54 {\n  left: 120px;\n  top: -20px;\n}\n\n.dot56 {\n  left: 85px;\n  top: -5px;\n}\n\n.dot10 {\n  left: 80px;\n  top: -20px;\n}\n\n.dot12 {\n  left: -40px;\n  top: -25px;\n}\n\n.dot9 {\n  left: 0px;\n  top: -50px;\n}\n\n.dot76 {\n  left: 10px;\n  top: -20px;\n}\n\n.dot11 {\n  left: 110px;\n  top: 0px;\n}\n\n.dot59 {\n  left: 110px;\n  top: 30px;\n}\n\n.dot14 {\n  left: 100px;\n  top: 10px;\n}\n\n.dot58 {\n  left: -20px;\n  top: 0px;\n}\n\n.dot13 {\n  left: 50px;\n  top: -10px;\n}\n\n.dot15 {\n  left: 70px;\n  top: 0px;\n}\n\n.dot57 {\n  left: 30px;\n  top: 15px;\n}\n\n.dot17 {\n  left: 80px;\n  top: 10px;\n}\n\n.dot19 {\n  left: 95px;\n  top: 30px;\n}\n\n.dot23 {\n  left: 130px;\n  top: 45px;\n}\n\n.dot61 {\n  left: 75px;\n  top: 20px;\n}\n\n.dot28 {\n  left: 100px;\n  top: 40px;\n}\n\n.dot18 {\n  left: -35px;\n  top: 0px;\n}\n\n.dot16 {\n  left: 0px;\n  top: 20px;\n}\n\n.dot20 {\n  left: -30px;\n  top: 10px;\n}\n\n.dot24 {\n  left: -30px;\n  top: 30px;\n}\n\n.dot21 {\n  left: 50px;\n  top: 10px;\n}\n\n.dot65 {\n  left: 30px;\n  top: 30px;\n}\n\n.dot60 {\n  left: -15px;\n  top: 20px;\n}\n\n.dot25 {\n  left: -5px;\n  top: 40px;\n}\n\n.dot30 {\n  left: 20px;\n  top: 40px;\n}\n\n.dot32 {\n  left: 0px;\n  top: 60px;\n}\n\n.dot78 {\n  left: -35px;\n  top: 170px;\n}\n\n.dot50 {\n  left: 120px;\n  top: 180px;\n}\n\n.dot79 {\n  left: 60px;\n  top: 170px;\n}\n\n.dot69 {\n  left: 100px;\n  top: 135px;\n}\n\n.dot68 {\n  left: 110px;\n  top: 100px;\n}\n\n.dot47 {\n  left: 0px;\n  top: 175px;\n}\n\n.dot71 {\n  left: 20px;\n  top: 160px;\n}\n\n.dot83 {\n  left: 100px;\n  top: 170px;\n}\n\n.dot45 {\n  left: 10px;\n  top: 160px;\n}\n\n.dot67 {\n  left: 40px;\n  top: 140px;\n}\n\n.dot49 {\n  left: 45px;\n  top: 190px;\n}\n\n.dot48 {\n  left: 20px;\n  top: 180px;\n}\n\n.dot46 {\n  left: 100px;\n  top: 120px;\n}\n\n.dot70 {\n  left: 80px;\n  top: 145px;\n}\n\n.dot75 {\n  left: -20px;\n  top: 140px;\n}\n\n.dot82 {\n  left: 60px;\n  top: 160px;\n}\n\n.dot43 {\n  left: 50px;\n  top: 170px;\n}\n\n.dot44 {\n  left: 60px;\n  top: 130px;\n}\n\n.dot77 {\n  left: 110px;\n  top: 70px;\n}\n\n.dot42 {\n  left: 90px;\n  top: 110px;\n}\n\n.dot81 {\n  left: 90px;\n  top: 140px;\n}\n\n.dot62 {\n  left: 100px;\n  top: 55px;\n}\n\n.dot31 {\n  left: 85px;\n  top: 80px;\n}\n\n.dot33 {\n  left: -30px;\n  top: 130px;\n}\n\n.dot80 {\n  left: 70px;\n  top: 120px;\n}\n\n.dot39 {\n  left: 30px;\n  top: 115px;\n}\n\n.dot63 {\n  left: -30px;\n  top: 55px;\n}\n\n.dot41 {\n  left: 50px;\n  top: 110px;\n}\n\n.dot40 {\n  left: 40px;\n  top: 120px;\n}\n\n.dot66 {\n  left: 70px;\n  top: 95px;\n}\n\n.dot37 {\n  left: 10px;\n  top: 130px;\n}\n\n.dot51 {\n  left: -5px;\n  top: 105px;\n}\n\n.dot29 {\n  left: -15px;\n  top: 90px;\n}\n\n.dot38 {\n  left: 10px;\n  top: 90px;\n}\n\n.dot35 {\n  left: 50px;\n  top: 90px;\n}\n\n.dot64 {\n  left: 80px;\n  top: 45px;\n}\n\n.dot34 {\n  left: 70px;\n  top: 70px;\n}\n\n.dot36 {\n  left: 65px;\n  top: 80px;\n}\n\n.dot74 {\n  left: 30px;\n  top: 70px;\n}\n\n.dot26 {\n  left: 45px;\n  top: 60px;\n}\n\n.dot22 {\n  left: 60px;\n  top: 35px;\n}\n\n.dot27 {\n  left: 50px;\n  top: 70px;\n}\n\n.card:hover {\n  transform: scale(1.1);\n}\n\n.card:hover .text {\n  opacity: 1;\n}\n\n.card:hover .dot1 {\n  left: 0px;\n  top: 0px;\n}\n\n.card:hover .dot2 {\n  left: 90px;\n  top: 0px;\n}\n\n.card:hover .dot3 {\n  left: 5px;\n  top: 5px;\n}\n\n.card:hover .dot4 {\n  left: 45px;\n  top: 5px;\n}\n\n.card:hover .dot5 {\n  left: 85px;\n  top: 5px;\n}\n\n.card:hover .dot6 {\n  left: 15px;\n  top: 10px;\n}\n\n.card:hover .dot7 {\n  left: 75px;\n  top: 10px;\n}\n\n.card:hover .dot8 {\n  left: 55px;\n  top: 15px;\n}\n\n.card:hover .dot9 {\n  left: 15px;\n  top: 20px;\n}\n\n.card:hover .dot10 {\n  left: 60px;\n  top: 20px;\n}\n\n.card:hover .dot11 {\n  left: 90px;\n  top: 20px;\n}\n\n.card:hover .dot12 {\n  left: 0px;\n  top: 25px;\n}\n\n.card:hover .dot13 {\n  left: 75px;\n  top: 25px;\n}\n\n.card:hover .dot14 {\n  left: 85px;\n  top: 25px;\n}\n\n.card:hover .dot15 {\n  left: 80px;\n  top: 30px;\n}\n\n.card:hover .dot16 {\n  left: 15px;\n  top: 35px;\n}\n\n.card:hover .dot17 {\n  left: 75px;\n  top: 35px;\n}\n\n.card:hover .dot18 {\n  left: 0px;\n  top: 40px;\n}\n\n.card:hover .dot19 {\n  left: 85px;\n  top: 40px;\n}\n\n.card:hover .dot20 {\n  left: 5px;\n  top: 45px;\n}\n\n.card:hover .dot21 {\n  left: 50px;\n  top: 45px;\n}\n\n.card:hover .dot22 {\n  left: 60px;\n  top: 45px;\n}\n\n.card:hover .dot23 {\n  left: 90px;\n  top: 45px;\n}\n\n.card:hover .dot24 {\n  left: 0px;\n  top: 50px;\n}\n\n.card:hover .dot25 {\n  left: 15px;\n  top: 50px;\n}\n\n.card:hover .dot26 {\n  left: 45px;\n  top: 50px;\n}\n\n.card:hover .dot27 {\n  left: 55px;\n  top: 50px;\n}\n\n.card:hover .dot28 {\n  left: 80px;\n  top: 50px;\n}\n\n.card:hover .dot29 {\n  left: 10px;\n  top: 55px;\n}\n\n.card:hover .dot30 {\n  left: 20px;\n  top: 55px;\n}\n\n.card:hover .dot31 {\n  left: 75px;\n  top: 55px;\n}\n\n.card:hover .dot32 {\n  left: 25px;\n  top: 60px;\n}\n\n.card:hover .dot33 {\n  left: 5px;\n  top: 65px;\n}\n\n.card:hover .dot34 {\n  left: 55px;\n  top: 65px;\n}\n\n.card:hover .dot35 {\n  left: 30px;\n  top: 70px;\n}\n\n.card:hover .dot36 {\n  left: 50px;\n  top: 70px;\n}\n\n.card:hover .dot37 {\n  left: 25px;\n  top: 75px;\n}\n\n.card:hover .dot38 {\n  left: 35px;\n  top: 75px;\n}\n\n.card:hover .dot39 {\n  left: 30px;\n  top: 90px;\n}\n\n.card:hover .dot40 {\n  left: 40px;\n  top: 90px;\n}\n\n.card:hover .dot41 {\n  left: 50px;\n  top: 90px;\n}\n\n.card:hover .dot42 {\n  left: 80px;\n  top: 90px;\n}\n\n.card:hover .dot43 {\n  left: 35px;\n  top: 95px;\n}\n\n.card:hover .dot44 {\n  left: 55px;\n  top: 95px;\n}\n\n.card:hover .dot45 {\n  left: 25px;\n  top: 100px;\n}\n\n.card:hover .dot46 {\n  left: 50px;\n  top: 100px;\n}\n\n.card:hover .dot47 {\n  left: 20px;\n  top: 105px;\n}\n\n.card:hover .dot48 {\n  left: 45px;\n  top: 105px;\n}\n\n.card:hover .dot49 {\n  left: 55px;\n  top: 105px;\n}\n\n.card:hover .dot50 {\n  left: 90px;\n  top: 105px;\n}\n\n.card:hover .dot51 {\n  left: 15px;\n  top: 60px;\n}\n\n.card:hover .dot52 {\n  left: 10px;\n  top: 0px;\n}\n\n.card:hover .dot53 {\n  left: 75px;\n  top: 0px;\n}\n\n.card:hover .dot54 {\n  left: 85px;\n  top: 10px;\n}\n\n.card:hover .dot55 {\n  left: 45px;\n  top: 15px;\n}\n\n.card:hover .dot56 {\n  left: 75px;\n  top: 15px;\n}\n\n.card:hover .dot57 {\n  left: 10px;\n  top: 25px;\n}\n\n.card:hover .dot58 {\n  left: 0px;\n  top: 30px;\n}\n\n.card:hover .dot59 {\n  left: 85px;\n  top: 30px;\n}\n\n.card:hover .dot60 {\n  left: 10px;\n  top: 40px;\n}\n\n.card:hover .dot61 {\n  left: 75px;\n  top: 40px;\n}\n\n.card:hover .dot62 {\n  left: 85px;\n  top: 50px;\n}\n\n.card:hover .dot63 {\n  left: 0px;\n  top: 55px;\n}\n\n.card:hover .dot64 {\n  left: 55px;\n  top: 55px;\n}\n\n.card:hover .dot65 {\n  left: 30px;\n  top: 60px;\n}\n\n.card:hover .dot66 {\n  left: 40px;\n  top: 70px;\n}\n\n.card:hover .dot67 {\n  left: 20px;\n  top: 90px;\n}\n\n.card:hover .dot68 {\n  left: 85px;\n  top: 90px;\n}\n\n.card:hover .dot69 {\n  left: 80px;\n  top: 100px;\n}\n\n.card:hover .dot70 {\n  left: 40px;\n  top: 95px;\n}\n\n.card:hover .dot71 {\n  left: 30px;\n  top: 100px;\n}\n\n.card:hover .dot72 {\n  left: 50px;\n  top: 0px;\n}\n\n.card:hover .dot73 {\n  left: 0px;\n  top: 10px;\n}\n\n.card:hover .dot74 {\n  left: 40px;\n  top: 55px;\n}\n\n.card:hover .dot75 {\n  left: 10px;\n  top: 65px;\n}\n\n.card:hover .dot76 {\n  left: 45px;\n  top: 25px;\n}\n\n.card:hover .dot77 {\n  left: 75px;\n  top: 60px;\n}\n\n.card:hover .dot78 {\n  left: 0px;\n  top: 90px;\n}\n\n.card:hover .dot79 {\n  left: 60px;\n  top: 95px;\n}\n\n.card:hover .dot80 {\n  left: 60px;\n  top: 90px;\n}\n\n.card:hover .dot81 {\n  left: 70px;\n  top: 90px;\n}\n\n.card:hover .dot82 {\n  left: 75px;\n  top: 95px;\n}\n\n.card:hover .dot83 {\n  left: 75px;\n  top: 105px;\n}\n\n.size-20 {\n  display: grid;\n  place-content: center;\n  border: 1px solid rgb(255, 255, 255);\n}\n\n.size-20::before {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  border-radius: inherit;\n  background: black;\n  opacity: 0;\n  transition: all 0.2s ease-in-out;\n}\n\n.size-20 .svg {\n  fill: rgba(255, 255, 255, 0);\n  height: 10px;\n  width: 10px;\n  transition: all 0.2s ease-in-out;\n}\n\n.size-20:hover {\n  transform: scale(1.5);\n  border: none;\n}\n\n.size-20:hover::before {\n  opacity: 1;\n}\n\n.size-20:hover .svg {\n  fill: white;\n  z-index: 99;\n}\n\n.text {\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 10px;\n  letter-spacing: 5px;\n  color: white;\n  opacity: 0;\n  transition: all 1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n}"
  },
  {
    "id": "uiverse-javierrocadev_wonderful-bobcat-57",
    "title": "Wonderful Bobcat",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "Javierrocadev",
      "profileUrl": "https://uiverse.io/Javierrocadev/wonderful-bobcat-57"
    },
    "license": "MIT",
    "description": "Wonderful Bobcat · card by Javierrocadev",
    "tags": [
      "card",
      "star",
      "rotate",
      "hover effect",
      "trophy",
      "winner",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div class=\"container\">\n   <svg class=\"svg-icon\" height=\"100\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 100 100\" width=\"100\" x=\"0\" xmlns=\"http://www.w3.org/2000/svg\" y=\"0\">\n    <path d=\"M62.11,53.93c22.582-3.125,22.304-23.471,18.152-29.929-4.166-6.444-10.36-2.153-10.36-2.153v-4.166H30.099v4.166s-6.194-4.291-10.36,2.153c-4.152,6.458-4.43,26.804,18.152,29.929l5.236,7.777v8.249s-.944,4.597-4.833,4.986c-3.903,.389-7.791,4.028-7.791,7.374h38.997c0-3.347-3.889-6.986-7.791-7.374-3.889-.389-4.833-4.986-4.833-4.986v-8.249l5.236-7.777Zm7.388-24.818s2.833-3.097,5.111-1.347c2.292,1.75,2.292,15.86-8.999,18.138l3.889-16.791Zm-44.108-1.347c2.278-1.75,5.111,1.347,5.111,1.347l3.889,16.791c-11.291-2.278-11.291-16.388-8.999-18.138Z\">\n    </path>\n  </svg>  \n  <div class=\"container__star\">\n     \n    <div class=\"star-eight\"></div>\n  </div>\n  \n<div></div></div>",
    "css": "/* From Uiverse.io by Javierrocadev - Tags: card, star, rotate, hover effect, trophy, winner */\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 5em;\n  font-weight: 900;\n  color: #e10600;\n  position: relative;\n  transition: all 1s ease;\n  text-align: center;\n}\n\n.container__star {\n  transition: all .7s ease-in-out;\n}\n\n.first {\n  position: absolute;\n  top: 20px;\n  left: 50px;\n  transition: all .7s ease-in-out;\n}\n\n.svg-icon {\n  position: absolute;\n  fill: #e94822;\n  z-index: 1;\n}\n\n.star-eight {\n  background: #efd510;\n  width: 150px;\n  height: 150px;\n  position: relative;\n  text-align: center;\n  animation: rot 3s  infinite;\n}\n\n.star-eight::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 150px;\n  width: 150px;\n  background: #efd510;\n  transform: rotate(135deg);\n}\n\n.container:hover .container__star {\n  transform: rotateX(70deg) translateY(250px);\n  box-shadow: 0px 0px 120px -100px #e4e727;\n}\n\n.container:hover .svg-icon {\n  animation: grow 1s linear infinite;\n}\n\n@keyframes rot {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  50% {\n    transform: rotate(340deg);\n  }\n\n  100% {\n    transform: rotate(0deg);\n  }\n}\n\n@keyframes grow {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  25% {\n    transform: rotate(-5deg);\n  }\n\n  75% {\n    transform: rotate(5deg);\n  }\n\n  100% {\n    transform: scale(1) rotate(0deg);\n  }\n}"
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
    "id": "uiverse-absolutestrange_cowardly-sloth-96",
    "title": "Cowardly Sloth",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "absoluteSTrange",
      "profileUrl": "https://uiverse.io/absoluteSTrange/cowardly-sloth-96"
    },
    "license": "MIT",
    "description": "Cowardly Sloth · card by absoluteSTrange",
    "tags": [
      "card",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<div class=\"card shadow\">\n</div>",
    "css": "/* From Uiverse.io by absoluteSTrange - Tags: card */\n.card {\n width: 190px;\n height: 254px;\n background: white;\n border-radius: 10px;\n transition: border-radius 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.shadow {\n box-shadow: inset 0 -3em 3em rgba(0,0,0,0.1),\n             0 0  0 2px rgb(190, 190, 190),\n             0.3em 0.3em 1em rgba(0,0,0,0.3);\n}"
  },
  {
    "id": "uiverse-stealthworm_curvy-gecko-61",
    "title": "Curvy Gecko",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "StealthWorm",
      "profileUrl": "https://uiverse.io/StealthWorm/curvy-gecko-61"
    },
    "license": "MIT",
    "description": "Curvy Gecko · card by StealthWorm",
    "tags": [
      "card",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<div class=\"card-border\">\n  <div class=\"card-bg\"> \n    <div class=\"container-logo\">\n      <div class=\"logo\"></div>\n        <div class=\"logo-inside\">\n          <div class=\"first\"></div>\n          <div class=\"second\"></div>\n        </div>\n    </div>\n    <div id=\"blur-area\"></div>\n    <div class=\"marquee\">\n      <div class=\"marquee__inner\" aria-hidden=\"true\">\n        <span class=\"viper\">viper viper viper viper</span>\n        <span class=\"viper\">viper viper viper viper</span>\n        <span class=\"viper\">viper viper viper viper</span>\n      </div>\n    </div>\n    \n  </div>\n\t<div class=\"mist-container\">\n\t\t<div class=\"mist\"></div>\n\t</div>\n\t<strong id=\"text-ext\">Lorem ipsum</strong>\n\t<strong id=\"text-border\">Lorem ipsum</strong>\n</div>",
    "css": "/* From Uiverse.io by StealthWorm - Tags: card */\n.card-border {\n  z-index: 0;\n  position: relative;\n  padding: 1rem;\n  width: 300px;\n  height: 350px;\n  box-sizing: border-box;\n  background: transparent;\n  backdrop-filter: blur(40px);\n  border-radius: 0px 2rem;\n  background-image: radial-gradient(#2121218a, #212121cc), linear-gradient(35deg,#124926 62%,#57ff94 100%);\n  background-origin: border-box;\n  background-clip: content-box, border-box;\n  box-shadow: 1px 1px 3rem #57ff95;\n  transition: all 0.5s;\n  animation: pulse_3011 3s infinite;\n}\n\n.card-bg {\n  position: relative;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  border-radius: 0px 0.8rem;\n  background: linear-gradient(346.80deg, #124926 30%, #165c30 30%, rgba(255, 70, 84, 0) 30%, rgba(255, 70, 84, 0) 32%, #124926 32%, #124926  35%, transparent 35%);\n}\n\nstrong {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  text-transform: uppercase;\n  font-family: 'Open Sans Pro', sans-serif;\n  font-size: 1.6rem;\n  font-weight: 900;\n  align-items: center;\n  letter-spacing: 0.5rem;\n}\n\n#text-border {\n  position: absolute;\n  top: 15.35rem;\n  left: 1.5rem;\n  width: 100%;\n  height: fit-content;\n  color: transparent;\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: rgb(255, 255, 255);\n  background: linear-gradient(90deg,  transparent 100%, #ffffff  65%);\n  background-size: cover;\n  background-clip: text;\n  -webkit-background-clip: text;\n}\n\n#text-ext {\n  z-index: -1;\n  display: flex;\n  position: absolute;\n  inset: 1rem;\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: #ffffff;\n  background: linear-gradient(346.80deg, rgb(255, 255, 255)  30%, #ffffff 30%, #ffffff 30%, rgb(255, 255, 255)  32%, rgb(255, 255, 255)  32%, rgb(255, 255, 255) 35%);\n  background-size: cover;\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  padding: 9rem 0 0 0.5rem;\n}\n\n.marquee {\n  top: 0;\n  z-index: -5;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n  --offset: 2rem;\n  --move-initial: calc(-20% + var(--offset));\n  --move-final: calc(-85% + var(--offset));\n  border-radius: 0px 1rem;\n  filter: opacity(0.3);\n}\n\n.marquee__inner {\n  width: fit-content;\n  display: flex;\n  position: relative;\n  transform: translate3d(var(--move-initial), 0, 0);\n  animation: slide 60s linear infinite;\n  border-radius: 0px 1rem;\n}\n\n.marquee__inner {\n  animation-play-state: running;\n}\n\n#blur-area {\n  display: block;\n  position: absolute;\n  z-index: -1;\n  inset: 0;\n  /* border: 1px solid rgb(12, 255, 65); */\n  border-radius: 0 1rem;\n  backdrop-filter: blur(3px);\n  background: linear-gradient(90deg, transparent  0%, #00000044 100%);\n}\n\n.viper {\n  display: flex;\n  text-transform: uppercase;\n  font-family: 'Open Sans Pro', sans-serif;\n  font-size: 8rem;\n  font-weight: 900;\n  align-items: center;\n  line-height: 0.9em;\n  color: transparent;\n  -webkit-text-stroke-width: 2px;\n  -webkit-text-stroke-color: rgb(255, 255, 255);\n}\n\n.container-logo {\n  display: flex;\n  position: absolute;\n  width: 3.5rem;\n  height: 3em;\n  top: 1rem;\n  left: 1rem;\n  align-items: center;\n  justify-content: center;\n  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);\n}\n\n.logo {\n  position: absolute;\n  width: 200%;\n  height: 200%;\n  background: conic-gradient(#228647 0%, #fff 10%, #7bffac 25%, #0d381c 50%, #1ccc5d 70%, #69b384 90%);\n  animation: spin 5s linear infinite;\n}\n\n.logo-inside {\n  display: flex;\n  width: 85%;\n  height: 85%;\n  align-items: center;\n  justify-content: center;\n  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);\n  background-color: #212121;\n}\n\n.first, .second {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  background-color: #57ff95;\n}\n\n.first {\n  clip-path: polygon(0 10%, 70% 90%, 35% 90%, 0 50%);\n}\n\n.second {\n  clip-path: polygon(100% 10%, 100% 50%, 88% 65%, 55% 65%);\n}\n\n.mist-container {\n  position: absolute;\n  width: 450px;\n  height: 150px;\n  overflow: hidden;\n  filter: blur(1rem);\n  top: 60%;\n  left: 0;\n}\n\n.mist {\n  width: 100%;\n  height: 100%;\n  background: radial-gradient(circle, rgba(131, 255, 158, 0.63) 10%, rgba(255, 255, 255, 0) 50%);\n  animation: mist 10s infinite both;\n}\n\nsvg {\n  position: absolute;\n  top: 0%;\n  width: 18rem;\n  height: 100%;\n  z-index: -2;\n}\n\n.card-border:hover {\n  transform: rotateY(20deg);\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes mist {\n  0% {\n    transform: translateX(-50%) translateY(0%) scaleY(0.7) rotate(0deg);\n    opacity: 0.3;\n  }\n\n  50% {\n    transform: translateX(0%) translateY(50%) scaleY(-10.3) rotate(20deg);\n    opacity: 0.5;\n  }\n\n  100% {\n    transform: translateX(-50%) translateY(0%) scaleY(0.7) rotate(-20deg);\n    opacity: 0.3;\n  }\n}\n\n@keyframes pulse_3011 {\n  0% {\n    box-shadow: 0 0 1rem #57ff95;\n  }\n\n  70% {\n    box-shadow: 0 0 2rem #57ff95;\n  }\n\n  100% {\n    box-shadow: 0 0 1rem #57ff95;\n  }\n}\n\n@keyframes slide {\n  0% {\n    transform: translate3d(var(--move-initial), 0, 0);\n  }\n\n  100% {\n    transform: translate3d(var(--move-final), 0, 0);\n  }\n}"
  },
  {
    "id": "uiverse-gharsh11032000_tricky-cheetah-78",
    "title": "Tricky Cheetah",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "gharsh11032000",
      "profileUrl": "https://uiverse.io/gharsh11032000/tricky-cheetah-78"
    },
    "license": "MIT",
    "description": "Tricky Cheetah · card by gharsh11032000",
    "tags": [
      "card",
      "gradient",
      "hover",
      "hover effect",
      "cardhover"
    ],
    "previewType": "css",
    "durationMs": 600,
    "accentColor": null,
    "html": "<div class=\"card\">\n  <svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z\"></path></svg>\n  <div class=\"card__content\">\n    <p class=\"card__title\">Card Title\n    </p><p class=\"card__description\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by gharsh11032000 - Tags: gradient, card, hover, hover effect, cardhover  */\n.card {\n  position: relative;\n  width: 300px;\n  height: 200px;\n  background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100% );\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);\n}\n\n.card svg {\n  width: 48px;\n  fill: #333;\n  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);\n}\n\n.card:hover {\n  transform: rotate(-5deg) scale(1.1);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n}\n\n.card__content {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) rotate(-45deg);\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n  background-color: #fff;\n  opacity: 0;\n  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);\n}\n\n.card:hover .card__content {\n  transform: translate(-50%, -50%) rotate(0deg);\n  opacity: 1;\n}\n\n.card__title {\n  margin: 0;\n  font-size: 24px;\n  color: #333;\n  font-weight: 700;\n}\n\n.card__description {\n  margin: 10px 0 0;\n  font-size: 14px;\n  color: #777;\n  line-height: 1.4;\n}\n\n.card:hover svg {\n  scale: 0;\n  transform: rotate(-45deg);\n}"
  },
  {
    "id": "uiverse-frm-bot_soft-rabbit-4",
    "title": "Soft Rabbit",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "FrM-bot",
      "profileUrl": "https://uiverse.io/FrM-bot/soft-rabbit-4"
    },
    "license": "MIT",
    "description": "Soft Rabbit · card by FrM-bot",
    "tags": [
      "card",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"card\">\n    <div class=\"img-container\">\n        <div class=\"img\">\n        </div>\n        <div class=\"description card\">\n            <span class=\"title\">\n                Card\n            </span>\n        </div>\n    </div>\n</div>",
    "css": "/* From Uiverse.io by FrM-bot - Tags: card */\n/* From uiverse.io by @FrM-bot */\n.card {\n  width: 200px;\n  height: min-content;\n  transition: all .3s;\n  position: relative;\n  border-radius: .5rem 2rem;\n  box-shadow: 0px 15px 20px -5px rgba(0, 0, 0, 0.5);\n}\n\n.card:hover {\n  transform: scale(1.03);\n}\n\n.img {\n  transition: all .3s;\n  background: #ff0084;\n  background: -webkit-linear-gradient(to right, #33001b, #ff0084);\n  background: linear-gradient(to right, #33001b, #ff0084);\n  width: 100%;\n}\n\n.img:hover {\n  transform: scale(1.3);\n}\n\n.img-container {\n  display: grid;\n  border-radius: .5rem 2rem;\n  height: 270px;\n  overflow: hidden;\n}\n\n.description {\n  position: absolute;\n  bottom: .5rem;\n  left: .5rem;\n  text-align: start;\n  padding: .5rem 1em;\n  width: 90%;\n  transition: all 0.5s ease;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  backdrop-filter: blur(.1rem);\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: .5rem 2rem;\n}\n\n.description:hover {\n  transform: perspective(100px) translateX(7px) rotateX(3deg) rotateY(3deg) scale(1);\n  box-shadow: none;\n}\n\n.title {\n  color: aliceblue;\n}"
  },
  {
    "id": "uiverse-lmickk2_wonderful-robin-20",
    "title": "Wonderful Robin",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "Lmickk2",
      "profileUrl": "https://uiverse.io/Lmickk2/wonderful-robin-20"
    },
    "license": "MIT",
    "description": "Wonderful Robin · card by Lmickk2",
    "tags": [
      "card",
      "space",
      "creative",
      "inset",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 400,
    "accentColor": null,
    "html": "<div class=\"card\">\n    <div class=\"heading\">Join the Open-Source <span>Galaxy</span></div>\n    <div class=\"content\">\n        <div class=\"item item--create\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\">\n                <path fill=\"currentColor\" d=\"M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z\"></path>\n            </svg>\n            <span>Create</span>\n        </div>\n        <div class=\"item item--post\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\">\n                <path fill=\"currentColor\" d=\"M4.99958 12.9998C4.99958 7.91186 7.90222 3.56348 11.9996 1.81787C16.0969 3.56348 18.9996 7.91186 18.9996 12.9998C18.9996 13.8227 18.9236 14.6263 18.779 15.4026L20.7194 17.2352C20.8845 17.3911 20.9238 17.6388 20.815 17.8381L18.3196 22.4132C18.1873 22.6556 17.8836 22.7449 17.6412 22.6127C17.5993 22.5898 17.5608 22.5611 17.5271 22.5273L15.2925 20.2927C15.1049 20.1052 14.8506 19.9998 14.5854 19.9998H9.41379C9.14857 19.9998 8.89422 20.1052 8.70668 20.2927L6.47209 22.5273C6.27683 22.7226 5.96025 22.7226 5.76498 22.5273C5.73122 22.4935 5.70246 22.4551 5.67959 22.4132L3.18412 17.8381C3.07537 17.6388 3.11464 17.3911 3.27975 17.2352L5.22014 15.4026C5.07551 14.6263 4.99958 13.8227 4.99958 12.9998ZM6.47542 19.6955L7.29247 18.8785C7.85508 18.3159 8.61814 17.9998 9.41379 17.9998H14.5854C15.381 17.9998 16.1441 18.3159 16.7067 18.8785L17.5237 19.6955L18.5056 17.8954L17.4058 16.8566C16.9117 16.39 16.6884 15.7044 16.8128 15.0363C16.9366 14.3721 16.9996 13.691 16.9996 12.9998C16.9996 9.13025 15.0045 5.69953 11.9996 4.04021C8.99462 5.69953 6.99958 9.13025 6.99958 12.9998C6.99958 13.691 7.06255 14.3721 7.18631 15.0363C7.31078 15.7044 7.08746 16.39 6.59338 16.8566L5.49353 17.8954L6.47542 19.6955ZM11.9996 12.9998C10.895 12.9998 9.99958 12.1044 9.99958 10.9998C9.99958 9.89525 10.895 8.99982 11.9996 8.99982C13.1041 8.99982 13.9996 9.89525 13.9996 10.9998C13.9996 12.1044 13.1041 12.9998 11.9996 12.9998Z\"></path>\n            </svg>\n            <span>Post</span>\n        </div>\n        <div class=\"item item--inspire\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\">\n                <path fill=\"currentColor\" d=\"M10.6144 17.7956C10.277 18.5682 9.20776 18.5682 8.8704 17.7956L7.99275 15.7854C7.21171 13.9966 5.80589 12.5726 4.0523 11.7942L1.63658 10.7219C.868536 10.381.868537 9.26368 1.63658 8.92276L3.97685 7.88394C5.77553 7.08552 7.20657 5.60881 7.97427 3.75892L8.8633 1.61673C9.19319.821767 10.2916.821765 10.6215 1.61673L11.5105 3.75894C12.2782 5.60881 13.7092 7.08552 15.5079 7.88394L17.8482 8.92276C18.6162 9.26368 18.6162 10.381 17.8482 10.7219L15.4325 11.7942C13.6789 12.5726 12.2731 13.9966 11.492 15.7854L10.6144 17.7956ZM4.53956 9.82234C6.8254 10.837 8.68402 12.5048 9.74238 14.7996 10.8008 12.5048 12.6594 10.837 14.9452 9.82234 12.6321 8.79557 10.7676 7.04647 9.74239 4.71088 8.71719 7.04648 6.85267 8.79557 4.53956 9.82234ZM19.4014 22.6899 19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899ZM18.3745 19.0469 18.937 18.4883 19.4878 19.0469 18.937 19.5898 18.3745 19.0469Z\"></path>\n            </svg>\n            <span>Inspire</span>\n        </div>\n    </div>\n    <button>Code to Infinity!</button>\n</div>",
    "css": "/* From Uiverse.io by Lmickk2 - Tags: card, space, creative, inset */\n.card {\n  border-radius: 1em;\n  padding: 2em;\n  color: white;\n  box-shadow: inset 3px 3px 10px black;\n}\n\n.heading {\n  font-weight: bold;\n}\n\n.item {\n  margin-top: 1em;\n  text-align: center;\n}\n\n.item span {\n  display: block;\n}\n\n.item--create svg:hover {\n  filter: drop-shadow(0px 0px 3px #ffffff);\n  font-weight: bold;\n}\n\n.item--post svg:hover {\n  filter: drop-shadow(0px 0px 3px #ff09f3);\n}\n\n.item--inspire svg:hover {\n  filter: drop-shadow(0px 0px 3px #efff0a);\n}\n\nbutton {\n  margin: auto;\n  display: block;\n  margin-top: 2em;\n  padding: 0.8em;\n  border-radius: 0.5em;\n  border: none;\n  background: transparent;\n  box-shadow: inset 2px 2px 5px black;\n  color: white;\n  transition: background 0.4s;\n  font-weight: 600;\n}\n\nbutton:hover {\n  animation: bg-change 5s infinite;\n  box-shadow: inset 3px 3px 4px black;\n  background: linear-gradient(0deg, rgb(97, 4, 55), rgb(148, 31, 128), rgb(40, 10, 88));\n  background-size: 400% 400%;\n}\n\n@keyframes bg-change {\n  0% {\n    background-position: 50% 0%\n  }\n\n  50% {\n    background-position: 50% 100%\n  }\n\n  100% {\n    background-position: 50% 0%\n  }\n}"
  },
  {
    "id": "uiverse-javierrocadev_great-swan-88",
    "title": "Great Swan",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "Javierrocadev",
      "profileUrl": "https://uiverse.io/Javierrocadev/great-swan-88"
    },
    "license": "MIT",
    "description": "Great Swan · card by Javierrocadev",
    "tags": [
      "card",
      "green",
      "black",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 3000,
    "accentColor": null,
    "html": "<div class=\"container\">\n  <div class=\"data\">\n    <p>34° 36' 30″ S; 58° 22' 16″ O</p>\n  </div>\n  <div class=\"card\">\n    <div class=\"circle\"></div>\n    <div class=\"dot\"></div>\n    <div class=\"dot2\"></div>\n  </div>\n</div>",
    "css": "/* From Uiverse.io by Javierrocadev - Tags: green, black, card */\n.container {\n  width: 280px;\n  height: 380px;\n  background-color: #151716;\n  border-radius: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  filter: hue-rotate(10deg);\n  color: #2fbb39;\n  gap: 20px;\n}\n\n.data {\n  margin-top: 25px;\n  border: 2px solid;\n  padding: 15px;\n  border-radius: 5px;\n  background: #000000;\n}\n\n.data::after {\n  background: #000000;\n  content: \"WIND - 54,3\";\n  position: absolute;\n  bottom: 5%;\n  right: 5%;\n  border: 2px solid;\n  padding: 3px;\n  border-radius: 5px;\n  font-size: .7em;\n}\n\n.data::before {\n  content: \"DEPT - 600\";\n  position: absolute;\n  bottom: 5%;\n  left: 5%;\n  border: 2px solid;\n  padding: 3px;\n  border-radius: 5px;\n  font-size: .7em;\n  background: #000000;\n}\n\n.card {\n  width: 200px;\n  height: 200px;\n  background: #000000;\n  border-radius: 50%;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid #18D322;\n  overflow: hidden;\n}\n\n.card::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  height: 200px;\n  left: 49%;\n  background-color: #18D322;\n  animation: rotate 3s linear infinite;\n  z-index: 6;\n}\n\n.card::before {\n  content: \"\";\n  position: absolute;\n  width: 0px;\n  height: 200px;\n  left: 49%;\n  transform: rotate(-4deg);\n  background-color: #18D322;\n  animation: rotate 3s linear infinite;\n  box-shadow: 0 0 10px 10px #2fbb39;\n  z-index: 6;\n}\n\n.circle {\n  width: 100px;\n  height: 100px;\n  border: 2px solid #18D322;\n  border-radius: 50%;\n}\n\n.circle::before {\n  content: \"\";\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%,-50%);\n  border: 2px solid #18D322;\n  border-radius: 50%;\n}\n\n.circle::after {\n  content: \"\";\n  position: absolute;\n  width: 150px;\n  height: 150px;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%,-50%);\n  border: 2px solid #18D322;\n  border-radius: 50%;\n}\n\n.dot {\n  width: 4px;\n  height: 4px;\n  top: 30%;\n  background-color: #18D322;\n  border-radius: 50%;\n  position: absolute;\n  animation: doted 1.5s  ease infinite;\n}\n\n.dot2 {\n  width: 4px;\n  height: 4px;\n  top: 80%;\n  right: 30%;\n  background-color: #18D322;\n  border-radius: 50%;\n  position: absolute;\n  animation: doted 1.5s  1.2s ease infinite;\n}\n\n@keyframes rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes doted {\n  0% {\n    transform: scale(0.95);\n    box-shadow: 0 0 10px 5px rgba(24, 211, 33, 0.3),0 0 10px 10px rgba(24, 211, 33, 0.3);\n  }\n\n  60% {\n    transform: scale(0.95);\n    box-shadow: 0 0 10px 5px rgba(24, 211, 33, 0.3),0 0 10px 10px rgba(24, 211, 33, 0.3);\n  }\n\n  100% {\n    transform: scale(1);\n    box-shadow: 0 0 0 0 rgba(24, 211, 33, 0.7),0 0 0 0 rgba(24, 211, 33, 0.5),0 0 0 0 rgba(24, 211, 33, 0.3);\n    opacity: 0;\n  }\n}"
  },
  {
    "id": "uiverse-yaya12085_rotten-dolphin-86",
    "title": "Rotten Dolphin",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "Yaya12085",
      "profileUrl": "https://uiverse.io/Yaya12085/rotten-dolphin-86"
    },
    "license": "MIT",
    "description": "Rotten Dolphin · card by Yaya12085",
    "tags": [
      "card",
      "list",
      "button",
      "price",
      "pack",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"card\">\n  <p class=\"price\">\n    $29\n  </p>\n  <a href=\"#\" class=\"action\">\n    Get started\n  </a>\n  <ul class=\"lists\">\n    <li class=\"list\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"><g stroke-width=\"0\" id=\"SVGRepo_bgCarrier\"></g><g stroke-linejoin=\"round\" stroke-linecap=\"round\" id=\"SVGRepo_tracerCarrier\"></g><g id=\"SVGRepo_iconCarrier\"> <path fill=\"#ffffff\" d=\"M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z\" clip-rule=\"evenodd\" fill-rule=\"evenodd\"></path> </g></svg>\n        <span> Connect 80 websites </span>\n    </li>\n    <li class=\"list\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"><g stroke-width=\"0\" id=\"SVGRepo_bgCarrier\"></g><g stroke-linejoin=\"round\" stroke-linecap=\"round\" id=\"SVGRepo_tracerCarrier\"></g><g id=\"SVGRepo_iconCarrier\"> <path fill=\"#ffffff\" d=\"M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z\" clip-rule=\"evenodd\" fill-rule=\"evenodd\"></path> </g></svg>\n      <span> Connect up to 5 bank accounts </span>\n    </li>\n    <li class=\"list\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"><g stroke-width=\"0\" id=\"SVGRepo_bgCarrier\"></g><g stroke-linejoin=\"round\" stroke-linecap=\"round\" id=\"SVGRepo_tracerCarrier\"></g><g id=\"SVGRepo_iconCarrier\"> <path fill=\"#ffffff\" d=\"M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z\" clip-rule=\"evenodd\" fill-rule=\"evenodd\"></path> </g></svg>\n      <span> Track up to 50 credit cards </span>\n    </li>\n    <li class=\"list\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"><g stroke-width=\"0\" id=\"SVGRepo_bgCarrier\"></g><g stroke-linejoin=\"round\" stroke-linecap=\"round\" id=\"SVGRepo_tracerCarrier\"></g><g id=\"SVGRepo_iconCarrier\"> <path fill=\"#ffffff\" d=\"M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z\" clip-rule=\"evenodd\" fill-rule=\"evenodd\"></path> </g></svg>\n      <span> Analytics support </span>\n    </li>\n    <li class=\"list\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"><g stroke-width=\"0\" id=\"SVGRepo_bgCarrier\"></g><g stroke-linejoin=\"round\" stroke-linecap=\"round\" id=\"SVGRepo_tracerCarrier\"></g><g id=\"SVGRepo_iconCarrier\"> <path fill=\"#ffffff\" d=\"M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z\" clip-rule=\"evenodd\" fill-rule=\"evenodd\"></path> </g></svg>\n      <span> Export up to 12 months data </span>\n    </li>\n    <li class=\"list\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"><g stroke-width=\"0\" id=\"SVGRepo_bgCarrier\"></g><g stroke-linejoin=\"round\" stroke-linecap=\"round\" id=\"SVGRepo_tracerCarrier\"></g><g id=\"SVGRepo_iconCarrier\"> <path fill=\"#ffffff\" d=\"M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z\" clip-rule=\"evenodd\" fill-rule=\"evenodd\"></path> </g></svg>\n      <span> Cloud service 24/7 </span>\n    </li>\n  </ul>\n</div>",
    "css": "/* From Uiverse.io by Yaya12085 - Tags: list, button, card, price, pack */\n.card {\n  max-width: 320px;\n  display: flex;\n  flex-direction: column;\n  border-radius: 1.5rem;\n  background-color: rgba(0, 0, 0, 1);\n  padding: 1.5rem;\n}\n\n.price {\n  font-size: 3rem;\n  line-height: 1;\n  font-weight: 300;\n  letter-spacing: -0.025em;\n  color: rgba(255, 255, 255, 1);\n}\n\n.lists {\n  margin-top: 2.5rem;\n  display: flex;\n  flex-direction: column;\n  grid-row-gap: 0.75rem;\n  row-gap: 0.75rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  color: rgba(255, 255, 255, 1);\n}\n\n.list {\n  display: flex;\n  align-items: center;\n}\n\n.list svg {\n  height: 1rem;\n  width: 1rem;\n}\n\n.list span {\n  margin-left: 1rem;\n}\n\n.action {\n  margin-top: 2rem;\n  width: 100%;\n  border: 2px solid  rgba(255, 255, 255, 1);\n  border-radius: 9999px;\n  background-color: rgba(255, 255, 255, 1);\n  padding: 0.625rem 1.5rem;\n  text-align: center;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  color: rgba(0, 0, 0, 1);\n  outline: none;\n  transition: all .2s ease;\n}\n\n.action:hover {\n  color: rgba(255, 255, 255, 1);\n  background-color: transparent;\n}"
  },
  {
    "id": "uiverse-joe-herbert_new-goose-94",
    "title": "New Goose",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "joe-herbert",
      "profileUrl": "https://uiverse.io/joe-herbert/new-goose-94"
    },
    "license": "MIT",
    "description": "New Goose · card by joe-herbert",
    "tags": [
      "card",
      "minimalist",
      "hover",
      "animated",
      "curtains"
    ],
    "previewType": "css",
    "durationMs": 600,
    "accentColor": null,
    "html": "<div class=\"card\">\n  <div class=\"child card-1\">1</div>\n  <div class=\"child card-2\">2</div>\n  <div class=\"child card-3\">3</div>\n</div>",
    "css": "/* From Uiverse.io by joe-herbert  - Tags: minimalist, card, hover, animated, curtains */\n/*Card design*/\n.card {\n  width: 200px;\n  height: 300px;\n  background: lightgray;\n  box-shadow: 0 4px 35px rgba(0, 0, 0, 0.2);\n  position: relative;\n  overflow: hidden;\n}\n\n.card > .child {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: clip-path 0.6s;\n  z-index: 1;\n}\n\n.card .card-1 {\n  clip-path: polygon(0% 0%, 75% 0%, 0% 75%);\n}\n\n.card .card-1:hover {\n  clip-path: polygon(0% 0%, 170% 0%, 0% 170%);\n}\n\n.card .card-1:has(~ .card-2:hover),\n.card .card-1:has(~ .card-3:hover) {\n  clip-path: polygon(0% 0%, 15% 0%, 0% 15%);\n}\n\n.card .card-2 {\n  z-index: 0;\n}\n\n.card .card-3 {\n  clip-path: polygon(25% 100%, 100% 25%, 100% 100%);\n}\n\n.card .card-3:hover {\n  clip-path: polygon(-70% 100%, 100% -70%, 100% 100%);\n}\n\n.card .card-1:hover ~ .card-3,\n.card .card-2:hover ~ .card-3 {\n  clip-path: polygon(85% 100%, 100% 85%, 100% 100%);\n}\n\n/*Optional styles*/\n.card {\n  font: 30px Arial, Helvetica, sans-serif;\n}\n\n.card > .child {\n  /*If using background image on card children*/\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  transition: all 0.6s;\n}\n\n.card .card-1 {\n  background-color: #23a;\n  color: white;\n  padding-top: 30%;\n  padding-left: 20%;\n}\n\n.card .card-1:hover {\n  padding-top: 65%;\n  padding-left: 48%;\n}\n\n.card .card-2 {\n  padding-top: 65%;\n  padding-left: 48%;\n  background-color: #f16;\n}\n\n.card .card-3 {\n  padding-top: 100%;\n  padding-left: 76%;\n  background-color: #dd2;\n}\n\n.card .card-3:hover {\n  padding-top: 65%;\n  padding-left: 48%;\n}"
  },
  {
    "id": "uiverse-mrhyddenn_massive-earwig-94",
    "title": "Massive Earwig",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "mrhyddenn",
      "profileUrl": "https://uiverse.io/mrhyddenn/massive-earwig-94"
    },
    "license": "MIT",
    "description": "Massive Earwig · card by mrhyddenn",
    "tags": [
      "card",
      "sub",
      "plan",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"container\">\n    <div class=\"card_box\">\n        <span></span>\n    </div>\n</div>",
    "css": "/* From Uiverse.io by mrhyddenn - Tags: card, sub, plan */\n.container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.card_box {\n  width: 200px;\n  height: 250px;\n  border-radius: 20px;\n  background: linear-gradient(170deg, rgba(58, 56, 56, 0.623) 0%, rgb(31, 31, 31) 100%);\n  position: relative;\n  box-shadow: 0 25px 50px rgba(0,0,0,0.55);\n  cursor: pointer;\n  transition: all .3s;\n}\n\n.card_box:hover {\n  transform: scale(0.9);\n}\n\n.card_box span {\n  position: absolute;\n  overflow: hidden;\n  width: 150px;\n  height: 150px;\n  top: -10px;\n  left: -10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.card_box span::before {\n  content: 'Premium';\n  position: absolute;\n  width: 150%;\n  height: 40px;\n  background-image: linear-gradient(45deg, #ff6547 0%, #ffb144  51%, #ff7053  100%);\n  transform: rotate(-45deg) translateY(-20px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  box-shadow: 0 5px 10px rgba(0,0,0,0.23);\n}\n\n.card_box span::after {\n  content: '';\n  position: absolute;\n  width: 10px;\n  bottom: 0;\n  left: 0;\n  height: 10px;\n  z-index: -1;\n  box-shadow: 140px -140px #cc3f47;\n  background-image: linear-gradient(45deg, #FF512F 0%, #F09819  51%, #FF512F  100%);\n}"
  },
  {
    "id": "uiverse-aboalsim114_quiet-hound-47",
    "title": "Quiet Hound",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "aboalsim114",
      "profileUrl": "https://uiverse.io/aboalsim114/quiet-hound-47"
    },
    "license": "MIT",
    "description": "Quiet Hound · card by aboalsim114",
    "tags": [
      "card",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<div class=\"card\">\n  <div class=\"cardD\"></div>\n\n<svg version=\"1.1\" viewBox=\"0 0 170.87 425.63\" id=\"svg2\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\">\n  \n  <g transform=\"translate(-253.99 -223.31)\" id=\"layer1\">\n    <path d=\"m299.68 647.25c-5.4033-1.0324-11.766-2.79-14.14-3.9057-2.3735-1.1157-5.5417-2.3363-7.0404-2.7124-1.4986-0.37614-4.9233-2.9056-7.6103-5.6211-4.1017-4.1451-4.8855-5.539-4.8855-8.6885 0-3.9121 4.3285-17.568 6.3404-20.004 0.6378-0.77204 0.9995-1.447 0.8037-1.5-0.9111-0.24659 2.4186-9.7691 5.7903-16.559 3.9772-8.0095 5.7222-13.638 9.0833-29.295 1.152-5.3667 3.4177-13.874 5.0349-18.906 2.445-7.6071 2.776-9.7588 1.9649-12.771-1.9788-7.3486-3.902-19.927-5.0938-33.315-0.6732-7.5625-1.5819-13.75-2.0193-13.75s-0.7301-2.2352-0.6504-4.9672c0.08-2.732-0.1698-5.282-0.5545-5.6667-0.3847-0.38471-0.6995-2.3735-0.6995-4.4195s-1.1269-7.4835-2.5042-12.083c-1.3774-4.5998-3.221-11.063-4.0969-14.363-0.876-3.3-1.9991-6.4275-2.4958-6.95s-0.9031-3.5744-0.9031-6.7821-0.675-7.4476-1.5-9.4221-1.5-5.055-1.5-6.8454c0-1.7905-0.675-3.8156-1.5-4.5003-0.825-0.68469-1.5-2.2597-1.5-3.5s-0.7063-2.8413-1.5695-3.5577c-0.8633-0.71642-1.3554-2.1215-1.0936-3.1224 0.2617-1.0009 0.1745-1.8199-0.1939-1.8199-1.3812 0-3.3619-10.871-3.8718-21.25-0.2904-5.9125-0.9203-10.75-1.3997-10.75-0.4793 0-0.8715-0.67119-0.8715-1.4915 0-0.82034-0.9-2.0536-2-2.7405-1.1-0.68696-2-1.7676-2-2.4015 0-0.63385-0.675-1.4115-1.5-1.7281-2.0156-0.77345-2.0156-13.112 0-16.638 1.0908-1.9081 1.4375-6.8069 1.4646-20.691 0.02-10.094 0.4494-18.447 0.9654-18.766 0.5115-0.31613 1.219-3.1552 1.5721-6.309 1.1935-10.658 3.8493-17.363 11.333-28.61 6.9154-10.394 25.505-28.003 32.167-30.472 1.9238-0.71293 5.7478-2.1401 8.4978-3.1715 7.6838-2.8818 19.89-4.2119 35.137-3.8287 10.729 0.26969 14.542 0.73305 16.863 2.0497 1.65 0.9357 6.15 2.6608 10 3.8336 10.733 3.2695 12.446 4.2054 21.781 11.898 9.4288 7.7707 13.662 13.133 19.483 24.68 0.5232 1.0379 1.7514 3.4096 2.7294 5.2706 3.5072 6.6733 6.475 21.839 7.1843 36.713 0.4365 9.1532 0.1636 12.569-1.5579 19.5-2.2566 9.0852-4.9708 26.616-7.6876 49.653-0.3405 2.8875-0.9911 5.25-1.4458 5.25s-1.1394 1.4625-1.5216 3.25-1.0362 3.7-1.4533 4.25-1.0669 3.1321-1.444 5.738-1.3301 5.3825-2.1178 6.1702c-1.0681 1.068-1.4161 4.07-1.3688 11.808 0.057 9.3217-0.9871 14.942-3.1177 16.784-3.4755 3.0048-4.3218 8-1.3554 8 1.0869 0 1.3861 1.9226 1.3617 8.75-0.026 7.2324-0.4578 9.6172-2.4908 13.75-1.3528 2.75-2.4637 5.4742-2.4688 6.0537-0.011 1.3166-4.9803 11.358-6.6401 13.419-0.6766 0.84009-2.3999 2.9584-3.8295 4.7072l-2.5992 3.1798-0.4333 23.091c-0.319 17.001-0.8086 23.943-1.8563 26.32-0.7826 1.7758-2.423 6.0251-3.6453 9.4427-2.005 5.6066-2.1029 6.7305-1.0013 11.5 0.6716 2.9074 1.8453 6.2828 2.6084 7.501s1.4034 3.2432 1.4229 4.5c0.019 1.2568 0.6786 3.4102 1.4646 4.7852s1.4451 3.8936 1.4646 5.597c0.019 1.7033 0.9354 4.1347 2.0354 5.403s2 2.9035 2 3.6337 1.8088 5.1349 4.0196 9.7882 3.9303 8.8245 3.8211 9.2694c-0.1092 0.44484 1.4884 4.2885 3.5502 8.5414 2.0617 4.2529 3.4227 8.2599 3.0244 8.9045-0.4526 0.73232-0.2912 0.90428 0.4302 0.45841 0.6702-0.41421 1.1545-0.10442 1.1545 0.7385 0 1.5543-2.4106 2.9221-3.4022 1.9304-0.3288-0.32877-0.5978-1.5183-0.5978-2.6433 0-1.7416-0.4397-1.5311-2.9594 1.4167-1.6276 1.9042-2.9776 3.1462-3 2.76-0.022-0.38624-1.2781 0.44656-2.7906 1.8507-4.035 3.7458-6.5876 4.8169-18.616 7.8108l-10.865 2.7046-32.635-0.43793c-31.382-0.42111-41.134-1.3259-41.134-3.8161 0-0.46584-0.6422-0.60054-1.4271-0.29934-2.369 0.90906-9.9977-3.093-14.961-7.8484-5.6561-5.4195-6.7639-4.7819-2.0474 1.1783 1.8894 2.3876 3.4352 3.9976 3.4352 3.5779 0-0.41975 0.67-0.20709 1.489 0.47257 0.8189 0.67967 1.1994 1.7043 0.8455 2.277-0.3763 0.60888-0.1586 0.74153 0.5243 0.31946 0.6423-0.39695 3.5827 0.38385 6.5342 1.7351 2.9516 1.3513 7.6706 2.7737 10.487 3.1611 2.8162 0.38732 5.1203 1.0394 5.1203 1.4491 0 1.0287 8.8417 1.4131 34 1.4779 23.337 0.0601 35.183-0.48485 36.058-1.659 0.3069-0.41166 3.2069-1.2382 6.4445-1.8366 7.4086-1.3696 20.632-7.9445 22.881-11.377 0.9375-1.4308 2.1348-2.3356 2.6606-2.0106 1.4481 0.89496 1.144 2.4728-0.4765 2.4728-0.788 0-1.7134 0.8845-2.0565 1.9656-0.3819 1.2033-3.6076 3.3724-8.3174 5.5929-17.247 8.1316-21.007 8.7678-53.694 9.0847-23.008 0.22303-28.453-0.0158-36.824-1.6154zm66.219-7.4465c3.5171-0.89401 6.6256-1.3944 6.908-1.112 0.2824 0.28239 1.0049 0.13717 1.6055-0.32271 0.6006-0.45989 3.342-1.4315 6.092-2.1592 5.7414-1.5192 12.101-5.5358 15.885-10.033 3.0214-3.5907 3.2524-5.5995 1.0119-8.7982-1.4777-2.1098-1.7319-2.1625-3.25-0.67459-3.532 3.4621-14.024 9.4018-17.738 10.042-2.1496 0.37038-6.1381 1.3072-8.8632 2.0819-2.7304 0.7762-6.434 1.131-8.25 0.79033-2.0633-0.38708-3.2952-0.21715-3.2952 0.45456 0 1.404-44.982 1.3662-46.706-0.0392-0.6634-0.54072-1.6461-0.71123-2.1838-0.37891-1.4124 0.87287-19.993-3.3268-23.037-5.207-1.4153-0.87415-3.8107-2.7166-5.3232-4.0943s-2.7662-2.0833-2.786-1.5679c-0.02 0.5154-1.0961-0.35925-2.3918-1.9437l-2.3559-2.8808-0.6876 3.1308c-0.3782 1.7219-1.1019 3.1308-1.6082 3.1308-2.5294 0-0.3055 4.0613 4.9232 8.9908 6.5315 6.1576 10.562 7.6814 29.326 11.085 13.434 2.437 52.401 2.1297 62.725-0.49469zm-6.8945-12.16c5.225-0.86057 10.4-1.6479 11.5-1.7496s2.45-0.45778 3-0.7913 2.0125-0.51823 3.25-0.41047 2.25-0.17886 2.25-0.63695c0-0.45808 0.3594-0.72038 0.7987-0.58288 1.611 0.50427 12.087-7.5613 13.139-10.116 0.871-2.1151 0.6708-3.7185-1.0158-8.1343-1.1553-3.025-2.5859-6.9625-3.1791-8.75-1.068-3.2181-2.7191-4.4108-2.7688-2-0.04 1.9597-9.4397 7.8453-14.186 8.8828-2.3587 0.51561-5.8635 1.7092-7.7885 2.6524-7.0363 3.4475-64 2.6842-64-0.85762 0-0.41344-1.8089-1.0573-4.0198-1.4308-2.2109-0.37353-4.6859-1.3452-5.5-2.1593s-1.4802-1.1924-1.4802-0.84066c0 0.35173-1.3553-0.32553-3.0118-1.505-1.6564-1.1795-2.7549-2.5602-2.4409-3.0681 0.3139-0.50794 0.068-0.92353-0.5473-0.92353-0.6149 0-0.9137-0.3375-0.664-0.75s-0.1737-1.3302-0.941-2.0394c-1.1454-1.0587-1.395-1.0268-1.395 0.17857 0 0.8074-0.6911 2.1591-1.5357 3.0037-0.8447 0.84464-1.5015 1.8893-1.4596 2.3214 0.1122 1.159-3.1334 9.5913-4.2304 10.991-0.6386 0.81466-0.085 2.3317 1.7079 4.6827 4.9805 6.5298 13.728 11.732 20.518 12.202 1.925 0.13324 6.875 0.90644 11 1.7182 10.569 2.08 40.669 2.1445 53 0.11352zm2.3937-23.723c4.8916-0.90658 9.6166-2.2995 10.5-3.0953 0.8835-0.79586 2.7313-1.7297 4.1063-2.0752 4.9974-1.2558 7.3009-3.9367 7.4041-8.6173 0.076-3.4532-0.2798-4.4244-1.7285-4.7171-1.0034-0.20269-2.6666 0.39361-3.6959 1.3251-1.0292 0.93149-5.6083 2.76-10.176 4.0633-7.7664 2.2162-9.9923 2.3712-34.376 2.394-19.798 0.0185-27.137-0.31652-30.5-1.3922-2.4354-0.77915-5.5652-1.6625-6.9549-1.963-1.3898-0.30052-4.3794-2.1321-6.6436-4.0702l-4.1168-3.5238-1.6064 2.4517c-2.0943 3.1963-2.0304 4.1178 0.5349 7.7205 3.5851 5.0348 12.292 9.876 21.27 11.826 10.672 2.318 42.723 2.1313 55.983-0.32622zm-39.042-13.172c0.311-0.81046-0.1722-1.8863-1.0736-2.3908-1.5064-0.84301-1.5088-1.0475-0.03-2.5264 0.885-0.88505 2.0913-1.6092 2.6806-1.6092 1.3526 0 1.4072-2.6744 0.071-3.5-1.8059-1.1161-1.0457-3.3544 1.25-3.6804 1.5956-0.22662 2.294-1.0466 2.4014-2.8196 0.262-4.3247 0.3562-4.5358 1.3387-3 1.4223 2.2235 0.9166 9.0986-0.7153 9.7248-0.7644 0.29332-1.1421 1.1788-0.8394 1.9676 0.3027 0.78886-0.1214 2.7334-0.9425 4.3213-0.8211 1.5878-1.4929 3.3593-1.4929 3.9366 0 0.67509 4.3209 1.0497 12.108 1.0497h12.108l-0.6507-2.5927c-0.5298-2.1108 0.1673-3.5512 3.7507-7.75 2.4208-2.8365 5.8857-7.6323 7.6998-10.657 1.8141-3.025 4.7311-7.075 6.4821-9 3.2697-3.5945 5.8259-8.4094 7.0309-13.243 0.376-1.5087 1.0857-2.4946 1.5771-2.191 0.4913 0.30366 0.8933-0.37445 0.8933-1.5069 0-1.1325 0.3568-2.059 0.7929-2.059s1.6342-2.475 2.6624-5.5c1.0283-3.025 2.1339-5.501 2.4571-5.5021 0.8102-0.003 0.5921-33.112-0.2668-40.498-1.1128-9.568-2.829-15.871-4.8087-17.66-1.0103-0.91316-1.8369-2.1203-1.8369-2.6826 0-0.56228-0.9188-1.3139-2.0418-1.6704-1.4028-0.44524-1.8632-1.2107-1.4712-2.4459 0.3994-1.2584-1.0737-3.5368-4.9097-7.5933-3.0142-3.1875-5.2455-6.1753-4.9585-6.6397 0.5483-0.88724-3.4619-8.0674-4.8262-8.6412-0.4359-0.18334-0.7926-0.97084-0.7926-1.75 0-0.77917-0.45-1.4167-1-1.4167s-1-0.45965-1-1.0214c0-1.1608-4.9225-8.9618-6.6121-10.479-0.6127-0.55-1.8807-3.475-2.8178-6.5-0.9372-3.025-3.2098-8.65-5.0503-12.5-1.8406-3.85-4.6954-9.8096-6.3441-13.243-1.6488-3.4339-3.2977-8.0189-3.6643-10.189-0.4806-2.8447-1.0633-3.7931-2.089-3.3995-1.0205 0.39162-1.4224-0.24279-1.4224-2.2454 0-1.5352-0.8592-4.6208-1.9093-6.857-1.2747-2.7143-2.0494-7.0385-2.3309-13.009-0.2638-5.5961-0.8592-9.0895-1.5907-9.3333-1.4213-0.47377-1.5776-6.223-0.1691-6.223 0.55 0 1-0.92958 1-2.0657 0-1.1362 0.4938-2.9885 1.0974-4.1163 0.8747-1.6344 0.6385-2.9429-1.1644-6.4483-1.244-2.4188-2.8579-4.8924-3.5865-5.4971-1.6183-1.3431-8.3465-0.25972-8.3465 1.3439 0 0.61927-0.6918 1.8904-1.5374 2.8248-1.7753 1.9617-3.021 10.144-1.9354 12.714 1.471 3.4814 1.383 6.245-0.1988 6.245-1.3292 0-1.4592 1.6961-0.9684 12.639 0.5176 11.541 0.3964 12.856-1.3966 15.135-1.0799 1.3728-1.9634 3.3134-1.9634 4.3124 0 0.99899-0.7134 4.4258-1.5854 7.6151-2.0038 7.3295-4.0634 18.506-4.9695 26.967-0.5418 5.0589-0.3874 6.7674 0.6764 7.4852 1.0439 0.70433 0.893 0.85929-0.6215 0.6384-1.9017-0.27736-1.984 0.18751-1.6749 9.4583 0.2078 6.2317-0.046 9.75-0.7047 9.75-0.5664 0-1.3385-1.6458-1.7159-3.6572-0.827-4.4083 0.3373-25.733 1.4256-26.109 0.7511-0.26009 0.1107-8.7014-1.2695-16.733l-0.6873-4 2.0634 2.3608 2.0633 2.3608v-2.5584c0-3.1477-12.632-16.958-13.362-14.609-0.2474 0.7953-1.0015 4.2484-1.6757 7.6735-1.2372 6.2852-2.9621 7.6031-2.9621 2.2632 0-1.665 0.7422-3.3611 1.75-3.999 1.2532-0.79327 1.3951-1.2568 0.5-1.633-1.4622-0.61449-1.6571-3.5397-0.327-4.9086 0.5077-0.5225 1.1192-2.3 1.359-3.95 0.3985-2.7435 0.4991-2.8133 1.176-0.8169 0.4072 1.2007 2.2706 2.9093 4.1411 3.7969 3.5857 1.7015 4.6185 2.8687 1.6509 1.8657-0.9625-0.3253 0.019 1.0388 2.1816 3.0314 2.1625 1.9926 4.4875 3.6228 5.1667 3.6228 0.6793 0 1.4116 0.52967 1.6274 1.177 0.5573 1.672 2.7856 0.0435 2.7177-1.9861-0.055-1.6498-10.738-10.191-12.747-10.191-0.5557 0-2.9627-2.3625-5.349-5.25-2.3862-2.8875-4.9031-5.8446-5.5931-6.5714-0.69-0.72678-1.2545-2.1411-1.2545-3.143s-0.675-2.0806-1.5-2.3972c-0.8913-0.34201-1.5-1.8459-1.5-3.7059 0-1.7216-0.7271-4.6624-1.6157-6.535s-1.3807-4.3031-1.0936-5.4011c0.339-1.2963 0.029-1.9964-0.8843-1.9964-0.7735 0-1.4064-0.60615-1.4064-1.347 0-0.74084-0.8764-2.3574-1.9475-3.5925-1.0711-1.235-2.1619-2.7664-2.4239-3.403-1.1181-2.717-2.6961 2.1357-2.3336 7.1767 0.3152 4.384 0.8778 5.7284 3.1585 7.547 2.2414 1.7873 2.8377 3.165 3.1013 7.1657 1.1298 17.149 3.936 33.78 6.5283 38.689 0.5043 0.95504 0.9312 2.755 0.9487 4 0.017 1.245 0.6925 3.1371 1.5 4.2047s1.4682 3.2051 1.4682 4.75 0.3999 2.8089 0.8887 2.8089 1.2016 1.6875 1.584 3.75 1.5574 5.1531 2.6113 6.868c1.0538 1.7149 1.916 4.1545 1.916 5.4213s0.6218 3.0137 1.3817 3.882c1.9122 2.1848 3.0042 6.0787 1.7047 6.0787-0.5765 0-1.3307-1.125-1.6758-2.5s-0.9799-2.5-1.4106-2.5c-0.4308 0-1.0879-1.214-1.4603-2.6978-0.5192-2.0687-0.882-2.3664-1.5556-1.2764-0.4832 0.7818-0.502 1.6583-0.042 1.9478 0.4602 0.28951 1.4195 2.5514 2.1319 5.0264s1.8871 5.3876 2.6105 6.4725 1.3153 3.1958 1.3153 4.691 0.3893 2.9591 0.8651 3.2531c1.8281 1.1298 5.5536 32.43 5.2089 43.763-0.062 2.0236 0.3466 3.9626 0.9071 4.309 0.5604 0.34636 1.0189 1.9164 1.0189 3.4889 0 1.5726 0.3313 3.6835 0.7362 4.691 0.5768 1.4353 0.8546 1.0742 1.2836-1.6682l0.5475-3.5 1.8485 3.4559c1.0167 1.9008 1.4516 3.5956 0.9664 3.7663-3.7189 1.3082-3.8178 1.8702-1.9267 10.955 2.9779 14.305 3.0682 17.124 0.6537 20.389-1.1601 1.569-2.1092 3.9409-2.1092 5.2709 0 1.3299-0.6035 2.919-1.3412 3.5312-0.7377 0.61221-2.1105 5.5048-3.0508 10.872-1.6052 9.1635-3.1029 15.779-4.2471 18.761-1.2171 3.1717 8.6034 8.7214 19.639 11.098 8.779 1.8908 8.8193 1.8821 9.5597-2.0645 0.3575-1.9054 1.2778-3.9855 2.0453-4.6224 1.6733-1.3887 1.7773-0.26234 0.4882 5.2868-0.4728 2.035-0.6121 3.9475-0.3095 4.25 1.1017 1.1017 4.0172 0.51233 4.5682-0.92349zm20.418-20.091c-0.3332-0.33323-0.3902-1.795-0.1267-3.2483 0.8314-4.5847 2.0013-4.4853 2.5317 0.21507 0.3049 2.702-1.04 4.3982-2.405 3.0332zm2.4809-9.2156c-1.2375-0.19765-2.25-1.0031-2.25-1.7898 0-1.8106 1.0927-1.8144 3.5573-0.0122 2.2818 1.6685 1.8223 2.3019-1.3073 1.802zm4.5355-2.9703c-0.8385-0.9625-1.7727-2.425-2.0761-3.25-0.415-1.1288-0.571-1.0366-0.6305 0.37244-0.066 1.5611-0.332 1.6624-1.6007 0.60944-1.3479-1.1187-1.3055-1.4146 0.3713-2.589 1.5145-1.0608 2.4176-1.0827 4.5141-0.10944 3.018 1.401 3.4271 2.686 0.8864 2.7843-1.3933 0.0539-1.2914 0.28887 0.5 1.1528 1.2375 0.59683 2.25 1.4664 2.25 1.9323 0 1.4781-2.6315 0.91437-4.2145-0.90281zm4.632-2c-0.2859-0.9625-1.1913-3.058-2.012-4.6566-1.7899-3.4864-0.3502-5.9736 2.0553-3.5505 1.908 1.922 3.2279 9.9571 1.6356 9.9571-0.6375 0-1.3931-0.7875-1.6789-1.75zm4.5825-3.191c0-1.0675-0.3625-2.165-0.8055-2.4388-1.5497-0.95772-6.4036-11.585-6.5484-14.337-0.08-1.5273-0.9336-3.566-1.8961-4.5303-0.9625-0.96432-1.75-2.4174-1.75-3.2292 0-0.81171-0.8983-2.9492-1.9963-4.75-2.1876-3.588-2.6043-7.285-0.9372-8.3153 1.4178-0.87622 1.6892-0.49958 2.1911 3.0411 0.4422 3.1186 0.7781 4.1044 3.8772 11.377 1.0259 2.4074 1.8652 4.7406 1.8652 5.1849 0 0.44428 0.3961 1.8496 0.8802 3.1229s0.8216 2.5584 0.75 2.8558c-0.072 0.2974 1.288 1.8724 3.0214 3.5 3.5289 3.3134 5.4319 10.459 2.7855 10.459-0.7904 0-1.4371-0.87344-1.4371-1.941zm-32.658-2.8266c-0.637-0.40534-1.4746-2.4234-1.8613-4.4847-0.5761-3.0706-0.412-3.7477 0.9082-3.7477 0.8862 0 1.6423 0.7875 1.6802 1.75 0.038 0.9625 0.2322 2.9875 0.4318 4.5s0.2811 2.7431 0.1811 2.7347c-0.1-0.008-0.703-0.34696-1.34-0.75229zm35.634-2.4824c-0.025-3.279-2.8247-12.712-5.4169-18.25-2.2823-4.8757-3.0393-8.8269-1.5992-8.3469 0.6829 0.22762 2.4526 3.9988 3.9327 8.3804s3.3998 9.3165 4.2659 10.967c0.8661 1.65 1.8803 4.6875 2.2538 6.75 0.6033 3.3323 0.4511 3.75-1.3664 3.75-1.6358 0-2.0502-0.65068-2.0699-3.25zm-5.1593-7.1918c-0.9261-1.2425-2.4158-5.0836-3.3103-8.5359-0.8946-3.4523-2.2411-7.2321-2.9922-8.3996s-1.6808-3.8461-2.0659-5.9525-1.3184-4.067-2.074-4.357c-1.508-0.57868-1.9507-7.3132-0.4807-7.3132 1.2133 0 2.1624 2.692 1.5301 4.3398-0.2828 0.73688 0.1814 1.917 1.0314 2.6224 0.85 0.70546 1.5455 2.0324 1.5455 2.9488 0 0.91637 0.9 3.4314 2 5.589s2 4.8627 2 6.0114 0.4194 2.5161 0.9321 3.0386 1.0752 2.3 1.25 3.95 0.9293 3.4797 1.6766 4.0661c0.7473 0.58635 1.1973 1.7827 1 2.6586-0.2927 1.2996-0.6683 1.1771-2.0426-0.66652zm3.2152-11.808c-1.2835-3.9875-2.6518-7.7-3.0407-8.25-1.306-1.8468-3.8216-10.336-3.2363-10.921 0.3185-0.31847 0-0.57904-0.7042-0.57904-0.8296 0-1.1143-0.88385-0.8054-2.5 0.2629-1.375 0.1084-2.5-0.3432-2.5-0.4517 0-1.3314-1.9125-1.9551-4.25-1.3376-5.0139-4.3931-11.916-3.4307-7.75 0.3176 1.375 1.1656 4.6375 1.8844 7.25s1.0353 4.7431 0.7034 4.7347c-1.2546-0.0318-3.2006-1.7044-2.9975-2.5763 0.2042-0.87687-0.235-2.3235-2.1874-7.2054-1.3362-3.3412-1.1282-5.203 0.5814-5.203 1.854 0 1.8668-0.49629 0.099-3.8457-0.7704-1.4599-2.6654-6.8168-4.211-11.904-1.5457-5.0875-3.1653-9.25-3.5992-9.25-0.434 0-0.789-0.75555-0.789-1.679s-0.5363-3.1621-1.1918-4.9749c-0.6555-1.8127-0.8758-3.6118-0.4897-3.998 1.1498-1.1498 3.5145 2.8609 4.2167 7.1519 0.36 2.2 1.4181 5.35 2.3514 7 0.9332 1.65 3.1889 7.725 5.0126 13.5 1.8238 5.775 3.7778 11.625 4.3422 13 2.7163 6.6174 2.4334 5.755 5.9056 18 0.7018 2.475 1.2933 4.95 1.3145 5.5 0.021 0.55 0.601 1.3599 1.2885 1.7997 0.6875 0.43983 1.25 1.6773 1.25 2.75s0.5025 1.9503 1.1166 1.9503c0.651 0 0.9178 1.0397 0.6399 2.4936-0.2712 1.4187 0.1096 2.9802 0.8834 3.6224 1.4631 1.2143 1.8936 5.8839 0.5425 5.8839-0.4497 0-1.8677-3.2625-3.1511-7.25zm-60.39-0.95911c-0.3375-1.26-0.6198-4.1768-0.6274-6.4819-0.01-2.305-0.4333-4.4504-0.9462-4.7674-1.3814-0.85373-0.9697-6.5416 0.4735-6.5416 0.6801 0 1.5424 1.6304 1.9162 3.6231s1.2114 4.5265 1.8613 5.6306c0.9212 1.5651 0.9061 2.1073-0.068 2.4602-1.5235 0.55171-1.6736 3.286-0.1804 3.286 1.3938 0 0.7723 4.2309-0.6923 4.7126-0.6174 0.20307-1.3988-0.66168-1.7363-1.9217zm19.359 1.2091c0-0.55 0.45-1 1-1s1 0.45 1 1-0.45 1-1 1-1-0.45-1-1zm49-0.5c0-0.825 0.45-1.5 1-1.5s1 0.675 1 1.5-0.45 1.5-1 1.5-1-0.675-1-1.5zm-62.485-1.4751c-0.7006-1.1335 0.393-29.654 1.3591-35.446 0.3597-2.1568 1.2576-4.1226 1.9952-4.3685 1.0373-0.34576 1.1715 0.31633 0.5921 2.9214-0.4121 1.8527-0.6963 4.8826-0.6317 6.7331 0.065 1.8505-0.3218 4.1857-0.859 5.1893-0.6563 1.2265-0.6246 2.0422 0.097 2.488 0.6653 0.41115 0.8184 2.1722 0.4027 4.6323-0.3688 2.183-0.6703 5.6243-0.6699 7.6474 0.0003 2.0231-0.4205 4.4659-0.9352 5.4284s-0.5657 1.75-0.1134 1.75 0.8902 0.9 0.973 2c0.1574 2.0891-1.1711 2.7053-2.2096 1.0249zm46.98-8.6302c-0.3386-1.592-1.0077-3.6267-1.4869-4.5215-1.5697-2.9313-2.3192-8.8731-1.1193-8.8731 0.6112 0 1.1115 0.7875 1.1118 1.75s0.9237 4.179 2.0521 7.1479c1.3633 3.5869 1.7172 5.7323 1.0549 6.3946-0.6624 0.66235-1.2034 0.0256-1.6126-1.8979zm18.096 0.7054c-1.743-1.9261-1.3715-4.7008 0.4765-3.5586 0.957 0.59145 0.7459-4.3819-0.2583-6.0866-0.3094-0.52512-1.3455-4.5548-2.3025-8.9548-0.9571-4.4-2.1068-8.9-2.555-10s-1.0406-3.35-1.3163-5c-1.3306-7.9607-4.2162-20.415-4.8849-21.084-1.0787-1.0781-0.9258-5.4162 0.191-5.4162 1.4592 0 1.9875 1.3506 2.9945 7.6563 0.5133 3.214 1.6028 8.7558 2.4211 12.315s1.2713 6.8217 1.0066 7.25c-0.2647 0.42827-0.057 0.77867 0.4626 0.77867 0.519 0 1.253 2.475 1.6309 5.5 0.5657 4.5273 1.0282 5.5 2.6153 5.5 1.0604 0 1.928-0.48214 1.928-1.0714 0-0.58928 0.675-0.39643 1.5 0.42857 1.9632 1.9632 1.9109 3.0145-0.1113 2.2385-1.2352-0.47397-1.4433-0.20712-0.8916 1.143 0.3959 0.96874 1.1421 3.2238 1.6584 5.0113 0.5162 1.7875 1.3532 3.25 1.8601 3.25s0.6626 0.675 0.346 1.5c-0.886 2.3089-2.3079 1.7865-3.4022-1.25-0.5451-1.5125-1.4433-3.65-1.996-4.75-1.894-3.7692 0.036 3.6086 2.1686 8.2899 1.0923 2.3976 1.8417 5.108 1.6655 6.0232-0.466 2.4195-3.1435 2.567-5.207 0.28695zm-52.871 0.19588c-0.7946-1.2255-2.4827-15.341-2.487-20.796-0.001-1.65-0.099-13.575-0.2179-26.5-0.1186-12.925 0.063-30.25 0.403-38.5 0.3402-8.25 0.8083-19.5 1.0402-25 0.3567-8.4595 0.2638-9.3068-0.6029-5.5-0.5634 2.475-1.1617 6.075-1.3294 8-0.4665 5.3562-3.5112 22.021-5.7093 31.25-1.2596 5.2885-3.2578 4.9135-2.4001-0.45039 0.3695-2.3102 1.0431-4.6727 1.4971-5.25 0.4539-0.57728 1.0903-3.0746 1.4142-5.5496s1.5518-11.25 2.7287-19.5c2.3104-16.195 2.4007-16.906 4.107-32.285 1.2914-11.64 3.4659-15.639 2.5934-4.7693-0.5669 7.063 0.4788 12.957 2.533 14.277 1.5465 0.99342 7.4087 12.837 8.3045 16.778 0.375 1.65 1.177 3.6253 1.7822 4.3895 0.6052 0.76424 1.6859 3.4642 2.4015 6s1.8075 6.4105 2.4265 8.6105c0.6189 2.2 1.4363 4.225 1.8164 4.5 0.38 0.275 1.0137 2.2533 1.408 4.3962s1.3095 4.8429 2.0337 6c0.7243 1.1571 1.8672 4.5788 2.5399 7.6038s1.6706 6.625 2.2175 8c1.6474 4.1418 3.8626 13.251 3.3476 13.766-0.2648 0.26483-1.1288-1.0367-1.92-2.8923-1.8947-4.4437-7.6472-23.028-7.6472-24.705 0-0.97242-0.4066-0.90526-1.5714 0.25953-2.0814 2.0813-2.1308 2.0539-2.6482-1.4715-0.3297-2.246-0.097-2.909 0.8865-2.5314 0.8889 0.34112 1.3331-0.31092 1.3331-1.957 0-1.3577-0.45-2.4686-1-2.4686s-1-0.675-1-1.5-0.3678-1.5-0.8174-1.5c-0.9469 0-4.185-9.7566-4.1777-12.588 0.01-2.4171-3.2542-11.801-4.2549-12.245-0.4125-0.18334-0.75-1.1958-0.75-2.25s-0.3513-1.9167-0.7808-1.9167c-1.056 0-3.2906-6.0754-2.6286-7.1465 0.2901-0.4694 0.083-0.85346-0.4602-0.85346-0.5431 0-1.5996-0.61207-2.3477-1.3602-1.1469-1.1469-1.3705 0.93085-1.4261 13.25-0.036 8.0356-0.2571 31.035-0.4908 51.11s-0.046 40.842 0.4171 46.148c0.9328 10.688 0.6586 19.033-0.5635 17.148zm17.781-1.2959c-0.3399-0.55 0.083-1 0.941-1 0.8574 0 1.559 0.45 1.559 1s-0.4234 1-0.941 1c-0.5175 0-1.2191-0.45-1.559-1zm-0.9723-4.25c-0.6055-1.8478-2.6169-12.307-2.928-15.225-0.1483-1.3905-0.5689-2.8274-0.9346-3.1932-0.3658-0.36578-0.6651-2.1385-0.6651-3.9394s-0.3907-3.5158-0.8682-3.8109c-0.4775-0.29511-1.1655-2.7782-1.529-5.5179-0.3634-2.7397-1.0386-5.2148-1.5004-5.5002s-1.1607-3.7776-1.5532-7.7604c-0.3924-3.9828-1.1052-7.9732-1.5838-8.8676-1.3147-2.4565-1.6754-22.185-0.4135-22.613 0.6659-0.226 1.5183 4.856 2.3231 13.851 0.6991 7.8146 1.8953 15.415 2.6582 16.891 0.7629 1.4752 1.1664 2.9028 0.8967 3.1725-0.9041 0.90414 2.8538 21.244 4.2203 22.842 0.7424 0.86831 1.3498 3.0354 1.3498 4.8157 0 1.7804 0.3906 3.9949 0.868 4.9213 1.2754 2.4746 2.0368 11.184 0.9778 11.184-0.4997 0-1.0929-0.5625-1.3181-1.25zm31.472 0.28896c0-0.52858-0.8362-1.7661-1.8582-2.75-1.022-0.98393-2.1223-3.499-2.4452-5.589-0.5496-3.5574-0.447-3.757 1.6081-3.1258 1.2074 0.37083 2.2831 0.74361 2.3904 0.8284 0.1072 0.0848 0.3322 2.2785 0.5 4.875 0.1677 2.5964 0.6424 4.7212 1.0549 4.7216 0.4125 0.00044 0.75 0.4508 0.75 1.0008s-0.45 1-1 1-1-0.43247-1-0.96104zm2.2116-2.9382c-0.6664-1.8696-1.1714-4.7946-1.1222-6.5 0.077-2.6733 0.2829-2.4115 1.4931 1.8992 1.6621 5.9203 1.3739 9.4955-0.3709 4.6008zm-5.9616-9.8758c-1.6333-0.26431-2.25-1.0465-2.25-2.8536 0-1.405 0.4356-2.2202 1-1.8714 0.55 0.33992 1.0143 0.029 1.0318-0.69098 0.02-0.80736 0.5945-0.56511 1.5 0.63211 0.8075 1.0676 1.4682 1.399 1.4682 0.73643 0-1.6537-2.2294-5.5044-3.75-6.4772-0.6875-0.43983-1.2431-2.2398-1.2347-4 0.012-2.4341 0.2474-2.8412 0.9847-1.7003 0.6462 1 0.9745 1.0833 0.9847 0.25 0.01-0.6875 0.4653-1.25 1.0153-1.25s1 1.3796 1 3.0657c0 1.6862 0.3908 3.8237 0.8684 4.75 0.4776 0.92634 1.1632 3.3196 1.5235 5.3182 0.7085 3.9296-0.1148 4.7427-4.1419 4.091zm-3.0125-7.3875c-0.6806-0.68062-1.2375-2.6904-1.2375-4.4661s-0.675-3.9036-1.5-4.7286-1.5-3.0806-1.5-5.0124-0.45-3.7905-1-4.1304c-0.55-0.33992-1-1.6234-1-2.8522 0-2.5874-4.5874-19.353-5.9648-21.8-1.1884-2.1109-6.0352-18.779-6.0352-20.754 0-1.1386 0.2774-1.2159 1.1679-0.32535 1.7118 1.7118 3.9944 8.1417 4.5198 12.732 0.2518 2.2 1.1001 5.418 1.8851 7.1511s1.4419 3.7581 1.4598 4.5c0.044 1.8248 3.4917 11.707 4.4017 12.616 0.4005 0.40057 0.4143-0.5227 0.031-2.0517-0.3838-1.529-0.7579-3.5531-0.8313-4.498-0.073-0.94487-0.6961-2.3126-1.3836-3.0394-0.6875-0.72678-1.2483-2.3018-1.2462-3.5 0-1.8631 0.2971-1.6974 2.0299 1.1448 2.3829 3.9086 4.5768 3.6851 4.2039-0.42825-0.2266-2.4998-0.1119-2.6463 0.8402-1.0727 0.646 1.0676 0.7908 2.9314 0.3496 4.5-0.4143 1.4727-0.645 3.3526-0.5127 4.1776 0.1664 1.0378-0.2616 0.88374-1.3889-0.5-1.5907-1.9526-1.612-1.9408-0.897 0.5 0.4028 1.375 0.7626 3.7375 0.7996 5.25s0.3757 2.75 0.7526 2.75c1.0362 0 0.6664 6.41-0.4103 7.1108-0.5161 0.33596-0.2256 0.88433 0.6455 1.2186 1.0487 0.40242 1.6238 0.0271 1.7023-1.1108 0.1695-2.4602 0.1858-2.2473-0.5934-7.7186-0.9784-6.8693 0.6366-4.7977 2.1895 2.8086 0.8101 3.9681 0.9088 6.3111 0.2747 6.5247-0.5441 0.18334-0.9893 0.97084-0.9893 1.75 0 0.77917-0.765 1.4167-1.7 1.4167-1.3222 0-1.4333 0.26667-0.5 1.2 0.66 0.66 1.2 2.595 1.2 4.3s0.5007 3.6006 1.1125 4.2125c0.6119 0.61187 0.9438 1.6188 0.7375 2.2375-0.2676 0.80303-0.7291 0.77083-1.6125-0.1125zm11.413-0.30547c-0.6014-1.5671 0.6431-2.9049 1.7098-1.8382 0.953 0.95302 0.7726 3.3062-0.2535 3.3062-0.4912 0-1.1465-0.66059-1.4563-1.468zm-0.984-4.1987c-1.258-1.258-0.6666-4.3333 0.8333-4.3333 0.9333 0 1.5 0.94444 1.5 2.5 0 2.4279-0.9737 3.1929-2.3333 1.8333zm-21.685-6.0833c-0.01-0.9625-1.8103-6.9199-4-13.239-2.1898-6.3188-3.9814-12.986-3.9814-14.816 0-1.8299-0.4777-4.2197-1.0617-5.3107-0.5839-1.091-0.9173-3.199-0.741-4.6843 0.3057-2.575 0.8904-1.0503 7.8106 20.37 0.5456 1.689 0.9921 4.1866 0.9921 5.55s0.4064 2.9065 0.903 3.429c1.1285 1.1871 1.8856 10.45 0.8542 10.45-0.4165 0-0.7656-0.7875-0.7758-1.75zm19.15-4c-0.7179-2.6125-1.6801-5.875-2.1382-7.25-1.237-3.7132-1.918-11-1.0279-11 0.4262 0 1.2345 1.9125 1.7964 4.25 0.5618 2.3375 1.7453 7.2489 2.6299 10.914 1.8537 7.6802 1.8702 7.8359 0.8268 7.8359-0.4299 0-1.3691-2.1375-2.087-4.75zm-63.131 2.6424c0-0.42587 0.4619-1.0598 1.0265-1.4087 0.5646-0.34893 0.9613-1.163 0.8815-1.809-0.3839-3.11 0.074-3.9346 1.5185-2.7356 1.786 1.4822 0.253 6.7276-1.9662 6.7276-0.8032 0-1.4603-0.34845-1.4603-0.77432zm57-0.39235c0-0.825 0.1769-1.5 0.393-1.5 0.2162 0 0.652 0.675 0.9686 1.5s0.1397 1.5-0.393 1.5-0.9686-0.675-0.9686-1.5zm-67.312-1.1458c-1.5501-1.5501-0.2654-32.829 1.3084-31.857 0.3917 0.24205 0.9778-3.6608 1.3025-8.6731s1.0654-9.5882 1.646-10.169c0.5806-0.58057 1.0556-1.8656 1.0556-2.8556s0.4234-1.8 0.941-1.8c1.3843 0 2.2397 1.7703 1.1737 2.4291-0.5049 0.31201-1.2229 3.3806-1.5957 6.8191s-1.1376 8.0439-1.6995 10.234c-0.562 2.1904-1.1922 11.187-1.4004 19.993-0.3484 14.737-0.8657 17.744-2.7316 15.878zm12.746-12.687c-0.4779-1.2318-0.01-2.5351 1.4276-3.9722 2.5261-2.526 2.9013-0.69066 0.6759 3.3055-1.2626 2.2672-1.4585 2.3293-2.1035 0.66672zm1.0736-8.6553c-0.4086-0.66116-0.2806-2.1717 0.2844-3.3568s1.2899-2.9707 1.6109-3.968c0.3209-0.99736 1.076-1.5091 1.6778-1.1371 0.7879 0.48696 0.7899 0.98053 0.01 1.7634-0.598 0.59792-1.0941 2.0096-1.1025 3.1371-0.022 2.9508-1.5222 5.1073-2.4776 3.5614zm46.438-5.1136c-0.6188-1.1562-0.9277-2.857-0.6865-3.7795 0.2413-0.92251-0.1683-2.2442-0.9101-2.9372-1.2251-1.1445-1.9435-5.181-0.9219-5.181 0.9175 0 3.6425 6.5809 4.2198 10.191 0.6766 4.2312 0.01 4.9013-1.7013 1.7065zm-4.9384-7.8692c-0.656-2.7342-0.9934-5.5468-0.7498-6.25 0.2436-0.70324 0.9055 0.74638 1.4708 3.2214s1.356 5.2875 1.757 6.25c0.4128 0.99096 0.2922 1.75-0.2782 1.75-0.554 0-1.5439-2.2371-2.1998-4.9714zm-54.007-25.029c0-0.55 0.45-1 1-1s1 0.45 1 1-0.45 1-1 1-1-0.45-1-1zm-9.3333-11.667c-0.3667-0.36666-0.6667-1.4917-0.6667-2.5 0-2.25 2.5559-2.4329 3.3963-0.24309 0.972 2.5332-0.9789 4.4938-2.7296 2.7431zm-4.6315-9.2676c-1.5352-2.8685-1.2702-4.9592 0.3568-2.8157 0.7307 0.9625 1.8414 1.75 2.4682 1.75 0.6269 0 1.1398 0.675 1.1398 1.5 0 2.1515-2.7417 1.8512-3.9648-0.43426zm6.7148-1.0286c-1.9485-1.8983-2.243-3.0371-0.7852-3.0371 0.9671 0 3.4884 3.9203 2.8662 4.4566-0.1821 0.15694-1.1185-0.48185-2.081-1.4195zm26.976-42.333c-0.8272-1.2625-2.5055-5.425-3.7295-9.25s-2.5336-7.5868-2.9102-8.3598c-0.4107-0.84294 0.2778-2.3678 1.7206-3.8106 2.7398-2.7398 4.3874-2.2612 1.8537 0.53851-2.224 2.4575-2.1403 3.0622 1.3395 9.6774 1.65 3.1367 3 6.5308 3 7.5425s0.45 2.1176 1 2.4575c1.2363 0.76408 1.3262 3.5 0.115 3.5-0.4867 0-1.5618-1.033-2.3891-2.2955zm-1.4938-23.704c-0.7809-1.2503-0.8593-2-0.2092-2 0.5719 0 1.2979 0.67242 1.6133 1.4943 0.3153 0.82184 0.9762 1.2453 1.4686 0.94098 0.4923-0.3043 0.8952-0.0767 0.8952 0.50574 0 1.7863-2.4462 1.1754-3.7679-0.94098zm47.203 256.11c0.304-0.4919 2.2431-1.1307 4.309-1.4195 12.067-1.6869 13.809-3.3509 13.601-12.992-0.2031-9.4-1.2766-16.945-2.5887-18.194-0.7225-0.68788-0.853-0.44062-0.4183 0.79221 0.3476 0.98572 0.9276 6.6594 1.2889 12.608 0.6185 10.183 0.5317 10.941-1.4848 12.958-1.1779 1.178-3.1542 2.1101-4.3917 2.0714-1.8304-0.0572-1.9304-0.1971-0.5366-0.75023 1.2379-0.49128 1.4503-1.0961 0.7653-2.1797-1.5985-2.5287-1.1631-4.1931 0.9236-3.5308 1.6352 0.51899 1.9106 0.0721 1.9614-3.1826 0.033-2.0825 0.09-5.1364 0.1272-6.7864 0.1776-7.8163-0.1472-9.6151-1.5293-8.4682-0.7385 0.61291-1.0963 1.7565-0.7952 2.5413 0.3298 0.85941-0.072 1.4269-1.0097 1.4269-0.8565 0-1.9172 0.63504-2.357 1.4112s-2.1593 2.9137-3.821 4.75c-5.1962 5.7421-12.165 15.24-12.905 17.589-0.6633 2.1054-0.4192 2.25 3.7995 2.25 2.4796 0 4.7571-0.40247 5.0611-0.89437zm31.358-117.33c1.4888-3.1492 3.2106-5.7367 3.8262-5.75 0.6155-0.0133 1.3838-1.655 1.7072-3.6483 0.3235-1.9932 1.2624-4.3692 2.0866-5.2798 1.24-1.3702 1.3297-2.8477 0.52-8.5654-1.4354-10.136-2.0402-10.2-4.514-0.47697-0.9021 3.5454-2.4904 8.2183-3.5296 10.384-1.0392 2.1658-1.9044 4.6408-1.9227 5.5-0.018 0.85919-0.9362 2.6467-2.0399 3.9722-1.5019 1.8039-2.2934 2.1234-3.1465 1.2702-1.2262-1.2262-0.107-4.1448 3.5866-9.3535 1.2226-1.7241 1.7106-3.6409 1.3746-5.3989-0.7231-3.7826 3.4238-15.426 8.4666-23.772 4.5031-7.4528 5.5944-12.097 5.7189-24.334 0.047-4.5972 0.5572-7.6628 1.4195-8.5251 0.7406-0.74058 1.6713-3.1352 2.0683-5.3214s0.9728-5.0191 1.2796-6.2954c0.5455-2.2695 0.4133-2.314-6.0105-2.0255-3.6126 0.16224-6.9018-0.0385-7.3094-0.44617-1.5847-1.5847 1.8155-3.043 7.2828-3.1235 5.3775-0.0792 5.8426-0.28391 7.6435-3.3637 2.7586-4.7176 3.7848-24.034 1.3492-25.397-1.9796-1.1079-2.1767-2.824-0.3243-2.824 0.7291 0 2.3231-1.0617 3.5422-2.3594l2.2165-2.3594-2.7922-5.6304c-3.2941-6.6425-4.941-7.0424-10.16-2.4668-6.807 5.9676-9.132 9.6817-9.132 14.588 0 4.3195-0.3655 4.8732-9.25 14.015-14.17 14.58-16.317 16.354-25.978 21.463-10.927 5.7783-16.942 6.3835-22.361 2.25-7.2411-5.5231-6.8329-1.0821 0.7051 7.671 5.4209 6.2948 5.8593 7.3173 2.7929 6.5154-1.7952-0.46945-2.0055-0.20676-1.4874 1.8574 0.3318 1.3223 1.6685 3.9738 2.9703 5.8921 2.249 3.314 2.4477 3.3986 3.9875 1.6972 0.8913-0.98487 1.6205-2.266 1.6205-2.8469 0-0.58094 1.1393-1.8028 2.5319-2.7152 1.3925-0.91242 2.2659-2.0892 1.9409-2.615-0.3249-0.52584-0.1143-0.95607 0.4682-0.95607 0.5824 0 0.9465-0.50625 0.809-1.125s0.2-1.2188 0.75-1.3333c0.55-0.11459 0.6116-0.004 0.1368 0.24605-0.4747 0.24991-0.3722 0.75778 0.2278 1.1286 0.6868 0.42445-0.3827 2.4574-2.8869 5.4878-2.1877 2.6475-3.9727 5.3271-3.9666 5.9547 0.01 0.62762 1.1637-0.32138 2.5725-2.1089 2.539-3.2217 5.4164-4.3284 5.4164-2.0833 0 0.64166-0.2452 0.92147-0.5449 0.62179s-1.84 0.75032-3.4231 2.3333c-1.583 1.583-3.6403 2.8782-4.5717 2.8782-1.2974 0-1.5295 0.5263-0.9922 2.25 0.3857 1.2375 1.189 4.1625 1.7851 6.5 0.8645 3.3903 1.5306 4.25 3.2928 4.25 1.215 0 2.7693-0.675 3.454-1.5s2.0936-1.5 3.1309-1.5c1.578 0 1.6992 0.29917 0.742 1.8319-0.6293 1.0076-2.4395 2.3209-4.0228 2.9186l-2.8788 1.0866 1.9803 3.3564c4.0712 6.9 8.6739 9.9144 7.3379 4.8055-0.2922-1.1173-0.03-1.999 0.5939-1.999 0.6141 0 1.1451 0.5625 1.18 1.25 0.035 0.6875 0.4703 0.2375 0.9678-1 0.7392-1.8391 1.6814-2.25 5.1591-2.25 4.136 0 4.1927 0.0434 2.0322 1.5567-1.2224 0.85619-2.2225 2.3787-2.2225 3.3834s-0.8365 2.0454-1.8588 2.3128c-2.7102 0.70872-3.7082 5.6121-1.4747 7.2453 1.4766 1.0797 1.5475 1.5391 0.4428 2.8702-1.1276 1.3586-0.6941 2.2951 3.0377 6.5632 2.3942 2.7382 4.8512 4.9987 5.4601 5.0235 0.609 0.0248 3.4268-2.2746 6.2619-5.1097 2.8352-2.8351 5.4869-4.7985 5.8929-4.3631 0.406 0.43542 0.1756 0.99256-0.5119 1.2381-0.6875 0.24553-1.25 1.2931-1.25 2.3279s-1.0032 2.4184-2.2294 3.0746c-1.2261 0.65622-2.7931 1.7569-3.4821 2.4459-0.689 0.68903-1.8233 1.4592-2.5206 1.7114-1.0175 0.36807-1.0211 0.87668-0.018 2.5757 0.6875 1.1644 1.25 2.6053 1.25 3.2021 0 0.59675 0.675 1.76 1.5 2.585s1.5 2.3957 1.5 3.4905 0.783 3.0286 1.7401 4.2974l1.7401 2.3069 2.3029-3.1188c1.2665-1.7154 3.521-5.6954 5.0098-8.8446zm-22.619-15.089c-1.1959-1.273-2.1743-2.6572-2.1743-3.0761 0-0.9598 5.8695 3.6221 5.9447 4.6405 0.1065 1.4441-1.6151 0.72975-3.7704-1.5644zm5.2941 1.2634c-0.7854-1.2708 1.2971-3.9489 3.0707-3.9489 0.7118 0 1.5212-0.5625 1.7986-1.25 0.2984-0.73946 0.5366-0.7991 0.5833-0.14602 0.1258 1.7588-4.7282 6.517-5.4526 5.3449zm-26.419-38.699c0.027-0.4125 1.8209-2.55 3.9866-4.75 3.4416-3.4961 3.8812-3.704 3.4891-1.65-0.6567 3.441-7.6752 9.4495-7.4757 6.4zm35.518-46.5c0.7573-2.4266 2.195-3.7103 4.1826-3.7347 0.6875-0.008 1.2598-0.57781 1.2717-1.2653 0.012-0.6875 2.262-3.4843 5-6.2151 7.7123-7.6919 5.9612-3.0068-2.1529 5.7601-7.3441 7.9349-9.522 9.3661-8.3014 5.455zm22.433-1.75c0-0.55 0.675-1 1.5-1s1.5 0.45 1.5 1-0.675 1-1.5 1-1.5-0.45-1.5-1zm-9.6004-16.401c-0.3225-0.84034 0.3969-2.9088 1.5987-4.5965 1.2018-1.6878 2.3091-4.1987 2.4607-5.5798 0.25-2.2774 4.0625-7.4445 5.4653-7.4072 0.3166 0.008 1.2507 0.46174 2.0757 1.0074 1.2932 0.85526 1.2172 1.2323-0.5513 2.7347-2.6589 2.2588-7.4487 8.8023-7.4487 10.176 0 0.5867-0.4359 1.0667-0.9686 1.0667-0.5328 0-0.7271 0.62948-0.4318 1.3988 0.2952 0.76937 0.053 1.6979-0.5385 2.0634-0.5914 0.36549-1.3391-0.023-1.6615-0.86335zm7.6004-3.0989c0-0.825 0.45-1.5 1-1.5s1 0.675 1 1.5-0.45 1.5-1 1.5-1-0.675-1-1.5zm-52.55 32.383c0.5225-0.48549 2.3225-0.88568 4-0.8893 1.6775-0.004 4.4-0.90066 6.05-1.9934 1.65-1.0928 3.6276-1.9898 4.3948-1.9934 1.4143-0.007 3.5142-1.7782 9.3633-7.8992 1.783-1.8659 5.2683-5.4659 7.7449-8 7.1413-7.3067 8.4349-9.8302 8.9941-17.544 0.4675-6.4482 0.6191-6.8203 2.1514-5.2801 1.5337 1.5416 1.8643 1.4042 4.75-1.974 1.7058-1.9971 3.1015-4.2177 3.1015-4.9347 0-1.8143 2.9079-3.1827 7.5588-3.5569 3.7556-0.30219 4.0442-0.11291 6.1294 4.0193l2.1882 4.3364 1.1169-4.3364c0.6144-2.385 1.8272-6.5456 2.6951-9.2457 1.7077-5.3123 1.5288-9.6951-1.2282-30.091-2.3081-17.074-2.6365-18.924-3.566-20.087-0.4778-0.59793-2.6533-4.5565-4.8345-8.7967-2.1811-4.2403-5.4493-9.5878-7.2627-11.884-3.5871-4.5411-10.364-11.007-12.168-11.61-0.621-0.20751-2.1068-1.2659-3.3019-2.3519-2.1547-1.958-16.819-8.7708-18.879-8.7708-0.5898 0-2.8445-0.84029-5.0103-1.8673-6.7199-3.1866-22.029-4.6267-33.813-3.1808-10.573 1.2973-11.368 1.4953-21.125 5.2569-6.482 2.4991-19.5 10.414-19.5 11.855 0 0.48657-1.3327 1.5739-2.9616 2.4162-1.6289 0.84233-5.3414 4.5664-8.25 8.2757-6.9789 8.9001-8.3442 11.149-10.774 17.744-0.4053 1.1-1.4743 3.7028-2.3755 5.7839-0.9012 2.0812-1.6386 4.7935-1.6386 6.0275s-0.6042 3.1312-1.3427 4.2161c-3.9277 5.7703-4.7924 39.456-1.117 43.517 0.8028 0.8871 1.4597 2.0445 1.4597 2.5719 0 0.52747 1.3317 2.517 2.9594 4.4213 2.032 2.3773 2.972 4.5676 3 6.9897 0.022 1.9401 0.7444 4.5324 1.6047 5.7605 0.8966 1.2801 1.2946 3.082 0.9326 4.2225-0.3547 1.1174-0.1746 1.9895 0.4109 1.9895 0.5733 0 2.0011 2.1044 3.1728 4.6765 2.0648 4.5326 7.7997 10.812 12.92 14.147 1.375 0.89559 2.8599 2.2016 3.2997 2.9024 0.4398 0.70071 1.3044 1.274 1.9212 1.274 0.6169 0 1.8926 0.69773 2.8349 1.5505 1.574 1.4244 1.8001 1.3017 2.7802-1.51 0.5868-1.6833 1.3719-5.756 1.7446-9.0505 0.5768-5.0981 0.4404-5.99-0.9163-5.99-0.8766 0-2.0756-0.9-2.6643-2s-1.9545-2-3.0352-2c-1.0806 0-1.9648-0.62838-1.9648-1.3964s-1.6875-2.7791-3.75-4.4691c-6.6353-5.4368-8.0319-7.1585-8.7012-10.726-0.4385-2.3378-1.397-3.7807-2.8878-4.3475-1.9418-0.73827-2.2638-1.6686-2.481-7.1673-0.1372-3.4754-0.5714-6.5608-0.9648-6.8564-0.7469-0.56134-1.259-2.1633-1.7704-5.5375-0.1667-1.1-0.6287-3.575-1.0266-5.5-0.7171-3.469-0.7054-3.4839 1.3298-1.6849 1.3305 1.1761 2.2843 1.4416 2.7091 0.75426 0.3606-0.58349-0.4947-1.585-1.9007-2.2257-1.406-0.64062-2.5564-1.7362-2.5564-2.4347 0-0.69847-1.0125-1.4691-2.25-1.7125l-2.25-0.4426 2.25-0.74358c1.2375-0.40897 2.25-1.311 2.25-2.0045 0-0.69351 0.6218-1.777 1.3818-2.4077 1.9103-1.5854 1.3078-6.8564-0.9867-8.6318-1.7195-1.3304-1.7469-1.5822-0.2959-2.7163 0.8796-0.6875 1.5546-1.5197 1.5-1.8493-0.1348-0.81435 4.7131-5.8618 5.6508-5.8834 0.4125-0.01 0.75 0.68428 0.75 1.5417 0 0.85746-0.3463 1.345-0.7696 1.0834-0.4232-0.26159-1.7638 1.0411-2.979 2.8949-1.4737 2.2483-1.8462 3.595-1.1186 4.0447 0.5999 0.37079 1.378 0.21289 1.729-0.3509 0.9476-1.522 5.3884-1.9184 5.8645-0.52351 0.2267 0.66421-1.194 1.8788-3.1571 2.699-1.9631 0.82022-3.5692 2.1893-3.5692 3.0423 0 1.2517 0.386 1.1651 2-0.44897 2.2335-2.2335 4-2.6016 4-0.83333 0 0.64166-0.2918 0.87485-0.6485 0.51818-0.8745-0.87455-4.453 3.3419-3.7717 4.4442 0.296 0.479 0.062 0.87092-0.5208 0.87092-0.5824 0-1.0428 0.7875-1.023 1.75 0.028 1.3429 0.608 1.0521 2.495-1.25l2.4591-3v2.6151c0 1.4383-0.9277 3.8008-2.0676 5.25-2.8035 3.564-0.8928 3.339 3.0684-0.36132 1.7641-1.6479 3.6799-2.7042 4.2573-2.3474 0.6459 0.39922 0.3183 1.154-0.8517 1.9621-3.3058 2.2831-4.4015 3.427-4.4015 4.5952 0 0.62419 1.0415 0.15645 2.3144-1.0394 1.273-1.1959 2.848-2.1743 3.5-2.1743 1.9961 0 1.3195 2.7495-1.1556 4.6964-2.2135 1.7411-4.6588 5.3452-4.6588 6.8664 0 0.38189 1.7622-1.276 3.916-3.6843 3.154-3.5265 4.1659-4.1354 5.2-3.1286 0.7062 0.6875 2.2924 1.25 3.525 1.25 3.445 0 3.6999 1.6815 0.4716 3.1105-1.5958 0.70635-2.6845 1.8416-2.422 2.5256 0.2622 0.68336 0 2.0573-0.5765 3.0532-0.9442 1.6231-1.0564 1.6355-1.0837 0.11976-0.017-0.93004-0.5569-2.0164-1.2003-2.414-0.7956-0.49166-0.9576-0.1696-0.5063 1.0064 0.5395 1.4059 0.2672 1.6036-1.4553 1.0569-1.425-0.45227-1.8949-0.30993-1.4347 0.43461 0.3763 0.60892 1.4452 1.1214 2.3752 1.1389 1.4792 0.0278 1.4479 0.21566-0.2501 1.5-1.1717 0.8862-1.4228 1.4682-0.6335 1.4682 0.8557 0 1.1425 0.86419 0.8298 2.5-0.2628 1.375-0.1427 2.5 0.2669 2.5 1.3934 0 1.6309 4.6006 0.3016 5.8424-0.7281 0.68007-1.3034 2.2312-1.2786 3.4471 0.039 1.9312 0.2238 1.8314 1.4587-0.78943 1.3535-2.8723 1.4088-2.8936 1.2994-0.5-0.2675 5.8528 0.5819 6.9957 1.1149 1.5 0.3773-3.8905 0.1446-6.879-0.6619-8.5-1.7825-3.5825-1.5481-6.3056 0.7092-8.2383 2.709-2.3195 3.0655-1.1914 2.1959 6.9476-0.4138 3.8721-0.4264 7.8841-0.028 8.9154 0.3983 1.0314 0.969 3.0297 1.2682 4.4408 0.2993 1.4111 1.3994 3.5517 2.4447 4.7569s2.1878 3.9882 2.539 6.1844 1.0721 3.9931 1.602 3.9931c0.6148 0 0.6105-0.92812-0.012-2.5651-0.5364-1.4108-0.9753-3.6057-0.9753-4.8776s-0.675-2.8727-1.5-3.5574c-1.8498-1.5352-2.1244-14.976-0.3424-16.758 0.8768-0.87682 0.8423-1.5376-0.1425-2.7242-1.6692-2.0113-0.541-3.1995 1.4607-1.5383 1.7674 1.4668 2.1306 5.5129 0.3989 4.4426-0.7806-0.4824-0.9959 0.41391-0.7027 2.9252 0.2325 1.9914 0.1724 3.7403-0.1335 3.8865-0.306 0.14619-0.274 1.8408 0.071 3.7658l0.6272 3.5 0.1317-3.191c0.1975-4.7897 2.0161-5.0214 1.9502-0.24848-0.031 2.2558 0.3344 4.4929 0.8124 4.9712 0.4921 0.49252 0.7979-1.7477 0.7051-5.1649-0.093-3.4325 0.4726-7.5581 1.3122-9.5675 0.8118-1.9431 1.2228-4.1929 0.9132-4.9997-0.3451-0.89939-0.079-1.2962 0.6878-1.0258 0.6879 0.24253 2.3757-0.33493 3.7507-1.2833 2.9973-2.0672 5.8549-1.9709 9.3435 0.31493 1.4224 0.93196 3.0785 1.6945 3.6803 1.6945s0.8161 0.45 0.4762 1-0.2255 1 0.2543 1 1.4746 1.5347 2.2106 3.4105c0.9519 2.426 1.7996 3.2486 2.9366 2.8497 0.8792-0.30841 0.19 0.96938-1.5315 2.8395-4.1915 4.5534-5.449 7.1626-4.3155 8.9542 0.726 1.1476 0.918 1.0212 0.9302-0.61275 0.01-1.1324 0.6876-2.9324 1.5093-4 1.3771-1.7893 1.4631-1.5698 1.0995 2.8064-0.2214 2.6643 0.0007 4.5033 0.506 4.191 0.4953-0.30609 0.9005-2.5284 0.9005-4.9385s0.3838-4.6192 0.8529-4.9091c0.4692-0.28993 0.853 2.6085 0.853 6.441s-0.358 6.9681-0.7955 6.9681c-0.4376 0-0.6432 0.79101-0.4571 1.7578 0.1862 0.9668 0.021 4.8232-0.3665 8.5699-0.5091 4.9188-0.3501 7.279 0.5723 8.4922 0.7025 0.92406 1.2916 2.4641 1.3091 3.4224 0.03 1.6198 4.9143 6.8581 6.0318 6.4684 0.275-0.0959 1.5176 0.5384 2.7614 1.4096 2.3964 1.6785 11.802 1.5153 13.689-0.23759zm-7.45-1.8827c0-0.55 0.675-1 1.5-1s1.5 0.45 1.5 1-0.675 1-1.5 1-1.5-0.45-1.5-1zm-3.3913-0.72459c-0.3448-0.34487 0.3556-1.6729 1.5565-2.9512 2.9314-3.1204 0.831-2.9768-2.5707 0.17581-1.4837 1.375-3.0978 2.5-3.587 2.5-1.772 0-2.0994-2.051-0.5713-3.5791 0.8601-0.86007 1.5707-2.0941 1.5791-2.7423 0.01-0.73222 0.3554-0.64121 0.9134 0.24032 0.6338 1.0014 1.1078-0.0286 1.6108-3.5 0.392-2.7054 1.2185-5.5546 1.8366-6.3315 0.8779-1.1034 0.7963-1.3043-0.3725-0.91787-0.823 0.27211-1.7655 2.1503-2.0944 4.1737s-0.9444 4.0114-1.3678 4.4179c-0.4234 0.40643-0.4366-1.2758-0.029-3.7383 0.656-3.9666 0.5645-4.3312-0.8022-3.1969-1.2861 1.0674-1.6235 0.98039-2.0277-0.52275-0.2667-0.9917-0.4336-0.3406-0.3709 1.4469 0.063 1.7875 0.4983 3.25 0.9679 3.25 1.3252 0 0.3787 5.2939-1.0292 5.7562-0.6875 0.22575-1.2816-0.41454-1.3203-1.4229-0.064-1.6699-0.1517-1.655-0.9838 0.16667-0.8346 1.8271-0.9054 1.7839-0.819-0.5 0.1472-3.8934-0.1945-4.6773-1.0898-2.5-0.8089 1.9672-0.8353 1.9681-1.6114 0.0554-0.4392-1.0824-0.072-6.8381 0.828-12.981 1.1027-7.526 1.2856-11.241 0.5749-11.68-0.6281-0.38816-0.6686-0.8749-0.1021-1.225 0.517-0.31954 0.739-1.9508 0.4933-3.625-0.2811-1.9153-0.012-3.044 0.7257-3.044 0.6449 0 0.9137 0.41891 0.5972 0.9309-0.3164 0.512-0.07 1.2435 0.5487 1.6256 0.712 0.43999 0.8961 2.2069 0.5022 4.8191-0.4388 2.9097-0.3278 3.6826 0.3769 2.6244 0.5494-0.825 1.0058-2.9625 1.0142-4.75 0.01-1.7875 0.4653-3.25 1.0153-3.25 0.9796 0 1.4742 2.7004 1.1577 6.3207-0.088 1.0014 0.5927 2.5725 1.5116 3.4915 1.561 1.561 1.6328 1.4086 1.0924-2.3207-0.3182-2.1953-0.3562-3.4262-0.085-2.7352 0.2716 0.69093 0.8791 1.0181 1.35 0.72707s0.7699 1.1687 0.6645 3.2438c-0.1931 3.8024 1.678 5.495 1.9599 1.7729 0.083-1.1 0.1958-2.5625 0.25-3.25 0.054-0.6875 0.5539-1.25 1.1104-1.25 0.6066 0 0.8 1.7018 0.4829 4.25-0.4755 3.8203-0.3026 3.5929 1.7098-2.25 1.6283-4.7278 2.3355-5.8716 2.5938-4.195 0.1954 1.2678-0.1482 2.9115-0.7633 3.6528-0.8293 0.99925-0.8134 1.4494 0.062 1.7411 1.1586 0.38619 1.1104 0.63914-1.8665 9.8011-0.2681 0.825-0.6076 2.4-0.7545 3.5s-0.5311 3.8-0.8538 6c-0.633 4.3161-0.4158 3.699 4.048-11.5 0.8884-3.025 1.8498-6.175 2.1363-7 0.2866-0.825 0.5599-1.815 0.6074-2.2 0.1756-1.4232 2.4446-3.0056 3.4334-2.3945 1.6119 0.99618 0.166 7.6109-2.8623 13.095-1.5186 2.75-3.0876 6.125-3.4865 7.5l-0.7253 2.5 2.1645-2.263c1.1905-1.2446 1.8901-2.7071 1.5546-3.25-0.3356-0.5429-0.1336-0.98707 0.4489-0.98707 0.5824 0 0.9805-0.3375 0.8845-0.75-0.316-1.3579 2.4496-6.198 3.2565-5.6993 0.4343 0.26839-0.3527 2.9831-1.7488 6.0327-1.3962 3.0496-2.2799 5.8033-1.9638 6.1193 0.316 0.31606 0.9847-0.50026 1.4859-1.814 0.5012-1.3138 2.2773-5.2056 3.9468-8.6484 2.4275-5.0057 2.7854-6.51 1.7864-7.5089-0.6871-0.68707-1.0644-1.8037-0.8385-2.4814 0.3021-0.90631 0.823-0.81988 1.9697 0.32684 1.412 1.412 1.3849 2.0712-0.2875 6.9911-1.0155 2.9876-2.1104 5.4321-2.433 5.4321-0.3227 0-1.1833 2.6896-1.9126 5.9769-1.3017 5.8675-2.8731 8.3737-4.8957 7.8082-0.5607-0.1568-3.03 1.3805-5.4873 3.4161-2.4573 2.0357-4.75 3.419-5.0949 3.0742zm8.3913-1.3468c0-1.2109 1.7092-2.9367 4.4135-4.4564 1.006-0.56529 2.6296-3.6151 3.608-6.7773 0.9785-3.1622 2.329-6.4122 3.0012-7.2222 0.6722-0.80997 0.9756-1.4727 0.6743-1.4727-0.3014 0 0.3384-2.3625 1.4217-5.25s2.2272-6.0375 2.5421-7 0.9417-1.75 1.393-1.75c1.179 0-0.1044 7.1363-1.7036 9.4725-1.6449 2.403-1.7279 3.6114-0.2252 3.2775 0.6187-0.1375 1.3312 0.3125 1.5833 1s-0.015 1.25-0.5936 1.25-0.849 0.5625-0.6011 1.25c0.248 0.6875-0.4311 2.375-1.5091 3.75-1.5311 1.9529-1.9649 2.1299-1.9823 0.80902-0.012-0.93004 0.4278-1.9691 0.9778-2.309 0.55-0.33992 1-1.068 1-1.618 0-1.9803-2.0326 0.316-3.9157 4.4235-2.1277 4.6412-1.9011 6.088 0.4888 3.1215 1.1674-1.4489 1.6875-1.5993 2.0966-0.60618 0.3609 0.87594 1.0593 0.37072 2.0736-1.5 4.008-7.392 7.1741-14.334 7.6944-16.87 1.1224-5.4723 5.5623-12.789 5.5623-9.166 0 2.2223-3.5147 11.707-6.5645 17.716-1.5356 3.025-2.5992 5.5653-2.3637 5.645 0.2355 0.0798-0.429 1.0923-1.4768 2.25-1.9904 2.1994-1.8187 2.5118 0.8232 1.498 0.87-0.33384 1.5887-1.3463 1.5971-2.25 0.011-1.22 0.2233-1.3153 0.823-0.37035 0.5211 0.82098 1.2142-0.48844 1.9531-3.6894 0.63-2.7291 2.2846-7.3236 3.677-10.21 1.3924-2.8863 2.5316-5.8385 2.5316-6.5606 0-0.72207 0.6269-1.3128 1.393-1.3128 1.42 0 2.6142-1.9756 3.2771-5.4215 0.4278-2.2236 2.1907-4.5785 3.4276-4.5785 1.4126 0-6.5 18.102-8.224 18.815-0.4188 0.17303-0.5135 0.96053-0.2105 1.75 0.3029 0.78946 0.1276 1.4354-0.3895 1.4354-0.5172 0-0.9404 0.675-0.9404 1.5 0 2.246 1.5812 1.8074 2.7039-0.75 1.5495-3.5299 4.9978-9.1501 6.2889-10.25 0.6457-0.55 2.0739-2.7652 3.1739-4.9228 1.2169-2.3869 2.1178-3.3135 2.3009-2.3666 0.1654 0.85592-1.0948 4.1359-2.8006 7.2888-1.7058 3.153-2.9147 5.9195-2.6864 6.1478 0.428 0.42796 3.6613-3.9892 4.8658-6.6473 0.529-1.1673 0.6953-1.0719 0.75 0.43028 0.058 1.582-7.4781 14.57-8.4535 14.57-0.159 0-0.1012-1.0125 0.1283-2.25 0.3511-1.893 0.2132-1.8234-0.8686 0.43868-0.7073 1.4788-2.5097 4.1788-4.0054 6s-3.3827 4.2113-4.1932 5.3113c-0.9604 1.3034-1.4848 1.522-1.5055 0.62756-0.025-1.0879-0.3337-1.1219-1.488-0.16391-0.8009 0.66469-1.9592 0.89764-2.574 0.51767s-2.1426 0.27179-3.395 1.4484-3.9382 2.2883-5.9685 2.4705c-2.0303 0.18218-4.7138 1.2917-5.9633 2.4656-2.5101 2.3581-3.643 2.6886-3.643 1.0629zm-55-7.6786c0-0.77917 0.5344-1.2385 1.1875-1.0208 1.8131 0.60436 2.069 2.4375 0.3403 2.4375-0.8403 0-1.5278-0.6375-1.5278-1.4167zm0-3.231c0-0.53952-1.125-1.2633-2.5-1.6084s-2.5-0.95367-2.5-1.3524c0-1.726 1.4282-1.8217 4.6019-0.30828 3.4589 1.6494 4.6204 4.25 1.8981 4.25-0.825 0-1.5-0.44143-1.5-0.98095zm71-11.877c0-0.56337 0.45-1.3024 1-1.6424 0.55-0.33992 1-1.4824 1-2.5388s0.7356-3.7592 1.6347-6.0063c1.2335-3.0827 1.9085-3.7934 2.75-2.8952 0.8238 0.87915 0.7886 1.3101-0.1347 1.6486-0.6875 0.25209-1.25 1.2915-1.25 2.3099s-0.5248 3.1184-1.1662 4.6667-1.2039 3.2276-1.25 3.7318c-0.1175 1.2852-2.5838 1.9779-2.5838 0.72568zm-8.5326-2.4596c-0.4079-1.0113-0.238-2.3122 0.3831-2.9333 1.6463-1.6463 2.326-0.38692 1.2711 2.3554-0.8286 2.1543-0.995 2.2124-1.6542 0.57796zm5.3247-6.224c-0.7525-0.75244 1.4088-6.4587 2.4462-6.4587 0.8745 0-0.076 5.0313-1.1841 6.2667-0.3781 0.42166-0.9461 0.50809-1.2621 0.19206zm-67.56-6.4587c0-1.925 0.2058-2.7125 0.4573-1.75s0.2515 2.5375 0 3.5-0.4573 0.175-0.4573-1.75zm45.847 0.25c0.045-1.5674 0.3178-2.1049 0.6343-1.25 0.3054 0.825 1 2.0625 1.5435 2.75 0.7055 0.89241 0.5241 1.25-0.6343 1.25-1.1224 0-1.5981-0.84754-1.5435-2.75zm23.109-4.3125c0.2406-0.72187 1.0281-1.5094 1.75-1.75 0.75-0.25 1.125 0.125 0.875 0.875-0.2406 0.72187-1.0281 1.5094-1.75 1.75-0.75 0.25-1.125-0.125-0.875-0.875zm-69.496-0.6875c-0.2346-0.4125-0.456-2.2125-0.4921-4-0.044-2.1853 0.4038-3.25 1.3675-3.25 0.7882 0 1.4331 0.45 1.4331 1s-0.3721 1-0.8268 1c-0.4548 0-0.6287 1.35-0.3865 3 0.4131 2.8145-0.1345 3.9393-1.0952 2.25zm89.308-7.75c0-1.925 0.45-3.5 1-3.5s1 0.51289 1 1.1398c0 0.62686 0.7437 1.6836 1.6528 2.3483 1.9885 1.4541 0.9855 3.512-1.7118 3.512-1.5516 0-1.941-0.70214-1.941-3.5zm9.382-5.691c-0.4049-0.65504-0.2064-1.3675 0.4409-1.5833 0.6474-0.21579 1.1771-1.0298 1.1771-1.809 0-0.97866 1.1989-1.4167 3.8776-1.4167 2.2267 0 4.4075-0.63859 5.1224-1.5 0.6847-0.825 1.8686-1.5 2.6309-1.5 1.1436 0 1.1659 0.39358 0.1276 2.25-1.7521 3.1324-2.776 3.7171-6.5399 3.7347-1.9832 0.009-3.5091 0.60874-3.857 1.5153-0.6923 1.8041-1.9735 1.937-2.9796 0.30902zm-20.382-1.702c0-1.0832 2.4691-2.107 5.0818-2.107 2.3178 0 2.5356 1.5491 0.3364 2.393-2.3415 0.89853-5.4182 0.73612-5.4182-0.28602zm-36.5-1.3245c-1.1-0.63414-2.5946-1.7446-3.3214-2.4678-0.7268-0.72312-1.9643-1.3148-2.75-1.3148s-1.4286-0.43588-1.4286-0.96862c0-0.53273-0.5625-0.75276-1.25-0.48894-0.8841 0.33926-1.25-0.81727-1.25-3.9508 0-3.3127-0.6117-5.0816-2.4243-7.0111-1.3334-1.4193-2.8363-2.5806-3.3397-2.5806-2.1739 0-4.6708-4.6771-4.7027-8.809-0.018-2.37 0.3657-4.0624 0.8534-3.761 1.1586 0.71607 2.6817-1.2756 3.4532-4.5157 0.4429-1.8598-0.08-3.5286-1.8621-5.9443-1.3628-1.8472-2.4778-4.1711-2.4778-5.1642 0-0.99315-0.3375-1.8092-0.75-1.8135-1.2354-0.0128-3.1478-4.9373-2.1556-5.5505 0.4981-0.30783 0.9056-1.4194 0.9056-2.4703 0-1.0508 0.9066-3.5248 2.0147-5.4977 1.7997-3.2041 1.853-3.7488 0.5-5.1018-1.3955-1.3955-2.1173-4.3719-1.0602-4.3719 0.25 0 1.6 1.1454 3 2.5454 2.7883 2.7883 3.4 6.4546 1.0769 6.4546-0.8474 0-1.2416 0.59171-0.9318 1.3988 0.2952 0.76937 0.056 1.6959-0.5314 2.059-0.5875 0.36309-1.0682 1.5602-1.0682 2.6602s-0.45 1.7219-1 1.382c-0.55-0.33992-1 0.0835-1 0.94098 0 0.85746 0.366 1.559 0.8134 1.559 0.8437 0 6.1866 12.877 6.1866 14.91 0 0.63426-0.9117 3.8595-2.026 7.1672-1.8161 5.3912-1.8679 6.172-0.5 7.5399 0.8393 0.83927 1.526 1.9704 1.526 2.5135 0 0.54317 0.3811 0.75203 0.847 0.46412 1.1002-0.67995 6.3946 4.8305 5.5003 5.7248-0.3743 0.37437-0.1556 0.68067 0.486 0.68067 0.6417 0 1.1134 0.3375 1.0483 0.75-0.577 3.6544 0.5046 5.539 4.7095 8.2057 2.5252 1.6014 5.2708 2.6508 6.1015 2.3321 1.0633-0.40804 1.4062-0.043 1.1588 1.2335-0.4488 2.3155-1.8289 2.7155-4.3514 1.2613zm2.7049-5.5829c0.2377-1.2163 1.1247-1.6062 3.1189-1.3708 1.5327 0.18084 3.917-0.41177 5.2984-1.3169 1.6139-1.0575 2.9345-1.316 3.6947-0.72324 3.4614 2.6989 10.501 1.8385 14.691-1.7956 3.1206-2.7064 4.1824-2.505 2.7991 0.53096-1.0731 2.3553-2.6471 3.1892-7.3117 3.8738-1.0378 0.15232-2.0555 0.78255-2.2615 1.4005-0.4011 1.2032-5.9159 0.5567-7.8077-0.91523-0.6045-0.47038-1.5789-0.3304-2.2296 0.32033-0.6357 0.6357-3.2186 1.2773-5.7398 1.4258-3.8576 0.22724-4.5314 0.00069-4.2519-1.4296zm-24.205-3.6996c0-0.825 0.45-1.5 1-1.5s1 0.675 1 1.5-0.45 1.5-1 1.5-1-0.675-1-1.5zm-51.393-2.0818c-1.0834-2.8232-0.6878-6.6124 0.643-6.1586 0.6875 0.23446 1.116 1.3571 0.9521 2.4947-0.1638 1.1376 0.1811 2.3644 0.7664 2.7262 1.1354 0.70177 0.4713 2.5195-0.9205 2.5195-0.4587 0-1.1072-0.7118-1.441-1.5818zm34.393-1.8112c0-0.21616 0.675-0.65203 1.5-0.96862 0.825-0.31658 1.5-0.13972 1.5 0.39301 0 0.53274-0.675 0.96862-1.5 0.96862s-1.5-0.17686-1.5-0.39301zm71.564-1.9001c0.3755-0.98622 0.9347-1.5412 1.2426-1.2333 0.3079 0.30789 0.0006 1.1148-0.6828 1.7931-0.9876 0.98026-1.1025 0.8654-0.5598-0.5598zm30.785-7.7069c0.3427-1.375 0.6291-3.0625 0.6366-3.75 0.019-1.722 1.9512-1.5764 2.6322 0.19828 0.3057 0.79655-0.4449 2.484-1.668 3.75l-2.2237 2.3017 0.6229-2.5zm-103.85-3c0.3399-0.55 1.0415-1 1.559-1 0.5176 0 0.941 0.45 0.941 1s-0.7016 1-1.559 1c-0.8575 0-1.2809-0.45-0.941-1zm79.5-1.8776c0-0.48265 0.675-1.4378 1.5-2.1224 0.825-0.68469 1.5017-0.85229 1.5037-0.37245 0 0.47985 0.9499-0.67953 2.1063-2.5764 1.4751-2.4198 2.2035-5.5527 2.441-10.5 0.1862-3.8781 0.3634-7.3886 0.3938-7.8012 0.03-0.4125 0.4579-0.75 0.9502-0.75 1.576 0 1.7893 8.3196 0.359 14-0.8863 3.5197-2.422 6.4902-4.2653 8.25-2.8721 2.7422-4.9887 3.5367-4.9887 1.8724zm-83-17.745c0-1.3288 0.2715-1.3971 1.5-0.37755 0.825 0.68469 1.5 1.4148 1.5 1.6224 0 0.20766-0.675 0.37756-1.5 0.37756s-1.5-0.7301-1.5-1.6224zm83.105-24.438c-3.0044-1.2319-2.6457-1.5311 2.6454-2.2064 2.7389-0.34956 4.0278-0.18259 3.6248 0.46955-0.3958 0.64033 0.1985 0.75048 1.6181 0.29993 1.6505-0.52384 2.1257-0.3539 1.7979 0.64287-0.5445 1.6557-6.4119 2.1367-9.6862 0.7941zm-78.105-4.8211c0-0.55 0.45-1.2781 1-1.618 0.55-0.33992 1-0.16803 1 0.38197s-0.45 1.2781-1 1.618c-0.55 0.33992-1 0.16803-1-0.38197zm50.338-4.9206c-3.129-3.6298-3.183-3.6481-5.25-1.7775-1.6 1.448-2.0884 1.555-2.0884 0.45727 0-0.78801 0.883-2.1888 1.9622-3.1129 1.8701-1.6012 2.1435-1.506 5.8214 2.0278 2.2406 2.1528 4.6115 3.563 5.6529 3.3624 1.1483-0.22117 1.6342 0.1387 1.3503 1-0.8636 2.6202-4.2753 1.7238-7.4484-1.957zm20.398-0.56864c-4.2722-3.261-4.4567-3.3069-5.6459-1.4026-1.9837 3.1764-2.4588 1.2054-0.5062-2.1001 1.6787-2.8418 1.8682-2.9126 3.3474-1.2498 0.8624 0.9694 2.3555 2.0547 3.318 2.4118 0.9625 0.35706 1.75 1.1399 1.75 1.7396 0 0.59972 0.45 0.81229 1 0.47237s1-0.1556 1 0.4096 0.675 0.76861 1.5 0.45203c0.9498-0.36449 1.5 0.0138 1.5 1.0314 0 2.5051-2.4497 1.9101-7.2633-1.7642zm-34.549-4.6913c0.2406-0.72188 1.0281-1.5094 1.75-1.75 0.75-0.25 1.125 0.125 0.875 0.875-0.2406 0.72187-1.0281 1.5094-1.75 1.75-0.75 0.25-1.125-0.125-0.875-0.875z\" style=\"fill:#000000\" id=\"path2830\"></path>\n  </g>\n  <metadata>\n    \n      \n        image/svg+xml\n        \n        \n        \n          \n            Openclipart\n          \n        \n        World Cup\n        2010-06-11T11:35:53\n        \n        https://openclipart.org/detail/65779/world-cup-by-clemzo\n        \n          \n            Clemzo\n          \n        \n        \n          \n            coupe\n            cup\n            foot-ball\n            monde\n            world\n            worldcup\n          \n        \n      \n      \n        \n        \n        \n      \n    \n  </metadata>\n</svg>\n\n</div>",
    "css": "/* From Uiverse.io by aboalsim114 - Tags: card */\n.card {\n  position: relative;\n  padding: 10px;\n  font: 500 15px / 15px Almohtarif;\n  vertical-align: baseline;\n  box-sizing: border-box;\n  background: #fff;\n  border-radius: 8px;\n  width: 200px;\n  height: 250px;\n  z-index: 1;\n  transition: all 500ms ease-in-out;\n}\n\n.card::after {\n  content: '2022';\n  width: 200px;\n  height: 35%;\n  background-color: blue;\n  position: absolute;\n  z-index: -1;\n  left: 0;\n  top: 0;\n  display: flex;\n  font-size: 30px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  color: #fff;\n}\n\n.card::before {\n  content: 'france';\n  color: #fff;\n  text-transform: uppercase;\n  width: 200px;\n  height: 35%;\n  background-color: red;\n  position: absolute;\n  z-index: -1;\n  right: 0;\n  bottom: 0;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n}\n\n.card:hover {\n  transform: scale(1.1);\n}\n\n.card svg {\n  width: 100px;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n}"
  },
  {
    "id": "uiverse-fatima-zahrae-acharki_calm-ape-12",
    "title": "Calm Ape",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "Fatima-Zahrae-Acharki",
      "profileUrl": "https://uiverse.io/Fatima-Zahrae-Acharki/calm-ape-12"
    },
    "license": "MIT",
    "description": "Calm Ape · card by Fatima-Zahrae-Acharki",
    "tags": [
      "card",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div class=\"card\">\n    <div class=\"heading\">Join the Open-Source <span>Galaxy</span></div>\n    <div class=\"content\">\n        <div class=\"item item--create\">\n            <svg height=\"24\" width=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z\" fill=\"currentColor\"></path>\n            </svg>\n            <span>Create</span>\n        </div>\n        <div class=\"item item--post\">\n            <svg height=\"24\" width=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M4.99958 12.9998C4.99958 7.91186 7.90222 3.56348 11.9996 1.81787C16.0969 3.56348 18.9996 7.91186 18.9996 12.9998C18.9996 13.8227 18.9236 14.6263 18.779 15.4026L20.7194 17.2352C20.8845 17.3911 20.9238 17.6388 20.815 17.8381L18.3196 22.4132C18.1873 22.6556 17.8836 22.7449 17.6412 22.6127C17.5993 22.5898 17.5608 22.5611 17.5271 22.5273L15.2925 20.2927C15.1049 20.1052 14.8506 19.9998 14.5854 19.9998H9.41379C9.14857 19.9998 8.89422 20.1052 8.70668 20.2927L6.47209 22.5273C6.27683 22.7226 5.96025 22.7226 5.76498 22.5273C5.73122 22.4935 5.70246 22.4551 5.67959 22.4132L3.18412 17.8381C3.07537 17.6388 3.11464 17.3911 3.27975 17.2352L5.22014 15.4026C5.07551 14.6263 4.99958 13.8227 4.99958 12.9998ZM6.47542 19.6955L7.29247 18.8785C7.85508 18.3159 8.61814 17.9998 9.41379 17.9998H14.5854C15.381 17.9998 16.1441 18.3159 16.7067 18.8785L17.5237 19.6955L18.5056 17.8954L17.4058 16.8566C16.9117 16.39 16.6884 15.7044 16.8128 15.0363C16.9366 14.3721 16.9996 13.691 16.9996 12.9998C16.9996 9.13025 15.0045 5.69953 11.9996 4.04021C8.99462 5.69953 6.99958 9.13025 6.99958 12.9998C6.99958 13.691 7.06255 14.3721 7.18631 15.0363C7.31078 15.7044 7.08746 16.39 6.59338 16.8566L5.49353 17.8954L6.47542 19.6955ZM11.9996 12.9998C10.895 12.9998 9.99958 12.1044 9.99958 10.9998C9.99958 9.89525 10.895 8.99982 11.9996 8.99982C13.1041 8.99982 13.9996 9.89525 13.9996 10.9998C13.9996 12.1044 13.1041 12.9998 11.9996 12.9998Z\" fill=\"currentColor\"></path>\n            </svg>\n            <span>Post</span>\n        </div>\n        <div class=\"item item--inspire\">\n            <svg height=\"24\" width=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M10.6144 17.7956C10.277 18.5682 9.20776 18.5682 8.8704 17.7956L7.99275 15.7854C7.21171 13.9966 5.80589 12.5726 4.0523 11.7942L1.63658 10.7219C.868536 10.381.868537 9.26368 1.63658 8.92276L3.97685 7.88394C5.77553 7.08552 7.20657 5.60881 7.97427 3.75892L8.8633 1.61673C9.19319.821767 10.2916.821765 10.6215 1.61673L11.5105 3.75894C12.2782 5.60881 13.7092 7.08552 15.5079 7.88394L17.8482 8.92276C18.6162 9.26368 18.6162 10.381 17.8482 10.7219L15.4325 11.7942C13.6789 12.5726 12.2731 13.9966 11.492 15.7854L10.6144 17.7956ZM4.53956 9.82234C6.8254 10.837 8.68402 12.5048 9.74238 14.7996 10.8008 12.5048 12.6594 10.837 14.9452 9.82234 12.6321 8.79557 10.7676 7.04647 9.74239 4.71088 8.71719 7.04648 6.85267 8.79557 4.53956 9.82234ZM19.4014 22.6899 19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899ZM18.3745 19.0469 18.937 18.4883 19.4878 19.0469 18.937 19.5898 18.3745 19.0469Z\" fill=\"currentColor\"></path>\n            </svg>\n            <span>Inspire</span>\n        </div>\n    </div>\n    <button>Code to Infinity!</button>\n</div>",
    "css": "/* From Uiverse.io by Fatima-Zahrae-Acharki - Tags: card */\n.card {\n  height: 350px;\n  width: 300px;\n  overflow: hidden;\n  border: solid none;\n  border-radius: 20px;\n  background-image: linear-gradient(to bottom right,darkblue, 180px,purple);\n  filter: blur(0.4px);\n  box-shadow: 10px 0px 1500px rgb(141, 88, 255);\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  transition: all 1s linear;\n  animation: fly 6s linear;\n}\n\n.card::before {\n  content: '';\n  position: absolute;\n  height: 100%;\n  width: 800px;\n  top: 0;\n  z-index: -1;\n  /* background-image: linear-gradient(360deg, #7b84ff, #932eff, #ff78ed, #f7d9e9); */\n  animation: rotate 5s linear infinite;\n  transition: all 0.2s linear;\n}\n\n.card::after {\n  content: '';\n  position: absolute;\n  inset: 1px;\n  z-index: -1;\n  border-radius: 10px;\n  background-image: linear-gradient(to bottom right,#00076f, #44008b,180px,#9f45b0,#e54ed0,#ffe4f2);\n}\n\n.heading {\n  margin-top: 20px;\n  font-size: 20px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.content {\n  height: 150px;\n  width: auto;\n  font-size: 20px;\n  font-family: monospace;\n  font-weight: bold;\n  letter-spacing: 1px;\n  margin-top: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.item {\n  border-radius: 6px;\n  color: #ffffff;\n  height: 100px;\n  width: 100px;\n  margin-top: 15px;\n  cursor: pointer;\n  user-select: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.item--create:hover {\n  transition: all 0.3s linear;\n  transform: translateX(-10px);\n  background-color: #e600ff;\n}\n\n.item--inspire:hover {\n  transition: all 0.3s linear;\n  transform: translateX(-10px);\n  background-color: #44008b;\n}\n\n.item--post:hover {\n  transition: all 0.3s linear;\n  transform: translateX(10px);\n  background-color: #ae04d1;\n}\n\n.item svg {\n  fill: #ffffff;\n  height: 26px;\n  margin-bottom: 10px;\n  width: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.item .item--create {\n  border: 1px solid rgb(255, 255, 255);\n}\n\n.item--create svg {\n  animation: spin 1s linear infinite;\n}\n\n.item--post svg {\n  animation: flying 2s linear infinite;\n}\n\n.item--inspire svg {\n  animation: flash 1s linear infinite;\n}\n\n@keyframes flash {\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes flying {\n  0% {\n    transform: translateY(10px);\n  }\n\n  50% {\n    transform: translateY(-2px);\n  }\n\n  100% {\n    transform: translateY(2px);\n  }\n}\n\n@keyframes spin {\n  from {\n  }\n\n  to {\n    transform: rotate(380deg);\n  }\n}\n\nbutton {\n  height: 50px;\n  width: auto;\n  background: transparent;\n  border: 2px solid rgb(107, 19, 166);\n  border-radius: 5px;\n  font-size: 15px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  text-transform: uppercase;\n  padding: 10px 10px;\n  margin-top: 55px;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n  transition: all 0.5s ease;\n  color: rgb(255, 255, 255);\n  cursor: pointer;\n  letter-spacing: 1px;\n}\n\nbutton:hover {\n  filter: blur(1px);\n  transform: scale(1.1);\n  color: #2a0058;\n}"
  },
  {
    "id": "uiverse-javadpg_strong-rabbit-3",
    "title": "Strong Rabbit",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "javadpg",
      "profileUrl": "https://uiverse.io/javadpg/strong-rabbit-3"
    },
    "license": "MIT",
    "description": "Strong Rabbit · card by javadpg",
    "tags": [
      "card",
      "hover",
      "modern",
      "neon",
      "blur filter",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 2000,
    "accentColor": null,
    "html": "<div class=\"card1\">\n        \n    </div>",
    "css": "/* From Uiverse.io by javadpg - Tags: card, hover, modern, neon, blur filter */\n.card1 {\n  background-color: black;\n  width: 250px;\n  height: 300px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  box-shadow: 2px 2px 19px;\n}\n\n.card1::before {\n  content: \"\";\n  position: absolute;\n  z-index: -19;\n  width: 262px;\n  height: 312px;\n  margin: auto;\n  background: rgb(4,0,255);\n  background: linear-gradient(135deg, rgba(4,0,255,1) 0%, rgba(136,0,255,1) 35%, rgba(209,0,255,1) 100%);\n  border-radius: 6px;\n}\n\n.card1::after {\n  content: \"\";\n  position: absolute;\n  z-index: -19;\n  width: 262px;\n  height: 312px;\n  margin: auto;\n  background: rgb(4,0,255);\n  background: linear-gradient(135deg, rgba(4,0,255,1) 0%, rgba(136,0,255,1) 35%, rgba(209,0,255,1) 100%);\n  border-radius: 6px;\n  filter: blur(20px);\n  transition: 2s;\n}\n\n.card1:hover::after {\n  animation: cardafter 2.5s infinite forwards;\n}\n\n@keyframes cardafter {\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}"
  },
  {
    "id": "uiverse-pedertanberg_dry-goose-81",
    "title": "Dry Goose",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "pedertanberg",
      "profileUrl": "https://uiverse.io/pedertanberg/dry-goose-81"
    },
    "license": "MIT",
    "description": "Dry Goose · card by pedertanberg",
    "tags": [
      "card",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 250,
    "accentColor": null,
    "html": "<div class=\"card\">Good morning</div>",
    "css": "/* From Uiverse.io by pedertanberg - Tags: card */\n.card {\n width: 150px;\n height: 200px;\n background: #ffffff;\n transform: rotate(20deg) skew(-10deg, -5deg);\n transition: box_shadow .25s ease-in;\n display: flex;\n justify-content: center;\n text-align: center;\n font-size: 20px;\n line-height: 200px;\n}\n\n.card:hover {\n box-shadow: rgba(255,255,255,0.5) 5px 3px,\n  rgba(255,255,255,0.4) 10px 6px,\n  rgba(255,255,255,0.3) 15px 9px;\n}"
  },
  {
    "id": "uiverse-alexruix_itchy-mole-56",
    "title": "Itchy Mole",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "alexruix",
      "profileUrl": "https://uiverse.io/alexruix/itchy-mole-56"
    },
    "license": "MIT",
    "description": "Itchy Mole · card by alexruix",
    "tags": [
      "card",
      "profile",
      "gradient",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<div class=\"card\">\n    <div class=\"imgbox\">\n        <div class=\"img\"></div>\n    </div>\n    <div class=\"details\">\n        <h2 class=\"title\">John Doe</h2>\n        <span class=\"caption\">Developer</span>\n    </div>\n</div>",
    "css": "/* From Uiverse.io by alexruix - Tags: profile, gradient, card */\n.card {\n  overflow: visible;\n  position: relative;\n  width: 190px;\n  height: 254px;\n  background: #fff;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, .2);\n}\n\n.card:before,\n.card:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 4px;\n  background: #fff;\n  transition: 0.5s;\n  z-index: -99;\n}\n\n.details {\n  position: absolute;\n  left: -10px;\n  right: 0;\n  bottom: 5px;\n  height: 60px;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n/*Image*/\n.imgbox {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  bottom: 10px;\n  right: 10px;\n  background: #222;\n  transition: 0.5s;\n  z-index: 1;\n}\n\n.img {\n  background: #4158D0;\n  background-image: linear-gradient(45deg, #4158D0, #C850C0);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n/*Text*/\n.title {\n  font-weight: 600;\n  font-size: 20px;\n  color: #777;\n}\n\n.caption {\n  font-weight: 500;\n  font-size: 16px;\n  color: #4158D0;\n  display: block;\n  margin-top: 5px;\n}\n\n/*Hover*/\n.card:hover .imgbox {\n  bottom: 80px;\n}\n\n.card:hover:before {\n  transform: rotate(20deg);\n}\n\n.card:hover:after {\n  transform: rotate(10deg);\n  box-shadow: 0 2px 20px rgba(0, 0, 0, .2);\n}"
  },
  {
    "id": "uiverse-akshat-patel28_light-otter-66",
    "title": "Light Otter",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "akshat-patel28",
      "profileUrl": "https://uiverse.io/akshat-patel28/light-otter-66"
    },
    "license": "MIT",
    "description": "Light Otter · card by akshat-patel28",
    "tags": [
      "card",
      "box-shadow",
      "widget",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"card\">\n<p class=\"time-text\"><span>11:11</span><span class=\"time-sub-text\">PM</span></p>\n<p class=\"day-text\">Wednesday, June 15th</p>\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" stroke-width=\"0\" fill=\"currentColor\" stroke=\"currentColor\" class=\"moon\"><path d=\"M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z\"></path><path d=\"M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z\"></path></svg>\n</div>",
    "css": "/* From Uiverse.io by akshat-patel28 - Tags: card, box-shadow, widget */\n.card {\n  width: 280px;\n  height: 150px;\n  background: rgb(17, 4, 134);\n  border-radius: 15px;\n  box-shadow: rgb(0,0,0,0.7) 5px 10px 50px ,rgb(0,0,0,0.7) -5px 0px 250px;\n  display: flex;\n  color: white;\n  justify-content: center;\n  position: relative;\n  flex-direction: column;\n  background: linear-gradient(to right, rgb(20, 30, 48), rgb(36, 59, 85));\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n}\n\n.card:hover {\n  box-shadow: rgb(0,0,0) 5px 10px 50px ,rgb(0,0,0) -5px 0px 250px;\n}\n\n.time-text {\n  font-size: 50px;\n  margin-top: 0px;\n  margin-left: 15px;\n  font-weight: 600;\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n}\n\n.time-sub-text {\n  font-size: 15px;\n  margin-left: 5px;\n}\n\n.day-text {\n  font-size: 18px;\n  margin-top: 0px;\n  margin-left: 15px;\n  font-weight: 500;\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n}\n\n.moon {\n  font-size: 20px;\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  transition: all 0.3s ease-in-out;\n}\n\n.card:hover > .moon {\n  font-size: 23px;\n}"
  },
  {
    "id": "uiverse-aadium_swift-rat-96",
    "title": "Swift Rat",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "aadium",
      "profileUrl": "https://uiverse.io/aadium/swift-rat-96"
    },
    "license": "MIT",
    "description": "Swift Rat · card by aadium",
    "tags": [
      "card",
      "shoe",
      "ecommerce",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 150,
    "accentColor": null,
    "html": "<div class=\"card\">\n  <div class=\"image\">\n\t\t<svg xml:space=\"preserve\" viewBox=\"0 0 456 456\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\" id=\"Capa_1\" version=\"1.1\">\n\t\t<g>\n\t\t\t<path d=\"M8,230.627v56h66.918C69.232,254.838,41.4,230.627,8,230.627z\" style=\"fill:#ac646b;\"></path>\n\t\t\t<path d=\"M83.044,286.627H448v-2.542c0-7.779-5.595-14.431-13.259-15.763L264,238.627l-15.181-15.181\n\t\t\t\tc-0.228,0.227-0.476,0.438-0.764,0.611l-24.061,14.437c0.001,0.045,0.007,0.089,0.007,0.134c0,4.418-3.582,8-8,8s-8-3.582-8-8\n\t\t\t\ts3.582-8,8-8c1.41,0,2.733,0.368,3.883,1.008l23.203-13.922l-10.336-10.336c-0.275,0.323-0.592,0.617-0.976,0.848l-23.78,14.269\n\t\t\t\tc0.001,0.045,0.007,0.088,0.007,0.134c0,4.418-3.582,8-8,8s-8-3.582-8-8s3.582-8,8-8c1.41,0,2.732,0.368,3.883,1.008l23.203-13.922\n\t\t\t\tl-10.231-10.231c-0.193,0.175-0.404,0.334-0.636,0.473l-24.226,14.538c0.001,0.045,0.007,0.089,0.007,0.134c0,4.418-3.582,8-8,8\n\t\t\t\ts-8-3.582-8-8s3.582-8,8-8c1.41,0,2.732,0.367,3.882,1.008l23.202-13.924l-10.334-10.334c-0.275,0.323-0.592,0.617-0.976,0.848\n\t\t\t\tl-23.78,14.269c0.001,0.045,0.007,0.088,0.007,0.134c0,4.418-3.582,8-8,8s-8-3.582-8-8s3.582-8,8-8c1.41,0,2.732,0.368,3.883,1.008\n\t\t\t\tl23.203-13.922L176,150.627l-19.314-19.314c-2.588-2.588-6.784-2.588-9.373,0c-6.248,6.248-6.248,16.379,0,22.627l2.84,2.84\n\t\t\t\tL20.294,187.7C13.087,189.416,8,195.856,8,203.265v19.362C45.823,222.627,77.272,250.404,83.044,286.627z\" style=\"fill:#ac646b;\"></path>\n\t\t\t<path d=\"M448,286.627H83.044c-5.772-36.224-37.221-64-75.044-64v8c33.4,0,61.232,24.21,66.918,56H8\n\t\t\t\tc-4.418,0-8,3.582-8,8v24c0,4.418,3.582,8,8,8h8h104h16c4.418,0,8-3.582,8-8c0-4.222,3.74-7.466,7.92-6.869l81.567,11.652\n\t\t\t\tc14.99,2.142,30.113,3.216,45.255,3.216H448c4.418,0,8-3.582,8-8v-24C456,290.209,452.418,286.627,448,286.627z\" style=\"fill:#55323C;\"></path>\n\t\t\t<path d=\"M168,194.627c-1.352,0-2.68-0.691-3.43-1.941c-1.141-1.895-0.523-4.352,1.375-5.488l5.937-3.563\n\t\t\t\tc-1.15-0.64-2.473-1.008-3.883-1.008c-4.418,0-8,3.582-8,8s3.582,8,8,8s8-3.582,8-8c0-0.045-0.006-0.089-0.007-0.134l-5.938,3.563\n\t\t\t\tC169.414,194.444,168.703,194.627,168,194.627z\" style=\"fill:#7D5050;\"></path>\n\t\t\t<path d=\"M184,210.627c-1.352,0-2.68-0.691-3.43-1.941c-1.141-1.895-0.523-4.352,1.375-5.488l5.937-3.563\n\t\t\t\tc-1.15-0.64-2.473-1.008-3.882-1.008c-4.418,0-8,3.582-8,8s3.582,8,8,8s8-3.582,8-8c0-0.045-0.006-0.089-0.007-0.134l-5.938,3.564\n\t\t\t\tC185.414,210.444,184.703,210.627,184,210.627z\" style=\"fill:#7D5050;\"></path>\n\t\t\t<path d=\"M200,226.627c-1.352,0-2.68-0.691-3.43-1.941c-1.141-1.895-0.523-4.352,1.375-5.488l5.937-3.563\n\t\t\t\tc-1.15-0.64-2.473-1.008-3.883-1.008c-4.418,0-8,3.582-8,8s3.582,8,8,8s8-3.582,8-8c0-0.045-0.006-0.089-0.007-0.134l-5.938,3.563\n\t\t\t\tC201.414,226.444,200.703,226.627,200,226.627z\" style=\"fill:#7D5050;\"></path>\n\t\t\t<path d=\"M216,242.627c-1.352,0-2.68-0.691-3.43-1.941c-1.141-1.895-0.523-4.352,1.375-5.488l5.938-3.563\n\t\t\t\tc-1.15-0.64-2.473-1.008-3.883-1.008c-4.418,0-8,3.582-8,8s3.582,8,8,8s8-3.582,8-8c0-0.045-0.006-0.089-0.007-0.134l-5.939,3.563\n\t\t\t\tC217.414,242.444,216.703,242.627,216,242.627z\" style=\"fill:#7D5050;\"></path>\n\t\t\t<path d=\"M171.883,183.635l-5.937,3.563c-1.898,1.137-2.516,3.594-1.375,5.488\n\t\t\t\tc0.75,1.25,2.078,1.941,3.43,1.941c0.703,0,1.414-0.184,2.055-0.57l5.938-3.563l23.78-14.269c0.384-0.23,0.701-0.525,0.976-0.848\n\t\t\t\tc1.085-1.271,1.308-3.13,0.399-4.641c-1.133-1.895-3.609-2.492-5.484-1.371l-0.579,0.347L171.883,183.635z\" style=\"fill:#55323C;\"></path>\n\t\t\t<path d=\"M187.882,199.635l-5.937,3.563c-1.898,1.137-2.516,3.594-1.375,5.488\n\t\t\t\tc0.75,1.25,2.078,1.941,3.43,1.941c0.703,0,1.414-0.184,2.055-0.57l5.938-3.564l24.226-14.538c0.232-0.139,0.443-0.299,0.636-0.473\n\t\t\t\tc1.385-1.256,1.74-3.352,0.739-5.015c-1.133-1.902-3.609-2.492-5.484-1.371l-1.025,0.615L187.882,199.635z\" style=\"fill:#55323C;\"></path>\n\t\t\t<path d=\"M203.883,215.635l-5.937,3.563c-1.898,1.137-2.516,3.594-1.375,5.488\n\t\t\t\tc0.75,1.25,2.078,1.941,3.43,1.941c0.703,0,1.414-0.184,2.055-0.57l5.938-3.563l23.78-14.269c0.384-0.23,0.701-0.525,0.976-0.848\n\t\t\t\tc1.085-1.271,1.308-3.13,0.399-4.641c-1.141-1.898-3.602-2.496-5.484-1.371l-0.579,0.347L203.883,215.635z\" style=\"fill:#55323C;\"></path>\n\t\t\t<path d=\"M219.883,231.635l-5.938,3.563c-1.898,1.137-2.516,3.594-1.375,5.488\n\t\t\t\tc0.75,1.25,2.078,1.941,3.43,1.941c0.703,0,1.414-0.184,2.055-0.57l5.939-3.563l24.061-14.437c0.288-0.173,0.537-0.384,0.764-0.611\n\t\t\t\tc1.271-1.267,1.578-3.271,0.611-4.877c-1.141-1.898-3.609-2.496-5.484-1.371l-0.859,0.516L219.883,231.635z\" style=\"fill:#55323C;\"></path>\n\t\t</g>\n\t\t</svg>\n  </div>\n\t<div class=\"productTitle\">\n\t\tNimbus Formale\n\t</div>\n\t<div class=\"cost\">\n\t\t$60.99\n\t</div>\n\t<div class=\"radio-inputs\">\n  <label class=\"radio\">\n    <input checked=\"\" name=\"radio\" type=\"radio\">\n    <span class=\"name\">B</span>\n  </label>\n  <label class=\"radio\">\n    <input name=\"radio\" type=\"radio\">\n    <span class=\"name\">D</span>\n  </label>\n      \n  <label class=\"radio\">\n    <input name=\"radio\" type=\"radio\">\n    <span class=\"name\">2E</span>\n  </label>\n  \n  <label class=\"radio\">\n    <input name=\"radio\" type=\"radio\">\n    <span class=\"name\">4E</span>\n  </label>\n</div>\n\t<button class=\"addtocart\">Add to Cart</button>\n</div>",
    "css": "/* From Uiverse.io by aadium - Tags: card, shoe, ecommerce */\n.card {\n  width: 230px;\n  height: 340px;\n  background: #131313;\n  border: 2px solid #bb6c74;\n  border-radius: 40px;\n}\n\n.image {\n  background-color: #1f1f1fa3;\n  border-radius: 2.5em 2.5em 0em 0em;\n  width: 100%;\n  height: 37%;\n  padding: 2px;\n}\n\n.image svg {\n  width: 75%;\n  margin-top: -25px;\n  margin-left: 30px;\n}\n\n.productTitle {\n  text-align: center;\n  font-size: 22px;\n  font-weight: bold;\n  color: #bb6c74;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  margin-top: 10px;\n}\n\n.cost {\n  text-align: center;\n  margin-top: 10px;\n  font-weight: bold;\n  color: white;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.radio-inputs {\n  position: relative;\n  margin-top: 20px;\n  margin-left: 13px;\n  display: flex;\n  flex-wrap: wrap;\n  border-radius: 0.5rem;\n  background-color: #1c1c1c;\n  box-sizing: border-box;\n  box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);\n  padding: 0.25rem;\n  width: 200px;\n  font-size: 14px;\n}\n\n.radio-inputs .radio {\n  flex: 1 1 auto;\n  text-align: center;\n}\n\n.radio-inputs .radio input {\n  display: none;\n}\n\n.radio-inputs .radio .name {\n  display: flex;\n  font-weight: 600;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.5rem;\n  border: none;\n  padding: .5rem 0;\n  color: #bb6c74;\n  transition: all .15s ease-in-out;\n}\n\n.radio-inputs .radio input:checked + .name {\n  background-color: #000;\n  color: #fff;\n  font-weight: 600;\n}\n\n.addtocart {\n  width: 100%;\n  margin-top: 19px;\n  padding: 15px;\n  border: none;\n  border-top: 2px solid #bb6c74;\n  background-color: #131313;\n  color: #bb6c74;\n  font-weight: bold;\n  font-size: 15px;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  border-radius: 0px 0px 38px 38px;\n  transition: 0.2s;\n}\n\n.addtocart:hover {\n  background-color: #bb6c74;\n  border-top: 2px solid transparent;\n  color: #111111;\n}"
  },
  {
    "id": "uiverse-abhusha08_happy-cougar-51",
    "title": "Happy Cougar",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "abhusha08",
      "profileUrl": "https://uiverse.io/abhusha08/happy-cougar-51"
    },
    "license": "MIT",
    "description": "Happy Cougar · card by abhusha08",
    "tags": [
      "card",
      "flashy",
      "gradient",
      "button",
      "hover",
      "hover effect",
      "buttons"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<div class=\"card\">\n  <button class=\"red-btn\">OPS TEAM</button>\n\n  <button class=\"blue-btn\">START-UP</button>\n</div>",
    "css": "/* From Uiverse.io by abhusha08  - Tags: flashy, gradient, button, card, hover, hover effect, buttons */\n.card {\n  display: flex;\n  flex-direction: column;\n  background: lightgrey;\n}\n\n.red-btn {\n  width: 300px;\n  height: 150px;\n  margin: 15px;\n  background: rgb(255, 0, 0);\n  background: rgb(131, 58, 180);\n  background: linear-gradient(\n    90deg,\n    rgba(131, 58, 180, 1) 0%,\n    rgba(253, 29, 29, 1) 50%,\n    rgba(252, 176, 69, 1) 100%\n  );\n  color: white;\n  border: none;\n  border-radius: 0.625em;\n  font-size: 20px;\n  font-weight: bold;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  overflow: hidden;\n}\n.blue-btn {\n  width: 300px;\n  height: 150px;\n  margin: 15px;\n  background: rgb(0, 8, 144);\n  background: linear-gradient(\n    90deg,\n    rgba(0, 8, 144, 1) 0%,\n    rgba(16, 0, 255, 1) 22%,\n    rgba(86, 255, 247, 1) 100%\n  );\n  color: white;\n  border: none;\n  border-radius: 0.625em;\n  font-size: 20px;\n  font-weight: bold;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  overflow: hidden;\n}\n\nbutton:hover {\n  color: rgb(0, 0, 0);\n}\n\nbutton:after {\n  content: \"\";\n  background: white;\n  position: absolute;\n  z-index: -1;\n  left: -20%;\n  right: -20%;\n  top: 0;\n  bottom: 0;\n  transform: skewX(-45deg) scale(0, 1);\n  transition: all 0.5s;\n}\n\nbutton:hover:after {\n  transform: skewX(-45deg) scale(1, 1);\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}"
  },
  {
    "id": "uiverse-manishtmang_shaggy-parrot-26",
    "title": "Shaggy Parrot",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "Manishtmang",
      "profileUrl": "https://uiverse.io/Manishtmang/shaggy-parrot-26"
    },
    "license": "MIT",
    "description": "Shaggy Parrot · card by Manishtmang",
    "tags": [
      "card",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"card\">\n    <div class=\"heading\">Join the Open-Source <span>Galaxy</span></div>\n    <div class=\"content\">\n        <div class=\"item item--create\">\n            <svg height=\"24\" width=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z\" fill=\"currentColor\"></path>\n            </svg>\n            <span>Create</span>\n        </div>\n        <div class=\"item item--post\">\n            <svg height=\"24\" width=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M4.99958 12.9998C4.99958 7.91186 7.90222 3.56348 11.9996 1.81787C16.0969 3.56348 18.9996 7.91186 18.9996 12.9998C18.9996 13.8227 18.9236 14.6263 18.779 15.4026L20.7194 17.2352C20.8845 17.3911 20.9238 17.6388 20.815 17.8381L18.3196 22.4132C18.1873 22.6556 17.8836 22.7449 17.6412 22.6127C17.5993 22.5898 17.5608 22.5611 17.5271 22.5273L15.2925 20.2927C15.1049 20.1052 14.8506 19.9998 14.5854 19.9998H9.41379C9.14857 19.9998 8.89422 20.1052 8.70668 20.2927L6.47209 22.5273C6.27683 22.7226 5.96025 22.7226 5.76498 22.5273C5.73122 22.4935 5.70246 22.4551 5.67959 22.4132L3.18412 17.8381C3.07537 17.6388 3.11464 17.3911 3.27975 17.2352L5.22014 15.4026C5.07551 14.6263 4.99958 13.8227 4.99958 12.9998ZM6.47542 19.6955L7.29247 18.8785C7.85508 18.3159 8.61814 17.9998 9.41379 17.9998H14.5854C15.381 17.9998 16.1441 18.3159 16.7067 18.8785L17.5237 19.6955L18.5056 17.8954L17.4058 16.8566C16.9117 16.39 16.6884 15.7044 16.8128 15.0363C16.9366 14.3721 16.9996 13.691 16.9996 12.9998C16.9996 9.13025 15.0045 5.69953 11.9996 4.04021C8.99462 5.69953 6.99958 9.13025 6.99958 12.9998C6.99958 13.691 7.06255 14.3721 7.18631 15.0363C7.31078 15.7044 7.08746 16.39 6.59338 16.8566L5.49353 17.8954L6.47542 19.6955ZM11.9996 12.9998C10.895 12.9998 9.99958 12.1044 9.99958 10.9998C9.99958 9.89525 10.895 8.99982 11.9996 8.99982C13.1041 8.99982 13.9996 9.89525 13.9996 10.9998C13.9996 12.1044 13.1041 12.9998 11.9996 12.9998Z\" fill=\"currentColor\"></path>\n            </svg>\n            <span>Post</span>\n        </div>\n        <div class=\"item item--inspire\">\n            <svg height=\"24\" width=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M10.6144 17.7956C10.277 18.5682 9.20776 18.5682 8.8704 17.7956L7.99275 15.7854C7.21171 13.9966 5.80589 12.5726 4.0523 11.7942L1.63658 10.7219C.868536 10.381.868537 9.26368 1.63658 8.92276L3.97685 7.88394C5.77553 7.08552 7.20657 5.60881 7.97427 3.75892L8.8633 1.61673C9.19319.821767 10.2916.821765 10.6215 1.61673L11.5105 3.75894C12.2782 5.60881 13.7092 7.08552 15.5079 7.88394L17.8482 8.92276C18.6162 9.26368 18.6162 10.381 17.8482 10.7219L15.4325 11.7942C13.6789 12.5726 12.2731 13.9966 11.492 15.7854L10.6144 17.7956ZM4.53956 9.82234C6.8254 10.837 8.68402 12.5048 9.74238 14.7996 10.8008 12.5048 12.6594 10.837 14.9452 9.82234 12.6321 8.79557 10.7676 7.04647 9.74239 4.71088 8.71719 7.04648 6.85267 8.79557 4.53956 9.82234ZM19.4014 22.6899 19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899ZM18.3745 19.0469 18.937 18.4883 19.4878 19.0469 18.937 19.5898 18.3745 19.0469Z\" fill=\"currentColor\"></path>\n            </svg>\n            <span>Inspire</span>\n        </div>\n    </div>\n    <button>Code to Infinity!</button>\n</div>",
    "css": "/* From Uiverse.io by Manishtmang - Tags: card */\n/* Style for the entire card */\n.card {\n  background-color: #f9f9f9;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  display: inline-block;\n  margin: 16px;\n  padding: 16px;\n  width: 300px;\n}\n\n/* Style for the card heading */\n.heading {\n  color: #444444;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 16px;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n/* Style for the card heading span */\n.heading span {\n  color: #7eb0ff;\n}\n\n/* Style for the card content */\n.content {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Style for the card items */\n.item {\n  align-items: center;\n  background-color: #ffffff;\n  border-radius: 8px;\n  display: flex;\n  justify-content: center;\n  padding: 16px;\n}\n\n/* Style for the create item */\n.item--create {\n  background-color: #7eb0ff;\n  color: #ffffff;\n}\n\n/* Style for the create item svg */\n.item--create svg {\n  fill: #ffffff;\n}\n\n/* Style for the post item */\n.item--post {\n  background-color: #ffffff;\n  color: #444444;\n}\n\n/* Style for the post item svg */\n.item--post svg {\n  fill: #444444;\n}\n\n.item--inspire {\n  background-color: #ffffff;\n  color: #444444;\n}\n\n/* Style for the post item svg */\n.item--inspire svg {\n  fill: #444444;\n}\n\n/* Style for the item span */\n.item span {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 18px;\n  font-weight: bold;\n  margin-left: 16px;\n}\n\nbutton {\n  display: block;\n  margin: 0 auto;\n  position: relative;\n  top: 0.5em;\n  padding: 10px 20px;\n  font-size: 18px;\n  color: #fff;\n  background-color: #7eb0ff;\n  border: none;\n  border-radius: 30px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);\n  transition: all 0.3s ease-in-out;\n}\n\nbutton:hover {\n  transform: scale(1.1);\n  background-color: #5f9cff;\n}"
  },
  {
    "id": "uiverse-mykill1_rude-dodo-56",
    "title": "Rude Dodo",
    "category": "card",
    "source": "uiverse",
    "author": {
      "name": "mykill1",
      "profileUrl": "https://uiverse.io/mykill1/rude-dodo-56"
    },
    "license": "MIT",
    "description": "Rude Dodo · card by mykill1",
    "tags": [
      "card",
      "hover"
    ],
    "previewType": "css",
    "durationMs": 1000,
    "accentColor": null,
    "html": "<div class=\"card\">\n    <div class=\"content\"></div>\n</div>",
    "css": "/* From Uiverse.io by mykill1 - Tags: card */\n.card {\n  width: 190px;\n  height: 254px;\n  border-radius: 10px;\n  background: #ae3737;\n  overflow: hidden;\n  box-shadow: inset 27px 27px 54px #7a2727, inset -27px -27px 54px #e24848;\n}\n\n.content {\n  width: 160px;\n  height: 220px;\n  position: relative;\n  margin-top: 16px;\n  margin-left: 15px;\n  border: none;\n  border-radius: 10px;\n  background: #ae3737;\n  background: linear-gradient(45deg, #9d3232, #ba3b3b);\n  box-shadow: 27px -27px 54px #7a2727,\n             -27px 27px 54px #e24848;\n}\n\ncontent :hover {\n  border: 1px solid #7a2727;\n}\n\n.card :hover {\n  border: 1px solid #7a2727;\n}"
  },
  {
    "id": "uiverse-mrez321_nice-stingray-21",
    "title": "Nice Stingray",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "MRez321",
      "profileUrl": "https://uiverse.io/MRez321/nice-stingray-21"
    },
    "license": "MIT",
    "description": "Nice Stingray · hover by MRez321",
    "tags": [
      "hover",
      "tooltip",
      "transition",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"tooltip-container\">\n  <span class=\"tooltip\">Hey There!</span>\n  <span class=\"text\">Tooltip</span>\n</div>",
    "css": "/* From Uiverse.io by MRez321  - Tags: tooltip, hover, transition */\n.tooltip-container {\n  --background: #7579e7;\n  background: var(--background);\n  position: relative;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 17px;\n  border-radius: 10px;\n  width: 8em;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.tooltip {\n  position: absolute;\n  top: 0;\n  left: 30%;\n  transform: translateX(-50%);\n  padding: 0.3em 0.6em;\n  opacity: 0;\n  pointer-events: none;\n  transition: all 0.3s;\n  background: var(--background);\n  border-radius: 5px;\n  width: 7em;\n  text-align: center;\n}\n\n.tooltip::before {\n  position: absolute;\n  content: \"\";\n  height: 0.6em;\n  width: 0.6em;\n  bottom: -0.2em;\n  left: 50%;\n  transform: translate(-50%) rotate(45deg);\n  background: var(--background);\n}\n\n.tooltip-container:hover .tooltip {\n  top: -100%;\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n  animation: shake 500ms ease-in-out forwards;\n}\n\n@keyframes shake {\n  0% {\n    transform: rotate(2deg);\n  }\n  50% {\n    transform: rotate(-3deg);\n  }\n  70% {\n    transform: rotate(3deg);\n  }\n\n  100% {\n    transform: rotate(0deg);\n  }\n}\n\n.text {\n  position: relative;\n  padding: 0.7em 1.8em;\n  overflow: hidden;\n}\n\n.text::before {\n  content: \"(^_^)/\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: inherit;\n  background-color: var(--background);\n  transition: 0.3s;\n}\n\n.tooltip-container:hover .text::before {\n  top: 0;\n}"
  },
  {
    "id": "uiverse-akshat-patel28_cold-chicken-82",
    "title": "Cold Chicken",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "akshat-patel28",
      "profileUrl": "https://uiverse.io/akshat-patel28/cold-chicken-82"
    },
    "license": "MIT",
    "description": "Cold Chicken · hover by akshat-patel28",
    "tags": [
      "hover",
      "tooltip",
      "colorful",
      "color",
      "html",
      "css",
      "css effect",
      "multicolor"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"tooltip-container\">\n  <span class=\"tooltip-1\">Create your own designs.</span>\n  <span class=\"tooltip-2\">Find creative elements.</span>\n  <span class=\"tooltip-3\">Participate in challenges.</span>\n  <span>UIVERSE</span>\n</div>",
    "css": "/* From Uiverse.io by akshat-patel28  - Tags: tooltip, colorful, color, html, css, css effect, multicolor, button hover effect  */\n.tooltip-container {\n  position: relative;\n  background: #f80254;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 17px;\n  padding: 14px 26px;\n  border-radius: 5px;\n  text-align: center;\n  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.62),\n    inset 0px -2px 3px rgba(0, 0, 0, 0.48), inset 1px 1px 4px #ffffff,\n    rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,\n    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 800;\n  color: #fff;\n}\n\n.tooltip-1,\n.tooltip-2,\n.tooltip-3 {\n  position: absolute;\n  transform: translateX(-50%);\n  font-weight: 800;\n  opacity: 0;\n  pointer-events: none;\n  transition: all 0.3s;\n  border-radius: 8px 8px 8px 8px;\n  background: #ffdb0f;\n  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.62),\n    inset 0px -2px 3px rgba(0, 0, 0, 0.48), inset 1px 1px 4px #ffffff,\n    rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,\n    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;\n  min-width: 180px;\n  padding: 8px;\n  color: #ac0039;\n  font-size: 11px;\n}\n.tooltip-1 {\n  top: 0%;\n  left: 50%;\n  width: 200px;\n}\n.tooltip-2 {\n  left: 100%;\n}\n\n.tooltip-3 {\n  left: 0;\n}\n.tooltip-container:hover .tooltip-1 {\n  top: -100%;\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n}\n.tooltip-container:hover .tooltip-2 {\n  left: -100%;\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n}\n.tooltip-container:hover .tooltip-3 {\n  left: 200%;\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n}"
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
    "id": "uiverse-priyanshugupta28_chilly-eagle-55",
    "title": "Chilly Eagle",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "PriyanshuGupta28",
      "profileUrl": "https://uiverse.io/PriyanshuGupta28/chilly-eagle-55"
    },
    "license": "MIT",
    "description": "Chilly Eagle · hover by PriyanshuGupta28",
    "tags": [
      "hover",
      "tooltip",
      "animation",
      "minimalist",
      "spotify",
      "hover effect",
      "telegram",
      "pintrest"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<ul class=\"example-2\">\n  <li class=\"icon-content\">\n    <a\n      data-social=\"spotify\"\n      aria-label=\"Spotify\"\n      href=\"https://www.spotify.com/\"\n    >\n      <div class=\"filled\"></div>\n      <svg viewBox=\"0 0 100 100\" version=\"1.1\">\n        <path\n          fill=\"currentColor\"\n          d=\"M50,4C24.7,4,4,24.7,4,50s20.6,46,46,46s46-20.6,46-46S75.4,4,50,4z M71.6,71.5c0,0,0,0.1-0.1,0.1c-0.8,1.2-2,1.8-3.2,1.8  c-0.7,0-1.4-0.2-2-0.6c-10.2-6.3-23.3-7.7-38.8-4.1c-2.1,0.6-4-0.9-4.5-2.7c-0.6-2.3,0.9-4.1,2.7-4.6c17.7-4,32.6-2.3,44.4,5  c0.9,0.4,1.5,1,1.8,1.9C72.2,69.3,72.1,70.5,71.6,71.5z M76.9,59.3L76.9,59.3c-0.8,1.1-1.9,1.9-3.2,2.1c-0.2,0-0.5,0.1-0.7,0.1  c-0.8,0-1.6-0.3-2.3-0.7c-12-7.3-30.1-9.4-43.9-5c-2.5,0.6-5-0.7-5.6-3c-0.6-2.5,0.7-4.9,3-5.5c16.5-5,37.2-2.5,51.4,6.2  c0.8,0.4,1.5,1.3,1.8,2.5C77.9,57,77.6,58.3,76.9,59.3z M83.2,45.6c-1,1.4-2.7,2.1-4.4,2.1c-0.9,0-1.9-0.2-2.7-0.7c0,0,0,0,0,0  c-13.9-8.3-37.8-9.3-51.4-5.1c-2.7,0.8-5.5-0.7-6.4-3.3c-0.8-2.7,0.7-5.6,3.3-6.4c16.2-4.8,43-3.8,59.8,6.2  C83.8,39.6,84.7,42.9,83.2,45.6C83.3,45.5,83.3,45.5,83.2,45.6z\"\n        ></path>\n      </svg>\n    </a>\n    <div class=\"tooltip\">Spotify</div>\n  </li>\n  <li class=\"icon-content\">\n    <a\n      data-social=\"pinterest\"\n      aria-label=\"Pinterest\"\n      href=\"https://www.pinterest.com/\"\n    >\n      <div class=\"filled\"></div>\n      <svg xml:space=\"preserve\" viewBox=\"0 0 100 100\" version=\"1.1\">\n        <path\n          fill=\"currentColor\"\n          d=\"M83,17.8C74.5,8.9,63.4,4.3,50,4.1C37.7,4.2,26.8,8.6,17.9,17.3C8.9,26,4.3,37,4.1,50c0,0,0,0,0,0c0,9.1,2.5,17.4,7.4,24.9  c4.9,7.4,11.6,13.2,20.1,17.1c0.3,0.1,0.7,0.1,1-0.1c0.3-0.2,0.5-0.5,0.5-0.8l0-4.9c0.1-2.1,0.7-5.3,1.7-9.5c1-4,1.7-6.7,1.9-7.6  c0.7-3,1.7-7.2,3-12.6c0.1-0.2,0-0.5-0.1-0.7c-0.4-0.8-1-2.6-1.5-6.6c0.1-2.7,0.8-5.2,2.1-7.3c1.2-2,3.1-3.1,5.7-3.5  c2,0.1,4.7,0.8,5.1,5.9c-0.1,1.8-0.8,4.5-1.9,8.1c-1.2,3.8-1.9,6.3-2.1,7.6c-0.7,2.5-0.2,4.8,1.5,6.8c1.6,1.9,3.8,2.9,6.5,3.1  c4.3-0.1,8.1-2.6,11.2-7.5c1.7-3,2.9-6.3,3.5-9.7c0.7-3.4,0.7-7.1,0-10.8c-0.7-3.8-2.2-7.1-4.5-9.8c0,0-0.1-0.1-0.1-0.1  c-4.3-3.7-9.5-5.3-15.6-5c-6,0.4-11.3,2.6-15.9,6.6c-2.9,3.2-4.8,7.1-5.7,11.6c-0.9,4.6,0,9.1,2.6,13.3c0.3,0.5,0.5,0.8,0.6,1  c0,0.3,0,1-0.5,2.8c-0.5,1.8-0.9,2.2-0.9,2.2c0,0-0.1,0-0.1,0.1c0,0-0.2,0-0.4-0.1c-2.2-1-3.9-2.4-5.2-4.2c-1.3-1.9-2.1-4-2.5-6.3  c-0.3-2.5-0.4-5-0.3-7.5c0.2-2.5,0.7-5.1,1.4-7.7c3-6.9,8.5-11.9,16.3-14.8c7.8-2.9,16-3.2,24.3-0.8c6.5,2.8,11,7.4,13.6,13.7  c2.5,6.4,2.8,13.4,0.8,20.8c-2.2,7.1-6.4,12.4-12.1,15.7c-5.6,2.8-10.8,3-15.7,0.7c-1.8-1.1-3.1-2.3-3.9-3.5c-0.2-0.3-0.6-0.5-1-0.5  c-0.4,0.1-0.7,0.3-0.8,0.7c-0.7,2.7-1.3,4.7-1.6,6.2c-1.4,5.4-2.6,9.2-3.4,11c-0.8,1.6-1.6,3.1-2.4,4.3c-0.2,0.3-0.2,0.6-0.1,0.9  s0.3,0.5,0.6,0.6c4.3,1.3,8.7,2,13,2c12.4-0.1,23.2-4.6,32.1-13.4C91.1,73.9,95.8,62.9,96,50C95.9,37.5,91.5,26.7,83,17.8z\"\n        ></path>\n      </svg>\n    </a>\n    <div class=\"tooltip\">Pinterest</div>\n  </li>\n  <li class=\"icon-content\">\n    <a\n      data-social=\"dribbble\"\n      aria-label=\"Dribbble\"\n      href=\"https://dribbble.com/\"\n    >\n      <div class=\"filled\"></div>\n      <svg viewBox=\"0 0 100 100\" version=\"1.1\">\n        <path\n          fill=\"currentColor\"\n          d=\"M83.5,18.5C74.9,9.3,62.8,4,50.2,4c-6.1,0-12,1.1-17.6,3.4C15.2,14.5,4,31.3,4,50c0,13.9,6.2,26.9,17,35.7  C29.2,92.3,39.4,96,50,96c6.6,0,13.2-1.5,19.2-4.2c12.5-5.7,21.7-16.6,25.2-29.8C95.5,57.9,96,53.8,96,50  C96,38.3,91.6,27.1,83.5,18.5z M75,22.3c-0.7,0.9-1.4,1.8-2.1,2.6c-1.4,1.6-2.8,3-4.4,4.3c-0.3,0.3-0.6,0.6-1,0.8  c-1,0.9-2.1,1.7-3.2,2.5l-0.3,0.2c-1.1,0.7-2.2,1.5-3.5,2.2c-0.4,0.3-0.9,0.5-1.4,0.8c-0.8,0.5-1.7,0.9-2.7,1.4  c-0.6,0.3-1.2,0.5-1.8,0.8L54.3,38c-0.1,0-0.2,0.1-0.3,0.1c0,0,0,0,0,0c-1.3-2.6-2.4-4.9-3.5-7l-0.3-0.5c-1.1-2-2.2-4-3.3-6  l-0.7-1.3c-1.1-1.9-2.2-3.7-3.2-5.4l-0.7-1.1c-0.7-1.2-1.4-2.3-2.2-3.5c3.2-0.8,6.5-1.3,9.8-1.3c9.4,0,18.4,3.5,25.4,9.8  C75.3,21.9,75.2,22.1,75,22.3z M46.4,40.6c-1.4,0.4-2.9,0.8-4.4,1.1c-0.3,0-0.7,0.1-0.9,0.2c-6,1-12.5,1.4-19.4,1.1  c-0.3,0-0.6,0-0.9,0c-0.3,0-0.5,0-0.7,0c-2.5-0.2-4.9-0.4-7.2-0.7c2.3-11.2,9.6-20.9,19.8-26.1c2.1,3.3,4.2,6.7,6.3,10.3l0.4,0.7  c0.9,1.6,1.9,3.4,3.2,5.8l0.6,1.2C44.4,36.6,45.4,38.6,46.4,40.6z M24.4,51.1c2.2,0.1,4.2,0,6.2-0.1l0.7,0c0.4,0,0.9,0,1.3,0  c2.8-0.2,5.5-0.5,8.5-1c0.5-0.1,1-0.2,1.6-0.3l0.5-0.1c2.2-0.4,4.2-0.9,6.1-1.4c0.1,0,0.3-0.1,0.4-0.1l0.5,1.1  c1.2,2.8,2.3,5.5,3.3,8.1c0,0,0,0,0,0c-0.2,0.1-0.5,0.2-0.7,0.2c-2,0.6-4,1.4-5.9,2.2c-0.6,0.3-1.3,0.5-1.9,0.8  c-1.4,0.6-2.7,1.3-4.1,2.1l-0.3,0.2c-0.2,0.1-0.5,0.2-0.6,0.4c-1.5,0.9-3.1,1.9-4.7,3c-0.2,0.1-0.4,0.3-0.6,0.4  c-0.2,0.1-0.4,0.3-0.6,0.5c-1,0.7-2,1.5-3,2.3c-0.4,0.3-0.7,0.6-1.1,0.9l-0.3,0.3c-0.7,0.6-1.5,1.3-2.2,1.9l-0.2,0.2  c-0.4,0.4-0.7,0.7-1.1,1.1l-0.2,0.2c-0.6,0.6-1.3,1.3-2,2l-0.4,0.4c-0.2,0.2-0.4,0.4-0.5,0.6C16.1,69.9,12,60.2,12,50.3  c0,0,0.1,0,0.1,0c0.4,0,0.7,0,1.1,0.1c3.5,0.4,6.9,0.6,10.3,0.7C23.8,51,24.1,51.1,24.4,51.1z M29.5,81.9c0.2-0.2,0.3-0.4,0.5-0.5  c1-1.1,2-2.1,3-3c1.9-1.8,3.8-3.3,5.7-4.8c0.2-0.1,0.4-0.3,0.6-0.4c0.2-0.2,0.5-0.4,0.8-0.6c1.1-0.8,2.2-1.5,3.4-2.2  c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.2-0.1,0.3-0.2c1.4-0.8,2.9-1.6,4.5-2.3c0.3-0.1,0.6-0.2,0.8-0.4l0.6-0.3  c1.1-0.5,2.2-0.9,3.5-1.4c0.5-0.2,1.1-0.4,1.7-0.6l0.2-0.1c0.4-0.1,0.7-0.2,1.1-0.3c0,0,0,0,0,0c1.1,3.2,2.3,6.4,3.3,9.8l0.1,0.4  c1.1,3.6,2,7.3,2.9,10.8C51.7,89.8,39.3,88.3,29.5,81.9C29.4,81.9,29.4,81.9,29.5,81.9z M65.6,62.9c0.7-0.1,1.3-0.2,2-0.2  c2-0.2,4-0.2,5.9-0.2c0.2,0,0.4,0,0.6,0l0.2,0c2.2,0.1,4.6,0.3,6.9,0.6c0.4,0.1,0.9,0.1,1.3,0.2l0.6,0.1c0.7,0.1,1.5,0.3,2.2,0.4  c-3,7.6-8.3,14-15.2,18.3c-0.8-3.1-1.7-6.2-2.6-9.2l-0.1-0.4c-0.9-3-1.9-6.1-3.1-9.5C64.8,63.1,65.2,63,65.6,62.9z M81.6,55.2  C80,55,78.4,54.9,77,54.8l-0.9-0.1c-0.9-0.1-1.9-0.1-2.8-0.2c-0.2,0-0.3,0-0.5,0c-0.2,0-0.4,0-0.6,0c-2,0-3.9,0.1-5.9,0.3  c-0.2,0-0.3,0-0.5,0.1c-0.1,0-0.2,0-0.3,0c-1.3,0.1-2.6,0.3-3.9,0.5c-0.1-0.1-0.1-0.3-0.2-0.4c-0.1-0.2-0.2-0.5-0.3-0.7  c-1.1-2.9-2.3-5.7-3.2-7.8l-0.3-0.6c-0.1-0.1-0.1-0.3-0.2-0.4c0,0,0,0,0.1,0c0.2-0.1,0.5-0.2,0.7-0.3c0.6-0.2,1.2-0.5,1.8-0.8  c1.2-0.5,2.4-1.2,3.6-1.8c0.1-0.1,0.3-0.2,0.5-0.2c0.2-0.1,0.5-0.2,0.7-0.4c1.5-0.9,2.9-1.8,4.2-2.7l0.3-0.2  c0.2-0.1,0.4-0.3,0.6-0.4c0.9-0.6,1.9-1.4,2.8-2.2c1.5-1.2,2.9-2.5,4.3-4c0.8-0.8,1.5-1.6,2.2-2.4l0.4-0.5c0.5-0.5,0.9-1.1,1.3-1.6  C85.5,34.3,88,42.1,88,50c0,2-0.2,4.1-0.5,6.1c-0.3,0-0.6-0.1-0.8-0.1c-0.4-0.1-0.7-0.1-1.1-0.2l-1.1-0.2  C83.5,55.5,82.5,55.3,81.6,55.2z\"\n        ></path>\n      </svg>\n    </a>\n    <div class=\"tooltip\">Dribbble</div>\n  </li>\n  <li class=\"icon-content\">\n    <a\n      data-social=\"telegram\"\n      aria-label=\"Telegram\"\n      href=\"https://telegram.org/\"\n    >\n      <div class=\"filled\"></div>\n      <svg viewBox=\"0 0 100 100\" version=\"1.1\">\n        <path\n          fill=\"currentColor\"\n          d=\"M95,9.9c-1.3-1.1-3.4-1.2-7-0.1c0,0,0,0,0,0c-2.5,0.8-24.7,9.2-44.3,17.3c-17.6,7.3-31.9,13.7-33.6,14.5  c-1.9,0.6-6,2.4-6.2,5.2c-0.1,1.8,1.4,3.4,4.3,4.7c3.1,1.6,16.8,6.2,19.7,7.1c1,3.4,6.9,23.3,7.2,24.5c0.4,1.8,1.6,2.8,2.2,3.2  c0.1,0.1,0.3,0.3,0.5,0.4c0.3,0.2,0.7,0.3,1.2,0.3c0.7,0,1.5-0.3,2.2-0.8c3.7-3,10.1-9.7,11.9-11.6c7.9,6.2,16.5,13.1,17.3,13.9  c0,0,0.1,0.1,0.1,0.1c1.9,1.6,3.9,2.5,5.7,2.5c0.6,0,1.2-0.1,1.8-0.3c2.1-0.7,3.6-2.7,4.1-5.4c0-0.1,0.1-0.5,0.3-1.2  c3.4-14.8,6.1-27.8,8.3-38.7c2.1-10.7,3.8-21.2,4.8-26.8c0.2-1.4,0.4-2.5,0.5-3.2C96.3,13.5,96.5,11.2,95,9.9z M30,58.3l47.7-31.6  c0.1-0.1,0.3-0.2,0.4-0.3c0,0,0,0,0,0c0.1,0,0.1-0.1,0.2-0.1c0.1,0,0.1,0,0.2-0.1c-0.1,0.1-0.2,0.4-0.4,0.6L66,38.1  c-8.4,7.7-19.4,17.8-26.7,24.4c0,0,0,0,0,0.1c0,0-0.1,0.1-0.1,0.1c0,0,0,0.1-0.1,0.1c0,0.1,0,0.1-0.1,0.2c0,0,0,0.1,0,0.1  c0,0,0,0,0,0.1c-0.5,5.6-1.4,15.2-1.8,19.5c0,0,0,0,0-0.1C36.8,81.4,31.2,62.3,30,58.3z\"\n        ></path>\n      </svg>\n    </a>\n    <div class=\"tooltip\">Telegram</div>\n  </li>\n</ul>",
    "css": "/* From Uiverse.io by PriyanshuGupta28  - Tags: tooltip, animation, minimalist, spotify, hover effect, telegram, pintrest */\nul {\n  list-style: none;\n}\n\n.example-2 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.example-2 .icon-content {\n  margin: 0 10px;\n  position: relative;\n}\n.example-2 .icon-content .tooltip {\n  position: absolute;\n  top: -30px;\n  left: 50%;\n  transform: translateX(-50%);\n  color: #fff;\n  padding: 6px 10px;\n  border-radius: 5px;\n  opacity: 0;\n  visibility: hidden;\n  font-size: 14px;\n  transition: all 0.3s ease;\n}\n.example-2 .icon-content:hover .tooltip {\n  opacity: 1;\n  visibility: visible;\n  top: -50px;\n}\n.example-2 .icon-content a {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  color: #4d4d4d;\n  background-color: #fff;\n  transition: all 0.3s ease-in-out;\n}\n.example-2 .icon-content a:hover {\n  box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);\n}\n.example-2 .icon-content a svg {\n  position: relative;\n  z-index: 1;\n  width: 30px;\n  height: 30px;\n}\n.example-2 .icon-content a:hover {\n  color: white;\n}\n.example-2 .icon-content a .filled {\n  position: absolute;\n  top: auto;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 0;\n  background-color: #000;\n  transition: all 0.3s ease-in-out;\n}\n.example-2 .icon-content a:hover .filled {\n  height: 100%;\n}\n.example-2 .icon-content a[data-social=\"spotify\"] .filled,\n.example-2 .icon-content a[data-social=\"spotify\"] ~ .tooltip {\n  background-color: #1db954;\n}\n.example-2 .icon-content a[data-social=\"pinterest\"] .filled,\n.example-2 .icon-content a[data-social=\"pinterest\"] ~ .tooltip {\n  background-color: #bd081c;\n}\n.example-2 .icon-content a[data-social=\"dribbble\"] .filled,\n.example-2 .icon-content a[data-social=\"dribbble\"] ~ .tooltip {\n  background-color: #ea4c89;\n}\n.example-2 .icon-content a[data-social=\"telegram\"] .filled,\n.example-2 .icon-content a[data-social=\"telegram\"] ~ .tooltip {\n  background-color: #0088cc;\n}"
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
    "id": "uiverse-selfmadesystem_neat-emu-37",
    "title": "Neat Emu",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "SelfMadeSystem",
      "profileUrl": "https://uiverse.io/SelfMadeSystem/neat-emu-37"
    },
    "license": "MIT",
    "description": "Neat Emu · hover by SelfMadeSystem",
    "tags": [
      "hover",
      "tooltip",
      "3d",
      "border"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"tooltip-container\">\n  <span class=\"tooltip\">\n    <span>\n      <svg\n        class=\"tooltip-icon\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        viewBox=\"0 0 24 24\"\n      >\n        <defs>\n          <linearGradient y2=\"1\" x2=\"0\" id=\"gradient\">\n            <stop stop-color=\"#96a1e8\" offset=\"0%\"></stop>\n            <stop stop-color=\"#5061be\" offset=\"100%\"></stop>\n          </linearGradient>\n        </defs>\n        <path\n          d=\"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z\"\n          fill=\"url(#gradient)\"\n        ></path>\n      </svg>\n    </span>\n    <span class=\"tooltip-lines\">\n      <span class=\"tooltip-line-1\"></span>\n      <span class=\"tooltip-line-2\"></span>\n    </span>\n  </span>\n  <span class=\"text\">\n    <span class=\"tooltip-lines\">\n      <span class=\"tooltip-line-1\"></span>\n      <span class=\"tooltip-line-2\"></span>\n    </span>\n  </span>\n</div>",
    "css": "/* From Uiverse.io by SelfMadeSystem  - Tags: tooltip, 3d, border */\n/* This is very original.\nI'm also too lazy to figure out how to add the arrow\nwithout excessive SVG. I know I'm not going to win, so\nwhy not just try to emulate the thing in the image */\n.tooltip-container {\n  --background: #fefbff;\n  --inner-shadow: #9faef9;\n  --inner-outline: #34217d;\n  --inner-outline-bottom: #fafcfe;\n  --inner-outline-middle: #8880d5;\n  --inner-outline-outer-top: #fefcff;\n  --inner-outline-outer-bottom-1: #29107b;\n  --inner-outline-outer-bottom-2: #5b42c4;\n  --inner-outline-outer-bottom-3: #200265;\n  --line-1: #8676c9;\n  --line-2: #5c69ca;\n  position: relative;\n  background: var(--background);\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 17px;\n  padding: 0.7em 1.8em;\n  border-radius: 5px;\n  box-shadow: inset 0px 1px 8px 1px var(--inner-shadow),\n    0px 2px 0px 0px var(--inner-outline-bottom),\n    0px -2px 0px 0px var(--inner-outline),\n    -2px -2px 0px 0px var(--inner-outline),\n    2px -2px 0px 0px var(--inner-outline),\n    0px 0px 0px 6px var(--inner-outline-middle),\n    0px -2px 0px 7px var(--inner-outline-outer-top),\n    0px 4px 0px 7px var(--inner-outline-outer-bottom-1);\n}\n\n.tooltip-icon {\n  display: inline-block;\n  vertical-align: top;\n  width: 1.5em;\n}\n\n.tooltip-icon path {\n  stroke-width: 2px;\n  stroke: var(--inner-outline);\n  stroke-linejoin: round;\n}\n\n.tooltip-lines {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4em;\n}\n\n.tooltip-line-1 {\n  height: 0.2em;\n  width: 4em;\n  border-radius: 10em;\n  display: inline-block;\n  background: var(--line-1);\n}\n\n.tooltip-line-2 {\n  height: 0.2em;\n  width: 3em;\n  border-radius: 10em;\n  display: inline-block;\n  background: var(--line-2);\n}\n\n.tooltip {\n  position: absolute;\n  display: flex;\n  gap: 0.4em;\n  align-items: center;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 0.6em 0.8em;\n  opacity: 0;\n  pointer-events: none;\n  transition: all 0.3s;\n  background: var(--background);\n  border-radius: 0.7em;\n\n  box-shadow: inset 0px 1px 8px 1px var(--inner-shadow),\n    0px 2px 0px 0px var(--inner-outline-bottom),\n    0px -2px 0px 0px var(--inner-outline),\n    -2px -2px 0px 0px var(--inner-outline),\n    2px -2px 0px 0px var(--inner-outline),\n    0px 0px 0px 6px var(--inner-outline-middle),\n    0px -2px 0px 7px var(--inner-outline-outer-top),\n    0px 4px 0px 7px var(--inner-outline-outer-bottom-1),\n    0px 7px 0px 7px var(--inner-outline-outer-bottom-2),\n    0px 10px 0px 7px var(--inner-outline-outer-bottom-3);\n}\n\n/* .tooltip::before {\n  content: \"\";\n  position: absolute;\n  height: 1em;\n  width: 1em;\n  bottom: -0.2em;\n  left: 50%;\n  transform: translate(-50%) translateY(2px) rotate(45deg);\n  background: var(--background);\n  border-radius: 0.2em;\n} */\n\n.tooltip-container:hover .tooltip {\n  top: -4.5em;\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n}"
  },
  {
    "id": "uiverse-siyu1017_giant-catfish-51",
    "title": "Giant Catfish",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "Siyu1017",
      "profileUrl": "https://uiverse.io/Siyu1017/giant-catfish-51"
    },
    "license": "MIT",
    "description": "Giant Catfish · hover by Siyu1017",
    "tags": [
      "hover",
      "tooltip"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"tooltip-container\">\n  <span class=\"tooltip\">Uiverse.io</span>\n  <span class=\"text\">Tooltip</span>\n</div>",
    "css": "/* From Uiverse.io by Siyu1017  - Tags: tooltip */\n.tooltip-container {\n  position: relative;\n  transition: all 0.2s;\n  font-size: 17px;\n  padding: 1rem 0;\n  width: fit-content;\n  box-sizing: border-box;\n  --bg: linear-gradient(135deg, #a940fd, #5b46e8);\n  --color: #fff;\n  --tooltip-bg: #303030;\n  --tooltip-color: #fff;\n  --margin: 0.5rem;\n}\n\n.text {\n  z-index: 9;\n  background: var(--bg);\n  color: var(--color);\n  padding: 0.7em 1.8em;\n  border-radius: 0.75rem;\n  height: fit-content;\n  cursor: pointer;\n  font-weight: 600;\n  box-shadow: 0 4px 16px 4px rgba(0, 0, 0, 0.15);\n}\n\n.tooltip {\n  position: absolute;\n  top: calc(-1 * var(--margin));\n  left: 50%;\n  transform: translateX(-50%) translateY(0%) scale(0);\n  padding: 0.3em 0.6em;\n  opacity: 0;\n  pointer-events: none;\n  transition: all 0.2s;\n  background: var(--tooltip-bg);\n  color: var(--tooltip-color);\n  border-radius: 0.5rem;\n  z-index: 99999;\n}\n\n.tooltip::before {\n  position: absolute;\n  content: \"\";\n  height: 0.6em;\n  width: 0.6em;\n  bottom: -0.2em;\n  left: 50%;\n  transform: translate(-50%) rotate(45deg);\n  background: var(--tooltip-bg);\n  border-bottom-right-radius: 0.175rem;\n}\n\n.tooltip-container:hover .tooltip {\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n  transform: translateX(-50%) translateY(-100%) scale(1);\n}"
  },
  {
    "id": "uiverse-elijahgummer_slimy-bobcat-84",
    "title": "Slimy Bobcat",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "elijahgummer",
      "profileUrl": "https://uiverse.io/elijahgummer/slimy-bobcat-84"
    },
    "license": "MIT",
    "description": "Slimy Bobcat · hover by elijahgummer",
    "tags": [
      "hover",
      "simple",
      "tooltip",
      "animation",
      "blue",
      "modern",
      "transition"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"tooltip-container\">\n  <span class=\"tooltip\">Uiverse.io</span>\n  <span class=\"text\">Tooltip</span>\n</div>",
    "css": "/* From Uiverse.io by elijahgummer  - Tags: simple, tooltip, animation, blue, modern, transition */\n.tooltip-container {\n  --background: #22d3ee;\n  position: relative;\n  background: var(--background);\n  cursor: pointer;\n  transition: background 0.3s;\n  font-size: 17px;\n  padding: 0.7em 1.8em;\n}\n\n.tooltip {\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-10%); /* Adjusted the initial position */\n  opacity: 0;\n  pointer-events: none;\n  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n  background: var(--background);\n  color: #fff;\n  border-radius: 0.3em;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  font-size: 14px;\n  width: 120%; /* Adjusted the width */\n  padding: 0.5em 1em; /* Adjusted padding */\n  white-space: nowrap; /* Prevent text wrapping */\n}\n\n.tooltip-container:hover .tooltip {\n  top: -100%; /* Adjusted the tooltip position */\n  opacity: 1;\n  pointer-events: auto;\n  transform: translateX(-50%) translateY(0);\n}"
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
    "id": "uiverse-sacha-pdv_angry-cat-58",
    "title": "Angry Cat",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "Sacha-PDV",
      "profileUrl": "https://uiverse.io/Sacha-PDV/angry-cat-58"
    },
    "license": "MIT",
    "description": "Angry Cat · hover by Sacha-PDV",
    "tags": [
      "hover",
      "simple",
      "tooltip",
      "circle"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"tooltip\">\n  <span>Hover me</span>\n  <div class=\"tooltip-text\">\n    Ceci est un tooltip moderne et animé avec des bulles autour.\n  </div>\n  <div class=\"tooltip-bubble\"></div>\n  <div class=\"tooltip-bubble\"></div>\n  <div class=\"tooltip-bubble\"></div>\n</div>",
    "css": "/* From Uiverse.io by Sacha-PDV  - Tags: simple, tooltip, circle */\n.tooltip {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n}\n.tooltip-text {\n  visibility: hidden;\n  width: 200px;\n  background-color: #3498db;\n  color: #fff;\n  text-align: center;\n  border-radius: 4px;\n  padding: 10px;\n  position: absolute;\n  z-index: 1;\n  top: -65px;\n  left: 50%;\n  transform: translateX(-50%);\n  opacity: 0;\n  transition: opacity 0.3s, transform 0.3s;\n}\n.tooltip:hover .tooltip-text {\n  visibility: visible;\n  opacity: 1;\n  transform: translate(-50%, -60px);\n}\n.tooltip-text::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: #3498db transparent transparent transparent;\n}\n.tooltip:hover .tooltip-bubble {\n  display: block;\n}\n.tooltip-bubble {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  background: #3498db;\n  border-radius: 50%;\n  display: none;\n}\n.tooltip-bubble:nth-child(3) {\n  bottom: 170px;\n  left: 43%;\n}\n.tooltip-bubble:nth-child(4) {\n  bottom: 170px;\n  left: 90%;\n}\n.tooltip-bubble:nth-child(5) {\n  bottom: 170px;\n  left: -10%;\n}\n.tooltip span {\n  display: inline-block;\n  padding: 5px 10px;\n  background: #3498db;\n  color: #fff;\n  border-radius: 4px;\n  transition: background 0.3s;\n}\n.tooltip:hover span {\n  background: #ff6b6b;\n}"
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
    "id": "uiverse-g4b413l_dry-turtle-84",
    "title": "Dry Turtle",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "G4b413l",
      "profileUrl": "https://uiverse.io/G4b413l/dry-turtle-84"
    },
    "license": "MIT",
    "description": "Dry Turtle · hover by G4b413l",
    "tags": [
      "hover",
      "tooltip",
      "button",
      "button hover effect"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"tooltip\">\n  Hover me\n  <div class=\"tooltiptext\">Hi there !</div>\n</div>",
    "css": "/* From Uiverse.io by G4b413l  - Tags: tooltip, button, button hover effect  */\n.tooltip {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  background-color: #282828;\n  color: #f1f1f1;\n  padding: 1em 3em;\n  border-radius: 1em;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 200px;\n  background-color: #28282817;\n  color: #282828;\n  text-align: center;\n  border-radius: 5px;\n  padding: 10px;\n  position: absolute;\n  z-index: 1;\n  bottom: 125%;\n  left: 50%;\n  transform: translateX(-50%);\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n  opacity: 1;\n}\n\n.tooltip .tooltiptext::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  border-width: 8px;\n  border-style: solid;\n  border-color: #28282817 transparent transparent transparent;\n  transform: translateX(-50%);\n}"
  },
  {
    "id": "uiverse-barisdogansutcu_plastic-dolphin-67",
    "title": "Plastic Dolphin",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "barisdogansutcu",
      "profileUrl": "https://uiverse.io/barisdogansutcu/plastic-dolphin-67"
    },
    "license": "MIT",
    "description": "Plastic Dolphin · hover by barisdogansutcu",
    "tags": [
      "hover",
      "tooltip",
      "mario",
      "super mario",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 500,
    "accentColor": null,
    "html": "<div class=\"brick one\"></div>\n<div class=\"tooltip-mario-container\">\n  <div class=\"box\"></div>\n  <div class=\"mush\"></div>\n</div>\n<div class=\"brick two\"></div>",
    "css": "/* From Uiverse.io by barisdogansutcu  - Tags: tooltip, mario, super mario */\n.brick {\n  height: 2px;\n  width: 2px;\n  box-shadow: 2px 2px 0px #ff9999, 4px 2px 0px #ff9999, 6px 2px 0px #ff9999,\n    8px 2px 0px #ff9999, 10px 2px 0px #ff9999, 12px 2px 0px #ff9999,\n    14px 2px 0px #ff9999, 16px 2px 0px #ff9999, 18px 2px 0px #ff9999,\n    20px 2px 0px #ff9999, 22px 2px 0px #ff9999, 24px 2px 0px #ff9999,\n    26px 2px 0px #ff9999, 28px 2px 0px #ff9999, 30px 2px 0px #ff9999,\n    32px 2px 0px #ff9999, 2px 4px 0px #cc3300, 4px 4px 0px #cc3300,\n    6px 4px 0px #cc3300, 8px 4px 0px #cc3300, 10px 4px 0px #cc3300,\n    12px 4px 0px #cc3300, 14px 4px 0px #cc3300, 16px 4px 0px #000,\n    18px 4px 0px #cc3300, 20px 4px 0px #cc3300, 22px 4px 0px #cc3300,\n    24px 4px 0px #cc3300, 26px 4px 0px #cc3300, 28px 4px 0px #cc3300,\n    30px 4px 0px #cc3300, 32px 4px 0px #000, 2px 6px 0px #cc3300,\n    4px 6px 0px #cc3300, 6px 6px 0px #cc3300, 8px 6px 0px #cc3300,\n    10px 6px 0px #cc3300, 12px 6px 0px #cc3300, 14px 6px 0px #cc3300,\n    16px 6px 0px #000, 18px 6px 0px #cc3300, 20px 6px 0px #cc3300,\n    22px 6px 0px #cc3300, 24px 6px 0px #cc3300, 26px 6px 0px #cc3300,\n    28px 6px 0px #cc3300, 30px 6px 0px #cc3300, 32px 6px 0px #000,\n    2px 8px 0px #000, 4px 8px 0px #000, 6px 8px 0px #000, 8px 8px 0px #000,\n    10px 8px 0px #000, 12px 8px 0px #000, 14px 8px 0px #000, 16px 8px 0px #000,\n    18px 8px 0px #000, 20px 8px 0px #000, 22px 8px 0px #000, 24px 8px 0px #000,\n    26px 8px 0px #000, 28px 8px 0px #000, 30px 8px 0px #000, 32px 8px 0px #000,\n    2px 10px 0px #cc3300, 4px 10px 0px #cc3300, 6px 10px 0px #cc3300,\n    8px 10px 0px #000, 10px 10px 0px #cc3300, 12px 10px 0px #cc3300,\n    14px 10px 0px #cc3300, 16px 10px 0px #cc3300, 18px 10px 0px #cc3300,\n    20px 10px 0px #cc3300, 22px 10px 0px #cc3300, 24px 10px 0px #000,\n    26px 10px 0px #cc3300, 28px 10px 0px #cc3300, 30px 10px 0px #cc3300,\n    32px 10px 0px #cc3300, 2px 12px 0px #cc3300, 4px 12px 0px #cc3300,\n    6px 12px 0px #cc3300, 8px 12px 0px #000, 10px 12px 0px #cc3300,\n    12px 12px 0px #cc3300, 14px 12px 0px #cc3300, 16px 12px 0px #cc3300,\n    18px 12px 0px #cc3300, 20px 12px 0px #cc3300, 22px 12px 0px #cc3300,\n    24px 12px 0px #000, 26px 12px 0px #cc3300, 28px 12px 0px #cc3300,\n    30px 12px 0px #cc3300, 32px 12px 0px #cc3300, 2px 14px 0px #cc3300,\n    4px 14px 0px #cc3300, 6px 14px 0px #cc3300, 8px 14px 0px #000,\n    10px 14px 0px #cc3300, 12px 14px 0px #cc3300, 14px 14px 0px #cc3300,\n    16px 14px 0px #cc3300, 18px 14px 0px #cc3300, 20px 14px 0px #cc3300,\n    22px 14px 0px #cc3300, 24px 14px 0px #000, 26px 14px 0px #cc3300,\n    28px 14px 0px #cc3300, 30px 14px 0px #cc3300, 32px 14px 0px #cc3300,\n    2px 16px 0px #000, 4px 16px 0px #000, 6px 16px 0px #000, 8px 16px 0px #000,\n    10px 16px 0px #000, 12px 16px 0px #000, 14px 16px 0px #000,\n    16px 16px 0px #000, 18px 16px 0px #000, 20px 16px 0px #000,\n    22px 16px 0px #000, 24px 16px 0px #000, 26px 16px 0px #000,\n    28px 16px 0px #000, 30px 16px 0px #000, 32px 16px 0px #000,\n    2px 18px 0px #cc3300, 4px 18px 0px #cc3300, 6px 18px 0px #cc3300,\n    8px 18px 0px #cc3300, 10px 18px 0px #cc3300, 12px 18px 0px #cc3300,\n    14px 18px 0px #cc3300, 16px 18px 0px #000, 18px 18px 0px #cc3300,\n    20px 18px 0px #cc3300, 22px 18px 0px #cc3300, 24px 18px 0px #cc3300,\n    26px 18px 0px #cc3300, 28px 18px 0px #cc3300, 30px 18px 0px #cc3300,\n    32px 18px 0px #000, 2px 20px 0px #cc3300, 4px 20px 0px #cc3300,\n    6px 20px 0px #cc3300, 8px 20px 0px #cc3300, 10px 20px 0px #cc3300,\n    12px 20px 0px #cc3300, 14px 20px 0px #cc3300, 16px 20px 0px #000,\n    18px 20px 0px #cc3300, 20px 20px 0px #cc3300, 22px 20px 0px #cc3300,\n    24px 20px 0px #cc3300, 26px 20px 0px #cc3300, 28px 20px 0px #cc3300,\n    30px 20px 0px #cc3300, 32px 20px 0px #000, 2px 22px 0px #cc3300,\n    4px 22px 0px #cc3300, 6px 22px 0px #cc3300, 8px 22px 0px #cc3300,\n    10px 22px 0px #cc3300, 12px 22px 0px #cc3300, 14px 22px 0px #cc3300,\n    16px 22px 0px #000, 18px 22px 0px #cc3300, 20px 22px 0px #cc3300,\n    22px 22px 0px #cc3300, 24px 22px 0px #cc3300, 26px 22px 0px #cc3300,\n    28px 22px 0px #cc3300, 30px 22px 0px #cc3300, 32px 22px 0px #000,\n    2px 24px 0px #000, 4px 24px 0px #000, 6px 24px 0px #000, 8px 24px 0px #000,\n    10px 24px 0px #000, 12px 24px 0px #000, 14px 24px 0px #000,\n    16px 24px 0px #000, 18px 24px 0px #000, 20px 24px 0px #000,\n    22px 24px 0px #000, 24px 24px 0px #000, 26px 24px 0px #000,\n    28px 24px 0px #000, 30px 24px 0px #000, 32px 24px 0px #000,\n    2px 26px 0px #cc3300, 4px 26px 0px #cc3300, 6px 26px 0px #cc3300,\n    8px 26px 0px #000, 10px 26px 0px #cc3300, 12px 26px 0px #cc3300,\n    14px 26px 0px #cc3300, 16px 26px 0px #cc3300, 18px 26px 0px #cc3300,\n    20px 26px 0px #cc3300, 22px 26px 0px #cc3300, 24px 26px 0px #000,\n    26px 26px 0px #cc3300, 28px 26px 0px #cc3300, 30px 26px 0px #cc3300,\n    32px 26px 0px #cc3300, 2px 28px 0px #cc3300, 4px 28px 0px #cc3300,\n    6px 28px 0px #cc3300, 8px 28px 0px #000, 10px 28px 0px #cc3300,\n    12px 28px 0px #cc3300, 14px 28px 0px #cc3300, 16px 28px 0px #cc3300,\n    18px 28px 0px #cc3300, 20px 28px 0px #cc3300, 22px 28px 0px #cc3300,\n    24px 28px 0px #000, 26px 28px 0px #cc3300, 28px 28px 0px #cc3300,\n    30px 28px 0px #cc3300, 32px 28px 0px #cc3300, 2px 30px 0px #cc3300,\n    4px 30px 0px #cc3300, 6px 30px 0px #cc3300, 8px 30px 0px #000,\n    10px 30px 0px #cc3300, 12px 30px 0px #cc3300, 14px 30px 0px #cc3300,\n    16px 30px 0px #cc3300, 18px 30px 0px #cc3300, 20px 30px 0px #cc3300,\n    22px 30px 0px #cc3300, 24px 30px 0px #000, 26px 30px 0px #cc3300,\n    28px 30px 0px #cc3300, 30px 30px 0px #cc3300, 32px 30px 0px #cc3300,\n    2px 32px 0px #000, 4px 32px 0px #000, 6px 32px 0px #000, 8px 32px 0px #000,\n    10px 32px 0px #000, 12px 32px 0px #000, 14px 32px 0px #000,\n    16px 32px 0px #000, 18px 32px 0px #000, 20px 32px 0px #000,\n    22px 32px 0px #000, 24px 32px 0px #000, 26px 32px 0px #000,\n    28px 32px 0px #000, 30px 32px 0px #000, 32px 32px 0px #000;\n}\n.brick.one {\n  transform: translateX(-60px);\n}\n.mush {\n  height: 2px;\n  width: 2px;\n  box-shadow: 14px 2px 0px #fc9838, 16px 2px 0px #fc9838, 18px 2px 0px #fc9838,\n    20px 2px 0px #fc9838, 12px 4px 0px #fc9838, 14px 4px 0px #fc9838,\n    16px 4px 0px #fc9838, 18px 4px 0px #fc9838, 20px 4px 0px #d82800,\n    22px 4px 0px #d82800, 10px 6px 0px #fc9838, 12px 6px 0px #fc9838,\n    14px 6px 0px #fc9838, 16px 6px 0px #fc9838, 18px 6px 0px #d82800,\n    20px 6px 0px #d82800, 22px 6px 0px #d82800, 24px 6px 0px #d82800,\n    8px 8px 0px #fc9838, 10px 8px 0px #fc9838, 12px 8px 0px #fc9838,\n    14px 8px 0px #fc9838, 16px 8px 0px #fc9838, 18px 8px 0px #d82800,\n    20px 8px 0px #d82800, 22px 8px 0px #d82800, 24px 8px 0px #d82800,\n    26px 8px 0px #d82800, 6px 10px 0px #fc9838, 8px 10px 0px #fc9838,\n    10px 10px 0px #fc9838, 12px 10px 0px #fc9838, 14px 10px 0px #fc9838,\n    16px 10px 0px #fc9838, 18px 10px 0px #fc9838, 20px 10px 0px #d82800,\n    22px 10px 0px #d82800, 24px 10px 0px #d82800, 26px 10px 0px #fc9838,\n    28px 10px 0px #fc9838, 4px 12px 0px #fc9838, 6px 12px 0px #fc9838,\n    8px 12px 0px #d82800, 10px 12px 0px #d82800, 12px 12px 0px #d82800,\n    14px 12px 0px #fc9838, 16px 12px 0px #fc9838, 18px 12px 0px #fc9838,\n    20px 12px 0px #fc9838, 22px 12px 0px #fc9838, 24px 12px 0px #fc9838,\n    26px 12px 0px #fc9838, 28px 12px 0px #fc9838, 30px 12px 0px #fc9838,\n    4px 14px 0px #fc9838, 6px 14px 0px #d82800, 8px 14px 0px #d82800,\n    10px 14px 0px #d82800, 12px 14px 0px #d82800, 14px 14px 0px #d82800,\n    16px 14px 0px #fc9838, 18px 14px 0px #fc9838, 20px 14px 0px #fc9838,\n    22px 14px 0px #fc9838, 24px 14px 0px #fc9838, 26px 14px 0px #fc9838,\n    28px 14px 0px #fc9838, 30px 14px 0px #fc9838, 2px 16px 0px #fc9838,\n    4px 16px 0px #fc9838, 6px 16px 0px #d82800, 8px 16px 0px #d82800,\n    10px 16px 0px #d82800, 12px 16px 0px #d82800, 14px 16px 0px #d82800,\n    16px 16px 0px #fc9838, 18px 16px 0px #fc9838, 20px 16px 0px #fc9838,\n    22px 16px 0px #fc9838, 24px 16px 0px #fc9838, 26px 16px 0px #d82800,\n    28px 16px 0px #d82800, 30px 16px 0px #fc9838, 32px 16px 0px #fc9838,\n    2px 18px 0px #fc9838, 4px 18px 0px #fc9838, 6px 18px 0px #d82800,\n    8px 18px 0px #d82800, 10px 18px 0px #d82800, 12px 18px 0px #d82800,\n    14px 18px 0px #d82800, 16px 18px 0px #fc9838, 18px 18px 0px #fc9838,\n    20px 18px 0px #fc9838, 22px 18px 0px #fc9838, 24px 18px 0px #fc9838,\n    26px 18px 0px #d82800, 28px 18px 0px #d82800, 30px 18px 0px #d82800,\n    32px 18px 0px #fc9838, 2px 20px 0px #fc9838, 4px 20px 0px #fc9838,\n    6px 20px 0px #fc9838, 8px 20px 0px #d82800, 10px 20px 0px #d82800,\n    12px 20px 0px #d82800, 14px 20px 0px #fc9838, 16px 20px 0px #fc9838,\n    18px 20px 0px #fc9838, 20px 20px 0px #fc9838, 22px 20px 0px #fc9838,\n    24px 20px 0px #fc9838, 26px 20px 0px #fc9838, 28px 20px 0px #d82800,\n    30px 20px 0px #d82800, 32px 20px 0px #fc9838, 2px 22px 0px #fc9838,\n    4px 22px 0px #fc9838, 6px 22px 0px #fc9838, 8px 22px 0px #fc9838,\n    10px 22px 0px #fc9838, 12px 22px 0px #fc9838, 14px 22px 0px #fc9838,\n    16px 22px 0px #fc9838, 18px 22px 0px #fc9838, 20px 22px 0px #fc9838,\n    22px 22px 0px #fc9838, 24px 22px 0px #fc9838, 26px 22px 0px #fc9838,\n    28px 22px 0px #fc9838, 30px 22px 0px #fc9838, 32px 22px 0px #fc9838,\n    4px 24px 0px #fc9838, 6px 24px 0px #d82800, 8px 24px 0px #d82800,\n    10px 24px 0px #d82800, 12px 24px 0px #fff, 14px 24px 0px #fff,\n    16px 24px 0px #fff, 18px 24px 0px #fff, 20px 24px 0px #fff,\n    22px 24px 0px #fff, 24px 24px 0px #d82800, 26px 24px 0px #d82800,\n    28px 24px 0px #d82800, 30px 24px 0px #fc9838, 10px 26px 0px #fff,\n    12px 26px 0px #fff, 14px 26px 0px #fff, 16px 26px 0px #fff,\n    18px 26px 0px #fff, 20px 26px 0px #fff, 22px 26px 0px #fff,\n    24px 26px 0px #fff, 10px 28px 0px #fff, 12px 28px 0px #fff,\n    14px 28px 0px #fff, 16px 28px 0px #fff, 18px 28px 0px #fff,\n    20px 28px 0px #fff, 22px 28px 0px #fc9838, 24px 28px 0px #fff,\n    10px 30px 0px #fff, 12px 30px 0px #fff, 14px 30px 0px #fff,\n    16px 30px 0px #fff, 18px 30px 0px #fff, 20px 30px 0px #fff,\n    22px 30px 0px #fc9838, 24px 30px 0px #fff, 12px 32px 0px #fff,\n    14px 32px 0px #fff, 16px 32px 0px #fff, 18px 32px 0px #fff,\n    20px 32px 0px #fc9838, 22px 32px 0px #fff;\n  transform: translate(-0px, -0px);\n  z-index: -1;\n  opacity: 0;\n}\n.box {\n  position: absolute;\n  background-color: rgba(46, 37, 37, 0);\n  z-index: 3;\n  width: 34px;\n  height: 34px;\n}\n.box:hover + .mush {\n  animation: mush 0.5s linear forwards;\n  opacity: 1;\n}\n@keyframes mush {\n  0% {\n    transform: scale(0.8) translate(-0px, -0px);\n  }\n  50% {\n    transform: scale(1.1) translate(-0px, -80px);\n  }\n  100% {\n    transform: scale(1.1) translate(-0px, -35px);\n  }\n}\n.tooltip-mario-container {\n  height: 2px;\n  width: 2px;\n  box-shadow: 4px 2px 0px #ce3100, 6px 2px 0px #ce3100, 8px 2px 0px #ce3100,\n    10px 2px 0px #ce3100, 12px 2px 0px #ce3100, 14px 2px 0px #ce3100,\n    16px 2px 0px #ce3100, 18px 2px 0px #ce3100, 20px 2px 0px #ce3100,\n    22px 2px 0px #ce3100, 24px 2px 0px #ce3100, 26px 2px 0px #ce3100,\n    28px 2px 0px #ce3100, 30px 2px 0px #ce3100, 2px 4px 0px #ce3100,\n    4px 4px 0px #ff9c31, 6px 4px 0px #ff9c31, 8px 4px 0px #ff9c31,\n    10px 4px 0px #ff9c31, 12px 4px 0px #ff9c31, 14px 4px 0px #ff9c31,\n    16px 4px 0px #ff9c31, 18px 4px 0px #ff9c31, 20px 4px 0px #ff9c31,\n    22px 4px 0px #ff9c31, 24px 4px 0px #ff9c31, 26px 4px 0px #ff9c31,\n    28px 4px 0px #ff9c31, 30px 4px 0px #ff9c31, 32px 4px 0px #000,\n    2px 6px 0px #ce3100, 4px 6px 0px #ff9c31, 6px 6px 0px #000,\n    8px 6px 0px #ff9c31, 10px 6px 0px #ff9c31, 12px 6px 0px #ff9c31,\n    14px 6px 0px #ff9c31, 16px 6px 0px #ff9c31, 18px 6px 0px #ff9c31,\n    20px 6px 0px #ff9c31, 22px 6px 0px #ff9c31, 24px 6px 0px #ff9c31,\n    26px 6px 0px #ff9c31, 28px 6px 0px #000, 30px 6px 0px #ff9c31,\n    32px 6px 0px #000, 2px 8px 0px #ce3100, 4px 8px 0px #ff9c31,\n    6px 8px 0px #ff9c31, 8px 8px 0px #ff9c31, 10px 8px 0px #ff9c31,\n    12px 8px 0px #ce3100, 14px 8px 0px #ce3100, 16px 8px 0px #ce3100,\n    18px 8px 0px #ce3100, 20px 8px 0px #ce3100, 22px 8px 0px #ff9c31,\n    24px 8px 0px #ff9c31, 26px 8px 0px #ff9c31, 28px 8px 0px #ff9c31,\n    30px 8px 0px #ff9c31, 32px 8px 0px #000, 2px 10px 0px #ce3100,\n    4px 10px 0px #ff9c31, 6px 10px 0px #ff9c31, 8px 10px 0px #ff9c31,\n    10px 10px 0px #ce3100, 12px 10px 0px #ce3100, 14px 10px 0px #000,\n    16px 10px 0px #000, 18px 10px 0px #000, 20px 10px 0px #ce3100,\n    22px 10px 0px #ce3100, 24px 10px 0px #ff9c31, 26px 10px 0px #ff9c31,\n    28px 10px 0px #ff9c31, 30px 10px 0px #ff9c31, 32px 10px 0px #000,\n    2px 12px 0px #ce3100, 4px 12px 0px #ff9c31, 6px 12px 0px #ff9c31,\n    8px 12px 0px #ff9c31, 10px 12px 0px #ce3100, 12px 12px 0px #ce3100,\n    14px 12px 0px #000, 16px 12px 0px #ff9c31, 18px 12px 0px #ff9c31,\n    20px 12px 0px #ce3100, 22px 12px 0px #ce3100, 24px 12px 0px #000,\n    26px 12px 0px #ff9c31, 28px 12px 0px #ff9c31, 30px 12px 0px #ff9c31,\n    32px 12px 0px #000, 2px 14px 0px #ce3100, 4px 14px 0px #ff9c31,\n    6px 14px 0px #ff9c31, 8px 14px 0px #ff9c31, 10px 14px 0px #ce3100,\n    12px 14px 0px #ce3100, 14px 14px 0px #000, 16px 14px 0px #ff9c31,\n    18px 14px 0px #ff9c31, 20px 14px 0px #ce3100, 22px 14px 0px #ce3100,\n    24px 14px 0px #000, 26px 14px 0px #ff9c31, 28px 14px 0px #ff9c31,\n    30px 14px 0px #ff9c31, 32px 14px 0px #000, 2px 16px 0px #ce3100,\n    4px 16px 0px #ff9c31, 6px 16px 0px #ff9c31, 8px 16px 0px #ff9c31,\n    10px 16px 0px #ff9c31, 12px 16px 0px #000, 14px 16px 0px #000,\n    16px 16px 0px #ff9c31, 18px 16px 0px #ce3100, 20px 16px 0px #ce3100,\n    22px 16px 0px #ce3100, 24px 16px 0px #000, 26px 16px 0px #ff9c31,\n    28px 16px 0px #ff9c31, 30px 16px 0px #ff9c31, 32px 16px 0px #000,\n    2px 18px 0px #ce3100, 4px 18px 0px #ff9c31, 6px 18px 0px #ff9c31,\n    8px 18px 0px #ff9c31, 10px 18px 0px #ff9c31, 12px 18px 0px #ff9c31,\n    14px 18px 0px #ff9c31, 16px 18px 0px #ce3100, 18px 18px 0px #ce3100,\n    20px 18px 0px #000, 22px 18px 0px #000, 24px 18px 0px #000,\n    26px 18px 0px #ff9c31, 28px 18px 0px #ff9c31, 30px 18px 0px #ff9c31,\n    32px 18px 0px #000, 2px 20px 0px #ce3100, 4px 20px 0px #ff9c31,\n    6px 20px 0px #ff9c31, 8px 20px 0px #ff9c31, 10px 20px 0px #ff9c31,\n    12px 20px 0px #ff9c31, 14px 20px 0px #ff9c31, 16px 20px 0px #ce3100,\n    18px 20px 0px #ce3100, 20px 20px 0px #000, 22px 20px 0px #ff9c31,\n    24px 20px 0px #ff9c31, 26px 20px 0px #ff9c31, 28px 20px 0px #ff9c31,\n    30px 20px 0px #ff9c31, 32px 20px 0px #000, 2px 22px 0px #ce3100,\n    4px 22px 0px #ff9c31, 6px 22px 0px #ff9c31, 8px 22px 0px #ff9c31,\n    10px 22px 0px #ff9c31, 12px 22px 0px #ff9c31, 14px 22px 0px #ff9c31,\n    16px 22px 0px #ff9c31, 18px 22px 0px #000, 20px 22px 0px #000,\n    22px 22px 0px #ff9c31, 24px 22px 0px #ff9c31, 26px 22px 0px #ff9c31,\n    28px 22px 0px #ff9c31, 30px 22px 0px #ff9c31, 32px 22px 0px #000,\n    2px 24px 0px #ce3100, 4px 24px 0px #ff9c31, 6px 24px 0px #ff9c31,\n    8px 24px 0px #ff9c31, 10px 24px 0px #ff9c31, 12px 24px 0px #ff9c31,\n    14px 24px 0px #ff9c31, 16px 24px 0px #ce3100, 18px 24px 0px #ce3100,\n    20px 24px 0px #ff9c31, 22px 24px 0px #ff9c31, 24px 24px 0px #ff9c31,\n    26px 24px 0px #ff9c31, 28px 24px 0px #ff9c31, 30px 24px 0px #ff9c31,\n    32px 24px 0px #000, 2px 26px 0px #ce3100, 4px 26px 0px #ff9c31,\n    6px 26px 0px #ff9c31, 8px 26px 0px #ff9c31, 10px 26px 0px #ff9c31,\n    12px 26px 0px #ff9c31, 14px 26px 0px #ff9c31, 16px 26px 0px #ce3100,\n    18px 26px 0px #ce3100, 20px 26px 0px #000, 22px 26px 0px #ff9c31,\n    24px 26px 0px #ff9c31, 26px 26px 0px #ff9c31, 28px 26px 0px #ff9c31,\n    30px 26px 0px #ff9c31, 32px 26px 0px #000, 2px 28px 0px #ce3100,\n    4px 28px 0px #ff9c31, 6px 28px 0px #000, 8px 28px 0px #ff9c31,\n    10px 28px 0px #ff9c31, 12px 28px 0px #ff9c31, 14px 28px 0px #ff9c31,\n    16px 28px 0px #ff9c31, 18px 28px 0px #000, 20px 28px 0px #000,\n    22px 28px 0px #ff9c31, 24px 28px 0px #ff9c31, 26px 28px 0px #ff9c31,\n    28px 28px 0px #000, 30px 28px 0px #ff9c31, 32px 28px 0px #000,\n    2px 30px 0px #ce3100, 4px 30px 0px #ff9c31, 6px 30px 0px #ff9c31,\n    8px 30px 0px #ff9c31, 10px 30px 0px #ff9c31, 12px 30px 0px #ff9c31,\n    14px 30px 0px #ff9c31, 16px 30px 0px #ff9c31, 18px 30px 0px #ff9c31,\n    20px 30px 0px #ff9c31, 22px 30px 0px #ff9c31, 24px 30px 0px #ff9c31,\n    26px 30px 0px #ff9c31, 28px 30px 0px #ff9c31, 30px 30px 0px #ff9c31,\n    32px 30px 0px #000, 2px 32px 0px #000, 4px 32px 0px #000, 6px 32px 0px #000,\n    8px 32px 0px #000, 10px 32px 0px #000, 12px 32px 0px #000,\n    14px 32px 0px #000, 16px 32px 0px #000, 18px 32px 0px #000,\n    20px 32px 0px #000, 22px 32px 0px #000, 24px 32px 0px #000,\n    26px 32px 0px #000, 28px 32px 0px #000, 30px 32px 0px #000,\n    32px 32px 0px #000;\n  position: absolute;\n  transform: translate(-30px);\n  z-index: 3;\n}"
  },
  {
    "id": "uiverse-javierrocadev_rude-seahorse-6",
    "title": "Rude Seahorse",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "Javierrocadev",
      "profileUrl": "https://uiverse.io/Javierrocadev/rude-seahorse-6"
    },
    "license": "MIT",
    "description": "Rude Seahorse · hover by Javierrocadev",
    "tags": [
      "hover",
      "tooltip",
      "gradient",
      "dark",
      "hover effect",
      "hover button",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"tooltip-container\">\n  <div class=\"tooltip\">\n    LET'S CREATE!\n    <span class=\"tooltip-item\">1 - Explore</span>\n    <span class=\"tooltip-item\">2 - Have fun!</span>\n  </div>\n  <button class=\"btn\">uiverse</button>\n</div>",
    "css": "/* From Uiverse.io by Javierrocadev  - Tags: tooltip, gradient, dark, hover effect, hover button */\n.tooltip-container {\n  --background: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);\n  position: relative;\n  color: aliceblue;\n\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 17px;\n  padding: 0.7em 1.8em;\n  border-radius: 16px;\n}\n\n.tooltip {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  width: 100px;\n  height: 120px;\n  z-index: -1;\n  top: 0;\n  left: 50%;\n  background-color: #212121;\n  color: antiquewhite;\n  transform: translateX(-50%);\n  padding: 0.3em 0.6em;\n  opacity: 0;\n  pointer-events: none;\n  transition: all 0.3s;\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  font-weight: bold;\n  font-size: 12px;\n  overflow: hidden;\n}\n\n.tooltip-item {\n  z-index: 5;\n  background-color: #171717;\n  border-radius: 4px;\n  padding: 4px;\n  font-weight: bolder;\n  font-size: 6px;\n}\n\n.tooltip::before {\n  position: absolute;\n  content: \"\";\n  height: 0.5em;\n  width: 0.5em;\n  top: 0.8em;\n  left: 85%;\n  border-radius: 2px;\n  transform: rotate(45deg);\n  background: var(--background);\n  animation: tooltipBeforeAnimation 4s infinite alternate;\n}\n\n.tooltip::after {\n  position: absolute;\n  content: \"\";\n  height: 3.6em;\n  width: 3.6em;\n  bottom: -0.8em;\n  border-radius: 999px;\n  filter: blur(8px);\n  right: -5%;\n  background: var(--background);\n  animation: tooltipAnimation 5s infinite alternate;\n}\n\n.btn {\n  background: var(--background);\n  border: none;\n  color: aliceblue;\n  cursor: pointer;\n  background-size: 100%;\n  transition: all 0.2s;\n  font-size: 12px;\n  padding: 0.7em 1.8em;\n  border-radius: 16px;\n  font-weight: 700;\n}\n.btn:hover {\n  background-size: 150%;\n  background-position-x: right;\n}\n\n@keyframes tooltipAnimation {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(1.8);\n  }\n}\n@keyframes tooltipBeforeAnimation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.tooltip-container:hover .tooltip {\n  transform: scale(2);\n}\n\n.tooltip-container:hover .tooltip {\n  top: -210%;\n  left: 43%;\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n}"
  },
  {
    "id": "uiverse-nabilbdt_new-robin-92",
    "title": "New Robin",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "nabilbdt",
      "profileUrl": "https://uiverse.io/nabilbdt/new-robin-92"
    },
    "license": "MIT",
    "description": "New Robin · hover by nabilbdt",
    "tags": [
      "hover",
      "simple",
      "tooltip",
      "action",
      "alert",
      "green",
      "creative"
    ],
    "previewType": "css",
    "durationMs": 2000,
    "accentColor": null,
    "html": "<div class=\"Tooltip\">\n  Tooltip\n  <div class=\"Tip\">Uiverse.io</div>\n</div>",
    "css": "/* From Uiverse.io by nabilbdt  - Tags: simple, tooltip, action, alert, green, creative */\n.Tooltip {\n  color: #ebebeb;\n  border-radius: 0.8em;\n  padding: 1em 4em;\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  background-color: #00641e;\n  -webkit-transition: background-color 2s ease-out;\n  -moz-transition: background-color 2s ease-out;\n  -o-transition: background-color 2s ease-out;\n  transition: background-color 2s ease-out;\n}\n.Tooltip .Tip {\n  color: #003b12;\n  text-align: center;\n  border-radius: 5px;\n  visibility: hidden;\n  width: 100px;\n  left: 100%;\n  transform: translateX(-50%);\n  opacity: 0;\n  background-color: #28282817;\n  padding: 10px;\n  position: absolute;\n  z-index: 1;\n  bottom: 125%;\n  transition: opacity 0.3s;\n}\n.Tooltip:hover .Tip {\n  opacity: 1;\n  visibility: visible;\n}\n.Tooltip:hover {\n  background-color: rgb(100, 100, 100);\n}\n.Tooltip .Tip::after {\n  left: 10%;\n  border-width: 8px;\n  border-style: solid;\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  border-color: #28282817 transparent transparent transparent;\n}"
  },
  {
    "id": "uiverse-seyed-mohsen-mousavi_red-panda-0",
    "title": "Red Panda",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "seyed-mohsen-mousavi",
      "profileUrl": "https://uiverse.io/seyed-mohsen-mousavi/red-panda-0"
    },
    "license": "MIT",
    "description": "Red Panda · hover by seyed-mohsen-mousavi",
    "tags": [
      "hover",
      "tooltip",
      "text animation",
      "animated"
    ],
    "previewType": "css",
    "durationMs": 200,
    "accentColor": null,
    "html": "<div class=\"tooltip-container\">\n  <span class=\"tooltip\">\n    <div class=\"table center\">\n      <div class=\"monitor-wrapper center\">\n        <div class=\"monitor center\">\n          <p>\n            Uiverse.io :) Lorem ipsum dolor sit amet, consectetur adipiscing\n            elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n            aliqua.\n          </p>\n        </div>\n      </div>\n    </div>\n  </span>\n  <span class=\"text\">Hover Me</span>\n</div>",
    "css": "/* From Uiverse.io by seyed-mohsen-mousavi  - Tags: tooltip, hover, text animation */\n/* This is an example, feel free to delete this code */\n.tooltip-container {\n  --background: #050321;\n  position: relative;\n  background: var(--background);\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 17px;\n  padding: 0.7em 1.8em;\n  color: white;\n  border: 5px solid #344151;\n  -webkit-transition: border 0.3s ease;\n  -moz-transition: border 0.1s ease;\n  -o-transition: border 0.3s ease;\n  -ms-transition: border 0.3s ease;\n  font-family: monospace;\n  border-radius: 1px;\n}\n\n.tooltip {\n  position: absolute;\n  top: 0;\n  right: 135%;\n  transform: translateX(-50%);\n  padding: 0.3em 0.6em;\n  opacity: 0;\n  pointer-events: none;\n  transition: all 0.3s;\n}\n\n.tooltip-container:hover {\n  border: 5px solid #cacdd0;\n}\n.text {\n  font-weight: 600;\n}\n.tooltip-container:hover .tooltip {\n  top: -100%;\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n}\n\n/* tooltip content */\n.center {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n}\n\n.table {\n  width: 290px;\n  height: 20px;\n}\n\n.table .monitor-wrapper {\n  background: #050321;\n  width: 270px;\n  height: 30px;\n  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.table .monitor-wrapper .monitor {\n  width: 200px;\n  height: 22px;\n  background-color: #344151;\n  overflow: hidden;\n  white-space: nowrap;\n  box-shadow: inset 0px 5px 10px 2px rgba(0, 0, 0, 0.3);\n}\n\n.table .monitor-wrapper .monitor p {\n  font-family: \"VT323\", monospace;\n  font-size: 18px;\n  position: relative;\n  display: inline-block;\n  color: #ebb55f;\n}\n\n.tooltip-container:hover .table .monitor-wrapper .monitor p {\n  animation: move 30s infinite linear;\n}\n\n@keyframes move {\n  from {\n    left: 250px;\n  }\n\n  to {\n    left: -4800px;\n  }\n}"
  },
  {
    "id": "uiverse-gouthamnetha02_strong-zebra-90",
    "title": "Strong Zebra",
    "category": "hover",
    "source": "uiverse",
    "author": {
      "name": "gouthamnetha02",
      "profileUrl": "https://uiverse.io/gouthamnetha02/strong-zebra-90"
    },
    "license": "MIT",
    "description": "Strong Zebra · hover by gouthamnetha02",
    "tags": [
      "hover",
      "tooltip",
      "red",
      "color",
      "hover effect",
      "css",
      "css effect"
    ],
    "previewType": "css",
    "durationMs": 300,
    "accentColor": null,
    "html": "<div class=\"tooltip\">\n  <button>Hover Me!</button>\n  <div class=\"tooltiptext\">You Hovered Me!</div>\n</div>",
    "css": "/* From Uiverse.io by gouthamnetha02  - Tags: tooltip, red, hover, color, hover effect, css, css effect */\n.tooltip {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n}\n\n.tooltip button {\n  background-color: #db3434;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 5px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: background-color 0.3s, transform 0.2s ease-out;\n}\n\n.tooltip button:hover {\n  background-color: #b92929;\n  transform: scale(1.05);\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n  opacity: 1;\n}\n\n.tooltiptext {\n  visibility: hidden;\n  width: 160px;\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  border-radius: 8px;\n  padding: 5px;\n  position: absolute;\n  z-index: 1;\n  bottom: 125%;\n  left: 50%;\n  margin-left: -80px;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n\n.tooltiptext::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: #333 transparent transparent transparent;\n}"
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
  }
];
