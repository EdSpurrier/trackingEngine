



//  Tasks


//  Lesson: Introduction to the Application Core                    
//  Task:   Create a new application                                
//  Task:   Add the meta data to the application                    


//  Lesson: Introduction to the Timeline
//  Task:   Create a new timeline
//  Task:   Add the timeline to the application


//  Lesson: Introduction to the App Screen
//  Task:   Create a new app screen and give it settings
//  Task:   Add the new app screen to the timeline


//  Lesson: Introduction to the Scene Engine
//  Task:   Create a new scene and give it settings
//  Task:   Add the new scene to the timeline


//  Lesson: Introduction to the Motion Tracker
//  Task:   Add a new Motion Tracker to the scene that tracks the mouse
//  Task:   Modify and add settings to the Motion Tracker
//  Task:   Test the Motion Tracker


//  Lesson: Introduction to the Trigger Zone
//  Task:   Add a new trigger zone to the scene that triggers when the mouse enters the zone
//  Task:   Modify and add settings to the Trigger Zone
//  Task:   Test the Trigger Zone


//  Lesson: Motion Tracking The Hands
//  Task:   Add a new Motion Tracker to the scene that tracks the hand
//  Task:   Modify and add settings to the Motion Tracker
//  Task:   Test the Motion Tracker
//  Task:   Add a new Trigger Zone to the scene that triggers when the hand enters the zone
//  Task:   Add a Motion Tracker to the scene that tracks the other hand

//  Lesson: Motion Tracking The Face
//  Task:   Add a new Motion Tracker to the scene that tracks the face
//  Task:   Modify and add settings to the Motion Tracker
//  Task:   Test the Motion Tracker
//  Task:   Add a new Trigger Zone to the scene that triggers when the hand enters the zone



//  Lesson: Planning Your Application
//  Task:   Write down a list of features that you want your application to have
//  Task:   Create a wireframe of your application
//  Task:   Create a flowchart of your application
//  Task:   Create a list of the assets that you will need for your application
//  Task:   Images, Videos, Audio, 3D Models, Textures, Fonts, etc
//  Task:   Create a list of the technologies that you will need for your application
//  Task:   Limitations of Prototyping



//  Task:   Write down a list of things that you want your application to be able to do
//  Task:   Write down a list of things that you want your application to be able to do


//  Lesson: Test Your Application
//  Task:   Write down a test plan for your application
//  Task:   Test your application
//  Task:   Fix any bugs that you find
//  Task:   Test your application again
//  Task:   Fix any bugs that you find
//  Task:   Repeat until you have no bugs
//  Task:   Submit Your Test Log





//  Lesson: Introduction to the Event
//  Task:   Add a new event to the timeline that triggers when the Trigger Zone is triggered
//  Task:   Modify and add settings to the Event







