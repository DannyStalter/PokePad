const powerOnAudio = document.querySelector('#power-on-audio');
// const searchAudio = document.querySelector('#search-audio');
const errorAudio = document.querySelector('#error-audio');
const click1Audio = document.querySelector('#click1-audio');
const click2Audio = document.querySelector('#click2-audio');
const backgroundVideo = document.querySelector('#background-video');
const siteOverlayDark = document.querySelector('.site-overlay-dark');
const pokepadCover = document.querySelector('.pokepad-cover');
const mainScreen = document.querySelector('.main-screen');
const shine = document.querySelector('.shine');
const shineWelcomeScreen = document.querySelector('.shine-welcome-screen');
const welcomeScreen = document.querySelector('.welcome-screen');
const errorScreen = document.querySelector('.error-screen');
const wH1 = document.querySelector('.w-h1');
const wH3 = document.querySelector('.w-h3');
const wP = document.querySelector('.w-p');
const blueLight = document.querySelector('.blue-light');
const redLight = document.querySelector('.red-light');
const yellowLight = document.querySelector('.yellow-light');
const greenLight = document.querySelector('.green-light');
const screenColor = document.querySelector('.screen-color');
const pokeName = document.querySelector('.poke-name');
const pokeId = document.querySelector('.poke-id');
const pokeImage = document.querySelector('.poke-image');
const pokeTypeOne = document.querySelector('.poke-type-one');
const pokeTypeTwo = document.querySelector('.poke-type-two');
const pokeWeight = document.querySelector('.poke-weight');
const pokeHeight = document.querySelector('.poke-height');
const pokeDescriptionButtonLeft = document.querySelector('.p-d-b-left');
const pokeDescriptionButtonRight = document.querySelector('.p-d-b-right');
const statsContainer = document.querySelector('.stats-container');
const descriptionContainer = document.querySelector('.description-container');
const abilityContainer = document.querySelector('.ability-container');
const pokeAbilityName = document.querySelector('.poke-ability-name');
const pokeAbilityDescription = document.querySelector('.poke-ability-description');
const pokeDescription = document.querySelector('.poke-description');
const hp = document.querySelector('#hp-bar');
const attack = document.querySelector('#attack-bar');
const defense = document.querySelector('#defense-bar');
const spatk = document.querySelector('#spatk-bar');
const spdef = document.querySelector('#spdef-bar');
const speed = document.querySelector('#speed-bar');
const userSearch = document.querySelector('#user-search');
const searchButton = document.querySelector('#search-button');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const pokeShiny = document.querySelector('.poke-shiny');
const pokeRotate = document.querySelector('.poke-rotate');
const homeButton = document.querySelector('.home-button');


const TYPES = [
  'normal', 'fighting', 'flying',
  'poison', 'ground', 'rock',
  'bug', 'ghost', 'steel',
  'fire', 'water', 'grass',
  'electric', 'psychic', 'ice',
  'dragon', 'dark', 'fairy'
];

const resetScreen = () => {
  screenColor.classList.remove('hide');
  welcomeScreen.classList.add('hide');
  errorScreen.classList.add('hide');
  for (const type of TYPES) {
    screenColor.classList.remove(type);
    pokeTypeOne.classList.remove(type + '-type-box');
    pokeTypeTwo.classList.remove(type + '-type-box');
  }
};


const capitalize = (str) => str[0].toUpperCase() + str.substr(1);
const lowercase = (str) => str[0].toLowerCase() + str.substr(1);

// Disable Searching until PokePad's Home Button is pressed
userSearch.disabled = true;
$(searchButton).css('pointer-events', 'none');


document.getElementById('user-search').value = '';


