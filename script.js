const initiativeTable = document.getElementById('initiative-table');
const characterNameInput = document.getElementById('character-name');
const initiativeRollInput = document.getElementById('initiative-roll');
const lifePointsInput = document.getElementById('life-points');

function addCharacter() {
    const characterName = characterNameInput.value;
    const initiativeRoll = initiativeRollInput.value;
    if (characterName && initiativeRoll) {
        const listItem = document.createElement('li');
        listItem.textContent = `${characterName} - Iniciativa: ${initiativeRoll}`;

        listItem.addEventListener('click', function() {
            this.remove();
        });

        initiativeTable.appendChild(listItem);
        characterNameInput.value = '';
        initiativeRollInput.value = '';

        const defaultMessage = document.querySelector('.default-msg');
        if (defaultMessage){
            defaultMessage.remove();
        }

    }
}


function sortInitiative() {
    const characters = Array.from(initiativeTable.children);
    const sortedCharacters = characters.sort((a, b) => {
        const initiativeA = parseInt(a.textContent.match(/\d+/)[0]);
        const initiativeB = parseInt(b.textContent.match(/\d+/)[0]);
        return initiativeB - initiativeA;
    });
    initiativeTable.innerHTML = '';
    sortedCharacters.forEach(character => {
        initiativeTable.appendChild(character);
    });
}
