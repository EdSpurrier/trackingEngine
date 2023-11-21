// Manages all the tracking logic



// preset scenesettings for being added to in constructor
const presetTrackingSettings = {
    modelType : 'handTrack',
};

const modelParams = {
    flipHorizontal: true,   // flip e.g for video  
    maxNumBoxes: 20,        // maximum number of boxes to detect
    iouThreshold: 0.5,      // ioU threshold for non-max suppression
    scoreThreshold: 0.6,    // confidence threshold for predictions.
}

let trackingEngineCreated = false;
let trackingEngineInit = false;



class TrackingEngine {
    model = null
    running = false
    trackedPredictions = []
    handTrack = null

    bodyParts = []

    constructor(
        trackingSettings
    ) {
        app.trackingEngine = this;
        trackingEngineCreated = true;
        //  merge the presetTrackingSettings with the trackingSettings passed in
        this.trackingSettings = Object.assign(presetTrackingSettings, trackingSettings);
        
        this.modelType = this.trackingSettings.modelType;
        this.bodyParts = [
            new BodyPart({
                name: 'hand-1',
                radius: 15,
                color: 'red',
                trackingType: 'hand',
            }),            
        ]

        this.video      = system.domEngine.getCanvas('webcam-video');
        const { canvas, ctx } = system.domEngine.getCanvas('scene');
        this.canvas = canvas;
        this.ctx = ctx;


        this.video      = document.getElementById("webcam-video");
        this.canvas     = document.getElementById('tracking-canvas');
        this.ctx        = this.canvas.getContext('2d');
        this.handData = document.getElementById("handData");
        this.handTrack = handTrack;
    }


    loadHandTrackModel = () => {
        this.handTrack.load(modelParams).then(lmodel => {
            // detect objects in the image.
            this.model = lmodel
            system.log(
                this.constructor.name,
                'Handtrack model loaded');
            this.startVideo();
        });
    }


    loadModel = () => {
        if (this.modelType === 'handTrack') {
            this.loadHandTrackModel();
        }
    }

    runDetection = () => {
        this.model.detect(this.video).then(predictions => {
            this.model.renderPredictions(predictions, this.canvas, this.ctx, this.video);
            this.trackedPredictions = predictions;
            requestAnimationFrame(this.loop);
        });
    }

    startVideo = () => {
        this.handTrack.startVideo(this.video).then((status) => {
            system.log(this.constructor.name,"Webcam Stream:", status);
            if (status) {
                system.log(this.constructor.name,'Running detection loop')
                this.runDetection();
                this.running = true
            }
        });
    }

   
    stopVideo() {
        this.handTrack.stopVideo(video)
        this.running = false;
        system.log(this.constructor.name,'Video stopped')
    }

    init = () => {
        this.loadModel();
    }

    updateSystem = () => {
        if (this.running) {
            this.runDetection();
        }
    }


    loop = () => {
        this.updateSystem();
    }
}


