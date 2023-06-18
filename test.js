// Sample list of workplaces and corresponding names
const workplaceNames = {
  'CMF1': ['Sashka Z', 'Sashka K', 'Sivlia I'],
  'VolvoBB-CU': ['Sashka Z', 'Magdalena'],
  'VolvoSpa': ['Sashka Z', 'Nadejda', 'Sashka K'],
  'BR 1': ['Zvezdelina', 'Silvia I', 'Nadejda'],
  'BR 2': ['Silviq L', 'Sivlia I', 'Nadejda'],
  'Scania': ['Elza', 'Vanq'],
  'PTC35UP': ['Sashka Z', 'Sashka K', 'Valeri'],
  'Man BB/CU': ['Sashka K', 'Elena E'],
  'MQB CLT 1': ['Koce', 'Misho', 'Sophia'],
  'MQB CLT 2': ['Koce', 'Misho', 'Sophia'],
  'MNB CLT 3': ['Sivlia I', 'Olivia', 'Sophia'],
  'Touareg': ['Rumqna', 'Rayna', 'Sophia'],
  'MLBevo': ['Sashka Z', 'Sashka K', 'Sophia'],
  'Audi Heck': ['Rayna', 'Silvia M', 'Iliyana', `Vili`],
  'MQB 37': ['Elena E', 'Emilia'],
  'MEB 31': ['Magdalena', 'Nina'],
  'MFA2': ['Danislava', 'Lili', 'Dimitar'],
  'MQB CLT Touch': ['Svetla', 'Rosi', 'Stefi',`Vanq`],
  'MQB 27 Touch': ['Vili', 'Elena K', 'Olivera',`Valeri`]
  // Add more workplaces and names here
};

// Function to populate workplaces and names
function populateWorkplacesAndNames() {
  const workplacesNamesList = document.getElementById('workplaces-names');
  workplacesNamesList.innerHTML = '';

  // Populate workplaces and corresponding names
  for (const [workplace, names] of Object.entries(workplaceNames)) {
    const listItem = document.createElement('li');
    const workplaceElement = document.createElement('span');
    workplaceElement.textContent = workplace + ': ';
    listItem.appendChild(workplaceElement);

    const namesElement = document.createElement('span');
    namesElement.textContent = names.join(', ');
    listItem.appendChild(namesElement);

    workplacesNamesList.appendChild(listItem);
  }
}

// Call the function to populate the workplaces and names initially
populateWorkplacesAndNames();