const handleHomeButtonClick = () => {

  if ($(welcomeScreen).hasClass('hide') && $(screenColor).hasClass('hide') && $(errorScreen).hasClass('hide')) {

    //Reset Cover Screen Animations
    click1Audio.volume = 0.25;
    click2Audio.volume = 0.08;
    click1Audio.play();
    setTimeout(function() {
      click2Audio.play();
    }, 1880);
    pokepadCover.classList.remove("pokepad-cover-slide-right")
    pokepadCover.classList.remove("pokepad-cover-slide-left")
    // Open Pokepad Cover
    $(pokepadCover).addClass("pokepad-cover-slide-right")
    .on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(e) {
     $(this).addClass('pokepad-cover-slide-left');
     $(this).addClass('pokepad-cover-hide');
    });

    // Brighten website (powering on effect)
    siteOverlayDark.classList.add('hide');
    // Hide Error Screen if Home Button clicked after a search error
    errorScreen.classList.add('hide');
    // Remove 'Hide' class from WelcomeScreen to turn on screen
    welcomeScreen.classList.remove('hide');
    welcomeScreen.classList.add('w-screen-fade-in');
    wH1.classList.add('w-h1-animation');
    wH3.classList.add('w-h3-animation');
    wP.classList.add('w-p-animation');
    shineWelcomeScreen.classList.remove('hide');
    // Play audio with a delay of 1.575 seconds
    powerOnAudio.volume = 0.2;
    setTimeout(function() {
      powerOnAudio.play();
    }, 1575); //2200?
    // Turn on Lights
    blueLight.classList.add('blue-light-on');
    redLight.classList.add('red-light-on');
    yellowLight.classList.add('yellow-light-on');
    greenLight.classList.add('green-light-on');
    // Turn Searching "on" and insert Placeholder text
    $(userSearch).attr('placeholder', 'Search!');
    userSearch.disabled = false;
    searchButton.classList.add('search-button-color');
    $(searchButton).css('pointer-events', '');
    // Remove Home Button pulse
    homeButton.classList.remove('home-button-pulse');
  } else {
    //Reset Cover Screen Animations
    pokepadCover.classList.remove("pokepad-cover-slide-right")
    pokepadCover.classList.remove("pokepad-cover-slide-left")
    // Close Pokepad Cover
    click2Audio.play();
    setTimeout(function() {
      click1Audio.play();
    }, 1880);
    $(pokepadCover).addClass("pokepad-cover-slide-right")
    .on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(e) {
     $(this).addClass('pokepad-cover-slide-left');
     $(this).removeClass('pokepad-cover-hide');
    });
    // Darken website (powering off effect) ?
    // siteOverlayDark.classList.remove('hide');
    // Stops powerOnAudio if currently playing
    powerOnAudio.pause();
    powerOnAudio.src = powerOnAudio.src;
    // Screen back to black
    welcomeScreen.classList.add('hide');
    screenColor.classList.add('hide');
    errorScreen.classList.add('hide');
    shineWelcomeScreen.classList.add('hide');
    // Turn off lights
    blueLight.classList.remove('blue-light-on');
    redLight.classList.remove('red-light-on');
    yellowLight.classList.remove('yellow-light-on');
    greenLight.classList.remove('green-light-on');
    redLight.classList.remove('red-light-search');
    yellowLight.classList.remove('yellow-light-search');
    greenLight.classList.remove('green-light-search');
    // Turn Searching back "off", remove Placeholder text
    $(userSearch).removeAttr('placeholder');
    userSearch.disabled = true;
    document.getElementById('user-search').value = '';
    searchButton.classList.remove('search-button-color');
    $(searchButton).css('pointer-events', 'none');
    // Add back Home Button pulse
    homeButton.classList.add('home-button-pulse');
  }


  // Prev and Next Button Functionality
  const handlePrevButtonClick = () => {
    var searchId;
    searchId = $(pokeId).text();

    if (searchId == 001) return;
    else {
      searchId--;
      document.getElementById('user-search').value = searchId;
      searchButton.click();
    }
  }
  const handleNextButtonClick = () => {
    var searchId;
    searchId = $(pokeId).text();
    if (searchId == 898) return;
    else {
      searchId++;
      document.getElementById('user-search').value = searchId;
      searchButton.click();
    }
  }


  // Swap Between Stats and Description sections

  const handleDescriptionButtonClick = () => {
    if (stats == true) {
      statsContainer.classList.add('hide');
      descriptionContainer.classList.remove('hide');
      abilityContainer.classList.remove('hide');
      stats = false;
      description = true;
    } else {
      statsContainer.classList.remove('hide');
      descriptionContainer.classList.add('hide');
      abilityContainer.classList.add('hide');
      stats = true;
      description = false;
    }
  }
  pokeDescriptionButtonLeft.addEventListener('click', handleDescriptionButtonClick);
  pokeDescriptionButtonRight.addEventListener('click', handleDescriptionButtonClick);
  prevButton.addEventListener('click', handlePrevButtonClick);
  nextButton.addEventListener('click', handleNextButtonClick);


  const handleSearchButtonClick = () => {

    let userSearch = lowercase(document.getElementById('user-search').value);

    // console.log(userSearch);

    // Reset animated search lights
    redLight.classList.remove('red-light-on');
    yellowLight.classList.remove('yellow-light-on');
    greenLight.classList.remove('green-light-on');
    redLight.classList.remove('red-light-search');
    yellowLight.classList.remove('yellow-light-search');
    greenLight.classList.remove('green-light-search');
    // Reset screen shine effect for new Pokemon search
    shineWelcomeScreen.classList.add('hide');
    shine.classList.add('hide');
    // Reset to Stats section and hide Description section.
    statsContainer.classList.remove('hide');
    abilityContainer.classList.add('hide');
    descriptionContainer.classList.add('hide');



    fetch('https://pokeapi.co/api/v2/pokemon/' + userSearch)
      .then(res => {
        if (!res.ok) {
          redLight.classList.add('red-light-search');
          screenColor.classList.add('hide');
          welcomeScreen.classList.add('hide');
          shine.classList.remove('hide');
          errorScreen.classList.remove('hide');
          errorAudio.volume = 0.2;
          errorAudio.play();
        }
        return res.json();
      })

      .then(data => {
        resetScreen();
        // Play Search audio
        // searchAudio.volume = 0.07;
        // searchAudio.play();

        stats = true;
        description = false;
        // Trigger animated search lights
        redLight.classList.add('red-light-search');
        yellowLight.classList.add('yellow-light-search');
        greenLight.classList.add('green-light-search');
        // Reset screen shine animation and remove Shiny button light
        pokeShiny.classList.remove('poke-shiny-light');
        shine.classList.remove('hide');

        // Pokemon's ID value pulled and stored in searchId. May be redundant with userSearch. URL for Pokemon's ability stored.
        const searchId = data['id'];

        // Fetch for Pokemon flavor text
        fetch('https://pokeapi.co/api/v2/pokemon-species/' + searchId)
          .then(res => res.json())
          .then(data => {
            // Get all English flavor descriptions, save the last one to var engFlavor
            var flavor = data['flavor_text_entries'];
            // console.log(flavor);
            var engFlavor;
            for (var i = 0; i < flavor.length; i++) {
              if (data['flavor_text_entries'][i]['language']['name'] == 'en') {
                engFlavor = '"' + data['flavor_text_entries'][i]['flavor_text'] + '"';
              }
            }
            pokeDescription.textContent = engFlavor;
          })



        //Fetch for Pokemon ability

        // Hide Ability section if data[ablities] returns undefined
        if (!Array.isArray(data['abilities']) || !data['abilities'].length) {
          pokeAbilityName.classList.add('hide');
          pokeAbilityDescription.classList.add('hide');
        } else {
          const abilityUrl = data['abilities']['0']['ability']['url'] || '';
          pokeAbilityName.classList.remove('hide');
          pokeAbilityDescription.classList.remove('hide');

          fetch(abilityUrl)
            .then(res => {
              if (!res.ok) {
                console.log(res);
              }
              return res.json();
            })
            .then(data => {
              pokeAbilityName.textContent = 'Ability: ' + capitalize(data['name']);

              var abilityDesc = data['flavor_text_entries'];
              // console.log(abilityDesc);
              var engAbilityDesc;
              for (var i = 0; i < abilityDesc.length; i++) {
                if (data['flavor_text_entries'][i]['language']['name'] == 'en') {
                  engAbilityDesc = data['flavor_text_entries'][i]['flavor_text'];
                }
              }
              pokeAbilityDescription.textContent = engAbilityDesc;
            })
        }


        // Pokemon Image Handling
        let frontDefault = data['sprites']['front_default'] || '';
        let backDefault = data['sprites']['back_default'] || '';
        let frontShiny = data['sprites']['front_shiny'] || '';
        let backShiny = data['sprites']['back_shiny'] || '';
        let front = true;
        let back = false;
        let shinyFront = false;
        let shinyBack = false;
        let pokeShinyLight = false;

        const handlePokeRotateClick = () => {
          if (front == true) { //If Pokemon is not shiny and facing front, face it backwards.
            $(pokeImage).attr('src', backDefault);
            shinyFront = false;
            shinyBack = false;
            front = false;
            back = true;
          } else if (back == true) { //If Pokemon is not shiny and facing back, face it forwards.
            $(pokeImage).attr('src', frontDefault);
            shinyFront = false;
            shinyBack = false;
            front = true;
            back = false;
          } else if (shinyFront == true) { //If Pokemon is shiny and facing front, face it backwards.
            $(pokeImage).attr('src', backShiny);
            shinyFront = false;
            front = false;
            back = false;
            shinyBack = true;
          } else if (shinyBack == true) { //If Pokemon is shiny and facing back, face it forwards.
            $(pokeImage).attr('src', frontShiny);
            shinyFront = true;
            shinyBack = false;
            front = false;
            back = false;
          }
        }

        const handlePokeShinyClick = () => {

          if (shinyFront == false && shinyBack == false && back == false) { //If Pokemon is not shiny and is facing front, change to frontShiny.
            $(pokeImage).attr('src', frontShiny);
            shinyFront = true;
            shinyBack = false;
            front = false;
            back = false;
          } else if (shinyBack == true && back == false) { //If Pokemon is shiny and facing back, change to backDefault.
            $(pokeImage).attr('src', backDefault);
            shinyFront = false;
            shinyBack = false;
            front = false;
            back = true;
          } else if (shinyBack == false && back == true) { //If Pokemon is not shiny and facing back, change to backShiny.
            $(pokeImage).attr('src', backShiny);
            shinyFront = false;
            shinyBack = true;
            front = false;
            back = false;
          } else { //If Pokemon is shiny and facing front, change to frontDefault.
            $(pokeImage).attr('src', frontDefault);
            shinyFront = false;
            shinyBack = false;
            front = true;
            back = false;
          }

          if (pokeShinyLight == false) {
            pokeShiny.classList.add('poke-shiny-light');
            pokeShinyLight = true;
          } else {
            pokeShiny.classList.remove('poke-shiny-light');
            pokeShinyLight = false;
          }

        }

        pokeRotate.addEventListener('click', handlePokeRotateClick);
        pokeShiny.addEventListener('click', handlePokeShinyClick);
        pokeId.textContent = data['id'].toString().padStart(3, '0') + '\xa0';
        pokeName.textContent = capitalize(data['name']);

        pokeImage.src = data['sprites']['front_default'] || '';


        // Handle Stats bars. Hide bars if data['stats'] is undefined.
        if (!Array.isArray(data['stats']) || !data['stats'].length) {
          statsContainer.classList.add('hide');
        } else {
          statsContainer.classList.remove('hide');
          const hpData = data['stats']['0']['base_stat'] || '';
          const attackData = data['stats']['1']['base_stat'] || '';
          const defenseData = data['stats']['2']['base_stat'] || '';
          const spatkData = data['stats']['3']['base_stat'] || '';
          const spdefData = data['stats']['4']['base_stat'] || '';
          const speedData = data['stats']['5']['base_stat'] || '';

          // Populate Stat Bars
          hp.textContent = hpData;
          hp.setAttribute("style", "width: " + hpData + "%; background-color: #FF0000;");
          attack.textContent = attackData;
          attack.setAttribute("style", "width: " + attackData + "%; background-color: #F08030;");
          defense.textContent = defenseData;
          defense.setAttribute("style", "width: " + defenseData + "%; background-color: #F8D030;");
          spatk.textContent = spatkData;
          spatk.setAttribute("style", "width: " + spatkData + "%; background-color: #6890F0;");
          spdef.textContent = spdefData;
          spdef.setAttribute("style", "width: " + spdefData + "%; background-color: #78C850;");
          speed.textContent = speedData;
          speed.setAttribute("style", "width: " + speedData + "%; background-color: #F85888;");
        }

        // Type Logic
        const dataTypes = data['types'];
        const dataFirstType = dataTypes[0];
        const dataSecondType = dataTypes[1];

        pokeTypeOne.textContent = capitalize(dataFirstType['type']['name']);

        if (dataSecondType) {
          pokeTypeTwo.classList.remove('type-hide');
          pokeTypeTwo.textContent = capitalize(dataSecondType['type']['name']);
          pokeTypeTwo.classList.add(dataSecondType['type']['name'] + '-type-box');
        } else {
          pokeTypeTwo.classList.add('type-hide');
          pokeTypeTwo.textContent = '';
        }

        screenColor.classList.add(dataFirstType['type']['name']);
        pokeTypeOne.classList.add(dataFirstType['type']['name'] + '-type-box');

        // ??? Background video LOL - it's an idea
        // backgroundVideo.setAttribute('src', 'videos/' + dataFirstType['type']['name'] + '.mp4' );

        pokeWeight.textContent = data['weight'];
        pokeHeight.textContent = data['height'];

        // Clear search bar
        document.getElementById('user-search').value = '';
      })
  }

  // Only allow Search when PokePad is turned ON
  searchButton.addEventListener('click', handleSearchButtonClick);

}; //End of handleHome

userSearch.addEventListener('keyup', function(e) {
  if (e.code === 'Enter') {
    searchButton.click();
  }
});

homeButton.addEventListener('click', handleHomeButtonClick);
