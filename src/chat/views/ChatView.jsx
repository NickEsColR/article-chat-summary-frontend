import { Header, Message, Prompter } from "..";

export const ChatView = () => {
    return (
        <div className="d-flex flex-column text-grey bg-light" style={{height:"100vh"}}>
            <Header />
            <div className="overflow-auto text-center" style={{marginTop:"70px", marginBottom:"70px"}}>
                <Message role={"assistant"} content={"primero"}/>
                <Message role={"user"} content={"Pregunta del usuario"}/>
                <Message role={"assistant"} content={"Respuesta del bot"}/>
                <Message role={"assistant"} content={"Esto lo dice el bot"}/>
                <Message role={"user"} content={"Pregunta del usuario"}/>
                <Message role={"assistant"} content={"Respuesta del bot"}/>
                <Message role={"assistant"} content={"Esto lo dice el bot"}/>
                <Message role={"user"} content={"Pregunta del usuario"}/>
                <Message role={"assistant"} content={"Respuesta del bot"}/>
                <Message role={"assistant"} content={"Esto lo dice el bot"}/>
                <Message role={"user"} content={"Pregunta del usuario"}/>
                <Message role={"assistant"} content={"Respuesta del bot"}/>
                <Message role={"assistant"} content={"Esto lo dice el bot"}/>
                <Message role={"user"} content={"Pregunta del usuario"}/>
                <Message role={"assistant"} content={"Respuesta del bot"}/>
                <Message role={"assistant"} content={"Esto lo dice el bot"}/>
                <Message role={"user"} content={"Pregunta del usuario"}/>
                <Message role={"assistant"} content={"Respuesta del bot"}/>
                <Message role={"assistant"} content={"Esto lo dice el bot"}/>
                <Message role={"user"} content={"Pregunta del usuario"}/>
                <Message role={"assistant"} content={"Respuesta del bot"}/>
                <Message role={"assistant"} content={"Esto lo dice el bot"}/>
                <Message role={"user"} content={"Pregunta del usuario"}/>
                <Message role={"assistant"} content={"Respuesta del bot"}/>
                <Message role={"assistant"} content={"Esto lo dice el bot"}/>
                <Message role={"user"} content={"Pregunta del usuario"}/>
                <Message role={"assistant"} content={"Respuesta del bot"}/>
                <Message role={"assistant"} content={"Esto lo dice el bot"}/>
                <Message role={"user"} content={"Pregunta del usuario"}/>
                <Message role={"assistant"} content={"Respuesta del bot"}/>
                <Message role={"assistant"} content={"Esto lo dice el bot"}/>
                <Message role={"user"} content={"Pregunta del usuario"}/>
                <Message role={"assistant"} content={"Respuesta del bot"}/>
                <Message role={"assistant"} content={"Esto lo dice el bot"}/>
                <Message role={"user"} content={"Pregunta del usuario"}/>
                <Message role={"assistant"} content={"Respuesta del bot"}/>
                <Message role={"assistant"} content={"Esto lo dice el bot"}/>
                <Message role={"user"} content={"Pregunta del usuario"}/>
                <Message role={"assistant"} content={"Ulrtimo"}/>
            </div>
            <div style={{ position: "fixed", bottom: 0 }} className="col-7 offset-1">
                <Prompter />
            </div>
        </div>
    );
};
