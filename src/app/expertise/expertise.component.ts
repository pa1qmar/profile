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
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            Technical Expertise
          </h2>
          <p class="mt-4 max-w-2xl text-xl text-gray-700 lg:mx-auto">
            Comprehensive skills in enterprise integration and architecture
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <!-- Certifications Banner -->
          <div class="glass-effect p-8 rounded-lg shadow-sm mb-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Professional Certifications</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="skill-badge p-6 rounded-lg hover:shadow-lg">
                <h4 class="text-lg font-semibold text-gray-900 mb-2">MuleSoft Certified Platform Architect - Level 1</h4>
                <p class="text-gray-700">Advanced expertise in MuleSoft architecture and design patterns</p>
              </div>
              <div class="skill-badge p-6 rounded-lg hover:shadow-lg">
                <h4 class="text-lg font-semibold text-gray-900 mb-2">MuleSoft Certified Developer - Level 1</h4>
                <p class="text-gray-700">Proficient in MuleSoft development and best practices</p>
              </div>
              <div class="skill-badge p-6 rounded-lg hover:shadow-lg">
                <h4 class="text-lg font-semibold text-gray-900 mb-2">AWS Certified Solutions Architect</h4>
                <p class="text-gray-700">Expert in cloud architecture and AWS services</p>
              </div>
            </div>
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