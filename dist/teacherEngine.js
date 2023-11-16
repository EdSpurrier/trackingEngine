
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

    new LessonPoint(
        'TrackingPoints',
        'How to add a Tracking Point to the scene.\nTracking Points are used to track the position of the mouse or a finger on a touch screen. Tracking Points can be used to trigger events when the mouse or finger is over a specific area of the screen.',
        'https://sites.google.com/view/adm6002/home',
        (gameEngine) => { return (gameEngine.gameObjects.filter(
            (gameObject) => { return gameObject instanceof TrackingPoint }
        ).length > 0) ? true : false },
    ),

]






class TeacherEngine {
    constructor() {
        console.log('TeacherEngine Constructed')
    }

    showLesson = (lessonId, lessonPoint) => {
        const lessonHTML = `
            <div class="text-lg text-black border-2 bg-yellow-500 rounded-t-md border-yellow-600 w-full py-4">Lesson #${lessonId}: ${lessonPoint.name}</div>
            <div class="mx-6 my-8">${lessonPoint.description}</div>
            <button class="bg-slate-900 text-yellow-300 mb-10 py-3 px-6 rounded-md font-bold"><a href="${lessonPoint.hyperLink}" target="_blank">Read More</a></button>
        `
        system.lesson(lessonHTML)
    }


    checkLessonPoint = (gameEngine) => {
        let lessonId = 1;
        lessonPoints.forEach(lessonPoint => {
            if (!lessonPoint.checkLessonPoint(gameEngine)) {
                gameEngine.stop();
                this.showLesson(lessonId, lessonPoint);
                console.log('Lesson Point Not Checked')
                console.log(
                    'Lesson Point Name: ' + lessonPoint.name,
                    'Lesson Point Description: ' + lessonPoint.description,
                    'Lesson Point Lesson: ' + lessonPoint.lesson,
                )
                return false;
            }

            lessonId++;
        })

        return true;

    }




    init = () => {
        console.log('TeacherEngine init')
    }
}

let teacher = new TeacherEngine();
teacher.init();