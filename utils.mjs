export function targetToElms(args){
  var list = [];
  args.forEach(
    (target) => {
      list = list.concat(Array.prototype.slice.call(document.querySelectorAll(target)));
    });
  return list;
}
export function changeFontSize(size, elms){
  // TODO (jovaun) mess with header without losing line 1
  for (let i=0; i<elms.length; i++) {
    elms[i].style.fontSize = size;
  }
}
