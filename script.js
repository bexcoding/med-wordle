/*
Title: MedWordle
Description: Wordle with medical terms
Last Updated: Sep 18, 2023
Developer: Alexander Beck
Email: beckhv2@gmail.com
Github: https://github.com/bexcoding
*/

const wordList = ['cloned', 'serum', 'grafts', 'stitch', 'molar', 'socket', 'splint', 'hiatal', 'bodily', 'cough', 'hands', 'washed', 'pound', 'waste', 'impair', 'lance', 'laser', 'injury', 'vagal', 'fecal', 'botch', 'crazy', 'dizzy', 'dwarf', 'ovary', 'sprain', 'naked', 'abcess', 'morbid', 'bedbug', 'nares', 'value', 'cystic', 'gauge', 'talus', 'serial', 'alpha', 'cheek', 'acidic', 'spasm', 'silent', 'ketone', 'twins', 'tears', 'cable', 'atrium', 'anemic', 'pacing', 'carpal', 'thecal', 'probe', 'bruit', 'enemas', 'width', 'wedge', 'lipase', 'breast', 'auras', 'distal', 'exude', 'coccyx', 'uvula', 'access', 'dimer', 'abrupt', 'latex', 'liver', 'webbed', 'radial', 'watch', 'tampon', 'tonsil', 'maalox', 'drink', 'broke', 'ataxic', 'moral', 'atomic', 'injure', 'myopic', 'graph', 'memory', 'iliac', 'intern', 'cloth', 'spine', 'croup', 'charts', 'digit', 'gluten', 'sodium', 'helper', 'bowel', 'iodine', 'vector', 'cecum', 'filter', 'liquid', 'abrade', 'belly', 'bloat', 'canal', 'meatus', 'graft', 'tumor', 'bruise', 'sleep', 'peptic', 'basal', 'edema', 'caudal', 'lancet', 'crests', 'airway', 'cornea', 'bitter', 'brace', 'shower', 'genes', 'thrill', 'lupus', 'toxins', 'navel', 'malady', 'fiber', 'hunger', 'thorax', 'cervix', 'aerobe', 'breath', 'close', 'period', 'plaque', 'lipid', 'polyps', 'badge', 'smell', 'saline', 'alkali', 'sinus', 'sweat', 'knife', 'banded', 'absorb', 'clamp', 'smoke', 'chest', 'eating', 'colon', 'artery', 'glands', 'nitro', 'myopia', 'uterus', 'wrist', 'helium', 'excess', 'bubble', 'immune', 'anoxic', 'pelvic', 'autism', 'itchy', 'embed', 'nurse', 'mucous', 'infest', 'septal', 'absent', 'anuria', 'renal', 'rhythm', 'linear', 'uptake', 'recess', 'spasms', 'vocal', 'deeply', 'pills', 'aspect', 'throat', 'tracts', 'suture', 'mammal', 'hairy', 'aortic', 'nodule', 'waist', 'stable', 'stent', 'emesis', 'zygote', 'patent', 'remote', 'masked', 'plane', 'human', 'infect', 'parent', 'closed', 'spines', 'helix', 'thrush', 'puffs', 'teeth', 'fevers', 'fluid', 'disks', 'defect', 'nails', 'wound', 'adduct', 'sponge', 'tarsal', 'heels', 'sleeve', 'inject', 'chord', 'bases', 'ulcer', 'mallet', 'agony', 'cleft', 'obtund', 'flexor', 'rectum', 'anoxia', 'aorta', 'cramps', 'trauma', 'cavity', 'sputum', 'fossa', 'weight', 'asthma', 'herbal', 'tibia', 'nylon', 'ureter', 'fungus', 'axonal', 'tibial', 'scrub', 'crotch', 'spinal', 'active', 'shins', 'medial', 'bypass', 'dimple', 'mutant', 'hairs', 'sacrum', 'brain', 'rusty', 'ingest', 'pupils', 'gallon', 'warmth', 'widow', 'apnea', 'mother', 'toilet', 'values', 'alloy', 'thigh', 'dilate', 'basic', 'orbit', 'slice', 'deadly', 'uremic', 'pulse', 'bodies', 'ablate', 'gland', 'paddle', 'bloody', 'obese', 'remedy', 'acids', 'stress', 'abduct', 'ampule', 'emetic', 'biceps', 'adsorb', 'yield', 'drill', 'chills', 'board', 'drunk', 'staff', 'blind', 'bunion', 'muscle', 'chart', 'facial', 'joints', 'plasma', 'cramp', 'floss', 'elbow', 'dream', 'corpse', 'vomit', 'pains', 'valve', 'metal', 'normal', 'voice', 'flush', 'degree', 'lanced', 'lobes', 'probes', 'enema', 'gamma', 'hoarse', 'apneic', 'fascia', 'biopsy', 'repair', 'bicarb', 'sling', 'tetany', 'tongue', 'dental', 'inhale', 'sleepy', 'gonads', 'wheeze', 'angina', 'repeat', 'event', 'herpes', 'drops', 'blink', 'earwax', 'ounce', 'bands', 'woven', 'ectopy', 'drowsy', 'pedal', 'cysts', 'error', 'ataxia', 'tubes', 'venous', 'saliva', 'stents', 'hives', 'heart', 'lumen', 'water', 'vision', 'menses', 'retina', 'tract', 'micron', 'tender', 'nodes', 'fluoro', 'urine', 'kelvin', 'fatal', 'flesh', 'focal', 'local', 'larynx', 'apical', 'prone', 'eczema', 'slits', 'energy', 'liter', 'dermis', 'volume', 'planes', 'lethal', 'attack', 'vital', 'pimple', 'viral', 'dosage', 'child', 'female', 'vapor', 'stylet', 'trunk', 'skull', 'bedpan', 'septum', 'fungi', 'blood', 'excite', 'dilute', 'series', 'liquor', 'biotin', 'shunt', 'pseudo', 'molars', 'lymph', 'polyp', 'marrow', 'wisdom', 'ostomy', 'gender', 'axilla', 'rigid', 'linen', 'ethics', 'tumors', 'cycle', 'valves', 'diaper', 'labor', 'clone', 'coarse', 'yellow', 'gonad', 'opioid', 'pelvis', 'dense', 'crest', 'bowleg', 'cells', 'intake', 'oxygen', 'hiccup', 'declot', 'agonal', 'infant', 'urinal', 'panic', 'nasal', 'anuric', 'femur', 'optic', 'patch', 'waves', 'verbal', 'extra', 'bonds', 'tubal', 'right', 'donor', 'rectal', 'drift', 'anemia', 'palmar', 'pallor', 'colons', 'tremor', 'tendon', 'lesion', 'yeast', 'canker', 'trunks', 'toxic', 'cancer', 'notch', 'buccal', 'feces', 'phobia', 'lumbar', 'meter', 'joule', 'joint', 'analog', 'digest', 'record', 'broken', 'tablet', 'eyelid', 'spores', 'coffee', 'uremia', 'pupil', 'bones', 'opiate', 'lucid', 'death', 'pores', 'signal', 'vessel', 'asprin', 'dorsal', 'scale', 'toxin', 'serous', 'bleed', 'binder', 'axons', 'excise', 'fever', 'ducts', 'lactic', 'minor', 'chill', 'deafen', 'brush', 'emboli', 'barium', 'cyclic', 'chemo', 'fusion', 'amber', 'stoma', 'chews', 'skinny', 'finger', 'fungal', 'canals', 'barbed', 'spore', 'albino', 'slide', 'spleen', 'empty', 'canula', 'maggot', 'proton', 'latent', 'waking', 'solute', 'apexes'];
const day1 = new Date(2023, 8, 15, 12, 0, 0);
// 86400000 is number of ms in 1 day
const currentWord = wordList[Math.floor((Date.now() - day1) / 86400000)];
const wordLength = currentWord.length;
const gridSize = wordLength * 6;
const first = currentWord[0];
const second = currentWord[1];
const third = currentWord[2];
const fourth = currentWord[3];
const fifth = currentWord[4];
const sixth = currentWord[5];
const letters = [];
let currentRow = 0;
let currentGuess = "";
let currentGuessLength = 0;
let currentGuessId = 0;
let totalGuesses = 1;


