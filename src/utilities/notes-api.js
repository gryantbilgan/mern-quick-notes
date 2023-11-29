import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export async function getAllNotes() {
    return sendRequest(BASE_URL);
}

export function createNote(noteData) {
    return sendRequest(BASE_URL, 'POST', noteData);
}