
class LessonPoint {
    constructor(
        name,
        description,
        hyperLink,
        checkLessonPoint,
    ) {
        this.name = name
        this.description = description
        this.hyperLink = hyperLink
        this.checkLessonPoint = checkLessonPoint
    }
}



const lessonPoints = [
    new LessonPoint(
        'GameObjects',
        'How to add a game object to the game engine',
        'https://sites.google.com/view/adm6002/home',
        (gameEngine) => { return (gameEngine.gameObjects.length > 0) ? true : false },
    ),
]






class TeacherEngine {
    constructor() {
        console.log('TeacherEngine Constructed')
    }

    showLesson = (lessonPoint) => {
        const lessonHTML = `
            <div class="text-xl">${lessonPoint.name}</div>
            <div class="font-bold">${lessonPoint.description}</div>
            <button class="bg-green-500 py-2 px-4 rounded-md font-bold mt-2"><a href="${lessonPoint.hyperLink}" target="_blank">Read More</a></button>
        `
        system.lesson(lessonHTML)
    }


    checkLessonPoint = (gameEngine) => {
        lessonPoints.forEach(lessonPoint => {
            if (!lessonPoint.checkLessonPoint(gameEngine)) {
                this.showLesson(lessonPoint);
                console.log('Lesson Point Not Checked')
                console.log(
                    'Lesson Point Name: ' + lessonPoint.name,
                    'Lesson Point Description: ' + lessonPoint.description,
                    'Lesson Point Lesson: ' + lessonPoint.lesson,
                )
                return true;
            }
        })

        return false;

    }




    init = () => {
        console.log('TeacherEngine init')
    }
}

let teacher = new TeacherEngine();
teacher.init();