
var prod = false;



// Insert CSS
const motionEngineCSS = `

`;





//  Inject HTML
const motionEngineHTML = `
`;





if (prod) {
    const style = document.createElement('style');
    style.innerHTML = motionEngineCSS;
    document.head.appendChild(style);

    //  Add HTML to #scene-engine
    const sceneEngineHTML = document.getElementById('scene-engine');
    sceneEngineHTML.innerHTML = motionEngineHTML;
}

