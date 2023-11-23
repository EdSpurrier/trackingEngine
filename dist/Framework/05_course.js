



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









//  Important Notes

//  The AppCore is the core of the application and is used to create the application and maintain the application and its settings

//  ChatGPT is a GPT-3 powered chatbot that can be used to create a chatbot for your application

//  The Scene Engine is a scene that can be used to create a environment for users to interact within your application

//  The Motion Tracker is a tracker that can be used to track the position of a users mouse or hand or other body part

//  The Trigger Zone is a zone that can be used to trigger an event when a user enters the zone with their mouse or hand or other body part part

//  The Overlay is a overlay that can be used to display information to the user

//  The Application Splash Screen is a screen that can be used to display information to the user





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
code: `<span class="text-green-500">// Create a new application
const app = new App({
    metaData : {
        name: 'Application Name',
        version: '0.0.1',
        description: 'Description of the application',
        developer: 'Developer Name',
        company: 'Company Name',
    },
    backgroundColor : '#3a00a7',
    debug: true
});</span>`
                },
                {
                    text: [
                        `Replace the metaData with your own metaData`,
                    ],
code: `// Create a new application
const app = new App({
    metaData : {
        name:  <span class="text-green-500">'My Awesome Application'</span>,
        version:  <span class="text-green-500">'0.0.1'</span>,
        description:  <span class="text-green-500">'Does things that you couldn't beleive'</span>,
        developer:  <span class="text-green-500">'John Black'</span>,
        company:  <span class="text-green-500">'AR Inc'</span>,
    },
    backgroundColor : '#3a00a7',
    debug: true
});`
                },
                {
                    text: [
                        `Set the backgroundColor to your own color`,
                        `You can use a color picker to find a color that you like`,
                        `You can use a color name or a hex color code`,
                        `<a href="https://htmlcolorcodes.com/color-picker/" class="underline italic step-button" target="_blank">HTML Color Picker</a>`,
                    ],
code: `// Create a new application
const app = new App({
    metaData : {
        name:  'My Awesome Application',
        version:  '0.0.1',
        description:  'Does things that you couldn't beleive',
        developer:  'John Black',
        company:  'AR Inc',
    },
    backgroundColor : <span class="text-green-500">'#000000'</span>,
    debug: true
});`
                },
                {
                    text: [
                        `Next we need to initialize the application`,
                        `We do this by calling the init function`,
                        `Add this code to the very end of your 'JS'.`,
                        `Always make sure that it is the last function to be called`,
                    ],
code: 
`<span class="text-green-500">// Initialize the application
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
code: `<span class="text-green-500">// Create a new timeline
const timeline = new Timeline();</span>`,
                },
                {
                    text: [
                        `Add the timeline to the application`,
                        `This should be after the timeline variable has been created`,
                        `And before the app.init() function`,
                    ],
code: `<span class="text-green-500">// Add the timeline to the application
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
            description: `The Screen is a screen that can be used to create a screen for your application`,
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
code: `<span class="text-green-500">// Create a new screen
const screen = new Screen({
    name: 'Screen Name',
    backgroundColor: '#39FF14',
    textColor: 'black',
    buttonColor: 'green',
    popupBackgroundColor: 'yellow',
    title: 'Screen Title',
    content: `+'`'+`This is the screen content`+'`'+`,
    buttonText: 'Click Me!',
    debug: true,
});</span>`,
                },
                {
                    text: [
                        `Add the screen to the timeline`,
                        `This should be after the screen variable has been created`,
                        `And before the app.init() function`,
                    ],
code: `<span class="text-green-500">// Add the screen to the timeline
timeline.addTimelineStep(screen);</span>`,
                },
                {
                    text: [
                        `The screen should now be showing on the screen`,
                        `You can change the content and look of the screen`,
                        `The title, body and buttonText are text values`,                        
                    ]
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
                        `Save & Reload`,
                        `And Proceed to the next lesson...`,
                    ],
                }
            ],
        },


    ]
}