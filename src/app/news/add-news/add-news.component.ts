import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {NewsComponent} from "../news.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NewsService} from "../../services/news.service";

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {

  myForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddNewsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private newsService: NewsService) {

    this.myForm = formBuilder.group({
        'title': ['', [Validators.required]],
        'link': ['', [Validators.required]],
        'country': ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }


  submit() {
    this.newsService.createNews(this.myForm.value).subscribe();
    this.closeModal();

  }

  closeModal() {
    this.dialogRef.close();
  }
}
