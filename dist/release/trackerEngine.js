console.log('Version XX3');


var prod = true;


// Insert CSS
const trackingEngineCSS = `

/* SITE */
*,
::before,
::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html, body {
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  overflow: hidden;
}

:root {
--scrollbar-width: 4px;
--scrollbar-color-bg: #535048;
--scrollbar-color-thumb: rgb(238, 118, 62);
--scrollbar-color-thumb-hover: #f7914d;
}

/* WebKit-based browsers */
::-webkit-scrollbar {
width: var(--scrollbar-width);
}

::-webkit-scrollbar-track {
box-shadow: inset 0 0 5px var(--scrollbar-color-bg);
border-radius: 0;
}

::-webkit-scrollbar-thumb {
background: var(--scrollbar-color-thumb);
border-radius: 0;
transition: 0.25s;
}

::-webkit-scrollbar-thumb:hover {
background: var(--scrollbar-color-thumb-hover);
}

/* Firefox */
* {
scrollbar-width: thin;
scrollbar-color: var(--scrollbar-color-thumb) var(--scrollbar-color-bg);
}

/* IE/Edge (limited support) */
body {
-ms-overflow-style: -ms-autohiding-scrollbar;
}

/*
 *  HEIRARCHY
*/
#app {
  z-index: 1;
}

#loading-screen {
  z-index: 10000;

}



#teacher-toggle-button, #debug-console-toggle-button, #debug-webcam-toggle-button {
  z-index: 1020;
}
#tracking-engine-webcam-blocked {
  z-index: 1016;
}

#splash-screen {
    z-index: 1010
}

#tracking-engine {
  z-index: 1005;
}

#system {
  z-index: 1004;
}


/* TEACHER */
#course {
  z-index: 40;
}

#lesson {
  z-index: 35;
}

#teacher {
  z-index: 30;
}
/* ------- */

#debug-console {
  z-index: 25;
}


/* RUNTIME */
#debug {
  z-index: 21;
}

#screen {
  z-index: 20;
}

#scene {
  z-index: 20;
}

#runtime {
  z-index: 10;
}
/* ------- */

#app {
  position: relative;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  box-sizing: border-box;

}

.layer {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
}

#app-wrap {
  position: relative;
}


#system {
    
}

#debug-console {
  opacity: 0;
  height: calc(100vh - 250px);
  width: 400px;
  left: -400px;
  overflow-y: auto;
}

#debug-console.active {
  opacity: 1;
  left: 0;
}

.bg-yellow {
  background-color: #E9B824;
}

.text-yellow {
  color: #E9B824;
}

.bg-orange {
  background-color: #ffc31e;
}

#teacher {
  opacity: 0;
  transition: 0.25s;
}

#teacher.active {
  opacity: 1;
}

.lesson-step-image  {
    max-width: 300px;
}

#teacher.active #course,
#teacher.active #lesson {
  pointer-events: all;
}


.lesson-list-item.active, .lesson-list-item.active:hover {
  background-color: #ffc107;
  color: #333;
  left: 0px;

}

.lesson-list-item {
  transition: 0.25s;
  position: relative;
  left: 20px;
}

.lesson-list-item:hover {
  background-color: #ffbb00;
  color: #333;
  left: 0px;
}

.bg-pale-yellow {
  background-color: rgb(255, 219, 99);
}

.text-pale-yellow {
  color: #FFE17B;
}

#lesson {
  opacity: 0;
  top: 50px;
}

#lesson.active {
  opacity: 1;
  top: 0px;
}

#course {
  opacity: 0;
  width: 200px;
  right: -200px;
  overflow-y: auto;
}

#teacher.active #course {
  opacity: 1;
  right: 0;
}

.lesson-list-item {
  padding: 10px;
  cursor: pointer;
  text-align: left;
}

.lesson-list-item.complete .incomplete,
.lesson-list-item .complete {
  display: none;
}

.lesson-list-item.complete .complete,
.lesson-list-item .incomplete {
  display: inline-block;
}

#tracking-engine {
  position: fixed;
  top: 0;
  left: -250px;
  opacity: 1;
  height: 200px;
}

#tracking-engine.active {
  left: 0px;
}

#debug-webcam-toggle-button {
  height: 35px;
  width: 35px;
}

#tracking-engine-debug-view {
  position: relative;
  width: 250px;
  height: 200px;
}

#webcam-blocked {

}



#icon-camera-block {
  font-size: 25px;
}

.tracking-video {
  position: absolute;
  border-radius: 3px;
  width: 250px;
  height: 200px;
  box-shadow: 0 2px 3px 0 rgb(0, 0, 0), 0 4px 10px 0 #00000030;
  background: #333;
}



.step-button {
  background: black;
  padding: 8px 10px;
  border-radius: 5px;
  color: rgb(255, 219, 99);
  transition: 0.25s;
  margin: 5px auto;
  display: inline-flex;
}

.step-button:hover {
  opacity: 0.8;
}

`;





//  Inject HTML
const trackingEngineHTML = `
<div id="app">
  <div id="app-wrap" class="layer text-white bg-zinc-950">
    <div id="empty-app" class="layer flex justify-center items-center">

      <div class="rounded-lg bg-zinc-900 p-8">
        <div class="text-xl mb-4">
          Let's Get Started!
        </div>
        <div class="mt-4">
          <div class="mb-2"><b class="mr-2">1.</b> Click the <i
              class="fa-solid fa-graduation-cap text-yellow-500 fa-lg mx-2"></i> icon in the top right corner.</div>
          <div class="mb-2"><b class="mr-2">2.</b> Select a lesson from the list.</div>
          <div class="mb-2"><b class="mr-2">3.</b> Follow the instructions on the screen.</div>
          <div class="mb-2"><b class="mr-2">4.</b> Most of our work will be within the
            <svg viewBox="0 0 15 15" class="h-5 w-5 inline relative ml-1">
              <rect fill="#FCD000" width="15" height="15" rx="4"></rect>
              <path
                d="M6.554 3.705c0 .267-.19.496-.452.543-1.2.217-2.12 1.61-2.12 3.275 0 1.665.92 3.057 2.12 3.274a.554.554 0 0 1-.205 1.087c-1.733-.322-3.022-2.175-3.022-4.361 0-2.187 1.289-4.04 3.022-4.362a.554.554 0 0 1 .657.544zm1.892 0c0-.347.316-.607.657-.544 1.733.322 3.022 2.175 3.022 4.362 0 2.186-1.289 4.04-3.022 4.361a.554.554 0 0 1-.205-1.087c1.2-.217 2.12-1.61 2.12-3.274 0-1.665-.92-3.058-2.12-3.275a.551.551 0 0 1-.452-.543z"
                fill="#282828"></path>
            </svg>
            <b class="mr-1">JS</b> Panel in Codepen.
          </div>
        </div>
      </div>
    </div>


    <!-- START - SYSTEM -->
    <div id="system" class="layer pointer-events-none">
      <div id="teacher-toggle-button"
        class="drop-shadow-md border border-yellow-700 rounded-md bg-yellow-500 fixed h-9 w-9 top-2 right-2 opacity-100 hover:scale-110 pointer-events-auto cursor aspect-square flex justify-center items-center duration-100 cursor-pointer">
        <i class="fa-solid fa-graduation-cap " style="color: #000;"></i>
      </div>



      <div id="error-console" class="layer hidden flex flex-col justify-center items-center bg-black bg-opacity-80">
        <div id="error-window" class="bg-red-900 rounded-lg overflow-hidden flex flex-col pointer-events-auto">
          <div id="error-title" class="text-xl bg-red-600 p-4">Error</div>
          <div id="error-content" class="pt-8 px-8 flex flex-col gap-4">
          </div>
          <button id="error-button"
            class="text-center mt-10 py-3 px-6 rounded-md self-center mt-8 text-sm cursor-pointer duration-500 hover:opacity-75 bg-slate-900 mb-8">
            Goto Lesson <i class="ml-2 fa-solid fa-arrow-right fa-sm" style="color: #ffffff;"></i>
          </button>
        </div>
      </div>


      <div id="debug-console"
        class="fixed bottom-0 bg-slate-700 text-xs rounded-r-lg overflow-hidden duration-500 pointer-events-auto">
        <div id="debug-console-title"
          class="text-md text-white bg-slate-500 font-bold px-2 py-3 border-b-1 border-slate-900">Debug Console</div>
        <div id="debug-console-content" class="flex flex-col p-2 pb-12">
        </div>
      </div>


      <div id="webcam-blocked"
        class="hidden fixed top-2  pointer-events-auto left-0 right-0 flex align-center justify-center ">
        <div class="bg-red-900 rounded-lg py-2 px-4 mx-2 cursor-pointer">
          <a href="https://www.youtube.com/watch?v=guv6kkVcxdU" target="_blank">
            <div> <i class="fa-solid fa-triangle-exclamation mr-2 animate-ping"></i> Web-Cam Blocked <i
                class="fa-solid fa-triangle-exclamation ml-2 animate-ping"></i> </div>
          </a>
        </div>
      </div>

      <div id="tracking-engine" class="flex align-start duration-500 pointer-events-auto hidden">
        <div id="tracking-engine-debug-view">
          <div id="tracking-engine-webcam-blocked"
            class="text-red-500 absolute h-full w-full flex items-center justify-center tracking-video hidden">
            <a href="https://www.youtube.com/watch?v=guv6kkVcxdU" target="_blank">
              <div class="text-center mb-3"><i id="icon-camera-block"
                  class="fa-solid fa-triangle-exclamation animate-ping"></i></div>
              <div>Web-Cam Blocked</div>
            </a>
          </div>
          <video id="tracking-engine-webcam-video" autoplay="autoplay" class="tracking-video">

          </video>
          <canvas id="tracking-engine-canvas" class="tracking-video"></canvas>
        </div>

        <div id="debug-webcam-toggle-button"
          class="drop-shadow-lg rounded-br-md bg-green-500 opacity-100 hover:scale-110 pointer-events-auto cursor aspect-square flex justify-center items-center duration-100 cursor-pointer">
          <i class="fa-solid fa-camera fa-xs" style="color: #000;"></i>
        </div>
      </div>



      <div id="debug" class="hidden">

        <div id="debug-console-toggle-button"
          class="rounded-md bg-green-500 fixed h-7 w-7 bottom-2 left-2 opacity-100 hover:scale-110 pointer-events-auto cursor aspect-square flex justify-center items-center duration-100 cursor-pointer">
          <i class="fa-solid fa-terminal fa-xs" style="color: #000;"></i>
        </div>

        <div id="debug-timeline" class="hidden fixed bottom-0 right-0 left-0 overflow-hidden duration-500 flex align-center justify-center p-6">

          <div id="debug-timeline-button-left"
            class="left-button px-3 bg-cyan-500 pointer-events-auto cursor-pointer hover:scale-110 rounded-lg flex align-center justify-center duration-300">
            <div><i class="fa-solid fa-chevron-left text-sm mt-1" style="color: #ffffff;"></i></div>
          </div>

          <div id="debug-timeline-title" class="bg-blue-500 text-sm rounded-lg py-1 px-4 mx-2">
          </div>

          <div id="debug-timeline-button-right"
            class="right-button px-3 bg-cyan-500 pointer-events-auto cursor-pointer hover:scale-110 rounded-lg flex align-center justify-center duration-300">
            <div><i class="fa-solid fa-chevron-right text-sm mt-1" style="color: #ffffff;"></i></div>
          </div>
        </div>
      </div>
      <div id="loading-screen" class="layer flex flex-col justify-center items-center bg-gray-900 gap-4">
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
          </path>
        </svg>
        <div class="font-mono">
          Loading...
        </div>
      </div>
    </div>
    <!-- END - SCENE -->

    <!-- START - TEACHER -->
    <div id="teacher" class="layer bg-zinc-900 bg-opacity-60 pointer-events-none">


      <div id="course" class="drop-shadow-lg rounded-l-lg flex flex-col justify-center items-center top-0 bottom-0 fixed right-0 text-black overflow-hidden duration-500">

        <div class="w-full overflow-hidden">
          <div id="course-title" class="hidden text-lg bg-yellow-600 font-bold px-4 py-4 border-b border-yellow-800 border-solid"></div>
          <div id="lesson-list" class="flex flex-col text-sm gap-2">lesson-list</div>
        </div>
        
      </div>

      <div id="lesson" class="overflow-y-auto h-screen px-10 flex items-start">
        <div class="relative my-10 mx-auto bg-pale-yellow mx-6 min-w-xl text-black text-sm rounded-md flex flex-col justify-center items-center">

          <div id="lesson-title" class="text-2xl text-center text-black border-2 bg-orange rounded-t-md border-yellow-600 w-full py-4"></div>

          <div class="mt-2 p-4 text-center text-lg bold flex items-center justify-center">
            <i class="fa-regular fa-circle-dot mr-2"></i>
            <div id="lesson-goal"></div>
          </div>

          <div id="lesson-description" class="text-center text-lg bold flex items-center justify-center"></div>

          <div id="lesson-content" class="text-left text-md rounded-lg px-6 flex flex-col gap-1"></div>
          
          <div class="italic text-slate-900 mb-10 py-6 px-6 mx-10 mt-8 bg-yellow-400 rounded-md text-left">
            <div class="text-lg text-black rounded-t-md font-bold pb-2">Steps:</div>
            <div id="lesson-steps" class="text-md flex flex-col gap-1"></div>
          </div>
            
          </div>
        </div>
      </div>
    </div>
    <!-- END - TEACHER -->

    <!-- START - APP -->
    <div id="runtime" class="layer">

        <div id="splash-screen" class="bg-stone-900 layer flex flex-col justify-center items-center p-6">
            <div class="flex flex-col justify-center items-center text-white">
                <div id="application-name" class="text-5xl"></div>
                <div id="application-version" class="text-xs mb-4"></div>
                <div id="application-company" class="text-2xl"></div>
                
            </div>
        </div>

      <div id="screen" class="layer hidden flex flex-col justify-center items-center p-6">
        <div id="screen-container"
          class="text-center flex max-w-xl w-full flex-col justify-center items-center gap-8 p-8 rounded-lg">
          <div id="screen-title" class="text-center text-xl font-bold"></div>
          <div id="screen-content" class="text-center text-md"></div>
          <button id="screen-button"
            class="text-center mt-10 py-3 px-6 rounded-md self-center mt-8 text-sm cursor-pointer hover:opacity-75 duration-500"></button>
        </div>
      </div>

      <canvas id="scene" class="layer hidden"></canvas>

    </div>
    <!-- END - SCENE -->

  </div>
</div>
`;




