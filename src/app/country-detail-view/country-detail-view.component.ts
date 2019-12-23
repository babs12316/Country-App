import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { CountriesService } from "../countries.service";
import { Observable } from "rxjs";
import { AfterViewInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-country-detail-view",
  templateUrl: "./country-detail-view.component.html",
  styleUrls: ["./country-detail-view.component.css"]
})
export class CountryDetailViewComponent implements OnInit {
  title: string = "Country Map";
  latitude: number;
  longitude: number;
  zoom: number;
  country: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public countriesService: CountriesService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    console.log("id is" + id);
    this.getCountry(id);
  }

  public getCountry(id: string) {
    this.countriesService
      .getCountry(id)
      .subscribe(country => (this.country = country));
  }
}
