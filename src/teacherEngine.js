
class LessonPoint {
    constructor(
        lesson = {
            name,
            description,
            code,
            steps,
            checkLessonPoint,
        }
    ) {
        this.name = lesson.name
        this.description = lesson.description
        this.code = lesson.code
        this.steps = lesson.steps
        this.checkLessonPoint = lesson.checkLessonPoint
    }
}

var converter = new showdown.Converter();

const lessonPoints = [


    new LessonPoint({

        name: 'sceneEngine',
        description: `
            <b>How to create a SceneEngine</b><br />
            <br />
            The SceneEngine is the engine that runs the scene.<br />
            The SceneEngine is used to:<br />
            - Add SceneObjects to the scene<br />
            - Start and Stop the scene<br />
            - Render the scene<br />
            - Resize the scene<br />
            <br />
            The SceneEngine constructor takes in the sceneSettings.<br />
            <br />
            The sceneSettings are used to set the:<br />
            - background color<br />
            - fps(frames per second) counter<br />
            <br />
            The sceneSettings are passed into the SceneEngine constructor.<br />
            <br />
        `,

        code: [
            `<span class="text-green-500">let sceneEngine = new SceneEngine();`,
            ``,
            ``,
            `sceneEngine.init()</span>`
        ],

        steps: [
            `Make these changes in the <b>'JS' panel (on the left)</b>`,
            `sceneEngine.init() should  <b>always be the last</b> function to call at the end of your <b>'JS'</b>`,
            `Then Save & Reload`,
            `A green screen should appear`,
            `Modify these as you wish`,
        ],
        checkLessonPoint: () => { return (!sceneEngineCreated || !sceneEngineInit) },
    }),

    new LessonPoint({

        name: 'sceneSettings',
        description: `
            <b>When we create our Scene we must give it settings.<br /></b>
            <br />
            This is how to set the scene settings.<br />
            The scene settings are used to set the:<br />background color, and fps(frames per second) counter.<br />
            The scene settings are passed into the SceneEngine constructor.<br />
            <br />
        `,

        code: [
            `let sceneSettings = {`,
            `    fps: true,`,
            `    backgroundColor: 'black',`,
            `};`,
            ``,
            `let sceneEngine = new SceneEngine(`,
            `    sceneSettings,`,
            `);`,
        ],

        steps: [
            `Make these changes in the <b>'JS' panel (on the left)</b>`,
            `Then Save & Reload`,
            `The background color should change to black`,
            `The FPS counter should appear in the bottom left corner`,
            `Modify these as you wish`,
        ],
        checkLessonPoint: (sceneEngine) => { return (sceneEngine.sceneSettings.backgroundColor !== '#39FF14') ? true : false },
    }),

    new LessonPoint({
        name: 'MotionTracker',
        description: `
        How to add a Motion Tracker to the scene.\nMotion Trackers are used to track the position of a body part or point. Motion Trackers can be used to trigger events.
        `,

        code: [
            `sceneEngine.addSceneObject(`,
            `    new MotionTracker(`,
            `        {`,
            `            radius: 20,`,
            `            color: 'red',`,
            `            trackingType: 'mouse',`,
            `        }`,
            `    )`,
            `)`,
        ],

        steps: [
            `Make these changes in the <b>'JS' panel (on the left)</b>`,
            `Then Save & Reload`,
            `A red circle should appear on the screen`,
            `and follow your mouse`,
            `Modify these as you wish`,
        ],
        checkLessonPoint: (sceneEngine) => {
            return (sceneEngine.sceneObjects.filter(
                (sceneObject) => { return sceneObject instanceof MotionTracker }
            ).length > 0) ? true : false
        },
    }),

    new LessonPoint({
        name: 'TriggerZone',
        description:  `
        Now we need to create a TriggerZone.<br/> A trigger zone is used to trigger an action by detecting when an object has entered its bounds.<br />
        We will be creating a Trigger Zone so that when out Motion Tracker enters the zone it will perform an action.<br />
        How to add a Trigger Zone to the scene.<br />Trigger Zone can be used to trigger events when a certain MotionTracker within the Collider Bounds of the Trigger Zone.`,

        code: [
            `<span class="text-warning">sceneEngine.addSceneObject</span>(`,
            `    new TriggerZone(`,
            `        {`,
            `            percentageX: 50,`,
            `            percentageY: 50,`,
            `            radius: 50,`,
            `            inactiveColor: '#0d1636',`,
            `            activeColor: 'green'`,
            `        }`,
            `    )`,
            `)`,
        ],
        steps: [
            `Make these changes in the <b>'JS' panel (on the left)</b>`,
            `Then Save & Reload`,
            `A blue circle should appear on the screen`,
            `And turn green when the MotionTracker enters it`,
            `Modify these as you wish`,
        ],
        checkLessonPoint: (sceneEngine) => {
            return (sceneEngine.sceneObjects.filter(
                (sceneObject) => { return sceneObject instanceof TriggerZone }
            ).length > 0) ? true : false
        },
        }),
]






