
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

/* HEIRARCHY */
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
  z-index: 1000;
}

#debug-console {
  z-index: 1005;
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
  height: calc(100vh-250px);
  width: 400px;
  left: -400px;
  overflow-y: auto;
}

#debug-console.active {
  opacity: 1;
  left: 0;
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

<div id="app-wrap" class="layer text-white bg-zinc-950">
<div id="empty-app" class="layer flex justify-center items-center">

  <div class="rounded-lg bg-zinc-900 p-8">
    <div class="text-xl mb-4">
      Let's Get Started!
    </div>
    <div class="mt-4">
      <div class="mb-2"><b class="mr-2">1.</b> Click the <i class="fa-solid fa-graduation-cap text-yellow-500 fa-lg mx-2"></i> icon in the top right corner.</div>
      <div class="mb-2"><b class="mr-2">2.</b> Select a lesson from the list.</div>
      <div class="mb-2"><b class="mr-2">3.</b> Follow the instructions on the screen.</div>
      <div class="mb-2"><b class="mr-2">4.</b> Most of our work will be within the 
        <svg viewBox="0 0 15 15" class="h-5 w-5 inline relative ml-1">
          <rect fill="#FCD000" width="15" height="15" rx="4"></rect>
          <path d="M6.554 3.705c0 .267-.19.496-.452.543-1.2.217-2.12 1.61-2.12 3.275 0 1.665.92 3.057 2.12 3.274a.554.554 0 0 1-.205 1.087c-1.733-.322-3.022-2.175-3.022-4.361 0-2.187 1.289-4.04 3.022-4.362a.554.554 0 0 1 .657.544zm1.892 0c0-.347.316-.607.657-.544 1.733.322 3.022 2.175 3.022 4.362 0 2.186-1.289 4.04-3.022 4.361a.554.554 0 0 1-.205-1.087c1.2-.217 2.12-1.61 2.12-3.274 0-1.665-.92-3.058-2.12-3.275a.551.551 0 0 1-.452-.543z" fill="#282828"></path>
        </svg>
        <b class="mr-1">JS</b> Panel in Codepen.</div>
    </div>
  </div>
</div>