const courseData = {
    name: `Augmented Reality
            JavaScript
            Web
            Application
        `,
    description: 'Learn how to create an Augmented Reality JS Application',
    lessons: [

        {
            complete: false,
            name: 'Getting Started',
            menuName: 'Getting Started',
            className: 'GettingStarted',
            goal: 'Learn how to get started with the course',
            description: `The Getting Started is the first step towards learning how to create an Augmented Reality JS Application`,
            content: [
                `First lets sign up to CodePen with a free account.`,
                `CodePen is a free online code editor that allows you to create and share code snippets.`,
                `CodePen is a great tool for learning how to code and is used by millions of developers around the world.`,
                `CodePen is also used by many companies to create and share code snippets.`,
            ],
            steps: [
                    {
                        text: [
                            `Go to <a href="https://codepen.io/" class="underline italic" target="_blank">CodePen.io</a>`,
                        ],
                    },
                    {
                        text: [
                            `Click on the "Sign Up" button`,
                        ],
                    },
                    {
                        text: [
                            `Enter your details and click on the "Sign Up" button`,
                        ],
                    },
                    {
                        text: [
                            `Let's now <span class="underline">FORK</span> this CodePen`,
                            `Click on the "Fork" button on the bottom right of this CodePen`,
                        ],
                        image: `https://www.freecodecamp.org/news/content/images/2021/10/Screen-Shot-2021-10-30-at-12.36.47-AM.png`,
                    }                    
            ]


        },




        {
            complete: false,
            name: 'Coding your Application',
            menuName: 'Application',
            className: 'App',
            goal: 'Learn how to create an application',
            description: `The Application is the core of the application and is used to create the application and maintain the application and its settings`,
            content: [
                `First lets create a new App (Application)`,
                `"const" means constant, which means that the value of the variable cannot be changed`,
                `"app" is the name of the variable that we are creating`,
                `"new" means that we are creating a new instance of the App class`,
                `We are passing in the metaData object to the App class`,
                `The metaData object contains information about the application`
            ],   
            steps: [
                {
                    text: [
                        `Make these changes in the 'JS' panel (either above or on the left)`,
                    ],
code: `<span class="text-green-500 font-bold">// Create a new application
const app = new App({
    metaData : {
        name: 'Application Name',
        version: '0.0.1',
        description: 'Description of the application',
        developer: 'Developer Name',
        company: 'Company Name',
    },
    backgroundColor : '#3a00a7',
    debug: false
});</span>`
                },
                {
                    text: [
                        `Debugging is a way to find and fix problems in your code`,
                        `You can use the debug setting to turn on debugging`,
                        `Debugging is turned off by default`,
                        `You can turn on debugging by setting the debug setting to true`,
                    ],
code: `<span class="text-yellow-700">// Create a new application
const app = new App({
    metaData : {
        name: 'Application Name',
        version: '0.0.1',
        description: 'Description of the application',
        developer: 'Developer Name',
        company: 'Company Name',
    },
    backgroundColor : '#3a00a7',
    debug: <span class="text-green-500 font-bold">true</span>
});</span>`
                },
                {
                    text: [
                        `Replace the metaData with your own metaData`,
                    ],
code: `<span class="text-yellow-700">// Create a new application
const app = new App({
    metaData : {
        name:  <span class="text-green-500 font-bold">'My Awesome Application'</span>,
        version:  <span class="text-green-500 font-bold">'0.0.1'</span>,
        description:  <span class="text-green-500 font-bold">'Does things that you couldn't beleive'</span>,
        developer:  <span class="text-green-500 font-bold">'John Black'</span>,
        company:  <span class="text-green-500 font-bold">'AR Inc'</span>,
    },
    backgroundColor : '#3a00a7',
    debug: false
});</span>`
                },
                {
                    text: [
                        `Set the backgroundColor to your own color`,
                        `You can use a color picker to find a color that you like`,
                        `You can use a color name or a hex color code`,
                        `<a href="https://htmlcolorcodes.com/color-picker/" class="underline italic step-button" target="_blank">HTML Color Picker</a>`,
                    ],
code: `<span class="text-yellow-700">// Create a new application
const app = new App({
    metaData : {
        name:  'My Awesome Application',
        version:  '0.0.1',
        description:  'Does things that you couldn't beleive',
        developer:  'John Black',
        company:  'AR Inc',
    },
    backgroundColor : <span class="text-green-500 font-bold">'#000000'</span>,
    debug: false
});</span>`
                },
                {
                    text: [
                        `Next we need to initialize the application`,
                        `We do this by calling the init function`,
                        `Add this code to the very end of your 'JS'.`,
                        `Always make sure that it is the last function to be called`,
                    ],
code: 
`<span class="text-green-500 font-bold">// Initialize the application
app.init();</span>`
                },
                {
                    text: [
                        `Save & Reload`,
                        `Your Application splash screen should now show your metaData`,
                    ],
                }
            ]
        },
        {
            complete: false,
            name: 'Introduction to the Timeline',
            menuName: 'Timeline',
            className: 'Timeline',

            goal: 'Learn how to create a timeline',
            description: `The Timeline is a timeline that can be used to create a timeline for your application`,
            content: [
                `First lets create a new Timeline`,
                `"const" means constant, which means that the value of the variable cannot be changed`,
                `"timeline" is the name of the variable that we are creating`,
                `"new" means that we are creating a new instance of the Timeline class`,
                `"Timeline" is the name of the class that we are creating an instance of`,
                `"app" is the name of the application that we are passing in as an argument`,
                `"addTimeline" is a function that we are calling on the app`,
                `"timeline" is the name of the variable that we are passing in as an argument`,
            ],   
            steps: [
                {
                    text: [
                        `Make these changes in the 'JS' panel (either above or on the left)`,
                        `This should be before the app.init() function`,
                        `And after the app variable has been created`,
                    ],
code: `<span class="text-green-500 font-bold">// Create a new timeline
const timeline = new Timeline();</span>`,
                },
                {
                    text: [
                        `Add the timeline to the application`,
                        `This should be after the timeline variable has been created`,
                        `And before the app.init() function`,
                    ],
code: `<span class="text-green-500 font-bold">// Add the timeline to the application
app.addTimeline(timeline);</span>`,
                },
                {
                    text: [
                        `Save & Reload`,
                        `And Proceed to the next lesson...`,
                    ],
                }
            ],
        },

        {
            complete: false,
            name: 'Introduction to the Screen',
            menuName: 'Screen',
            className: 'Screen',
            goal: 'Learn how to create a screen',
            description: `The Screen is a screen that can be played in the applications timeline`,
            content: [
                `First lets create a new Screen`,
                `"const" means constant, which means that the value of the variable cannot be changed`,
                `"screen" is the name of the variable that we are creating`,
                `"new" means that we are creating a new instance of the Screen class`,
                `"Screen" is the name of the class that we are creating an instance of`,
                `"timeline" is the name of the timeline that we are passing in as an argument`,
                `"addTimelineStep" is a function that we are calling on the timeline`,
                `"screen" is the name of the variable that we are passing in as an argument`,
            ],   
            steps: [
                {
                    text: [
                        `Make these changes in the 'JS' panel (either above or on the left)`,
                        `This should be before the app.init() function`,
                        `And after the <b>app</b> and <b>timeline</b> variable has been created`,
                    ],
code: `<span class="text-green-500 font-bold">// Create a new screen
const screen = new Screen({
    name: 'Screen Name',
    backgroundColor: '#39FF14',
    textColor: 'black',
    buttonColor: 'green',
    popupBackgroundColor: 'yellow',
    title: 'Screen Title',
    content: `+'`'+`This is the screen content`+'`'+`,
    buttonText: 'Click Me!',
});</span>`,
                },
                {
                    text: [
                        `Add the screen to the timeline`,
                        `This should be after the screen variable has been created`,
                        `And before the app.init() function`,
                    ],
code: `<span class="text-green-500 font-bold">// Add the screen to the timeline
timeline.addTimelineStep(screen);</span>`,
                },
                {
                    text: [
                        `The screen should now be showing on the screen`,
                        `You can change the content and look of the screen`,
                        `The title, body and buttonText are text values`,                        
                    ],
                    code: `<span class="text-yellow-700">// Create a new screen
const screen = new Screen({
    name: <span class="text-green-500 font-bold">'Screen Name'</span>,
    backgroundColor: <span class="text-green-500 font-bold">'#39FF14'</span>,
    textColor: <span class="text-green-500 font-bold">'black'</span>,
    buttonColor: <span class="text-green-500 font-bold">'green'</span>,
    popupBackgroundColor: <span class="text-green-500 font-bold">'yellow'</span>,
    title: <span class="text-green-500 font-bold">'Screen Title'</span>,
    content: <span class="text-green-500 font-bold">`+'`'+`This is the screen content`+'`'+`</span>,
    buttonText: <span class="text-green-500 font-bold">'Click Me!'</span>,
});</span>`,
                },


                {
                    text: [
                        `You can use a color picker to find a colors that you like`,
                        `You can use a color name or a hex color code`,
                        `<a href="https://htmlcolorcodes.com/color-picker/" class="underline italic step-button" target="_blank">HTML Color Picker</a>`,
                    ]

                },                
                {
                    text: [
                        `To create multiple screens you can copy and paste the screen code`,
                        `Make sure to change the name of the variable of the new screen`,
                    ],
code: `<span class="text-yellow-700">// Create a new screen
const <span class="text-green-500 font-bold">secondScreen</span> = new Screen({
    ....
});</span>`,
                },
                {
                    text: [
                        `You may also leave the buttonText empty and`,
                        `this will hide the button on the screen`,
                    ],
code: `<span class="text-yellow-700">buttonText: <span class="text-green-500 font-bold">''</span>,`,
                },

                {
                    text: [
                        `You may also want to create a final screen for your application`,
                        `This is a screen that is shown when the application is complete`,
                    ],
                },
                {
                    text: [
                        `Save & Reload`,
                        `And Proceed to the next lesson...`,
                    ],
                }
            ],
        },
        {
            complete: false,
            name: 'Introduction to the Interactive Scene',
            menuName: 'Scene',
            className: 'Scene',
            goal: 'Learn how to create an Interactive Scene',
            description: `The Scene is a screen that can be played in the applications timeline`,
            content: [
                `Now lets create our first interactive Scene`,
                `This is similar to creating a Screen for the timeline`,
                `However the Scene is interactive and includes Motion Trackers and Trigger Zones`,
            ],
            steps: [
                {
                    text: [
                        `Make these changes in the 'JS' panel (either above or on the left)`,
                        `This should be before the app.init() function`,
                        `And after the <b>app</b> and <b>timeline</b> variable has been created`,
                    ],
code: `<span class="text-green-500 font-bold">//  Create a new scene
const scene = new Scene({
    name: 'Simple Mouse Tracking Scene',
    backgroundColor: '#333',
});`
                },
                {
                    text: [
                        `Add the scene to the timeline`,
                        `This should be after the scene variable has been created`,
                        `And before the app.init() function`,
                    ],
code: `<span class="text-green-500 font-bold">// Add the scene to the timeline
timeline.addTimelineStep(scene);</span>`
                },
                {
                    text: [
                        `Save & Reload`,
                        `And Proceed to the next lesson...`,
                    ],
                }
            ],

        },
        {
            complete: false,
            name: 'Introduction to the Motion Tracker',
            menuName: 'Motion Tracker',
            className: 'MotionTracker',
            goal: 'Learn how to create a Motion Tracker',
            description: `The Motion Tracker is a tracker that can be used to track the position of a users mouse or hand or other body part`,
            content: [
                `Now lets create our first Motion Tracker`,
                `The Motion Tracker is a scene object that follows the position of the chosen tracking type`,
                `In this instance we are going to create a Motion Tracker that tracks the mouse`,
                `Motion Trackers can be controlled by the user to move around the scene`,
                `Motion Trackers can be used to trigger events when they enter a Trigger Zone`,
            ],
            steps: [
                {
                    text: [
                        `Make these changes in the 'JS' panel (either above or on the left)`,
                        `This should be before the app.init() function`,
                        `And after the <b>app</b> and <b>timeline</b> variable has been created`,
                    ],
code: `<span class="text-green-500 font-bold">//  Create a new motion tracker
const motionTracker = new MotionTracker({
    radius: 30,
    color: '#00b7ff',
    trackingType: 'mouse',
});</span>`
                },
                {
                    text: [
                        `Add the motion tracker to the scene`,
                        `This should be after the motionTracker variable has been created`,
                        `And before the app.init() function`,
                    ],
code: `<span class="text-green-500 font-bold">// Add the motion tracker to the scene
scene.addSceneObject(motionTracker);</span>`
                },
                {
                    text: [
                        `You can modify the motion tracker settings`,
                        `The radius is the size of the motion tracker`,
                        `The color is the color of the motion tracker`,
                    ],
code: `<span class="text-yellow-700">//  Create a new motion tracker
const motionTracker = new MotionTracker({
    radius: <span class="text-green-500 font-bold">30</span>,
    color: <span class="text-green-500 font-bold">'#00b7ff'</span>,
    trackingType: 'mouse',
});</span>`
                },
                {
                    text: [
                        `Save & Reload`,
                        `And Proceed to the next lesson...`,
                    ],
                }
            ],

        },
        {
            complete: false,
            name: 'Introduction to the Trigger Zone',
            menuName: 'Trigger Zone',
            className: 'TriggerZone',
            goal: 'Learn how to create a Trigger Zone',
            description: `The Trigger Zone is a zone that can be used to trigger an event when a user enters the zone with their mouse or hand or other body part part`,
            content: [
                `Now lets create our first Trigger Zone`,
                `This is similar to creating a Motion Tracker`,
                `However a Trigger Zone is an object that has a set position within the scene`,
                `A Trigger Zone is interactive is triggered when a motion tracker enters the zone`,
            ],
            steps: [
                {
                    text: [
                        `Make these changes in the 'JS' panel (either above or on the left)`,
                        `This should be before the app.init() function`,
                        `And after the <b>app</b> and <b>timeline</b> variable has been created`,
                    ],
code: `<span class="text-green-500 font-bold">//  Create a new trigger zone
const triggerZone = new TriggerZone({
    percentageX: 50,
    percentageY: 50,
    radius: 40,
    inactiveColor: '#ff0000',
    activeColor: '#00ff00',
    triggerType: 'mouse',
});
`
                },
                {
                    text: [
                        `Add the trigger zone to the scene`,
                        `This should be after the triggerZone variable has been created`,
                        `And before the app.init() function`,
                    ],
code: `<span class="text-green-500 font-bold">// Add the trigger zone to the scene
scene.addSceneObject(triggerZone);</span>`
                },
                {
                    text: [
                        `You can modify the trigger zone settings`,
                        `The percentageX is the horizontal position of the trigger zone`,
                        `The percentageY is the vertical position of the trigger zone`,
                        `The radius is the size of the trigger zone`,
                        `The inactiveColor is the color of the trigger zone when it is inactive`,
                        `The activeColor is the color of the trigger zone when it has been triggered and is active`,
                        `The triggerType is the type of tracking that the trigger zone uses`,
                    ],
code: `<span class="text-yellow-700">//  Create a new trigger zone
const triggerZone = new TriggerZone({
    percentageX: <span class="text-green-500 font-bold">50</span>,
    percentageY: <span class="text-green-500 font-bold">50</span>,
    radius: <span class="text-green-500 font-bold">40</span>,
    inactiveColor:  <span class="text-green-500 font-bold">'#ff0000'</span>,
    activeColor:  <span class="text-green-500 font-bold">'#00ff00'</span>,
    triggerType: 'mouse',
});</span>
`
                },
                {
                    text: [
                        `To create multiple Trigger Zones you can copy and paste the Trigger Zone code`,
                        `Make sure to change the name of the variable of the new Trigger Zone`,
                        `Make sure to change the percentageX and percentageY`,
                        `of the new Trigger Zone so that they dont overlay each other`,
                    ],
code: `<span class="text-yellow-700">// Create a new trigger zone
const <span class="text-green-500 font-bold">secondScreenTriggerZone</span> = new TriggerZone({
    percentageX: <span class="text-green-500 font-bold">75</span>,
    percentageY: <span class="text-green-500 font-bold">75</span>,
    ....
});</span>`,
                },
                {
                    text: [
                        `Save & Reload`,
                        `And Proceed to the next lesson...`,
                    ],
                }
            ],

        },
        {
            complete: false,
            name: 'Motion Tracking The Hands',
            menuName: 'Motion Hands',
            className: 'Hands',
            content: [
                        `Let's create a hand tracking system`,
                        `First we need to create a new Motion Tracker`,
                        `This Motion Tracker will track the hand`,
                    ],
            steps: [
                    {
                        text: [
                            `Make these changes in the 'JS' panel (either above or on the left)`,
                            `This should be before the app.init() function`,
                            `And after the <b>app</b> and <b>timeline</b> variable has been created`,
                        ],

code: `<span class="text-green-500 font-bold">//  Create a new motion tracker
const motionTrackerHand = new MotionTracker({
    radius: 30,
    color: '#00b7ff',
    trackingType: 'hand',
});</span>`
                },
                {
                    text: [
                        `Next we need to add the Motion Tracker to the scene`,
                    ],
code: `<span class="text-green-500 font-bold">// Add the motion tracker to the scene
scene.addSceneObject(motionTrackerHand);</span>`
                },
                {
                    text: [
                        `Next we need to create a new Trigger Zone`,
                        `This Trigger Zone will trigger when the hand enters the zone`,
                    ],  
code: `<span class="text-green-500 font-bold">//  Create a new trigger zone
const triggerZoneHand = new TriggerZone({
    percentageX: 25,
    percentageY: 30,
    radius: 40,
    inactiveColor: '#ff0000',
    activeColor: '#00ff00',
    triggerType: 'hand',
});</span>`
                },
                {
                    text: [
                        `Next we need to add the Trigger Zone to the scene`,
                    ],
code: `<span class="text-green-500 font-bold">// Add the trigger zone to the scene
scene.addSceneObject(triggerZoneHand);</span>`
                },
                {
                    text: [
                        `Next we need to create a new Motion Tracker`,
                        `This Motion Tracker will track the other hand`,
                    ],
code: `<span class="text-green-500 font-bold">//  Create a new motion tracker
const motionTrackerHand2 = new MotionTracker({
    radius: 30,
    color: '#2600ff',
    trackingType: 'hand',
});</span>`
                },
                {
                    text: [
                        `Next we need to add the Motion Tracker to the scene`,
                    ],
code: `<span class="text-green-500 font-bold">// Add the motion tracker to the scene
scene.addSceneObject(motionTrackerHand2);</span>`
                },
                {
                    text: [
                        `Next we need to create a new Trigger Zone`,
                        `This Trigger Zone will trigger when the hand enters the zone`,
                    ],
code: `<span class="text-green-500 font-bold">//  Create a new trigger zone
const triggerZoneHand2 = new TriggerZone({
    percentageX: 75,
    percentageY: 50,
    radius: 40,
    inactiveColor: '#ff0000',
    activeColor: '#00ff00',
    triggerType: 'hand',
});</span>`
                },
                {
                    text: [
                        `Next we need to add the Trigger Zone to the scene`,
                    ],
code: `<span class="text-green-500 font-bold">// Add the trigger zone to the scene
scene.addSceneObject(triggerZoneHand2);</span>`
                },
                {
                    text: [
                        `Save & Reload`,
                        `And Proceed to the next lesson...`,
                    ],
                }
            ],
        },
        {
            complete: false,
            name: 'Motion Tracking The Face',
            menuName: 'Motion Face',
            className: 'Face',
            content: [

                        `Let's create a face tracking system`,
                        `First we need to create a new Motion Tracker`,
                        `This Motion Tracker will track the face`,
                    ],
            steps: [
                    {
                        text: [
                            `Make these changes in the 'JS' panel (either above or on the left)`,
                            `This should be before the app.init() function`,
                            `And after the <b>app</b> and <b>timeline</b> variable has been created`,
                        ],
code: `<span class="text-green-500 font-bold">//  Create a new motion tracker
const motionTrackerFace = new MotionTracker({
    radius: 30,
    color: '#ae00ff',
    trackingType: 'face',
});</span>`
                },
                {
                    text: [
                        `Next we need to add the Motion Tracker to the scene`,
                    ],
code: `<span class="text-green-500 font-bold">// Add the motion tracker to the scene
scene.addSceneObject(motionTrackerFace);</span>`
                },
                {
                    text: [
                        `Next we need to create a new Trigger Zone`,
                        `This Trigger Zone will trigger when the face enters the zone`,
                    ],
code: `<span class="text-green-500 font-bold">//  Create a new trigger zone
const triggerZoneFace = new TriggerZone({
    percentageX: 25,
    percentageY: 30,
    radius: 40,
    inactiveColor: '#ff0000',
    activeColor: '#00ff00',
    triggerType: 'face',
});</span>`
                },
                {
                    text: [
                        `Next we need to add the Trigger Zone to the scene`,
                    ],
code: `<span class="text-green-500 font-bold">// Add the trigger zone to the scene
scene.addSceneObject(triggerZoneFace);</span>`
                },
                {
                    text: [
                        `Save & Reload`,
                        `And Proceed to the next lesson...`,
                    ],
                }
            ],
        },
                        
    ]
}