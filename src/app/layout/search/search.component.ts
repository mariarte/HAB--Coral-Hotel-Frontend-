import { Component, OnInit, ViewChild } from "@angular/core";
import { fromEvent } from "rxjs";
import {
  debounceTime,
  map,
  filter,
  distinctUntilChanged
} from "rxjs/operators";
import { PrivateAreaService } from "src/app/core/services/private-area.service";

@Component({
  selector: "sn-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  @ViewChild("searchText") inputElement;

  constructor(public privateAreaService: PrivateAreaService) {}

  ngOnInit() {
    fromEvent(this.inputElement.nativeElement, "keyup")
      .pipe(
        debounceTime(300),
        map((event: any) => event.target.value),
        filter(text => !text || text.length > 3),
        distinctUntilChanged()
      )
      .subscribe(data => {
        this.privateAreaService.search(data).subscribe();
      });
  }
}
