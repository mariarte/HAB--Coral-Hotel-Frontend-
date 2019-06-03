import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
var AboutComponents = /** @class */ (function () {
    function AboutComponents() {
        this.title = "Hola! ";
        this.presentation = "Mi nombre es...";
        this.name = " María";
        this.descriptionTitle = "Quién soy?";
        this.description = "Programadora backend y frontend. Me encanta crear y desarrollar!!";
        this.projectTitle = "Mi proyecto";
        this.project = "'The Coral Hotel' es mi proyecto final del Bootcamp Hack a Bos";
        this.textLinks = "Sigue mi trabajo en:  ";
        this.links = [
            {
                icon: "fab fa-linkedin-in",
                URL: "https://linkedin.com/in/maria-arteaga-jimenez",
                name: "LinkedIn"
            },
            {
                icon: "fab fa-github",
                URL: "https://github.com/mariarte",
                name: "Github"
            },
            {
                icon: "fab fa-twitter",
                URL: "https://twitter.com/?lang=es",
                name: "Twitter"
            }
        ];
        this.contact = {
            description: "Puedes contactarme:",
            email: "maria.arjim@gmail.com"
        };
    }
    AboutComponents = tslib_1.__decorate([
        Component({
            selector: "sn-about",
            templateUrl: "./about.component.html",
            styleUrls: ["./about.component.scss"]
        })
    ], AboutComponents);
    return AboutComponents;
}());
export { AboutComponents };
//# sourceMappingURL=about.component.js.map