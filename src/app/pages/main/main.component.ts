import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { IUser } from '../../core/interfaces/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  user: IUser;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getUser();
  }

  async getUser() {
    try {
      const res: any = await this.authService.getUser().toPromise();
      this.user = res.user;
    } catch (e) {

    } finally {

    }
  }

}
