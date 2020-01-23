/**
* A pair of shapes that may collide.
* @author saharan
*/
function Pair(s1, s2) {

    // The first shape.
    this.shape1 = s1 || null;
    // The second shape.
    this.shape2 = s2 || null;

    // s1.parent.collisionListeners.forEach((callback) => {
    //     callback(s2.parent.collisionObject);
    // });
};

export { Pair };