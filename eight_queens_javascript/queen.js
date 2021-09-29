// from Piece import Piece

import Piece from Piece;

// class Queen(Piece):
//     def __init__(self):
//         Piece.__init__(self)

class Queen extends Piece{
    constructor(){
        super() // not sure
    }

//     def attacks(self, piece):
//         i = self.rowIndex()
//         j = self.colIndex()
//         u = piece.rowIndex()
//         v = piece.colIndex()
//         return (
//             self.isMindfulOf(piece)
//             and ((i == u)
//                 or (j == v)
//                 or (i-j == u-v)
//                 or (i+j == u+v)) )

attacks(piece){
    i=this.rowIndex();
    j=this.colIndex();


u = piece.rowIndex();
v = piece.colIndex();

return (this.isMindfulOf(piece) && (i==u) || (j==v) || (i-j == u-v) || (i+j == u+v));
    }
}