const style = document.createElement('style');
style.innerHTML = trackingEngineCSS;
document.head.appendChild(style);

//  Add HTML to #scene-engine
/* const sceneEngineHTML = document.getElementById('app');
sceneEngineHTML.innerHTML = trackingEngineHTML;
 */


document.body.insertAdjacentHTML('afterbegin', trackingEngineHTML);

const Animations = {
    debug: false,
    fade: ({
        state,
        elements, 
        callBack,
        duration = 1,
        delay = 0,
        easing = 'easeInOutSine',
        update = () => {},
        begin = () => {},
        complete = () => {},
    }) => {

        if (state) {
            elements.forEach(element => {
                if(element.classList?.contains('hidden')) {
                    element.classList.remove('hidden');
                    anime.set(elements, {
                        opacity: 0
                    });
                };
            });
        }
        

        const onComplete = () => {
            if(!state) {
                elements.forEach(element => {
                    element.classList.add('hidden');
                });
            };
            callBack();
        }

        var animation = anime.timeline({
            targets: elements,
            delay: delay * 1000,
            duration: duration * 1000,
            easing: easing,
            update: function(anim) {
                /* system.log(this.constructor.name,'animating : '+(anim.progress.toFixed(2))+'%'); */
                update(anim);
            },
            begin: function(anim) {
                if(debug) system.log(this.constructor.name,'animation > began : ' + anim.began)
                begin(anim);
            },
            complete: function(anim) {
                if(debug) system.log(this.constructor.name,'animation > completed : ' + anim.completed);
                complete(anim);
            }
        }).add({
            opacity: state?1:0,
        });

        animation.finished.then(onComplete);
    },




    splashShowHide: ({
        screen,
        name, 
        version,
        company,
        callBack,
        delay = 0,
        update = () => {},
        begin = () => {},
        complete = () => {},
    }) => {

       
        anime.set([name, version, company], {
            opacity: 0
        });

        screen.classList.remove('hidden');

        const onComplete = () => {
            screen.classList.add('hidden');
            callBack();
        }


        var animation = anime.timeline({
            
            delay: delay * 1000,
            easing: 'easeOutExpo',
            update: function(anim) {
                /* system.log(this.constructor.name,'animating : '+(anim.progress.toFixed(2))+'%'); */
                update(anim);
            },
            begin: function(anim) {
                if(debug) system.log(this.constructor.name,'animation > began : ' + anim.began)
                begin(anim);
            },
            complete: function(anim) {
                if(debug) system.log(this.constructor.name,'animation > completed : ' + anim.completed);
                complete(anim);
            }
        }).add({
            targets: name,
            opacity: 1,
            duration: 500,
        }, 800).add({
            targets: company,
            opacity: 1,
            duration: 500,
        }, 900).add({
            targets: version,
            opacity: 1,
            duration: 500,
        }, 1000).add({
            targets: [name, version, company],
            opacity: 0,
            duration: 500,
        }).add({
            targets: screen,
            opacity: 0,
            duration: 700,
        }, 2500);

        animation.finished.then(onComplete);
    },
    
}

/*
 * domEngine.js
 * 2023/11/19
 * @ed spurrier
 * http://edspurrier.com
 * v0.0.1
 *  
 * DomEngine is used to manage the Web Application Dom
 * Actions:
 *  - List Dom Elements
 *  - Create Dom Elements
 *  - Modify Dom Elements
 *  - Update Dom Elements
 *  - Insert Dom Elements
 *  - Read Dom Elements
 *  - Delete Dom Elements
 *  - Manage Dom Element Events
*/



const elementsToStore = [
    "runtime",
    "app-wrap",
    "system",
    "error-console",
    "error-content",
    "error-button",
    "debug",
    "loading-screen",
    "course",
    "course-title",
    "lesson-list",
    "course-footer",
    "lesson",
    "lesson-title",
    "lesson-goal",
    "lesson-description",
    "lesson-content",
    "lesson-steps",
    "teacher",
    "screen",
    "screen-container",
    "screen-title",
    "screen-content",
    "screen-button",
    "scene",
    "debug-console-toggle-button",
    "teacher-toggle-button",
    "debug-console",
    "debug-console-content",
    "debug-timeline",
    "debug-timeline-title",
    'debug-timeline-button-left',
    'debug-timeline-button-right',
    'tracking-engine-webcam-video',
    'tracking-engine-canvas',
    'tracking-engine',
    'debug-webcam-toggle-button',
    'webcam-blocked',
    "tracking-engine-webcam-blocked",
    'application-name',
    'application-version',
    'application-company',
    'splash-screen',
    'empty-app',
]


class DomEngine {
    debug = false;
    elements = {
        head: document.head,
        html: document.documentElement,
        body: document.body,
        app: document.getElementById('app'),
    }

    resizeCallBacks = [];
   
    constructor() {

        elementsToStore.forEach((element) => {
            this.storeElementById(element, element);
        });

        this.addEventListener('debug-console-toggle-button', 'click', ()=> { 
            this.openConsole();
        });

        this.addEventListener('debug-webcam-toggle-button', 'click', ()=> { 
            this.toggleWebcamView();
        });

        window.addEventListener('resize', () => {
            this.windowResize();
        });
        

        

        system.log(this.constructor.name,'DomEngine Constructed');
    }

    windowResize = () => {
        this.resizeCallBacks.forEach((callBack) => {
            callBack();
        });
        system.log(this.constructor.name,'resizeCallBacks Triggered: ', this.resizeCallBacks.length);

    }

    storeElementById = (element, id) => {
        this.elements[element] = document.getElementById(id);
    }

    getElement = (element) => {
        return this.elements[element];
    }

    loading = (state, callBack = () => {}) => {
        if (state){
            system.debugConsoleLog(this.constructor.name, 'Loading...');
        } else {
            system.debugConsoleLog(this.constructor.name, 'Loading Complete');
        }
        
        Animations.fade({
            state: false,
            duration: 1,
            delay: 0.5,
            elements: [this.elements['loading-screen']],
            callBack: () => {
                callBack();
                this.setElementState('loading-screen', false);
                system.log(this.constructor.name, `loading screen faded-${state? 'in' : 'out'}`);
            }
        });
    }

    setAppBackgroundColor = (color) => {
        this.elements['runtime'].style.backgroundColor = color;
    }



    hideScene = (callBack) => {
        Animations.fade({
            state: false,
            duration: 0.5,
            delay: 0.25,
            elements: [this.elements['scene']],
            callBack: () => {
                callBack();
                system.log(this.constructor.name, `screen faded-${false? 'in' : 'out'}`);
            }
        });
    }

    showScene = () => {
        Animations.fade({
            state: true,
            duration: 0.5,
            delay: 0.25,
            elements: [this.elements['scene']],
            callBack: () => {
                system.log(this.constructor.name, `screen faded-${true? 'in' : 'out'}`);
            }
        });
    }




    showSplashScreen = () => {
        // Set up splash screen
        this.insertText('application-name', system.app.metaData.name);
        this.insertText('application-version', system.app.metaData.version);
        this.insertText('application-company', system.app.metaData.company);


        Animations.splashShowHide({
            delay: 0.5,
            screen: this.elements['splash-screen'],
            name: this.elements['application-name'],
            version: this.elements['application-version'],
            company: this.elements['application-company'],
            callBack: () => {
                system.app.startTimeline();
                system.log(this.constructor.name, `SplashScreen faded-${true? 'in' : 'out'}`);
            }
        });
    }


    disableSpashScreen = () => {
        this.elements['splash-screen'].classList.add('hidden');
    }


    updateSceen = (screen) => {
        this.insertStyle('screen-container', 'color', screen.textColor)
        this.insertStyle('screen', 'background-color', screen.backgroundColor);
        this.insertStyle('screen-container', 'background-color', screen.popupBackgroundColor);
        this.insertStyle('screen-button', 'background-color', screen.buttonColor);
        this.insertText('screen-title', screen.title);
        this.insertHtml('screen-content', screen.content);
        this.setElementState('screen-button', screen.buttonText != '');
        this.insertText('screen-button', screen.buttonText);
    }

    renderScreen = (screen, callBack) => {
        this.updateSceen(screen);

        Animations.fade({
            state: true,
            duration: 0.5,
            delay: 0.25,
            elements: [this.elements['screen']],
            callBack: () => {
                callBack();
                system.log(this.constructor.name, `screen faded-${true? 'in' : 'out'}`);
            }
        });
    }

    hideScreen = (callBack) => {
        Animations.fade({
            state: false,
            duration: 0.5,
            delay: 0.25,
            elements: [this.elements['screen']],
            callBack: () => {
                callBack();
                system.log(this.constructor.name, `screen faded-${false? 'in' : 'out'}`);
            }
        });
    }
    
    getImageCoverSize = (image, width, height) => {
        const imageRatio = image.width / image.height;
        const canvasRatio = width / height;
        let renderWidth = width;
        let renderHeight = height;
        if (imageRatio > canvasRatio) {
            renderHeight = width / imageRatio;
        } else {
            renderWidth = height * imageRatio;
        }
        return {
            x: (width - renderWidth) / 2,
            y: (height - renderHeight) / 2,
            width: renderWidth,
            height: renderHeight,
        }
    }



    setElementState = (element, state) => {
        if(state) {
            this.elements[element].classList.remove('hidden');
        } else if(!this.elements[element].classList.contains('hidden')){
            this.elements[element].classList.add('hidden');
        }
    }

    insertHtml = (element, html) => {
        this.elements[element].innerHTML = html;
    }

    appendHtml = (element, html) => {
        this.elements[element].innerHTML += html;
    }

    prependHtml = (element, html) => {
        this.elements[element].innerHTML = html + this.elements[element].innerHTML;
    }

    convertMarkup = (markup) => {
        var converter = new showdown.Converter(),
            html      = converter.makeHtml(markup);
            
        return html;
    }

    insertMarkupIntoHtml = (element, markup) => {
        this.insertHtml(element, convertMarkup(markup));
    }

    insertText = (element, text) => {
        this.elements[element].innerText = text;
    }

    appendText = (element, text) => {
        this.elements[element].innerText += text;
    }

    insertValue = (element, value) => {
        this.elements[element].value = value;
    }

    insertAttribute = (element, attribute, value) => {
        this.elements[element].setAttribute(attribute, value);
    }

    insertStyle = (element, style, value) => {
        this.elements[element].style[style] = value;
    }

