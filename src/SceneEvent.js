


const SceneEventType = {
    SoundEffect: 'SoundEffect',
    AddScore: 'AddScore',
};


class SceneEvent {
    constructor(
        type,
        scene,
        eventData,
    ) {
        this.type = type;
        this.scene = scene;
        this.eventData = eventData;
    }

    playSoundEffect = () => {
        system.log('Play Sound Effect');
        const soundEffect = new Audio(this.eventData);
        soundEffect.play();
    }

    triggerEvent = () => {
        switch (this.type) {
            case SceneEventType.SoundEffect:
                this.playSoundEffect();
                break;
            case SceneEventType.AddScore:
                this.scene.addScore(this.eventData);
                break;
            default:
                break;
        }
    }

}