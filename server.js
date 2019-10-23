const http = require('http');
const fs = require('fs');
const Path = require('path');
const mime = require('mime');
const open = require('opn');

// 输出给客户端的文件缓存
const cache = {};
// 读取到的js文件数组 array=>[{fileName, jsFileName, filePath},...]
let fileList = findSync('src/');

// node端调试打印
function log(data) {
    let type = typeof data;
    if (type === 'object' && data instanceof Array) {
        type = 'array'
    }
    console.log('类型是==>', type, '|----|', '值为==>', data)
}

/**
 * 读取src文件夹里面的所有文件，实现根据客户端路由来加载对应的js文件到html上
 * @param startPath  起始目录文件夹路径
 * @returns {Array}
 */
function findSync(startPath) {
    let result = [];

    function finder(dirPath) {
        let filenames = fs.readdirSync(dirPath);
        filenames.forEach(name => {
            let filePath = Path.join(dirPath, name);
            let stats = fs.statSync(filePath);
            if (stats.isDirectory()) finder(filePath);
            if (stats.isFile()) {
                const obj = {
                    fileName: name,
                    filePath: filePath
                };
                if (name.endsWith('.js')) {
                    obj.jsFileName = name.slice(0, name.length - 3);
                    result.push(obj)
                }
            }
        });
    }

    finder(startPath);
    return result;
}

function createdPage(routeStr) {
    const currentJSfile = fileList.filter(file => file.jsFileName === routeStr)[0];
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>javascript</title>
            </head>
            <body>
                <script src="/src/log.js"></script>
                <script src="/src/${currentJSfile.fileName}"></script>
            </body>
        </html>
    `
}

function send404(response) {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('Error 404: resource not found.');
    response.end();
}

function sendFile(response, filePath, fileContents) {
    response.writeHead(200, {
        "content-type": mime.getType(Path.basename(filePath))
    });
    response.end(fileContents);
}

// 检查文件是否缓存在内存中
function serveStatic(response, cache, absPath) {
    if (cache[absPath]) {
        sendFile(response, absPath, cache[absPath]);
    } else {
        fs.exists(absPath, function (exists) {
            if (exists) {
                fs.readFile(absPath, function (err, data) {
                    if (err) {
                        send404(response);
                    } else {
                        cache[absPath] = data;
                        sendFile(response, absPath, data);
                    }
                });
            } else {
                send404(response);
            }
        });
    }
}

const server = http.createServer(function (request, response) {
    const uri = decodeURIComponent(request.url).slice(1);
    log(uri)
    if (uri !== '/favicon.ico') {
        const reqUrlIsJsFileName = fileList.some(file => file.jsFileName === uri);
        if (reqUrlIsJsFileName) {
            response.writeHead(200, {
                "Content-Type": "text/html"
            });
            response.end(createdPage(uri));
        } else {
            let filePath = false;
            if (uri === '') {
                filePath = 'public/index.html';
            } else if (uri.endsWith('.js')) {
                filePath = uri;
            }
            const absPath = './' + filePath;
            serveStatic(response, cache, absPath);
        }
    }
});

server.listen(3005, function () {
    console.log("Server listening on port 3005.");
});

open('http://localhost:3005/');
