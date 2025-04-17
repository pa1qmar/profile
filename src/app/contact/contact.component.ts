import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center mb-12">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Get in Touch</h2>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Let's discuss how I can help with your integration challenges
          </p>
        </div>

        <div class="max-w-3xl mx-auto">
          <form class="grid grid-cols-1 gap-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" name="name" id="name" 
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" id="email" 
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
              <input type="text" name="subject" id="subject" 
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" id="message" rows="4" 
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
            </div>

            <div>
              <button type="submit" 
                class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Send Message
              </button>
            </div>
          </form>

          <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div class="text-center">
              <h3 class="text-lg font-medium text-gray-900">Email</h3>
              <p class="mt-2 text-gray-600">pavan.bww&#64;gmail.com</p>
            </div>
            <div class="text-center">
              <h3 class="text-lg font-medium text-gray-900">LinkedIn</h3>
              <a href="https://linkedin.com" target="_blank" class="mt-2 text-blue-600 hover:text-blue-800">
                View Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent {}