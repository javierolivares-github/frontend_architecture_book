import { Server } from 'miragejs';

let server = new Server();

export const mockServer = () => {
  server.get('/api/products/', {
    data: [
      { 
        id: 1, 
        name: 'Latte', 
        price: '2.90',
        imageUrl: 'https://source.unsplash.com/tNALoIZhqVM/200x100/',
        isOnSale: false,
        isSoldOut: false,
      },
      { 
        id: 2, 
        name: 'Mocha', 
        price: '3.20',
        imageUrl: 'https://images.unsplash.com/photo-1503481766315-7a586b20f66d?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isOnSale: true,
        isSoldOut: false,
      },
      { 
        id: 3, 
        name: 'Expresso', 
        price: '1.90',
        imageUrl: 'https://images.unsplash.com/photo-1591377176334-bdf958755f28?q=80&w=1789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isOnSale: false,
        isSoldOut: true,
      },
    ],
  });
}
