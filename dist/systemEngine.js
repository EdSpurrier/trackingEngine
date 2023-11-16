// Insert HTML into body

const systemHTML = `
    <div 
        id="system" 
        class="layer layer-top flex flex-col justify-center items-center w-full h-full bg-gray-900 bg-opacity-70 hidden">
    </div>
`

document.body.innerHTML += systemHTML;

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
        this.errorsEl = this.createDiv('errors', this.systemEl, ['z-100', 'hidden', 'bg-red-500', 'm-6', 'py-5', 'text-white', 'text-sm', 'max-w-md', 'rounded-md', 'flex', 'flex-col', 'justify-center', 'items-center', 'gap-4', 'w-full']);

        this.lessonEl = this.createDiv('lesson', this.systemEl, ['z-100', 'text-center', 'hidden', 'bg-yellow-300', 'm-6', 'max-w-xl', 'text-black', 'text-sm', 'rounded-md', 'flex', 'flex-col', 'justify-center', 'items-center']);
    }

    lesson = (innerHTML) => {
        console.log('TeacherEngine lesson');

        this.lessonEl.innerHTML = innerHTML;
        this.lessonEl.classList.remove('hidden');
        this.systemEl.classList.remove('hidden');
    }

    warnings = (message, data) => {
        this.warnings.push({message, ...data});
        console.warn(message, data);
    }

    error = (className, message, data) => {
        this.errors.push({
            className: className, 
            message: message,          
            data: data, 
        });
        console.error(className, message, data);
        this.updateElements();
    }

    updateElements = () => {
        console.log('SystemEngine updateElements');


        if (this.errors.length > 0) {
            this.errorsEl.classList.remove('hidden');
            this.systemEl.classList.remove('hidden');
        } else {
            this.errorsEl.classList.add('hidden');
            this.systemEl.classList.add('hidden');
        }
        // update errors
        this.errorsEl.innerHTML = '<div class="text-lg">Errors</div>';
        this.errorsEl.innerHTML += this.errors.map(error => {
            let html = `<div class="w-full p-2 border-y-2 border-slate-600 flex flex-col justify-center items-center gap-4 py-2">`;
            html += `<div class="text-bold underline">${error.className}</div>`;
            
            html += `<div>${error.message}</div>`;
            if (error.data) {
                html += `<div class="text-xs">DATA = ${JSON.stringify(error.data)}</div>`;
            }
            if (error.className) {
                html += teacher.getLessonButton(error.className);
            }
            html += `</div>`;
            return html;

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