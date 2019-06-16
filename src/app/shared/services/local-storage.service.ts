import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  static setItem(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static key(index: number): string | null {
    return localStorage.key(index);
  }

  static removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  static getItem(key: string, defaultValue: any = null) {
    const data = localStorage.getItem(key);
    try {
      const parsedData = (data === null) ? defaultValue : JSON.parse(data);
      return parsedData;
    } catch (e) {
      return data;
    }
  }

  static getLength() {
    return localStorage.length;
  }

  static clear() {
    localStorage.clear();
  }
}
