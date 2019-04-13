import * as _worker from "./src/AopWorker";
import * as _class from "./src/Aop";

namespace aop_pattern {
  export import AopWorker = _worker.AopWorker;
  export import Aop = _class.Aop;
}

/**
 * Auxiliar classes to be able to perform a basic AOP contorl of your code.
 * (https://en.wikipedia.org/wiki/Aspect-oriented_programming)
 *
 * * 1.0.0 Initial release
 */
export default aop_pattern;
