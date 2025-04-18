import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center mb-12">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            Project Portfolio
          </h2>
          <p class="mt-4 max-w-2xl text-xl text-gray-700 lg:mx-auto">
            Showcasing successful enterprise integration projects
          </p>
        </div>

        <div class="max-w-4xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
          <!-- Retail Integration Project -->
          <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Retail Integration Platform</h3>
            <p class="text-gray-600 mb-4">
              Led the development of a comprehensive retail integration platform handling 
              inventory, orders, and customer data across multiple systems.
            </p>
            <div class="mb-4">
              <h4 class="font-semibold text-gray-900">Technologies:</h4>
              <p class="text-gray-600">MuleSoft, RESTful APIs, Salesforce, SAP</p>
            </div>
            <div class="mb-4">
              <h4 class="font-semibold text-gray-900">Achievements:</h4>
              <ul class="list-disc pl-5 text-gray-600">
                <li>40% reduction in integration latency</li>
                <li>99.9% system availability</li>
                <li>Seamless omnichannel experience</li>
              </ul>
            </div>
          </div>

          <!-- Healthcare API Solution -->
          <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Healthcare API-led Connectivity</h3>
            <p class="text-gray-600 mb-4">
              Designed and implemented API-led connectivity solution for a major healthcare provider, 
              enabling secure patient data exchange.
            </p>
            <div class="mb-4">
              <h4 class="font-semibold text-gray-900">Technologies:</h4>
              <p class="text-gray-600">MuleSoft, FHIR, HL7, OAuth 2.0</p>
            </div>
            <div class="mb-4">
              <h4 class="font-semibold text-gray-900">Achievements:</h4>
              <ul class="list-disc pl-5 text-gray-600">
                <li>HIPAA compliant integration</li>
                <li>50% faster patient data access</li>
                <li>Reduced operational costs by 30%</li>
              </ul>
            </div>
          </div>

          <!-- Banking Integration -->
          <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Banking Integration Solution</h3>
            <p class="text-gray-600 mb-4">
              Architected core banking system integration, enabling real-time transaction processing 
              and account management.
            </p>
            <div class="mb-4">
              <h4 class="font-semibold text-gray-900">Technologies:</h4>
              <p class="text-gray-600">MuleSoft, ISO20022, SWIFT, Oracle</p>
            </div>
            <div class="mb-4">
              <h4 class="font-semibold text-gray-900">Achievements:</h4>
              <ul class="list-disc pl-5 text-gray-600">
                <li>Real-time transaction processing</li>
                <li>Enhanced security measures</li>
                <li>Improved customer satisfaction</li>
              </ul>
            </div>
          </div>

          <!-- Legacy Migration -->
          <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Legacy System Migration</h3>
            <p class="text-gray-600 mb-4">
              Successfully migrated legacy integration systems to modern MuleSoft architecture, 
              improving maintainability and performance.
            </p>
            <div class="mb-4">
              <h4 class="font-semibold text-gray-900">Technologies:</h4>
              <p class="text-gray-600">MuleSoft, Java, WebSphere, Microservices</p>
            </div>
            <div class="mb-4">
              <h4 class="font-semibold text-gray-900">Achievements:</h4>
              <ul class="list-disc pl-5 text-gray-600">
                <li>Zero downtime migration</li>
                <li>60% reduction in maintenance costs</li>
                <li>Improved system scalability</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class PortfolioComponent {}