window.addEventListener('load', () => {
    makeTiles(6, wordLength);
    // make letter list for all letters in the word
    for(i in currentWord){
        letters.push(currentWord[i]);
    };
});



function makeTiles(row, col) {
    const grid = document.getElementById('game-grid');
    // adds extra column when word is six characters instead of 5
    if(col === 6) {
        grid.style.gridTemplateColumns = 'repeat(6, 62px)';
    };
    for(i = 0; i < (row * col); i++) {
        let rowNum = Math.floor(i / col);
        let tile = document.createElement('div');
        tile.setAttribute('id', i);
        tile.setAttribute('class', `game-tile row${rowNum}`);
        grid.appendChild(tile);
    };
}


function addLetter(letter) {
    if(currentGuessLength < wordLength) {
        document.getElementById(currentGuessId).innerHTML = letter.toUpperCase();
        currentGuess += letter;
        currentGuessLength += 1;
        currentGuessId += 1;
        console.log(currentGuess)
    } else {
        console.log('word too long')
    }
}


function subtractLetter() {
    if(currentGuessLength > 0) {
        currentGuessId -= 1;
        currentGuessLength -= 1;
        currentGuess = currentGuess.slice(0, -1);
        document.getElementById(currentGuessId).innerHTML = "";
    };
}


function checkAnswer(guess) {
    // valid guess length
    if(guess.length === wordLength) {
        let startId = wordLength * currentRow;
        currentGuess = "";
        currentGuessLength = 0;
        for(i in guess) {
            let currentItem = document.getElementById((Number(i) + startId));
            let currentKey = document.getElementById(guess[i]);
            console.log((Number(i) + startId))
            if(guess[i] === currentWord[i]){
                // letter is correct
                setTimeout(() => {
                    currentItem.style.backgroundColor = 'green';
                    currentKey.style.backgroundColor = 'green';
                }, (Number(i) * 750));
            } else if(letters.includes(guess[i])){
                // letter present
                setTimeout(() => {
                    currentItem.style.backgroundColor = 'yellow';
                    currentKey.style.backgroundColor = 'yellow';
                }, (Number(i) * 750));
            } else {
                // letter not present
                setTimeout(() => {
                    currentItem.style.backgroundColor = 'gray';
                    currentKey.setAttribute('disabled', 'true');
                    currentKey.style.backgroundColor = 'gray';
                }, (Number(i) * 750));
            };
        };
        // correct word
        if(guess === currentWord) {
            console.log(`number of guesses ${totalGuesses}`)
            showWord();
        };
        currentRow += 1;
        totalGuesses += 1;
    // guess length too short
    } else {
        console.log('not enough letters')
    };

}


function showWord() {
    console.log('show the word')
}