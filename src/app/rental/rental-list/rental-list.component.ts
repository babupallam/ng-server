import { Component, OnInit } from '@angular/core';
import { RentalService} from '../shared/rental.service';
import { Rental} from '../shared/rental.model';
@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  //rentals =[1,2,3,4,5];
  rentals: Rental[] = [];
  constructor(private rentalService: RentalService) { }

  ngOnInit() {
    //debugger;
    const rentalObservable = this.rentalService.getRentals();
    rentalObservable.subscribe(
      (rentals: Rental[])=>{
        this.rentals = rentals;
        
      },

      (err)=>{

      },
      ()=>{

      }
    );
  }

}
