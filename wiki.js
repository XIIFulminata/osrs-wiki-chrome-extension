// good test page: -> https://oldschool.runescape.wiki/w/Song_of_the_Elves or /Quick_guide

const done = new Set(['Sheep Herder', 'Making History', 'Regicide']);
const skills = {
  attack: 1,
  defence: 1,
  strength: 1,
  hitpoints: 10,
  ranged: 1,
  prayer: 1,
  magic: 1,
  cooking: 1,
  woodcutting: 1,
  fletching: 1,
  fishing: 1,
  firemaking: 1,
  crafting: 1,
  smithing: 1,
  mining: 1,
  herblore: 1,
  agility: 1,
  thieving: 1,
  slayer: 1,
  farming: 1,
  runecrafting: 1,
  hunter: 1,
  construction: 1,
};

// cba with CORS right now, so leaving this as proof of concept
skills.farming = 70;
skills.agility = 99;

const meetsLevelRequirement = (reqBody) => {
  // check if legitimate level - skill combo
  if (reqBody.length < 2) {
    return false;
  }
  let [skillLevel, skillName] = reqBody.slice(0,2);
  skillName = skillName.toLowerCase();

  if (!isNaN(skillLevel)) { // is the firest element a number
    if (skillName && skills.hasOwnProperty(skillName)) {  // is a valid skill
      return skills[skillName] >= skillLevel;
    }
  }
  return false;
};

const doWork = () => {
  const questDetailsHeaderNodeList = document.querySelectorAll('.questdetails-header');
  const questDetailsHeaders = [].slice.call(questDetailsHeaderNodeList);
  const requirementsHeader = questDetailsHeaders.filter((el)=>{return el.innerHTML === "Requirements"})[0];
  const requirementsContent = requirementsHeader.nextSibling;
  const requirementsNodeList = requirementsContent.querySelectorAll('li');
  const requirements = [].slice.call(requirementsNodeList);

  requirements.forEach(el=>{
    const reqBody = el.innerText.split('\n');
    const reqText = reqBody[0];
    if (done.has(reqText) || meetsLevelRequirement(reqBody)) {
      if (!el.className.includes('checked')) {
        el.click();
      }
      // rather than settting className to checked manually, this allows for the
      // standard click behavior which handles nested quests already
    }
  });
};

setTimeout(()=>{doWork();}, 3000);
// TODO make callback for stat pull instead of timeout (or combine)

// const Http = new XMLHttpRequest();
// const playerName = "torvesta";
// const url='https://cors-anywhere.herokuapp.com/https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player='+playerName;
// Http.open("GET", url);
// Http.send();
//
// Http.onreadystatechange = (e) => {
//   if (Http.responseText) {
//     // Might have to do with how the proxy is set up, but this actually gets called 3 times, the first
//     // of which is invalid, and the last 2 are the same
//     // this ignores the first call
//     console.log(Http.responseText.split('\n'));
//   );
// }