    insertClass = (element, className) => {
        this.elements[element].classList.add(className);
    }

    removeClass = (element, className) => {
        this.elements[element].classList.remove(className);
    }

    toggleClass = (element, className) => {
        this.elements[element].classList.toggle(className);
    }

    getImageCover = (image, width, height) => {
        const imageRatio = image.width / image.height;
        const canvasRatio = width / height;
        let renderWidth = width;
        let renderHeight = height;
        if (imageRatio > canvasRatio) {
            renderHeight = width / imageRatio;
        } else {
            renderWidth = height * imageRatio;
        }
        return {
            x: (width - renderWidth) / 2,
            y: (height - renderHeight) / 2,
            width: renderWidth,
            height: renderHeight,
        }
    }

    getCanvas = (element) => {
        return {
            canvas: this.elements[element],
            ctx: this.elements[element].getContext('2d'),
        }
    }

    onWindowResize = (callBack) => {
        this.resizeCallBacks.push(callBack);
    }

    addEventListener = (element, event, callBack) => {
        this.elements[element].addEventListener(event, callBack);
    }



    renderCourseMenu = (course) => {
        this.insertText('course-title', course.name);
        this.insertHtml('lesson-list', '');
        this.elements['lesson-buttons'] = [];
        course.lessons.forEach((lesson) => {
            // Create the lesson menu item
            const lessonMenuItem = document.createElement('div');
            lessonMenuItem.className = `${lesson.complete?'complete':''} rounded-l-lg bg-yellow lesson-list-item lesson-button-${lesson.className} cursor-pointer p-4 flex justify-start items-center gap-3`;
            lessonMenuItem.setAttribute('data-lesson', lesson.className);
            lessonMenuItem.innerHTML = `
            <div>
                <i class="complete fa-solid fa-circle-check text-green-800 fa-2xl"></i>
                <i class="incomplete fa-solid fa-circle-xmark text-yellow-900 opacity-40 fa-2xl"></i>
            </div>
            <div>${lesson.menuName}</div>
            `;

            this.elements['lesson-list'].appendChild(lessonMenuItem);
            this.elements[`lesson-button-${lesson.className}`] = lessonMenuItem;
            this.elements['lesson-buttons'].push(lessonMenuItem);


            // Add the click event listener
            lessonMenuItem.addEventListener('click', () => {
                system.teacherEngine.selectLesson(lesson);
            });

        });
    }

    setLessonItemComplete = (lesson) => {
        this.elements[`lesson-button-${lesson.className}`].classList.add('complete');
    }

    setLessonListItemActive = (lesson) => {
        this.elements['lesson-buttons'].forEach((lessonButton) => {
            if (lessonButton.classList.contains('active')) {
                lessonButton.classList.remove('active');
            }
        });

        this.elements[`lesson-button-${lesson}`].classList.add('active');
    }


    /*
        "lesson",
        "lesson-title",
        "lesson-goal",
        "lesson-description",
        "lesson-content",
        "lesson-steps",
    */


    setLessonActive = (lesson) => {
        this.setLessonListItemActive(lesson.className)

        this.insertText('lesson-title', lesson.name);
        this.insertText('lesson-goal', lesson.goal);


        this.insertHtml('lesson-content', '');
        lesson.content.forEach((content) => {
            this.appendHtml('lesson-content', `<div class="flex items-center"><i class="fa-solid fa-angle-right fa-sm mr-2"></i> <div>${content}</div></div>`);
        });


        this.insertHtml('lesson-steps', '');

        let stepNumber = 1;
        lesson.steps.forEach((step) => {
            let stepHTML = `
            <div class="lesson-step mt-4">
                <div class="flex items-start">
                    <b class="mr-2 not-italic font-bold">${stepNumber}.</b>
                    <div>
            `;
            step.text.forEach((text) => {
                stepHTML += `<div class="not-italic text-md mb-1">${text}</div>`;
            });
            stepHTML += `</div>`;

            stepHTML += `</div>`;
            if (step.code) {    
                stepHTML += `
                <div class="lesson-step-code bg-gray-900 text-yellow-300 rounded-lg p-8 text-left mx-5 mt-6 mb-10">
                    <pre><code>${step.code}</code></pre>
                </div>
                `;
            }           
            if (step.image) {    
                stepHTML += `
                <div class="lesson-step-image overflow-hidden rounded-lg mx-auto text-center mt-6 mb-8">
                    <img src="${step.image}" />
                </div>
                `;
            }     

            this.appendHtml('lesson-steps', stepHTML);
            
            stepNumber++;
        });

    }

    showLesson = () => {
        this.classListToggle('lesson', 'active', true);
    }


    classListToggle = (element, className, state) => {
        if (state) {
            this.elements[element].classList.add(className);
        } else {
            this.elements[element].classList.remove(className);
        }
    }


    setTeacherState = (state) => {
        this.classListToggle('teacher', 'active', state);
    }

    showTrackingEngine = () => {
        this.setElementState('tracking-engine', true);
    }

    showWebcamView = () => {
        this.classListToggle('tracking-engine', 'active', true);
    }

    toggleWebcamView = () => {
        this.toggleClass('tracking-engine', 'active');
    }


    openConsole = () => {
        this.toggleClass('debug-console', 'active');
    }

    consoleLogUpdate = (consoleLog) => {
        this.elements['debug-console-content'].innerHTML = '';
        // reverse consoleLog
        consoleLog.reverse();
        let consoleLineNumber = 0;
        consoleLog.forEach((log) => {
            this.appendHtml('debug-console-content', `<div class="debug-console-log"><span class='text-orange-500'>[${consoleLog.length-consoleLineNumber}]</span> <span class='text-cyan-500'>[${log.className}]</span> - ${log.message}</div>`);
            consoleLineNumber++;
        });
        
    }

    timelineTitleUpdate = (title) => {
        if (title !== '') {
            this.setElementState('debug-timeline', true);
            this.insertText('debug-timeline-title', title);
        }
    }

    setDebugState = (state) => {
        this.setElementState('debug', state);
    }

    showWebcamBlocked = () => {
        this.setElementState('webcam-blocked', true);
        this.setElementState('tracking-engine-webcam-blocked', true);
    }

    showError = (name, message) => {

        this.appendHtml(
            'error-content',
            `<div class=""><i class="fa-solid fa-bug fa-shake fa-xl mr-2" style="color: #ffffff;"></i> [${name}] ${message} - Missing or Incorrect</div>`
        );

        this.setElementState('error-console', true);
    }

    
    hideError = () => {
        this.setElementState('error-console', false);
    }

    hideEmptyAppScreen = () => {
        this.setElementState('empty-app', false);
    }

}




class Task {
    constructor({
        title,
        description,
        steps,
    }) {
        this.title = title;
        this.description = description;
        this.steps = steps;
    }
}



class Lesson {
    constructor({
        title,
        description,
        tasks,
    }) {
        this.title = title;
        this.description = description;
        this.tasks = tasks;
    }
}

class Course {
    constructor({
        title,
        description,
        lessons,
    }) {
        this.title = title;
        this.description = description;
        this.lessons = lessons;
    }
}




class TeacherEngine {
    activeLesson = null;
    course = null;
    state = false;

    constructor({
        course
    }) {
        system.log(this.constructor.name,'Teacher Engine Constructed');

        system.domEngine.addEventListener('teacher-toggle-button', 'click', ()=> { 
            this.toggleTeacher();
        });

        system.domEngine.addEventListener('error-button', 'click', ()=> {
            system.domEngine.hideError();
            system.domEngine.showLesson();
            this.showTeacher();
        });
    

        this.loadCourse(course);

    }

    showTeacher = () => {
        system.log(this.constructor.name,'Show Teacher');
        this.state = true;
        system.domEngine.setTeacherState(true);
    }

    toggleTeacher = () => {
        system.log(this.constructor.name,'Toggle Teacher');
        this.state = !this.state;
        system.domEngine.setTeacherState(this.state);
    }

/*     openTeacher = () => {
        system.log(this.constructor.name,'Opening Teacher');
        system.domEngine.setTeacherState(true);
    } */

/*     openTeachAtLesson = (lesson) => {
        this.setActiveLesson(lesson);
        this.openTeacher();
    } */


    loadCourse = (course) => {
        system.log(this.constructor.name,'Loading Course');
        this.course = course;
        system.domEngine.renderCourseMenu(this.course);
    }

    selectLesson = (lesson) => {
        system.log(this.constructor.name,'Select Lesson');
        this.setActiveLesson(lesson);
        system.domEngine.showLesson();
    }

    activateLessonByClassName = (className) => {
        system.log(this.constructor.name,'Activate Lesson By Class Name');
        this.course.lessons.forEach((lesson) => {
            if (lesson.className === className) {
                this.setActiveLesson(lesson);
            }
        });
    }

    setActiveLesson = (lesson) => {
        
        this.activeLesson = this.course.lessons.filter((courseLesson) => {
            return courseLesson.className === lesson.className;
        })[0];

        system.domEngine.setLessonActive(this.activeLesson);

        system.log(this.constructor.name, `Set Active Lesson ${this.activeLesson}`)
    }




    checkStage = () => {

        // Check through stages

        let sceneCreated = false;

        this.course.lessons.forEach((lesson) => {
            if (lesson.className === 'GettingStarted') {
                lesson.complete = !location.href.includes('edspurrier');             
            }
            if (lesson.className === 'App') {
                if (system.app) {
                    lesson.complete = (system.app !== null && system.app.initialized)?true:false; 
                }  
                if (!lesson.complete) {
                    system.domEngine.disableSpashScreen();
                }
            }

            if (lesson.className === 'Timeline') {
                if (system.app) {                    
                    if (system.app.timeline) {
                        lesson.complete = (system.app.timeline !== null && timeline)?true:false; 
                    }
                }  
            }

            if (lesson.className === 'Screen') {
                if (system.app) {                    
                    if (system.app.timeline) {
                        if (system.app.timeline.timeline) {
                            lesson.complete = (system.app.timeline.timeline.filter(
                                (step) => {
                                    return (step instanceof Screen);
                                }
                            ).length > 0)?true:false;
                        }
                    }
                }  
            }




            if (lesson.className === 'Scene') {
                if (system.app) {                    
                    if (system.app.timeline) {
                        if (system.app.timeline.timeline) {
                            lesson.complete = (system.app.timeline.timeline.filter(
                                (step) => {
                                    return (step instanceof Scene);
                                }
                            ).length > 0)?true:false;

                            sceneCreated = lesson.complete;
                        }
                    }
                }  
            }


            if (sceneCreated) {
                if (lesson.className === 'MotionTracker') {
                    let motionTrackerCreated = false;
            
                    system.app.timeline.timeline.forEach((step) => {
                        if (step instanceof Scene) {
                            if (step.sceneEngine) {
                                step.sceneEngine.sceneObjects.forEach((sceneObject) => {
                                    if (sceneObject instanceof MotionTracker) {
                                        motionTrackerCreated = true;
                                    }
                                });
                            }
                        }
                    });

                    lesson.complete = motionTrackerCreated;
                }
            }

            if (sceneCreated) {
                if (lesson.className === 'TriggerZone') {
                    let triggerZoneCreated = false;
            
                    system.app.timeline.timeline.forEach((step) => {
                        if (step instanceof Scene) {
                            if (step.sceneEngine) {
                                step.sceneEngine.sceneObjects.forEach((sceneObject) => {
                                    if (sceneObject instanceof TriggerZone) {
                                        triggerZoneCreated = true;
                                    }
                                });
                            }
                        }
                    });

                    lesson.complete = triggerZoneCreated;
                }
            }
            
        });

        if (this.course.lessons.every((lesson) => {
            return lesson.complete;
        })) {
            system.domEngine.disableSpashScreen();
        }
        

        system.domEngine.renderCourseMenu(this.course);

        let lessonToSelect = null;
        // Check through lessons
        this.course.lessons.forEach((lesson) => {
            if(!lesson.complete && lessonToSelect === null) {
                lessonToSelect = lesson;
                this.selectLesson(lesson);
                return;
            }
        });
        
    }
}





//  Tasks


//  Lesson: Introduction to the Application Core                    
//  Task:   Create a new application                                
//  Task:   Add the meta data to the application                    


//  Lesson: Introduction to the Timeline
//  Task:   Create a new timeline
//  Task:   Add the timeline to the application


//  Lesson: Introduction to the App Screen
//  Task:   Create a new app screen and give it settings
//  Task:   Add the new app screen to the timeline


