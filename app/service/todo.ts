import { onValue, ref, remove, set } from "firebase/database";
import type { TTodo } from "~/types/todo.type";
import { v4 as uuidv4 } from 'uuid';
import { database } from "~/firebase.config";


export const addTodo = (todo:TTodo)=>{
  set(ref(database, 'todo/' + uuidv4()), {
    ...todo
  }).catch((error)=>{
    console.error('SET ERROR: ',error)
  });
}

export const deleteAll = ()=>{
  remove(ref(database, 'todo/')).catch((error)=>{
    console.error('SET ERROR: ',error)
  });
}

export const getTodo = (callback: (todo: TTodo[])=>void) => {
  const todoRef = ref(database, 'todo/')
  onValue(todoRef, (snapshot) => {
    var records: any[] = [];
    snapshot.forEach((childSnapshot) => {
      const childData = childSnapshot.val();
      records.push(childData);
    });
    callback(records);
  }, (error) => {
    console.log('ON VALUE ERROR: ',error)
  });
}

