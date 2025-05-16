import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot
} from "firebase/firestore";

const notesRef = collection(db, "notes");

export const addNote = async (title, note) => {
  return await addDoc(notesRef, { title, note });
};

export const getNotes = async () => {
  const snapshot = await getDocs(notesRef);
  return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
};

export const subscribeToNotes = (callback) => {
  return onSnapshot(notesRef, snapshot => {
    const notes = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    callback(notes);
  });
};

export const updateNote = async (id, updatedNote) => {
  const noteDoc = doc(db, "notes", id);
  return await updateDoc(noteDoc, updatedNote);
};

export const deleteNote = async (id) => {
  const noteDoc = doc(db, "notes", id);
  return await deleteDoc(noteDoc);
};

