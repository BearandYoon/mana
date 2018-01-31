import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getUser();
  }

  async getUser() {
    try {
      const res = await this.authService.getUser().toPromise();
      console.log(res);
    } catch(e) {

    } finally {

    }
  }

}
