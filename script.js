/*
Title: MedWordle
Description: Wordle with medical terms
Last Updated: Oct 6, 2023
Developer: Alexander Beck
Email: beckhv2@gmail.com
Github: https://github.com/bexcoding
*/

const wordList = ['cloned', 'serum', 'grafts', 'stitch', 'molar', 'socket', 'splint', 'hiatal', 'bodily', 'cough', 'hands', 'washed', 'pound', 'waste', 'impair', 'lance', 'laser', 'injury', 'vagal', 'fecal', 'botch', 'crazy', 'dizzy', 'dwarf', 'ovary', 'sprain', 'naked', 'abcess', 'morbid', 'bedbug', 'nares', 'value', 'cystic', 'gauge', 'talus', 'serial', 'alpha', 'cheek', 'acidic', 'spasm', 'silent', 'ketone', 'twins', 'tears', 'cable', 'atrium', 'anemic', 'pacing', 'carpal', 'thecal', 'probe', 'bruit', 'enemas', 'width', 'wedge', 'lipase', 'breast', 'auras', 'distal', 'exude', 'coccyx', 'uvula', 'access', 'dimer', 'abrupt', 'latex', 'liver', 'webbed', 'radial', 'watch', 'tampon', 'tonsil', 'maalox', 'drink', 'broke', 'ataxic', 'moral', 'atomic', 'injure', 'myopic', 'graph', 'memory', 'iliac', 'intern', 'cloth', 'spine', 'croup', 'charts', 'digit', 'gluten', 'sodium', 'helper', 'bowel', 'iodine', 'vector', 'cecum', 'filter', 'liquid', 'abrade', 'belly', 'bloat', 'canal', 'meatus', 'graft', 'tumor', 'bruise', 'sleep', 'peptic', 'basal', 'edema', 'caudal', 'lancet', 'crests', 'airway', 'cornea', 'bitter', 'brace', 'shower', 'genes', 'thrill', 'lupus', 'toxins', 'navel', 'malady', 'fiber', 'hunger', 'thorax', 'cervix', 'aerobe', 'breath', 'close', 'period', 'plaque', 'lipid', 'polyps', 'badge', 'smell', 'saline', 'alkali', 'sinus', 'sweat', 'knife', 'banded', 'absorb', 'clamp', 'smoke', 'chest', 'eating', 'colon', 'artery', 'glands', 'nitro', 'myopia', 'uterus', 'wrist', 'helium', 'excess', 'bubble', 'immune', 'anoxic', 'pelvic', 'autism', 'itchy', 'embed', 'nurse', 'mucous', 'infest', 'septal', 'absent', 'anuria', 'renal', 'rhythm', 'linear', 'uptake', 'recess', 'spasms', 'vocal', 'deeply', 'pills', 'aspect', 'throat', 'tracts', 'suture', 'mammal', 'hairy', 'aortic', 'nodule', 'waist', 'stable', 'stent', 'emesis', 'zygote', 'patent', 'remote', 'masked', 'plane', 'human', 'infect', 'parent', 'closed', 'spines', 'helix', 'thrush', 'puffs', 'teeth', 'fevers', 'fluid', 'disks', 'defect', 'nails', 'wound', 'adduct', 'sponge', 'tarsal', 'heels', 'sleeve', 'inject', 'chord', 'bases', 'ulcer', 'mallet', 'agony', 'cleft', 'obtund', 'flexor', 'rectum', 'anoxia', 'aorta', 'cramps', 'trauma', 'cavity', 'sputum', 'fossa', 'weight', 'asthma', 'herbal', 'tibia', 'nylon', 'ureter', 'fungus', 'axonal', 'tibial', 'scrub', 'crotch', 'spinal', 'active', 'shins', 'medial', 'bypass', 'dimple', 'mutant', 'hairs', 'sacrum', 'brain', 'rusty', 'ingest', 'pupils', 'gallon', 'warmth', 'widow', 'apnea', 'mother', 'toilet', 'values', 'alloy', 'thigh', 'dilate', 'basic', 'orbit', 'slice', 'deadly', 'uremic', 'pulse', 'bodies', 'ablate', 'gland', 'paddle', 'bloody', 'obese', 'remedy', 'acids', 'stress', 'abduct', 'ampule', 'emetic', 'biceps', 'adsorb', 'yield', 'drill', 'chills', 'board', 'drunk', 'staff', 'blind', 'bunion', 'muscle', 'chart', 'facial', 'joints', 'plasma', 'cramp', 'floss', 'elbow', 'dream', 'corpse', 'vomit', 'pains', 'valve', 'metal', 'normal', 'voice', 'flush', 'degree', 'lanced', 'lobes', 'probes', 'enema', 'gamma', 'hoarse', 'apneic', 'fascia', 'biopsy', 'repair', 'bicarb', 'sling', 'tetany', 'tongue', 'dental', 'inhale', 'sleepy', 'gonads', 'wheeze', 'angina', 'repeat', 'event', 'herpes', 'drops', 'blink', 'earwax', 'ounce', 'bands', 'woven', 'ectopy', 'drowsy', 'pedal', 'cysts', 'error', 'ataxia', 'tubes', 'venous', 'saliva', 'stents', 'hives', 'heart', 'lumen', 'water', 'vision', 'menses', 'retina', 'tract', 'micron', 'tender', 'nodes', 'fluoro', 'urine', 'kelvin', 'fatal', 'flesh', 'focal', 'local', 'larynx', 'apical', 'prone', 'eczema', 'slits', 'energy', 'liter', 'dermis', 'volume', 'planes', 'lethal', 'attack', 'vital', 'pimple', 'viral', 'dosage', 'child', 'female', 'vapor', 'stylet', 'trunk', 'skull', 'bedpan', 'septum', 'fungi', 'blood', 'excite', 'dilute', 'series', 'liquor', 'biotin', 'shunt', 'pseudo', 'molars', 'lymph', 'polyp', 'marrow', 'wisdom', 'ostomy', 'gender', 'axilla', 'rigid', 'linen', 'ethics', 'tumors', 'cycle', 'valves', 'diaper', 'labor', 'clone', 'coarse', 'yellow', 'gonad', 'opioid', 'pelvis', 'dense', 'crest', 'bowleg', 'cells', 'intake', 'oxygen', 'hiccup', 'declot', 'agonal', 'infant', 'urinal', 'panic', 'nasal', 'anuric', 'femur', 'optic', 'patch', 'waves', 'verbal', 'extra', 'bonds', 'tubal', 'right', 'donor', 'rectal', 'drift', 'anemia', 'palmar', 'pallor', 'colons', 'tremor', 'tendon', 'lesion', 'yeast', 'canker', 'trunks', 'toxic', 'cancer', 'notch', 'buccal', 'feces', 'phobia', 'lumbar', 'meter', 'joule', 'joint', 'analog', 'digest', 'record', 'broken', 'tablet', 'eyelid', 'spores', 'coffee', 'uremia', 'pupil', 'bones', 'opiate', 'lucid', 'death', 'pores', 'signal', 'vessel', 'asprin', 'dorsal', 'scale', 'toxin', 'serous', 'bleed', 'binder', 'axons', 'excise', 'fever', 'ducts', 'lactic', 'minor', 'chill', 'deafen', 'brush', 'emboli', 'barium', 'cyclic', 'chemo', 'fusion', 'amber', 'stoma', 'chews', 'skinny', 'finger', 'fungal', 'canals', 'barbed', 'spore', 'albino', 'slide', 'spleen', 'empty', 'canula', 'maggot', 'proton', 'latent', 'waking', 'solute', 'apexes'];
const day1 = new Date(2023, 8, 15, 6, 0, 0);
// 86400000 is number of ms in 1 day
const currentWord = wordList[Math.floor((Date.now() - day1) / 86400000)];
const wordLength = currentWord.length;
let letters = [];
let gameWon = false;
let gameLost = false;
let currentRow = 0;
let currentGuess = "";
let currentGuessLength = 0;
let currentGuessId = 0;


