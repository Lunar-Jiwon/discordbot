const {CommandInteraction,MessageActionRow,Modal,TextInputComponent } = require('discord.js');
module.exports = {
    name:"질문등록",
    description:"질문 내용을 등록합니다 (질문방에서 사용해주세요)",
    /**
     * @param {CommandInteraction} interaction
     */
    async execute(interaction){
        if(interaction.channel.isThread()) return interaction.reply({content:"쓰레드에서는 질문 명령어 사용이 불가능해요!",ephemeral:true})
        const modal = new Modal().setCustomId("createQuestion").setTitle("질문을 등록합니다");
        const questionTitleInput = new TextInputComponent().setCustomId('questionTitleInput').setLabel("질문의 제목을 입력해주세요").setStyle('SHORT').setRequired(true).setPlaceholder("여기에 질문 제목을 입력하세요").setMaxLength(20);
        const questionInput = new TextInputComponent().setCustomId('questionInput').setLabel("질문의 내용을 입력해주세요").setStyle('PARAGRAPH').setRequired(true).setPlaceholder("여기에 질문 상세내용을 입력하세요");
        const firstAction = new MessageActionRow().addComponents(questionTitleInput);
        const secondAction = new MessageActionRow().addComponents(questionInput);
        modal.addComponents(firstAction,secondAction);
        return await interaction.showModal(modal);
    }
}
