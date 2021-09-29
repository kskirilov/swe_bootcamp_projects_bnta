const fs = require("fs");

const read = () => {
  fs.readFile("save.json", "utf8", (err, data) => {
    if (err) {
      return console.error(err);
    }
    console.log(data);
  });
};

const write = (jsonData) => {
  const dataString = JSON.stringify(jsonData, null, 2);
  fs.writeFile("save.json", dataString, { flag: "a" }, (err, data) => {
    if (err) {
      return console.error(err);
    }
    console.log(data);
  });
};

const del = () => {
  fs.unlink("save.json", (err) => {
    if (err) throw err;
    console.log("\nDeleted file: save.json");
  });
};

module.exports = {
    read,
    write,
    del
}


// module.exports = {
//     Character,
//     Mage,
//     Warrior,
//     Thief,
//     calculateTotalHP, 
//     calculateLevel, 
//     calculateAD
// };


// const read = async () => {
//     try {
//         const response = await fs.readFile('save.json');
//         const data = JSON.parse(response);
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }


// const write = async (dataToBeSaved) => {
//     const data = JSON.stringify(dataToBeSaved, null, 2);
//     try {
//         await fs.writeFile('save.json', data);
//         console.log("Data written to be save.json");
//     } catch (error) {
//         console.log(error);
//     }
// };

// const del = async () => {
//     try {
//         fs.unlink("save.json")
//         console.log("\nDeleted file: save.json");
        
//     } catch (error) {
//         console.log(error);
//     }   
// }

// const obj = {
//     name: "Bianca",
//     age: "baby",
// }

// write(obj)
// read()
// del()


// const read = (callback) => fs.readFile("./save.json", (err, state) => {
//     if (err) {
//         // File could not be read... not found, bad permissions,
//         // out of file descriptors on OS...
//         return callback(err)
//     }
//     try {
//         // Attempt to parse the contents of the state file.
//         return callback(null, JSON.parse(state));
//     } catch (err) {
//         // Unable to parse, return the error to caller.
//         return callback(err);
//     }
// });
// // Write the stringified state object to the save file.
// const write = (state, callback) =>
//     fs.writeFile("save.json", JSON.stringify(state, null, 2), callback);

//Delete method
// const del = callback => fs.unlink("save.json", callback);

// promisify the exports
// const util = require('util');
//     module.exports = {
//         read: util.promisify(read),
//         write: util.promisify(write),
//         del: util.promisify(del)
// };