window.addEventListener('load', () => {
    makeTiles(wordLength);
    // make letter list for all letters in the word
    for(i in currentWord){
        letters.push(currentWord[i]);
    };
});


// handle keypresses
window.addEventListener('keydown', (event) => {
    if(event.key === 'Backspace') {
        subtractLetter();
    } else if(event.key === 'Enter') {
        checkAnswer(currentGuess);
    } else if(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].includes(event.key)) {
        addLetter(event.key);
    };
});


/**
 * makes tiles where guessed letters appear
 * @param {number} col - number of columns; either 5 or 6
 */
function makeTiles(col) {
    const grid = document.getElementById('game-grid');
    // adds extra column when word is six characters instead of 5
    if(col === 6) {
        grid.style.gridTemplateColumns = 'repeat(6, 62px)';
    };
    for(i = 0; i < (6 * col); i++) {
        let tile = document.createElement('div');
        tile.setAttribute('id', i);
        tile.setAttribute('class', 'game-tile');
        grid.appendChild(tile);
    };
}


/**
 * adds letter to the gameboard
 * @param {string} letter - the letter being guessed
 */
function addLetter(letter) {
    // only attempt to add letters if game is still going
    if(gameWon || gameLost) {
        console.log('game over; keyboard deactivated');
    } else if(currentGuessLength < wordLength) {
        document.getElementById(currentGuessId).innerHTML = letter.toUpperCase();
        currentGuess += letter;
        currentGuessLength += 1;
        currentGuessId += 1;
    };
}


