import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <hr class="w-75 mt-5 mb-2 m-auto">
    <footer class="text-center fs-6" >
      <p>&copy; DWAPS - 2022 / {{ currentYear }}</p>
    </footer>
  `,
  styles: [
  ]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}