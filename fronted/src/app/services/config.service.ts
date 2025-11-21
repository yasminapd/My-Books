import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private readonly storageKey = 'apiBaseUrl';
  private baseUrlSubject = new BehaviorSubject<string>(this.loadBaseUrl());

  private loadBaseUrl(): string {
    return localStorage.getItem(this.storageKey) || environment.apiUrl;
  }

  get apiBaseUrl(): string {
    return this.baseUrlSubject.value;
  }

  get apiBaseUrl$() {
    return this.baseUrlSubject.asObservable();
  }

  updateApiBaseUrl(url: string) {
    const sanitized = url.trim().replace(/\/$/, '');
    if (!sanitized) {
      return;
    }
    localStorage.setItem(this.storageKey, sanitized);
    this.baseUrlSubject.next(sanitized);
  }
}
