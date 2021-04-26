export const today = new Date();
export const todayShort = today.toLocaleDateString("en-US");
export const wishDateMaker = (birthdate, next) => {
  const birthday = new Date(birthdate);
  birthday.setFullYear(today.getFullYear());
  if (next) {
    birthday.setFullYear(today.getFullYear() + 1);
  }
  console.log(birthday.toLocaleDateString("en-US"));
  return birthday.toLocaleDateString("en-US");
};

export const isBirthday = (wishday) => {
  const birthday = new Date(wishday);
  return birthday.toLocaleDateString("en-US") === todayShort;
};
