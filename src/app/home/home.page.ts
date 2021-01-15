import { Component } from "@angular/core";
import * as algoliasearch from "algoliasearch/lite";
const searchClient = algoliasearch(
  "DJGUBCSQ2K",
  "d4637c1aa2b06e510353765843c8015c"
);
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor() {}
  config = {
    indexName: "product",
    searchClient,
  };
}
