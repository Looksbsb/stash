const url = $request.url;

const headers = {
    token2: 'enxerhSl0jk2TGhbZCygMdwoKqOmyxsk/Kw8tVy4dsRBE1o1xBhWhoFbh98=',
    token: 'RXQbgQKl3QkFZkIPGwGvH5kofvCokkkn/a893wC2IId7HQFmy0Eh24osz555X12xGVFxQLTaGuBqU/Y7KU4lStp4UjR7giPxdwoTOsU6R3oc4yZZTQc/yTKh1mH3ckZhx6VsQCEoFf6q',
    version: 'XPGBOX com.phoenix.tv1.3.3',
    user_id: 'XPGBOX',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
    screenx: '1280',
    screeny: '720',
    timestamp: Math.floor(Date.now() / 1000)
};

// 生成 hash 的字符串
const str = `||||DC6FFCB55FA||861824127032820||12702720||Asus/Asus/ASUS_I003DD:7.1.2/20171130.376229:user/release-keysXPGBOX com.phoenix.tv1.3.3${headers.timestamp}`;

// 使用外部 API 生成 hash
const hashUrl = `https://api.hashify.net/hash/md5/hex?value=${encodeURIComponent(str)}`;

$httpClient.get(hashUrl, function(error, response, data) {
    if (error) {
        console.log('Error:', error);
        $done({});
    } else {
        const hash = JSON.parse(data).Digest.toLowerCase().substring(8, 12);
        headers.hash = hash;
        $done({url: url, headers: headers});
    }
});
