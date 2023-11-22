



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
            this.showLesson();
        });
    

        this.loadCourse(course);

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

    setActiveLesson = (lesson) => {
        
        this.activeLesson = this.course.lessons.filter((courseLesson) => {
            return courseLesson.className === lesson.className;
        })[0];

        system.domEngine.setLessonActive(this.activeLesson);

        system.log(this.constructor.name, `Set Active Lesson ${this.activeLesson}`)
        console.log('setActiveLesson', this.activeLesson)
    }

    
    checkStage = () => {
        // Check through lessons
        this.course.lessons.forEach((lesson) => {
            if(!lesson.complete) {
                this.selectLesson(lesson);
                return;
            }
        });
    }
}
