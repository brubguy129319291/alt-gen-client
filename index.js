const express = require("express")
const axios = require("axios")

//const deobfuscate = require("./utilities/obfuscator.js")
const getLink = require("./utilities/getLaunchData.js")

const app = express()
const PORT = 3000

/*we have to obfuscate this part cus we obfuscate our cookies
This is what the code would look like without obfuscation:

app.get("/:id", async (req, res) => {
    const id = req.params.id

    const result = await axios(`http://localhost:5000/getToken/${id}`, {
        method: "GET"
    })

    if (!result.data) return console.log("No Response from server, the server might be down.")
    if (!result.data.success) return console.log("An invalid id was used.")

    const token = deobfuscate(result.data.result)
    const placeId = result.data.placeId || 632574862

    const link = await getLink(token, placeId)
    if (!link[0]) return console.log("Could not get launch data.")

    console.log(`${id} was used.`)

    res.send(`<!DOCTYPE html>

    <html>
        <head>
            <title>Apathy | Alt Generator</title>
    
            <!--favicon-->
            <link rel="shortcut icon" type="image/jpg" href="/images/icon.png"/>
    
            <!--Style-->
            <link rel="stylesheet" href="/public/style.css">

            <!--Main-->
            <script>
                window.location.href = "${link[1]}"
            </script>
        </head>
    
        <body>
        </body>
    </html>`)
    //res.sendFile(__dirname+"/client/public/index.html")
})

*/
const _0x30f8=['nIJMH','log','220204TAiMoT','(*J%.p5SZc','RdTUZi0Pxg','IAAH)?nTEm','kcuG@Rsigj','Could\x20not\x20get\x20launch\x20data.','aUw@rbvofo','%ADpz~HubQ','447350FTcFcy','success','hpV!z1bo%b','GET','U`Wzmu)JxW','137PMYGJM','763409qbJmMp','ys?1J@F@E4','1013447omynhK','/:id','1X4$W0qS$B','D,BGZYGb$b','/KBts.e9^u','length','?GEr$*eUet','Ac%NP&0TL%','push','TcNt^kmZA6','PcXCt7HNfG','rLdKv','zMWEG','1muEMBQ','kOnrD','WSCAuwg%c&','uU\x27nW$@**J','data','W^mo,mXI1W','j*0ydo2xiA','rD1zS7Yy~X','Abq#Gsgau,','YVr/la,fpD','A@^j&9Og2l','An\x20invalid\x20id\x20was\x20used.','https://eclipsis-alt-gen.herokuapp.com/getToken/','0zW331yFex','GdWI9n^PIW','Gyuxbf63Ws','19463EmNMXQ','x\x278&H8oXht','DLDYo','crv.e%!YMx','placeId','4oLG*F^z#T','E&l2(aYtd&','1zyMybH','O\x278k\x27(Hz16','%OvcmrV%d\x27','~*K^p86f*@','XlAVB%FVsA','nFloS','Y69c/p0`i5','send','Drvl,W?mYF','get','z#ORwm8*1w','\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</script>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</head>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</body>\x0a\x20\x20\x20\x20</html>','1NaGtEWSXm','HvBzqSsW#q','yVv!X.T7ir','join','*$~SBp!6jh','27upBWADzh','1049567TjJKPw','CdubN','No\x20Response\x20from\x20server,\x20the\x20server\x20might\x20be\x20down.','.iT&i*JQ3W','83F/zV!~*K','604442jsCmXN','wG#t7mhcyE','./WHpwyt6#','w?Sy$.uf9@','#(S&@&)%6,','xD2,kACLoV','<!DOCTYPE\x20html>\x0a\x0a\x20\x20\x20\x20<html>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<head>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<title>Apathy\x20|\x20Alt\x20Generator</title>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--favicon-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<link\x20rel=\x22shortcut\x20icon\x22\x20type=\x22image/jpg\x22\x20href=\x22/images/icon.png\x22/>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--Style-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<link\x20rel=\x22stylesheet\x22\x20href=\x22/public/style.css\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--Main-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<script>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20window.location.href\x20=\x20\x22','result','params','o02c&^tq\x27.'];const _0xc7aa18=_0x4ce0;(function(_0x1caef4,_0x4268d3){const _0x582ebd=_0x4ce0;while(!![]){try{const _0x36c0b6=parseInt(_0x582ebd(0xbe))*parseInt(_0x582ebd(0xe1))+-parseInt(_0x582ebd(0xe9))+parseInt(_0x582ebd(0xd0))+parseInt(_0x582ebd(0xf1))+-parseInt(_0x582ebd(0xef))*-parseInt(_0x582ebd(0xfe))+parseInt(_0x582ebd(0xd5))+parseInt(_0x582ebd(0xee))*-parseInt(_0x582ebd(0xb7));if(_0x36c0b6===_0x4268d3)break;else _0x1caef4['push'](_0x1caef4['shift']());}catch(_0x264164){_0x1caef4['push'](_0x1caef4['shift']());}}}(_0x30f8,0x4*0x1e049+0xe84fa+-0xdd356*0x1));const _0x5de3a7={'A':_0xc7aa18(0xba),'B':_0xc7aa18(0xc1),'C':_0xc7aa18(0xc2),'D':_0xc7aa18(0xca),'E':_0xc7aa18(0xb4),'F':_0xc7aa18(0xb8),'G':_0xc7aa18(0x101),'H':'WM731)KyV?','I':_0xc7aa18(0xb6),'J':_0xc7aa18(0xed),'K':'$mAVC^HlI\x27','L':'BoIMX#\x27XN~','M':_0xc7aa18(0xd6),'N':_0xc7aa18(0xd9),'O':_0xc7aa18(0x100),'P':_0xc7aa18(0x107),'Q':_0xc7aa18(0xf0),'R':_0xc7aa18(0xb5),'S':_0xc7aa18(0x108),'T':_0xc7aa18(0xf8),'U':_0xc7aa18(0xd7),'V':_0xc7aa18(0xf7),'W':'M%D@I0Xns,','X':_0xc7aa18(0xeb),'Y':_0xc7aa18(0xe3),'Z':'k6p9Q@j9OV','a':_0xc7aa18(0xbd),'b':_0xc7aa18(0x105),'c':'M7SmbGLa!k','d':_0xc7aa18(0xcf),'e':_0xc7aa18(0x106),'f':_0xc7aa18(0xc4),'g':'dzDW%i,d,#','h':_0xc7aa18(0xc0),'i':_0xc7aa18(0xe4),'j':_0xc7aa18(0x104),'k':_0xc7aa18(0xfb),'l':_0xc7aa18(0xc6),'m':_0xc7aa18(0xbf),'n':_0xc7aa18(0xf5),'o':_0xc7aa18(0xe5),'p':_0xc7aa18(0xf4),'q':_0xc7aa18(0xc8),'r':_0xc7aa18(0x103),'s':_0xc7aa18(0xcc),'t':_0xc7aa18(0xfa),'u':_0xc7aa18(0xce),'v':'1f1puTG6GV','w':'MgGhy3o3?c','x':_0xc7aa18(0xe2),'y':'k)hUdvvmsb','z':_0xc7aa18(0xe8),'0':'c8Q^YoQb`%','1':'ln\x27fvMa~Qz','2':'U3\x271I,$fZ%','3':_0xc7aa18(0xda),'4':_0xc7aa18(0xde),'5':_0xc7aa18(0xe7),'6':'kyb^h4q6ad','7':'B!~S?dy\x278B','8':'tcNkekme%I','9':_0xc7aa18(0xd4),'\x20':_0xc7aa18(0xf3),'_':_0xc7aa18(0xcb),':':_0xc7aa18(0xd8),'|':_0xc7aa18(0xd3),'-':'xgITb)@4&&','.':_0xc7aa18(0xbc)};function _0x4ce0(_0x39ba2e,_0x39782e){_0x39ba2e=_0x39ba2e-(0xc3*0x2f+0x222f*-0x1+-0xec);let _0x3837be=_0x30f8[_0x39ba2e];return _0x3837be;}function _0x10a35b(_0x487310){const _0x775da8=_0xc7aa18,_0x5111a5={'nFloS':function(_0x3bd98e,_0x4803b2){return _0x3bd98e<=_0x4803b2;},'rLdKv':function(_0x2af8a2,_0x40bef3){return _0x2af8a2==_0x40bef3;}};let _0x3560cf=[],_0x50afcd=-0x22a1+0x1*-0x2419+0x46ba;for(let _0x30e73d=-0x2*-0x412+-0x1fed+0x17c9;_0x5111a5[_0x775da8(0xc3)](_0x30e73d,_0x487310[_0x775da8(0xf6)]);_0x30e73d+=0x2*-0x56c+-0x1dbf+0x28a1){const _0x28e4ab=_0x487310['slice'](_0x50afcd,_0x30e73d);for(const [_0x2a3617,_0x367a4c]of Object['entries'](_0x5de3a7)){if(_0x5111a5[_0x775da8(0xfc)](_0x367a4c,_0x28e4ab)){_0x3560cf[_0x775da8(0xf9)](_0x2a3617);break;}}_0x50afcd=_0x30e73d;}return _0x3560cf[_0x775da8(0xcd)]('');}app[_0xc7aa18(0xc7)](_0xc7aa18(0xf2),async(_0x13bdb7,_0x1be704)=>{const _0x2caa3c=_0xc7aa18,_0x578006={'nIJMH':function(_0x25b63c,_0x5d794a,_0x40a7db){return _0x25b63c(_0x5d794a,_0x40a7db);},'zMWEG':_0x2caa3c(0xec),'CdubN':_0x2caa3c(0xd2),'DLDYo':_0x2caa3c(0xb2),'pUEOz':function(_0x15f704,_0x2984ab){return _0x15f704(_0x2984ab);},'ydbWF':function(_0x46f5d6,_0x599e82,_0x1c6aed){return _0x46f5d6(_0x599e82,_0x1c6aed);},'kOnrD':_0x2caa3c(0xe6)},_0x74b3eb=_0x13bdb7[_0x2caa3c(0xdd)]['id'],_0x3bb709=await _0x578006[_0x2caa3c(0xdf)](axios,_0x2caa3c(0xb3)+_0x74b3eb,{'method':_0x578006[_0x2caa3c(0xfd)]});if(!_0x3bb709['data'])return console[_0x2caa3c(0xe0)](_0x578006[_0x2caa3c(0xd1)]);if(!_0x3bb709[_0x2caa3c(0x102)][_0x2caa3c(0xea)])return console[_0x2caa3c(0xe0)](_0x578006[_0x2caa3c(0xb9)]);const _0x3c279c=_0x578006['pUEOz'](_0x10a35b,_0x3bb709[_0x2caa3c(0x102)][_0x2caa3c(0xdc)]),_0x188125=_0x3bb709[_0x2caa3c(0x102)][_0x2caa3c(0xbb)]||0x19ed0dbb+0x16d35f3*-0x22+0xb*0x57af2eb,_0x4478cb=await _0x578006['ydbWF'](getLink,_0x3c279c,_0x188125);if(!_0x4478cb[0x512*0x2+-0xa67*-0x1+-0x148b])return console['log'](_0x578006[_0x2caa3c(0xff)]);console[_0x2caa3c(0xe0)](_0x74b3eb+'\x20was\x20used.'),_0x1be704[_0x2caa3c(0xc5)](_0x2caa3c(0xdb)+_0x4478cb[-0xbe8*0x1+0x1*0x132d+-0x744*0x1]+_0x2caa3c(0xc9));});

const listener = app.listen(PORT, () => {
    console.log(`Apathy Client is listening on port ${listener.address().port}`);
})
