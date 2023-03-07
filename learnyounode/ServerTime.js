const net = require('net');
const server = net.createServer(socket => {
  const now = new Date();
  const dateStr = `${now.getFullYear()}-${zeroPad(now.getMonth() + 1)}-${zeroPad(now.getDate())} ${zeroPad(now.getHours())}:${zeroPad(now.getMinutes())}\n`;
  socket.end(dateStr);
});
server.listen(process.argv[2]);
function zeroPad(num) {
  return num < 10 ? `0${num}` : num;
}