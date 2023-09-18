import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(): void { }
  toggleClass(list: HTMLDivElement): void {
    if (list.style.right == '0px') {
      list.style.right = '-100%'
    } else {
      list.style.right = '0px'
    }
  }
}
