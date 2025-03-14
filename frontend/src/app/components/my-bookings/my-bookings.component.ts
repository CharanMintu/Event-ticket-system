import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Booking {
  id: number;
  eventId: number;
  event: {
    name: string;
    type: string;
  };
  numberOfTickets: number;
  totalPrice: number;
  status: string;
  showTime?: string;
}

@Component({
  selector: 'app-my-bookings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {
  bookings: Booking[] = [];

  ngOnInit() {
    this.fetchUserBookings();
  }

  async fetchUserBookings() {
    try {
      console.log('Fetching bookings...');
      const userId = localStorage.getItem('userId');
      if (!userId) {
        console.error('No user ID found');
        return;
      }

      const response = await fetch(`http://localhost:8080/api/bookings/users/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      const responseText = await response.text();
      console.log('Raw response:', responseText);

      if (response.ok) {
        const data = JSON.parse(responseText);
        console.log('Parsed bookings:', data);
        this.bookings = data;
      } else {
        console.error('Failed to fetch bookings:', responseText);
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  }

  onStatusChange(status: string, bookingId: number | undefined) {
    if (status && bookingId) {
      this.updateStatus(bookingId, status);
    }
  }

  async updateStatus(bookingId: number, status: string) {
    try {
      const response = await fetch(`http://localhost:8080/api/bookings/${bookingId}/status?status=${status}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (response.ok) {
        await this.fetchUserBookings();
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  }

  async cancelBooking(bookingId: number | undefined) {
    if (!bookingId) return;
    try {
      const response = await fetch(`http://localhost:8080/api/bookings/${bookingId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (response.ok) {
        await this.fetchUserBookings();
      }
    } catch (error) {
      console.error('Error cancelling booking:', error);
    }
  }

  async confirmPayment(bookingId: number | undefined) {
    if (!bookingId) return;
    try {
      const paymentId = 'PAY' + Math.random().toString(36).substr(2, 9);
      const response = await fetch(`http://localhost:8080/api/bookings/${bookingId}/confirm-payment?paymentId=${paymentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (response.ok) {
        await this.fetchUserBookings();
      }
    } catch (error) {
      console.error('Error confirming payment:', error);
    }
  }

  // Remove the second updateStatus method that was duplicated
}