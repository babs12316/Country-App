import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

countries: Observable<any>;
  constructor(private countriesService: CountriesService) { }
 
  ngOnInit() {
    this.getCountries();
  }
 public getCountries(){
  //  return this.countriesService.getCountries();
    this.countriesService.getCountries()
      .subscribe(countries => this.countries = countries);

  }

}
