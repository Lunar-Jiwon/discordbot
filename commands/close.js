const {CommandInteraction, MessageEmbed}  = require('discord.js');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
module.exports = {
    name:'닫기',
    description:'질문이 완료되어 방을 닫습니다',
    /**
     * @param {CommandInteraction} interaction
     */
    async execute(interaction){
        const userid = (await interaction.channel.fetchStarterMessage()).content.split(",")[1].replace(/[^0-9]/g,"");
        if(interaction.channel.isThread()){
            if(userid == interaction.user.id || interaction.member.roles.cache.some(role => role.name === "관리자")){
                await interaction.channel.edit({name: `${interaction.channel.name.split("(")[0]} (답변완료)`});
                await interaction.reply({embeds:[new MessageEmbed().setTitle("질문 답변이 완료되었습니다").setDescription("답변이 완료되어 질문방을 보관합니다").setColor("#36f569")]});
                await delay(1000);
                return await interaction.channel.setArchived(true);
            }else{
                interaction.reply({content:`이 질문방은 <@${userid}>님의 소유입니다.`,ephemeral:true});
            }
        }else{
            interaction.reply({content:"질문방에서 사용이 가능한 명령어입니다",ephemeral:true});
        }
    }
}