/**
 * deletes letter from the gameboard
 */
function subtractLetter() {
    // only subtracts letters if there are letters on the gameboard
    if(currentGuessLength > 0) {
        currentGuessId -= 1;
        currentGuessLength -= 1;
        currentGuess = currentGuess.slice(0, -1);
        document.getElementById(currentGuessId).innerHTML = "";
    };
}


/**
 * checks if the current guess is correct and updates board with hints
 * @param {string} guess - the current guess being checked
 */
function checkAnswer(guess) {
    // valid guess length
    if(guess.length === wordLength) {
        let startId = wordLength * currentRow;
        // reset list of letters in word for each guess
        letters = [];
        for(i in currentWord){
            letters.push(currentWord[i]);
        };
        currentGuess = "";
        currentGuessLength = 0;
        for(i in guess) {
            let currentItem = document.getElementById((Number(i) + startId));
            let currentKey = document.getElementById(guess[i]);
            if(guess[i] === currentWord[i]){
                letters[i] = '';
                // letter is correct
                setTimeout(() => {
                    currentItem.style.backgroundColor = 'var(--green)';
                    currentKey.style.backgroundColor = 'var(--green)';
                }, (Number(i) * 750));
            } else if(letters.includes(guess[i])){
                // letter present
                setTimeout(() => {
                    currentItem.style.backgroundColor = 'var(--yellow)';
                    if(currentKey.style.backgroundColor != 'var(--green)') {
                        currentKey.style.backgroundColor = 'var(--yellow)';
                    }
                }, (Number(i) * 750));
            } else {
                // letter not present
                setTimeout(() => {
                    currentItem.style.backgroundColor = 'var(--gray1)';
                    if(currentKey.style.backgroundColor != 'var(--green)' && currentKey.style.backgroundColor != 'var(--yellow)') {
                        currentKey.style.backgroundColor = 'var(--gray1)';
                    }
                }, (Number(i) * 750));
            };
        };
        currentRow += 1;
        // correct word
        if(guess === currentWord) {
            gameWon = true;
            document.getElementById('message').innerHTML = 'You Win!';
            setTimeout(showMessage, 3500);
            setTimeout(hideMessage, 5500);
        } else if(currentRow === 6) {
            gameLost = true;
            // show correct word after game over
            document.getElementById('message').innerHTML = currentWord.toUpperCase();
            setTimeout(showMessage, 3500);
            setTimeout(hideMessage, 9000);
        };
    // guess length too short
    } else {
        document.getElementById('message').innerHTML = 'Not Enough Letters';
        setTimeout(showMessage, 500);
        setTimeout(hideMessage, 3000);
    };
}


/**
 * makes message box visible
 */
function showMessage() {
    const message = document.getElementById('message');
    let x = 0;
    let messageTimer = setInterval(() => {
        x += 1;
        message.style.opacity = `${x}%`
        if(x >= 100) {
            clearInterval(messageTimer);
        }
    }, 5);
}


/**
 * makes message box invisible
 */
function hideMessage() {
    const message = document.getElementById('message');
    let x = 100;
    let messageTimer = setInterval(() => {
        x -= 1;
        message.style.opacity = `${x}%`
        if(x <= 0) {
            clearInterval(messageTimer);
        }
    }, 5);
}


/**
 * makes game instructions visible
 */
function showHowTo() {
    document.getElementById('howto').style.opacity = '100%';
}


/**
 * makes game instructions invisible
 */
function hideHowTo() {
    document.getElementById('howto').style.opacity = '0%';
}