<!-- START - SYSTEM -->
  <div id="system" class="layer pointer-events-none">
    <div id="teacher-toggle-button" class="rounded-md bg-yellow-500 fixed h-9 w-9 top-2 right-2 opacity-100 hover:scale-110 pointer-events-auto cursor aspect-square flex justify-center items-center duration-100 cursor-pointer">
      <i class="fa-solid fa-graduation-cap " style="color: #000;"></i>
    </div>



    <div id="error-console" class="layer hidden flex flex-col justify-center items-center bg-black bg-opacity-80">
      <div id="error-window" class="bg-red-900 rounded-lg overflow-hidden flex flex-col pointer-events-auto">
        <div id="error-title" class="text-xl bg-red-600 p-4">Error</div>
        <div id="error-content" class="pt-8 px-8 flex flex-col gap-4">
        </div>
        <button id="error-button" class="text-center mt-10 py-3 px-6 rounded-md self-center mt-8 text-sm cursor-pointer duration-500 hover:opacity-75 bg-slate-900 mb-8">
          Goto Lesson <i class="ml-2 fa-solid fa-arrow-right fa-sm" style="color: #ffffff;"></i>
        </button>
      </div>
    </div>


    <div id="debug-console" class="fixed bottom-0 bg-slate-700 text-xs rounded-r-lg overflow-hidden duration-500 pointer-events-auto">
      <div id="debug-console-title" class="text-md text-white bg-slate-500 font-bold px-2 py-3 border-b-1 border-slate-900">Debug Console</div>
      <div id="debug-console-content" class="flex flex-col p-2 pb-12">
      </div>
    </div>


    <div id="webcam-blocked" class="hidden fixed top-2  pointer-events-auto left-0 right-0 flex align-center justify-center ">
      <div class="bg-red-900 rounded-lg py-2 px-4 mx-2 cursor-pointer">
      <a href="https://www.youtube.com/watch?v=guv6kkVcxdU" target="_blank">
        <div> <i class="fa-solid fa-triangle-exclamation mr-2 animate-ping"></i>  Web-Cam Blocked  <i class="fa-solid fa-triangle-exclamation ml-2 animate-ping"></i> </div>
      </a>
    </div>
    </div>

    <div id="tracking-engine" class="flex align-start duration-500 pointer-events-auto hidden">
      <div id="tracking-engine-debug-view">
        <div id="tracking-engine-webcam-blocked" class="text-red-500 absolute h-full w-full flex items-center justify-center tracking-video hidden">
          <a href="https://www.youtube.com/watch?v=guv6kkVcxdU" target="_blank">
            <div class="text-center mb-3"><i id="icon-camera-block"  class="fa-solid fa-triangle-exclamation animate-ping"></i></div>
            <div>Web-Cam Blocked</div>
          </a>
        </div>
        <video id="tracking-engine-webcam-video" autoplay="autoplay" class="tracking-video">
          
        </video>
        <canvas id="tracking-engine-canvas" class="tracking-video"></canvas>  
      </div>
      
      <div id="debug-webcam-toggle-button" class="rounded-br-md bg-green-500 opacity-100 hover:scale-110 pointer-events-auto cursor aspect-square flex justify-center items-center duration-100 cursor-pointer">
        <i class="fa-solid fa-camera fa-xs" style="color: #000;"></i>
      </div>
    </div>

    

    <div id="debug" class="hidden">

      <div id="debug-console-toggle-button" class="rounded-md bg-green-500 fixed h-7 w-7 bottom-2 left-2 opacity-100 hover:scale-110 pointer-events-auto cursor aspect-square flex justify-center items-center duration-100 cursor-pointer">
        <i class="fa-solid fa-terminal fa-xs" style="color: #000;"></i>
      </div>

      <div id="debug-timeline" class="fixed bottom-0 right-0 left-0 overflow-hidden duration-500 flex align-center justify-center p-6">

        <div id="debug-timeline-button-left" class="left-button px-3 bg-cyan-500 pointer-events-auto cursor-pointer hover:scale-110 rounded-lg flex align-center justify-center duration-300">
          <div><i class="fa-solid fa-chevron-left text-sm mt-1" style="color: #ffffff;"></i></div>
        </div>

        <div id="debug-timeline-title" class="bg-blue-500 text-sm rounded-lg py-1 px-4 mx-2">
        </div>

        <div id="debug-timeline-button-right" class="right-button px-3 bg-cyan-500 pointer-events-auto cursor-pointer hover:scale-110 rounded-lg flex align-center justify-center duration-300">
            <div><i class="fa-solid fa-chevron-right text-sm mt-1" style="color: #ffffff;"></i></div>
        </div>
      </div>
    </div>
    <div id="loading-screen" class="layer flex flex-col justify-center items-center bg-gray-900 gap-4">
      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <div class="font-mono">
        Loading...
      </div>
    </div>
  </div>
<!-- END - SCENE -->

<!-- START - TEACHER -->
  <div id="teacher" class="layer hidden">
    

    <div id="course">
      <div id="course-title"></div>
      <div id="lesson-list"></div>
      <div id="course-footer"></div>
    </div>

    <div id="lesson">
      <div id="lesson-title"></div>
      <div id="lesson-content">
        <div id="lesson-description"></div>
        <div id="task">
          <div id="task-title"></div>
          <div id="task-content">
            <div id="task-description"></div>
            <div id="task-steps"></div>
          </div>
          <div id="task-footer"></div>
        </div>
        <div id="lesson-controls"></div>
      </div>
      <div id="lesson-footer"></div>
    </div>
  </div>
<!-- END - TEACHER -->

