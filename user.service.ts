import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  private nextUserId = 1;

  constructor() {}

  addUser(user: User): void {
    const users = this.users.value;
    user.id = this.nextUserId++;
    this.users.next([...users, user]);
  }

  updateUser(user: User): void {
    const users = this.users.value;
    const userIndex = users.findIndex(u => u.id === user.id);
    if (userIndex !== -1) {
      users[userIndex] = user;
      this.users.next(users);
    }
  }

  deleteUser(user: User): void {
    const users = this.users.value;
    const updatedUsers = users.filter(u => u.id !== user.id);
    this.users.next(updatedUsers);
  }

  getUsers(): Observable<User[]> {
    return this.users.asObservable();
  }

}
