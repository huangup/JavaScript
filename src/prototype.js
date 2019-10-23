function Parent(name) {
    this.name = name;
}

Parent.prototype.say = function () {
    log("Hello, " + this.name + "!");
}

function Children(name) {
    this.name = name;
}

Children.prototype = new Parent();

// Children.prototype.say = function(){
//     log("Hello, " + this.name + "! hoo~~");
// }

var parent = new Parent("Sam");

var child = new Children("Samson");

parent.say(); // ==> "Hello, Sam!"

child.say(); // ==> "Hello, Samson! hoo~~"

log(child instanceof Children); // ==> true