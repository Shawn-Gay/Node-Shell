const ls = require('./ls');
const pwd = require('./pwd');
const cat = require('./cat');
const curl = require('./curl');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if (cmd == 'ls') {
    ls();
  } else if (cmd == 'pwd') {
    pwd();
  } else if (cmd.startsWith('cat')) {
    cat(cmd.slice(4));
  } else if (cmd.startsWith('curl')) {
    curl(cmd.slice(5));
  } else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
});
