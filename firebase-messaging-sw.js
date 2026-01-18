/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

let initialized = false;
try {
  importScripts('/__/firebase/init.js');
  initialized = true;
} catch (e) {
  initialized = false;
}

if (!initialized) {
  firebase.initializeApp({
    apiKey: 'AIzaSyAZOKKwLQBkpiLlHv-MyydVWY3qafJ9CXY',
    authDomain: 'apss-22224.firebaseapp.com',
    projectId: 'apss-22224',
    storageBucket: 'apss-22224.firebasestorage.app',
    messagingSenderId: '984799256139',
    appId: '1:984799256139:web:e61b07214ee6dcb75177ce',
  });
}

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notification = payload.notification || {};
  const title = notification.title || 'New package';
  const options = {
    body: notification.body || '',
    data: payload.data || {},
  };
  self.registration.showNotification(title, options);
});
