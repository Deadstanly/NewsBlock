import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {NewsService} from "../../services/news.service";
import {AddNewsComponent} from "../add-news/add-news.component";

@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.scss']
})
export class UpdateNewsComponent implements OnInit {


  myFormUpdate: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddNewsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private newsService: NewsService) {

    this.myFormUpdate = formBuilder.group({
      'title': [data.title, [Validators.required]],
      'link': [data.link, [Validators.required]],
      'country': [data.country, [Validators.required]]
    })
  }

  ngOnInit(): void {}

  submitUpdate() {
    console.log(this.data.id)
    this.newsService.editNews(this.data.id, this.myFormUpdate.value).subscribe();
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }





}
