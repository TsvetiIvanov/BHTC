// Sample list of workplaces and corresponding names
const workplaceNames = {
  'CMF1': {
    dropdownCount: 3,
    names: [` `,'Sashka Z', 'Sashka K', 'Silvia I']
  },
  'VolvoBB-CU': {
    dropdownCount: 1,
    names: [` `,'Sashka Z', 'Magdalena']
  },
  'VolvoSpa': {
    dropdownCount: 1,
    names: [` `,'Sashka Z', 'Nadejda', 'Sashka K']
  },
  'BR 1': {
    dropdownCount: 2,
    names: [` `,'Zvezdelina', 'Silvia I', 'Nadejda']
  },
  'BR 2': {
    dropdownCount: 1,
    names: [` `,'Silvia L', 'Silvia I', 'Nadejda']
  },
  'Scania': {
    dropdownCount: 1,
    names: [` `,'Elza', 'Vanq']
  },
  'PTC35UP': {
    dropdownCount: 1,
    names: [` `,'Sashka Z', 'Sashka K', 'Valeri']
  },
  'Man BB/CU': {
    dropdownCount: 1,
    names: [` `,'Sashka K', 'Elena E']
  },
  'MQB CLT 1': {
    dropdownCount: 3,
    names: [` `,'Koce', 'Misho']
  },
  'MQB CLT 2': {
    dropdownCount: 3,
    names: [` `,'Koce', 'Misho']
  },
  'MNB CLT 3': {
    dropdownCount: 2,
    names: [` `,'Silvia I', 'Olivia']
  },
  'Touareg': {
    dropdownCount: 1,
    names: [` `,'Rumqna', 'Rayna']
  },
  'MLBevo': {
    dropdownCount: 1,
    names: [` `,'Sashka Z', 'Sashka K']
  },
  'Audi Heck': {
    dropdownCount: 4,
    names: [` `,'Rayna', 'Silvia M', 'Iliyana', `Vili`]
  },
  'MQB 37': {
    dropdownCount: 2,
    names: [` `,'Elena E', 'Emilia']
  },
  'MEB 31': {
    dropdownCount: 2,
    names: [` `,'Magdalena', 'Nina']
  },
  'MFA2': {
    dropdownCount: 3,
    names: [` `,'Danislava', 'Lili', 'Dimitar']
  },
  'MQB CLT Touch': {
    dropdownCount: 4,
    names: [` `,'Svetla', 'Rosi', 'Stefi',`Vanq`]
  },
  'MQB 27 Touch': {
    dropdownCount: 4,
    names: [` `,'Vili', 'Elena K', 'Olivera',`Valeri`]
  }
  // Add more workplaces and names here
};

// Function to remove the workplace line
function removeWorkplaceLine(workplaceElement) {
  const listItem = workplaceElement.parentElement;
  listItem.remove();
}

// Function to populate workplaces and names
function populateWorkplacesAndNames() {
  const workplacesNamesList = document.getElementById('workplaces-names');
  workplacesNamesList.innerHTML = '';

  // Update current date in the footer
  const currentDateElement = document.getElementById('current-date');
  const option = { day: `numeric`, month: `long`, year: `numeric` }
  const currentDate = new Date().toLocaleDateString();
  currentDateElement.textContent = `Date: ${currentDate}`;


  // Populate workplaces and corresponding names
  for (const [workplace, data] of Object.entries(workplaceNames)) {
    const listItem = document.createElement('li');

    const removeButton = document.createElement('button');
    removeButton.textContent = 'X';
    removeButton.addEventListener('click', function() {
      removeWorkplaceLine(this);
    });
    listItem.appendChild(removeButton);

    const workplaceElement = document.createElement('span');
    workplaceElement.textContent = workplace + ': ';
    listItem.appendChild(workplaceElement);

    const dropdowns = [];

    // Create dropdown menus for each workplace name based on dropdownCount
    for (let i = 0; i < data.dropdownCount; i++) {
      const namesElement = document.createElement('select');
      dropdowns.push(namesElement);

      // Create an option for each name
      for (const name of data.names) {
        const option = document.createElement('option');
        option.textContent = name;
        namesElement.appendChild(option);
      }

      // Add event listener to handle name selection
      namesElement.addEventListener('change', function(event) {
        const selectedName = event.target.value;

        // Disable the selected option in the remaining dropdown menus
        const remainingNamesElements = Array.from(document.querySelectorAll('select[name="names"]'));
        remainingNamesElements.forEach(function(element) {
          const options = Array.from(element.options);
          options.forEach(function(option) {
            if (option.value === selectedName) {
              option.disabled = true;
            }
          });
        });
      });

      namesElement.setAttribute('name', 'names');
      listItem.appendChild(namesElement);
    }

    workplacesNamesList.appendChild(listItem);
  }
}

// Call the function to populate the workplaces and names initially
populateWorkplacesAndNames();