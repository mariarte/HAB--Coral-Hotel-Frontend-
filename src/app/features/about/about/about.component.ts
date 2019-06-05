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
    "Programadora backend y frontend. Me encanta crear, diseñar y desarrollar!!";
  projectTitle = "Mi proyecto";
  project = "'The Coral Hotel' es mi proyecto final del Bootcamp Hack a Bos";
  textLinks = "Sigue mi trabajo en:  ";
  links = [
    {
      class: "social-buttons__button social-button social-button--linkedin",
      icon: "fab fa-linkedin-in",
      URL: "https://linkedin.com/in/maria-arteaga-jimenez",
      name: "LinkedIn"
    },
    {
      class: "social-buttons__button social-button social-button--github",
      icon: "fab fa-github",
      URL: "https://github.com/mariarte",
      name: "Github"
    },
    {
      class: "social-buttons__button social-button social-button--instagram",
      icon: "fab fa-instagram",
      URL: "https://www.instagram.com/?hl=es",
      name: "Instagram"
    },
    {
      class: "social-buttons__button social-button social-button--twitter",
      icon: "fab fa-twitter",
      URL: "https://twitter.com/?lang=es",
      name: "Twitter"
    }
  ];
  contact = {
    class: "social-buttons__button social-button social-button--email",
    icon: "far fa-envelope",
    description: "Puedes contactarme:",
    email: "maria.arjim@gmail.com"
  };
}