//  Lesson: Introduction to the Scene Engine
//  Task:   Create a new scene and give it settings
//  Task:   Add the new scene to the timeline


//  Lesson: Introduction to the Motion Tracker
//  Task:   Add a new Motion Tracker to the scene that tracks the mouse
//  Task:   Modify and add settings to the Motion Tracker
//  Task:   Test the Motion Tracker


//  Lesson: Introduction to the Trigger Zone
//  Task:   Add a new trigger zone to the scene that triggers when the mouse enters the zone
//  Task:   Modify and add settings to the Trigger Zone
//  Task:   Test the Trigger Zone


//  Lesson: Motion Tracking The Hands
//  Task:   Add a new Motion Tracker to the scene that tracks the hand
//  Task:   Modify and add settings to the Motion Tracker
//  Task:   Test the Motion Tracker
//  Task:   Add a new Trigger Zone to the scene that triggers when the hand enters the zone
//  Task:   Add a Motion Tracker to the scene that tracks the other hand

//  Lesson: Motion Tracking The Face
//  Task:   Add a new Motion Tracker to the scene that tracks the face
//  Task:   Modify and add settings to the Motion Tracker
//  Task:   Test the Motion Tracker
//  Task:   Add a new Trigger Zone to the scene that triggers when the hand enters the zone



//  Lesson: Planning Your Application
//  Task:   Write down a list of features that you want your application to have
//  Task:   Create a wireframe of your application
//  Task:   Create a flowchart of your application
//  Task:   Create a list of the assets that you will need for your application
//  Task:   Images, Videos, Audio, 3D Models, Textures, Fonts, etc
//  Task:   Create a list of the technologies that you will need for your application
//  Task:   Limitations of Prototyping



//  Task:   Write down a list of things that you want your application to be able to do
//  Task:   Write down a list of things that you want your application to be able to do


//  Lesson: Test Your Application
//  Task:   Write down a test plan for your application
//  Task:   Test your application
//  Task:   Fix any bugs that you find
//  Task:   Test your application again
//  Task:   Fix any bugs that you find
//  Task:   Repeat until you have no bugs
//  Task:   Submit Your Test Log





//  Lesson: Introduction to the Event
//  Task:   Add a new event to the timeline that triggers when the Trigger Zone is triggered
//  Task:   Modify and add settings to the Event







