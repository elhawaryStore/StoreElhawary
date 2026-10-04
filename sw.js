self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('push', function(event) {
  const data = event.data ? event.data.json() : { title: 'إلكترون', body: 'لديك إشعار جديد' };
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: '/icon-192.png'
    })
  );
});
