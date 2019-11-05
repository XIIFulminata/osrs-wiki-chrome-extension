done = new Set(['Sheep Herder', 'Making History']);

const doWork = () => {
  headerArray = [].slice.call(document.querySelectorAll('.questdetails-header'));
  req = headerArray.filter((el)=>{return el.innerHTML === "Requirements"})[0];
  reqTable = req.nextSibling;
  reqs = reqTable.querySelectorAll('li');
  reqsArray = [].slice.call(reqs);

  reqsArray.forEach(el=>{
    if (done.has(el.innerText.split('\n')[0]) && !el.className.includes('checked')) {
      el.click();
    }
  });
  // reqsArray[n].click also works but only if you hit the top level quests only

};

setTimeout(()=>{doWork();}, 3000);
// doWork();
// make callback for stat pull instead of timeout (or combine)
