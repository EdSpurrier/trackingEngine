
const Animations = {
    debug: false,
    fade: ({
        state,
        elements, 
        callBack,
        duration = 1,
        delay = 0,
        easing = 'easeInOutSine',
        update = () => {},
        begin = () => {},
        complete = () => {},
    }) => {

        if (state) {
            elements.forEach(element => {
                if(element.classList?.contains('hidden')) {
                    element.classList.remove('hidden');
                    anime.set(elements, {
                        opacity: 0
                    });
                };
            });
        }
        

        const onComplete = () => {
            if(!state) {
                elements.forEach(element => {
                    element.classList.add('hidden');
                });
            };
            callBack();
        }

        var animation = anime.timeline({
            targets: elements,
            delay: delay * 1000,
            duration: duration * 1000,
            easing: easing,
            update: function(anim) {
                /* system.log(this.constructor.name,'animating : '+(anim.progress.toFixed(2))+'%'); */
                update(anim);
            },
            begin: function(anim) {
                if(debug) system.log(this.constructor.name,'animation > began : ' + anim.began)
                begin(anim);
            },
            complete: function(anim) {
                if(debug) system.log(this.constructor.name,'animation > completed : ' + anim.completed);
                complete(anim);
            }
        }).add({
            opacity: state?1:0,
        });

        animation.finished.then(onComplete);
    },




    splashShowHide: ({
        screen,
        name, 
        version,
        company,
        callBack,
        delay = 0,
        update = () => {},
        begin = () => {},
        complete = () => {},
    }) => {

       
        anime.set([name, version, company], {
            opacity: 0
        });

        screen.classList.remove('hidden');

        const onComplete = () => {
            screen.classList.add('hidden');
            callBack();
        }


        var animation = anime.timeline({
            
            delay: delay * 1000,
            easing: 'easeOutExpo',
            update: function(anim) {
                /* system.log(this.constructor.name,'animating : '+(anim.progress.toFixed(2))+'%'); */
                update(anim);
            },
            begin: function(anim) {
                if(debug) system.log(this.constructor.name,'animation > began : ' + anim.began)
                begin(anim);
            },
            complete: function(anim) {
                if(debug) system.log(this.constructor.name,'animation > completed : ' + anim.completed);
                complete(anim);
            }
        }).add({
            targets: name,
            opacity: 1,
            duration: 500,
        }, 800).add({
            targets: company,
            opacity: 1,
            duration: 500,
        }, 900).add({
            targets: version,
            opacity: 1,
            duration: 500,
        }, 1000).add({
            targets: [name, version, company],
            opacity: 0,
            duration: 500,
        }).add({
            targets: screen,
            opacity: 0,
            duration: 700,
        }, 2500);

        animation.finished.then(onComplete);
    },
    
}
