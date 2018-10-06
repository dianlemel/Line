var linebot = require('linebot');
var express = require('express');
var path = require('path');

var bot = linebot({
    channelId: '1611395821',
    channelSecret: '9ef254b41a42e547e0294fd2accae9e4',
    channelAccessToken: 'tEiKGNqO3jaKqD1Jom0rAodKJB3M7FRr7RntWR1w6X8x9b7Il7ym7bVPtuYAPGOnD8BerCcpgjfGwWD1MCFWAU9wRkLLHQaYRl87c/y48F1CQLUrINtVf2F/U67qiaVRwAMrmRegmYe2mWVplcmP9wdB04t89/1O/w1cDnyilFU='
});


var message = {
    "你好":"我不好",
    "你是誰":"我是ㄐ器人"
};

bot.on('message', function (event) {
    var respone;
    if(message[event.message.text]){
        respone = message[event.message.text];
    }else{
        respone = '我不懂你說的 ['+event.message.text+']';
    }
	console.log(event.message.text + ' -> ' + respone);
    bot.reply(event.replyToken, respone);
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    bot.push('U1372640af7b78a14c4aa235890c86f1e','Server is ready');
    console.log("App now running on port", port);
});
process.on('exit', (code) => {
    console.log('EXIT======================================================');
});
process.on('SIGINT', function() {
    console.log('EXIT======================================================');
});
process.on('SIGTERM', function() {
    console.log('EXIT======================================================');
});
