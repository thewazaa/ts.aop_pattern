import * as _worker from "./src/AopWorker";
import * as _class from "./src/Aop";

/**
 * Auxiliar classes to be able to perform a basic AOP contorl of your code.
 * (https://en.wikipedia.org/wiki/Aspect-oriented_programming)
 */
namespace aop_pattern {
  export import AopWorker = _worker.AopWorker;
  export import Aop = _class.Aop;
}

export default aop_pattern;
