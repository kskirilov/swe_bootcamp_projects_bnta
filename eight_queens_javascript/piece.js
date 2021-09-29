// class Piece:
//     def __init__(self):
//         self.board = None
//         self.i = None
//         self.j = None

class Piece{
    constructor(){
        this.board = null;
        self.i = null;
        self.j = null;
    }

//     def isOnBoard(self):
//         return self.board != None

isOnBoard(){
    return this.board != null;
}

//     def placeOn(self, board, i, j):
//         if (not self.isOnBoard()
//             and (0 <= i)
//             and (i < board.size())
//             and (0 <= j)
//             and (j < board.size()) ):
//                 self.board = board;
//                 self.i = i;
//                 self.j = j;
//                 board.add( self );

placeOn(board, i, j){
    //not sure what "not self.isOnboard" means
    if (this.onBoard() = false && 0<=i && i<board.size() && 0<=j && j<board.size()){
        this.board = board;
        this.i = i;
        this.j = j;
        board.add(this);
    }
}


//     def removeFromBoard(self):
//         if (self.isOnBoard()):
//             self.board.remove(self)
//             self.board = None

removeFromBoard(){
    if(this.isOnBoard()){
        this.board.remove(this);
        this.board = null; //assuming "None" in Python = null in JS
    }
}

//     def attacks(self, piece):
//         raise Exception("An abstract method has been invoked")

attacks(piece){
    return error; //not sure how to raise Exception in JS exactly?
}

//     def isMindfulOf(self, piece):
//         return ((piece!=None)
//                 and self.isOnBoard()
//                 and piece.isOnBoard()
//                 and self.board == piece.board
//                 and self != piece)
    

isMindfulOf(piece){
    return ((piece!=null) && this.isOnBoard() && piece.isOnBoard() && this.board == piece.board && this != piece)
}

//     def rowIndex(self):
//         if (self.isOnBoard()):
//             return self.i
//         else:
//             return self.UNKNOWN

rowIndex(){
    if(this.isOnBoard()){
        return this.i;
    }
    else{
        return this.UNKNOWN
    }
}

//     def colIndex(self):
//         if (self.isOnBoard()):
//             return self.j;
//         else:
//             return self.UNKNOWN

colIndex(){
    if(this.isOnBoard()){
        return this.j;
    }
    else{
        return this.UNKNOWN;
    }
}

//     UNKNOWN = -1

UNKNOWN = -1;
}