const visualizeBtn = document.getElementById('visualize-btn');
const toggleRawBtn = document.getElementById('toggle-raw-btn');
const jsonInput = document.getElementById('json-input');
const jsonTree = document.getElementById('json-tree');

let rawStrings = false;
let jsonData = null;

toggleRawBtn.textContent = `Raw Strings: ${rawStrings ? 'On' : 'Off'}`;

toggleRawBtn.addEventListener('click', () => {
    rawStrings = !rawStrings;
    toggleRawBtn.textContent = `Raw Strings: ${rawStrings ? 'On' : 'Off'}`;
    toggleRawBtn.classList.toggle('raw-strings-on', rawStrings);
    if (jsonData) {
        renderTree();
    }
});

visualizeBtn.addEventListener('click', () => {
    try {
        jsonData = JSON.parse(jsonInput.value);
        renderTree();
    } catch (error) {
        jsonTree.innerHTML = `<p style="color: red;">Invalid JSON: ${error.message}</p>`;
        jsonData = null;
    }
});

function renderTree() {
    jsonTree.innerHTML = '';

    if (Array.isArray(jsonData)) {
        const rootInfo = document.createElement('div');
        rootInfo.className = 'root-array-info';
        rootInfo.textContent = `Root Array (${jsonData.length} items)`;
        jsonTree.appendChild(rootInfo);
    }

    const tree = createTree(jsonData, false);
    tree.classList.add('tree');
    jsonTree.appendChild(tree);
}

function createTree(data, isExpanded = false) {
    const ul = document.createElement('ul');

    const isArray = Array.isArray(data);

    if (isArray) {
        ul.classList.add('array-list');
    }

    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const li = document.createElement('li');
            const value = data[key];

            if (typeof value === 'object' && value !== null) {
                li.classList.add('collapsible');
                if (isExpanded) {
                    li.classList.add('expanded');
                }
                
                const contentDiv = document.createElement('div');

                const toggle = document.createElement('span');
                toggle.className = 'toggle';
                toggle.textContent = '▶';
                toggle.addEventListener('click', () => {
                    li.classList.toggle('expanded');
                });
                contentDiv.appendChild(toggle);

                if (isArray) {
                    const keySpan = document.createElement('span');
                    keySpan.className = 'index';
                    keySpan.textContent = key;
                    contentDiv.appendChild(keySpan);
                } else {
                    const keySpan = document.createElement('span');
                    keySpan.className = 'key';
                    keySpan.innerHTML = `"${key}"`;
                    contentDiv.appendChild(keySpan);
                }

                if (Array.isArray(value)) {
                    const countSpan = document.createElement('span');
                    countSpan.className = 'item-count';
                    countSpan.textContent = `(${value.length} items)`;
                    contentDiv.appendChild(countSpan);
                }

                const summary = Array.isArray(value) ? `[...]` : `{...}`;
                const summarySpan = document.createElement('span');
                summarySpan.className = 'summary';
                summarySpan.textContent = `: ${summary}`;
                contentDiv.appendChild(summarySpan);

                li.appendChild(contentDiv);
                li.appendChild(createTree(value));

            } else {
                let type = typeof value;
                let displayValue;

                if (type === 'string' && !rawStrings) {
                    displayValue = `"${escapeHtml(value)}"`;
                } else {
                     displayValue = JSON.stringify(value);
                }

                if (value === null) {
                    type = 'null';
                }
                
                if (isArray) {
                    li.innerHTML = `<span class="index">${key}</span>: <span class="${type}">${displayValue}</span>`;
                } else {
                    li.innerHTML = `<span class="key">"${key}"</span>: <span class="${type}">${displayValue}</span>`;
                }
            }
            ul.appendChild(li);
        }
    }
    return ul;
}

function escapeHtml(text) {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}