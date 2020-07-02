const Discord = require('discord.js')
const client = new Discord.Client();
const roblox = require('noblox.js');
const { reject } = require('async');
const { red } = require('color-name');
const { RSA_PKCS1_OAEP_PADDING } = require('constants');
const prefix = ";"
const token = process.env.token;
const cookie = process.env.cookie;
const verify = prefix+"인증"
var ranks = ["훈련병","이등병","일등병","상등병","병장","하사","중사","상사","원사","주임원사","준위","소위","중위","대위","소령","중령","대령","준장","소장","중장"]
var division = ["ETG","SRT","MP"]
var veri = ["kings man","Manners maketh man","i want chicken","yeah rokmc yeah","mingle is rokmc","대한민국 만세","You who hava suffered, find where love hides.","Ths first time i met Brice Losky, I flipped.","The more you gain by pretending","the less you're gonna actually have.","His hair smelled","just like watermelon.","You just need to believe in yourself","The notebook","We are just gonna wait and see."]
async function login() {
    roblox.setCookie(cookie);
  }
login();
client.on('ready', () =>{
    client.user.setPresence({
        status: "online",  //You can show online, idle....
        game: {
            name: ";인증 명령어를 통해 인증을 완료하세요",  //The message shown
            type: "STREAMING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
    const channel = client.channels.cache.get('666276936468922378');
    channel.send('<@633283979109466122> 봇 업데이트 또는 실행이 완료되었습니다');
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
        
    }else if(msg.channel.id === '653905030964838420'){
       msg.react('👍');
        msg.react('👎');
    }
}
function successend(msg){
    msg.reply(new Discord.MessageEmbed().setColor("#00ff33").setTitle("성공").setDescription("인증이 완료되었습니다. (역할 지급이 느릴 수 있습니다)"))
}
function giverole(msg,rank){
    var headrole = ['627830448487268371','606750995028115457','682110477073252367','682110029272449178','682110034473386084','599742584792940564']
    var role = ['599741151649726475','695117020584345731','599741150936432640','599741149644849165','604682502912868352','599741148445278221','644088819892879360','606127443886997514',
'599741147555954699','599741146750779422','624876629826600961','599741145823576077','624876629029814278','599741145723043856','607186064829841449','599741145118933014',
'599741144213094437','600238919077986307','600238919077986307','603082466617720832','690068250364870812']
function removeallrole(msg){
    msg.member.roles.remove(msg.member.roles);
    
    
}
    if(rank == 1) {
        removeallrole(msg)
        msg.member.roles.add(headrole[0]);
        msg.member.roles.add(role[0])
        successend(msg)
    }else if(rank==2){
        removeallrole(msg)
       
        msg.member.roles.add(headrole[0]);
        msg.member.roles.add(role[1])
        successend(msg)
    }else if(rank==3){
        removeallrole(msg)
       
        msg.member.roles.add(headrole[0]);
        msg.member.roles.add(role[2])
        successend(msg)
    }
    else if(rank==4){
        removeallrole(msg)
       
        msg.member.roles.add(headrole[0]);
        msg.member.roles.add(role[3])
        successend(msg)
    }
    else if(rank==5){
        removeallrole(msg)
       
        msg.member.roles.add(headrole[1]);
        msg.member.roles.add(role[4])
        successend(msg)
    }
    else if(rank==10){
        removeallrole(msg)
       
        msg.member.roles.add(headrole[1]);
        msg.member.roles.add(role[5])
        successend(msg)
    }
    else if(rank==20){
        removeallrole(msg)
       
        msg.member.roles.add(headrole[1]);
        msg.member.roles.add(role[6])
        successend(msg)
    }
    else if(rank==40){
        removeallrole(msg)
       
        msg.member.roles.add(headrole[1]);
        msg.member.roles.add(role[7])
        successend(msg)
    }
    else if(rank==50){
        removeallrole(msg)
       
        msg.member.roles.add(headrole[1]);
        msg.member.roles.add(role[8])
        successend(msg)
    }
    else if(rank==60){
        removeallrole(msg)
       
        msg.member.roles.add(headrole[1]);
        msg.member.roles.add(role[9])
        successend(msg)
    }
    else if(rank==100){
        removeallrole(msg)
       
        msg.member.roles.add(headrole[2]);
        msg.member.roles.add(role[10])
        successend(msg)
    }
    else if(rank==125){
        removeallrole(msg)
       
        msg.member.roles.add(headrole[3]);
        msg.member.roles.add(role[11])
        successend(msg)
    }
    else if(rank==130){
        removeallrole(msg)
       
        msg.member.roles.add(headrole[3]);
        msg.member.roles.add(role[12])
        successend(msg)
    }
    else if(rank==150){
        removeallrole(msg)
       
        msg.member.roles.add(headrole[3]);
        msg.member.roles.add(role[13])
        successend(msg)
    }else if(rank==160){
        removeallrole(msg)
       
        msg.member.roles.add(headrole[4]);
        msg.member.roles.add(role[14])
        successend(msg)
    }
    else if(rank==175){
        removeallrole(msg)
       
        msg.member.roles.add(headrole[4]);
        msg.member.roles.add(role[15])
        successend(msg)
    }
    else if(rank==200){
        removeallrole(msg)
       
        msg.member.roles.add(headrole[5]);
        msg.member.roles.add(role[16])
        successend(msg)
    }else if(rank==220){
        removeallrole(msg)
       
        msg.member.roles.add(headrole[6]);
        msg.member.roles.add(role[17])
        successend(msg)
    }
    else if(rank==230){
        removeallrole(msg)
       
        msg.member.roles.add(headrole[6]);
        msg.member.roles.add(role[18])
        successend(msg)
    }else if(rank ==240){
        removeallrole(msg)
       
        msg.member.roles.add(headrole[6]);
        msg.member.roles.add(role[19])
        successend(msg)
    }
}

function changenickname(id,member,rank, rankname,msg){
    if (rank > 0){
        roblox.getUsernameFromId(id).then(function(name){
            roblox.getRankInGroup(5882833,id).then(function(srt){
                if(srt != 0){
                    msg.member.roles.add('599742981519704097')
                    msg.member.roles.add('712235494704152587')
                    msg.member.roles.remove('701366424123473921')
                    msg.member.roles.remove('717715673924763728')
                    giverole(msg,rank)
                    member.setNickname("["+rankname+"] (SRT) "+name);
                    
                }else{
                    roblox.getRankInGroup(5426538,id).then(function(mp){
                        if(mp != 0){
                            giverole(msg,rank)
                            msg.member.roles.add('599742981519704097')
                            msg.member.roles.add('701366424123473921')
                            msg.member.roles.remove('717715673924763728')
                            msg.member.roles.remove('712235494704152587') 
                            member.setNickname("["+rankname+"] (MP) "+name);
                            
                        }else{
                            roblox.getRankInGroup(5419545,id).then(function(etg){
                                if(etg != 0){
                                    giverole(msg,rank)
                                    msg.member.roles.add('599742981519704097')
                                    msg.member.roles.add('717715673924763728')
                                    msg.member.roles.remove('712235494704152587')
                                    msg.member.roles.remove('701366424123473921')
                                    member.setNickname("["+rankname+"] (ETG) "+name);
                                    
                                }else{
                                    giverole(msg,rank)
                                    msg.member.roles.add('599742981519704097')
                                    msg.member.roles.remove('599743152068493332') 
                                    msg.member.roles.remove('712235494704152587')
                                    msg.member.roles.remove('701366424123473921')
                                    msg.member.roles.remove('717715673924763728')
                                    member.setNickname("["+rankname+"] "+name);
                                    
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