<!-- START - APP -->
  <div id="runtime" class="layer">
    
    <div id="screen" class="layer hidden flex flex-col justify-center items-center p-6">
      <div id="screen-container" class="text-center flex max-w-xl w-full flex-col justify-center items-center gap-8 p-8 rounded-lg">
        <div id="screen-title" class="text-center text-xl font-bold"></div>
        <div id="screen-content" class="text-center text-md"></div>
        <button id="screen-button" class="text-center mt-10 py-3 px-6 rounded-md self-center mt-8 text-sm cursor-pointer hover:opacity-75 duration-500"></button>
      </div>
    </div>

    <canvas id="scene" class="layer hidden"></canvas>

  </div>
<!-- END - SCENE -->

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
    "lesson-content",
    "lesson-description",
    "task",
    "task-title",
    "task-content",
    "task-description",
    "task-steps",
    "task-footer",
    "lesson-controls",
    "lesson-footer",
    "teacher",
    "runtime",
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
    "debug-timeline-title",
    'debug-timeline-button-left',
    'debug-timeline-button-right',
    'tracking-engine-webcam-video',
    'tracking-engine-canvas',
    'tracking-engine',
    'debug-webcam-toggle-button',
    'webcam-blocked',
    "tracking-engine-webcam-blocked"
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
        this.elements['app'].style.backgroundColor = color;
    }

    showLesson = (lesson) => {
        this.insertText('lesson-title', lesson.name);
        this.insertMarkup('lesson-content', lesson.content);
        this.insertMarkup('lesson-description', lesson.description);
    }


    hideScene = (callBack) => {
        Animations.fade({
            state: false,
            duration: 0.5,
            delay: 1,
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
            delay: 1,
            elements: [this.elements['scene']],
            callBack: () => {
                system.log(this.constructor.name, `screen faded-${true? 'in' : 'out'}`);
            }
        });
    }

    updateSceen = (screen) => {
        this.insertStyle('screen-container', 'color', screen.textColor)
        this.insertStyle('screen', 'background-color', screen.backgroundColor);
        this.insertStyle('screen-container', 'background-color', screen.popupBackgroundColor);
        this.insertStyle('screen-button', 'background-color', screen.buttonColor);
        this.insertText('screen-title', screen.content.title);
        this.insertHtml('screen-content', screen.content.body);
        this.setElementState('screen-button', screen.content.button != '');
        this.insertText('screen-button', screen.content.button);
    }

    renderScreen = (screen, callBack) => {
        this.updateSceen(screen);

        Animations.fade({
            state: true,
            duration: 0.5,
            delay: 1,
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
            delay: 1,
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

    hideTeacher = () => {
        this.setElementState('teacher', false);
    }

    showTeacher = () => {
        this.setElementState('teacher', true);
    }


    showLesson = (lesson) => {
        this.insertText('lesson-title', lesson.name);
        this.insertMarkup('lesson-content', lesson.content);
        this.insertMarkup('lesson-description', lesson.description);

        this.setElementState('error-console', false);

        this.setElementState('course', false);

        this.setElementState('lesson', true);

        this.setElementState('task', false);
        this.showTeacher();
    }

    showTrackingEngine = () => {
        this.setElementState('tracking-engine', true);
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
        this.insertText('debug-timeline-title', title);
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

    openTeacher = () => {

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

    constructor({
        course
    }) {
        system.log(this.constructor.name,'Teacher Engine Constructed');

        system.domEngine.addEventListener('debug-console-toggle-button', 'click', ()=> { 
            this.openTeacher();
        });

        system.domEngine.addEventListener('error-button', 'click', ()=> { 
            this.showLesson();
        });
        
        this.loadCourse(course);
    }

    openTeacher = () => {
        system.log(this.constructor.name,'Opening Teacher');
        system.domEngine.openTeacher();
    }

    openTeachAtLesson = (lesson) => {
        this.setActiveLesson(lesson);
        this.openTeacher();
    }


    loadCourse = (course) => {
        system.log(this.constructor.name,'Loading Course');
        this.course = course;
    }

    renderLessonList = (lessonList) => {
        system.log(this.constructor.name,'Rendering Lesson List');
        system.domEngine.renderLessonList(lessonList);
    }

    setActiveLesson = (lesson) => {
        
        this.activeLesson = this.course.lessons.filter((courseLesson) => {
            return courseLesson.className === lesson;
        })[0];

        console.log(this.activeLesson)
        return;


        system.log(this.constructor.name,`Setting Active Lesson ${lesson.name} ${lesson.task?`Task ${lesson.task}`:``}`);
        this.activeLesson = lesson;
    }

    showLesson = () => {
        if (this.activeLesson) {
            system.domEngine.showLesson(this.activeLesson);
        }
    }

    
    start = () => {
        system.log(this.constructor.name,'Teacher Engine Start');
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



//  Lesson: Introduction to the Event
//  Task:   Add a new event to the timeline that triggers when the Trigger Zone is triggered
//  Task:   Modify and add settings to the Event









//  Important Notes

//  The AppCore is the core of the application and is used to create the application and maintain the application and its settings

//  ChatGPT is a GPT-3 powered chatbot that can be used to create a chatbot for your application

//  The Scene Engine is a scene that can be used to create a environment for users to interact within your application

//  The Motion Tracker is a tracker that can be used to track the position of a users mouse or hand or other body part

//  The Trigger Zone is a zone that can be used to trigger an event when a user enters the zone with their mouse or hand or other body part part

//  The Overlay is a overlay that can be used to display information to the user

//  The Application Splash Screen is a screen that can be used to display information to the user





const courseData = {
    name: 'Application',
    description: 'Learn how to create an application',
    lessons: [
        {
            name: 'Introduction to the Application',
            className: 'App',
            description: 'Learn how to create an application',
            tasks: [
                {
                    name: 'Create a new application',
                    description: 'Learn how to create a new application',
                    code: `
                            // Create a new application
                            const app = new App(
                                metaData = {
                                    name: 'Application Name',
                                    version: '0.0.1',
                                    description: 'Description of the application',
                                    developer: 'Developer Name',
                                    company: 'Company Name',
                                },
                            );
                        `,
                },
            ],
        },
        {
            name: 'Introduction to the Timeline',
            className: 'Timeline',
            description: 'Learn how to create a timeline',
            tasks: [
                {
                    name: 'Create a new timeline',
                    description: 'Learn how to create a new timeline',
                    code: `
                            // Create a new timeline
                            const timeline = new Timeline();
                        `,
                },
                {
                    name: 'Add the timeline to the application',
                    description: 'Learn how to add the timeline to the application',
                    code: `
                            // Add the timeline to the application
                            app.addTimeline(timeline);
                        `,
                },
            ],
        },

        {
            name: 'Introduction to the App Screen',
            className: 'Screen',
            description: 'Learn how to create an app screen',
            tasks: [
                {
                    name: 'Create a new app screen and give it settings',
                    description: 'Learn how to create a new app screen and give it settings',
                    code: `
                            // Create a new app screen and give it settings
                            
                        `,
                },
                {
                    name: 'Add the new app screen to the timeline',
                    description: 'Learn how to add the new app screen to the timeline',
                    code: `
                            // Add the new app screen to the timeline
                            timeline.addTimelineStep(
                                new Screen({
                                    name: 'Screen Name',
                                    settings: {
                                        backgroundColor: '#39FF14',
                                    },
                                    content: {
                                        title: 'Screen Title',
                                        body: 'Screen Body',
                                        button: 'Screen Button',
                                    }
                                })
                            );
                        `,
                }
            ],
        },


        {
            name: 'Introduction to the Scene Engine',
            description: 'Learn how to create a scene engine',
            tasks: [
                {
                    name: 'Add a new scene and add it to the timeline',
                    description: 'Learn how to add a new scene and add it to the timeline',
                    code: `
                            // Add a new scene and add it to the timeline
                            timeline.addTimelineStep(
                                new Scene({
                                    name: 'Scene Name',
                                    settings: {
                                        backgroundColor: '#39FF14',
                                    },
                                    content: {
                                        title: 'Scene Title',
                                        body: 'Scene Body',
                                        button: 'Scene Button',
                                    }
                                })
                            );
                        `,
                },
                {
                    name: 'Add settings to the scene',
                    description: 'Learn how to add settings to the scene',
                    code: `
                            // Add settings to the scene
                            timeline.addTimelineStep(
                                new Scene({
                                    name: 'Scene Name',
                                    settings: {
                                        backgroundColor: '#39FF14',
                                    },
                                    content: {
                                        title: 'Scene Title',
                                        body: 'Scene Body',
                                        button: 'Scene Button',
                                    }
                                })
                            );
                        `,
                }
            ]

        }
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
            tracked: false,
            pose: '',
    
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
            tracked: false,
            pose: '',
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
            tracked: false,
            pose: '',
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
        console.log(this.video)
        
        this.handTrack.startVideo(this.video).then((status) => {
            system.log(this.constructor.name,`Webcam Stream: ${status?'true':'false'}`);

            this.checkIfWebcamBlocked();

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
        settings,
        
    }) {
        this.radius = radius,
        this.color = color,
        this.trackingType = trackingType,
        this.settings = settings;

        if (
            !system.errorEngine.checkDefinedProperties({
                classObject: this,
                lesson: 'MotionTracker',
                properties: ['radius', 'color', 'trackingType', 'settings'],
            }) 
        ) {
            return false;
        };

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
        console.log(x, y, this.trackingType);
        this.x = x
        this.y = y
        this.tracked = true
    }

    getBodyPartTracking = () => {

        if (this.trackingType === 'hand') {
            
            if (system.trackingEngine.trackedBodyParts['hand-1'].tracked) {
                const trackerPositionInBackgroundVideo = this.sceneEngine.getTrackerPositionInBackgroundVideo(system.trackingEngine.trackedBodyParts['hand-1'].centerPoint)

                this.setPosition(
                    trackerPositionInBackgroundVideo.x,
                    trackerPositionInBackgroundVideo.y,
                )
                system.trackingEngine.trackedBodyParts['hand-1'].tracked = false;
            } else if (system.trackingEngine.trackedBodyParts['hand-2'].tracked) {
                const trackerPositionInBackgroundVideo = this.sceneEngine.getTrackerPositionInBackgroundVideo(system.trackingEngine.trackedBodyParts['hand-2'].centerPoint)

                this.setPosition(
                    trackerPositionInBackgroundVideo.x,
                    trackerPositionInBackgroundVideo.y,
                )
                system.trackingEngine.trackedBodyParts['hand-2'].tracked = false;
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
        this.ctx.fillStyle = this.color
        this.ctx.fill()
        this.ctx.closePath()
    }

    init = (ctx, canvas) => {
        this.ctx = ctx
        this.canvas = canvas
        this.reset()
        this.calculateCanvasPosition()
    }
}


class SceneEngine {
    fps = 0;


    constructor({
        sceneObjects,
        background,
        scene,
        debug,
    }) {

        this.background = background;
        this.sceneObjects = sceneObjects;
        this.scene = scene;
        this.debug = debug;

        const { canvas, ctx } = system.domEngine.getCanvas('scene');
        
        this.canvas = canvas;
        this.ctx = ctx;

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        system.domEngine.onWindowResize(this.resizeCanvas);

        if (this.background.video) {
            this.background.videoStream = system.domEngine.getElement('tracking-engine-webcam-video');
            /* this.background.videoStream.addEventListener('play', function() {
                var $this = this; //cache
                (function loop() {
                    if (!$this.paused && !$this.ended) {
                        this.ctx.drawImage($this, 0, 0);
                        setTimeout(loop, 1000 / 30); // drawing at 30fps
                    }
                })();
            }, 0); */
        }

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

        if (this.background.color && this.background.color !== '') {
            this.ctx.fillStyle = this.background.color;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        };
        if (this.background.image && this.background.image !== '') {
            const imageCoverSize = system.domEngine.getImageCoverSize(this.background.image, this.canvas.width, this.canvas.height);
            this.ctx.drawImage(this.background.image, imageCoverSize.x, imageCoverSize.y, imageCoverSize.width, imageCoverSize.height);
        };
        if (this.background.video && this.background.video !== '' && this.background.videoStream) {
            const imageCoverSize = system.domEngine.getImageCoverSize(this.background.videoStream, this.canvas.width, this.canvas.height);
            this.ctx.drawImage(this.background.videoStream, imageCoverSize.x, imageCoverSize.y, imageCoverSize.width, imageCoverSize.height);
        };
    }



    updateSystem = () => {
        //  calculate fps
        this.calculateFps();

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
        background,
        triggerZones = [],
        motionTrackers = [],
        debug,
    }) {
        this.name = name;
        this.triggerZones = triggerZones;
        this.motionTrackers = motionTrackers;
        this.background = background;
        this.debug = debug;

        if(
            !system.errorEngine.checkDefinedProperties({
                classObject: this,
                lesson: 'Scene',
                properties: ['name', 'background', 'triggerZones', 'motionTrackers', 'debug'],
            })
        ) {
            this.sceneError = true;
            return false;
        };

        if(
            !system.errorEngine.checkStates({
                classObject: null,
                lesson: 'TriggerZones',
                states: [(triggerZones !== 0)],
            }) ||
            !system.errorEngine.checkStates({
                classObject: null,
                lesson: 'MotionTrackers',
                states: [(motionTrackers !== 0)],
            })
        ) {
            this.sceneError = true;
            return false;
        }

        const sceneObjects = [...motionTrackers, ...triggerZones];

        this.sceneEngine = new SceneEngine({
            sceneObjects,
            background,
            scene: this,
            debug,
        });

        system.debugConsoleLog(this.constructor.name, `Scene ${this.name} Constructed`);
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

    init = () => {
        if(this.sceneError) {
            return false;
        }

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
        content,
    }) {

        this.name = name;
        
        this.textColor = textColor,
        this.buttonColor = buttonColor,
        this.backgroundColor = backgroundColor,
        this.popupBackgroundColor = popupBackgroundColor,
        this.content = content;

        if(
            !system.errorEngine.checkDefinedProperties({
                classObject: this,
                lesson: 'Screen',
                properties: ['name', 'textColor', 'content', 'buttonColor', 'backgroundColor', 'popupBackgroundColor'],
            })
        ) {
            return false;
        };
        
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
        if(
            !system.errorEngine.checkStates({
                classObject: this,
                lesson: 'Timeline',
                states: [(this.timeline.length !== 0)],
            })
        ) {
            return false;
        }

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

        system.domEngine.setAppBackgroundColor(this.backgroundColor);
        system.debugConsoleLog(this.constructor.name, `App ${this.metaData.name} Constructed`);
    }

    addTimeline = (timeline) => {
        this.timeline = timeline;
        system.debugConsoleLog(this.constructor.name, 'Timeline Added');
    }



    init = () => {
        system.debugConsoleLog(this.constructor.name, `App ${this.metaData.name} Init`);
        setTimeout(() => {
            system.setAppReady(this);
        }, 750);
    }


    start = () => {
        system.debugConsoleLog(this.constructor.name, `App ${this.metaData.name} Start`);
        if (this.timeline) {
            this.timeline.start();
        }
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
            this.teacherEngine.setActiveLesson(lesson);
        }

        this.domEngine.showError(name, message, lesson);

    }

    start = () => {
        app.start();
    }

    trySystemStart = () => {
        if (this.active && this.appReady) {
            this.log(this.constructor.name, '-----------------------------');
            this.start();
        }
    }

    systemReady = () => {

        this.teacherEngine.openTeachAtLesson('App')

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


    init = () => {
        this.domEngine = new DomEngine();
        this.teacherEngine = new TeacherEngine({
            course: courseData,
        });
        this.errorEngine = new ErrorEngine();
        system.debugConsoleLog(this.constructor.name, 'System Initialized');

        if (this.settings.trackingEngineActive) {
            this.trackingEngine = new TrackingEngine({
                modelType: 'handTrack',
            });

            this.trackingEngine.init();
        }
        
        this.isSystemReady();

        this.log(this.constructor.name, '-----------------------------');
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