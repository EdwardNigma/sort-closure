function byField(def_str) {
    if (def_str =='name') {
        return function (first_obj, second_obj) {
            if (first_obj.name > second_obj.name) return 1;
            else return -1;
        }
    }
    else return function (first_obj, second_obj) {
        if (first_obj.age > second_obj.age) return 1;
        else return -1;
    }
}

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

  users.sort(byField('name'));
  users.forEach(user => alert(user.name)); // Ann, John, Pete
  
  users.sort(byField('age'));
  users.forEach(user => alert(user.name)); // Pete, Ann, John