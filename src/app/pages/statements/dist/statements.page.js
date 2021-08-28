"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
        while (_) try {
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
exports.__esModule = true;
exports.StatementsPage = void 0;
var core_1 = require("@angular/core");
var MEDIA_FOLDER_NAME = 'my_media';
var window;
var StatementsPage = /** @class */ (function () {
    function StatementsPage(base64, mediaCapture, file, media, streamingMedia, plt) {
        this.base64 = base64;
        this.mediaCapture = mediaCapture;
        this.file = file;
        this.media = media;
        this.streamingMedia = streamingMedia;
        this.plt = plt;
        this.files = [];
    }
    StatementsPage.prototype.ngOnInit = function () {
        /*   this.plt.ready().then(() => {
            let path = this.file.dataDirectory;
            this.file.checkDir(path, MEDIA_FOLDER_NAME).then(res => {
              this.loadFiles();
            }, err => {
              this.file.createDir(path, MEDIA_FOLDER_NAME, false).then(res => {
                this.loadFiles();
              })
            }
            )
          }) */
    };
    StatementsPage.prototype.loadFiles = function () {
        var _this = this;
        this.file.listDir(this.file.dataDirectory, MEDIA_FOLDER_NAME).then(function (res) {
            _this.files = res;
            console.log('Files: ', res);
        });
    };
    StatementsPage.prototype.getFile = function (fileEntry) {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, new Promise(function (resolve, reject) { return fileEntry.file(resolve, reject); })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    StatementsPage.prototype.captureVideo = function () {
        var _this = this;
        var captureOptions = {
            limit: 1,
            duration: 1
        };
        this.mediaCapture.captureVideo(captureOptions).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var res, file, reader;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('RESPUESTA', data);
                        return [4 /*yield*/, this.file.resolveLocalFilesystemUrl(data[0].fullPath)];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, this.getFile(res)];
                    case 2:
                        file = _a.sent();
                        console.log('MOSTRAR FILE, ', res);
                        console.log('filefilefilefile, ', file);
                        reader = new FileReader();
                        reader.onload = function (e) {
                            var imgBase64Path = e.target.result;
                            console.log('B64 ', imgBase64Path);
                        };
                        reader.readAsDataURL(file);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    StatementsPage.prototype.record = function () {
        /*     const options: VideoCapturePlusOptions = {
              limit: 1,
              duration: 60,
              highquality: true,
              portraitOverlay: 'assets/img/camera/overlay/portrait.png',
              landscapeOverlay: 'assets/img/camera/overlay/landscape.png'
            }
        
            this.videoCapturePlus.captureVideo(options).then(res => {
              console.log('Respuesta ', res);
        
            }); */
    };
    StatementsPage.prototype.getBase64StringByFilePath = function (fileURL) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var fileName = fileURL.substring(fileURL.lastIndexOf('/') + 1);
                        var filePath = fileURL.substring(0, fileURL.lastIndexOf("/") + 1);
                        _this.file.readAsDataURL(filePath, fileName).then(function (file64) {
                            console.log(file64); //base64url...
                            resolve(file64);
                        })["catch"](function (err) {
                            reject(err);
                        });
                    })];
            });
        });
    };
    StatementsPage.prototype.fileChangeEvent = function (url) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var imgBase64Path = e.target.result;
            console.log('B64 ', imgBase64Path);
        };
        reader.readAsDataURL(url);
    };
    StatementsPage.prototype.convertVideoToBase64 = function (video) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        var res;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    console.log('ENTRO ', video);
                                    return [4 /*yield*/, this.file.resolveLocalFilesystemUrl(video)];
                                case 1:
                                    res = _a.sent();
                                    console.log('MOSTRAR FILE, ', res);
                                    res.file(function (resFile) {
                                        console.log('ENTRO file', resFile);
                                        var reader = new FileReader();
                                        console.log('reader');
                                        console.log('readAsDataURL');
                                        reader.onloadend = function (evt) { return __awaiter(_this, void 0, void 0, function () {
                                            var encodingType, OriginalBase64, decodedBase64, encodedBase64, newBase64;
                                            return __generator(this, function (_a) {
                                                console.log('onloadend');
                                                encodingType = "data:video/mp4;base64,";
                                                OriginalBase64 = evt.target.result.split(',')[1];
                                                decodedBase64 = atob(OriginalBase64);
                                                encodedBase64 = btoa(decodedBase64);
                                                newBase64 = encodingType + encodedBase64;
                                                console.log('B64', newBase64);
                                                resolve(newBase64);
                                                return [2 /*return*/];
                                            });
                                        }); };
                                        reader.readAsDataURL(resFile);
                                    });
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    StatementsPage = __decorate([
        core_1.Component({
            selector: 'app-statements',
            templateUrl: './statements.page.html',
            styleUrls: ['./statements.page.scss']
        })
    ], StatementsPage);
    return StatementsPage;
}());
exports.StatementsPage = StatementsPage;
