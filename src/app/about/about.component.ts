import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center mb-12">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            About Me
          </h2>
          <p class="mt-4 max-w-2xl text-xl text-gray-700 lg:mx-auto">
            A passionate MuleSoft Technical Architect with 16+ years of experience in enterprise integration
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="glass-effect p-8 rounded-lg shadow-sm mb-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Professional Journey</h3>
            <p class="text-gray-700 mb-4">
              With over 16 years in the industry, I've specialized in designing and implementing complex enterprise integration solutions. 
              My expertise spans across various domains including retail, healthcare, and banking sectors.
            </p>
            <p class="text-gray-700 mb-4">
              As a MuleSoft Technical Architect, I've led numerous successful digital transformation initiatives, 
              helping organizations modernize their integration landscape and achieve their business objectives.
            </p>
          </div>

          <div class="glass-effect p-8 rounded-lg shadow-sm mb-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Core Values</h3>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-center">
                <span class="mr-2">•</span>
                Excellence in architectural design
              </li>
              <li class="flex items-center">
                <span class="mr-2">•</span>
                Focus on scalability and performance
              </li>
              <li class="flex items-center">
                <span class="mr-2">•</span>
                Commitment to best practices
              </li>
              <li class="flex items-center">
                <span class="mr-2">•</span>
                Continuous learning and improvement
              </li>
              <li class="flex items-center">
                <span class="mr-2">•</span>
                Strong emphasis on knowledge sharing
              </li>
            </ul>
          </div>

          <div class="glass-effect p-8 rounded-lg shadow-sm">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Current Focus</h3>
            <p class="text-gray-700 mb-4">
              Currently focused on helping organizations leverage API-led connectivity and 
              modern integration patterns to build robust, scalable, and maintainable solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {}