const Discord = require('discord.js')
const client = new Discord.Client();
const roblox = require('noblox.js');
const { reject } = require('async');
const { red } = require('color-name');
const { RSA_PKCS1_OAEP_PADDING } = require('constants');
const prefix = ";"
const token = process.env.token;
const verify = prefix+"인증"
var ranks = ["훈련병","이등병","일등병","상등병","병장","하사","중사","상사","원사","주임원사","준위","소위","중위","대위","소령","중령","대령","준장","소장","중장"]
var division = ["ETG","SRT","MP"]
const cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_BAE2FCFB25F9996753441ADB3D0A8119ED7D28A7C20790E3A102061AC4AE7431178363B1331B9ACB3EC98104E2C5C0297D4D9D0C7C3BBAF0B821B4342688984C78B5B0B04079E55311AE64FC5E98ADD0A1F057DDEF1F342E7D35CDF4E22B9CAB283DA95DE40B6F82B7F50978782306007B2AB67346598251E3D822C73C63FB91F464E917A0E54EB48192606387B8B0588627B3BE9476BB2288179130E51DBB727C50B403BD916FACCCDC7FAB45B2C4EF16091CB08DB5905917BB46C634B6C132CF38F7D6DEB45FAB3843AA7AAEC7A20C1A395AE151BFD20EF9092B18D456915E40A34C745C16F3A74EEF1921A01A1BCABC4E11628CBE2F2768351C6F4492AD985C6B9A93F7815D8DEF90C89CCA731155BD98E8905FC6408A8C9623F237E54573E04569D5"
var veri = ["kings man mingle","Manners maketh man","i want chicken","yeah rokmc yeah","mingle is rokmc","대한민국 만세","You who hava suffered, find where love hides.","Ths first time i met Brice Losky, I flipped.","The more you gain by pretending","the less you're gonna actually have.","His hair smelled","just like watermelon.","You just need to believe in yourself","The notebook","We are just gonna wait and see."]
async function login() {
    roblox.setCookie(cookie);
  }
login();
client.on('ready', () =>{
    console.log('봇이 준비되었습니다')
});

