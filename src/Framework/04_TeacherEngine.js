



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
