import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";
import { CountryListComponent } from "./country-list/country-list.component";
import { CountryDetailViewComponent } from "./country-detail-view/country-detail-view.component";
import { AgmCoreModule } from "@agm/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

const appRoutes: Routes = [
  { path: "index", component: CountryListComponent },
  { path: "detail", component: CountryDetailViewComponent },
  { path: "detail/:id", component: CountryDetailViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    CountryDetailViewComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyD1v8jsQQMdchuyVPfCIuCDghEkhGTaEUw",
      libraries: ["places"]
    }),
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
