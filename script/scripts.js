const generateIdeaBtn = document.getElementById('generate-idea');
const ideaDisplay = document.getElementById('idea-display');
const ideaHistory = document.getElementById('idea-history');
const favoriteIdeas = document.getElementById('favorite-ideas');
const addToFavoritesBtn = document.getElementById('add-to-favorites');
const toggleHistoryBtn = document.getElementById('toggle-history');

let websiteIdeas = [
  'A blog about a particular topic or interest.',
  'A portfolio showcasing their work and accomplishments.',
  'A site for a student club or organization on campus.',
  'A travel blog detailing their adventures and experiences.',
  'A site for a small business or startup idea.',
  "A personal website with an 'About Me' section and resume.",
  'A website for a volunteer group or community service project.',
  'A review site for local restaurants or businesses.',
  'A website for a non-profit organization or charity.',
  'A site for a campus event or conference.',
  'A site for an online store selling homemade goods or crafts.',
  'A site for a fitness or wellness group on campus.',
  'A site for a social media campaign or awareness project.',
  'A site for a political campaign or student government platform.',
  'A site for a language exchange program or language learning resource.',
  'A site for a book club or reading group.',
  'A site for a photography or art portfolio.',
  'A site for a podcast or video series.',
  'A site for a fundraising or crowdfunding campaign.',
  'A site for a research project or academic paper.',
];

let favorites = [];

function toggleHistory() {
  // Toggle the 'hidden' class on the idea history list
  ideaHistory.classList.toggle('hidden');
}

function generateWebsiteIdea() {
  // Choose a random index from the array
  const randomIndex = Math.floor(Math.random() * websiteIdeas.length);
  // Get the website idea at the random index
  const idea = websiteIdeas[randomIndex];

  // Apply the scramble effect to the generated idea
  applyScrambleEffect(ideaDisplay, idea);

  addToHistory(idea);
}

function applyScrambleEffect(element, finalText) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase();
  let interval = null;
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    element.textContent = finalText
      .split('')
      .map((letter, index) => {
        if (index < iteration) {
          return finalText[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join('');

    if (iteration >= finalText.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 2);
}

function addToHistory(idea) {
  // Create a new list item element
  const listItem = document.createElement('li');
  // Set the text content of the list item to the idea
  listItem.textContent = idea;
  // Append the list item to the idea history list
  ideaHistory.appendChild(listItem);
}

function addToFavorites(idea) {
  // Add the idea to the favorites array
  favorites.push(idea);
  // Create a new list item element
  const listItem = document.createElement('li');
  // Set the text content of the list item to the idea
  listItem.textContent = idea;

  // Create a remove button
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.classList.add('remove-favorite');
  removeButton.addEventListener('click', () => removeFromFavorites(idea));

  // Append the remove button to the list item
  listItem.appendChild(removeButton);
  // Append the list item to the favorite ideas list
  favoriteIdeas.appendChild(listItem);
}

function removeFromFavorites(idea) {
  // Find the index of the idea in the favorites array
  const index = favorites.indexOf(idea);
  if (index !== -1) {
    // If the idea is a favorite, remove it from the favorites array
    favorites.splice(index, 1);
    // Remove the favorite from the favorite ideas list
    favoriteIdeas.removeChild(favoriteIdeas.childNodes[index]);
  }
}

function addIdeaToFavorites() {
  // Get the text content of the idea display
  const idea = ideaDisplay.textContent;
  // Check if the idea is already a favorite
  const index = favorites.indexOf(idea);
  if (index === -1) {
    // If the idea is not a favorite, add it to the favorites
    addToFavorites(idea);
  }
}

// Add an event listener to the generate idea button
generateIdeaBtn.addEventListener('click', generateWebsiteIdea);
toggleHistoryBtn.addEventListener('click', toggleHistory);
// Add an event listener to the add to favorites button
addToFavoritesBtn.addEventListener('click', addIdeaToFavorites);
