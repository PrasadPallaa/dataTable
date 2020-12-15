import { DataService } from './../data.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  ApplicationId = true;
  applicant = true;
  SSN = false;
  Cosigner = false;
  LoanAmount = false;
  SubProgram = true;
  LoanAdvisorAssigned = false;
  Status = false;
  SubmissionDate = false;

  data: any;

  list = [
    { id: 1, name: "ApplicationId" },
    { id: 2, name: "applicant" },
    { id: 3, name: "SSN" },
    { id: 4, name: "Cosigner" },
    { id: 5, name: "LoanAmount" },
    { id: 6, name: "SubProgram" },
    { id: 7, name: "LoanAdvisorAssigned" },
    { id: 8, name: "Status" },
    { id: 9, name: "SubmissionDate" },
  ];

  form = new FormGroup({
    applicationId: new FormControl(''),
    applicant: new FormControl(''),
    SSN: new FormControl(''),
    Cosigner: new FormControl(''),
    LoanAmount: new FormControl(''),
    SubProgram: new FormControl(''),
    LoanAdvisorAssigned: new FormControl(''),
    Status: new FormControl(''),
    SubmissionDate: new FormControl(''),
  })

  constructor(private service: DataService) {
  }


  ngOnInit(): void {

    this.form.valueChanges.subscribe(x => {
      if (this.form.controls['applicationId'].value) {
        this.ApplicationId = true;
      } else {
        this.ApplicationId = false;
      }
    })

    this.form.valueChanges.subscribe(x => {
      if (this.form.controls['applicant'].value) {
        this.applicant = true;
      } else {
        this.applicant = false;
      }
    })

    this.form.valueChanges.subscribe(x => {
      if (this.form.controls['SSN'].value) {
        this.SSN = true;
      } else {
        this.SSN = false;
      }
    })

    this.form.valueChanges.subscribe(x => {
      if (this.form.controls['Cosigner'].value) {
        this.Cosigner = true;
      } else {
        this.Cosigner = false;
      }
    })

    this.form.valueChanges.subscribe(x => {
      if (this.form.controls['LoanAmount'].value) {
        this.LoanAmount = true;
      } else {
        this.LoanAmount = false;
      }
    })

    this.form.valueChanges.subscribe(x => {
      if (this.form.controls['SubProgram'].value) {
        this.SubProgram = true;
      } else {
        this.SubProgram = false;
      }
    })

    this.form.valueChanges.subscribe(x => {
      if (this.form.controls['LoanAdvisorAssigned'].value) {
        this.LoanAdvisorAssigned = true;
      } else {
        this.LoanAdvisorAssigned = false;
      }
    })

    this.form.valueChanges.subscribe(x => {
      if (this.form.controls['Status'].value) {
        this.Status = true;
      } else {
        this.Status = false;
      }
    })

    this.form.valueChanges.subscribe(x => {
      if (this.form.controls['SubmissionDate'].value) {
        this.SubmissionDate = true;
      } else {
        this.SubmissionDate = false;
      }
    })


    this.getData();
  }

  getData() {
    this.service.getData().subscribe((res) => {
      this.data = res;
    });
  }

  changeWebsite() {

  }
}
