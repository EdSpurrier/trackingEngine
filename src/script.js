//  Lesson: Introduction to the Application Core                    
//  Task:   Create a new application                                
//  Task:   Add the meta data to the application         

//  Create a new Application
const app = new App({
    metaData : {
        name: 'Application Name',
        version: '0.0.1',
        description: 'Description of the application',
        developer: 'Developer Name',
        company: 'Company Name',
    },
    backgroundColor : '#000000',
    debug: true
});


// Initialize application
app.init();