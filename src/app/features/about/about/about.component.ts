import { Component } from "@angular/core";

@Component({
  selector: "sn-about",
  templateUrl: `./about.component.html`,
  styleUrls: [`./about.component.scss`]
})
export class AboutComponents {
  title = "Hola! ";
  presentation = "Mi nombre es...";
  name = " María";
  descriptionTitle = "Quién soy?";
  description =
    "Programadora backend y frontend. Me encanta crear y desarrollar!!";
  projectTitle = "Mi proyecto";
  project = "'The Coral Hotel' es mi proyecto final del Bootcamp Hack a Bos";
  textLinks = "Sigue mi trabajo en:  ";
  links = [
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
  contact = {
    description: "Puedes contactarme:",
    email: "maria.arjim@gmail.com"
  };
}
