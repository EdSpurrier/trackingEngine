// Manages all the tracking logic





const modelParams = {
    flipHorizontal: true,   // flip e.g for video  
    maxNumBoxes: 20,        // maximum number of boxes to detect
    iouThreshold: 0.5,      // ioU threshold for non-max suppression
    scoreThreshold: 0.6,    // confidence threshold for predictions.
}



class TrackingEngine {
    model = null

    constructor(
        canvas,
        ctx,
        videoInput,
        
    ) {


    }


    init = () => {
        this.loop();
    }

    loop = () => {
        this.updateSystem();
        this.renderFrame();
        requestAnimationFrame(this.loop);
    }
}
