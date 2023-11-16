class SystemEngine {
    constructor() {
        this.systemEl = document.getElementById('system');
        console.log(`SystemEngine Connected #${this.systemEl.id}`);
        this.errors = [];
        this.warnings = [];
        this.createElements();
    }

    createDiv = (id, parent, classes) => {
        const div = document.createElement('div');
        
        classes.forEach(className => {
            div.classList.add(className);
        });
        
        div.id = id;
        parent.appendChild(div);
        return div;
    }


    createElements = () => {
        console.log('SystemEngine createElements');
        this.errorsEl = this.createDiv('errors', this.systemEl, ['hidden', 'bg-red-500', 'p-3', 'text-white', 'text-sm', 'rounded-md', 'flex', 'flex-col', 'justify-center', 'items-center', 'gap-2']);

        this.lessonEl = this.createDiv('errors', this.systemEl, ['z-100', 'hidden', 'bg-yellow-500', 'p-6', 'text-black', 'text-sm', 'rounded-md', 'flex', 'flex-col', 'justify-center', 'items-center', 'gap-4']);
    }

    lesson = (innerHTML) => {
        console.log('TeacherEngine lesson');

        this.lessonEl.innerHTML = innerHTML;
        this.lessonEl.classList.remove('hidden');
    }

    warnings = (message, data) => {
        this.warnings.push({message, ...data});
        console.warn(message, data);
    }

    error = (message, data) => {
        this.errors.push({message, data});
        console.error(message, data);
        this.updateElements();
    }

    updateElements = () => {
        console.log('SystemEngine updateElements');


        if (this.errors.length > 0) {
            this.errorsEl.classList.remove('hidden');
        } else {
            this.errorsEl.classList.add('hidden');
        }
        // update errors
        this.errorsEl.innerHTML = '<div class="font-bold">Errors</div>';
        this.errorsEl.innerHTML += this.errors.map(error => {
            return `<div>${error.message}</div>`;
        }).join('');
    }


    alert = (message) => {
        alert(message);
    }

    popup = (message) => {
        console.log('SystemEngine popup');

        this.systemEl.innerHTML = message;
    }

    init = () => {
        console.log('SystemEngine init');
    }

}

let system = new SystemEngine();

system.init();