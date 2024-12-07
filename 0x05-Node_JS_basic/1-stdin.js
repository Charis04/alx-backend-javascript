console.log('Welcome to ALX, what is your name?');
process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data.toString()}`);
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
