
const character = ['Sakuta', 'Mai-san', 'Kaede-chan', 'Shoko-chan', 'Rio Futaba']
const actions = ['slapped', 'pinched', 'studied', 'hugged', 'chated', 'cooked']
const objects = ['Sakuta', 'Kaede', 'dinner', 'quantum physics']

const randMessage  = () => {
    let who = character[Math.floor(Math.random() * 4)];
    let does = actions[Math.floor(Math.random() * 5)];
    let something = objects[Math.floor(Math.random() * 3)];

    console.log(who + ' ' + does + ' ' + something)
}

randMessage();