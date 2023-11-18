//  App Core manages the entire application
//  It is responsible for loading the modules and starting the application
//  It is also responsible for the main loop of the application
//  It is also responsible for the state of the application



//  Check after everyting in the whole site has finished loading and initiating and see if the sceneEngine is present



// Create Class of AppCore
class App {

    elements = {
        loadingScreen: document.getElementById('loading-screen'),
        system: document.getElementById('system'),
        overlay: document.getElementById('overlay'),
        applicationSpash: document.getElementById('application-spash-screen'),
    };

    settings = {
        name: 'Application Name',
        version: '0.0.1',
        description: 'Description of the application',
        developer: 'Developer Name',
        company: 'Company Name',
    };
    sceneEngine = null;
    motionTrackers = [];
    triggerZones = [];

    
    constructor() {
        this.setLoadingScreen(true);
    }

    setLoadingScreen = (state) => {
        if (state) {
            this.elements.loadingScreen.classList.remove('hidden');
        } else {
            this.elements.loadingScreen.classList.add('hidden');
        }
    }

    showApplicationSpash = () => {
        this.elements.applicationSpash.classList.remove('hidden');
    }

    //  Check if the sceneEngine is present
    checkSceneEngine = () => {
        if (this.sceneEngine) {
            return true;
        } else {
            return false;
        }
    }


    loading = () => {
        
    }

    init = () => {
        this.setLoadingScreen(false);
        teacher.lessonCheckState('appSettings', lessonPoints['appSettings'].checkLessonPoint(this));
    }

    //  Start the application
    start = () => {

    }



}


app = new App();


