<template>
    <div class="chat-app">
        <div class="sidebar">
            <h2>Conversas</h2>
            <ul>
                <li v-for="(chat, index) in chats" :key="index" @click="selectChat(index)"
                    :class="{ active: index === selectedChatIndex }">
                    <div class="chat-item">
                        <img :src="chat.user.avatar" class="chat-avatar" :alt="chat.user.name" />
                        <div class="chat-details">
                            <span class="chat-name">{{ chat.user.name }}</span>
                            <span class="last-message">{{ chat.messages[chat.messages.length - 1].text }}</span>
                        </div>
                    </div>
                </li>
            </ul>
            <button class="back-button" v-if="!currentChat" @click="goBackToContact">Voltar</button>
        </div>
        <div class="content">
            <nav class="navbar" v-if="currentChat">
                <button class="back-button" @click="goBackToChats">Voltar</button>
                <div class="user-info">
                    <img :src="currentChat.user.avatar" class="avatar" :alt="currentChat.user.name" />
                    <div class="user-details">
                        <h3>{{ currentChat.user.name }}</h3>
                        <p v-if="currentChat.user.online" class="online">Online</p>
                        <p v-else class="offline">Offline</p>
                    </div>
                </div>
            </nav>
            <div v-if="currentChat" class="chat-container">
                <div class="messages">
                    <div v-for="(message, index) in currentChat.messages" :key="index" class="message-container"
                        :class="{ 'user-message': message.user, 'agent-message': !message.user }">
                        <div class="message" v-if="!message.file">{{ message.text }}</div>
                        <div v-if="message.file">
                            <a v-if="message.file.type === 'photo' || message.file.type === 'video'" :href="message.file.url" target="_blank">
                                <img v-if="message.file.type === 'photo'" :src="message.file.url" class="file-preview" @click="openFile(message.file.url)" />
                                <video v-else :src="message.file.url" class="file-preview" controls @click="openFile(message.file.url)"></video>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="input-container">
                    <div class="more-options">
                        <button @click="toggleOptionsMenu">+</button>
                        <div v-if="showOptionsMenu" class="options-menu">
                            <ul>
                                <li @click="selectOption('photo')">Foto</li>
                                <li @click="selectOption('video')">Vídeo</li>
                                <li @click="selectOption('document')">Documento</li>
                            </ul>
                        </div>
                    </div>
                    <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Digite sua mensagem..." class="message-input" />
                    <button @click="sendMessage" class="send-button">Enviar</button>
                    <input type="file" ref="fileInput" style="display: none;" @change="handleFileUpload" />
                </div>
            </div>
            <div v-else class="placeholder-container">
                <p class="placeholder-text">Selecione um chat para começar a conversar</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chats: [
                {
                    user: {
                        name: 'Usuário 1',
                        avatar: 'https://via.placeholder.com/50',
                        online: true
                    },
                    messages: [{ text: 'Olá! Como posso ajudar você hoje?', user: false }]
                },
                {
                    user: {
                        name: 'Usuário 2',
                        avatar: 'https://via.placeholder.com/50',
                        online: false
                    },
                    messages: [{ text: 'Oi! Preciso de ajuda com meu pedido.', user: false }]
                }
            ],
            selectedChatIndex: null,
            newMessage: '',
            showOptionsMenu: false
        };
    },
    computed: {
        currentChat() {
            return this.selectedChatIndex !== null ? this.chats[this.selectedChatIndex] : null;
        }
    },
    methods: {
        sendMessage() {
            if (this.newMessage.trim() !== '') {
                this.currentChat.messages.push({ text: this.newMessage, user: true });
                this.newMessage = '';
                setTimeout(() => {
                    this.currentChat.messages.push({ text: 'Vamos verificar isso para você.', user: false });
                }, 1000);
            }
        },
        selectChat(index) {
            this.selectedChatIndex = index;
        },
        goBackToChats() {
            this.selectedChatIndex = null;
        },
        goBackToContact() {
            this.$router.push('/FormularioContato');
        },
        exitChat() {
            this.selectedChatIndex = null;
        },
        toggleOptionsMenu() {
            this.showOptionsMenu = !this.showOptionsMenu;
        },
        selectOption(option) {
            this.fileType = option;
            this.$refs.fileInput.click();
            this.showOptionsMenu = false;
        },
        handleFileUpload(event) {
            const file = event.target.files[0];
            if (file) {
                const fileUrl = URL.createObjectURL(file);
                let fileType = '';
                if (file.type.includes('image')) {
                    fileType = 'photo';
                } else if (file.type.includes('video')) {
                    fileType = 'video';
                } else {
                    fileType = 'document';
                }
                this.currentChat.messages.push({ text: '', user: true, file: { type: fileType, url: fileUrl } });
            }
        },
        openFile(url) {
            window.open(url, '_blank');
        }
    }
};
</script>

