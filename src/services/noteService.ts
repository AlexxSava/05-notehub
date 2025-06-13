import axios from "axios";
import type { Note, SortBy, Tag } from "../types/note";

const API_KEY = import.meta.env.VITE_NOTEHUB_TOKEN;

axios.defaults.baseURL = "https://notehub-public.goit.study/api/notes";
axios.defaults.headers.common["Authorization"] = `Bearer ${API_KEY}`;
axios.defaults.headers.common["Accept"] = "application/json";


interface FetchNotesResponse {
    posts: Post[];
    page: number;
    total_pages: number;
}

interface FetchNotesParams {
    search?: string;
    page?: number;
    tag?: Tag;
    sortBy?: SortBy;
    perPage?: number;
}
  
interface FetchNotesParams {
    page?: number;
    perPage?: number;
    search?: string;
  }
  
  interface FetchNotesResponse {
    data: Note[];
    totalPages: number;
    currentPage: number;
  }
  
  export const fetchNotes = async (
    params: FetchNotesParams
  ): Promise<FetchNotesResponse> => {
    const { data } = await instance.get('/notes', { params });
    return data;
  };
  
  export const createNote = async (note: Omit<Note, 'id'>): Promise<Note> => {
    const { data } = await instance.post('/notes', note);
    return data;
  };
  
  export const deleteNote = async (id: string): Promise<Note> => {
    const { data } = await instance.delete(`/notes/${id}`);
    return data;
  };