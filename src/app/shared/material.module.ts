import { NgModule } from "@angular/core"
import { MatCardModule } from "@angular/material/card"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { MatSelectModule } from "@angular/material/select"
import { MatButtonModule } from "@angular/material/button"
import { MatCheckboxModule } from "@angular/material/checkbox"
import {  MatTableModule } from "@angular/material/table"
import { MatPaginatorModule } from "@angular/material/paginator"
import { MatSortModule } from "@angular/material/sort"
import { MatIconModule } from "@angular/material/icon"
import { MatDialogModule } from "@angular/material/dialog"
import { MatMenuModule } from "@angular/material/menu"
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatSidenavModule } from "@angular/material/sidenav"
import { MatListModule } from "@angular/material/list"
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule,MAT_DATE_FORMATS,MAT_DATE_LOCALE } from '@angular/material/core';
import { MatTabsModule } from "@angular/material/tabs"
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CustomDateAdapter } from "./CustomDateAdapter"
import { MatTooltipModule } from '@angular/material/tooltip';

export const MY_DATE_FORMATS = {
    parse: {
      dateInput: 'DD/MM/YYYY',
    },
    display: {
      dateInput: 'DD/MM/YYYY',
      monthYearLabel: 'MMM YYYY',
      dateA11yLabel: 'DD/MM/YYYY',
      monthYearA11yLabel: 'MMMM YYYY',
    },
  };

@NgModule({
  declarations:[],
    exports: [
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatCheckboxModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatIconModule,
        MatDialogModule,
        MatMenuModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatListModule,
        MatTabsModule,
        MatSlideToggleModule,
        MatTooltipModule

    ],
    providers: [
        { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
        { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }, // British format to align with dd/MM/yyyy
        { provide: MatDatepickerModule, useClass: CustomDateAdapter },
      ],
})
export class MaterialModule { }
