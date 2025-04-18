import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center mb-12">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            Technical Insights
          </h2>
          <p class="mt-4 max-w-2xl text-xl text-gray-700 lg:mx-auto">
            Sharing knowledge and experiences from the integration world
          </p>
        </div>

        <div class="max-w-4xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
<!-- Article 1 -->
<div class="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
            <div class="p-6">
              <div class="text-sm text-gray-500 mb-2">March 15, 2025</div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                API-Led Connectivity: A Strategic Approach
              </h3>
              <p class="text-gray-600 mb-4">
                Explore how API-led connectivity can transform your integration landscape and 
                enable digital transformation.
              </p>
              <a href="#" class="text-blue-600 hover:text-blue-800">Read more →</a>
            </div>
          </div>

          <!-- Article 2 -->
          <div class="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
            <div class="p-6">
              <div class="text-sm text-gray-500 mb-2">March 1, 2025</div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                Best Practices for MuleSoft Development
              </h3>
              <p class="text-gray-600 mb-4">
                Key practices and patterns for building robust, maintainable MuleSoft applications.
              </p>
              <a href="#" class="text-blue-600 hover:text-blue-800">Read more →</a>
            </div>
          </div>

          <!-- Article 3 -->
          <div class="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
            <div class="p-6">
              <div class="text-sm text-gray-500 mb-2">February 15, 2025</div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                Securing MuleSoft APIs
              </h3>
              <p class="text-gray-600 mb-4">
                Comprehensive guide to implementing security in your MuleSoft applications.
              </p>
              <a href="#" class="text-blue-600 hover:text-blue-800">Read more →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class BlogComponent {}