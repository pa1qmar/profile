import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-gray-50">
      <!-- Navigation -->
      <nav class="bg-white border-b border-gray-100">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex">
              <a routerLink="/" class="flex items-center font-semibold text-gray-900">PK.B</a>
            </div>
            <div class="hidden sm:flex sm:space-x-8">
              <a routerLink="/" routerLinkActive="text-blue-600" [routerLinkActiveOptions]="{exact: true}" 
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                Home
              </a>
              <a routerLink="/about" routerLinkActive="text-blue-600"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                About
              </a>
              <a routerLink="/expertise" routerLinkActive="text-blue-600"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                Expertise
              </a>
              <a routerLink="/portfolio" routerLinkActive="text-blue-600"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                Portfolio
              </a>
              <a routerLink="/blog" routerLinkActive="text-blue-600"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                Blog
              </a>
              <a routerLink="/contact" routerLinkActive="text-blue-600"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <!-- Main Content -->
      <main>
        <router-outlet></router-outlet>
      </main>

      <!-- Footer -->
      <footer class="bg-white border-t border-gray-100">
        <div class="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center">
            <div class="text-gray-500 text-sm">
              &copy; 2025 Pavan Kumar Banala
            </div>
            <div class="flex space-x-6">
              <a href="https://www.linkedin.com/in/pavan-banala/" target="_blank" class="text-gray-400 hover:text-gray-500">
                LinkedIn
              </a>
              <a href="mailto:pavan.bww@gmail.com" class="text-gray-400 hover:text-gray-500">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  `
})
export class AppComponent {
  title = 'Pavan Kumar Banala - MuleSoft Technical Architect';
}