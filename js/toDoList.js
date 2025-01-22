const addList = document.querySelector('#ajouter');

function createList() {
    const titre = document.querySelector('#tache');
    const listContainer = document.querySelector('.list-container');
    
    const div = document.createElement('div');
    div.setAttribute('class', 'liste')

    const h3 = document.createElement('h3');

    const ul = document.createElement('ul');
    
    const itemName = document.createElement('input')
    itemName.setAttribute('type', 'text');
    itemName.setAttribute('placeholder', 'Ajouter un item à la liste')

    const addListItem = document.createElement('button');
    addListItem.setAttribute('id', 'addListItem');
    addListItem.innerText = 'Ajouter';

    const deleteList = document.createElement('button');

    listContainer.appendChild(div);
    div.appendChild(h3);
    div.appendChild(itemName);
    div.appendChild(addListItem);
    div.appendChild(ul);
    h3.innerText = titre.value;
    titre.value = '';
    div.appendChild(deleteList);
    deleteList.innerText = 'Supprimer la liste';


    // Ajouter des tâches à la liste
    addListItem.addEventListener('click', () => {
        const deleteButton = document.createElement('button');
        const li = document.createElement('li');
        if (itemName.value != '') {
            ul.appendChild(li);
            deleteButton.innerText = 'Supprimer';
            li.innerText = itemName.value;
            itemName.value = '';
            li.appendChild(deleteButton);
        }

        // Supprime un élément de la liste
        deleteButton.addEventListener('click', function() {
            ul.removeChild(li);
        });
    })

    deleteList.addEventListener('click', () => {
        listContainer.removeChild(div);
    })
    return;
}

addList.addEventListener('click', createList);