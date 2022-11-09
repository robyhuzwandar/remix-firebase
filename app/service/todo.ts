import { onValue, ref, set } from "firebase/database";
import type { TTodo } from "~/types/todo.type";
import { v4 as uuidv4 } from 'uuid';
import { database } from "~/firebase.config";


export const addTodo = (todo:TTodo)=>{
    
   set(ref(database, 'todo/' + uuidv4()), {
    ...todo
  });
}

export const getTodo = (fnc: (todo:any[])=>void) => {
  
   const todoRef = ref(database, 'todo/')
     onValue(todoRef, (snapshot) => {
      var records: any[] = [];
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        records.push(childData);
      });
      fnc(records);
    });
}

