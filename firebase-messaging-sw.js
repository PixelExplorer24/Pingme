importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

const firebaseConfig = {
  // আপনার index.html থেকে হুবহু কনফিগারেশনটি এখানে কপি করে বসান
  apiKey: "AIzaSyD...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
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