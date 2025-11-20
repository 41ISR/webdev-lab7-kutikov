import Button from "./Button"
import TextArea from "./TextArea"

const MessageField = () => {
    return <div className="create-message-section">
        <div className="container">
            <div className="create-message-card">
                <h2 className="create-message-title">Создать сообщение</h2>
                <form action="" className="create-message-form">
                    <TextArea />
                    <Button>Отправить</Button>
                </form>
            </div>
        </div>
    </div>
}

export default MessageField