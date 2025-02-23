import { Injectable } from '@angular/core';
import { NativeDateAdapter } from '@angular/material/core';

@Injectable({
  providedIn: 'root',
})
export class CustomDateAdapter extends NativeDateAdapter {
  // Override the format function
  override format(date: Date, displayFormat: Object): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`; // dd/MM/yyyy format
  }

  // Override parse to support dd/MM/yyyy input format
  override parse(value: any): Date | null {
    if (typeof value === 'string' && value.includes('/')) {
      const parts = value.split('/');
      const day = +parts[0];
      const month = +parts[1] - 1; // Month is zero-based
      const year = +parts[2];
      return new Date(year, month, day);
    }
    return value ? new Date(value) : null;
  }
}
