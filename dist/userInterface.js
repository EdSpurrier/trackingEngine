
const userInterface = (() => {
  const uiElement = document.querySelector('#userInterface');

  const createDiv = (id, className) => {
    const div = document.createElement('div');
    div.id = id;
    div.className = className;
    uiElement.appendChild(div);
    return div;
  };

  const createActionBtn = (id, className, text, onClick) => {
    const btn = document.createElement('button');
    btn.id = id;
    btn.className = className;
    btn.textContent = text;
    btn.addEventListener('click', onClick);
    uiElement.appendChild(btn);
    return btn;
  };

  const createToggleBtn = (id, className, text, onToggle) => {
    const btn = document.createElement('button');
    btn.id = id;
    btn.className = className;
    btn.textContent = text;
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      onToggle(btn.classList.contains('active'));
    });
    uiElement.appendChild(btn);
    return btn;
  };

  const updateDiv = (id, className) => {
    const div = document.getElementById(id);
    div.className = className;
  };

  const updateUserInterface = () => {
    // TODO: update user interface elements as needed
  };

  return {
    createDiv,
    createActionBtn,
    createToggleBtn,
    updateDiv,
    updateUserInterface,
  };
})();
