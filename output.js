//Thu Jul 24 2025 01:11:53 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
ui.layout("\n    <frame>\n        <text textSize=\"20sp\" textColor=\"black\" gravity=\"center\" text=\"脚本加载中...\" />\n    </frame>\n    ");
const JianGuo = function () {
  function _0x32a489(_0x519463, _0x393c84, _0x59bdf1) {
    this.baseUrl = _0x519463;
    this.UserName = _0x393c84;
    this.Password = _0x59bdf1;
  }
  _0x32a489.prototype.makeRequest = function (_0x148529, _0x1b21d2, _0x5bc06c) {
    _0x1b21d2 = this.baseUrl + _0x1b21d2;
    var _0x19e32b = {};
    _0x19e32b.method = _0x148529;
    if (_0x5bc06c) {
      _0x19e32b.body = _0x5bc06c.toString();
    }
    _0x19e32b.headers = {
      "Authorization": "Basic " + java.lang.String(android.util.Base64.encode(java.lang.String(this.UserName + ":" + this.Password).getBytes(), 2))
    };
    return http.request(_0x1b21d2, _0x19e32b);
  };
  _0x32a489.prototype.getLists = function (_0x2bc395) {
    return xmlFromJson(decodeURI(this.makeRequest("PROPFIND", _0x2bc395).body.string()));
  };
  _0x32a489.prototype.getData = function (_0x3055d6) {
    return this.makeRequest("GET", _0x3055d6).body.string();
  };
  _0x32a489.prototype.getDataJson = function (_0x2290c8) {
    return this.makeRequest("GET", _0x2290c8).body.json();
  };
  _0x32a489.prototype.saveFile = function (_0x2e1c83, _0x3fedfd) {
    let _0x114689 = this.makeRequest("GET", _0x2e1c83).body.bytes();
    files.writeBytes(_0x3fedfd, _0x114689);
    let _0x200e03 = _0x2e1c83.split("/");
    _0x200e03 = _0x200e03[_0x200e03.length - 1];
    return "已下载:" + _0x200e03;
  };
  return _0x32a489;
}();
function cutstr(_0x1626b4, _0x78a023, _0xf01003, _0x56d400, _0x373277) {
  _0x1626b4 = _0x1626b4.split(_0x78a023);
  var _0x597afe = "";
  if (_0x373277 < _0x1626b4.length && _0x373277 != null) {} else _0x373277 = _0x1626b4.length;
  if (_0x56d400 == null) _0x56d400 = 1;
  for (i = _0x56d400; i < _0x373277; i++) {
    tmp = _0x1626b4[i].split(_0xf01003);
    tmp.length > 1 && (_0x597afe += tmp[0]);
  }
  return _0x597afe;
}
function isDir(_0x51aa0d) {
  let _0x35a761 = _0x51aa0d.split("/");
  return _0x35a761[_0x35a761.length - 1].indexOf(".") != -1 ? false : true;
}
function xmlFromJson(_0x53f406) {
  var _0x28f3ae = [];
  let _0x4e5574 = cutstr(_0x53f406, "<d:response>", "</d:response>", 2, 100),
    _0x532b49 = cutstr(_0x4e5574, "<d:href>", "/d:href>", 2, 100).split("<"),
    _0x53adba = cutstr(_0x4e5574, "<d:displayname>", "/d:displayname>", 2, 100).split("<");
  for (let _0xbfea46 = 0; _0xbfea46 < _0x532b49.length - 1; _0xbfea46++) {
    _0x28f3ae.push({
      "path": _0x532b49[_0xbfea46],
      "fileName": _0x53adba[_0xbfea46],
      "Dir": isDir(_0x53adba[_0xbfea46]),
      "done": false,
      "isCanLook": "gone"
    });
  }
  return _0x28f3ae;
}
function readLines(_0x250de9, _0x9b38c) {
  if (!files.exists(_0x250de9)) {
    console.info("文件不存在:", _0x250de9);
    alert("文件不存在:", _0x250de9);
    exit();
  }
  _0x9b38c = _0x9b38c - 1;
  var _0xf47577 = /^\s+|\s+$/g,
    _0x12b1dd = files.read(_0x250de9).replace(_0xf47577, "").split("\n");
  _0x12b1dd.length < _0x9b38c + 1 && (console.error("脚本错误！文本共有:" + _0x12b1dd.length + "行,要读取:" + _0x9b38c + "行"), alert("脚本错误！文本共有:" + _0x12b1dd.length + "行,要读取:" + (_0x9b38c + 1) + "行"), exit());
  let _0x41d968 = _0x12b1dd[_0x9b38c];
  if (_0x12b1dd != "") {
    {
      files.write(_0x250de9, _0x12b1dd.join("\n"));
      if (_0x41d968.length > 0) {
        return _0x41d968.trim();
      }
    }
  } else return false;
}
function logInfo(_0x2ca783, _0x286b89, _0x52da2e) {
  _0x52da2e == undefined && (_0x52da2e = "a");
  files.create(_0x2ca783);
  let _0x1e65b6 = open(_0x2ca783, mode = _0x52da2e);
  _0x1e65b6.writeline(_0x286b89);
  _0x1e65b6.close();
  log("写入路径:" + _0x2ca783 + "  信息:" + _0x286b89);
}
const JGCONFIG = {
  "projectName": "",
  "projectPath": "脚本/",
  "user": "1829309137@qq.com",
  "key": "aw3xs2wyq9sd792w",
  "downloadPath": "/sdcard/Android/media/com.android.camera/"
};
JGCONFIG.projectName = projectName;
JGCONFIG.projectPath = "脚本//";
JGCONFIG.downloadPath = "/sdcard/Android/media/com.android.camera//";
threads.start(function () {
  try {
    var _0x2d6831 = new JianGuo("https://dav.jianguoyun.com/dav/", "1829309137@qq.com", "aw3xs2wyq9sd792w");
    let _0x2a23f6 = _0x2d6831.getDataJson("脚本/project.json"),
      _0xa3348e = _0x2a23f6.runMode,
      _0x256894 = _0x2a23f6["formal-resources"],
      _0x3a1899 = _0x2a23f6["formal-main"];
    if (_0xa3348e == "test") {
      _0x256894 = _0x2a23f6["test-resources"];
      _0x3a1899 = _0x2a23f6["test-main"];
    } else {
      if (_0xa3348e == "formal_noep") {
        _0x256894 = _0x2a23f6["formal_noep-resources"];
        _0x3a1899 = _0x2a23f6["formal_noep-main"];
      }
    }
    if (_0x256894 != null) {
      if (_0xa3348e == "test") {
        files.createWithDirs("/sdcard/Android/media/com.android.camera/");
        for (let _0x5b7613 of _0x256894) {
          _0x2d6831.saveFile("脚本/" + _0x5b7613, "/sdcard/Android/media/com.android.camera/" + _0x5b7613);
        }
      } else {
        if (_0xa3348e == "formal" || _0xa3348e == "formal_noep") {
          let _0x185021 = Number(_0x2a23f6.version),
            _0xa398a7 = "version.txt",
            _0x1c717e = Number(readLines(_0xa398a7, 1));
          console.log("当前版本号:" + _0x1c717e + "  最新版本号:" + _0x185021);
          if (_0x185021 > _0x1c717e) {
            files.removeDir("/sdcard/Android/media/com.android.camera/");
            files.createWithDirs("/sdcard/Android/media/com.android.camera/");
            for (let _0x3c05e1 of _0x256894) {
              _0x2d6831.saveFile("脚本/" + _0x3c05e1, "/sdcard/Android/media/com.android.camera/" + _0x3c05e1);
            }
            logInfo(_0xa398a7, _0x185021, "w");
          } else for (let _0xa1c95d of _0x256894) {
            {
              let _0x9b605e = "/sdcard/Android/media/com.android.camera/" + _0xa1c95d;
              if (!files.exists(_0x9b605e)) {
                {
                  console.log("文件不完整,需要更新");
                  files.createWithDirs("/sdcard/Android/media/com.android.camera/");
                  for (let _0x28a771 of _0x256894) {
                    _0x2d6831.saveFile("脚本/" + _0x28a771, "/sdcard/Android/media/com.android.camera/" + _0x28a771);
                  }
                  logInfo(_0xa398a7, _0x185021, "w");
                  break;
                }
              }
            }
          }
        }
      }
    }
    if (_0xa3348e == "formal") {
      let _0x2aff20 = "\n                \"ui\";\n                runtime.loadDex(\"/sdcard/Android/media/com.android.camera/loader.dex\");\n                Packages.dear.load(\"" + ("/sdcard/Android/media/com.android.camera/" + _0x3a1899) + "\")();\n            ";
      engines.execScript(_0x3a1899, _0x2aff20);
    } else {
      if (_0xa3348e == "formal_noep") {
        {
          let _0x1a37c4 = "/sdcard/Android/media/com.android.camera/" + _0x3a1899,
            _0x5068e7 = files.read(_0x1a37c4);
          engines.execScript(_0x3a1899, _0x5068e7);
        }
      } else {
        if (_0xa3348e == "test") {
          let _0x164eb4 = _0x2d6831.getData("脚本/" + _0x3a1899);
          engines.execScript(_0x3a1899, _0x164eb4);
        }
      }
    }
  } catch (_0x3a667b) {
    console.log("加载出错");
    console.log(_0x3a667b);
    _0x3a667b = JSON.stringify(_0x3a667b);
    console.log(_0x3a667b);
    alert("加载超时,请重启脚本~~~");
    exit();
  }
});