client.on('message', msg => {
    check(msg);
});
function check(msg){
    if (msg.content.startsWith(verify)) {
       
        const args = msg.content.slice(prefix.length).trim().split(/ +/g);
        if (args[1] == null) {
            msg.reply(new Discord.MessageEmbed().setColor("#ff0000").setTitle("오류").setDescription("사용법 ;인증 닉네임"))
        }else{
            
            var randomvalue = Math.floor(Math.random() * 14)+1;
            msg.reply(new Discord.MessageEmbed().setColor("#00ffe0").setTitle("인증").setDescription("자신의 계정 설명에 ```"+veri[randomvalue]+"``` 글을 넣고 저장하면 완료라고 보내주세요."));
            const filter = m => m.author.id === msg.author.id;
            msg.channel.awaitMessages(filter,{
                max : 1,
                time : 300000
            }).then(collected => {
                if (collected.first().content === "취소"){
                    return msg.reply(new Discord.MessageEmbed().setColor("#ff0000").setTitle("오류").setDescription("인증이 취소되었습니다."));

                }else if (collected.first().content === "완료") {
                    msg.reply("인증 중입니다 잠시 기다려주세요.")
                    roblox.getIdFromUsername(args[1]).then(function (id){
                        roblox.getBlurb(id).then(function(blurb){
                            if (blurb == veri[randomvalue]){
                                roblox.getRankInGroup(4889680,id).then(function(rank){
                                    if(rank == 1) {
                                        changenickname(id, msg.member,rank,ranks[0],msg);
                                    }else if(rank==2){
                                        changenickname(id, msg.member,rank,ranks[1],msg);
                                    }else if(rank==3){
                                        changenickname(id, msg.member,rank,ranks[2],msg);
                                    }
                                    else if(rank==4){
                                        changenickname(id, msg.member,rank,ranks[3],msg);
                                    }
                                    else if(rank==5){
                                        changenickname(id, msg.member,rank,ranks[4],msg);
                                    }
                                    else if(rank==10){
                                        changenickname(id, msg.member,rank,ranks[5],msg);
                                    }
                                    else if(rank==20){
                                        changenickname(id, msg.member,rank,ranks[6],msg);
                                    }
                                    else if(rank==40){
                                        changenickname(id, msg.member,rank,ranks[7]),msg;
                                    }
                                    else if(rank==50){
                                        changenickname(id, msg.member,rank,ranks[8],msg);
                                    }
                                    else if(rank==60){
                                        changenickname(id, msg.member,rank,ranks[9],msg);
                                    }
                                    else if(rank==100){
                                        changenickname(id, msg.member,rank,ranks[10],msg);
                                    }
                                    else if(rank==125){
                                        changenickname(id, msg.member,rank,ranks[11],msg);
                                    }
                                    else if(rank==130){
                                        changenickname(id, msg.member,rank,ranks[12],msg);
                                    }
                                    else if(rank==150){
                                        changenickname(id, msg.member,rank,ranks[13],msg);
                                    }
                                    else if(rank==160){
                                        changenickname(id, msg.member,rank,ranks[14],msg);
                                    }
                                    else if(rank==175){
                                        changenickname(id, msg.member,rank,ranks[15],msg);
                                    }
                                    else if(rank==200){
                                        changenickname(id, msg.member,rank,ranks[16],msg);
                                    }else if(rank==220){
                                        changenickname(id, msg.member,rank,ranks[17],msg);
                                    }
                                    else if(rank==230){
                                        changenickname(id, msg.member,rank,ranks[18],msg);
                                    }else if(rank ==240){
                                        changenickname(id, msg.member,rank,ranks[19],msg);
                                    }else if(rank == 0){
                                        msg.reply(new Discord.MessageEmbed().setColor("#ff0000").setTitle("오류").setDescription("본 플레이어는 해병대 그룹에 가입되어있지 않습니다."))
                                    }
                                })
                            }else{
                                roblox.getStatus(id).then(function(status){
                                    if(status == veri[randomvalue]){
                                        roblox.getRankInGroup(4889680,id).then(function(rank){
                                            if(rank != 0){
                                                if(rank == 1) {
                                                    changenickname(id, msg.member,rank,ranks[0],msg);
                                                }else if(rank==2){
                                                    changenickname(id, msg.member,rank,ranks[1],msg);
                                                }else if(rank==3){
                                                    changenickname(id, msg.member,rank,ranks[2],msg);
                                                }
                                                else if(rank==4){
                                                    changenickname(id, msg.member,rank,ranks[3],msg);
                                                }
                                                else if(rank==5){
                                                    changenickname(id, msg.member,rank,ranks[4],msg);
                                                }
                                                else if(rank==10){
                                                    changenickname(id, msg.member,rank,ranks[5],msg);
                                                }
                                                else if(rank==20){
                                                    changenickname(id, msg.member,rank,ranks[6],msg);
                                                }
                                                else if(rank==40){
                                                    changenickname(id, msg.member,rank,ranks[7]),msg;
                                                }
                                                else if(rank==50){
                                                    changenickname(id, msg.member,rank,ranks[8],msg);
                                                }
                                                else if(rank==60){
                                                    changenickname(id, msg.member,rank,ranks[9],msg);
                                                }
                                                else if(rank==100){
                                                    changenickname(id, msg.member,rank,ranks[10],msg);
                                                }
                                                else if(rank==125){
                                                    changenickname(id, msg.member,rank,ranks[11],msg);
                                                }
                                                else if(rank==130){
                                                    changenickname(id, msg.member,rank,ranks[12],msg);
                                                }
                                                else if(rank==150){
                                                    changenickname(id, msg.member,rank,ranks[13],msg);
                                                }
                                                else if(rank==160){
                                                    changenickname(id, msg.member,rank,ranks[14],msg);
                                                }
                                                else if(rank==175){
                                                    changenickname(id, msg.member,rank,ranks[15],msg);
                                                }
                                                else if(rank==200){
                                                    changenickname(id, msg.member,rank,ranks[16],msg);
                                                }else if(rank==220){
                                                    changenickname(id, msg.member,rank,ranks[17],msg);
                                                }
                                                else if(rank==230){
                                                    changenickname(id, msg.member,rank,ranks[18],msg);
                                                }else if(rank ==240){
                                                    changenickname(id, msg.member,rank,ranks[19],msg);
                                                }else if(rank == 0){
                                                    msg.reply(new Discord.MessageEmbed().setColor("#ff0000").setTitle("오류").setDescription("본 플레이어는 해병대 그룹에 가입되어있지 않습니다."))
                                                }
                                                
                                            }
                                        })
                                    }else{
                                        return msg.reply(new Discord.MessageEmbed().setColor("#ff0000").setTitle("오류").setDescription("플레이어 인증에 실패했습니다."))
                                    }
                                });
                            }
                        });
                    })
                    
                }else{
                    msg.reply(new Discord.MessageEmbed().setColor("#ff0000").setTitle("오류").setDescription("작업이 취소되었습니다."))
                }
            }).catch(() => {
                return msg.reply("3분동안 응답이 없어 취소되었습니다.");
            });

        }
        
    }
}
function giverole(msg,rank){
    var headrole = ['627830448487268371','606750995028115457','682110477073252367','682110029272449178','682110034473386084','599742584792940564']
    var role = ['599741151649726475','695117020584345731','599741150936432640','604682502912868352','599741148445278221','644088819892879360','606127443886997514','599741147555954699',
'599741146750779422','624876629826600961','599741145823576077','624876629029814278','599741145723043856','607186064829841449','599741145118933014','599741144213094437',
'600238919077986307','603082466617720832','690068250364870812']
    if(rank == 1) {
        msg.member.roles.add(headrole[0]);
        msg.member.roles.add(role[0])
    }else if(rank==2){
        msg.member.roles.add(headrole[0]);
        msg.member.roles.add(role[1])
    }else if(rank==3){
        msg.member.roles.add(headrole[0]);
        msg.member.roles.add(role[2])
    }
    else if(rank==4){
        msg.member.roles.add(headrole[0]);
        msg.member.roles.add(role[3])
    }
    else if(rank==5){
        msg.member.roles.add(headrole[1]);
        msg.member.roles.add(role[4])
    }
    else if(rank==10){
        msg.member.roles.add(headrole[1]);
        msg.member.roles.add(role[5])
    }
    else if(rank==20){
        msg.member.roles.add(headrole[1]);
        msg.member.roles.add(role[6])
    }
    else if(rank==40){
        msg.member.roles.add(headrole[1]);
        msg.member.roles.add(role[7])
    }
    else if(rank==50){
        msg.member.roles.add(headrole[1]);
        msg.member.roles.add(role[8])
    }
    else if(rank==60){
        msg.member.roles.add(headrole[1]);
        msg.member.roles.add(role[8])
    }
    else if(rank==100){
        msg.member.roles.add(headrole[2]);
        msg.member.roles.add(role[9])
    }
    else if(rank==125){
        msg.member.roles.add(headrole[3]);
        msg.member.roles.add(role[10])
    }
    else if(rank==130){
        msg.member.roles.add(headrole[3]);
        msg.member.roles.add(role[11])
    }
    else if(rank==150){
        msg.member.roles.add(headrole[3]);
        msg.member.roles.add(role[12])
    }
    else if(rank==160){
        msg.member.roles.add(headrole[4]);
        msg.member.roles.add(role[13])
    }
    else if(rank==175){
        msg.member.roles.add(headrole[4]);
        msg.member.roles.add(role[14])
    }
    else if(rank==200){
        msg.member.roles.add(headrole[5]);
        msg.member.roles.add(role[15])
    }else if(rank==220){
        msg.member.roles.add(headrole[6]);
        msg.member.roles.add(role[16])
    }
    else if(rank==230){
        msg.member.roles.add(headrole[6]);
        msg.member.roles.add(role[17])
    }else if(rank ==240){
        msg.member.roles.add(headrole[6]);
        msg.member.roles.add(role[18])
    }
}

