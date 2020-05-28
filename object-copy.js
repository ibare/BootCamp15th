const obj1 = {
  name: 'foo',
  age: 20,
  familyName: '박',
  level: {
    type: {
      
    }
  }
};

const obj2 = Object.assign({}, obj1);
const obj3 = { ...obj1 };
const obj4 = JSON.parse(JSON.stringify(obj1));

Object.keys(obj1).forEach(key => {
  obj2[key] = obj1[key];
});