const courseData = {
    name: `Augmented Reality
            JavaScript
            Web
            Application
        `,
    description: 'Learn how to create an Augmented Reality JS Application',
    lessons: [

        {
            complete: false,
            name: 'Getting Started',
            menuName: 'Getting Started',
            className: 'GettingStarted',
            goal: 'Learn how to get started with the course',
            description: `The Getting Started is the first step towards learning how to create an Augmented Reality JS Application`,
            content: [
                `First lets sign up to CodePen with a free account.`,
                `CodePen is a free online code editor that allows you to create and share code snippets.`,
                `CodePen is a great tool for learning how to code and is used by millions of developers around the world.`,
                `CodePen is also used by many companies to create and share code snippets.`,
            ],
            steps: [
                    {
                        text: [
                            `Go to <a href="https://codepen.io/" class="underline italic" target="_blank">CodePen.io</a>`,
                        ],
                    },
                    {
                        text: [
                            `Click on the "Sign Up" button`,
                        ],
                    },
                    {
                        text: [
                            `Enter your details and click on the "Sign Up" button`,
                        ],
                    },
                    {
                        text: [
                            `Let's now <span class="underline">FORK</span> this CodePen`,
                            `Click on the "Fork" button on the bottom right of this CodePen`,
                        ],
                        image: `https://www.freecodecamp.org/news/content/images/2021/10/Screen-Shot-2021-10-30-at-12.36.47-AM.png`,
                    }                    
            ]


        },




        {
            complete: false,
            name: 'Coding your Application',
            menuName: 'Application',
            className: 'App',
            goal: 'Learn how to create an application',
            description: `The Application is the core of the application and is used to create the application and maintain the application and its settings`,
            content: [
                `First lets create a new App (Application)`,
                `"const" means constant, which means that the value of the variable cannot be changed`,
                `"app" is the name of the variable that we are creating`,
                `"new" means that we are creating a new instance of the App class`,
                `We are passing in the metaData object to the App class`,
                `The metaData object contains information about the application`
            ],   
            steps: [
                {
                    text: [
                        `Make these changes in the 'JS' panel (either above or on the left)`,
                    ],
code: `<span class="text-green-500 font-bold">// Create a new application
const app = new App({
    metaData : {
        name: 'Application Name',
        version: '0.0.1',
        description: 'Description of the application',
        developer: 'Developer Name',
        company: 'Company Name',
    },
    backgroundColor : '#3a00a7',
    debug: false
});</span>`
                },
                {
                    text: [
                        `Debugging is a way to find and fix problems in your code`,
                        `You can use the debug setting to turn on debugging`,
                        `Debugging is turned off by default`,
                        `You can turn on debugging by setting the debug setting to true`,
                    ],
code: `<span class="text-yellow-700">// Create a new application
const app = new App({
    metaData : {
        name: 'Application Name',
        version: '0.0.1',
        description: 'Description of the application',
        developer: 'Developer Name',
        company: 'Company Name',
    },
    backgroundColor : '#3a00a7',
    debug: <span class="text-green-500 font-bold">true</span>
});</span>`
                },
                {
                    text: [
                        `Replace the metaData with your own metaData`,
                    ],
code: `<span class="text-yellow-700">// Create a new application
const app = new App({
    metaData : {
        name:  <span class="text-green-500 font-bold">'My Awesome Application'</span>,
        version:  <span class="text-green-500 font-bold">'0.0.1'</span>,
        description:  <span class="text-green-500 font-bold">'Does things that you couldn't beleive'</span>,
        developer:  <span class="text-green-500 font-bold">'John Black'</span>,
        company:  <span class="text-green-500 font-bold">'AR Inc'</span>,
    },
    backgroundColor : '#3a00a7',
    debug: false
});</span>`
                },
                {
                    text: [
                        `Set the backgroundColor to your own color`,
                        `You can use a color picker to find a color that you like`,
                        `You can use a color name or a hex color code`,
                        `<a href="https://htmlcolorcodes.com/color-picker/" class="underline italic step-button" target="_blank">HTML Color Picker</a>`,
                    ],
code: `<span class="text-yellow-700">// Create a new application
const app = new App({
    metaData : {
        name:  'My Awesome Application',
        version:  '0.0.1',
        description:  'Does things that you couldn't beleive',
        developer:  'John Black',
        company:  'AR Inc',
    },
    backgroundColor : <span class="text-green-500 font-bold">'#000000'</span>,
    debug: false
});</span>`
                },
                {
                    text: [
                        `Next we need to initialize the application`,
                        `We do this by calling the init function`,
                        `Add this code to the very end of your 'JS'.`,
                        `Always make sure that it is the last function to be called`,
                    ],
code: 
`<span class="text-green-500 font-bold">// Initialize the application
app.init();</span>`
                },
                {
                    text: [
                        `Save & Reload`,
                        `Your Application splash screen should now show your metaData`,
                    ],
                }
            ]
        },
        {
            complete: false,
            name: 'Introduction to the Timeline',
            menuName: 'Timeline',
            className: 'Timeline',

            goal: 'Learn how to create a timeline',
            description: `The Timeline is a timeline that can be used to create a timeline for your application`,
            content: [
                `First lets create a new Timeline`,
                `"const" means constant, which means that the value of the variable cannot be changed`,
                `"timeline" is the name of the variable that we are creating`,
                `"new" means that we are creating a new instance of the Timeline class`,
                `"Timeline" is the name of the class that we are creating an instance of`,
                `"app" is the name of the application that we are passing in as an argument`,
                `"addTimeline" is a function that we are calling on the app`,
                `"timeline" is the name of the variable that we are passing in as an argument`,
            ],   
            steps: [
                {
                    text: [
                        `Make these changes in the 'JS' panel (either above or on the left)`,
                        `This should be before the app.init() function`,
                        `And after the app variable has been created`,
                    ],
code: `<span class="text-green-500 font-bold">// Create a new timeline
const timeline = new Timeline();</span>`,
                },
                {
                    text: [
                        `Add the timeline to the application`,
                        `This should be after the timeline variable has been created`,
                        `And before the app.init() function`,
                    ],
code: `<span class="text-green-500 font-bold">// Add the timeline to the application
app.addTimeline(timeline);</span>`,
                },
                {
                    text: [
                        `Save & Reload`,
                        `And Proceed to the next lesson...`,
                    ],
                }
            ],
        },

        {
            complete: false,
            name: 'Introduction to the Screen',
            menuName: 'Screen',
            className: 'Screen',
            goal: 'Learn how to create a screen',
            description: `The Screen is a screen that can be played in the applications timeline`,
            content: [
                `First lets create a new Screen`,
                `"const" means constant, which means that the value of the variable cannot be changed`,
                `"screen" is the name of the variable that we are creating`,
                `"new" means that we are creating a new instance of the Screen class`,
                `"Screen" is the name of the class that we are creating an instance of`,
                `"timeline" is the name of the timeline that we are passing in as an argument`,
                `"addTimelineStep" is a function that we are calling on the timeline`,
                `"screen" is the name of the variable that we are passing in as an argument`,
            ],   
            steps: [
                {
                    text: [
                        `Make these changes in the 'JS' panel (either above or on the left)`,
                        `This should be before the app.init() function`,
                        `And after the <b>app</b> and <b>timeline</b> variable has been created`,
                    ],
code: `<span class="text-green-500 font-bold">// Create a new screen
const screen = new Screen({
    name: 'Screen Name',
    backgroundColor: '#39FF14',
    textColor: 'black',
    buttonColor: 'green',
    popupBackgroundColor: 'yellow',
    title: 'Screen Title',
    content: `+'`'+`This is the screen content`+'`'+`,
    buttonText: 'Click Me!',
});</span>`,
                },
                {
                    text: [
                        `Add the screen to the timeline`,
                        `This should be after the screen variable has been created`,
                        `And before the app.init() function`,
                    ],
code: `<span class="text-green-500 font-bold">// Add the screen to the timeline
timeline.addTimelineStep(screen);</span>`,
                },
                {
                    text: [
                        `The screen should now be showing on the screen`,
                        `You can change the content and look of the screen`,
                        `The title, body and buttonText are text values`,                        
                    ],
                    code: `<span class="text-yellow-700">// Create a new screen
const screen = new Screen({
    name: <span class="text-green-500 font-bold">'Screen Name'</span>,
    backgroundColor: <span class="text-green-500 font-bold">'#39FF14'</span>,
    textColor: <span class="text-green-500 font-bold">'black'</span>,
    buttonColor: <span class="text-green-500 font-bold">'green'</span>,
    popupBackgroundColor: <span class="text-green-500 font-bold">'yellow'</span>,
    title: <span class="text-green-500 font-bold">'Screen Title'</span>,
    content: <span class="text-green-500 font-bold">`+'`'+`This is the screen content`+'`'+`</span>,
    buttonText: <span class="text-green-500 font-bold">'Click Me!'</span>,
});</span>`,
                },


                {
                    text: [
                        `You can use a color picker to find a colors that you like`,
                        `You can use a color name or a hex color code`,
                        `<a href="https://htmlcolorcodes.com/color-picker/" class="underline italic step-button" target="_blank">HTML Color Picker</a>`,
                    ]

                },                
                {
                    text: [
                        `To create multiple screens you can copy and paste the screen code`,
                        `Make sure to change the name of the variable of the new screen`,
                    ],
code: `<span class="text-yellow-700">// Create a new screen
const <span class="text-green-500 font-bold">secondScreen</span> = new Screen({
    ....
});</span>`,
                },
                {
                    text: [
                        `You may also leave the buttonText empty and`,
                        `this will hide the button on the screen`,
                    ],
code: `<span class="text-yellow-700">buttonText: <span class="text-green-500 font-bold">''</span>,`,
                },

                {
                    text: [
                        `You may also want to create a final screen for your application`,
                        `This is a screen that is shown when the application is complete`,
                    ],
                },
                {
                    text: [
                        `Save & Reload`,
                        `And Proceed to the next lesson...`,
                    ],
                }
            ],
        },
        {
            complete: false,
            name: 'Introduction to the Interactive Scene',
            menuName: 'Scene',
            className: 'Scene',
            goal: 'Learn how to create an Interactive Scene',
            description: `The Scene is a screen that can be played in the applications timeline`,
            content: [
                `Now lets create our first interactive Scene`,
                `This is similar to creating a Screen for the timeline`,
                `However the Scene is interactive and includes Motion Trackers and Trigger Zones`,
            ],
            steps: [
                {
                    text: [
                        `Make these changes in the 'JS' panel (either above or on the left)`,
                        `This should be before the app.init() function`,
                        `And after the <b>app</b> and <b>timeline</b> variable has been created`,
                    ],
code: `<span class="text-green-500 font-bold">//  Create a new scene
const scene = new Scene({
    name: 'Simple Mouse Tracking Scene',
    backgroundColor: '#333',
});`
                },
                {
                    text: [
                        `Add the scene to the timeline`,
                        `This should be after the scene variable has been created`,
                        `And before the app.init() function`,
                    ],
code: `<span class="text-green-500 font-bold">// Add the scene to the timeline
timeline.addTimelineStep(scene);</span>`
                },
                {
                    text: [
                        `Save & Reload`,
                        `And Proceed to the next lesson...`,
                    ],
                }
            ],

        },
        {
            complete: false,
            name: 'Introduction to the Motion Tracker',
            menuName: 'Motion Tracker',
            className: 'MotionTracker',
            goal: 'Learn how to create a Motion Tracker',
            description: `The Motion Tracker is a tracker that can be used to track the position of a users mouse or hand or other body part`,
            content: [
                `Now lets create our first Motion Tracker`,
                `The Motion Tracker is a scene object that follows the position of the chosen tracking type`,
                `In this instance we are going to create a Motion Tracker that tracks the mouse`,
                `Motion Trackers can be controlled by the user to move around the scene`,
                `Motion Trackers can be used to trigger events when they enter a Trigger Zone`,
            ],
            steps: [
                {
                    text: [
                        `Make these changes in the 'JS' panel (either above or on the left)`,
                        `This should be before the app.init() function`,
                        `And after the <b>app</b> and <b>timeline</b> variable has been created`,
                    ],
code: `<span class="text-green-500 font-bold">//  Create a new motion tracker
const motionTracker = new MotionTracker({
    radius: 30,
    color: '#00b7ff',
    trackingType: 'mouse',
});</span>`
                },
                {
                    text: [
                        `Add the motion tracker to the scene`,
                        `This should be after the motionTracker variable has been created`,
                        `And before the app.init() function`,
                    ],
code: `<span class="text-green-500 font-bold">// Add the motion tracker to the scene
scene.addSceneObject(motionTracker);</span>`
                },
                {
                    text: [
                        `You can modify the motion tracker settings`,
                        `The radius is the size of the motion tracker`,
                        `The color is the color of the motion tracker`,
                    ],
code: `<span class="text-yellow-700">//  Create a new motion tracker
const motionTracker = new MotionTracker({
    radius: <span class="text-green-500 font-bold">30</span>,
    color: <span class="text-green-500 font-bold">'#00b7ff'</span>,
    trackingType: 'mouse',
});</span>`
                },
                {
                    text: [
                        `Save & Reload`,
                        `And Proceed to the next lesson...`,
                    ],
                }
            ],

        },
        {
            complete: false,
            name: 'Introduction to the Trigger Zone',
            menuName: 'Trigger Zone',
            className: 'TriggerZone',
            goal: 'Learn how to create a Trigger Zone',
            description: `The Trigger Zone is a zone that can be used to trigger an event when a user enters the zone with their mouse or hand or other body part part`,
            content: [
                `Now lets create our first Trigger Zone`,
                `This is similar to creating a Motion Tracker`,
                `However a Trigger Zone is an object that has a set position within the scene`,
                `A Trigger Zone is interactive is triggered when a motion tracker enters the zone`,
            ],
            steps: [
                {
                    text: [
                        `Make these changes in the 'JS' panel (either above or on the left)`,
                        `This should be before the app.init() function`,
                        `And after the <b>app</b> and <b>timeline</b> variable has been created`,
                    ],
code: `<span class="text-green-500 font-bold">//  Create a new trigger zone
const triggerZone = new TriggerZone({
    percentageX: 50,
    percentageY: 50,
    radius: 40,
    inactiveColor: '#ff0000',
    activeColor: '#00ff00',
    triggerType: 'mouse',
});
`
                },
                {
                    text: [
                        `Add the trigger zone to the scene`,
                        `This should be after the triggerZone variable has been created`,
                        `And before the app.init() function`,
                    ],
code: `<span class="text-green-500 font-bold">// Add the trigger zone to the scene
scene.addSceneObject(triggerZone);</span>`
                },
                {
                    text: [
                        `You can modify the trigger zone settings`,
                        `The percentageX is the horizontal position of the trigger zone`,
                        `The percentageY is the vertical position of the trigger zone`,
                        `The radius is the size of the trigger zone`,
                        `The inactiveColor is the color of the trigger zone when it is inactive`,
                        `The activeColor is the color of the trigger zone when it has been triggered and is active`,
                        `The triggerType is the type of tracking that the trigger zone uses`,
                    ],
code: `<span class="text-yellow-700">//  Create a new trigger zone
const triggerZone = new TriggerZone({
    percentageX: <span class="text-green-500 font-bold">50</span>,
    percentageY: <span class="text-green-500 font-bold">50</span>,
    radius: <span class="text-green-500 font-bold">40</span>,
    inactiveColor:  <span class="text-green-500 font-bold">'#ff0000'</span>,
    activeColor:  <span class="text-green-500 font-bold">'#00ff00'</span>,
    triggerType: 'mouse',
});</span>
`
                },
                {
                    text: [
                        `To create multiple Trigger Zones you can copy and paste the Trigger Zone code`,
                        `Make sure to change the name of the variable of the new Trigger Zone`,
                        `Make sure to change the percentageX and percentageY`,
                        `of the new Trigger Zone so that they dont overlay each other`,
                    ],
code: `<span class="text-yellow-700">// Create a new trigger zone
const <span class="text-green-500 font-bold">secondScreenTriggerZone</span> = new TriggerZone({
    percentageX: <span class="text-green-500 font-bold">75</span>,
    percentageY: <span class="text-green-500 font-bold">75</span>,
    ....
});</span>`,
                },
                {
                    text: [
                        `Save & Reload`,
                        `And Proceed to the next lesson...`,
                    ],
                }
            ],

        },
        {
            complete: false,
            name: 'Motion Tracking The Hands',
            menuName: 'Motion Hands',
            className: 'Hands',
            content: [
                        `Let's create a hand tracking system`,
                        `First we need to create a new Motion Tracker`,
                        `This Motion Tracker will track the hand`,
                    ],
            steps: [
                    {
                        text: [
                            `Make these changes in the 'JS' panel (either above or on the left)`,
                            `This should be before the app.init() function`,
                            `And after the <b>app</b> and <b>timeline</b> variable has been created`,
                        ],

code: `<span class="text-green-500 font-bold">//  Create a new motion tracker
const motionTrackerHand = new MotionTracker({
    radius: 30,
    color: '#00b7ff',
    trackingType: 'hand',
});</span>`
                },
                {
                    text: [
                        `Next we need to add the Motion Tracker to the scene`,
                    ],
code: `<span class="text-green-500 font-bold">// Add the motion tracker to the scene
scene.addSceneObject(motionTrackerHand);</span>`
                },
                {
                    text: [
                        `Next we need to create a new Trigger Zone`,
                        `This Trigger Zone will trigger when the hand enters the zone`,
                    ],  
code: `<span class="text-green-500 font-bold">//  Create a new trigger zone
const triggerZoneHand = new TriggerZone({
    percentageX: 25,
    percentageY: 30,
    radius: 40,
    inactiveColor: '#ff0000',
    activeColor: '#00ff00',
    triggerType: 'hand',
});</span>`
                },
                {
                    text: [
                        `Next we need to add the Trigger Zone to the scene`,
                    ],
code: `<span class="text-green-500 font-bold">// Add the trigger zone to the scene
scene.addSceneObject(triggerZoneHand);</span>`
                },
                {
                    text: [
                        `Next we need to create a new Motion Tracker`,
                        `This Motion Tracker will track the other hand`,
                    ],
code: `<span class="text-green-500 font-bold">//  Create a new motion tracker
const motionTrackerHand2 = new MotionTracker({
    radius: 30,
    color: '#2600ff',
    trackingType: 'hand',
});</span>`
                },
                {
                    text: [
                        `Next we need to add the Motion Tracker to the scene`,
                    ],
code: `<span class="text-green-500 font-bold">// Add the motion tracker to the scene
scene.addSceneObject(motionTrackerHand2);</span>`
                },
                {
                    text: [
                        `Next we need to create a new Trigger Zone`,
                        `This Trigger Zone will trigger when the hand enters the zone`,
                    ],
code: `<span class="text-green-500 font-bold">//  Create a new trigger zone
const triggerZoneHand2 = new TriggerZone({
    percentageX: 75,
    percentageY: 50,
    radius: 40,
    inactiveColor: '#ff0000',
    activeColor: '#00ff00',
    triggerType: 'hand',
});</span>`
                },
                {
                    text: [
                        `Next we need to add the Trigger Zone to the scene`,
                    ],
code: `<span class="text-green-500 font-bold">// Add the trigger zone to the scene
scene.addSceneObject(triggerZoneHand2);</span>`
                },
                {
                    text: [
                        `Save & Reload`,
                        `And Proceed to the next lesson...`,
                    ],
                }
            ],
        },
        {
            complete: false,
            name: 'Motion Tracking The Face',
            menuName: 'Motion Face',
            className: 'Face',
            content: [

                        `Let's create a face tracking system`,
                        `First we need to create a new Motion Tracker`,
                        `This Motion Tracker will track the face`,
                    ],
            steps: [
                    {
                        text: [
                            `Make these changes in the 'JS' panel (either above or on the left)`,
                            `This should be before the app.init() function`,
                            `And after the <b>app</b> and <b>timeline</b> variable has been created`,
                        ],
code: `<span class="text-green-500 font-bold">//  Create a new motion tracker
const motionTrackerFace = new MotionTracker({
    radius: 30,
    color: '#ae00ff',
    trackingType: 'face',
});</span>`
                },
                {
                    text: [
                        `Next we need to add the Motion Tracker to the scene`,
                    ],
code: `<span class="text-green-500 font-bold">// Add the motion tracker to the scene
scene.addSceneObject(motionTrackerFace);</span>`
                },
                {
                    text: [
                        `Next we need to create a new Trigger Zone`,
                        `This Trigger Zone will trigger when the face enters the zone`,
                    ],
code: `<span class="text-green-500 font-bold">//  Create a new trigger zone
const triggerZoneFace = new TriggerZone({
    percentageX: 25,
    percentageY: 30,
    radius: 40,
    inactiveColor: '#ff0000',
    activeColor: '#00ff00',
    triggerType: 'face',
});</span>`
                },
                {
                    text: [
                        `Next we need to add the Trigger Zone to the scene`,
                    ],
code: `<span class="text-green-500 font-bold">// Add the trigger zone to the scene
scene.addSceneObject(triggerZoneFace);</span>`
                },
                {
                    text: [
                        `Save & Reload`,
                        `And Proceed to the next lesson...`,
                    ],
                }
            ],
        },
                        
    ]
}




class ErrorEngine {
    errors = []

    constructor() {
        system.debugConsoleLog(this.constructor.name, 'ErrorEngine Constructed')
    }

    checkStates = ({
        classObject,
        lesson,
        states
    }) => {
        let className = '';
        if (classObject === null) {
            className = lesson;
        } else {
            className = classObject.constructor.name;
        }
         
        system.log(this.constructor.name,`Checking States 🠪 (${className} ⇋ ${lesson})`)

        let noErrors = true;

        states.forEach((state) => {
            if (!state) {
                system.error(className, 'Incorrect Setup', lesson);
                noErrors = false;
            }
        });

        if (!noErrors) {
            system.classError(className, 'checkStates')
        }
        return noErrors;
    }


    checkDefinedProperties = ({
        classObject,
        lesson,
        properties
    }) => {
        const className = classObject.constructor.name;
        system.log(this.constructor.name,`Checking Defined Properties 🠪 (${className} ⇋ ${lesson})`)

        let noErrors = true;

        properties.forEach((property) => {
            const definedState = classObject[property] !== undefined;
            
            if (!definedState) {

                system.log(this.constructor.name,`[ErrorEngine] Property (${property} ⇋ ${definedState})`);

                system.error(className, property, lesson);
                noErrors = false;
            }
        });

        if (!noErrors) {
            system.classError(classObject, 'checkDefinedProperties')
        }

        return noErrors;
    }

}

