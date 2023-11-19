



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



//  Lesson: Introduction to the Motion Tracker
//  Task:   Add a new Motion Tracker to the scene that tracks the mouse
//  Task:   Modify and add settings to the Motion Tracker
//  Task:   Test the Motion Tracker


//  Lesson: Introduction to the Trigger Zone
//  Task:   Add a new trigger zone to the scene that triggers when the mouse enters the zone
//  Task:   Modify and add settings to the Trigger Zone
//  Task:   Test the Trigger Zone


//  Lesson: Introduction to the Scene Engine
//  Task:   Create a new scene and give it settings
//  Task:   Add Motion Tracker to the scene
//  Task:   Add Trigger Zone to the scene
//  Task:   Add the new scene to the timeline


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





const course = {
    name: 'Application Core',
    description: 'Learn how to create an application core',
    lessons: [
        {
            name: 'Introduction to the Application Core',
            className: 'AppCore',
            description: 'Learn how to create an application core',
            tasks: [
                {
                    name: 'Create a new application',
                    description: 'Learn how to create a new application',
                    code: `
                            // Create a new application
                            const app = new App(
                                metaData = {
                                    name: 'Application Name',
                                    version: '0.0.1',
                                    description: 'Description of the application',
                                    developer: 'Developer Name',
                                    company: 'Company Name',
                                },
                            );
                        `,
                },
            ],
        },
        {
            name: 'Introduction to the Timeline',
            className: 'Timeline',
            description: 'Learn how to create a timeline',
            tasks: [
                {
                    name: 'Create a new timeline',
                    description: 'Learn how to create a new timeline',
                    code: `
                            // Create a new timeline
                            const timeline = new Timeline();
                        `,
                },
                {
                    name: 'Add the timeline to the application',
                    description: 'Learn how to add the timeline to the application',
                    code: `
                            // Add the timeline to the application
                            app.addTimeline(timeline);
                        `,
                },
            ],
        },

        {
            name: 'Introduction to the App Screen',
            className: 'Screen',
            description: 'Learn how to create an app screen',
            tasks: [
                {
                    name: 'Create a new app screen and give it settings',
                    description: 'Learn how to create a new app screen and give it settings',
                    code: `
                            // Create a new app screen and give it settings
                            
                        `,
                },
                {
                    name: 'Add the new app screen to the timeline',
                    description: 'Learn how to add the new app screen to the timeline',
                    code: `
                            // Add the new app screen to the timeline
                            timeline.addTimelineStep(
                                new Screen({
                                    name: 'Screen Name',
                                    settings: {
                                        backgroundColor: '#39FF14',
                                    },
                                    content: {
                                        title: 'Screen Title',
                                        body: 'Screen Body',
                                        button: 'Screen Button',
                                    }
                                })
                            );
                        `,
                }
            ],
        },


        {
            name: 'Introduction to the Scene Engine',
            description: 'Learn how to create a scene engine',
            tasks: [
                {
                    name: 'Add a new scene and add it to the timeline',
                    description: 'Learn how to add a new scene and add it to the timeline',
                    code: `
                            // Add a new scene and add it to the timeline
                            timeline.addTimelineStep(
                                new Scene({
                                    name: 'Scene Name',
                                    settings: {
                                        backgroundColor: '#39FF14',
                                    },
                                    content: {
                                        title: 'Scene Title',
                                        body: 'Scene Body',
                                        button: 'Scene Button',
                                    }
                                })
                            );
                        `,
                },
                {
                    name: 'Add settings to the scene',
                    description: 'Learn how to add settings to the scene',
                    code: `
                            // Add settings to the scene
                            timeline.addTimelineStep(
                                new Scene({
                                    name: 'Scene Name',
                                    settings: {
                                        backgroundColor: '#39FF14',
                                    },
                                    content: {
                                        title: 'Scene Title',
                                        body: 'Scene Body',
                                        button: 'Scene Button',
                                    }
                                })
                            );
                        `,
                }
            ]

        }
    ]
}