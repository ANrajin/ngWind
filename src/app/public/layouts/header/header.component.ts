import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonService } from 'src/app/_core/services/common.service';
import { AdminRoutes } from 'src/app/admin/admin.routes';
import { AppRoutes } from 'src/app/app.routes';
import { Images } from 'src/assets/data/images';
import { PublicRoutes } from '../../public.routes';
import { NgClass } from '@angular/common';

@Component({
  selector: 'public-header',
  standalone: true,
  imports: [RouterLink,NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class PublicHeaderComponent {
  public mainLogo: string = Images.devSkillLogo;
  readonly publicRoutes = PublicRoutes;
  readonly appRoutes = AppRoutes;
  readonly adminRoutes = AdminRoutes;

  isOpen: boolean = true;

  constructor(public readonly commonService: CommonService) {}

  openMobileMenu() {
    this.isOpen = !this.isOpen;

    console.log(this.isOpen);
  }
}
