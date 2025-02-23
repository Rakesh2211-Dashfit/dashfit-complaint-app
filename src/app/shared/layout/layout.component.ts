import { Component, effect, OnInit } from '@angular/core';
import { MaterialModule } from '../material.module';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MaterialModule, RouterLink,CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent{
  
}
