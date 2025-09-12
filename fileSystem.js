const fs = require("fs/promises");

// const content=(fs.readFileSync('textFile.txt','utf-8')).toString('utf-8');
// console.log(content);

(async () => {


  const commandFileHandler = await fs.open("command.txt", "r");

  const CREATE_COMMAND="create a file";
    const RENAME_COMMAND="rename the file";
  const DELETE_COMMAND="delete t file";

  commandFileHandler.on("change",async()=>{
  const { size } = await commandFileHandler.stat();
      const buff = Buffer.alloc(size);
      const offset = 0;
      const length = size;
      const position = 0;

      const content = await commandFileHandler.readFile(
        buff,
        offset,
        length,
        position
      );
      console.log(content.toString("utf-8"));
      console.log(content);
  })
  const watcher = fs.watch("./command.txt");

   for await (const event of watcher) {
    if (event.eventType === "change") {
    commandFileHandler.emit("change")
    }
  }
})();
