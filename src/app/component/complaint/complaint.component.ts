import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ComplaintService } from '../../_service/complaint.service';
import { ComplaintTypes, GymDetailsResponse } from '../../_model/complaint.model';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-complaint',
  standalone: true,
  imports: [MaterialModule, RouterLink, CommonModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, HttpClientModule,MatDividerModule],
  templateUrl: './complaint.component.html',
  styleUrl: './complaint.component.css',
  providers: [ComplaintService]
})
export class ComplaintComponent implements OnInit {
  complaintForm: FormGroup;
  selectedFile: File | null = null;
  GymId!: number;
  complaintTypes: ComplaintTypes[] = [];
  QrUniqueId!: string;
  gymDetailsResponse!: GymDetailsResponse;
  uploadForm!: FormGroup;
  selectedFiles: File[] = [];
  uploading = false;

  constructor(private fb: FormBuilder, 
    private complaintService: ComplaintService, 
    private route: ActivatedRoute,
    private http: HttpClient,
    public dialog: MatDialog) {
    this.complaintForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      complaintType: [-1, Validators.required],
      description: ['', Validators.required],
      files: [null]
    });
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.QrUniqueId = params['id']; // Get "id" from route
    });
    //this.getComplaintType();
    //this.FetchGymDetails();
    this.loaddata();

  } 

  submitComplaint() {
    if (this.complaintForm.valid) {
      const complaintData = this.complaintForm.value;     
      
      
      alert('Complaint Submitted Successfully! Ticket ID: ' + Math.floor(1000 + Math.random() * 9000));
      this.complaintForm.reset();
    }
  }

  loaddata() {
    this.complaintTypes = [
      {
        "Id": 1, TypeName: "Equipment failure"
      },
      {
        "Id": 2, TypeName: "Staff behaviour"
      },
      {
        "Id": 3, TypeName: "Complaint against another member"
      }
    ]

    this.gymDetailsResponse = {
      GymId: 72,
      GymName: "Test Gym",
      EmailId: "dsad@dsaf.fds",
      MobileNo: "8838737737"
    }
  }

  openUrl() {
    window.open("mailto:" + this.gymDetailsResponse?.EmailId, '_top');
  }

  FetchGymDetails() {
    debugger;
    this.complaintService.FetchGymDetails(this.QrUniqueId).subscribe((response: any) => {
      if (response.StatusCode == 200) {
        this.gymDetailsResponse = response.Data;
      }
    });
  }

  getComplaintType() {
    debugger;
    this.complaintService.GetComplaintTypes().subscribe((response: any) => {
      if (response.StatusCode == 200) {
        this.complaintTypes = response.Data;
      }
    });
  }

  onFileSelected(event: any) {
    const files: FileList = event.target.files;
  
    if (files.length > 0) {
      // Convert FileList to an array and append to existing files
      this.selectedFiles = [...this.selectedFiles, ...Array.from(files)];
      
      // Update form control
      this.uploadForm.patchValue({ files: this.selectedFiles });
    }
  
    // Reset input field to allow selecting the same file again
    event.target.value = '';
  }
  

  removeFile(index: number) {
    this.selectedFiles.splice(index, 1);
    this.uploadForm.patchValue({ files: this.selectedFiles });
  }

  uploadFiles() {
    if (this.selectedFiles.length === 0) {
      alert("Please select files first!");
      return;
    }

    this.uploading = true;
    const formData = new FormData();
    this.selectedFiles.forEach(file => {
      formData.append('files', file);
    });

    this.http.post('YOUR_BACKEND_URL/api/upload', formData).subscribe(response => {
      console.log('Upload Successful!', response);
      this.uploading = false;
      this.uploadForm.reset();
      this.selectedFiles = [];
    }, error => {
      console.error('Upload Failed!', error);
      this.uploading = false;
    });
  }
}
