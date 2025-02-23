import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderService } from '../../_service/loader.service';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  template: `

    <div class="loader-overlay" *ngIf="isLoading | async">
  <div class="loader-container">
    <img src="https://dashfitstorage.blob.core.windows.net/dashfit-images/DashFitLoder.png" alt="Company Logo" class="loader-logo fade-logo" />
  </div>
</div>
  `,
  styleUrls: ['./loading-spinner.component.css'],
  imports: [CommonModule]
})
export class LoadingSpinnerComponent {
  isLoading = this.loaderService.loading$;
  constructor(private loaderService: LoaderService) {}
}
