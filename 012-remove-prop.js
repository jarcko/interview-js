const removeProp = prop => ({ [prop]: _, ...rest }) => rest;
//                 ----       ------
//                      \   /
//               dynamic destructuring

const user = {
    id: 1234,
    name: 'John Smith',
    pass: 'Password!'
};

removeProp('pass')(user); // { id: 1234, name: 'John Smith' }

// Without carring

const removeProp2 = (obj, prop) => (({ [prop]: _, ...rest }) => rest)(obj);

removeProp2(user, 'pass'); // { id: 1234, name: 'John Smith' }
