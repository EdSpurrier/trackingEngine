
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
  z-index: 1010;
}
#tracking-engine-webcam-blocked {
  z-index: 1006;
}

#tracking-engine {
  z-index: 1005;
}

#system {
  z-index: 1004;
}


/* TEACHER */
#course {
  z-index: 300;
}

#lesson {
  z-index: 250;
}

#teacher {
  z-index: 200;
}
/* ------- */

#debug-console {
  z-index: 100;
}


/* RUNTIME */
#debug {
  z-index: 90;
}

#screen {
  z-index: 90;
}

#scene {
  z-index: 90;
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