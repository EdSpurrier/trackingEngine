
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
/*     new LessonPoint(
        'GameObjects',
        'How to add a game object to the game engine',
        'https://sites.google.com/view/adm6002/home',
        (gameEngine) => { return (gameEngine.gameObjects.length > 0) ? true : false },
    ), */

    new LessonPoint(
        'MotionTracker',
        `
        How to add a Motion Tracker to the scene.\nMotion Trackers are used to track the position of a body part or point. Motion Trackers can be used to trigger events.
        `,
        'https://sites.google.com/view/adm6002/home',
        (gameEngine) => { return (gameEngine.gameObjects.filter(
            (gameObject) => { return gameObject instanceof MotionTracker }
        ).length > 0) ? true : false },
    ),

    new LessonPoint(
        'TriggerZone',
        `
        Now we need to create a TriggerZone.<br/> A trigger zone is used to trigger an action by detecting when an object has entered its bounds.<br />
        We will be creating a Trigger Zone so that when out Motion Tracker enters the zone it will perform an action.<br />
        How to add a Trigger Zone to the scene.<br />Trigger Zone can be used to trigger events when a certain MotionTracker within the Collider Bounds of the Trigger Zone.`,
        'https://sites.google.com/view/adm6002/home',
        (gameEngine) => { return (gameEngine.gameObjects.filter(
            (gameObject) => { return gameObject instanceof TriggerZone }
        ).length > 0) ? true : false },
    ),
]






class TeacherEngine {
    constructor() {
        console.log('TeacherEngine Constructed')
    }

    lessonActive = false

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
            if (this.lessonActive) return false;

            if (!lessonPoint.checkLessonPoint(gameEngine)) {
                this.lessonActive = true;
                gameEngine.stop();
                this.showLesson(lessonId, lessonPoint);
                console.log(lessonPoint.name, 'Lesson Point Not Done')
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

    pushLesson = (lessonName) => {
        console.log('TeacherEngine pushLesson')
        this.lessonActive = true;
        gameEngine.stop();
        const lessonPoint = lessons.find(lesson => lesson.name === lessonName);
        this.showLesson(lessonId, lessonPoint);
            console.log(lessonPoint.name, 'Lesson Point Not Done')
            console.log(
                'Lesson Point Name: ' + lessonPoint.name,
                'Lesson Point Description: ' + lessonPoint.description,
                'Lesson Point Lesson: ' + lessonPoint.lesson,
            )
    }

    getLessonButton = (lessonName) => {
        gameEngine.stop();
        const lessonPoint = lessonPoints.find(lesson => lesson.name === lessonName);
        return `<button class="bg-yellow-300 text-slate-900 py-3 px-6 rounded-md font-bold"><a href="${lessonPoint.hyperLink}" target="_blank">Read More</a></button>`
    }



    init = () => {
        console.log('TeacherEngine init')
    }
}

let teacher = new TeacherEngine();
teacher.init();