class TeacherEngine {
    constructor() {
        console.log('TeacherEngine Constructed')
    }

    lessonActive = false

    showLesson = (lessonId, lessonPoint) => {
        if (this.lessonActive) return
        this.lessonActive = true;
        if (app.sceneEngine) app.sceneEngine?.stop();
        
        let lessonHTML = `
            <div class="text-lg text-black border-2 bg-yellow-500 rounded-t-md border-yellow-600 w-full py-4">Lesson #${lessonId}: ${lessonPoint.name}</div>
            <div class="mx-6 mt-8 mb-2">${lessonPoint.description}</div>
        `
        /* var converter = new showdown.Converter(),
        text      = '# hello, markdown!',
        html      = converter.makeHtml(`
        sceneEngine.addSceneObject(
            new MotionTracker(
                {
                    radius: 20,
                    color: 'red',
                    trackingType: 'mouse',
                }
            )
        )
        `);
        console.log(html) */

        var converter = new showdown.Converter()


        if (lessonPoint.code !== null) {
/*              lessonHTML += `<div class="mx-4"><div class="text-lg text-black bg-yellow-500 rounded-t-lg mt-4 py-3">Code:</div><div class="bg-gray-900 text-yellow-300 rounded-b-lg p-4 text-left">${lessonPoint.markdownCode}</div></div>
            ` */
            lessonHTML += `<div class="mx-4"><div class="text-lg text-black bg-yellow-500 rounded-t-lg mt-4 py-3">Code:</div><div class="bg-gray-900 text-yellow-300 rounded-b-lg p-8 text-left"><pre>${lessonPoint.code.join('\n')}</pre></div></div>`
        }
        //converter.makeHtml(lessonPoint.code)

        lessonHTML += `<i><div class="text-slate-900 mb-10 py-6 px-6 mx-10 mt-8 bg-yellow-400 rounded-md text-left">`
        lessonHTML += `<div class="text-lg text-black rounded-t-md font-bold pb-2">Steps:</div><div class="flex flex-col gap-1">`
        let stepId = 1;
        lessonPoint.steps.forEach(step => {
            lessonHTML += `<div><b class="mb-3">${stepId}.</b>  ${step}</div>`
            stepId++;
        })

        lessonHTML += `</div></div></i>`


        /*   if (lessonHTML.hyperLink !== null) {
              lessonHTML += `<button class="bg-yellow-300 text-slate-900 py-3 px-6 rounded-md font-bold"><a href="${lessonPoint.hyperLink}" target="_blank">Read More</a></button>`
          }
   */
          
        system.lesson(lessonHTML)
    }




    lessonCheckState = (id, state) => {
        if (!state) {
            this.showLesson(id, lessonPoints[id]);
        }
    }

    checkLessonPoint = (sceneEngine) => {
        let lessonId = 1;

        lessonPoints.forEach(lessonPoint => {
            if (this.lessonActive) return false;

            if (!lessonPoint.checkLessonPoint(sceneEngine)) {
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
        sceneEngine.stop();
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
        sceneEngine.stop();
        const lessonPoint = lessonPoints.find(lesson => lesson.name === lessonName);
        return `<button class="bg-yellow-300 text-slate-900 py-3 px-6 rounded-md font-bold"><a href="${lessonPoint.hyperLink}" target="_blank">Read More</a></button>`
    }



    init = () => {
        console.log('TeacherEngine init')
    }
}

let teacher = new TeacherEngine();
teacher.init();