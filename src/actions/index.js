
import { notesRef, authRef, provider } from "../config/firebase";
import { FETCH_TODOS } from "./types";

export const addToDo = newToDo => async dispatch => {
  notesRef.push().set(newToDo);
};

export const completeToDo = completeToDoId => async dispatch => {
  notesRef.child(completeToDoId).remove();
};

export const fetchToDos = () => async dispatch => {
  notesRef.on("value", snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val()
    });
  });
};

export const signIn = () => dispatch => {
    authRef.signInWithPopup(provider)
    .then(result => {})
    .catch(error => {
        console.log(error);
    });
};

export const signOut = () => dispatch => {
    authRef
        .signOut()
        .then(() => {
        // Sign-out successful.
        })
        .catch(error => {
        console.log(error);
        });
};