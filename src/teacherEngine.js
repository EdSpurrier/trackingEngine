



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

    constructor() {
        system.log('Teacher Engine Constructed');
        system.domEngine.addEventListener('error-button', 'click', ()=> { 
            this.showLesson();
        });
    }

    loadCourse = (course) => {
        system.log('Loading Course');
        system.domEngine.loadCourse(courseJSON);
    }

    renderLessonList = (lessonList) => {
        system.log('Rendering Lesson List');
        system.domEngine.renderLessonList(lessonList);
    }

    setActiveLesson = (lesson) => {
        system.log(`Setting Active Lesson ${lesson.name} ${lesson.task?`Task ${lesson.task}`:``}`);
        this.activeLesson = lesson;
    }

    showLesson = () => {
        if (this.activeLesson) {
            system.domEngine.showLesson(this.activeLesson);
        }
    }

    start = () => {
        system.log('Teacher Engine Start');
    }
}
