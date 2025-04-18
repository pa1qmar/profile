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
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Me</h2>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            A passionate MuleSoft Technical Architect with 16+ years of experience in enterprise integration
          </p>
        </div>

        <!-- Certifications Section -->
        <div class="mb-16">
          <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Certifications</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <h4 class="text-lg font-semibold text-gray-900 mb-2">MuleSoft Certified Platform Architect - Level 1</h4>
              <p class="text-gray-600">Expertise in designing and implementing MuleSoft solutions</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <h4 class="text-lg font-semibold text-gray-900 mb-2">MuleSoft Certified Developer - Level 1</h4>
              <p class="text-gray-600">Advanced development skills in MuleSoft applications</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <h4 class="text-lg font-semibold text-gray-900 mb-2">AWS Certified Solutions Architect</h4>
              <p class="text-gray-600">Expertise in designing distributed systems on AWS</p>
            </div>
          </div>
        </div>

        <div class="prose prose-lg mx-auto">
          <div class="bg-gray-50 p-8 rounded-lg shadow-sm mb-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Professional Journey</h3>
            <p class="text-gray-600 mb-4">
              With over 16 years in the industry, I've specialized in designing and implementing complex enterprise integration solutions. 
              My expertise spans across various domains including retail, healthcare, and banking sectors.
            </p>
            <p class="text-gray-600 mb-4">
              As a MuleSoft Technical Architect, I've led numerous successful digital transformation initiatives, 
              helping organizations modernize their integration landscape and achieve their business objectives.
            </p>
          </div>

          <div class="bg-gray-50 p-8 rounded-lg shadow-sm mb-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Core Values</h3>
            <ul class="list-disc pl-5 text-gray-600">
              <li>Excellence in architectural design</li>
              <li>Focus on scalability and performance</li>
              <li>Commitment to best practices</li>
              <li>Continuous learning and improvement</li>
              <li>Strong emphasis on knowledge sharing</li>
            </ul>
          </div>

          <div class="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Current Focus</h3>
            <p class="text-gray-600 mb-4">
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