// good test page: -> https://oldschool.runescape.wiki/w/Song_of_the_Elves or /Quick_guide

done = new Set(['Sheep Herder', 'Making History', 'Regicide']);

const doWork = () => {
  const questDetailsHeaderNodeList = document.querySelectorAll('.questdetails-header');
  const questDetailsHeaders = [].slice.call(questDetailsHeaderNodeList);
  const requirementsHeader = questDetailsHeaders.filter((el)=>{return el.innerHTML === "Requirements"})[0];
  const requirementsContent = requirementsHeader.nextSibling;
  const requirementsNodeList = requirementsContent.querySelectorAll('li');
  const requirements = [].slice.call(requirementsNodeList);

  requirements.forEach(el=>{
    if (done.has(el.innerText.split('\n')[0]) && !el.className.includes('checked')) {
      el.click();
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