<style scoped>
.chat-app {
    display: flex;
    font-family: 'Arial', sans-serif;
    color: #333;
    height: 100vh;
}

.sidebar {
    width: 270px;
    background-color: #060707;
    padding: 20px;
    overflow-y: auto;
}

.sidebar h2 {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 1.5em;
    color: #14b0c8;
}

.sidebar ul {
    list-style: none;
    padding: 0;
}

.sidebar li {
    padding: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 10px;
    margin-bottom: 10px;
    transition: background-color 0.3s;
}

.sidebar li:hover {
    background-color: #0888d8;
}

.sidebar li.active {
    background-color: #0078d4;
    color: white;
}

.chat-item {
    display: flex;
    align-items: center;
}

.chat-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
}

.chat-details {
    display: flex;
    flex-direction: column;
}

.chat-name {
    font-weight: bold;
    color: white;
}

.last-message {
    font-size: 0.8em;
    color: #bdc3c7;
}

.content {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
}

.navbar {
    background-color: #060707;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.back-button,
.exit-button {
    background: none;
    border: none;
    font-size: 1em;
    color: #14b0c8;
    cursor: pointer;
    position: absolute;
    left: 10px;
}

.user-info {
    display: flex;
    align-items: center;
    justify-content: center;
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
}

.user-details h3 {
    margin: 0;
    font-size: 1.2em;
    color: #14b0c8;
}

.online {
    margin: 0;
    color: #2ecc71;
    font-size: 0.8em;
}

.offline {
    margin: 0;
    color: #e74c3c;
    font-size: 0.8em;
}

.chat-container {
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: calc(100vh - 120px);
    border: none;
}

.messages {
    flex: 1;
    overflow-y: auto;
    margin-bottom: 20px;
}

.message-container {
    display: flex;
    margin-bottom: 10px;
    max-width: 70%;
    word-wrap: break-word;
}

.message-container.user-message {
    margin-left: auto;
    justify-content: flex-end;
}

.message-container.agent-message {
    justify-content: flex-start;
}

.message {
    padding: 10px 15px;
    border-radius: 10px;
}

.user-message .message {
    background-color: #0078d4;
    color: white;
}

.agent-message .message {
    background-color: #e5e5ea;
    color: black;
}

.file-preview {
    width: 100%;
    max-width: 200px;
    border-radius: 10px;
}

.input-container {
    display: flex;
    align-items: center;
    background-color: #f1f1f1;
    padding: 10px;
    border-radius: 20px;
    position: relative;
    margin-bottom: -50px;
}

.more-options {
    position: relative;
}

.more-options button {
    background: none;
    border: none;
    font-size: 1.5em;
    color: #333;
    cursor: pointer;
    padding: 0 10px;
}

.options-menu {
    position: absolute;
    bottom: 40px;
    left: 0;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1;
}

.options-menu ul {
    list-style: none;
    margin: 0;
    padding: 10px;
}

.options-menu ul li {
    padding: 10px;
    cursor: pointer;
}

.options-menu ul li:hover {
    background-color: #f1f1f1;
}

.message-input {
    flex: 1;
    border: none;
    padding: 10px;
    border-radius: 20px;
    margin: 0 10px;
}

.message-input:focus {
    outline: none;
}

.send-button {
    background-color: #0078d4;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    cursor: pointer;
}

.send-button:hover {
    background-color: #005bb5;
}

.placeholder-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background-color: #f1f1f1;
}

.placeholder-text {
    font-size: 1.2em;
    color: #666;
}
</style>
