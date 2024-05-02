document.addEventListener('DOMContentLoaded', function() {
    const draggables = document.querySelectorAll('[draggable="true"]');
    const workspace = document.getElementById('workspace');

    draggables.forEach(el => {
        el.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData('text/plain', e.target.id);
        });
    });

    workspace.addEventListener('dragover', function(e) {
        e.preventDefault(); // Necessary to allow dropping
    });

    workspace.addEventListener('drop', function(e) {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(id);
        const clone = draggable.cloneNode(true);
        clone.style.position = 'absolute';
        clone.style.left = e.offsetX + 'px';
        clone.style.top = e.offsetY + 'px';
        workspace.appendChild(clone);
    });
});


workspace.addEventListener('click', function(e) {
    const selectedElement = e.target;
    // Assume elements have a data-type attribute to identify them
    const elementType = selectedElement.dataset.type;
    const propertiesHTML = `<label>Edit ${elementType}: <input type="text" value="${selectedElement.textContent}"></label>`;
    const propertiesPanel = document.getElementById('properties-panel');
    propertiesPanel.innerHTML = propertiesHTML;

    propertiesPanel.querySelector('input').addEventListener('input', function(event) {
        selectedElement.textContent = event.target.value; // Reflect changes in real-time
    });
});

document.getElementById('serialize').addEventListener('click', function() {
    // Code to traverse the workspace and serialize the layout
    // You would use TemplateFactory methods based on element types and properties
});
