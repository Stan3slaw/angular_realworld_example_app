import { Injectable } from '@angular/core';

@Injectable()
export class PersistanceService {
  set(key: string, data: unknown): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error(`Error during saving to local storage ${error}`);
    }
  }

  get(key: string): unknown {
    try {
      return JSON.parse(localStorage.getItem(key) as string);
    } catch (error) {
      console.error(`Error during getting data from local storage ${error}`);

      return null;
    }
  }
}
