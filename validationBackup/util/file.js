const fs = require("fs");

const deleteFile = (filePath) => {
  // This function is used to delete a file from the file system.
  fs.unlink(filePath, (err) => {
    if (err) {
      throw err;
    }
  });
};

exports.deleteFile = deleteFile;
