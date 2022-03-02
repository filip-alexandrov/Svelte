import { writable } from 'svelte/store';

export const userStore = writable({});
export const isLoggedIn = writable(false);
