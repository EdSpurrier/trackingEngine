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
    "lesson-goal",
    "lesson-description",
    "lesson-content",
    "lesson-steps",

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
    "debug-timeline",
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
            this.appendHtml('lesson-content', `<div class="flex items-center"><i class="fa-solid fa-angle-right fa-sm mr-2"></i> ${content}</div>`);
        });


        this.insertHtml('lesson-steps', '');
        
        let stepNumber = 1;
        lesson.steps.forEach((step) => {
            console.log(step.text)
            let stepHTML = `
            <div class="lesson-step">
                <div class="flex items-start mb-4">
                    <b class="mr-2">${stepNumber}.</b>
                    <div>
            `;
            step.text.forEach((text) => {
                stepHTML += `<div class="font-bold not-italic">${text}</div>`;
            });
            stepHTML += `</div>`;

            stepHTML += `</div>`;
            if (step.code) {    
                stepHTML += `
                <div class="lesson-step-code bg-gray-900 text-yellow-300 rounded-lg p-8 text-left mb-4">
                    <pre><code>${step.code}</code></pre>
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


}