import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center mb-12">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Technical Expertise</h2>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Comprehensive skills in enterprise integration and architecture
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- MuleSoft -->
          <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-bold text-gray-900 mb-4">MuleSoft Expertise</h3>
            <ul class="space-y-2 text-gray-600">
              <li>• MuleSoft Architecture Design</li>
              <li>• API-led Connectivity</li>
              <li>• Integration Patterns</li>
              <li>• DataWeave Transformations</li>
              <li>• Error Handling & Recovery</li>
            </ul>
          </div>

          <!-- Integration -->
          <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Integration Architecture</h3>
            <ul class="space-y-2 text-gray-600">
              <li>• Enterprise Integration Patterns</li>
              <li>• Microservices Architecture</li>
              <li>• Event-Driven Architecture</li>
              <li>• Service-Oriented Architecture</li>
              <li>• Cloud Integration</li>
            </ul>
          </div>

          <!-- API Design -->
          <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-bold text-gray-900 mb-4">API Design</h3>
            <ul class="space-y-2 text-gray-600">
              <li>• RESTful API Design</li>
              <li>• SOAP Services</li>
              <li>• API Security</li>
              <li>• Swagger/OpenAPI</li>
              <li>• API Governance</li>
            </ul>
          </div>

          <!-- Cloud -->
          <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Cloud Platforms</h3>
            <ul class="space-y-2 text-gray-600">
              <li>• AWS</li>
              <li>• Azure</li>
              <li>• CloudHub</li>
              <li>• Anypoint Platform</li>
              <li>• Runtime Manager</li>
            </ul>
          </div>

          <!-- Development -->
          <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Development</h3>
            <ul class="space-y-2 text-gray-600">
              <li>• Java</li>
              <li>• JavaScript</li>
              <li>• XML/XSLT</li>
              <li>• SQL</li>
            </ul>
          </div>

          <!-- Tools & Practices -->
          <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Tools & Practices</h3>
            <ul class="space-y-2 text-gray-600">
              <li>• Git</li>
              <li>• Jenkins</li>
              <li>• Agile/Scrum</li>
              <li>• JIRA</li>
              <li>• Confluence</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ExpertiseComponent {}