import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  email: string = 'tyoto';

  data = {
    email: "nico"
  }


  constructor(private router: Router) {
    this.email = 'coucou';
  }

  ngOnInit(): void {
  }

  onViewAllArticles() {
    this.router.navigateByUrl('/articles');
  }

  onSubmitForm(): void {
    console.log(this.email);

  }

}
