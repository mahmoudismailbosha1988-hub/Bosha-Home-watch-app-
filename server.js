// server.js
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, { cors: { origin: "*" } });

io.on('connection', (socket) => {
    console.log('جهاز جديد اتصل بالنظام:', socket.id);

    // تمرير عرض الاتصال من هاتف المراقبة إلى هاتف العرض
    socket.on('offer', (data) => {
        socket.broadcast.emit('offer', data);
    });

    // تمرير إجابة الاتصال المقابلة
    socket.on('answer', (data) => {
        socket.broadcast.emit('answer', data);
    });

    // تبادل إحداثيات الشبكة المباشرة بين الهاتفين
    socket.on('ice-candidate', (data) => {
        socket.broadcast.emit('ice-candidate', data);
    });
});

http.listen(3000, () => {
    console.log('خادم الإشارات الشفاف يعمل على المنفذ 3000');
});
