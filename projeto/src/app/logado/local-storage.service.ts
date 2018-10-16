import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  set(key , value) {
    window.localStorage[key] = value;
    return this;
  }
  get(key, defaultValue = null) {
    return window.localStorage[key] || defaultValue;
  }
  setObject ( key, value) {}
  getObject ( key, value) {}
  remove (key) {}
}