class BodyPart {
    name = 'BodyPart'
    tracking = false
    constructor(
      settings = {
        type, radius, color, trackingType
      }
      ) {
      this.type = settings.type
      this.radius = settings.radius
      this.color = settings.color
      this.trackingType = settings.trackingType
    }
  
    calculateCanvasPosition = () => {
      this.x = ((this.canvas.width/100) * this.percentageX) + this.radius/2
      this.y = ((this.canvas.height/100) * this.percentageY) + this.radius/2
    }
  
    setPosition = (
      percentageX, 
      percentageY
    ) => {
      this.percentageX = percentageX
      this.percentageY = percentageY
    }
  
    setTracking = (tracking) => {
      this.tracking = tracking
    }
  
    init = (ctx, canvas) => {
      this.ctx = ctx
      this.canvas = canvas
      this.calculateCanvasPosition()
    }
  }
// Manages all the tracking logic



// preset scenesettings for being added to in constructor
const presetTrackingSettings = {
    modelType : 'handTrack',
};

const modelParams = {
    flipHorizontal: true,   // flip e.g for video  
    maxNumBoxes: 20,        // maximum number of boxes to detect
    iouThreshold: 0.5,      // ioU threshold for non-max suppression
    scoreThreshold: 0.6,    // confidence threshold for predictions.
}

let trackingEngineCreated = false;
let trackingEngineInit = false;




class TrackingEngine {
    model = null
    running = false
    trackedPredictions = []
    handTrack = null

    trackedBodyParts = {
        'hand-1': {
            bbox: {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
            },
            centerPoint: {
                x: 0,
                y: 0,
            },
            canvasSize: {
                width: 0,
                height: 0,
            },
            percentagePosition : {
                x: 0,
                y: 0,
            },
            tracked: false,
            pose: '',
            motionTracker: null
        },
        'hand-2': {
            bbox: {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
            },
            centerPoint: {
                x: 0,
                y: 0,
            },
            canvasSize: {
                width: 0,
                height: 0,
            },
            percentagePosition : {
                x: 0,
                y: 0,
            },
            tracked: false,
            pose: '',
            motionTracker: null
        },
        'face': {
            bbox: {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
            },
            centerPoint: {
                x: 0,
                y: 0,
            },
            canvasSize: {
                width: 0,
                height: 0,
            },
            percentagePosition : {
                x: 0,
                y: 0,
            },
            tracked: false,
            pose: '',
            motionTracker: null
        },
    };

    constructor(
        trackingSettings
    ) {
        app.trackingEngine = this;
        trackingEngineCreated = true;
        //  merge the presetTrackingSettings with the trackingSettings passed in
        this.trackingSettings = Object.assign(presetTrackingSettings, trackingSettings);
        
        this.modelType = this.trackingSettings.modelType;

        this.video              = system.domEngine.getElement('tracking-engine-webcam-video');
        const { canvas, ctx }   = system.domEngine.getCanvas('tracking-engine-canvas');
        this.canvas = canvas;
        this.ctx = ctx;


        this.handData = document.getElementById("handData");
        this.handTrack = handTrack;
    }

    isLoaded = () => {
        return this.model !== null;
    }

    checkIfWebcamBlocked = () => {
        if (this.video.paused) {
            system.log(this.constructor.name,'Webcam blocked');
            system.domEngine.showWebcamBlocked();
        } else {
            system.log(this.constructor.name,'Webcam not blocked');
        }
    }

    assignTrackedBodyParts = () => {
/*         this.trackedBodyParts['face'].tracked = false;
        this.trackedBodyParts['hand-1'].tracked = false;
        this.trackedBodyParts['hand-2'].tracked = false; */
        this.trackedBodyParts['hand-1'].updated = false;
        this.trackedBodyParts['hand-2'].updated = false;
        this.trackedPredictions.forEach((prediction) => {

            if (prediction.label === 'face') {

                this.trackedBodyParts['face'].bbox = prediction.bbox;
                this.trackedBodyParts['face'].centerPoint = {
                    x: prediction.bbox[0] + (prediction.bbox[2] / 2),
                    y: prediction.bbox[1] + (prediction.bbox[3] / 2),
                };
                this.trackedBodyParts['face'].canvasSize = {
                    width: this.canvas.width,
                    height: this.canvas.height,
                };
                this.trackedBodyParts['face'].percentagePosition = {
                    x: this.trackedBodyParts['face'].centerPoint.x / (this.canvas.width/100),
                    y: this.trackedBodyParts['face'].centerPoint.y / (this.canvas.height/100),
                };

                this.trackedBodyParts['face'].tracked = true;
                
            }
            if (prediction.label === 'open' || prediction.label === 'point' || prediction.label === 'closed') {
                if (!this.trackedBodyParts['hand-1'].updated) {
                    this.trackedBodyParts['hand-1'].bbox = prediction.bbox;
                    this.trackedBodyParts['hand-1'].centerPoint = {
                        x: prediction.bbox[0] + (prediction.bbox[2] / 2),
                        y: prediction.bbox[1] + (prediction.bbox[3] / 2),
                    };
                    this.trackedBodyParts['hand-1'].canvasSize = {
                        width: this.canvas.width,
                        height: this.canvas.height,
                    };

                    this.trackedBodyParts['hand-1'].percentagePosition = {
                        x: this.trackedBodyParts['hand-1'].centerPoint.x / (this.canvas.width/100),
                        y: this.trackedBodyParts['hand-1'].centerPoint.y / (this.canvas.height/100),
                    };

                    this.trackedBodyParts['hand-1'].tracked = true;
                    this.trackedBodyParts['hand-1'].updated = true;
                } else if (!this.trackedBodyParts['hand-2'].updated) {
                    this.trackedBodyParts['hand-2'].bbox = prediction.bbox;
                    this.trackedBodyParts['hand-2'].centerPoint = {
                        x: prediction.bbox[0] + (prediction.bbox[2] / 2),
                        y: prediction.bbox[1] + (prediction.bbox[3] / 2),
                    };
                    this.trackedBodyParts['hand-2'].canvasSize = {
                        width: this.canvas.width,
                        height: this.canvas.height,
                    };

                    this.trackedBodyParts['hand-2'].percentagePosition = {
                        x: this.trackedBodyParts['hand-2'].centerPoint.x / (this.canvas.width/100),
                        y: this.trackedBodyParts['hand-2'].centerPoint.y / (this.canvas.height/100),
                    };
                    
                    this.trackedBodyParts['hand-2'].tracked = true;
                    this.trackedBodyParts['hand-2'].updated = true;
                }
            }
        });

    }


    loadHandTrackModel = () => {
        this.handTrack.load(modelParams).then(lmodel => {
            // detect objects in the image.
            this.model = lmodel
            system.log(
                this.constructor.name,
                'Handtrack model loaded');
            this.startVideo();
        });
    }


    loadModel = () => {
        if (this.modelType === 'handTrack') {
            this.loadHandTrackModel();
        }
    }

    runDetection = () => {
        this.model.detect(this.video).then(predictions => {
            this.model.renderPredictions(predictions, this.canvas, this.ctx, this.video);
            this.trackedPredictions = predictions;
            this.assignTrackedBodyParts();
            requestAnimationFrame(this.loop);
        });
    }

    startVideo = () => {       
        this.handTrack.startVideo(this.video).then((status) => {
            system.log(this.constructor.name,`Webcam Stream: ${status?'true':'false'}`);

            this.checkIfWebcamBlocked();

            system.domEngine.showWebcamView();

            if (status) {
                system.log(this.constructor.name,'Running detection loop')
                this.runDetection();
                this.running = true
            }
        });
    }

   
    stopVideo() {
        this.handTrack.stopVideo(video)
        this.running = false;
        system.log(this.constructor.name,'Video stopped')
    }

    init = () => {
        system.domEngine.showTrackingEngine();
        this.loadModel();
    }

    updateSystem = () => {
        if (this.running) {
            this.runDetection();
        }
    }


    loop = () => {
        this.updateSystem();
    }
}




const trackingTypes = [
    'mouse',
    'face',
    'hand',
    'body',
]

class MotionTracker {
    name = 'MotionTracker'
    tracked = false

    constructor({
        radius,
        color,
        trackingType,
    }) {
        this.radius = radius,
        this.color = color,
        this.trackingType = trackingType;

        if(trackingType === 'hand' || trackingType === 'face') {
            system.setTrackingEngineActive();
        }

        system.debugConsoleLog(this.constructor.name, 'MotionTracker Constructed');
    }

    

    calculateCanvasPosition = () => {
        this.x = (((this.canvas.width/100) * this.percentageX) + this.radius/2)
        this.y = ((this.canvas.height/100) * this.percentageY) + this.radius/2
    }


    calculateCanvasPosition = () => {
        this.x = (((this.canvas.width/100) * this.percentageX) + this.radius/2)
        this.y = ((this.canvas.height/100) * this.percentageY) + this.radius/2
    }


    storePercentagePosition = () => {
        this.percentageX = this.x / (this.canvas.width/100)
        this.percentageY = this.y / (this.canvas.height/100)
    }


    setPosition = (
        x,
        y,
    ) => {
        this.x = x
        this.y = y
        this.tracked = true
    }

    setPercentagePosition = (
        x,
        y,
    ) => {
        this.percentageX = x
        this.percentageY = y
    }

    calculateDistance = (
        position1 = {
            x,
            y,
        },
        position2 = {
            x,
            y,
        }
        ) => {
        var deltaX = position2.x - position1.x;
        var deltaY = position2.y - position1.y;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    }


    getClosestTrackedHand = () => {
        let closestHand = null;
        let closestDistance = 100000;

        if (system.trackingEngine.trackedBodyParts['hand-1'].tracked) {

         

            //  calculate the distance between the tracked body part center and the current position
            const distance = this.calculateDistance(system.trackingEngine.trackedBodyParts['hand-1'].percentagePosition, {
                x: this.percentageX,
                y: this.percentageY,
            });

            closestDistance = distance;
            closestHand = system.trackingEngine.trackedBodyParts['hand-1'];
            closestHand.otherHand = system.trackingEngine.trackedBodyParts['hand-2'];

        }

        if (system.trackingEngine.trackedBodyParts['hand-2'].tracked) {
            
            //  calculate the distance between the tracked body part center and the current position
            const distance = this.calculateDistance(system.trackingEngine.trackedBodyParts['hand-2'].percentagePosition, {
                x: this.percentageX,
                y: this.percentageY,
            });

            if (distance < closestDistance) {
                closestHand = system.trackingEngine.trackedBodyParts['hand-2'];
                closestHand.otherHand = system.trackingEngine.trackedBodyParts['hand-1'];
                closestDistance = distance;
            }
        }

        return closestHand;
    }

    smoothedX = null;
    smoothedY = null;

    smoothPosition = (
        x,
        y,
    ) => {

        if (this.smoothedX === null || this.smoothedY === null) {
            this.smoothedX = x;
            this.smoothedY = y;
        } else {
            this.smoothedX = (this.smoothedX + x) / 2;
            this.smoothedY = (this.smoothedY + y) / 2;
        }
        
        this.setPosition(
            this.smoothedX,
            this.smoothedY,
        )
    }
    

    lastHandTracked = null;

    getBodyPartTracking = () => {
        if (this.trackingType === 'face') {
            if (system.trackingEngine.trackedBodyParts['face'].tracked) {

                this.smoothPosition(
                    system.trackingEngine.trackedBodyParts['face'].percentagePosition.x * (this.canvas.width/100),
                    system.trackingEngine.trackedBodyParts['face'].percentagePosition.y * (this.canvas.height/100),
                )

                this.setPercentagePosition(
                    system.trackingEngine.trackedBodyParts['face'].percentagePosition.x,
                    system.trackingEngine.trackedBodyParts['face'].percentagePosition.y,
                )

                system.trackingEngine.trackedBodyParts['face'].tracked = false;
            }
        } else if (this.trackingType === 'hand') {
            if (system.trackingEngine.trackedBodyParts['hand-1'].tracked || system.trackingEngine.trackedBodyParts['hand-2'].tracked) {

                let closestHand = this.getClosestTrackedHand();
                
                if(!closestHand.motionTracker && closestHand.otherHand.motionTracker !== this) {
                    closestHand.motionTracker = this;
                } else if (closestHand.motionTracker !== this){
                    return;
                };


                


                if (closestHand !== null) {
                    this.smoothPosition(
                        closestHand.percentagePosition.x * (this.canvas.width/100),
                        closestHand.percentagePosition.y * (this.canvas.height/100),
                    )
    
                    this.setPercentagePosition(
                        closestHand.percentagePosition.x,
                        closestHand.percentagePosition.y,
                    )
                }

                
            }
        }

    }

