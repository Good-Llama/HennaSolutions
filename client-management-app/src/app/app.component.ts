import { Component, OnInit } from '@angular/core';
import { Item } from './item'; // Import Item model if you have defined it

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true // Add standalone: true flag
})
export class AppComponent implements OnInit {
  isLoading: boolean = true;
  errorMessage: string = '';
  items: Item[] = []; // Assuming you have defined the Item model

  ngOnInit() {
    // Initialize your data here or fetch it from a service
    // For example:
    this.fetchItems();
  }

  fetchItems() {
    // Mock data fetching or API call
    setTimeout(() => {
      this.isLoading = false;
      // Assuming items are fetched successfully
      this.items = [
        { id: 1, name: 'Item 1', description: 'Description for Item 1' },
        { id: 2, name: 'Item 2', description: 'Description for Item 2' },
        // Add more items as needed
      ];
    }, 2000); // Simulating a delay of 2 seconds
  }
}
