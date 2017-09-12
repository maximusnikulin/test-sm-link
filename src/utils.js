import {v4} from 'node-uuid';
export let prepareData = (persons) => {
  let obj = {};
  persons.forEach((el) => {
    var id = v4();
    el.id = id;
    obj[id] = el;
    
  });
  return obj;  
}