    update = () => {
        this.getBodyPartTracking()
        this.render(); 
        this.storePercentagePosition()
    }


    render = () => {
        if (this.x === null || this.y === null || !this.tracked) {
            return;
        };
        this.draw()
    }


    draw = () => {
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        this.ctx.fillStyle = this.color
        this.ctx.fill()
        this.ctx.closePath()
        /* this.tracked = false */
    }

    initialized = false;

    reset = () => {
        this.tracked = false
        this.x = -1000;
        this.y = -1000;
        this.initialized = false;
    }

    init = (ctx, canvas, sceneEngine) => {
        this.sceneEngine = sceneEngine
        this.canvas = canvas
        this.ctx = ctx
        this.initialized = true;


        if (
            !system.errorEngine.checkDefinedProperties({
                classObject: this,
                lesson: 'MotionTracker',
                properties: ['radius', 'color', 'trackingType'],
            }) 
        ) {
            return false;
        };


        if(this.trackingType === 'mouse') {
            window.addEventListener('pointermove', (event) => {
                if (!this.initialized) {
                    return;
                }
                this.setPosition(
                    event.clientX,
                    event.clientY
                )
            })
        } 
            
    }
}


class TriggerZone {
    name = 'TriggerZone'
    triggered = false

    constructor({
            name,
            percentageX,
            percentageY,
            radius,
            inactiveColor,
            activeColor,
            triggerType
        }) {
        this.name = name? name : this.name
        this.percentageX = percentageX
        this.percentageY = percentageY
        this.radius = radius
        this.inactiveColor = inactiveColor
        this.color = inactiveColor
        this.activeColor = activeColor
        this.triggerType = triggerType

        if(triggerType === 'hand' || triggerType === 'face') {
            system.setTrackingEngineActive();
        }

        system.debugConsoleLog(this.constructor.name, `TriggerZone ${this.name} Constructed`);

    }

    calculateCanvasPosition = () => {
        this.x = ((this.canvas.width/100) * this.percentageX) + this.radius/2
        this.y = ((this.canvas.height/100) * this.percentageY) + this.radius/2
    }

    storePercentagePosition = () => {
        this.percentageX = this.x / (this.canvas.width/100)
        this.percentageY = this.y / (this.canvas.height/100)
    }

    reset = () => {
        this.triggered = false
        this.color = this.inactiveColor
    }

    trigger = () => {
        this.color = this.activeColor
        this.triggered = true
    }

    checkCollisions = (sceneObjects) => {
        if (this.triggered) return

        sceneObjects.forEach((sceneObject) => {
            if (sceneObject instanceof MotionTracker && sceneObject.trackingType === this.triggerType) {
                let dx = sceneObject.x - this.x
                let dy = sceneObject.y - this.y
                let distance = Math.sqrt(dx * dx + dy * dy)
2
                if (distance < sceneObject.radius + this.radius) {
                    this.trigger();
                } else {
                    this.color = this.inactiveColor
                }
            }
        })
    }


    update = (sceneObjects) => {
        this.checkCollisions(sceneObjects)
        this.storePercentagePosition()
    }


    render = () => {
        this.draw()
    }

    draw = () => {
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        this.ctx.fillStyle = this.triggered?this.activeColor:this.inactiveColor
        this.ctx.fill()
        this.ctx.closePath()
    }

    init = (ctx, canvas) => {
        this.ctx = ctx
        this.canvas = canvas

        if (
            !system.errorEngine.checkDefinedProperties({
                classObject: this,
                lesson: 'TriggerZone',
                properties: [
                    'percentageX',
                    'percentageY',
                    'radius',
                    'inactiveColor',
                    'activeColor',
                    'triggerType'
                ],
            }) 
        ) {
            return false;
        };



        this.reset()
        this.calculateCanvasPosition()
    }
}


class SceneEngine {
    fps = 0;
    sceneObjects = [];

    constructor({
        sceneObjects,
        backgroundColor,
        backgroundImage,
        scene,
        debug,
    }) {

        this.backgroundColor = backgroundColor;
        this.backgroundImage = backgroundImage;
        this.sceneObjects = sceneObjects;
        this.scene = scene;
        this.debug = debug;

        const { canvas, ctx } = system.domEngine.getCanvas('scene');
        
        this.canvas = canvas;
        this.ctx = ctx;

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        system.domEngine.onWindowResize(this.resizeCanvas);

        /* if (this.background.video) {
            this.background.videoStream = system.domEngine.getElement('tracking-engine-webcam-video'); */
            /* this.background.videoStream.addEventListener('play', function() {
                var $this = this; //cache
                (function loop() {
                    if (!$this.paused && !$this.ended) {
                        this.ctx.drawImage($this, 0, 0);
                        setTimeout(loop, 1000 / 30); // drawing at 30fps
                    }
                })();
            }, 0); */
/*         } */

        system.debugConsoleLog(this.constructor.name, 'SceneEngine Constructed');
    }

    

    

    calculateFps =  () => {
        //  calculate fps
        this.now = Date.now();
        this.delta = this.now - this.then;
        this.then = this.now;
        this.interval = 1000 / this.delta;
        this.fps = Math.round(this.interval);
    }


    renderFpsCounter = () => {
        if (this.debug) {
            // Add black background to text
            this.ctx.fillStyle = "black";
            this.ctx.fillRect(this.canvas.width - 100, this.canvas.height - 40, 100, 40);
            this.ctx.font = "30px Arial";
            this.ctx.fillStyle = "green";
            this.ctx.textAlign = "center";            
            this.ctx.fillText(this.fps, this.canvas.width - 50, this.canvas.height - 10);
        } 
    }

    // On resize of canvas recalculate positions of objects
    resizeCanvas = () => {
        /* return; */
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.canvas.relativeSize = {
            width: this.canvas.width / 100,
            height: this.canvas.height / 100,
        }
        this.canvas.center = {
            x: this.canvas.width / 2,
            y: this.canvas.height / 2,
        }

        this.canvas.ratio = this.canvas.width / this.canvas.height;



       /*  this.sceneObjects.forEach(sceneObject => {
            sceneObject.calculateCanvasPosition();
        }) */


    }

    refreshSceneObjects = () => {
        this.orderSceneObjects();
    }


    orderSceneObjects = () => {
        this.sceneObjects.sort((a, b) => {
            return a.layer - b.layer;
        })
    }

    addSceneObject = (sceneObject) => {
        sceneObject.init(
            this.ctx,
            this.canvas,
        )
        this.sceneObjects.push(sceneObject);
        this.refreshSceneObjects();
    }

    destroyObject = (objectName) => {
        this.sceneObjects.forEach((sceneObject, index) => {
            if (sceneObject.name === objectName) {
                sceneObject.destroy();
                this.sceneObjects.splice(index, 1);
            }
        })
        this.refreshSceneObjects();
    }


    getTrackerPositionInBackgroundVideo = (motionTracker) => {
        const imageCoverSize = system.domEngine.getImageCoverSize(this.background.videoStream, this.canvas.width, this.canvas.height);
        const x = imageCoverSize.x + (imageCoverSize.width - motionTracker.x);
        const y = motionTracker.y - imageCoverSize.y;
        return { x, y };
    }

    renderBackground = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (this.backgroundColor && this.backgroundColor !== '') {
            this.ctx.fillStyle = this.backgroundColor;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        };
        if (this.backgroundImage && this.backgroundImage !== '') {
            const imageCoverSize = system.domEngine.getImageCoverSize(this.backgroundImage, this.canvas.width, this.canvas.height);
            this.ctx.drawImage(this.backgroundImage, imageCoverSize.x, imageCoverSize.y, imageCoverSize.width, imageCoverSize.height);
        };
        
/*         if (this.background.video && this.background.video !== '' && this.background.videoStream) {
            const imageCoverSize = system.domEngine.getImageCoverSize(this.background.videoStream, this.canvas.width, this.canvas.height);
            this.ctx.drawImage(this.background.videoStream, imageCoverSize.x, imageCoverSize.y, imageCoverSize.width, imageCoverSize.height);
        }; */
    }



    updateSystem = () => {
        //  calculate fps
        this.calculateFps();

/*         if(this.scene.countDownFrame > 0) {
            console.log('this.countDownFrame', this.scene.countDownFrame)
            console.log('this.delta', this.delta)
            this.scene.countDownFrame -= (this.delta/1000) || 0;
            return;
        } */

        //  update sceneObjects
        this.sceneObjects.forEach(sceneObject => {
            sceneObject.update(this.sceneObjects);
        });
    }

    renderFrame = () => {

        this.renderBackground();

        //  render sceneObjects in layer order
        this.sceneObjects.forEach(sceneObject => {
            sceneObject.render();
        });
        
        this.renderFpsCounter();
    }

    loop = () => {
        if (this.pause) return;

        this.resizeCanvas();
        this.updateSystem();
        
        this.renderFrame();
        this.scene.update();
        requestAnimationFrame(this.loop);
    }

    pause = false;

    stop = () => {
        this.pause = true;
    }

    init = (scene) => {
        
        this.scene = scene;
        this.sceneObjects.forEach(sceneObject => {
            sceneObject.init(
                this.ctx,
                this.canvas,
                this
            )
        });
        this.pause = false;
        this.loop();
        system.debugConsoleLog(this.constructor.name, 'SceneEngine Initiated');
    }
}



//  Check after everyting in the whole site has finished loading and initiating and see if the sceneEngine is present
/* setTimeout(() => {
    teacher.lessonCheckState('sceneEngine', sceneEngineCreated && sceneEngineInit);
}, 2500);
 */





class Scene {
    sceneEngine
    state = {
        active: false,
    }
    sceneError = false;


    constructor({
        name,
        backgroundColor,
        backgroundImage,
        triggerZones = [],
        motionTrackers = [],
        debug,
    }) {
        this.name = name;
        this.triggerZones = triggerZones;
        this.motionTrackers = motionTrackers;
        this.backgroundColor = backgroundColor;
        this.backgroundImage = backgroundImage;
        this.debug = debug;

        

        system.debugConsoleLog(this.constructor.name, `Scene ${this.name} Constructed`);
    }


    addSceneObject = (sceneObject) => {
        if (sceneObject instanceof TriggerZone) {
            this.triggerZones.push(sceneObject);
        } else if (sceneObject instanceof MotionTracker) {
            this.motionTrackers.push(sceneObject);
        }
    }


    checkAllTriggersTriggered = () => {
        return this.triggerZones.every((triggerZone) => {
            return triggerZone.triggered;
        });
    }

    update = () => {
        if (!this.state.active) {
            return;
        }

/*         if (this.countDownFrame > 0) {
            return;
        } */

        if(this.triggerZones.length === 0 || this.motionTrackers.length === 0) {
            return;
        }

        if (this.checkAllTriggersTriggered()) {
            this.state.active = false;
            this.complete();         
        }
    }

    complete = () => {
        system.debugConsoleLog(this.constructor.name, `Scene[${this.name}] Complete`)
        system.domEngine.hideScene(() => {
            this.timeline.next();
        });
    }
    
    render = () => {
        system.debugConsoleLog(this.constructor.name, `Scene[${this.name}] Render`)
        system.domEngine.showScene();
    }

    reset = () => {
        system.debugConsoleLog(this.constructor.name, `Scene[${this.name}] Reset`)
        this.triggerZones.forEach((triggerZone) => {
            triggerZone.reset();
        });
        this.motionTrackers.forEach((motionTracker) => {
            motionTracker.reset();
        });
        this.state.active = true;
    }

    connectTimeline = (timeline) => {
        this.timeline = timeline;
    }

    countDownFrame = 0;

    

