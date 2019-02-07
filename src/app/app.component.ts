import { Component } from '@angular/core';
import { apiService } from './services/api.service';
import { Comments } from './classes/comments';
import { Posts } from './classes/posts';
import { Students } from './classes/students';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _apiService: apiService){

  }
  listStudents: Students[];
  listComments:Comments[];
  listPosts: Posts[];
  objPosts: Posts[];
  ngOnInit(){
    this._apiService.getComments().subscribe(
      data => {
        this.listComments = data;
      });

      this._apiService.getCommentsByParameter().subscribe(
        data =>{
          this.listPosts = data;
        });

      var opost = new Posts();
      opost.body='testbody';
      opost.title='testtitle';
      opost.userId=5;

      this._apiService.post(opost).subscribe(
        data =>{
          this.objPosts = data;
        }
      )

      this._apiService.getStudents().subscribe(
        data => {
          this.listStudents = data;
        });
  
        this._apiService.getStudentsByParameter().subscribe(
          data =>{
            this.listStudents = data;
          });
  }

}
