/*
* @Author: Peter
* @Date:   2017-09-09 00:12:40
* @Last Modified by:   Peter
* @Last Modified time: 2017-09-09 00:21:24
*/

var bob = {
    _name: 'Bob',
    _friends: [],
    printFriends() {
        this._friends.forEach(f =>
            console.log(this._name + ' knows ' + f));
    }
};


// Lexical arguments
function square() {
    let example = () => {
        let numbers = [];
        for (let number of arguments) {
            numbers.push(number * number);
        }

        return numbers;
    };

    return example();
}

square(2, 4, 7.5, 8, 11.5, 21); // returns: [4, 16, 56.25, 64, 132.25, 441]

/**
 * Classes
 */
class SkinnedMesh extends THREE.Mesh {
    constructor(geometry, materials) {
        super(geometry, materials);

        this.idMatrix = SkinnedMesh.defaultMatrix();
        this.bones = [];
        this.boneMatrices = [];
    //...
    }
    update(camera) {
    //...
        super.update();
    }
    static defaultMatrix() {
        return new THREE.Matrix4();
    }
}

/**
 * Template Strings
 */
// Basic literal string creation
`This is a pretty little template string.`;

// Multiline strings
`In ES5 this is
 not legal.`;

// Interpolate variable bindings
var name = 'Bob', time = 'today';
`Hello ${name}, how are you ${time}?`;

// Unescaped template strings
String.raw`In ES5 "\n" is a line-feed.`;

// Construct an HTTP request prefix is used to interpret the replacements and construction
GET`http://foo.org/bar?a=${a}&b=${b}
    Content-Type: application/json
    X-Credentials: ${credentials}
    { "foo": ${foo},
      "bar": ${bar}}`(myOnReadyStateChangeHandler);