import { async, TestBed } from "@angular/core/testing";
import { BookingComponent } from "./booking-confirmed.component";
describe("BookingComponent", function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BookingComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BookingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=booking-confirmed.component.spec.js.map