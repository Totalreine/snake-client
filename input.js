let connection;

const setupInput = function (conn) {
    connection = conn
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);
    return stdin;
  };

  const handleUserInput = function (key) {
    if (key === '\u0003') {
        process.exit(); 
    }
    if(key === "\u0077") {
    connection.write("Move: up");
    }
    if(key === "\u0073") {
    connection.write("Move: down");
    }
    if(key === "\u0064") {
    connection.write("Move: right");
    }
    if(key === "\u0061") {
    connection.write("Move: left");
    }
    if(key === "\u0072") {
    connection.write("Say: Hello");
    }
    if(key === "\u0074") {
    connection.write("Say: bye");
    }
    
  };



module.exports = {
    setupInput
}