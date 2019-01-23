import uuidv4 from "uuid/v4";

function Utils() {}

Utils.storageKey = "USER";

Utils.getRandomAvatarImg = () => {
  const maxIdx = 100;
  const randIdx = Math.round(Math.random() * maxIdx);
  return `https://randomuser.me/api/portraits/med/men/${randIdx}.jpg`;
};

Utils.getUserInfo = () => {
  let user = localStorage.getItem(Utils.storageKey);

  if (user == null) {
    const randomID = uuidv4();
    user = {
      userId: randomID,
      username: randomID.split("-")[0],
      avatar: Utils.getRandomAvatarImg()
    };
    Utils.updateUserInfo(user);
  } else {
    user = JSON.parse(user);
  }

  return user;
};

Utils.updateUserInfo = user => {
  if (user) {
    localStorage.setItem(Utils.storageKey, JSON.stringify(user));
  }
};

export default Utils;