    init = () => {

        this.countDownFrame = 3;


        if(
            !system.errorEngine.checkDefinedProperties({
                classObject: this,
                lesson: 'Scene',
                properties: ['name', 'backgroundColor', 'triggerZones', 'motionTrackers'],
            })
        ) {
            this.sceneError = true;
            return false;
        };

        if(
            !system.errorEngine.checkStates({
                classObject: null,
                lesson: 'TriggerZones',
                states: [(this.triggerZones !== 0)],
            }) ||
            !system.errorEngine.checkStates({
                classObject: null,
                lesson: 'MotionTrackers',
                states: [(this.motionTrackers !== 0)],
            })
        ) {
            this.sceneError = true;
            return false;
        }

        const sceneObjects = [...this.motionTrackers, ...this.triggerZones];

        const backgroundImage = (this.backgroundImage)?this.backgroundImage:null;
        const backgroundColor = (this.backgroundColor)?this.backgroundColor:null;

        this.sceneEngine = new SceneEngine({
            sceneObjects,
            backgroundColor,
            backgroundImage,
            scene: this,
            debug,
        });

        if(this.sceneError) {
            return false;
        }

        system.teacherEngine.checkStage();

        system.debugConsoleLog(this.constructor.name, `Scene[${this.name}] Init`)
        this.render();
        this.sceneEngine.init(this);
    }


}





class Screen {

    constructor({
        name,
        buttonColor,
        textColor,
        popupBackgroundColor,
        backgroundColor,
        title,
        content,
        buttonText,
    }) {

        this.name = name;
        
        this.textColor = textColor,
        this.buttonColor = buttonColor,
        this.backgroundColor = backgroundColor,
        this.popupBackgroundColor = popupBackgroundColor,
        this.content = content;
        this.title = title;
        this.buttonText = buttonText;

        system.debugConsoleLog(this.constructor.name, `Screen ${this.name} Constructed`)
    }

    
    backgroundColor= '#39FF14'
    buttonColor= '#c300ff'

    screenStateActive = () => {
        system.log(this.constructor.name,`Screen[${this.name}] Active`)
    }


    complete = (callBack) => {
        system.debugConsoleLog(this.constructor.name, `Screen[${this.name}] Complete`)
        system.domEngine.hideScreen(() => {
            callBack();
        });
    }

    reset = () => {
        system.log(this.constructor.name,`Screen[${this.name}] Reset`)

    }

    render = () => {
        system.debugConsoleLog(this.constructor.name, `Screen[${this.name}] Render`)
        system.domEngine.renderScreen(this, this.screenStateActive);
    }

    init = () => {

        if(
            !system.errorEngine.checkDefinedProperties({
                classObject: this,
                lesson: 'Screen',
                properties: ['name', 'title', 'textColor', 'content', 'buttonColor', 'backgroundColor', 'popupBackgroundColor', 'buttonText'],
            })
        ) {
            return false;
        };

        system.debugConsoleLog(this.constructor.name, `Screen[${this.name}] Init`)
        this.render();
    }
    
}
/*
 * Timeline Module
 * Actions:
 * - Manage Timeline
 * - Manage Timeline Events
 * - Manage Timeline State
 * - Manage Timeline Data
*/


class Timeline {
    timeline = [];
    timelineStep = 0;
    state = {
        active: false,
        complete: false,
    }
    clickState = false;

    constructor() {
        system.debugConsoleLog(this.constructor.name, 'Timeline Constructed')

        
        system.domEngine.addEventListener('debug-timeline-button-right', 'click', ()=> { 
            if (this.clickState) {
                return;
            }
            if (this.timelineStep >= (this.timeline.length-1)) {
                return;
            };

            this.clickState = true;
            this.timeline[this.timelineStep].complete(() => {
                this.next();
            });
        });

        
        system.domEngine.addEventListener('debug-timeline-button-left', 'click', ()=> { 
            if (this.clickState) {
                return;
            }
            if (this.timelineStep === 0) {
                return;
            };

            this.clickState = true;
            this.timeline[this.timelineStep].complete(() => {
                this.previous();
            });
        });

        //  Add screen-button event listener
        system.domEngine.addEventListener('screen-button', 'click', ()=> { 
            if (this.clickState) {
                return;
            }
            this.clickState = true;
            system.domEngine.hideScreen(() => {
                this.next();
            });
        });
    }

    addTimelineStep(step) {
        step.timeline = this;
        this.timeline.push(step);
        if(step instanceof Scene) {
            system.debugConsoleLog(this.constructor.name, `Timeline Add Scene ${step.name}}`)
            step.connectTimeline(this)
        } else if (step instanceof Screen) {
            system.debugConsoleLog(this.constructor.name, `Timeline Add Screen ${step.name}}`)
        }
        
    }


    setTimelineStepActive = () => {

        system.domEngine.timelineTitleUpdate(`${this.timelineStep+1}: ${this.timeline[this.timelineStep].name}`);
        this.timeline[this.timelineStep].reset();
        this.timeline[this.timelineStep].init();
    }

    previous() {
        this.clickState = false;
        if (this.timelineStep === 0) {
            return;
        }
        system.debugConsoleLog(this.constructor.name, 'Timeline Previous Step ' + this.timelineStep + ' of ' + (this.timeline.length-1))
        this.timelineStep--;
        this.setTimelineStepActive();
    }


    next() {

        this.clickState = false;
        
        if (this.timelineStep >= (this.timeline.length-1)) {
            system.debugConsoleLog(this.constructor.name, 'Timeline Complete')
            return;
        };

        this.timelineStep++;

        system.debugConsoleLog(this.constructor.name, 'Timeline Next Step ' + this.timelineStep + ' of ' + (this.timeline.length-1))

        this.setTimelineStepActive();

    }

    start() {
        system.debugConsoleLog(this.constructor.name, 'Timeline Start')
/*         if(
            !system.errorEngine.checkStates({
                classObject: this,
                lesson: 'Timeline',
                states: [(this.timeline.length !== 0)],
            })
        ) {
            return false;
        } */

        if(this.timeline.length === 0) {
            system.log(this.constructor.name, 'Timeline has no steps');
            return false;
        };
        this.timelineStep = 0;
        this.setTimelineStepActive();
    }

}


//  App Core 

// Create Class of AppCore
class App {
    metaData = {
        name: 'Application Name',
        version: '0.0.1',
        description: 'Description of the application',
        developer: 'Developer Name',
        company: 'Company Name',
    };
    backgroundColor = '#0a4100';
    

    
    constructor({
        metaData,
        backgroundColor,
        debug
    }) {
        this.metaData = metaData;
        this.backgroundColor = backgroundColor;
        this.debug = debug;

        if(
            !system.errorEngine.checkDefinedProperties({
                classObject: this,
                lesson: 'App',
                properties: ['metaData', 'backgroundColor', 'debug'],
            })
        ) {
            return false;
        };

        system.domEngine.set
        system.domEngine.setAppBackgroundColor(this.backgroundColor);
        
        system.debugConsoleLog(this.constructor.name, `App ${this.metaData.name} Constructed`);
    }

    addTimeline = (timeline) => {
        this.timeline = timeline;
        system.debugConsoleLog(this.constructor.name, 'Timeline Added');
    }

    initialized = false;



    init = () => {
        system.debugConsoleLog(this.constructor.name, `App ${this.metaData.name} Init`);
        
        this.initialized = true;

        setTimeout(() => {
            system.setAppReady(this);
        }, 750);
    }

    startTimeline = () => {
        system.debugConsoleLog(this.constructor.name, `App ${this.metaData.name} Start Timeline`);
        if (this.timeline) {
            this.timeline.start();
        }
    }

    start = () => {
        system.debugConsoleLog(this.constructor.name, `App ${this.metaData.name} Start`);
        system.domEngine.showSplashScreen();
    }


}



/*
 * System is used to manage the System
 * Actions:
 * - Manage Debug
 * - Manage Loading Screen
*/

const debugConsoleOutput = {
    System: true,
    ErrorEngine: true,
    TeacherEngine: true,
    App: true,
    DomEngine: true,
    Object: true,
    Timeline: true,
    Screen: true,
    Scene: true,
    MotionTracker: true,
    TriggerZone: true,
    SceneEngine: true,
}


class System {
    settings = {
        debug: true,
        trackingEngineActive: false
    };
    consoleLog = [];
    errorLog = [];
    time = {
        start: new Date(),
        current: new Date(),
        elapsed: 0,
        deltaTime: 0,
    };
    active = false;


    constructor() {
        this.time.start = new Date();


        this.debugConsoleLog(this.constructor.name, 'System Constructed')
    }

    calculateTime = () => {
        this.time.current = new Date();
        this.time.elapsed = this.time.current - this.time.start;
        this.time.deltaTime = this.time.elapsed / 1000;
    }

    debugConsoleLog = (className, message) => {
        this.consoleLog.push({
            className: className,
            message: message
        });
        this.log(className, message);
        if (this.domEngine) {
            this.domEngine.consoleLogUpdate(this.consoleLog);
        }
    }

    log = (className, message) => {

        if (debugConsoleOutput[className] === false) {
            return;
        }

        // get the name of the function that called log
        console.log(`%c[${className}] %c${message}`, "color:#18d6d6;", "color:#d69d18;");
    }

    classError = (className, message) => {
        let errorColor = "color:#d63118; font-weight:bold;";
        let classColor = "color:#18d6d6;";
        let messageColor = "color:#d69d18;";
        console.log(`%cERROR  %c${className} %c${message}`, errorColor, classColor, messageColor);

    }

    error = (name, message, lesson) => {
        this.errorLog.push({
            name: name,
            message: message,
            lesson: lesson,
        })
        this.log(`ERROR: ${name} - ${message}`)

        if (lesson) {
            this.teacherEngine.activateLessonByClassName(lesson);
        }

        this.domEngine.showError(name, message, lesson);

    }

    start = () => {
        app.start();
    }

    trySystemStart = () => {
        if (this.active && this.appReady) {
            this.teacherEngine.checkStage();
            this.log(this.constructor.name, '-----------------------------');
            this.start();
        }
    }

    systemReady = () => {
        this.debugConsoleLog(this.constructor.name, 'System Ready');
        this.active = true;
        this.domEngine.loading(false, this.trySystemStart());
    }

    

    isSystemReady = () => {

        let ready = false;

        if (this.settings.trackingEngineActive) {
            if (this.domEngine &&
                this.teacherEngine &&
                this.errorEngine && 
                this.trackingEngine) {
                if (this.trackingEngine.isLoaded()) {
                    ready = true;
                }
            }
        } else {
            if (this.domEngine &&
                this.teacherEngine &&
                this.errorEngine) {
                    ready = true;
            }
        }
        

        if (ready) {
            this.systemReady();
        } else {
            setTimeout(() => {
                this.isSystemReady();
            }, 100);
        }
    }

    setAppReady = (app) => {
        this.debugConsoleLog(this.constructor.name, 'App Ready');
        this.app = app;
        this.appReady = true;
        this.settings.debug = this.app.debug;
        this.domEngine.setDebugState(this.app.debug);
        this.trySystemStart();
    }


    setTrackingEngineActive = () => {
        if (this.settings.trackingEngineActive) {
            return;
        }

        this.settings.trackingEngineActive = true;

        if (this.settings.trackingEngineActive) {
            this.trackingEngine = new TrackingEngine({
                modelType: 'handTrack',
            });
            this.trackingEngine.init();
        }

    }

    init = () => {
        this.domEngine = new DomEngine();
        this.teacherEngine = new TeacherEngine({
            course: courseData,
        });

        console.log('this.settings.trackingEngineActive', this.settings.trackingEngineActive);
        
        this.errorEngine = new ErrorEngine();
        system.debugConsoleLog(this.constructor.name, 'System Initialized');

        
        
        this.isSystemReady();

        this.log(this.constructor.name, '-----------------------------');

        this.teacherEngine.checkStage();
    }



}

system = new System();
system.init();



const SceneEventType = {
    SoundEffect: 'SoundEffect',
    AddScore: 'AddScore',
};


class SceneEvent {
    constructor(
        type,
        scene,
        eventData,
    ) {
        this.type = type;
        this.scene = scene;
        this.eventData = eventData;

        if (
            !system.errorEngine.checkDefinedProperties({
                classObject: this,
                lesson: 'SceneEvent',
                properties: ['type', 'scene', 'eventData'],
            }) 
        ) {
            return false;
        };

        system.debugConsoleLog(this.constructor.name, 'SceneEvent Constructed');
    }

    playSoundEffect = () => {
        system.debugConsoleLog(this.constructor.name, 'Play Sound Effect');
        const soundEffect = new Audio(this.eventData);
        soundEffect.play();
    }

    triggerEvent = () => {
        switch (this.type) {
            case SceneEventType.SoundEffect:
                this.playSoundEffect();
                break;
            case SceneEventType.AddScore:
                this.scene.addScore(this.eventData);
                break;
            default:
                break;
        }
    }

}