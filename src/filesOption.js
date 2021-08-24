// const request = require('request')
// const async = require('async')
// const ipcMain = require('electron').ipcMain
const fs = require('fs')
const path = require('path')

// 递归创建目录 异步方法
async function mkdirs (dirname, callback) {
  // 检查当前目录中是否存在该文件。
  var tempDirArray = dirname.split('\\')
  var projectPath = tempDirArray[0]
  console.log('projectPath：' + projectPath)
  for (var i = 0; i < tempDirArray.length - 1; i++) {
    projectPath = projectPath + '\\' + tempDirArray[i + 1]
    console.log('projectPath：' + projectPath)
    fs.access(projectPath, fs.constants.F_OK, _err => {
    })
    fs.mkdir(projectPath, callback => { })
  }
}

// 递归创建目录 同步方法
async function mkdirsSync (dirname) {
  if (fs.existsSync(dirname)) {
    return true
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname)
      return true
    }
  }
}

// 读取文件
function readFile () {
  console.log('读取开始。')
  // 同步读取
  var data = fs.readFileSync('read.txt', 'utf-8')
  console.log('同步读取: ' + data.toString())
  // 异步读取
  fs.readFile('read.txt', 'utf-8', function (err, data) {
    if (err) {
      return console.error(err)
    }
    console.log('异步读取: ' + data.toString())
  })
  console.log('读取结束。')
}

// 写入文件
function writeFile (dirname, jsonString) {
  console.log('写入开始。')
  // 同步读取
  // var data = fs.writeFileSync(dirname, jsonString)
  // var writeData1 = fs.readFileSync('write1.txt', 'utf-8')
  // console.log('同步读取写入的内容1: ' + writeData1.toString())
  // 异步读取
  fs.writeFile(dirname, jsonString, function (err) {
    if (err) {
      return console.error(err)
    }
    var writeData2 = fs.readFileSync(dirname, 'utf-8')
    console.log('同步读取写入的内容2: ' + writeData2.toString())
  })
  console.log('写入结束。')
}

// 删除文件夹及文件
function deleteall (path) {
  var files = []
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path)
    files.forEach(function (file, index) {
      var curPath = path + '/' + file
      if (fs.statSync(curPath).isDirectory()) { // recurse
        deleteall(curPath)
      } else { // delete file
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(path)
  }
};
async function test () {
  console.log('测试')
}

// exports.mkdirs = mkdirs;
// exports.test = test;
module.exports = {
  mkdirs: mkdirs,
  mkdirsSync: mkdirsSync,
  writeFile: writeFile,
  test: test
}
