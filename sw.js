self.addEventListener('push', function(event) {
  const data = event.data ? event.data.json() : {};
  const title = data.title || '🚌 Bus Alert';
  const options = {
    body: data.body || 'The bus is nearby!',
    icon: null,
    badge: null
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});