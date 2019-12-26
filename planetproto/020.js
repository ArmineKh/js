// -> Create a machine object
//    with a property motors = 4
__
let machine = {
	motors: 4
}

// -> Create a robot object
//    with a property friendly = true
__
let robot = {
	friendly: true
}

// -> Create a robby object
__
let robby = {};

// -> Make machine the prototype of robot
__
robot.__proto__ = machine;

// -> Make robot the prototype of robby
__
robby.__proto__ = robot;

// -> What is `robby.motors`?
claim(robby.motors, 4);

// -> What is `robby.friendly`?
claim(robby.friendly === true, true);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	machine: machine,
	robot:   robot,
	robby:   robby
}
