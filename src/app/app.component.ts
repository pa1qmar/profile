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
      <nav class="bg-white shadow-lg">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex justify-between h-16">
            <div class="flex">
              <div class="flex-shrink-0 flex items-center">
                <span class="text-xl font-bold text-gray-800">PK.B</span>
              </div>
              <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a routerLink="/" routerLinkActive="border-blue-500 text-gray-900" [routerLinkActiveOptions]="{exact: true}" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Home
                </a>
                <a routerLink="/about" routerLinkActive="border-blue-500 text-gray-900" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  About
                </a>
                <a routerLink="/expertise" routerLinkActive="border-blue-500 text-gray-900" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Expertise
                </a>
                <a routerLink="/portfolio" routerLinkActive="border-blue-500 text-gray-900" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Portfolio
                </a>
                <a routerLink="/blog" routerLinkActive="border-blue-500 text-gray-900" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Blog
                </a>
                <a routerLink="/contact" routerLinkActive="border-blue-500 text-gray-900" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <!-- Main Content -->
      <main>
        <router-outlet></router-outlet>
      </main>

      <!-- Footer -->
      <footer class="bg-gray-800 text-white">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center">
            <div>
              <p>&copy; 2025 Pavan Kumar Banala. All rights reserved.</p>
            </div>
            <div class="flex space-x-6">
              <a href="https://linkedin.com" target="_blank" class="text-gray-300 hover:text-white">
                LinkedIn
              </a>
              <a href="mailto:contact@example.com" class="text-gray-300 hover:text-white">
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