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
}