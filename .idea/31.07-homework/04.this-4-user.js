function ProfileInfo() {
  this.setUserName = function (userName) {
    this.userName = userName;
  }
  this.getUserName = function () {
    return this.userName;
  }
  this.setEmail = function (email) {
    this.email = email;
  }
  this.getEmail = function () {
    return this.email;
  }
  this.setAddress = function (userAddress) {
    this.userAddress = userAddress;
  }
  this.getAddress = function () {
    return this.userAddress;
  }
}

function User() {
  this.setName = function (userName) {
    this.userName = userName;
  }
  this.getName = function () {
    return this.userName;
  }
  this.setAge = function (userAge) {
    this.userAge = userAge;
  }
  this.getAge = function () {
    return this.userAge;
  }
  this.setProfileInfo = function (set) {
    this.profileInfo = profileInfo
  }
  this.getProfileInfo = function () {
    return this.profileInfo
  }
}

const profileInfo = new ProfileInfo();
profileInfo.setUserName('username');
profileInfo.getUserName('username');
profileInfo.setEmail('abc@example.com');
profileInfo.getEmail('abc@example.com')
profileInfo.setAddress('The user address');
profileInfo.getEmail()



const user = new User();
user.setName('John');
user.getName();
user.setAge(63);
user.getAge();
user.setProfileInfo(new ProfileInfo());
console.log(user.getProfileInfo());