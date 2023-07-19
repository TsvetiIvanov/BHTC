// Sample list of workplaces and corresponding names
const workplaceNames = {
  'CMF1': {
    dropdownCount: 3,
    names: [` `, `Sashka Z`, `Sashka K`, `Silvia I`, `Nadejda`, `Elena E`, `Dimitar`, `Nina`, `Emilia`, `Marinela`, `Rumqna S`, `Silvia L`, `Konstantin`, `Zvezdelina`]
  },
  'VolvoBB-CU': {
    dropdownCount: 1,
    names: [` `,`Sashka Z`, `Magdalena`, `Sashka K`]
  },
  'VolvoSpa': {
    dropdownCount: 1,
    names: [` `,`Sashka Z`, `Nadejda`, `Sashka K`, `Magdalena`, `Danislava`, `Iliyana`]
  },
  'Man BB/CU': {
    dropdownCount: 1,
    names: [` `,`Sashka K`, `Elena E`, `Vanq`, `Marinela`]
  },
  'BR 1': {
    dropdownCount: 2,
    names: [` `, `Zvezdelina`, `Silvia I`, `Nadejda`, `Sashka K`, `Sashka Z`, `Nina`, `Silvia L`, `Valeri`, `Danislava`, `Dimitar`, `Iliyana`, `Magdalena`, `Margarita`, `Marinela`, `Rosica`, `Rumqna S`, `Silvia M`]
  },
  'BR 2': {
    dropdownCount: 1,
    names: [` `, `Zvezdelina`, `Silvia I`, `Nadejda`, `Sashka K`, `Sashka Z`, `Nina`, `Silvia L`, `Valeri`, `Danislava`, `Dimitar`, `Iliyana`, `Magdalena`, `Margarita`, `Marinela`, `Rosica`, `Rumqna S`, `Silvia M`, `Elena M`]
  },
  'MFA2': {
    dropdownCount: 3,
    names: [` `, `Danislava`, `Liliyana`, `Dimitar`, `Ali`, `Zvezdelina`, `Elza`, `Rayna`, `Rosica`, `Svetla`, `Silvia M`, `Stefka`]
  },
  'Scania': {
    dropdownCount: 1,
    names: [` `, `Elza`, `Vanq`, `Georgi`, `Svetla`]
  },
  'PTC35UP': {
    dropdownCount: 1,
    names: [` `, `Sashka Z`, `Sashka K`, `Valeri`, `Elena E`, `Marinela`, `Elena K`]
  },
  'MQB Heck' : {
    dropdownCount: 5,
    names: [` `, `Dimitar`, `Konstantin`, `Elena E`, `Vanq`, `Rumqna D`, `Sevdelin`, `Mihail`, `Svetla`, `Valeri`, `Stefka`, `Violeta`, `Elena K`, `Margarita`]
  },
  'MQB 27' : {
    dropdownCount: 3,
    names: [` `, `Rumqna S`, `Sevdelin`, `Angel`, `Zvezdelina`, `Rumqna D`, `Vanq`, `Danislava`, `Elza`, `Iliyana`, `Rayna`, `Rosica`, `Svetla`, `Stefka`, `Konstantin`, `Margarita`]
  },
  'MQB CLT 1': {
    dropdownCount: 3,
    names: [` `, `Konstantin`, `Liliyana`, `Mihail`, `Alexander`, `Dimitar`, `Silvia I`, `Angel`, `Valeri`, `Vanq`, `Violeta`, `Danislava`, `Elena K`, `Elena E`, `Elza`, `Emilia`, `Zvezdelina`, `Iliyana`, `Rayna`, `Rosica`, `Rumqna S`, `Rumqna D`, `Sashka Z`, `Svetla`, ` Sevdelin`, `Silvia M`, `Silvia L`, `Stefka`]
  },
  'MQB CLT 2': {
    dropdownCount: 3,
    names: [` `, `Konstantin`, `Liliyana`, `Mihail`, `Alexander`, `Dimitar`, `Silvia I`, `Angel`, `Valeri`, `Vanq`, `Violeta`, `Danislava`, `Elena K`, `Elena E`, `Elza`, `Emilia`, `Zvezdelina`, `Iliyana`, `Rayna`, `Rosica`, `Rumqna S`, `Rumqna D`, `Sashka Z`, `Svetla`, ` Sevdelin`, `Silvia M`, `Silvia L`, `Stefka`]
  },
  'MNB CLT 3': {
    dropdownCount: 2,
    names: [` `, `Liliyana`, `Dimitar`, `Alexander`, `Angel`, `Valeri`, `Vili`, `Danislava`, `Elena K`, `Elza`, `Emilia`, `Zvezdelina`, `Iliyana`, `Rayna`, `Rosica`, `Rumqna D`, `Svetla`, ` Sevdelin`, `Silvia M`, `Stefka`]
  },
  'MQB CLT 5': {
    dropdownCount: 1,
    names: [` `, `Valeri`, `Vanq`, `Violeta`, ` Danislava`, `Elza`, `Dimitar`, `Zvezdelina`, `Nadejda`, `Rayna`, `Rumqna D`, `Sashka Z`, `Svetla`, `Elena M`]
  },
  'Touareg': {
    dropdownCount: 1,
    names: [` `, `Vanq`, `Elena E`, `Svetla`, `Stefka`]
  },
  'MLBevo': {
    dropdownCount: 1,
    names: [` `, `Sashka Z`, `Sashka K`, `Marinela`]
  },
  'Audi Heck': {
    dropdownCount: 4,
    names: [` `, `Rayna`, `Silvia M`, `Iliyana`, `Violeta`, `Emilia`, `Albina`, `Margarita`, `Svetla`, `Stefka`]
  },
  'MQB 37': {
    dropdownCount: 2,
    names: [` `, `Elena E`, `Emilia`, `Magdalena`, `Nina`, `Rumqna S`, `Anton`, `Nadejda`, `Danislava`, `Elza`, `Iliyana`, `Margarita`, `Rosica`, `Svetla`, `Angel`]
  },
  'MEB 31': {
    dropdownCount: 2,
    names: [` `, `Elena E`, `Emilia`, `Magdalena`, `Nina`, `Rumqna S`, `Nadejda`, `Danislava`, `Elza`, `Iliyana`, `Margarita`, `Rosica`, `Svetla`, `Angel`]
  },
  'ITOS 1': {
    dropdownCount: 5,
    names: [` `, `Elena M`, `Rumqna S`, `Katq`, `Marinela`, `Silvia L`, `Elena K`, `Nadejda`, `Elena E`, `Elza`, `Zvezdelina`, `Margarita`, `Danislava`, `Vanq`, `Nikolai`]
  },
  'ITOS 2': {
    dropdownCount: 5,
    names: [` `, `Elena M`, `Rumqna S`, `Katq`, `Marinela`, `Silvia L`, `Elena K`, `Nadejda`, `Elena E`, `Elza`, `Zvezdelina`, `Margarita`, `Danislava`, `Vanq`, `Nikolai`]
  },
  'MRA2 Rear': {
    dropdownCount: 2,
    names: [` `, `Marinela`, `Valeri`, `Violeta`, `Silvia M`, `Vanq`, `Margarita`, `Svetla`, `Tatqna`]
  },
  'MQB CLT Touch': {
    dropdownCount: 4,
    names: [` `, `Svetla`, `Rosica`, `Stefka`, `Vanq`, `Valeri`, `Margarita`, `Olivera`, `Sevdelin`, `Rumqna D`]
  },
  'MQB 27 Touch': {
    dropdownCount: 4,
    names: [` `, `Violeta`, `Elena K`, `Olivera`, `Valeri`, `Tatqna`, `Margarita`, `Elza`, `Shani`, `Vanq`, `Zvezdelina`, `Rumqna D`, `Sevdelin`, `Stefka`, `Elena E`]
  },
  'BMW': {
    dropdownCount: 7,
    names: [` `, `Silvia L`, `Maagdalena`, `Emilia`, `Danislava`, `Katq`, `Nikolai`, `Valeri`]
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
	  
      // Add a blank space option
      const blankOption = document.createElement('option');
      blankOption.value = ""; // Value for the blank space option
      blankOption.textContent = ""; // Text for the blank space option
      namesElement.insertBefore(blankOption, namesElement.firstChild);

      // Add event listener to handle name selection
      namesElement.addEventListener('change', function(event) {
        const selectedName = event.target.value;

        // Show previously hidden name if blank space is selected
        if (selectedName === "") {
          const remainingNamesElements = Array.from(document.querySelectorAll('select[name="names"]'));
          remainingNamesElements.forEach(function(element) {
            const options = Array.from(element.options);
            options.forEach(function(option) {
              option.style.display = ''; // Show the previously hidden option
            });
          });
        } else {
          // Hide the selected option in the remaining dropdown menus
          const remainingNamesElements = Array.from(document.querySelectorAll('select[name="names"]'));
          remainingNamesElements.forEach(function(element) {
            const options = Array.from(element.options);
            options.forEach(function(option) {
              if (option.value === selectedName) {
                option.style.display = 'none';
              }
            });
          });
        }
      });

      namesElement.setAttribute('name', 'names');
      listItem.appendChild(namesElement);
    }

    workplacesNamesList.appendChild(listItem);
  }
}

// Call the function to populate the workplaces and names initially
populateWorkplacesAndNames();