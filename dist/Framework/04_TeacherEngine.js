



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
