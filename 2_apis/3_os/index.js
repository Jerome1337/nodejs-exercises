const os = require("os");

console.log(os.cpus());

const ram = () => {
  const freeMem = os.freemem();
  const totalMem = os.totalmem();

  const gbFreeMem = freeMem / 1024 / 1024 / 1024;
  const gbTotalMem = totalMem / 1024 / 1024 / 1024;

  return {
    freeMem: Math.floor(gbFreeMem),
    totalMem: Math.floor(gbTotalMem),
    freePercentage: Math.floor((gbFreeMem / gbTotalMem) * 100),
    unit: "GB",
  };
};

console.log(ram());

const osInfos = () => {
  const userInfo = os.userInfo();

  console.log(userInfo);

  const { username, homedir, shell } = os.userInfo();

  console.log(username);
  console.log(homedir);
  console.log(shell);

  return {
    architecture: os.arch(),
    platform: os.platform(),
    type: os.type(),
    uptime: Math.floor(os.uptime() / 3600), // en heure
    username: userInfo.username,
    homedir: userInfo.homedir,
    shell: userInfo.shell,
  };
};

console.log(osInfos());