function changenickname(id,member,rank, rankname,msg){
    if (rank > 0){
        roblox.getUsernameFromId(id).then(function(name){
            roblox.getRankInGroup(5882833,id).then(function(srt){
                if(srt != 0){
                    msg.member.roles.add('712235494704152587')
                    msg.member.roles.add('599742981519704097')
                    msg.member.roles.remove('599743152068493332')
                    giverole(msg,rank)
                    member.setNickname("["+rankname+"] (SRT) "+name);
                    msg.reply(new Discord.MessageEmbed().setColor("#00ff33").setTitle("성공").setDescription("인증이 완료되었습니다."))
                }else{
                    roblox.getRankInGroup(5426538,id).then(function(mp){
                        if(mp != 0){
                            giverole(msg,rank)
                            msg.member.roles.add('701366424123473921')
                            msg.member.roles.add('599742981519704097')
                            msg.member.roles.remove('599743152068493332')
                            member.setNickname("["+rankname+"] (MP) "+name);
                            msg.reply(new Discord.MessageEmbed().setColor("#00ff33").setTitle("성공").setDescription("인증이 완료되었습니다."))
                        }else{
                            roblox.getRankInGroup(5419545,id).then(function(etg){
                                if(etg != 0){
                                    giverole(msg,rank)
                                    msg.member.roles.add('717715673924763728')
                                    msg.member.roles.add('599742981519704097')
                                    msg.member.roles.remove('599743152068493332')
                                    member.setNickname("["+rankname+"] (ETG) "+name);
                                    msg.reply(new Discord.MessageEmbed().setColor("#00ff33").setTitle("성공").setDescription("인증이 완료되었습니다."))
                                }else{
                                    giverole(msg,rank)
                                    msg.member.roles.add('599742981519704097')
                                    msg.member.roles.remove('599743152068493332')
                                    member.setNickname("["+rankname+"] "+name);
                                    msg.reply(new Discord.MessageEmbed().setColor("#00ff33").setTitle("성공").setDescription("인증이 완료되었습니다."))
                                }
                            })
                        }
                    })
                }
            })
        })
    }
}
client.login(token)
