var exec = require('child_process').exec;

var pbi = 'prebuild-install';
var platform = process.env.TARGET_PLATFORM || process.platform;
var arch = process.env.TARGET_ARCH || process.arch;

console.log('ARCH:', arch, 'PLATFORM:', platform);

if (process.env.npm_config_zmq_external == "true") {
  console.log('Requested to use external libzmq. Skipping download of prebuilt binaries.');
  process.exit(1);
}

if (
  platform === 'linux' &&
  (arch === 'arm' || arch === 'arm64')
) {
  var armv = (arch === 'arm64') ? '8' : process.config.variables.arm_version;
  pbi += ' --arch=armv' + armv;
}

console.log(pbi);

exec(pbi, function(err, stdout, stderr) {
  console.log(stdout);
  console.log(stderr);
  if (err) process.exit(1);
});
