var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var PrismaClient = require("@prisma/client").PrismaClient;
var database = new PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var computerScienceCategory, categoryId, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, 4, 6]);
                    return [4 /*yield*/, database.category.create({
                            data: {
                                name: "Unique Science",
                            },
                        })];
                case 1:
                    computerScienceCategory = _a.sent();
                    categoryId = computerScienceCategory.id;
                    return [4 /*yield*/, database.course.create({
                            data: {
                                userId: "user1",
                                title: "Introduction to JavaScript",
                                description: "Learn the basics of JavaScript programming language.",
                                imageUrl: "https://example.com/js.jpg",
                                price: 19.99,
                                isPublished: true,
                                categoryId: categoryId, // Use the stored category ID here
                                chapters: {
                                    create: [
                                        {
                                            title: "Introduction to Variables",
                                            description: "Understanding variables in JavaScript.",
                                            position: 1,
                                            isPublished: true,
                                            isFree: true,
                                        },
                                        {
                                            title: "Functions and Control Flow",
                                            description: "Learn about functions and control flow in JavaScript.",
                                            position: 2,
                                            isPublished: true,
                                            isFree: false,
                                        },
                                    ],
                                },
                                attachments: {
                                    create: {
                                        name: "Sample Attachment",
                                        url: "https://example.com/attachment.pdf",
                                    },
                                },
                                purchases: {
                                    create: [
                                        { userId: "user2" },
                                        { userId: "user3" },
                                    ],
                                },
                            },
                        })];
                case 2:
                    _a.sent();
                    console.log("Database seeded successfully!");
                    return [3 /*break*/, 6];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error seeding the database:", error_1);
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, database.$disconnect()];
                case 5:
                    _a.sent();
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    });
}
main();
