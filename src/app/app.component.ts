import { Component, OnInit, OnChanges, DoCheck } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, DoCheck {
  title = "Infy Movie Booking";
  location = "banglore";
  isLoggedIn: boolean = false;
  userLoggedIn: string = "";
  logoutMsg = "";

  constructor(private router: Router) {}

  ngOnInit() {
    sessionStorage.setItem("location", this.location);
  }

  ngDoCheck() {
    this.userLoggedIn = sessionStorage.getItem("username");
    if (this.userLoggedIn) {
      this.isLoggedIn = true;
    } else this.isLoggedIn = false;
  }
  onLocationChange() {
    sessionStorage.setItem("location", this.location);
    console.log(sessionStorage.getItem("location"));
    if (this.isLoggedIn) {
      if (window.location.pathname === "/movies") {
        // window.location.reload();
        sessionStorage.setItem("location", this.location);
      } else {
        this.router.navigate(["movies"]);
      }
    }
  }

  logout() {
    sessionStorage.clear();
    this.isLoggedIn = false;
    this.logoutMsg = "You logged out successfully! Come soon...";
    this.router.navigate(["/"]);
  }
}
