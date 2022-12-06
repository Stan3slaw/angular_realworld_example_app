import { Injectable } from '@angular/core';

@Injectable()
export class PersistanceService {
  public set(key: string, data: unknown): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error(`Error during saving to local storage ${error}`);
    }
  }

  public get(key: string): unknown {
    try {
      return JSON.parse(localStorage.getItem(key) as string);
    } catch (error) {
      console.error(`Error during getting data from local storage ${error}`);

      return null;
    }
  }
}
