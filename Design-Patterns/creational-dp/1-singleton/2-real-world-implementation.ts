/////// My Implementation
// class Logger {
//   private static instance: Logger;
//   private static _message: string;

//   private constructor() {}

//   public static getInstance() {
//     if (!Logger.instance) {
//       Logger.instance = new Logger();
//     }
//     return Logger.instance;
//   }

//   set log(message: string) {
//     Logger._message = message;
//   }

//   get log(): string {
//     return Logger._message;
//   }
// }

// const logger1 = Logger.getInstance();
// const logger2 = Logger.getInstance();

// logger1.log = "Hello Usman Qasim";
// console.log("1. ", logger1.log);
// console.log("1. ", logger2.log);

////////////////////////////////////////////

// class Logger {
//   private static instance: Logger;

//   private constructor() {}

//   public static getInstance() {
//     if (!Logger.instance) {
//       Logger.instance = new Logger();
//     }
//     return Logger.instance;
//   }

//   public log(message: string) {
//     console.log(message);
//   }
// }

// const logger1 = Logger.getInstance();
// const logger2 = Logger.getInstance();

// logger1.log("Hello Usman Qasim");
// logger2.log("Hello Usman Qasim");

/**
 * Use cases
 * When we log messages to a file, we have to access this file. If we have multiple instances of Logger file how can we access
 * the file? Because one class access the file and lock the resource. So the other instances can't have access to the file.
 * That's why singleton is necessary for log into the file
 */
