importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyAOEmgVj-OzfVaZsNOn47WTdaCrb5h8h_s",
      authDomain: "ping-me-app-475d1.firebaseapp.com",
      databaseURL: "https://ping-me-app-475d1-default-rtdb.firebaseio.com",
      projectId: "ping-me-app-475d1",
      storageBucket: "ping-me-app-475d1.firebasestorage.app",
      messagingSenderId: "41337345094",
      appId: "1:41337345094:web:0a6f31fd1dd0a1f6026647",
    };

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// ব্যাকগ্রাউন্ডে মেসেজ আসলে যা ঘটবে
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png' // আপনার অ্যাপের আইকনের পাথ দিন
  };

  self.registration.showNotification(notificationTitle, notificationOptions);

});
