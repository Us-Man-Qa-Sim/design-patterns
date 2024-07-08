class Logger {
  private static instance: Logger;

  private constructor() {}

  public static getInstance() {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string) {
    console.log(message);
  }
}

const log = Logger.getInstance();

class Application {
  constructor(private logger: Logger) {}

  run() {
    this.logger.log("Application is running");
  }
}

const app = new Application(log);
app.run();

/**
 * Problem 1:
 * Application is tightly coupled to the Logger class, to instantiate
 * Application class we have to instantiate the logger class which is a Dependency.
 * This issue can happens with any other class not specifically with Singleton but here singleton is global class and most of the
 * methods and function of this class need to implement with other classes that's why specifically mention with singleton class.
 *
 * Problem 2:
 * Testing is difficult, because one instance is shared between different test cases. Unexpected result.
 *
 * Problem 3:
 * We can't create sub-classes of the singleton class because of static so we have to add all the methods which need to add in child
 * class would add in parent class in our case singleton class so this will create singleton class massey.
 *
 * Problem 4:
 * Memory management is very difficult as the size of the class grow.
 *
 * Use cases
 * 1. Logger
 * 2. Shared resources
 * 3. Configurations data
 * 4. Caching
 * 5. Service proxies
 */
