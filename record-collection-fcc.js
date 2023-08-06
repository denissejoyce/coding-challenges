function updateRecords(records, id, prop, value) {
  if(value===""){
    delete records[id][prop];
  } else if (prop!='tracks' && value!=""){
    records[id][prop] = value;
  } else if(prop=='tracks' && value !=""){
    if(records[id].hasOwnProperty('tracks') == false){
      records[id]['tracks']=[];
    }
    records[id]['tracks'].push(value);
  }
  return records;
}
