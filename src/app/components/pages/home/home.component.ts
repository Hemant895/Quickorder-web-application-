import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 foods:Food[]=[]
  constructor(private foodService :FoodService , private activatedRoute:ActivatedRoute,private router :Router) {  
  }
  starRating =5
  ngOnInit(): void {
    let foodObservable:Observable<Food[]>
    this.activatedRoute.params.subscribe((params) => {
      if (params.searchTerm){
        this.foodService.getAllFoodsBySearchTerm(params.searchTerm).subscribe((server)=>{
          this.foods =server;
         });
      }
      else{
        foodObservable = this.foodService.getAll() //to get all data
        foodObservable.subscribe((fooddata)=>{
          this.foods = fooddata
        })
        console.log(this.foods)
      }
    })
  }

}
