
// class Board:
// def __init__(self, size):
//     self.n = size
//     self.pieces = set()

class Board{
    constructor(size){
        this.n = size;
        this.pieces = set();
}

// def size(self):
//     return self.n

size(){
    return this.n
}

// def admissiblePlacementFor(self, piece):
//     for other in self.pieces:
//         if ((other != piece)
//             and other.attacks(piece)
//             or piece.attacks(other)):
//                 return False
//     return True

admissiblePlacementFor(piece){
    for (other in this.pieces){
        if ((other != piece) && other.attacks(piece) || piece.attacks(other)){
            return false;
        }
        return true;
    }
}

// def add(self, piece):
//     self.pieces.add(piece)

add(piece){
    pieces.add(piece)
}

// def remove(self, piece):
//     self.pieces.remove(piece)

remove(piece){
    this.pieces.remove(piece);
}
}