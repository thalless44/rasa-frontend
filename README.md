## 🪐 rasa-frontend

Este projeto abriga os arquivos para a página web de interação com o chatbot.

Para ver o repositório do chatbot em si, acesse o repositório [rasa-project](https://github.com/ifscbot/rasa-project).

### Estrutura de arquivos

| **`/`**                  |                                                                                             |
|--------------------------|---------------------------------------------------------------------------------------------|
| **`index.html`**         | Contém o documento HTML para a página inicial do projeto.                                   |
| **`style.css`**          | Contém as regras CSS para estilização da página web.                                        |

### Como desenvolver

Primeiro, abra o projeto em um editor de código fonte e edite os arquivos da maneira necessária. Certifique-se de que a URL de acesso do chatbot no arquivo **`index.html`** (no parâmetro `socketUrl`) aponte para um [servidor do chatbot](https://github.com/ifscbot/rasa-project).

### Servir o website

Para servir o website, você pode usar um servidor web padrão como o embutido com uma instalação do Python. Para isso, acesse o diretório do projeto do seu Terminal e execute:

```bash
python3 -m http.server
```
