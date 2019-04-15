"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Aop {
    constructor(type, className) {
        this.type = type;
        this.className = className;
    }
    _intereceptPromise(methodName, _arguments, promise, extra) {
        return __awaiter(this, void 0, void 0, function* () {
            var aux = new this.type();
            var ret;
            var path = this.className != undefined ? this.className + "." + methodName : methodName;
            try {
                aux._extra = extra;
                aux.start(path, _arguments);
                ret = yield promise;
                return ret;
            }
            catch (err) {
                aux.exception(path, _arguments, err);
            }
            finally {
                aux.end(path, _arguments, ret);
            }
        });
    }
    _intereceptMethod(methodName, _arguments, method, extra) {
        var aux = new this.type();
        var ret = undefined;
        var path = this.className != undefined ? this.className + "." + methodName : methodName;
        try {
            aux._extra = extra;
            aux.start(path, _arguments);
            ret = method();
            return ret;
        }
        catch (err) {
            aux.exception(path, _arguments, err);
            throw err;
        }
        finally {
            aux.end(path, _arguments, ret);
        }
    }
}
exports.Aop = Aop;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW9wLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0FvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsTUFBYSxHQUFHO0lBNkNkLFlBQVksSUFBbUIsRUFBRSxTQUFrQjtRQUNqRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM3QixDQUFDO0lBVVksa0JBQWtCLENBQUMsVUFBa0IsRUFBRSxVQUFlLEVBQUUsT0FBcUIsRUFBRSxLQUFXOztZQUNyRyxJQUFJLEdBQUcsR0FBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM3QixJQUFJLEdBQTZCLENBQUM7WUFDbEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1lBQ3ZGLElBQUk7Z0JBQ0YsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ25CLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUM1QixHQUFHLEdBQUcsTUFBTSxPQUFPLENBQUM7Z0JBQ3BCLE9BQU8sR0FBRyxDQUFDO2FBQ1o7WUFBQyxPQUFPLEdBQUcsRUFBRTtnQkFDWixHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDdEM7b0JBQVM7Z0JBQ1IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ2hDO1FBQ0gsQ0FBQztLQUFBO0lBVU0saUJBQWlCLENBQUMsVUFBa0IsRUFBRSxVQUFlLEVBQUUsTUFBZ0IsRUFBRSxLQUFXO1FBQ3pGLElBQUksR0FBRyxHQUFNLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFRLFNBQVMsQ0FBQztRQUN6QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDdkYsSUFBSTtZQUNGLEdBQUcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQzVCLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQztZQUNmLE9BQU8sR0FBRyxDQUFDO1NBQ1o7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNyQyxNQUFNLEdBQUcsQ0FBQztTQUNYO2dCQUFTO1lBQ1IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztDQUNGO0FBbEdELGtCQWtHQyJ9