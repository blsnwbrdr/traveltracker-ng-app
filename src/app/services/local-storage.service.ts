import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  // VARIABLES
  localStorage: Storage;

  constructor() {
    this.localStorage = window.localStorage;
  }

  // GET LOCAL STORAGE KEY DATA METHOD
  get(key: string): Array<string> {
    if (this.isLocalStorageSupported && this.localStorage.getItem(key)) {
      return JSON.parse(this.localStorage.getItem(key) || '');
    }
    return [];
  }

  // SET LOCAL STORAGE KEY DATA METHOD
  set(key: string, value: Array<string>): boolean {
    if (this.isLocalStorageSupported) {
      this.localStorage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  }

  // REMOVE LOCAL STORAGE KEY DATA METHOD
  remove(key: string): boolean {
    if (this.isLocalStorageSupported) {
      this.localStorage.removeItem(key);
      return true;
    }
    return false;
  }

  // LOCAL STORAGE SUPPORT CHECK METHOD
  get isLocalStorageSupported(): boolean {
    return !!this.localStorage;
  }
}
