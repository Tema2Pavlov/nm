import { Injectable } from '@angular/core';
import { User } from '../models/redesign.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [
    {
      name: 'Artem',
      surname: 'Pavlov',
      age: 20,
      phone: '88005553535',
      joke: '',
      icon: 'man',
      id: 120
    },
    {
      name: 'Artem',
      surname: 'Zolotov',
      age: 120,
      phone: '00000000000',
      joke: '',
      icon: 'circle',
      id: 121
    },
    {
      name: 'Artem',
      surname: 'Kirkorov',
      age: 60,
      phone: '89213858585',
      joke: '',
      icon: 'drive_eta',
      id: 122
    }
  ]

  constructor() { }

  getUsers() {
    return this.users;
  }

  getUser(id: number) {
    const user = this.users.find(user => user.id === id);
    if (!user) {
      return {};
    }
    return user;
  }
}
