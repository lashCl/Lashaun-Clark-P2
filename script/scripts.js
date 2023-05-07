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
  'A site for a student-run newspaper or magazine.',
  'A site for an online course or educational resource.',
  'A site for a group or club focused on a particular hobby or interest.',
  'A site for a tech startup or entrepreneurial project.',
  'A site for a campus job board or employment resource.',
  'A site for a student-run radio station or podcast network.',
  'A site for a campus or community theater group.',
  'A site for a student-run film festival or screening series.',
  'A site for a campus sustainability initiative or environmental group.',
  'A site for a student-run tutoring service or academic resource center.',
  'A site for a local history project or cultural archive.',
  'A site for a student-run mental health support group or resource center.',
  'A site for a student-run sports team or club.',
  'A site for a group or club focused on social justice or activism.',
  'A site for a student-run fashion or design collective.',
  'A site for a campus language or cultural exchange program.',
  'A site for a student-run literary magazine or creative writing group.',
  'A site for a student-run music festival or concert series.',
  'A site for a campus esports team or gaming club.',
  'A site for a student-run culinary or cooking club.',
  'A site for a student-run makerspace or innovation lab.',
  'A site for a campus religious or spiritual group.',
  'A site for a student-run hackathon or programming competition.',
  'A site for a group or club focused on personal development or growth.',
  'A site for a campus debate or public speaking group.',
  'A site for a student-run charity or philanthropy organization.',
  'A site for a campus LGBTQ+ group or resource center.',
  'A site for a student-run fashion or design magazine.',
  'A site for a campus outdoor or adventure club.',
  'A site for a student-run debate or Model UN team.',
  'A site for a group or club focused on entrepreneurship or startups.',
  'A site for a campus international student organization or resource center.',
  'A site for a student-run robotics or engineering club.',
  'A site for a campus dance or performance group.',
  'A site for a student-run food bank or pantry.',
  'A site for a group or club focused on mindfulness or meditation.',
  'A site for a campus cultural or diversity organization.',
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

  ideaDisplay.style.display = 'block';
  addToFavoritesBtn.style.display = 'inline-block';
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
